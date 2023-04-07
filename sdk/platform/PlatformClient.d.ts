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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, UserDataInfo, PaymentModeInfo, Prices, ShipmentStatus, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, Dimensions, Meta, TrackingList, UserDetailsData, PlatformDeliveryAddress, BagConfigs, BagStateMapper, CurrentStatus, Identifier, FinancialBreakup, OrderBrandName, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBagArticle, OrderBags, DPDetailsData, EinvoiceInfo, BuyerDetails, ShipmentTimeStamp, Formatted, DebugInfo, LockData, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, OrderingStoreDetails, InvoiceInfo, BagStatusHistory, ShipmentStatusData, ShipmentPayments, FulfillingStore, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, Dates, AffiliateBagDetails, Attributes, Item, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, Brand, BagGSTDetails, ArticleDetails, BagReturnableCancelableStatus, Weight, ReturnConfig, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, OrderUser, UserData, OrderInfo, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, TaxInfo, PaymentMethod, PaymentInfo, BillingInfo, LineItem, ProcessingDates, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, SeoDetail, CollectionImage, CollectionBadge, CollectionSchedule, UserInfo, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, VerifiedBy, Image, Trader, NetQuantityResponse, ProductPublish, ReturnConfigResponse, ProductSchemaV2, ProductListingResponseV2, TaxIdentifier, NetQuantity, ProductPublish1, TeaserTag, CustomOrder, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, CompanyMeta, BrandMeta, WeightResponse, DimensionResponse, PriceMeta, Trader1, QuantityBase, Quantities, ManufacturerResponse, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, CompanyMeta1, BrandMeta1, WeightResponse1, DimensionResponse1, PriceArticle, Trader2, ArticleStoreResponse, Quantity, QuantitiesArticle, ReturnConfig2, ManufacturerResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationIntegrationType, GetAddressSerializer, UserSerializer1, GetCompanySerializer, UserSerializer2, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, Ownership, CouponAuthor, Validation, CouponSchedule, CouponAction, State, CouponDateMeta, Validity, PriceRange, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, DisplayMetaDict, DisplayMeta, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAuthor, DisplayMeta1, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, Ownership1, PromotionAction, PromotionDateMeta, CompareObject, ItemCriteria, PromotionSchedule, Visibility, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, ProductPrice, ProductPriceInfo, ProductAvailability, PromoMeta, BaseInfo, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, Ownership2, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type UserDataInfo = {
    last_name?: string;
    uid?: number;
    name?: string;
    gender?: string;
    avis_user_id?: string;
    is_anonymous_user?: boolean;
    email?: string;
    mobile?: string;
    first_name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type Prices = {
    fynd_credits?: number;
    refund_credit?: number;
    amount_paid?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    cashback_applied?: number;
    delivery_charge?: number;
    cod_charges?: number;
    cashback?: number;
    value_of_good?: number;
    coupon_value?: number;
    amount_paid_roundoff?: number;
    transfer_price?: number;
    tax_collected_at_source?: number;
    price_marked?: number;
    price_effective?: number;
    discount?: number;
};
type ShipmentStatus = {
    title: string;
    status: string;
    hex_code: string;
    actual_status: string;
    ops_status: string;
};
type PlatformItem = {
    images?: string[];
    l1_category?: string[];
    department_id?: number;
    can_return?: boolean;
    size?: string;
    l3_category?: number;
    color?: string;
    name?: string;
    l3_category_name?: string;
    code?: string;
    image?: string[];
    can_cancel?: boolean;
    id?: number;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
    tax_collected_at_source: number;
};
type BagUnit = {
    status: any;
    bag_id: number;
    can_return?: boolean;
    ordering_channel: string;
    prices?: Prices;
    item?: PlatformItem;
    shipment_id: string;
    gst?: GSTDetailsData;
    item_quantity: number;
    total_shipment_bags: number;
    can_cancel?: boolean;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    user?: UserDataInfo;
    channel?: any;
    payment_methods?: any;
    fulfilling_centre: string;
    shipment_created_at: string;
    created_at: string;
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    total_bags_count: number;
    shipment_id?: string;
    sla?: any;
    application?: any;
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    id: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    order_date?: string;
    ordering_channel?: string;
    cod_charges?: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    order_value?: string;
    source?: string;
    tax_details?: any;
};
type Dimensions = {
    unit?: string;
    is_default?: boolean;
    length?: number;
    height?: number;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type TrackingList = {
    text: string;
    is_passed?: boolean;
    status: string;
    time?: string;
    is_current?: boolean;
};
type UserDetailsData = {
    city: string;
    state: string;
    address: string;
    pincode: string;
    name: string;
    email?: string;
    phone: string;
    country: string;
};
type PlatformDeliveryAddress = {
    address_category?: string;
    updated_at?: string;
    area?: string;
    address1?: string;
    contact_person?: string;
    created_at?: string;
    city?: string;
    state?: string;
    longitude?: number;
    latitude?: number;
    pincode?: string;
    landmark?: string;
    version?: string;
    address_type?: string;
    email?: string;
    phone?: string;
    address2?: string;
    country?: string;
};
type BagConfigs = {
    allow_force_return: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type BagStateMapper = {
    app_display_name?: string;
    bs_id: number;
    journey_type: string;
    display_name: string;
    app_facing?: boolean;
    app_state_name?: string;
    notify_customer?: boolean;
    name: string;
    is_active?: boolean;
    state_type: string;
};
type CurrentStatus = {
    updated_at?: string;
    current_status_id: number;
    status?: string;
    bag_id?: number;
    delivery_partner_id?: number;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    kafka_sync?: boolean;
    state_id?: number;
    delivery_awb_number?: string;
    store_id?: number;
    state_type?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    fynd_credits: number;
    coupon_effective_discount: number;
    brand_calculated_amount: number;
    added_to_fynd_cash: boolean;
    size: string;
    cod_charges: number;
    price_marked: number;
    promotion_effective_discount: number;
    gst_tax_percentage: number;
    amount_paid: number;
    cashback_applied: number;
    gst_fee: number;
    discount: number;
    refund_credit: number;
    identifiers: Identifier;
    cashback: number;
    value_of_good: number;
    coupon_value: number;
    tax_collected_at_source?: number;
    item_name: string;
    hsn_code: string;
    delivery_charge: number;
    gst_tag: string;
    amount_paid_roundoff?: number;
    total_units: number;
    transfer_price: number;
    price_effective: number;
};
type OrderBrandName = {
    logo: string;
    created_on: string;
    company: string;
    brand_name: string;
    modified_on?: string;
    id: number;
};
type BagGST = {
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    gst_fee?: number;
    gst_tag?: string;
    value_of_good?: number;
    gstin_code?: string;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
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
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRules[];
    promotion_name?: string;
    promo_id?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type OrderBags = {
    parent_promo_bags?: any;
    entity_type?: string;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    current_status?: CurrentStatus;
    item?: PlatformItem;
    financial_breakup?: FinancialBreakup;
    can_cancel?: boolean;
    brand?: OrderBrandName;
    display_name?: string;
    gst_details?: BagGST;
    quantity?: number;
    line_number?: number;
    applied_promos?: AppliedPromos[];
    bag_id: number;
    can_return?: boolean;
    seller_identifier?: string;
    article?: OrderBagArticle;
    prices?: Prices;
};
type DPDetailsData = {
    track_url?: string;
    eway_bill_id?: string;
    gst_tag?: string;
    pincode?: string;
    awb_no?: string;
    name?: string;
    country?: string;
    id?: number;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type BuyerDetails = {
    gstin: string;
    city: string;
    address: string;
    state: string;
    pincode: number;
    name: string;
    ajio_site_id?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
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
    einvoice_info?: EinvoiceInfo;
    dp_name?: string;
    b2b_buyer_details?: BuyerDetails;
    packaging_name?: string;
    assign_dp_from_sb?: boolean;
    weight: number;
    b2c_buyer_details?: any;
    timestamp?: ShipmentTimeStamp;
    return_awb_number?: string;
    box_type?: string;
    bag_weight?: any;
    return_store_node?: number;
    external?: any;
    forward_affiliate_shipment_id?: string;
    marketplace_store_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    formatted?: Formatted;
    debug_info?: DebugInfo;
    return_affiliate_order_id?: string;
    dp_sort_key?: string;
    order_type?: string;
    forward_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    shipment_volumetric_weight?: number;
    lock_data?: LockData;
    ewaybill_info?: any;
    same_store_available: boolean;
    shipment_weight?: number;
    return_details?: any;
    po_number?: string;
    due_date?: string;
    dp_id?: string;
    fulfilment_priority_text?: string;
    awb_number?: string;
    dp_options?: any;
    store_invoice_updated_date?: string;
};
type PDFLinks = {
    label_a4?: string;
    invoice_a4?: string;
    label_pos?: string;
    label?: string;
    delivery_challan_a4?: string;
    invoice_pos?: string;
    label_type: string;
    b2b?: string;
    po_invoice?: string;
    credit_note_url?: string;
    invoice?: string;
    label_a6?: string;
    invoice_a6?: string;
    invoice_type: string;
};
type AffiliateMeta = {
    due_date?: string;
    box_type?: string;
    size_level_total_qty?: number;
    is_priority?: boolean;
    loyalty_discount?: number;
    employee_discount?: number;
    order_item_id?: string;
    channel_shipment_id?: string;
    channel_order_id?: string;
    coupon_code?: string;
    quantity?: number;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    affiliate_order_id: string;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
};
type OrderingStoreDetails = {
    meta: any;
    contact_person: string;
    city: string;
    state: string;
    address: string;
    pincode: string;
    ordering_store_id: number;
    code: string;
    store_name: string;
    phone: string;
    country: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    invoice_url?: string;
    updated_date?: string;
    label_url?: string;
    credit_note_id?: string;
};
type BagStatusHistory = {
    updated_at?: string;
    status: string;
    bag_id?: number;
    app_display_name?: string;
    delivery_partner_id?: number;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    forward?: boolean;
    shipment_id?: string;
    kafka_sync?: boolean;
    bsh_id?: number;
    reasons?: any[];
    state_id?: number;
    delivery_awb_number?: string;
    store_id?: number;
    state_type?: string;
};
type ShipmentStatusData = {
    status?: string;
    created_at?: string;
    shipment_id?: string;
    bag_list?: string[];
    id?: number;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type FulfillingStore = {
    meta: any;
    contact_person: string;
    city: string;
    state: string;
    address: string;
    pincode: string;
    fulfillment_channel: string;
    code: string;
    store_name: string;
    phone: string;
    country: string;
    id: number;
};
type PlatformShipment = {
    order?: OrderDetailsData;
    meta?: Meta;
    tracking_list?: TrackingList[];
    forward_shipment_id?: string;
    delivery_details?: UserDetailsData;
    user_agent?: string;
    shipment_id: string;
    coupon?: any;
    bags?: OrderBags[];
    payment_mode?: string;
    dp_details?: DPDetailsData;
    invoice_id?: string;
    shipment_images?: string[];
    custom_meta?: any[];
    affiliate_details?: AffiliateDetails;
    billing_details?: UserDetailsData;
    lock_status?: boolean;
    ordering_store?: OrderingStoreDetails;
    total_items?: number;
    total_bags?: number;
    packaging_type?: string;
    picked_date?: string;
    gst_details?: GSTDetailsData;
    priority_text?: string;
    vertical?: string;
    enable_dp_tracking?: boolean;
    shipment_status?: string;
    shipment_quantity?: number;
    fulfilment_priority?: number;
    delivery_slot?: any;
    invoice?: InvoiceInfo;
    bag_status_history?: BagStatusHistory[];
    payment_methods?: any;
    status?: ShipmentStatusData;
    journey_type?: string;
    prices?: Prices;
    platform_logo?: string;
    operational_status?: string;
    payments?: ShipmentPayments;
    fulfilling_store?: FulfillingStore;
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type OrderMeta = {
    order_type?: string;
    currency_symbol?: string;
    payment_type?: string;
    ordering_store?: number;
    order_platform?: string;
    cart_id?: number;
    employee_id?: number;
    extra_meta?: any;
    customer_note?: string;
    comment?: string;
    mongo_cart_id?: number;
    files?: any[];
    staff?: any;
    order_tags?: any[];
    order_child_entities?: string[];
};
type OrderDict = {
    payment_methods?: any;
    meta?: OrderMeta;
    order_date: string;
    prices?: Prices;
    fynd_order_id: string;
    tax_details?: any;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    value?: string;
    actions?: any[];
    total_items?: number;
    index?: number;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    value: string;
    total_items?: number;
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
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    order_created_time?: string;
    user_info?: UserDataInfo;
    meta?: any;
    order_id?: string;
    total_order_value?: number;
    shipments?: PlatformShipment[];
    order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    success?: boolean;
    page?: Page;
    message?: string;
    items?: PlatformOrderItems[];
    total_count?: number;
    lane?: string;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    options?: Options[];
    text: string;
    value: number;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    account_name?: string;
    reason?: string;
    status?: string;
    raw_status?: string;
    meta?: any;
    last_location_recieved_at?: string;
    updated_time?: string;
    awb?: string;
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
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    status?: string;
    request_details?: any;
    display_name?: string;
    report_type?: string;
    s3_key?: string;
    report_id?: string;
    report_requested_at?: string;
    report_created_at?: string;
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
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    do_invoice_label_generated: boolean;
    batch_id: string;
    invoice_status?: string;
    store_name?: string;
    label?: any;
    data?: any;
    invoice?: any;
    company_id?: string;
    store_id?: string;
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
    content_type?: string;
    size?: number;
    upload?: FileUploadResponse;
    namespace?: string;
    cdn?: URL;
    file_name?: string;
    tags?: string[];
    operation?: string;
    file_path?: string;
    method?: string;
};
type bulkListingData = {
    user_id?: string;
    excel_url?: string;
    failed?: number;
    successful?: number;
    store_name?: string;
    company_id?: number;
    batch_id?: string;
    total?: number;
    uploaded_on?: string;
    processing?: number;
    store_id?: number;
    successful_shipments?: any[];
    failed_shipments?: any[];
    file_name?: string;
    status?: string;
    user_name?: string;
    processing_shipments?: string[];
    store_code?: string;
    id?: string;
};
type BulkListingPage = {
    type?: string;
    has_next?: boolean;
    size?: number;
    current?: number;
    has_previous?: boolean;
    total?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    page?: BulkListingPage;
    success?: boolean;
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
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    processing_shipments_count?: number;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    success?: string;
    user_id?: string;
    uploaded_on?: string;
    error?: string[];
    message?: string;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    item_base_price?: number;
    po_line_amount?: number;
    docker_number?: string;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type Attributes = {
    primary_color_hex?: string;
    primary_material?: string;
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    name?: string;
    gender?: string[];
    essential?: string;
    brand_name?: string;
};
type Item = {
    meta?: any;
    size: string;
    gender?: string;
    l2_category?: string[];
    l1_category?: string[];
    attributes: Attributes;
    branch_url?: string;
    color?: string;
    name: string;
    brand_id: number;
    last_updated_at?: string;
    can_cancel?: boolean;
    item_id: number;
    department_id?: number;
    brand: string;
    slug_key: string;
    l3_category_name?: string;
    image: string[];
    l1_category_id?: number;
    l2_category_id?: number;
    can_return?: boolean;
    l3_category?: number;
    webstore_product_url?: string;
    code?: string;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type Document = {
    value: string;
    verified: boolean;
    url?: string;
    legal_name: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    enabled: boolean;
    password?: string;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    gst_number?: string;
    stage: string;
    timing?: any[];
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
};
type StoreAddress = {
    contact_person: string;
    landmark?: string;
    email?: string;
    phone: string;
    area?: string;
    pincode: number;
    version?: string;
    address_type: string;
    address_category: string;
    updated_at: string;
    state: string;
    longitude: number;
    country_code: string;
    address1: string;
    created_at: string;
    city: string;
    latitude: number;
    address2?: string;
    country: string;
};
type Store = {
    packaging_material_count?: number;
    alohomora_user_id?: number;
    meta: StoreMeta;
    contact_person: string;
    login_username: string;
    vat_no?: string;
    fulfillment_channel: string;
    mall_area?: string;
    company_id: number;
    phone: number;
    store_address_json?: StoreAddress;
    s_id: string;
    is_archived?: boolean;
    pincode: string;
    name: string;
    brand_id?: any;
    is_active?: boolean;
    store_email: string;
    updated_at?: string;
    parent_store_id?: number;
    state: string;
    longitude: number;
    location_type: string;
    store_active_from?: string;
    address1: string;
    mall_name?: string;
    brand_store_tags?: string[];
    created_at: string;
    city: string;
    order_integration_id?: string;
    latitude: number;
    code?: string;
    is_enabled_for_recon?: boolean;
    address2?: string;
    country: string;
};
type Brand = {
    logo?: string;
    invoice_prefix?: string;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    start_date?: string;
    created_on?: number;
    brand_id: number;
    credit_note_expiry_days?: number;
    company: string;
    brand_name: string;
    modified_on?: number;
    pickup_location?: string;
    credit_note_allowed?: boolean;
};
type BagGSTDetails = {
    cgst_tax_percentage: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    gst_fee: number;
    sgst_gst_fee: string;
    gst_tag: string;
    value_of_good: number;
    gstin_code?: string;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    tax_collected_at_source: number;
    hsn_code_id: string;
    cgst_gst_fee: string;
    sgst_tax_percentage: number;
    hsn_code: string;
    is_default_hsn_code?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Article = {
    a_set?: any;
    dimensions?: Dimensions;
    raw_meta?: any;
    identifiers: Identifier;
    size: string;
    seller_identifier: string;
    child_details?: any;
    uid: string;
    weight?: Weight;
    _id: string;
    code?: string;
    is_set?: boolean;
    esp_modified?: any;
    return_config?: ReturnConfig;
};
type BagDetailsPlatformResponse = {
    meta?: BagMeta;
    original_bag_list?: number[];
    b_id: number;
    parent_promo_bags?: any;
    restore_promos?: any;
    entity_type?: string;
    shipment_id?: string;
    identifier?: string;
    current_status: BagStatusHistory;
    dates?: Dates;
    b_type?: string;
    affiliate_details?: AffiliateDetails;
    affiliate_bag_details: AffiliateBagDetails;
    item: Item;
    ordering_store?: Store;
    financial_breakup: FinancialBreakup[];
    no_of_bags_order?: number;
    bag_update_time?: number;
    restore_coupon?: boolean;
    brand: Brand;
    display_name?: string;
    gst_details: BagGSTDetails;
    article_details?: ArticleDetails;
    bag_status: BagStatusHistory[];
    quantity?: number;
    bag_status_history?: BagStatusHistory;
    line_number?: number;
    applied_promos?: any[];
    status: BagReturnableCancelableStatus;
    journey_type: string;
    seller_identifier?: string;
    article: Article;
    order_integration_id?: string;
    prices: Prices;
    operational_status?: string;
    tags?: string[];
    qc_required?: any;
    reasons?: any[];
    current_operational_status: BagStatusHistory;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    current: number;
    size: number;
    item_total: number;
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
    error?: string;
    message?: string;
    shipment_id?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    message: string;
    status: number;
};
type StoreReassign = {
    fynd_order_id?: string;
    store_id: number;
    bag_id?: number;
    item_id?: string;
    affiliate_bag_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    set_id?: string;
    affiliate_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
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
    entity_type: string;
    action: string;
    action_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    bag_id?: number;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    is_bag_locked?: boolean;
    shipment_id?: string;
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    status?: string;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    created_at?: string;
    id: number;
    description?: string;
    logo_url?: string;
    to_datetime?: string;
    platform_id?: string;
    platform_name?: string;
    title?: string;
    company_id?: number;
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
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    message?: string;
    status?: number;
    stack_trace?: string;
    meta?: any;
    identifier?: string;
    final_state?: any;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    unit_price: number;
    affiliate_meta: any;
    quantity: number;
    transfer_price: number;
    modified_on: string;
    avl_qty: number;
    price_effective: number;
    affiliate_store_id: string;
    amount_paid: number;
    pdf_links?: MarketPlacePdf;
    discount: number;
    store_id: number;
    delivery_charge: number;
    seller_identifier: string;
    item_size: string;
    identifier: any;
    item_id: number;
    sku: string;
    hsn_code_id: string;
    company_id: number;
    price_marked: number;
    fynd_store_id: string;
    _id: string;
};
type ArticleDetails1 = {
    dimension: any;
    weight: any;
    quantity: number;
    brand_id: number;
    _id: string;
    attributes: any;
    category: any;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    fulfillment_id: number;
    dp_id?: number;
    box_type?: string;
    meta?: any;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
};
type ShipmentConfig = {
    action: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    source: string;
    payment_mode: string;
    journey: string;
    identifier: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type OrderUser = {
    last_name: string;
    state: string;
    email: string;
    pincode: string;
    country: string;
    first_name: string;
    mobile: number;
    city: string;
    address2?: string;
    phone: number;
    address1?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderInfo = {
    bags: AffiliateBag[];
    coupon?: string;
    shipment?: ShipmentData;
    items: any;
    delivery_charges: number;
    order_priority?: OrderPriority;
    affiliate_order_id?: string;
    user: UserData;
    order_value: number;
    billing_address: OrderUser;
    shipping_address: OrderUser;
    payment?: any;
    discount: number;
    payment_mode: string;
    cod_charges: number;
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
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    id: string;
    description?: string;
    updated_at: string;
    owner: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
    secret: string;
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
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    article_lookup?: string;
    affiliate: Affiliate;
    bag_end_state?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
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
    description: string;
    display_text: string;
    slug: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    bag_id?: number;
    l1_detail?: string;
    l2_detail?: string;
    ticket_url?: string;
    type: string;
    user: string;
    l3_detail?: string;
    ticket_id?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryData = {
    message: string;
    user_name: string;
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
    phone_number: number;
    message: string;
    customer_name: string;
    shipment_id: number;
    brand_name: string;
    amount_paid: number;
    order_id: string;
    payment_mode: string;
    country_code: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
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
    remarks?: string;
    shipment_id?: string;
    id: number;
    status?: string;
    meta: Meta1;
    bag_list?: number[];
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
    shipment_ids?: string[];
    order_type: string;
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ShippingInfo = {
    state_code?: string;
    geo_location?: any;
    floor_no?: string;
    address_type?: string;
    address2?: string;
    last_name?: string;
    state: string;
    gender?: string;
    house_no?: string;
    slot?: any[];
    first_name: string;
    landmark?: string;
    address1: string;
    pincode: string;
    alternate_email?: string;
    customer_code?: string;
    primary_email: string;
    city: string;
    middle_name?: string;
    country_code?: string;
    primary_mobile_number: string;
    shipping_type?: string;
    external_customer_code?: string;
    country: string;
    title?: string;
    alternate_mobile_number?: string;
};
type Tax = {
    breakup?: any[];
    rate: number;
    name: string;
    amount: any;
};
type Charge = {
    tax?: Tax;
    amount: any;
    type: string;
    name: string;
    code?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    transaction_data?: any;
    amount: number;
    mode: string;
    name: string;
    meta?: any;
    collect_by: string;
    refund_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    state_code?: string;
    floor_no?: string;
    address2?: string;
    last_name?: string;
    state: string;
    gender?: string;
    house_no?: string;
    first_name: string;
    address1: string;
    pincode: string;
    alternate_email?: string;
    customer_code?: string;
    primary_email: string;
    city: string;
    middle_name?: string;
    country_code?: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    country: string;
    title?: string;
    alternate_mobile_number?: string;
};
type LineItem = {
    external_line_id?: string;
    charges?: Charge[];
    quantity?: number;
    meta?: any;
    seller_identifier: string;
    custom_messasge?: string;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type Shipment = {
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
    meta?: any;
    priority?: number;
    processing_dates?: ProcessingDates;
};
type CreateOrderAPI = {
    currency_info?: any;
    shipping_info: ShippingInfo;
    charges?: Charge[];
    tax_info?: TaxInfo;
    meta?: any;
    external_order_id?: string;
    external_creation_date?: string;
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    exception?: string;
    message: string;
    request_id?: string;
    status: number;
    stack_trace?: string;
    meta?: string;
    info?: any;
    code?: string;
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
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    lock_states?: string[];
    location_reassignment?: boolean;
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
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type GetSearchWordsData = {
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    uid?: string;
    result?: any;
    app_id?: string;
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
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    result: SearchKeywordResult;
    app_id?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    _custom_json?: any;
    uid?: string;
    results?: any[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    url?: string;
    query?: any;
    type?: string;
    params?: any;
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
    words?: string[];
    _custom_json?: any;
    results?: AutocompleteResult[];
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    app_id?: string;
    _custom_json?: any;
};
type ProductBundleItem = {
    max_quantity: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    product_uid: number;
    auto_select?: boolean;
};
type GetProductBundleCreateResponse = {
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
    created_by?: any;
    meta?: any;
    created_on?: string;
    name: string;
    id?: string;
    choice: string;
    same_store_assignment?: boolean;
    logo?: string;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
    created_by?: any;
    meta?: any;
    created_on?: string;
    name: string;
    choice: string;
    same_store_assignment?: boolean;
    logo?: string;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    modified_by?: any;
};
type LimitedProductData = {
    quantity?: number;
    item_code?: string;
    short_description?: string;
    uid?: number;
    name?: string;
    sizes?: string[];
    attributes?: any;
    images?: string[];
    slug?: string;
    identifier?: any;
    price?: any;
    country_of_origin?: string;
};
type Size = {
    is_available?: boolean;
    display?: string;
    value?: string;
    quantity?: number;
};
type Price = {
    currency?: string;
    max_effective?: number;
    min_effective?: number;
    min_marked?: number;
    max_marked?: number;
};
type GetProducts = {
    max_quantity?: number;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    price?: Price;
    product_uid?: number;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    is_active?: boolean;
    products?: GetProducts[];
    company_id?: number;
    meta?: any;
    name?: string;
    choice?: string;
    same_store_assignment?: boolean;
    logo?: string;
    slug?: string;
    page_visibility?: string[];
};
type ProductBundleUpdateRequest = {
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
    meta?: any;
    name: string;
    choice: string;
    same_store_assignment?: boolean;
    logo?: string;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    modified_by?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    guide?: Guide;
    company_id?: number;
    created_on?: string;
    name: string;
    title: string;
    id?: string;
    tag?: string;
    image?: string;
    subtitle?: string;
    modified_on?: string;
    description?: string;
    created_by?: any;
    modified_by?: any;
    brand_id?: number;
    active?: boolean;
};
type SizeGuideResponse = {
    guide?: any;
    company_id?: number;
    created_on?: string;
    name?: string;
    title?: string;
    id?: string;
    tag?: string;
    subtitle?: string;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    brand_id?: number;
    active?: boolean;
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
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
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
    total_count: number;
    next: number;
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
    is_active: boolean;
    unit?: string;
    name: string;
    priority: number;
    key?: string;
    logo?: string;
    display_type: string;
    slug?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    name?: string;
    is_default: boolean;
    priority: number;
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    slug: string;
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    name?: string;
    is_default: boolean;
    priority: number;
    default_key: string;
    key: string;
    logo?: string;
    app_id: string;
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
    compare?: any;
    variant?: any;
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
    is_active: boolean;
    title?: string;
    priority: number;
    key: string;
    logo?: string;
    size?: ProductSize;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    name: string;
    priority: number;
    key: string;
    logo?: string;
    display_type: string;
    size: ProductSize;
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
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    value?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    type: string;
    key: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    key: string;
    logo?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    created_by?: any;
    created_on?: string;
    id?: string;
    type?: string;
    product?: ConfigurationProduct;
    config_type: string;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    app_id: string;
    modified_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_by?: any;
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    config_type: string;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    app_id: string;
    modified_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersKey = {
    name: string;
    kind?: string;
    logo?: string;
    operators?: string[];
    display: string;
};
type ProductFiltersValue = {
    selected_max?: number;
    query_format?: string;
    display_format?: string;
    selected_min?: number;
    min?: number;
    is_selected: boolean;
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    count?: number;
    value: any;
    display: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
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
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
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
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    uid?: string;
    name?: string;
    type?: string;
    logo?: Media1;
    action?: Action;
    description?: string;
    app_id?: string;
    badge?: any;
    cron?: any;
    priority?: number;
    _schedule?: any;
    meta?: any;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionSchedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    duration?: number;
};
type UserInfo = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    allow_facets?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    name: string;
    type: string;
    is_visible?: boolean;
    logo: CollectionImage;
    description?: string;
    app_id: string;
    badge?: CollectionBadge;
    tags?: string[];
    priority?: number;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    meta?: any;
    slug: string;
    modified_by?: UserInfo;
    is_active?: boolean;
    published?: boolean;
    query?: CollectionQuery[];
    banners: CollectionBanner;
    allow_sort?: boolean;
    _locale_language?: any;
    visible_facets_keys?: string[];
    created_by?: UserInfo;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    name?: string;
    type?: string;
    logo?: BannerImage;
    description?: string;
    app_id?: string;
    badge?: any;
    cron?: any;
    priority?: number;
    sort_on?: string;
    _schedule?: any;
    meta?: any;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    allow_facets?: boolean;
    uid?: string;
    name?: string;
    type?: string;
    logo?: Media1;
    description?: string;
    app_id?: string;
    badge?: any;
    cron?: any;
    priority?: number;
    _schedule?: any;
    meta?: any;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    allow_facets?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    name?: string;
    is_visible?: boolean;
    type?: string;
    logo?: CollectionImage;
    description?: string;
    badge?: CollectionBadge;
    tags?: string[];
    priority?: number;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    meta?: any;
    slug?: string;
    modified_by?: UserInfo;
    is_active?: boolean;
    published?: boolean;
    query?: CollectionQuery[];
    banners?: CollectionBanner;
    allow_sort?: boolean;
    _locale_language?: any;
    visible_facets_keys?: string[];
};
type ProductBrand = {
    name?: string;
    logo?: Media1;
    action?: Action;
    uid?: number;
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
type Price1 = {
    min?: number;
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    sellable?: boolean;
    uid?: number;
    name?: string;
    image_nature?: string;
    type?: string;
    brand?: ProductBrand;
    highlights?: string[];
    description?: string;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    rating?: number;
    price?: ProductListingPrice;
    short_description?: string;
    color?: string;
    has_variant?: boolean;
    slug: string;
    rating_count?: number;
    tryouts?: string[];
    product_online_date?: string;
    promo_meta?: any;
    item_code?: string;
    medias?: Media1[];
    attributes?: any;
    similars?: string[];
    teaser_tag?: any;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
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
    available_articles?: number;
    total_articles?: number;
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    article_freshness?: number;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
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
    platform?: string;
    company_id?: number;
    brand_ids?: number[];
    store_ids?: number[];
    opt_level: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    platform: string;
    company_id: number;
    created_on: number;
    brand_ids: number[];
    store_ids: number[];
    modified_by?: any;
    modified_on: number;
    created_by?: any;
    opt_level: string;
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    name?: string;
    company_type?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
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
    company_id?: number;
    created_on?: string;
    uid?: number;
    name?: string;
    store_type?: string;
    store_code?: string;
    timing?: any;
    address?: any;
    manager?: any;
    display_name?: string;
    modified_on?: string;
    documents?: any[];
    additional_contacts?: any[];
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    allowed_values?: string[];
    mandatory?: boolean;
    type: string;
    range?: AttributeSchemaRange;
    format?: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type GenderDetail = {
    enabled_for_end_consumer?: boolean;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    name?: string;
    id?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    logo?: string;
    slug?: string;
    is_nested?: boolean;
    description?: string;
    departments?: string[];
};
type CategoriesResponse = {
    uid?: number;
    name?: string;
    template_slug?: string;
    slug_key?: string;
    slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    code?: string;
    meta?: any;
    message?: string;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    _id?: string;
    uid?: string;
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetDepartment = {
    is_active?: boolean;
    created_on?: string;
    uid?: number;
    name?: string;
    search?: string;
    priority_order?: number;
    item_type?: string;
    page_no?: number;
    logo?: string;
    slug?: string;
    synonyms?: string[];
    page_size?: number;
    modified_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    meta?: any;
    message?: string;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    is_active?: boolean;
    tags?: string[];
    _custom_json?: any;
    uid?: number;
    name: string;
    priority_order: number;
    logo: string;
    _cls?: string;
    synonyms?: string[];
    slug?: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    contact?: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    is_active?: boolean;
    _id?: any;
    created_on: string;
    uid: number;
    name: any;
    _custom_json?: any;
    priority_order: number;
    logo: string;
    verified_by?: UserDetail;
    slug: any;
    synonyms?: any[];
    verified_on?: string;
    _cls?: any;
    modified_on: string;
    created_by?: UserDetail;
    modified_by?: UserDetail;
};
type ProductTemplate = {
    is_active?: boolean;
    is_physical: boolean;
    modified_on?: string;
    is_expirable: boolean;
    created_on?: string;
    name?: string;
    categories?: string[];
    tag?: string;
    attributes?: string[];
    logo?: string;
    slug: string;
    is_archived?: boolean;
    description?: string;
    created_by?: any;
    modified_by?: any;
    departments?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    is_active?: boolean;
    is_physical: boolean;
    is_expirable: boolean;
    name?: string;
    id?: string;
    categories?: string[];
    tag?: string;
    attributes?: string[];
    logo?: string;
    slug: string;
    is_archived?: boolean;
    description?: string;
    departments?: string[];
};
type Properties = {
    currency?: any;
    name?: any;
    command?: any;
    highlights?: any;
    description?: any;
    multi_size?: any;
    tags?: any;
    size_guide?: any;
    item_type?: any;
    is_dependent?: any;
    no_of_boxes?: any;
    category_slug?: any;
    country_of_origin?: any;
    hsn_code?: any;
    short_description?: any;
    media?: any;
    sizes?: any;
    slug?: any;
    trader?: any;
    variants?: any;
    is_active?: any;
    item_code?: any;
    trader_type?: any;
    product_publish?: any;
    brand_uid?: any;
    teaser_tag?: any;
    return_config?: any;
    product_group_tag?: any;
    custom_order?: any;
};
type GlobalValidation = {
    title?: string;
    required?: string[];
    definitions?: any;
    type?: string;
    properties?: Properties;
    description?: string;
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type ProductTemplateExportResponse = {
    task_id: string;
    seller_id: number;
    type?: string;
    filters?: any;
    url?: string;
    status?: string;
    completed_on?: string;
    notification_emails?: string[];
    modified_on?: string;
    created_by?: UserInfo1;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    brands?: string[];
    from_date?: string;
    to_date?: string;
    catalogue_types: string[];
    templates: string[];
};
type ProductTemplateDownloadsExport = {
    notification_emails?: string[];
    type?: string;
    filters?: ProductTemplateExportFilterRequest;
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
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Category = {
    level: number;
    is_active: boolean;
    media?: Media2;
    created_by?: any;
    created_on?: string;
    uid?: number;
    name: string;
    modified_on?: string;
    id?: string;
    priority?: number;
    marketplaces?: CategoryMapping;
    slug?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    modified_by?: any;
    departments: number[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    level: number;
    is_active: boolean;
    media?: Media2;
    name: string;
    priority?: number;
    marketplaces?: CategoryMapping;
    slug?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    departments: number[];
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
type Logo = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ProductSchemaV2 = {
    currency?: string;
    category?: any;
    variant_media?: any;
    company_id?: number;
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    name?: string;
    image_nature?: string;
    id?: string;
    tax_identifier?: any;
    is_image_less_product?: boolean;
    template_tag?: string;
    brand?: Brand;
    verified_by?: VerifiedBy;
    highlights?: string[];
    all_identifiers?: string[];
    description?: string;
    multi_size?: boolean;
    all_company_ids?: number[];
    tags?: string[];
    size_guide?: string;
    item_type?: string;
    is_dependent?: boolean;
    no_of_boxes?: number;
    category_slug?: string;
    images?: Image[];
    country_of_origin?: string;
    all_sizes?: any[];
    moq?: any;
    is_physical?: boolean;
    hsn_code?: string;
    short_description?: string;
    media?: Media1[];
    color?: string;
    primary_color?: string;
    is_expirable?: boolean;
    stage?: string;
    sizes?: any[];
    pending?: string;
    l3_mapping?: string[];
    slug?: string;
    trader?: Trader[];
    modified_on?: string;
    is_set?: boolean;
    modified_by?: any;
    departments?: number[];
    variants?: any;
    category_uid?: number;
    is_active?: boolean;
    item_code?: string;
    created_by?: any;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    attributes?: any;
    brand_uid?: number;
    product_publish?: ProductPublish;
    teaser_tag?: any;
    verified_on?: string;
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    custom_order?: any;
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type ProductCreateUpdateSchemaV2 = {
    currency: string;
    company_id: number;
    variant_media?: any;
    _custom_json?: any;
    bulk_job_id?: string;
    uid?: number;
    name: string;
    tax_identifier: TaxIdentifier;
    is_image_less_product?: boolean;
    template_tag: string;
    highlights?: string[];
    action?: string;
    description?: string;
    multi_size?: boolean;
    tags?: string[];
    size_guide?: string;
    item_type: string;
    is_dependent?: boolean;
    no_of_boxes?: number;
    category_slug: string;
    country_of_origin: string;
    short_description?: string;
    media?: Media1[];
    sizes: any[];
    slug: string;
    trader: Trader[];
    is_set?: boolean;
    variants?: any;
    requester?: string;
    departments: number[];
    is_active?: boolean;
    item_code: string;
    variant_group?: any;
    return_config: ReturnConfig;
    net_quantity?: NetQuantity;
    attributes?: any;
    brand_uid: number;
    product_publish?: ProductPublish1;
    teaser_tag?: TeaserTag;
    change_request_id?: any;
    product_group_tag?: string[];
    custom_order?: CustomOrder;
};
type ProductVariants = {
    category_uid?: number;
    item_code?: string;
    media?: Media1[];
    uid?: number;
    name?: string;
    brand_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    unit?: string;
    created_on?: string;
    name?: string;
    filters: AttributeMasterFilter;
    logo?: string;
    is_nested?: boolean;
    synonyms?: any;
    description?: string;
    raw_key?: string;
    suggestion?: string;
    tags?: string[];
    slug: string;
    modified_on?: string;
    modified_by?: any;
    departments: string[];
    enabled_for_end_consumer?: boolean;
    details: AttributeMasterDetails;
    schema: AttributeMaster;
    created_by?: any;
    variant?: boolean;
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
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    item_height: number;
    item_width: number;
    size: any;
    item_weight: number;
    item_length: number;
    identifiers?: ValidateIdentifier[];
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
    currency?: string;
    category?: any;
    variant_media?: any;
    company_id?: number;
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    name?: string;
    image_nature?: string;
    id?: string;
    tax_identifier?: any;
    is_image_less_product?: boolean;
    template_tag?: string;
    brand?: Brand;
    verified_by?: VerifiedBy;
    highlights?: string[];
    all_identifiers?: string[];
    description?: string;
    multi_size?: boolean;
    all_company_ids?: number[];
    tags?: string[];
    size_guide?: string;
    item_type?: string;
    is_dependent?: boolean;
    no_of_boxes?: number;
    category_slug?: string;
    images?: Image[];
    country_of_origin?: string;
    all_sizes?: any[];
    moq?: any;
    is_physical?: boolean;
    hsn_code?: string;
    short_description?: string;
    media?: Media1[];
    color?: string;
    primary_color?: string;
    is_expirable?: boolean;
    stage?: string;
    sizes?: any[];
    pending?: string;
    l3_mapping?: string[];
    slug?: string;
    trader?: Trader[];
    modified_on?: string;
    is_set?: boolean;
    modified_by?: any;
    departments?: number[];
    variants?: any;
    category_uid?: number;
    is_active?: boolean;
    item_code?: string;
    created_by?: any;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    attributes?: any;
    brand_uid?: number;
    product_publish?: ProductPublished;
    teaser_tag?: any;
    verified_on?: string;
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    custom_order?: any;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    is_active?: boolean;
    company_id?: number;
    cancelled_records?: string[];
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    template?: ProductTemplate;
    total?: number;
    failed?: number;
    template_tag?: string;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    created_by?: UserDetail1;
    modified_by?: UserDetail1;
    cancelled?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    is_active?: boolean;
    company_id: number;
    cancelled_records?: any[];
    created_on: string;
    failed_records?: any[];
    stage?: string;
    custom_template_tag?: string;
    tracking_url?: string;
    total?: number;
    failed?: number;
    template_tag?: string;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    cancelled?: number;
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    batch_id: string;
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
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
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    is_active?: boolean;
    company_id?: number;
    cancelled_records?: string[];
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    id?: string;
    tracking_url?: string;
    total?: number;
    failed?: number;
    retry?: number;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    created_by?: UserCommon;
    modified_by?: UserCommon;
    cancelled?: number;
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
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    currency?: string;
    quantity?: number;
    uid?: string;
    item_id?: number;
    sellable_quantity?: number;
    price_effective?: number;
    price_transfer?: number;
    size?: string;
    seller_identifier?: string;
    price?: number;
    store?: any;
    identifiers?: any;
    inventory_updated_on?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    currency: string;
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    store_code: string;
    price_effective: number;
    expiration_date?: string;
    set?: InventorySet;
    item_height?: number;
    price_transfer?: number;
    size: any;
    item_width?: number;
    item_weight?: number;
    item_length?: number;
    price?: number;
    is_set?: boolean;
    identifiers: GTIN[];
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type CompanyMeta = {
    id: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type DimensionResponse = {
    unit: string;
    width: number;
    length: number;
    is_default: boolean;
    height: number;
};
type PriceMeta = {
    currency: string;
    marked: number;
    transfer: number;
    tp_notes?: any;
    effective: number;
    updated_at?: string;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type InventorySellerResponse = {
    _custom_json?: any;
    uid: string;
    tax_identifier?: any;
    company: CompanyMeta;
    brand: BrandMeta;
    raw_meta?: any;
    added_on_store?: string;
    tags?: string[];
    trace_id?: string;
    item_id: number;
    weight: WeightResponse;
    dimension: DimensionResponse;
    set?: InventorySet;
    size: string;
    price: PriceMeta;
    country_of_origin: string;
    fragile: boolean;
    fynd_item_code: string;
    meta?: any;
    fynd_meta?: any;
    stage?: string;
    track_inventory?: boolean;
    expiration_date?: string;
    total_quantity: number;
    trader?: Trader1[];
    store: StoreMeta;
    is_set?: boolean;
    modified_by?: UserSerializer;
    is_active?: boolean;
    quantities?: Quantities;
    fynd_article_code: string;
    seller_identifier: string;
    manufacturer: ManufacturerResponse;
    identifier: any;
    return_config?: ReturnConfig1;
    created_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type CompanyMeta1 = {
    id?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type DimensionResponse1 = {
    unit?: string;
    width?: number;
    length?: number;
    height?: number;
};
type PriceArticle = {
    currency?: string;
    marked?: number;
    transfer?: number;
    tp_notes?: any;
    effective?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    order_committed?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type GetInventories = {
    uid?: string;
    id?: string;
    tax_identifier?: any;
    company?: CompanyMeta1;
    brand?: BrandMeta1;
    date_meta?: DateMeta;
    platforms?: any;
    tags?: string[];
    trace_id?: string;
    item_id?: number;
    weight?: WeightResponse1;
    dimension?: DimensionResponse1;
    size?: string;
    price?: PriceArticle;
    country_of_origin?: string;
    inventory_updated_on?: string;
    stage?: string;
    track_inventory?: boolean;
    total_quantity?: number;
    trader?: Trader2[];
    store?: ArticleStoreResponse;
    is_set?: boolean;
    modified_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    return_config?: ReturnConfig2;
    seller_identifier?: string;
    manufacturer?: ManufacturerResponse1;
    identifier?: any;
    expiration_date?: string;
    created_by?: UserSerializer;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    is_active?: boolean;
    company_id?: number;
    cancelled_records?: string[];
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    id?: string;
    total?: number;
    failed?: number;
    file_path?: string;
    succeed?: number;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    cancelled?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price_marked?: number;
    currency?: string;
    quantity?: number;
    tags?: string[];
    item_dimensions_unit_of_measure?: string;
    price?: number;
    trace_id?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    total_quantity?: number;
    seller_identifier: string;
    expiration_date?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportQuantityFilter = {
    min?: number;
    max?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    store_ids?: number[];
    from_date?: string;
    to_date?: string;
};
type InventoryExportJob = {
    task_id: string;
    seller_id: number;
    type: string;
    filters?: InventoryExportAdvanceOption;
    url?: string;
    status?: string;
    completed_on?: string;
    notification_emails?: string[];
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    seller_id: number;
    created_on?: string;
    type?: string;
    filters?: any;
    status?: string;
    notification_emails?: string[];
    modified_on?: string;
    created_by?: string;
};
type InventoryJobFilters = {
    quantity?: InventoryExportQuantityFilter;
    brands?: string[];
    from_date?: string;
    to_date?: string;
    stores?: string[];
};
type InventoryJobDetailResponse = {
    task_id: string;
    seller_id: number;
    cancelled_by?: UserDetail;
    created_on?: string;
    id: string;
    cancelled_on?: string;
    type?: string;
    filters: InventoryJobFilters;
    url: string;
    status?: any;
    completed_on?: string;
    notification_emails?: string[];
    modified_on?: string;
    created_by?: UserDetail;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    store_ids: number[];
    from_date?: string;
    to_date?: string;
};
type InventoryCreateRequest = {
    type?: string;
    filters: InventoryExportFilter;
    data?: string[];
    notification_emails?: string[];
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
    price_marked?: number;
    tags?: string[];
    store_id: number;
    trace_id?: string;
    price_effective?: number;
    total_quantity?: number;
    seller_identifier: string;
    expiration_date?: string;
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
type HsnCodesObject = {
    hs2_code?: string;
    hsn_code?: string;
    company_id?: number;
    tax1?: number;
    id?: string;
    tax_on_esp?: boolean;
    tax_on_mrp?: boolean;
    modified_on?: string;
    tax2?: number;
    threshold1?: number;
    threshold2?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    hs2_code: string;
    hsn_code: string;
    company_id: number;
    is_active?: boolean;
    tax1: number;
    uid?: number;
    tax_on_esp?: boolean;
    tax_on_mrp: boolean;
    tax2?: number;
    threshold1: number;
    threshold2?: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    has_previous?: boolean;
    size?: number;
    current?: string;
    has_next?: boolean;
    item_total?: number;
};
type TaxSlab = {
    threshold: number;
    effective_date: string;
    rate: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    hsn_code_id?: string;
    hsn_code: string;
    created_on?: string;
    type: string;
    reporting_hsn: string;
    taxes: TaxSlab[];
    modified_on?: string;
    description: string;
    created_by?: any;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    uid?: number;
    name?: string;
    logo?: Media;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    departments?: string[];
    discount?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    name?: string;
    priority_order?: number;
    logo?: Media;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    uid?: number;
    name?: string;
    slug?: string;
    banners?: ImageUrls;
    action?: Action;
    childs?: any[];
};
type SecondLevelChild = {
    _custom_json?: any;
    uid?: number;
    name?: string;
    slug?: string;
    banners?: ImageUrls;
    action?: Action;
    childs?: ThirdLevelChild[];
};
type Child = {
    _custom_json?: any;
    uid?: number;
    name?: string;
    slug?: string;
    banners?: ImageUrls;
    action?: Action;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    uid?: number;
    name?: string;
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    childs?: Child[];
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
    page: Page;
};
type ProductDetail = {
    uid?: number;
    name?: string;
    image_nature?: string;
    type?: string;
    brand?: ProductBrand;
    highlights?: string[];
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    rating?: number;
    short_description?: string;
    color?: string;
    has_variant?: boolean;
    slug: string;
    rating_count?: number;
    tryouts?: string[];
    product_online_date?: string;
    promo_meta?: any;
    item_code?: string;
    medias?: Media1[];
    attributes?: any;
    similars?: string[];
    teaser_tag?: any;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    type: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleQuery = {
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    group_id?: string;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    articles: AssignStoreArticle[];
    company_id?: number;
    channel_type?: string;
    store_ids?: number[];
    pincode: string;
    channel_identifier?: string;
    app_id: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    price_marked?: number;
    quantity: number;
    company_id?: number;
    _id?: string;
    meta?: any;
    uid?: string;
    store_id?: number;
    store_pincode?: number;
    group_id?: string;
    s_city?: string;
    item_id: number;
    price_effective?: number;
    strategy_wise_listing?: any[];
    status: boolean;
    index?: number;
    size: string;
    article_assignment: ArticleAssignment1;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetAddressSerializer = {
    country_code?: string;
    latitude?: number;
    address_type?: string;
    address2?: string;
    country?: string;
    pincode?: number;
    landmark?: string;
    city?: string;
    state?: string;
    address1?: string;
    longitude?: number;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    created_on?: string;
    uid?: number;
    name?: string;
    stage?: string;
    reject_reason?: string;
    verified_by?: UserSerializer1;
    company_type?: string;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
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
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
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
type GetLocationSerializer = {
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    name: string;
    integration_type?: LocationIntegrationType;
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    verified_by?: UserSerializer2;
    notification_emails?: string[];
    phone_number: string;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    store_type?: string;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    modified_on?: string;
    modified_by?: UserSerializer2;
    code: string;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    verified_on?: string;
    created_by?: UserSerializer2;
    gst_credentials?: InvoiceDetailsSerializer;
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
    _custom_json?: any;
    uid: number;
    name?: string;
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
    business_details?: BusinessDetails;
    name?: string;
    business_info?: string;
    created_by?: UserSerializer;
    business_type: string;
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    documents?: Document[];
    warnings?: any;
    addresses?: GetAddressSerializer[];
    mode?: string;
    notification_emails?: string[];
    verified_on?: string;
    stage?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    modified_by?: UserSerializer;
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    company_type: string;
    uid: number;
    modified_on?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    state: string;
    address1: string;
    latitude: number;
    country: string;
    longitude: number;
    city: string;
    address2?: string;
    country_code?: string;
    address_type: string;
    landmark?: string;
};
type UpdateCompany = {
    business_details?: BusinessDetails;
    name?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    reject_reason?: string;
    business_type?: string;
    notification_emails?: string[];
    _custom_json?: any;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer1[];
    company_type?: string;
    documents?: Document[];
    warnings?: any;
    addresses?: CreateUpdateAddressSerializer[];
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
    uid?: number;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    name: string;
    created_by?: UserSerializer;
    reject_reason?: string;
    description?: string;
    created_on?: string;
    warnings?: any;
    mode?: string;
    _locale_language?: any;
    logo?: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    verified_on?: string;
    stage?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    slug_key?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    company_id?: number;
    description?: string;
    _locale_language?: any;
    logo: string;
    uid?: number;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    _custom_json?: any;
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
    name?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    modified_on?: string;
    market_channels?: string[];
    details?: CompanyDetails;
    business_type: string;
    notification_emails?: string[];
    _custom_json?: any;
    created_on?: string;
    verified_by?: UserSerializer;
    company_type: string;
    uid?: number;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    modified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer;
    company?: CompanySerializer;
    uid?: number;
    stage?: string;
    warnings?: any;
    verified_on?: string;
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
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    pincode?: number;
    address1?: string;
    state?: string;
    latitude: number;
    country?: string;
    longitude: number;
    city?: string;
    address2?: string;
    country_code?: string;
    address_type?: string;
    landmark?: string;
};
type LocationSerializer = {
    manager?: LocationManagerSerializer;
    name: string;
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    code: string;
    address: AddressSerializer;
    notification_emails?: string[];
    _custom_json?: any;
    warnings?: any;
    company: number;
    stage?: string;
    uid?: number;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    display_name: string;
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
