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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentStatus, Prices, GSTDetailsData, PlatformItem, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, OrderDetailsData, DPDetailsData, UserDetailsData, TrackingList, OrderBagArticle, OrderBrandName, BagGST, CurrentStatus, Identifier, FinancialBreakup, PlatformDeliveryAddress, BagConfigs, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBags, ShipmentPayments, ShipmentStatusData, FulfillingStore, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, ReturnConfig, Dimensions, Weight, Article, Brand, BagGSTDetails, ArticleDetails, EInvoicePortalDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, Attributes, Item, EInvoice, EinvoiceInfo, DebugInfo, LockData, BuyerDetails, ShipmentTimeStamp, Formatted, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, Dates, AffiliateBagDetails, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, ShippingInfo, BillingInfo, PaymentMethod, PaymentInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionSchedule, SeoDetail, CollectionImage, CollectionBanner, UserInfo, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Logo, Image, ProductPublished, ReturnConfigResponse, NetQuantityResponse, Product, ProductListingResponse, Trader, CustomOrder, ProductPublish, TaxIdentifier, TeaserTag, NetQuantity, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, Trader1, CompanyMeta, QuantityBase, Quantities, BrandMeta, ManufacturerResponse, PriceMeta, WeightResponse, ReturnConfig1, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, Trader2, CompanyMeta1, ArticleStoreResponse, Quantity, QuantitiesArticle, BrandMeta1, ManufacturerResponse1, PriceArticle, WeightResponse1, ReturnConfig2, DimensionResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, LocationIntegrationType, SellerPhoneNumber, UserSerializer2, ProductReturnConfigSerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, BulkBundleRestriction, PostOrder, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, Restrictions, CouponAuthor, RuleDefinition, Ownership, State, Validity, DisplayMetaDict, DisplayMeta, CouponDateMeta, CouponSchedule, CouponAction, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAuthor, CompareObject, ItemCriteria, Ownership1, PromotionAction, DiscountOffer, DiscountRule, Visibility, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, DisplayMeta1, PromotionSchedule, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, CartProductIdentifer, PromoMeta, Ownership2, AppliedPromotion, ProductPrice, ProductPriceInfo, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, ProductAvailability, CartProductInfo, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    aggregators?: any[];
    success: boolean;
    app_id: string;
    excluded_fields: string[];
    display_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    key: string;
    secret: string;
    config_type: string;
    is_active?: boolean;
    merchant_salt: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    app_id: string;
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
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    package_name?: string;
    code?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    code?: string;
    card_number?: string;
    card_brand?: string;
    display_name?: string;
    aggregator_name: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    name?: string;
    fynd_vpa?: string;
    logo_url?: PaymentModeLogo;
    card_token?: string;
    intent_app?: IntentApp[];
    card_type?: string;
    exp_year?: number;
    nickname?: string;
    merchant_code?: string;
    intent_flow?: boolean;
    timeout?: number;
    card_name?: string;
    card_issuer?: string;
    card_reference?: string;
    display_priority?: number;
    exp_month?: number;
    remaining_limit?: number;
    cod_limit_per_order?: number;
    card_id?: string;
    cod_limit?: number;
    retry_count?: number;
    card_fingerprint?: string;
    intent_app_error_list?: string[];
    compliant_with_tokenisation_guidelines?: boolean;
    expired?: boolean;
    card_brand_image?: string;
    card_isin?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    save_card?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    anonymous_enable?: boolean;
    name: string;
    display_priority: number;
    list?: PaymentModeList[];
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    customers: any;
    more_attributes: any;
    unique_transfer_no: any;
    payouts_aggregators: any[];
    is_active: boolean;
    is_default: boolean;
    transfer_type: string;
};
type PayoutBankDetails = {
    branch_name?: string;
    account_holder?: string;
    bank_name?: string;
    account_no?: string;
    country?: string;
    ifsc_code: string;
    pincode?: number;
    state?: string;
    city?: string;
    account_type: string;
};
type PayoutRequest = {
    unique_external_id: string;
    aggregator: string;
    users: any;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    transfer_type: string;
};
type PayoutResponse = {
    aggregator: string;
    success: boolean;
    payment_status: string;
    users: any;
    unique_transfer_no: string;
    is_active: boolean;
    bank_details: any;
    created: boolean;
    payouts: any;
    transfer_type: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
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
    message: string;
    is_verified_flag?: boolean;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    branch_name: string;
    bank_name: string;
    account_holder: string;
    account_no: string;
    ifsc_code: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    bank_name: string;
    branch_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    mobile?: string;
    address: string;
    beneficiary_id: string;
    subtitle: string;
    display_name: string;
    id: number;
    is_active: boolean;
    modified_on: string;
    branch_name?: string;
    created_on: string;
    comment?: string;
    delights_user_name?: string;
    transfer_mode: string;
    title: string;
    bank_name: string;
    email: string;
    account_holder: string;
    account_no: string;
    ifsc_code: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    name?: string;
    mode: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type CODdata = {
    limit: number;
    user_id: string;
    remaining_limit: number;
    is_active: boolean;
    usages: number;
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
    message: string;
    success: boolean;
};
type ShipmentStatus = {
    title: string;
    hex_code: string;
    status: string;
    ops_status: string;
    actual_status: string;
};
type Prices = {
    discount?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
    price_effective?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    cod_charges?: number;
    fynd_credits?: number;
    price_marked?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    cashback_applied?: number;
    cashback?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code: string;
    gst_fee: number;
};
type PlatformItem = {
    can_cancel?: boolean;
    id?: number;
    can_return?: boolean;
    l1_category?: string[];
    l3_category?: number;
    l3_category_name?: string;
    department_id?: number;
    code?: string;
    name?: string;
    images?: string[];
    color?: string;
    size?: string;
    image?: string[];
};
type BagUnit = {
    can_cancel?: boolean;
    can_return?: boolean;
    prices?: Prices;
    shipment_id: string;
    item_quantity: number;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    status: any;
    ordering_channel: string;
    bag_id: number;
    item?: PlatformItem;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    mobile?: string;
    uid?: number;
    avis_user_id?: string;
    first_name?: string;
    email?: string;
    last_name?: string;
    name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
};
type ShipmentItem = {
    sla?: any;
    shipment_status?: ShipmentStatus;
    prices?: Prices;
    id: string;
    bags?: BagUnit[];
    total_shipments_in_order: number;
    total_bags_count: number;
    application?: any;
    payment_methods?: any;
    created_at: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    channel?: any;
    shipment_created_at: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    user?: UserDataInfo;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    type: string;
    text: string;
    options?: FilterInfoOption[];
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type BagStateMapper = {
    display_name: string;
    bs_id: number;
    is_active?: boolean;
    name: string;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
    app_state_name?: string;
    app_facing?: boolean;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    updated_at?: string;
    reasons?: any[];
    shipment_id?: string;
    delivery_awb_number?: string;
    forward?: boolean;
    state_id?: number;
    state_type?: string;
    status: string;
    created_at?: string;
    app_display_name?: string;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    bag_id?: number;
    bsh_id?: number;
    store_id?: number;
};
type OrderDetailsData = {
    order_date?: string;
    cod_charges?: string;
    fynd_order_id: string;
    order_value?: string;
    affiliate_id?: string;
    tax_details?: any;
    ordering_channel?: string;
    source?: string;
    ordering_channel_logo?: any;
};
type DPDetailsData = {
    id?: number;
    awb_no?: string;
    eway_bill_id?: string;
    pincode?: string;
    name?: string;
    country?: string;
    track_url?: string;
    gst_tag?: string;
};
type UserDetailsData = {
    email?: string;
    city: string;
    pincode: string;
    name: string;
    address: string;
    country: string;
    state: string;
    phone: string;
};
type TrackingList = {
    is_passed?: boolean;
    time?: string;
    text: string;
    status: string;
    is_current?: boolean;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type OrderBrandName = {
    company?: string;
    logo: string;
    id: number;
    modified_on?: string;
    created_on: string;
    brand_name: string;
};
type BagGST = {
    value_of_good?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
};
type CurrentStatus = {
    bag_state_mapper?: BagStateMapper;
    updated_at?: number;
    delivery_awb_number?: string;
    shipment_id?: string;
    state_id?: number;
    state_type?: string;
    created_at?: string;
    status?: string;
    current_status_id: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    bag_id?: number;
    store_id?: number;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    value_of_good: number;
    price_marked: number;
    transfer_price: number;
    gst_tax_percentage: number;
    size: string;
    price_effective: number;
    refund_credit: number;
    promotion_effective_discount: number;
    fynd_credits: number;
    brand_calculated_amount: number;
    total_units: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    gst_tag: string;
    identifiers: Identifier;
    cod_charges: number;
    gst_fee: number;
    coupon_value: number;
    cashback_applied: number;
    discount: number;
    tax_collected_at_source?: number;
    item_name: string;
    coupon_effective_discount: number;
    hsn_code: string;
    amount_paid_roundoff?: number;
    amount_paid: number;
    delivery_charge: number;
};
type PlatformDeliveryAddress = {
    address2?: string;
    landmark?: string;
    longitude?: number;
    email?: string;
    city?: string;
    address1?: string;
    address_type?: string;
    address_category?: string;
    version?: string;
    pincode?: string;
    latitude?: number;
    country?: string;
    created_at?: string;
    updated_at?: string;
    contact_person?: string;
    state?: string;
    area?: string;
    phone?: string;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    amount?: number;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promotion_type?: string;
    promotion_name?: string;
    promo_id?: string;
};
type OrderBags = {
    line_number?: number;
    article?: OrderBagArticle;
    entity_type?: string;
    can_cancel?: boolean;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    current_status?: CurrentStatus;
    parent_promo_bags?: any;
    item?: PlatformItem;
    quantity?: number;
    seller_identifier?: string;
    display_name?: string;
    prices?: Prices;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    bag_id: number;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    applied_promos?: AppliedPromos[];
    identifier?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type ShipmentStatusData = {
    id?: number;
    bag_list?: string[];
    shipment_id?: string;
    created_at?: string;
    status?: string;
};
type FulfillingStore = {
    phone: string;
    id: number;
    store_name: string;
    city: string;
    meta: any;
    code: string;
    pincode: string;
    address: string;
    country: string;
    contact_person: string;
    state: string;
    fulfillment_channel: string;
};
type ShipmentInfoResponse = {
    vertical?: string;
    order_created_time?: string;
    bag_status_history?: BagStatusHistory[];
    is_fynd_coupon: boolean;
    shipment_images?: string[];
    order_type: string;
    beneficiary_details?: boolean;
    forward_order_status?: any[];
    operational_status?: string;
    order?: OrderDetailsData;
    user_agent?: string;
    journey_type?: string;
    email_id: string;
    dp_details?: DPDetailsData;
    due_date?: string;
    escalation?: any;
    is_invoiced: boolean;
    is_packaging_order: boolean;
    order_status: any;
    invoice: any;
    can_cancel?: boolean;
    child_nodes?: string[];
    payment_mode?: string;
    pay_button?: string;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    kirana_store_id?: string;
    shipment_id: string;
    picked_date?: string;
    forward_tracking_list?: any[];
    delivery_status: any[];
    ordering_store: any;
    refund_details?: any;
    total_bags?: number;
    bank_data?: any;
    replacement_details?: string;
    can_break: string;
    platform_logo: boolean;
    secured_delivery_flag?: string;
    shipment_status?: string;
    user_id: string;
    prices?: Prices;
    delivery_details?: UserDetailsData;
    can_return?: boolean;
    delivery_slot?: any;
    is_not_fynd_source: boolean;
    enable_dp_tracking?: boolean;
    priority_text?: string;
    affiliate_shipment_id: string;
    status_progress: number;
    refund_text?: string;
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    items: any[];
    forward_shipment_status?: any[];
    billing_details?: UserDetailsData;
    total_items?: number;
    company: any;
    tracking_url: string;
    user_info?: any;
    enable_tracking?: boolean;
    mid?: string;
    coupon?: any;
    bags?: OrderBags[];
    go_green?: boolean;
    is_pdsr?: string;
    credit_note_id: string;
    lock_status: string;
    payments?: ShipmentPayments;
    status?: ShipmentStatusData;
    fyndstore_emp: any;
    current_shipment_status: any;
    fulfilling_store?: FulfillingStore;
    is_fynd_store?: string;
};
type OrderMeta = {
    currency_symbol?: string;
    payment_type?: string;
    order_platform?: string;
    staff?: any;
    order_type?: string;
    order_child_entities?: string[];
    order_tags?: any[];
    files?: any[];
    cart_id?: number;
    extra_meta?: any;
    employee_id?: number;
    ordering_store?: number;
    customer_note?: string;
    mongo_cart_id?: number;
    comment?: string;
};
type OrderDict = {
    order_date: string;
    prices?: Prices;
    fynd_order_id: string;
    meta?: OrderMeta;
    payment_methods?: any;
};
type PlatformShipment = {
    vertical?: string;
    bag_status_history?: BagStatusHistory[];
    shipment_images?: string[];
    operational_status?: string;
    order?: OrderDetailsData;
    user_agent?: string;
    journey_type?: string;
    dp_details?: DPDetailsData;
    payment_mode?: string;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    shipment_id: string;
    picked_date?: string;
    total_bags?: number;
    platform_logo?: string;
    shipment_status?: string;
    prices?: Prices;
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    enable_dp_tracking?: boolean;
    priority_text?: string;
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    billing_details?: UserDetailsData;
    total_items?: number;
    coupon?: any;
    bags?: OrderBags[];
    payments?: ShipmentPayments;
    status?: ShipmentStatusData;
    fulfilling_store?: FulfillingStore;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    total_items?: number;
    value?: string;
    index?: number;
    text?: string;
    actions?: any[];
};
type SuperLane = {
    total_items?: number;
    text: string;
    options?: SubLane[];
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
    order_id?: string;
    order_created_time?: string;
    payment_mode?: string;
    meta?: any;
    order_value?: number;
    shipments?: PlatformShipment[];
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
};
type OrderListingResponse = {
    lane?: string;
    success?: boolean;
    message?: string;
    total_count?: number;
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
    options?: Options[];
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    awb?: string;
    reason?: string;
    raw_status?: string;
    meta?: any;
    account_name?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
    status?: string;
    updated_at?: string;
    updated_time?: string;
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
    report_id?: string;
    display_name?: string;
    report_type?: string;
    report_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    request_details?: any;
    s3_key?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    item_id?: string;
    article_id?: string;
    company_id?: string;
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
    success?: boolean;
    trace_id?: string;
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    invoice?: any;
    store_name?: string;
    store_code?: string;
    company_id?: string;
    invoice_status?: string;
    data?: any;
    label?: any;
    store_id?: string;
    do_invoice_label_generated: boolean;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    namespace?: string;
    operation?: string;
    file_name?: string;
    upload?: FileUploadResponse;
    tags?: string[];
    cdn?: URL;
    content_type?: string;
    method?: string;
    file_path?: string;
    size?: number;
};
type bulkListingData = {
    file_name?: string;
    uploaded_on?: string;
    processing_shipments?: string[];
    id?: string;
    total?: number;
    store_code?: string;
    store_id?: number;
    excel_url?: string;
    batch_id?: string;
    successful?: number;
    store_name?: string;
    user_name?: string;
    failed_shipments?: any[];
    successful_shipments?: any[];
    failed?: number;
    user_id?: string;
    company_id?: number;
    processing?: number;
    status?: string;
};
type BulkListingPage = {
    current?: number;
    total?: number;
    type?: string;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
    page?: BulkListingPage;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    lane?: string;
    stores?: string;
    sales_channels?: string;
    store_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
    sales_channel_name?: string;
    dp_name?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    filters?: ManifestFilter;
    company_id?: number;
    is_active?: boolean;
    created_at?: string;
    status?: string;
    created_by?: string;
};
type ManifestPage = {
    size?: string;
    current?: string;
    total?: number;
    type?: string;
    has_next?: boolean;
    has_previous?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    awb?: string;
    order_id?: string;
    item_qty?: number;
    shipment_id?: string;
    invoice_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
type ManifestDetailMeta = {
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    uid?: number;
    manifest_id?: string;
    filters?: ManifestFilter;
    user_id?: number;
    meta?: ManifestDetailMeta;
    id?: number;
    company_id?: number;
    is_active?: boolean;
    created_at?: string;
    status?: string;
    created_by?: string;
};
type ManifestDetailResponse = {
    page?: ManifestPage;
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
    manifest_details?: ManifestDetail[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
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
    batch_id?: string;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    processing_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    success?: string;
    failed_records?: string[];
    user_id?: string;
    message?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    error?: string[];
};
type B2BPODetails = {
    po_tax_amount?: number;
    po_line_amount?: number;
    docker_number?: string;
    item_base_price?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Dimensions = {
    width?: number;
    height?: number;
    unit?: string;
    is_default?: boolean;
    length?: number;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    return_config?: ReturnConfig;
    uid: string;
    is_set?: boolean;
    a_set?: any;
    raw_meta?: any;
    seller_identifier: string;
    _id: string;
    code?: string;
    child_details?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    identifiers: Identifier;
    size: string;
    esp_modified?: any;
};
type Brand = {
    credit_note_allowed?: boolean;
    company: string;
    logo?: string;
    pickup_location?: string;
    brand_id: number;
    modified_on?: number;
    invoice_prefix?: string;
    created_on?: number;
    credit_note_expiry_days?: number;
    is_virtual_invoice?: boolean;
    brand_name: string;
    script_last_ran?: string;
    start_date?: string;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    sgst_tax_percentage: number;
    value_of_good: number;
    igst_tax_percentage: number;
    hsn_code_id: string;
    sgst_gst_fee: string;
    hsn_code: string;
    brand_calculated_amount: number;
    igst_gst_fee: string;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    gst_fee: number;
    cgst_gst_fee: string;
    gst_tag: string;
    cgst_tax_percentage: number;
    gst_tax_percentage: number;
};
type ArticleDetails = {
    status?: any;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type Document = {
    value: string;
    ds_type: string;
    legal_name: string;
    verified: boolean;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
    username?: string;
    user?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    display_name: string;
    stage: string;
    product_return_config?: any;
    timing?: any[];
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
};
type StoreAddress = {
    address2?: string;
    landmark?: string;
    city: string;
    version?: string;
    contact_person: string;
    state: string;
    address_category: string;
    latitude: number;
    country: string;
    updated_at: string;
    longitude: number;
    email?: string;
    address1: string;
    created_at: string;
    phone: string;
    country_code: string;
    address_type: string;
    pincode: number;
    area?: string;
};
type Store = {
    s_id: string;
    address2?: string;
    meta: StoreMeta;
    city: string;
    is_enabled_for_recon?: boolean;
    contact_person: string;
    store_email: string;
    state: string;
    order_integration_id?: string;
    store_address_json?: StoreAddress;
    brand_id?: any;
    is_active?: boolean;
    latitude: number;
    country: string;
    location_type: string;
    login_username: string;
    store_active_from?: string;
    updated_at?: string;
    longitude: number;
    alohomora_user_id?: number;
    is_archived?: boolean;
    brand_store_tags?: string[];
    vat_no?: string;
    address1: string;
    company_id: number;
    code?: string;
    name: string;
    created_at: string;
    packaging_material_count?: number;
    parent_store_id?: number;
    phone: number;
    mall_name?: string;
    mall_area?: string;
    pincode: string;
    fulfillment_channel: string;
};
type Attributes = {
    essential?: string;
    primary_material?: string;
    name?: string;
    gender?: string[];
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    brand_name?: string;
    primary_color_hex?: string;
};
type Item = {
    meta?: any;
    l1_category?: string[];
    l3_category?: number;
    l3_category_name?: string;
    item_id: number;
    color?: string;
    l2_category?: string[];
    branch_url?: string;
    size: string;
    can_cancel?: boolean;
    brand: string;
    brand_id: number;
    attributes: Attributes;
    gender?: string;
    l1_category_id?: number;
    last_updated_at?: string;
    can_return?: boolean;
    code?: string;
    name: string;
    l2_category_id?: number;
    department_id?: number;
    slug_key: string;
    webstore_product_url?: string;
    image: string[];
};
type EInvoice = {
    irn?: string;
    error_code?: string;
    acknowledge_date?: string;
    error_message?: string;
    signed_invoice?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    city: string;
    pincode: number;
    name: string;
    address: string;
    gstin: string;
    state: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentMeta = {
    same_store_available: boolean;
    box_type?: string;
    order_type?: string;
    return_awb_number?: string;
    return_details?: any;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    bag_weight?: any;
    lock_data?: LockData;
    shipment_volumetric_weight?: number;
    return_affiliate_shipment_id?: string;
    external?: any;
    auto_trigger_dp_assignment_acf: boolean;
    weight: number;
    awb_number?: string;
    ewaybill_info?: any;
    packaging_name?: string;
    dp_options?: any;
    return_store_node?: number;
    shipment_weight?: number;
    store_invoice_updated_date?: string;
    fulfilment_priority_text?: string;
    marketplace_store_id?: string;
    forward_affiliate_order_id?: string;
    dp_id?: string;
    dp_sort_key?: string;
    b2b_buyer_details?: BuyerDetails;
    timestamp?: ShipmentTimeStamp;
    assign_dp_from_sb?: boolean;
    return_affiliate_order_id?: string;
    po_number?: string;
    formatted?: Formatted;
};
type PDFLinks = {
    label_pos?: string;
    invoice?: string;
    label_a6?: string;
    b2b?: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice_a4?: string;
    invoice_pos?: string;
    po_invoice?: string;
    invoice_type: string;
    invoice_a6?: string;
    label?: string;
    label_type: string;
};
type AffiliateMeta = {
    size_level_total_qty?: number;
    employee_discount?: number;
    coupon_code?: string;
    box_type?: string;
    loyalty_discount?: number;
    due_date?: string;
    channel_order_id?: string;
    order_item_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    is_priority?: boolean;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type BagDetailsPlatformResponse = {
    bag_status_history?: BagStatusHistory;
    b_id: number;
    line_number?: number;
    meta?: BagMeta;
    article: Article;
    tags?: string[];
    operational_status?: string;
    journey_type: string;
    entity_type?: string;
    b_type?: string;
    brand: Brand;
    bag_status: BagStatusHistory[];
    current_status: BagStatusHistory;
    gst_details: BagGSTDetails;
    reasons?: any[];
    parent_promo_bags?: any;
    shipment_id?: string;
    article_details?: ArticleDetails;
    ordering_store?: Store;
    item: Item;
    affiliate_details?: AffiliateDetails;
    quantity?: number;
    display_name?: string;
    seller_identifier?: string;
    prices: Prices;
    restore_coupon?: boolean;
    financial_breakup: FinancialBreakup[];
    dates?: Dates;
    affiliate_bag_details: AffiliateBagDetails;
    restore_promos?: any;
    qc_required?: any;
    no_of_bags_order?: number;
    applied_promos?: any[];
    identifier?: string;
    original_bag_list?: number[];
    current_operational_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    bag_update_time?: number;
    order_integration_id?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    page_type: string;
    item_total: number;
    size: number;
    has_next: boolean;
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
    error?: string;
    status?: number;
    shipment_id?: string;
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
    affiliate_id?: string;
    reason_ids?: number[];
    mongo_article_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    item_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    bag_id?: number;
    set_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_order_id?: string;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    shipment_id?: string;
    status?: string;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    platform_id?: string;
    description?: string;
    id: number;
    title?: string;
    logo_url?: string;
    from_datetime?: string;
    created_at?: string;
    company_id?: number;
    platform_name?: string;
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
type ProductsReasonsFilters = {
    line_number?: number;
    identifier?: string;
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
    line_number?: number;
    identifier?: string;
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
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    exception?: string;
    final_state?: any;
    stack_trace?: string;
    message?: string;
    status?: number;
    meta?: any;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    address2?: string;
    city: string;
    country: string;
    state: string;
    last_name: string;
    phone: number;
    mobile: number;
    first_name: string;
    pincode: string;
    address1?: string;
    email: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    affiliate_meta: any;
    fynd_store_id: string;
    transfer_price: number;
    unit_price: number;
    price_marked: number;
    delivery_charge: number;
    modified_on: string;
    identifier: any;
    item_size: string;
    hsn_code_id: string;
    company_id: number;
    seller_identifier: string;
    affiliate_store_id: string;
    item_id: number;
    pdf_links?: MarketPlacePdf;
    discount: number;
    _id: string;
    store_id: number;
    amount_paid: number;
    sku: string;
    avl_qty: number;
    quantity: number;
    price_effective: number;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    attributes: any;
    weight: any;
    dimension: any;
    brand_id: number;
    _id: string;
    category: any;
    quantity: number;
};
type ShipmentDetails = {
    shipments: number;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    box_type?: string;
    meta?: any;
    dp_id?: number;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    source: string;
    to_pincode: string;
    journey: string;
    action: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    location_details?: LocationDetails;
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    delivery_charges: number;
    user: UserData;
    bags: AffiliateBag[];
    coupon?: string;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    items: any;
    billing_address: OrderUser;
    discount: number;
    affiliate_order_id?: string;
    shipment?: ShipmentData;
    cod_charges: number;
    order_value: number;
    payment_mode: string;
    payment?: any;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    token: string;
    description?: string;
    name: string;
    id: string;
    created_at: string;
    secret: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
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
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    create_user?: boolean;
    affiliate: Affiliate;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
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
    description: string;
    slug: string;
    id: number;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    l2_detail?: string;
    ticket_id?: string;
    createdat: string;
    ticket_url?: string;
    message: string;
    l3_detail?: string;
    type: string;
    l1_detail?: string;
    bag_id?: number;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    order_id: string;
    customer_name: string;
    phone_number: number;
    brand_name: string;
    country_code: string;
    shipment_id: number;
    message: string;
    payment_mode: string;
    amount_paid: number;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    shipment_id?: string;
    status?: string;
    meta: Meta;
    bag_list?: number[];
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
    name: string;
    amount: any;
    rate: number;
    breakup?: any[];
};
type Charge = {
    code?: string;
    name: string;
    tax?: Tax;
    type: string;
    amount: any;
};
type LineItem = {
    charges?: Charge[];
    seller_identifier: string;
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
    external_line_id?: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    external_shipment_id?: string;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
    location_id: number;
};
type ShippingInfo = {
    title?: string;
    address_type?: string;
    country: string;
    last_name?: string;
    house_no?: string;
    alternate_mobile_number?: string;
    country_code?: string;
    customer_code?: string;
    alternate_email?: string;
    pincode: string;
    state_code?: string;
    middle_name?: string;
    state: string;
    external_customer_code?: string;
    gender?: string;
    primary_email: string;
    address1: string;
    address2?: string;
    floor_no?: string;
    slot?: any[];
    shipping_type?: string;
    city: string;
    primary_mobile_number: string;
    geo_location?: any;
    landmark?: string;
    first_name: string;
};
type BillingInfo = {
    title?: string;
    country: string;
    last_name?: string;
    house_no?: string;
    alternate_mobile_number?: string;
    country_code?: string;
    customer_code?: string;
    alternate_email?: string;
    pincode: string;
    state_code?: string;
    middle_name?: string;
    state: string;
    external_customer_code?: string;
    gender?: string;
    primary_email: string;
    address1: string;
    address2?: string;
    floor_no?: string;
    city: string;
    primary_mobile_number: string;
    first_name: string;
};
type PaymentMethod = {
    name: string;
    transaction_data?: any;
    collect_by: string;
    refund_by: string;
    mode: string;
    meta?: any;
    amount: number;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type CreateOrderAPI = {
    shipments: Shipment[];
    charges?: Charge[];
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    external_order_id?: string;
    tax_info?: TaxInfo;
    meta?: any;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    code?: string;
    request_id?: string;
    exception?: string;
    info?: any;
    stack_trace?: string;
    message: string;
    status: number;
    meta?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    logo_url?: any;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
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
    start_date: string;
    end_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    result?: any;
    uid?: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type AutocompletePageAction = {
    type?: string;
    query?: any;
    url?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: AutocompleteResult[];
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
    results?: any[];
    app_id?: string;
    _custom_json?: any;
    words?: string[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    max_quantity: number;
    auto_select?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    slug: string;
    created_by?: any;
    is_active: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    company_id?: number;
    modified_on?: string;
    id?: string;
    meta?: any;
    name: string;
    logo?: string;
    modified_by?: any;
    choice: string;
    created_on?: string;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    slug: string;
    created_by?: any;
    is_active: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    company_id?: number;
    modified_on?: string;
    meta?: any;
    name: string;
    logo?: string;
    modified_by?: any;
    choice: string;
    created_on?: string;
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    slug: string;
    is_active: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    company_id?: number;
    modified_on?: string;
    meta?: any;
    name: string;
    logo?: string;
    modified_by?: any;
    choice: string;
    same_store_assignment?: boolean;
};
type Price = {
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    max_effective?: number;
    currency?: string;
};
type LimitedProductData = {
    slug?: string;
    identifier?: any;
    attributes?: any;
    country_of_origin?: string;
    price?: any;
    images?: string[];
    sizes?: string[];
    name?: string;
    uid?: number;
    quantity?: number;
    short_description?: string;
    item_code?: string;
};
type Size = {
    value?: string;
    quantity?: number;
    is_available?: boolean;
    display?: string;
};
type GetProducts = {
    allow_remove?: boolean;
    price?: Price;
    product_details?: LimitedProductData;
    sizes?: Size[];
    max_quantity?: number;
    auto_select?: boolean;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    slug?: string;
    is_active?: boolean;
    products?: GetProducts[];
    page_visibility?: string[];
    company_id?: number;
    meta?: any;
    name?: string;
    logo?: string;
    choice?: string;
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_by?: any;
    image?: string;
    brand_id?: number;
    tag?: string;
    company_id?: number;
    guide?: Guide;
    created_on?: string;
    modified_on?: string;
    id?: string;
    name: string;
    modified_by?: any;
    subtitle?: string;
    active?: boolean;
    description?: string;
    title: string;
};
type SizeGuideResponse = {
    created_by?: any;
    guide?: any;
    brand_id?: number;
    tag?: string;
    company_id?: number;
    modified_on?: string;
    id?: string;
    name?: string;
    modified_by?: any;
    subtitle?: string;
    active?: boolean;
    created_on?: string;
    title?: string;
};
type MetaFields = {
    value: any;
    key: any;
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
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
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
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    next: number;
    has_next: boolean;
    total_count: number;
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
    slug?: string;
    display_type: string;
    is_active: boolean;
    priority: number;
    unit?: string;
    name: string;
    logo?: string;
    key?: string;
};
type AppConfigurationDetail = {
    slug: string;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    app_id: string;
    priority: number;
    name?: string;
    is_default: boolean;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    default_key: string;
    is_active: boolean;
    app_id: string;
    priority: number;
    name?: string;
    is_default: boolean;
    logo?: string;
    key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
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
    compare?: any;
    variant?: any;
    similar?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    map?: any;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    priority: number;
    name?: string;
    display_name?: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    priority: number;
    name?: string;
    logo?: string;
    key: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
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
    display_type: string;
    size: ProductSize;
    is_active: boolean;
    priority: number;
    name: string;
    logo?: string;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    is_active: boolean;
    priority: number;
    logo?: string;
    title?: string;
    subtitle?: string;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    created_by?: any;
    listing?: ConfigurationListing;
    created_on?: string;
    app_id: string;
    config_id?: string;
    modified_on?: string;
    id?: string;
    type?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_by?: any;
    listing?: ConfigurationListing;
    created_on?: string;
    app_id: string;
    config_id?: string;
    modified_on?: string;
    type?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    config_id?: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersValue = {
    query_format?: string;
    selected_max?: number;
    selected_min?: number;
    min?: number;
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
    display: string;
    count?: number;
    value: any;
    is_selected: boolean;
    display_format?: string;
};
type ProductFiltersKey = {
    operators?: string[];
    kind?: string;
    name: string;
    logo?: string;
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
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
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
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    cron?: any;
    meta?: any;
    uid?: string;
    slug?: string;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    badge?: any;
    logo?: Media1;
    type?: string;
    allow_sort?: boolean;
    action?: Action;
    description?: string;
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
type GetCollectionListingResponse = {
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    cron?: string;
    duration?: number;
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
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    sort_on?: string;
    visible_facets_keys?: string[];
    priority?: number;
    _custom_json?: any;
    name: string;
    is_visible?: boolean;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    published?: boolean;
    banners: CollectionBanner;
    meta?: any;
    tags?: string[];
    modified_by?: UserInfo;
    slug: string;
    created_by?: UserInfo;
    is_active?: boolean;
    app_id: string;
    badge?: CollectionBadge;
    _locale_language?: any;
    logo: CollectionImage;
    type: string;
    allow_sort?: boolean;
    description?: string;
};
type CollectionCreateResponse = {
    sort_on?: string;
    visible_facets_keys?: string[];
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    cron?: any;
    meta?: any;
    slug?: string;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    badge?: any;
    logo?: BannerImage;
    type?: string;
    allow_sort?: boolean;
    description?: string;
};
type CollectionDetailResponse = {
    visible_facets_keys?: string[];
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    cron?: any;
    meta?: any;
    uid?: string;
    slug?: string;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    badge?: any;
    logo?: Media1;
    type?: string;
    allow_sort?: boolean;
    description?: string;
};
type UpdateCollection = {
    sort_on?: string;
    visible_facets_keys?: string[];
    priority?: number;
    _custom_json?: any;
    name?: string;
    is_visible?: boolean;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    published?: boolean;
    banners?: CollectionBanner;
    meta?: any;
    tags?: string[];
    modified_by?: UserInfo;
    slug?: string;
    is_active?: boolean;
    badge?: CollectionBadge;
    _locale_language?: any;
    logo?: CollectionImage;
    type?: string;
    allow_sort?: boolean;
    description?: string;
};
type ProductBrand = {
    uid?: number;
    logo?: Media1;
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
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    attributes?: any;
    similars?: string[];
    item_type?: string;
    name?: string;
    description?: string;
    sellable?: boolean;
    uid?: number;
    highlights?: string[];
    item_code?: string;
    rating_count?: number;
    slug: string;
    brand?: ProductBrand;
    discount?: string;
    type?: string;
    medias?: Media1[];
    tryouts?: string[];
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    image_nature?: string;
    rating?: number;
    teaser_tag?: any;
    short_description?: string;
    promo_meta?: any;
    color?: string;
    has_variant?: boolean;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
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
    total_sizes?: number;
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    available_articles?: number;
    total_articles?: number;
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
    brand_ids?: number[];
    company_id?: number;
    store_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    platform?: string;
};
type CompanyOptIn = {
    created_by?: any;
    brand_ids: number[];
    company_id: number;
    modified_on: number;
    store_ids: number[];
    enabled: boolean;
    modified_by?: any;
    opt_level: string;
    created_on: number;
    platform: string;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    company_type?: string;
    business_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    total_article?: number;
    brand_name?: string;
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
    address?: any;
    company_id?: number;
    store_code?: string;
    additional_contacts?: any[];
    modified_on?: string;
    name?: string;
    uid?: number;
    display_name?: string;
    store_type?: string;
    manager?: any;
    created_on?: string;
    timing?: any;
    documents?: any[];
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    format?: string;
    type: string;
    allowed_values?: string[];
    multi?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    slug?: string;
    filters?: AttributeMasterFilter;
    departments?: string[];
    id?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    schema?: AttributeMaster;
    details?: AttributeMasterDetails;
    logo?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    errors?: any;
    code?: string;
    meta?: any;
    message?: string;
    status?: number;
};
type UserSerializer = {
    uid?: string;
    _id?: string;
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetDepartment = {
    slug?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    page_no?: number;
    is_active?: boolean;
    item_type?: string;
    priority_order?: number;
    modified_on?: string;
    name?: string;
    uid?: number;
    logo?: string;
    modified_by?: UserSerializer;
    page_size?: number;
    search?: string;
    created_on?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    meta?: any;
    message?: string;
    status?: number;
};
type DepartmentCreateUpdate = {
    slug?: string;
    synonyms?: string[];
    is_active?: boolean;
    priority_order: number;
    _custom_json?: any;
    name: string;
    uid?: number;
    tags?: string[];
    logo: string;
    platforms?: any;
    _cls?: string;
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
    contact?: string;
    user_id: string;
};
type DepartmentModel = {
    slug?: any;
    created_by?: UserDetail;
    synonyms?: any[];
    is_active?: boolean;
    priority_order: number;
    verified_on?: string;
    modified_on: string;
    _custom_json?: any;
    name: any;
    uid?: number;
    _id?: any;
    logo: string;
    modified_by?: UserDetail;
    created_on: string;
    _cls?: any;
    verified_by?: UserDetail;
};
type ProductTemplate = {
    slug: string;
    created_by?: any;
    attributes?: string[];
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    created_on?: string;
    departments?: string[];
    modified_on?: string;
    description?: string;
    name?: string;
    logo?: string;
    modified_by?: any;
    categories?: string[];
    is_expirable: boolean;
    is_physical: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    trader?: any;
    item_type?: any;
    name?: any;
    no_of_boxes?: any;
    category_slug?: any;
    country_of_origin?: any;
    custom_order?: any;
    tags?: any;
    highlights?: any;
    command?: any;
    item_code?: any;
    slug?: any;
    media?: any;
    size_guide?: any;
    variants?: any;
    multi_size?: any;
    is_active?: any;
    hsn_code?: any;
    trader_type?: any;
    currency?: any;
    is_dependent?: any;
    product_publish?: any;
    brand_uid?: any;
    sizes?: any;
    teaser_tag?: any;
    short_description?: any;
    return_config?: any;
    product_group_tag?: any;
    description?: any;
};
type GlobalValidation = {
    definitions?: any;
    properties?: Properties;
    required?: string[];
    type?: string;
    description?: string;
    title?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    slug: string;
    attributes?: string[];
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    departments?: string[];
    id?: string;
    description?: string;
    name?: string;
    logo?: string;
    categories?: string[];
    is_expirable: boolean;
    is_physical: boolean;
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
    seller_id?: number;
    template_tags?: any;
    trigger_on?: string;
    task_id?: string;
    id?: string;
    completed_on?: string;
    url?: string;
    data?: ProductDownloadItemsData;
    status?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Category = {
    media?: Media2;
    level: number;
    slug?: string;
    synonyms?: string[];
    is_active: boolean;
    created_by?: any;
    priority?: number;
    departments: number[];
    modified_on?: string;
    id?: string;
    name: string;
    uid?: number;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    modified_by?: any;
    created_on?: string;
    marketplaces?: CategoryMapping;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    media?: Media2;
    level: number;
    slug?: string;
    synonyms?: string[];
    is_active: boolean;
    priority?: number;
    departments: number[];
    name: string;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    marketplaces?: CategoryMapping;
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
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Product = {
    category?: any;
    attributes?: any;
    all_sizes?: any[];
    all_company_ids?: number[];
    trader?: any[];
    item_type?: string;
    _custom_json?: any;
    name?: string;
    no_of_boxes?: number;
    category_slug?: string;
    created_on?: string;
    country_of_origin?: string;
    pending?: string;
    verified_on?: string;
    modified_on?: string;
    l3_mapping?: string[];
    custom_order?: any;
    uid?: number;
    tags?: string[];
    modified_by?: any;
    highlights?: string[];
    item_code?: string;
    moq?: any;
    slug?: string;
    is_set?: boolean;
    media?: Media1[];
    variants?: any;
    multi_size?: boolean;
    is_active?: boolean;
    size_guide?: string;
    created_by?: any;
    brand?: Brand;
    images?: Image[];
    hsn_code?: string;
    departments?: number[];
    id?: string;
    all_identifiers?: string[];
    stage?: string;
    currency?: string;
    is_dependent?: boolean;
    product_publish?: ProductPublished;
    is_expirable?: boolean;
    is_physical?: boolean;
    tax_identifier?: any;
    variant_media?: any;
    template_tag?: string;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    color?: string;
    company_id?: number;
    sizes?: any[];
    primary_color?: string;
    image_nature?: string;
    variant_group?: any;
    is_image_less_product?: boolean;
    teaser_tag?: any;
    short_description?: string;
    return_config?: ReturnConfigResponse;
    net_quantity?: NetQuantityResponse;
    product_group_tag?: string[];
    description?: string;
    category_uid?: number;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdateSchemaV2 = {
    attributes?: any;
    trader: Trader[];
    item_type: string;
    _custom_json?: any;
    name: string;
    no_of_boxes?: number;
    category_slug: string;
    country_of_origin: string;
    requester?: string;
    custom_order?: CustomOrder;
    uid?: number;
    tags?: string[];
    highlights?: string[];
    item_code: string;
    slug: string;
    is_set?: boolean;
    media?: Media1[];
    variants?: any;
    is_active?: boolean;
    multi_size?: boolean;
    size_guide?: string;
    departments: number[];
    currency: string;
    is_dependent?: boolean;
    product_publish?: ProductPublish;
    tax_identifier: TaxIdentifier;
    variant_media?: any;
    template_tag: string;
    action?: string;
    brand_uid: number;
    company_id: number;
    sizes: any[];
    is_image_less_product?: boolean;
    variant_group?: any;
    bulk_job_id?: string;
    teaser_tag?: TeaserTag;
    short_description?: string;
    return_config: ReturnConfig;
    net_quantity?: NetQuantity;
    product_group_tag?: string[];
    description?: string;
    change_request_id?: any;
};
type ProductVariants = {
    media?: Media1[];
    brand_uid?: number;
    name?: string;
    uid?: number;
    item_code?: string;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    filters: AttributeMasterFilter;
    variant?: boolean;
    name?: string;
    schema: AttributeMaster;
    created_on?: string;
    synonyms?: any;
    modified_on?: string;
    tags?: string[];
    details: AttributeMasterDetails;
    modified_by?: any;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    slug: string;
    created_by?: any;
    unit?: string;
    departments: string[];
    logo?: string;
    raw_key?: string;
    suggestion?: string;
    description?: string;
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
    size: any;
    item_length: number;
    item_width: number;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
};
type GetAllSizes = {
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
    file_path?: string;
    created_by?: UserDetail1;
    template_tag?: string;
    cancelled_records?: string[];
    is_active?: boolean;
    failed?: number;
    company_id?: number;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    stage?: string;
    total?: number;
    modified_by?: UserDetail1;
    created_on?: string;
    failed_records?: string[];
    template?: ProductTemplate;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    file_path?: string;
    created_by?: UserInfo1;
    template_tag?: string;
    cancelled_records?: any[];
    is_active?: boolean;
    failed?: number;
    company_id: number;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    stage?: string;
    total?: number;
    modified_by?: UserInfo1;
    tracking_url?: string;
    custom_template_tag?: string;
    created_on: string;
    failed_records?: any[];
};
type BulkResponse = {
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    modified_by?: UserInfo1;
    batch_id: string;
    created_on: string;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
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
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    file_path?: string;
    created_by?: UserCommon;
    cancelled_records?: string[];
    is_active?: boolean;
    failed?: number;
    company_id?: number;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    id?: string;
    stage?: string;
    total?: number;
    modified_by?: UserCommon;
    tracking_url?: string;
    retry?: number;
    created_on?: string;
    failed_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
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
    seller_identifier?: string;
    size?: string;
    price_transfer?: number;
    price?: number;
    inventory_updated_on?: string;
    price_effective?: number;
    item_id?: number;
    sellable_quantity?: number;
    uid?: string;
    store?: any;
    quantity?: number;
    currency?: string;
    identifiers?: any;
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
    quantity?: number;
    size_distribution: SizeDistribution;
    name?: string;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type InvSize = {
    is_set?: boolean;
    size: any;
    price_transfer?: number;
    item_width?: number;
    price?: number;
    item_length?: number;
    item_height?: number;
    store_code: string;
    price_effective: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    quantity: number;
    currency: string;
    item_weight?: number;
    set?: InventorySet;
    expiration_date?: string;
    identifiers: GTIN[];
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
};
type BrandMeta = {
    id: number;
    name: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type PriceMeta = {
    updated_at?: string;
    transfer: number;
    effective: number;
    tp_notes?: any;
    currency: string;
    marked: number;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type DimensionResponse = {
    height: number;
    length: number;
    unit: string;
    is_default: boolean;
    width: number;
};
type InventorySellerResponse = {
    trader?: Trader1[];
    _custom_json?: any;
    item_id: number;
    fynd_item_code: string;
    company: CompanyMeta;
    total_quantity: number;
    fynd_meta?: any;
    country_of_origin: string;
    fynd_article_code: string;
    added_on_store?: string;
    meta?: any;
    uid: string;
    store: StoreMeta;
    raw_meta?: any;
    track_inventory?: boolean;
    tags?: string[];
    modified_by?: UserSerializer;
    quantities?: Quantities;
    set?: InventorySet;
    is_set?: boolean;
    identifier: any;
    seller_identifier: string;
    is_active?: boolean;
    created_by?: UserSerializer;
    brand: BrandMeta;
    manufacturer: ManufacturerResponse;
    trace_id?: string;
    stage?: string;
    tax_identifier?: any;
    size: string;
    price: PriceMeta;
    fragile: boolean;
    weight: WeightResponse;
    return_config?: ReturnConfig1;
    dimension: DimensionResponse;
    expiration_date?: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    store_code?: string;
    store_type?: string;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type PriceArticle = {
    transfer?: number;
    effective?: number;
    tp_notes?: any;
    currency?: string;
    marked?: number;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
};
type GetInventories = {
    trader?: Trader2[];
    item_id?: number;
    company?: CompanyMeta1;
    platforms?: any;
    total_quantity?: number;
    country_of_origin?: string;
    inventory_updated_on?: string;
    uid?: string;
    store?: ArticleStoreResponse;
    tags?: string[];
    track_inventory?: boolean;
    modified_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    is_set?: boolean;
    identifier?: any;
    seller_identifier?: string;
    created_by?: UserSerializer;
    brand?: BrandMeta1;
    manufacturer?: ManufacturerResponse1;
    id?: string;
    date_meta?: DateMeta;
    trace_id?: string;
    stage?: string;
    tax_identifier?: any;
    size?: string;
    price?: PriceArticle;
    weight?: WeightResponse1;
    return_config?: ReturnConfig2;
    dimension?: DimensionResponse1;
    expiration_date?: string;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    file_path?: string;
    created_by?: any;
    cancelled_records?: string[];
    is_active?: boolean;
    failed?: number;
    company_id?: number;
    cancelled?: number;
    id?: string;
    modified_on?: string;
    succeed?: number;
    stage?: string;
    total?: number;
    modified_by?: any;
    created_on?: string;
    failed_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    price_marked?: number;
    price?: number;
    store_code: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    currency?: string;
    trace_id?: string;
    expiration_date?: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
    batch_id: string;
};
type InventoryExportJob = {
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    completed_on?: string;
    url?: string;
    request_params?: any;
    status?: string;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    request_params?: any;
    status?: string;
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
    price_marked?: number;
    store_id: number;
    price_effective?: number;
    tags?: string[];
    trace_id?: string;
    expiration_date?: string;
    total_quantity?: number;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type PageResponse = {
    has_previous?: boolean;
    size?: number;
    current?: string;
    item_total?: number;
    has_next?: boolean;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    threshold2?: number;
    company_id?: number;
    hs2_code?: string;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    id?: string;
    modified_on?: string;
    tax1?: number;
    threshold1?: number;
    tax2?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    threshold2?: number;
    is_active?: boolean;
    company_id: number;
    hs2_code: string;
    hsn_code: string;
    tax_on_mrp: boolean;
    uid?: number;
    tax1: number;
    threshold1: number;
    tax2?: number;
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
    effective_date: string;
    cess?: number;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    created_by?: any;
    taxes: TaxSlab[];
    created_on?: string;
    reporting_hsn: string;
    hsn_code: string;
    modified_on?: string;
    country_code: string;
    type: string;
    modified_by?: any;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
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
    article_assignment?: ArticleAssignment;
    meta?: any;
    group_id?: string;
    quantity?: number;
    query?: ArticleQuery;
};
type AssignStore = {
    pincode: string;
    company_id?: number;
    channel_type?: string;
    app_id: string;
    store_ids?: number[];
    channel_identifier?: string;
    articles: AssignStoreArticle[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    size: string;
    article_assignment: ArticleAssignment1;
    price_marked?: number;
    company_id?: number;
    store_id?: number;
    price_effective?: number;
    item_id: number;
    meta?: any;
    group_id?: string;
    uid?: string;
    _id?: string;
    quantity: number;
    index?: number;
    s_city?: string;
    strategy_wise_listing?: any[];
    status: boolean;
    store_pincode?: number;
};
type BrandItem = {
    slug?: string;
    action?: Action;
    departments?: string[];
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    discount?: string;
    logo?: Media;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    priority_order?: number;
    name?: string;
    uid?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: any[];
};
type SecondLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: ThirdLevelChild[];
};
type Child = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: Child[];
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
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators?: any;
    items?: ProductListingDetail[];
    page: Page;
};
type ProductDetail = {
    attributes?: any;
    similars?: string[];
    item_type?: string;
    name?: string;
    description?: string;
    uid?: number;
    highlights?: string[];
    item_code?: string;
    rating_count?: number;
    slug: string;
    brand?: ProductBrand;
    type?: string;
    medias?: Media1[];
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    image_nature?: string;
    rating?: number;
    teaser_tag?: any;
    short_description?: string;
    promo_meta?: any;
    color?: string;
    has_variant?: boolean;
};
type InventoryPage = {
    has_previous?: boolean;
    type: string;
    item_total: number;
    next_id?: string;
    has_next?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    address2?: string;
    pincode?: number;
    address1?: string;
    latitude?: number;
    longitude?: number;
    country_code?: string;
    city?: string;
    address_type?: string;
    country?: string;
    landmark?: string;
    state?: string;
};
type GetCompanySerializer = {
    created_by?: UserSerializer1;
    company_type?: string;
    verified_on?: string;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    uid?: number;
    reject_reason?: string;
    stage?: string;
    modified_by?: UserSerializer1;
    created_on?: string;
    business_type?: string;
    verified_by?: UserSerializer1;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
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
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    open: boolean;
};
type GetLocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    code: string;
    _custom_json?: any;
    name: string;
    company?: GetCompanySerializer;
    created_on?: string;
    warnings?: any;
    phone_number: string;
    documents?: Document[];
    integration_type?: LocationIntegrationType;
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    modified_on?: string;
    uid?: number;
    modified_by?: UserSerializer2;
    product_return_config?: ProductReturnConfigSerializer;
    created_by?: UserSerializer2;
    store_type?: string;
    stage?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer2;
    address: GetAddressSerializer;
    display_name: string;
    manager?: LocationManagerSerializer;
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
    is_active?: boolean;
    app_id: string;
    _custom_json?: any;
    name?: string;
    uid: number;
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
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    uid: number;
    name?: string;
    business_details?: BusinessDetails;
    warnings?: any;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    stage?: string;
    franchise_enabled?: boolean;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    documents?: Document[];
    company_type: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    notification_emails?: string[];
    business_type: string;
    mode?: string;
    verified_on?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer[];
};
type CreateUpdateAddressSerializer = {
    address_type: string;
    landmark?: string;
    city: string;
    address1: string;
    longitude: number;
    state: string;
    country: string;
    country_code?: string;
    address2?: string;
    pincode: number;
    latitude: number;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type UpdateCompany = {
    name?: string;
    business_details?: BusinessDetails;
    warnings?: any;
    company_type?: string;
    business_info?: string;
    documents?: Document[];
    franchise_enabled?: boolean;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    reject_reason?: string;
    taxes?: CompanyTaxesSerializer1[];
    notification_emails?: string[];
    business_type?: string;
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
    uid?: number;
    product?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    uid?: number;
    name: string;
    warnings?: any;
    reject_reason?: string;
    banner?: BrandBannerSerializer;
    verified_by?: UserSerializer;
    stage?: string;
    _locale_language?: any;
    created_on?: string;
    logo?: string;
    synonyms?: string[];
    modified_by?: UserSerializer;
    modified_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    mode?: string;
    verified_on?: string;
    slug_key?: string;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    name: string;
    _locale_language?: any;
    brand_tier?: string;
    _custom_json?: any;
    description?: string;
    logo: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    company_id?: number;
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
    uid?: number;
    verified_on?: string;
    modified_by?: UserSerializer;
    name?: string;
    market_channels?: string[];
    modified_on?: string;
    stage?: string;
    company_type: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    created_on?: string;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    business_type: string;
    verified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    uid?: number;
    verified_on?: string;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    modified_on?: string;
    stage?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    reject_reason?: string;
    created_on?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
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
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    landmark?: string;
    city?: string;
    address1?: string;
    longitude: number;
    state?: string;
    country?: string;
    country_code?: string;
    address_type?: string;
    pincode?: number;
    latitude: number;
    address2?: string;
};
type LocationSerializer = {
    uid?: number;
    name: string;
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    address: AddressSerializer;
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    code: string;
    notification_emails?: string[];
    holiday?: HolidaySchemaSerializer[];
    display_name: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    ignored_stores?: number[];
    size?: string;
    item_id?: number;
};
type _AssignStoreArticle = {
    meta?: any;
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
    quantity?: number;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    channel_type?: string;
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    store_ids?: number[];
    app_id?: string;
    pincode?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    _id?: string;
    uid?: string;
    company_id?: number;
    meta?: any;
    size?: string;
    store_id?: number;
    price_marked?: number;
    index?: number;
    article_assignment?: _ArticleAssignment;
    s_city?: string;
    status?: boolean;
    preice_effective?: number;
    store_pincode?: string;
    quantity?: number;
    item_id?: number;
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
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
    codes?: string[];
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
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    user_groups?: number[];
    post_order?: PostOrder;
    ordering_stores?: number[];
    payments?: any;
    uses?: UsesRestriction;
    price_range?: PriceRange;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    currency_code?: string;
    type: string;
    calculate_on: string;
    scope?: string[];
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    subtitle?: string;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    remove?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    next_schedule?: any[];
    start?: string;
    end?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Rule = {
    key?: number;
    discount_qty?: number;
    min?: number;
    max?: number;
    value?: number;
};
type CouponAdd = {
    validation?: Validation;
    identifiers: Identifier;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    ownership: Ownership;
    state?: State;
    validity: Validity;
    display_meta: DisplayMeta;
    tags?: string[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    type_slug: string;
    action?: CouponAction;
    rule: Rule[];
    code: string;
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
    validation?: Validation;
    identifiers: Identifier;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    ownership: Ownership;
    state?: State;
    validity: Validity;
    display_meta: DisplayMeta;
    tags?: string[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    type_slug: string;
    action?: CouponAction;
    rule: Rule[];
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_sku?: string[];
    item_brand?: number[];
    item_id?: number[];
    item_exclude_category?: number[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    all_items?: boolean;
    item_category?: number[];
    cart_total?: CompareObject;
    item_size?: string[];
    item_company?: number[];
    item_exclude_store?: number[];
    item_store?: number[];
    item_exclude_sku?: string[];
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_amount?: number;
    max_discount_amount?: number;
    discount_price?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
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
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    platforms?: string[];
    user_groups?: number[];
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    user_id?: string[];
    uses: UsesRestriction1;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    next_schedule?: any[];
    start: string;
    end?: string;
    published: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionListItem = {
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _custom_json?: any;
    restrictions?: Restrictions1;
    application_id: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _custom_json?: any;
    restrictions?: Restrictions1;
    application_id: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
};
type PromotionUpdate = {
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    ownership: Ownership1;
    currency?: string;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _custom_json?: any;
    restrictions?: Restrictions1;
    application_id: string;
    display_meta: DisplayMeta1;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
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
type BasePrice = {
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductArticle = {
    _custom_json?: any;
    price?: ArticlePriceInfo;
    extra_meta?: any;
    type?: string;
    seller?: BaseInfo;
    quantity?: number;
    size?: string;
    uid?: string;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    product_group_tags?: string[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_type?: string;
    offer_text?: string;
    ownership?: Ownership2;
    amount?: number;
    promo_id?: string;
    article_quantity?: number;
};
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    effective?: number;
    marked?: number;
    selling?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
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
type CartProduct = {
    images?: ProductImage[];
    categories?: CategoryInfo[];
    name?: string;
    type?: string;
    slug?: string;
    uid?: number;
    action?: ProductAction;
    brand?: BaseInfo;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
};
type CartProductInfo = {
    article?: ProductArticle;
    key?: string;
    identifiers: CartProductIdentifer;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    price?: ProductPriceInfo;
    bulk_offer?: any;
    message?: string;
    product?: CartProduct;
    price_per_unit?: ProductPriceInfo;
    is_set?: boolean;
    quantity?: number;
    discount?: string;
    availability?: ProductAvailability;
    parent_item_identifiers?: any;
    coupon_message?: string;
};
type DisplayBreakup = {
    key?: string;
    currency_code?: string;
    display?: string;
    message?: string[];
    currency_symbol?: string;
    value?: number;
};
type RawBreakup = {
    gst_charges?: number;
    you_saved?: number;
    mrp_total?: number;
    delivery_charge?: number;
    cod_charge?: number;
    vog?: number;
    total?: number;
    coupon?: number;
    convenience_fee?: number;
    discount?: number;
    fynd_cash?: number;
    subtotal?: number;
};
type CouponBreakup = {
    is_applied?: boolean;
    type?: string;
    message?: string;
    uid?: string;
    value?: number;
    code?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    total?: number;
    description?: string;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    email?: string;
    city?: string;
    area?: string;
    name?: string;
    state?: string;
    country?: string;
    phone?: number;
    address?: string;
    pincode?: number;
    country_code?: string;
    area_code_slug?: string;
    address_type?: string;
    area_code: string;
    landmark?: string;
    meta?: any;
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
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
    is_valid?: boolean;
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
    delivery_charges: number;
    product_id: number;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
    cashback_applied: number;
    extra_meta?: any;
    employee_discount?: number;
    price_marked: number;
    loyalty_discount?: number;
    amount_paid: number;
    quantity?: number;
    coupon_effective_discount: number;
    size: string;
    discount: number;
    price_effective: number;
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
};
type OpenApiPlatformCheckoutReq = {
    affiliate_order_id?: string;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    gstin?: string;
    currency_code?: string;
    employee_discount?: any;
    cart_items: OpenApiOrderItem[];
    order_id?: string;
    loyalty_discount?: number;
    coupon_code: string;
    coupon?: string;
    shipping_address?: ShippingAddress;
    cart_value: number;
    billing_address: ShippingAddress;
    cod_charges: number;
    cashback_applied: number;
    coupon_value: number;
    comment?: string;
    files?: OpenApiFiles[];
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    is_default: boolean;
    delivery_charges?: any;
    is_active?: boolean;
    payment_methods?: any[];
    app_id?: string;
    gstin?: string;
    fc_index_map?: number[];
    created_on: string;
    order_id?: string;
    promotion?: any;
    uid: number;
    merge_qty?: boolean;
    comment?: string;
    bulk_coupon_discount?: number;
    payments?: any;
    _id: string;
    meta?: any;
    is_archive?: boolean;
    expire_at: string;
    checkout_mode?: string;
    cashback: any;
    buy_now?: boolean;
    user_id: string;
    coupon?: any;
    fynd_credits?: any;
    cart_value?: number;
    pick_up_customer_details?: any;
    cod_charges?: any;
    shipments?: any[];
    articles: any[];
    discount?: number;
    last_modified: string;
    payment_mode?: string;
};
type AbandonedCartResponse = {
    success?: boolean;
    page?: Page;
    items?: AbandonedCart[];
    message?: string;
    result?: any;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    coupon_text?: string;
    checkout_mode?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    gstin?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
    comment?: string;
    last_modified?: string;
    is_valid?: boolean;
    id?: string;
};
type AddProductCart = {
    item_id?: number;
    extra_meta?: any;
    seller_id?: number;
    store_id?: number;
    display?: string;
    article_assignment?: any;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    item_size?: string;
    _custom_json?: any;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    item_id?: number;
    extra_meta?: any;
    item_index?: number;
    quantity?: number;
    item_size?: string;
    article_id?: string;
    _custom_json?: any;
    parent_item_identifiers?: any;
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
