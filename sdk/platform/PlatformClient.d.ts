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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentItemFulFillingStore, Prices, ShipmentStatus, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, PaymentModeInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, ShipmentPayments, LockData, Formatted, DebugInfo, BuyerDetails, EinvoiceInfo, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, CompanyDetails, OrderDetailsData, DPDetailsData, ShipmentStatusData, TrackingList, BagStateMapper, BagStatusHistory, OrderBagArticle, OrderBrandName, PlatformDeliveryAddress, BagConfigs, Identifier, FinancialBreakup, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, CurrentStatus, BagGST, OrderBags, OrderingStoreDetails, Dimensions, Meta, InvoiceInfo, UserDetailsData, PlatformShipment, ShipmentInfoResponse, TaxDetails, TransactionData, PlatformUserDetails, BillingStaffDetails, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Weight, ReturnConfig, Article, Attributes, Item, Brand, ArticleDetails, BagReturnableCancelableStatus, Dates, BagGSTDetails, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, Store, B2BPODetails, BagMeta, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, UserData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, PaymentMethod, PaymentInfo, BillingInfo, ShippingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionBadge, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, NetQuantityResponse, ProductPublish, ReturnConfigResponse, Image, Logo, Trader, ProductSchemaV2, ProductListingResponseV2, NetQuantity, ProductPublish1, CustomOrder, TeaserTag, TaxIdentifier, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, DimensionResponse, CompanyMeta, ManufacturerResponse, PriceMeta, ReturnConfig1, QuantityBase, Quantities, WeightResponse, BrandMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, DimensionResponse1, CompanyMeta1, ManufacturerResponse1, ArticleStoreResponse, PriceArticle, ReturnConfig2, Quantity, QuantitiesArticle, WeightResponse1, BrandMeta1, Trader2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, ProductReturnConfigSerializer, UserSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, SellerPhoneNumber, GetAddressSerializer, UserSerializer2, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, RuleDefinition, State, CouponAuthor, Validity, CouponDateMeta, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, PriceRange, Restrictions, CouponAction, CouponSchedule, Rule, Ownership, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, Ownership1, PromotionAction, PromotionAuthor, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, Restrictions1, DiscountOffer, DiscountRule, PromotionDateMeta, Visibility, PromotionSchedule, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductImage, ActionQuery, ProductAction, CategoryInfo, BaseInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, PromoMeta, Ownership2, AppliedPromotion, ProductPrice, ProductPriceInfo, CartProductIdentifer, CartProductInfo, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    created: boolean;
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
    display_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    secret: string;
    is_active?: boolean;
    key: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
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
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_brand_image?: string;
    aggregator_name: string;
    remaining_limit?: number;
    logo_url?: PaymentModeLogo;
    retry_count?: number;
    merchant_code?: string;
    card_type?: string;
    display_name?: string;
    card_issuer?: string;
    cod_limit?: number;
    expired?: boolean;
    intent_app?: IntentApp[];
    name?: string;
    card_fingerprint?: string;
    intent_flow?: boolean;
    fynd_vpa?: string;
    nickname?: string;
    display_priority?: number;
    card_number?: string;
    card_id?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_name?: string;
    cod_limit_per_order?: number;
    code?: string;
    card_reference?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_brand?: string;
    exp_year?: number;
    exp_month?: number;
    card_token?: string;
    intent_app_error_list?: string[];
    card_isin?: string;
    timeout?: number;
};
type RootPaymentMode = {
    aggregator_name?: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    save_card?: boolean;
    add_card_enabled?: boolean;
    name: string;
    display_priority: number;
    display_name: string;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_default: boolean;
    unique_transfer_no: any;
    transfer_type: string;
    is_active: boolean;
    payouts_aggregators: any[];
    more_attributes: any;
    customers: any;
};
type PayoutBankDetails = {
    state?: string;
    pincode?: number;
    branch_name?: string;
    account_holder?: string;
    city?: string;
    bank_name?: string;
    ifsc_code: string;
    country?: string;
    account_no?: string;
    account_type: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    transfer_type: string;
    aggregator: string;
    users: any;
    is_active: boolean;
};
type PayoutResponse = {
    bank_details: any;
    payouts: any;
    created: boolean;
    unique_transfer_no: string;
    transfer_type: string;
    success: boolean;
    users: any;
    aggregator: string;
    is_active: boolean;
    payment_status: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    is_active: boolean;
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
    is_verified_flag?: boolean;
    message: string;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    branch_name: string;
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    transfer_mode: string;
    address: string;
    display_name: string;
    delights_user_name?: string;
    created_on: string;
    email: string;
    comment?: string;
    branch_name?: string;
    account_no: string;
    subtitle: string;
    modified_on: string;
    bank_name: string;
    mobile?: string;
    account_holder: string;
    beneficiary_id: string;
    id: number;
    is_active: boolean;
    ifsc_code: string;
    title: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
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
    remaining_limit: number;
    user_id: string;
    usages: number;
    is_active: boolean;
    limit: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
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
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type Prices = {
    cod_charges?: number;
    cashback_applied?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    refund_credit?: number;
    value_of_good?: number;
    discount?: number;
    delivery_charge?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    price_effective?: number;
    tax_collected_at_source?: number;
    coupon_value?: number;
    fynd_credits?: number;
    cashback?: number;
};
type ShipmentStatus = {
    title: string;
    hex_code: string;
    ops_status: string;
    status: string;
    actual_status: string;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
};
type PlatformItem = {
    images?: string[];
    l3_category?: number;
    size?: string;
    l3_category_name?: string;
    can_return?: boolean;
    department_id?: number;
    can_cancel?: boolean;
    name?: string;
    code?: string;
    id?: number;
    color?: string;
    image?: string[];
    l1_category?: string[];
};
type BagUnit = {
    can_return?: boolean;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    can_cancel?: boolean;
    prices?: Prices;
    ordering_channel: string;
    shipment_id: string;
    item_quantity: number;
    status: any;
    total_shipment_bags: number;
    bag_id: number;
};
type UserDataInfo = {
    email?: string;
    uid?: number;
    first_name?: string;
    is_anonymous_user?: boolean;
    name?: string;
    avis_user_id?: string;
    last_name?: string;
    mobile?: string;
    gender?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItem = {
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    shipment_id?: string;
    bags?: BagUnit[];
    fulfilling_centre: string;
    user?: UserDataInfo;
    id: string;
    total_bags_count: number;
    total_shipments_in_order: number;
    created_at: string;
    shipment_created_at: string;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
};
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    type: string;
    text: string;
    options?: FilterInfoOption[];
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type FulfillingStore = {
    state: string;
    contact_person: string;
    store_name: string;
    city: string;
    code: string;
    fulfillment_channel: string;
    pincode: string;
    id: number;
    meta: any;
    phone: string;
    address: string;
    country: string;
};
type ShipmentPayments = {
    source?: string;
    mode?: string;
    logo?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    state: string;
    ajio_site_id?: string;
    gstin: string;
    city: string;
    name: string;
    pincode: number;
    address: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    fulfilment_priority_text?: string;
    packaging_name?: string;
    return_awb_number?: string;
    lock_data?: LockData;
    dp_sort_key?: string;
    store_invoice_updated_date?: string;
    shipment_volumetric_weight?: number;
    bag_weight?: any;
    po_number?: string;
    formatted?: Formatted;
    return_details?: any;
    due_date?: string;
    awb_number?: string;
    debug_info?: DebugInfo;
    auto_trigger_dp_assignment_acf: boolean;
    marketplace_store_id?: string;
    return_affiliate_shipment_id?: string;
    dp_options?: any;
    b2b_buyer_details?: BuyerDetails;
    b2c_buyer_details?: any;
    dp_name?: string;
    shipment_weight?: number;
    dp_id?: string;
    ewaybill_info?: any;
    forward_affiliate_order_id?: string;
    order_type?: string;
    return_affiliate_order_id?: string;
    external?: any;
    assign_dp_from_sb?: boolean;
    box_type?: string;
    return_store_node?: number;
    weight: number;
    einvoice_info?: EinvoiceInfo;
    same_store_available: boolean;
    timestamp?: ShipmentTimeStamp;
    forward_affiliate_shipment_id?: string;
};
type PDFLinks = {
    credit_note_url?: string;
    label?: string;
    invoice_a4?: string;
    label_type: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_pos?: string;
    invoice_type: string;
    delivery_challan_a4?: string;
    label_a4?: string;
    label_a6?: string;
    invoice?: string;
    po_invoice?: string;
    b2b?: string;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    size_level_total_qty?: number;
    quantity?: number;
    channel_order_id?: string;
    due_date?: string;
    channel_shipment_id?: string;
    coupon_code?: string;
    box_type?: string;
    order_item_id?: string;
    employee_discount?: number;
    is_priority?: boolean;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_id?: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    ad_id?: string;
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
};
type CompanyDetails = {
    manufacturer_address?: any;
    company_cin?: string;
    company_name?: string;
    company_id?: number;
};
type OrderDetailsData = {
    cod_charges?: string;
    fynd_order_id: string;
    order_value?: string;
    affiliate_id?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    order_date?: string;
    source?: string;
};
type DPDetailsData = {
    track_url?: string;
    eway_bill_id?: string;
    name?: string;
    awb_no?: string;
    pincode?: string;
    gst_tag?: string;
    id?: number;
    country?: string;
};
type ShipmentStatusData = {
    bag_list?: string[];
    shipment_id?: string;
    status?: string;
    id?: number;
    created_at?: string;
};
type TrackingList = {
    text: string;
    is_passed?: boolean;
    is_current?: boolean;
    time?: string;
    status: string;
};
type BagStateMapper = {
    bs_id: number;
    notify_customer?: boolean;
    app_display_name?: string;
    name: string;
    is_active?: boolean;
    app_state_name?: string;
    display_name: string;
    journey_type: string;
    app_facing?: boolean;
    state_type: string;
};
type BagStatusHistory = {
    state_id?: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    store_id?: number;
    app_display_name?: string;
    shipment_id?: string;
    display_name?: string;
    status: string;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    updated_at?: string;
    created_at?: string;
    forward?: boolean;
    bag_id?: number;
    state_type?: string;
    bsh_id?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type OrderBrandName = {
    logo: string;
    company: string;
    id: number;
    created_on: string;
    brand_name: string;
    modified_on?: string;
};
type PlatformDeliveryAddress = {
    state?: string;
    latitude?: number;
    email?: string;
    version?: string;
    contact_person?: string;
    address2?: string;
    city?: string;
    address_category?: string;
    landmark?: string;
    pincode?: string;
    address_type?: string;
    phone?: string;
    updated_at?: string;
    created_at?: string;
    longitude?: number;
    address1?: string;
    country?: string;
    area?: string;
};
type BagConfigs = {
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    allow_force_return: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    brand_calculated_amount: number;
    size: string;
    refund_credit: number;
    discount: number;
    gst_fee: number;
    cashback: number;
    cod_charges: number;
    coupon_effective_discount: number;
    total_units: number;
    gst_tax_percentage: number;
    price_marked: number;
    item_name: string;
    promotion_effective_discount: number;
    amount_paid_roundoff?: number;
    identifiers: Identifier;
    gst_tag: string;
    tax_collected_at_source?: number;
    coupon_value: number;
    fynd_credits: number;
    hsn_code: string;
    added_to_fynd_cash: boolean;
    delivery_charge: number;
    amount_paid: number;
    price_effective: number;
    transfer_price: number;
    value_of_good: number;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    promo_id?: string;
    promotion_name?: string;
    article_quantity?: number;
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
};
type CurrentStatus = {
    state_id?: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    store_id?: number;
    shipment_id?: string;
    delivery_awb_number?: string;
    status?: string;
    bag_state_mapper?: BagStateMapper;
    updated_at?: string;
    created_at?: string;
    current_status_id: number;
    bag_id?: number;
    state_type?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    gst_fee?: number;
    gstin_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
};
type OrderBags = {
    article?: OrderBagArticle;
    item?: PlatformItem;
    prices?: Prices;
    brand?: OrderBrandName;
    display_name?: string;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    quantity?: number;
    seller_identifier?: string;
    financial_breakup?: FinancialBreakup;
    applied_promos?: AppliedPromos[];
    current_status?: CurrentStatus;
    identifier?: string;
    line_number?: number;
    bag_id: number;
    parent_promo_bags?: any;
    gst_details?: BagGST;
    can_return?: boolean;
    can_cancel?: boolean;
    entity_type?: string;
};
type OrderingStoreDetails = {
    state: string;
    contact_person: string;
    store_name: string;
    city: string;
    code: string;
    pincode: string;
    meta: any;
    phone: string;
    address: string;
    country: string;
    ordering_store_id: number;
};
type Dimensions = {
    height?: number;
    length?: number;
    unit?: string;
    is_default?: boolean;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type InvoiceInfo = {
    label_url?: string;
    invoice_url?: string;
    store_invoice_id?: string;
    updated_date?: string;
    credit_note_id?: string;
};
type UserDetailsData = {
    state: string;
    email?: string;
    city: string;
    name: string;
    pincode: string;
    phone: string;
    address: string;
    country: string;
};
type PlatformShipment = {
    fulfilling_store?: FulfillingStore;
    payments?: ShipmentPayments;
    shipment_status?: string;
    prices?: Prices;
    total_items?: number;
    affiliate_details?: AffiliateDetails;
    journey_type?: string;
    priority_text?: string;
    company_details?: CompanyDetails;
    order?: OrderDetailsData;
    forward_shipment_id?: string;
    vertical?: string;
    fulfilment_priority?: number;
    operational_status?: string;
    packaging_type?: string;
    dp_details?: DPDetailsData;
    payment_mode?: string;
    status?: ShipmentStatusData;
    platform_logo?: string;
    invoice_id?: string;
    tracking_list?: TrackingList[];
    gst_details?: GSTDetailsData;
    lock_status?: boolean;
    shipment_quantity?: number;
    picked_date?: string;
    payment_methods?: any;
    bag_status_history?: BagStatusHistory[];
    bags?: OrderBags[];
    enable_dp_tracking?: boolean;
    ordering_store?: OrderingStoreDetails;
    meta?: Meta;
    custom_meta?: any[];
    invoice?: InvoiceInfo;
    delivery_slot?: any;
    user_agent?: string;
    delivery_details?: UserDetailsData;
    shipment_images?: string[];
    total_bags?: number;
    shipment_id: string;
    user?: UserDataInfo;
    billing_details?: UserDetailsData;
    coupon?: any;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type TransactionData = {
    entity?: string;
    currency?: string;
    terminal_id?: string;
    amount_paid?: string;
    status?: string;
    payment_id?: string;
    unique_reference_number?: string;
    transaction_id?: string;
};
type PlatformUserDetails = {
    platform_user_last_name?: string;
    platform_user_id?: string;
    platform_user_first_name?: string;
};
type BillingStaffDetails = {
    first_name?: string;
    user?: string;
    last_name?: string;
    staff_id?: number;
};
type OrderMeta = {
    order_platform?: string;
    order_child_entities?: string[];
    cart_id?: number;
    order_tags?: any[];
    transaction_data?: TransactionData;
    comment?: string;
    platform_user_details?: PlatformUserDetails;
    files?: any[];
    extra_meta?: any;
    billing_staff_details?: BillingStaffDetails;
    customer_note?: string;
    ordering_store?: number;
    company_logo?: string;
    order_type?: string;
    employee_id?: number;
    payment_type?: string;
    mongo_cart_id?: number;
    currency_symbol?: string;
    staff?: any;
};
type OrderDict = {
    fynd_order_id: string;
    prices?: Prices;
    payment_methods?: any;
    tax_details?: TaxDetails;
    meta?: OrderMeta;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    index?: number;
    total_items?: number;
    value?: string;
    actions?: any[];
};
type SuperLane = {
    text: string;
    total_items?: number;
    options?: SubLane[];
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    order_created_time?: string;
    payment_mode?: string;
    meta?: any;
    total_order_value?: number;
};
type OrderListingResponse = {
    page?: Page;
    items?: PlatformOrderItems[];
    lane?: string;
    success?: boolean;
    total_count?: number;
    message?: string;
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
    reason?: string;
    last_location_recieved_at?: string;
    awb?: string;
    shipment_type?: string;
    updated_time?: string;
    status?: string;
    meta?: any;
    updated_at?: string;
    account_name?: string;
    raw_status?: string;
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
    request_details?: any;
    report_requested_at?: string;
    report_type?: string;
    display_name?: string;
    status?: string;
    report_created_at?: string;
    report_id?: string;
    s3_key?: string;
    report_name?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    item_id?: string;
    company_id?: string;
    article_id?: string;
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
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    success?: boolean;
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    data?: any;
    store_name?: string;
    store_id?: string;
    batch_id: string;
    store_code?: string;
    company_id?: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
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
    file_name?: string;
    size?: number;
    file_path?: string;
    namespace?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    tags?: string[];
    method?: string;
    operation?: string;
};
type bulkListingData = {
    user_name?: string;
    batch_id?: string;
    store_code?: string;
    user_id?: string;
    processing_shipments?: string[];
    file_name?: string;
    store_id?: number;
    company_id?: number;
    status?: string;
    successful_shipments?: any[];
    failed?: number;
    uploaded_on?: string;
    processing?: number;
    id?: string;
    excel_url?: string;
    successful?: number;
    store_name?: string;
    failed_shipments?: any[];
    total?: number;
};
type BulkListingPage = {
    size?: number;
    current?: number;
    has_previous?: boolean;
    has_next?: boolean;
    total?: number;
    type?: string;
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
    id?: number;
    question_set?: QuestionSet[];
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    total_shipments_count?: number;
    batch_id?: string;
    company_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
    failed_records?: string[];
    error?: string[];
    status?: boolean;
    success?: string;
    user_id?: string;
    message?: string;
    uploaded_by?: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Article = {
    esp_modified?: any;
    is_set?: boolean;
    size: string;
    seller_identifier: string;
    weight?: Weight;
    uid: string;
    a_set?: any;
    return_config?: ReturnConfig;
    code?: string;
    identifiers: Identifier;
    raw_meta?: any;
    dimensions?: Dimensions;
    child_details?: any;
    _id: string;
};
type Attributes = {
    primary_color?: string;
    name?: string;
    marketer_name?: string;
    essential?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    primary_material?: string;
    brand_name?: string;
    gender?: string[];
};
type Item = {
    size: string;
    l1_category_id?: number;
    brand: string;
    code?: string;
    attributes: Attributes;
    image: string[];
    brand_id: number;
    l2_category_id?: number;
    name: string;
    branch_url?: string;
    gender?: string;
    l1_category?: string[];
    l3_category?: number;
    can_return?: boolean;
    l3_category_name?: string;
    meta?: any;
    color?: string;
    item_id: number;
    webstore_product_url?: string;
    can_cancel?: boolean;
    slug_key: string;
    last_updated_at?: string;
    l2_category?: string[];
    department_id?: number;
};
type Brand = {
    start_date?: string;
    logo?: string;
    script_last_ran?: string;
    modified_on?: number;
    credit_note_expiry_days?: number;
    company: string;
    invoice_prefix?: string;
    pickup_location?: string;
    credit_note_allowed?: boolean;
    is_virtual_invoice?: boolean;
    created_on?: number;
    brand_name: string;
    brand_id: number;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    sgst_tax_percentage: number;
    cgst_gst_fee: string;
    hsn_code: string;
    igst_gst_fee: string;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    gst_tag: string;
    gst_fee: number;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    tax_collected_at_source: number;
    gstin_code?: string;
    value_of_good: number;
    gst_tax_percentage: number;
};
type StoreAddress = {
    state: string;
    address_category: string;
    updated_at: string;
    longitude: number;
    country: string;
    version?: string;
    contact_person: string;
    address_type: string;
    latitude: number;
    country_code: string;
    city: string;
    pincode: number;
    phone: string;
    area?: string;
    email?: string;
    address2?: string;
    landmark?: string;
    created_at: string;
    address1: string;
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
    username?: string;
    password?: string;
};
type Document = {
    url?: string;
    value: string;
    verified: boolean;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    timing?: any[];
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    stage: string;
    display_name: string;
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    documents?: StoreDocuments;
    additional_contact_details?: any;
};
type Store = {
    state: string;
    code?: string;
    is_active?: boolean;
    login_username: string;
    store_active_from?: string;
    updated_at?: string;
    is_archived?: boolean;
    location_type: string;
    longitude: number;
    store_address_json?: StoreAddress;
    brand_id?: any;
    country: string;
    contact_person: string;
    parent_store_id?: number;
    name: string;
    company_id: number;
    mall_area?: string;
    vat_no?: string;
    latitude: number;
    packaging_material_count?: number;
    city: string;
    order_integration_id?: string;
    fulfillment_channel: string;
    pincode: string;
    s_id: string;
    meta: StoreMeta;
    phone: number;
    store_email: string;
    address2?: string;
    alohomora_user_id?: number;
    mall_name?: string;
    is_enabled_for_recon?: boolean;
    created_at: string;
    address1: string;
    brand_store_tags?: string[];
};
type B2BPODetails = {
    docker_number?: string;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
    total_gst_percentage?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
};
type BagDetailsPlatformResponse = {
    article: Article;
    item: Item;
    prices: Prices;
    restore_coupon?: boolean;
    affiliate_details?: AffiliateDetails;
    brand: Brand;
    journey_type: string;
    display_name?: string;
    tags?: string[];
    original_bag_list?: number[];
    quantity?: number;
    restore_promos?: any;
    financial_breakup: FinancialBreakup[];
    applied_promos?: any[];
    b_type?: string;
    seller_identifier?: string;
    operational_status?: string;
    article_details?: ArticleDetails;
    qc_required?: any;
    current_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    dates?: Dates;
    identifier?: string;
    line_number?: number;
    parent_promo_bags?: any;
    gst_details: BagGSTDetails;
    no_of_bags_order?: number;
    order_integration_id?: string;
    bag_status_history?: BagStatusHistory;
    ordering_store?: Store;
    b_id: number;
    meta?: BagMeta;
    bag_update_time?: number;
    current_operational_status: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
    shipment_id?: string;
    reasons?: any[];
    entity_type?: string;
    bag_status: BagStatusHistory[];
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    size: number;
    current: number;
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
    store_id: number;
    affiliate_bag_id?: string;
    set_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    affiliate_id?: string;
    item_id?: string;
    bag_id?: number;
    mongo_article_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    reason_text: string;
    id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entity_type: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    is_bag_locked?: boolean;
    status?: string;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    logo_url?: string;
    description?: string;
    created_at?: string;
    from_datetime?: string;
    platform_id?: string;
    id: number;
    title?: string;
    platform_name?: string;
    company_id?: number;
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
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
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
    quantity?: number;
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    identifier?: string;
    meta?: any;
    final_state?: any;
    stack_trace?: string;
    exception?: string;
    message?: string;
    code?: string;
    status?: number;
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
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    description?: string;
    created_at: string;
    token: string;
    updated_at: string;
    name: string;
    id: string;
    secret: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type OrderConfig = {
    article_lookup?: string;
    bag_end_state?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    create_user?: boolean;
};
type OrderUser = {
    city: string;
    phone: number;
    pincode: string;
    mobile: number;
    address2?: string;
    country: string;
    email: string;
    address1?: string;
    first_name: string;
    last_name: string;
    state: string;
};
type ArticleDetails1 = {
    dimension: any;
    attributes: any;
    _id: string;
    category: any;
    brand_id: number;
    weight: any;
    quantity: number;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    box_type?: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    shipments: number;
    meta?: any;
    dp_id?: number;
};
type ShipmentConfig = {
    identifier: string;
    payment_mode: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    journey: string;
    action: string;
    source: string;
    to_pincode: string;
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
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    identifier: any;
    amount_paid: number;
    fynd_store_id: string;
    discount: number;
    company_id: number;
    hsn_code_id: string;
    affiliate_store_id: string;
    item_size: string;
    _id: string;
    item_id: number;
    store_id: number;
    avl_qty: number;
    modified_on: string;
    price_effective: number;
    delivery_charge: number;
    sku: string;
    quantity: number;
    affiliate_meta: any;
    seller_identifier: string;
    price_marked: number;
    transfer_price: number;
    unit_price: number;
    pdf_links?: MarketPlacePdf;
};
type OrderInfo = {
    cod_charges: number;
    shipping_address: OrderUser;
    payment_mode: string;
    order_value: number;
    shipment?: ShipmentData;
    order_priority?: OrderPriority;
    coupon?: string;
    items: any;
    billing_address: OrderUser;
    payment?: any;
    user: UserData;
    delivery_charges: number;
    discount: number;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
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
    slug: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l3_detail?: string;
    l1_detail?: string;
    type: string;
    ticket_id?: string;
    user: string;
    message: string;
    bag_id?: number;
    l2_detail?: string;
    ticket_url?: string;
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
    identifier?: string;
    line_number?: string;
};
type PostHistoryData = {
    message: string;
    user_name: string;
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
    shipment_id: number;
    phone_number: number;
    payment_mode: string;
    amount_paid: number;
    message: string;
    brand_name: string;
    customer_name: string;
    order_id: string;
    country_code: string;
};
type SendSmsPayload = {
    bag_id: number;
    slug: string;
    data?: SmsDataPayload;
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
    shipment_id?: string;
    bag_list?: number[];
    id: number;
    meta: Meta1;
    remarks?: string;
    status?: string;
};
type OrderStatusData = {
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
    errors?: string[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    dp_id: number;
    qc_required: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type PaymentMethod = {
    mode: string;
    collect_by: string;
    meta?: any;
    transaction_data?: any;
    refund_by: string;
    name: string;
    amount: number;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type BillingInfo = {
    alternate_email?: string;
    house_no?: string;
    state_code?: string;
    primary_mobile_number: string;
    floor_no?: string;
    external_customer_code?: string;
    address2?: string;
    address1: string;
    title?: string;
    country_code?: string;
    pincode: string;
    primary_email: string;
    gender?: string;
    country: string;
    last_name?: string;
    middle_name?: string;
    state: string;
    city: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    first_name: string;
};
type ShippingInfo = {
    landmark?: string;
    geo_location?: any;
    alternate_email?: string;
    house_no?: string;
    state_code?: string;
    primary_mobile_number: string;
    floor_no?: string;
    external_customer_code?: string;
    address2?: string;
    address1: string;
    title?: string;
    country_code?: string;
    slot?: any[];
    pincode: string;
    primary_email: string;
    gender?: string;
    country: string;
    last_name?: string;
    middle_name?: string;
    state: string;
    city: string;
    alternate_mobile_number?: string;
    address_type?: string;
    shipping_type?: string;
    customer_code?: string;
    first_name: string;
};
type Tax = {
    amount: any;
    name: string;
    rate: number;
    breakup?: any[];
};
type Charge = {
    tax?: Tax;
    type: string;
    name: string;
    amount: any;
    code?: string;
};
type LineItem = {
    meta?: any;
    external_line_id?: string;
    custom_messasge?: string;
    charges?: Charge[];
    quantity?: number;
    seller_identifier: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
};
type CreateOrderAPI = {
    external_order_id?: string;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    shipping_info: ShippingInfo;
    external_creation_date?: string;
    shipments: Shipment[];
    charges?: Charge[];
    meta?: any;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    info?: any;
    request_id?: string;
    meta?: string;
    stack_trace?: string;
    exception?: string;
    message: string;
    code?: string;
    status: number;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
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
    shipment_assignment?: string;
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    lock_states?: string[];
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
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    order_details?: FyndOrderIdList[];
    start_date: string;
    end_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    result?: any;
    uid?: string;
    words?: string[];
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
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    result: SearchKeywordResult;
    words?: string[];
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    url?: string;
    query?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    results?: AutocompleteResult[];
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    _custom_json?: any;
    words?: string[];
};
type ProductBundleItem = {
    product_uid: number;
    max_quantity: number;
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    slug: string;
    is_active: boolean;
    modified_by?: any;
    id?: string;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    choice: string;
    company_id?: number;
    same_store_assignment?: boolean;
    meta?: any;
    logo?: string;
    name: string;
    page_visibility?: string[];
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    slug: string;
    is_active: boolean;
    modified_by?: any;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    choice: string;
    company_id?: number;
    same_store_assignment?: boolean;
    meta?: any;
    logo?: string;
    name: string;
    page_visibility?: string[];
};
type LimitedProductData = {
    identifier?: any;
    slug?: string;
    attributes?: any;
    item_code?: string;
    uid?: number;
    quantity?: number;
    price?: any;
    country_of_origin?: string;
    name?: string;
    sizes?: string[];
    images?: string[];
    short_description?: string;
};
type Price = {
    max_marked?: number;
    min_effective?: number;
    currency?: string;
    max_effective?: number;
    min_marked?: number;
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type GetProducts = {
    product_uid?: number;
    max_quantity?: number;
    min_quantity?: number;
    product_details?: LimitedProductData;
    auto_select?: boolean;
    price?: Price;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    slug?: string;
    is_active?: boolean;
    choice?: string;
    company_id?: number;
    same_store_assignment?: boolean;
    meta?: any;
    logo?: string;
    name?: string;
    page_visibility?: string[];
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    slug: string;
    is_active: boolean;
    modified_by?: any;
    modified_on?: string;
    choice: string;
    company_id?: number;
    same_store_assignment?: boolean;
    meta?: any;
    logo?: string;
    name: string;
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
    image?: string;
    brand_id?: number;
    id?: string;
    modified_by?: any;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    description?: string;
    tag?: string;
    company_id?: number;
    guide?: Guide;
    active?: boolean;
    subtitle?: string;
    name: string;
    title: string;
};
type SizeGuideResponse = {
    brand_id?: number;
    id?: string;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    created_on?: string;
    guide?: any;
    tag?: string;
    company_id?: number;
    active?: boolean;
    subtitle?: string;
    name?: string;
    title?: string;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    seo?: SEOData;
    moq?: MOQData;
    is_gift?: boolean;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    alt_text?: any;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
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
    slug?: string;
    is_active: boolean;
    display_type: string;
    key?: string;
    priority: number;
    logo?: string;
    unit?: string;
    name: string;
};
type AppConfigurationDetail = {
    app_id: string;
    slug: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    priority: number;
    logo?: string;
    name?: string;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    is_active: boolean;
    key: string;
    priority: number;
    default_key: string;
    logo?: string;
    name?: string;
    is_default: boolean;
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
    filter_types?: string[];
    display?: string;
    units?: any[];
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    compare?: any;
    detail?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    priority: number;
    logo?: string;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    condition?: string;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    type: string;
    key: string;
    priority: number;
    display_name?: string;
    logo?: string;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    is_active: boolean;
    display_type: string;
    key: string;
    priority: number;
    logo?: string;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    is_active: boolean;
    key: string;
    priority: number;
    logo?: string;
    subtitle?: string;
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
    app_id: string;
    id?: string;
    modified_by?: any;
    type?: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    config_id?: string;
    listing?: ConfigurationListing;
    config_type: string;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    app_id: string;
    modified_by?: any;
    type?: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    config_id?: string;
    listing?: ConfigurationListing;
    config_type: string;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    id?: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    operators?: string[];
    display: string;
    kind?: string;
    logo?: string;
    name: string;
};
type ProductFiltersValue = {
    currency_code?: string;
    min?: number;
    query_format?: string;
    currency_symbol?: string;
    is_selected: boolean;
    display_format?: string;
    selected_min?: number;
    display: string;
    max?: number;
    selected_max?: number;
    count?: number;
    value: any;
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
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type BannerImage = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    priority?: number;
    tag?: string[];
    action?: Action;
    banners?: ImageUrls;
    app_id?: string;
    uid?: string;
    badge?: any;
    visible_facets_keys?: string[];
    _schedule?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    type?: string;
    cron?: any;
    logo?: Media1;
    meta?: any;
    name?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type UserInfo = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    duration?: number;
    start?: string;
    end?: string;
    cron?: string;
    next_schedule?: NextSchedule[];
};
type CreateCollection = {
    sort_on?: string;
    slug: string;
    allow_facets?: boolean;
    published?: boolean;
    created_by?: UserInfo;
    allow_sort?: boolean;
    description?: string;
    priority?: number;
    banners: CollectionBanner;
    app_id: string;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    _custom_json?: any;
    query?: CollectionQuery[];
    tags?: string[];
    modified_by?: UserInfo;
    type: string;
    _locale_language?: any;
    logo: CollectionImage;
    meta?: any;
    name: string;
    is_visible?: boolean;
};
type CollectionCreateResponse = {
    sort_on?: string;
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    priority?: number;
    banners?: ImageUrls;
    app_id?: string;
    badge?: any;
    visible_facets_keys?: string[];
    _schedule?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    type?: string;
    cron?: any;
    logo?: BannerImage;
    meta?: any;
    name?: string;
};
type CollectionDetailResponse = {
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    priority?: number;
    tag?: string[];
    banners?: ImageUrls;
    app_id?: string;
    uid?: string;
    badge?: any;
    visible_facets_keys?: string[];
    _schedule?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    type?: string;
    cron?: any;
    logo?: Media1;
    meta?: any;
    name?: string;
};
type UpdateCollection = {
    sort_on?: string;
    slug?: string;
    allow_facets?: boolean;
    published?: boolean;
    allow_sort?: boolean;
    description?: string;
    priority?: number;
    banners?: CollectionBanner;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    _custom_json?: any;
    query?: CollectionQuery[];
    tags?: string[];
    modified_by?: UserInfo;
    type?: string;
    _locale_language?: any;
    logo?: CollectionImage;
    meta?: any;
    name?: string;
    is_visible?: boolean;
};
type Price1 = {
    currency_code?: string;
    min?: number;
    max?: number;
    currency_symbol?: string;
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
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    uid?: number;
    name?: string;
};
type ProductListingDetail = {
    highlights?: string[];
    discount?: string;
    slug: string;
    item_code?: string;
    description?: string;
    sellable?: boolean;
    has_variant?: boolean;
    short_description?: string;
    rating_count?: number;
    uid?: number;
    similars?: string[];
    item_type?: string;
    tryouts?: string[];
    color?: string;
    teaser_tag?: any;
    price?: ProductListingPrice;
    image_nature?: string;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    product_online_date?: string;
    promo_meta?: any;
    type?: string;
    attributes?: any;
    name?: string;
    brand?: ProductBrand;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    type?: string;
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    total_sizes?: number;
    available_sizes?: number;
    total_articles?: number;
    available_articles?: number;
    name?: string;
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
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    opt_level: string;
    brand_ids?: number[];
    platform?: string;
    store_ids?: number[];
    company_id?: number;
    enabled?: boolean;
};
type CompanyOptIn = {
    modified_by?: any;
    opt_level: string;
    brand_ids: number[];
    modified_on: number;
    platform: string;
    store_ids: number[];
    created_on: number;
    created_by?: any;
    company_id: number;
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    business_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    store_type?: string;
    timing?: any;
    additional_contacts?: any[];
    documents?: any[];
    modified_on?: string;
    created_on?: string;
    uid?: number;
    display_name?: string;
    company_id?: number;
    address?: any;
    manager?: any;
    name?: string;
    store_code?: string;
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
    format?: string;
    multi?: boolean;
    type: string;
    mandatory?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
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
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    departments?: string[];
    schema?: AttributeMaster;
    id?: string;
    slug?: string;
    filters?: AttributeMasterFilter;
    description?: string;
    is_nested?: boolean;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    name?: string;
    logo?: string;
    enabled_for_end_consumer?: boolean;
};
type CategoriesResponse = {
    slug_key?: string;
    slug?: string;
    uid?: number;
    template_slug?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    message?: string;
    errors?: any;
    meta?: any;
    code?: string;
    status?: number;
};
type UserSerializer = {
    contact?: string;
    uid?: string;
    username?: string;
    _id?: string;
    user_id?: string;
};
type GetDepartment = {
    page_no?: number;
    item_type?: string;
    slug?: string;
    is_active?: boolean;
    modified_by?: UserSerializer;
    search?: string;
    page_size?: number;
    uid?: number;
    priority_order?: number;
    created_on?: string;
    created_by?: UserSerializer;
    synonyms?: string[];
    modified_on?: string;
    logo?: string;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    errors?: any;
    meta?: any;
    code?: string;
    status?: number;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    slug?: string;
    is_active?: boolean;
    tags?: string[];
    _custom_json?: any;
    uid?: number;
    priority_order: number;
    synonyms?: string[];
    _cls?: string;
    logo: string;
    name: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    user_id: string;
    username: string;
    super_user?: boolean;
};
type DepartmentModel = {
    slug: any;
    is_active?: boolean;
    modified_by?: UserDetail;
    _custom_json?: any;
    verified_on?: string;
    modified_on: string;
    created_on: string;
    created_by?: UserDetail;
    verified_by?: UserDetail;
    uid: number;
    priority_order: number;
    synonyms?: any[];
    logo: string;
    _cls?: any;
    name: any;
    _id?: any;
};
type ProductTemplate = {
    categories?: string[];
    departments?: string[];
    is_archived?: boolean;
    slug: string;
    is_active?: boolean;
    is_physical: boolean;
    is_expirable: boolean;
    attributes?: string[];
    modified_by?: any;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    description?: string;
    tag?: string;
    logo?: string;
    name?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    product_group_tag?: any;
    highlights?: any;
    slug?: any;
    item_code?: any;
    description?: any;
    media?: any;
    product_publish?: any;
    multi_size?: any;
    sizes?: any;
    command?: any;
    short_description?: any;
    variants?: any;
    brand_uid?: any;
    custom_order?: any;
    size_guide?: any;
    no_of_boxes?: any;
    item_type?: any;
    is_active?: any;
    hsn_code?: any;
    teaser_tag?: any;
    return_config?: any;
    category_slug?: any;
    tags?: any;
    currency?: any;
    is_dependent?: any;
    country_of_origin?: any;
    name?: any;
    trader_type?: any;
    trader?: any;
};
type GlobalValidation = {
    title?: string;
    type?: string;
    description?: string;
    definitions?: any;
    required?: string[];
    properties?: Properties;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    categories?: string[];
    departments?: string[];
    is_archived?: boolean;
    id?: string;
    slug: string;
    is_active?: boolean;
    is_physical: boolean;
    is_expirable: boolean;
    attributes?: string[];
    description?: string;
    tag?: string;
    logo?: string;
    name?: string;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    trigger_on?: string;
    id?: string;
    seller_id?: number;
    created_by?: VerifiedBy;
    completed_on?: string;
    template_tags?: any;
    url?: string;
    task_id?: string;
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
    landscape: string;
    portrait: string;
    logo: string;
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
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Category = {
    departments: number[];
    level: number;
    slug?: string;
    tryouts?: string[];
    is_active: boolean;
    modified_by?: any;
    id?: string;
    created_by?: any;
    uid?: number;
    created_on?: string;
    modified_on?: string;
    media?: Media2;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    priority?: number;
    name: string;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    departments: number[];
    level: number;
    slug?: string;
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    priority?: number;
    name: string;
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
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type ProductSchemaV2 = {
    product_group_tag?: string[];
    highlights?: string[];
    departments?: number[];
    category_uid?: number;
    id?: string;
    slug?: string;
    net_quantity?: NetQuantityResponse;
    is_expirable?: boolean;
    item_code?: string;
    created_by?: any;
    stage?: string;
    description?: string;
    media?: Media1[];
    variant_media?: any;
    product_publish?: ProductPublish;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    sizes?: any[];
    short_description?: string;
    primary_color?: string;
    pending?: string;
    is_set?: boolean;
    all_sizes?: any[];
    template_tag?: string;
    uid?: number;
    moq?: any;
    brand_uid?: number;
    variants?: any;
    all_identifiers?: string[];
    custom_order?: any;
    size_guide?: string;
    item_type?: string;
    is_physical?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    hsn_code?: string;
    color?: string;
    category?: any;
    no_of_boxes?: number;
    teaser_tag?: any;
    modified_on?: string;
    return_config?: ReturnConfigResponse;
    image_nature?: string;
    tax_identifier?: any;
    company_id?: number;
    images?: Image[];
    category_slug?: string;
    tags?: string[];
    modified_by?: any;
    currency?: string;
    variant_group?: any;
    is_dependent?: boolean;
    l3_mapping?: string[];
    attributes?: any;
    created_on?: string;
    verified_on?: string;
    country_of_origin?: string;
    all_company_ids?: number[];
    name?: string;
    brand?: Brand;
    verified_by?: VerifiedBy;
    trader?: Trader[];
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductPublish1 = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type ProductCreateUpdateSchemaV2 = {
    product_group_tag?: string[];
    highlights?: string[];
    departments: number[];
    slug: string;
    net_quantity?: NetQuantity;
    item_code: string;
    bulk_job_id?: string;
    description?: string;
    variant_media?: any;
    media?: Media1[];
    action?: string;
    product_publish?: ProductPublish1;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    sizes: any[];
    short_description?: string;
    is_set?: boolean;
    template_tag: string;
    uid?: number;
    brand_uid: number;
    variants?: any;
    custom_order?: CustomOrder;
    size_guide?: string;
    no_of_boxes?: number;
    item_type: string;
    is_active?: boolean;
    _custom_json?: any;
    teaser_tag?: TeaserTag;
    return_config: ReturnConfig;
    company_id: number;
    tax_identifier: TaxIdentifier;
    category_slug: string;
    tags?: string[];
    currency: string;
    variant_group?: any;
    requester?: string;
    is_dependent?: boolean;
    attributes?: any;
    country_of_origin: string;
    change_request_id?: any;
    name: string;
    trader: Trader[];
};
type ProductVariants = {
    category_uid?: number;
    item_code?: string;
    uid?: number;
    media?: Media1[];
    brand_uid?: number;
    name?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    departments: string[];
    slug: string;
    created_by?: any;
    description?: string;
    synonyms?: any;
    filters: AttributeMasterFilter;
    unit?: string;
    enabled_for_end_consumer?: boolean;
    schema: AttributeMaster;
    modified_on?: string;
    is_nested?: boolean;
    variant?: boolean;
    tags?: string[];
    modified_by?: any;
    raw_key?: string;
    created_on?: string;
    logo?: string;
    details: AttributeMasterDetails;
    name?: string;
    suggestion?: string;
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
    size: any;
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_width: number;
    item_length: number;
    item_weight: number;
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
    product_group_tag?: string[];
    highlights?: string[];
    departments?: number[];
    category_uid?: number;
    id?: string;
    slug?: string;
    net_quantity?: NetQuantityResponse;
    is_expirable?: boolean;
    item_code?: string;
    created_by?: any;
    stage?: string;
    description?: string;
    media?: Media1[];
    variant_media?: any;
    product_publish?: ProductPublished;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    sizes?: any[];
    short_description?: string;
    primary_color?: string;
    pending?: string;
    is_set?: boolean;
    all_sizes?: any[];
    template_tag?: string;
    uid?: number;
    moq?: any;
    brand_uid?: number;
    variants?: any;
    all_identifiers?: string[];
    custom_order?: any;
    size_guide?: string;
    item_type?: string;
    is_physical?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    hsn_code?: string;
    color?: string;
    category?: any;
    no_of_boxes?: number;
    teaser_tag?: any;
    modified_on?: string;
    return_config?: ReturnConfigResponse;
    image_nature?: string;
    tax_identifier?: any;
    company_id?: number;
    images?: Image[];
    category_slug?: string;
    tags?: string[];
    modified_by?: any;
    currency?: string;
    variant_group?: any;
    is_dependent?: boolean;
    l3_mapping?: string[];
    attributes?: any;
    created_on?: string;
    verified_on?: string;
    country_of_origin?: string;
    all_company_ids?: number[];
    name?: string;
    brand?: Brand;
    verified_by?: VerifiedBy;
    trader?: Trader[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    template?: ProductTemplate;
    failed?: number;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserDetail1;
    cancelled?: number;
    template_tag?: string;
    modified_on?: string;
    created_on?: string;
    stage?: string;
    failed_records?: string[];
    created_by?: UserDetail1;
    total?: number;
    company_id?: number;
    succeed?: number;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    failed?: number;
    is_active?: boolean;
    modified_by?: UserInfo1;
    file_path?: string;
    cancelled?: number;
    template_tag?: string;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    failed_records?: any[];
    total?: number;
    succeed?: number;
    company_id: number;
    stage?: string;
    tracking_url?: string;
    custom_template_tag?: string;
    cancelled_records?: any[];
};
type BulkResponse = {
    is_active?: boolean;
    modified_by?: UserInfo1;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    batch_id: string;
};
type BulkProductRequest = {
    data: any[];
    company_id: number;
    template_tag: string;
    batch_id: string;
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
    id?: string;
    failed?: number;
    file_path?: string;
    modified_by?: UserCommon;
    is_active?: boolean;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserCommon;
    created_on?: string;
    failed_records?: string[];
    succeed?: number;
    stage?: string;
    retry?: number;
    total?: number;
    company_id?: number;
    tracking_url?: string;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    company_id?: number;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    size?: string;
    item_id?: number;
    inventory_updated_on?: string;
    identifiers?: any;
    seller_identifier?: string;
    currency?: string;
    price_effective?: number;
    uid?: string;
    quantity?: number;
    sellable_quantity?: number;
    price?: number;
    price_transfer?: number;
    store?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
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
type InvSize = {
    size: any;
    is_set?: boolean;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    item_height?: number;
    store_code: string;
    price_effective: number;
    currency: string;
    quantity: number;
    set?: InventorySet;
    price?: number;
    item_width?: number;
    item_dimensions_unit_of_measure?: string;
    price_transfer?: number;
    item_length?: number;
    item_weight?: number;
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
type DimensionResponse = {
    height: number;
    width: number;
    length: number;
    unit: string;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type PriceMeta = {
    tp_notes?: any;
    currency: string;
    effective: number;
    transfer: number;
    marked: number;
    updated_at?: string;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type InventorySellerResponse = {
    identifier: any;
    item_id: number;
    created_by?: UserSerializer;
    stage?: string;
    fragile: boolean;
    raw_meta?: any;
    fynd_article_code: string;
    size: string;
    is_set?: boolean;
    dimension: DimensionResponse;
    uid: string;
    expiration_date?: string;
    added_on_store?: string;
    company: CompanyMeta;
    manufacturer: ManufacturerResponse;
    is_active?: boolean;
    store: StoreMeta;
    _custom_json?: any;
    fynd_meta?: any;
    price: PriceMeta;
    return_config?: ReturnConfig1;
    tax_identifier?: any;
    total_quantity: number;
    trace_id?: string;
    quantities?: Quantities;
    tags?: string[];
    seller_identifier: string;
    modified_by?: UserSerializer;
    weight: WeightResponse;
    track_inventory?: boolean;
    set?: InventorySet;
    country_of_origin: string;
    meta?: any;
    brand: BrandMeta;
    fynd_item_code: string;
    trader?: Trader1[];
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type DimensionResponse1 = {
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    uid?: number;
    name?: string;
};
type PriceArticle = {
    tp_notes?: any;
    currency?: string;
    effective?: number;
    transfer?: number;
    marked?: number;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type GetInventories = {
    identifier?: any;
    item_id?: number;
    id?: string;
    created_by?: UserSerializer;
    stage?: string;
    size?: string;
    is_set?: boolean;
    dimension?: DimensionResponse1;
    uid?: string;
    expiration_date?: string;
    company?: CompanyMeta1;
    platforms?: any;
    manufacturer?: ManufacturerResponse1;
    inventory_updated_on?: string;
    store?: ArticleStoreResponse;
    price?: PriceArticle;
    return_config?: ReturnConfig2;
    tax_identifier?: any;
    total_quantity?: number;
    trace_id?: string;
    quantities?: QuantitiesArticle;
    tags?: string[];
    seller_identifier?: string;
    modified_by?: UserSerializer;
    weight?: WeightResponse1;
    country_of_origin?: string;
    date_meta?: DateMeta;
    brand?: BrandMeta1;
    track_inventory?: boolean;
    trader?: Trader2[];
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    id?: string;
    failed?: number;
    file_path?: string;
    is_active?: boolean;
    modified_by?: any;
    cancelled?: number;
    created_by?: any;
    created_on?: string;
    failed_records?: string[];
    modified_on?: string;
    stage?: string;
    succeed?: number;
    company_id?: number;
    total?: number;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    currency?: string;
    quantity?: number;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    total_quantity?: number;
    store_code: string;
    expiration_date?: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportJob = {
    trigger_on?: string;
    request_params?: any;
    seller_id: number;
    completed_on?: string;
    url?: string;
    task_id: string;
    status?: string;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    request_params?: any;
    seller_id: number;
    task_id: string;
    status?: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    trace_id?: string;
    total_quantity?: number;
    expiration_date?: string;
    store_id: number;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
    meta?: any;
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
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    id?: string;
    tax1?: number;
    hsn_code?: string;
    threshold1?: number;
    modified_on?: string;
    company_id?: number;
    tax2?: number;
    threshold2?: number;
    hs2_code?: string;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    is_active?: boolean;
    tax1: number;
    hsn_code: string;
    threshold1: number;
    uid?: number;
    company_id: number;
    tax2?: number;
    threshold2?: number;
    hs2_code: string;
    tax_on_esp?: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    size?: number;
    item_total?: number;
    current?: string;
    has_next?: boolean;
    has_previous?: boolean;
};
type TaxSlab = {
    cess?: number;
    effective_date: string;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    hsn_code_id?: string;
    reporting_hsn: string;
    modified_by?: any;
    hsn_code: string;
    type: string;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    description: string;
    country_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    departments?: string[];
    discount?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    logo?: Media;
    name?: string;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    slug?: string;
    _custom_json?: any;
    uid?: number;
    action?: Action;
    childs?: any[];
    name?: string;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    slug?: string;
    _custom_json?: any;
    uid?: number;
    action?: Action;
    childs?: ThirdLevelChild[];
    name?: string;
    banners?: ImageUrls;
};
type Child = {
    slug?: string;
    _custom_json?: any;
    uid?: number;
    action?: Action;
    childs?: SecondLevelChild[];
    name?: string;
    banners?: ImageUrls;
};
type CategoryItems = {
    slug?: string;
    uid?: number;
    action?: Action;
    childs?: Child[];
    name?: string;
    banners?: ImageUrls;
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
    sort_on?: ProductSortOn[];
    operators?: any;
    page: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type ProductDetail = {
    highlights?: string[];
    slug: string;
    item_code?: string;
    description?: string;
    has_variant?: boolean;
    short_description?: string;
    rating_count?: number;
    uid?: number;
    similars?: string[];
    item_type?: string;
    tryouts?: string[];
    color?: string;
    teaser_tag?: any;
    image_nature?: string;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    product_online_date?: string;
    promo_meta?: any;
    type?: string;
    attributes?: any;
    name?: string;
    brand?: ProductBrand;
};
type InventoryPage = {
    item_total: number;
    type: string;
    has_next?: boolean;
    has_previous?: boolean;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
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
    query?: ArticleQuery;
    group_id?: string;
    meta?: any;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    app_id: string;
    channel_identifier?: string;
    pincode: string;
    store_ids?: number[];
    company_id?: number;
    channel_type?: string;
    articles: AssignStoreArticle[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    store_id?: number;
    size: string;
    item_id: number;
    price_effective?: number;
    uid?: string;
    quantity: number;
    strategy_wise_listing?: any[];
    s_city?: string;
    company_id?: number;
    group_id?: string;
    meta?: any;
    index?: number;
    store_pincode?: number;
    _id?: string;
    article_assignment: ArticleAssignment1;
    status: boolean;
    price_marked?: number;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
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
    country_code: number;
    number: string;
};
type GetAddressSerializer = {
    country?: string;
    city?: string;
    longitude?: number;
    address2?: string;
    pincode?: number;
    latitude?: number;
    address1?: string;
    address_type?: string;
    landmark?: string;
    country_code?: string;
    state?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    verified_on?: string;
    created_on?: string;
    modified_on?: string;
    uid?: number;
    created_by?: UserSerializer2;
    stage?: string;
    name?: string;
    verified_by?: UserSerializer2;
    reject_reason?: string;
    company_type?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    open: boolean;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    phone_number: string;
    created_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    integration_type?: LocationIntegrationType;
    contact_numbers?: SellerPhoneNumber[];
    uid?: number;
    notification_emails?: string[];
    code: string;
    company?: GetCompanySerializer;
    store_type?: string;
    _custom_json?: any;
    documents?: Document[];
    modified_on?: string;
    address: GetAddressSerializer;
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    modified_by?: UserSerializer1;
    verified_on?: string;
    created_on?: string;
    display_name: string;
    manager?: LocationManagerSerializer;
    name: string;
    verified_by?: UserSerializer1;
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
    is_active?: boolean;
    _custom_json?: any;
    uid: number;
    logo?: string;
    name?: string;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    name?: string;
    business_type: string;
    notification_emails?: string[];
    stage?: string;
    business_details?: BusinessDetails;
    created_on?: string;
    created_by?: UserSerializer;
    warnings?: any;
    contact_details?: ContactDetails;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    verified_by?: UserSerializer;
    company_type: string;
    uid: number;
    documents?: Document[];
    _custom_json?: any;
    modified_on?: string;
    mode?: string;
    taxes?: CompanyTaxesSerializer[];
    business_info?: string;
    business_country_info?: BusinessCountryInfo;
    franchise_enabled?: boolean;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    address_type: string;
    longitude: number;
    address1: string;
    pincode: number;
    country: string;
    latitude: number;
    country_code?: string;
    state: string;
    landmark?: string;
    city: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    warnings?: any;
    company_type?: string;
    reject_reason?: string;
    contact_details?: ContactDetails;
    franchise_enabled?: boolean;
    name?: string;
    addresses?: CreateUpdateAddressSerializer[];
    documents?: Document[];
    _custom_json?: any;
    business_type?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
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
    brand?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    slug_key?: string;
    name: string;
    stage?: string;
    created_on?: string;
    created_by?: UserSerializer;
    warnings?: any;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    verified_by?: UserSerializer;
    description?: string;
    uid?: number;
    _custom_json?: any;
    modified_on?: string;
    mode?: string;
    _locale_language?: any;
    logo?: string;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    logo: string;
    brand_tier?: string;
    uid?: number;
    name: string;
    company_id?: number;
    _custom_json?: any;
    synonyms?: string[];
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    created_on?: string;
    created_by?: UserSerializer;
    details?: CompanyDetails;
    company_type: string;
    reject_reason?: string;
    uid?: number;
    name?: string;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    business_type: string;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    market_channels?: string[];
    stage?: string;
};
type CompanyBrandSerializer = {
    created_on?: string;
    created_by?: UserSerializer;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    uid?: number;
    modified_by?: UserSerializer;
    verified_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    stage?: string;
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
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    address2?: string;
    address_type?: string;
    longitude: number;
    country?: string;
    address1?: string;
    pincode?: number;
    latitude: number;
    landmark?: string;
    state?: string;
    country_code?: string;
    city?: string;
};
type LocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    holiday?: HolidaySchemaSerializer[];
    uid?: number;
    name: string;
    documents?: Document[];
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    code: string;
    notification_emails?: string[];
    address: AddressSerializer;
    store_type?: string;
    stage?: string;
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
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    networks?: string[];
    types?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    platforms?: string[];
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    user_groups?: number[];
    price_range?: PriceRange;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type Rule = {
    value?: number;
    key?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
    description?: string;
    subtitle?: string;
};
type CouponAdd = {
    validation?: Validation;
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    code: string;
    author?: CouponAuthor;
    validity: Validity;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    type_slug: string;
    identifiers: Identifier;
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
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    code: string;
    author?: CouponAuthor;
    validity: Validity;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    type_slug: string;
    identifiers: Identifier;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    buy_rules?: string[];
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_id?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_brand?: number[];
    item_company?: number[];
    item_sku?: string[];
    item_exclude_store?: number[];
    item_exclude_company?: number[];
    item_size?: string[];
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
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
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    platforms?: string[];
    user_id?: string[];
    user_registered?: UserRegistered;
    order_quantity?: number;
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
};
type DiscountOffer = {
    discount_price?: number;
    min_offer_quantity?: number;
    discount_percentage?: number;
    code?: string;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionSchedule = {
    cron?: string;
    start: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
    published: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type PromotionListItem = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionUpdate = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
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
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    images?: ProductImage[];
    name?: string;
    type?: string;
    uid?: number;
    action?: ProductAction;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    slug?: string;
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
    size?: string;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    _custom_json?: any;
    type?: string;
    store?: BaseInfo;
    extra_meta?: any;
    uid?: string;
    price?: ArticlePriceInfo;
    seller?: BaseInfo;
    quantity?: number;
};
type ProductAvailability = {
    deliverable?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    amount?: number;
    offer_text?: string;
    promotion_type?: string;
    ownership?: Ownership2;
    article_quantity?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
};
type ProductPrice = {
    selling?: number;
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    marked?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    parent_item_identifiers?: any;
    product?: CartProduct;
    article?: ProductArticle;
    bulk_offer?: any;
    availability?: ProductAvailability;
    coupon_message?: string;
    promo_meta?: PromoMeta;
    key?: string;
    is_set?: boolean;
    discount?: string;
    promotions_applied?: AppliedPromotion[];
    price?: ProductPriceInfo;
    message?: string;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    identifiers: CartProductIdentifer;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    applicable?: number;
    is_applied?: boolean;
};
type RawBreakup = {
    coupon?: number;
    total?: number;
    delivery_charge?: number;
    mrp_total?: number;
    convenience_fee?: number;
    discount?: number;
    you_saved?: number;
    vog?: number;
    gst_charges?: number;
    cod_charge?: number;
    fynd_cash?: number;
    subtotal?: number;
};
type DisplayBreakup = {
    value?: number;
    display?: string;
    currency_code?: string;
    key?: string;
    message?: string[];
    currency_symbol?: string;
};
type CouponBreakup = {
    value?: number;
    type?: string;
    code?: string;
    uid?: string;
    message?: string;
    is_applied?: boolean;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    address_type?: string;
    phone?: number;
    name?: string;
    address?: string;
    pincode?: number;
    landmark?: string;
    area_code: string;
    state?: string;
    country?: string;
    country_code?: string;
    area_code_slug?: string;
    meta?: any;
    area?: string;
    email?: string;
    city?: string;
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
    items?: CartProductInfo[];
    message?: string;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
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
    extra_meta?: any;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    product_id: number;
    delivery_charges: number;
    discount: number;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    cod_charges: number;
    meta?: CartItemMeta;
    price_effective: number;
    coupon_effective_discount: number;
    quantity?: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    files?: OpenApiFiles[];
    comment?: string;
    coupon?: string;
    coupon_value: number;
    affiliate_order_id?: string;
    payment_mode?: string;
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    billing_address: ShippingAddress;
    employee_discount?: any;
    cashback_applied: number;
    cod_charges: number;
    coupon_code: string;
    shipping_address?: ShippingAddress;
    gstin?: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    success?: boolean;
    order_id: string;
};
type AbandonedCart = {
    buy_now?: boolean;
    uid: number;
    created_on: string;
    articles: any[];
    coupon?: any;
    promotion?: any;
    payment_methods?: any[];
    fynd_credits?: any;
    app_id?: string;
    checkout_mode?: string;
    order_id?: string;
    payments?: any;
    merge_qty?: boolean;
    delivery_charges?: any;
    bulk_coupon_discount?: number;
    is_archive?: boolean;
    comment?: string;
    pick_up_customer_details?: any;
    _id: string;
    is_active?: boolean;
    payment_mode?: string;
    last_modified: string;
    cart_value?: number;
    is_default: boolean;
    discount?: number;
    user_id: string;
    cashback: any;
    fc_index_map?: number[];
    shipments?: any[];
    cod_charges?: any;
    expire_at: string;
    meta?: any;
    gstin?: string;
};
type AbandonedCartResponse = {
    page?: Page;
    items?: AbandonedCart[];
    message?: string;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    coupon_text?: string;
    checkout_mode?: string;
    last_modified?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    items?: CartProductInfo[];
    message?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    currency?: CartCurrency;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    id?: string;
};
type AddProductCart = {
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    _custom_json?: any;
    display?: string;
    extra_meta?: any;
    item_id?: number;
    article_assignment?: any;
    store_id?: number;
    seller_id?: number;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    item_size?: string;
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
    parent_item_identifiers?: any;
    _custom_json?: any;
    extra_meta?: any;
    item_id?: number;
    item_index?: number;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
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
