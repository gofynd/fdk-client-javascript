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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, ShipmentStatus, Prices, UserDataInfo, PaymentModeInfo, GSTDetailsData, PlatformItem, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagStateMapper, CurrentStatus, BagGST, PlatformDeliveryAddress, BagConfigs, OrderBrandName, OrderBagArticle, Identifier, FinancialBreakup, OrderBags, UserDetailsData, OrderDetailsData, DPDetailsData, BagStatusHistory, TrackingList, FulfillingStore, ShipmentStatusData, ShipmentPayments, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagGSTDetails, Dates, B2BPODetails, BagMeta, AffiliateMeta, PDFLinks, BuyerDetails, Formatted, EInvoice, EinvoiceInfo, ShipmentTimeStamp, DebugInfo, LockData, ShipmentMeta, AffiliateDetails, Brand, ArticleDetails, Attributes, Item, ReturnConfig, Dimensions, Weight, Article, BagReturnableCancelableStatus, AffiliateBagDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, OrderPriority, UserData, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, BillingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionBadge, CollectionImage, SeoDetail, UserInfo, CollectionBanner, CollectionSchedule, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TeaserTag, Trader, TaxIdentifier, NetQuantity, CustomOrder, ProductPublish, ProductCreateUpdateSchemaV2, Logo, NetQuantityResponse, Image, ProductPublished, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, DimensionResponse, Trader1, CompanyMeta, QuantityBase, Quantities, PriceMeta, ManufacturerResponse, BrandMeta, ReturnConfig1, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, DimensionResponse1, Trader2, CompanyMeta1, ArticleStoreResponse, Quantity, QuantitiesArticle, PriceArticle, ManufacturerResponse1, BrandMeta1, ReturnConfig2, WeightResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, UserSerializer2, ProductReturnConfigSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PostOrder, Restrictions, Ownership, CouponDateMeta, RuleDefinition, DisplayMetaDict, DisplayMeta, State, CouponAuthor, Validity, CouponAction, CouponSchedule, Validation, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, Visibility, DisplayMeta1, PromotionDateMeta, PromotionAction, PromotionSchedule, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, Restrictions1, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, PromoMeta, ProductAvailability, ProductImage, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, CartProductIdentifer, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, LoyaltyPoints, RawBreakup, CouponBreakup, DisplayBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
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
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
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
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
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
    aggregators?: any[];
    app_id: string;
    display_fields: string[];
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    secret: string;
    key: string;
    is_active?: boolean;
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
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type PaymentModeList = {
    nickname?: string;
    cod_limit_per_order?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    cod_limit?: number;
    code?: string;
    name?: string;
    card_number?: string;
    display_name?: string;
    card_reference?: string;
    card_issuer?: string;
    retry_count?: number;
    card_fingerprint?: string;
    remaining_limit?: number;
    card_brand?: string;
    expired?: boolean;
    fynd_vpa?: string;
    card_name?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
    card_brand_image?: string;
    display_priority?: number;
    aggregator_name: string;
    exp_month?: number;
    intent_app_error_list?: string[];
    card_id?: string;
    exp_year?: number;
    merchant_code?: string;
    logo_url?: PaymentModeLogo;
    card_token?: string;
    card_isin?: string;
    intent_app?: IntentApp[];
    card_type?: string;
    intent_flow?: boolean;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    name: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    display_name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    transfer_type: string;
    more_attributes: any;
    is_active: boolean;
    is_default: boolean;
    unique_transfer_no: any;
    customers: any;
    payouts_aggregators: any[];
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_holder?: string;
    state?: string;
    bank_name?: string;
    city?: string;
    country?: string;
    pincode?: number;
    ifsc_code: string;
    branch_name?: string;
    account_no?: string;
    account_type: string;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    aggregator: string;
    users: any;
    is_active: boolean;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    success: boolean;
    bank_details: any;
    transfer_type: string;
    payouts: any;
    aggregator: string;
    users: any;
    is_active: boolean;
    payment_status: string;
    unique_transfer_no: string;
    created: boolean;
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
    data?: any;
    message: string;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    created_on: string;
    subtitle: string;
    ifsc_code: string;
    display_name: string;
    beneficiary_id: string;
    delights_user_name?: string;
    bank_name: string;
    branch_name?: string;
    transfer_mode: string;
    is_active: boolean;
    email: string;
    account_holder: string;
    modified_on: string;
    title: string;
    id: number;
    mobile?: string;
    account_no: string;
    address: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    current_status?: string;
    order_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type PlatformPaymentOptions = {
    source: string;
    mode_of_payment: string;
    callback_url?: any;
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    cod_charges?: number;
    methods: any;
    enabled: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    cod_charges?: number;
    methods: any;
};
type CODdata = {
    remaining_limit: number;
    user_id: string;
    limit: number;
    usages: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    is_active: boolean;
    merchant_user_id: string;
    mobileno: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    hex_code: string;
    title: string;
    actual_status: string;
    ops_status: string;
    status: string;
};
type Prices = {
    refund_amount?: number;
    amount_paid_roundoff?: number;
    discount?: number;
    amount_paid?: number;
    delivery_charge?: number;
    price_effective?: number;
    cod_charges?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    cashback_applied?: number;
    cashback?: number;
    fynd_credits?: number;
    value_of_good?: number;
    coupon_value?: number;
    price_marked?: number;
    refund_credit?: number;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    name?: string;
    uid?: number;
    last_name?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    avis_user_id?: string;
    first_name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type PlatformItem = {
    can_return?: boolean;
    color?: string;
    image?: string[];
    size?: string;
    images?: string[];
    can_cancel?: boolean;
    code?: string;
    id?: number;
    name?: string;
    l3_category_name?: string;
    l3_category?: number;
    department_id?: number;
    l1_category?: string[];
};
type BagUnit = {
    can_return?: boolean;
    shipment_id: string;
    bag_id: number;
    total_shipment_bags: number;
    prices?: Prices;
    can_cancel?: boolean;
    ordering_channel: string;
    item_quantity: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    status: any;
};
type ShipmentItem = {
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    prices?: Prices;
    payment_methods?: any;
    fulfilling_centre: string;
    sla?: any;
    total_bags_count: number;
    user?: UserDataInfo;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    channel?: any;
    total_shipments_in_order: number;
    shipment_created_at: number;
    bags?: BagUnit[];
    application?: any;
    created_at: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
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
    article_quantity?: number;
    mrp_promotion?: boolean;
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    promo_id?: string;
    buy_rules?: BuyRules[];
    amount?: number;
    promotion_type?: string;
};
type BagStateMapper = {
    app_display_name?: string;
    state_type: string;
    is_active?: boolean;
    notify_customer?: boolean;
    bs_id: number;
    app_facing?: boolean;
    journey_type: string;
    name: string;
    display_name: string;
    app_state_name?: string;
};
type CurrentStatus = {
    state_type?: string;
    store_id?: number;
    delivery_partner_id?: number;
    bag_id?: number;
    delivery_awb_number?: number;
    state_id?: number;
    shipment_id?: string;
    current_status_id: number;
    updated_at?: number;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    kafka_sync?: boolean;
    created_at?: string;
};
type BagGST = {
    hsn_code?: string;
    gst_tax_percentage?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    gst_fee?: number;
    gstin_code?: string;
    brand_calculated_amount?: number;
};
type PlatformDeliveryAddress = {
    address2?: string;
    country?: string;
    contact_person?: string;
    area?: string;
    phone?: string;
    pincode?: string;
    state?: string;
    address1?: string;
    updated_at?: string;
    address_type?: string;
    email?: string;
    version?: string;
    longitude?: number;
    latitude?: number;
    city?: string;
    landmark?: string;
    address_category?: string;
    created_at?: string;
};
type BagConfigs = {
    allow_force_return: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBrandName = {
    logo: string;
    modified_on?: number;
    id: number;
    created_on: number;
    company: string;
    brand_name: string;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tax_percentage: number;
    amount_paid_roundoff?: number;
    size: string;
    cashback: number;
    value_of_good: number;
    added_to_fynd_cash: boolean;
    amount_paid: number;
    delivery_charge: number;
    cod_charges: number;
    gst_tag: string;
    gst_fee: string;
    refund_credit: number;
    hsn_code: string;
    total_units: number;
    promotion_effective_discount: number;
    tax_collected_at_source?: number;
    cashback_applied: number;
    coupon_effective_discount: number;
    identifiers: Identifier;
    item_name: string;
    discount: number;
    price_effective: number;
    pm_price_split: any;
    fynd_credits: number;
    transfer_price: number;
    coupon_value: number;
    brand_calculated_amount: number;
    price_marked: number;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    parent_promo_bags?: any;
    seller_identifier?: string;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    bag_configs?: BagConfigs;
    prices?: Prices;
    brand?: OrderBrandName;
    display_name?: string;
    item?: PlatformItem;
    bag_id: number;
    can_cancel?: boolean;
    article?: OrderBagArticle;
    financial_breakup?: FinancialBreakup[];
    line_number?: number;
    entity_type?: string;
    quantity?: number;
};
type UserDetailsData = {
    country: string;
    pincode: string;
    phone: string;
    state: string;
    name: string;
    email: string;
    address: string;
    city: string;
};
type OrderDetailsData = {
    affiliate_id?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    source?: string;
    fynd_order_id: string;
    tax_details?: any;
    order_date?: string;
    order_value?: string;
};
type DPDetailsData = {
    country?: string;
    track_url?: string;
    pincode?: string;
    awb_no?: string;
    name?: string;
    id?: string;
    gst_tag?: string;
    eway_bill_id?: string;
};
type BagStatusHistory = {
    state_type?: string;
    created_at: string;
    app_display_name?: boolean;
    store_id: number;
    shipment_id: string;
    delivery_partner_id?: number;
    bag_id: number;
    state_id: number;
    delivery_awb_number?: string;
    reasons?: any[];
    updated_at?: string;
    bsh_id: number;
    display_name?: boolean;
    bag_state_mapper: BagStateMapper;
    forward?: boolean;
    kafka_sync?: boolean;
    status: string;
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    text: string;
    status: string;
};
type FulfillingStore = {
    contact_person: string;
    country: string;
    fulfillment_channel: string;
    phone: string;
    pincode: string;
    state: string;
    code: string;
    id: string;
    address: string;
    meta: any;
    city: string;
    store_name: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    bag_list?: number[];
    id?: number;
    status?: string;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type ShipmentInfoResponse = {
    refund_text?: string;
    forward_order_status?: any[];
    refund_details?: any;
    payment_mode?: string;
    go_green?: boolean;
    enable_tracking?: boolean;
    total_items?: number;
    items: any[];
    enable_dp_tracking?: string;
    is_pdsr?: string;
    forward_shipment_status?: any[];
    gst_details?: GSTDetailsData;
    escalation?: any;
    kirana_store_id?: string;
    bags?: OrderBags[];
    current_shipment_status: any;
    status_progress: number;
    forward_tracking_list?: any[];
    pay_button?: string;
    can_return?: boolean;
    prices?: Prices;
    delivery_details?: UserDetailsData;
    operational_status?: string;
    replacement_details?: string;
    vertical?: string;
    is_invoiced: boolean;
    is_fynd_coupon: boolean;
    custom_meta?: any[];
    coupon?: any;
    mid?: string;
    delivery_slot?: any;
    shipment_status?: string;
    order?: OrderDetailsData;
    dp_details?: DPDetailsData;
    bag_status_history?: BagStatusHistory[];
    order_status: any;
    credit_note_id: string;
    fyndstore_emp: any;
    child_nodes?: string[];
    email_id: string;
    user_info?: any;
    can_cancel?: boolean;
    beneficiary_details?: boolean;
    order_type: string;
    bank_data?: any;
    is_fynd_store?: string;
    tracking_list?: TrackingList[];
    affiliate_shipment_id: string;
    due_date?: string;
    picked_date?: string;
    platform_logo: boolean;
    packaging_type?: string;
    is_packaging_order: boolean;
    billing_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    status?: ShipmentStatusData;
    invoice: any;
    can_break: string;
    shipment_id: string;
    is_not_fynd_source: boolean;
    tracking_url: string;
    user_agent?: string;
    delivery_status: any[];
    journey_type?: string;
    user_id: string;
    lock_status: string;
    total_bags?: number;
    shipment_images?: string[];
    priority_text?: string;
    order_created_time?: string;
    secured_delivery_flag?: string;
    ordering_store: any;
    company: any;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
};
type PlatformShipment = {
    payment_mode?: string;
    total_items?: number;
    enable_dp_tracking?: string;
    gst_details?: GSTDetailsData;
    bags?: OrderBags[];
    prices?: Prices;
    delivery_details?: UserDetailsData;
    operational_status?: string;
    vertical?: string;
    custom_meta?: any[];
    coupon?: any;
    delivery_slot?: any;
    shipment_status?: string;
    order?: OrderDetailsData;
    dp_details?: DPDetailsData;
    bag_status_history?: BagStatusHistory[];
    tracking_list?: TrackingList[];
    picked_date?: string;
    platform_logo?: string;
    packaging_type?: string;
    billing_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    status?: ShipmentStatusData;
    shipment_id: string;
    user_agent?: string;
    journey_type?: string;
    total_bags?: number;
    shipment_images?: string[];
    priority_text?: string;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
};
type OrderMeta = {
    currency_symbol?: string;
    payment_type?: string;
    extra_meta?: any;
    staff?: any;
    files?: any[];
    mongo_cart_id?: number;
    order_type?: string;
    cart_id?: number;
    order_platform?: string;
    customer_note?: string;
    order_child_entities?: string[];
    ordering_store?: number;
    employee_id?: number;
    order_tags?: any[];
    comment?: string;
};
type OrderDict = {
    shipment_count: number;
    payment_methods?: any;
    fynd_order_id: string;
    meta?: OrderMeta;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    total_items?: number;
    index?: number;
    actions?: any[];
    value?: string;
};
type SuperLane = {
    options?: SubLane[];
    total_items?: number;
    value: string;
    text: string;
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
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    shipments?: PlatformShipment[];
    payment_mode?: string;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    channel?: PlatformChannel;
    order_created_time?: string;
    order_id?: string;
    meta?: any;
    order_value?: number;
};
type OrderListingResponse = {
    total_count?: number;
    items?: PlatformOrderItems[];
    message?: string;
    page?: Page;
    success?: boolean;
    lane?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    key: string;
    value: number;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    account_name?: string;
    raw_status?: string;
    shipment_type?: string;
    updated_at?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    meta?: any;
    awb?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    returned?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    s3_key?: string;
    report_created_at?: string;
    report_type?: string;
    display_name?: string;
    request_details?: any;
    report_name?: string;
    report_requested_at?: string;
    report_id?: string;
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
    trace_id?: string;
    data?: any[];
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    label?: any;
    store_id?: string;
    company_id?: string;
    store_code?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
    data?: any;
    invoice_status?: string;
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
    content_type?: string;
    operation?: string;
    file_name?: string;
    size?: number;
    namespace?: string;
    file_path?: string;
    cdn?: URL;
    tags?: string[];
    upload?: FileUploadResponse;
    method?: string;
};
type bulkListingData = {
    processing?: number;
    batch_id?: string;
    failed?: number;
    excel_url?: string;
    company_id?: number;
    total?: number;
    file_name?: string;
    store_id?: number;
    processing_shipments?: string[];
    uploaded_on?: string;
    user_name?: string;
    store_name?: string;
    status?: string;
    successful_shipments?: any[];
    successful?: number;
    store_code?: string;
    user_id?: string;
    id?: string;
    failed_shipments?: any[];
};
type BulkListingPage = {
    has_next?: boolean;
    size?: number;
    type?: string;
    has_previous?: boolean;
    current?: number;
    total?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
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
    id?: number;
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
    uploaded_by?: string;
    user_id?: string;
    success?: string;
    failed_records?: string[];
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    message?: string;
    error?: string[];
};
type BagGSTDetails = {
    hsn_code: string;
    gst_tax_percentage: number;
    sgst_gst_fee: string;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    tax_collected_at_source: number;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    value_of_good: number;
    gst_fee: number;
    igst_gst_fee: string;
    cgst_gst_fee: string;
    hsn_code_id: string;
    gstin_code?: string;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateMeta = {
    size_level_total_qty?: number;
    is_priority?: boolean;
    loyalty_discount?: number;
    order_item_id?: string;
    quantity?: number;
    coupon_code?: string;
    channel_shipment_id?: string;
    due_date?: string;
    box_type?: string;
    employee_discount?: number;
    channel_order_id?: string;
};
type PDFLinks = {
    invoice_pos?: string;
    invoice?: string;
    label?: string;
    invoice_a4?: string;
    label_pos?: string;
    label_type: string;
    label_a4?: string;
    b2b?: string;
    credit_note_url?: string;
    invoice_a6?: string;
    invoice_type: string;
    label_a6?: string;
    po_invoice?: string;
};
type BuyerDetails = {
    gstin: string;
    pincode: number;
    state: string;
    ajio_site_id?: string;
    name: string;
    address: string;
    city: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type EInvoice = {
    error_message?: string;
    irn?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
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
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    forward_affiliate_shipment_id?: string;
    dp_name?: string;
    dp_options?: any;
    return_affiliate_shipment_id?: string;
    b2b_buyer_details?: BuyerDetails;
    return_awb_number?: string;
    po_number?: string;
    fulfilment_priority_text?: string;
    formatted?: Formatted;
    weight: number;
    bag_weight?: any;
    assign_dp_from_sb?: boolean;
    shipment_weight?: number;
    return_details?: any;
    awb_number?: string;
    einvoice_info?: EinvoiceInfo;
    return_store_node?: number;
    same_store_available: boolean;
    shipment_volumetric_weight?: number;
    dp_id?: string;
    order_type?: string;
    external?: any;
    box_type?: string;
    dp_sort_key?: string;
    due_date?: string;
    forward_affiliate_order_id?: string;
    marketplace_store_id?: string;
    timestamp?: ShipmentTimeStamp;
    store_invoice_updated_date?: string;
    packaging_name?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
    return_affiliate_order_id?: string;
    lock_data?: LockData;
    auto_trigger_dp_assignment_acf: boolean;
    b2c_buyer_details?: any;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_id?: string;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    affiliate_shipment_id: string;
    pdf_links?: PDFLinks;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
};
type Brand = {
    start_date?: string;
    script_last_ran?: string;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    modified_on?: number;
    brand_id: number;
    is_virtual_invoice?: boolean;
    brand_name: string;
    created_on?: number;
    pickup_location?: string;
    company: string;
    logo?: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    primary_material?: string;
    primary_color?: string;
    name?: string;
    essential?: string;
    gender?: string[];
    marketer_name?: string;
    marketer_address?: string;
    brand_name?: string;
    primary_color_hex?: string;
};
type Item = {
    webstore_product_url?: string;
    last_updated_at?: string;
    slug_key: string;
    size: string;
    l3_category_name?: string;
    code?: string;
    l3_category?: number;
    l1_category_id?: number;
    meta?: any;
    gender?: string;
    l1_category?: string[];
    can_return?: boolean;
    attributes: Attributes;
    brand: string;
    name: string;
    department_id?: number;
    l2_category_id?: number;
    item_id: number;
    image: string[];
    can_cancel?: boolean;
    color?: string;
    brand_id: number;
    branch_url?: string;
    l2_category?: string[];
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Dimensions = {
    is_default?: boolean;
    width?: number;
    height?: number;
    length?: number;
    unit?: string;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Article = {
    esp_modified?: any;
    _id: string;
    is_set?: boolean;
    size: string;
    return_config?: ReturnConfig;
    code?: string;
    uid: string;
    dimensions?: Dimensions;
    raw_meta?: any;
    seller_identifier: string;
    weight?: Weight;
    identifiers: Identifier;
    a_set?: any;
    child_details?: any;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
};
type Document = {
    ds_type: string;
    legal_name: string;
    url?: string;
    verified: boolean;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    user?: string;
    username?: string;
    password?: string;
    enabled: boolean;
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
    username?: string;
    user?: string;
};
type StoreMeta = {
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    stage: string;
    notification_emails?: string[];
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    gst_number?: string;
    product_return_config?: any;
    timing?: any[];
    ewaybill_portal_details?: any;
};
type StoreAddress = {
    country: string;
    address1: string;
    latitude: number;
    created_at: string;
    pincode: number;
    longitude: number;
    landmark?: string;
    address_category: string;
    country_code: string;
    address_type: string;
    version?: string;
    city: string;
    address2?: string;
    contact_person: string;
    area?: string;
    phone: string;
    updated_at: string;
    email?: string;
    state: string;
};
type Store = {
    country: string;
    location_type: string;
    address1: string;
    s_id: string;
    code?: string;
    latitude: number;
    store_active_from?: string;
    meta: StoreMeta;
    alohomora_user_id?: number;
    created_at: string;
    pincode: string;
    company_id: number;
    state: string;
    name: string;
    login_username: string;
    longitude: number;
    brand_store_tags?: string[];
    is_enabled_for_recon?: boolean;
    parent_store_id?: number;
    packaging_material_count?: number;
    vat_no?: string;
    address2?: string;
    contact_person: string;
    is_active?: boolean;
    fulfillment_channel: string;
    mall_area?: string;
    order_integration_id?: string;
    phone: number;
    is_archived?: boolean;
    updated_at?: string;
    brand_id?: any;
    store_email: string;
    mall_name?: string;
    store_address_json?: StoreAddress;
    city: string;
};
type BagDetailsPlatformResponse = {
    applied_promos?: any[];
    current_status: BagStatusHistory;
    no_of_bags_order?: number;
    gst_details: BagGSTDetails;
    bag_update_time?: number;
    parent_promo_bags?: any;
    seller_identifier?: string;
    identifier?: string;
    dates?: Dates;
    meta?: BagMeta;
    affiliate_details?: AffiliateDetails;
    prices: Prices;
    operational_status?: string;
    restore_promos?: any;
    brand: Brand;
    article_details?: ArticleDetails;
    qc_required?: any;
    display_name?: string;
    b_type?: string;
    tags?: string[];
    item: Item;
    bag_status_history?: BagStatusHistory;
    reasons?: any[];
    article: Article;
    financial_breakup: FinancialBreakup[];
    status: BagReturnableCancelableStatus;
    bag_status: BagStatusHistory[];
    shipment_id?: string;
    current_operational_status: BagStatusHistory;
    order_integration_id?: string;
    b_id: number;
    line_number?: number;
    entity_type?: string;
    journey_type: string;
    quantity?: number;
    original_bag_list?: number[];
    affiliate_bag_details: AffiliateBagDetails;
    ordering_store?: Store;
    restore_coupon?: boolean;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    size: number;
    item_total: number;
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
    shipment_id?: string;
    error?: string;
    message?: string;
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
    affiliate_bag_id?: string;
    bag_id?: number;
    item_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    store_id: number;
    affiliate_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    id?: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action_type: string;
    action: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    lock_status?: boolean;
    shipment_id?: string;
    bags?: Bags[];
    status?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    id: number;
    platform_name?: string;
    description?: string;
    logo_url?: string;
    title?: string;
    platform_id?: string;
    company_id?: number;
    to_datetime?: string;
    from_datetime?: string;
    created_at?: string;
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
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
    quantity?: number;
    line_number?: number;
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
type ShipmentsRequest = {
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    meta?: any;
    stack_trace?: string;
    identifier?: string;
    code?: string;
    message?: string;
    status?: number;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    id: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    token: string;
    owner: string;
    created_at: string;
    updated_at: string;
    name: string;
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
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    affiliate: Affiliate;
    create_user?: boolean;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
};
type OrderUser = {
    address2?: string;
    email: string;
    state: string;
    first_name: string;
    city: string;
    last_name: string;
    country: string;
    pincode: string;
    phone: number;
    mobile: number;
    address1?: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    weight: any;
    brand_id: number;
    attributes: any;
    quantity: number;
    category: any;
    dimension: any;
};
type ShipmentDetails = {
    fulfillment_id: number;
    meta?: any;
    box_type?: string;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    source: string;
    action: string;
    identifier: string;
    journey: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    price_marked: number;
    transfer_price: number;
    discount: number;
    quantity: number;
    price_effective: number;
    modified_on: string;
    hsn_code_id: string;
    _id: string;
    seller_identifier: string;
    amount_paid: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
    unit_price: number;
    item_size: string;
    identifier: any;
    item_id: number;
    fynd_store_id: string;
    company_id: number;
    avl_qty: number;
    affiliate_meta: any;
    sku: string;
    store_id: number;
};
type OrderInfo = {
    payment?: any;
    discount: number;
    cod_charges: number;
    items: any;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    delivery_charges: number;
    order_value: number;
    user: UserData;
    shipment?: ShipmentData;
    payment_mode: string;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    id: number;
    slug: string;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l1_detail?: string;
    type: string;
    l2_detail?: string;
    bag_id?: number;
    ticket_id?: string;
    l3_detail?: string;
    user: string;
    message: string;
    ticket_url?: string;
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
    amount_paid: number;
    order_id: string;
    phone_number: number;
    brand_name: string;
    customer_name: string;
    message: string;
    payment_mode: string;
    shipment_id: number;
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
    id: number;
    bag_list?: number[];
    meta: Meta;
    remarks?: string;
    shipment_id?: string;
    status?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type PaymentMethod = {
    mode: string;
    meta?: any;
    refund_by: string;
    collect_by: string;
    transaction_data?: any;
    amount: number;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type BillingInfo = {
    state: string;
    customer_code?: string;
    city: string;
    last_name?: string;
    title?: string;
    house_no?: string;
    gender?: string;
    primary_email: string;
    alternate_mobile_number?: string;
    floor_no?: string;
    country: string;
    pincode: string;
    address1: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    middle_name?: string;
    country_code?: string;
    address2?: string;
    alternate_email?: string;
    first_name: string;
    state_code?: string;
};
type Tax = {
    breakup?: any[];
    rate: number;
    amount: any;
    name: string;
};
type Charge = {
    tax?: Tax;
    type: string;
    code?: string;
    amount: any;
    name: string;
};
type LineItem = {
    seller_identifier: string;
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
};
type Shipment = {
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    shipping_type?: string;
    state: string;
    customer_code?: string;
    city: string;
    last_name?: string;
    title?: string;
    house_no?: string;
    address_type?: string;
    gender?: string;
    primary_email: string;
    alternate_mobile_number?: string;
    floor_no?: string;
    country: string;
    pincode: string;
    landmark?: string;
    address1: string;
    external_customer_code?: string;
    geo_location?: any;
    primary_mobile_number: string;
    slot?: any[];
    middle_name?: string;
    country_code?: string;
    address2?: string;
    alternate_email?: string;
    first_name: string;
    state_code?: string;
};
type CreateOrderAPI = {
    meta?: any;
    payment_info: PaymentInfo;
    external_order_id?: string;
    billing_info: BillingInfo;
    charges: Charge[];
    external_creation_date?: string;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    exception?: string;
    meta?: string;
    stack_trace?: string;
    code?: string;
    info?: any;
    message: string;
    request_id?: string;
    status: number;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    start_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    app_id?: string;
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
};
type GetSearchWordsData = {
    app_id?: string;
    result?: any;
    words?: string[];
    is_active?: boolean;
    uid?: string;
    _custom_json?: any;
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
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    results?: AutocompleteResult[];
    _custom_json?: any;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    words?: string[];
    uid?: string;
    results?: any[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    auto_select?: boolean;
    min_quantity: number;
    max_quantity: number;
    product_uid: number;
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    logo?: string;
    meta?: any;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    created_on?: string;
    modified_by?: any;
    name: string;
    choice: string;
    slug: string;
    company_id?: number;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    logo?: string;
    meta?: any;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    created_on?: string;
    modified_by?: any;
    id?: string;
    name: string;
    choice: string;
    slug: string;
    company_id?: number;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    logo?: string;
    meta?: any;
    is_active: boolean;
    page_visibility?: string[];
    modified_by?: any;
    name: string;
    choice: string;
    slug: string;
    company_id?: number;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type Price = {
    min_marked?: number;
    currency?: string;
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
};
type LimitedProductData = {
    sizes?: string[];
    price?: any;
    short_description?: string;
    identifier?: any;
    quantity?: number;
    attributes?: any;
    name?: string;
    country_of_origin?: string;
    slug?: string;
    uid?: number;
    item_code?: string;
    images?: string[];
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    allow_remove?: boolean;
    auto_select?: boolean;
    price?: Price;
    min_quantity?: number;
    max_quantity?: number;
    product_uid?: number;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    same_store_assignment?: boolean;
    logo?: string;
    meta?: any;
    page_visibility?: string[];
    is_active?: boolean;
    name?: string;
    choice?: string;
    slug?: string;
    company_id?: number;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_on?: string;
    subtitle?: string;
    created_by?: any;
    created_on?: string;
    tag?: string;
    active?: boolean;
    description?: string;
    title: string;
    guide?: Guide;
    modified_by?: any;
    id?: string;
    name: string;
    image?: string;
    company_id?: number;
    brand_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_on?: string;
    created_on?: string;
    created_by?: any;
    subtitle?: string;
    tag?: string;
    active?: boolean;
    title?: string;
    modified_by?: any;
    guide?: any;
    id?: string;
    name?: string;
    company_id?: number;
    brand_id?: number;
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
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    alt_text?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    moq?: MOQData;
    is_gift?: boolean;
    seo?: SEOData;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    display_type: string;
    priority: number;
    logo?: string;
    unit?: string;
    is_active: boolean;
    name: string;
    slug?: string;
    key?: string;
};
type AppConfigurationDetail = {
    app_id: string;
    logo?: string;
    priority: number;
    is_active: boolean;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    name?: string;
    slug: string;
    is_default: boolean;
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
    app_id: string;
    logo?: string;
    priority: number;
    is_active: boolean;
    name?: string;
    default_key: string;
    key: string;
    is_default: boolean;
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
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    name: string;
    size: ProductSize;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    priority: number;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
    title?: string;
    size?: ProductSize;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationListingSortConfig = {
    priority: number;
    logo?: string;
    is_active: boolean;
    name?: string;
    key: string;
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
    condition?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    value?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    display_name?: string;
    priority: number;
    logo?: string;
    type: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    app_id: string;
    modified_on?: string;
    config_type: string;
    type?: string;
    created_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
    config_id?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    app_id: string;
    modified_on?: string;
    config_type: string;
    type?: string;
    created_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
    config_id?: string;
    modified_by?: any;
    id?: string;
    listing?: ConfigurationListing;
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
    app_id: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    count?: number;
    currency_code?: string;
    selected_max?: number;
    display: string;
    selected_min?: number;
    query_format?: string;
    min?: number;
    max?: number;
    is_selected: boolean;
    value: any;
    currency_symbol?: string;
    display_format?: string;
};
type ProductFiltersKey = {
    logo?: string;
    display: string;
    operators?: string[];
    name: string;
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
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionSchedule = {
    end?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    duration?: number;
    cron?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type CreateCollection = {
    allow_facets?: boolean;
    type: string;
    visible_facets_keys?: string[];
    _locale_language?: any;
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    name: string;
    is_visible?: boolean;
    logo: CollectionImage;
    meta?: any;
    seo?: SeoDetail;
    tags?: string[];
    app_id: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    allow_sort?: boolean;
    banners: CollectionBanner;
    slug: string;
    _custom_json?: any;
    priority?: number;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
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
    allow_facets?: boolean;
    type?: string;
    visible_facets_keys?: string[];
    description?: string;
    badge?: any;
    name?: string;
    logo?: BannerImage;
    meta?: any;
    tag?: string[];
    app_id?: string;
    allow_sort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    priority?: number;
    _schedule?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
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
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    type?: string;
    visible_facets_keys?: string[];
    description?: string;
    badge?: any;
    name?: string;
    logo?: Media1;
    meta?: any;
    tag?: string[];
    action?: Action;
    app_id?: string;
    allow_sort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    priority?: number;
    _schedule?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    uid?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    app_id?: string;
    allow_facets?: boolean;
    logo?: Media1;
    priority?: number;
    type?: string;
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    query?: CollectionQuery[];
    tag?: string[];
    _schedule?: any;
    meta?: any;
    badge?: any;
    allow_sort?: boolean;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    cron?: any;
};
type UpdateCollection = {
    allow_facets?: boolean;
    type?: string;
    visible_facets_keys?: string[];
    _locale_language?: any;
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    name?: string;
    is_visible?: boolean;
    logo?: CollectionImage;
    meta?: any;
    seo?: SeoDetail;
    tags?: string[];
    modified_by?: UserInfo;
    allow_sort?: boolean;
    banners?: CollectionBanner;
    slug?: string;
    _custom_json?: any;
    priority?: number;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
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
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    uid?: number;
    action?: Action;
    name?: string;
    logo?: Media1;
};
type ProductListingDetail = {
    teaser_tag?: any;
    type?: string;
    promo_meta?: any;
    description?: string;
    sellable?: boolean;
    name?: string;
    item_type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    rating_count?: number;
    similars?: string[];
    item_code?: string;
    tryouts?: string[];
    discount?: string;
    rating?: number;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    product_online_date?: string;
    slug: string;
    image_nature?: string;
    highlights?: string[];
    short_description?: string;
    medias?: Media1[];
    color?: string;
    attributes?: any;
    uid?: number;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type CatalogInsightBrand = {
    total_articles?: number;
    available_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
    name?: string;
    available_sizes?: number;
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
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    store_ids?: number[];
    opt_level: string;
    platform?: string;
    company_id?: number;
    enabled?: boolean;
    brand_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    store_ids: number[];
    opt_level: string;
    created_on: number;
    platform: string;
    created_by?: any;
    modified_by?: any;
    company_id: number;
    enabled: boolean;
    brand_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    company_id?: number;
    brand_id?: number;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    modified_on?: string;
    display_name?: string;
    documents?: any[];
    created_on?: string;
    store_code?: string;
    address?: any;
    manager?: any;
    timing?: any;
    additional_contacts?: any[];
    name?: string;
    store_type?: string;
    uid?: number;
    company_id?: number;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
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
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    type: string;
    format?: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    allowed_values?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    description?: string;
    departments?: string[];
    schema?: AttributeMaster;
    id?: string;
    name?: string;
    slug?: string;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    status?: number;
    meta?: any;
    message?: string;
    code?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    logo: string;
    is_active?: boolean;
    _custom_json?: any;
    name: string;
    priority_order: number;
    slug?: string;
    uid?: number;
    tags?: string[];
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
type UserSerializer = {
    _id?: string;
    user_id?: string;
    username?: string;
    contact?: string;
    uid?: string;
};
type GetDepartment = {
    modified_on?: string;
    synonyms?: string[];
    page_no?: number;
    page_size?: number;
    logo?: string;
    search?: string;
    created_on?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    modified_by?: UserSerializer;
    name?: string;
    item_type?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    status?: number;
    meta?: any;
    message?: string;
    code?: string;
};
type UserDetail = {
    contact?: string;
    username: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    modified_on: string;
    _id?: any;
    synonyms?: any[];
    logo: string;
    created_on: string;
    created_by?: UserDetail;
    verified_on?: string;
    is_active?: boolean;
    _custom_json?: any;
    modified_by?: UserDetail;
    name: any;
    priority_order: number;
    slug?: any;
    uid?: number;
    verified_by?: UserDetail;
    _cls?: any;
};
type ProductTemplate = {
    modified_on?: string;
    attributes_schema?: any[];
    logo?: string;
    is_expirable?: boolean;
    is_archived?: boolean;
    is_active?: boolean;
    tag?: string;
    description?: string;
    departments?: string[];
    created_by?: any;
    is_physical: boolean;
    created_on?: string;
    modified_by?: any;
    attributes?: string[];
    name?: string;
    slug: string;
    categories?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    teaser_tag?: any;
    media?: any;
    description?: any;
    multi_size?: any;
    name?: any;
    item_type?: any;
    variants?: any;
    trader?: any;
    category_slug?: any;
    sizes?: any;
    product_group_tag?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
    trader_type?: any;
    item_code?: any;
    tags?: any;
    brand_uid?: any;
    currency?: any;
    slug?: any;
    highlights?: any;
    custom_order?: any;
    hsn_code?: any;
    is_dependent?: any;
    product_publish?: any;
    is_active?: any;
    short_description?: any;
    return_config?: any;
    command?: any;
    size_guide?: any;
};
type GlobalValidation = {
    properties?: Properties;
    type?: string;
    description?: string;
    title?: string;
    definitions?: any;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    attributes_schema?: any[];
    logo?: string;
    is_expirable?: boolean;
    is_archived?: boolean;
    is_active?: boolean;
    tag?: string;
    description?: string;
    departments?: string[];
    is_physical: boolean;
    id?: string;
    attributes?: string[];
    name?: string;
    slug: string;
    categories?: string[];
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
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    completed_on?: string;
    data?: ProductDownloadItemsData;
    status?: string;
    seller_id?: number;
    created_by?: VerifiedBy;
    id?: string;
    trigger_on?: string;
    url?: string;
    task_id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    landscape: string;
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
    l2: number;
    department: number;
    l1: number;
};
type CategoryRequestBody = {
    media?: Media2;
    level: number;
    tryouts?: string[];
    synonyms?: string[];
    priority?: number;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    departments: number[];
    name: string;
    hierarchy?: Hierarchy[];
    slug?: string;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    modified_on?: string;
    media?: Media2;
    level: number;
    tryouts?: string[];
    synonyms?: string[];
    priority?: number;
    created_by?: any;
    created_on?: string;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    departments: number[];
    modified_by?: any;
    id?: string;
    name: string;
    hierarchy?: Hierarchy[];
    slug?: string;
    uid?: number;
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
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    teaser_tag?: TeaserTag;
    media?: Media1[];
    template_tag: string;
    description?: string;
    multi_size?: boolean;
    name: string;
    change_request_id?: any;
    item_type: string;
    variants?: any;
    trader: Trader[];
    category_slug: string;
    sizes: any[];
    is_set?: boolean;
    action?: string;
    tax_identifier: TaxIdentifier;
    product_group_tag?: string[];
    variant_group?: any;
    country_of_origin: string;
    no_of_boxes?: number;
    company_id: number;
    item_code: string;
    requester?: string;
    tags?: string[];
    brand_uid: number;
    variant_media?: any;
    bulk_job_id?: string;
    currency: string;
    is_image_less_product?: boolean;
    net_quantity?: NetQuantity;
    slug: string;
    _custom_json?: any;
    highlights?: string[];
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    product_publish?: ProductPublish;
    is_active?: boolean;
    short_description?: string;
    departments: number[];
    return_config: ReturnConfig;
    attributes: any;
    uid?: number;
    size_guide?: string;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type ProductPublished = {
    product_online_date?: string;
    is_set?: boolean;
};
type ReturnConfigResponse = {
    unit: string;
    time: number;
    returnable: boolean;
};
type Product = {
    teaser_tag?: any;
    modified_on?: string;
    media?: Media1[];
    pending?: string;
    template_tag?: string;
    verified_on?: string;
    description?: string;
    all_sizes?: any[];
    l3_mapping?: string[];
    multi_size?: boolean;
    name?: string;
    item_type?: string;
    variants?: any;
    trader?: any[];
    category?: any;
    all_identifiers?: string[];
    category_slug?: string;
    sizes?: any[];
    is_set?: boolean;
    category_uid?: number;
    tax_identifier?: any;
    product_group_tag?: string[];
    id?: string;
    variant_group?: any;
    country_of_origin?: string;
    no_of_boxes?: number;
    company_id?: number;
    item_code?: string;
    tags?: string[];
    stage?: string;
    brand_uid?: number;
    created_by?: any;
    brand?: Brand;
    variant_media?: any;
    is_physical?: boolean;
    moq?: any;
    modified_by?: any;
    currency?: string;
    primary_color?: string;
    all_company_ids?: number[];
    net_quantity?: NetQuantityResponse;
    is_image_less_product?: boolean;
    slug?: string;
    _custom_json?: any;
    verified_by?: VerifiedBy;
    image_nature?: string;
    highlights?: string[];
    images?: Image[];
    custom_order?: any;
    hsn_code?: string;
    is_dependent?: boolean;
    product_publish?: ProductPublished;
    is_expirable?: boolean;
    is_active?: boolean;
    created_on?: string;
    short_description?: string;
    departments?: number[];
    return_config?: ReturnConfigResponse;
    color?: string;
    attributes?: any;
    uid?: number;
    size_guide?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    media?: Media1[];
    brand_uid?: number;
    category_uid?: number;
    name?: string;
    uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    modified_on?: string;
    unit?: string;
    suggestion?: string;
    description?: string;
    name?: string;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    is_nested?: boolean;
    schema: AttributeMaster;
    tags?: string[];
    variant?: boolean;
    raw_key?: string;
    created_by?: any;
    modified_by?: any;
    slug: string;
    filters: AttributeMasterFilter;
    synonyms?: any;
    created_on?: string;
    departments: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    teaser_tag?: TeaserTag;
    media?: Media1[];
    template_tag: string;
    description?: string;
    multi_size?: boolean;
    name: any;
    change_request_id?: any;
    item_type: string;
    variants?: any;
    trader: Trader[];
    category_slug: string;
    is_set?: boolean;
    action?: string;
    tax_identifier: TaxIdentifier;
    product_group_tag?: string[];
    variant_group?: any;
    country_of_origin: string;
    no_of_boxes?: number;
    company_id: number;
    item_code: any;
    requester?: string;
    tags?: string[];
    brand_uid: number;
    variant_media?: any;
    bulk_job_id?: string;
    currency: string;
    is_image_less_product?: boolean;
    net_quantity?: NetQuantity;
    slug: string;
    _custom_json?: any;
    highlights?: string[];
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    product_publish?: ProductPublish;
    is_active?: boolean;
    short_description?: string;
    departments: number[];
    return_config: ReturnConfig;
    uid?: number;
    size_guide?: string;
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_length: number;
    item_weight: number;
    size: any;
    item_width: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type BulkJob = {
    succeed?: number;
    modified_on?: string;
    cancelled?: number;
    stage?: string;
    template_tag?: string;
    created_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
    file_path?: string;
    failed?: number;
    modified_by?: UserInfo1;
    failed_records?: any[];
    tracking_url?: string;
    cancelled_records?: any[];
    total?: number;
    company_id: number;
    custom_template_tag?: string;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
    batch_id: string;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    succeed?: number;
    modified_on?: string;
    stage?: string;
    cancelled?: number;
    template_tag?: string;
    created_on?: string;
    created_by?: UserDetail1;
    is_active?: boolean;
    file_path?: string;
    failed?: number;
    failed_records?: string[];
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    total?: number;
    template?: ProductTemplate;
    company_id?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    company_id: number;
    data: any[];
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    succeed?: number;
    modified_on?: string;
    stage?: string;
    cancelled?: number;
    created_on?: string;
    created_by?: UserCommon;
    is_active?: boolean;
    file_path?: string;
    failed?: number;
    modified_by?: UserCommon;
    failed_records?: string[];
    retry?: number;
    tracking_url?: string;
    id?: string;
    cancelled_records?: string[];
    total?: number;
    company_id?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
type GTIN = {
    gtin_value: any;
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
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    set?: InventorySet;
    item_height?: number;
    price?: number;
    store_code: string;
    quantity: number;
    price_effective: number;
    price_transfer?: number;
    currency: string;
    item_length?: number;
    item_weight?: number;
    expiration_date?: string;
    size: any;
    item_width?: number;
};
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type InventoryResponse = {
    item_id?: number;
    identifiers?: any;
    store?: any;
    sellable_quantity?: number;
    price?: number;
    quantity?: number;
    price_effective?: number;
    uid?: string;
    currency?: string;
    price_transfer?: number;
    seller_identifier?: string;
    size?: string;
    inventory_updated_on?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type DimensionResponse = {
    height: number;
    unit: string;
    width: number;
    length: number;
    is_default: boolean;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
};
type PriceMeta = {
    tp_notes?: any;
    marked: number;
    currency: string;
    updated_at?: string;
    effective: number;
    transfer: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
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
type InventorySellerResponse = {
    dimension: DimensionResponse;
    item_id: number;
    track_inventory?: boolean;
    raw_meta?: any;
    identifier: any;
    fynd_meta?: any;
    seller_identifier: string;
    size: string;
    trader?: Trader1[];
    company: CompanyMeta;
    is_set?: boolean;
    meta?: any;
    set?: InventorySet;
    store: StoreMeta;
    tax_identifier?: any;
    country_of_origin: string;
    fynd_item_code: string;
    expiration_date?: string;
    fragile: boolean;
    quantities?: Quantities;
    tags?: string[];
    added_on_store?: string;
    trace_id?: string;
    total_quantity: number;
    stage?: string;
    created_by?: UserSerializer;
    price: PriceMeta;
    manufacturer: ManufacturerResponse;
    brand: BrandMeta;
    modified_by?: UserSerializer;
    _custom_json?: any;
    fynd_article_code: string;
    is_active?: boolean;
    return_config?: ReturnConfig1;
    weight: WeightResponse;
    uid: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    succeed?: number;
    modified_on?: string;
    cancelled?: number;
    stage?: string;
    created_by?: any;
    created_on?: string;
    is_active?: boolean;
    file_path?: string;
    failed?: number;
    failed_records?: string[];
    id?: string;
    modified_by?: any;
    cancelled_records?: string[];
    total?: number;
    company_id?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_marked?: number;
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    price?: number;
    quantity?: number;
    price_effective?: number;
    trace_id?: string;
    currency?: string;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    request_params?: any;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportJob = {
    completed_on?: string;
    status?: string;
    seller_id: number;
    request_params?: any;
    url?: string;
    trigger_on?: string;
    task_id: string;
};
type DimensionResponse1 = {
    unit?: string;
    height?: number;
    length?: number;
    width?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    uid?: number;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
};
type PriceArticle = {
    tp_notes?: any;
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
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
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type GetInventories = {
    dimension?: DimensionResponse1;
    item_id?: number;
    track_inventory?: boolean;
    date_meta?: DateMeta;
    identifier?: any;
    seller_identifier?: string;
    size?: string;
    trader?: Trader2[];
    company?: CompanyMeta1;
    is_set?: boolean;
    store?: ArticleStoreResponse;
    tax_identifier?: any;
    id?: string;
    country_of_origin?: string;
    expiration_date?: string;
    quantities?: QuantitiesArticle;
    tags?: string[];
    trace_id?: string;
    platforms?: any;
    total_quantity?: number;
    stage?: string;
    created_by?: UserSerializer;
    price?: PriceArticle;
    manufacturer?: ManufacturerResponse1;
    brand?: BrandMeta1;
    modified_by?: UserSerializer;
    inventory_updated_on?: string;
    return_config?: ReturnConfig2;
    weight?: WeightResponse1;
    uid?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
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
    total_quantity?: number;
    store_id: number;
    price_effective?: number;
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    hsn_code: string;
    tax_on_esp?: boolean;
    threshold1: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    tax2?: number;
    hs2_code: string;
    tax1: number;
    threshold2?: number;
    uid?: number;
    company_id: number;
};
type HsnCodesObject = {
    modified_on?: string;
    hsn_code?: string;
    tax_on_esp?: boolean;
    threshold1?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
    hs2_code?: string;
    tax1?: number;
    id?: string;
    threshold2?: number;
    company_id?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    has_next?: boolean;
    item_total?: number;
    current?: string;
    size?: number;
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
    cess?: number;
    effective_date: string;
    rate: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    modified_on?: string;
    hsn_code: string;
    type: string;
    created_by?: any;
    created_on?: string;
    description: string;
    modified_by?: any;
    country_code: string;
    reporting_hsn: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    discount?: string;
    action?: Action;
    departments?: string[];
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    uid?: number;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    name?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    action?: Action;
    childs?: any[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    _custom_json?: any;
};
type SecondLevelChild = {
    action?: Action;
    childs?: ThirdLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    _custom_json?: any;
};
type Child = {
    action?: Action;
    childs?: SecondLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    _custom_json?: any;
};
type CategoryItems = {
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    uid?: number;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
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
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    teaser_tag?: any;
    type?: string;
    promo_meta?: any;
    description?: string;
    name?: string;
    item_type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    rating_count?: number;
    similars?: string[];
    item_code?: string;
    tryouts?: string[];
    rating?: number;
    brand?: ProductBrand;
    product_online_date?: string;
    slug: string;
    image_nature?: string;
    highlights?: string[];
    short_description?: string;
    medias?: Media1[];
    color?: string;
    attributes?: any;
    uid?: number;
};
type InventoryPage = {
    has_previous?: boolean;
    type: string;
    next_id?: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    latitude?: number;
    city?: string;
    address2?: string;
    state?: string;
    country_code?: string;
    address1?: string;
    address_type?: string;
    landmark?: string;
    pincode?: number;
    country?: string;
    longitude?: number;
};
type GetCompanySerializer = {
    modified_on?: string;
    stage?: string;
    business_type?: string;
    created_on?: string;
    created_by?: UserSerializer1;
    verified_on?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    modified_by?: UserSerializer1;
    name?: string;
    uid?: number;
    verified_by?: UserSerializer1;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
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
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type GetLocationSerializer = {
    modified_on?: string;
    verified_on?: string;
    name: string;
    store_type?: string;
    company?: GetCompanySerializer;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    phone_number?: string;
    display_name: string;
    stage?: string;
    integration_type?: LocationIntegrationType;
    created_by?: UserSerializer2;
    address: GetAddressSerializer;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    modified_by?: UserSerializer2;
    code: string;
    notification_emails?: string[];
    _custom_json?: any;
    verified_by?: UserSerializer2;
    contact_numbers?: SellerPhoneNumber[];
    created_on?: string;
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
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
    app_id: string;
    logo?: string;
    is_active?: boolean;
    name?: string;
    _custom_json?: any;
    uid: number;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    business_type: string;
    company_type: string;
    warnings?: any;
    mode?: string;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    business_details?: BusinessDetails;
    notification_emails?: string[];
    uid: number;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    documents?: Document[];
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    _custom_json?: any;
    contact_details?: ContactDetails;
    addresses?: GetAddressSerializer[];
    name?: string;
    business_info?: string;
    created_on?: string;
    modified_on?: string;
    franchise_enabled?: boolean;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    address1: string;
    state: string;
    city: string;
    country: string;
    address_type: string;
    address2?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    pincode: number;
};
type UpdateCompany = {
    business_type?: string;
    business_info?: string;
    company_type?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    warnings?: any;
    _custom_json?: any;
    contact_details?: ContactDetails;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    documents?: Document[];
    business_details?: BusinessDetails;
    name?: string;
    franchise_enabled?: boolean;
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
    product?: DocumentsObj;
    uid?: number;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    description?: string;
    warnings?: any;
    _locale_language?: any;
    mode?: string;
    logo?: string;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    created_by?: UserSerializer;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    _custom_json?: any;
    synonyms?: string[];
    name: string;
    created_on?: string;
    modified_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    uid?: number;
    brand_tier?: string;
    _custom_json?: any;
    synonyms?: string[];
    _locale_language?: any;
    logo: string;
    banner?: BrandBannerSerializer;
    company_id?: number;
    name: string;
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
    business_type: string;
    notification_emails?: string[];
    created_on?: string;
    company_type: string;
    uid?: number;
    created_by?: UserSerializer;
    market_channels?: string[];
    _custom_json?: any;
    details?: CompanyDetails;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    name?: string;
};
type CompanyBrandSerializer = {
    created_on?: string;
    uid?: number;
    warnings?: any;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
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
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type LocationSerializer = {
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    display_name: string;
    uid?: number;
    warnings?: any;
    code: string;
    _custom_json?: any;
    company: number;
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    store_type?: string;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    meta?: any;
    group_id?: string;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    store_ids?: number[];
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    store_id?: number;
    uid?: string;
    meta?: any;
    size?: string;
    index?: number;
    _id?: string;
    price_marked?: number;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    price_effective?: number;
    s_city?: string;
    store_pincode?: string;
    item_id?: number;
    company_id?: number;
    status?: boolean;
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
    only_deployed?: boolean;
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
type PriceRange = {
    min?: number;
    max?: number;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
    codes?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    platforms?: string[];
    price_range?: PriceRange;
    user_groups?: number[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    user_type?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    applicable_on: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    value_type: string;
    type: string;
    currency_code?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    start?: string;
    end?: string;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type Rule = {
    min?: number;
    discount_qty?: number;
    key?: number;
    value?: number;
    max?: number;
};
type CouponAdd = {
    restrictions?: Restrictions;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    tags?: string[];
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    action?: CouponAction;
    code: string;
    _schedule?: CouponSchedule;
    validation?: Validation;
    rule: Rule[];
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
    restrictions?: Restrictions;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    tags?: string[];
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    action?: CouponAction;
    code: string;
    _schedule?: CouponSchedule;
    validation?: Validation;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DiscountOffer = {
    max_discount_amount?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    discount_amount?: number;
    code?: string;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
};
type CompareObject = {
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
    greater_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_exclude_id?: number[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    item_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_store?: number[];
    available_zones?: string[];
    cart_total?: CompareObject;
    product_tags?: string[];
    item_exclude_company?: number[];
    item_id?: number[];
    item_exclude_brand?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    item_sku?: string[];
    item_size?: string[];
    item_category?: number[];
    buy_rules?: string[];
    all_items?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    offer_label?: string;
    name?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    start: string;
    end?: string;
    published: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
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
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    platforms?: string[];
    user_registered?: UserRegistered;
    user_groups?: number[];
    uses: UsesRestriction1;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    order_quantity?: number;
    user_id?: string[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    title?: string;
    description?: string;
    subtitle?: string;
    modified_on?: string;
    entity_type?: string;
    type?: string;
    entity_slug?: string;
    example?: string;
    created_on?: string;
    is_hidden?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    marked?: number;
    selling?: number;
    add_on?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    deliverable?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    other_store_quantity?: number;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    images?: ProductImage[];
    net_quantity?: NetQuantity;
    brand?: BaseInfo;
    name?: string;
    slug?: string;
    uid?: number;
    action?: ProductAction;
    type?: string;
    categories?: CategoryInfo[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_images_url?: string[];
    item_brand_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_slug?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    promo_id?: string;
    article_quantity?: number;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    amount?: number;
    buy_rules?: BuyRules[];
    promotion_name?: string;
};
type BasePrice = {
    effective?: number;
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    extra_meta?: any;
    store?: BaseInfo;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    size?: string;
    uid?: string;
    seller?: BaseInfo;
    quantity?: number;
    type?: string;
};
type CartProductInfo = {
    message?: string;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    product?: CartProduct;
    is_set?: boolean;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
    promotions_applied?: AppliedPromotion[];
    bulk_offer?: any;
    discount?: string;
    article?: ProductArticle;
    coupon_message?: string;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    is_applied?: boolean;
    description?: string;
};
type RawBreakup = {
    total?: number;
    cod_charge?: number;
    you_saved?: number;
    vog?: number;
    mrp_total?: number;
    delivery_charge?: number;
    fynd_cash?: number;
    gst_charges?: number;
    subtotal?: number;
    discount?: number;
    convenience_fee?: number;
    coupon?: number;
};
type CouponBreakup = {
    message?: string;
    title?: string;
    description?: string;
    code?: string;
    coupon_value?: number;
    is_applied?: boolean;
    max_discount_value?: number;
    value?: number;
    uid?: string;
    sub_title?: string;
    type?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
};
type DisplayBreakup = {
    message?: string[];
    display?: string;
    key?: string;
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
};
type OpenapiCartDetailsResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    email?: string;
    meta?: any;
    city?: string;
    address_type?: string;
    country_code?: string;
    name?: string;
    area_code_slug?: string;
    state?: string;
    landmark?: string;
    area?: string;
    country?: string;
    pincode?: number;
    address?: string;
    area_code: string;
    phone?: number;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    delivery_charges: number;
    amount_paid: number;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    price_effective: number;
    product_id: number;
    extra_meta?: any;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    quantity?: number;
    coupon_effective_discount: number;
    discount: number;
    cashback_applied: number;
    size: string;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_mode?: string;
    delivery_charges: number;
    coupon_code: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    employee_discount?: any;
    files?: OpenApiFiles[];
    cart_value: number;
    coupon?: string;
    gstin?: string;
    loyalty_discount?: number;
    affiliate_order_id?: string;
    order_id?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    cashback_applied: number;
    currency_code?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
};
type AbandonedCart = {
    app_id?: string;
    promotion?: any;
    bulk_coupon_discount?: number;
    uid: number;
    last_modified: string;
    _id: string;
    order_id?: string;
    checkout_mode?: string;
    comment?: string;
    is_default: boolean;
    merge_qty?: boolean;
    shipments?: any[];
    cashback: any;
    delivery_charges?: any;
    payment_mode?: string;
    is_archive?: boolean;
    buy_now?: boolean;
    payments?: any;
    cart_value?: number;
    created_on: string;
    discount?: number;
    coupon?: any;
    user_id: string;
    gstin?: string;
    pick_up_customer_details?: any;
    meta?: any;
    expire_at: string;
    fynd_credits?: any;
    fc_index_map?: number[];
    is_active?: boolean;
    articles: any[];
    payment_methods?: any[];
    cod_charges?: any;
};
type AbandonedCartResponse = {
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    checkout_mode?: string;
    buy_now?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    gstin?: string;
};
type AddProductCart = {
    store_id?: number;
    item_id?: number;
    extra_meta?: any;
    article_id?: string;
    seller_id?: number;
    article_assignment?: any;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    quantity?: number;
    pos?: boolean;
    item_size?: string;
    display?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_id?: number;
    extra_meta?: any;
    article_id?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
    item_index?: number;
    item_size?: string;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
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
