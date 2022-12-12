export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, ShipmentItemFulFillingStore, PaymentModeInfo, Prices, GSTDetailsData, PlatformItem, BagUnit, ShipmentStatus, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, TrackingList, DPDetailsData, PlatformDeliveryAddress, BagConfigs, OrderBagArticle, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBrandName, OrderBags, BagStateMapper, BagStatusHistory, OrderDetailsData, FulfillingStore, UserDetailsData, ShipmentPayments, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, Dimensions, Weight, ReturnConfig, Article, ArticleDetails, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, BagGSTDetails, BuyerDetails, Formatted, ShipmentTimeStamp, DebugInfo, LockData, EInvoice, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, AffiliateBagDetails, B2BPODetails, BagMeta, Attributes, Item, Brand, Dates, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, TaxInfo, Tax, Charge, PaymentMethod, PaymentInfo, LineItem, ProcessingDates, Shipment, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, UserInfo, CollectionBadge, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublished, Logo, Image, Product, ProductListingResponse, NetQuantity, CustomOrder, TaxIdentifier, ProductPublish, TeaserTag, Trader, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, QuantityBase, Quantities, WeightResponse, BrandMeta, DimensionResponse, PriceMeta, ManufacturerResponse, ReturnConfig1, CompanyMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, UserSerializer1, ProductReturnConfigSerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, LocationIntegrationType, UserSerializer2, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, ContactDetails, CompanyTaxesSerializer, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, RuleDefinition, Ownership, State, Validation, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PriceRange, BulkBundleRestriction, Restrictions, CouponAuthor, Validity, CouponAction, DisplayMetaDict, DisplayMeta, CouponDateMeta, CouponSchedule, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, PromotionDateMeta, Visibility, PromotionAction, DiscountOffer, DiscountRule, PromotionSchedule, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, PromotionAuthor, DisplayMeta1, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, DisplayBreakup, RawBreakup, CartBreakup, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CategoryInfo, ProductImage, ActionQuery, ProductAction, CartProduct, ProductPrice, ProductPriceInfo, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ProductAvailability, PromoMeta, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
}
/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */
/**
 * @typedef Locations
 * @property {Object[]} [items]
 */
/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */
/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */
/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */
/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */
/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} ticket
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */
/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef TicketCategory
 * @property {string} key
 * @property {string} display
 * @property {CustomForm} [form]
 * @property {TicketSubCategory[]} [sub_categories]
 * @property {TicketFeedbackForm} [feedback_form]
 */
/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 */
/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */
/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */
/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */
/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */
/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */
/**
 * @typedef CommunicationDetails
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {string} ticket_id
 * @property {TicketCategory} category
 * @property {TicketSubCategory} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */
/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */
/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */
/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */
/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */
/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */
/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */
/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */
/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 * @property {boolean} [is_deleted]
 */
/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */
/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */
/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */
/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */
/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */
/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 */
/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */
/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */
/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */
/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */
/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */
/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */
/**
 * @typedef Facebook
 * @property {string} [app_id]
 */
/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */
/**
 * @typedef Google
 * @property {string} [app_id]
 */
/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */
/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {RedirectionSchema[]} [redirections]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef RedirectionSchema
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */
/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */
/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */
/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */
/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef CommonError
 * @property {string} [message]
 */
/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */
/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */
/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */
/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */
/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */
/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */
/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */
/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */
/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef StatsImported
 * @property {number} [count]
 */
/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */
/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */
/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */
/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */
/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */
/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */
/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */
/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */
/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */
/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */
/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */
/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */
/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */
/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */
/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */
/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LogEmail
 * @property {string} [template]
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */
/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */
/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 */
/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 */
/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */
/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */
/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */
/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */
/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */
/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */
/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */
/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */
/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */
/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */
/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {string} app_id
 * @property {string[]} display_fields
 * @property {boolean} success
 * @property {Object[]} [aggregators]
 * @property {string[]} excluded_fields
 * @property {boolean} created
 */
/**
 * @typedef ErrorCodeDescription
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret
 * @property {string} merchant_salt
 * @property {string} key
 * @property {string} config_type
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */
/**
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 */
/**
 * @typedef PaymentModeList
 * @property {string} [card_name]
 * @property {number} [exp_month]
 * @property {string} [code]
 * @property {string[]} [intent_app_error_list]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [merchant_code]
 * @property {string} [card_fingerprint]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [nickname]
 * @property {number} [exp_year]
 * @property {number} [display_priority]
 * @property {string} [card_type]
 * @property {string} [fynd_vpa]
 * @property {string} [card_reference]
 * @property {boolean} [expired]
 * @property {boolean} [intent_flow]
 * @property {string} [display_name]
 * @property {string} aggregator_name
 * @property {string} [card_id]
 * @property {string} [card_number]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_brand]
 * @property {string} [card_isin]
 * @property {string} [card_token]
 * @property {string} [card_issuer]
 * @property {string} [card_brand_image]
 * @property {string} [name]
 * @property {number} [retry_count]
 * @property {number} [timeout]
 * @property {IntentApp[]} [intent_app]
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [is_pay_by_card_pl]
 * @property {PaymentModeLogo} [logo_url]
 * @property {boolean} [save_card]
 * @property {string} display_name
 * @property {boolean} [anonymous_enable]
 * @property {PaymentModeList[]} [list]
 * @property {number} display_priority
 * @property {string} [aggregator_name]
 * @property {string} [logo]
 * @property {string} name
 * @property {boolean} [add_card_enabled]
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */
/**
 * @typedef PayoutsResponse
 * @property {Object} unique_transfer_no
 * @property {boolean} is_default
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {Object} more_attributes
 * @property {string} transfer_type
 * @property {boolean} is_active
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} [branch_name]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [account_holder]
 * @property {string} ifsc_code
 * @property {string} account_type
 * @property {string} [bank_name]
 * @property {string} [account_no]
 * @property {string} [city]
 * @property {string} [state]
 */
/**
 * @typedef PayoutRequest
 * @property {PayoutBankDetails} bank_details
 * @property {string} aggregator
 * @property {Object} users
 * @property {string} unique_external_id
 * @property {string} transfer_type
 * @property {boolean} is_active
 */
/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {string} payment_status
 * @property {Object} bank_details
 * @property {string} aggregator
 * @property {boolean} success
 * @property {Object} users
 * @property {boolean} created
 * @property {Object} payouts
 * @property {string} transfer_type
 * @property {boolean} is_active
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {boolean} is_default
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {boolean} is_default
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {boolean} success
 * @property {Object} config
 * @property {string} aggregator
 */
/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */
/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */
/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {Object} [data]
 * @property {string} message
 */
/**
 * @typedef NotFoundResourceError
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef BankDetailsForOTP
 * @property {string} branch_name
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} account_no
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {boolean} [success]
 * @property {string} bank_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [comment]
 * @property {string} [mobile]
 * @property {string} bank_name
 * @property {string} subtitle
 * @property {string} created_on
 * @property {string} title
 * @property {string} address
 * @property {string} modified_on
 * @property {boolean} is_active
 * @property {string} [branch_name]
 * @property {string} transfer_mode
 * @property {string} account_holder
 * @property {number} id
 * @property {string} beneficiary_id
 * @property {string} ifsc_code
 * @property {string} display_name
 * @property {string} account_no
 * @property {string} email
 * @property {string} [delights_user_name]
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */
/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */
/**
 * @typedef Prices
 * @property {number} [discount]
 * @property {number} [coupon_value]
 * @property {number} [cod_charges]
 * @property {number} [cashback_applied]
 * @property {number} [fynd_credits]
 * @property {number} [promotion_effective_discount]
 * @property {number} [tax_collected_at_source]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback]
 * @property {number} [delivery_charge]
 * @property {number} [price_effective]
 * @property {number} [refund_amount]
 * @property {number} [amount_paid]
 * @property {number} [value_of_good]
 * @property {number} [price_marked]
 */
/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {string} gstin_code
 * @property {number} brand_calculated_amount
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 */
/**
 * @typedef PlatformItem
 * @property {boolean} [can_return]
 * @property {string} [size]
 * @property {string[]} [l1_category]
 * @property {string} [code]
 * @property {number} [l3_category]
 * @property {number} [department_id]
 * @property {string[]} [images]
 * @property {string[]} [image]
 * @property {string} [color]
 * @property {number} [id]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_cancel]
 * @property {string} [name]
 */
/**
 * @typedef BagUnit
 * @property {boolean} [can_return]
 * @property {Object} status
 * @property {GSTDetailsData} [gst]
 * @property {string} shipment_id
 * @property {number} total_shipment_bags
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 * @property {string} ordering_channel
 * @property {number} bag_id
 * @property {number} item_quantity
 * @property {boolean} [can_cancel]
 */
/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} title
 * @property {string} status
 * @property {string} ops_status
 * @property {string} actual_status
 */
/**
 * @typedef UserDataInfo
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [avis_user_id]
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef ShipmentItem
 * @property {string} fulfilling_centre
 * @property {Object} [channel]
 * @property {number} total_bags_count
 * @property {number} total_shipments_in_order
 * @property {string} created_at
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [application]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {number} shipment_created_at
 * @property {BagUnit[]} [bags]
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} id
 * @property {Object} [sla]
 */
/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} text
 * @property {string} [name]
 */
/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
 * @property {string} type
 * @property {string} text
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [page]
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 */
/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {number} [id]
 */
/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {string} status
 * @property {string} text
 * @property {string} [time]
 * @property {boolean} [is_current]
 */
/**
 * @typedef DPDetailsData
 * @property {string} [pincode]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [gst_tag]
 * @property {string} [track_url]
 * @property {string} [name]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {string} [pincode]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {string} [version]
 * @property {string} [contact_person]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {number} [longitude]
 * @property {string} [phone]
 * @property {string} [city]
 */
/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} enable_tracking
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
 * @property {string} [uid]
 */
/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gst_tag]
 * @property {number} [value_of_good]
 */
/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */
/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */
/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */
/**
 * @typedef AppliedPromos
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 */
/**
 * @typedef Identifier
 * @property {string} [ean]
 */
/**
 * @typedef FinancialBreakup
 * @property {string} gst_fee
 * @property {number} total_units
 * @property {Object} pm_price_split
 * @property {number} delivery_charge
 * @property {number} [tax_collected_at_source]
 * @property {number} brand_calculated_amount
 * @property {string} item_name
 * @property {number} cashback_applied
 * @property {number} refund_credit
 * @property {string} hsn_code
 * @property {number} price_effective
 * @property {Identifier} identifiers
 * @property {string} gst_tag
 * @property {number} coupon_value
 * @property {number} transfer_price
 * @property {number} fynd_credits
 * @property {number} [amount_paid_roundoff]
 * @property {number} amount_paid
 * @property {number} promotion_effective_discount
 * @property {number} gst_tax_percentage
 * @property {number} price_marked
 * @property {number} discount
 * @property {number} coupon_effective_discount
 * @property {string} size
 * @property {number} cod_charges
 * @property {number} cashback
 * @property {boolean} added_to_fynd_cash
 * @property {number} value_of_good
 */
/**
 * @typedef OrderBrandName
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {string} company
 * @property {string} logo
 * @property {number} id
 * @property {number} created_on
 */
/**
 * @typedef OrderBags
 * @property {boolean} [can_return]
 * @property {string} [display_name]
 * @property {string} [current_status]
 * @property {number} [quantity]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {number} bag_id
 * @property {BagConfigs} [bag_configs]
 * @property {string} [entity_type]
 * @property {OrderBagArticle} [article]
 * @property {string} [identifier]
 * @property {Object} [parent_promo_bags]
 * @property {boolean} [can_cancel]
 * @property {BagGST} [gst_details]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [seller_identifier]
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {number} [line_number]
 * @property {OrderBrandName} [brand]
 */
/**
 * @typedef BagStateMapper
 * @property {string} display_name
 * @property {boolean} [app_facing]
 * @property {number} bs_id
 * @property {boolean} [notify_customer]
 * @property {string} [app_state_name]
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {boolean} [is_active]
 * @property {string} journey_type
 * @property {string} name
 */
/**
 * @typedef BagStatusHistory
 * @property {string} created_at
 * @property {number} [delivery_partner_id]
 * @property {string} status
 * @property {boolean} [display_name]
 * @property {number} bag_id
 * @property {number} store_id
 * @property {string} shipment_id
 * @property {string} [updated_at]
 * @property {string} [state_type]
 * @property {boolean} [kafka_sync]
 * @property {BagStateMapper} bag_state_mapper
 * @property {boolean} [app_display_name]
 * @property {number} state_id
 * @property {string} [delivery_awb_number]
 * @property {boolean} [forward]
 * @property {number} bsh_id
 * @property {Object[]} [reasons]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [source]
 * @property {string} [order_date]
 * @property {Object} [ordering_channel_logo]
 * @property {string} fynd_order_id
 * @property {string} [cod_charges]
 * @property {string} [ordering_channel]
 * @property {string} [order_value]
 * @property {Object} [tax_details]
 * @property {string} [affiliate_id]
 */
/**
 * @typedef FulfillingStore
 * @property {Object} meta
 * @property {string} fulfillment_channel
 * @property {string} pincode
 * @property {string} contact_person
 * @property {string} address
 * @property {string} code
 * @property {string} state
 * @property {string} country
 * @property {string} id
 * @property {string} phone
 * @property {string} city
 * @property {string} store_name
 */
/**
 * @typedef UserDetailsData
 * @property {string} pincode
 * @property {string} address
 * @property {string} email
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 * @property {string} city
 * @property {string} name
 */
/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} mode
 * @property {string} [logo]
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {boolean} [can_return]
 * @property {Object} [delivery_slot]
 * @property {Object[]} delivery_status
 * @property {ShipmentStatusData} [status]
 * @property {Object} [user_info]
 * @property {string} [picked_date]
 * @property {string} [replacement_details]
 * @property {string} [kirana_store_id]
 * @property {string} affiliate_shipment_id
 * @property {TrackingList[]} [tracking_list]
 * @property {string} tracking_url
 * @property {number} status_progress
 * @property {Object} [bank_data]
 * @property {string} [priority_text]
 * @property {string} [shipment_status]
 * @property {boolean} is_fynd_coupon
 * @property {DPDetailsData} [dp_details]
 * @property {number} [total_bags]
 * @property {OrderBags[]} [bags]
 * @property {string} [pay_button]
 * @property {string} user_id
 * @property {string[]} [child_nodes]
 * @property {boolean} [enable_tracking]
 * @property {Object[]} [forward_order_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} is_not_fynd_source
 * @property {number} [total_items]
 * @property {number} [shipment_quantity]
 * @property {string} [enable_dp_tracking]
 * @property {string} [refund_text]
 * @property {boolean} [beneficiary_details]
 * @property {OrderDetailsData} [order]
 * @property {string} [operational_status]
 * @property {string} [mid]
 * @property {string} [vertical]
 * @property {Object} ordering_store
 * @property {boolean} [can_cancel]
 * @property {string} [packaging_type]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [coupon]
 * @property {string} [secured_delivery_flag]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {UserDetailsData} [billing_details]
 * @property {Object} order_status
 * @property {Object} [escalation]
 * @property {Object[]} [forward_shipment_status]
 * @property {Object[]} items
 * @property {string} order_type
 * @property {string} can_break
 * @property {Object} invoice
 * @property {string} [user_agent]
 * @property {Object[]} [custom_meta]
 * @property {Object} fyndstore_emp
 * @property {string} lock_status
 * @property {string} credit_note_id
 * @property {string[]} [shipment_images]
 * @property {boolean} is_packaging_order
 * @property {string} [is_fynd_store]
 * @property {string} [order_created_time]
 * @property {Object} current_shipment_status
 * @property {string} email_id
 * @property {boolean} is_invoiced
 * @property {string} [due_date]
 * @property {string} [is_pdsr]
 * @property {Object[]} [forward_tracking_list]
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {ShipmentPayments} [payments]
 * @property {Object} [refund_details]
 * @property {Object} company
 * @property {string} [payment_mode]
 * @property {boolean} [go_green]
 * @property {boolean} platform_logo
 * @property {string} [journey_type]
 * @property {UserDetailsData} [delivery_details]
 */
/**
 * @typedef PlatformShipment
 * @property {Object} [delivery_slot]
 * @property {ShipmentStatusData} [status]
 * @property {string} [picked_date]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [priority_text]
 * @property {string} [shipment_status]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [total_bags]
 * @property {OrderBags[]} [bags]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {number} [total_items]
 * @property {number} [shipment_quantity]
 * @property {string} [enable_dp_tracking]
 * @property {OrderDetailsData} [order]
 * @property {string} [operational_status]
 * @property {string} [vertical]
 * @property {string} [packaging_type]
 * @property {GSTDetailsData} [gst_details]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [user_agent]
 * @property {Object[]} [custom_meta]
 * @property {string[]} [shipment_images]
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {ShipmentPayments} [payments]
 * @property {string} [payment_mode]
 * @property {string} [platform_logo]
 * @property {string} [journey_type]
 * @property {UserDetailsData} [delivery_details]
 */
/**
 * @typedef OrderDict
 * @property {number} shipment_count
 * @property {string} order_date
 * @property {string} fynd_order_id
 */
/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {Object[]} [custom_meta]
 * @property {OrderDict} [order]
 * @property {boolean} success
 */
/**
 * @typedef SubLane
 * @property {number} [index]
 * @property {number} [total_items]
 * @property {string} [value]
 * @property {string} [text]
 * @property {Object[]} [actions]
 */
/**
 * @typedef SuperLane
 * @property {string} value
 * @property {SubLane[]} [options]
 * @property {number} [total_items]
 * @property {string} text
 */
/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [display]
 * @property {string} [name]
 */
/**
 * @typedef PlatformOrderItems
 * @property {PlatformChannel} [channel]
 * @property {Object} [meta]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {string} [payment_mode]
 * @property {number} [total_order_value]
 * @property {string} [order_id]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_created_time]
 */
/**
 * @typedef OrderListingResponse
 * @property {string} [lane]
 * @property {Page} [page]
 * @property {PlatformOrderItems[]} [items]
 * @property {number} [total_count]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */
/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {Options[]} [options]
 * @property {string} text
 * @property {string} key
 */
/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [reason]
 * @property {Object} [meta]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [raw_status]
 * @property {string} [awb]
 * @property {string} [updated_at]
 * @property {string} [last_location_recieved_at]
 * @property {string} [account_name]
 * @property {string} [updated_time]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */
/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */
/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OmsReports
 * @property {string} [report_name]
 * @property {string} [display_name]
 * @property {string} [status]
 * @property {Object} [request_details]
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {string} [report_type]
 * @property {string} [report_created_at]
 * @property {string} [s3_key]
 */
/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [item_id]
 * @property {string} [jio_code]
 */
/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */
/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */
/**
 * @typedef JioCodeUpsertResponse
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 * @property {boolean} [success]
 */
/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */
/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [store_id]
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [company_id]
 * @property {Object} [invoice]
 * @property {Object} [label]
 * @property {string} batch_id
 * @property {string} [store_code]
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_name]
 */
/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef FileResponse
 * @property {string} [file_name]
 * @property {string} [method]
 * @property {number} [size]
 * @property {string} [content_type]
 * @property {string} [operation]
 * @property {FileUploadResponse} [upload]
 * @property {string} [file_path]
 * @property {string} [namespace]
 * @property {string[]} [tags]
 * @property {URL} [cdn]
 */
/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 */
/**
 * @typedef bulkListingData
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [batch_id]
 * @property {string} [user_name]
 * @property {string} [user_id]
 * @property {string} [file_name]
 * @property {string} [uploaded_on]
 * @property {Object[]} [successful_shipments]
 * @property {number} [successful]
 * @property {number} [total]
 * @property {number} [store_id]
 * @property {string} [excel_url]
 * @property {string[]} [processing_shipments]
 * @property {number} [failed]
 * @property {string} [id]
 * @property {string} [store_code]
 * @property {Object[]} [failed_shipments]
 * @property {number} [processing]
 * @property {string} [store_name]
 */
/**
 * @typedef BulkListingResponse
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ManifestPage
 * @property {number} [total]
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {string} [size]
 * @property {boolean} [has_next]
 * @property {string} [type]
 */
/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
 */
/**
 * @typedef ManifestFilter
 * @property {string} [dp_name]
 * @property {string} [store_name]
 * @property {string} [lane]
 * @property {DateRange} [date_range]
 * @property {string} [stores]
 * @property {string} [sales_channels]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_ids]
 */
/**
 * @typedef GeneratedManifestItem
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {string} [created_by]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GeneratedManifestResponse
 * @property {ManifestPage} [page]
 * @property {GeneratedManifestItem[]} [items]
 */
/**
 * @typedef ManifestDetailItem
 * @property {string} [shipment_id]
 * @property {string} [awb]
 * @property {number} [item_qty]
 * @property {string} [order_id]
 * @property {string} [invoice_id]
 */
/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [total_price]
 * @property {number} [shipment_count]
 */
/**
 * @typedef ManifestDetailMeta
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 * @property {ManifestFilter} [filters]
 */
/**
 * @typedef ManifestDetail
 * @property {ManifestDetailMeta} [meta]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [manifest_id]
 * @property {ManifestFilter} [filters]
 * @property {number} [company_id]
 * @property {number} [id]
 * @property {number} [uid]
 * @property {string} [created_by]
 * @property {boolean} [is_active]
 * @property {number} [user_id]
 */
/**
 * @typedef ManifestDetailResponse
 * @property {ManifestPage} [page]
 * @property {ManifestDetailItem[]} [items]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetail[]} [manifest_details]
 */
/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {string[]} [qc_type]
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */
/**
 * @typedef BulkActionPayload
 * @property {string} url
 */
/**
 * @typedef BulkActionResponse
 * @property {boolean} [status]
 * @property {string} [message]
 */
/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [successful_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 * @property {number} [total_shipments_count]
 */
/**
 * @typedef BulkActionDetailsResponse
 * @property {string[]} [error]
 * @property {string} [uploaded_on]
 * @property {boolean} [status]
 * @property {string} [user_id]
 * @property {string} [uploaded_by]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [message]
 * @property {string} [success]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} enable_tracking
 */
/**
 * @typedef Dimensions
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 */
/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 */
/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */
/**
 * @typedef Article
 * @property {boolean} [is_set]
 * @property {Object} [raw_meta]
 * @property {Dimensions} [dimensions]
 * @property {Object} [a_set]
 * @property {string} size
 * @property {string} _id
 * @property {Weight} [weight]
 * @property {string} [code]
 * @property {ReturnConfig} [return_config]
 * @property {Object} [esp_modified]
 * @property {Object} [child_details]
 * @property {Identifier} identifiers
 * @property {string} uid
 * @property {string} seller_identifier
 */
/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */
/**
 * @typedef StoreAddress
 * @property {number} pincode
 * @property {string} [email]
 * @property {string} [version]
 * @property {string} state
 * @property {string} city
 * @property {string} phone
 * @property {number} latitude
 * @property {string} [area]
 * @property {string} [address2]
 * @property {string} address1
 * @property {number} longitude
 * @property {string} country_code
 * @property {string} [landmark]
 * @property {string} created_at
 * @property {string} country
 * @property {string} address_category
 * @property {string} address_type
 * @property {string} contact_person
 * @property {string} updated_at
 */
/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
 */
/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} verified
 * @property {string} legal_name
 * @property {string} ds_type
 */
/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */
/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */
/**
 * @typedef StoreEinvoice
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} enabled
 * @property {string} [user]
 */
/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */
/**
 * @typedef StoreMeta
 * @property {string} display_name
 * @property {Object[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {string} [gst_number]
 * @property {StoreDocuments} [documents]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object} [additional_contact_details]
 * @property {Object} [product_return_config]
 * @property {string} stage
 */
/**
 * @typedef Store
 * @property {string} pincode
 * @property {string} [mall_name]
 * @property {StoreAddress} [store_address_json]
 * @property {string} state
 * @property {number} company_id
 * @property {string} [store_active_from]
 * @property {string} city
 * @property {number} phone
 * @property {boolean} [is_active]
 * @property {string} [mall_area]
 * @property {number} latitude
 * @property {string} [address2]
 * @property {boolean} [is_archived]
 * @property {string} address1
 * @property {number} longitude
 * @property {string} [vat_no]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [order_integration_id]
 * @property {string} location_type
 * @property {string} created_at
 * @property {string} [code]
 * @property {string} country
 * @property {number} [alohomora_user_id]
 * @property {string} store_email
 * @property {number} [parent_store_id]
 * @property {Object} [brand_id]
 * @property {string} login_username
 * @property {string} s_id
 * @property {StoreMeta} meta
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {number} [packaging_material_count]
 * @property {string[]} [brand_store_tags]
 * @property {string} [updated_at]
 * @property {string} name
 */
/**
 * @typedef BagGSTDetails
 * @property {number} gst_fee
 * @property {string} [gstin_code]
 * @property {string} sgst_gst_fee
 * @property {number} cgst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {number} sgst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {string} cgst_gst_fee
 * @property {string} hsn_code
 * @property {number} brand_calculated_amount
 * @property {boolean} [is_default_hsn_code]
 * @property {number} gst_tax_percentage
 * @property {string} gst_tag
 * @property {number} value_of_good
 * @property {string} hsn_code_id
 * @property {string} igst_gst_fee
 */
/**
 * @typedef BuyerDetails
 * @property {string} gstin
 * @property {number} pincode
 * @property {string} address
 * @property {string} state
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {string} name
 */
/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */
/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 */
/**
 * @typedef EInvoice
 * @property {string} [irn]
 * @property {string} [acknowledge_date]
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 */
/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */
/**
 * @typedef ShipmentMeta
 * @property {number} [return_store_node]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [b2c_buyer_details]
 * @property {Object} [bag_weight]
 * @property {number} weight
 * @property {string} [dp_sort_key]
 * @property {string} [packaging_name]
 * @property {string} [dp_name]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [box_type]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [return_affiliate_order_id]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [awb_number]
 * @property {Object} [ewaybill_info]
 * @property {string} [marketplace_store_id]
 * @property {string} [return_awb_number]
 * @property {string} [po_number]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [order_type]
 * @property {number} [shipment_weight]
 * @property {Object} [return_details]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {boolean} same_store_available
 * @property {string} [due_date]
 * @property {Formatted} [formatted]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [dp_id]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [forward_affiliate_order_id]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [dp_options]
 * @property {LockData} [lock_data]
 * @property {Object} [external]
 * @property {EinvoiceInfo} [einvoice_info]
 */
/**
 * @typedef PDFLinks
 * @property {string} [credit_note_url]
 * @property {string} [b2b]
 * @property {string} label_type
 * @property {string} invoice_type
 * @property {string} [invoice_pos]
 * @property {string} [invoice]
 * @property {string} [label]
 * @property {string} [label_pos]
 * @property {string} [invoice_a6]
 * @property {string} [label_a4]
 * @property {string} [po_invoice]
 * @property {string} [invoice_a4]
 * @property {string} [label_a6]
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [channel_shipment_id]
 * @property {string} [channel_order_id]
 * @property {string} [box_type]
 * @property {boolean} [is_priority]
 * @property {string} [order_item_id]
 * @property {number} [quantity]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {string} [coupon_code]
 * @property {number} [employee_discount]
 * @property {string} [due_date]
 */
/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_order_id
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [ad_id]
 * @property {string} [affiliate_id]
 */
/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 */
/**
 * @typedef B2BPODetails
 * @property {number} [po_tax_amount]
 * @property {number} [item_base_price]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {string} [docker_number]
 */
/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */
/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 * @property {string[]} [gender]
 * @property {string} [essential]
 * @property {string} [name]
 */
/**
 * @typedef Item
 * @property {boolean} [can_return]
 * @property {string[]} [l2_category]
 * @property {number} [l3_category]
 * @property {string} [branch_url]
 * @property {number} item_id
 * @property {boolean} [can_cancel]
 * @property {string} [code]
 * @property {string[]} image
 * @property {Attributes} attributes
 * @property {string} [color]
 * @property {string} [webstore_product_url]
 * @property {number} brand_id
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {Object} [meta]
 * @property {string} slug_key
 * @property {string} size
 * @property {string[]} [l1_category]
 * @property {number} [department_id]
 * @property {number} [l1_category_id]
 * @property {number} [l2_category_id]
 * @property {string} brand
 * @property {string} [gender]
 * @property {string} name
 */
/**
 * @typedef Brand
 * @property {string} [start_date]
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [script_last_ran]
 * @property {string} [invoice_prefix]
 * @property {string} company
 * @property {number} brand_id
 * @property {string} [pickup_location]
 * @property {string} [logo]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [created_on]
 */
/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {boolean} [restore_coupon]
 * @property {string} [display_name]
 * @property {BagReturnableCancelableStatus} status
 * @property {BagStatusHistory} current_status
 * @property {number} [quantity]
 * @property {Object} [restore_promos]
 * @property {BagStatusHistory[]} bag_status
 * @property {string[]} [tags]
 * @property {Object[]} [reasons]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} b_id
 * @property {string} [entity_type]
 * @property {Article} article
 * @property {string} [identifier]
 * @property {ArticleDetails} [article_details]
 * @property {string} [operational_status]
 * @property {Object} [qc_required]
 * @property {Store} [ordering_store]
 * @property {string} [order_integration_id]
 * @property {number} [bag_update_time]
 * @property {Object} [parent_promo_bags]
 * @property {string} [b_type]
 * @property {BagGSTDetails} gst_details
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagStatusHistory} current_operational_status
 * @property {number[]} [original_bag_list]
 * @property {Object[]} [applied_promos]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {number} [no_of_bags_order]
 * @property {string} [seller_identifier]
 * @property {BagMeta} [meta]
 * @property {string} [shipment_id]
 * @property {Item} item
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Prices} prices
 * @property {number} [line_number]
 * @property {Brand} brand
 * @property {Dates} [dates]
 * @property {string} journey_type
 */
/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */
/**
 * @typedef Page1
 * @property {string} page_type
 * @property {number} current
 * @property {number} size
 * @property {boolean} has_next
 * @property {number} item_total
 */
/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */
/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */
/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [shipment_id]
 * @property {string} [error]
 */
/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */
/**
 * @typedef ErrorResponse1
 * @property {string} message
 * @property {number} status
 * @property {string} [error_trace]
 */
/**
 * @typedef StoreReassign
 * @property {number} store_id
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [mongo_article_id]
 * @property {string} [item_id]
 * @property {number[]} [reason_ids]
 * @property {string} [affiliate_id]
 * @property {number} [bag_id]
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 */
/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Entities
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [id]
 * @property {string} [affiliate_id]
 * @property {string} reason_text
 * @property {string} [affiliate_shipment_id]
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {string} action_type
 * @property {string} entity_type
 * @property {Entities[]} entities
 */
/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {boolean} [is_locked]
 * @property {number} [bag_id]
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */
/**
 * @typedef CheckResponse
 * @property {boolean} [is_bag_locked]
 * @property {boolean} [lock_status]
 * @property {Bags[]} [bags]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_id]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {string} [affiliate_shipment_id]
 */
/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 */
/**
 * @typedef AnnouncementResponse
 * @property {string} [platform_name]
 * @property {number} [company_id]
 * @property {string} [platform_id]
 * @property {string} [title]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [from_datetime]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {string} [logo_url]
 */
/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */
/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */
/**
 * @typedef Products
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters]
 * @property {Object} [data]
 */
/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */
/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */
/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */
/**
 * @typedef ShipmentsRequest
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 */
/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [force_transition]
 * @property {boolean} [lock_after_transition]
 */
/**
 * @typedef ShipmentsResponse
 * @property {string} [code]
 * @property {Object} [final_state]
 * @property {string} identifier
 * @property {string} [stack_trace]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [exception]
 */
/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */
/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */
/**
 * @typedef OrderUser
 * @property {string} country
 * @property {string} last_name
 * @property {string} city
 * @property {string} state
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} email
 * @property {number} phone
 * @property {number} mobile
 */
/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 * @property {string} [affiliate_priority_code]
 */
/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} attributes
 * @property {Object} category
 * @property {number} brand_id
 * @property {number} quantity
 * @property {Object} weight
 * @property {Object} dimension
 */
/**
 * @typedef ShipmentDetails
 * @property {number} [dp_id]
 * @property {number} fulfillment_id
 * @property {string} [box_type]
 * @property {ArticleDetails1[]} articles
 * @property {Object} [meta]
 * @property {number} shipments
 * @property {string} affiliate_shipment_id
 */
/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */
/**
 * @typedef ShipmentConfig
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 * @property {string} source
 * @property {string} to_pincode
 * @property {string} journey
 * @property {string} identifier
 * @property {string} payment_mode
 * @property {LocationDetails} [location_details]
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */
/**
 * @typedef AffiliateBag
 * @property {string} hsn_code_id
 * @property {string} affiliate_store_id
 * @property {number} store_id
 * @property {number} delivery_charge
 * @property {number} quantity
 * @property {number} price_effective
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} unit_price
 * @property {number} discount
 * @property {string} sku
 * @property {string} modified_on
 * @property {string} seller_identifier
 * @property {number} amount_paid
 * @property {number} item_id
 * @property {string} item_size
 * @property {number} company_id
 * @property {string} _id
 * @property {string} fynd_store_id
 * @property {number} avl_qty
 * @property {number} price_marked
 * @property {Object} identifier
 * @property {number} transfer_price
 * @property {Object} affiliate_meta
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef OrderInfo
 * @property {Object} [payment]
 * @property {Object} items
 * @property {number} order_value
 * @property {OrderUser} shipping_address
 * @property {string} [affiliate_order_id]
 * @property {OrderPriority} [order_priority]
 * @property {ShipmentData} [shipment]
 * @property {AffiliateBag[]} bags
 * @property {OrderUser} billing_address
 * @property {number} cod_charges
 * @property {number} discount
 * @property {string} payment_mode
 * @property {string} [coupon]
 * @property {number} delivery_charges
 * @property {UserData} user
 */
/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryOrderConfig} [order]
 */
/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} token
 * @property {string} name
 * @property {string} owner
 * @property {string} id
 * @property {string} secret
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} updated_at
 * @property {string} created_at
 */
/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */
/**
 * @typedef Affiliate
 * @property {string} token
 * @property {string} id
 * @property {AffiliateConfig} [config]
 */
/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */
/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [bag_end_state]
 */
/**
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
 */
/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */
/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {number} id
 * @property {string} slug
 * @property {string} display_text
 */
/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */
/**
 * @typedef HistoryDict
 * @property {string} [l3_detail]
 * @property {string} createdat
 * @property {string} [ticket_url]
 * @property {string} [l2_detail]
 * @property {string} [l1_detail]
 * @property {number} [bag_id]
 * @property {string} type
 * @property {string} message
 * @property {string} [ticket_id]
 * @property {string} user
 */
/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */
/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SmsDataPayload
 * @property {string} order_id
 * @property {number} phone_number
 * @property {number} amount_paid
 * @property {string} brand_name
 * @property {string} customer_name
 * @property {number} shipment_id
 * @property {string} payment_mode
 * @property {string} message
 * @property {string} country_code
 */
/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */
/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */
/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {number} id
 * @property {Meta} meta
 * @property {number[]} [bag_list]
 * @property {string} [status]
 * @property {string} [shipment_id]
 */
/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */
/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 */
/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */
/**
 * @typedef ManualAssignDPToShipment
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 * @property {number} dp_id
 * @property {string} qc_required
 */
/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */
/**
 * @typedef ShippingInfo
 * @property {string} primary_email
 * @property {string} state_code
 * @property {string} pincode
 * @property {Object} [geo_location]
 * @property {string} country
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {string} [gender]
 * @property {string} [address2]
 * @property {string} [customer_code]
 * @property {string} [house_no]
 * @property {string} first_name
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} [address_type]
 * @property {string} [last_name]
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} state
 * @property {string} address1
 * @property {string} [title]
 * @property {Object[]} [slot]
 * @property {string} [shipping_type]
 * @property {string} [middle_name]
 * @property {string} [alternate_email]
 * @property {string} primary_mobile_number
 */
/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */
/**
 * @typedef Tax
 * @property {Object} amount
 * @property {Object[]} breakup
 * @property {string} name
 * @property {boolean} tax_exempt
 */
/**
 * @typedef Charge
 * @property {string} [code]
 * @property {string} name
 * @property {Object} amount
 * @property {string} type
 * @property {Tax} tax
 */
/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {string} name
 * @property {string} mode
 * @property {string} refund_by
 * @property {number} amount
 * @property {Object} [transaction_data]
 * @property {Object} [meta]
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {Charge[]} charges
 * @property {string} [external_line_id]
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 */
/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [pack_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 */
/**
 * @typedef Shipment
 * @property {number} [external_shipment_id]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {LineItem[]} line_items
 * @property {ProcessingDates} [processing_dates]
 * @property {number} location_id
 */
/**
 * @typedef BillingInfo
 * @property {string} primary_email
 * @property {string} state_code
 * @property {string} pincode
 * @property {string} country
 * @property {string} country_code
 * @property {string} [gender]
 * @property {string} [address2]
 * @property {string} [customer_code]
 * @property {string} house_no
 * @property {string} first_name
 * @property {string} [alternate_mobile_number]
 * @property {string} floor_no
 * @property {string} [last_name]
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} state
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [middle_name]
 * @property {string} [alternate_email]
 * @property {string} primary_mobile_number
 */
/**
 * @typedef CreateOrderAPI
 * @property {string} [application_id]
 * @property {ShippingInfo} shipping_info
 * @property {TaxInfo} [tax_info]
 * @property {Charge[]} charges
 * @property {string} [external_creation_date]
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 * @property {Object} currency_info
 * @property {Object} [meta]
 * @property {Shipment[]} shipments
 * @property {BillingInfo} billing_info
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {string} [meta]
 * @property {string} [request_id]
 * @property {Object} [info]
 * @property {string} [stack_trace]
 * @property {string} message
 * @property {number} status
 * @property {string} [exception]
 */
/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */
/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */
/**
 * @typedef CreateChannelConfig
 * @property {string} [lock_states]
 * @property {string} [shipment_assignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {Object} [logo_url]
 */
/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */
/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 */
/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UploadConsent
 * @property {string} manifest_id
 * @property {string} consent_url
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {string} start_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} end_date
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */
/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef AutocompletePageAction
 * @property {string} [type]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {Object} [params]
 */
/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */
/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {Media} [logo]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */
/**
 * @typedef ProductBundleItem
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} max_quantity
 * @property {number} product_uid
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 */
/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [max_marked]
 */
/**
 * @typedef LimitedProductData
 * @property {string[]} [sizes]
 * @property {Object} [identifier]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {string} [country_of_origin]
 * @property {string} [item_code]
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {string[]} [images]
 * @property {string} [slug]
 * @property {Object} [attributes]
 */
/**
 * @typedef GetProducts
 * @property {number} [min_quantity]
 * @property {boolean} [allow_remove]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {boolean} [auto_add_to_cart]
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {number} [product_uid]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {Object} [meta]
 * @property {string} [choice]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {number} [company_id]
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {Object} [meta]
 * @property {string} choice
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} name
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {number} [company_id]
 * @property {Object} [modified_by]
 */
/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {string} [image]
 * @property {Guide} [guide]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {string} title
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [description]
 * @property {number} [brand_id]
 */
/**
 * @typedef SizeGuideResponse
 * @property {Object} [guide]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} [title]
 * @property {Object} [created_by]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {number} [brand_id]
 */
/**
 * @typedef MetaFields
 * @property {string} value
 * @property {string} key
 */
/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 */
/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */
/**
 * @typedef MOQ
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */
/**
 * @typedef ApplicationItemResponse
 * @property {Object} [alt_text]
 * @property {SEO} [seo]
 * @property {MOQ} [moq]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} data
 * @property {Object[]} [condition]
 */
/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {number} total_count
 * @property {number} next
 * @property {boolean} has_next
 */
/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} [key]
 * @property {string} [slug]
 * @property {string} name
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [unit]
 * @property {string} display_type
 * @property {number} priority
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} [logo]
 * @property {string[]} [template_slugs]
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {number} priority
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} default_key
 * @property {number} priority
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [similar]
 * @property {Object} [variant]
 * @property {Object} [detail]
 * @property {Object} [compare]
 */
/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string[]} [filter_types]
 * @property {Object[]} [units]
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} key
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {string} [display]
 * @property {number} [start]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object} [map]
 * @property {string} [sort]
 * @property {string} [condition]
 * @property {string} [value]
 * @property {Object[]} [map_values]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} key
 * @property {string} type
 * @property {string} [name]
 * @property {string} [logo]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {boolean} is_active
 * @property {string} [display_name]
 * @property {number} priority
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */
/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {string} [subtitle]
 * @property {ProductSize} [size]
 * @property {string} [title]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} key
 * @property {string} name
 * @property {ProductSize} size
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {number} priority
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} config_type
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef AppConfiguration
 * @property {string} config_type
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {ConfigurationListing} [listing]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} config_type
 * @property {string} [id]
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ProductFiltersValue
 * @property {number} [count]
 * @property {string} [display_format]
 * @property {number} [selected_min]
 * @property {string} [query_format]
 * @property {string} [currency_symbol]
 * @property {number} [selected_max]
 * @property {number} [min]
 * @property {Object} value
 * @property {string} display
 * @property {string} [currency_code]
 * @property {boolean} is_selected
 * @property {number} [max]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [logo]
 * @property {string} display
 * @property {string} [kind]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */
/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */
/**
 * @typedef Media1
 * @property {string} url
 * @property {Object} [meta]
 * @property {string} [type]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [meta]
 * @property {Object} [cron]
 * @property {string} [app_id]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {string} [uid]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {string} [description]
 * @property {string} [name]
 * @property {Media1} [logo]
 * @property {number} [priority]
 * @property {Object} [_schedule]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 */
/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef UserInfo
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */
/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef CollectionSchedule
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef CreateCollection
 * @property {string} [sort_on]
 * @property {Object} [_locale_language]
 * @property {Object} [meta]
 * @property {string} app_id
 * @property {CollectionBanner} banners
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_active]
 * @property {string} slug
 * @property {Object} [_custom_json]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} type
 * @property {boolean} [is_visible]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string} name
 * @property {SeoDetail} [seo]
 * @property {CollectionImage} logo
 * @property {number} [priority]
 * @property {CollectionSchedule} [_schedule]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {string} [sort_on]
 * @property {Object} [meta]
 * @property {Object} [cron]
 * @property {string} [app_id]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [name]
 * @property {BannerImage} [logo]
 * @property {number} [priority]
 * @property {Object} [_schedule]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_sort]
 * @property {string[]} [tag]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {string} [description]
 * @property {number} [priority]
 */
/**
 * @typedef UpdateCollection
 * @property {string} [sort_on]
 * @property {Object} [_locale_language]
 * @property {Object} [meta]
 * @property {CollectionBanner} [banners]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [type]
 * @property {boolean} [is_visible]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string} [name]
 * @property {SeoDetail} [seo]
 * @property {CollectionImage} [logo]
 * @property {number} [priority]
 * @property {CollectionSchedule} [_schedule]
 * @property {UserInfo} [modified_by]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */
/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 */
/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_code]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */
/**
 * @typedef ProductListingDetail
 * @property {string[]} [similars]
 * @property {string} [item_code]
 * @property {string} slug
 * @property {number} [rating]
 * @property {Object} [attributes]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [color]
 * @property {string} [discount]
 * @property {Object} [promo_meta]
 * @property {ProductBrand} [brand]
 * @property {string} [type]
 * @property {number} [rating_count]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [highlights]
 * @property {boolean} [sellable]
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {string[]} [tryouts]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */
/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 */
/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 * @property {string} [name]
 * @property {number} [available_sizes]
 * @property {number} [total_articles]
 * @property {number} [available_articles]
 */
/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */
/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef OptInPostRequest
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 */
/**
 * @typedef CompanyOptIn
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {string} opt_level
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {number[]} store_ids
 * @property {string} platform
 * @property {number[]} brand_ids
 * @property {Object} [modified_by]
 * @property {number} created_on
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [business_type]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 * @property {number} [total_article]
 * @property {number} [company_id]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */
/**
 * @typedef StoreDetail
 * @property {Object} [address]
 * @property {Object[]} [additional_contacts]
 * @property {string} [store_type]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 * @property {string} [name]
 * @property {Object[]} [documents]
 * @property {number} [uid]
 * @property {string} [display_name]
 * @property {string} [store_code]
 * @property {number} [company_id]
 * @property {string} [created_on]
 */
/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */
/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 * @property {number} [priority]
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 */
/**
 * @typedef GenderDetail
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterFilter} [filters]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {string} [logo]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 * @property {string} [id]
 * @property {string} [description]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PTErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [message]
 */
/**
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [_id]
 * @property {string} [contact]
 */
/**
 * @typedef GetDepartment
 * @property {string[]} [synonyms]
 * @property {number} [page_no]
 * @property {string} [slug]
 * @property {string} [search]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [modified_on]
 * @property {number} [priority_order]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {UserSerializer} [created_by]
 * @property {number} [page_size]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 */
/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [message]
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {string[]} [synonyms]
 * @property {Object} [platforms]
 * @property {string} [_cls]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {string} name
 * @property {number} priority_order
 * @property {string} logo
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UserDetail
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} user_id
 * @property {string} username
 */
/**
 * @typedef DepartmentModel
 * @property {Object[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {string} modified_on
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {Object} name
 * @property {Object} [_cls]
 * @property {number} priority_order
 * @property {UserDetail} [created_by]
 * @property {string} [verified_on]
 * @property {string} logo
 * @property {Object} [slug]
 * @property {string} created_on
 * @property {Object} [_id]
 * @property {UserDetail} [modified_by]
 * @property {UserDetail} [verified_by]
 */
/**
 * @typedef ProductTemplate
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {boolean} is_physical
 * @property {boolean} is_expirable
 * @property {boolean} [is_archived]
 * @property {string} [tag]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [description]
 * @property {string[]} [attributes]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Properties
 * @property {Object} [item_code]
 * @property {Object} [command]
 * @property {Object} [slug]
 * @property {Object} [is_active]
 * @property {Object} [custom_order]
 * @property {Object} [short_description]
 * @property {Object} [variants]
 * @property {Object} [media]
 * @property {Object} [tags]
 * @property {Object} [product_publish]
 * @property {Object} [product_group_tag]
 * @property {Object} [multi_size]
 * @property {Object} [hsn_code]
 * @property {Object} [item_type]
 * @property {Object} [trader_type]
 * @property {Object} [size_guide]
 * @property {Object} [highlights]
 * @property {Object} [category_slug]
 * @property {Object} [description]
 * @property {Object} [no_of_boxes]
 * @property {Object} [return_config]
 * @property {Object} [teaser_tag]
 * @property {Object} [sizes]
 * @property {Object} [name]
 * @property {Object} [country_of_origin]
 * @property {Object} [trader]
 * @property {Object} [currency]
 * @property {Object} [is_dependent]
 * @property {Object} [brand_uid]
 */
/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string} [type]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef TemplateDetails
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string[]} [departments]
 * @property {boolean} is_physical
 * @property {boolean} is_expirable
 * @property {boolean} [is_archived]
 * @property {string} [tag]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {string} slug
 * @property {string} [id]
 * @property {string} [description]
 * @property {string[]} [attributes]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */
/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {number} [seller_id]
 * @property {string} [url]
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [id]
 * @property {Object} [template_tags]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */
/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 */
/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} logo
 * @property {string} portrait
 */
/**
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} l2
 * @property {number} department
 */
/**
 * @typedef Category
 * @property {string[]} [synonyms]
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {number[]} departments
 * @property {string} name
 * @property {Media2} [media]
 * @property {Object} [created_by]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {number} [priority]
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CategoryRequestBody
 * @property {string[]} [synonyms]
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {string} name
 * @property {number[]} departments
 * @property {Media2} [media]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} [priority]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Logo
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef Product
 * @property {string} [primary_color]
 * @property {number[]} [departments]
 * @property {string} [item_code]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [id]
 * @property {Object} [custom_order]
 * @property {Object[]} [all_sizes]
 * @property {Object} [tax_identifier]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {string} [short_description]
 * @property {string} [template_tag]
 * @property {Object} [variants]
 * @property {string} [color]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [multi_size]
 * @property {string} [hsn_code]
 * @property {Brand} [brand]
 * @property {boolean} [is_set]
 * @property {boolean} [is_physical]
 * @property {string} [item_type]
 * @property {string} [size_guide]
 * @property {string[]} [highlights]
 * @property {string} [category_slug]
 * @property {string} [description]
 * @property {Object[]} [sizes]
 * @property {string} [name]
 * @property {string} [country_of_origin]
 * @property {string} [image_nature]
 * @property {boolean} [is_expirable]
 * @property {string} [currency]
 * @property {boolean} [is_dependent]
 * @property {Image[]} [images]
 * @property {number} [category_uid]
 * @property {string[]} [l3_mapping]
 * @property {number} [brand_uid]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */
/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef ProductCreateUpdate
 * @property {string} [requester]
 * @property {number[]} departments
 * @property {Object} item_code
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {NetQuantity} [net_quantity]
 * @property {CustomOrder} [custom_order]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [bulk_job_id]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} template_tag
 * @property {Object} [variants]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_set]
 * @property {string} item_type
 * @property {string} [action]
 * @property {string} [size_guide]
 * @property {string[]} [highlights]
 * @property {string} category_slug
 * @property {string} [description]
 * @property {number} [no_of_boxes]
 * @property {Object} [variant_media]
 * @property {TeaserTag} [teaser_tag]
 * @property {ReturnConfig} return_config
 * @property {Object} [change_request_id]
 * @property {string} name
 * @property {string} country_of_origin
 * @property {Trader[]} trader
 * @property {string} currency
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_dependent]
 * @property {number} brand_uid
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} filters
 * @property {AttributeMasterDetails} details
 * @property {string[]} departments
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {Object} [synonyms]
 * @property {string} [modified_on]
 * @property {string[]} [tags]
 * @property {string} [suggestion]
 * @property {boolean} [is_nested]
 * @property {string} [raw_key]
 * @property {AttributeMaster} schema
 * @property {string} [created_on]
 * @property {string} [unit]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [variant]
 * @property {string} [logo]
 * @property {Object} [modified_by]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [full_name]
 * @property {string} [username]
 */
/**
 * @typedef ProductBulkRequest
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string[]} [failed_records]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserDetail1} [created_by]
 * @property {UserDetail1} [modified_by]
 * @property {ProductTemplate} [template]
 * @property {string} [stage]
 * @property {number} [succeed]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */
/**
 * @typedef UserInfo1
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {number} total
 * @property {Object[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {string} [custom_template_tag]
 * @property {string} [file_path]
 * @property {UserInfo1} [created_by]
 * @property {number} company_id
 * @property {number} [failed]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {Object[]} [failed_records]
 * @property {UserInfo1} [modified_by]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 */
/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {string} template_tag
 * @property {string} batch_id
 * @property {number} company_id
 */
/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */
/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef Items
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {UserCommon} [created_by]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string[]} [cancelled_records]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {UserCommon} [modified_by]
 * @property {number} [retry]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {Object} user
 * @property {number} [company_id]
 */
/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {number} [company_id]
 */
/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef InventoryResponse
 * @property {number} [item_id]
 * @property {number} [price_effective]
 * @property {string} [uid]
 * @property {string} [inventory_updated_on]
 * @property {string} [size]
 * @property {number} [price]
 * @property {string} [currency]
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {Object} [identifiers]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {number} [sellable_quantity]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef InventorySet
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {string} gtin_value
 */
/**
 * @typedef InvSize
 * @property {number} [item_width]
 * @property {number} price_effective
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {string} size
 * @property {number} [price]
 * @property {string} [item_weight_unit_of_measure]
 * @property {InventorySet} [set]
 * @property {string} [expiration_date]
 * @property {GTIN[]} identifiers
 * @property {number} quantity
 * @property {string} currency
 * @property {string} store_code
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_weight]
 * @property {number} [price_transfer]
 * @property {number} [item_height]
 */
/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 */
/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 * @property {number} company_id
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 */
/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */
/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */
/**
 * @typedef DimensionResponse
 * @property {boolean} is_default
 * @property {number} height
 * @property {string} unit
 * @property {number} width
 * @property {number} length
 */
/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {string} [updated_at]
 * @property {number} transfer
 * @property {number} marked
 * @property {Object} [tp_notes]
 * @property {number} effective
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {string} name
 * @property {boolean} is_default
 */
/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef InventorySellerResponse
 * @property {Object} [fynd_meta]
 * @property {Object} [meta]
 * @property {boolean} [track_inventory]
 * @property {string} size
 * @property {UserSerializer} [created_by]
 * @property {boolean} [is_active]
 * @property {Quantities} [quantities]
 * @property {Object} [_custom_json]
 * @property {WeightResponse} weight
 * @property {number} item_id
 * @property {Object} identifier
 * @property {Object} [tax_identifier]
 * @property {number} total_quantity
 * @property {Object} [raw_meta]
 * @property {string} uid
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {string} fynd_article_code
 * @property {boolean} fragile
 * @property {BrandMeta} brand
 * @property {DimensionResponse} dimension
 * @property {boolean} [is_set]
 * @property {PriceMeta} price
 * @property {StoreMeta} store
 * @property {ManufacturerResponse} manufacturer
 * @property {string} [expiration_date]
 * @property {ReturnConfig1} [return_config]
 * @property {CompanyMeta} company
 * @property {string} country_of_origin
 * @property {Trader1[]} [trader]
 * @property {InventorySet} [set]
 * @property {string} [added_on_store]
 * @property {UserSerializer} [modified_by]
 * @property {string} [stage]
 * @property {string} fynd_item_code
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {string} [file_path]
 * @property {Object} [created_by]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [stage]
 * @property {number} [succeed]
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventoryJobPayload
 * @property {number} [total_quantity]
 * @property {number} [price_effective]
 * @property {number} [price]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {string} [currency]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {string} store_code
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [expiration_date]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {number} company_id
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {number} seller_id
 * @property {string} [url]
 * @property {string} task_id
 * @property {Object} [request_params]
 */
/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */
/**
 * @typedef InventoryExportResponse
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {number} seller_id
 * @property {string} task_id
 * @property {Object} [request_params]
 */
/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */
/**
 * @typedef InventoryPayload
 * @property {number} [total_quantity]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {string[]} [tags]
 * @property {string} [expiration_date]
 * @property {number} store_id
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 * @property {number} company_id
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */
/**
 * @typedef HsnCodesObject
 * @property {number} [tax1]
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_mrp]
 * @property {boolean} [tax_on_esp]
 * @property {string} [modified_on]
 * @property {number} [threshold1]
 * @property {number} [threshold2]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {number} [tax2]
 * @property {string} [hs2_code]
 */
/**
 * @typedef PageResponse
 * @property {number} [item_total]
 * @property {string} [current]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef HsnUpsert
 * @property {number} tax1
 * @property {string} hsn_code
 * @property {boolean} tax_on_mrp
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [is_active]
 * @property {number} threshold1
 * @property {number} [threshold2]
 * @property {number} [uid]
 * @property {number} company_id
 * @property {number} [tax2]
 * @property {string} hs2_code
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TaxSlab
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} [cess]
 * @property {number} threshold
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} reporting_hsn
 * @property {string} hsn_code
 * @property {string} type
 * @property {string} [modified_on]
 * @property {string} country_code
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} description
 * @property {TaxSlab[]} taxes
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BrandItem
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {ImageUrls} [banners]
 * @property {string} [discount]
 * @property {Media} [logo]
 * @property {string} [slug]
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef Department
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {Media} [logo]
 * @property {string} [slug]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SecondLevelChild
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef Child
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef CategoryItems
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 */
/**
 * @typedef ProductDetail
 * @property {string[]} [similars]
 * @property {string} [item_code]
 * @property {string} slug
 * @property {number} [rating]
 * @property {Object} [attributes]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [uid]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [color]
 * @property {Object} [promo_meta]
 * @property {ProductBrand} [brand]
 * @property {string} [type]
 * @property {number} [rating_count]
 * @property {string} [item_type]
 * @property {string[]} [highlights]
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {string[]} [tryouts]
 * @property {string} [product_online_date]
 * @property {Media1[]} [medias]
 */
/**
 * @typedef InventoryPage
 * @property {number} item_total
 * @property {string} type
 * @property {string} [next_id]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */
/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {boolean} [enabled]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */
/**
 * @typedef GetAddressSerializer
 * @property {number} [latitude]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {number} [longitude]
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [state]
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef GetCompanySerializer
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [verified_on]
 * @property {string} [business_type]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [stage]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer2} [verified_by]
 */
/**
 * @typedef GetLocationSerializer
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} code
 * @property {Object} [warnings]
 * @property {UserSerializer1} [created_by]
 * @property {string} [verified_on]
 * @property {string} display_name
 * @property {Object} [_custom_json]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer1} [verified_by]
 * @property {string[]} [notification_emails]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [modified_on]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {Document[]} [documents]
 * @property {string} phone_number
 * @property {string} [store_type]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [created_on]
 * @property {GetAddressSerializer} address
 * @property {LocationIntegrationType} [integration_type]
 * @property {GetCompanySerializer} [company]
 * @property {string} name
 * @property {UserSerializer1} [modified_by]
 * @property {string} [stage]
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [created_by]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {string} [stage]
 * @property {UserSerializer} [modified_by]
 * @property {boolean} [franchise_enabled]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {BusinessDetails} [business_details]
 * @property {string} business_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [business_info]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} city
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} [landmark]
 * @property {string} country
 * @property {string} address1
 * @property {string} address_type
 * @property {string} state
 * @property {number} pincode
 */
/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {string} [business_info]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 * @property {string} [stage]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} [description]
 * @property {UserSerializer} [created_by]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Object} [_locale_language]
 * @property {string} [stage]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} name
 * @property {string} [created_on]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {number} [company_id]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {Object} [_locale_language]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [verified_by]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string} business_type
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {CompanyDetails} [details]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [stage]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [verified_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {CompanySerializer} [company]
 * @property {string} [stage]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number[]} brands
 * @property {number} [uid]
 */
/**
 * @typedef LocationSerializer
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} code
 * @property {string} [store_type]
 * @property {Object} [warnings]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {number} [uid]
 * @property {number} company
 * @property {GetAddressSerializer} address
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */
/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */
/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */
/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */
/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */
/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 * @property {GStore[]} [gstores]
 */
/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */
/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */
/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */
/**
 * @typedef StoreData
 * @property {string} [location_id]
 */
/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */
/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */
/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */
/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */
/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef JobConfigDTO
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */
/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */
/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */
/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */
/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */
/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */
/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */
/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */
/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */
/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */
/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */
/**
 * @typedef JobConfigRawDTO
 * @property {string} integration
 * @property {string} company_name
 * @property {number} company_id
 * @property {JobConfig} [data]
 */
/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */
/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */
/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */
/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */
/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {Object} [mapping]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */
/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */
/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */
/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */
/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */
/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */
/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */
/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */
/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */
/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */
/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */
/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */
/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */
/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 * @property {boolean} [empty_cart]
 */
/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */
/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */
/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [jiopplink]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */
/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */
/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */
/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */
/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef DomainAdd
 * @property {string} [name]
 */
/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */
/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */
/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */
/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */
/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */
/**
 * @typedef AppDomain
 * @property {string} [name]
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */
/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */
/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */
/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */
/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */
/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */
/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */
/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */
/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */
/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */
/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */
/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */
/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */
/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */
/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */
/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */
/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */
/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */
/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */
/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */
/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */
/**
 * @typedef RuleDefinition
 * @property {string} type
 * @property {boolean} [is_exact]
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {string} applicable_on
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 * @property {string} [currency_code]
 */
/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 */
/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */
/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 */
/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef Restrictions
 * @property {PostOrder} [post_order]
 * @property {UsesRestriction} [uses]
 * @property {Object} [payments]
 * @property {PriceRange} [price_range]
 * @property {number[]} [ordering_stores]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 */
/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */
/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [cron]
 */
/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [discount_qty]
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef CouponAdd
 * @property {RuleDefinition} rule_definition
 * @property {string} code
 * @property {Ownership} ownership
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {DisplayMeta} display_meta
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef CouponUpdate
 * @property {RuleDefinition} rule_definition
 * @property {string} code
 * @property {Ownership} ownership
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {DisplayMeta} display_meta
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 */
/**
 * @typedef ItemCriteria
 * @property {boolean} [all_items]
 * @property {number[]} [item_brand]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_id]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_company]
 * @property {number[]} [item_category]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_exclude_company]
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef DiscountOffer
 * @property {boolean} [apportion_discount]
 * @property {string} [code]
 * @property {number} [discount_price]
 * @property {number} [max_discount_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [discount_percentage]
 * @property {number} [min_offer_quantity]
 * @property {number} [max_usage_per_transaction]
 */
/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 */
/**
 * @typedef PromotionSchedule
 * @property {string} start
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {boolean} published
 * @property {string} [cron]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 */
/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef Restrictions1
 * @property {PostOrder1} [post_order]
 * @property {UsesRestriction1} uses
 * @property {PromotionPaymentModes[]} [payments]
 * @property {boolean} [anonymous_users]
 * @property {string[]} [user_id]
 * @property {number[]} [user_groups]
 * @property {number} [order_quantity]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [platforms]
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [description]
 * @property {string} [name]
 */
/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} [code]
 * @property {number} [apply_priority]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [calculate_on]
 * @property {string} application_id
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAuthor} [author]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} mode
 */
/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */
/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} [code]
 * @property {number} [apply_priority]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [calculate_on]
 * @property {string} application_id
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAuthor} [author]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} mode
 */
/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable]
 * @property {string} [currency]
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} promo_group
 * @property {string} [code]
 * @property {number} [apply_priority]
 * @property {boolean} [apply_all_discount]
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [calculate_on]
 * @property {string} application_id
 * @property {Restrictions1} [restrictions]
 * @property {PromotionAuthor} [author]
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} mode
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromosResponse
 * @property {string} [type]
 * @property {string} [entity_slug]
 * @property {boolean} [is_hidden]
 * @property {string} [description]
 * @property {string} [example]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {string} [entity_type]
 */
/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} product_id
 * @property {string} size
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {string} [type]
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {number} [value]
 * @property {string} [uid]
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {string} [description]
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {number} [value]
 * @property {string} [display]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 */
/**
 * @typedef RawBreakup
 * @property {number} [coupon]
 * @property {number} [vog]
 * @property {number} [subtotal]
 * @property {number} [mrp_total]
 * @property {number} [cod_charge]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [you_saved]
 * @property {number} [fynd_cash]
 * @property {number} [convenience_fee]
 * @property {number} [total]
 * @property {number} [gst_charges]
 */
/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */
/**
 * @typedef ProductArticle
 * @property {number} [quantity]
 * @property {BaseInfo} [store]
 * @property {string} [type]
 * @property {string} [size]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [uid]
 * @property {Object} [extra_meta]
 * @property {ArticlePriceInfo} [price]
 * @property {BaseInfo} [seller]
 * @property {string[]} [product_group_tags]
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef CartProduct
 * @property {string} [type]
 * @property {string} [name]
 * @property {CategoryInfo[]} [categories]
 * @property {number} [uid]
 * @property {ProductImage[]} [images]
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand]
 * @property {string} [slug]
 */
/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */
/**
 * @typedef FreeGiftItem
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
 * @property {string[]} [item_images_url]
 * @property {string} [item_slug]
 */
/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {FreeGiftItem} [free_gift_item_details]
 */
/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [raw_offer]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 */
/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {BuyRules[]} [buy_rules]
 * @property {AppliedFreeArticles} [applied_free_articles]
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_group]
 */
/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef CartProductInfo
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductArticle} [article]
 * @property {string} [key]
 * @property {CartProduct} [product]
 * @property {string} [message]
 * @property {string} [coupon_message]
 * @property {string} [discount]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {Object} [parent_item_identifiers]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [bulk_offer]
 * @property {ProductAvailability} [availability]
 * @property {boolean} [is_set]
 * @property {ProductPriceInfo} [price]
 * @property {PromoMeta} [promo_meta]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {number} [phone]
 * @property {string} [name]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [address]
 * @property {Object} [meta]
 * @property {string} area_code
 * @property {string} [area]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [email]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 */
/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */
/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */
/**
 * @typedef OpenApiOrderItem
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} cod_charges
 * @property {number} price_effective
 * @property {OpenApiFiles[]} [files]
 * @property {number} discount
 * @property {number} product_id
 * @property {number} [employee_discount]
 * @property {CartItemMeta} [meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_marked
 * @property {number} cashback_applied
 * @property {Object} [extra_meta]
 * @property {number} delivery_charges
 * @property {number} [loyalty_discount]
 * @property {number} coupon_effective_discount
 * @property {number} amount_paid
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [order_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [comment]
 * @property {string} coupon_code
 * @property {number} cart_value
 * @property {string} [currency_code]
 * @property {number} [loyalty_discount]
 * @property {string} [gstin]
 * @property {number} delivery_charges
 * @property {string} [coupon]
 * @property {number} cod_charges
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [payment_mode]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {ShippingAddress} billing_address
 * @property {Object} [employee_discount]
 * @property {number} coupon_value
 * @property {number} cashback_applied
 * @property {OpenApiFiles[]} [files]
 * @property {OpenApiOrderItem[]} cart_items
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 * @property {string} [message]
 */
/**
 * @typedef AbandonedCart
 * @property {string} [checkout_mode]
 * @property {boolean} is_default
 * @property {number} [discount]
 * @property {Object} cashback
 * @property {string} [comment]
 * @property {string} [app_id]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [delivery_charges]
 * @property {boolean} [buy_now]
 * @property {Object} [coupon]
 * @property {Object} [cod_charges]
 * @property {number[]} [fc_index_map]
 * @property {Object} [payments]
 * @property {boolean} [is_archive]
 * @property {string} last_modified
 * @property {Object[]} [payment_methods]
 * @property {boolean} [merge_qty]
 * @property {Object} [fynd_credits]
 * @property {string} expire_at
 * @property {string} [order_id]
 * @property {string} user_id
 * @property {boolean} [is_active]
 * @property {string} _id
 * @property {string} created_on
 * @property {number} [cart_value]
 * @property {string} [gstin]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [promotion]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {number} uid
 * @property {Object[]} articles
 * @property {Object[]} [shipments]
 */
/**
 * @typedef AbandonedCartResponse
 * @property {string} [message]
 * @property {Object} [result]
 * @property {AbandonedCart[]} [items]
 * @property {boolean} [success]
 * @property {Page} [page]
 */
/**
 * @typedef AddProductCart
 * @property {boolean} [pos]
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [seller_id]
 * @property {number} [item_id]
 * @property {number} [store_id]
 * @property {string} [display]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [extra_meta]
 * @property {Object} [article_assignment]
 * @property {string} [article_id]
 * @property {string[]} [product_group_tags]
 */
/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */
/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */
/**
 * @typedef CartDetailResponse
 * @property {string} [delivery_charge_info]
 * @property {string} [checkout_mode]
 * @property {string} [message]
 * @property {string} [last_modified]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [restrict_checkout]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 */
/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial]
 * @property {string} [message]
 */
/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_index]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 */
/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */
/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */
/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */
/**
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */
/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */
/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */
/**
 * @typedef Points
 * @property {number} [available]
 */
/**
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */
/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef ShareMessages
 * @property {string} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */
/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */
/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */
/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */
/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */
/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */
/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */
/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */
/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */
/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */
/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */
/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */
/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */
/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */
/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */
/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */
/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */
/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 */
/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */
/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */
/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */
/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */
/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */
/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */
/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */
/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */
/**
 * @typedef GenerateBulkInvoiceLabelShipment
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string} document_type
 * @property {string[]} [shipment_ids]
 */
/**
 * @typedef GenerateBulkInvoiceOrLabelUrl
 * @property {string} uid
 * @property {string} document_type
 * @property {number} batch_id
 */
/**
 * @typedef DocumentType
 * @property {string} invoice
 * @property {string} label
 */
/**
 * @typedef BulkListBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef BulkListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef SuccessResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {number} job_id
 * @property {string} [trace_id]
 */
/**
 * @typedef SuccessResponseBulkStatus
 * @property {boolean} success
 * @property {string} status
 * @property {string} [trace_id]
 */
/**
 * @typedef GenerateBulkUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {number} expires_in
 * @property {string} presigned_type
 */
/**
 * @typedef InternalErrorResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {string} error
 */
/**
 * @typedef BadRequestResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef InternalErrorResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef GenerateBulkShipment
 * @property {string} uid
 * @property {string} store_code
 * @property {string} batch_id
 * @property {string} document_type
 */
/**
 * @typedef GenerateBulkUrl
 * @property {number} [expires_in]
 * @property {string} document_type
 * @property {string} batch_id
 */
/**
 * @typedef GetBulkStatusRequest
 * @property {string} batch_id
 */
/**
 * @typedef BadRequestResponseGenerateBulkItemParameters
 * @property {string} [missing_property]
 * @property {string} [type]
 */
/**
 * @typedef BadRequestResponseGenerateBulkItem
 * @property {string} [keyword]
 * @property {string} [data_path]
 * @property {string} [schema_path]
 * @property {BadRequestResponseGenerateBulkItemParameters} [parameters]
 * @property {string} [message]
 */
/**
 * @typedef SuccessResponseGenerateBulk
 * @property {boolean} success
 */
/**
 * @typedef BadRequestResponseGenerateBulk
 * @property {boolean} success
 * @property {BadRequestResponseGenerateBulkItem[]} error_message
 */
/**
 * @typedef InternalErrorResponseGenerateBulk
 * @property {boolean} success
 * @property {string} [error_message]
 */
/**
 * @typedef ShippingToAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */
/**
 * @typedef SellerAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */
/**
 * @typedef BoxDetails
 * @property {string} box_id
 * @property {string} total_quantity
 * @property {string} package_count
 * @property {string} dimension
 * @property {string} weight
 */
/**
 * @typedef GenerateBulkBoxLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {BoxDetails[]} box_details
 */
/**
 * @typedef GenerateBulkShipmentLabel
 * @property {string} label_type
 * @property {string} uid
 * @property {number} template_id
 * @property {ShipmentDetails[]} shipments
 */
/**
 * @typedef GenerateNoc
 * @property {string} uid
 * @property {string} seller_name
 * @property {string} seller_gstin
 * @property {string} fc_gstin
 * @property {number} template_id
 * @property {SellerAddress} fc_address
 * @property {SellerAddress} seller_address
 */
/**
 * @typedef PackageDetails
 * @property {string} package_id
 * @property {string} item_quantity
 * @property {string} package_type
 * @property {string} packaging_type
 * @property {string} dimension
 * @property {string} weight
 */
/**
 * @typedef PackageItemDetails
 * @property {string} jio_code
 * @property {string} item_name
 * @property {string} mrp
 * @property {string} country_of_origin
 * @property {string} best_before_date
 * @property {string} ean
 * @property {PackageDetails[]} package_details
 */
/**
 * @typedef GenerateBulkPackageLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {PackageItemDetails[]} item_details
 */
/**
 * @typedef SignedSuccessResponse
 * @property {string} [uid]
 * @property {string} [url]
 * @property {number} [expires_in]
 */
/**
 * @typedef BulkPresignedSuccessResponse
 * @property {string} success
 * @property {string} [batch_id]
 * @property {string} [presigned_type]
 * @property {string} presigned_url
 * @property {number} [expires_in]
 */
/**
 * @typedef SignedBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */
/**
 * @typedef SignedFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */
/**
 * @typedef StatusSuccessResponse
 * @property {boolean} [success]
 * @property {string} [status]
 */
/**
 * @typedef StatusBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */
/**
 * @typedef StatusFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */
/**
 * @typedef GenerateManifest
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string[]} [shipment_ids]
 */
/**
 * @typedef GeneratePresignedManifestUrl
 * @property {string} manifest_id
 * @property {string} uid
 */
/**
 * @typedef ManifestLink
 * @property {string} name
 * @property {string} manifest_id
 */
/**
 * @typedef GenerateManifestUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {string} manifest_id
 * @property {number} expires_in
 * @property {string} presigned_type
 */
/**
 * @typedef ManifestListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef InvoiceLabelPresignedRequestBody
 * @property {string} document_type
 * @property {string} entity_id
 * @property {number} [expires_in]
 */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: any;
        category?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCustomFormPayload} arg.body
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateVideoRoomPayload} arg.body
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - Theme ID
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ThemesSchema} arg.body
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: {
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {ThemesSchema} arg.body
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: {
        themeId: string;
    }): Promise<any>;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {Object} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: {
        q?: any;
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q }?: {
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserRequestSchema} arg.body
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: {
        body: CreateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlockUserRequestSchema} arg.body
     * @summary: Block/Unblock user
     * @description: Block/Unblock user
     */
    blockOrUnblockUsers({ body }?: {
        body: BlockUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ArchiveUserRequestSchema} arg.body
     * @summary: archive user
     * @description: archive user
     */
    archiveUser({ body }?: {
        body: ArchiveUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UnDeleteUserRequestSchema} arg.body
     * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
     * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
     */
    unDeleteUser({ body }?: {
        body: UnDeleteUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User ID
     * @param {UpdateUserRequestSchema} arg.body
     * @summary: Update user
     * @description: Update user
     */
    updateUser({ userId, body }?: {
        userId: string;
        body: UpdateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserSessionRequestSchema} arg.body
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: {
        body: CreateUserSessionRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Get a list of all session for a user
     * @description: Use this API to retrieve a list of session of customers who have registered in the application.
     */
    getActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Delete a list of all session for a user
     * @description: Use this API to Delete a list of session of customers who have registered in the application.
     */
    deleteActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformSchema} arg.body
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): Promise<any>;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {ScheduleSchema} arg.body
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlogRequest} arg.body
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: {
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {BlogRequest} arg.body
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DataLoaderSchema} arg.body
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: {
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {DataLoaderSchema} arg.body
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: {
        dataLoaderId: string;
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.service - Name of service.
     * @param {string} arg.operationId - Name of operation id of the service.
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: {
        service: string;
        operationId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {CreateFaqSchema} arg.body
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {CreateFaqSchema} arg.body
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {LandingPageSchema} arg.body
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {LandingPageSchema} arg.body
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationLegal} arg.body
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {NavigationRequest} arg.body
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a navigation. You can get slug value of a navigation from
     *   `getNavigations` API.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {NavigationRequest} arg.body
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page preview
     * @description: Use this API to create a page preview to check the appearance of a custom page.
     */
    createPagePreview({ body }?: {
        body: PageRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {PagePublishRequest} arg.body
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PathMappingSchema} arg.body
     * @summary: Save path based redirection rules
     * @description: Use this API to add, update or delete path-based redirection rules
     */
    updatePathRedirectionRules({ body }?: {
        body: PathMappingSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SeoComponent} arg.body
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SlideshowRequest} arg.body
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value of a page from
     *   `getSlideshows` API.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {SlideshowRequest} arg.body
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Support} arg.body
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: {
        body: Support;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RemoveHandpickedSchema} arg.body
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.tagId - ID allotted to the tag.
     * @param {UpdateHandpickedSchema} arg.body
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: {
        body: PageRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {PageSchema} arg.body
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @summary: Get pages by component Id
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @summary: Create email provider
     * @description: Create email provider
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @summary: Get email provider by id
     * @description: Get email provider by id
     */
    getEmailProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @summary: Update email provider by id
     * @description: Update email provider by id
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendOtpCommsReq} arg.body
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: {
        body: SendOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyOtpCommsReq} arg.body
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: {
        body: VerifyOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @summary: Create sms provider
     * @description: Create sms provider
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @summary: Get sms provider by id
     * @description: Get sms provider by id
     */
    getSmsProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.requestHash] -
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash }?: {
        orderId: string;
        requestHash?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsOTPRequest} arg.body
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: {
        body: AddBeneficiaryDetailsOTPRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentConfirmationRequest} arg.body
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }): Promise<any>;
}
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchId] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.requestByExt] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.customerId] -
     * @param {boolean} [arg.isPrioritySort] -
     * @summary:
     * @description:
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
        lane?: string;
        searchType?: string;
        searchId?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        orderingCompanyId?: string;
        stores?: string;
        salesChannel?: string;
        requestByExt?: string;
        pageNo?: number;
        pageSize?: number;
        customerId?: string;
        isPrioritySort?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getAppOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackPlatformShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
     */
    getSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     */
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     */
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
     */
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     */
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     */
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for which the custom_meta is associated.
     * @param {ApplicationItemMeta} arg.body
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppProduct({ itemId, body }?: {
        itemId: string;
        body: ApplicationItemMeta;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for a particular product.
     * @param {string} arg.sliceAttr - Get product's data sliced by attribute
     * @summary: Get company application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
     */
    getAppProduct({ itemId, sliceAttr }?: {
        itemId: string;
        sliceAttr: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog.
     */
    getConfigurationMetadata({ configType, templateSlug }?: {
        configType: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types.
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types.
     */
    createGroupConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application.
     */
    deleteGroupConfiguration({ configType, groupSlug }?: {
        configType: string;
        groupSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application.
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: {
        configType: string;
        groupSlug: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types.
     */
    getListingConfigurations({ configType, pageNo, pageSize, search }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Add configuration for listings
     * @description: Add configuration for listing.
     */
    createListingConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing.
     */
    deleteListingConfiguration({ configType, configId }?: {
        configType: string;
        configId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Update configuration for listings
     * @description: Update configuration for listing.
     */
    updateListingConfiguration({ configType, configId, body }?: {
        configType: string;
        configId: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AllowSingleRequest} arg.body
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application.
     */
    updateAllowSingle({ body }?: {
        body: AllowSingleRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DefaultKeyRequest} arg.body
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application.
     */
    updateDefaultSort({ body }?: {
        body: DefaultKeyRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog.
     */
    getCatalogConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     */
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: {
        type: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     */
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Get collection list filtered by q string,
     * @param {string} [arg.scheduleStatus] - Get collection list filtered by
     *   scheduled status,
     * @param {string} [arg.type] - Type of the collections
     * @param {string[]} [arg.tags] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {boolean} [arg.isActive] - Get collections filtered by active status.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize, }?: {
        q?: string;
        scheduleStatus?: string;
        type?: string;
        tags?: string[];
        isActive?: boolean;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCollection} arg.body
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: {
        body: CreateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a human readable, URL friendly
     *   unique identifier of an object. Pass the `slug` of the collection which
     *   you want to retrieve.
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     */
    getCollectionDetail({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {UpdateCollection} arg.body
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     */
    updateCollection({ id, body }?: {
        id: string;
        body: UpdateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {string} [arg.sortOn] - Each response will contain sort_on param,
     *   which should be sent back to make pagination work.
     * @param {string} [arg.pageId] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`.
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     */
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.brand] - Brand slug
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
     */
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     */
    getCategories({ department }?: {
        department?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {string} [arg.pageId] - Each response will contain **page_id**
     *   param, which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number} [arg.pageNo] - If page_type is number then pass it to
     *   fetch page items. Default is 1.
     * @param {string} [arg.pageType] - For pagination type should be cursor or
     *   number. Default is cursor.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProducts({ q, f, c, filters, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: {
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
        itemIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - The unique identifier of a product. i.e;
     *   `slug` of a product. You can retrieve these from the APIs that list
     *   products like **v1.0/products/**
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, pageNo, pageSize, q, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.itemIds] - The Item Id of the product.
     * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
     * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
     * @param {string[]} [arg.sellerIdentifiers] - Unique seller_identifier of
     *   the product.
     * @param {string} [arg.timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @summary: Get the stock of a product
     * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, }?: {
        itemIds?: number[];
        storeIds?: number[];
        brandIds?: number[];
        sellerIdentifiers?: string[];
        timestamp?: string;
        pageSize?: number;
        pageId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Id of the company whose locations are to fetched
     * @param {string} arg.applicationId - Id of the application whose locations
     *   are to fetched
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandUid - Brand id for which the custom_json is associated.
     * @param {ApplicationBrandJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppBrand({ brandUid, body }?: {
        brandUid: string;
        body: ApplicationBrandJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryUid - Category id for which the custom_json
     *   is associated.
     * @param {ApplicationCategoryJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppCategory({ categoryUid, body }?: {
        categoryUid: string;
        body: ApplicationCategoryJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.storeUid - Store id for which the custom_json is associated.
     * @param {ApplicationStoreJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppLocation({ storeUid, body }?: {
        storeUid: string;
        body: ApplicationStoreJson;
    }): Promise<any>;
}
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartRequest} arg.body
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartResponse} arg.body
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {BulkRequest} arg.body
     * @summary: Copy Files
     * @description: Copy Files
     */
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} [arg.pageNo] - Page no
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} arg.companyId - Company_id
     * @param {number} arg.applicationId - Application_id
     * @summary: Browse Files
     * @description: Browse Files
     */
    browsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @summary: Create short link
     * @description: Create short link
     */
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - Hash of short url
     * @summary: Get short link by hash
     * @description: Get short link by hash
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     * @summary: Update short link by id
     * @description: Update short link by id
     */
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): Promise<any>;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get latest build config
     * @description: Get latest build config
     */
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     * @summary: Update build config for next build
     * @description: Update build config for next build
     */
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get previous build versions
     * @description: Get previous build versions
     */
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get features of application
     * @description: Get features of application
     */
    getAppFeatures({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @summary: Update features of application
     * @description: Update features of application
     */
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get basic application details
     * @description: Get basic application details like name
     */
    getAppBasicDetails({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationDetail} arg.body
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     */
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application information
     * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
     */
    getAppContactInfo({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInformation} arg.body
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     */
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get social tokens
     * @description: Get social tokens.
     */
    getAppApiTokens({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenResponse} arg.body
     * @summary: Add social tokens
     * @description: Add social tokens.
     */
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompanies({ uid, pageNo, pageSize }?: {
        uid?: number;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application configuration
     * @description: Get application configuration for various features and data
     */
    getInventoryConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInventory} arg.body
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     */
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     */
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application enabled currency list
     * @description: Get application enabled currency list
     */
    getAppCurrencyConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppSupportedCurrency} arg.body
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     */
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppSupportedCurrency({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreConfig} arg.body
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     */
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get attached domain list
     * @description: Get attached domain list.
     */
    getDomains({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainAddRequest} arg.body
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     */
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Domain _id
     * @summary: Remove attached domain
     * @description: Remove attached domain.
     */
    removeDomainById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     */
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainStatusRequest} arg.body
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     */
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application data from id
     * @description: Get application data from id
     */
    getApplicationById({}?: any): Promise<any>;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CouponAdd} arg.body
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: {
        body: CouponAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {PromotionAdd} arg.body
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: {
        body: PromotionAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionUpdate} arg.body
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: {
        id: string;
        body: PromotionUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionPartialUpdate} arg.body
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: {
        id: string;
        body: PromotionPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons.
     */
    getPromosCouponConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiCartServiceabilityRequest} arg.body
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: {
        body: OpenApiCartServiceabilityRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiPlatformCheckoutReq} arg.body
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: {
        body: OpenApiPlatformCheckoutReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCartPaginator({ companyId, applicationId, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart.
     */
    addItems({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: AddCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @summary: Update items in the abandoned cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: UpdateCartRequest;
    }): Promise<any>;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    getGiveaways({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    getGiveawaysPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {Giveaway} arg.body
     * @summary: Adds a new giveaway.
     * @description: Adds a new giveaway.
     */
    createGiveaway({ body }?: {
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @summary: Get giveaway by ID.
     * @description: Get giveaway by ID.
     */
    getGiveawayByID({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     */
    updateGiveaway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List of offer of the current application.
     * @description: List of offer of the current application.
     */
    getOffers({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cookie - User's session cookie. This cookie is set in
     *   browser cookie when logged-in to fynd's authentication system i.e.
     *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
     * @param {string} arg.name - Offer name
     * @summary: Get offer by name.
     * @description: Get offer by name.
     */
    getOfferByName({ cookie, name }?: {
        cookie: string;
        name: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - Offer name
     * @param {Offer} arg.body
     * @summary: Updates the offer by name.
     * @description: Updates the offer by name.
     */
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @summary: User's reward details.
     * @description: User's reward details.
     */
    getUserAvailablePoints({ userId }?: {
        userId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {AppUser} arg.body
     * @summary: Update User status
     * @description: Update user status, active/archive
     */
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageLimit] - PageLimit is the number of requested
     *   items in response.
     * @param {number} [arg.pageSize] - PageSize is the number of requested
     *   items in response.
     * @summary: Get list of points transactions.
     * @description: Get list of points transactions.
     * The list of points history is paginated.
     */
    getUserPointsHistory({ userId, pageId, pageLimit, pageSize }?: {
        userId: string;
        pageId?: string;
        pageLimit?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {string} arg.userId - User id
     * @param {number} [arg.pageSize] - PageSize is the number of requested
     *   items in response.
     * @summary: Get list of points transactions.
     * @description: Get list of points transactions.
     * The list of points history is paginated.
     */
    getUserPointsHistoryPaginator({ companyId, applicationId, userId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        userId: string;
        pageSize?: number;
    }): Paginator;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get statistics groups
     * @description: Get statistics groups
     */
    getStatiscticsGroups({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupName - Group name
     * @summary: Get statistics group components
     * @description: Get statistics group components
     */
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics csv
     * @description: Get component statistics csv
     */
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics pdf
     * @description: Get component statistics pdf
     */
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics
     * @description: Get component statistics
     */
    getComponentStats({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @summary: Get abandon carts csv
     * @description: Get abandon carts csv
     */
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Cart Id
     * @summary: Get abandon carts details
     * @description: Get abandon cart details
     */
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): Promise<any>;
}
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {AddProxyReq} arg.body
     * @summary: Add proxy path for external url
     * @description: Add proxy path for external url
     */
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {string} arg.attachedPath - Attachaed path slug
     * @summary: Remove proxy path for external url
     * @description: Remove proxy path for external url
     */
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
    }): Promise<any>;
}
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
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
    sub_categories?: TicketSubCategory[];
    feedback_form?: TicketFeedbackForm;
};
type TicketSubCategory = {
    key: string;
    display: string;
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
    show_support_dris?: boolean;
    integration?: any;
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
    ticket_id: string;
    category: TicketCategory;
    sub_category?: TicketSubCategory;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
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
    is_deleted?: boolean;
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
    redirections?: RedirectionSchema[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type RedirectionSchema = {
    redirect_from?: string;
    redirect_to?: string;
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
    value?: string;
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
    app_id: string;
    display_fields: string[];
    success: boolean;
    aggregators?: any[];
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    secret: string;
    merchant_salt: string;
    key: string;
    config_type: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
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
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    display_name?: string;
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    card_name?: string;
    exp_month?: number;
    code?: string;
    intent_app_error_list?: string[];
    intent_app_error_dict_list?: IntentAppErrorList[];
    merchant_code?: string;
    card_fingerprint?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    nickname?: string;
    exp_year?: number;
    display_priority?: number;
    card_type?: string;
    fynd_vpa?: string;
    card_reference?: string;
    expired?: boolean;
    intent_flow?: boolean;
    display_name?: string;
    aggregator_name: string;
    card_id?: string;
    card_number?: string;
    logo_url?: PaymentModeLogo;
    card_brand?: string;
    card_isin?: string;
    card_token?: string;
    card_issuer?: string;
    card_brand_image?: string;
    name?: string;
    retry_count?: number;
    timeout?: number;
    intent_app?: IntentApp[];
};
type RootPaymentMode = {
    is_pay_by_card_pl?: boolean;
    logo_url?: PaymentModeLogo;
    save_card?: boolean;
    display_name: string;
    anonymous_enable?: boolean;
    list?: PaymentModeList[];
    display_priority: number;
    aggregator_name?: string;
    logo?: string;
    name: string;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    is_default: boolean;
    payouts_aggregators: any[];
    customers: any;
    more_attributes: any;
    transfer_type: string;
    is_active: boolean;
};
type PayoutBankDetails = {
    branch_name?: string;
    country?: string;
    pincode?: number;
    account_holder?: string;
    ifsc_code: string;
    account_type: string;
    bank_name?: string;
    account_no?: string;
    city?: string;
    state?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    aggregator: string;
    users: any;
    unique_external_id: string;
    transfer_type: string;
    is_active: boolean;
};
type PayoutResponse = {
    unique_transfer_no: string;
    payment_status: string;
    bank_details: any;
    aggregator: string;
    success: boolean;
    users: any;
    created: boolean;
    payouts: any;
    transfer_type: string;
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
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    branch_name: string;
    account_holder: string;
    ifsc_code: string;
    bank_name: string;
    account_no: string;
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
    comment?: string;
    mobile?: string;
    bank_name: string;
    subtitle: string;
    created_on: string;
    title: string;
    address: string;
    modified_on: string;
    is_active: boolean;
    branch_name?: string;
    transfer_mode: string;
    account_holder: string;
    id: number;
    beneficiary_id: string;
    ifsc_code: string;
    display_name: string;
    account_no: string;
    email: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
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
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type Prices = {
    discount?: number;
    coupon_value?: number;
    cod_charges?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    delivery_charge?: number;
    price_effective?: number;
    refund_amount?: number;
    amount_paid?: number;
    value_of_good?: number;
    price_marked?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    gstin_code: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    value_of_good: number;
};
type PlatformItem = {
    can_return?: boolean;
    size?: string;
    l1_category?: string[];
    code?: string;
    l3_category?: number;
    department_id?: number;
    images?: string[];
    image?: string[];
    color?: string;
    id?: number;
    l3_category_name?: string;
    can_cancel?: boolean;
    name?: string;
};
type BagUnit = {
    can_return?: boolean;
    status: any;
    gst?: GSTDetailsData;
    shipment_id: string;
    total_shipment_bags: number;
    item?: PlatformItem;
    prices?: Prices;
    ordering_channel: string;
    bag_id: number;
    item_quantity: number;
    can_cancel?: boolean;
};
type ShipmentStatus = {
    hex_code: string;
    title: string;
    status: string;
    ops_status: string;
    actual_status: string;
};
type UserDataInfo = {
    mobile?: string;
    email?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    first_name?: string;
    gender?: string;
    avis_user_id?: string;
    uid?: number;
    name?: string;
};
type ShipmentItem = {
    fulfilling_centre: string;
    channel?: any;
    total_bags_count: number;
    total_shipments_in_order: number;
    created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    payment_methods?: any;
    prices?: Prices;
    shipment_created_at: number;
    bags?: BagUnit[];
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    id: string;
    sla?: any;
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
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
    id?: number;
};
type TrackingList = {
    is_passed?: boolean;
    status: string;
    text: string;
    time?: string;
    is_current?: boolean;
};
type DPDetailsData = {
    pincode?: string;
    awb_no?: string;
    country?: string;
    eway_bill_id?: string;
    id?: string;
    gst_tag?: string;
    track_url?: string;
    name?: string;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    latitude?: number;
    pincode?: string;
    created_at?: string;
    email?: string;
    version?: string;
    contact_person?: string;
    area?: string;
    country?: string;
    state?: string;
    address2?: string;
    updated_at?: string;
    address_category?: string;
    address1?: string;
    address_type?: string;
    longitude?: number;
    phone?: string;
    city?: string;
};
type BagConfigs = {
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    enable_tracking: boolean;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagGST = {
    gst_fee?: number;
    gstin_code?: string;
    hsn_code?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    gst_tag?: string;
    value_of_good?: number;
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
    promotion_type?: string;
    promo_id?: string;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    mrp_promotion?: boolean;
    amount?: number;
    discount_rules?: DiscountRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_fee: string;
    total_units: number;
    pm_price_split: any;
    delivery_charge: number;
    tax_collected_at_source?: number;
    brand_calculated_amount: number;
    item_name: string;
    cashback_applied: number;
    refund_credit: number;
    hsn_code: string;
    price_effective: number;
    identifiers: Identifier;
    gst_tag: string;
    coupon_value: number;
    transfer_price: number;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    amount_paid: number;
    promotion_effective_discount: number;
    gst_tax_percentage: number;
    price_marked: number;
    discount: number;
    coupon_effective_discount: number;
    size: string;
    cod_charges: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    value_of_good: number;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: number;
    company: string;
    logo: string;
    id: number;
    created_on: number;
};
type OrderBags = {
    can_return?: boolean;
    display_name?: string;
    current_status?: string;
    quantity?: number;
    delivery_address?: PlatformDeliveryAddress;
    bag_id: number;
    bag_configs?: BagConfigs;
    entity_type?: string;
    article?: OrderBagArticle;
    identifier?: string;
    parent_promo_bags?: any;
    can_cancel?: boolean;
    gst_details?: BagGST;
    applied_promos?: AppliedPromos[];
    seller_identifier?: string;
    item?: PlatformItem;
    prices?: Prices;
    financial_breakup?: FinancialBreakup[];
    line_number?: number;
    brand?: OrderBrandName;
};
type BagStateMapper = {
    display_name: string;
    app_facing?: boolean;
    bs_id: number;
    notify_customer?: boolean;
    app_state_name?: string;
    app_display_name?: string;
    state_type: string;
    is_active?: boolean;
    journey_type: string;
    name: string;
};
type BagStatusHistory = {
    created_at: string;
    delivery_partner_id?: number;
    status: string;
    display_name?: boolean;
    bag_id: number;
    store_id: number;
    shipment_id: string;
    updated_at?: string;
    state_type?: string;
    kafka_sync?: boolean;
    bag_state_mapper: BagStateMapper;
    app_display_name?: boolean;
    state_id: number;
    delivery_awb_number?: string;
    forward?: boolean;
    bsh_id: number;
    reasons?: any[];
};
type OrderDetailsData = {
    source?: string;
    order_date?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    cod_charges?: string;
    ordering_channel?: string;
    order_value?: string;
    tax_details?: any;
    affiliate_id?: string;
};
type FulfillingStore = {
    meta: any;
    fulfillment_channel: string;
    pincode: string;
    contact_person: string;
    address: string;
    code: string;
    state: string;
    country: string;
    id: string;
    phone: string;
    city: string;
    store_name: string;
};
type UserDetailsData = {
    pincode: string;
    address: string;
    email: string;
    country: string;
    state: string;
    phone: string;
    city: string;
    name: string;
};
type ShipmentPayments = {
    source?: string;
    mode: string;
    logo?: string;
};
type ShipmentInfoResponse = {
    can_return?: boolean;
    delivery_slot?: any;
    delivery_status: any[];
    status?: ShipmentStatusData;
    user_info?: any;
    picked_date?: string;
    replacement_details?: string;
    kirana_store_id?: string;
    affiliate_shipment_id: string;
    tracking_list?: TrackingList[];
    tracking_url: string;
    status_progress: number;
    bank_data?: any;
    priority_text?: string;
    shipment_status?: string;
    is_fynd_coupon: boolean;
    dp_details?: DPDetailsData;
    total_bags?: number;
    bags?: OrderBags[];
    pay_button?: string;
    user_id: string;
    child_nodes?: string[];
    enable_tracking?: boolean;
    forward_order_status?: any[];
    bag_status_history?: BagStatusHistory[];
    is_not_fynd_source: boolean;
    total_items?: number;
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    refund_text?: string;
    beneficiary_details?: boolean;
    order?: OrderDetailsData;
    operational_status?: string;
    mid?: string;
    vertical?: string;
    ordering_store: any;
    can_cancel?: boolean;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    coupon?: any;
    secured_delivery_flag?: string;
    fulfilling_store?: FulfillingStore;
    billing_details?: UserDetailsData;
    order_status: any;
    escalation?: any;
    forward_shipment_status?: any[];
    items: any[];
    order_type: string;
    can_break: string;
    invoice: any;
    user_agent?: string;
    custom_meta?: any[];
    fyndstore_emp: any;
    lock_status: string;
    credit_note_id: string;
    shipment_images?: string[];
    is_packaging_order: boolean;
    is_fynd_store?: string;
    order_created_time?: string;
    current_shipment_status: any;
    email_id: string;
    is_invoiced: boolean;
    due_date?: string;
    is_pdsr?: string;
    forward_tracking_list?: any[];
    shipment_id: string;
    prices?: Prices;
    payments?: ShipmentPayments;
    refund_details?: any;
    company: any;
    payment_mode?: string;
    go_green?: boolean;
    platform_logo: boolean;
    journey_type?: string;
    delivery_details?: UserDetailsData;
};
type PlatformShipment = {
    delivery_slot?: any;
    status?: ShipmentStatusData;
    picked_date?: string;
    tracking_list?: TrackingList[];
    priority_text?: string;
    shipment_status?: string;
    dp_details?: DPDetailsData;
    total_bags?: number;
    bags?: OrderBags[];
    bag_status_history?: BagStatusHistory[];
    total_items?: number;
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    order?: OrderDetailsData;
    operational_status?: string;
    vertical?: string;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    fulfilling_store?: FulfillingStore;
    billing_details?: UserDetailsData;
    user_agent?: string;
    custom_meta?: any[];
    shipment_images?: string[];
    shipment_id: string;
    prices?: Prices;
    payments?: ShipmentPayments;
    payment_mode?: string;
    platform_logo?: string;
    journey_type?: string;
    delivery_details?: UserDetailsData;
};
type OrderDict = {
    shipment_count: number;
    order_date: string;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    index?: number;
    total_items?: number;
    value?: string;
    text?: string;
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
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_value?: number;
    payment_mode?: string;
    total_order_value?: number;
    order_id?: string;
    shipments?: PlatformShipment[];
    order_created_time?: string;
};
type OrderListingResponse = {
    lane?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    total_count?: number;
    message?: string;
    success?: boolean;
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
    reason?: string;
    meta?: any;
    shipment_type?: string;
    status?: string;
    raw_status?: string;
    awb?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    account_name?: string;
    updated_time?: string;
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
    report_name?: string;
    display_name?: string;
    status?: string;
    request_details?: any;
    report_requested_at?: string;
    report_id?: string;
    report_type?: string;
    report_created_at?: string;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    article_id?: string;
    item_id?: string;
    jio_code?: string;
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
    data?: any[];
    identifier?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    invoice_status?: string;
    data?: any;
    company_id?: string;
    invoice?: any;
    label?: any;
    batch_id: string;
    store_code?: string;
    do_invoice_label_generated: boolean;
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
    file_name?: string;
    method?: string;
    size?: number;
    content_type?: string;
    operation?: string;
    upload?: FileUploadResponse;
    file_path?: string;
    namespace?: string;
    tags?: string[];
    cdn?: URL;
};
type BulkListingPage = {
    size?: number;
    has_previous?: boolean;
    current?: number;
    total?: number;
    has_next?: boolean;
    type?: string;
};
type bulkListingData = {
    status?: string;
    company_id?: number;
    batch_id?: string;
    user_name?: string;
    user_id?: string;
    file_name?: string;
    uploaded_on?: string;
    successful_shipments?: any[];
    successful?: number;
    total?: number;
    store_id?: number;
    excel_url?: string;
    processing_shipments?: string[];
    failed?: number;
    id?: string;
    store_code?: string;
    failed_shipments?: any[];
    processing?: number;
    store_name?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
};
type ManifestPage = {
    total?: number;
    has_previous?: boolean;
    current?: string;
    size?: string;
    has_next?: boolean;
    type?: string;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    dp_name?: string;
    store_name?: string;
    lane?: string;
    date_range?: DateRange;
    stores?: string;
    sales_channels?: string;
    sales_channel_name?: string;
    dp_ids?: string;
};
type GeneratedManifestItem = {
    created_at?: string;
    status?: string;
    manifest_id?: string;
    filters?: ManifestFilter;
    company_id?: number;
    created_by?: string;
    is_active?: boolean;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    shipment_id?: string;
    awb?: string;
    item_qty?: number;
    order_id?: string;
    invoice_id?: string;
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
    meta?: ManifestDetailMeta;
    created_at?: string;
    status?: string;
    manifest_id?: string;
    filters?: ManifestFilter;
    company_id?: number;
    id?: number;
    uid?: number;
    created_by?: string;
    is_active?: boolean;
    user_id?: number;
};
type ManifestDetailResponse = {
    page?: ManifestPage;
    items?: ManifestDetailItem[];
    additional_shipment_count?: number;
    manifest_details?: ManifestDetail[];
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    question_set?: QuestionSet[];
    qc_type?: string[];
    display_name?: string;
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
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    error?: string[];
    uploaded_on?: string;
    status?: boolean;
    user_id?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    message?: string;
    success?: string;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    enable_tracking: boolean;
};
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
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
    is_set?: boolean;
    raw_meta?: any;
    dimensions?: Dimensions;
    a_set?: any;
    size: string;
    _id: string;
    weight?: Weight;
    code?: string;
    return_config?: ReturnConfig;
    esp_modified?: any;
    child_details?: any;
    identifiers: Identifier;
    uid: string;
    seller_identifier: string;
};
type ArticleDetails = {
    status?: any;
};
type StoreAddress = {
    pincode: number;
    email?: string;
    version?: string;
    state: string;
    city: string;
    phone: string;
    latitude: number;
    area?: string;
    address2?: string;
    address1: string;
    longitude: number;
    country_code: string;
    landmark?: string;
    created_at: string;
    country: string;
    address_category: string;
    address_type: string;
    contact_person: string;
    updated_at: string;
};
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
};
type Document = {
    url?: string;
    value: string;
    verified: boolean;
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
    password?: string;
    enabled: boolean;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    display_name: string;
    timing?: any[];
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    gst_number?: string;
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    product_return_config?: any;
    stage: string;
};
type Store = {
    pincode: string;
    mall_name?: string;
    store_address_json?: StoreAddress;
    state: string;
    company_id: number;
    store_active_from?: string;
    city: string;
    phone: number;
    is_active?: boolean;
    mall_area?: string;
    latitude: number;
    address2?: string;
    is_archived?: boolean;
    address1: string;
    longitude: number;
    vat_no?: string;
    is_enabled_for_recon?: boolean;
    order_integration_id?: string;
    location_type: string;
    created_at: string;
    code?: string;
    country: string;
    alohomora_user_id?: number;
    store_email: string;
    parent_store_id?: number;
    brand_id?: any;
    login_username: string;
    s_id: string;
    meta: StoreMeta;
    fulfillment_channel: string;
    contact_person: string;
    packaging_material_count?: number;
    brand_store_tags?: string[];
    updated_at?: string;
    name: string;
};
type BagGSTDetails = {
    gst_fee: number;
    gstin_code?: string;
    sgst_gst_fee: string;
    cgst_tax_percentage: number;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    hsn_code: string;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    hsn_code_id: string;
    igst_gst_fee: string;
};
type BuyerDetails = {
    gstin: string;
    pincode: number;
    address: string;
    state: string;
    ajio_site_id?: string;
    city: string;
    name: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type EInvoice = {
    irn?: string;
    acknowledge_date?: string;
    signed_invoice?: string;
    error_message?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentMeta = {
    return_store_node?: number;
    b2b_buyer_details?: BuyerDetails;
    b2c_buyer_details?: any;
    bag_weight?: any;
    weight: number;
    dp_sort_key?: string;
    packaging_name?: string;
    dp_name?: string;
    fulfilment_priority_text?: string;
    box_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    return_affiliate_shipment_id?: string;
    awb_number?: string;
    ewaybill_info?: any;
    marketplace_store_id?: string;
    return_awb_number?: string;
    po_number?: string;
    shipment_volumetric_weight?: number;
    order_type?: string;
    shipment_weight?: number;
    return_details?: any;
    forward_affiliate_shipment_id?: string;
    same_store_available: boolean;
    due_date?: string;
    formatted?: Formatted;
    store_invoice_updated_date?: string;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
    forward_affiliate_order_id?: string;
    debug_info?: DebugInfo;
    dp_options?: any;
    lock_data?: LockData;
    external?: any;
    einvoice_info?: EinvoiceInfo;
};
type PDFLinks = {
    credit_note_url?: string;
    b2b?: string;
    label_type: string;
    invoice_type: string;
    invoice_pos?: string;
    invoice?: string;
    label?: string;
    label_pos?: string;
    invoice_a6?: string;
    label_a4?: string;
    po_invoice?: string;
    invoice_a4?: string;
    label_a6?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    channel_order_id?: string;
    box_type?: string;
    is_priority?: boolean;
    order_item_id?: string;
    quantity?: number;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    coupon_code?: string;
    employee_discount?: number;
    due_date?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    affiliate_id?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    employee_discount?: number;
};
type B2BPODetails = {
    po_tax_amount?: number;
    item_base_price?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    brand_name?: string;
    primary_color?: string;
    marketer_address?: string;
    marketer_name?: string;
    primary_color_hex?: string;
    primary_material?: string;
    gender?: string[];
    essential?: string;
    name?: string;
};
type Item = {
    can_return?: boolean;
    l2_category?: string[];
    l3_category?: number;
    branch_url?: string;
    item_id: number;
    can_cancel?: boolean;
    code?: string;
    image: string[];
    attributes: Attributes;
    color?: string;
    webstore_product_url?: string;
    brand_id: number;
    l3_category_name?: string;
    last_updated_at?: string;
    meta?: any;
    slug_key: string;
    size: string;
    l1_category?: string[];
    department_id?: number;
    l1_category_id?: number;
    l2_category_id?: number;
    brand: string;
    gender?: string;
    name: string;
};
type Brand = {
    start_date?: string;
    brand_name: string;
    modified_on?: number;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    script_last_ran?: string;
    invoice_prefix?: string;
    company: string;
    brand_id: number;
    pickup_location?: string;
    logo?: string;
    is_virtual_invoice?: boolean;
    created_on?: number;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagDetailsPlatformResponse = {
    restore_coupon?: boolean;
    display_name?: string;
    status: BagReturnableCancelableStatus;
    current_status: BagStatusHistory;
    quantity?: number;
    restore_promos?: any;
    bag_status: BagStatusHistory[];
    tags?: string[];
    reasons?: any[];
    bag_status_history?: BagStatusHistory;
    b_id: number;
    entity_type?: string;
    article: Article;
    identifier?: string;
    article_details?: ArticleDetails;
    operational_status?: string;
    qc_required?: any;
    ordering_store?: Store;
    order_integration_id?: string;
    bag_update_time?: number;
    parent_promo_bags?: any;
    b_type?: string;
    gst_details: BagGSTDetails;
    affiliate_details?: AffiliateDetails;
    current_operational_status: BagStatusHistory;
    original_bag_list?: number[];
    applied_promos?: any[];
    affiliate_bag_details: AffiliateBagDetails;
    no_of_bags_order?: number;
    seller_identifier?: string;
    meta?: BagMeta;
    shipment_id?: string;
    item: Item;
    financial_breakup: FinancialBreakup[];
    prices: Prices;
    line_number?: number;
    brand: Brand;
    dates?: Dates;
    journey_type: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    size: number;
    has_next: boolean;
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
    message?: string;
    status?: number;
    shipment_id?: string;
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
    store_id: number;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    mongo_article_id?: string;
    item_id?: string;
    reason_ids?: number[];
    affiliate_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    set_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    is_locked?: boolean;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    lock_status?: boolean;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    status?: string;
    shipment_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    platform_name?: string;
    company_id?: number;
    platform_id?: string;
    title?: string;
    id: number;
    description?: string;
    from_datetime?: string;
    to_datetime?: string;
    created_at?: string;
    logo_url?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ProductsReasonsFilters = {
    quantity?: number;
    line_number?: number;
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
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    final_state?: any;
    identifier: string;
    stack_trace?: string;
    message?: string;
    status?: number;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    country: string;
    last_name: string;
    city: string;
    state: string;
    address2?: string;
    address1?: string;
    pincode: string;
    first_name: string;
    email: string;
    phone: number;
    mobile: number;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    _id: string;
    attributes: any;
    category: any;
    brand_id: number;
    quantity: number;
    weight: any;
    dimension: any;
};
type ShipmentDetails = {
    dp_id?: number;
    fulfillment_id: number;
    box_type?: string;
    articles: ArticleDetails1[];
    meta?: any;
    shipments: number;
    affiliate_shipment_id: string;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    action: string;
    shipment: ShipmentDetails[];
    source: string;
    to_pincode: string;
    journey: string;
    identifier: string;
    payment_mode: string;
    location_details?: LocationDetails;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    hsn_code_id: string;
    affiliate_store_id: string;
    store_id: number;
    delivery_charge: number;
    quantity: number;
    price_effective: number;
    pdf_links?: MarketPlacePdf;
    unit_price: number;
    discount: number;
    sku: string;
    modified_on: string;
    seller_identifier: string;
    amount_paid: number;
    item_id: number;
    item_size: string;
    company_id: number;
    _id: string;
    fynd_store_id: string;
    avl_qty: number;
    price_marked: number;
    identifier: any;
    transfer_price: number;
    affiliate_meta: any;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    payment?: any;
    items: any;
    order_value: number;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    cod_charges: number;
    discount: number;
    payment_mode: string;
    coupon?: string;
    delivery_charges: number;
    user: UserData;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    token: string;
    name: string;
    owner: string;
    id: string;
    secret: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    updated_at: string;
    created_at: string;
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
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    article_lookup?: string;
    store_lookup?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    description: string;
    id: number;
    slug: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    createdat: string;
    ticket_url?: string;
    l2_detail?: string;
    l1_detail?: string;
    bag_id?: number;
    type: string;
    message: string;
    ticket_id?: string;
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
    order_id: string;
    phone_number: number;
    amount_paid: number;
    brand_name: string;
    customer_name: string;
    shipment_id: number;
    payment_mode: string;
    message: string;
    country_code: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    id: number;
    meta: Meta;
    bag_list?: number[];
    status?: string;
    shipment_id?: string;
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
    order_type: string;
    shipment_ids?: string[];
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    primary_email: string;
    state_code: string;
    pincode: string;
    geo_location?: any;
    country: string;
    landmark?: string;
    country_code: string;
    gender?: string;
    address2?: string;
    customer_code?: string;
    house_no?: string;
    first_name: string;
    alternate_mobile_number?: string;
    floor_no?: string;
    address_type?: string;
    last_name?: string;
    external_customer_code?: string;
    city: string;
    state: string;
    address1: string;
    title?: string;
    slot?: any[];
    shipping_type?: string;
    middle_name?: string;
    alternate_email?: string;
    primary_mobile_number: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type Tax = {
    amount: any;
    breakup: any[];
    name: string;
    tax_exempt: boolean;
};
type Charge = {
    code?: string;
    name: string;
    amount: any;
    type: string;
    tax: Tax;
};
type PaymentMethod = {
    collect_by: string;
    name: string;
    mode: string;
    refund_by: string;
    amount: number;
    transaction_data?: any;
    meta?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type LineItem = {
    seller_identifier: string;
    charges: Charge[];
    external_line_id?: string;
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
};
type ProcessingDates = {
    confirm_by_date?: string;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
};
type Shipment = {
    external_shipment_id?: number;
    priority?: number;
    meta?: any;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
};
type BillingInfo = {
    primary_email: string;
    state_code: string;
    pincode: string;
    country: string;
    country_code: string;
    gender?: string;
    address2?: string;
    customer_code?: string;
    house_no: string;
    first_name: string;
    alternate_mobile_number?: string;
    floor_no: string;
    last_name?: string;
    external_customer_code?: string;
    city: string;
    state: string;
    address1: string;
    title?: string;
    middle_name?: string;
    alternate_email?: string;
    primary_mobile_number: string;
};
type CreateOrderAPI = {
    application_id?: string;
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    charges: Charge[];
    external_creation_date?: string;
    external_order_id?: string;
    payment_info: PaymentInfo;
    currency_info: any;
    meta?: any;
    shipments: Shipment[];
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    meta?: string;
    request_id?: string;
    info?: any;
    stack_trace?: string;
    message: string;
    status: number;
    exception?: string;
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
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    lock_states?: string;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    logo_url?: any;
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
    manifest_id: string;
    consent_url: string;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type GetSearchWordsData = {
    result?: any;
    uid?: string;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
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
    result: SearchKeywordResult;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    results?: any[];
    uid?: string;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
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
type AutocompleteResult = {
    _custom_json?: any;
    logo?: Media;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    min_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity: number;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    meta?: any;
    choice: string;
    slug: string;
    is_active: boolean;
    name: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    created_by?: any;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
    id?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    meta?: any;
    choice: string;
    slug: string;
    is_active: boolean;
    name: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    created_by?: any;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    value?: string;
    display?: string;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    currency?: string;
    min_effective?: number;
    max_marked?: number;
};
type LimitedProductData = {
    sizes?: string[];
    identifier?: any;
    uid?: number;
    short_description?: string;
    name?: string;
    country_of_origin?: string;
    item_code?: string;
    price?: any;
    quantity?: number;
    images?: string[];
    slug?: string;
    attributes?: any;
};
type GetProducts = {
    min_quantity?: number;
    allow_remove?: boolean;
    sizes?: Size[];
    auto_select?: boolean;
    price?: Price;
    auto_add_to_cart?: boolean;
    product_details?: LimitedProductData;
    max_quantity?: number;
    product_uid?: number;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    meta?: any;
    choice?: string;
    slug?: string;
    is_active?: boolean;
    name?: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    logo?: string;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    meta?: any;
    choice: string;
    slug: string;
    is_active: boolean;
    name: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    company_id?: number;
    modified_by?: any;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    guide?: Guide;
    modified_on?: string;
    name: string;
    subtitle?: string;
    title: string;
    tag?: string;
    created_by?: any;
    active?: boolean;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
    id?: string;
    description?: string;
    brand_id?: number;
};
type SizeGuideResponse = {
    guide?: any;
    modified_on?: string;
    name?: string;
    subtitle?: string;
    tag?: string;
    title?: string;
    created_by?: any;
    active?: boolean;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
    id?: string;
    brand_id?: number;
};
type MetaFields = {
    value: string;
    key: string;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type ApplicationItemResponse = {
    alt_text?: any;
    seo?: SEO;
    moq?: MOQ;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
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
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    key?: string;
    slug?: string;
    name: string;
    logo?: string;
    is_active: boolean;
    unit?: string;
    display_type: string;
    priority: number;
};
type AppConfigurationDetail = {
    slug: string;
    name?: string;
    is_default: boolean;
    app_id: string;
    logo?: string;
    template_slugs?: string[];
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    is_default: boolean;
    app_id: string;
    default_key: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
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
    detail?: any;
    compare?: any;
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
    units?: any[];
    display?: string;
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    sort?: string;
    condition?: string;
    value?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    key: string;
    type: string;
    name?: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    display_name?: string;
    priority: number;
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
    key: string;
    subtitle?: string;
    size?: ProductSize;
    title?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    name: string;
    size: ProductSize;
    logo?: string;
    is_active: boolean;
    display_type: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    config_type: string;
    type?: string;
    modified_on?: string;
    id?: string;
    app_id: string;
    listing?: ConfigurationListing;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_type: string;
    type?: string;
    modified_on?: string;
    app_id: string;
    listing?: ConfigurationListing;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
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
    count?: number;
    display_format?: string;
    selected_min?: number;
    query_format?: string;
    currency_symbol?: string;
    selected_max?: number;
    min?: number;
    value: any;
    display: string;
    currency_code?: string;
    is_selected: boolean;
    max?: number;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    logo?: string;
    display: string;
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
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    meta?: any;
    cron?: any;
    app_id?: string;
    banners?: ImageUrls;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    uid?: string;
    allow_sort?: boolean;
    badge?: any;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type?: string;
    action?: Action;
    description?: string;
    name?: string;
    logo?: Media1;
    priority?: number;
    _schedule?: any;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    name?: string;
    display?: string;
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
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type UserInfo = {
    uid?: string;
    email?: string;
    user_id?: string;
    username?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type CreateCollection = {
    sort_on?: string;
    _locale_language?: any;
    meta?: any;
    app_id: string;
    banners: CollectionBanner;
    created_by?: UserInfo;
    is_active?: boolean;
    slug: string;
    _custom_json?: any;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    badge?: CollectionBadge;
    tags?: string[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type: string;
    is_visible?: boolean;
    published?: boolean;
    description?: string;
    name: string;
    seo?: SeoDetail;
    logo: CollectionImage;
    priority?: number;
    _schedule?: CollectionSchedule;
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    sort_on?: string;
    meta?: any;
    cron?: any;
    app_id?: string;
    banners?: ImageUrls;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    badge?: any;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type?: string;
    description?: string;
    name?: string;
    logo?: BannerImage;
    priority?: number;
    _schedule?: any;
};
type CollectionDetailResponse = {
    meta?: any;
    query?: CollectionQuery[];
    type?: string;
    slug?: string;
    cron?: any;
    name?: string;
    app_id?: string;
    banners?: ImageUrls;
    allow_sort?: boolean;
    tag?: string[];
    badge?: any;
    logo?: Media1;
    visible_facets_keys?: string[];
    is_active?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    description?: string;
    priority?: number;
};
type UpdateCollection = {
    sort_on?: string;
    _locale_language?: any;
    meta?: any;
    banners?: CollectionBanner;
    is_active?: boolean;
    slug?: string;
    _custom_json?: any;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    badge?: CollectionBadge;
    tags?: string[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type?: string;
    is_visible?: boolean;
    published?: boolean;
    description?: string;
    name?: string;
    seo?: SeoDetail;
    logo?: CollectionImage;
    priority?: number;
    _schedule?: CollectionSchedule;
    modified_by?: UserInfo;
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
    uid?: number;
    logo?: Media1;
    action?: Action;
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    similars?: string[];
    item_code?: string;
    slug: string;
    rating?: number;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    uid?: number;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    discount?: string;
    promo_meta?: any;
    brand?: ProductBrand;
    type?: string;
    rating_count?: number;
    item_type?: string;
    price?: ProductListingPrice;
    highlights?: string[];
    sellable?: boolean;
    description?: string;
    teaser_tag?: any;
    name?: string;
    image_nature?: string;
    tryouts?: string[];
    product_online_date?: string;
    medias?: Media1[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
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
    total_sizes?: number;
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    total_articles?: number;
    available_articles?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    opt_level: string;
    company_id?: number;
    store_ids?: number[];
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    enabled: boolean;
    modified_on: number;
    opt_level: string;
    company_id: number;
    created_by?: any;
    store_ids: number[];
    platform: string;
    brand_ids: number[];
    modified_by?: any;
    created_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    total_article?: number;
    company_id?: number;
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
    additional_contacts?: any[];
    store_type?: string;
    manager?: any;
    modified_on?: string;
    timing?: any;
    name?: string;
    documents?: any[];
    uid?: number;
    display_name?: string;
    store_code?: string;
    company_id?: number;
    created_on?: string;
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
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    type: string;
    allowed_values?: string[];
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    multi?: boolean;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    name?: string;
    departments?: string[];
    logo?: string;
    schema?: AttributeMaster;
    slug?: string;
    id?: string;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    errors?: any;
    message?: string;
};
type UserSerializer = {
    uid?: string;
    user_id?: string;
    username?: string;
    _id?: string;
    contact?: string;
};
type GetDepartment = {
    synonyms?: string[];
    page_no?: number;
    slug?: string;
    search?: string;
    uid?: number;
    name?: string;
    modified_on?: string;
    priority_order?: number;
    item_type?: string;
    logo?: string;
    created_by?: UserSerializer;
    page_size?: number;
    is_active?: boolean;
    created_on?: string;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    errors?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    platforms?: any;
    _cls?: string;
    slug?: string;
    uid?: number;
    name: string;
    priority_order: number;
    logo: string;
    tags?: string[];
    is_active?: boolean;
    _custom_json?: any;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    synonyms?: any[];
    _custom_json?: any;
    modified_on: string;
    is_active?: boolean;
    uid?: number;
    name: any;
    _cls?: any;
    priority_order: number;
    created_by?: UserDetail;
    verified_on?: string;
    logo: string;
    slug?: any;
    created_on: string;
    _id?: any;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
};
type ProductTemplate = {
    is_active?: boolean;
    modified_on?: string;
    name?: string;
    departments?: string[];
    is_physical: boolean;
    is_expirable: boolean;
    is_archived?: boolean;
    tag?: string;
    logo?: string;
    categories?: string[];
    created_by?: any;
    slug: string;
    created_on?: string;
    modified_by?: any;
    description?: string;
    attributes?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    item_code?: any;
    command?: any;
    slug?: any;
    is_active?: any;
    custom_order?: any;
    short_description?: any;
    variants?: any;
    media?: any;
    tags?: any;
    product_publish?: any;
    product_group_tag?: any;
    multi_size?: any;
    hsn_code?: any;
    item_type?: any;
    trader_type?: any;
    size_guide?: any;
    highlights?: any;
    category_slug?: any;
    description?: any;
    no_of_boxes?: any;
    return_config?: any;
    teaser_tag?: any;
    sizes?: any;
    name?: any;
    country_of_origin?: any;
    trader?: any;
    currency?: any;
    is_dependent?: any;
    brand_uid?: any;
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
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    is_active?: boolean;
    name?: string;
    departments?: string[];
    is_physical: boolean;
    is_expirable: boolean;
    is_archived?: boolean;
    tag?: string;
    logo?: string;
    categories?: string[];
    slug: string;
    id?: string;
    description?: string;
    attributes?: string[];
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
type ProductDownloadItemsData = {
    brand?: string[];
    type?: string;
    templates?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    completed_on?: string;
    trigger_on?: string;
    status?: string;
    seller_id?: number;
    url?: string;
    task_id?: string;
    created_by?: VerifiedBy;
    id?: string;
    template_tags?: any;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Category = {
    synonyms?: string[];
    level: number;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    modified_on?: string;
    uid?: number;
    departments: number[];
    name: string;
    media?: Media2;
    created_by?: any;
    tryouts?: string[];
    slug?: string;
    created_on?: string;
    hierarchy?: Hierarchy[];
    modified_by?: any;
    id?: string;
    priority?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    level: number;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    name: string;
    departments: number[];
    media?: Media2;
    tryouts?: string[];
    slug?: string;
    hierarchy?: Hierarchy[];
    priority?: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type Product = {
    primary_color?: string;
    departments?: number[];
    item_code?: string;
    slug?: string;
    is_active?: boolean;
    _custom_json?: any;
    id?: string;
    custom_order?: any;
    all_sizes?: any[];
    tax_identifier?: any;
    uid?: number;
    media?: Media1[];
    short_description?: string;
    template_tag?: string;
    variants?: any;
    color?: string;
    product_publish?: ProductPublished;
    multi_size?: boolean;
    hsn_code?: string;
    brand?: Brand;
    is_set?: boolean;
    is_physical?: boolean;
    item_type?: string;
    size_guide?: string;
    highlights?: string[];
    category_slug?: string;
    description?: string;
    sizes?: any[];
    name?: string;
    country_of_origin?: string;
    image_nature?: string;
    is_expirable?: boolean;
    currency?: string;
    is_dependent?: boolean;
    images?: Image[];
    category_uid?: number;
    l3_mapping?: string[];
    brand_uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    address?: string[];
    name?: string;
    type?: string;
};
type ProductCreateUpdate = {
    requester?: string;
    departments: number[];
    item_code: any;
    slug: string;
    company_id: number;
    is_active?: boolean;
    _custom_json?: any;
    net_quantity?: NetQuantity;
    custom_order?: CustomOrder;
    tax_identifier: TaxIdentifier;
    bulk_job_id?: string;
    uid?: number;
    short_description?: string;
    template_tag: string;
    variants?: any;
    media?: Media1[];
    tags?: string[];
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    multi_size?: boolean;
    is_set?: boolean;
    item_type: string;
    action?: string;
    size_guide?: string;
    highlights?: string[];
    category_slug: string;
    description?: string;
    no_of_boxes?: number;
    variant_media?: any;
    teaser_tag?: TeaserTag;
    return_config: ReturnConfig;
    change_request_id?: any;
    name: string;
    country_of_origin: string;
    trader: Trader[];
    currency: string;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
    brand_uid: number;
};
type AttributeMasterSerializer = {
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    details: AttributeMasterDetails;
    departments: string[];
    created_by?: any;
    slug: string;
    synonyms?: any;
    modified_on?: string;
    tags?: string[];
    suggestion?: string;
    is_nested?: boolean;
    raw_key?: string;
    schema: AttributeMaster;
    created_on?: string;
    unit?: string;
    description?: string;
    name?: string;
    variant?: boolean;
    logo?: string;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    modified_on?: string;
    total?: number;
    cancelled_records?: string[];
    template_tag?: string;
    file_path?: string;
    failed?: number;
    company_id?: number;
    failed_records?: string[];
    is_active?: boolean;
    created_on?: string;
    created_by?: UserDetail1;
    modified_by?: UserDetail1;
    template?: ProductTemplate;
    stage?: string;
    succeed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    uid?: string;
    email?: string;
    user_id?: string;
    username?: string;
};
type BulkJob = {
    cancelled?: number;
    modified_on?: string;
    total: number;
    cancelled_records?: any[];
    template_tag?: string;
    custom_template_tag?: string;
    file_path?: string;
    created_by?: UserInfo1;
    company_id: number;
    failed?: number;
    is_active?: boolean;
    created_on: string;
    failed_records?: any[];
    modified_by?: UserInfo1;
    stage?: string;
    tracking_url?: string;
    succeed?: number;
};
type BulkResponse = {
    batch_id: string;
    modified_on?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    created_on: string;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    data: any[];
    template_tag: string;
    batch_id: string;
    company_id: number;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    cancelled?: number;
    modified_on?: string;
    is_active?: boolean;
    total?: number;
    id?: string;
    file_path?: string;
    created_by?: UserCommon;
    failed?: number;
    failed_records?: string[];
    cancelled_records?: string[];
    created_on?: string;
    company_id?: number;
    modified_by?: UserCommon;
    retry?: number;
    stage?: string;
    tracking_url?: string;
    succeed?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    url: string;
    user: any;
    company_id?: number;
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
type InventoryResponse = {
    item_id?: number;
    price_effective?: number;
    uid?: string;
    inventory_updated_on?: string;
    size?: string;
    price?: number;
    currency?: string;
    seller_identifier?: string;
    quantity?: number;
    identifiers?: any;
    store?: any;
    price_transfer?: number;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
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
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type InvSize = {
    item_width?: number;
    price_effective: number;
    is_set?: boolean;
    item_length?: number;
    size: string;
    price?: number;
    item_weight_unit_of_measure?: string;
    set?: InventorySet;
    expiration_date?: string;
    identifiers: GTIN[];
    quantity: number;
    currency: string;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    price_transfer?: number;
    item_height?: number;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type DimensionResponse = {
    is_default: boolean;
    height: number;
    unit: string;
    width: number;
    length: number;
};
type PriceMeta = {
    currency: string;
    updated_at?: string;
    transfer: number;
    marked: number;
    tp_notes?: any;
    effective: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    meta?: any;
    track_inventory?: boolean;
    size: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    quantities?: Quantities;
    _custom_json?: any;
    weight: WeightResponse;
    item_id: number;
    identifier: any;
    tax_identifier?: any;
    total_quantity: number;
    raw_meta?: any;
    uid: string;
    seller_identifier: string;
    tags?: string[];
    fynd_article_code: string;
    fragile: boolean;
    brand: BrandMeta;
    dimension: DimensionResponse;
    is_set?: boolean;
    price: PriceMeta;
    store: StoreMeta;
    manufacturer: ManufacturerResponse;
    expiration_date?: string;
    return_config?: ReturnConfig1;
    company: CompanyMeta;
    country_of_origin: string;
    trader?: Trader1[];
    set?: InventorySet;
    added_on_store?: string;
    modified_by?: UserSerializer;
    stage?: string;
    fynd_item_code: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled?: number;
    is_active?: boolean;
    modified_on?: string;
    total?: number;
    cancelled_records?: string[];
    file_path?: string;
    created_by?: any;
    failed?: number;
    failed_records?: string[];
    company_id?: number;
    created_on?: string;
    modified_by?: any;
    id?: string;
    stage?: string;
    succeed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    price_effective?: number;
    price?: number;
    seller_identifier: string;
    price_marked?: number;
    currency?: string;
    item_weight_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportJob = {
    completed_on?: string;
    trigger_on?: string;
    status?: string;
    seller_id: number;
    url?: string;
    task_id: string;
    request_params?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    trigger_on?: string;
    status?: string;
    seller_id: number;
    task_id: string;
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
    total_quantity?: number;
    price_effective?: number;
    seller_identifier: string;
    price_marked?: number;
    tags?: string[];
    expiration_date?: string;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    tax1?: number;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    modified_on?: string;
    threshold1?: number;
    threshold2?: number;
    company_id?: number;
    id?: string;
    tax2?: number;
    hs2_code?: string;
};
type PageResponse = {
    item_total?: number;
    current?: string;
    size?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    tax1: number;
    hsn_code: string;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    is_active?: boolean;
    threshold1: number;
    threshold2?: number;
    uid?: number;
    company_id: number;
    tax2?: number;
    hs2_code: string;
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
    effective_date: string;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    hsn_code: string;
    type: string;
    modified_on?: string;
    country_code: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    description: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    uid?: number;
    name?: string;
    action?: Action;
    departments?: string[];
    banners?: ImageUrls;
    discount?: string;
    logo?: Media;
    slug?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
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
    childs?: any[];
    name?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
};
type SecondLevelChild = {
    childs?: ThirdLevelChild[];
    name?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
};
type Child = {
    childs?: SecondLevelChild[];
    name?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    _custom_json?: any;
};
type CategoryItems = {
    childs?: Child[];
    name?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
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
    page: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: any;
};
type ProductDetail = {
    similars?: string[];
    item_code?: string;
    slug: string;
    rating?: number;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    uid?: number;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    promo_meta?: any;
    brand?: ProductBrand;
    type?: string;
    rating_count?: number;
    item_type?: string;
    highlights?: string[];
    description?: string;
    teaser_tag?: any;
    name?: string;
    image_nature?: string;
    tryouts?: string[];
    product_online_date?: string;
    medias?: Media1[];
};
type InventoryPage = {
    item_total: number;
    type: string;
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type GetAddressSerializer = {
    latitude?: number;
    city?: string;
    country?: string;
    address2?: string;
    pincode?: number;
    longitude?: number;
    landmark?: string;
    country_code?: string;
    address1?: string;
    address_type?: string;
    state?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    company_type?: string;
    created_by?: UserSerializer2;
    verified_on?: string;
    business_type?: string;
    created_on?: string;
    modified_by?: UserSerializer2;
    stage?: string;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer2;
};
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    code: string;
    warnings?: any;
    created_by?: UserSerializer1;
    verified_on?: string;
    display_name: string;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer1;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    modified_on?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    documents?: Document[];
    phone_number: string;
    store_type?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    created_on?: string;
    address: GetAddressSerializer;
    integration_type?: LocationIntegrationType;
    company?: GetCompanySerializer;
    name: string;
    modified_by?: UserSerializer1;
    stage?: string;
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
type ApplicationStoreJson = {
    _custom_json: any;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
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
type GetCompanyProfileSerializerResponse = {
    modified_on?: string;
    warnings?: any;
    mode?: string;
    addresses?: GetAddressSerializer[];
    contact_details?: ContactDetails;
    created_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    documents?: Document[];
    notification_emails?: string[];
    uid: number;
    stage?: string;
    modified_by?: UserSerializer;
    franchise_enabled?: boolean;
    company_type: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    name?: string;
    created_on?: string;
    business_details?: BusinessDetails;
    business_type: string;
    business_country_info?: BusinessCountryInfo;
    business_info?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    city: string;
    country_code?: string;
    latitude: number;
    address2?: string;
    longitude: number;
    landmark?: string;
    country: string;
    address1: string;
    address_type: string;
    state: string;
    pincode: number;
};
type UpdateCompany = {
    _custom_json?: any;
    name?: string;
    reject_reason?: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer1[];
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    franchise_enabled?: boolean;
    business_type?: string;
    company_type?: string;
    notification_emails?: string[];
    contact_details?: ContactDetails;
    documents?: Document[];
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
    product?: DocumentsObj;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    stage?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    modified_on?: string;
    synonyms?: string[];
    warnings?: any;
    mode?: string;
    description?: string;
    created_by?: UserSerializer;
    _custom_json?: any;
    uid?: number;
    _locale_language?: any;
    stage?: string;
    logo?: string;
    modified_by?: UserSerializer;
    reject_reason?: string;
    banner?: BrandBannerSerializer;
    verified_on?: string;
    verified_by?: UserSerializer;
    slug_key?: string;
    name: string;
    created_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    logo: string;
    _custom_json?: any;
    synonyms?: string[];
    name: string;
    company_id?: number;
    banner?: BrandBannerSerializer;
    description?: string;
    uid?: number;
    brand_tier?: string;
    _locale_language?: any;
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
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    name?: string;
    created_on?: string;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    business_type: string;
    company_type: string;
    verified_on?: string;
    uid?: number;
    notification_emails?: string[];
    details?: CompanyDetails;
    business_country_info?: BusinessCountryInfo;
    stage?: string;
};
type CompanyBrandSerializer = {
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    reject_reason?: string;
    warnings?: any;
    verified_on?: string;
    uid?: number;
    company?: CompanySerializer;
    stage?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: number[];
    uid?: number;
};
type LocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    code: string;
    store_type?: string;
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    documents?: Document[];
    uid?: number;
    company: number;
    address: GetAddressSerializer;
    notification_emails?: string[];
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
type RuleDefinition = {
    type: string;
    is_exact?: boolean;
    calculate_on: string;
    scope?: string[];
    applicable_on: string;
    value_type: string;
    auto_apply?: boolean;
    currency_code?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    post_order?: PostOrder;
    uses?: UsesRestriction;
    payments?: any;
    price_range?: PriceRange;
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    user_groups?: number[];
    platforms?: string[];
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    start?: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
    cron?: string;
};
type Rule = {
    key?: number;
    value?: number;
    discount_qty?: number;
    min?: number;
    max?: number;
};
type CouponAdd = {
    rule_definition: RuleDefinition;
    code: string;
    ownership: Ownership;
    identifiers: Identifier;
    state?: State;
    tags?: string[];
    validation?: Validation;
    type_slug: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    validity: Validity;
    action?: CouponAction;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    rule: Rule[];
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
    rule_definition: RuleDefinition;
    code: string;
    ownership: Ownership;
    identifiers: Identifier;
    state?: State;
    tags?: string[];
    validation?: Validation;
    type_slug: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    validity: Validity;
    action?: CouponAction;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than?: number;
    greater_than?: number;
    equals?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    all_items?: boolean;
    item_brand?: number[];
    item_size?: string[];
    item_exclude_id?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    cart_total?: CompareObject;
    item_exclude_sku?: string[];
    item_sku?: string[];
    item_exclude_brand?: number[];
    item_company?: number[];
    item_category?: number[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    available_zones?: string[];
    item_exclude_category?: number[];
    item_exclude_company?: number[];
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DiscountOffer = {
    apportion_discount?: boolean;
    code?: string;
    discount_price?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    discount_amount?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
    max_usage_per_transaction?: number;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type PromotionSchedule = {
    start: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
    published: boolean;
    cron?: string;
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
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
    user_id?: string[];
    user_groups?: number[];
    order_quantity?: number;
    user_registered?: UserRegistered;
    platforms?: string[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionListItem = {
    stackable?: boolean;
    currency?: string;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    code?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    calculate_on?: string;
    application_id: string;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    ownership: Ownership1;
    promotion_type: string;
    mode: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    stackable?: boolean;
    currency?: string;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    code?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    calculate_on?: string;
    application_id: string;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    ownership: Ownership1;
    promotion_type: string;
    mode: string;
};
type PromotionUpdate = {
    stackable?: boolean;
    currency?: string;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    code?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    calculate_on?: string;
    application_id: string;
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    ownership: Ownership1;
    promotion_type: string;
    mode: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    type?: string;
    entity_slug?: string;
    is_hidden?: boolean;
    description?: string;
    example?: string;
    subtitle?: string;
    created_on?: string;
    title?: string;
    modified_on?: string;
    entity_type?: string;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    code?: string;
    type?: string;
    message?: string;
    is_applied?: boolean;
    value?: number;
    uid?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    applicable?: number;
    description?: string;
};
type DisplayBreakup = {
    key?: string;
    message?: string[];
    value?: number;
    display?: string;
    currency_symbol?: string;
    currency_code?: string;
};
type RawBreakup = {
    coupon?: number;
    vog?: number;
    subtotal?: number;
    mrp_total?: number;
    cod_charge?: number;
    discount?: number;
    delivery_charge?: number;
    you_saved?: number;
    fynd_cash?: number;
    convenience_fee?: number;
    total?: number;
    gst_charges?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    currency_code?: string;
    effective?: number;
    marked?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    quantity?: number;
    store?: BaseInfo;
    type?: string;
    size?: string;
    parent_item_identifiers?: any;
    uid?: string;
    extra_meta?: any;
    price?: ArticlePriceInfo;
    seller?: BaseInfo;
    product_group_tags?: string[];
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
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
    type?: string;
    name?: string;
    categories?: CategoryInfo[];
    uid?: number;
    images?: ProductImage[];
    action?: ProductAction;
    brand?: BaseInfo;
    slug?: string;
};
type ProductPrice = {
    effective?: number;
    add_on?: number;
    selling?: number;
    currency_symbol?: string;
    currency_code?: string;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_slug?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    offer_text?: string;
    promotion_name?: string;
    amount?: number;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles;
    promo_id?: string;
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    out_of_stock?: boolean;
    is_valid?: boolean;
    deliverable?: boolean;
    sizes?: string[];
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    quantity?: number;
    identifiers: CartProductIdentifer;
    article?: ProductArticle;
    key?: string;
    product?: CartProduct;
    message?: string;
    coupon_message?: string;
    discount?: string;
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
    promotions_applied?: AppliedPromotion[];
    bulk_offer?: any;
    availability?: ProductAvailability;
    is_set?: boolean;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    landmark?: string;
    area_code_slug?: string;
    state?: string;
    address_type?: string;
    phone?: number;
    name?: string;
    country_code?: string;
    city?: string;
    address?: string;
    meta?: any;
    area_code: string;
    area?: string;
    pincode?: number;
    country?: string;
    email?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    message?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
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
    quantity?: number;
    size: string;
    cod_charges: number;
    price_effective: number;
    files?: OpenApiFiles[];
    discount: number;
    product_id: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_marked: number;
    cashback_applied: number;
    extra_meta?: any;
    delivery_charges: number;
    loyalty_discount?: number;
    coupon_effective_discount: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    affiliate_order_id?: string;
    comment?: string;
    coupon_code: string;
    cart_value: number;
    currency_code?: string;
    loyalty_discount?: number;
    gstin?: string;
    delivery_charges: number;
    coupon?: string;
    cod_charges: number;
    shipping_address?: ShippingAddress;
    payment_mode?: string;
    payment_methods: MultiTenderPaymentMethod[];
    billing_address: ShippingAddress;
    employee_discount?: any;
    coupon_value: number;
    cashback_applied: number;
    files?: OpenApiFiles[];
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_id: string;
    order_ref_id?: string;
    message?: string;
};
type AbandonedCart = {
    checkout_mode?: string;
    is_default: boolean;
    discount?: number;
    cashback: any;
    comment?: string;
    app_id?: string;
    pick_up_customer_details?: any;
    delivery_charges?: any;
    buy_now?: boolean;
    coupon?: any;
    cod_charges?: any;
    fc_index_map?: number[];
    payments?: any;
    is_archive?: boolean;
    last_modified: string;
    payment_methods?: any[];
    merge_qty?: boolean;
    fynd_credits?: any;
    expire_at: string;
    order_id?: string;
    user_id: string;
    is_active?: boolean;
    _id: string;
    created_on: string;
    cart_value?: number;
    gstin?: string;
    bulk_coupon_discount?: number;
    promotion?: any;
    payment_mode?: string;
    meta?: any;
    uid: number;
    articles: any[];
    shipments?: any[];
};
type AbandonedCartResponse = {
    message?: string;
    result?: any;
    items?: AbandonedCart[];
    success?: boolean;
    page?: Page;
};
type AddProductCart = {
    pos?: boolean;
    quantity?: number;
    item_size?: string;
    seller_id?: number;
    item_id?: number;
    store_id?: number;
    display?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    article_assignment?: any;
    article_id?: string;
    product_group_tags?: string[];
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
    checkout_mode?: string;
    message?: string;
    last_modified?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    coupon_text?: string;
    gstin?: string;
    buy_now?: boolean;
    id?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    quantity?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
    item_id?: number;
    parent_item_identifiers?: any;
    item_index?: number;
    extra_meta?: any;
    article_id?: string;
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
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
