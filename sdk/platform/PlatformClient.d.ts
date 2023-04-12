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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, UserDataInfo, ShipmentStatus, Prices, ShipmentItemFulFillingStore, GSTDetailsData, PlatformItem, BagUnit, PaymentModeInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, OrderDetailsData, TrackingList, Formatted, EinvoiceInfo, ShipmentTimeStamp, BuyerDetails, DebugInfo, LockData, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, OrderingStoreDetails, InvoiceInfo, FulfillingStore, ShipmentPayments, DPDetailsData, BagStateMapper, BagStatusHistory, Dimensions, Meta, ShipmentStatusData, Identifier, FinancialBreakup, OrderBagArticle, PlatformDeliveryAddress, OrderBrandName, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagConfigs, CurrentStatus, OrderBags, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, AffiliateBagDetails, ReturnConfig, Weight, Article, Brand, Attributes, Item, BagGSTDetails, ArticleDetails, Dates, B2BPODetails, BagMeta, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, TaxInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CollectionItem, CollectionItemUpdate, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, VerifiedBy, Trader, Image, ReturnConfigResponse, Logo, NetQuantityResponse, ProductPublish, ProductSchemaV2, ProductListingResponseV2, TeaserTag, CustomOrder, TaxIdentifier, NetQuantity, ProductPublish1, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ManufacturerResponse, Trader1, WeightResponse, DimensionResponse, CompanyMeta, ReturnConfig1, BrandMeta, PriceMeta, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, ArticleStoreResponse, Trader2, WeightResponse1, DimensionResponse1, CompanyMeta1, ReturnConfig2, BrandMeta1, PriceArticle, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, ProductReturnConfigSerializer, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, ContactDetails, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CommunicationConfig, CommsConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, Ownership, CouponAuthor, Validation, CouponSchedule, CouponAction, State, CouponDateMeta, Validity, PriceRange, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, DisplayMetaDict, DisplayMeta, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAuthor, DisplayMeta1, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, Ownership1, PromotionAction, PromotionDateMeta, CompareObject, ItemCriteria, PromotionSchedule, Visibility, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, ProductPrice, ProductPriceInfo, ProductAvailability, PromoMeta, BaseInfo, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, Ownership2, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    created: boolean;
    excluded_fields: string[];
    display_fields: string[];
    aggregators?: any[];
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    secret: string;
    is_active?: boolean;
    config_type: string;
    merchant_salt: string;
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
    success: boolean;
    error: ErrorCodeAndDescription;
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
    code?: string;
    display_name?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    expired?: boolean;
    retry_count?: number;
    aggregator_name: string;
    code?: string;
    card_reference?: string;
    card_number?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    nickname?: string;
    merchant_code?: string;
    display_priority?: number;
    exp_year?: number;
    card_brand_image?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    fynd_vpa?: string;
    timeout?: number;
    card_token?: string;
    card_fingerprint?: string;
    card_name?: string;
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    intent_app_error_list?: string[];
    intent_flow?: boolean;
    display_name?: string;
    card_isin?: string;
    card_issuer?: string;
    intent_app?: IntentApp[];
    name?: string;
    card_brand?: string;
    card_type?: string;
    card_id?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
    display_name: string;
    name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    is_pay_by_card_pl?: boolean;
    save_card?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    transfer_type: string;
    unique_transfer_no: any;
    payouts_aggregators: any[];
    customers: any;
    more_attributes: any;
    is_active: boolean;
    is_default: boolean;
};
type PayoutBankDetails = {
    country?: string;
    branch_name?: string;
    state?: string;
    account_no?: string;
    ifsc_code: string;
    account_holder?: string;
    account_type: string;
    bank_name?: string;
    pincode?: number;
    city?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    transfer_type: string;
    aggregator: string;
    users: any;
    unique_external_id: string;
    is_active: boolean;
};
type PayoutResponse = {
    bank_details: any;
    transfer_type: string;
    aggregator: string;
    payment_status: string;
    unique_transfer_no: string;
    created: boolean;
    users: any;
    payouts: any;
    success: boolean;
    is_active: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
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
    success: boolean;
    message: string;
    is_verified_flag?: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    branch_name: string;
    account_holder: string;
    ifsc_code: string;
    account_no: string;
    bank_name: string;
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
    ifsc_code: string;
    mobile?: boolean;
    beneficiary_id: string;
    address: string;
    comment?: boolean;
    id: number;
    is_active: boolean;
    delights_user_name?: string;
    transfer_mode: string;
    subtitle: string;
    account_holder: string;
    created_on: string;
    display_name: string;
    branch_name?: boolean;
    email: string;
    account_no: string;
    title: string;
    bank_name: string;
    modified_on: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    current_status?: string;
    payment_id?: string;
    payment_gateway?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    mode: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
    name?: string;
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
type UserDataInfo = {
    avis_user_id?: string;
    last_name?: string;
    first_name?: string;
    is_anonymous_user?: boolean;
    name?: string;
    gender?: string;
    mobile?: string;
    uid?: number;
    email?: string;
};
type ShipmentStatus = {
    actual_status: string;
    hex_code: string;
    status: string;
    title: string;
    ops_status: string;
};
type Prices = {
    price_effective?: number;
    cashback_applied?: number;
    transfer_price?: number;
    amount_paid?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    cod_charges?: number;
    discount?: number;
    fynd_credits?: number;
    price_marked?: number;
    coupon_value?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    delivery_charge?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    refund_amount?: number;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code: string;
};
type PlatformItem = {
    color?: string;
    image?: string[];
    code?: string;
    images?: string[];
    name?: string;
    l3_category?: number;
    department_id?: number;
    l1_category?: string[];
    size?: string;
    id?: number;
    l3_category_name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
};
type BagUnit = {
    gst?: GSTDetailsData;
    item_quantity: number;
    total_shipment_bags: number;
    prices?: Prices;
    item?: PlatformItem;
    shipment_id: string;
    can_return?: boolean;
    can_cancel?: boolean;
    ordering_channel: string;
    status: any;
    bag_id: number;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItem = {
    created_at: string;
    user?: UserDataInfo;
    total_bags_count: number;
    shipment_status?: ShipmentStatus;
    application?: any;
    total_shipments_in_order: number;
    payment_methods?: any;
    sla?: any;
    id: string;
    channel?: any;
    shipment_id?: string;
    fulfilling_centre: string;
    prices?: Prices;
    shipment_created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    options?: FilterInfoOption[];
    text: string;
    type: string;
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
type UserDetailsData = {
    address: string;
    pincode: string;
    phone: string;
    city: string;
    name: string;
    country: string;
    state: string;
    email?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    affiliate_id?: string;
    source?: string;
    order_value?: string;
    cod_charges?: string;
    ordering_channel_logo?: any;
    order_date?: string;
    tax_details?: any;
    ordering_channel?: string;
};
type TrackingList = {
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
    status: string;
    text: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type BuyerDetails = {
    address: string;
    pincode: number;
    ajio_site_id?: string;
    city: string;
    gstin: string;
    name: string;
    state: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentMeta = {
    dp_sort_key?: string;
    formatted?: Formatted;
    forward_affiliate_shipment_id?: string;
    return_affiliate_order_id?: string;
    same_store_available: boolean;
    return_affiliate_shipment_id?: string;
    einvoice_info?: EinvoiceInfo;
    ewaybill_info?: any;
    packaging_name?: string;
    dp_name?: string;
    external?: any;
    due_date?: string;
    return_details?: any;
    return_awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    shipment_volumetric_weight?: number;
    dp_id?: string;
    bag_weight?: any;
    marketplace_store_id?: string;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    shipment_weight?: number;
    fulfilment_priority_text?: string;
    assign_dp_from_sb?: boolean;
    b2b_buyer_details?: BuyerDetails;
    auto_trigger_dp_assignment_acf: boolean;
    return_store_node?: number;
    store_invoice_updated_date?: string;
    debug_info?: DebugInfo;
    b2c_buyer_details?: any;
    box_type?: string;
    awb_number?: string;
    order_type?: string;
    weight: number;
    po_number?: string;
    lock_data?: LockData;
};
type PDFLinks = {
    b2b?: string;
    invoice?: string;
    invoice_type: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice_a6?: string;
    label_a6?: string;
    invoice_a4?: string;
    label_pos?: string;
    po_invoice?: string;
    label?: string;
    label_type: string;
    delivery_challan_a4?: string;
    invoice_pos?: string;
};
type AffiliateMeta = {
    employee_discount?: number;
    channel_shipment_id?: string;
    box_type?: string;
    coupon_code?: string;
    quantity?: number;
    order_item_id?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    channel_order_id?: string;
    due_date?: string;
    size_level_total_qty?: number;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    affiliate_id?: string;
    ad_id?: string;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    affiliate_bag_id: string;
};
type OrderingStoreDetails = {
    address: string;
    pincode: string;
    store_name: string;
    contact_person: string;
    ordering_store_id: number;
    code: string;
    phone: string;
    city: string;
    country: string;
    meta: any;
    state: string;
};
type InvoiceInfo = {
    label_url?: string;
    invoice_url?: string;
    credit_note_id?: string;
    store_invoice_id?: string;
    updated_date?: string;
};
type FulfillingStore = {
    address: string;
    pincode: string;
    store_name: string;
    contact_person: string;
    code: string;
    phone: string;
    city: string;
    country: string;
    id: number;
    meta: any;
    state: string;
    fulfillment_channel: string;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type DPDetailsData = {
    track_url?: string;
    pincode?: string;
    gst_tag?: string;
    name?: string;
    country?: string;
    id?: number;
    eway_bill_id?: string;
    awb_no?: string;
};
type BagStateMapper = {
    app_display_name?: string;
    app_facing?: boolean;
    journey_type: string;
    name: string;
    state_type: string;
    notify_customer?: boolean;
    bs_id: number;
    app_state_name?: string;
    display_name: string;
    is_active?: boolean;
};
type BagStatusHistory = {
    app_display_name?: string;
    created_at?: string;
    kafka_sync?: boolean;
    bsh_id?: number;
    delivery_awb_number?: string;
    display_name?: string;
    updated_at?: string;
    delivery_partner_id?: number;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    forward?: boolean;
    state_type?: string;
    store_id?: number;
    status: string;
    reasons?: any[];
    bag_id?: number;
};
type Dimensions = {
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
    is_default?: boolean;
};
type Meta = {
    dimension?: Dimensions;
};
type ShipmentStatusData = {
    created_at?: string;
    bag_list?: string[];
    id?: number;
    shipment_id?: string;
    status?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    total_units: number;
    cod_charges: number;
    identifiers: Identifier;
    gst_tag: string;
    added_to_fynd_cash: boolean;
    gst_fee: number;
    tax_collected_at_source?: number;
    discount: number;
    fynd_credits: number;
    item_name: string;
    size: string;
    promotion_effective_discount: number;
    transfer_price: number;
    delivery_charge: number;
    price_effective: number;
    cashback: number;
    value_of_good: number;
    refund_credit: number;
    hsn_code: string;
    gst_tax_percentage: number;
    coupon_effective_discount: number;
    amount_paid: number;
    price_marked: number;
    coupon_value: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount: number;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    pincode?: string;
    created_at?: string;
    address2?: string;
    contact_person?: string;
    phone?: string;
    longitude?: number;
    city?: string;
    updated_at?: string;
    country?: string;
    latitude?: number;
    address_type?: string;
    state?: string;
    address_category?: string;
    area?: string;
    email?: string;
    version?: string;
    address1?: string;
};
type OrderBrandName = {
    created_on: string;
    logo: string;
    brand_name: string;
    id: number;
    company: string;
    modified_on?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    gst_tax_percentage?: number;
    gst_fee?: number;
    value_of_good?: number;
    brand_calculated_amount?: number;
    gstin_code?: string;
    hsn_code?: string;
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
    mrp_promotion?: boolean;
    promotion_name?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    amount?: number;
    article_quantity?: number;
    promo_id?: string;
    discount_rules?: DiscountRules[];
};
type BagConfigs = {
    enable_tracking: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type CurrentStatus = {
    created_at?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    updated_at?: string;
    current_status_id: number;
    delivery_partner_id?: number;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    state_type?: string;
    store_id?: number;
    status?: string;
    bag_id?: number;
};
type OrderBags = {
    identifier?: string;
    line_number?: number;
    prices?: Prices;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    brand?: OrderBrandName;
    quantity?: number;
    item?: PlatformItem;
    gst_details?: BagGST;
    entity_type?: string;
    bag_id: number;
    applied_promos?: AppliedPromos[];
    parent_promo_bags?: any;
    bag_configs?: BagConfigs;
    display_name?: string;
    can_cancel?: boolean;
    seller_identifier?: string;
    current_status?: CurrentStatus;
};
type PlatformShipment = {
    shipment_status?: string;
    delivery_details?: UserDetailsData;
    order?: OrderDetailsData;
    tracking_list?: TrackingList[];
    payment_methods?: any;
    coupon?: any;
    shipment_id: string;
    invoice_id?: string;
    custom_meta?: any[];
    prices?: Prices;
    user_agent?: string;
    affiliate_details?: AffiliateDetails;
    fulfilment_priority?: number;
    priority_text?: string;
    ordering_store?: OrderingStoreDetails;
    total_items?: number;
    lock_status?: boolean;
    journey_type?: string;
    packaging_type?: string;
    picked_date?: string;
    billing_details?: UserDetailsData;
    delivery_slot?: any;
    invoice?: InvoiceInfo;
    operational_status?: string;
    payment_mode?: string;
    shipment_images?: string[];
    vertical?: string;
    platform_logo?: string;
    fulfilling_store?: FulfillingStore;
    gst_details?: GSTDetailsData;
    enable_dp_tracking?: boolean;
    payments?: ShipmentPayments;
    forward_shipment_id?: string;
    dp_details?: DPDetailsData;
    bag_status_history?: BagStatusHistory[];
    total_bags?: number;
    meta?: Meta;
    shipment_quantity?: number;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type OrderMeta = {
    comment?: string;
    cart_id?: number;
    customer_note?: string;
    employee_id?: number;
    files?: any[];
    mongo_cart_id?: number;
    ordering_store?: number;
    order_tags?: any[];
    payment_type?: string;
    order_type?: string;
    currency_symbol?: string;
    order_child_entities?: string[];
    extra_meta?: any;
    staff?: any;
    order_platform?: string;
};
type OrderDict = {
    fynd_order_id: string;
    payment_methods?: any;
    order_date: string;
    tax_details?: any;
    meta?: OrderMeta;
    prices?: Prices;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    index?: number;
    actions?: any[];
    total_items?: number;
    value?: string;
    text?: string;
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
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
    order_value?: number;
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_id?: string;
    meta?: any;
    channel?: PlatformChannel;
    total_order_value?: number;
    order_created_time?: string;
};
type OrderListingResponse = {
    page?: Page;
    message?: string;
    success?: boolean;
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
    options?: Options[];
    text: string;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    last_location_recieved_at?: string;
    awb?: string;
    updated_at?: string;
    reason?: string;
    updated_time?: string;
    raw_status?: string;
    meta?: any;
    shipment_type?: string;
    status?: string;
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
    report_requested_at?: string;
    report_name?: string;
    s3_key?: string;
    report_created_at?: string;
    report_id?: string;
    report_type?: string;
    display_name?: string;
    status?: string;
    request_details?: any;
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
    message?: string;
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    data?: any[];
    trace_id?: string;
    success?: boolean;
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    data?: any;
    store_name?: string;
    invoice?: any;
    store_code?: string;
    invoice_status?: string;
    batch_id: string;
    company_id?: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
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
    upload?: FileUploadResponse;
    namespace?: string;
    operation?: string;
    method?: string;
    cdn?: URL;
    size?: number;
    content_type?: string;
    file_path?: string;
    file_name?: string;
    tags?: string[];
};
type BulkListingPage = {
    has_next?: boolean;
    total?: number;
    size?: number;
    type?: string;
    current?: number;
    has_previous?: boolean;
};
type bulkListingData = {
    successful?: number;
    excel_url?: string;
    successful_shipments?: any[];
    user_name?: string;
    uploaded_on?: string;
    company_id?: number;
    store_id?: number;
    processing?: number;
    batch_id?: string;
    file_name?: string;
    total?: number;
    store_code?: string;
    failed?: number;
    failed_shipments?: any[];
    store_name?: string;
    user_id?: string;
    id?: string;
    status?: string;
    processing_shipments?: string[];
};
type BulkListingResponse = {
    page?: BulkListingPage;
    data?: bulkListingData[];
    success?: boolean;
    error?: string;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    qc_type?: string[];
    id?: number;
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
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    total_shipments_count?: number;
    batch_id?: string;
    successful_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    message?: string;
    failed_records?: string[];
    success?: string;
    uploaded_by?: string;
    uploaded_on?: string;
    user_id?: string;
    status?: boolean;
    error?: string[];
};
type Document = {
    url?: string;
    value: string;
    ds_type: string;
    verified: boolean;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
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
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreMeta = {
    product_return_config?: any;
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    gst_number?: string;
    stage: string;
    timing?: any[];
    ewaybill_portal_details?: any;
    notification_emails?: string[];
};
type StoreAddress = {
    address2?: string;
    address_type: string;
    address_category: string;
    latitude: number;
    version?: string;
    created_at: string;
    phone: string;
    city: string;
    country_code: string;
    state: string;
    area?: string;
    pincode: number;
    contact_person: string;
    updated_at: string;
    country: string;
    address1: string;
    landmark?: string;
    email?: string;
    longitude: number;
};
type Store = {
    address2?: string;
    location_type: string;
    packaging_material_count?: number;
    alohomora_user_id?: number;
    brand_id?: any;
    company_id: number;
    latitude: number;
    mall_area?: string;
    created_at: string;
    login_username: string;
    phone: number;
    city: string;
    name: string;
    brand_store_tags?: string[];
    store_active_from?: string;
    mall_name?: string;
    store_email: string;
    state: string;
    parent_store_id?: number;
    pincode: string;
    contact_person: string;
    s_id: string;
    is_archived?: boolean;
    updated_at?: string;
    vat_no?: string;
    country: string;
    fulfillment_channel: string;
    address1: string;
    code?: string;
    meta: StoreMeta;
    order_integration_id?: string;
    store_address_json?: StoreAddress;
    is_active?: boolean;
    is_enabled_for_recon?: boolean;
    longitude: number;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
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
    return_config?: ReturnConfig;
    child_details?: any;
    code?: string;
    is_set?: boolean;
    a_set?: any;
    _id: string;
    dimensions?: Dimensions;
    size: string;
    raw_meta?: any;
    weight?: Weight;
    uid: string;
    seller_identifier: string;
    esp_modified?: any;
    identifiers: Identifier;
};
type Brand = {
    is_virtual_invoice?: boolean;
    brand_id: number;
    pickup_location?: string;
    created_on?: number;
    script_last_ran?: string;
    credit_note_expiry_days?: number;
    start_date?: string;
    credit_note_allowed?: boolean;
    company: string;
    modified_on?: number;
    logo?: string;
    brand_name: string;
    invoice_prefix?: string;
};
type Attributes = {
    primary_color_hex?: string;
    essential?: string;
    marketer_address?: string;
    marketer_name?: string;
    primary_color?: string;
    name?: string;
    gender?: string[];
    primary_material?: string;
    brand_name?: string;
};
type Item = {
    color?: string;
    brand_id: number;
    department_id?: number;
    item_id: number;
    webstore_product_url?: string;
    l1_category_id?: number;
    name: string;
    l2_category?: string[];
    size: string;
    can_return?: boolean;
    last_updated_at?: string;
    image: string[];
    brand: string;
    l2_category_id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    slug_key: string;
    code?: string;
    attributes: Attributes;
    l3_category?: number;
    branch_url?: string;
    gender?: string;
    meta?: any;
    can_cancel?: boolean;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    igst_tax_percentage: number;
    gst_tag: string;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    gst_fee: number;
    cgst_tax_percentage: number;
    tax_collected_at_source: number;
    sgst_tax_percentage: number;
    igst_gst_fee: string;
    hsn_code_id: string;
    cgst_gst_fee: string;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code?: string;
    hsn_code: string;
};
type ArticleDetails = {
    status?: any;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    item_base_price?: number;
    docker_number?: string;
    po_tax_amount?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type BagDetailsPlatformResponse = {
    bag_status: BagStatusHistory[];
    identifier?: string;
    line_number?: number;
    shipment_id?: string;
    prices: Prices;
    affiliate_details?: AffiliateDetails;
    no_of_bags_order?: number;
    ordering_store?: Store;
    bag_update_time?: number;
    restore_promos?: any;
    b_id: number;
    journey_type: string;
    affiliate_bag_details: AffiliateBagDetails;
    financial_breakup: FinancialBreakup[];
    reasons?: any[];
    tags?: string[];
    article: Article;
    display_name?: string;
    restore_coupon?: boolean;
    operational_status?: string;
    brand: Brand;
    quantity?: number;
    qc_required?: any;
    item: Item;
    gst_details: BagGSTDetails;
    seller_identifier?: string;
    entity_type?: string;
    current_operational_status: BagStatusHistory;
    applied_promos?: any[];
    b_type?: string;
    article_details?: ArticleDetails;
    parent_promo_bags?: any;
    bag_status_history?: BagStatusHistory;
    original_bag_list?: number[];
    dates?: Dates;
    meta?: BagMeta;
    order_integration_id?: string;
    status: BagReturnableCancelableStatus;
    current_status: BagStatusHistory;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    page_type: string;
    size: number;
    current: number;
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
    message?: string;
    shipment_id?: string;
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
    bag_id?: number;
    fynd_order_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    item_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    reason_ids?: number[];
    affiliate_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    status?: string;
    shipment_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    title?: string;
    to_datetime?: string;
    logo_url?: string;
    id: number;
    platform_id?: string;
    description?: string;
    company_id?: number;
    created_at?: string;
    from_datetime?: string;
    platform_name?: string;
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
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    line_number?: number;
    identifier?: string;
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
type ShipmentsRequest = {
    products?: Products[];
    identifier: string;
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    identifier?: string;
    stack_trace?: string;
    meta?: any;
    message?: string;
    exception?: string;
    final_state?: any;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    owner: string;
    name: string;
    id: string;
    description?: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    token: string;
    secret: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
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
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    store_lookup?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    amount_paid: number;
    store_id: number;
    modified_on: string;
    price_effective: number;
    seller_identifier: string;
    identifier: any;
    price_marked: number;
    item_size: string;
    discount: number;
    pdf_links?: MarketPlacePdf;
    affiliate_store_id: string;
    item_id: number;
    fynd_store_id: string;
    avl_qty: number;
    hsn_code_id: string;
    quantity: number;
    delivery_charge: number;
    unit_price: number;
    _id: string;
    transfer_price: number;
    affiliate_meta: any;
    sku: string;
    company_id: number;
};
type OrderUser = {
    phone: number;
    mobile: number;
    last_name: string;
    city: string;
    address1?: string;
    state: string;
    country: string;
    email: string;
    first_name: string;
    pincode: string;
    address2?: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    quantity: number;
    brand_id: number;
    _id: string;
    dimension: any;
    attributes: any;
    weight: any;
    category: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    dp_id?: number;
    shipments: number;
    box_type?: string;
    affiliate_shipment_id: string;
    meta?: any;
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    location_details?: LocationDetails;
    payment_mode: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
    action: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    coupon?: string;
    items: any;
    order_value: number;
    bags: AffiliateBag[];
    shipping_address: OrderUser;
    payment?: any;
    payment_mode: string;
    discount: number;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    affiliate_order_id?: string;
    shipment?: ShipmentData;
    cod_charges: number;
    delivery_charges: number;
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    display_text: string;
    id: number;
    slug: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l2_detail?: string;
    bag_id?: number;
    type: string;
    ticket_id?: string;
    l1_detail?: string;
    message: string;
    ticket_url?: string;
    l3_detail?: string;
    createdat: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    line_number?: string;
    identifier?: string;
    shipment_id: string;
};
type PostActivityHistory = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type SmsDataPayload = {
    amount_paid: number;
    shipment_id: number;
    customer_name: string;
    order_id: string;
    payment_mode: string;
    country_code: string;
    message: string;
    phone_number: number;
    brand_name: string;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
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
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
    id: number;
    meta: Meta1;
    remarks?: string;
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
    qc_required: string;
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    shipping_type?: string;
    address1: string;
    state: string;
    address_type?: string;
    state_code?: string;
    primary_mobile_number: string;
    alternate_mobile_number?: string;
    slot?: any[];
    pincode: string;
    middle_name?: string;
    floor_no?: string;
    landmark?: string;
    country: string;
    country_code?: string;
    primary_email: string;
    gender?: string;
    title?: string;
    customer_code?: string;
    city: string;
    house_no?: string;
    first_name: string;
    geo_location?: any;
    external_customer_code?: string;
    last_name?: string;
    alternate_email?: string;
    address2?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
};
type Tax = {
    breakup?: any[];
    rate: number;
    name: string;
    amount: any;
};
type Charge = {
    name: string;
    amount: any;
    code?: string;
    type: string;
    tax?: Tax;
};
type LineItem = {
    quantity?: number;
    seller_identifier: string;
    external_line_id?: string;
    custom_messasge?: string;
    meta?: any;
    charges?: Charge[];
};
type Shipment = {
    priority?: number;
    location_id: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    external_shipment_id?: string;
    line_items: LineItem[];
};
type PaymentMethod = {
    name: string;
    amount: number;
    transaction_data?: any;
    mode: string;
    meta?: any;
    collect_by: string;
    refund_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    address1: string;
    state: string;
    primary_mobile_number: string;
    state_code?: string;
    alternate_mobile_number?: string;
    pincode: string;
    middle_name?: string;
    floor_no?: string;
    country: string;
    country_code?: string;
    primary_email: string;
    gender?: string;
    title?: string;
    customer_code?: string;
    city: string;
    house_no?: string;
    first_name: string;
    last_name?: string;
    external_customer_code?: string;
    alternate_email?: string;
    address2?: string;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    external_order_id?: string;
    tax_info?: TaxInfo;
    shipments: Shipment[];
    currency_info?: any;
    meta?: any;
    external_creation_date?: string;
    config?: any;
    charges?: Charge[];
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    status: number;
    request_id?: string;
    stack_trace?: string;
    info?: any;
    message: string;
    meta?: string;
    exception?: string;
    code?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
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
    mobile: number;
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
};
type GetSearchWordsData = {
    _custom_json?: any;
    uid?: string;
    is_active?: boolean;
    app_id?: string;
    result?: any;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    result: SearchKeywordResult;
    words?: string[];
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    uid?: string;
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompletePageAction = {
    url?: string;
    query?: any;
    params?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    display?: string;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    words?: string[];
    results?: any[];
    _custom_json?: any;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    product_uid: number;
    auto_select?: boolean;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    slug: string;
    name: string;
    is_active: boolean;
    company_id?: number;
    same_store_assignment?: boolean;
    choice: string;
    page_visibility?: string[];
    meta?: any;
    created_on?: string;
    logo?: string;
    created_by?: any;
    id?: string;
    modified_by?: any;
    products: ProductBundleItem[];
    modified_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    slug: string;
    name: string;
    is_active: boolean;
    company_id?: number;
    same_store_assignment?: boolean;
    choice: string;
    page_visibility?: string[];
    meta?: any;
    created_on?: string;
    logo?: string;
    created_by?: any;
    modified_by?: any;
    products: ProductBundleItem[];
    modified_on?: string;
};
type Size = {
    value?: string;
    is_available?: boolean;
    display?: string;
    quantity?: number;
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    min_marked?: number;
    currency?: string;
    min_effective?: number;
};
type LimitedProductData = {
    uid?: number;
    slug?: string;
    name?: string;
    sizes?: string[];
    quantity?: number;
    price?: any;
    country_of_origin?: string;
    attributes?: any;
    short_description?: string;
    images?: string[];
    item_code?: string;
    identifier?: any;
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    sizes?: Size[];
    price?: Price;
    min_quantity?: number;
    product_uid?: number;
    auto_select?: boolean;
    max_quantity?: number;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    slug?: string;
    name?: string;
    is_active?: boolean;
    company_id?: number;
    page_visibility?: string[];
    choice?: string;
    same_store_assignment?: boolean;
    meta?: any;
    logo?: string;
    products?: GetProducts[];
};
type ProductBundleUpdateRequest = {
    slug: string;
    name: string;
    is_active: boolean;
    company_id?: number;
    same_store_assignment?: boolean;
    choice: string;
    page_visibility?: string[];
    meta?: any;
    logo?: string;
    modified_by?: any;
    products: ProductBundleItem[];
    modified_on?: string;
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
    name: string;
    company_id?: number;
    guide?: Guide;
    created_on?: string;
    brand_id?: number;
    created_by?: any;
    description?: string;
    subtitle?: string;
    id?: string;
    image?: string;
    active?: boolean;
    title: string;
    modified_by?: any;
    tag?: string;
};
type SizeGuideResponse = {
    name?: string;
    created_on?: string;
    company_id?: number;
    guide?: any;
    created_by?: any;
    brand_id?: number;
    id?: string;
    subtitle?: string;
    active?: boolean;
    modified_by?: any;
    title?: string;
    tag?: string;
    modified_on?: string;
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
    alt_text?: any;
    seo?: SEOData;
    moq?: MOQData;
    is_gift?: boolean;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    alt_text?: any;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type PageResponseType = {
    current: number;
    next: number;
    total_count: number;
    has_next: boolean;
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
    display_type: string;
    name: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    key?: string;
    unit?: string;
};
type AppConfigurationDetail = {
    slug: string;
    name?: string;
    is_active: boolean;
    template_slugs?: string[];
    logo?: string;
    priority: number;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    default_key: string;
    name?: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    is_default: boolean;
    app_id: string;
    key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
    similar?: any;
    compare?: any;
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
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    condition?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    key: string;
    type: string;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    priority: number;
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
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    name: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    key: string;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    priority: number;
    logo?: string;
    subtitle?: string;
    key: string;
    title?: string;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    created_on?: string;
    created_by?: any;
    listing?: ConfigurationListing;
    config_id?: string;
    app_id: string;
    id?: string;
    modified_by?: any;
    type?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_on?: string;
    created_by?: any;
    listing?: ConfigurationListing;
    config_id?: string;
    app_id: string;
    modified_by?: any;
    type?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    app_id: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersKey = {
    operators?: string[];
    display: string;
    name: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    max?: number;
    is_selected: boolean;
    display: string;
    selected_max?: number;
    count?: number;
    query_format?: string;
    currency_code?: string;
    value: any;
    display_format?: string;
    selected_min?: number;
    min?: number;
    currency_symbol?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
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
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type GetCollectionDetailNest = {
    name?: string;
    allow_facets?: boolean;
    tag?: string[];
    banners?: ImageUrls;
    is_active?: boolean;
    meta?: any;
    logo?: Media1;
    slug?: string;
    priority?: number;
    description?: string;
    cron?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    type?: string;
    visible_facets_keys?: string[];
    uid?: string;
    badge?: any;
    app_id?: string;
    action?: Action;
    allow_sort?: boolean;
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
type UserInfo = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
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
type CollectionSchedule = {
    start?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    name: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _locale_language?: any;
    published?: boolean;
    banners: CollectionBanner;
    _custom_json?: any;
    is_active?: boolean;
    meta?: any;
    logo: CollectionImage;
    slug: string;
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    description?: string;
    query?: CollectionQuery[];
    sort_on?: string;
    _schedule?: CollectionSchedule;
    type: string;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    badge?: CollectionBadge;
    app_id: string;
    allow_sort?: boolean;
};
type CollectionCreateResponse = {
    name?: string;
    allow_facets?: boolean;
    tag?: string[];
    banners?: ImageUrls;
    is_active?: boolean;
    meta?: any;
    logo?: BannerImage;
    slug?: string;
    priority?: number;
    description?: string;
    cron?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    sort_on?: string;
    type?: string;
    visible_facets_keys?: string[];
    badge?: any;
    app_id?: string;
    allow_sort?: boolean;
};
type CollectionDetailResponse = {
    name?: string;
    allow_facets?: boolean;
    tag?: string[];
    banners?: ImageUrls;
    is_active?: boolean;
    meta?: any;
    logo?: Media1;
    slug?: string;
    priority?: number;
    description?: string;
    cron?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    type?: string;
    visible_facets_keys?: string[];
    uid?: string;
    badge?: any;
    app_id?: string;
    allow_sort?: boolean;
};
type UpdateCollection = {
    name?: string;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _locale_language?: any;
    published?: boolean;
    banners?: CollectionBanner;
    _custom_json?: any;
    is_active?: boolean;
    meta?: any;
    logo?: CollectionImage;
    slug?: string;
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    description?: string;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    sort_on?: string;
    type?: string;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    badge?: CollectionBadge;
    allow_sort?: boolean;
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    uid?: number;
    name?: string;
    logo?: Media1;
    action?: Action;
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
    teaser_tag?: any;
    name?: string;
    sellable?: boolean;
    product_online_date?: string;
    rating_count?: number;
    has_variant?: boolean;
    tryouts?: string[];
    medias?: Media1[];
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    item_type?: string;
    similars?: string[];
    slug: string;
    image_nature?: string;
    attributes?: any;
    description?: string;
    highlights?: string[];
    type?: string;
    brand?: ProductBrand;
    uid?: number;
    price?: ProductListingPrice;
    rating?: number;
    promo_meta?: any;
    discount?: string;
    short_description?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type CollectionItem = {
    item_id: number;
    action: string;
    priority?: number;
};
type CollectionItemUpdate = {
    query?: CollectionQuery[];
    type?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    items?: CollectionItem[];
    allow_sort?: boolean;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    name?: string;
    total_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
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
    company_id?: number;
    store_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    brand_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    company_id: number;
    created_on: number;
    store_ids: number[];
    enabled: boolean;
    created_by?: any;
    opt_level: string;
    modified_by?: any;
    brand_ids: number[];
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
    total_article?: number;
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
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
    uid?: number;
    timing?: any;
    name?: string;
    created_on?: string;
    store_code?: string;
    additional_contacts?: any[];
    company_id?: number;
    address?: any;
    manager?: any;
    display_name?: string;
    modified_on?: string;
    documents?: any[];
    store_type?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    format?: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    allowed_values?: string[];
    type: string;
    mandatory?: boolean;
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
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type GenderDetail = {
    slug?: string;
    is_nested?: boolean;
    name?: string;
    schema?: AttributeMaster;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    logo?: string;
    description?: string;
    id?: string;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
};
type CategoriesResponse = {
    uid?: number;
    slug?: string;
    name?: string;
    slug_key?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    meta?: any;
    message?: string;
    code?: string;
    errors?: any;
    status?: number;
};
type UserSerializer = {
    uid?: string;
    _id?: string;
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetDepartment = {
    uid?: number;
    slug?: string;
    name?: string;
    is_active?: boolean;
    synonyms?: string[];
    created_on?: string;
    page_no?: number;
    logo?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    priority_order?: number;
    item_type?: string;
    search?: string;
    page_size?: number;
    modified_on?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    message?: string;
    code?: string;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    uid?: number;
    slug?: string;
    _custom_json?: any;
    name: string;
    is_active?: boolean;
    synonyms?: string[];
    platforms?: any;
    logo: string;
    tags?: string[];
    priority_order: number;
    _cls?: string;
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
    super_user?: boolean;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    uid: number;
    slug: any;
    verified_on?: string;
    name: any;
    _id?: any;
    created_on: string;
    is_active?: boolean;
    synonyms?: any[];
    _custom_json?: any;
    verified_by?: UserDetail;
    created_by?: UserDetail;
    logo: string;
    modified_by?: UserDetail;
    priority_order: number;
    _cls?: any;
    modified_on: string;
};
type ProductTemplate = {
    slug: string;
    is_physical: boolean;
    name?: string;
    is_active?: boolean;
    created_on?: string;
    modified_on?: string;
    categories?: string[];
    logo?: string;
    created_by?: any;
    description?: string;
    attributes?: string[];
    modified_by?: any;
    is_expirable: boolean;
    tag?: string;
    departments?: string[];
    is_archived?: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    slug: string;
    is_physical: boolean;
    name?: string;
    is_active?: boolean;
    categories?: string[];
    logo?: string;
    description?: string;
    attributes?: string[];
    id?: string;
    is_expirable: boolean;
    tag?: string;
    departments?: string[];
    is_archived?: boolean;
};
type Properties = {
    teaser_tag?: any;
    name?: any;
    media?: any;
    trader?: any;
    no_of_boxes?: any;
    multi_size?: any;
    size_guide?: any;
    currency?: any;
    is_dependent?: any;
    custom_order?: any;
    is_active?: any;
    category_slug?: any;
    item_code?: any;
    command?: any;
    item_type?: any;
    slug?: any;
    product_group_tag?: any;
    tags?: any;
    description?: any;
    highlights?: any;
    return_config?: any;
    hsn_code?: any;
    brand_uid?: any;
    sizes?: any;
    country_of_origin?: any;
    variants?: any;
    short_description?: any;
    trader_type?: any;
    product_publish?: any;
};
type GlobalValidation = {
    properties?: Properties;
    required?: string[];
    definitions?: any;
    description?: string;
    title?: string;
    type?: string;
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
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type UserInfo1 = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type ProductTemplateExportResponse = {
    task_id: string;
    completed_on?: string;
    url?: string;
    created_by?: UserInfo1;
    filters?: any;
    type?: string;
    seller_id: number;
    notification_emails?: string[];
    status?: string;
    modified_on?: string;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    catalogue_types: string[];
    to_date?: string;
    templates: string[];
    brands?: string[];
    from_date?: string;
};
type ProductTemplateDownloadsExport = {
    notification_emails?: string[];
    filters?: ProductTemplateExportFilterRequest;
    type?: string;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
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
type Category = {
    uid?: number;
    slug?: string;
    tryouts?: string[];
    name: string;
    synonyms?: string[];
    is_active: boolean;
    created_on?: string;
    media?: Media2;
    priority?: number;
    created_by?: any;
    id?: string;
    modified_by?: any;
    level: number;
    modified_on?: string;
    hierarchy?: Hierarchy[];
    departments: number[];
    marketplaces?: CategoryMapping;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    slug?: string;
    tryouts?: string[];
    name: string;
    synonyms?: string[];
    is_active: boolean;
    media?: Media2;
    priority?: number;
    level: number;
    hierarchy?: Hierarchy[];
    departments: number[];
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductSchemaV2 = {
    teaser_tag?: any;
    name?: string;
    is_image_less_product?: boolean;
    media?: Media1[];
    verified_by?: VerifiedBy;
    trader?: Trader[];
    created_by?: any;
    no_of_boxes?: number;
    multi_size?: boolean;
    size_guide?: string;
    template_tag?: string;
    modified_by?: any;
    currency?: string;
    is_dependent?: boolean;
    variant_media?: any;
    variant_group?: any;
    modified_on?: string;
    departments?: number[];
    custom_order?: any;
    _custom_json?: any;
    all_identifiers?: string[];
    verified_on?: string;
    tax_identifier?: any;
    is_active?: boolean;
    created_on?: string;
    company_id?: number;
    l3_mapping?: string[];
    color?: string;
    category_slug?: string;
    item_code?: string;
    images?: Image[];
    is_expirable?: boolean;
    item_type?: string;
    slug?: string;
    image_nature?: string;
    product_group_tag?: string[];
    tags?: string[];
    category?: any;
    description?: string;
    attributes?: any;
    highlights?: string[];
    return_config?: ReturnConfigResponse;
    brand?: Brand;
    net_quantity?: NetQuantityResponse;
    all_company_ids?: number[];
    hsn_code?: string;
    primary_color?: string;
    uid?: number;
    brand_uid?: number;
    all_sizes?: any[];
    is_physical?: boolean;
    sizes?: any[];
    stage?: string;
    country_of_origin?: string;
    is_set?: boolean;
    variants?: any;
    category_uid?: number;
    id?: string;
    short_description?: string;
    moq?: any;
    pending?: string;
    product_publish?: ProductPublish;
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    teaser_tag?: TeaserTag;
    name: string;
    is_image_less_product?: boolean;
    media?: Media1[];
    trader: Trader[];
    no_of_boxes?: number;
    multi_size?: boolean;
    size_guide?: string;
    template_tag: string;
    currency: string;
    variant_media?: any;
    is_dependent?: boolean;
    variant_group?: any;
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    departments: number[];
    _custom_json?: any;
    tax_identifier: TaxIdentifier;
    company_id: number;
    is_active?: boolean;
    requester?: string;
    category_slug: string;
    item_code: string;
    item_type: string;
    slug: string;
    product_group_tag?: string[];
    tags?: string[];
    description?: string;
    attributes?: any;
    highlights?: string[];
    return_config: ReturnConfig;
    net_quantity?: NetQuantity;
    uid?: number;
    brand_uid: number;
    sizes: any[];
    country_of_origin: string;
    is_set?: boolean;
    variants?: any;
    short_description?: string;
    change_request_id?: any;
    action?: string;
    product_publish?: ProductPublish1;
};
type ProductVariants = {
    uid?: number;
    brand_uid?: number;
    name?: string;
    media?: Media1[];
    category_uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    is_nested?: boolean;
    name?: string;
    created_by?: any;
    filters: AttributeMasterFilter;
    modified_by?: any;
    modified_on?: string;
    departments: string[];
    synonyms?: any;
    created_on?: string;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    unit?: string;
    slug: string;
    details: AttributeMasterDetails;
    tags?: string[];
    description?: string;
    schema: AttributeMaster;
    variant?: boolean;
    suggestion?: string;
    raw_key?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    item_length: number;
    item_width: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    size: any;
    item_weight_unit_of_measure: any;
    item_height: number;
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
    teaser_tag?: any;
    name?: string;
    is_image_less_product?: boolean;
    media?: Media1[];
    verified_by?: VerifiedBy;
    trader?: Trader[];
    created_by?: any;
    no_of_boxes?: number;
    multi_size?: boolean;
    size_guide?: string;
    template_tag?: string;
    modified_by?: any;
    currency?: string;
    is_dependent?: boolean;
    variant_media?: any;
    variant_group?: any;
    modified_on?: string;
    departments?: number[];
    custom_order?: any;
    _custom_json?: any;
    all_identifiers?: string[];
    verified_on?: string;
    tax_identifier?: any;
    is_active?: boolean;
    created_on?: string;
    company_id?: number;
    l3_mapping?: string[];
    color?: string;
    category_slug?: string;
    item_code?: string;
    images?: Image[];
    is_expirable?: boolean;
    item_type?: string;
    slug?: string;
    image_nature?: string;
    product_group_tag?: string[];
    tags?: string[];
    category?: any;
    description?: string;
    attributes?: any;
    highlights?: string[];
    return_config?: ReturnConfigResponse;
    brand?: Brand;
    net_quantity?: NetQuantityResponse;
    all_company_ids?: number[];
    hsn_code?: string;
    primary_color?: string;
    uid?: number;
    brand_uid?: number;
    all_sizes?: any[];
    is_physical?: boolean;
    sizes?: any[];
    stage?: string;
    country_of_origin?: string;
    is_set?: boolean;
    variants?: any;
    category_uid?: number;
    id?: string;
    short_description?: string;
    moq?: any;
    pending?: string;
    product_publish?: ProductPublished;
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
    failed?: number;
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    stage?: string;
    file_path?: string;
    succeed?: number;
    created_by?: UserDetail1;
    cancelled?: number;
    template?: ProductTemplate;
    cancelled_records?: string[];
    template_tag?: string;
    modified_by?: UserDetail1;
    modified_on?: string;
    failed_records?: string[];
    total?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    failed?: number;
    is_active?: boolean;
    created_on: string;
    company_id: number;
    succeed?: number;
    stage?: string;
    file_path?: string;
    custom_template_tag?: string;
    created_by?: UserInfo1;
    cancelled?: number;
    cancelled_records?: any[];
    modified_by?: UserInfo1;
    template_tag?: string;
    tracking_url?: string;
    modified_on?: string;
    failed_records?: any[];
    total?: number;
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    created_on: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    modified_on?: string;
};
type BulkProductRequest = {
    batch_id: string;
    template_tag: string;
    company_id: number;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    failed?: number;
    retry?: number;
    is_active?: boolean;
    created_on?: string;
    file_path?: string;
    succeed?: number;
    stage?: string;
    company_id?: number;
    created_by?: UserCommon;
    cancelled?: number;
    id?: string;
    cancelled_records?: string[];
    modified_by?: UserCommon;
    tracking_url?: string;
    modified_on?: string;
    failed_records?: string[];
    total?: number;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    url: string;
    user: any;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    uid?: string;
    seller_identifier?: string;
    sellable_quantity?: number;
    price?: number;
    quantity?: number;
    store?: any;
    item_id?: number;
    inventory_updated_on?: string;
    price_transfer?: number;
    identifiers?: any;
    currency?: string;
    size?: string;
    price_effective?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
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
    expiration_date?: string;
    price?: number;
    quantity: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    item_length?: number;
    is_set?: boolean;
    item_width?: number;
    item_dimensions_unit_of_measure?: string;
    price_transfer?: number;
    item_weight?: number;
    identifiers: GTIN[];
    currency: string;
    size: any;
    set?: InventorySet;
    price_effective: number;
    item_height?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type DimensionResponse = {
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
    height: number;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
    transfer: number;
    currency: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
};
type InventorySellerResponse = {
    seller_identifier: string;
    manufacturer: ManufacturerResponse;
    total_quantity: number;
    store: StoreMeta;
    trader?: Trader1[];
    created_by?: UserSerializer;
    fragile: boolean;
    modified_by?: UserSerializer;
    identifier: any;
    weight: WeightResponse;
    set?: InventorySet;
    trace_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    tax_identifier?: any;
    meta?: any;
    fynd_meta?: any;
    dimension: DimensionResponse;
    fynd_article_code: string;
    fynd_item_code: string;
    raw_meta?: any;
    company: CompanyMeta;
    tags?: string[];
    track_inventory?: boolean;
    return_config?: ReturnConfig1;
    size: string;
    brand: BrandMeta;
    uid: string;
    expiration_date?: string;
    added_on_store?: string;
    price: PriceMeta;
    stage?: string;
    item_id: number;
    is_set?: boolean;
    country_of_origin: string;
    quantities?: Quantities;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type ArticleStoreResponse = {
    uid?: number;
    store_code?: string;
    name?: string;
    store_type?: string;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type DimensionResponse1 = {
    height?: number;
    width?: number;
    length?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type PriceArticle = {
    effective?: number;
    tp_notes?: any;
    marked?: number;
    transfer?: number;
    currency?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
    not_available?: Quantity;
};
type GetInventories = {
    seller_identifier?: string;
    manufacturer?: ManufacturerResponse1;
    total_quantity?: number;
    store?: ArticleStoreResponse;
    trader?: Trader2[];
    created_by?: UserSerializer;
    inventory_updated_on?: string;
    modified_by?: UserSerializer;
    identifier?: any;
    weight?: WeightResponse1;
    trace_id?: string;
    tax_identifier?: any;
    platforms?: any;
    dimension?: DimensionResponse1;
    company?: CompanyMeta1;
    tags?: string[];
    track_inventory?: boolean;
    return_config?: ReturnConfig2;
    size?: string;
    brand?: BrandMeta1;
    uid?: string;
    expiration_date?: string;
    price?: PriceArticle;
    stage?: string;
    item_id?: number;
    is_set?: boolean;
    country_of_origin?: string;
    id?: string;
    date_meta?: DateMeta;
    quantities?: QuantitiesArticle;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    failed?: number;
    modified_on?: string;
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    stage?: string;
    succeed?: number;
    created_by?: any;
    cancelled?: number;
    id?: string;
    cancelled_records?: string[];
    modified_by?: any;
    file_path?: string;
    failed_records?: string[];
    total?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    expiration_date?: string;
    price?: number;
    store_code: string;
    total_quantity?: number;
    quantity?: number;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    currency?: string;
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    price_marked?: number;
    trace_id?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportQuantityFilter = {
    max?: number;
    min?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
    to_date?: string;
    brand_ids?: number[];
    from_date?: string;
};
type InventoryExportJob = {
    task_id: string;
    completed_on?: string;
    url?: string;
    filters?: InventoryExportAdvanceOption;
    type: string;
    seller_id: number;
    notification_emails?: string[];
    status?: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    created_on?: string;
    created_by?: string;
    filters?: any;
    type?: string;
    seller_id: number;
    notification_emails?: string[];
    status?: string;
    modified_on?: string;
};
type InventoryJobFilters = {
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    stores?: string[];
    brands?: string[];
    from_date?: string;
};
type InventoryJobDetailResponse = {
    task_id: string;
    completed_on?: string;
    created_on?: string;
    url: string;
    cancelled_by?: UserDetail;
    created_by?: UserDetail;
    id: string;
    filters: InventoryJobFilters;
    type?: string;
    seller_id: number;
    cancelled_on?: string;
    notification_emails?: string[];
    status?: any;
    modified_on?: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    quantity?: InventoryExportQuantityFilter;
    store_ids: number[];
    to_date?: string;
    brand_ids?: number[];
    from_date?: string;
};
type InventoryCreateRequest = {
    notification_emails?: string[];
    filters: InventoryExportFilter;
    type?: string;
    data?: string[];
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
    expiration_date?: string;
    total_quantity?: number;
    store_id: number;
    tags?: string[];
    price_effective?: number;
    price_marked?: number;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    tax2?: number;
    hs2_code?: string;
    company_id?: number;
    threshold1?: number;
    id?: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax1?: number;
    modified_on?: string;
    hsn_code?: string;
    tax_on_mrp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    uid?: number;
    tax2?: number;
    is_active?: boolean;
    hs2_code: string;
    company_id: number;
    threshold1: number;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax1: number;
    hsn_code: string;
    tax_on_mrp: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    current?: string;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
    has_next?: boolean;
};
type TaxSlab = {
    cess?: number;
    effective_date: string;
    rate: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    created_on?: string;
    hsn_code_id?: string;
    reporting_hsn: string;
    created_by?: any;
    country_code: string;
    description: string;
    taxes: TaxSlab[];
    modified_by?: any;
    type: string;
    modified_on?: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    logo?: Media;
    discount?: string;
    action?: Action;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    slug?: string;
    name?: string;
    logo?: Media;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    uid?: number;
    name?: string;
    _custom_json?: any;
    childs?: any[];
    action?: Action;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    uid?: number;
    name?: string;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    action?: Action;
};
type Child = {
    banners?: ImageUrls;
    slug?: string;
    uid?: number;
    name?: string;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    action?: Action;
};
type CategoryItems = {
    banners?: ImageUrls;
    slug?: string;
    uid?: number;
    name?: string;
    childs?: Child[];
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
    operators?: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    teaser_tag?: any;
    name?: string;
    product_online_date?: string;
    rating_count?: number;
    has_variant?: boolean;
    tryouts?: string[];
    medias?: Media1[];
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    item_type?: string;
    similars?: string[];
    slug: string;
    image_nature?: string;
    attributes?: any;
    description?: string;
    highlights?: string[];
    type?: string;
    brand?: ProductBrand;
    uid?: number;
    rating?: number;
    promo_meta?: any;
    short_description?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    type: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    article_assignment?: ArticleAssignment;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    company_id?: number;
    store_ids?: number[];
    app_id: string;
    pincode: string;
    channel_type?: string;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    uid?: string;
    store_pincode?: number;
    _id?: string;
    company_id?: number;
    quantity: number;
    meta?: any;
    item_id: number;
    store_id?: number;
    strategy_wise_listing?: any[];
    price_effective?: number;
    article_assignment: ArticleAssignment1;
    group_id?: string;
    size: string;
    index?: number;
    status: boolean;
    price_marked?: number;
    s_city?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetAddressSerializer = {
    landmark?: string;
    state?: string;
    address1?: string;
    latitude?: number;
    address2?: string;
    country_code?: string;
    pincode?: number;
    city?: string;
    address_type?: string;
    longitude?: number;
    country?: string;
};
type GetCompanySerializer = {
    uid?: number;
    verified_on?: string;
    name?: string;
    business_type?: string;
    created_on?: string;
    reject_reason?: string;
    stage?: string;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    modified_on?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
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
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    verified_by?: UserSerializer1;
    warnings?: any;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    modified_on?: string;
    _custom_json?: any;
    verified_on?: string;
    created_on?: string;
    phone_number: string;
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
    store_type?: string;
    company?: GetCompanySerializer;
    code: string;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    address: GetAddressSerializer;
    integration_type?: LocationIntegrationType;
    notification_emails?: string[];
    display_name: string;
    documents?: Document[];
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
    uid: number;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    logo?: string;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    uid: number;
    business_country_info?: BusinessCountryInfo;
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    name?: string;
    warnings?: any;
    business_info?: string;
    notification_emails?: string[];
    created_by?: UserSerializer;
    documents?: Document[];
    verified_on?: string;
    mode?: string;
    created_on?: string;
    contact_details?: ContactDetails;
    business_type: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    business_details?: BusinessDetails;
    stage?: string;
    company_type: string;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    addresses?: GetAddressSerializer[];
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    city: string;
    address1: string;
    address2?: string;
    latitude: number;
    country_code?: string;
    landmark?: string;
    longitude: number;
    state: string;
    country: string;
    address_type: string;
    pincode: number;
};
type UpdateCompany = {
    name?: string;
    company_type?: string;
    warnings?: any;
    business_info?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    contact_details?: ContactDetails;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    business_type?: string;
    franchise_enabled?: boolean;
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
    stage?: string;
    store_documents?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    uid?: number;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    verified_by?: UserSerializer;
    name: string;
    warnings?: any;
    created_by?: UserSerializer;
    _locale_language?: any;
    description?: string;
    verified_on?: string;
    mode?: string;
    created_on?: string;
    synonyms?: string[];
    modified_by?: UserSerializer;
    _custom_json?: any;
    stage?: string;
    logo?: string;
    modified_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    brand_tier?: string;
    synonyms?: string[];
    uid?: number;
    logo: string;
    company_id?: number;
    _locale_language?: any;
    description?: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
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
    stage?: string;
    verified_by?: UserSerializer;
    name?: string;
    company_type: string;
    market_channels?: string[];
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    business_type: string;
    verified_on?: string;
    details?: CompanyDetails;
};
type CompanyBrandSerializer = {
    stage?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    created_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    verified_on?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
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
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    city?: string;
    address1?: string;
    address2?: string;
    latitude: number;
    landmark?: string;
    country_code?: string;
    longitude: number;
    state?: string;
    country?: string;
    address_type?: string;
    pincode?: number;
};
type LocationSerializer = {
    stage?: string;
    name: string;
    display_name: string;
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    company: number;
    documents?: Document[];
    code: string;
    address: AddressSerializer;
    _custom_json?: any;
    store_type?: string;
    gst_credentials?: InvoiceDetailsSerializer;
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
type Rule = {
    min?: number;
    key?: number;
    value?: number;
    discount_qty?: number;
    max?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validation = {
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type CouponSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    start?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validity = {
    priority?: number;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining = {
    app?: number;
    user?: number;
    total?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
    codes?: string[];
};
type Restrictions = {
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    post_order?: PostOrder;
    user_groups?: number[];
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    platforms?: string[];
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    description?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
};
type RuleDefinition = {
    applicable_on: string;
    type: string;
    scope?: string[];
    value_type: string;
    currency_code?: string;
    auto_apply?: boolean;
    is_exact?: boolean;
    calculate_on: string;
};
type CouponAdd = {
    rule: Rule[];
    ownership: Ownership;
    author?: CouponAuthor;
    validation?: Validation;
    _schedule?: CouponSchedule;
    action?: CouponAction;
    state?: State;
    code: string;
    date_meta?: CouponDateMeta;
    validity: Validity;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    type_slug: string;
    rule_definition: RuleDefinition;
    tags?: string[];
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
    rule: Rule[];
    ownership: Ownership;
    author?: CouponAuthor;
    validation?: Validation;
    _schedule?: CouponSchedule;
    action?: CouponAction;
    state?: State;
    code: string;
    date_meta?: CouponDateMeta;
    validity: Validity;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    type_slug: string;
    rule_definition: RuleDefinition;
    tags?: string[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type Restrictions1 = {
    user_id?: string[];
    user_registered?: UserRegistered;
    order_quantity?: number;
    post_order?: PostOrder1;
    user_groups?: number[];
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
    platforms?: string[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    equals?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_exclude_company?: number[];
    all_items?: boolean;
    item_exclude_store?: number[];
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_sku?: string[];
    cart_total?: CompareObject;
    item_store?: number[];
    item_id?: number[];
    item_size?: string[];
    item_category?: number[];
    item_company?: number[];
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_sku?: string[];
    buy_rules?: string[];
};
type PromotionSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    start: string;
    published: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type DiscountOffer = {
    discount_amount?: number;
    discount_price?: number;
    discount_percentage?: number;
    code?: string;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
};
type DiscountRule = {
    offer: DiscountOffer;
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type PromotionListItem = {
    author?: PromotionAuthor;
    code?: string;
    display_meta: DisplayMeta1;
    promotion_type: string;
    application_id: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promo_group: string;
    visiblility?: Visibility;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    author?: PromotionAuthor;
    code?: string;
    display_meta: DisplayMeta1;
    promotion_type: string;
    application_id: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promo_group: string;
    visiblility?: Visibility;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
};
type PromotionUpdate = {
    author?: PromotionAuthor;
    code?: string;
    display_meta: DisplayMeta1;
    promotion_type: string;
    application_id: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    promo_group: string;
    visiblility?: Visibility;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
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
type LoyaltyPoints = {
    description?: string;
    applicable?: number;
    is_applied?: boolean;
    total?: number;
};
type RawBreakup = {
    you_saved?: number;
    coupon?: number;
    subtotal?: number;
    fynd_cash?: number;
    gst_charges?: number;
    vog?: number;
    delivery_charge?: number;
    mrp_total?: number;
    discount?: number;
    cod_charge?: number;
    convenience_fee?: number;
    total?: number;
};
type DisplayBreakup = {
    message?: string[];
    key?: string;
    value?: number;
    currency_code?: string;
    display?: string;
    currency_symbol?: string;
};
type CouponBreakup = {
    is_applied?: boolean;
    uid?: string;
    message?: string;
    type?: string;
    code?: string;
    value?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
};
type ProductPrice = {
    marked?: number;
    selling?: number;
    add_on?: number;
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ProductAvailability = {
    is_valid?: boolean;
    out_of_stock?: boolean;
    deliverable?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
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
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    uid?: number;
    brand?: BaseInfo;
    type?: string;
    action?: ProductAction;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    slug?: string;
    name?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BasePrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    price?: ArticlePriceInfo;
    type?: string;
    extra_meta?: any;
    _custom_json?: any;
    size?: string;
    product_group_tags?: string[];
    quantity?: number;
    parent_item_identifiers?: any;
    seller?: BaseInfo;
    store?: BaseInfo;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type AppliedPromotion = {
    ownership?: Ownership2;
    amount?: number;
    mrp_promotion?: boolean;
    article_quantity?: number;
    offer_text?: string;
    promotion_type?: string;
    promo_id?: string;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    message?: string;
    is_set?: boolean;
    coupon_message?: string;
    key?: string;
    availability?: ProductAvailability;
    promo_meta?: PromoMeta;
    quantity?: number;
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    discount?: string;
    bulk_offer?: any;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    area?: string;
    address_type?: string;
    phone?: number;
    state?: string;
    area_code: string;
    country?: string;
    pincode?: number;
    city?: string;
    email?: string;
    country_code?: string;
    address?: string;
    landmark?: string;
    meta?: any;
    name?: string;
    area_code_slug?: string;
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
    message?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
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
    amount_paid: number;
    files?: OpenApiFiles[];
    price_effective: number;
    cashback_applied: number;
    price_marked: number;
    employee_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    extra_meta?: any;
    product_id: number;
    size: string;
    quantity?: number;
    cod_charges: number;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    discount: number;
    meta?: CartItemMeta;
};
type OpenApiPlatformCheckoutReq = {
    files?: OpenApiFiles[];
    comment?: string;
    employee_discount?: any;
    cashback_applied: number;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    coupon_code: string;
    cart_items: OpenApiOrderItem[];
    billing_address: ShippingAddress;
    loyalty_discount?: number;
    payment_mode?: string;
    order_id?: string;
    affiliate_order_id?: string;
    coupon_value: number;
    coupon?: string;
    currency_code?: string;
    cod_charges: number;
    gstin?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_id: string;
    order_ref_id?: string;
    message?: string;
};
type AbandonedCart = {
    delivery_charges?: any;
    expire_at: string;
    articles: any[];
    payment_mode?: string;
    buy_now?: boolean;
    fc_index_map?: number[];
    cashback: any;
    last_modified: string;
    bulk_coupon_discount?: number;
    promotion?: any;
    cod_charges?: any;
    gstin?: string;
    shipments?: any[];
    is_archive?: boolean;
    user_id: string;
    uid: number;
    comment?: string;
    payment_methods?: any[];
    _id: string;
    created_on: string;
    discount?: number;
    fynd_credits?: any;
    order_id?: string;
    pick_up_customer_details?: any;
    is_active?: boolean;
    is_default: boolean;
    app_id?: string;
    merge_qty?: boolean;
    coupon?: any;
    payments?: any;
    checkout_mode?: string;
    meta?: any;
    cart_value?: number;
};
type AbandonedCartResponse = {
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
    result?: any;
    success?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    buy_now?: boolean;
    coupon_text?: string;
    comment?: string;
    message?: string;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    breakup_values?: CartBreakup;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    id?: string;
    checkout_mode?: string;
    delivery_charge_info?: string;
};
type AddProductCart = {
    article_id?: string;
    article_assignment?: any;
    pos?: boolean;
    seller_id?: number;
    extra_meta?: any;
    _custom_json?: any;
    item_id?: number;
    item_size?: string;
    product_group_tags?: string[];
    quantity?: number;
    parent_item_identifiers?: any;
    store_id?: number;
    display?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    extra_meta?: any;
    _custom_json?: any;
    item_id?: number;
    item_size?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    item_index?: number;
    article_id?: string;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
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
