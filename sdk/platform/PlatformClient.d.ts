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
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, UserDataInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, TrackingList, DPDetailsData, UserDetailsData, ShipmentPayments, ShipmentStatusData, BagGST, OrderBrandName, PlatformDeliveryAddress, Identifier, FinancialBreakup, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBagArticle, BagConfigs, OrderBags, FulfillingStore, OrderDetailsData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagGSTDetails, Attributes, Item, AffiliateMeta, PDFLinks, ShipmentTimeStamp, BuyerDetails, DebugInfo, EInvoice, EinvoiceInfo, LockData, Formatted, ShipmentMeta, AffiliateDetails, Brand, StoreAddress, EInvoicePortalDetails, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, ArticleDetails, AffiliateBagDetails, BagReturnableCancelableStatus, Dimensions, Weight, ReturnConfig, Article, B2BPODetails, BagMeta, Dates, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderPriority, UserData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, ShippingInfo, Tax, Charge, PaymentMethod, PaymentInfo, TaxInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQ, ApplicationItemResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionSchedule, CollectionImage, CollectionBanner, UserInfo, SeoDetail, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, ProductPublished, Logo, Product, ProductListingResponse, CustomOrder, NetQuantity, TaxIdentifier, Trader, ProductPublish, TeaserTag, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ManufacturerResponse, DimensionResponse, Trader1, PriceMeta, CompanyMeta, BrandMeta, ReturnConfig1, WeightResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, UserSerializer1, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, Ownership, Rule, Validity, DisplayMetaDict, DisplayMeta, CouponSchedule, CouponAuthor, State, PriceRange, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, Restrictions, CouponAction, RuleDefinition, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, Ownership1, DisplayMeta1, PromotionSchedule, PromotionDateMeta, Visibility, PromotionAuthor, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, RawBreakup, DisplayBreakup, CartBreakup, ProductPrice, ProductPriceInfo, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductIdentifer, PromoMeta, ProductAvailability, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
import DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
    excluded_fields: string[];
    app_id: string;
    success: boolean;
    aggregators?: any[];
    display_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    secret: string;
    config_type: string;
    key: string;
    is_active?: boolean;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
    display_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    exp_month?: number;
    intent_app?: IntentApp[];
    card_name?: string;
    timeout?: number;
    name?: string;
    fynd_vpa?: string;
    aggregator_name: string;
    card_issuer?: string;
    intent_app_error_list?: string[];
    card_isin?: string;
    retry_count?: number;
    card_type?: string;
    card_id?: string;
    intent_flow?: boolean;
    exp_year?: number;
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    card_fingerprint?: string;
    card_token?: string;
    expired?: boolean;
    code?: string;
    card_number?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    display_priority?: number;
    card_brand?: string;
    merchant_code?: string;
    nickname?: string;
    display_name?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_brand_image?: string;
};
type RootPaymentMode = {
    display_priority: number;
    is_pay_by_card_pl?: boolean;
    logo?: string;
    name: string;
    logo_url?: PaymentModeLogo;
    save_card?: boolean;
    display_name: string;
    list?: PaymentModeList[];
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    is_default: boolean;
    transfer_type: string;
    customers: any;
    payouts_aggregators: any[];
    is_active: boolean;
    unique_transfer_no: any;
    more_attributes: any;
};
type PayoutBankDetails = {
    state?: string;
    city?: string;
    account_holder?: string;
    ifsc_code: string;
    branch_name?: string;
    account_type: string;
    pincode?: number;
    bank_name?: string;
    country?: string;
    account_no?: string;
};
type PayoutRequest = {
    aggregator: string;
    transfer_type: string;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    users: any;
};
type PayoutResponse = {
    aggregator: string;
    transfer_type: string;
    bank_details: any;
    payment_status: string;
    payouts: any;
    success: boolean;
    is_active: boolean;
    unique_transfer_no: string;
    users: any;
    created: boolean;
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
    success: boolean;
    data: any[];
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
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_holder: string;
    ifsc_code: string;
    branch_name: string;
    bank_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    bank_name: string;
    modified_on: string;
    id: number;
    comment?: string;
    mobile?: string;
    account_holder: string;
    title: string;
    created_on: string;
    subtitle: string;
    beneficiary_id: string;
    transfer_mode: string;
    delights_user_name?: string;
    address: string;
    ifsc_code: string;
    branch_name?: string;
    is_active: boolean;
    display_name: string;
    account_no: string;
    email: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    order_id?: string;
    current_status?: string;
    extra_meta?: any;
    payment_id?: string;
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
    message: string;
    order_id: string;
    success: boolean;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    type: string;
    text: string;
};
type UserDataInfo = {
    first_name?: string;
    name?: string;
    gender?: string;
    avis_user_id?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    email?: string;
    mobile?: string;
    last_name?: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    color?: string;
    can_return?: boolean;
    id?: number;
    name?: string;
    l1_category?: string[];
    images?: string[];
    code?: string;
    l3_category_name?: string;
    image?: string[];
    size?: string;
    department_id?: number;
    l3_category?: number;
};
type Prices = {
    refund_amount?: number;
    cashback_applied?: number;
    amount_paid?: number;
    cashback?: number;
    price_marked?: number;
    cod_charges?: number;
    fynd_credits?: number;
    tax_collected_at_source?: number;
    discount?: number;
    value_of_good?: number;
    delivery_charge?: number;
    coupon_value?: number;
    price_effective?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code: string;
};
type BagUnit = {
    can_cancel?: boolean;
    can_return?: boolean;
    item?: PlatformItem;
    status: any;
    ordering_channel: string;
    item_quantity: number;
    bag_id: number;
    total_shipment_bags: number;
    prices?: Prices;
    gst?: GSTDetailsData;
    shipment_id: string;
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
    hex_code: string;
    status: string;
    actual_status: string;
    title: string;
    ops_status: string;
};
type ShipmentItem = {
    payment_methods?: any;
    total_shipments_in_order: number;
    channel?: any;
    created_at: string;
    fulfilling_centre: string;
    id: string;
    application?: any;
    user?: UserDataInfo;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    shipment_created_at: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    sla?: any;
    prices?: Prices;
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
type BagStateMapper = {
    notify_customer?: boolean;
    display_name: string;
    app_facing?: boolean;
    name: string;
    bs_id: number;
    app_display_name?: string;
    app_state_name?: string;
    is_active?: boolean;
    state_type: string;
    journey_type: string;
};
type BagStatusHistory = {
    delivery_awb_number?: string;
    display_name?: boolean;
    forward?: boolean;
    created_at: string;
    bsh_id: number;
    status: string;
    updated_at?: string;
    kafka_sync?: boolean;
    store_id: number;
    bag_state_mapper: BagStateMapper;
    state_id: number;
    app_display_name?: boolean;
    bag_id: number;
    reasons?: any[];
    delivery_partner_id?: number;
    state_type?: string;
    shipment_id: string;
};
type TrackingList = {
    status: string;
    text: string;
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
};
type DPDetailsData = {
    eway_bill_id?: string;
    awb_no?: string;
    id?: string;
    name?: string;
    gst_tag?: string;
    track_url?: string;
    country?: string;
    pincode?: string;
};
type UserDetailsData = {
    name: string;
    address: string;
    state: string;
    email: string;
    city: string;
    country: string;
    pincode: string;
    phone: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode: string;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    id?: number;
    bag_list?: number[];
    shipment_id?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    brand_calculated_amount?: number;
    gst_fee?: number;
    gst_tax_percentage?: number;
    value_of_good?: number;
    hsn_code?: string;
    gstin_code?: string;
};
type OrderBrandName = {
    id: number;
    logo: string;
    modified_on?: number;
    brand_name: string;
    created_on: number;
    company: string;
};
type PlatformDeliveryAddress = {
    address_category?: string;
    latitude?: number;
    created_at?: string;
    version?: string;
    updated_at?: string;
    contact_person?: string;
    longitude?: number;
    state?: string;
    address1?: string;
    area?: string;
    landmark?: string;
    email?: string;
    city?: string;
    address2?: string;
    address_type?: string;
    country?: string;
    pincode?: string;
    phone?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    added_to_fynd_cash: boolean;
    fynd_credits: number;
    size: string;
    value_of_good: number;
    coupon_value: number;
    price_effective: number;
    amount_paid_roundoff?: number;
    amount_paid: number;
    cashback: number;
    pm_price_split: any;
    gst_tag: string;
    transfer_price: number;
    delivery_charge: number;
    refund_credit: number;
    cashback_applied: number;
    cod_charges: number;
    tax_collected_at_source?: number;
    gst_fee: string;
    discount: number;
    brand_calculated_amount: number;
    promotion_effective_discount: number;
    coupon_effective_discount: number;
    price_marked: number;
    identifiers: Identifier;
    total_units: number;
    gst_tax_percentage: number;
    item_name: string;
    hsn_code: string;
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
    article_quantity?: number;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promo_id?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type BagConfigs = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type OrderBags = {
    gst_details?: BagGST;
    item?: PlatformItem;
    identifier?: string;
    brand?: OrderBrandName;
    current_status?: string;
    display_name?: string;
    can_return?: boolean;
    line_number?: number;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup[];
    applied_promos?: AppliedPromos[];
    seller_identifier?: string;
    can_cancel?: boolean;
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    entity_type?: string;
    quantity?: number;
    prices?: Prices;
    parent_promo_bags?: any;
    bag_id: number;
};
type FulfillingStore = {
    id: string;
    country: string;
    contact_person: string;
    code: string;
    address: string;
    state: string;
    meta: any;
    city: string;
    fulfillment_channel: string;
    store_name: string;
    pincode: string;
    phone: string;
};
type OrderDetailsData = {
    tax_details?: any;
    cod_charges?: string;
    order_date?: string;
    affiliate_id?: string;
    order_value?: string;
    fynd_order_id: string;
    ordering_channel?: string;
    source?: string;
    ordering_channel_logo?: any;
};
type ShipmentInfoResponse = {
    affiliate_shipment_id: string;
    secured_delivery_flag?: string;
    gst_details?: GSTDetailsData;
    order_created_time?: string;
    tracking_url: string;
    bag_status_history?: BagStatusHistory[];
    total_bags?: number;
    tracking_list?: TrackingList[];
    is_packaging_order: boolean;
    invoice: any;
    go_green?: boolean;
    dp_details?: DPDetailsData;
    items: any[];
    billing_details?: UserDetailsData;
    packaging_type?: string;
    payments?: ShipmentPayments;
    shipment_status?: string;
    email_id: string;
    order_type: string;
    user_agent?: string;
    vertical?: string;
    custom_meta?: any[];
    delivery_slot?: any;
    user_info?: any;
    can_return?: boolean;
    fyndstore_emp: any;
    shipment_images?: string[];
    delivery_status: any[];
    replacement_details?: string;
    delivery_details?: UserDetailsData;
    user_id: string;
    pay_button?: string;
    ordering_store: any;
    is_pdsr?: string;
    beneficiary_details?: boolean;
    forward_order_status?: any[];
    mid?: string;
    enable_tracking?: boolean;
    enable_dp_tracking?: string;
    operational_status?: string;
    credit_note_id: string;
    can_cancel?: boolean;
    forward_tracking_list?: any[];
    priority_text?: string;
    coupon?: any;
    current_shipment_status: any;
    status?: ShipmentStatusData;
    escalation?: any;
    is_invoiced: boolean;
    refund_text?: string;
    child_nodes?: string[];
    bags?: OrderBags[];
    payment_mode?: string;
    is_fynd_store?: string;
    prices?: Prices;
    company: any;
    journey_type?: string;
    shipment_id: string;
    lock_status: string;
    total_items?: number;
    order_status: any;
    forward_shipment_status?: any[];
    picked_date?: string;
    is_not_fynd_source: boolean;
    status_progress: number;
    due_date?: string;
    is_fynd_coupon: boolean;
    fulfilling_store?: FulfillingStore;
    refund_details?: any;
    bank_data?: any;
    kirana_store_id?: string;
    order?: OrderDetailsData;
    shipment_quantity?: number;
    platform_logo: boolean;
    can_break: string;
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type PlatformShipment = {
    gst_details?: GSTDetailsData;
    bag_status_history?: BagStatusHistory[];
    total_bags?: number;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    billing_details?: UserDetailsData;
    packaging_type?: string;
    payments?: ShipmentPayments;
    shipment_status?: string;
    user_agent?: string;
    vertical?: string;
    custom_meta?: any[];
    delivery_slot?: any;
    shipment_images?: string[];
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: string;
    operational_status?: string;
    priority_text?: string;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    payment_mode?: string;
    prices?: Prices;
    journey_type?: string;
    shipment_id: string;
    total_items?: number;
    picked_date?: string;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    shipment_quantity?: number;
    platform_logo?: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    custom_meta?: any[];
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    text?: string;
    actions?: any[];
    index?: number;
    total_items?: number;
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
    value?: string;
    name?: string;
    display?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_id?: string;
    meta?: any;
    payment_mode?: string;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
    total_order_value?: number;
};
type OrderListingResponse = {
    total_count?: number;
    page?: Page;
    message?: string;
    lane?: string;
    items?: PlatformOrderItems[];
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
    raw_status?: string;
    shipment_type?: string;
    reason?: string;
    status?: string;
    updated_at?: string;
    account_name?: string;
    meta?: any;
    updated_time?: string;
    awb?: string;
    last_location_recieved_at?: string;
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
    request_details?: any;
    display_name?: string;
    report_type?: string;
    s3_key?: string;
    status?: string;
    report_created_at?: string;
    report_id?: string;
    report_requested_at?: string;
    report_name?: string;
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
    identifier?: string;
    success?: boolean;
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    label?: any;
    invoice?: any;
    company_id?: string;
    invoice_status?: string;
    store_id?: string;
    data?: any;
    do_invoice_label_generated: boolean;
    batch_id: string;
    store_name?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    file_name?: string;
    operation?: string;
    method?: string;
    content_type?: string;
    size?: number;
    file_path?: string;
    cdn?: URL;
    tags?: string[];
    upload?: FileUploadResponse;
    namespace?: string;
};
type bulkListingData = {
    successful?: number;
    company_id?: number;
    successful_shipments?: any[];
    store_id?: number;
    user_name?: string;
    store_name?: string;
    excel_url?: string;
    user_id?: string;
    total?: number;
    processing_shipments?: string[];
    file_name?: string;
    status?: string;
    id?: string;
    failed?: number;
    batch_id?: string;
    failed_shipments?: any[];
    store_code?: string;
    processing?: number;
    uploaded_on?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    current?: number;
    total?: number;
    type?: string;
    size?: number;
    has_previous?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
    page?: BulkListingPage;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    date_range?: DateRange;
    sales_channel_name?: string;
    dp_name?: string;
    stores?: string;
    sales_channels?: string;
    lane?: string;
    dp_ids?: string;
    store_name?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    created_by?: string;
    created_at?: string;
    status?: string;
    company_id?: number;
    filters?: ManifestFilter;
    is_active?: boolean;
};
type ManifestPage = {
    has_next?: boolean;
    current?: string;
    total?: number;
    type?: string;
    size?: string;
    has_previous?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    invoice_id?: string;
    order_id?: string;
    awb?: string;
    item_qty?: number;
    shipment_id?: string;
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
    manifest_id?: string;
    created_by?: string;
    created_at?: string;
    status?: string;
    id?: number;
    company_id?: number;
    user_id?: number;
    uid?: number;
    meta?: ManifestDetailMeta;
    filters?: ManifestFilter;
    is_active?: boolean;
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
    qc_type?: string[];
    id?: number;
    display_name?: string;
    question_set?: QuestionSet[];
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
    company_id?: string;
    processing_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    message?: string;
    user_id?: string;
    success?: string;
    uploaded_on?: string;
    error?: string[];
};
type BagGSTDetails = {
    igst_gst_fee: string;
    cgst_tax_percentage: number;
    hsn_code_id: string;
    is_default_hsn_code?: boolean;
    gst_tag: string;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    brand_calculated_amount: number;
    gst_fee: number;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    value_of_good: number;
    igst_tax_percentage: number;
    hsn_code: string;
    gstin_code?: string;
    sgst_gst_fee: string;
};
type Attributes = {
    primary_color?: string;
    marketer_name?: string;
    name?: string;
    primary_material?: string;
    gender?: string[];
    brand_name?: string;
    marketer_address?: string;
    essential?: string;
    primary_color_hex?: string;
};
type Item = {
    l1_category_id?: number;
    last_updated_at?: string;
    l2_category?: string[];
    webstore_product_url?: string;
    item_id: number;
    size: string;
    brand: string;
    department_id?: number;
    branch_url?: string;
    brand_id: number;
    can_return?: boolean;
    name: string;
    can_cancel?: boolean;
    color?: string;
    slug_key: string;
    l3_category_name?: string;
    code?: string;
    meta?: any;
    attributes: Attributes;
    l3_category?: number;
    l2_category_id?: number;
    l1_category?: string[];
    image: string[];
    gender?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    loyalty_discount?: number;
    employee_discount?: number;
    size_level_total_qty?: number;
    due_date?: string;
    coupon_code?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    quantity?: number;
    order_item_id?: string;
    box_type?: string;
};
type PDFLinks = {
    label_type: string;
    label_a6?: string;
    label?: string;
    invoice?: string;
    label_a4?: string;
    po_invoice?: string;
    credit_note_url?: string;
    invoice_a4?: string;
    invoice_pos?: string;
    label_pos?: string;
    b2b?: string;
    invoice_a6?: string;
    invoice_type: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    name: string;
    address: string;
    state: string;
    gstin: string;
    city: string;
    pincode: number;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    acknowledge_date?: string;
    signed_qr_code?: string;
    error_message?: string;
    error_code?: string;
    signed_invoice?: string;
    acknowledge_no?: number;
    irn?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentMeta = {
    timestamp?: ShipmentTimeStamp;
    packaging_name?: string;
    store_invoice_updated_date?: string;
    ewaybill_info?: any;
    return_details?: any;
    weight: number;
    shipment_weight?: number;
    b2b_buyer_details?: BuyerDetails;
    bag_weight?: any;
    dp_options?: any;
    return_affiliate_order_id?: string;
    order_type?: string;
    box_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    debug_info?: DebugInfo;
    forward_affiliate_shipment_id?: string;
    awb_number?: string;
    assign_dp_from_sb?: boolean;
    po_number?: string;
    return_store_node?: number;
    fulfilment_priority_text?: string;
    b2c_buyer_details?: any;
    dp_name?: string;
    einvoice_info?: EinvoiceInfo;
    lock_data?: LockData;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    same_store_available: boolean;
    forward_affiliate_order_id?: string;
    formatted?: Formatted;
    shipment_volumetric_weight?: number;
    marketplace_store_id?: string;
    due_date?: string;
    return_awb_number?: string;
    external?: any;
    dp_sort_key?: string;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_id?: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
};
type Brand = {
    brand_id: number;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    script_last_ran?: string;
    logo?: string;
    modified_on?: number;
    is_virtual_invoice?: boolean;
    brand_name: string;
    created_on?: number;
    start_date?: string;
    invoice_prefix?: string;
    company: string;
    credit_note_allowed?: boolean;
};
type StoreAddress = {
    country_code: string;
    created_at: string;
    contact_person: string;
    state: string;
    address2?: string;
    country: string;
    phone: string;
    latitude: number;
    version?: string;
    area?: string;
    address_type: string;
    city: string;
    pincode: number;
    address_category: string;
    updated_at: string;
    longitude: number;
    address1: string;
    landmark?: string;
    email?: string;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
    username?: string;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    verified: boolean;
    value: string;
    legal_name: string;
    ds_type: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    gst_credentials: StoreGstCredentials;
    stage: string;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    gst_number?: string;
    notification_emails?: string[];
    product_return_config?: any;
    timing?: any[];
    ewaybill_portal_details?: any;
};
type Store = {
    is_enabled_for_recon?: boolean;
    created_at: string;
    parent_store_id?: number;
    company_id: number;
    contact_person: string;
    store_active_from?: string;
    state: string;
    s_id: string;
    address2?: string;
    country: string;
    is_archived?: boolean;
    is_active?: boolean;
    phone: number;
    brand_id?: any;
    brand_store_tags?: string[];
    login_username: string;
    store_address_json?: StoreAddress;
    latitude: number;
    name: string;
    city: string;
    pincode: string;
    mall_name?: string;
    alohomora_user_id?: number;
    vat_no?: string;
    packaging_material_count?: number;
    mall_area?: string;
    code?: string;
    meta: StoreMeta;
    fulfillment_channel: string;
    order_integration_id?: string;
    updated_at?: string;
    longitude: number;
    location_type: string;
    address1: string;
    store_email: string;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type Dimensions = {
    length?: number;
    is_default?: boolean;
    height?: number;
    unit?: string;
    width?: number;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    seller_identifier: string;
    dimensions?: Dimensions;
    weight?: Weight;
    code?: string;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    _id: string;
    esp_modified?: any;
    uid: string;
    child_details?: any;
    size: string;
    is_set?: boolean;
    raw_meta?: any;
    a_set?: any;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagDetailsPlatformResponse = {
    gst_details: BagGSTDetails;
    bag_status_history?: BagStatusHistory;
    item: Item;
    affiliate_details?: AffiliateDetails;
    restore_coupon?: boolean;
    identifier?: string;
    brand: Brand;
    current_status: BagStatusHistory;
    display_name?: string;
    b_type?: string;
    line_number?: number;
    ordering_store?: Store;
    financial_breakup: FinancialBreakup[];
    article_details?: ArticleDetails;
    affiliate_bag_details: AffiliateBagDetails;
    tags?: string[];
    applied_promos?: any[];
    current_operational_status: BagStatusHistory;
    operational_status?: string;
    seller_identifier?: string;
    status: BagReturnableCancelableStatus;
    article: Article;
    qc_required?: any;
    meta?: BagMeta;
    no_of_bags_order?: number;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    quantity?: number;
    prices: Prices;
    journey_type: string;
    shipment_id?: string;
    order_integration_id?: string;
    restore_promos?: any;
    bag_update_time?: number;
    parent_promo_bags?: any;
    b_id: number;
    reasons?: any[];
    dates?: Dates;
    original_bag_list?: number[];
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    current: number;
    size: number;
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
    status: number;
    error_trace?: string;
};
type StoreReassign = {
    affiliate_order_id?: string;
    set_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    item_id?: string;
    store_id: number;
    mongo_article_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action_type: string;
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    status?: string;
    lock_status?: boolean;
    shipment_id?: string;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    created_at?: string;
    platform_name?: string;
    title?: string;
    id: number;
    to_datetime?: string;
    logo_url?: string;
    platform_id?: string;
    company_id?: number;
    description?: string;
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
    status: boolean;
    call_id: string;
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
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
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    status?: number;
    message?: string;
    code?: string;
    identifier: string;
    exception?: string;
    stack_trace?: string;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    pincode: string;
    city: string;
    state: string;
    phone: number;
    address2?: string;
    last_name: string;
    address1?: string;
    country: string;
    mobile: number;
    email: string;
    first_name: string;
};
type ArticleDetails1 = {
    brand_id: number;
    attributes: any;
    weight: any;
    _id: string;
    dimension: any;
    category: any;
    quantity: number;
};
type ShipmentDetails = {
    dp_id?: number;
    articles: ArticleDetails1[];
    meta?: any;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    shipments: number;
    box_type?: string;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentConfig = {
    shipment: ShipmentDetails[];
    to_pincode: string;
    identifier: string;
    location_details?: LocationDetails;
    source: string;
    journey: string;
    payment_mode: string;
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
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
    unit_price: number;
    delivery_charge: number;
    affiliate_store_id: string;
    price_effective: number;
    _id: string;
    store_id: number;
    hsn_code_id: string;
    sku: string;
    item_id: number;
    identifier: any;
    modified_on: string;
    amount_paid: number;
    quantity: number;
    fynd_store_id: string;
    transfer_price: number;
    discount: number;
    avl_qty: number;
    seller_identifier: string;
    item_size: string;
    pdf_links?: MarketPlacePdf;
    affiliate_meta: any;
    company_id: number;
    price_marked: number;
};
type OrderInfo = {
    billing_address: OrderUser;
    affiliate_order_id?: string;
    shipment?: ShipmentData;
    payment?: any;
    order_priority?: OrderPriority;
    items: any;
    discount: number;
    user: UserData;
    order_value: number;
    delivery_charges: number;
    payment_mode: string;
    coupon?: string;
    cod_charges: number;
    bags: AffiliateBag[];
    shipping_address: OrderUser;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    name: string;
    owner: string;
    updated_at: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    description?: string;
    token: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type OrderConfig = {
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    store_lookup?: string;
    create_user?: boolean;
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
    slug: string;
    id: number;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    bag_id?: number;
    ticket_url?: string;
    l1_detail?: string;
    message: string;
    l2_detail?: string;
    ticket_id?: string;
    l3_detail?: string;
    user: string;
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
    message: string;
    customer_name: string;
    shipment_id: number;
    brand_name: string;
    phone_number: number;
    order_id: string;
    payment_mode: string;
    amount_paid: number;
    country_code: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    status?: string;
    remarks?: string;
    shipment_id?: string;
    bag_list?: number[];
    id: number;
    meta: Meta;
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
    dp_id: number;
    qc_required: string;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type BillingInfo = {
    state: string;
    last_name?: string;
    country: string;
    customer_code?: string;
    middle_name?: string;
    first_name: string;
    country_code: string;
    primary_email: string;
    floor_no: string;
    pincode: string;
    city: string;
    address2?: string;
    address1: string;
    alternate_email?: string;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    gender?: string;
    house_no: string;
    primary_mobile_number: string;
    state_code: string;
    title?: string;
};
type ShippingInfo = {
    landmark?: string;
    state: string;
    last_name?: string;
    shipping_type?: string;
    country: string;
    customer_code?: string;
    middle_name?: string;
    first_name: string;
    country_code: string;
    primary_email: string;
    address_type?: string;
    floor_no?: string;
    slot?: any[];
    pincode: string;
    city: string;
    address2?: string;
    address1: string;
    alternate_email?: string;
    external_customer_code?: string;
    geo_location?: any;
    alternate_mobile_number?: string;
    gender?: string;
    house_no?: string;
    primary_mobile_number: string;
    state_code: string;
    title?: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup: any[];
    tax_exempt: boolean;
};
type Charge = {
    type: string;
    name: string;
    amount: any;
    tax: Tax;
    code?: string;
};
type PaymentMethod = {
    refund_by: string;
    name: string;
    mode: string;
    amount: number;
    collect_by: string;
    meta?: any;
    transaction_data?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_after_date?: string;
};
type LineItem = {
    external_line_id?: string;
    custom_messasge?: string;
    charges: Charge[];
    meta?: any;
    seller_identifier: string;
    quantity?: number;
};
type Shipment = {
    location_id: number;
    external_shipment_id?: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    meta?: any;
    line_items: LineItem[];
};
type CreateOrderAPI = {
    billing_info: BillingInfo;
    shipping_info: ShippingInfo;
    application_id?: string;
    charges: Charge[];
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    meta?: any;
    external_order_id?: string;
    external_creation_date?: string;
    currency_info: any;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    status: number;
    message: string;
    code?: string;
    exception?: string;
    meta?: string;
    stack_trace?: string;
    request_id?: string;
    info?: any;
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
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    lock_states?: string[];
    logo_url?: any;
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
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type GetSearchWordsData = {
    is_active?: boolean;
    result?: any;
    words?: string[];
    uid?: string;
    app_id?: string;
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
    is_active?: boolean;
    result: SearchKeywordResult;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    words?: string[];
    uid?: string;
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    query?: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
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
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    results?: any[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    min_quantity: number;
    product_uid: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    is_active: boolean;
    choice: string;
    created_on?: string;
    modified_by?: any;
    meta?: any;
    slug: string;
    company_id?: number;
    id?: string;
    created_by?: any;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    is_active: boolean;
    choice: string;
    created_on?: string;
    modified_by?: any;
    meta?: any;
    slug: string;
    company_id?: number;
    created_by?: any;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
};
type LimitedProductData = {
    item_code?: string;
    attributes?: any;
    images?: string[];
    country_of_origin?: string;
    short_description?: string;
    slug?: string;
    identifier?: any;
    price?: any;
    name?: string;
    sizes?: string[];
    uid?: number;
    quantity?: number;
};
type Price = {
    currency?: string;
    min_marked?: number;
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    display?: string;
    value?: string;
};
type GetProducts = {
    allow_remove?: boolean;
    min_quantity?: number;
    product_uid?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    price?: Price;
    sizes?: Size[];
    max_quantity?: number;
};
type GetProductBundleResponse = {
    is_active?: boolean;
    choice?: string;
    meta?: any;
    slug?: string;
    company_id?: number;
    products?: GetProducts[];
    page_visibility?: string[];
    name?: string;
    same_store_assignment?: boolean;
    logo?: string;
};
type ProductBundleUpdateRequest = {
    is_active: boolean;
    choice: string;
    modified_by?: any;
    meta?: any;
    slug: string;
    company_id?: number;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    subtitle?: string;
    created_on?: string;
    active?: boolean;
    modified_by?: any;
    company_id?: number;
    id?: string;
    description?: string;
    brand_id?: number;
    name: string;
    guide?: Guide;
    modified_on?: string;
    created_by?: any;
    tag?: string;
    image?: string;
    title: string;
};
type SizeGuideResponse = {
    created_on?: string;
    subtitle?: string;
    active?: boolean;
    modified_by?: any;
    company_id?: number;
    title?: string;
    id?: string;
    name?: string;
    modified_on?: string;
    guide?: any;
    created_by?: any;
    tag?: string;
    brand_id?: number;
};
type MOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemResponse = {
    alt_text?: any;
    seo?: SEO;
    moq?: MOQ;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
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
    is_active: boolean;
    key?: string;
    slug?: string;
    unit?: string;
    display_type: string;
    name: string;
    logo?: string;
    priority: number;
};
type AppConfigurationDetail = {
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    slug: string;
    name?: string;
    logo?: string;
    app_id: string;
    priority: number;
    template_slugs?: string[];
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    key: string;
    default_key: string;
    name?: string;
    logo?: string;
    app_id: string;
    priority: number;
    is_default: boolean;
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
    variant?: any;
    similar?: any;
    detail?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    key: string;
    size: ProductSize;
    display_type: string;
    name: string;
    logo?: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    subtitle?: string;
    key: string;
    size?: ProductSize;
    logo?: string;
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
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    condition?: string;
    map?: any;
    map_values?: any[];
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    key: string;
    display_name?: string;
    type: string;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    logo?: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    name?: string;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    id?: string;
    type?: string;
    modified_on?: string;
    created_by?: any;
    app_id: string;
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    type?: string;
    modified_on?: string;
    created_by?: any;
    app_id: string;
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    name: string;
    operators?: string[];
    logo?: string;
};
type ProductFiltersValue = {
    max?: number;
    display: string;
    min?: number;
    selected_min?: number;
    currency_code?: string;
    count?: number;
    query_format?: string;
    display_format?: string;
    value: any;
    selected_max?: number;
    is_selected: boolean;
    currency_symbol?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
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
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    is_active?: boolean;
    meta?: any;
    action?: Action;
    visible_facets_keys?: string[];
    _schedule?: any;
    banners?: ImageUrls;
    type?: string;
    name?: string;
    app_id?: string;
    allow_facets?: boolean;
    slug?: string;
    allow_sort?: boolean;
    description?: string;
    cron?: any;
    tag?: string[];
    priority?: number;
    query?: CollectionQuery[];
    badge?: any;
    uid?: string;
    logo?: Media1;
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
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionSchedule = {
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
    start?: string;
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
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    is_active?: boolean;
    meta?: any;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    banners: CollectionBanner;
    type: string;
    name: string;
    created_by?: UserInfo;
    app_id: string;
    allow_facets?: boolean;
    _locale_language?: any;
    slug: string;
    allow_sort?: boolean;
    description?: string;
    seo?: SeoDetail;
    tags?: string[];
    modified_by?: UserInfo;
    priority?: number;
    sort_on?: string;
    query?: CollectionQuery[];
    published?: boolean;
    badge?: CollectionBadge;
    logo: CollectionImage;
    is_visible?: boolean;
};
type CollectionCreateResponse = {
    is_active?: boolean;
    meta?: any;
    visible_facets_keys?: string[];
    _schedule?: any;
    banners?: ImageUrls;
    type?: string;
    name?: string;
    app_id?: string;
    allow_facets?: boolean;
    slug?: string;
    allow_sort?: boolean;
    description?: string;
    cron?: any;
    priority?: number;
    tag?: string[];
    sort_on?: string;
    query?: CollectionQuery[];
    badge?: any;
    logo?: BannerImage;
};
type CollectionDetailResponse = {
    is_active?: boolean;
    tag?: string[];
    query?: CollectionQuery[];
    meta?: any;
    slug?: string;
    allow_sort?: boolean;
    description?: string;
    banners?: ImageUrls;
    visible_facets_keys?: string[];
    type?: string;
    _schedule?: any;
    cron?: any;
    badge?: any;
    name?: string;
    logo?: Media1;
    app_id?: string;
    priority?: number;
    allow_facets?: boolean;
};
type UpdateCollection = {
    is_active?: boolean;
    meta?: any;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    banners?: CollectionBanner;
    type?: string;
    name?: string;
    allow_facets?: boolean;
    _locale_language?: any;
    slug?: string;
    allow_sort?: boolean;
    description?: string;
    seo?: SeoDetail;
    tags?: string[];
    modified_by?: UserInfo;
    priority?: number;
    sort_on?: string;
    query?: CollectionQuery[];
    published?: boolean;
    badge?: CollectionBadge;
    logo?: CollectionImage;
    is_visible?: boolean;
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type Price1 = {
    currency_code?: string;
    max?: number;
    min?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type ProductListingDetail = {
    item_code?: string;
    attributes?: any;
    highlights?: string[];
    similars?: string[];
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    type?: string;
    price?: ProductListingPrice;
    name?: string;
    brand?: ProductBrand;
    image_nature?: string;
    short_description?: string;
    slug: string;
    rating?: number;
    description?: string;
    has_variant?: boolean;
    tryouts?: string[];
    discount?: string;
    rating_count?: number;
    item_type?: string;
    promo_meta?: any;
    medias?: Media1[];
    sellable?: boolean;
    uid?: number;
    teaser_tag?: any;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    type?: string;
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_articles?: number;
    total_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    name?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
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
    platform?: string;
    company_id?: number;
    store_ids?: number[];
    brand_ids?: number[];
    enabled?: boolean;
    opt_level: string;
};
type CompanyOptIn = {
    created_on: number;
    platform: string;
    modified_by?: any;
    company_id: number;
    store_ids: number[];
    brand_ids: number[];
    enabled: boolean;
    modified_on: number;
    created_by?: any;
    opt_level: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_name?: string;
    company_id?: number;
    total_article?: number;
    brand_id?: number;
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
    created_on?: string;
    documents?: any[];
    address?: any;
    display_name?: string;
    company_id?: number;
    timing?: any;
    name?: string;
    store_code?: string;
    uid?: number;
    modified_on?: string;
    additional_contacts?: any[];
    manager?: any;
    store_type?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    mandatory?: boolean;
    multi?: boolean;
    type: string;
    format?: string;
    range?: AttributeSchemaRange;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    description?: string;
    is_nested?: boolean;
    departments?: string[];
    id?: string;
    name?: string;
    logo?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    code?: string;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type GetDepartment = {
    is_active?: boolean;
    created_on?: string;
    search?: string;
    modified_by?: UserSerializer;
    page_no?: number;
    item_type?: string;
    slug?: string;
    page_size?: number;
    priority_order?: number;
    created_by?: UserSerializer;
    name?: string;
    modified_on?: string;
    uid?: number;
    logo?: string;
    synonyms?: string[];
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    code?: string;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    is_active?: boolean;
    platforms?: any;
    _custom_json?: any;
    slug?: string;
    priority_order: number;
    _cls?: string;
    name: string;
    uid?: number;
    logo: string;
    synonyms?: string[];
    tags?: string[];
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
    created_on: string;
    is_active?: boolean;
    logo: string;
    uid?: number;
    modified_by?: UserDetail;
    _custom_json?: any;
    slug?: any;
    _id?: any;
    priority_order: number;
    verified_by?: UserDetail;
    _cls?: any;
    name: any;
    verified_on?: string;
    modified_on: string;
    created_by?: UserDetail;
    synonyms?: any[];
};
type ProductTemplate = {
    is_active?: boolean;
    attributes?: string[];
    created_on?: string;
    is_physical: boolean;
    modified_by?: any;
    departments?: string[];
    slug: string;
    is_expirable: boolean;
    description?: string;
    created_by?: any;
    is_archived?: boolean;
    name?: string;
    modified_on?: string;
    categories?: string[];
    logo?: string;
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_active?: boolean;
    attributes?: string[];
    is_physical: boolean;
    departments?: string[];
    slug: string;
    is_expirable: boolean;
    description?: string;
    id?: string;
    is_archived?: boolean;
    name?: string;
    categories?: string[];
    logo?: string;
    tag?: string;
};
type Properties = {
    item_code?: any;
    command?: any;
    is_active?: any;
    custom_order?: any;
    sizes?: any;
    category_slug?: any;
    media?: any;
    highlights?: any;
    variants?: any;
    currency?: any;
    trader?: any;
    name?: any;
    no_of_boxes?: any;
    multi_size?: any;
    trader_type?: any;
    product_publish?: any;
    country_of_origin?: any;
    short_description?: any;
    slug?: any;
    description?: any;
    hsn_code?: any;
    brand_uid?: any;
    is_dependent?: any;
    return_config?: any;
    tags?: any;
    size_guide?: any;
    product_group_tag?: any;
    item_type?: any;
    teaser_tag?: any;
};
type GlobalValidation = {
    required?: string[];
    description?: string;
    type?: string;
    properties?: Properties;
    definitions?: any;
    title?: string;
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
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    task_id?: string;
    trigger_on?: string;
    template_tags?: any;
    completed_on?: string;
    id?: string;
    data?: ProductDownloadItemsData;
    status?: string;
    url?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
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
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
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
type Category = {
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    is_active: boolean;
    created_on?: string;
    level: number;
    modified_by?: any;
    departments: number[];
    slug?: string;
    id?: string;
    name: string;
    modified_on?: string;
    uid?: number;
    created_by?: any;
    priority?: number;
    synonyms?: string[];
    media?: Media2;
    hierarchy?: Hierarchy[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    is_active: boolean;
    level: number;
    departments: number[];
    slug?: string;
    name: string;
    priority?: number;
    synonyms?: string[];
    media?: Media2;
    hierarchy?: Hierarchy[];
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
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type Product = {
    item_code?: string;
    is_active?: boolean;
    custom_order?: any;
    images?: Image[];
    template_tag?: string;
    is_set?: boolean;
    category_slug?: string;
    sizes?: any[];
    _custom_json?: any;
    media?: Media1[];
    highlights?: string[];
    variants?: any;
    tax_identifier?: any;
    currency?: string;
    color?: string;
    departments?: number[];
    is_expirable?: boolean;
    name?: string;
    multi_size?: boolean;
    product_publish?: ProductPublished;
    brand?: Brand;
    country_of_origin?: string;
    image_nature?: string;
    short_description?: string;
    l3_mapping?: string[];
    slug?: string;
    all_sizes?: any[];
    description?: string;
    brand_uid?: number;
    hsn_code?: string;
    primary_color?: string;
    is_dependent?: boolean;
    size_guide?: string;
    is_physical?: boolean;
    item_type?: string;
    id?: string;
    category_uid?: number;
    uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type Trader = {
    type?: string;
    address?: string[];
    name?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdate = {
    item_code: any;
    variant_media?: any;
    is_active?: boolean;
    custom_order?: CustomOrder;
    action?: string;
    template_tag: string;
    bulk_job_id?: string;
    is_set?: boolean;
    category_slug: string;
    _custom_json?: any;
    media?: Media1[];
    highlights?: string[];
    net_quantity?: NetQuantity;
    variants?: any;
    tax_identifier: TaxIdentifier;
    currency: string;
    departments: number[];
    trader: Trader[];
    name: string;
    no_of_boxes?: number;
    multi_size?: boolean;
    product_publish?: ProductPublish;
    country_of_origin: string;
    short_description?: string;
    slug: string;
    change_request_id?: any;
    description?: string;
    brand_uid: number;
    is_dependent?: boolean;
    is_image_less_product?: boolean;
    return_config: ReturnConfig;
    tags?: string[];
    size_guide?: string;
    requester?: string;
    product_group_tag?: string[];
    item_type: string;
    company_id: number;
    uid?: number;
    teaser_tag?: TeaserTag;
};
type AttributeMasterSerializer = {
    created_on?: string;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    modified_on?: string;
    is_nested?: boolean;
    unit?: string;
    departments: string[];
    raw_key?: string;
    name?: string;
    created_by?: any;
    slug: string;
    description?: string;
    tags?: string[];
    modified_by?: any;
    variant?: boolean;
    synonyms?: any;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    logo?: string;
    suggestion?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    template?: ProductTemplate;
    is_active?: boolean;
    failed?: number;
    cancelled_records?: string[];
    created_on?: string;
    failed_records?: string[];
    file_path?: string;
    modified_by?: UserDetail1;
    total?: number;
    company_id?: number;
    stage?: string;
    template_tag?: string;
    modified_on?: string;
    succeed?: number;
    created_by?: UserDetail1;
    cancelled?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type BulkJob = {
    is_active?: boolean;
    created_on: string;
    cancelled_records?: any[];
    failed?: number;
    failed_records?: any[];
    modified_by?: UserInfo1;
    file_path?: string;
    total: number;
    company_id: number;
    custom_template_tag?: string;
    stage?: string;
    template_tag?: string;
    tracking_url?: string;
    modified_on?: string;
    succeed?: number;
    created_by?: UserInfo1;
    cancelled?: number;
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    created_by?: UserInfo1;
    batch_id: string;
};
type BulkProductRequest = {
    template_tag: string;
    company_id: number;
    batch_id: string;
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
    company_id?: number;
    username?: string;
};
type Items = {
    created_on?: string;
    cancelled_records?: string[];
    failed?: number;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserCommon;
    failed_records?: string[];
    total?: number;
    retry?: number;
    company_id?: number;
    id?: string;
    stage?: string;
    tracking_url?: string;
    modified_on?: string;
    succeed?: number;
    created_by?: UserCommon;
    cancelled?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
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
    sellable_quantity?: number;
    identifiers?: any;
    currency?: string;
    price_effective?: number;
    item_id?: number;
    store?: any;
    size?: string;
    price?: number;
    price_transfer?: number;
    uid?: string;
    quantity?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
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
type InvSize = {
    item_weight?: number;
    identifiers: GTIN[];
    currency: string;
    price_effective: number;
    item_length?: number;
    item_weight_unit_of_measure?: string;
    size: string;
    item_width?: number;
    price?: number;
    price_transfer?: number;
    expiration_date?: string;
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    quantity: number;
    set?: InventorySet;
    item_height?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type DimensionResponse = {
    width: number;
    length: number;
    unit: string;
    height: number;
    is_default: boolean;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type PriceMeta = {
    currency: string;
    tp_notes?: any;
    marked: number;
    effective: number;
    transfer: number;
    updated_at?: string;
};
type CompanyMeta = {
    id: number;
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
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
type InventorySellerResponse = {
    is_active?: boolean;
    manufacturer: ManufacturerResponse;
    meta?: any;
    fynd_item_code: string;
    size: string;
    stage?: string;
    track_inventory?: boolean;
    dimension: DimensionResponse;
    is_set?: boolean;
    _custom_json?: any;
    tax_identifier?: any;
    item_id: number;
    identifier: any;
    trader?: Trader1[];
    price: PriceMeta;
    expiration_date?: string;
    total_quantity: number;
    created_by?: UserSerializer;
    company: CompanyMeta;
    brand: BrandMeta;
    country_of_origin: string;
    fynd_article_code: string;
    added_on_store?: string;
    store: StoreMeta;
    return_config?: ReturnConfig1;
    tags?: string[];
    weight: WeightResponse;
    modified_by?: UserSerializer;
    quantities?: Quantities;
    set?: InventorySet;
    fragile: boolean;
    seller_identifier: string;
    fynd_meta?: any;
    raw_meta?: any;
    uid: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    created_on?: string;
    cancelled_records?: string[];
    failed?: number;
    is_active?: boolean;
    failed_records?: string[];
    file_path?: string;
    modified_by?: any;
    total?: number;
    company_id?: number;
    id?: string;
    stage?: string;
    modified_on?: string;
    succeed?: number;
    created_by?: any;
    cancelled?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_marked?: number;
    currency?: string;
    price_effective?: number;
    item_weight_unit_of_measure?: string;
    price?: number;
    expiration_date?: string;
    total_quantity?: number;
    store_code: string;
    quantity?: number;
    tags?: string[];
    item_dimensions_unit_of_measure?: string;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    company_id: number;
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    task_id: string;
    request_params?: any;
    trigger_on?: string;
    completed_on?: string;
    status?: string;
    url?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    request_params?: any;
    task_id: string;
    status?: string;
    seller_id: number;
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
    price_marked?: number;
    price_effective?: number;
    expiration_date?: string;
    store_id: number;
    total_quantity?: number;
    tags?: string[];
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    company_id: number;
    payload?: InventoryPayload[];
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    threshold1?: number;
    tax_on_mrp?: boolean;
    threshold2?: number;
    company_id?: number;
    id?: string;
    hsn_code?: string;
    tax_on_esp?: boolean;
    modified_on?: string;
    hs2_code?: string;
    tax1?: number;
    tax2?: number;
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    is_active?: boolean;
    threshold1: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    company_id: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    uid?: number;
    hs2_code: string;
    tax1: number;
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
    created_on?: string;
    modified_by?: any;
    taxes: TaxSlab[];
    country_code: string;
    hsn_code: string;
    description: string;
    type: string;
    reporting_hsn: string;
    modified_on?: string;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    discount?: string;
    departments?: string[];
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
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
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: any[];
    _custom_json?: any;
};
type SecondLevelChild = {
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
};
type Child = {
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    childs?: SecondLevelChild[];
    _custom_json?: any;
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
    operators?: any;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    item_code?: string;
    attributes?: any;
    highlights?: string[];
    similars?: string[];
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    type?: string;
    name?: string;
    brand?: ProductBrand;
    image_nature?: string;
    short_description?: string;
    slug: string;
    rating?: number;
    description?: string;
    has_variant?: boolean;
    tryouts?: string[];
    rating_count?: number;
    item_type?: string;
    promo_meta?: any;
    medias?: Media1[];
    uid?: number;
    teaser_tag?: any;
};
type InventoryPage = {
    next_id?: string;
    has_next?: boolean;
    type: string;
    item_total: number;
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
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
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
type GetAddressSerializer = {
    city?: string;
    landmark?: string;
    country?: string;
    address1?: string;
    country_code?: string;
    address2?: string;
    longitude?: number;
    address_type?: string;
    state?: string;
    latitude?: number;
    pincode?: number;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    uid?: number;
    company_type?: string;
    created_by?: UserSerializer2;
    verified_by?: UserSerializer2;
    business_type?: string;
    stage?: string;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    verified_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer2;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type GetLocationSerializer = {
    created_on?: string;
    code: string;
    stage?: string;
    modified_on?: string;
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    address: GetAddressSerializer;
    notification_emails?: string[];
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    phone_number: string;
    verified_by?: UserSerializer1;
    name: string;
    verified_on?: string;
    created_by?: UserSerializer1;
    company?: GetCompanySerializer;
    store_type?: string;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
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
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    mode?: string;
    business_type: string;
    business_details?: BusinessDetails;
    modified_on?: string;
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    stage?: string;
    created_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    business_info?: string;
    notification_emails?: string[];
    created_by?: UserSerializer;
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    documents?: Document[];
    company_type: string;
    uid: number;
    warnings?: any;
};
type CreateUpdateAddressSerializer = {
    landmark?: string;
    state: string;
    country: string;
    pincode: number;
    city: string;
    country_code?: string;
    address1: string;
    address_type: string;
    longitude: number;
    latitude: number;
    address2?: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type UpdateCompany = {
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    _custom_json?: any;
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    name?: string;
    reject_reason?: string;
    documents?: Document[];
    business_type?: string;
    warnings?: any;
    company_type?: string;
    business_info?: string;
    notification_emails?: string[];
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
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    logo?: string;
    mode?: string;
    reject_reason?: string;
    modified_on?: string;
    name: string;
    stage?: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    created_on?: string;
    _locale_language?: any;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    verified_on?: string;
    slug_key?: string;
    description?: string;
    uid?: number;
    synonyms?: string[];
    warnings?: any;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    logo: string;
    brand_tier?: string;
    company_id?: number;
    description?: string;
    _locale_language?: any;
    name: string;
    uid?: number;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    addresses?: GetAddressSerializer[];
    details?: CompanyDetails;
    _custom_json?: any;
    modified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    reject_reason?: string;
    stage?: string;
    market_channels?: string[];
    business_type: string;
    company_type: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    uid?: number;
    notification_emails?: string[];
    verified_on?: string;
};
type CompanyBrandSerializer = {
    modified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    stage?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    warnings?: any;
    verified_on?: string;
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
type LocationSerializer = {
    _custom_json?: any;
    company: number;
    code: string;
    name: string;
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
    stage?: string;
    display_name: string;
    store_type?: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    notification_emails?: string[];
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
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Rule = {
    min?: number;
    discount_qty?: number;
    key?: number;
    max?: number;
    value?: number;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    user_groups?: number[];
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    platforms?: string[];
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    post_order?: PostOrder;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    calculate_on: string;
    applicable_on: string;
    is_exact?: boolean;
    value_type: string;
    currency_code?: string;
    type: string;
    auto_apply?: boolean;
    scope?: string[];
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAdd = {
    code: string;
    validation?: Validation;
    identifiers: Identifier;
    type_slug: string;
    ownership: Ownership;
    rule: Rule[];
    validity: Validity;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    tags?: string[];
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
    code: string;
    validation?: Validation;
    identifiers: Identifier;
    type_slug: string;
    ownership: Ownership;
    rule: Rule[];
    validity: Validity;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    tags?: string[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type CompareObject = {
    less_than?: number;
    greater_than_equals?: number;
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    all_items?: boolean;
    cart_total?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_id?: number[];
    item_brand?: number[];
    item_company?: number[];
    item_exclude_sku?: string[];
    available_zones?: string[];
    item_size?: string[];
    buy_rules?: string[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_category?: number[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    item_sku?: string[];
    item_exclude_brand?: number[];
};
type DiscountOffer = {
    discount_amount?: number;
    partial_can_ret?: boolean;
    code?: string;
    max_usage_per_transaction?: number;
    max_discount_amount?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
};
type PromotionSchedule = {
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
    published: boolean;
    start: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
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
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    user_groups?: number[];
    order_quantity?: number;
    anonymous_users?: boolean;
    user_registered?: UserRegistered;
    platforms?: string[];
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
};
type PromotionListItem = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    promo_group: string;
    stackable?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    application_id: string;
    calculate_on?: string;
    mode: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    promo_group: string;
    stackable?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    application_id: string;
    calculate_on?: string;
    mode: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
};
type PromotionUpdate = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    promo_group: string;
    stackable?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    application_id: string;
    calculate_on?: string;
    mode: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    created_on?: string;
    example?: string;
    title?: string;
    is_hidden?: boolean;
    entity_type?: string;
    subtitle?: string;
    entity_slug?: string;
    type?: string;
    modified_on?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    code?: string;
    is_applied?: boolean;
    message?: string;
    uid?: string;
    type?: string;
    value?: number;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type RawBreakup = {
    coupon?: number;
    cod_charge?: number;
    delivery_charge?: number;
    gst_charges?: number;
    fynd_cash?: number;
    total?: number;
    mrp_total?: number;
    vog?: number;
    subtotal?: number;
    discount?: number;
    convenience_fee?: number;
    you_saved?: number;
};
type DisplayBreakup = {
    key?: string;
    currency_code?: string;
    message?: string[];
    display?: string;
    currency_symbol?: string;
    value?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
};
type ProductPrice = {
    marked?: number;
    currency_code?: string;
    selling?: number;
    currency_symbol?: string;
    effective?: number;
    add_on?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_slug?: string;
    item_images_url?: string[];
    item_name?: string;
};
type AppliedFreeArticles = {
    article_id?: string;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type DiscountRulesApp = {
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    raw_offer?: any;
};
type AppliedPromotion = {
    promotion_group?: string;
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promo_id?: string;
    mrp_promotion?: boolean;
    promotion_type?: string;
    article_quantity?: number;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles;
    amount?: number;
    discount_rules?: DiscountRulesApp[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    size?: string;
    extra_meta?: any;
    parent_item_identifiers?: any;
    uid?: string;
    store?: BaseInfo;
    type?: string;
    quantity?: number;
    product_group_tags?: string[];
    seller?: BaseInfo;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CategoryInfo = {
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
type CartProduct = {
    images?: ProductImage[];
    uid?: number;
    categories?: CategoryInfo[];
    action?: ProductAction;
    slug?: string;
    type?: string;
    brand?: BaseInfo;
    name?: string;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    identifiers: CartProductIdentifer;
    message?: string;
    parent_item_identifiers?: any;
    coupon_message?: string;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    discount?: string;
    quantity?: number;
    availability?: ProductAvailability;
    article?: ProductArticle;
    is_set?: boolean;
    product?: CartProduct;
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
    email?: string;
    pincode?: number;
    phone?: number;
    meta?: any;
    city?: string;
    country?: string;
    address_type?: string;
    landmark?: string;
    area_code_slug?: string;
    state?: string;
    country_code?: string;
    name?: string;
    address?: string;
    area_code: string;
    area?: string;
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
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
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
    size: string;
    amount_paid: number;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
    price_effective: number;
    extra_meta?: any;
    loyalty_discount?: number;
    delivery_charges: number;
    product_id: number;
    price_marked: number;
    files?: OpenApiFiles[];
    discount: number;
    cashback_applied: number;
    quantity?: number;
    employee_discount?: number;
    coupon_effective_discount: number;
    meta?: CartItemMeta;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    cart_value: number;
    affiliate_order_id?: string;
    order_id?: string;
    cashback_applied: number;
    delivery_charges: number;
    billing_address: ShippingAddress;
    coupon?: string;
    gstin?: string;
    payment_mode?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    currency_code?: string;
    coupon_code: string;
    loyalty_discount?: number;
    coupon_value: number;
    employee_discount?: any;
    comment?: string;
    files?: OpenApiFiles[];
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    order_id: string;
    success?: boolean;
};
type AbandonedCart = {
    cod_charges?: any;
    cart_value?: number;
    uid: number;
    cashback: any;
    merge_qty?: boolean;
    coupon?: any;
    promotion?: any;
    gstin?: string;
    payment_mode?: string;
    articles: any[];
    fc_index_map?: number[];
    comment?: string;
    pick_up_customer_details?: any;
    is_default: boolean;
    expire_at: string;
    is_active?: boolean;
    user_id: string;
    discount?: number;
    order_id?: string;
    delivery_charges?: any;
    _id: string;
    payment_methods?: any[];
    fynd_credits?: any;
    created_on: string;
    shipments?: any[];
    last_modified: string;
    is_archive?: boolean;
    payments?: any;
    buy_now?: boolean;
    app_id?: string;
    bulk_coupon_discount?: number;
    checkout_mode?: string;
    meta?: any;
};
type AbandonedCartResponse = {
    success?: boolean;
    message?: string;
    page?: Page;
    result?: any;
    items?: AbandonedCart[];
};
type AddProductCart = {
    item_size?: string;
    parent_item_identifiers?: any;
    store_id?: number;
    item_id?: number;
    display?: string;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    extra_meta?: any;
    seller_id?: number;
    product_group_tags?: string[];
    article_assignment?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    gstin?: string;
    id?: string;
    currency?: CartCurrency;
    is_valid?: boolean;
    message?: string;
    last_modified?: string;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    buy_now?: boolean;
    coupon_text?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    checkout_mode?: string;
    restrict_checkout?: boolean;
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    item_size?: string;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    item_id?: number;
    article_id?: string;
    quantity?: number;
    extra_meta?: any;
    item_index?: number;
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
