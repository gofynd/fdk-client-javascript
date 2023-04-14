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
    serviceability: Serviceability;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, Prices, PaymentModeInfo, UserDataInfo, GSTDetailsData, PlatformItem, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, Dimensions, Meta, InvoiceInfo, BagStateMapper, CurrentStatus, BagGST, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBagArticle, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBrandName, OrderBags, DPDetailsData, DebugInfo, BuyerDetails, Formatted, EinvoiceInfo, LockData, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, OrderDetailsData, BagStatusHistory, OrderingStoreDetails, PhoneDetails, ContactDetails, CompanyDetails, ShipmentPayments, TrackingList, ShipmentStatusData, FulfillingStore, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, PlatformUserDetails, TransactionData, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Attributes, Item, B2BPODetails, BagMeta, BagGSTDetails, AffiliateBagDetails, ReturnConfig, Weight, Article, Dates, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagReturnableCancelableStatus, Brand, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, OrderPriority, MarketPlacePdf, AffiliateBag, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, TaxInfo, ProcessingDates, LineItem, Shipment, ShippingInfo, PaymentMethod, PaymentInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, UserInfo, SeoDetail, CollectionImage, CollectionSchedule, CollectionBadge, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Image, ReturnConfigResponse, ProductPublished, NetQuantityResponse, Product, ProductListingResponse, TaxIdentifier, TeaserTag, CustomOrder, ProductPublish, NetQuantity, Trader, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ManufacturerResponse, BrandMeta, DimensionResponse, PriceMeta, ReturnConfig1, WeightResponse, CompanyMeta, QuantityBase, Quantities, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, BrandMeta1, DimensionResponse1, PriceArticle, ReturnConfig2, WeightResponse1, CompanyMeta1, Quantity, QuantitiesArticle, Trader2, ArticleStoreResponse, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, ProductReturnConfigSerializer, UserSerializer2, GetCompanySerializer, SellerPhoneNumber, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, Validity, CouponSchedule, RuleDefinition, CouponDateMeta, Ownership, DisplayMetaDict, DisplayMeta, CouponAction, Validation, CouponAuthor, State, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PriceRange, Restrictions, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAction, PromotionDateMeta, Ownership1, PromotionSchedule, DisplayMeta1, PromotionAuthor, Visibility, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, PromoMeta, CartProductIdentifer, ProductImage, ActionQuery, ProductAction, CategoryInfo, Tags, BaseInfo, CartProduct, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ProductPrice, ProductPriceInfo, BasePrice, ArticlePriceInfo, ProductArticle, CouponDetails, ProductAvailability, CartProductInfo, RawBreakup, CouponBreakup, LoyaltyPoints, DisplayBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ApplicationServiceabilityConfig, ServiceabilityrErrorResponse, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_page, EntityRegionView_Items, EntityRegionView_Error, EntityRegionView_Response, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, AddressResponse, ContactNumberResponse, IntegrationTypeResponse, CreatedByResponse, MobileNo, ManagerResponse, ProductReturnConfigResponse, ModifiedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, DocumentsResponse, Dp, LogisticsResponse, OpeningClosing, TimmingResponse, WarningsResponse, ItemResponse, GetStoresViewResponse };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Order = require("./Order/OrderPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Cart = require("./Cart/CartPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformApplicationClient");
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
    category: string;
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
    app_id: string;
    excluded_fields: string[];
    success: boolean;
    created: boolean;
    aggregators?: any[];
    display_fields: string[];
};
type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    config_type: string;
    is_active?: boolean;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
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
    success: boolean;
    error: ErrorCodeAndDescription;
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
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    compliant_with_tokenisation_guidelines?: boolean;
    display_priority?: number;
    card_isin?: string;
    intent_app?: IntentApp[];
    cod_limit_per_order?: number;
    merchant_code?: string;
    card_name?: string;
    card_token?: string;
    intent_flow?: boolean;
    exp_month?: number;
    timeout?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_fingerprint?: string;
    card_id?: string;
    aggregator_name: string;
    card_number?: string;
    card_type?: string;
    remaining_limit?: number;
    display_name?: string;
    name?: string;
    exp_year?: number;
    card_brand?: string;
    fynd_vpa?: string;
    code?: string;
    logo_url?: PaymentModeLogo;
    expired?: boolean;
    cod_limit?: number;
    nickname?: string;
    card_brand_image?: string;
    intent_app_error_list?: string[];
    card_reference?: string;
    retry_count?: number;
    card_issuer?: string;
};
type RootPaymentMode = {
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    list?: PaymentModeList[];
    display_name: string;
    name: string;
    display_priority: number;
    add_card_enabled?: boolean;
    save_card?: boolean;
    aggregator_name?: string;
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
    payouts_aggregators: any[];
    is_active: boolean;
    more_attributes: any;
    customers: any;
    transfer_type: string;
    unique_transfer_no: any;
};
type PayoutBankDetails = {
    city?: string;
    bank_name?: string;
    account_no?: string;
    branch_name?: string;
    account_type: string;
    state?: string;
    pincode?: number;
    ifsc_code: string;
    country?: string;
    account_holder?: string;
};
type PayoutRequest = {
    users: any;
    unique_external_id: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    aggregator: string;
};
type PayoutResponse = {
    users: any;
    is_active: boolean;
    bank_details: any;
    success: boolean;
    payouts: any;
    transfer_type: string;
    unique_transfer_no: string;
    created: boolean;
    payment_status: string;
    aggregator: string;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
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
    success: boolean;
    data?: any;
    is_verified_flag?: boolean;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    description: string;
    code: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    account_no: string;
    ifsc_code: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    title: string;
    branch_name?: string;
    bank_name: string;
    modified_on: string;
    email: string;
    is_active: boolean;
    ifsc_code: string;
    id: number;
    subtitle: string;
    delights_user_name?: string;
    transfer_mode: string;
    display_name: string;
    address: string;
    account_no: string;
    beneficiary_id: string;
    mobile?: string;
    comment?: string;
    account_holder: string;
    created_on: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    extra_meta?: any;
    current_status?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    order_id: string;
    message: string;
};
type CODdata = {
    remaining_limit: number;
    is_active: boolean;
    user_id: string;
    usages: number;
    limit: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    mobileno: string;
    is_active: boolean;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcModelData = {
    models: string[];
    aggregator_id: number;
    aggregator: string;
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    data: EdcModelData[];
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    edc_device_serial_no: string;
    edc_model: string;
    terminal_serial_no: string;
    device_tag?: string;
    aggregator_id: number;
    store_id: number;
};
type EdcDevice = {
    terminal_unique_identifier: string;
    edc_device_serial_no: string;
    application_id: string;
    edc_model?: string;
    terminal_serial_no: string;
    device_tag: string;
    merchant_store_pos_code?: string;
    is_active: boolean;
    aggregator_id: number;
    store_id: number;
    aggregator_name?: string;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    edc_device_serial_no?: string;
    edc_model?: string;
    device_tag?: string;
    merchant_store_pos_code?: string;
    is_active?: boolean;
    aggregator_id?: number;
    store_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    success: boolean;
    items: EdcDevice[];
    page: Page;
};
type PaymentInitializationRequest = {
    aggregator: string;
    device_id?: string;
    merchant_order_id: string;
    email: string;
    contact: string;
    razorpay_payment_id?: string;
    timeout?: number;
    vpa?: string;
    currency: string;
    customer_id: string;
    method: string;
    amount: number;
    order_id: string;
};
type PaymentInitializationResponse = {
    device_id?: string;
    merchant_order_id: string;
    bqr_image?: string;
    upi_poll_url?: string;
    aggregator_order_id?: string;
    success: boolean;
    amount?: number;
    vpa?: string;
    polling_url: string;
    status?: string;
    currency?: string;
    customer_id?: string;
    method: string;
    aggregator: string;
    razorpay_payment_id?: string;
    timeout?: number;
    virtual_id?: string;
};
type PaymentStatusUpdateRequest = {
    device_id?: string;
    merchant_order_id: string;
    email: string;
    contact: string;
    amount: number;
    vpa?: string;
    status: string;
    currency: string;
    customer_id: string;
    method: string;
    aggregator: string;
    order_id: string;
};
type PaymentStatusUpdateResponse = {
    redirect_url?: string;
    retry: boolean;
    success?: boolean;
    status: string;
    aggregator_name: string;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    request_type: string;
    order_id: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    success: boolean;
    data: LinkStatus;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    text: string;
    type: string;
};
type ShipmentStatus = {
    actual_status: string;
    title: string;
    status: string;
    hex_code: string;
    ops_status: string;
};
type Prices = {
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    cashback?: number;
    price_marked?: number;
    cashback_applied?: number;
    refund_credit?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    transfer_price?: number;
    fynd_credits?: number;
    price_effective?: number;
    cod_charges?: number;
    amount_paid?: number;
    delivery_charge?: number;
    value_of_good?: number;
    coupon_value?: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type UserDataInfo = {
    avis_user_id?: string;
    last_name?: string;
    first_name?: string;
    uid?: number;
    email?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    name?: string;
    mobile?: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
    gst_fee: number;
    value_of_good: number;
};
type PlatformItem = {
    code?: string;
    l3_category_name?: string;
    size?: string;
    can_cancel?: boolean;
    id?: number;
    images?: string[];
    can_return?: boolean;
    color?: string;
    department_id?: number;
    name?: string;
    image?: string[];
    l1_category?: string[];
    l3_category?: number;
};
type BagUnit = {
    gst?: GSTDetailsData;
    item?: PlatformItem;
    item_quantity: number;
    status: any;
    prices?: Prices;
    ordering_channel: string;
    can_cancel?: boolean;
    shipment_id: string;
    total_shipment_bags: number;
    bag_id: number;
    can_return?: boolean;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentItem = {
    shipment_status?: ShipmentStatus;
    application?: any;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    channel?: any;
    id: string;
    user?: UserDataInfo;
    shipment_id?: string;
    fulfilling_centre: string;
    payment_methods?: any;
    sla?: any;
    bags?: BagUnit[];
    total_bags_count: number;
    total_shipments_in_order: number;
    shipment_created_at: string;
    created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
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
    city: string;
    country: string;
    pincode: string;
    area?: string;
    state: string;
    address_type?: string;
    email?: string;
    landmark?: string;
    address1?: string;
    name: string;
    address: string;
};
type Dimensions = {
    width?: number;
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type InvoiceInfo = {
    invoice_url?: string;
    updated_date?: string;
    label_url?: string;
    store_invoice_id?: string;
    credit_note_id?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    notify_customer?: boolean;
    app_facing?: boolean;
    bs_id: number;
    is_active?: boolean;
    journey_type: string;
    app_display_name?: string;
    name: string;
    display_name: string;
    state_type: string;
};
type CurrentStatus = {
    kafka_sync?: boolean;
    state_id?: number;
    created_at?: string;
    status?: string;
    updated_at?: string;
    delivery_partner_id?: number;
    shipment_id?: string;
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    store_id?: number;
    state_type?: string;
    current_status_id: number;
};
type BagGST = {
    hsn_code?: string;
    brand_calculated_amount?: number;
    gstin_code?: string;
    gst_tax_percentage?: number;
    gst_fee?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    discount_rules?: DiscountRules[];
    amount?: number;
    promotion_type?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    promotion_name?: string;
    promo_id?: string;
    buy_rules?: BuyRules[];
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
    hsn_code: string;
    item_name: string;
    cashback: number;
    refund_credit: number;
    price_marked: number;
    discount: number;
    gst_tax_percentage: number;
    transfer_price: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount: number;
    tax_collected_at_source?: number;
    coupon_effective_discount: number;
    size: string;
    cashback_applied: number;
    brand_calculated_amount: number;
    added_to_fynd_cash: boolean;
    total_units: number;
    price_effective: number;
    cod_charges: number;
    coupon_value: number;
    identifiers: Identifier;
    fynd_credits: number;
    amount_paid: number;
    delivery_charge: number;
    value_of_good: number;
    gst_fee: number;
    gst_tag: string;
};
type PlatformDeliveryAddress = {
    phone?: string;
    city?: string;
    country?: string;
    pincode?: string;
    address2?: string;
    area?: string;
    updated_at?: string;
    state?: string;
    version?: string;
    latitude?: number;
    email?: string;
    address_type?: string;
    contact_person?: string;
    address1?: string;
    address_category?: string;
    longitude?: number;
    landmark?: string;
    created_at?: string;
};
type OrderBrandName = {
    modified_on?: string;
    id: number;
    company: string;
    logo: string;
    brand_name: string;
    created_on: string;
};
type OrderBags = {
    item?: PlatformItem;
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    bag_configs?: BagConfigs;
    applied_promos?: AppliedPromos[];
    article?: OrderBagArticle;
    seller_identifier?: string;
    identifier?: string;
    financial_breakup?: FinancialBreakup;
    can_cancel?: boolean;
    parent_promo_bags?: any;
    quantity?: number;
    line_number?: number;
    delivery_address?: PlatformDeliveryAddress;
    entity_type?: string;
    prices?: Prices;
    bag_id: number;
    can_return?: boolean;
    brand?: OrderBrandName;
    display_name?: string;
};
type DPDetailsData = {
    awb_no?: string;
    country?: string;
    pincode?: string;
    id?: number;
    eway_bill_id?: string;
    gst_tag?: string;
    name?: string;
    track_url?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    city: string;
    pincode: number;
    ajio_site_id?: string;
    state: string;
    name: string;
    gstin: string;
    address: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    po_number?: string;
    external?: any;
    dp_name?: string;
    shipment_volumetric_weight?: number;
    store_invoice_updated_date?: string;
    fulfilment_priority_text?: string;
    debug_info?: DebugInfo;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_order_id?: string;
    dp_sort_key?: string;
    return_affiliate_order_id?: string;
    ewaybill_info?: any;
    marketplace_store_id?: string;
    same_store_available: boolean;
    weight: number;
    packaging_name?: string;
    formatted?: Formatted;
    dp_options?: any;
    due_date?: string;
    forward_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    box_type?: string;
    return_details?: any;
    awb_number?: string;
    shipment_weight?: number;
    bag_weight?: any;
    order_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    assign_dp_from_sb?: boolean;
    return_store_node?: number;
    return_awb_number?: string;
    lock_data?: LockData;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
};
type PDFLinks = {
    invoice?: string;
    label_type: string;
    delivery_challan_a4?: string;
    label_a6?: string;
    invoice_a6?: string;
    invoice_pos?: string;
    b2b?: string;
    label_a4?: string;
    po_invoice?: string;
    invoice_type: string;
    label_pos?: string;
    label?: string;
    credit_note_url?: string;
    invoice_a4?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    due_date?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    order_item_id?: string;
    box_type?: string;
    employee_discount?: number;
    quantity?: number;
    size_level_total_qty?: number;
    coupon_code?: string;
    channel_order_id?: string;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_shipment_id: string;
    ad_id?: string;
};
type OrderDetailsData = {
    order_date?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    source?: string;
    affiliate_id?: string;
    order_value?: string;
    tax_details?: any;
    fynd_order_id: string;
};
type BagStatusHistory = {
    kafka_sync?: boolean;
    state_id?: number;
    created_at?: string;
    bsh_id?: number;
    status: string;
    forward?: boolean;
    updated_at?: string;
    delivery_partner_id?: number;
    shipment_id?: string;
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    delivery_awb_number?: string;
    app_display_name?: string;
    display_name?: string;
    store_id?: number;
    state_type?: string;
};
type OrderingStoreDetails = {
    store_name: string;
    code: string;
    phone: string;
    meta: any;
    ordering_store_id: number;
    city: string;
    country: string;
    pincode: string;
    state: string;
    contact_person: string;
    address: string;
};
type PhoneDetails = {
    country_code?: number;
    mobile_number?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
type CompanyDetails = {
    company_cin?: string;
    company_name?: string;
    company_id?: number;
    company_gst?: string;
    address?: any;
    company_contact?: ContactDetails;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type TrackingList = {
    is_passed?: boolean;
    time?: string;
    status: string;
    text: string;
    is_current?: boolean;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    shipment_id?: string;
    bag_list?: string[];
    created_at?: string;
};
type FulfillingStore = {
    store_name: string;
    code: string;
    phone: string;
    meta: any;
    city: string;
    country: string;
    pincode: string;
    id: number;
    state: string;
    contact_person: string;
    address: string;
    fulfillment_channel: string;
};
type PlatformShipment = {
    billing_details?: UserDetailsData;
    packaging_type?: string;
    shipment_status?: string;
    meta?: Meta;
    forward_shipment_id?: string;
    total_items?: number;
    journey_type?: string;
    invoice?: InvoiceInfo;
    gst_details?: GSTDetailsData;
    bags?: OrderBags[];
    dp_details?: DPDetailsData;
    affiliate_details?: AffiliateDetails;
    platform_logo?: string;
    operational_status?: string;
    order?: OrderDetailsData;
    invoice_id?: string;
    delivery_details?: UserDetailsData;
    shipment_quantity?: number;
    coupon?: any;
    custom_meta?: any[];
    delivery_slot?: any;
    shipment_id: string;
    total_bags?: number;
    bag_status_history?: BagStatusHistory[];
    user_agent?: string;
    picked_date?: string;
    payment_mode?: string;
    ordering_store?: OrderingStoreDetails;
    company_details?: CompanyDetails;
    user?: UserDataInfo;
    payments?: ShipmentPayments;
    vertical?: string;
    tracking_list?: TrackingList[];
    fulfilment_priority?: number;
    priority_text?: string;
    prices?: Prices;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    payment_methods?: any;
    lock_status?: boolean;
    enable_dp_tracking?: boolean;
    fulfilling_store?: FulfillingStore;
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type BillingStaffDetails = {
    staff_id?: number;
    last_name?: string;
    user?: string;
    first_name?: string;
    employee_code?: string;
};
type PlatformUserDetails = {
    platform_user_employee_code?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
    platform_user_first_name?: string;
};
type TransactionData = {
    payment_id?: string;
    status?: string;
    terminal_id?: string;
    currency?: string;
    entity?: string;
    unique_reference_number?: string;
    amount_paid?: string;
    transaction_id?: string;
};
type OrderMeta = {
    mongo_cart_id?: number;
    customer_note?: string;
    extra_meta?: any;
    order_platform?: string;
    company_logo?: string;
    payment_type?: string;
    currency_symbol?: string;
    staff?: any;
    billing_staff_details?: BillingStaffDetails;
    order_child_entities?: string[];
    platform_user_details?: PlatformUserDetails;
    ordering_store?: number;
    transaction_data?: TransactionData;
    cart_id?: number;
    files?: any[];
    order_type?: string;
    order_tags?: any[];
    employee_id?: number;
    comment?: string;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    order_date: string;
    meta?: OrderMeta;
    prices?: Prices;
    payment_methods?: any;
    tax_details?: TaxDetails;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    value?: string;
    total_items?: number;
    actions?: any[];
    text?: string;
    index?: number;
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
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    meta?: any;
    order_id?: string;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    order_created_time?: string;
    payment_mode?: string;
    total_order_value?: number;
    order_value?: number;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    success?: boolean;
    page?: Page;
    items?: PlatformOrderItems[];
    total_count?: number;
    lane?: string;
    message?: string;
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
    meta?: any;
    status?: string;
    account_name?: string;
    updated_at?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    awb?: string;
    reason?: string;
    shipment_type?: string;
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
    status?: string;
    report_id?: string;
    report_name?: string;
    report_created_at?: string;
    report_type?: string;
    request_details?: any;
    s3_key?: string;
    report_requested_at?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    article_id?: string;
    item_id?: string;
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
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    data?: any[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_name?: string;
    company_id?: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    data?: any;
    store_code?: string;
    invoice?: any;
    store_id?: string;
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
    namespace?: string;
    method?: string;
    upload?: FileUploadResponse;
    size?: number;
    content_type?: string;
    cdn?: URL;
    tags?: string[];
    file_path?: string;
    file_name?: string;
    operation?: string;
};
type BulkListingPage = {
    size?: number;
    current?: number;
    type?: string;
    has_previous?: boolean;
    has_next?: boolean;
    total?: number;
};
type bulkListingData = {
    store_name?: string;
    company_id?: number;
    file_name?: string;
    uploaded_on?: string;
    successful?: number;
    store_id?: number;
    failed_shipments?: any[];
    id?: string;
    processing_shipments?: string[];
    successful_shipments?: any[];
    store_code?: string;
    failed?: number;
    excel_url?: string;
    total?: number;
    batch_id?: string;
    processing?: number;
    user_name?: string;
    status?: string;
    user_id?: string;
};
type BulkListingResponse = {
    success?: boolean;
    error?: string;
    page?: BulkListingPage;
    data?: bulkListingData[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    display_name?: string;
    qc_type?: string[];
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
    batch_id?: string;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    success?: string;
    error?: string[];
    status?: boolean;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    message?: string;
    uploaded_by?: string;
    user_id?: string;
};
type Attributes = {
    essential?: string;
    marketer_name?: string;
    marketer_address?: string;
    primary_color?: string;
    primary_material?: string;
    primary_color_hex?: string;
    gender?: string[];
    brand_name?: string;
    name?: string;
};
type Item = {
    meta?: any;
    item_id: number;
    brand_id: number;
    gender?: string;
    department_id?: number;
    color?: string;
    image: string[];
    branch_url?: string;
    last_updated_at?: string;
    l3_category?: number;
    l3_category_name?: string;
    size: string;
    name: string;
    l1_category?: string[];
    webstore_product_url?: string;
    code?: string;
    l2_category?: string[];
    can_cancel?: boolean;
    l2_category_id?: number;
    slug_key: string;
    l1_category_id?: number;
    can_return?: boolean;
    brand: string;
    attributes: Attributes;
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    docker_number?: string;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    hsn_code: string;
    sgst_gst_fee: string;
    cgst_gst_fee: string;
    igst_tax_percentage: number;
    brand_calculated_amount: number;
    gstin_code?: string;
    gst_tax_percentage: number;
    gst_fee: number;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    igst_gst_fee: string;
    hsn_code_id: string;
    value_of_good: number;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    is_set?: boolean;
    seller_identifier: string;
    code?: string;
    return_config?: ReturnConfig;
    size: string;
    weight?: Weight;
    a_set?: any;
    raw_meta?: any;
    esp_modified?: any;
    uid: string;
    child_details?: any;
    dimensions?: Dimensions;
    _id: string;
    identifiers: Identifier;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
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
type Document = {
    value: string;
    legal_name: string;
    ds_type: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    stage: string;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    timing?: any[];
    display_name: string;
    notification_emails?: string[];
    gst_number?: string;
};
type StoreAddress = {
    phone: string;
    city: string;
    area?: string;
    updated_at: string;
    latitude: number;
    address_type: string;
    contact_person: string;
    address_category: string;
    landmark?: string;
    address1: string;
    longitude: number;
    created_at: string;
    country: string;
    address2?: string;
    version?: string;
    country_code: string;
    pincode: number;
    state: string;
    email?: string;
};
type Store = {
    phone: number;
    location_type: string;
    mall_area?: string;
    meta: StoreMeta;
    city: string;
    company_id: number;
    updated_at?: string;
    latitude: number;
    brand_id?: any;
    contact_person: string;
    s_id: string;
    packaging_material_count?: number;
    mall_name?: string;
    address1: string;
    is_archived?: boolean;
    longitude: number;
    name: string;
    created_at: string;
    code?: string;
    vat_no?: string;
    country: string;
    address2?: string;
    store_email: string;
    parent_store_id?: number;
    fulfillment_channel: string;
    store_address_json?: StoreAddress;
    login_username: string;
    store_active_from?: string;
    order_integration_id?: string;
    pincode: string;
    is_enabled_for_recon?: boolean;
    brand_store_tags?: string[];
    is_active?: boolean;
    state: string;
    alohomora_user_id?: number;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type Brand = {
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    credit_note_allowed?: boolean;
    modified_on?: number;
    invoice_prefix?: string;
    start_date?: string;
    company: string;
    logo?: string;
    brand_id: number;
    script_last_ran?: string;
    brand_name: string;
    credit_note_expiry_days?: number;
    created_on?: number;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    item: Item;
    meta?: BagMeta;
    current_status: BagStatusHistory;
    journey_type: string;
    qc_required?: any;
    current_operational_status: BagStatusHistory;
    restore_promos?: any;
    no_of_bags_order?: number;
    gst_details: BagGSTDetails;
    affiliate_details?: AffiliateDetails;
    original_bag_list?: number[];
    affiliate_bag_details: AffiliateBagDetails;
    restore_coupon?: boolean;
    applied_promos?: any[];
    article: Article;
    operational_status?: string;
    seller_identifier?: string;
    identifier?: string;
    b_id: number;
    financial_breakup: FinancialBreakup[];
    dates?: Dates;
    bag_status_history?: BagStatusHistory;
    parent_promo_bags?: any;
    reasons?: any[];
    shipment_id?: string;
    tags?: string[];
    line_number?: number;
    ordering_store?: Store;
    bag_update_time?: number;
    quantity?: number;
    entity_type?: string;
    order_integration_id?: string;
    prices: Prices;
    status: BagReturnableCancelableStatus;
    bag_status: BagStatusHistory[];
    brand: Brand;
    article_details?: ArticleDetails;
    display_name?: string;
    b_type?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    size: number;
    current: number;
    item_total: number;
    page_type: string;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type GeneratePosOrderReceiptResponse = {
    payment_receipt?: string;
    success?: boolean;
    invoice_receipt?: string;
    order_id?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    status?: number;
    message?: string;
    shipment_id?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    message: string;
    error_trace?: string;
};
type StoreReassign = {
    affiliate_bag_id?: string;
    item_id?: string;
    affiliate_id?: string;
    reason_ids?: number[];
    store_id: number;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    set_id?: string;
    bag_id?: number;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    id?: string;
    affiliate_order_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entities: Entities[];
    entity_type: string;
    action_type: string;
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    status?: string;
    affiliate_id?: string;
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    shipment_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    lock_status?: boolean;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    from_datetime?: string;
    title?: string;
    platform_name?: string;
    id: number;
    created_at?: string;
    logo_url?: string;
    platform_id?: string;
    to_datetime?: string;
    description?: string;
    company_id?: number;
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
    identifier: string;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    status?: number;
    message?: string;
    exception?: string;
    meta?: any;
    final_state?: any;
    stack_trace?: string;
    code?: string;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
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
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    token: string;
    secret: string;
    id: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    name: string;
    description?: string;
    updated_at: string;
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
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    affiliate: Affiliate;
    article_lookup?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type OrderUser = {
    last_name: string;
    pincode: string;
    first_name: string;
    email: string;
    address1?: string;
    country: string;
    address2?: string;
    state: string;
    phone: number;
    city: string;
    mobile: number;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    fynd_store_id: string;
    sku: string;
    _id: string;
    transfer_price: number;
    quantity: number;
    company_id: number;
    identifier: any;
    price_effective: number;
    store_id: number;
    amount_paid: number;
    pdf_links?: MarketPlacePdf;
    modified_on: string;
    unit_price: number;
    item_id: number;
    affiliate_meta: any;
    affiliate_store_id: string;
    delivery_charge: number;
    item_size: string;
    price_marked: number;
    avl_qty: number;
    hsn_code_id: string;
    seller_identifier: string;
    discount: number;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    weight: any;
    category: any;
    brand_id: number;
    dimension: any;
    quantity: number;
    attributes: any;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    fulfillment_id: number;
    affiliate_shipment_id: string;
    dp_id?: number;
    box_type?: string;
    meta?: any;
    shipments: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    journey: string;
    source: string;
    to_pincode: string;
    action: string;
    payment_mode: string;
    shipment: ShipmentDetails[];
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    payment_mode: string;
    items: any;
    billing_address: OrderUser;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    payment?: any;
    delivery_charges: number;
    bags: AffiliateBag[];
    coupon?: string;
    affiliate_order_id?: string;
    order_value: number;
    cod_charges: number;
    user: UserData;
    discount: number;
    shipment?: ShipmentData;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    display_text: string;
    description: string;
    slug: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l1_detail?: string;
    message: string;
    l3_detail?: string;
    type: string;
    createdat: string;
    ticket_id?: string;
    user: string;
    l2_detail?: string;
    ticket_url?: string;
    bag_id?: number;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
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
    message: string;
    shipment_id: number;
    amount_paid: number;
    phone_number: number;
    order_id: string;
    country_code: string;
    brand_name: string;
    customer_name: string;
    payment_mode: string;
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
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    status?: string;
    shipment_id?: string;
    id: number;
    meta: Meta1;
    bag_list?: number[];
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
    dp_id: number;
    order_type: string;
    shipment_ids?: string[];
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    breakup?: any[];
    rate: number;
    name: string;
    amount: any;
};
type Charge = {
    tax?: Tax;
    type: string;
    name: string;
    amount: any;
    code?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_after_date?: string;
};
type LineItem = {
    custom_messasge?: string;
    external_line_id?: string;
    charges?: Charge[];
    meta?: any;
    seller_identifier: string;
    quantity?: number;
};
type Shipment = {
    priority?: number;
    meta?: any;
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
};
type ShippingInfo = {
    primary_mobile_number: string;
    floor_no?: string;
    customer_code?: string;
    gender?: string;
    country: string;
    state: string;
    geo_location?: any;
    middle_name?: string;
    slot?: any[];
    alternate_email?: string;
    external_customer_code?: string;
    pincode: string;
    state_code?: string;
    first_name: string;
    primary_email: string;
    house_no?: string;
    country_code?: string;
    address1: string;
    alternate_mobile_number?: string;
    address2?: string;
    city: string;
    last_name?: string;
    title?: string;
    address_type?: string;
    shipping_type?: string;
    landmark?: string;
};
type PaymentMethod = {
    mode: string;
    transaction_data?: any;
    meta?: any;
    refund_by: string;
    name: string;
    amount: number;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    primary_mobile_number: string;
    floor_no?: string;
    customer_code?: string;
    gender?: string;
    country: string;
    state: string;
    middle_name?: string;
    alternate_email?: string;
    external_customer_code?: string;
    pincode: string;
    state_code?: string;
    first_name: string;
    primary_email: string;
    house_no?: string;
    country_code?: string;
    address1: string;
    alternate_mobile_number?: string;
    address2?: string;
    city: string;
    last_name?: string;
    title?: string;
};
type CreateOrderAPI = {
    charges?: Charge[];
    tax_info?: TaxInfo;
    meta?: any;
    external_order_id?: string;
    external_creation_date?: string;
    currency_info?: any;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    status: number;
    message: string;
    exception?: string;
    meta?: string;
    request_id?: string;
    stack_trace?: string;
    code?: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
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
    shipment_assignment?: string;
    location_reassignment?: boolean;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
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
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    result?: any;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    uid?: string;
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
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    results?: any[];
    words?: string[];
    uid?: string;
    app_id?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
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
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    results?: AutocompleteResult[];
    words?: string[];
    app_id?: string;
    _custom_json?: any;
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
    auto_select?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    company_id?: number;
    modified_on?: string;
    id?: string;
    choice: string;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    modified_by?: any;
    name: string;
    meta?: any;
    same_store_assignment?: boolean;
    slug: string;
    logo?: string;
    created_on?: string;
    products: ProductBundleItem[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    company_id?: number;
    modified_on?: string;
    choice: string;
    created_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    modified_by?: any;
    name: string;
    meta?: any;
    same_store_assignment?: boolean;
    slug: string;
    logo?: string;
    created_on?: string;
    products: ProductBundleItem[];
};
type Price = {
    currency?: string;
    min_effective?: number;
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
};
type Size = {
    is_available?: boolean;
    value?: string;
    display?: string;
    quantity?: number;
};
type LimitedProductData = {
    images?: string[];
    attributes?: any;
    item_code?: string;
    price?: any;
    short_description?: string;
    name?: string;
    sizes?: string[];
    uid?: number;
    country_of_origin?: string;
    identifier?: any;
    slug?: string;
    quantity?: number;
};
type GetProducts = {
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    price?: Price;
    allow_remove?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    product_details?: LimitedProductData;
    auto_select?: boolean;
    product_uid?: number;
};
type GetProductBundleResponse = {
    company_id?: number;
    choice?: string;
    is_active?: boolean;
    page_visibility?: string[];
    name?: string;
    meta?: any;
    same_store_assignment?: boolean;
    slug?: string;
    logo?: string;
    products?: GetProducts[];
};
type ProductBundleUpdateRequest = {
    company_id?: number;
    modified_on?: string;
    choice: string;
    is_active: boolean;
    page_visibility?: string[];
    modified_by?: any;
    name: string;
    meta?: any;
    same_store_assignment?: boolean;
    slug: string;
    logo?: string;
    products: ProductBundleItem[];
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    modified_on?: string;
    created_by?: any;
    guide?: Guide;
    modified_by?: any;
    subtitle?: string;
    name: string;
    title: string;
    brand_id?: number;
    image?: string;
    id?: string;
    description?: string;
    active?: boolean;
    created_on?: string;
    tag?: string;
};
type SizeGuideResponse = {
    modified_on?: string;
    company_id?: number;
    created_by?: any;
    modified_by?: any;
    name?: string;
    title?: string;
    subtitle?: string;
    brand_id?: number;
    tag?: string;
    id?: string;
    active?: boolean;
    created_on?: string;
    guide?: any;
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
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type ApplicationItemMeta = {
    alt_text?: any;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
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
    alt_text?: any;
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
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
    unit?: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    name: string;
    display_type: string;
    slug?: string;
    key?: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    template_slugs?: string[];
    priority: number;
    is_default: boolean;
    name?: string;
    app_id: string;
    slug: string;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    logo?: string;
    priority: number;
    is_default: boolean;
    name?: string;
    app_id: string;
    key: string;
    default_key: string;
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
    compare?: any;
    similar?: any;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    filter_types?: string[];
    key?: string;
    display?: string;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    name: string;
    size: ProductSize;
    display_type: string;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    subtitle?: string;
    size?: ProductSize;
    key: string;
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
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    value?: string;
    map_values?: any[];
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    logo?: string;
    priority: number;
    display_name?: string;
    name?: string;
    type: string;
    key: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    name?: string;
    key: string;
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
    modified_on?: string;
    id?: string;
    created_by?: any;
    type?: string;
    modified_by?: any;
    config_type: string;
    app_id: string;
    config_id?: string;
    product?: ConfigurationProduct;
    created_on?: string;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    modified_on?: string;
    created_by?: any;
    type?: string;
    modified_by?: any;
    config_type: string;
    app_id: string;
    config_id?: string;
    product?: ConfigurationProduct;
    created_on?: string;
    listing?: ConfigurationListing;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    config_type: string;
    app_id: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    operators?: string[];
    name: string;
    logo?: string;
};
type ProductFiltersValue = {
    count?: number;
    is_selected: boolean;
    value: any;
    currency_symbol?: string;
    max?: number;
    display: string;
    min?: number;
    selected_max?: number;
    selected_min?: number;
    display_format?: string;
    currency_code?: string;
    query_format?: string;
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
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
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
type GetCollectionDetailNest = {
    is_active?: boolean;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    app_id?: string;
    logo?: Media1;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    _schedule?: any;
    badge?: any;
    allow_sort?: boolean;
    meta?: any;
    action?: Action;
    type?: string;
    slug?: string;
    description?: string;
    banners?: ImageUrls;
    cron?: any;
    uid?: string;
    tag?: string[];
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
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionSchedule = {
    end?: string;
    duration?: number;
    cron?: string;
    start?: string;
    next_schedule?: NextSchedule[];
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    created_by?: UserInfo;
    is_active?: boolean;
    priority?: number;
    seo?: SeoDetail;
    visible_facets_keys?: string[];
    name: string;
    app_id: string;
    logo: CollectionImage;
    allow_facets?: boolean;
    sort_on?: string;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    meta?: any;
    _locale_language?: any;
    type: string;
    tags?: string[];
    slug: string;
    description?: string;
    _custom_json?: any;
    is_visible?: boolean;
    published?: boolean;
    banners: CollectionBanner;
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    is_active?: boolean;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    app_id?: string;
    logo?: BannerImage;
    sort_on?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    _schedule?: any;
    badge?: any;
    allow_sort?: boolean;
    meta?: any;
    type?: string;
    slug?: string;
    description?: string;
    banners?: ImageUrls;
    cron?: any;
    tag?: string[];
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    _schedule?: any;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    is_active?: boolean;
    priority?: number;
    type?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    meta?: any;
    app_id?: string;
    slug?: string;
    logo?: Media1;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
};
type UpdateCollection = {
    is_active?: boolean;
    priority?: number;
    seo?: SeoDetail;
    visible_facets_keys?: string[];
    name?: string;
    logo?: CollectionImage;
    allow_facets?: boolean;
    sort_on?: string;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    meta?: any;
    _locale_language?: any;
    tags?: string[];
    slug?: string;
    description?: string;
    _custom_json?: any;
    is_visible?: boolean;
    type?: string;
    published?: boolean;
    banners?: CollectionBanner;
    modified_by?: UserInfo;
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
type ProductBrand = {
    name?: string;
    logo?: Media1;
    action?: Action;
    uid?: number;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    discount?: string;
    brand?: ProductBrand;
    name?: string;
    sellable?: boolean;
    rating?: number;
    price?: ProductListingPrice;
    highlights?: string[];
    product_online_date?: string;
    rating_count?: number;
    teaser_tag?: any;
    medias?: Media1[];
    color?: string;
    image_nature?: string;
    slug: string;
    type?: string;
    description?: string;
    has_variant?: boolean;
    attributes?: any;
    short_description?: string;
    promo_meta?: any;
    tryouts?: string[];
    similars?: string[];
    uid?: number;
    item_type?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
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
    total_articles?: number;
    name?: string;
    article_freshness?: number;
    available_articles?: number;
    total_sizes?: number;
    available_sizes?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    platform?: string;
    brand_ids?: number[];
    enabled?: boolean;
    store_ids?: number[];
    opt_level: string;
};
type CompanyOptIn = {
    company_id: number;
    modified_on: number;
    created_by?: any;
    platform: string;
    created_on: number;
    modified_by?: any;
    brand_ids: number[];
    enabled: boolean;
    store_ids: number[];
    opt_level: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    business_type?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    brand_id?: number;
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
    modified_on?: string;
    company_id?: number;
    timing?: any;
    additional_contacts?: any[];
    display_name?: string;
    name?: string;
    documents?: any[];
    address?: any;
    manager?: any;
    uid?: number;
    store_code?: string;
    store_type?: string;
    created_on?: string;
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
    multi?: boolean;
    allowed_values?: string[];
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    format?: string;
    type: string;
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
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type GenderDetail = {
    schema?: AttributeMaster;
    departments?: string[];
    id?: string;
    details?: AttributeMasterDetails;
    name?: string;
    meta?: AttributeMasterMeta;
    filters?: AttributeMasterFilter;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    slug?: string;
    logo?: string;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    errors?: any;
    meta?: any;
};
type UserSerializer = {
    user_id?: string;
    uid?: string;
    username?: string;
    contact?: string;
    _id?: string;
};
type GetDepartment = {
    modified_on?: string;
    created_by?: UserSerializer;
    synonyms?: string[];
    search?: string;
    is_active?: boolean;
    page_no?: number;
    modified_by?: UserSerializer;
    name?: string;
    priority_order?: number;
    page_size?: number;
    uid?: number;
    slug?: string;
    logo?: string;
    created_on?: string;
    item_type?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    errors?: any;
    meta?: any;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    synonyms?: string[];
    is_active?: boolean;
    tags?: string[];
    _cls?: string;
    name: string;
    priority_order: number;
    uid?: number;
    slug?: string;
    logo: string;
    _custom_json?: any;
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
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    modified_on: string;
    created_by?: UserDetail;
    synonyms?: any[];
    is_active?: boolean;
    modified_by?: UserDetail;
    _cls?: any;
    name: any;
    priority_order: number;
    verified_on?: string;
    uid?: number;
    slug?: any;
    logo: string;
    verified_by?: UserDetail;
    created_on: string;
    _id?: any;
    _custom_json?: any;
};
type ProductTemplate = {
    modified_on?: string;
    departments?: string[];
    created_by?: any;
    attributes?: string[];
    is_active?: boolean;
    logo?: string;
    is_physical: boolean;
    modified_by?: any;
    name?: string;
    categories?: string[];
    is_expirable: boolean;
    slug: string;
    is_archived?: boolean;
    description?: string;
    created_on?: string;
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    brand_uid?: any;
    item_code?: any;
    multi_size?: any;
    is_active?: any;
    name?: any;
    country_of_origin?: any;
    is_dependent?: any;
    variants?: any;
    currency?: any;
    highlights?: any;
    sizes?: any;
    command?: any;
    hsn_code?: any;
    teaser_tag?: any;
    no_of_boxes?: any;
    media?: any;
    custom_order?: any;
    return_config?: any;
    trader_type?: any;
    slug?: any;
    tags?: any;
    description?: any;
    product_publish?: any;
    product_group_tag?: any;
    short_description?: any;
    trader?: any;
    size_guide?: any;
    category_slug?: any;
    item_type?: any;
};
type GlobalValidation = {
    title?: string;
    properties?: Properties;
    definitions?: any;
    type?: string;
    description?: string;
    required?: string[];
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    departments?: string[];
    id?: string;
    attributes?: string[];
    is_active?: boolean;
    logo?: string;
    is_physical: boolean;
    name?: string;
    categories?: string[];
    is_expirable: boolean;
    slug: string;
    is_archived?: boolean;
    description?: string;
    tag?: string;
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
    created_by?: VerifiedBy;
    seller_id?: number;
    status?: string;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    template_tags?: any;
    id?: string;
    task_id?: string;
    url?: string;
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
    landscape: string;
    logo: string;
    portrait: string;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
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
    modified_on?: string;
    departments: number[];
    id?: string;
    created_by?: any;
    synonyms?: string[];
    media?: Media2;
    hierarchy?: Hierarchy[];
    priority?: number;
    is_active: boolean;
    modified_by?: any;
    marketplaces?: CategoryMapping;
    name: string;
    level: number;
    tryouts?: string[];
    uid?: number;
    slug?: string;
    created_on?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    departments: number[];
    synonyms?: string[];
    media?: Media2;
    hierarchy?: Hierarchy[];
    priority?: number;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    name: string;
    level: number;
    tryouts?: string[];
    slug?: string;
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
type Logo = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Image = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    brand_uid?: number;
    verified_by?: VerifiedBy;
    created_by?: any;
    item_code?: string;
    multi_size?: boolean;
    is_active?: boolean;
    variant_group?: any;
    tax_identifier?: any;
    brand?: Brand;
    name?: string;
    verified_on?: string;
    country_of_origin?: string;
    is_dependent?: boolean;
    id?: string;
    variants?: any;
    is_set?: boolean;
    primary_color?: string;
    currency?: string;
    stage?: string;
    highlights?: string[];
    all_sizes?: any[];
    sizes?: any[];
    variant_media?: any;
    hsn_code?: string;
    moq?: any;
    modified_on?: string;
    company_id?: number;
    images?: Image[];
    teaser_tag?: any;
    no_of_boxes?: number;
    media?: Media1[];
    color?: string;
    l3_mapping?: string[];
    custom_order?: any;
    return_config?: ReturnConfigResponse;
    image_nature?: string;
    category?: any;
    all_identifiers?: string[];
    slug?: string;
    tags?: string[];
    description?: string;
    template_tag?: string;
    _custom_json?: any;
    created_on?: string;
    all_company_ids?: number[];
    departments?: number[];
    product_publish?: ProductPublished;
    net_quantity?: NetQuantityResponse;
    product_group_tag?: string[];
    attributes?: any;
    short_description?: string;
    is_physical?: boolean;
    modified_by?: any;
    pending?: string;
    trader?: any[];
    size_guide?: string;
    is_image_less_product?: boolean;
    uid?: number;
    category_slug?: string;
    is_expirable?: boolean;
    item_type?: string;
    category_uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type ProductCreateUpdateSchemaV2 = {
    brand_uid: number;
    item_code: string;
    variant_group?: any;
    is_active?: boolean;
    multi_size?: boolean;
    tax_identifier: TaxIdentifier;
    name: string;
    country_of_origin: string;
    is_dependent?: boolean;
    variants?: any;
    is_set?: boolean;
    requester?: string;
    currency: string;
    bulk_job_id?: string;
    highlights?: string[];
    change_request_id?: any;
    sizes: any[];
    variant_media?: any;
    company_id: number;
    teaser_tag?: TeaserTag;
    no_of_boxes?: number;
    media?: Media1[];
    action?: string;
    custom_order?: CustomOrder;
    return_config: ReturnConfig;
    slug: string;
    tags?: string[];
    description?: string;
    template_tag: string;
    _custom_json?: any;
    departments: number[];
    product_publish?: ProductPublish;
    net_quantity?: NetQuantity;
    product_group_tag?: string[];
    attributes: any;
    short_description?: string;
    is_image_less_product?: boolean;
    trader: Trader[];
    size_guide?: string;
    uid?: number;
    category_slug: string;
    item_type: string;
};
type ProductVariants = {
    brand_uid?: number;
    item_code?: string;
    media?: Media1[];
    name?: string;
    uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    created_by?: any;
    name?: string;
    logo?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    unit?: string;
    modified_on?: string;
    suggestion?: string;
    raw_key?: string;
    filters: AttributeMasterFilter;
    tags?: string[];
    slug: string;
    description?: string;
    created_on?: string;
    schema: AttributeMaster;
    departments: string[];
    synonyms?: any;
    modified_by?: any;
    details: AttributeMasterDetails;
    variant?: boolean;
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
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
    item_weight: number;
    item_height: number;
    size: any;
    item_width: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
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
    company_id?: number;
    modified_on?: string;
    created_by?: UserDetail1;
    stage?: string;
    is_active?: boolean;
    cancelled_records?: string[];
    created_on?: string;
    failed?: number;
    succeed?: number;
    modified_by?: UserDetail1;
    cancelled?: number;
    file_path?: string;
    failed_records?: string[];
    template?: ProductTemplate;
    template_tag?: string;
    total?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    modified_on?: string;
    company_id: number;
    created_by?: UserInfo1;
    template_tag?: string;
    is_active?: boolean;
    cancelled_records?: any[];
    stage?: string;
    succeed?: number;
    failed?: number;
    modified_by?: UserInfo1;
    cancelled?: number;
    custom_template_tag?: string;
    tracking_url?: string;
    file_path?: string;
    failed_records?: any[];
    created_on: string;
    total?: number;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    modified_by?: UserInfo1;
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
    user_id?: string;
    username?: string;
};
type Items = {
    modified_on?: string;
    company_id?: number;
    created_by?: UserCommon;
    cancelled_records?: string[];
    stage?: string;
    created_on?: string;
    is_active?: boolean;
    succeed?: number;
    failed?: number;
    modified_by?: UserCommon;
    cancelled?: number;
    tracking_url?: string;
    retry?: number;
    failed_records?: string[];
    id?: string;
    file_path?: string;
    total?: number;
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
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    currency?: string;
    sellable_quantity?: number;
    identifiers?: any;
    price?: number;
    inventory_updated_on?: string;
    item_id?: number;
    size?: string;
    price_transfer?: number;
    uid?: string;
    seller_identifier?: string;
    price_effective?: number;
    store?: any;
    quantity?: number;
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
    gtin_value: any;
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
    currency: string;
    identifiers: GTIN[];
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    item_length?: number;
    price?: number;
    item_height?: number;
    item_weight?: number;
    set?: InventorySet;
    size: any;
    price_transfer?: number;
    quantity: number;
    store_code: string;
    price_effective: number;
    item_width?: number;
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
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
type DimensionResponse = {
    unit: string;
    length: number;
    is_default: boolean;
    height: number;
    width: number;
};
type PriceMeta = {
    currency: string;
    transfer: number;
    marked: number;
    effective: number;
    tp_notes?: any;
    updated_at?: string;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
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
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type InventorySellerResponse = {
    manufacturer: ManufacturerResponse;
    created_by?: UserSerializer;
    is_active?: boolean;
    fynd_meta?: any;
    tax_identifier?: any;
    brand: BrandMeta;
    size: string;
    country_of_origin: string;
    identifier: any;
    added_on_store?: string;
    is_set?: boolean;
    fragile: boolean;
    total_quantity: number;
    dimension: DimensionResponse;
    stage?: string;
    price: PriceMeta;
    meta?: any;
    fynd_article_code: string;
    fynd_item_code: string;
    return_config?: ReturnConfig1;
    item_id: number;
    weight: WeightResponse;
    tags?: string[];
    company: CompanyMeta;
    _custom_json?: any;
    track_inventory?: boolean;
    trace_id?: string;
    quantities?: Quantities;
    expiration_date?: string;
    modified_by?: UserSerializer;
    set?: InventorySet;
    raw_meta?: any;
    trader?: Trader1[];
    uid: string;
    seller_identifier: string;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
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
type DimensionResponse1 = {
    unit?: string;
    length?: number;
    height?: number;
    width?: number;
};
type PriceArticle = {
    currency?: string;
    transfer?: number;
    marked?: number;
    effective?: number;
    tp_notes?: any;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    name?: string;
    store_type?: string;
    uid?: number;
};
type GetInventories = {
    manufacturer?: ManufacturerResponse1;
    created_by?: UserSerializer;
    tax_identifier?: any;
    brand?: BrandMeta1;
    size?: string;
    country_of_origin?: string;
    identifier?: any;
    id?: string;
    is_set?: boolean;
    total_quantity?: number;
    dimension?: DimensionResponse1;
    date_meta?: DateMeta;
    stage?: string;
    price?: PriceArticle;
    return_config?: ReturnConfig2;
    inventory_updated_on?: string;
    item_id?: number;
    weight?: WeightResponse1;
    tags?: string[];
    company?: CompanyMeta1;
    track_inventory?: boolean;
    platforms?: any;
    trace_id?: string;
    quantities?: QuantitiesArticle;
    expiration_date?: string;
    modified_by?: UserSerializer;
    trader?: Trader2[];
    uid?: string;
    seller_identifier?: string;
    store?: ArticleStoreResponse;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    company_id?: number;
    modified_on?: string;
    created_by?: any;
    cancelled_records?: string[];
    is_active?: boolean;
    stage?: string;
    failed?: number;
    succeed?: number;
    modified_by?: any;
    cancelled?: number;
    file_path?: string;
    failed_records?: string[];
    id?: string;
    created_on?: string;
    total?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    currency?: string;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
    expiration_date?: string;
    price?: number;
    tags?: string[];
    quantity?: number;
    price_marked?: number;
    seller_identifier: string;
    price_effective?: number;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    trigger_on?: string;
    request_params?: any;
    seller_id: number;
    status?: string;
    completed_on?: string;
    task_id: string;
    url?: string;
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
    status?: string;
    task_id: string;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    total_quantity?: number;
    trace_id?: string;
    expiration_date?: string;
    store_id: number;
    price_marked?: number;
    seller_identifier: string;
    price_effective?: number;
    tags?: string[];
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
type HsnCodesObject = {
    company_id?: number;
    modified_on?: string;
    tax_on_mrp?: boolean;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax1?: number;
    tax2?: number;
    threshold1?: number;
    id?: string;
    hs2_code?: string;
    hsn_code?: string;
};
type PageResponse = {
    current?: string;
    item_total?: number;
    size?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    company_id: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax1: number;
    tax2?: number;
    uid?: number;
    threshold1: number;
    hs2_code: string;
    hsn_code: string;
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
    modified_on?: string;
    created_by?: any;
    reporting_hsn: string;
    country_code: string;
    modified_by?: any;
    taxes: TaxSlab[];
    type: string;
    description: string;
    created_on?: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type ArticleQuery = {
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    query?: ArticleQuery;
    group_id?: string;
    article_assignment?: ArticleAssignment;
    meta?: any;
    quantity?: number;
};
type AssignStore = {
    articles: AssignStoreArticle[];
    company_id?: number;
    channel_type?: string;
    channel_identifier?: string;
    pincode: string;
    app_id: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    company_id?: number;
    store_pincode?: number;
    strategy_wise_listing?: any[];
    status: boolean;
    price_effective?: number;
    group_id?: string;
    item_id: number;
    article_assignment: ArticleAssignment1;
    meta?: any;
    size: string;
    uid?: string;
    price_marked?: number;
    store_id?: number;
    index?: number;
    quantity: number;
    _id?: string;
    s_city?: string;
};
type BrandItem = {
    departments?: string[];
    banners?: ImageUrls;
    action?: Action;
    discount?: string;
    name?: string;
    uid?: number;
    slug?: string;
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    priority_order?: number;
    uid?: number;
    slug?: string;
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
    banners?: ImageUrls;
    childs?: any[];
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
    _custom_json?: any;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
    _custom_json?: any;
};
type Child = {
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
    _custom_json?: any;
};
type CategoryItems = {
    banners?: ImageUrls;
    childs?: Child[];
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
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
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page: Page;
    operators?: any;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    brand?: ProductBrand;
    name?: string;
    rating?: number;
    highlights?: string[];
    product_online_date?: string;
    rating_count?: number;
    teaser_tag?: any;
    medias?: Media1[];
    color?: string;
    image_nature?: string;
    slug: string;
    type?: string;
    description?: string;
    has_variant?: boolean;
    attributes?: any;
    short_description?: string;
    promo_meta?: any;
    tryouts?: string[];
    similars?: string[];
    uid?: number;
    item_type?: string;
};
type InventoryPage = {
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
    next_id?: string;
    type: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
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
type GetAddressSerializer = {
    country?: string;
    address1?: string;
    address_type?: string;
    city?: string;
    address2?: string;
    longitude?: number;
    country_code?: string;
    pincode?: number;
    landmark?: string;
    latitude?: number;
    state?: string;
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
type GetCompanySerializer = {
    modified_on?: string;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    stage?: string;
    modified_by?: UserSerializer2;
    name?: string;
    business_type?: string;
    reject_reason?: string;
    verified_on?: string;
    uid?: number;
    company_type?: string;
    verified_by?: UserSerializer2;
    created_on?: string;
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
type GetLocationSerializer = {
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    warnings?: any;
    display_name: string;
    name: string;
    verified_on?: string;
    integration_type?: LocationIntegrationType;
    stage?: string;
    notification_emails?: string[];
    modified_on?: string;
    code: string;
    phone_number: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    address: GetAddressSerializer;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    company?: GetCompanySerializer;
    _custom_json?: any;
    created_on?: string;
    modified_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    uid?: number;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
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
    is_active?: boolean;
    name?: string;
    uid: number;
    app_id: string;
    logo?: string;
    _custom_json?: any;
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    created_on?: string;
    warnings?: any;
    franchise_enabled?: boolean;
    notification_emails?: string[];
    business_type: string;
    documents?: Document[];
    modified_by?: UserSerializer;
    company_type: string;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    business_info?: string;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    name?: string;
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    business_details?: BusinessDetails;
    stage?: string;
    uid: number;
    verified_on?: string;
    mode?: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    state: string;
    city: string;
    latitude: number;
    pincode: number;
    address2?: string;
    longitude: number;
    address1: string;
    landmark?: string;
    country_code?: string;
    address_type: string;
    country: string;
};
type UpdateCompany = {
    _custom_json?: any;
    contact_details?: ContactDetails;
    warnings?: any;
    business_info?: string;
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    business_details?: BusinessDetails;
    company_type?: string;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    name?: string;
    business_type?: string;
    documents?: Document[];
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
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    stage?: string;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    created_on?: string;
    warnings?: any;
    modified_by?: UserSerializer;
    uid?: number;
    reject_reason?: string;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    modified_on?: string;
    name: string;
    logo?: string;
    synonyms?: string[];
    _custom_json?: any;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    description?: string;
    stage?: string;
    _locale_language?: any;
    verified_on?: string;
    mode?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    name: string;
    brand_tier?: string;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    description?: string;
    company_id?: number;
    uid?: number;
    logo: string;
    synonyms?: string[];
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    created_on?: string;
    modified_by?: UserSerializer;
    details?: CompanyDetails;
    _custom_json?: any;
    market_channels?: string[];
    name?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    reject_reason?: string;
    verified_on?: string;
    modified_on?: string;
    company_type: string;
    notification_emails?: string[];
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    created_on?: string;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    warnings?: any;
    reject_reason?: string;
    verified_on?: string;
    modified_on?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
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
    state?: string;
    city?: string;
    latitude: number;
    pincode?: number;
    address2?: string;
    longitude: number;
    address1?: string;
    landmark?: string;
    country_code?: string;
    address_type?: string;
    country?: string;
};
type LocationSerializer = {
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    company: number;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    holiday?: HolidaySchemaSerializer[];
    code: string;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    store_type?: string;
    stage?: string;
    uid?: number;
    documents?: Document[];
    address: AddressSerializer;
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
    pan_card?: PanCardConfig;
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
type PanCardConfig = {
    enabled?: boolean;
    cod_threshold_amount?: number;
    online_threshold_amount?: number;
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
    value?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
    key?: number;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    duration?: number;
    start?: string;
    next_schedule?: any[];
    end?: string;
    cron?: string;
};
type RuleDefinition = {
    calculate_on: string;
    value_type: string;
    currency_code?: string;
    type: string;
    scope?: string[];
    auto_apply?: boolean;
    applicable_on: string;
    is_exact?: boolean;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
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
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
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
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    post_order?: PostOrder;
    platforms?: string[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    payments?: any;
    ordering_stores?: number[];
    user_type?: string;
    user_groups?: number[];
    bulk_bundle?: BulkBundleRestriction;
    price_range?: PriceRange;
};
type CouponAdd = {
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    display_meta: DisplayMeta;
    tags?: string[];
    action?: CouponAction;
    validation?: Validation;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    code: string;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
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
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    display_meta: DisplayMeta;
    tags?: string[];
    action?: CouponAction;
    validation?: Validation;
    author?: CouponAuthor;
    state?: State;
    restrictions?: Restrictions;
    code: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionSchedule = {
    duration?: number;
    published: boolean;
    start: string;
    next_schedule?: any[];
    end?: string;
    cron?: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type CompareObject = {
    equals?: number;
    less_than?: number;
    less_than_equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_brand?: number[];
    item_exclude_id?: number[];
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_exclude_sku?: string[];
    item_id?: number[];
    all_items?: boolean;
    item_company?: number[];
    item_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_brand?: number[];
    item_store?: number[];
    item_exclude_store?: number[];
    buy_rules?: string[];
    item_size?: string[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    available_zones?: string[];
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    discount_amount?: number;
    min_offer_quantity?: number;
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    max_discount_amount?: number;
    discount_price?: number;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type UserRegistered = {
    start?: string;
    end?: string;
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
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    order_quantity?: number;
    post_order?: PostOrder1;
    platforms?: string[];
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    user_id?: string[];
    anonymous_users?: boolean;
};
type PromotionListItem = {
    post_order_action?: PromotionAction;
    application_id: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    apply_exclusive?: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    promo_group: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    restrictions?: Restrictions1;
    _custom_json?: any;
    code?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    post_order_action?: PromotionAction;
    application_id: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    apply_exclusive?: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    promo_group: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    restrictions?: Restrictions1;
    _custom_json?: any;
    code?: string;
};
type PromotionUpdate = {
    post_order_action?: PromotionAction;
    application_id: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    apply_exclusive?: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    promo_group: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    restrictions?: Restrictions1;
    _custom_json?: any;
    code?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    entity_slug?: string;
    title?: string;
    type?: string;
    subtitle?: string;
    entity_type?: string;
    created_on?: string;
    description?: string;
    modified_on?: string;
    is_hidden?: boolean;
    example?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
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
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type Tags = {
    tags?: any;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    uid?: number;
    item_code?: string;
    type?: string;
    tags?: string[];
    images?: ProductImage[];
    action?: ProductAction;
    slug?: string;
    categories?: CategoryInfo[];
    teaser_tag?: Tags;
    name?: string;
    _custom_json?: any;
    brand?: BaseInfo;
};
type FreeGiftItem = {
    item_name?: string;
    item_slug?: string;
    item_brand_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_price_details?: any;
};
type AppliedFreeArticles = {
    quantity?: number;
    article_id?: string;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
    offer?: any;
};
type AppliedPromotion = {
    offer_text?: string;
    promotion_group?: string;
    amount?: number;
    promotion_type?: string;
    applied_free_articles?: AppliedFreeArticles[];
    buy_rules?: BuyRules[];
    promo_id?: string;
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
    promotion_name?: string;
    article_quantity?: number;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    selling?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    uid?: string;
    gift_card?: any;
    cart_item_meta?: any;
    product_group_tags?: string[];
    extra_meta?: any;
    store?: BaseInfo;
    type?: string;
    price?: ArticlePriceInfo;
    is_gift_visible?: boolean;
    seller_identifier?: string;
    parent_item_identifiers?: any;
    size?: string;
    identifier?: any;
    quantity?: number;
};
type CouponDetails = {
    discount_single_quantity?: number;
    discount_total_quantity?: number;
    code?: string;
};
type ProductAvailability = {
    sizes?: string[];
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
    out_of_stock?: boolean;
};
type CartProductInfo = {
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    message?: string;
    coupon_message?: string;
    discount?: string;
    product?: CartProduct;
    is_set?: boolean;
    promotions_applied?: AppliedPromotion[];
    price?: ProductPriceInfo;
    article?: ProductArticle;
    coupon?: CouponDetails;
    parent_item_identifiers?: any;
    bulk_offer?: any;
    availability?: ProductAvailability;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    key?: string;
};
type RawBreakup = {
    cod_charge?: number;
    fynd_cash?: number;
    gift_card?: number;
    you_saved?: number;
    convenience_fee?: number;
    discount?: number;
    gst_charges?: number;
    vog?: number;
    total?: number;
    coupon?: number;
    mrp_total?: number;
    subtotal?: number;
    delivery_charge?: number;
};
type CouponBreakup = {
    uid?: string;
    sub_title?: string;
    message?: string;
    title?: string;
    value?: number;
    max_discount_value?: number;
    type?: string;
    coupon_type?: string;
    description?: string;
    is_applied?: boolean;
    coupon_value?: number;
    minimum_cart_value?: number;
    code?: string;
};
type LoyaltyPoints = {
    description?: string;
    applicable?: number;
    is_applied?: boolean;
    total?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    message?: string[];
    value?: number;
    display?: string;
    key?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    country_code?: string;
    landmark?: string;
    address_type?: string;
    address?: string;
    city?: string;
    area?: string;
    meta?: any;
    country?: string;
    area_code_slug?: string;
    state?: string;
    name?: string;
    phone?: number;
    email?: string;
    area_code: string;
    pincode?: number;
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
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    coupon_effective_discount: number;
    price_marked: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    amount_paid: number;
    meta?: CartItemMeta;
    extra_meta?: any;
    cashback_applied: number;
    delivery_charges: number;
    discount: number;
    price_effective: number;
    employee_discount?: number;
    product_id: number;
    size: string;
    cod_charges: number;
    quantity?: number;
    files?: OpenApiFiles[];
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    billing_address: ShippingAddress;
    affiliate_order_id?: string;
    cashback_applied: number;
    coupon_code: string;
    coupon_value: number;
    employee_discount?: any;
    gstin?: string;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    order_id?: string;
    cart_value: number;
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    coupon?: string;
    cod_charges: number;
    files?: OpenApiFiles[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    uid: number;
    pick_up_customer_details?: any;
    promotion?: any;
    fc_index_map?: number[];
    user_id: string;
    checkout_mode?: string;
    is_archive?: boolean;
    articles: any[];
    fynd_credits?: any;
    payment_methods?: any[];
    cart_value?: number;
    order_id?: string;
    buy_now?: boolean;
    is_default: boolean;
    payments?: any;
    is_active?: boolean;
    created_on: string;
    last_modified: string;
    _id: string;
    shipments?: any[];
    bulk_coupon_discount?: number;
    cashback: any;
    gstin?: string;
    meta?: any;
    discount?: number;
    delivery_charges?: any;
    app_id?: string;
    payment_mode?: string;
    comment?: string;
    coupon?: any;
    expire_at: string;
    merge_qty?: boolean;
    cod_charges?: any;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    success?: boolean;
    result?: any;
};
type AddProductCart = {
    article_assignment?: any;
    pos?: boolean;
    product_group_tags?: string[];
    extra_meta?: any;
    seller_id?: number;
    display?: string;
    item_id?: number;
    parent_item_identifiers?: any;
    store_id?: number;
    item_size?: string;
    quantity?: number;
    article_id?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    gstin?: string;
    breakup_values?: CartBreakup;
    message?: string;
    id?: string;
    pan_config?: any;
    buy_now?: boolean;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    pan_no?: string;
    restrict_checkout?: boolean;
    comment?: string;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    checkout_mode?: string;
    last_modified?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    item_id?: number;
    parent_item_identifiers?: any;
    item_size?: string;
    item_index?: number;
    quantity?: number;
    article_id?: string;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    token?: string;
    meta?: any;
    user?: any;
    source?: any;
    created_on?: string;
};
type SharedCart = {
    uid?: string;
    shared_cart_details?: SharedCartDetails;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    message?: string;
    buy_now?: boolean;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    last_modified?: string;
    id?: string;
    coupon_text?: string;
    cart_id?: number;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    gstin?: string;
    comment?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    item_counts?: number;
    pick_up_customer_details?: any;
    cart_value?: number;
    cart_id?: string;
    created_on?: string;
    user_id?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    pan_config?: any;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    message?: string;
    buy_now?: boolean;
    user?: UserInfo;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    last_modified?: string;
    id?: string;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    gstin?: string;
    pan_no?: string;
    comment?: string;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    sub_title?: string;
    message?: string;
    is_applied?: boolean;
    title?: string;
    coupon_code?: string;
    max_discount_value?: number;
    coupon_type?: string;
    expires_on?: string;
    description?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    is_applicable?: boolean;
};
type PageCoupon = {
    total?: number;
    current?: number;
    has_previous?: boolean;
    total_item_count?: number;
    has_next?: boolean;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    landmark?: string;
    address_type?: string;
    state?: string;
    user_id?: string;
    checkout_mode?: string;
    address?: string;
    is_default_address?: boolean;
    google_map_point?: any;
    created_by_user_id?: string;
    is_active?: boolean;
    email?: string;
    id?: string;
    country?: string;
    city?: string;
    geo_location?: GeoLocation;
    cart_id?: string;
    area_code_slug?: string;
    area_code?: string;
    country_code?: string;
    area?: string;
    meta?: any;
    tags?: string[];
    name?: string;
    phone?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    success?: boolean;
    is_default_address?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    success?: boolean;
    is_default_address?: boolean;
    id?: string;
    is_updated?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    cart_id?: string;
    user_id?: string;
    billing_address_id?: string;
    checkout_mode?: string;
};
type ShipmentResponse = {
    fulfillment_id?: number;
    items?: CartProductInfo[];
    shipments?: number;
    promise?: ShipmentPromise;
    dp_id?: string;
    shipment_type?: string;
    order_type?: string;
    dp_options?: any;
    box_type?: string;
    fulfillment_type?: string;
};
type CartShipmentsResponse = {
    uid?: string;
    id?: string;
    shipments?: ShipmentResponse[];
    coupon_text?: string;
    restrict_checkout?: boolean;
    cart_id?: number;
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    delivery_charge_info?: string;
    gstin?: string;
    breakup_values?: CartBreakup;
    message?: string;
    error?: boolean;
    buy_now?: boolean;
    comment?: string;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    last_modified?: string;
};
type UpdateCartShipmentItem = {
    quantity?: number;
    shipment_type: string;
    article_uid: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    gstin?: string;
    pick_up_customer_details?: any;
    pan_no?: string;
    comment?: string;
    checkout_mode?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    user: string;
    employee_code?: string;
    last_name: string;
    first_name: string;
    _id: string;
};
type Files = {
    values: string[];
    key: string;
};
type PlatformCartCheckoutDetailRequest = {
    billing_address?: any;
    pick_at_store_uid?: number;
    aggregator?: string;
    callback_url?: string;
    user_id: string;
    payment_params?: any;
    checkout_mode?: string;
    pos?: boolean;
    billing_address_id?: string;
    payment_auto_confirm?: boolean;
    id: string;
    merchant_code?: string;
    extra_meta?: any;
    employee_code?: string;
    staff?: StaffCheckout;
    order_type: string;
    ordering_store?: number;
    device_id?: string;
    meta?: any;
    payment_identifier?: string;
    payment_mode: string;
    address_id?: string;
    delivery_address?: any;
    files?: Files[];
};
type CheckCart = {
    uid?: string;
    restrict_checkout?: boolean;
    store_emps?: any[];
    success?: boolean;
    user_type?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    message?: string;
    order_id?: string;
    buy_now?: boolean;
    cod_available?: boolean;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    last_modified?: string;
    id?: string;
    delivery_charge_order_value?: number;
    coupon_text?: string;
    store_code?: string;
    cart_id?: number;
    error_message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    cod_message?: string;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    gstin?: string;
    delivery_charges?: number;
    comment?: string;
    cod_charges?: number;
};
type CartCheckoutResponse = {
    app_intercept_url?: string;
    message?: string;
    order_id?: string;
    data?: any;
    cart?: CheckCart;
    success?: boolean;
    payment_confirm_url?: string;
    callback_url?: string;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    landmark?: string;
    uid?: number;
    id?: number;
    address_type?: string;
    address?: string;
    country?: string;
    area?: string;
    city?: string;
    store_code?: string;
    area_code_slug?: string;
    state?: string;
    name?: string;
    phone?: string;
    email?: string;
    area_code?: string;
    pincode?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    id?: string;
    merchant_code?: string;
    payment_identifier?: string;
    payment_mode?: string;
    address_id?: string;
    aggregator_name?: string;
};
type CouponValidity = {
    title?: string;
    discount?: number;
    valid?: boolean;
    display_message_en?: string;
    code?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    coupon_validity?: CouponValidity;
    message?: string;
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
type ApplicationServiceabilityConfig = {
    serviceability_type: string;
    channel_id: string;
    channel_type: string;
};
type ServiceabilityrErrorResponse = {
    value: string;
    message: string;
    type: string;
};
type ApplicationServiceabilityConfigResponse = {
    success: boolean;
    data?: ApplicationServiceabilityConfig;
    error?: ServiceabilityrErrorResponse;
};
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
type EntityRegionView_page = {
    type: string;
    current: number;
    size: number;
    item_total: number;
    has_next: boolean;
};
type EntityRegionView_Items = {
    sub_type: string;
    uid: string;
    name: string;
};
type EntityRegionView_Error = {
    value?: string;
    message?: string;
    type?: string;
};
type EntityRegionView_Response = {
    success: boolean;
    page: EntityRegionView_page;
    data: EntityRegionView_Items[];
    error: EntityRegionView_Error;
};
type ZoneDataItem = {
    current: number;
    size: number;
    type: string;
    item_total: number;
    has_next: boolean;
};
type ListViewProduct = {
    count: number;
    type: string;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    pincodes_count: number;
    slug: string;
    company_id: number;
    zone_id: string;
    name: string;
    stores_count: number;
    product: ListViewProduct;
    channels: ListViewChannels;
    is_active: boolean;
};
type ListViewSummary = {
    total_zones: number;
    total_active_zones: number;
    total_pincodes_served: number;
};
type ListViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
    summary: ListViewSummary[];
};
type CompanyStoreView_PageItems = {
    type: string;
    current: number;
    size: number;
    item_total: number;
    has_next: boolean;
};
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ZoneProductTypes = {
    tags: string[];
    type: string;
};
type ZoneMappingType = {
    state?: string[];
    country: string;
    pincode?: string[];
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
    data: UpdateZoneData;
    identifier: string;
};
type ZoneSuccessResponse = {
    success: boolean;
    status_code: number;
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
    data: CreateZoneData;
    identifier: string;
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
type AddressResponse = {
    address2?: string;
    longitude?: number;
    city?: string;
    address1?: string;
    latitude?: number;
    landmark?: string;
    pincode?: number;
    state?: string;
    country?: string;
};
type ContactNumberResponse = {
    country_code?: number;
    number?: string;
};
type IntegrationTypeResponse = {
    order?: string;
    inventory?: string;
};
type CreatedByResponse = {
    user_id?: string;
    username?: string;
};
type MobileNo = {
    country_code?: number;
    number?: string;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    name?: string;
    email?: string;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type ModifiedByResponse = {
    user_id?: string;
    username?: string;
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
type DocumentsResponse = {
    legal_name?: string;
    value?: string;
    verified?: boolean;
    type?: string;
};
type Dp = {
    external_account_id?: string;
    rvp_priority?: number;
    area_code?: number;
    lm_priority?: number;
    assign_dp_from_sb?: boolean;
    transport_mode?: string;
    fm_priority?: number;
    payment_mode?: string;
    operations?: string[];
    internal_account_id?: string;
};
type LogisticsResponse = {
    dp?: Dp;
    override?: boolean;
};
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
type TimmingResponse = {
    opening?: OpeningClosing;
    closing?: OpeningClosing;
    open?: boolean;
    weekday?: string;
};
type WarningsResponse = {
    store_address?: string;
};
type ItemResponse = {
    address?: AddressResponse;
    verified_on?: string;
    company_id?: number;
    _cls?: string;
    created_on?: string;
    contact_numbers?: ContactNumberResponse[];
    integration_type?: IntegrationTypeResponse;
    notification_emails?: string[];
    created_by?: CreatedByResponse;
    stage?: string;
    manager?: ManagerResponse;
    modified_on?: string;
    product_return_config?: ProductReturnConfigResponse;
    verified_by?: ModifiedByResponse;
    store_type?: string;
    name?: string;
    display_name?: string;
    company?: number;
    _custom_json?: any;
    code?: string;
    gst_credentials?: GstCredentialsResponse;
    documents?: DocumentsResponse[];
    logistics?: LogisticsResponse;
    uid?: number;
    timing?: TimmingResponse[];
    warnings?: WarningsResponse;
    modified_by?: ModifiedByResponse;
    sub_type?: string;
};
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: PageResponse;
};
