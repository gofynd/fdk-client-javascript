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
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, PaymentModeInfo, Prices, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, Identifier, FinancialBreakup, OrderBrandName, BagConfigs, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, PlatformDeliveryAddress, OrderBagArticle, BagStateMapper, CurrentStatus, OrderBags, OrderDetailsData, OrderingStoreDetails, ShipmentStatusData, PDFLinks, LockData, BuyerDetails, Formatted, ShipmentTimeStamp, DebugInfo, EinvoiceInfo, ShipmentMeta, AffiliateMeta, AffiliateDetails, DPDetailsData, InvoiceInfo, UserDetailsData, FulfillingStore, BagStatusHistory, TrackingList, Dimensions, Meta, ShipmentPayments, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Weight, ReturnConfig, Article, BagReturnableCancelableStatus, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, Dates, ArticleDetails, Brand, BagGSTDetails, B2BPODetails, BagMeta, AffiliateBagDetails, Attributes, Item, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, UserData, OrderPriority, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, PaymentMethod, PaymentInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, SeoDetail, CollectionImage, CollectionBadge, CollectionBanner, UserInfo, CollectionQuery, CollectionSchedule, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TaxIdentifier, ProductPublish, NetQuantity, TeaserTag, CustomOrder, Trader, ProductCreateUpdateSchemaV2, ReturnConfigResponse, ProductPublished, NetQuantityResponse, Logo, Image, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, PriceMeta, WeightResponse, ManufacturerResponse, QuantityBase, Quantities, CompanyMeta, ReturnConfig1, DimensionResponse, BrandMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, PriceArticle, WeightResponse1, ArticleStoreResponse, Quantity, QuantitiesArticle, CompanyMeta1, ReturnConfig2, DimensionResponse1, BrandMeta1, Trader2, ManufacturerResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationManagerSerializer, GetAddressSerializer, UserSerializer1, GetCompanySerializer, ProductReturnConfigSerializer, LocationIntegrationType, UserSerializer2, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, DisplayMetaDict, DisplayMeta, Ownership, CouponDateMeta, Validation, RuleDefinition, CouponSchedule, PriceRange, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, Restrictions, Validity, CouponAuthor, Rule, State, CouponAction, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionAuthor, PromotionAction, Ownership1, PromotionDateMeta, Visibility, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, CategoryInfo, Tags, ActionQuery, ProductAction, CartProduct, PromoMeta, ProductAvailability, CartProductIdentifer, CouponDetails, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_page, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_Response, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, GetZoneDataViewItems, GetSingleZoneDataViewResponse, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, CreatedByResponse, IntegrationTypeResponse, ProductReturnConfigResponse, ModifiedByResponse, WarningsResponse, AddressResponse, OpeningClosing, TimmingResponse, Dp, LogisticsResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, ContactNumberResponse, MobileNo, ManagerResponse, DocumentsResponse, ItemResponse, GetStoresViewResponse };
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
    type: string;
    text: string;
    value: string;
    options?: FilterInfoOption[];
};
type ShipmentStatus = {
    actual_status: string;
    hex_code: string;
    title: string;
    status: string;
    ops_status: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type Prices = {
    price_effective?: number;
    price_marked?: number;
    refund_amount?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    amount_paid?: number;
    refund_credit?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    cod_charges?: number;
    amount_paid_roundoff?: number;
    discount?: number;
    transfer_price?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    cashback_applied?: number;
    coupon_value?: number;
};
type GSTDetailsData = {
    value_of_good: number;
    tax_collected_at_source: number;
    gst_fee: number;
    brand_calculated_amount: number;
    gstin_code: string;
};
type PlatformItem = {
    name?: string;
    l3_category?: number;
    department_id?: number;
    l3_category_name?: string;
    images?: string[];
    can_return?: boolean;
    can_cancel?: boolean;
    code?: string;
    image?: string[];
    size?: string;
    l1_category?: string[];
    id?: number;
    color?: string;
};
type BagUnit = {
    item_quantity: number;
    can_cancel?: boolean;
    can_return?: boolean;
    gst?: GSTDetailsData;
    bag_id: number;
    shipment_id: string;
    prices?: Prices;
    status: any;
    ordering_channel: string;
    total_shipment_bags: number;
    item?: PlatformItem;
};
type UserDataInfo = {
    name?: string;
    first_name?: string;
    email?: string;
    last_name?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    gender?: string;
    uid?: number;
    avis_user_id?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    created_at: string;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    application?: any;
    fulfilling_centre: string;
    shipment_id?: string;
    prices?: Prices;
    channel?: any;
    bags?: BagUnit[];
    total_bags_count: number;
    total_shipments_in_order: number;
    user?: UserDataInfo;
    id: string;
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_created_at: string;
    payment_methods?: any;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    item_name: string;
    value_of_good: number;
    identifiers: Identifier;
    delivery_charge: number;
    coupon_effective_discount: number;
    gst_tag: string;
    tax_collected_at_source?: number;
    brand_calculated_amount: number;
    amount_paid_roundoff?: number;
    size: string;
    total_units: number;
    cashback: number;
    fynd_credits: number;
    gst_fee: number;
    cod_charges: number;
    hsn_code: string;
    promotion_effective_discount: number;
    cashback_applied: number;
    coupon_value: number;
    added_to_fynd_cash: boolean;
    price_marked: number;
    refund_credit: number;
    amount_paid: number;
    gst_tax_percentage: number;
    discount: number;
    transfer_price: number;
};
type OrderBrandName = {
    logo: string;
    brand_name: string;
    id: number;
    created_on: string;
    modified_on?: string;
    company: string;
};
type BagConfigs = {
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
};
type BagGST = {
    value_of_good?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tag?: string;
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
    promotion_name?: string;
    mrp_promotion?: boolean;
    promotion_type?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    discount_rules?: DiscountRules[];
    amount?: number;
};
type PlatformDeliveryAddress = {
    address1?: string;
    address2?: string;
    latitude?: number;
    area?: string;
    created_at?: string;
    email?: string;
    pincode?: string;
    country?: string;
    version?: string;
    updated_at?: string;
    longitude?: number;
    phone?: string;
    address_type?: string;
    address_category?: string;
    landmark?: string;
    contact_person?: string;
    city?: string;
    state?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type BagStateMapper = {
    bs_id: number;
    is_active?: boolean;
    name: string;
    notify_customer?: boolean;
    app_state_name?: string;
    app_facing?: boolean;
    display_name: string;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
};
type CurrentStatus = {
    created_at?: string;
    updated_at?: string;
    state_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    shipment_id?: string;
    store_id?: number;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    state_type?: string;
    current_status_id: number;
    delivery_partner_id?: number;
};
type OrderBags = {
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    seller_identifier?: string;
    can_cancel?: boolean;
    identifier?: string;
    prices?: Prices;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    gst_details?: BagGST;
    applied_promos?: AppliedPromos[];
    parent_promo_bags?: any;
    line_number?: number;
    quantity?: number;
    delivery_address?: PlatformDeliveryAddress;
    bag_id: number;
    entity_type?: string;
    display_name?: string;
    article?: OrderBagArticle;
    item?: PlatformItem;
    current_status?: CurrentStatus;
};
type OrderDetailsData = {
    source?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    cod_charges?: string;
    order_date?: string;
    affiliate_id?: string;
    order_value?: string;
    ordering_channel?: string;
    fynd_order_id: string;
};
type OrderingStoreDetails = {
    ordering_store_id: number;
    country: string;
    pincode: string;
    code: string;
    store_name: string;
    phone: string;
    address: string;
    meta: any;
    contact_person: string;
    city: string;
    state: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    status?: string;
    id?: number;
    bag_list?: string[];
};
type PDFLinks = {
    invoice_type: string;
    po_invoice?: string;
    invoice?: string;
    invoice_a6?: string;
    label_a6?: string;
    label_type: string;
    invoice_a4?: string;
    invoice_pos?: string;
    label_a4?: string;
    delivery_challan_a4?: string;
    credit_note_url?: string;
    label?: string;
    label_pos?: string;
    b2b?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type BuyerDetails = {
    name: string;
    gstin: string;
    pincode: number;
    address: string;
    ajio_site_id?: string;
    city: string;
    state: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type ShipmentMeta = {
    b2c_buyer_details?: any;
    weight: number;
    dp_name?: string;
    dp_sort_key?: string;
    dp_options?: any;
    box_type?: string;
    po_number?: string;
    store_invoice_updated_date?: string;
    same_store_available: boolean;
    lock_data?: LockData;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    due_date?: string;
    return_awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    assign_dp_from_sb?: boolean;
    debug_info?: DebugInfo;
    bag_weight?: any;
    external?: any;
    forward_affiliate_shipment_id?: string;
    shipment_weight?: number;
    packaging_name?: string;
    return_affiliate_shipment_id?: string;
    ewaybill_info?: any;
    shipment_volumetric_weight?: number;
    forward_affiliate_order_id?: string;
    return_store_node?: number;
    order_type?: string;
    marketplace_store_id?: string;
    return_affiliate_order_id?: string;
    return_details?: any;
    dp_id?: string;
    awb_number?: string;
    einvoice_info?: EinvoiceInfo;
    auto_trigger_dp_assignment_acf: boolean;
    fulfilment_priority_text?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    employee_discount?: number;
    channel_order_id?: string;
    coupon_code?: string;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    size_level_total_qty?: number;
    due_date?: string;
    order_item_id?: string;
    box_type?: string;
    quantity?: number;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type DPDetailsData = {
    name?: string;
    pincode?: string;
    awb_no?: string;
    country?: string;
    track_url?: string;
    eway_bill_id?: string;
    id?: number;
    gst_tag?: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    updated_date?: string;
    label_url?: string;
    credit_note_id?: string;
    invoice_url?: string;
};
type UserDetailsData = {
    name: string;
    email?: string;
    pincode: string;
    country: string;
    phone: string;
    address: string;
    city: string;
    state: string;
};
type FulfillingStore = {
    pincode: string;
    country: string;
    fulfillment_channel: string;
    code: string;
    store_name: string;
    phone: string;
    address: string;
    meta: any;
    id: number;
    contact_person: string;
    city: string;
    state: string;
};
type BagStatusHistory = {
    created_at?: string;
    state_type?: string;
    updated_at?: string;
    state_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    shipment_id?: string;
    store_id?: number;
    bsh_id?: number;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    status: string;
    display_name?: string;
    delivery_partner_id?: number;
    reasons?: any[];
    app_display_name?: string;
    forward?: boolean;
};
type TrackingList = {
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    status: string;
    text: string;
};
type Dimensions = {
    height?: number;
    width?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type PlatformShipment = {
    total_items?: number;
    invoice_id?: string;
    total_bags?: number;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    operational_status?: string;
    ordering_store?: OrderingStoreDetails;
    status?: ShipmentStatusData;
    affiliate_details?: AffiliateDetails;
    dp_details?: DPDetailsData;
    priority_text?: string;
    invoice?: InvoiceInfo;
    shipment_quantity?: number;
    shipment_id: string;
    prices?: Prices;
    billing_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    fulfilling_store?: FulfillingStore;
    fulfilment_priority?: number;
    payment_methods?: any;
    gst_details?: GSTDetailsData;
    platform_logo?: string;
    custom_meta?: any[];
    forward_shipment_id?: string;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    payment_mode?: string;
    tracking_list?: TrackingList[];
    meta?: Meta;
    shipment_images?: string[];
    coupon?: any;
    delivery_slot?: any;
    picked_date?: string;
    payments?: ShipmentPayments;
    user_agent?: string;
    shipment_status?: string;
    packaging_type?: string;
    delivery_details?: UserDetailsData;
    journey_type?: string;
    lock_status?: boolean;
};
type ShipmentInfoResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    message?: string;
};
type OrderMeta = {
    extra_meta?: any;
    order_type?: string;
    order_child_entities?: string[];
    staff?: any;
    payment_type?: string;
    currency_symbol?: string;
    comment?: string;
    order_platform?: string;
    cart_id?: number;
    mongo_cart_id?: number;
    ordering_store?: number;
    order_tags?: any[];
    files?: any[];
    customer_note?: string;
    employee_id?: number;
};
type OrderDict = {
    fynd_order_id: string;
    tax_details?: any;
    order_date: string;
    prices?: Prices;
    meta?: OrderMeta;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    index?: number;
    text?: string;
    value?: string;
};
type SuperLane = {
    text: string;
    value: string;
    total_items?: number;
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
    shipments?: PlatformShipment[];
    order_created_time?: string;
    total_order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    order_value?: number;
    meta?: any;
    user_info?: UserDataInfo;
    order_id?: string;
};
type OrderListingResponse = {
    page?: Page;
    lane?: string;
    message?: string;
    total_count?: number;
    success?: boolean;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    key: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    last_location_recieved_at?: string;
    updated_time?: string;
    updated_at?: string;
    shipment_type?: string;
    raw_status?: string;
    account_name?: string;
    meta?: any;
    status?: string;
    reason?: string;
    awb?: string;
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
    report_id?: string;
    request_details?: any;
    report_name?: string;
    report_created_at?: string;
    report_requested_at?: string;
    status?: string;
    display_name?: string;
    report_type?: string;
    s3_key?: string;
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
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    success?: boolean;
    data?: any[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    store_code?: string;
    store_name?: string;
    store_id?: string;
    invoice_status?: string;
    company_id?: string;
    data?: any;
    label?: any;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    operation?: string;
    method?: string;
    tags?: string[];
    upload?: FileUploadResponse;
    cdn?: URL;
    content_type?: string;
    size?: number;
    file_name?: string;
    file_path?: string;
    namespace?: string;
};
type bulkListingData = {
    processing_shipments?: string[];
    store_code?: string;
    id?: string;
    status?: string;
    batch_id?: string;
    failed?: number;
    company_id?: number;
    user_name?: string;
    successful_shipments?: any[];
    total?: number;
    store_id?: number;
    user_id?: string;
    processing?: number;
    excel_url?: string;
    failed_shipments?: any[];
    store_name?: string;
    file_name?: string;
    successful?: number;
    uploaded_on?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    has_previous?: boolean;
    size?: number;
    total?: number;
    type?: string;
    current?: number;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    qc_type?: string[];
    question_set?: QuestionSet[];
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
    batch_id?: string;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    error?: string[];
    uploaded_by?: string;
    message?: string;
    user_id?: string;
    status?: boolean;
    success?: string;
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
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
    seller_identifier: string;
    _id: string;
    weight?: Weight;
    identifiers: Identifier;
    code?: string;
    raw_meta?: any;
    size: string;
    a_set?: any;
    return_config?: ReturnConfig;
    is_set?: boolean;
    child_details?: any;
    dimensions?: Dimensions;
    esp_modified?: any;
    uid: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type Document = {
    url?: string;
    legal_name: string;
    ds_type: string;
    verified: boolean;
    value: string;
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
    user?: string;
    username?: string;
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
type StoreMeta = {
    timing?: any[];
    notification_emails?: string[];
    documents?: StoreDocuments;
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    display_name: string;
    stage: string;
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    ewaybill_portal_details?: any;
};
type StoreAddress = {
    address1: string;
    address2?: string;
    country_code: string;
    phone: string;
    contact_person: string;
    email?: string;
    updated_at: string;
    address_type: string;
    address_category: string;
    landmark?: string;
    state: string;
    created_at: string;
    latitude: number;
    version?: string;
    country: string;
    longitude: number;
    area?: string;
    pincode: number;
    city: string;
};
type Store = {
    address1: string;
    address2?: string;
    is_active?: boolean;
    is_archived?: boolean;
    name: string;
    location_type: string;
    alohomora_user_id?: number;
    is_enabled_for_recon?: boolean;
    code?: string;
    phone: number;
    parent_store_id?: number;
    brand_id?: any;
    contact_person: string;
    store_active_from?: string;
    updated_at?: string;
    packaging_material_count?: number;
    mall_area?: string;
    company_id: number;
    vat_no?: string;
    state: string;
    created_at: string;
    latitude: number;
    country: string;
    fulfillment_channel: string;
    order_integration_id?: string;
    store_email: string;
    longitude: number;
    login_username: string;
    meta: StoreMeta;
    mall_name?: string;
    store_address_json?: StoreAddress;
    s_id: string;
    pincode: string;
    brand_store_tags?: string[];
    city: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type Brand = {
    invoice_prefix?: string;
    start_date?: string;
    logo?: string;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    brand_name: string;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    created_on?: number;
    modified_on?: number;
    brand_id: number;
    company: string;
    credit_note_allowed?: boolean;
};
type BagGSTDetails = {
    value_of_good: number;
    tax_collected_at_source: number;
    sgst_tax_percentage: number;
    gst_fee: number;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
    gst_tax_percentage: number;
    hsn_code: string;
    is_default_hsn_code?: boolean;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    hsn_code_id: string;
    sgst_gst_fee: string;
    gstin_code?: string;
    gst_tag: string;
    igst_gst_fee: string;
};
type B2BPODetails = {
    item_base_price?: number;
    po_tax_amount?: number;
    docker_number?: string;
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type Attributes = {
    name?: string;
    brand_name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    essential?: string;
    primary_material?: string;
    marketer_address?: string;
    marketer_name?: string;
    gender?: string[];
};
type Item = {
    name: string;
    last_updated_at?: string;
    l3_category_name?: string;
    can_return?: boolean;
    code?: string;
    webstore_product_url?: string;
    brand_id: number;
    l2_category?: string[];
    l3_category?: number;
    attributes: Attributes;
    can_cancel?: boolean;
    image: string[];
    size: string;
    slug_key: string;
    l1_category?: string[];
    brand: string;
    gender?: string;
    color?: string;
    l2_category_id?: number;
    meta?: any;
    item_id: number;
    l1_category_id?: number;
    department_id?: number;
    branch_url?: string;
};
type BagDetailsPlatformResponse = {
    article: Article;
    status: BagReturnableCancelableStatus;
    affiliate_details?: AffiliateDetails;
    operational_status?: string;
    ordering_store?: Store;
    financial_breakup: FinancialBreakup[];
    dates?: Dates;
    article_details?: ArticleDetails;
    qc_required?: any;
    seller_identifier?: string;
    identifier?: string;
    original_bag_list?: number[];
    prices: Prices;
    shipment_id?: string;
    brand: Brand;
    bag_status: BagStatusHistory[];
    current_operational_status: BagStatusHistory;
    gst_details: BagGSTDetails;
    restore_coupon?: boolean;
    bag_status_history?: BagStatusHistory;
    order_integration_id?: string;
    no_of_bags_order?: number;
    applied_promos?: any[];
    bag_update_time?: number;
    b_id: number;
    parent_promo_bags?: any;
    meta?: BagMeta;
    line_number?: number;
    reasons?: any[];
    quantity?: number;
    restore_promos?: any;
    affiliate_bag_details: AffiliateBagDetails;
    b_type?: string;
    tags?: string[];
    entity_type?: string;
    display_name?: string;
    journey_type: string;
    item: Item;
    current_status: BagStatusHistory;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    size: number;
    page_type: string;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    message?: string;
    status?: number;
    shipment_id?: string;
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
    fynd_order_id?: string;
    store_id: number;
    set_id?: string;
    affiliate_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    reason_ids?: number[];
    mongo_article_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_id?: string;
    id?: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    entities: Entities[];
    action_type: string;
};
type Bags = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    shipment_id?: string;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    status?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    description?: string;
    title?: string;
    logo_url?: string;
    from_datetime?: string;
    id: number;
    platform_id?: string;
    company_id?: number;
    created_at?: string;
    platform_name?: string;
    to_datetime?: string;
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
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
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
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
    products?: Products[];
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    message?: string;
    identifier?: string;
    meta?: any;
    stack_trace?: string;
    exception?: string;
    final_state?: any;
    status?: number;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    store_id: number;
    affiliate_store_id: string;
    delivery_charge: number;
    affiliate_meta: any;
    identifier: any;
    amount_paid: number;
    discount: number;
    transfer_price: number;
    hsn_code_id: string;
    seller_identifier: string;
    avl_qty: number;
    pdf_links?: MarketPlacePdf;
    price_effective: number;
    quantity: number;
    unit_price: number;
    price_marked: number;
    modified_on: string;
    item_id: number;
    item_size: string;
    company_id: number;
    _id: string;
    fynd_store_id: string;
    sku: string;
};
type OrderUser = {
    city: string;
    address2?: string;
    first_name: string;
    address1?: string;
    country: string;
    mobile: number;
    pincode: string;
    phone: number;
    last_name: string;
    state: string;
    email: string;
};
type ArticleDetails1 = {
    weight: any;
    attributes: any;
    dimension: any;
    quantity: number;
    _id: string;
    category: any;
    brand_id: number;
};
type ShipmentDetails = {
    meta?: any;
    shipments: number;
    fulfillment_id: number;
    dp_id?: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    box_type?: string;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    identifier: string;
    payment_mode: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    source: string;
    location_details?: LocationDetails;
    action: string;
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
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type OrderInfo = {
    bags: AffiliateBag[];
    shipping_address: OrderUser;
    delivery_charges: number;
    payment_mode: string;
    shipment?: ShipmentData;
    cod_charges: number;
    affiliate_order_id?: string;
    user: UserData;
    order_value: number;
    discount: number;
    billing_address: OrderUser;
    items: any;
    coupon?: string;
    payment?: any;
    order_priority?: OrderPriority;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
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
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    name: string;
    owner: string;
    id: string;
    updated_at: string;
    token: string;
    created_at: string;
    secret: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    article_lookup?: string;
    create_user?: boolean;
    bag_end_state?: string;
    store_lookup?: string;
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
    id: number;
    display_text: string;
    description: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    createdat: string;
    ticket_id?: string;
    l1_detail?: string;
    user: string;
    l2_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    l3_detail?: string;
    type: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    message: string;
    country_code: string;
    amount_paid: number;
    payment_mode: string;
    shipment_id: number;
    order_id: string;
    customer_name: string;
    phone_number: number;
    brand_name: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    meta: Meta1;
    remarks?: string;
    shipment_id?: string;
    id: number;
    status?: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
    errors?: string[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    name: string;
    rate: number;
    amount: any;
    breakup?: any[];
};
type Charge = {
    amount: any;
    name: string;
    tax?: Tax;
    code?: string;
    type: string;
};
type LineItem = {
    custom_messasge?: string;
    meta?: any;
    external_line_id?: string;
    quantity?: number;
    charges?: Charge[];
    seller_identifier: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    confirm_by_date?: string;
    dispatch_by_date?: string;
};
type Shipment = {
    meta?: any;
    external_shipment_id?: string;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
    priority?: number;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    amount: number;
    meta?: any;
    refund_by: string;
    name: string;
    transaction_data?: any;
    mode: string;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    state_code?: string;
    shipping_type?: string;
    landmark?: string;
    house_no?: string;
    first_name: string;
    alternate_email?: string;
    primary_email: string;
    primary_mobile_number: string;
    country_code?: string;
    gender?: string;
    address1: string;
    country: string;
    last_name?: string;
    customer_code?: string;
    city: string;
    address2?: string;
    address_type?: string;
    external_customer_code?: string;
    middle_name?: string;
    title?: string;
    slot?: any[];
    geo_location?: any;
    floor_no?: string;
    pincode: string;
    alternate_mobile_number?: string;
    state: string;
};
type BillingInfo = {
    state_code?: string;
    house_no?: string;
    first_name: string;
    alternate_email?: string;
    primary_email: string;
    primary_mobile_number: string;
    country_code?: string;
    gender?: string;
    address1: string;
    country: string;
    last_name?: string;
    customer_code?: string;
    city: string;
    address2?: string;
    external_customer_code?: string;
    middle_name?: string;
    title?: string;
    floor_no?: string;
    pincode: string;
    alternate_mobile_number?: string;
    state: string;
};
type CreateOrderAPI = {
    meta?: any;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    charges?: Charge[];
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    message: string;
    meta?: string;
    stack_trace?: string;
    exception?: string;
    request_id?: string;
    status: number;
    code?: string;
    info?: any;
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
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    lock_states?: string[];
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
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
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    order_details?: FyndOrderIdList[];
    mobile: number;
    end_date: string;
    start_date: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    result?: any;
    uid?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    results?: any[];
    uid?: string;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
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
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    app_id?: string;
};
type ProductBundleItem = {
    product_uid: number;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type ProductBundleRequest = {
    meta?: any;
    created_on?: string;
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    slug: string;
    created_by?: any;
    is_active: boolean;
    products: ProductBundleItem[];
    choice: string;
    company_id?: number;
    name: string;
    same_store_assignment?: boolean;
};
type GetProductBundleCreateResponse = {
    meta?: any;
    created_on?: string;
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    id?: string;
    slug: string;
    created_by?: any;
    is_active: boolean;
    products: ProductBundleItem[];
    choice: string;
    company_id?: number;
    name: string;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    meta?: any;
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    slug: string;
    is_active: boolean;
    products: ProductBundleItem[];
    choice: string;
    company_id?: number;
    name: string;
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    short_description?: string;
    identifier?: any;
    images?: string[];
    country_of_origin?: string;
    slug?: string;
    quantity?: number;
    sizes?: string[];
    uid?: number;
    item_code?: string;
    attributes?: any;
    price?: any;
    name?: string;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type GetProducts = {
    product_uid?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    sizes?: Size[];
    max_quantity?: number;
    price?: Price;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    slug?: string;
    is_active?: boolean;
    products?: GetProducts[];
    choice?: string;
    company_id?: number;
    name?: string;
    same_store_assignment?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    created_on?: string;
    description?: string;
    active?: boolean;
    modified_by?: any;
    modified_on?: string;
    guide?: Guide;
    id?: string;
    title: string;
    created_by?: any;
    tag?: string;
    subtitle?: string;
    company_id?: number;
    name: string;
    brand_id?: number;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    created_on?: string;
    modified_by?: any;
    active?: boolean;
    guide?: any;
    id?: string;
    title?: string;
    created_by?: any;
    name?: string;
    tag?: string;
    subtitle?: string;
    company_id?: number;
    modified_on?: string;
    brand_id?: number;
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
    is_gift?: boolean;
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
    seo?: SEOData;
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
    is_gift?: boolean;
    alt_text?: any;
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
type AttributeDetailsGroup = {
    priority: number;
    logo?: string;
    unit?: string;
    slug?: string;
    display_type: string;
    key?: string;
    is_active: boolean;
    name: string;
};
type AppConfigurationDetail = {
    template_slugs?: string[];
    priority: number;
    logo?: string;
    slug: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    name?: string;
    is_default: boolean;
    app_id: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    total_count: number;
    current: number;
    has_next: boolean;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    default_key: string;
    priority: number;
    logo?: string;
    key: string;
    is_active: boolean;
    name?: string;
    is_default: boolean;
    app_id: string;
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
    display?: string;
    units?: any[];
    key?: string;
    filter_types?: string[];
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
    detail?: any;
    similar?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    priority: number;
    logo?: string;
    key: string;
    is_active: boolean;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    map?: any;
    value?: string;
    map_values?: any[];
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    logo?: string;
    display_name?: string;
    key: string;
    is_active: boolean;
    name?: string;
    type: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    priority: number;
    logo?: string;
    title?: string;
    key: string;
    is_active: boolean;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    priority: number;
    logo?: string;
    display_type: string;
    key: string;
    is_active: boolean;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    created_on?: string;
    modified_by?: any;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    modified_on?: string;
    type?: string;
    app_id: string;
};
type AppCatalogConfiguration = {
    created_on?: string;
    modified_by?: any;
    config_type: string;
    listing?: ConfigurationListing;
    id?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    modified_on?: string;
    type?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    logo?: string;
    operators?: string[];
    kind?: string;
    name: string;
};
type ProductFiltersValue = {
    display: string;
    min?: number;
    is_selected: boolean;
    selected_min?: number;
    query_format?: string;
    value: any;
    count?: number;
    selected_max?: number;
    currency_code?: string;
    currency_symbol?: string;
    display_format?: string;
    max?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type CollectionSchedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    duration?: number;
};
type CreateCollection = {
    slug: string;
    _custom_json?: any;
    seo?: SeoDetail;
    app_id: string;
    allow_facets?: boolean;
    priority?: number;
    logo: CollectionImage;
    badge?: CollectionBadge;
    is_active?: boolean;
    visible_facets_keys?: string[];
    name: string;
    meta?: any;
    banners: CollectionBanner;
    sort_on?: string;
    created_by?: UserInfo;
    allow_sort?: boolean;
    is_visible?: boolean;
    modified_by?: UserInfo;
    description?: string;
    published?: boolean;
    tags?: string[];
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    type: string;
    _locale_language?: any;
};
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    slug?: string;
    app_id?: string;
    allow_facets?: boolean;
    priority?: number;
    logo?: BannerImage;
    badge?: any;
    tag?: string[];
    is_active?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    meta?: any;
    cron?: any;
    banners?: ImageUrls;
    sort_on?: string;
    allow_sort?: boolean;
    description?: string;
    query?: CollectionQuery[];
    _schedule?: any;
    type?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    slug?: string;
    action?: Action;
    app_id?: string;
    allow_facets?: boolean;
    priority?: number;
    logo?: Media1;
    badge?: any;
    tag?: string[];
    is_active?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    meta?: any;
    cron?: any;
    banners?: ImageUrls;
    allow_sort?: boolean;
    description?: string;
    uid?: string;
    query?: CollectionQuery[];
    _schedule?: any;
    type?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    meta?: any;
    allow_facets?: boolean;
    description?: string;
    cron?: any;
    banners?: ImageUrls;
    logo?: Media1;
    priority?: number;
    slug?: string;
    badge?: any;
    allow_sort?: boolean;
    _schedule?: any;
    tag?: string[];
    query?: CollectionQuery[];
    is_active?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    type?: string;
    app_id?: string;
};
type UpdateCollection = {
    slug?: string;
    _custom_json?: any;
    seo?: SeoDetail;
    allow_facets?: boolean;
    priority?: number;
    logo?: CollectionImage;
    badge?: CollectionBadge;
    is_active?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    meta?: any;
    banners?: CollectionBanner;
    sort_on?: string;
    allow_sort?: boolean;
    is_visible?: boolean;
    modified_by?: UserInfo;
    description?: string;
    published?: boolean;
    tags?: string[];
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    type?: string;
    _locale_language?: any;
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
    message?: string;
    items_not_updated?: number[];
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
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
type ProductBrand = {
    uid?: number;
    action?: Action;
    name?: string;
    logo?: Media1;
};
type ProductListingDetail = {
    slug: string;
    rating?: number;
    rating_count?: number;
    image_nature?: string;
    color?: string;
    price?: ProductListingPrice;
    promo_meta?: any;
    item_type?: string;
    tryouts?: string[];
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    name?: string;
    product_online_date?: string;
    attributes?: any;
    teaser_tag?: any;
    brand?: ProductBrand;
    description?: string;
    highlights?: string[];
    discount?: string;
    similars?: string[];
    has_variant?: boolean;
    sellable?: boolean;
    uid?: number;
    item_code?: string;
    type?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
};
type CatalogInsightBrand = {
    total_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    name?: string;
    total_articles?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    store_ids?: number[];
    opt_level: string;
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
    platform?: string;
};
type CompanyOptIn = {
    store_ids: number[];
    created_on: number;
    opt_level: string;
    modified_by?: any;
    enabled: boolean;
    brand_ids: number[];
    created_by?: any;
    company_id: number;
    platform: string;
    modified_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    company_type?: string;
    name?: string;
    business_type?: string;
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
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    additional_contacts?: any[];
    created_on?: string;
    manager?: any;
    modified_on?: string;
    address?: any;
    display_name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
    documents?: any[];
    timing?: any;
    company_id?: number;
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    format?: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    mandatory?: boolean;
    type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    id?: string;
    slug?: string;
    schema?: AttributeMaster;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    name?: string;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    meta?: any;
    errors?: any;
    code?: string;
    status?: number;
    message?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    logo: string;
    tags?: string[];
    slug?: string;
    uid?: number;
    _custom_json?: any;
    is_active?: boolean;
    platforms?: any;
    priority_order: number;
    name: string;
    _cls?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    _id?: string;
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
};
type GetDepartment = {
    page_size?: number;
    created_on?: string;
    synonyms?: string[];
    logo?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    search?: string;
    slug?: string;
    page_no?: number;
    created_by?: UserSerializer;
    uid?: number;
    is_active?: boolean;
    priority_order?: number;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    errors?: any;
    code?: string;
    status?: number;
    message?: string;
};
type UserDetail = {
    username: string;
    contact?: string;
    user_id: string;
    super_user?: boolean;
};
type DepartmentModel = {
    _id?: any;
    created_on: string;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    logo: string;
    synonyms?: any[];
    slug?: any;
    created_by?: UserDetail;
    name: any;
    uid?: number;
    _custom_json?: any;
    verified_on?: string;
    is_active?: boolean;
    priority_order: number;
    modified_on: string;
    _cls?: any;
};
type ProductTemplate = {
    created_on?: string;
    description?: string;
    logo?: string;
    modified_by?: any;
    modified_on?: string;
    is_physical: boolean;
    slug: string;
    created_by?: any;
    tag?: string;
    is_active?: boolean;
    attributes?: string[];
    categories?: string[];
    is_archived?: boolean;
    is_expirable: boolean;
    name?: string;
    departments?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    hsn_code?: any;
    brand_uid?: any;
    slug?: any;
    sizes?: any;
    size_guide?: any;
    command?: any;
    category_slug?: any;
    trader_type?: any;
    item_type?: any;
    currency?: any;
    is_active?: any;
    product_group_tag?: any;
    country_of_origin?: any;
    short_description?: any;
    is_dependent?: any;
    name?: any;
    return_config?: any;
    variants?: any;
    multi_size?: any;
    media?: any;
    product_publish?: any;
    no_of_boxes?: any;
    teaser_tag?: any;
    description?: any;
    custom_order?: any;
    highlights?: any;
    tags?: any;
    item_code?: any;
    trader?: any;
};
type GlobalValidation = {
    description?: string;
    required?: string[];
    definitions?: any;
    title?: string;
    properties?: Properties;
    type?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    description?: string;
    logo?: string;
    is_physical: boolean;
    id?: string;
    slug: string;
    tag?: string;
    is_active?: boolean;
    attributes?: string[];
    categories?: string[];
    is_archived?: boolean;
    is_expirable: boolean;
    name?: string;
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
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    template_tags?: any;
    task_id?: string;
    seller_id?: number;
    id?: string;
    created_by?: VerifiedBy;
    status?: string;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    url?: string;
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
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryRequestBody = {
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    priority?: number;
    tryouts?: string[];
    slug?: string;
    media?: Media2;
    level: number;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    name: string;
    departments: number[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    marketplaces?: CategoryMapping;
    created_on?: string;
    synonyms?: string[];
    priority?: number;
    modified_by?: any;
    modified_on?: string;
    tryouts?: string[];
    id?: string;
    slug?: string;
    media?: Media2;
    level: number;
    created_by?: any;
    uid?: number;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    name: string;
    departments: number[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type ProductCreateUpdateSchemaV2 = {
    departments: number[];
    brand_uid: number;
    slug: string;
    sizes: any[];
    _custom_json?: any;
    action?: string;
    size_guide?: string;
    category_slug: string;
    item_type: string;
    is_set?: boolean;
    tax_identifier: TaxIdentifier;
    currency: string;
    is_active?: boolean;
    product_group_tag?: string[];
    country_of_origin: string;
    short_description?: string;
    company_id: number;
    is_dependent?: boolean;
    name: string;
    change_request_id?: any;
    variant_media?: any;
    return_config: ReturnConfig;
    variants?: any;
    template_tag: string;
    multi_size?: boolean;
    media?: Media1[];
    product_publish?: ProductPublish;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    variant_group?: any;
    attributes: any;
    bulk_job_id?: string;
    teaser_tag?: TeaserTag;
    description?: string;
    custom_order?: CustomOrder;
    highlights?: string[];
    tags?: string[];
    requester?: string;
    uid?: number;
    is_image_less_product?: boolean;
    item_code: string;
    trader: Trader[];
};
type ReturnConfigResponse = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Logo = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Product = {
    hsn_code?: string;
    is_physical?: boolean;
    brand_uid?: number;
    slug?: string;
    sizes?: any[];
    all_company_ids?: number[];
    _custom_json?: any;
    l3_mapping?: string[];
    image_nature?: string;
    size_guide?: string;
    color?: string;
    category?: any;
    modified_on?: string;
    is_expirable?: boolean;
    category_slug?: string;
    primary_color?: string;
    pending?: string;
    item_type?: string;
    is_set?: boolean;
    tax_identifier?: any;
    moq?: any;
    currency?: string;
    is_active?: boolean;
    product_group_tag?: string[];
    country_of_origin?: string;
    short_description?: string;
    is_dependent?: boolean;
    company_id?: number;
    name?: string;
    variant_media?: any;
    stage?: string;
    return_config?: ReturnConfigResponse;
    variants?: any;
    template_tag?: string;
    category_uid?: number;
    media?: Media1[];
    product_publish?: ProductPublished;
    multi_size?: boolean;
    all_sizes?: any[];
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    variant_group?: any;
    created_by?: any;
    all_identifiers?: string[];
    verified_on?: string;
    attributes?: any;
    brand?: Brand;
    teaser_tag?: any;
    created_on?: string;
    images?: Image[];
    description?: string;
    custom_order?: any;
    highlights?: string[];
    tags?: string[];
    modified_by?: any;
    verified_by?: VerifiedBy;
    trader?: any[];
    id?: string;
    uid?: number;
    is_image_less_product?: boolean;
    item_code?: string;
    departments?: number[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    brand_uid?: number;
    category_uid?: number;
    media?: Media1[];
    uid?: number;
    item_code?: string;
    name?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    unit?: string;
    variant?: boolean;
    slug: string;
    filters: AttributeMasterFilter;
    modified_on?: string;
    logo?: string;
    name?: string;
    details: AttributeMasterDetails;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    created_by?: any;
    is_nested?: boolean;
    raw_key?: string;
    created_on?: string;
    description?: string;
    modified_by?: any;
    tags?: string[];
    schema: AttributeMaster;
    suggestion?: string;
    departments: string[];
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
    item_weight: number;
    size: any;
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
    item_width: number;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_length: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type BulkJob = {
    total?: number;
    created_on: string;
    cancelled?: number;
    modified_by?: UserInfo1;
    failed_records?: any[];
    succeed?: number;
    stage?: string;
    tracking_url?: string;
    failed?: number;
    template_tag?: string;
    created_by?: UserInfo1;
    cancelled_records?: any[];
    custom_template_tag?: string;
    is_active?: boolean;
    file_path?: string;
    company_id: number;
    modified_on?: string;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    batch_id: string;
    is_active?: boolean;
    modified_on?: string;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    failed_records?: string[];
    created_on?: string;
    total?: number;
    cancelled?: number;
    modified_by?: UserDetail1;
    stage?: string;
    succeed?: number;
    template?: ProductTemplate;
    failed?: number;
    template_tag?: string;
    created_by?: UserDetail1;
    file_path?: string;
    is_active?: boolean;
    company_id?: number;
    cancelled_records?: string[];
    modified_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    data: any[];
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
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    failed_records?: string[];
    created_on?: string;
    total?: number;
    modified_by?: UserCommon;
    cancelled?: number;
    succeed?: number;
    stage?: string;
    tracking_url?: string;
    failed?: number;
    company_id?: number;
    id?: string;
    created_by?: UserCommon;
    is_active?: boolean;
    file_path?: string;
    cancelled_records?: string[];
    retry?: number;
    modified_on?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
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
    size_distribution: SizeDistribution;
    name?: string;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type InvSize = {
    item_weight?: number;
    size: any;
    set?: InventorySet;
    price_effective: number;
    expiration_date?: string;
    is_set?: boolean;
    quantity: number;
    store_code: string;
    price_transfer?: number;
    identifiers: GTIN[];
    currency: string;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    item_height?: number;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    item_length?: number;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type InventoryResponse = {
    seller_identifier?: string;
    size?: string;
    price_effective?: number;
    inventory_updated_on?: string;
    item_id?: number;
    sellable_quantity?: number;
    quantity?: number;
    uid?: string;
    price_transfer?: number;
    identifiers?: any;
    currency?: string;
    price?: number;
    store?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type PriceMeta = {
    transfer: number;
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
    currency: string;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
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
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type DimensionResponse = {
    unit: string;
    width: number;
    length: number;
    height: number;
    is_default: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type InventorySellerResponse = {
    size: string;
    expiration_date?: string;
    _custom_json?: any;
    price: PriceMeta;
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    quantities?: Quantities;
    is_set?: boolean;
    company: CompanyMeta;
    tax_identifier?: any;
    track_inventory?: boolean;
    is_active?: boolean;
    country_of_origin: string;
    raw_meta?: any;
    added_on_store?: string;
    meta?: any;
    stage?: string;
    fynd_meta?: any;
    return_config?: ReturnConfig1;
    total_quantity: number;
    dimension: DimensionResponse;
    created_by?: UserSerializer;
    brand: BrandMeta;
    seller_identifier: string;
    identifier: any;
    set?: InventorySet;
    modified_by?: UserSerializer;
    tags?: string[];
    item_id: number;
    trader?: Trader1[];
    fragile: boolean;
    fynd_item_code: string;
    trace_id?: string;
    uid: string;
    fynd_article_code: string;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type PriceArticle = {
    transfer?: number;
    effective?: number;
    tp_notes?: any;
    marked?: number;
    currency?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    uid?: number;
    store_code?: string;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type GetInventories = {
    size?: string;
    expiration_date?: string;
    inventory_updated_on?: string;
    price?: PriceArticle;
    weight?: WeightResponse1;
    store?: ArticleStoreResponse;
    quantities?: QuantitiesArticle;
    is_set?: boolean;
    company?: CompanyMeta1;
    tax_identifier?: any;
    date_meta?: DateMeta;
    track_inventory?: boolean;
    country_of_origin?: string;
    stage?: string;
    return_config?: ReturnConfig2;
    total_quantity?: number;
    dimension?: DimensionResponse1;
    created_by?: UserSerializer;
    platforms?: any;
    brand?: BrandMeta1;
    seller_identifier?: string;
    identifier?: any;
    modified_by?: UserSerializer;
    tags?: string[];
    item_id?: number;
    trader?: Trader2[];
    id?: string;
    trace_id?: string;
    uid?: string;
    manufacturer?: ManufacturerResponse1;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    cancelled?: number;
    created_on?: string;
    failed_records?: string[];
    modified_by?: any;
    total?: number;
    stage?: string;
    succeed?: number;
    failed?: number;
    id?: string;
    created_by?: any;
    file_path?: string;
    is_active?: boolean;
    company_id?: number;
    cancelled_records?: string[];
    modified_on?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
    tags?: string[];
    total_quantity?: number;
    price_marked?: number;
    store_code: string;
    quantity?: number;
    trace_id?: string;
    currency?: string;
    item_weight_unit_of_measure?: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
    user?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    task_id: string;
    request_params?: any;
    status?: string;
    trigger_on?: string;
};
type InventoryExportJob = {
    seller_id: number;
    task_id: string;
    request_params?: any;
    status?: string;
    completed_on?: string;
    url?: string;
    trigger_on?: string;
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
    seller_identifier: string;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
    total_quantity?: number;
    price_marked?: number;
    trace_id?: string;
    store_id: number;
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
    threshold1: number;
    hsn_code: string;
    tax_on_mrp: boolean;
    hs2_code: string;
    uid?: number;
    is_active?: boolean;
    company_id: number;
    tax1: number;
    threshold2?: number;
    tax2?: number;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    threshold1?: number;
    modified_on?: string;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    id?: string;
    hs2_code?: string;
    company_id?: number;
    tax1?: number;
    threshold2?: number;
    tax2?: number;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    has_next?: boolean;
    item_total?: number;
    current?: string;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    cess?: number;
    rate: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    created_on?: string;
    description: string;
    modified_by?: any;
    hsn_code: string;
    reporting_hsn: string;
    taxes: TaxSlab[];
    created_by?: any;
    country_code: string;
    modified_on?: string;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
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
    meta?: any;
    quantity?: number;
    query?: ArticleQuery;
    group_id?: string;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    store_ids?: number[];
    channel_type?: string;
    channel_identifier?: string;
    articles: AssignStoreArticle[];
    pincode: string;
    company_id?: number;
    app_id: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    meta?: any;
    size: string;
    _id?: string;
    price_effective?: number;
    item_id: number;
    strategy_wise_listing?: any[];
    price_marked?: number;
    quantity: number;
    store_pincode?: number;
    status: boolean;
    uid?: string;
    store_id?: number;
    group_id?: string;
    s_city?: string;
    index?: number;
    company_id?: number;
    article_assignment: ArticleAssignment1;
};
type BrandItem = {
    logo?: Media;
    banners?: ImageUrls;
    discount?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    name?: string;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    logo?: Media;
    slug?: string;
    uid?: number;
    priority_order?: number;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    childs?: any[];
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type Child = {
    banners?: ImageUrls;
    slug?: string;
    childs?: SecondLevelChild[];
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type CategoryItems = {
    banners?: ImageUrls;
    slug?: string;
    childs?: Child[];
    uid?: number;
    action?: Action;
    name?: string;
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
    page: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    operators?: any;
    filters?: ProductFilters[];
};
type ProductDetail = {
    slug: string;
    rating?: number;
    rating_count?: number;
    image_nature?: string;
    color?: string;
    promo_meta?: any;
    item_type?: string;
    tryouts?: string[];
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    name?: string;
    product_online_date?: string;
    attributes?: any;
    teaser_tag?: any;
    brand?: ProductBrand;
    description?: string;
    highlights?: string[];
    similars?: string[];
    has_variant?: boolean;
    uid?: number;
    item_code?: string;
    type?: string;
};
type InventoryPage = {
    has_next?: boolean;
    item_total: number;
    next_id?: string;
    has_previous?: boolean;
    type: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    city?: string;
    state?: string;
    latitude?: number;
    landmark?: string;
    address2?: string;
    address1?: string;
    longitude?: number;
    pincode?: number;
    country_code?: string;
    country?: string;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    verified_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    business_type?: string;
    stage?: string;
    reject_reason?: string;
    created_by?: UserSerializer1;
    name?: string;
    uid?: number;
    company_type?: string;
    verified_on?: string;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type GetLocationSerializer = {
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
    _custom_json?: any;
    modified_on?: string;
    notification_emails?: string[];
    company?: GetCompanySerializer;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    integration_type?: LocationIntegrationType;
    stage?: string;
    created_by?: UserSerializer2;
    store_type?: string;
    verified_on?: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    created_on?: string;
    verified_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    warnings?: any;
    display_name: string;
    code: string;
    phone_number: string;
    uid?: number;
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
    logo?: string;
    uid: number;
    _custom_json?: any;
    is_active?: boolean;
    name?: string;
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    stage?: string;
    notification_emails?: string[];
    warnings?: any;
    business_type: string;
    business_details?: BusinessDetails;
    uid: number;
    _custom_json?: any;
    mode?: string;
    franchise_enabled?: boolean;
    verified_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    business_info?: string;
    addresses?: GetAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    documents?: Document[];
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    name?: string;
    contact_details?: ContactDetails;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    country: string;
    address1: string;
    landmark?: string;
    country_code?: string;
    address_type: string;
    pincode: number;
    latitude: number;
    state: string;
    address2?: string;
    city: string;
    longitude: number;
};
type UpdateCompany = {
    company_type?: string;
    _custom_json?: any;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    notification_emails?: string[];
    warnings?: any;
    business_type?: string;
    franchise_enabled?: boolean;
    business_info?: string;
    reject_reason?: string;
    name?: string;
    business_details?: BusinessDetails;
    contact_details?: ContactDetails;
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
    stage?: string;
    uid?: number;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    stage?: string;
    warnings?: any;
    synonyms?: string[];
    uid?: number;
    _custom_json?: any;
    mode?: string;
    _locale_language?: any;
    verified_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    created_on?: string;
    description?: string;
    created_by?: UserSerializer;
    slug_key?: string;
    logo?: string;
    reject_reason?: string;
    name: string;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    _custom_json?: any;
    _locale_language?: any;
    logo: string;
    brand_tier?: string;
    description?: string;
    company_id?: number;
    synonyms?: string[];
    name: string;
    banner?: BrandBannerSerializer;
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
    stage?: string;
    company_type: string;
    uid?: number;
    _custom_json?: any;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    verified_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    created_on?: string;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    market_channels?: string[];
    reject_reason?: string;
    name?: string;
    addresses?: GetAddressSerializer[];
};
type CompanyBrandSerializer = {
    stage?: string;
    uid?: number;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
    verified_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    uid?: number;
    display_name: string;
    _custom_json?: any;
    store_type?: string;
    code: string;
    documents?: Document[];
    notification_emails?: string[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    address: GetAddressSerializer;
    name: string;
    holiday?: HolidaySchemaSerializer[];
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
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    channel_identifier?: string;
    pincode?: string;
    app_id?: string;
    company_id?: number;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    meta?: any;
    uid?: string;
    preice_effective?: number;
    _id?: string;
    store_pincode?: string;
    store_id?: number;
    s_city?: string;
    article_assignment?: _ArticleAssignment;
    company_id?: number;
    price_marked?: number;
    status?: boolean;
    item_id?: number;
    quantity?: number;
    size?: string;
    index?: number;
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
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    description?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type RuleDefinition = {
    applicable_on: string;
    scope?: string[];
    value_type: string;
    type: string;
    currency_code?: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    calculate_on: string;
};
type CouponSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    start?: string;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
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
    ordering_stores?: number[];
    platforms?: string[];
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    coupon_allowed?: boolean;
    user_type?: string;
    post_order?: PostOrder;
    uses?: UsesRestriction;
    payments?: any;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    min?: number;
    value?: number;
    key?: number;
    max?: number;
    discount_qty?: number;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponAdd = {
    display_meta: DisplayMeta;
    code: string;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    tags?: string[];
    type_slug: string;
    _schedule?: CouponSchedule;
    restrictions?: Restrictions;
    validity: Validity;
    identifiers: Identifier;
    author?: CouponAuthor;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
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
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    tags?: string[];
    type_slug: string;
    _schedule?: CouponSchedule;
    restrictions?: Restrictions;
    validity: Validity;
    identifiers: Identifier;
    author?: CouponAuthor;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    published: boolean;
    start: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
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
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type Restrictions1 = {
    order_quantity?: number;
    platforms?: string[];
    anonymous_users?: boolean;
    user_groups?: number[];
    user_registered?: UserRegistered;
    post_order?: PostOrder1;
    user_id?: string[];
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type CompareObject = {
    equals?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than?: number;
};
type ItemCriteria = {
    cart_unique_item_quantity?: CompareObject;
    all_items?: boolean;
    item_company?: number[];
    item_exclude_sku?: string[];
    item_exclude_id?: number[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    available_zones?: string[];
    item_exclude_company?: number[];
    cart_quantity?: CompareObject;
    buy_rules?: string[];
    item_id?: number[];
    item_store?: number[];
    item_exclude_store?: number[];
    item_size?: string[];
    item_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    item_sku?: string[];
    item_category?: number[];
};
type DiscountOffer = {
    code?: string;
    discount_price?: number;
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type PromotionListItem = {
    stackable?: boolean;
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    ownership: Ownership1;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    currency?: string;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    code?: string;
    buy_rules: any;
    application_id: string;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    stackable?: boolean;
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    ownership: Ownership1;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    currency?: string;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    code?: string;
    buy_rules: any;
    application_id: string;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
};
type PromotionUpdate = {
    stackable?: boolean;
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    ownership: Ownership1;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    currency?: string;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    code?: string;
    buy_rules: any;
    application_id: string;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    created_on?: string;
    type?: string;
    subtitle?: string;
    example?: string;
    entity_slug?: string;
    is_hidden?: boolean;
    entity_type?: string;
    title?: string;
    description?: string;
    modified_on?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type DisplayBreakup = {
    value?: number;
    display?: string;
    currency_code?: string;
    key?: string;
    currency_symbol?: string;
    message?: string[];
};
type RawBreakup = {
    discount?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
    delivery_charge?: number;
    cod_charge?: number;
    fynd_cash?: number;
    mrp_total?: number;
    coupon?: number;
    convenience_fee?: number;
    subtotal?: number;
    gift_card?: number;
    gst_charges?: number;
};
type CouponBreakup = {
    code?: string;
    value?: number;
    is_applied?: boolean;
    type?: string;
    coupon_value?: number;
    coupon_type?: string;
    minimum_cart_value?: number;
    max_discount_value?: number;
    title?: string;
    description?: string;
    sub_title?: string;
    uid?: string;
    message?: string;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    effective?: number;
    currency_code?: string;
    add_on?: number;
    selling?: number;
    currency_symbol?: string;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    seller_identifier?: string;
    product_group_tags?: string[];
    quantity?: number;
    type?: string;
    identifier?: any;
    seller?: BaseInfo;
    store?: BaseInfo;
    price?: ArticlePriceInfo;
    is_gift_visible?: boolean;
    uid?: string;
    cart_item_meta?: any;
    size?: string;
    extra_meta?: any;
    gift_card?: any;
    parent_item_identifiers?: any;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type Tags = {
    tags?: any;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type CartProduct = {
    type?: string;
    images?: ProductImage[];
    tags?: string[];
    categories?: CategoryInfo[];
    teaser_tag?: Tags;
    _custom_json?: any;
    brand?: BaseInfo;
    slug?: string;
    uid?: number;
    name?: string;
    action?: ProductAction;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    is_valid?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CouponDetails = {
    discount_total_quantity?: number;
    code?: string;
    discount_single_quantity?: number;
};
type FreeGiftItem = {
    item_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_brand_name?: string;
    item_price_details?: any;
    item_slug?: string;
};
type AppliedFreeArticles = {
    quantity?: number;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    offer?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    amount?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    offer_text?: string;
    promotion_group?: string;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    discount?: string;
    product?: CartProduct;
    quantity?: number;
    coupon_message?: string;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    is_set?: boolean;
    price?: ProductPriceInfo;
    availability?: ProductAvailability;
    key?: string;
    identifiers: CartProductIdentifer;
    coupon?: CouponDetails;
    promotions_applied?: AppliedPromotion[];
    message?: string;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    area?: string;
    address?: string;
    address_type?: string;
    pincode?: number;
    state?: string;
    country_code?: string;
    area_code_slug?: string;
    phone?: number;
    landmark?: string;
    country?: string;
    area_code: string;
    city?: string;
    meta?: any;
    name?: string;
    email?: string;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
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
    size: string;
    cashback_applied: number;
    product_id: number;
    quantity?: number;
    cod_charges: number;
    discount: number;
    loyalty_discount?: number;
    delivery_charges: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    coupon_effective_discount: number;
    amount_paid: number;
    price_marked: number;
    meta?: CartItemMeta;
    price_effective: number;
    extra_meta?: any;
    employee_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    cart_value: number;
    files?: OpenApiFiles[];
    comment?: string;
    coupon_code: string;
    coupon?: string;
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    order_id?: string;
    affiliate_order_id?: string;
    cashback_applied: number;
    loyalty_discount?: number;
    coupon_value: number;
    currency_code?: string;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    gstin?: string;
    cart_items: OpenApiOrderItem[];
    billing_address: ShippingAddress;
    employee_discount?: any;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    cod_charges?: any;
    cashback: any;
    app_id?: string;
    fynd_credits?: any;
    comment?: string;
    bulk_coupon_discount?: number;
    fc_index_map?: number[];
    is_active?: boolean;
    order_id?: string;
    meta?: any;
    user_id: string;
    buy_now?: boolean;
    merge_qty?: boolean;
    expire_at: string;
    gstin?: string;
    payments?: any;
    last_modified: string;
    _id: string;
    cart_value?: number;
    coupon?: any;
    payment_mode?: string;
    promotion?: any;
    checkout_mode?: string;
    articles: any[];
    created_on: string;
    discount?: number;
    delivery_charges?: any;
    is_default: boolean;
    is_archive?: boolean;
    shipments?: any[];
    payment_methods?: any[];
    uid: number;
    pick_up_customer_details?: any;
};
type AbandonedCartResponse = {
    success?: boolean;
    result?: any;
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
};
type AddProductCart = {
    store_id?: number;
    item_size?: string;
    item_id?: number;
    product_group_tags?: string[];
    pos?: boolean;
    quantity?: number;
    seller_id?: number;
    display?: string;
    article_assignment?: any;
    article_id?: string;
    extra_meta?: any;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    delivery_promise?: ShipmentPromise;
    id?: string;
    last_modified?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    is_valid?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    comment?: string;
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
    delivery_charge_info?: string;
    message?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_size?: string;
    item_id?: number;
    quantity?: number;
    item_index?: number;
    article_id?: string;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    parent_item_identifiers?: any;
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
    serviceability_type: string;
    channel_id: string;
    channel_type: string;
};
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityrErrorResponse;
    success: boolean;
    data?: ApplicationServiceabilityConfig;
};
type EntityRegionView_Request = {
    sub_type: string[];
    parent_id?: string[];
};
type EntityRegionView_page = {
    current: number;
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
};
type EntityRegionView_Error = {
    type?: string;
    message?: string;
    value?: string;
};
type EntityRegionView_Items = {
    sub_type: string;
    uid: string;
    name: string;
};
type EntityRegionView_Response = {
    page: EntityRegionView_page;
    error: EntityRegionView_Error;
    success: boolean;
    data: EntityRegionView_Items[];
};
type ListViewSummary = {
    total_zones: number;
    total_active_zones: number;
    total_pincodes_served: number;
};
type ZoneDataItem = {
    current: number;
    has_next: boolean;
    type: string;
    item_total: number;
    size: number;
};
type ListViewProduct = {
    type: string;
    count: number;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    stores_count: number;
    is_active: boolean;
    product: ListViewProduct;
    name: string;
    channels: ListViewChannels;
    zone_id: string;
    company_id: number;
    pincodes_count: number;
    slug: string;
};
type ListViewResponse = {
    summary: ListViewSummary[];
    page: ZoneDataItem[];
    items: ListViewItems[];
};
type CompanyStoreView_PageItems = {
    current: number;
    type: string;
    has_next: boolean;
    item_total: number;
    size: number;
};
type CompanyStoreView_Response = {
    page: CompanyStoreView_PageItems[];
    items?: any[];
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
    country: string;
    state?: string[];
    pincode?: string[];
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
    identifier: string;
    data: UpdateZoneData;
};
type ZoneSuccessResponse = {
    success: boolean;
    status_code: number;
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
    identifier: string;
    data: CreateZoneData;
};
type ZoneResponse = {
    success: boolean;
    status_code: number;
    zone_id: string;
};
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
type CreatedByResponse = {
    username?: string;
    user_id?: string;
};
type IntegrationTypeResponse = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type ModifiedByResponse = {
    username?: string;
    user_id?: string;
};
type WarningsResponse = {
    store_address?: string;
};
type AddressResponse = {
    state?: string;
    city?: string;
    latitude?: number;
    country?: string;
    address2?: string;
    landmark?: string;
    pincode?: number;
    address1?: string;
    longitude?: number;
};
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
type TimmingResponse = {
    closing?: OpeningClosing;
    open?: boolean;
    opening?: OpeningClosing;
    weekday?: string;
};
type Dp = {
    payment_mode?: string;
    operations?: string[];
    external_account_id?: string;
    assign_dp_from_sb?: boolean;
    area_code?: number;
    transport_mode?: string;
    lm_priority?: number;
    internal_account_id?: string;
    rvp_priority?: number;
    fm_priority?: number;
};
type LogisticsResponse = {
    dp?: Dp;
    override?: boolean;
};
type EwayBillResponse = {
    enabled?: boolean;
};
type EinvoiceResponse = {
    enabled?: boolean;
};
type GstCredentialsResponse = {
    e_waybill?: EwayBillResponse;
    e_invoice?: EinvoiceResponse;
};
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
type MobileNo = {
    number?: string;
    country_code?: number;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    email?: string;
    name?: string;
};
type DocumentsResponse = {
    type?: string;
    legal_name?: string;
    verified?: boolean;
    value?: string;
};
type ItemResponse = {
    created_by?: CreatedByResponse;
    _custom_json?: any;
    integration_type?: IntegrationTypeResponse;
    uid?: number;
    name?: string;
    product_return_config?: ProductReturnConfigResponse;
    modified_by?: ModifiedByResponse;
    warnings?: WarningsResponse;
    company_id?: number;
    notification_emails?: string[];
    code?: string;
    display_name?: string;
    verified_on?: string;
    address?: AddressResponse;
    company?: number;
    timing?: TimmingResponse[];
    _cls?: string;
    sub_type?: string;
    stage?: string;
    created_on?: string;
    store_type?: string;
    logistics?: LogisticsResponse;
    gst_credentials?: GstCredentialsResponse;
    contact_numbers?: ContactNumberResponse[];
    manager?: ManagerResponse;
    documents?: DocumentsResponse[];
    verified_by?: ModifiedByResponse;
    modified_on?: string;
};
type GetStoresViewResponse = {
    page: PageResponse;
    items?: ItemResponse[];
};
