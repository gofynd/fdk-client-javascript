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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, UserGroupResponseSchema, UserGroupListResponseSchema, CreateUserGroupSchema, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserGroupSchema, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, UserSchema, PhoneNumber, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, UserDataInfo, ShipmentItemFulFillingStore, PaymentModeInfo, PlatformItem, GSTDetailsData, Prices, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, OrderDetailsData, FulfillingStore, BagStateMapper, BagStatusHistory, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, PlatformDeliveryAddress, CurrentStatus, BagGST, OrderBrandName, OrderBagArticle, BagConfigs, OrderBags, InvoiceInfo, ShipmentStatusData, TrackingList, PDFLinks, AffiliateMeta, LockData, EinvoiceInfo, ShipmentTimeStamp, BuyerDetails, DebugInfo, Formatted, ShipmentMeta, AffiliateDetails, OrderingStoreDetails, Dimensions, Meta, CompanyDetails, DPDetailsData, ShipmentPayments, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, TransactionData, PlatformUserDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, Attributes, Item, BagReturnableCancelableStatus, BagGSTDetails, AffiliateBagDetails, Brand, B2BPODetails, BagMeta, StoreAddress, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, Store, Weight, ReturnConfig, Article, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, MarketPlacePdf, AffiliateBag, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderUser, UserData, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, PaymentMethod, PaymentInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemMOQ, ApplicationItemSEO, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionSchedule, UserInfo, CollectionQuery, CollectionImage, SeoDetail, CollectionBadge, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, CollectionItem, CollectionItemUpdate, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TeaserTag, NetQuantity, TaxIdentifier, CustomOrder, ProductPublish, Trader, ProductCreateUpdateSchemaV2, NetQuantityResponse, ProductPublish1, Logo, ReturnConfigResponse, Image, VerifiedBy, ProductSchemaV2, ProductListingResponseV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, DimensionResponse, ManufacturerResponse, WeightResponse, BrandMeta, ReturnConfig1, CompanyMeta, PriceMeta, QuantityBase, Quantities, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, DimensionResponse1, ManufacturerResponse1, WeightResponse1, BrandMeta1, ReturnConfig2, ArticleStoreResponse, CompanyMeta1, PriceArticle, Quantity, QuantitiesArticle, Trader2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryCreateRequest, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CommunicationConfig, CommsConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, RuleDefinition, CouponAuthor, BulkBundleRestriction, PostOrder, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, Restrictions, CouponDateMeta, DisplayMetaDict, DisplayMeta, Rule, State, CouponAction, CouponSchedule, Validation, Validity, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAuthor, PromotionSchedule, Visibility, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, DisplayMeta1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, PromoMeta, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, ProductPrice, ProductPriceInfo, CartProductInfo, LoyaltyPoints, CouponBreakup, DisplayBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    category: TicketCategory;
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
type UserGroupResponseSchema = {
    name?: string;
    description?: string;
    file_url?: string;
    _id?: string;
    status?: string;
    uid?: number;
    application_id?: string;
    created_at?: string;
    modified_at?: string;
    __v?: number;
};
type UserGroupListResponseSchema = {
    items?: UserGroupResponseSchema[];
    page?: PaginationSchema;
};
type CreateUserGroupSchema = {
    name: string;
    description: string;
    file_url: string;
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
type UpdateUserGroupSchema = {
    name?: string;
    description?: string;
    file_url?: string;
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
    cannonical_enabled?: boolean;
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
    created: boolean;
    aggregators?: any[];
    success: boolean;
    display_fields: string[];
    excluded_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
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
    display_name?: string;
    package_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    nickname?: string;
    expired?: boolean;
    merchant_code?: string;
    retry_count?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    compliant_with_tokenisation_guidelines?: boolean;
    exp_month?: number;
    intent_app_error_list?: string[];
    card_name?: string;
    card_reference?: string;
    intent_app?: IntentApp[];
    card_issuer?: string;
    card_token?: string;
    aggregator_name: string;
    card_isin?: string;
    card_brand_image?: string;
    display_priority?: number;
    logo_url?: PaymentModeLogo;
    intent_flow?: boolean;
    card_id?: string;
    exp_year?: number;
    card_number?: string;
    fynd_vpa?: string;
    code?: string;
    timeout?: number;
    card_fingerprint?: string;
    display_name?: string;
    name?: string;
    card_type?: string;
    card_brand?: string;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    list?: PaymentModeList[];
    display_name: string;
    is_pay_by_card_pl?: boolean;
    add_card_enabled?: boolean;
    save_card?: boolean;
    aggregator_name?: string;
    name: string;
    display_priority: number;
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
    payouts_aggregators: any[];
    transfer_type: string;
    unique_transfer_no: any;
    customers: any;
    is_default: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    bank_name?: string;
    state?: string;
    branch_name?: string;
    city?: string;
    account_holder?: string;
    account_type: string;
    ifsc_code: string;
    account_no?: string;
    country?: string;
    pincode?: number;
};
type PayoutRequest = {
    aggregator: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    unique_external_id: string;
    users: any;
};
type PayoutResponse = {
    created: boolean;
    payouts: any;
    payment_status: string;
    aggregator: string;
    is_active: boolean;
    success: boolean;
    bank_details: any;
    transfer_type: string;
    unique_transfer_no: string;
    users: any;
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
    data?: any;
    is_verified_flag?: boolean;
    success: boolean;
    message: string;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    account_holder: string;
    ifsc_code: string;
    account_no: string;
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
    bank_name: string;
    account_holder: string;
    address: string;
    ifsc_code: string;
    subtitle: string;
    mobile?: string;
    modified_on: string;
    beneficiary_id: string;
    email: string;
    account_no: string;
    created_on: string;
    is_active: boolean;
    title: string;
    id: number;
    branch_name?: string;
    transfer_mode: string;
    display_name: string;
    comment?: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    payment_gateway?: string;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
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
type Code = {
    name: string;
    code: string;
    merchant_code: string;
};
type PaymentCode = {
    name: string;
    networks: string;
    types: string;
    codes: Code;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type GetPaymentCodeResponse = {
    data: GetPaymentCode;
    success: boolean;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    options?: FilterInfoOption[];
    type: string;
    text: string;
};
type ShipmentStatus = {
    status: string;
    hex_code: string;
    ops_status: string;
    actual_status: string;
    title: string;
};
type UserDataInfo = {
    last_name?: string;
    first_name?: string;
    name?: string;
    avis_user_id?: string;
    uid?: number;
    mobile?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    email?: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    image?: string[];
    can_return?: boolean;
    l1_category?: string[];
    department_id?: number;
    color?: string;
    name?: string;
    l3_category?: number;
    id?: number;
    code?: string;
    can_cancel?: boolean;
    l3_category_name?: string;
    size?: string;
    images?: string[];
};
type GSTDetailsData = {
    value_of_good: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
    gst_fee: number;
};
type Prices = {
    amount_paid?: number;
    price_effective?: number;
    value_of_good?: number;
    transfer_price?: number;
    discount?: number;
    tax_collected_at_source?: number;
    cashback_applied?: number;
    refund_credit?: number;
    refund_amount?: number;
    delivery_charge?: number;
    cashback?: number;
    coupon_value?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    price_marked?: number;
    cod_charges?: number;
};
type BagUnit = {
    ordering_channel: string;
    item?: PlatformItem;
    status: any;
    can_return?: boolean;
    total_shipment_bags: number;
    shipment_id: string;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
    prices?: Prices;
    bag_id: number;
    item_quantity: number;
};
type ShipmentItem = {
    channel?: any;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    user?: UserDataInfo;
    total_bags_count: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
    sla?: any;
    id: string;
    shipment_id?: string;
    bags?: BagUnit[];
    prices?: Prices;
    created_at: string;
    application?: any;
    shipment_created_at: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type UserDetailsData = {
    pincode: string;
    phone: string;
    name: string;
    address: string;
    city: string;
    country: string;
    state: string;
    email?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    ordering_channel?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    affiliate_id?: string;
    tax_details?: any;
    order_date?: string;
    source?: string;
    cod_charges?: string;
};
type FulfillingStore = {
    pincode: string;
    store_name: string;
    meta: any;
    contact_person: string;
    phone: string;
    address: string;
    city: string;
    id: number;
    code: string;
    country: string;
    fulfillment_channel: string;
    state: string;
};
type BagStateMapper = {
    state_type: string;
    app_state_name?: string;
    journey_type: string;
    bs_id: number;
    name: string;
    notify_customer?: boolean;
    is_active?: boolean;
    app_display_name?: string;
    display_name: string;
    app_facing?: boolean;
};
type BagStatusHistory = {
    reasons?: any[];
    state_type?: string;
    delivery_partner_id?: number;
    bsh_id?: number;
    status: string;
    forward?: boolean;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    shipment_id?: string;
    created_at?: string;
    app_display_name?: string;
    updated_at?: string;
    state_id?: number;
    bag_id?: number;
    store_id?: number;
    kafka_sync?: boolean;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type AppliedPromos = {
    amount?: number;
    promo_id?: string;
    article_quantity?: number;
    promotion_name?: string;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid: number;
    transfer_price: number;
    cashback_applied: number;
    coupon_value: number;
    coupon_effective_discount: number;
    fynd_credits: number;
    promotion_effective_discount: number;
    identifiers: Identifier;
    amount_paid_roundoff?: number;
    size: string;
    price_marked: number;
    refund_credit: number;
    cod_charges: number;
    price_effective: number;
    value_of_good: number;
    tax_collected_at_source?: number;
    item_name: string;
    cashback: number;
    hsn_code: string;
    total_units: number;
    discount: number;
    brand_calculated_amount: number;
    added_to_fynd_cash: boolean;
    gst_tax_percentage: number;
    gst_tag: string;
    gst_fee: number;
    delivery_charge: number;
};
type PlatformDeliveryAddress = {
    version?: string;
    pincode?: string;
    address_type?: string;
    address1?: string;
    address_category?: string;
    contact_person?: string;
    phone?: string;
    area?: string;
    landmark?: string;
    city?: string;
    country?: string;
    address2?: string;
    latitude?: number;
    created_at?: string;
    updated_at?: string;
    longitude?: number;
    state?: string;
    email?: string;
};
type CurrentStatus = {
    current_status_id: number;
    delivery_partner_id?: number;
    status?: string;
    state_id?: number;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    created_at?: string;
    updated_at?: string;
    state_type?: string;
    bag_id?: number;
    store_id?: number;
    kafka_sync?: boolean;
};
type BagGST = {
    value_of_good?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tax_percentage?: number;
    gst_tag?: string;
    gst_fee?: number;
};
type OrderBrandName = {
    logo: string;
    brand_name: string;
    id: number;
    created_on: string;
    company: string;
    modified_on?: string;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    allow_force_return: boolean;
};
type OrderBags = {
    prices?: Prices;
    identifier?: string;
    applied_promos?: AppliedPromos[];
    bag_id: number;
    financial_breakup?: FinancialBreakup;
    quantity?: number;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    brand?: OrderBrandName;
    can_return?: boolean;
    article?: OrderBagArticle;
    seller_identifier?: string;
    parent_promo_bags?: any;
    display_name?: string;
    line_number?: number;
    bag_configs?: BagConfigs;
    can_cancel?: boolean;
    entity_type?: string;
};
type InvoiceInfo = {
    invoice_url?: string;
    credit_note_id?: string;
    updated_date?: string;
    label_url?: string;
    store_invoice_id?: string;
};
type ShipmentStatusData = {
    status?: string;
    bag_list?: string[];
    id?: number;
    shipment_id?: string;
    created_at?: string;
};
type TrackingList = {
    status: string;
    is_current?: boolean;
    time?: string;
    text: string;
    is_passed?: boolean;
};
type PDFLinks = {
    label_a6?: string;
    invoice?: string;
    b2b?: string;
    label?: string;
    delivery_challan_a4?: string;
    label_type: string;
    credit_note_url?: string;
    po_invoice?: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_type: string;
    invoice_pos?: string;
    label_a4?: string;
    invoice_a4?: string;
};
type AffiliateMeta = {
    quantity?: number;
    channel_order_id?: string;
    order_item_id?: string;
    employee_discount?: number;
    loyalty_discount?: number;
    due_date?: string;
    is_priority?: boolean;
    coupon_code?: string;
    channel_shipment_id?: string;
    box_type?: string;
    size_level_total_qty?: number;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    pincode: number;
    ajio_site_id?: string;
    name: string;
    city: string;
    address: string;
    state: string;
    gstin: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    store_invoice_updated_date?: string;
    return_awb_number?: string;
    lock_data?: LockData;
    packaging_name?: string;
    shipment_weight?: number;
    b2c_buyer_details?: any;
    dp_sort_key?: string;
    einvoice_info?: EinvoiceInfo;
    auto_trigger_dp_assignment_acf: boolean;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
    marketplace_store_id?: string;
    b2b_buyer_details?: BuyerDetails;
    return_store_node?: number;
    order_type?: string;
    ewaybill_info?: any;
    return_affiliate_order_id?: string;
    awb_number?: string;
    dp_options?: any;
    shipment_volumetric_weight?: number;
    debug_info?: DebugInfo;
    bag_weight?: any;
    external?: any;
    weight: number;
    fulfilment_priority_text?: string;
    formatted?: Formatted;
    box_type?: string;
    return_affiliate_shipment_id?: string;
    assign_dp_from_sb?: boolean;
    forward_affiliate_shipment_id?: string;
    return_details?: any;
    due_date?: string;
    same_store_available: boolean;
    forward_affiliate_order_id?: string;
    po_number?: string;
    dp_name?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    affiliate_id?: string;
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
};
type OrderingStoreDetails = {
    pincode: string;
    store_name: string;
    meta: any;
    contact_person: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    code: string;
    ordering_store_id: number;
    state: string;
};
type Dimensions = {
    unit?: string;
    is_default?: boolean;
    height?: number;
    length?: number;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type CompanyDetails = {
    company_cin?: string;
    company_id?: number;
    manufacturer_address?: any;
    company_name?: string;
};
type DPDetailsData = {
    awb_no?: string;
    pincode?: string;
    eway_bill_id?: string;
    name?: string;
    country?: string;
    id?: number;
    gst_tag?: string;
    track_url?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type PlatformShipment = {
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    journey_type?: string;
    order?: OrderDetailsData;
    fulfilling_store?: FulfillingStore;
    bag_status_history?: BagStatusHistory[];
    pdf_links?: any;
    custom_meta?: any[];
    bags?: OrderBags[];
    prices?: Prices;
    invoice?: InvoiceInfo;
    status?: ShipmentStatusData;
    tracking_list?: TrackingList[];
    operational_status?: string;
    forward_shipment_id?: string;
    billing_details?: UserDetailsData;
    affiliate_details?: AffiliateDetails;
    gst_details?: GSTDetailsData;
    shipment_quantity?: number;
    packaging_type?: string;
    shipment_id: string;
    platform_logo?: string;
    total_items?: number;
    ordering_store?: OrderingStoreDetails;
    user?: UserDataInfo;
    meta?: Meta;
    fulfilment_priority?: number;
    priority_text?: string;
    total_bags?: number;
    company_details?: CompanyDetails;
    enable_dp_tracking?: boolean;
    lock_status?: boolean;
    payment_methods?: any;
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    payment_mode?: string;
    coupon?: any;
    shipment_images?: string[];
    vertical?: string;
    invoice_id?: string;
    picked_date?: string;
    payments?: ShipmentPayments;
    user_agent?: string;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    message?: string;
};
type BillingStaffDetails = {
    staff_id?: number;
    first_name?: string;
    last_name?: string;
    user?: string;
};
type TransactionData = {
    entity?: string;
    amount_paid?: string;
    status?: string;
    transaction_id?: string;
    payment_id?: string;
    currency?: string;
    terminal_id?: string;
    unique_reference_number?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type OrderMeta = {
    currency_symbol?: string;
    cart_id?: number;
    order_tags?: any[];
    extra_meta?: any;
    company_logo?: string;
    billing_staff_details?: BillingStaffDetails;
    comment?: string;
    order_type?: string;
    staff?: any;
    employee_id?: number;
    order_child_entities?: string[];
    customer_note?: string;
    mongo_cart_id?: number;
    ordering_store?: number;
    transaction_data?: TransactionData;
    platform_user_details?: PlatformUserDetails;
    order_platform?: string;
    files?: any[];
    payment_type?: string;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type OrderDict = {
    fynd_order_id: string;
    payment_methods?: any;
    meta?: OrderMeta;
    prices?: Prices;
    tax_details?: TaxDetails;
    order_date: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    index?: number;
    text?: string;
    value?: string;
    total_items?: number;
    actions?: any[];
};
type SuperLane = {
    value: string;
    options?: SubLane[];
    total_items?: number;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    meta?: any;
    shipments?: PlatformShipment[];
    order_id?: string;
    order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    order_created_time?: string;
    user_info?: UserDataInfo;
};
type OrderListingResponse = {
    total_count?: number;
    lane?: string;
    items?: PlatformOrderItems[];
    message?: string;
    page?: Page;
    success?: boolean;
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
    account_name?: string;
    status?: string;
    meta?: any;
    awb?: string;
    reason?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    shipment_type?: string;
    raw_status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    status?: string;
    report_id?: string;
    report_name?: string;
    s3_key?: string;
    report_requested_at?: string;
    report_created_at?: string;
    request_details?: any;
    report_type?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    company_id?: string;
    article_id?: string;
    item_id?: string;
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
    success?: boolean;
    data?: any[];
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    company_id?: string;
    store_code?: string;
    invoice?: any;
    label?: any;
    store_name?: string;
    do_invoice_label_generated: boolean;
    invoice_status?: string;
    data?: any;
    store_id?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    cdn?: URL;
    file_name?: string;
    content_type?: string;
    tags?: string[];
    operation?: string;
    file_path?: string;
    namespace?: string;
    upload?: FileUploadResponse;
    size?: number;
    method?: string;
};
type BulkListingPage = {
    type?: string;
    has_previous?: boolean;
    current?: number;
    total?: number;
    has_next?: boolean;
    size?: number;
};
type bulkListingData = {
    user_name?: string;
    company_id?: number;
    store_code?: string;
    processing?: number;
    batch_id?: string;
    status?: string;
    file_name?: string;
    uploaded_on?: string;
    total?: number;
    excel_url?: string;
    store_id?: number;
    successful?: number;
    store_name?: string;
    user_id?: string;
    id?: string;
    failed_shipments?: any[];
    failed?: number;
    successful_shipments?: any[];
    processing_shipments?: string[];
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
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
    batch_id?: string;
    company_id?: string;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    uploaded_on?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    message?: string;
    success?: string;
    error?: string[];
    uploaded_by?: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Attributes = {
    primary_color?: string;
    brand_name?: string;
    name?: string;
    gender?: string[];
    marketer_name?: string;
    marketer_address?: string;
    primary_material?: string;
    primary_color_hex?: string;
    essential?: string;
};
type Item = {
    branch_url?: string;
    l2_category_id?: number;
    l1_category?: string[];
    name: string;
    l3_category?: number;
    slug_key: string;
    gender?: string;
    code?: string;
    attributes: Attributes;
    image: string[];
    size: string;
    l2_category?: string[];
    last_updated_at?: string;
    l3_category_name?: string;
    l1_category_id?: number;
    webstore_product_url?: string;
    brand: string;
    can_return?: boolean;
    meta?: any;
    item_id: number;
    department_id?: number;
    color?: string;
    can_cancel?: boolean;
    brand_id: number;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type BagGSTDetails = {
    value_of_good: number;
    hsn_code: string;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    tax_collected_at_source: number;
    cgst_tax_percentage: number;
    cgst_gst_fee: string;
    sgst_tax_percentage: number;
    igst_gst_fee: string;
    gst_tax_percentage: number;
    gst_tag: string;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
    gst_fee: number;
    hsn_code_id: string;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type Brand = {
    script_last_ran?: string;
    credit_note_allowed?: boolean;
    start_date?: string;
    credit_note_expiry_days?: number;
    logo?: string;
    brand_name: string;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    invoice_prefix?: string;
    created_on?: number;
    brand_id: number;
    company: string;
    modified_on?: number;
};
type B2BPODetails = {
    docker_number?: string;
    po_tax_amount?: number;
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type StoreAddress = {
    address_type: string;
    contact_person: string;
    address2?: string;
    city: string;
    updated_at: string;
    state: string;
    area?: string;
    country_code: string;
    country: string;
    version?: string;
    pincode: number;
    address_category: string;
    latitude: number;
    created_at: string;
    email?: string;
    address1: string;
    landmark?: string;
    phone: string;
    longitude: number;
};
type Document = {
    ds_type: string;
    url?: string;
    legal_name: string;
    value: string;
    verified: boolean;
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
    enabled: boolean;
    password?: string;
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
    notification_emails?: string[];
    documents?: StoreDocuments;
    stage: string;
    product_return_config?: any;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
    timing?: any[];
    display_name: string;
    gst_number?: string;
};
type Store = {
    company_id: number;
    store_active_from?: string;
    contact_person: string;
    brand_store_tags?: string[];
    name: string;
    address2?: string;
    city: string;
    code?: string;
    updated_at?: string;
    store_address_json?: StoreAddress;
    parent_store_id?: number;
    state: string;
    mall_area?: string;
    vat_no?: string;
    is_archived?: boolean;
    alohomora_user_id?: number;
    country: string;
    is_enabled_for_recon?: boolean;
    packaging_material_count?: number;
    location_type: string;
    pincode: string;
    meta: StoreMeta;
    order_integration_id?: string;
    latitude: number;
    created_at: string;
    s_id: string;
    address1: string;
    phone: number;
    mall_name?: string;
    store_email: string;
    login_username: string;
    brand_id?: any;
    fulfillment_channel: string;
    longitude: number;
    is_active?: boolean;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Article = {
    esp_modified?: any;
    a_set?: any;
    dimensions?: Dimensions;
    raw_meta?: any;
    seller_identifier: string;
    weight?: Weight;
    child_details?: any;
    is_set?: boolean;
    uid: string;
    code?: string;
    identifiers: Identifier;
    _id: string;
    size: string;
    return_config?: ReturnConfig;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    no_of_bags_order?: number;
    journey_type: string;
    dates?: Dates;
    bag_status_history?: BagStatusHistory;
    prices: Prices;
    identifier?: string;
    applied_promos?: any[];
    financial_breakup: FinancialBreakup[];
    restore_promos?: any;
    quantity?: number;
    item: Item;
    status: BagReturnableCancelableStatus;
    current_status: BagStatusHistory;
    current_operational_status: BagStatusHistory;
    operational_status?: string;
    affiliate_details?: AffiliateDetails;
    original_bag_list?: number[];
    gst_details: BagGSTDetails;
    bag_update_time?: number;
    shipment_id?: string;
    b_type?: string;
    reasons?: any[];
    affiliate_bag_details: AffiliateBagDetails;
    brand: Brand;
    b_id: number;
    meta?: BagMeta;
    ordering_store?: Store;
    article: Article;
    order_integration_id?: string;
    seller_identifier?: string;
    qc_required?: any;
    parent_promo_bags?: any;
    article_details?: ArticleDetails;
    restore_coupon?: boolean;
    display_name?: string;
    bag_status: BagStatusHistory[];
    line_number?: number;
    tags?: string[];
    entity_type?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    has_next: boolean;
    size: number;
    item_total: number;
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
    status: number;
    error_trace?: string;
    message: string;
};
type StoreReassign = {
    affiliate_order_id?: string;
    set_id?: string;
    bag_id?: number;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    store_id: number;
    mongo_article_id?: string;
    item_id?: string;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_id?: string;
    reason_text: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action_type: string;
    action: string;
    entity_type: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    original_filter?: OriginalFilter;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    status?: string;
    affiliate_shipment_id?: string;
    shipment_id?: string;
    lock_status?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    created_at?: string;
    id: number;
    logo_url?: string;
    description?: string;
    company_id?: number;
    platform_name?: string;
    to_datetime?: string;
    from_datetime?: string;
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
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    stack_trace?: string;
    code?: string;
    identifier?: string;
    message?: string;
    exception?: string;
    status?: number;
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
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    updated_at: string;
    name: string;
    id: string;
    secret: string;
    description?: string;
    owner: string;
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
    bag_end_state?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    article_lookup?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    amount_paid: number;
    modified_on: string;
    unit_price: number;
    transfer_price: number;
    item_id: number;
    price_effective: number;
    item_size: string;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
    affiliate_meta: any;
    avl_qty: number;
    identifier: any;
    price_marked: number;
    affiliate_store_id: string;
    sku: string;
    quantity: number;
    company_id: number;
    store_id: number;
    discount: number;
    seller_identifier: string;
    fynd_store_id: string;
    hsn_code_id: string;
    _id: string;
};
type ArticleDetails1 = {
    brand_id: number;
    dimension: any;
    attributes: any;
    category: any;
    weight: any;
    quantity: number;
    _id: string;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    dp_id?: number;
    fulfillment_id: number;
    shipments: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
    box_type?: string;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    identifier: string;
    action: string;
    shipment: ShipmentDetails[];
    source: string;
    payment_mode: string;
    to_pincode: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderUser = {
    country: string;
    pincode: string;
    mobile: number;
    email: string;
    first_name: string;
    last_name: string;
    address2?: string;
    state: string;
    phone: number;
    city: string;
    address1?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type OrderInfo = {
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    order_value: number;
    discount: number;
    items: any;
    shipment?: ShipmentData;
    user: UserData;
    order_priority?: OrderPriority;
    payment_mode: string;
    billing_address: OrderUser;
    payment?: any;
    delivery_charges: number;
    cod_charges: number;
    shipping_address: OrderUser;
    coupon?: string;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    order_info: OrderInfo;
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
    message: string;
    bag_id?: number;
    ticket_url?: string;
    user: string;
    l2_detail?: string;
    l3_detail?: string;
    type: string;
    ticket_id?: string;
    l1_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryFilters = {
    shipment_id: string;
    line_number?: string;
    identifier?: string;
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
    phone_number: number;
    message: string;
    country_code: string;
    brand_name: string;
    payment_mode: string;
    order_id: string;
    shipment_id: number;
    customer_name: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    bag_list?: number[];
    id: number;
    status?: string;
    shipment_id?: string;
    meta: Meta1;
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    alternate_mobile_number?: string;
    country_code?: string;
    customer_code?: string;
    pincode: string;
    landmark?: string;
    gender?: string;
    first_name: string;
    middle_name?: string;
    external_customer_code?: string;
    state: string;
    state_code?: string;
    primary_email: string;
    address2?: string;
    slot?: any[];
    city: string;
    title?: string;
    address_type?: string;
    alternate_email?: string;
    country: string;
    last_name?: string;
    geo_location?: any;
    shipping_type?: string;
    floor_no?: string;
    house_no?: string;
    primary_mobile_number: string;
    address1: string;
};
type Tax = {
    name: string;
    rate: number;
    breakup?: any[];
    amount: any;
};
type Charge = {
    code?: string;
    name: string;
    amount: any;
    type: string;
    tax?: Tax;
};
type LineItem = {
    custom_messasge?: string;
    seller_identifier: string;
    quantity?: number;
    charges?: Charge[];
    meta?: any;
    external_line_id?: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    priority?: number;
    meta?: any;
};
type BillingInfo = {
    alternate_mobile_number?: string;
    country_code?: string;
    customer_code?: string;
    pincode: string;
    gender?: string;
    first_name: string;
    middle_name?: string;
    external_customer_code?: string;
    state: string;
    state_code?: string;
    primary_email: string;
    address2?: string;
    city: string;
    title?: string;
    alternate_email?: string;
    country: string;
    last_name?: string;
    floor_no?: string;
    house_no?: string;
    primary_mobile_number: string;
    address1: string;
};
type PaymentMethod = {
    name: string;
    mode: string;
    collect_by: string;
    amount: number;
    refund_by: string;
    transaction_data?: any;
    meta?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    shipments: Shipment[];
    billing_info: BillingInfo;
    external_order_id?: string;
    currency_info?: any;
    payment_info: PaymentInfo;
    charges?: Charge[];
    external_creation_date?: string;
    tax_info?: TaxInfo;
    meta?: any;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    code?: string;
    message: string;
    info?: any;
    exception?: string;
    status: number;
    request_id?: string;
    meta?: string;
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
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
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
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
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
    end_date: string;
    order_details?: FyndOrderIdList[];
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    result: SearchKeywordResult;
    is_active?: boolean;
};
type GetSearchWordsData = {
    words?: string[];
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    result?: any;
    is_active?: boolean;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    query?: any;
    type?: string;
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
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    words?: string[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    results?: any[];
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    max_quantity: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    product_uid: number;
    min_quantity: number;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    modified_by?: any;
    name: string;
    created_by?: any;
    created_on?: string;
    slug: string;
    is_active: boolean;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    modified_by?: any;
    name: string;
    created_by?: any;
    id?: string;
    created_on?: string;
    slug: string;
    is_active: boolean;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    modified_by?: any;
    name: string;
    slug: string;
    is_active: boolean;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    meta?: any;
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type LimitedProductData = {
    item_code?: string;
    name?: string;
    price?: any;
    attributes?: any;
    slug?: string;
    sizes?: string[];
    uid?: number;
    images?: string[];
    identifier?: any;
    short_description?: string;
    country_of_origin?: string;
    quantity?: number;
};
type Size = {
    display?: string;
    value?: string;
    is_available?: boolean;
    quantity?: number;
};
type GetProducts = {
    max_quantity?: number;
    allow_remove?: boolean;
    price?: Price;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    auto_select?: boolean;
    product_uid?: number;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    name?: string;
    slug?: string;
    is_active?: boolean;
    company_id?: number;
    choice?: string;
    products?: GetProducts[];
    meta?: any;
    page_visibility?: string[];
    logo?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    id?: string;
    description?: string;
    name: string;
    created_by?: any;
    modified_by?: any;
    subtitle?: string;
    title: string;
    brand_id?: number;
    active?: boolean;
    tag?: string;
    company_id?: number;
    guide?: Guide;
    created_on?: string;
    modified_on?: string;
    image?: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    id?: string;
    created_by?: any;
    modified_by?: any;
    name?: string;
    subtitle?: string;
    title?: string;
    brand_id?: number;
    active?: boolean;
    company_id?: number;
    guide?: any;
    tag?: string;
    created_on?: string;
    modified_on?: string;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
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
    moq?: MOQData;
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    name: string;
    slug?: string;
    key?: string;
    is_active: boolean;
    priority: number;
    unit?: string;
    logo?: string;
    display_type: string;
};
type AppConfigurationDetail = {
    name?: string;
    attributes?: AttributeDetailsGroup[];
    slug: string;
    template_slugs?: string[];
    app_id: string;
    logo?: string;
    priority: number;
    is_default: boolean;
    is_active: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    total_count: number;
    next: number;
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
    name?: string;
    default_key: string;
    key: string;
    app_id: string;
    logo?: string;
    priority: number;
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
    units?: any[];
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
    compare?: any;
    detail?: any;
    similar?: any;
    variant?: any;
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
    value?: string;
    condition?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    display_name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
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
type ConfigurationProductConfig = {
    size?: ProductSize;
    subtitle?: string;
    key: string;
    title?: string;
    is_active: boolean;
    priority: number;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    name: string;
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    config_id?: string;
    config_type: string;
    type?: string;
    created_by?: any;
    modified_by?: any;
    listing?: ConfigurationListing;
    app_id: string;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
};
type AppCatalogConfiguration = {
    id?: string;
    config_id?: string;
    config_type: string;
    type?: string;
    created_by?: any;
    modified_by?: any;
    listing?: ConfigurationListing;
    app_id: string;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
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
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    selected_min?: number;
    value: any;
    count?: number;
    currency_code?: string;
    selected_max?: number;
    display: string;
    min?: number;
    query_format?: string;
    display_format?: string;
    max?: number;
    is_selected: boolean;
    currency_symbol?: string;
};
type ProductFiltersKey = {
    operators?: string[];
    name: string;
    display: string;
    logo?: string;
    kind?: string;
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
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    duration?: number;
    cron?: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    _custom_json?: any;
    type: string;
    name: string;
    _locale_language?: any;
    is_visible?: boolean;
    meta?: any;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    modified_by?: UserInfo;
    created_by?: UserInfo;
    description?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    tags?: string[];
    slug: string;
    app_id: string;
    priority?: number;
    logo: CollectionImage;
    sort_on?: string;
    published?: boolean;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners: CollectionBanner;
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    name?: string;
    type?: string;
    meta?: any;
    cron?: any;
    is_active?: boolean;
    _schedule?: any;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
    query?: CollectionQuery[];
    slug?: string;
    app_id?: string;
    priority?: number;
    logo?: BannerImage;
    sort_on?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    badge?: any;
    banners?: ImageUrls;
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
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    name?: string;
    type?: string;
    action?: Action;
    meta?: any;
    cron?: any;
    is_active?: boolean;
    _schedule?: any;
    description?: string;
    allow_facets?: boolean;
    uid?: string;
    tag?: string[];
    query?: CollectionQuery[];
    slug?: string;
    app_id?: string;
    priority?: number;
    logo?: Media1;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    badge?: any;
    banners?: ImageUrls;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    name?: string;
    type?: string;
    meta?: any;
    cron?: any;
    is_active?: boolean;
    _schedule?: any;
    description?: string;
    allow_facets?: boolean;
    uid?: string;
    tag?: string[];
    query?: CollectionQuery[];
    slug?: string;
    app_id?: string;
    priority?: number;
    logo?: Media1;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    badge?: any;
    banners?: ImageUrls;
};
type UpdateCollection = {
    _custom_json?: any;
    name?: string;
    type?: string;
    _locale_language?: any;
    is_visible?: boolean;
    meta?: any;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    modified_by?: UserInfo;
    description?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    tags?: string[];
    slug?: string;
    priority?: number;
    logo?: CollectionImage;
    sort_on?: string;
    published?: boolean;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
};
type CollectionItem = {
    priority?: number;
    item_id: number;
    action: string;
};
type CollectionItemUpdate = {
    type?: string;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
    allow_sort?: boolean;
    items?: CollectionItem[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
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
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    name?: string;
    uid?: number;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    rating?: number;
    teaser_tag?: any;
    type?: string;
    name?: string;
    rating_count?: number;
    highlights?: string[];
    sellable?: boolean;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    attributes?: any;
    brand?: ProductBrand;
    uid?: number;
    discount?: string;
    item_type?: string;
    promo_meta?: any;
    product_online_date?: string;
    slug: string;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    image_nature?: string;
    item_code?: string;
    price?: ProductListingPrice;
    similars?: string[];
    tryouts?: string[];
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    article_freshness?: number;
    total_articles?: number;
    name?: string;
    available_articles?: number;
    total_sizes?: number;
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
    opt_level: string;
    platform?: string;
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
    store_ids?: number[];
};
type CompanyOptIn = {
    opt_level: string;
    platform: string;
    created_by?: any;
    modified_by?: any;
    enabled: boolean;
    company_id: number;
    brand_ids: number[];
    store_ids: number[];
    created_on: number;
    modified_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    business_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    store_type?: string;
    manager?: any;
    name?: string;
    timing?: any;
    store_code?: string;
    uid?: number;
    documents?: any[];
    company_id?: number;
    additional_contacts?: any[];
    created_on?: string;
    address?: any;
    display_name?: string;
    modified_on?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    type: string;
    multi?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    mandatory?: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    id?: string;
    description?: string;
    name?: string;
    slug?: string;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    departments?: string[];
    meta?: AttributeMasterMeta;
    logo?: string;
};
type CategoriesResponse = {
    template_slug?: string;
    slug_key?: string;
    name?: string;
    slug?: string;
    uid?: number;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    tags?: string[];
    _custom_json?: any;
    name: string;
    _cls?: string;
    synonyms?: string[];
    slug?: string;
    uid?: number;
    logo: string;
    priority_order: number;
    platforms?: any;
    is_active?: boolean;
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
    contact?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type GetDepartment = {
    created_by?: UserSerializer;
    name?: string;
    modified_by?: UserSerializer;
    slug?: string;
    synonyms?: string[];
    uid?: number;
    logo?: string;
    search?: string;
    page_size?: number;
    priority_order?: number;
    created_on?: string;
    item_type?: string;
    is_active?: boolean;
    page_no?: number;
    modified_on?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    _id?: any;
    _custom_json?: any;
    created_by?: UserDetail;
    verified_on?: string;
    modified_by?: UserDetail;
    name: any;
    slug: any;
    synonyms?: any[];
    _cls?: any;
    uid: number;
    is_active?: boolean;
    verified_by?: UserDetail;
    priority_order: number;
    created_on: string;
    logo: string;
    modified_on: string;
};
type ProductTemplate = {
    description?: string;
    name?: string;
    is_physical: boolean;
    attributes?: string[];
    created_by?: any;
    slug: string;
    is_expirable: boolean;
    modified_by?: any;
    modified_on?: string;
    tag?: string;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    created_on?: string;
    is_active?: boolean;
    categories?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    teaser_tag?: any;
    trader_type?: any;
    name?: any;
    media?: any;
    highlights?: any;
    sizes?: any;
    brand_uid?: any;
    hsn_code?: any;
    command?: any;
    size_guide?: any;
    custom_order?: any;
    multi_size?: any;
    is_active?: any;
    product_group_tag?: any;
    product_publish?: any;
    description?: any;
    no_of_boxes?: any;
    return_config?: any;
    is_dependent?: any;
    item_type?: any;
    category_slug?: any;
    tags?: any;
    slug?: any;
    short_description?: any;
    country_of_origin?: any;
    currency?: any;
    variants?: any;
    item_code?: any;
    trader?: any;
};
type GlobalValidation = {
    properties?: Properties;
    description?: string;
    type?: string;
    title?: string;
    required?: string[];
    definitions?: any;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    id?: string;
    description?: string;
    name?: string;
    is_physical: boolean;
    attributes?: string[];
    slug: string;
    is_expirable: boolean;
    tag?: string;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    is_active?: boolean;
    categories?: string[];
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
    hsn_code?: string[];
    country_of_origin?: string[];
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
    created_by?: UserInfo1;
    seller_id: number;
    type?: string;
    filters?: any;
    status?: string;
    url?: string;
    notification_emails?: string[];
    task_id: string;
    completed_on?: string;
    modified_on?: string;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    from_date?: string;
    catalogue_types: string[];
    templates: string[];
    to_date?: string;
    brands?: string[];
};
type ProductTemplateDownloadsExport = {
    filters?: ProductTemplateExportFilterRequest;
    type?: string;
    notification_emails?: string[];
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
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
    department: number;
    l2: number;
    l1: number;
};
type CategoryRequestBody = {
    media?: Media2;
    name: string;
    level: number;
    slug?: string;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    departments: number[];
    hierarchy?: Hierarchy[];
    priority?: number;
    tryouts?: string[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    id?: string;
    created_by?: any;
    name: string;
    level: number;
    media?: Media2;
    modified_by?: any;
    slug?: string;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    uid?: number;
    departments: number[];
    hierarchy?: Hierarchy[];
    created_on?: string;
    priority?: number;
    tryouts?: string[];
    is_active: boolean;
    modified_on?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type ProductCreateUpdateSchemaV2 = {
    variant_media?: any;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    name: string;
    highlights?: string[];
    media?: Media1[];
    is_set?: boolean;
    size_guide?: string;
    brand_uid: number;
    sizes: any[];
    bulk_job_id?: string;
    action?: string;
    net_quantity?: NetQuantity;
    requester?: string;
    tax_identifier: TaxIdentifier;
    custom_order?: CustomOrder;
    is_active?: boolean;
    multi_size?: boolean;
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    description?: string;
    attributes?: any;
    change_request_id?: any;
    uid?: number;
    no_of_boxes?: number;
    return_config: ReturnConfig;
    company_id: number;
    is_dependent?: boolean;
    item_type: string;
    category_slug: string;
    tags?: string[];
    slug: string;
    departments: number[];
    short_description?: string;
    country_of_origin: string;
    currency: string;
    variants?: any;
    item_code: string;
    is_image_less_product?: boolean;
    trader: Trader[];
    variant_group?: any;
    template_tag: string;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type ReturnConfigResponse = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductSchemaV2 = {
    l3_mapping?: string[];
    variant_media?: any;
    _custom_json?: any;
    teaser_tag?: any;
    name?: string;
    highlights?: string[];
    media?: Media1[];
    all_company_ids?: number[];
    is_set?: boolean;
    sizes?: any[];
    brand_uid?: number;
    category_uid?: number;
    hsn_code?: string;
    all_sizes?: any[];
    size_guide?: string;
    category?: any;
    net_quantity?: NetQuantityResponse;
    created_on?: string;
    custom_order?: any;
    multi_size?: boolean;
    tax_identifier?: any;
    is_active?: boolean;
    product_group_tag?: string[];
    product_publish?: ProductPublish1;
    description?: string;
    created_by?: any;
    modified_by?: any;
    primary_color?: string;
    brand?: Brand;
    attributes?: any;
    is_expirable?: boolean;
    moq?: any;
    uid?: number;
    return_config?: ReturnConfigResponse;
    no_of_boxes?: number;
    company_id?: number;
    is_dependent?: boolean;
    item_type?: string;
    modified_on?: string;
    category_slug?: string;
    tags?: string[];
    verified_on?: string;
    slug?: string;
    all_identifiers?: string[];
    departments?: number[];
    images?: Image[];
    verified_by?: VerifiedBy;
    short_description?: string;
    country_of_origin?: string;
    currency?: string;
    color?: string;
    variants?: any;
    image_nature?: string;
    item_code?: string;
    is_physical?: boolean;
    id?: string;
    is_image_less_product?: boolean;
    stage?: string;
    trader?: Trader[];
    variant_group?: any;
    pending?: string;
    template_tag?: string;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type ProductVariants = {
    item_code?: string;
    name?: string;
    media?: Media1[];
    brand_uid?: number;
    uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    name?: string;
    details: AttributeMasterDetails;
    created_on?: string;
    unit?: string;
    suggestion?: string;
    description?: string;
    created_by?: any;
    modified_by?: any;
    schema: AttributeMaster;
    modified_on?: string;
    is_nested?: boolean;
    tags?: string[];
    slug: string;
    departments: string[];
    raw_key?: string;
    logo?: string;
    variant?: boolean;
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    synonyms?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    size: any;
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_weight_unit_of_measure: any;
    item_width: number;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    item_weight: number;
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
    l3_mapping?: string[];
    variant_media?: any;
    _custom_json?: any;
    teaser_tag?: any;
    name?: string;
    highlights?: string[];
    media?: Media1[];
    all_company_ids?: number[];
    is_set?: boolean;
    sizes?: any[];
    brand_uid?: number;
    category_uid?: number;
    hsn_code?: string;
    all_sizes?: any[];
    size_guide?: string;
    category?: any;
    net_quantity?: NetQuantityResponse;
    created_on?: string;
    custom_order?: any;
    multi_size?: boolean;
    tax_identifier?: any;
    is_active?: boolean;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    description?: string;
    created_by?: any;
    modified_by?: any;
    primary_color?: string;
    brand?: Brand;
    attributes?: any;
    is_expirable?: boolean;
    moq?: any;
    uid?: number;
    return_config?: ReturnConfigResponse;
    no_of_boxes?: number;
    company_id?: number;
    is_dependent?: boolean;
    item_type?: string;
    modified_on?: string;
    category_slug?: string;
    tags?: string[];
    verified_on?: string;
    slug?: string;
    all_identifiers?: string[];
    departments?: number[];
    images?: Image[];
    verified_by?: VerifiedBy;
    short_description?: string;
    country_of_origin?: string;
    currency?: string;
    color?: string;
    variants?: any;
    image_nature?: string;
    item_code?: string;
    is_physical?: boolean;
    id?: string;
    is_image_less_product?: boolean;
    stage?: string;
    trader?: Trader[];
    variant_group?: any;
    pending?: string;
    template_tag?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type BulkJob = {
    failed?: number;
    tracking_url?: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    cancelled?: number;
    stage?: string;
    file_path?: string;
    custom_template_tag?: string;
    total?: number;
    failed_records?: any[];
    company_id: number;
    succeed?: number;
    cancelled_records?: any[];
    created_on: string;
    is_active?: boolean;
    template_tag?: string;
    modified_on?: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    batch_id: string;
    created_on: string;
    is_active?: boolean;
    modified_on?: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    failed?: number;
    created_by?: UserDetail1;
    cancelled?: number;
    modified_by?: UserDetail1;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    total?: number;
    company_id?: number;
    succeed?: number;
    cancelled_records?: string[];
    created_on?: string;
    is_active?: boolean;
    template_tag?: string;
    modified_on?: string;
    template?: ProductTemplate;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    data: any[];
    template_tag: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    failed?: number;
    tracking_url?: string;
    id?: string;
    modified_by?: UserCommon;
    created_by?: UserCommon;
    retry?: number;
    cancelled?: number;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    total?: number;
    company_id?: number;
    succeed?: number;
    cancelled_records?: string[];
    created_on?: string;
    is_active?: boolean;
    modified_on?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
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
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    size: any;
    item_dimensions_unit_of_measure?: string;
    price?: number;
    item_height?: number;
    is_set?: boolean;
    price_transfer?: number;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    price_effective: number;
    store_code: string;
    item_width?: number;
    item_length?: number;
    currency: string;
    identifiers: GTIN[];
    expiration_date?: string;
    item_weight?: number;
    quantity: number;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    sellable_quantity?: number;
    seller_identifier?: string;
    size?: string;
    price?: number;
    inventory_updated_on?: string;
    price_transfer?: number;
    uid?: string;
    price_effective?: number;
    identifiers?: any;
    item_id?: number;
    store?: any;
    currency?: string;
    quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type DimensionResponse = {
    width: number;
    height: number;
    length: number;
    unit: string;
    is_default: boolean;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    effective: number;
    updated_at?: string;
    marked: number;
    transfer: number;
    currency: string;
    tp_notes?: any;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type InventorySellerResponse = {
    _custom_json?: any;
    fynd_article_code: string;
    is_set?: boolean;
    dimension: DimensionResponse;
    manufacturer: ManufacturerResponse;
    meta?: any;
    expiration_date?: string;
    is_active?: boolean;
    tax_identifier?: any;
    weight: WeightResponse;
    size: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    brand: BrandMeta;
    uid: string;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    trace_id?: string;
    store: StoreMeta;
    tags?: string[];
    fynd_item_code: string;
    seller_identifier: string;
    added_on_store?: string;
    track_inventory?: boolean;
    company: CompanyMeta;
    country_of_origin: string;
    fragile: boolean;
    total_quantity: number;
    price: PriceMeta;
    quantities?: Quantities;
    stage?: string;
    trader?: Trader1[];
    set?: InventorySet;
    identifier: any;
    item_id: number;
    fynd_meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type DimensionResponse1 = {
    width?: number;
    unit?: string;
    height?: number;
    length?: number;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    name?: string;
    uid?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type PriceArticle = {
    effective?: number;
    marked?: number;
    transfer?: number;
    currency?: string;
    tp_notes?: any;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type GetInventories = {
    date_meta?: DateMeta;
    is_set?: boolean;
    dimension?: DimensionResponse1;
    manufacturer?: ManufacturerResponse1;
    expiration_date?: string;
    tax_identifier?: any;
    weight?: WeightResponse1;
    size?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    inventory_updated_on?: string;
    brand?: BrandMeta1;
    return_config?: ReturnConfig2;
    uid?: string;
    trace_id?: string;
    platforms?: any;
    store?: ArticleStoreResponse;
    tags?: string[];
    seller_identifier?: string;
    track_inventory?: boolean;
    company?: CompanyMeta1;
    country_of_origin?: string;
    id?: string;
    total_quantity?: number;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    stage?: string;
    trader?: Trader2[];
    identifier?: any;
    item_id?: number;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    id?: string;
    created_by?: any;
    cancelled?: number;
    modified_by?: any;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    total?: number;
    company_id?: number;
    succeed?: number;
    cancelled_records?: string[];
    created_on?: string;
    is_active?: boolean;
    modified_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    tags?: string[];
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    price_marked?: number;
    price?: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    price_effective?: number;
    trace_id?: string;
    expiration_date?: string;
    currency?: string;
    quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    company_id: number;
    batch_id: string;
    sizes: InventoryJobPayload[];
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    created_by?: string;
    type?: string;
    filters?: any;
    status?: string;
    notification_emails?: string[];
    task_id: string;
    created_on?: string;
    modified_on?: string;
};
type InventoryExportQuantityFilter = {
    operators: string;
    min?: number;
    max?: number;
};
type InventoryExportAdvanceOption = {
    from_date?: string;
    to_date?: string;
    brand_ids?: number[];
    store_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportJob = {
    seller_id: number;
    type: string;
    filters?: InventoryExportAdvanceOption;
    status?: string;
    url?: string;
    notification_emails?: string[];
    task_id: string;
    completed_on?: string;
};
type InventoryExportFilter = {
    from_date?: string;
    to_date?: string;
    brand_ids?: number[];
    store_ids: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryCreateRequest = {
    filters: InventoryExportFilter;
    data?: string[];
    type?: string;
    notification_emails?: string[];
};
type InventoryJobFilters = {
    from_date?: string;
    stores?: string[];
    to_date?: string;
    brands?: string[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryJobDetailResponse = {
    id: string;
    seller_id: number;
    created_by?: UserDetail;
    type?: string;
    created_on?: string;
    filters: InventoryJobFilters;
    status?: any;
    url: string;
    notification_emails?: string[];
    task_id: string;
    cancelled_by?: UserDetail;
    completed_on?: string;
    modified_on?: string;
    cancelled_on?: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
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
    tags?: string[];
    seller_identifier: string;
    total_quantity?: number;
    price_marked?: number;
    store_id: number;
    price_effective?: number;
    trace_id?: string;
    expiration_date?: string;
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    tax2?: number;
    tax1: number;
    hs2_code: string;
    threshold2?: number;
    hsn_code: string;
    tax_on_mrp: boolean;
    uid?: number;
    company_id: number;
    is_active?: boolean;
    threshold1: number;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    id?: string;
    tax2?: number;
    tax1?: number;
    hs2_code?: string;
    threshold2?: number;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    company_id?: number;
    threshold1?: number;
    tax_on_esp?: boolean;
    modified_on?: string;
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
    threshold: number;
    effective_date: string;
    rate: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    description: string;
    type: string;
    created_by?: any;
    modified_by?: any;
    reporting_hsn: string;
    taxes: TaxSlab[];
    hsn_code_id?: string;
    hsn_code: string;
    country_code: string;
    created_on?: string;
    modified_on?: string;
};
type PageResponse = {
    has_previous?: boolean;
    size?: number;
    current?: string;
    item_total?: number;
    has_next?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    name?: string;
    slug?: string;
    discount?: string;
    uid?: number;
    banners?: ImageUrls;
    action?: Action;
    departments?: string[];
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    slug?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: any[];
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
};
type Child = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: Child[];
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
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    rating?: number;
    teaser_tag?: any;
    type?: string;
    name?: string;
    rating_count?: number;
    highlights?: string[];
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    attributes?: any;
    brand?: ProductBrand;
    uid?: number;
    item_type?: string;
    promo_meta?: any;
    product_online_date?: string;
    slug: string;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    image_nature?: string;
    item_code?: string;
    similars?: string[];
    tryouts?: string[];
};
type InventoryPage = {
    has_previous?: boolean;
    type: string;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
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
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    state?: string;
    city?: string;
    address2?: string;
    pincode?: number;
    longitude?: number;
    latitude?: number;
    address1?: string;
    country_code?: string;
    address_type?: string;
    landmark?: string;
    country?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    modified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    name?: string;
    stage?: string;
    reject_reason?: string;
    uid?: number;
    company_type?: string;
    verified_by?: UserSerializer2;
    business_type?: string;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    _custom_json?: any;
    name: string;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    phone_number: string;
    created_on?: string;
    store_type?: string;
    modified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    code: string;
    product_return_config?: ProductReturnConfigSerializer;
    uid?: number;
    modified_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    address: GetAddressSerializer;
    integration_type?: LocationIntegrationType;
    stage?: string;
    warnings?: any;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    name?: string;
    _custom_json?: any;
    franchise_enabled?: boolean;
    created_on?: string;
    business_details?: BusinessDetails;
    stage?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    notification_emails?: string[];
    created_by?: UserSerializer;
    business_type: string;
    company_type: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer[];
    contact_details?: ContactDetails;
    addresses?: GetAddressSerializer[];
    uid: number;
    verified_by?: UserSerializer;
    mode?: string;
    modified_on?: string;
    documents?: Document[];
    business_country_info?: BusinessCountryInfo;
};
type CreateUpdateAddressSerializer = {
    country: string;
    longitude: number;
    country_code?: string;
    city: string;
    address1: string;
    pincode: number;
    landmark?: string;
    state: string;
    latitude: number;
    address2?: string;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type UpdateCompany = {
    business_info?: string;
    name?: string;
    contact_details?: ContactDetails;
    business_type?: string;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    company_type?: string;
    franchise_enabled?: boolean;
    reject_reason?: string;
    warnings?: any;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    business_details?: BusinessDetails;
    documents?: Document[];
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
    stage?: string;
    store_documents?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    name: string;
    _custom_json?: any;
    created_on?: string;
    logo?: string;
    banner?: BrandBannerSerializer;
    stage?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    synonyms?: string[];
    slug_key?: string;
    reject_reason?: string;
    created_by?: UserSerializer;
    description?: string;
    warnings?: any;
    uid?: number;
    verified_by?: UserSerializer;
    mode?: string;
    _locale_language?: any;
    modified_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    description?: string;
    brand_tier?: string;
    _custom_json?: any;
    synonyms?: string[];
    uid?: number;
    logo: string;
    _locale_language?: any;
    company_id?: number;
    banner?: BrandBannerSerializer;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    name?: string;
    details?: CompanyDetails;
    business_type: string;
    stage?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    company_type: string;
    uid?: number;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    reject_reason?: string;
    _custom_json?: any;
    created_on?: string;
    notification_emails?: string[];
    modified_on?: string;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    stage?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    created_on?: string;
    warnings?: any;
    modified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
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
    country?: string;
    longitude: number;
    country_code?: string;
    city?: string;
    address1?: string;
    pincode?: number;
    landmark?: string;
    state?: string;
    address_type?: string;
    address2?: string;
    latitude: number;
};
type LocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    manager?: LocationManagerSerializer;
    stage?: string;
    address: AddressSerializer;
    _custom_json?: any;
    code: string;
    company: number;
    uid?: number;
    holiday?: HolidaySchemaSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    documents?: Document[];
    store_type?: string;
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
    jiopplink?: PaymentModeConfig;
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
type RuleDefinition = {
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    applicable_on: string;
    value_type: string;
    type: string;
    auto_apply?: boolean;
    currency_code?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    iins?: string[];
    networks?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    platforms?: string[];
    payments?: any;
    uses?: UsesRestriction;
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    user_groups?: number[];
    ordering_stores?: number[];
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    subtitle?: string;
    apply?: DisplayMetaDict;
};
type Rule = {
    min?: number;
    max?: number;
    key?: number;
    value?: number;
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
type CouponSchedule = {
    duration?: number;
    next_schedule?: any[];
    start?: string;
    end?: string;
    cron?: string;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAdd = {
    rule_definition: RuleDefinition;
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    validation?: Validation;
    tags?: string[];
    type_slug: string;
    validity: Validity;
    ownership: Ownership;
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
    rule_definition: RuleDefinition;
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    validation?: Validation;
    tags?: string[];
    type_slug: string;
    validity: Validity;
    ownership: Ownership;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionSchedule = {
    duration?: number;
    next_schedule?: any[];
    start: string;
    end?: string;
    cron?: string;
    published: boolean;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
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
    type: string;
    uses?: PaymentAllowValue1;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    platforms?: string[];
    payments?: PromotionPaymentModes[];
    user_id?: string[];
    uses: UsesRestriction1;
    user_groups?: number[];
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    order_quantity?: number;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type CompareObject = {
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    cart_unique_item_amount?: CompareObject;
    cart_total?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    all_items?: boolean;
    item_sku?: string[];
    item_exclude_company?: number[];
    item_exclude_category?: number[];
    item_brand?: number[];
    available_zones?: string[];
    item_company?: number[];
    item_exclude_brand?: number[];
    item_id?: number[];
    item_store?: number[];
    item_size?: string[];
    item_category?: number[];
    buy_rules?: string[];
    item_exclude_id?: number[];
    item_exclude_store?: number[];
    cart_quantity?: CompareObject;
    item_exclude_sku?: string[];
};
type DiscountOffer = {
    discount_amount?: number;
    code?: string;
    max_usage_per_transaction?: number;
    max_offer_quantity?: number;
    max_discount_amount?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
    discount_price?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionListItem = {
    apply_priority?: number;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    calculate_on?: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    discount_rules: DiscountRule[];
    application_id: string;
    code?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    mode: string;
    promo_group: string;
    ownership: Ownership1;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    apply_priority?: number;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    calculate_on?: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    discount_rules: DiscountRule[];
    application_id: string;
    code?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    mode: string;
    promo_group: string;
    ownership: Ownership1;
};
type PromotionUpdate = {
    apply_priority?: number;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    calculate_on?: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    discount_rules: DiscountRule[];
    application_id: string;
    code?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    mode: string;
    promo_group: string;
    ownership: Ownership1;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    created_on?: string;
    modified_on?: string;
    example?: string;
    entity_slug?: string;
    description?: string;
    title?: string;
    is_hidden?: boolean;
    type?: string;
    subtitle?: string;
    entity_type?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CartProductIdentifer = {
    identifier?: string;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_name?: string;
    item_images_url?: string[];
    item_slug?: string;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
    raw_offer?: any;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promo_id?: string;
    promotion_group?: string;
    article_quantity?: number;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_type?: string;
    promotion_name?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    offer_text?: string;
};
type PromoMeta = {
    message?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    effective?: number;
    marked?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    size?: string;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    product_group_tags?: string[];
    type?: string;
    seller?: BaseInfo;
    quantity?: number;
    uid?: string;
    extra_meta?: any;
    price?: ArticlePriceInfo;
};
type ProductAvailability = {
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    is_valid?: boolean;
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
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    images?: ProductImage[];
    name?: string;
    slug?: string;
    action?: ProductAction;
    brand?: BaseInfo;
    type?: string;
    uid?: number;
    categories?: CategoryInfo[];
};
type ProductPrice = {
    selling?: number;
    add_on?: number;
    effective?: number;
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductInfo = {
    discount?: string;
    parent_item_identifiers?: any;
    coupon_message?: string;
    message?: string;
    identifiers: CartProductIdentifer;
    promotions_applied?: AppliedPromotion[];
    promo_meta?: PromoMeta;
    article?: ProductArticle;
    bulk_offer?: any;
    availability?: ProductAvailability;
    product?: CartProduct;
    quantity?: number;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    is_set?: boolean;
    price?: ProductPriceInfo;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    description?: string;
    is_applied?: boolean;
};
type CouponBreakup = {
    max_discount_value?: number;
    code?: string;
    message?: string;
    coupon_type?: string;
    is_applied?: boolean;
    description?: string;
    title?: string;
    type?: string;
    minimum_cart_value?: number;
    uid?: string;
    value?: number;
    sub_title?: string;
    coupon_value?: number;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    key?: string;
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type RawBreakup = {
    mrp_total?: number;
    cod_charge?: number;
    subtotal?: number;
    convenience_fee?: number;
    gst_charges?: number;
    fynd_cash?: number;
    total?: number;
    coupon?: number;
    you_saved?: number;
    discount?: number;
    delivery_charge?: number;
    vog?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
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
    country?: string;
    city?: string;
    phone?: number;
    name?: string;
    area_code: string;
    state?: string;
    country_code?: string;
    address_type?: string;
    pincode?: number;
    address?: string;
    area_code_slug?: string;
    meta?: any;
    area?: string;
    landmark?: string;
    email?: string;
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
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
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
    price_marked: number;
    amount_paid: number;
    product_id: number;
    size: string;
    delivery_charges: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    meta?: CartItemMeta;
    employee_discount?: number;
    quantity?: number;
    cod_charges: number;
    discount: number;
    extra_meta?: any;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    price_effective: number;
};
type OpenApiPlatformCheckoutReq = {
    comment?: string;
    cart_items: OpenApiOrderItem[];
    order_id?: string;
    delivery_charges: number;
    cart_value: number;
    affiliate_order_id?: string;
    coupon_code: string;
    cod_charges: number;
    loyalty_discount?: number;
    currency_code?: string;
    shipping_address?: ShippingAddress;
    payment_mode?: string;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    billing_address: ShippingAddress;
    cashback_applied: number;
    employee_discount?: any;
    coupon?: string;
    gstin?: string;
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    order_ref_id?: string;
    success?: boolean;
};
type AbandonedCart = {
    app_id?: string;
    order_id?: string;
    merge_qty?: boolean;
    is_active?: boolean;
    cashback: any;
    created_on: string;
    fynd_credits?: any;
    user_id: string;
    fc_index_map?: number[];
    checkout_mode?: string;
    expire_at: string;
    coupon?: any;
    gstin?: string;
    last_modified: string;
    is_archive?: boolean;
    buy_now?: boolean;
    comment?: string;
    bulk_coupon_discount?: number;
    payments?: any;
    pick_up_customer_details?: any;
    promotion?: any;
    shipments?: any[];
    cart_value?: number;
    delivery_charges?: any;
    cod_charges?: any;
    uid: number;
    articles: any[];
    _id: string;
    payment_mode?: string;
    payment_methods?: any[];
    discount?: number;
    meta?: any;
    is_default: boolean;
};
type AbandonedCartResponse = {
    message?: string;
    result?: any;
    items?: AbandonedCart[];
    page?: Page;
    success?: boolean;
};
type AddProductCart = {
    article_assignment?: any;
    item_id?: number;
    parent_item_identifiers?: any;
    store_id?: number;
    display?: string;
    seller_id?: number;
    item_size?: string;
    product_group_tags?: string[];
    quantity?: number;
    pos?: boolean;
    article_id?: string;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    delivery_charge_info?: string;
    id?: string;
    comment?: string;
    message?: string;
    checkout_mode?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    restrict_checkout?: boolean;
    gstin?: string;
    last_modified?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    partial?: boolean;
    success?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    parent_item_identifiers?: any;
    item_size?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    quantity?: number;
    article_id?: string;
    extra_meta?: any;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
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
