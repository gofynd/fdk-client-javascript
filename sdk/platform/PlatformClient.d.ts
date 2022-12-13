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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, Prices, ShipmentStatus, UserDataInfo, PaymentModeInfo, GSTDetailsData, PlatformItem, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, DPDetailsData, ShipmentPayments, TrackingList, OrderDetailsData, FulfillingStore, ShipmentStatusData, OrderBrandName, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagConfigs, PlatformDeliveryAddress, Identifier, FinancialBreakup, OrderBagArticle, BagGST, OrderBags, BagStateMapper, BagStatusHistory, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, B2BPODetails, BagMeta, Dates, AffiliateMeta, AffiliateBagDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, StoreAddress, Store, BagReturnableCancelableStatus, Attributes, Item, ArticleDetails, Dimensions, ReturnConfig, Weight, Article, PDFLinks, BuyerDetails, Formatted, EInvoice, EinvoiceInfo, LockData, DebugInfo, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, ShippingInfo, BillingInfo, TaxInfo, PaymentMethod, PaymentInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQ, ApplicationItemResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionBadge, UserInfo, CollectionSchedule, SeoDetail, CollectionImage, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Logo, ProductPublished, Image, Product, ProductListingResponse, NetQuantity, TeaserTag, TaxIdentifier, CustomOrder, ProductPublish, Trader, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, WeightResponse, PriceMeta, DimensionResponse, BrandMeta, ReturnConfig1, ManufacturerResponse, QuantityBase, Quantities, CompanyMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, LocationIntegrationType, ProductReturnConfigSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, DisplayMetaDict, DisplayMeta, CouponAction, RuleDefinition, Validity, Validation, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PriceRange, PostOrder, Restrictions, CouponAuthor, Rule, CouponSchedule, State, CouponDateMeta, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UserRegistered, Restrictions1, CompareObject, ItemCriteria, PromotionSchedule, Visibility, PromotionAuthor, DiscountOffer, DiscountRule, Ownership1, DisplayMeta1, PromotionAction, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, CouponBreakup, LoyaltyPoints, DisplayBreakup, CartBreakup, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, PromoMeta, ActionQuery, ProductAction, ProductImage, BaseInfo, CategoryInfo, CartProduct, ProductAvailability, ProductPrice, ProductPriceInfo, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    options?: FilterInfoOption[];
    type: string;
};
type Prices = {
    tax_collected_at_source?: number;
    delivery_charge?: number;
    amount_paid?: number;
    refund_amount?: number;
    cod_charges?: number;
    price_marked?: number;
    cashback_applied?: number;
    price_effective?: number;
    value_of_good?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    coupon_value?: number;
    discount?: number;
};
type ShipmentStatus = {
    actual_status: string;
    ops_status: string;
    status: string;
    title: string;
    hex_code: string;
};
type UserDataInfo = {
    mobile?: string;
    avis_user_id?: string;
    is_anonymous_user?: boolean;
    email?: string;
    name?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    uid?: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type PlatformItem = {
    size?: string;
    images?: string[];
    image?: string[];
    name?: string;
    l3_category_name?: string;
    can_return?: boolean;
    l3_category?: number;
    id?: number;
    color?: string;
    can_cancel?: boolean;
    code?: string;
    department_id?: number;
    l1_category?: string[];
};
type BagUnit = {
    prices?: Prices;
    ordering_channel: string;
    shipment_id: string;
    gst?: GSTDetailsData;
    status: any;
    can_return?: boolean;
    item?: PlatformItem;
    bag_id: number;
    item_quantity: number;
    can_cancel?: boolean;
    total_shipment_bags: number;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    prices?: Prices;
    created_at: string;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    payment_methods?: any;
    total_shipments_in_order: number;
    channel?: any;
    sla?: any;
    shipment_created_at: number;
    total_bags_count: number;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    application?: any;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
    items?: ShipmentItem[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type UserDetailsData = {
    phone: string;
    email: string;
    name: string;
    address: string;
    state: string;
    pincode: string;
    city: string;
    country: string;
};
type DPDetailsData = {
    track_url?: string;
    awb_no?: string;
    name?: string;
    gst_tag?: string;
    id?: string;
    pincode?: string;
    eway_bill_id?: string;
    country?: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode: string;
};
type TrackingList = {
    is_passed?: boolean;
    text: string;
    status: string;
    is_current?: boolean;
    time?: string;
};
type OrderDetailsData = {
    affiliate_id?: string;
    ordering_channel?: string;
    source?: string;
    order_date?: string;
    cod_charges?: string;
    tax_details?: any;
    ordering_channel_logo?: any;
    order_value?: string;
    fynd_order_id: string;
};
type FulfillingStore = {
    store_name: string;
    fulfillment_channel: string;
    phone: string;
    pincode: string;
    city: string;
    meta: any;
    id: string;
    address: string;
    state: string;
    contact_person: string;
    code: string;
    country: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
    id?: number;
};
type OrderBrandName = {
    brand_name: string;
    logo: string;
    modified_on?: number;
    id: number;
    company: string;
    created_on: number;
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
    promo_id?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    amount?: number;
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
};
type BagConfigs = {
    is_active: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    created_at?: string;
    phone?: string;
    longitude?: number;
    contact_person?: string;
    version?: string;
    email?: string;
    updated_at?: string;
    latitude?: number;
    address_type?: string;
    area?: string;
    address_category?: string;
    state?: string;
    pincode?: string;
    city?: string;
    address1?: string;
    country?: string;
    address2?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_effective_discount: number;
    price_effective: number;
    gst_tag: string;
    hsn_code: string;
    total_units: number;
    gst_tax_percentage: number;
    cod_charges: number;
    added_to_fynd_cash: boolean;
    pm_price_split: any;
    brand_calculated_amount: number;
    size: string;
    tax_collected_at_source?: number;
    delivery_charge: number;
    promotion_effective_discount: number;
    value_of_good: number;
    fynd_credits: number;
    transfer_price: number;
    identifiers: Identifier;
    cashback: number;
    coupon_value: number;
    item_name: string;
    gst_fee: string;
    amount_paid: number;
    cashback_applied: number;
    price_marked: number;
    refund_credit: number;
    amount_paid_roundoff?: number;
    discount: number;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type BagGST = {
    gst_fee?: number;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gst_tag?: string;
    hsn_code?: string;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
};
type OrderBags = {
    brand?: OrderBrandName;
    entity_type?: string;
    applied_promos?: AppliedPromos[];
    parent_promo_bags?: any;
    bag_configs?: BagConfigs;
    current_status?: string;
    display_name?: string;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    bag_id: number;
    financial_breakup?: FinancialBreakup[];
    article?: OrderBagArticle;
    can_cancel?: boolean;
    prices?: Prices;
    seller_identifier?: string;
    identifier?: string;
    line_number?: number;
    gst_details?: BagGST;
    quantity?: number;
    can_return?: boolean;
};
type BagStateMapper = {
    state_type: string;
    bs_id: number;
    is_active?: boolean;
    app_state_name?: string;
    display_name: string;
    app_facing?: boolean;
    name: string;
    journey_type: string;
    notify_customer?: boolean;
    app_display_name?: string;
};
type BagStatusHistory = {
    bsh_id: number;
    state_type?: string;
    created_at: string;
    forward?: boolean;
    delivery_partner_id?: number;
    shipment_id: string;
    display_name?: boolean;
    updated_at?: string;
    status: string;
    delivery_awb_number?: string;
    store_id: number;
    state_id: number;
    bag_id: number;
    reasons?: any[];
    bag_state_mapper: BagStateMapper;
    kafka_sync?: boolean;
    app_display_name?: boolean;
};
type ShipmentInfoResponse = {
    billing_details?: UserDetailsData;
    operational_status?: string;
    shipment_status?: string;
    kirana_store_id?: string;
    forward_tracking_list?: any[];
    payment_mode?: string;
    shipment_id: string;
    dp_details?: DPDetailsData;
    escalation?: any;
    refund_text?: string;
    is_fynd_store?: string;
    is_packaging_order: boolean;
    replacement_details?: string;
    total_items?: number;
    payments?: ShipmentPayments;
    affiliate_shipment_id: string;
    items: any[];
    delivery_slot?: any;
    email_id: string;
    tracking_list?: TrackingList[];
    enable_tracking?: boolean;
    go_green?: boolean;
    forward_shipment_status?: any[];
    credit_note_id: string;
    user_info?: any;
    company: any;
    order_type: string;
    journey_type?: string;
    coupon?: any;
    order?: OrderDetailsData;
    total_bags?: number;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
    beneficiary_details?: boolean;
    fyndstore_emp: any;
    priority_text?: string;
    current_shipment_status: any;
    shipment_quantity?: number;
    is_invoiced: boolean;
    child_nodes?: string[];
    refund_details?: any;
    pay_button?: string;
    vertical?: string;
    mid?: string;
    status?: ShipmentStatusData;
    user_agent?: string;
    platform_logo: boolean;
    due_date?: string;
    delivery_details?: UserDetailsData;
    secured_delivery_flag?: string;
    can_break: string;
    bags?: OrderBags[];
    is_pdsr?: string;
    order_created_time?: string;
    custom_meta?: any[];
    can_cancel?: boolean;
    shipment_images?: string[];
    prices?: Prices;
    is_fynd_coupon: boolean;
    bank_data?: any;
    enable_dp_tracking?: string;
    is_not_fynd_source: boolean;
    order_status: any;
    delivery_status: any[];
    gst_details?: GSTDetailsData;
    invoice: any;
    can_return?: boolean;
    forward_order_status?: any[];
    bag_status_history?: BagStatusHistory[];
    lock_status: string;
    user_id: string;
    tracking_url: string;
    status_progress: number;
    ordering_store: any;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type PlatformShipment = {
    billing_details?: UserDetailsData;
    operational_status?: string;
    shipment_status?: string;
    payment_mode?: string;
    shipment_id: string;
    dp_details?: DPDetailsData;
    total_items?: number;
    payments?: ShipmentPayments;
    delivery_slot?: any;
    tracking_list?: TrackingList[];
    journey_type?: string;
    order?: OrderDetailsData;
    total_bags?: number;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
    priority_text?: string;
    shipment_quantity?: number;
    vertical?: string;
    status?: ShipmentStatusData;
    user_agent?: string;
    platform_logo?: string;
    delivery_details?: UserDetailsData;
    bags?: OrderBags[];
    custom_meta?: any[];
    shipment_images?: string[];
    prices?: Prices;
    enable_dp_tracking?: string;
    gst_details?: GSTDetailsData;
    bag_status_history?: BagStatusHistory[];
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    success: boolean;
};
type SubLane = {
    text?: string;
    total_items?: number;
    index?: number;
    value?: string;
    actions?: any[];
};
type SuperLane = {
    value: string;
    text: string;
    total_items?: number;
    options?: SubLane[];
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
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    payment_mode?: string;
    channel?: PlatformChannel;
    meta?: any;
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    order_value?: number;
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    order_created_time?: string;
    total_order_value?: number;
};
type OrderListingResponse = {
    page?: Page;
    lane?: string;
    items?: PlatformOrderItems[];
    message?: string;
    success?: boolean;
    total_count?: number;
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
    awb?: string;
    shipment_type?: string;
    updated_time?: string;
    updated_at?: string;
    status?: string;
    reason?: string;
    meta?: any;
    account_name?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
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
    report_created_at?: string;
    display_name?: string;
    report_name?: string;
    status?: string;
    report_requested_at?: string;
    report_type?: string;
    s3_key?: string;
    report_id?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    article_id?: string;
    jio_code?: string;
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
    trace_id?: string;
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_name?: string;
    store_code?: string;
    company_id?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    store_id?: string;
    batch_id: string;
    data?: any;
    label?: any;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    size?: number;
    upload?: FileUploadResponse;
    file_path?: string;
    namespace?: string;
    operation?: string;
    cdn?: URL;
    file_name?: string;
    content_type?: string;
    tags?: string[];
    method?: string;
};
type BulkListingPage = {
    size?: number;
    total?: number;
    has_next?: boolean;
    current?: number;
    type?: string;
    has_previous?: boolean;
};
type bulkListingData = {
    store_name?: string;
    successful?: number;
    excel_url?: string;
    store_id?: number;
    processing_shipments?: string[];
    user_name?: string;
    total?: number;
    file_name?: string;
    batch_id?: string;
    store_code?: string;
    company_id?: number;
    status?: string;
    failed_shipments?: any[];
    successful_shipments?: any[];
    failed?: number;
    id?: string;
    user_id?: string;
    uploaded_on?: string;
    processing?: number;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    success?: boolean;
    data?: bulkListingData[];
};
type ManifestPage = {
    size?: string;
    total?: number;
    has_next?: boolean;
    current?: string;
    has_previous?: boolean;
    type?: string;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    lane?: string;
    store_name?: string;
    sales_channel_name?: string;
    date_range?: DateRange;
    dp_ids?: string;
    sales_channels?: string;
    stores?: string;
    dp_name?: string;
};
type GeneratedManifestItem = {
    filters?: ManifestFilter;
    created_at?: string;
    is_active?: boolean;
    created_by?: string;
    company_id?: number;
    status?: string;
    manifest_id?: string;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
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
    created_at?: string;
    is_active?: boolean;
    created_by?: string;
    company_id?: number;
    status?: string;
    meta?: ManifestDetailMeta;
    id?: number;
    user_id?: number;
    manifest_id?: string;
    uid?: number;
};
type ManifestDetailItem = {
    awb?: string;
    shipment_id?: string;
    invoice_id?: string;
    item_qty?: number;
    order_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
    page?: ManifestPage;
    items?: ManifestDetailItem[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    display_name?: string;
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    company_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    uploaded_by?: string;
    status?: boolean;
    message?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
    error?: string[];
    success?: string;
    failed_records?: string[];
};
type Brand = {
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    brand_name: string;
    logo?: string;
    start_date?: string;
    credit_note_expiry_days?: number;
    brand_id: number;
    modified_on?: number;
    credit_note_allowed?: boolean;
    company: string;
    script_last_ran?: string;
    created_on?: number;
    invoice_prefix?: string;
};
type B2BPODetails = {
    po_tax_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    quantity?: number;
    size_level_total_qty?: number;
    due_date?: string;
    employee_discount?: number;
    box_type?: string;
    is_priority?: boolean;
    order_item_id?: string;
    loyalty_discount?: number;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
    user?: string;
    username?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type Document = {
    legal_name: string;
    url?: string;
    ds_type: string;
    verified: boolean;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    display_name: string;
    stage: string;
    additional_contact_details?: any;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    timing?: any[];
    product_return_config?: any;
};
type StoreAddress = {
    created_at: string;
    version?: string;
    updated_at: string;
    latitude: number;
    city: string;
    address2?: string;
    email?: string;
    country_code: string;
    contact_person: string;
    longitude: number;
    address_type: string;
    address_category: string;
    pincode: number;
    country: string;
    landmark?: string;
    phone: string;
    area?: string;
    state: string;
    address1: string;
};
type Store = {
    created_at: string;
    is_enabled_for_recon?: boolean;
    updated_at?: string;
    vat_no?: string;
    latitude: number;
    meta: StoreMeta;
    city: string;
    address2?: string;
    store_email: string;
    alohomora_user_id?: number;
    is_active?: boolean;
    location_type: string;
    is_archived?: boolean;
    contact_person: string;
    code?: string;
    login_username: string;
    brand_store_tags?: string[];
    company_id: number;
    longitude: number;
    name: string;
    parent_store_id?: number;
    pincode: string;
    country: string;
    mall_name?: string;
    fulfillment_channel: string;
    phone: number;
    brand_id?: any;
    mall_area?: string;
    s_id: string;
    order_integration_id?: string;
    store_address_json?: StoreAddress;
    state: string;
    address1: string;
    packaging_material_count?: number;
    store_active_from?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type Attributes = {
    brand_name?: string;
    primary_color_hex?: string;
    name?: string;
    essential?: string;
    primary_color?: string;
    primary_material?: string;
    gender?: string[];
    marketer_address?: string;
    marketer_name?: string;
};
type Item = {
    meta?: any;
    brand: string;
    item_id: number;
    l2_category_id?: number;
    branch_url?: string;
    image: string[];
    color?: string;
    attributes: Attributes;
    gender?: string;
    code?: string;
    department_id?: number;
    l1_category?: string[];
    size: string;
    webstore_product_url?: string;
    l1_category_id?: number;
    name: string;
    l3_category?: number;
    l3_category_name?: string;
    slug_key: string;
    can_cancel?: boolean;
    brand_id: number;
    can_return?: boolean;
    last_updated_at?: string;
    l2_category?: string[];
};
type ArticleDetails = {
    status?: any;
};
type Dimensions = {
    is_default?: boolean;
    width?: number;
    length?: number;
    unit?: string;
    height?: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Article = {
    a_set?: any;
    size: string;
    uid: string;
    child_details?: any;
    seller_identifier: string;
    esp_modified?: any;
    _id: string;
    dimensions?: Dimensions;
    raw_meta?: any;
    identifiers: Identifier;
    return_config?: ReturnConfig;
    weight?: Weight;
    code?: string;
    is_set?: boolean;
};
type PDFLinks = {
    label_a6?: string;
    credit_note_url?: string;
    invoice_pos?: string;
    b2b?: string;
    label_type: string;
    invoice?: string;
    po_invoice?: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_type: string;
    invoice_a4?: string;
    label_a4?: string;
    label?: string;
};
type BuyerDetails = {
    name: string;
    gstin: string;
    address: string;
    state: string;
    pincode: number;
    city: string;
    ajio_site_id?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type EInvoice = {
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    irn?: string;
    acknowledge_date?: string;
    error_code?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type ShipmentMeta = {
    same_store_available: boolean;
    fulfilment_priority_text?: string;
    po_number?: string;
    b2b_buyer_details?: BuyerDetails;
    return_affiliate_order_id?: string;
    dp_id?: string;
    packaging_name?: string;
    return_affiliate_shipment_id?: string;
    shipment_weight?: number;
    formatted?: Formatted;
    einvoice_info?: EinvoiceInfo;
    marketplace_store_id?: string;
    weight: number;
    box_type?: string;
    forward_affiliate_shipment_id?: string;
    order_type?: string;
    return_awb_number?: string;
    forward_affiliate_order_id?: string;
    dp_sort_key?: string;
    bag_weight?: any;
    lock_data?: LockData;
    assign_dp_from_sb?: boolean;
    return_details?: any;
    auto_trigger_dp_assignment_acf: boolean;
    store_invoice_updated_date?: string;
    debug_info?: DebugInfo;
    due_date?: string;
    dp_options?: any;
    awb_number?: string;
    b2c_buyer_details?: any;
    dp_name?: string;
    return_store_node?: number;
    ewaybill_info?: any;
    external?: any;
    timestamp?: ShipmentTimeStamp;
    shipment_volumetric_weight?: number;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_order_id: string;
    ad_id?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_meta: AffiliateMeta;
    affiliate_shipment_id: string;
};
type BagGSTDetails = {
    sgst_tax_percentage: number;
    tax_collected_at_source: number;
    gst_fee: number;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    value_of_good: number;
    gst_tag: string;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    hsn_code: string;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
};
type BagDetailsPlatformResponse = {
    operational_status?: string;
    restore_coupon?: boolean;
    bag_status: BagStatusHistory[];
    shipment_id?: string;
    original_bag_list?: number[];
    brand: Brand;
    meta?: BagMeta;
    dates?: Dates;
    entity_type?: string;
    tags?: string[];
    qc_required?: any;
    b_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    applied_promos?: any[];
    parent_promo_bags?: any;
    ordering_store?: Store;
    journey_type: string;
    current_operational_status: BagStatusHistory;
    no_of_bags_order?: number;
    b_id: number;
    current_status: BagStatusHistory;
    display_name?: string;
    status: BagReturnableCancelableStatus;
    item: Item;
    bag_update_time?: number;
    article_details?: ArticleDetails;
    financial_breakup: FinancialBreakup[];
    article: Article;
    restore_promos?: any;
    prices: Prices;
    seller_identifier?: string;
    identifier?: string;
    line_number?: number;
    affiliate_details?: AffiliateDetails;
    gst_details: BagGSTDetails;
    quantity?: number;
    bag_status_history?: BagStatusHistory;
    order_integration_id?: string;
    reasons?: any[];
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
    page: Page1;
    items: BagDetailsPlatformResponse[];
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
    error_trace?: string;
    message: string;
    status: number;
};
type StoreReassign = {
    set_id?: string;
    store_id: number;
    item_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    fynd_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type CheckResponse = {
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    status?: string;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    created_at?: string;
    logo_url?: string;
    company_id?: number;
    from_datetime?: string;
    to_datetime?: string;
    platform_name?: string;
    platform_id?: string;
    title?: string;
    id: number;
    description?: string;
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
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
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
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    products?: Products[];
    identifier: string;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    stack_trace?: string;
    identifier: string;
    message?: string;
    final_state?: any;
    exception?: string;
    status?: number;
    code?: string;
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
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
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
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
    secret: string;
    owner: string;
    updated_at: string;
    id: string;
    description?: string;
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
    create_user?: boolean;
    article_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    affiliate: Affiliate;
};
type OrderUser = {
    state: string;
    first_name: string;
    phone: number;
    email: string;
    last_name: string;
    city: string;
    address1?: string;
    country: string;
    address2?: string;
    mobile: number;
    pincode: string;
};
type ArticleDetails1 = {
    quantity: number;
    attributes: any;
    _id: string;
    dimension: any;
    weight: any;
    category: any;
    brand_id: number;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
    shipments: number;
    dp_id?: number;
    box_type?: string;
    articles: ArticleDetails1[];
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    to_pincode: string;
    identifier: string;
    shipment: ShipmentDetails[];
    action: string;
    payment_mode: string;
    journey: string;
    location_details?: LocationDetails;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    price_marked: number;
    avl_qty: number;
    quantity: number;
    company_id: number;
    hsn_code_id: string;
    modified_on: string;
    seller_identifier: string;
    delivery_charge: number;
    sku: string;
    unit_price: number;
    discount: number;
    transfer_price: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    store_id: number;
    identifier: any;
    item_id: number;
    item_size: string;
    price_effective: number;
    amount_paid: number;
    fynd_store_id: string;
    _id: string;
    affiliate_meta: any;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderInfo = {
    shipping_address: OrderUser;
    coupon?: string;
    order_value: number;
    delivery_charges: number;
    discount: number;
    shipment?: ShipmentData;
    payment_mode: string;
    billing_address: OrderUser;
    payment?: any;
    user: UserData;
    affiliate_order_id?: string;
    cod_charges: number;
    items: any;
    bags: AffiliateBag[];
    order_priority?: OrderPriority;
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
    display_text: string;
    id: number;
    slug: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_url?: string;
    l1_detail?: string;
    type: string;
    message: string;
    l2_detail?: string;
    user: string;
    bag_id?: number;
    l3_detail?: string;
    ticket_id?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    phone_number: number;
    order_id: string;
    shipment_id: number;
    customer_name: string;
    payment_mode: string;
    message: string;
    country_code: string;
    amount_paid: number;
    brand_name: string;
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
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    meta: Meta;
    shipment_id?: string;
    remarks?: string;
    status?: string;
    bag_list?: number[];
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
type Tax = {
    amount: any;
    name: string;
    breakup: any[];
    tax_exempt: boolean;
};
type Charge = {
    tax: Tax;
    amount: any;
    name: string;
    type: string;
    code?: string;
};
type ShippingInfo = {
    state_code: string;
    first_name: string;
    gender?: string;
    address_type?: string;
    primary_mobile_number: string;
    floor_no?: string;
    primary_email: string;
    address2?: string;
    address1: string;
    state: string;
    middle_name?: string;
    shipping_type?: string;
    country: string;
    alternate_email?: string;
    title?: string;
    house_no?: string;
    pincode: string;
    customer_code?: string;
    geo_location?: any;
    slot?: any[];
    external_customer_code?: string;
    last_name?: string;
    country_code: string;
    alternate_mobile_number?: string;
    city: string;
    landmark?: string;
};
type BillingInfo = {
    state_code: string;
    first_name: string;
    gender?: string;
    primary_mobile_number: string;
    floor_no: string;
    primary_email: string;
    address2?: string;
    address1: string;
    state: string;
    middle_name?: string;
    country: string;
    alternate_email?: string;
    title?: string;
    house_no: string;
    pincode: string;
    customer_code?: string;
    external_customer_code?: string;
    last_name?: string;
    country_code: string;
    alternate_mobile_number?: string;
    city: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type PaymentMethod = {
    collect_by: string;
    meta?: any;
    amount: number;
    name: string;
    mode: string;
    transaction_data?: any;
    refund_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type LineItem = {
    charges: Charge[];
    quantity?: number;
    meta?: any;
    external_line_id?: string;
    seller_identifier: string;
    custom_messasge?: string;
};
type Shipment = {
    priority?: number;
    processing_dates?: ProcessingDates;
    line_items: LineItem[];
    meta?: any;
    location_id: number;
    external_shipment_id?: number;
};
type CreateOrderAPI = {
    charges: Charge[];
    external_order_id?: string;
    meta?: any;
    shipping_info: ShippingInfo;
    currency_info: any;
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    application_id?: string;
    shipments: Shipment[];
    external_creation_date?: string;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    stack_trace?: string;
    meta?: string;
    message: string;
    info?: any;
    exception?: string;
    status: number;
    code?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
    source?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    acknowledged?: boolean;
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
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
    mobile: number;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    uid?: string;
    result?: any;
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
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
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
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
    display?: string;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    results?: AutocompleteResult[];
    words?: string[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
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
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    meta?: any;
    choice: string;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    slug: string;
    created_on?: string;
    id?: string;
    modified_on?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    name: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    logo?: string;
    meta?: any;
    choice: string;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    slug: string;
    created_on?: string;
    modified_on?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    name: string;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    meta?: any;
    choice: string;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    slug: string;
    modified_on?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    name: string;
};
type Size = {
    quantity?: number;
    display?: string;
    is_available?: boolean;
    value?: string;
};
type LimitedProductData = {
    sizes?: string[];
    short_description?: string;
    item_code?: string;
    slug?: string;
    country_of_origin?: string;
    uid?: number;
    quantity?: number;
    identifier?: any;
    images?: string[];
    price?: any;
    name?: string;
    attributes?: any;
};
type Price = {
    currency?: string;
    max_marked?: number;
    min_marked?: number;
    min_effective?: number;
    max_effective?: number;
};
type GetProducts = {
    sizes?: Size[];
    max_quantity?: number;
    min_quantity?: number;
    product_details?: LimitedProductData;
    price?: Price;
    product_uid?: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    logo?: string;
    meta?: any;
    choice?: string;
    is_active?: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    slug?: string;
    products?: GetProducts[];
    name?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    active?: boolean;
    tag?: string;
    created_by?: any;
    title: string;
    image?: string;
    company_id?: number;
    modified_by?: any;
    created_on?: string;
    guide?: Guide;
    id?: string;
    modified_on?: string;
    description?: string;
    subtitle?: string;
    brand_id?: number;
    name: string;
};
type SizeGuideResponse = {
    active?: boolean;
    tag?: string;
    created_by?: any;
    title?: string;
    company_id?: number;
    modified_by?: any;
    created_on?: string;
    guide?: any;
    id?: string;
    modified_on?: string;
    subtitle?: string;
    brand_id?: number;
    name?: string;
};
type MOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemResponse = {
    seo?: SEO;
    moq?: MOQ;
    alt_text?: any;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    _custom_json?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    data: any[];
    values?: any[];
    condition?: any[];
};
type PageResponseType = {
    total_count: number;
    has_next: boolean;
    current: number;
    next: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    logo?: string;
    is_active: boolean;
    key?: string;
    display_type: string;
    slug?: string;
    unit?: string;
    priority: number;
    name: string;
};
type AppConfigurationDetail = {
    logo?: string;
    app_id: string;
    is_active: boolean;
    is_default: boolean;
    slug: string;
    template_slugs?: string[];
    priority: number;
    name?: string;
    attributes?: AttributeDetailsGroup[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    app_id: string;
    is_active: boolean;
    key: string;
    is_default: boolean;
    priority: number;
    default_key: string;
    name?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    detail?: any;
    variant?: any;
    similar?: any;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    key?: string;
    display?: string;
    filter_types?: string[];
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
    logo?: string;
    is_active: boolean;
    key: string;
    priority: number;
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
    map?: any;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    value?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    key: string;
    priority: number;
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
type ConfigurationProductVariantConfig = {
    logo?: string;
    is_active: boolean;
    key: string;
    display_type: string;
    size: ProductSize;
    priority: number;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    title?: string;
    is_active: boolean;
    key: string;
    size?: ProductSize;
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
type AppCatalogConfiguration = {
    created_by?: any;
    app_id: string;
    config_type: string;
    listing?: ConfigurationListing;
    created_on?: string;
    config_id?: string;
    id?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    type?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    created_by?: any;
    app_id: string;
    config_type: string;
    listing?: ConfigurationListing;
    created_on?: string;
    config_id?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    logo?: string;
    operators?: string[];
    display: string;
    name: string;
    kind?: string;
};
type ProductFiltersValue = {
    selected_min?: number;
    query_format?: string;
    selected_max?: number;
    currency_code?: string;
    max?: number;
    count?: number;
    display: string;
    display_format?: string;
    value: any;
    is_selected: boolean;
    currency_symbol?: string;
    min?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
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
type GetCollectionDetailNest = {
    tag?: string[];
    cron?: any;
    action?: Action;
    uid?: string;
    description?: string;
    badge?: any;
    type?: string;
    _schedule?: any;
    app_id?: string;
    logo?: Media1;
    allow_sort?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    priority?: number;
    name?: string;
    meta?: any;
    is_active?: boolean;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
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
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
    duration?: number;
    end?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    _custom_json?: any;
    description?: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    published?: boolean;
    type: string;
    _schedule?: CollectionSchedule;
    created_by?: UserInfo;
    app_id: string;
    seo?: SeoDetail;
    is_visible?: boolean;
    logo: CollectionImage;
    tags?: string[];
    _locale_language?: any;
    allow_sort?: boolean;
    slug: string;
    query?: CollectionQuery[];
    banners: CollectionBanner;
    priority?: number;
    name: string;
    meta?: any;
    is_active?: boolean;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
    sort_on?: string;
};
type CollectionCreateResponse = {
    tag?: string[];
    cron?: any;
    description?: string;
    badge?: any;
    type?: string;
    _schedule?: any;
    app_id?: string;
    logo?: BannerImage;
    allow_sort?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    priority?: number;
    name?: string;
    meta?: any;
    is_active?: boolean;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
    sort_on?: string;
};
type CollectionDetailResponse = {
    logo?: Media1;
    meta?: any;
    tag?: string[];
    _schedule?: any;
    app_id?: string;
    priority?: number;
    allow_facets?: boolean;
    is_active?: boolean;
    allow_sort?: boolean;
    cron?: any;
    slug?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    banners?: ImageUrls;
    description?: string;
    badge?: any;
    name?: string;
    type?: string;
};
type UpdateCollection = {
    _custom_json?: any;
    description?: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    published?: boolean;
    type?: string;
    _schedule?: CollectionSchedule;
    seo?: SeoDetail;
    is_visible?: boolean;
    logo?: CollectionImage;
    tags?: string[];
    _locale_language?: any;
    allow_sort?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    banners?: CollectionBanner;
    priority?: number;
    name?: string;
    meta?: any;
    is_active?: boolean;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
    sort_on?: string;
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
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    promo_meta?: any;
    similars?: string[];
    item_code?: string;
    uid?: number;
    description?: string;
    price?: ProductListingPrice;
    type?: string;
    teaser_tag?: any;
    medias?: Media1[];
    brand?: ProductBrand;
    rating?: number;
    has_variant?: boolean;
    discount?: string;
    image_nature?: string;
    short_description?: string;
    rating_count?: number;
    slug: string;
    name?: string;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    highlights?: string[];
    item_type?: string;
    tryouts?: string[];
    product_online_date?: string;
    sellable?: boolean;
    attributes?: any;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
    name?: string;
    total_articles?: number;
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
    brand_ids?: number[];
    platform?: string;
    company_id?: number;
    opt_level: string;
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    created_by?: any;
    brand_ids: number[];
    platform: string;
    company_id: number;
    modified_by?: any;
    opt_level: string;
    created_on: number;
    modified_on: number;
    enabled: boolean;
    store_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
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
    display_name?: string;
    timing?: any;
    company_id?: number;
    documents?: any[];
    created_on?: string;
    additional_contacts?: any[];
    uid?: number;
    address?: any;
    modified_on?: string;
    store_code?: string;
    manager?: any;
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
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    allowed_values?: string[];
    multi?: boolean;
    mandatory?: boolean;
    format?: string;
    range?: AttributeSchemaRange;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    departments?: string[];
    logo?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    schema?: AttributeMaster;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    id?: string;
    description?: string;
    name?: string;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    logo?: string;
    created_by?: UserSerializer;
    priority_order?: number;
    is_active?: boolean;
    page_no?: number;
    modified_by?: UserSerializer;
    slug?: string;
    page_size?: number;
    created_on?: string;
    item_type?: string;
    uid?: number;
    synonyms?: string[];
    modified_on?: string;
    search?: string;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    logo: string;
    _custom_json?: any;
    tags?: string[];
    priority_order: number;
    is_active?: boolean;
    slug?: string;
    _cls?: string;
    uid?: number;
    synonyms?: string[];
    name: string;
    platforms?: any;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    logo: string;
    created_by?: UserDetail;
    verified_by?: UserDetail;
    _custom_json?: any;
    priority_order: number;
    is_active?: boolean;
    verified_on?: string;
    slug?: any;
    created_on: string;
    _cls?: any;
    uid?: number;
    synonyms?: any[];
    modified_on: string;
    _id?: any;
    modified_by?: UserDetail;
    name: any;
};
type ProductTemplate = {
    departments?: string[];
    logo?: string;
    tag?: string;
    created_by?: any;
    is_active?: boolean;
    is_expirable: boolean;
    slug: string;
    is_physical: boolean;
    is_archived?: boolean;
    created_on?: string;
    modified_on?: string;
    description?: string;
    categories?: string[];
    modified_by?: any;
    name?: string;
    attributes?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    currency?: any;
    media?: any;
    multi_size?: any;
    item_code?: any;
    is_dependent?: any;
    description?: any;
    teaser_tag?: any;
    product_group_tag?: any;
    return_config?: any;
    command?: any;
    hsn_code?: any;
    short_description?: any;
    custom_order?: any;
    size_guide?: any;
    tags?: any;
    product_publish?: any;
    slug?: any;
    country_of_origin?: any;
    variants?: any;
    name?: any;
    sizes?: any;
    trader_type?: any;
    highlights?: any;
    is_active?: any;
    category_slug?: any;
    item_type?: any;
    brand_uid?: any;
    no_of_boxes?: any;
    trader?: any;
};
type GlobalValidation = {
    title?: string;
    required?: string[];
    properties?: Properties;
    description?: string;
    definitions?: any;
    type?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    departments?: string[];
    logo?: string;
    tag?: string;
    is_active?: boolean;
    is_expirable: boolean;
    slug: string;
    is_physical: boolean;
    is_archived?: boolean;
    id?: string;
    description?: string;
    categories?: string[];
    name?: string;
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    task_id?: string;
    created_by?: VerifiedBy;
    url?: string;
    data?: ProductDownloadItemsData;
    status?: string;
    template_tags?: any;
    id?: string;
    completed_on?: string;
    trigger_on?: string;
    seller_id?: number;
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
    logo: string;
    portrait: string;
    landscape: string;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
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
    departments: number[];
    media?: Media2;
    created_by?: any;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    modified_on?: string;
    slug?: string;
    created_on?: string;
    tryouts?: string[];
    uid?: number;
    level: number;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    priority?: number;
    id?: string;
    modified_by?: any;
    name: string;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    departments: number[];
    media?: Media2;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    slug?: string;
    tryouts?: string[];
    synonyms?: string[];
    level: number;
    marketplaces?: CategoryMapping;
    priority?: number;
    name: string;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
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
    url?: string;
    aspect_ratio?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type Product = {
    currency?: string;
    is_set?: boolean;
    media?: Media1[];
    multi_size?: boolean;
    _custom_json?: any;
    item_code?: string;
    uid?: number;
    is_dependent?: boolean;
    description?: string;
    is_expirable?: boolean;
    brand?: Brand;
    brand_uid?: number;
    id?: string;
    image_nature?: string;
    hsn_code?: string;
    tax_identifier?: any;
    short_description?: string;
    category_uid?: number;
    custom_order?: any;
    size_guide?: string;
    product_publish?: ProductPublished;
    slug?: string;
    primary_color?: string;
    country_of_origin?: string;
    images?: Image[];
    variants?: any;
    name?: string;
    color?: string;
    departments?: number[];
    sizes?: any[];
    is_active?: boolean;
    template_tag?: string;
    highlights?: string[];
    is_physical?: boolean;
    category_slug?: string;
    item_type?: string;
    all_sizes?: any[];
    l3_mapping?: string[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    name?: string;
    address?: string[];
    type?: string;
};
type ProductCreateUpdate = {
    currency: string;
    is_set?: boolean;
    media?: Media1[];
    multi_size?: boolean;
    _custom_json?: any;
    item_code: any;
    action?: string;
    uid?: number;
    is_dependent?: boolean;
    bulk_job_id?: string;
    description?: string;
    change_request_id?: any;
    net_quantity?: NetQuantity;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    requester?: string;
    return_config: ReturnConfig;
    variant_media?: any;
    tax_identifier: TaxIdentifier;
    short_description?: string;
    custom_order?: CustomOrder;
    size_guide?: string;
    tags?: string[];
    product_publish?: ProductPublish;
    is_image_less_product?: boolean;
    company_id: number;
    slug: string;
    country_of_origin: string;
    variants?: any;
    name: string;
    departments: number[];
    is_active?: boolean;
    template_tag: string;
    highlights?: string[];
    category_slug: string;
    item_type: string;
    brand_uid: number;
    no_of_boxes?: number;
    trader: Trader[];
};
type AttributeMasterSerializer = {
    details: AttributeMasterDetails;
    created_on?: string;
    description?: string;
    modified_by?: any;
    filters: AttributeMasterFilter;
    created_by?: any;
    suggestion?: string;
    logo?: string;
    variant?: boolean;
    tags?: string[];
    is_nested?: boolean;
    slug: string;
    enabled_for_end_consumer?: boolean;
    synonyms?: any;
    modified_on?: string;
    name?: string;
    departments: string[];
    raw_key?: string;
    schema: AttributeMaster;
    unit?: string;
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
    total?: number;
    succeed?: number;
    created_by?: UserDetail1;
    cancelled_records?: string[];
    is_active?: boolean;
    template_tag?: string;
    file_path?: string;
    company_id?: number;
    template?: ProductTemplate;
    failed_records?: string[];
    created_on?: string;
    stage?: string;
    cancelled?: number;
    modified_on?: string;
    failed?: number;
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type BulkJob = {
    total: number;
    succeed?: number;
    created_by?: UserInfo1;
    custom_template_tag?: string;
    cancelled_records?: any[];
    tracking_url?: string;
    is_active?: boolean;
    file_path?: string;
    template_tag?: string;
    company_id: number;
    failed_records?: any[];
    created_on: string;
    stage?: string;
    cancelled?: number;
    modified_on?: string;
    failed?: number;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    created_on: string;
    modified_on?: string;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    data: any[];
    template_tag: string;
    company_id: number;
    batch_id: string;
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
    succeed?: number;
    total?: number;
    created_by?: UserCommon;
    retry?: number;
    cancelled_records?: string[];
    tracking_url?: string;
    file_path?: string;
    is_active?: boolean;
    company_id?: number;
    failed_records?: string[];
    created_on?: string;
    stage?: string;
    cancelled?: number;
    modified_on?: string;
    failed?: number;
    id?: string;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    currency?: string;
    sellable_quantity?: number;
    identifiers?: any;
    inventory_updated_on?: string;
    item_id?: number;
    seller_identifier?: string;
    store?: any;
    price_effective?: number;
    size?: string;
    price_transfer?: number;
    uid?: string;
    quantity?: number;
    price?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
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
    currency: string;
    is_set?: boolean;
    identifiers: GTIN[];
    quantity: number;
    item_weight?: number;
    item_length?: number;
    item_width?: number;
    expiration_date?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    price_effective: number;
    item_height?: number;
    size: string;
    price_transfer?: number;
    item_dimensions_unit_of_measure?: string;
    price?: number;
    set?: InventorySet;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type PriceMeta = {
    transfer: number;
    currency: string;
    effective: number;
    tp_notes?: any;
    updated_at?: string;
    marked: number;
};
type DimensionResponse = {
    width: number;
    height: number;
    is_default: boolean;
    unit: string;
    length: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
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
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type InventorySellerResponse = {
    is_set?: boolean;
    _custom_json?: any;
    store: StoreMeta;
    raw_meta?: any;
    uid: string;
    size: string;
    weight: WeightResponse;
    track_inventory?: boolean;
    identifier: any;
    price: PriceMeta;
    modified_by?: UserSerializer;
    fynd_meta?: any;
    dimension: DimensionResponse;
    created_by?: UserSerializer;
    added_on_store?: string;
    seller_identifier: string;
    brand: BrandMeta;
    fynd_item_code: string;
    return_config?: ReturnConfig1;
    fragile: boolean;
    stage?: string;
    total_quantity: number;
    set?: InventorySet;
    tax_identifier?: any;
    manufacturer: ManufacturerResponse;
    tags?: string[];
    country_of_origin: string;
    meta?: any;
    item_id: number;
    is_active?: boolean;
    fynd_article_code: string;
    expiration_date?: string;
    quantities?: Quantities;
    company: CompanyMeta;
    trader?: Trader1[];
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    succeed?: number;
    total?: number;
    created_by?: any;
    cancelled_records?: string[];
    file_path?: string;
    is_active?: boolean;
    company_id?: number;
    failed_records?: string[];
    created_on?: string;
    id?: string;
    cancelled?: number;
    modified_on?: string;
    failed?: number;
    stage?: string;
    modified_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    currency?: string;
    total_quantity?: number;
    quantity?: number;
    seller_identifier: string;
    tags?: string[];
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    price_marked?: number;
    store_code: string;
    price?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
};
type InventoryExportJob = {
    task_id: string;
    request_params?: any;
    trigger_on?: string;
    status?: string;
    completed_on?: string;
    url?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    request_params?: any;
    status?: string;
    trigger_on?: string;
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
    seller_identifier: string;
    tags?: string[];
    expiration_date?: string;
    price_effective?: number;
    price_marked?: number;
    store_id: number;
    total_quantity?: number;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type PageResponse = {
    has_previous?: boolean;
    item_total?: number;
    current?: string;
    has_next?: boolean;
    size?: number;
};
type HsnCodesObject = {
    hsn_code?: string;
    hs2_code?: string;
    modified_on?: string;
    tax_on_esp?: boolean;
    company_id?: number;
    tax1?: number;
    threshold1?: number;
    threshold2?: number;
    tax_on_mrp?: boolean;
    id?: string;
    tax2?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    hsn_code: string;
    hs2_code: string;
    is_active?: boolean;
    tax_on_esp?: boolean;
    company_id: number;
    tax1: number;
    threshold1: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    uid?: number;
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
    cess?: number;
    threshold: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    hsn_code: string;
    taxes: TaxSlab[];
    created_by?: any;
    country_code: string;
    reporting_hsn: string;
    created_on?: string;
    modified_on?: string;
    description: string;
    modified_by?: any;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    logo?: Media;
    departments?: string[];
    action?: Action;
    slug?: string;
    discount?: string;
    uid?: number;
    banners?: ImageUrls;
    name?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    logo?: Media;
    priority_order?: number;
    slug?: string;
    uid?: number;
    name?: string;
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
    slug?: string;
    action?: Action;
    childs?: any[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
};
type SecondLevelChild = {
    _custom_json?: any;
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
};
type Child = {
    _custom_json?: any;
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
};
type CategoryItems = {
    slug?: string;
    action?: Action;
    childs?: Child[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
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
    operators?: any;
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    promo_meta?: any;
    similars?: string[];
    item_code?: string;
    uid?: number;
    description?: string;
    type?: string;
    teaser_tag?: any;
    medias?: Media1[];
    brand?: ProductBrand;
    rating?: number;
    has_variant?: boolean;
    image_nature?: string;
    short_description?: string;
    rating_count?: number;
    slug: string;
    name?: string;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    highlights?: string[];
    item_type?: string;
    tryouts?: string[];
    product_online_date?: string;
    attributes?: any;
};
type InventoryPage = {
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    has_next?: boolean;
    type: string;
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
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
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
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetAddressSerializer = {
    latitude?: number;
    address2?: string;
    pincode?: number;
    landmark?: string;
    country?: string;
    country_code?: string;
    longitude?: number;
    address1?: string;
    city?: string;
    state?: string;
    address_type?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    reject_reason?: string;
    verified_on?: string;
    business_type?: string;
    company_type?: string;
    created_on?: string;
    uid?: number;
    stage?: string;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    name?: string;
};
type GetLocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    modified_by?: UserSerializer1;
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
    store_type?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    manager?: LocationManagerSerializer;
    stage?: string;
    verified_on?: string;
    modified_on?: string;
    name: string;
    phone_number: string;
    code: string;
    integration_type?: LocationIntegrationType;
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    notification_emails?: string[];
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
type ApplicationStoreJson = {
    _custom_json: any;
};
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    addresses?: GetAddressSerializer[];
    contact_details?: ContactDetails;
    warnings?: any;
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    uid: number;
    business_type: string;
    mode?: string;
    business_info?: string;
    stage?: string;
    business_details?: BusinessDetails;
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    documents?: Document[];
    created_by?: UserSerializer;
    company_type: string;
    modified_on?: string;
    name?: string;
    created_on?: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    longitude: number;
    address_type: string;
    country: string;
    state: string;
    address2?: string;
    landmark?: string;
    country_code?: string;
    city: string;
    latitude: number;
    address1: string;
    pincode: number;
};
type UpdateCompany = {
    notification_emails?: string[];
    company_type?: string;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    name?: string;
    addresses?: CreateUpdateAddressSerializer[];
    business_info?: string;
    reject_reason?: string;
    documents?: Document[];
    _custom_json?: any;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    warnings?: any;
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
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    stage?: string;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    slug_key?: string;
    reject_reason?: string;
    _custom_json?: any;
    warnings?: any;
    verified_by?: UserSerializer;
    uid?: number;
    mode?: string;
    stage?: string;
    synonyms?: string[];
    verified_on?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    _locale_language?: any;
    modified_on?: string;
    name: string;
    description?: string;
    created_on?: string;
    logo?: string;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    name: string;
    description?: string;
    company_id?: number;
    _custom_json?: any;
    synonyms?: string[];
    logo: string;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
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
    notification_emails?: string[];
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    modified_by?: UserSerializer;
    name?: string;
    business_type: string;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer;
    market_channels?: string[];
    reject_reason?: string;
    stage?: string;
    _custom_json?: any;
    created_on?: string;
    verified_on?: string;
    details?: CompanyDetails;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    modified_by?: UserSerializer;
    stage?: string;
    reject_reason?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    created_on?: string;
    verified_on?: string;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: number[];
    uid?: number;
};
type LocationSerializer = {
    notification_emails?: string[];
    uid?: number;
    name: string;
    documents?: Document[];
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    manager?: LocationManagerSerializer;
    stage?: string;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    store_type?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    code: string;
    warnings?: any;
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
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    calculate_on: string;
    is_exact?: boolean;
    type: string;
    currency_code?: string;
    value_type: string;
    applicable_on: string;
    scope?: string[];
    auto_apply?: boolean;
};
type Validity = {
    priority?: number;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    types?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    user_groups?: number[];
    uses?: UsesRestriction;
    ordering_stores?: number[];
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    price_range?: PriceRange;
    post_order?: PostOrder;
    platforms?: string[];
    coupon_allowed?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    key?: number;
    value?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
};
type CouponSchedule = {
    start?: string;
    duration?: number;
    end?: string;
    cron?: string;
    next_schedule?: any[];
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAdd = {
    display_meta: DisplayMeta;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
    validation?: Validation;
    restrictions?: Restrictions;
    type_slug: string;
    author?: CouponAuthor;
    rule: Rule[];
    _schedule?: CouponSchedule;
    code: string;
    tags?: string[];
    state?: State;
    date_meta?: CouponDateMeta;
    ownership: Ownership;
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
    display_meta: DisplayMeta;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
    validation?: Validation;
    restrictions?: Restrictions;
    type_slug: string;
    author?: CouponAuthor;
    rule: Rule[];
    _schedule?: CouponSchedule;
    code: string;
    tags?: string[];
    state?: State;
    date_meta?: CouponDateMeta;
    ownership: Ownership;
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
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    order_quantity?: number;
    uses: UsesRestriction1;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    platforms?: string[];
    user_registered?: UserRegistered;
    user_groups?: number[];
};
type CompareObject = {
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_exclude_category?: number[];
    buy_rules?: string[];
    item_exclude_sku?: string[];
    item_store?: number[];
    all_items?: boolean;
    item_exclude_company?: number[];
    available_zones?: string[];
    cart_quantity?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_brand?: number[];
    item_exclude_id?: number[];
    item_id?: number[];
    item_brand?: number[];
    item_category?: number[];
    item_size?: string[];
    cart_total?: CompareObject;
    item_sku?: string[];
    item_company?: number[];
};
type PromotionSchedule = {
    start: string;
    duration?: number;
    published: boolean;
    end?: string;
    cron?: string;
    next_schedule?: any[];
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DiscountOffer = {
    discount_amount?: number;
    partial_can_ret?: boolean;
    max_discount_amount?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
    discount_price?: number;
    min_offer_quantity?: number;
    code?: string;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
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
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionListItem = {
    restrictions?: Restrictions1;
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    apply_priority?: number;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    mode: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    restrictions?: Restrictions1;
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    apply_priority?: number;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    mode: string;
};
type PromotionUpdate = {
    restrictions?: Restrictions1;
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    apply_priority?: number;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    mode: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    type?: string;
    entity_type?: string;
    is_hidden?: boolean;
    created_on?: string;
    subtitle?: string;
    title?: string;
    modified_on?: string;
    example?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    you_saved?: number;
    fynd_cash?: number;
    vog?: number;
    cod_charge?: number;
    discount?: number;
    total?: number;
    coupon?: number;
    delivery_charge?: number;
    gst_charges?: number;
    mrp_total?: number;
    subtotal?: number;
    convenience_fee?: number;
};
type CouponBreakup = {
    is_applied?: boolean;
    type?: string;
    uid?: string;
    value?: number;
    code?: string;
    message?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    description?: string;
    applicable?: number;
    total?: number;
};
type DisplayBreakup = {
    key?: string;
    value?: number;
    currency_code?: string;
    message?: string[];
    currency_symbol?: string;
    display?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
};
type DiscountRulesApp = {
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    raw_offer?: any;
};
type FreeGiftItem = {
    item_slug?: string;
    item_price_details?: any;
    item_id?: number;
    item_name?: string;
    item_images_url?: string[];
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    promo_id?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
    promotion_group?: string;
    article_quantity?: number;
    amount?: number;
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    promotion_name?: string;
};
type PromoMeta = {
    message?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    images?: ProductImage[];
    type?: string;
    uid?: number;
    brand?: BaseInfo;
    slug?: string;
    name?: string;
    categories?: CategoryInfo[];
};
type ProductAvailability = {
    out_of_stock?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
};
type ProductPrice = {
    marked?: number;
    currency_code?: string;
    effective?: number;
    selling?: number;
    add_on?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    type?: string;
    uid?: string;
    parent_item_identifiers?: any;
    seller?: BaseInfo;
    store?: BaseInfo;
    extra_meta?: any;
    size?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    promotions_applied?: AppliedPromotion[];
    key?: string;
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    discount?: string;
    bulk_offer?: any;
    is_set?: boolean;
    product?: CartProduct;
    availability?: ProductAvailability;
    price_per_unit?: ProductPriceInfo;
    message?: string;
    price?: ProductPriceInfo;
    article?: ProductArticle;
    coupon_message?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
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
    area?: string;
    pincode?: number;
    landmark?: string;
    area_code: string;
    area_code_slug?: string;
    phone?: number;
    state?: string;
    address_type?: string;
    name?: string;
    email?: string;
    meta?: any;
    country_code?: string;
    city?: string;
    address?: string;
    country?: string;
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
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    discount: number;
    cod_charges: number;
    product_id: number;
    amount_paid: number;
    extra_meta?: any;
    size: string;
    delivery_charges: number;
    coupon_effective_discount: number;
    cashback_applied: number;
    files?: OpenApiFiles[];
    price_marked: number;
    meta?: CartItemMeta;
    quantity?: number;
    employee_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    coupon_value: number;
    payment_mode?: string;
    coupon?: string;
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    shipping_address?: ShippingAddress;
    gstin?: string;
    order_id?: string;
    currency_code?: string;
    cod_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    comment?: string;
    affiliate_order_id?: string;
    cashback_applied: number;
    cart_value: number;
    loyalty_discount?: number;
    billing_address: ShippingAddress;
    employee_discount?: any;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    order_id: string;
    success?: boolean;
    message?: string;
};
type AbandonedCart = {
    last_modified: string;
    _id: string;
    created_on: string;
    checkout_mode?: string;
    user_id: string;
    payments?: any;
    coupon?: any;
    delivery_charges?: any;
    promotion?: any;
    cashback: any;
    app_id?: string;
    order_id?: string;
    comment?: string;
    meta?: any;
    buy_now?: boolean;
    is_default: boolean;
    fc_index_map?: number[];
    expire_at: string;
    shipments?: any[];
    articles: any[];
    uid: number;
    discount?: number;
    pick_up_customer_details?: any;
    payment_mode?: string;
    gstin?: string;
    is_active?: boolean;
    cod_charges?: any;
    payment_methods?: any[];
    fynd_credits?: any;
    bulk_coupon_discount?: number;
    cart_value?: number;
    is_archive?: boolean;
    merge_qty?: boolean;
};
type AbandonedCartResponse = {
    success?: boolean;
    page?: Page;
    result?: any;
    message?: string;
    items?: AbandonedCart[];
};
type AddProductCart = {
    pos?: boolean;
    store_id?: number;
    parent_item_identifiers?: any;
    article_id?: string;
    article_assignment?: any;
    item_id?: number;
    extra_meta?: any;
    item_size?: string;
    seller_id?: number;
    product_group_tags?: string[];
    display?: string;
    quantity?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    id?: string;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    coupon_text?: string;
    message?: string;
    buy_now?: boolean;
    is_valid?: boolean;
    gstin?: string;
    items?: CartProductInfo[];
    restrict_checkout?: boolean;
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
    item_id?: number;
    extra_meta?: any;
    item_size?: string;
    item_index?: number;
    quantity?: number;
    identifiers: CartProductIdentifer;
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
