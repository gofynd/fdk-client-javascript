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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, PlatformItem, GSTDetailsData, Prices, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, OrderBagArticle, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagConfigs, OrderBrandName, BagStateMapper, CurrentStatus, BagGST, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, ShipmentStatusData, OrderDetailsData, AffiliateMeta, BuyerDetails, LockData, EinvoiceInfo, Formatted, DebugInfo, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, OrderingStoreDetails, ShipmentPayments, InvoiceInfo, DPDetailsData, UserDetailsData, Dimensions, Meta, PhoneDetails, ContactDetails, CompanyDetails, BagStatusHistory, FulfillingStore, TrackingList, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, TransactionData, PlatformUserDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, ReturnConfig, Weight, Article, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, ArticleDetails, Attributes, Item, B2BPODetails, BagMeta, Brand, AffiliateBagDetails, BagGSTDetails, Dates, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, ShippingInfo, PaymentMethod, PaymentInfo, BillingInfo, TaxInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionBadge, UserInfo, CollectionQuery, SeoDetail, CollectionSchedule, CollectionImage, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TeaserTag, TaxIdentifier, Trader, ProductPublish, CustomOrder, NetQuantity, ProductCreateUpdateSchemaV2, ReturnConfigResponse, Logo, ProductPublished, NetQuantityResponse, Image, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ReturnConfig1, BrandMeta, Trader1, ManufacturerResponse, PriceMeta, DimensionResponse, QuantityBase, Quantities, WeightResponse, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ArticleStoreResponse, ReturnConfig2, BrandMeta1, Trader2, ManufacturerResponse1, PriceArticle, DimensionResponse1, Quantity, QuantitiesArticle, WeightResponse1, CompanyMeta1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, GetAddressSerializer, UserSerializer2, GetCompanySerializer, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, State, CouponAuthor, Ownership, Rule, CouponDateMeta, CouponSchedule, DisplayMetaDict, DisplayMeta, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PostOrder, Restrictions, Validity, CouponAction, RuleDefinition, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, Visibility, Ownership1, PromotionAuthor, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAction, PromotionDateMeta, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, CouponBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, CouponDetails, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductPrice, ProductPriceInfo, CartProductIdentifer, PromoMeta, ProductAvailability, CategoryInfo, ActionQuery, ProductAction, BaseInfo, ProductImage, Tags, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ApplicationServiceabilityConfig, ServiceabilityrErrorResponse, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_page, EntityRegionView_Items, EntityRegionView_Error, EntityRegionView_Response, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, AddressResponse, ContactNumberResponse, IntegrationTypeResponse, CreatedByResponse, MobileNo, ManagerResponse, ProductReturnConfigResponse, ModifiedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, DocumentsResponse, Dp, LogisticsResponse, OpeningClosing, TimmingResponse, WarningsResponse, ItemResponse, GetStoresViewResponse };
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
    aggregators?: any[];
    excluded_fields: string[];
    success: boolean;
    app_id: string;
    display_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    secret: string;
    key: string;
    merchant_salt: string;
    is_active?: boolean;
    config_type: string;
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
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type IntentApp = {
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
    code?: string;
};
type PaymentModeList = {
    expired?: boolean;
    intent_flow?: boolean;
    exp_year?: number;
    merchant_code?: string;
    intent_app_error_list?: string[];
    card_id?: string;
    logo_url?: PaymentModeLogo;
    card_name?: string;
    nickname?: string;
    card_reference?: string;
    card_fingerprint?: string;
    exp_month?: number;
    card_brand?: string;
    display_priority?: number;
    card_issuer?: string;
    aggregator_name: string;
    remaining_limit?: number;
    display_name?: string;
    retry_count?: number;
    card_number?: string;
    card_type?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    timeout?: number;
    card_brand_image?: string;
    card_token?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    name?: string;
    fynd_vpa?: string;
    card_isin?: string;
    cod_limit?: number;
    intent_app?: IntentApp[];
    code?: string;
    cod_limit_per_order?: number;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    name: string;
    display_priority: number;
    aggregator_name?: string;
    list?: PaymentModeList[];
    display_name: string;
    add_card_enabled?: boolean;
    save_card?: boolean;
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
    unique_transfer_no: any;
    payouts_aggregators: any[];
    transfer_type: string;
    more_attributes: any;
    customers: any;
    is_active: boolean;
    is_default: boolean;
};
type PayoutBankDetails = {
    branch_name?: string;
    state?: string;
    account_no?: string;
    account_type: string;
    ifsc_code: string;
    country?: string;
    pincode?: number;
    bank_name?: string;
    city?: string;
    account_holder?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    users: any;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    aggregator: string;
    is_active: boolean;
};
type PayoutResponse = {
    unique_transfer_no: string;
    created: boolean;
    users: any;
    bank_details: any;
    payouts: any;
    success: boolean;
    transfer_type: string;
    aggregator: string;
    payment_status: string;
    is_active: boolean;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    success: boolean;
    config: any;
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
    data?: any;
    success: boolean;
    message: string;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    branch_name: string;
    account_no: string;
    ifsc_code: string;
    bank_name: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    comment?: string;
    account_holder: string;
    branch_name?: string;
    beneficiary_id: string;
    account_no: string;
    mobile?: string;
    display_name: string;
    email: string;
    created_on: string;
    transfer_mode: string;
    modified_on: string;
    id: number;
    subtitle: string;
    ifsc_code: string;
    bank_name: string;
    address: string;
    title: string;
    delights_user_name?: string;
    is_active: boolean;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    current_status?: string;
    payment_gateway?: string;
    extra_meta?: any;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    mode: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
    name?: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    order_id: string;
    success: boolean;
    message: string;
};
type CODdata = {
    usages: number;
    remaining_limit: number;
    user_id: string;
    is_active: boolean;
    limit: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    is_active: boolean;
    mobileno: string;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcModelData = {
    aggregator: string;
    models: string[];
    aggregator_id: number;
};
type EdcAggregatorAndModelListResponse = {
    data: EdcModelData[];
    success: boolean;
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    aggregator_id: number;
    edc_model: string;
    device_tag?: string;
    terminal_serial_no: string;
    store_id: number;
    edc_device_serial_no: string;
};
type EdcDevice = {
    aggregator_id: number;
    edc_model?: string;
    aggregator_name?: string;
    terminal_unique_identifier: string;
    device_tag: string;
    terminal_serial_no: string;
    store_id: number;
    edc_device_serial_no: string;
    application_id: string;
    is_active: boolean;
    merchant_store_pos_code?: string;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcUpdateRequest = {
    aggregator_id?: number;
    edc_model?: string;
    device_tag?: string;
    store_id?: number;
    edc_device_serial_no?: string;
    is_active?: string;
    merchant_store_pos_code?: string;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    items: EdcDevice[];
    page: Page;
    success: boolean;
};
type PaymentInitializationRequest = {
    contact: string;
    email: string;
    order_id: string;
    vpa?: string;
    razorpay_payment_id?: string;
    merchant_order_id: string;
    customer_id: string;
    currency: string;
    device_id?: string;
    method: string;
    aggregator: string;
    timeout?: number;
    amount: number;
};
type PaymentInitializationResponse = {
    status?: string;
    polling_url: string;
    virtual_id?: string;
    vpa?: string;
    bqr_image?: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    success: boolean;
    customer_id?: string;
    aggregator_order_id?: string;
    currency?: string;
    device_id?: string;
    method: string;
    aggregator: string;
    timeout?: number;
    amount?: number;
    upi_poll_url?: string;
};
type PaymentStatusUpdateRequest = {
    contact: string;
    status: string;
    order_id: string;
    email: string;
    vpa?: string;
    merchant_order_id: string;
    customer_id: string;
    currency: string;
    device_id?: string;
    method: string;
    aggregator: string;
    amount: number;
};
type PaymentStatusUpdateResponse = {
    status: string;
    aggregator_name: string;
    success?: boolean;
    retry: boolean;
    redirect_url?: string;
};
type ResendOrCancelPaymentRequest = {
    request_type: string;
    order_id: string;
    device_id?: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type PlatformItem = {
    color?: string;
    code?: string;
    l3_category_name?: string;
    can_return?: boolean;
    department_id?: number;
    image?: string[];
    images?: string[];
    name?: string;
    l1_category?: string[];
    can_cancel?: boolean;
    l3_category?: number;
    size?: string;
    id?: number;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    gst_fee: number;
    gstin_code: string;
    tax_collected_at_source: number;
    value_of_good: number;
};
type Prices = {
    fynd_credits?: number;
    cod_charges?: number;
    refund_amount?: number;
    cashback?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    transfer_price?: number;
    delivery_charge?: number;
    price_effective?: number;
    refund_credit?: number;
    coupon_value?: number;
    cashback_applied?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
    price_marked?: number;
    amount_paid?: number;
    promotion_effective_discount?: number;
};
type BagUnit = {
    status: any;
    item_quantity: number;
    total_shipment_bags: number;
    bag_id: number;
    item?: PlatformItem;
    shipment_id: string;
    can_return?: boolean;
    can_cancel?: boolean;
    gst?: GSTDetailsData;
    prices?: Prices;
    ordering_channel: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    status: string;
    hex_code: string;
    title: string;
    actual_status: string;
    ops_status: string;
};
type UserDataInfo = {
    uid?: number;
    first_name?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    mobile?: string;
    name?: string;
    email?: string;
    gender?: string;
};
type ShipmentItem = {
    fulfilling_centre: string;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    shipment_id?: string;
    total_shipments_in_order: number;
    shipment_created_at: string;
    channel?: any;
    sla?: any;
    payment_methods?: any;
    total_bags_count: number;
    application?: any;
    prices?: Prices;
    created_at: string;
    user?: UserDataInfo;
    id: string;
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
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type PlatformDeliveryAddress = {
    country?: string;
    updated_at?: string;
    address1?: string;
    city?: string;
    area?: string;
    version?: string;
    latitude?: number;
    landmark?: string;
    longitude?: number;
    address2?: string;
    contact_person?: string;
    email?: string;
    pincode?: string;
    address_category?: string;
    phone?: string;
    created_at?: string;
    address_type?: string;
    state?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid_roundoff?: number;
    transfer_price: number;
    delivery_charge: number;
    gst_fee: number;
    price_marked: number;
    amount_paid: number;
    size: string;
    added_to_fynd_cash: boolean;
    gst_tax_percentage: number;
    tax_collected_at_source?: number;
    identifiers: Identifier;
    gst_tag: string;
    cashback: number;
    discount: number;
    price_effective: number;
    refund_credit: number;
    coupon_value: number;
    cashback_applied: number;
    hsn_code: string;
    promotion_effective_discount: number;
    fynd_credits: number;
    cod_charges: number;
    brand_calculated_amount: number;
    item_name: string;
    coupon_effective_discount: number;
    total_units: number;
    value_of_good: number;
};
type BagConfigs = {
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_active: boolean;
};
type OrderBrandName = {
    modified_on?: string;
    created_on: string;
    company: string;
    brand_name: string;
    logo: string;
    id: number;
};
type BagStateMapper = {
    app_state_name?: string;
    app_display_name?: string;
    journey_type: string;
    display_name: string;
    is_active?: boolean;
    state_type: string;
    app_facing?: boolean;
    notify_customer?: boolean;
    name: string;
    bs_id: number;
};
type CurrentStatus = {
    updated_at?: string;
    status?: string;
    delivery_partner_id?: number;
    current_status_id: number;
    bag_id?: number;
    shipment_id?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    state_type?: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    state_id?: number;
    created_at?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    gst_fee?: number;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    hsn_code?: string;
    gst_tag?: string;
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
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    promo_id?: string;
    promotion_name?: string;
};
type OrderBags = {
    line_number?: number;
    article?: OrderBagArticle;
    quantity?: number;
    seller_identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    item?: PlatformItem;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    can_cancel?: boolean;
    parent_promo_bags?: any;
    bag_configs?: BagConfigs;
    display_name?: string;
    brand?: OrderBrandName;
    current_status?: CurrentStatus;
    identifier?: string;
    prices?: Prices;
    entity_type?: string;
    gst_details?: BagGST;
    bag_id: number;
    applied_promos?: AppliedPromos[];
};
type ShipmentStatusData = {
    status?: string;
    shipment_id?: string;
    created_at?: string;
    bag_list?: string[];
    id?: number;
};
type OrderDetailsData = {
    order_value?: string;
    cod_charges?: string;
    order_date?: string;
    fynd_order_id: string;
    source?: string;
    affiliate_id?: string;
    tax_details?: any;
    ordering_channel?: string;
    ordering_channel_logo?: any;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    is_priority?: boolean;
    box_type?: string;
    quantity?: number;
    channel_order_id?: string;
    employee_discount?: number;
    coupon_code?: string;
    order_item_id?: string;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    due_date?: string;
};
type BuyerDetails = {
    city: string;
    address: string;
    ajio_site_id?: string;
    gstin: string;
    name: string;
    pincode: number;
    state: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type ShipmentMeta = {
    b2b_buyer_details?: BuyerDetails;
    b2c_buyer_details?: any;
    packaging_name?: string;
    box_type?: string;
    forward_affiliate_order_id?: string;
    return_affiliate_order_id?: string;
    dp_sort_key?: string;
    marketplace_store_id?: string;
    dp_options?: any;
    return_details?: any;
    po_number?: string;
    return_affiliate_shipment_id?: string;
    return_store_node?: number;
    order_type?: string;
    lock_data?: LockData;
    same_store_available: boolean;
    einvoice_info?: EinvoiceInfo;
    formatted?: Formatted;
    return_awb_number?: string;
    ewaybill_info?: any;
    store_invoice_updated_date?: string;
    shipment_weight?: number;
    due_date?: string;
    bag_weight?: any;
    external?: any;
    fulfilment_priority_text?: string;
    dp_name?: string;
    debug_info?: DebugInfo;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    shipment_volumetric_weight?: number;
    assign_dp_from_sb?: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    weight: number;
    dp_id?: string;
    forward_affiliate_shipment_id?: string;
};
type PDFLinks = {
    label_type: string;
    po_invoice?: string;
    invoice_pos?: string;
    invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    label_a6?: string;
    label_pos?: string;
    invoice_type: string;
    delivery_challan_a4?: string;
    label?: string;
    invoice_a4?: string;
    credit_note_url?: string;
    b2b?: string;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    ad_id?: string;
};
type OrderingStoreDetails = {
    country: string;
    city: string;
    code: string;
    meta: any;
    address: string;
    contact_person: string;
    ordering_store_id: number;
    store_name: string;
    phone: string;
    pincode: string;
    state: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type InvoiceInfo = {
    label_url?: string;
    updated_date?: string;
    credit_note_id?: string;
    store_invoice_id?: string;
    invoice_url?: string;
};
type DPDetailsData = {
    country?: string;
    eway_bill_id?: string;
    awb_no?: string;
    name?: string;
    pincode?: string;
    track_url?: string;
    gst_tag?: string;
    id?: number;
};
type UserDetailsData = {
    country: string;
    address1?: string;
    city: string;
    area?: string;
    address: string;
    landmark?: string;
    name: string;
    email?: string;
    pincode: string;
    phone: string;
    address_type?: string;
    state: string;
};
type Dimensions = {
    length?: number;
    width?: number;
    is_default?: boolean;
    height?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type PhoneDetails = {
    country_code?: number;
    mobile_number?: string;
};
type ContactDetails = {
    phone?: PhoneDetails[];
    emails?: string[];
};
type CompanyDetails = {
    company_gst?: string;
    address?: any;
    company_id?: number;
    company_cin?: string;
    company_name?: string;
    company_contact?: ContactDetails;
};
type BagStatusHistory = {
    bsh_id?: number;
    updated_at?: string;
    reasons?: any[];
    status: string;
    app_display_name?: string;
    display_name?: string;
    delivery_partner_id?: number;
    shipment_id?: string;
    bag_id?: number;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    state_type?: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    forward?: boolean;
    state_id?: number;
    created_at?: string;
};
type FulfillingStore = {
    country: string;
    city: string;
    fulfillment_channel: string;
    code: string;
    meta: any;
    address: string;
    contact_person: string;
    store_name: string;
    phone: string;
    pincode: string;
    state: string;
    id: number;
};
type TrackingList = {
    status: string;
    time?: string;
    is_current?: boolean;
    is_passed?: boolean;
    text: string;
};
type PlatformShipment = {
    bags?: OrderBags[];
    status?: ShipmentStatusData;
    order?: OrderDetailsData;
    journey_type?: string;
    priority_text?: string;
    lock_status?: boolean;
    fulfilment_priority?: number;
    affiliate_details?: AffiliateDetails;
    picked_date?: string;
    coupon?: any;
    ordering_store?: OrderingStoreDetails;
    user?: UserDataInfo;
    payments?: ShipmentPayments;
    invoice_id?: string;
    user_agent?: string;
    custom_meta?: any[];
    invoice?: InvoiceInfo;
    operational_status?: string;
    dp_details?: DPDetailsData;
    total_bags?: number;
    shipment_quantity?: number;
    delivery_slot?: any;
    billing_details?: UserDetailsData;
    platform_logo?: string;
    meta?: Meta;
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    company_details?: CompanyDetails;
    payment_mode?: string;
    shipment_status?: string;
    shipment_id: string;
    packaging_type?: string;
    payment_methods?: any;
    prices?: Prices;
    gst_details?: GSTDetailsData;
    shipment_images?: string[];
    vertical?: string;
    bag_status_history?: BagStatusHistory[];
    fulfilling_store?: FulfillingStore;
    tracking_list?: TrackingList[];
    forward_shipment_id?: string;
    total_items?: number;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    message?: string;
};
type BillingStaffDetails = {
    employee_code?: string;
    first_name?: string;
    last_name?: string;
    staff_id?: number;
    user?: string;
};
type TransactionData = {
    entity?: string;
    payment_id?: string;
    status?: string;
    terminal_id?: string;
    transaction_id?: string;
    unique_reference_number?: string;
    amount_paid?: string;
    currency?: string;
};
type PlatformUserDetails = {
    platform_user_employee_code?: string;
    platform_user_last_name?: string;
    platform_user_first_name?: string;
    platform_user_id?: string;
};
type OrderMeta = {
    extra_meta?: any;
    billing_staff_details?: BillingStaffDetails;
    staff?: any;
    company_logo?: string;
    ordering_store?: number;
    comment?: string;
    order_platform?: string;
    order_child_entities?: string[];
    order_type?: string;
    files?: any[];
    cart_id?: number;
    payment_type?: string;
    transaction_data?: TransactionData;
    order_tags?: any[];
    mongo_cart_id?: number;
    currency_symbol?: string;
    employee_id?: number;
    customer_note?: string;
    platform_user_details?: PlatformUserDetails;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    order_date: string;
    meta?: OrderMeta;
    fynd_order_id: string;
    payment_methods?: any;
    prices?: Prices;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    value?: string;
    text?: string;
    actions?: any[];
    index?: number;
    total_items?: number;
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    value: string;
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
    order_value?: number;
    order_created_time?: string;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    payment_mode?: string;
    order_id?: string;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    meta?: any;
    user_info?: UserDataInfo;
};
type OrderListingResponse = {
    page?: Page;
    message?: string;
    lane?: string;
    items?: PlatformOrderItems[];
    total_count?: number;
    success?: boolean;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    value: number;
    key: string;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    reason?: string;
    status?: string;
    last_location_recieved_at?: string;
    awb?: string;
    updated_time?: string;
    account_name?: string;
    meta?: any;
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
    display_name?: string;
    report_type?: string;
    report_requested_at?: string;
    report_created_at?: string;
    report_name?: string;
    request_details?: any;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    company_id?: string;
    item_id?: string;
    article_id?: string;
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
    batch_id: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    company_id?: string;
    store_code?: string;
    data?: any;
    store_id?: string;
    invoice_status?: string;
    label?: any;
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
    method?: string;
    file_path?: string;
    namespace?: string;
    cdn?: URL;
    operation?: string;
    tags?: string[];
    size?: number;
    file_name?: string;
    upload?: FileUploadResponse;
    content_type?: string;
};
type bulkListingData = {
    status?: string;
    total?: number;
    user_name?: string;
    processing_shipments?: string[];
    store_id?: number;
    file_name?: string;
    failed?: number;
    batch_id?: string;
    store_code?: string;
    store_name?: string;
    successful?: number;
    uploaded_on?: string;
    successful_shipments?: any[];
    processing?: number;
    failed_shipments?: any[];
    company_id?: number;
    user_id?: string;
    excel_url?: string;
    id?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    total?: number;
    type?: string;
    has_next?: boolean;
    size?: number;
    current?: number;
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
    question_set?: QuestionSet[];
    display_name?: string;
    qc_type?: string[];
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
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    processing_shipments_count?: number;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    uploaded_by?: string;
    message?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    uploaded_on?: string;
    success?: string;
    error?: string[];
    failed_records?: string[];
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Article = {
    return_config?: ReturnConfig;
    uid: string;
    is_set?: boolean;
    code?: string;
    esp_modified?: any;
    child_details?: any;
    raw_meta?: any;
    size: string;
    a_set?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    _id: string;
    identifiers: Identifier;
    seller_identifier: string;
};
type StoreAddress = {
    address2?: string;
    pincode: number;
    created_at: string;
    country: string;
    area?: string;
    country_code: string;
    landmark?: string;
    contact_person: string;
    phone: string;
    address_type: string;
    city: string;
    longitude: number;
    email?: string;
    state: string;
    updated_at: string;
    address1: string;
    latitude: number;
    address_category: string;
    version?: string;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type Document = {
    url?: string;
    value: string;
    legal_name: string;
    ds_type: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    username?: string;
    enabled: boolean;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    display_name: string;
    gst_number?: string;
    stage: string;
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
    notification_emails?: string[];
    documents?: StoreDocuments;
    timing?: any[];
    gst_credentials: StoreGstCredentials;
};
type Store = {
    packaging_material_count?: number;
    address2?: string;
    mall_area?: string;
    name: string;
    store_address_json?: StoreAddress;
    pincode: string;
    location_type: string;
    created_at: string;
    is_enabled_for_recon?: boolean;
    store_active_from?: string;
    country: string;
    parent_store_id?: number;
    is_active?: boolean;
    contact_person: string;
    vat_no?: string;
    brand_store_tags?: string[];
    login_username: string;
    meta: StoreMeta;
    phone: number;
    s_id: string;
    alohomora_user_id?: number;
    city: string;
    fulfillment_channel: string;
    order_integration_id?: string;
    is_archived?: boolean;
    store_email: string;
    longitude: number;
    state: string;
    updated_at?: string;
    address1: string;
    mall_name?: string;
    brand_id?: any;
    code?: string;
    company_id: number;
    latitude: number;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    marketer_address?: string;
    primary_material?: string;
    marketer_name?: string;
    name?: string;
    brand_name?: string;
    gender?: string[];
    primary_color_hex?: string;
    primary_color?: string;
    essential?: string;
};
type Item = {
    item_id: number;
    name: string;
    l1_category_id?: number;
    size: string;
    webstore_product_url?: string;
    l2_category_id?: number;
    color?: string;
    can_return?: boolean;
    department_id?: number;
    l2_category?: string[];
    can_cancel?: boolean;
    gender?: string;
    meta?: any;
    attributes: Attributes;
    branch_url?: string;
    l3_category_name?: string;
    image: string[];
    brand: string;
    l1_category?: string[];
    slug_key: string;
    brand_id: number;
    code?: string;
    l3_category?: number;
    last_updated_at?: string;
};
type B2BPODetails = {
    partial_can_ret?: boolean;
    item_base_price?: number;
    po_line_amount?: number;
    po_tax_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    credit_note_expiry_days?: number;
    is_virtual_invoice?: boolean;
    created_on?: number;
    modified_on?: number;
    start_date?: string;
    brand_id: number;
    company: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    script_last_ran?: string;
    brand_name: string;
    invoice_prefix?: string;
    logo?: string;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    loyalty_discount?: number;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    gst_fee: number;
    gstin_code?: string;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    tax_collected_at_source: number;
    sgst_gst_fee: string;
    value_of_good: number;
    hsn_code: string;
    igst_gst_fee: string;
    hsn_code_id: string;
    gst_tag: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagDetailsPlatformResponse = {
    status: BagReturnableCancelableStatus;
    journey_type: string;
    line_number?: number;
    article: Article;
    b_id: number;
    affiliate_details?: AffiliateDetails;
    quantity?: number;
    ordering_store?: Store;
    restore_promos?: any;
    seller_identifier?: string;
    reasons?: any[];
    bag_status: BagStatusHistory[];
    article_details?: ArticleDetails;
    item: Item;
    operational_status?: string;
    financial_breakup: FinancialBreakup[];
    no_of_bags_order?: number;
    b_type?: string;
    bag_update_time?: number;
    meta?: BagMeta;
    parent_promo_bags?: any;
    original_bag_list?: number[];
    display_name?: string;
    order_integration_id?: string;
    shipment_id?: string;
    restore_coupon?: boolean;
    tags?: string[];
    brand: Brand;
    current_status: BagStatusHistory;
    identifier?: string;
    entity_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    prices: Prices;
    gst_details: BagGSTDetails;
    current_operational_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    applied_promos?: any[];
    dates?: Dates;
    qc_required?: any;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    page_type: string;
    has_next: boolean;
    size: number;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    invoice_receipt?: string;
    payment_receipt?: string;
    success?: boolean;
    order_id?: string;
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
    error_trace?: string;
    message: string;
    status: number;
};
type StoreReassign = {
    set_id?: string;
    item_id?: string;
    bag_id?: number;
    store_id: number;
    affiliate_id?: string;
    fynd_order_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    mongo_article_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action_type: string;
    action: string;
};
type Bags = {
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    status?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    affiliate_id?: string;
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    from_datetime?: string;
    id: number;
    company_id?: number;
    description?: string;
    platform_id?: string;
    to_datetime?: string;
    created_at?: string;
    title?: string;
    logo_url?: string;
    platform_name?: string;
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
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
    identifier: string;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    status?: number;
    code?: string;
    message?: string;
    final_state?: any;
    exception?: string;
    identifier?: string;
    stack_trace?: string;
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
    quantity: number;
    _id: string;
    transfer_price: number;
    affiliate_meta: any;
    price_marked: number;
    company_id: number;
    pdf_links?: MarketPlacePdf;
    item_id: number;
    store_id: number;
    amount_paid: number;
    price_effective: number;
    seller_identifier: string;
    identifier: any;
    avl_qty: number;
    hsn_code_id: string;
    affiliate_store_id: string;
    discount: number;
    sku: string;
    unit_price: number;
    delivery_charge: number;
    fynd_store_id: string;
    modified_on: string;
    item_size: string;
};
type OrderUser = {
    first_name: string;
    last_name: string;
    state: string;
    city: string;
    address2?: string;
    address1?: string;
    mobile: number;
    phone: number;
    pincode: string;
    country: string;
    email: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    quantity: number;
    _id: string;
    attributes: any;
    brand_id: number;
    dimension: any;
    category: any;
    weight: any;
};
type ShipmentDetails = {
    meta?: any;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    fulfillment_id: number;
    box_type?: string;
    dp_id?: number;
    shipments: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    action: string;
    payment_mode: string;
    source: string;
    journey: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
    identifier: string;
    location_details?: LocationDetails;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    coupon?: string;
    payment_mode: string;
    payment?: any;
    bags: AffiliateBag[];
    cod_charges: number;
    user: UserData;
    delivery_charges: number;
    shipping_address: OrderUser;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    order_value: number;
    discount: number;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    items: any;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    name: string;
    token: string;
    updated_at: string;
    id: string;
    description?: string;
    created_at: string;
    owner: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
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
    create_user?: boolean;
    store_lookup?: string;
    article_lookup?: string;
    affiliate: Affiliate;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    id: number;
    description: string;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_id?: string;
    bag_id?: number;
    message: string;
    createdat: string;
    l3_detail?: string;
    ticket_url?: string;
    user: string;
    l2_detail?: string;
    l1_detail?: string;
    type: string;
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
    order_id: string;
    payment_mode: string;
    country_code: string;
    message: string;
    customer_name: string;
    amount_paid: number;
    brand_name: string;
    phone_number: number;
    shipment_id: number;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    meta: Meta1;
    remarks?: string;
    status?: string;
    id: number;
    bag_list?: number[];
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
type Tax = {
    amount: any;
    name: string;
    breakup?: any[];
    rate: number;
};
type Charge = {
    code?: string;
    amount: any;
    name: string;
    tax?: Tax;
    type: string;
};
type ShippingInfo = {
    alternate_email?: string;
    country_code?: string;
    state_code?: string;
    landmark?: string;
    country: string;
    primary_mobile_number: string;
    house_no?: string;
    floor_no?: string;
    city: string;
    middle_name?: string;
    geo_location?: any;
    title?: string;
    alternate_mobile_number?: string;
    pincode: string;
    first_name: string;
    last_name?: string;
    customer_code?: string;
    address2?: string;
    slot?: any[];
    address_type?: string;
    gender?: string;
    state: string;
    shipping_type?: string;
    external_customer_code?: string;
    primary_email: string;
    address1: string;
};
type PaymentMethod = {
    meta?: any;
    collect_by: string;
    name: string;
    amount: number;
    transaction_data?: any;
    refund_by: string;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    alternate_email?: string;
    country_code?: string;
    state_code?: string;
    country: string;
    primary_mobile_number: string;
    house_no?: string;
    floor_no?: string;
    city: string;
    middle_name?: string;
    alternate_mobile_number?: string;
    title?: string;
    pincode: string;
    first_name: string;
    last_name?: string;
    customer_code?: string;
    address2?: string;
    gender?: string;
    state: string;
    external_customer_code?: string;
    primary_email: string;
    address1: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
};
type LineItem = {
    quantity?: number;
    custom_messasge?: string;
    meta?: any;
    charges?: Charge[];
    external_line_id?: string;
    seller_identifier: string;
};
type Shipment = {
    meta?: any;
    processing_dates?: ProcessingDates;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    external_shipment_id?: string;
};
type CreateOrderAPI = {
    meta?: any;
    charges?: Charge[];
    external_order_id?: string;
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    currency_info?: any;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    meta?: string;
    status: number;
    code?: string;
    message: string;
    exception?: string;
    info?: any;
    request_id?: string;
    stack_trace?: string;
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
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
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
    start_date: string;
    end_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
};
type GetSearchWordsData = {
    uid?: string;
    words?: string[];
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
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
    params?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    uid?: string;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    max_quantity: number;
    product_uid: number;
    min_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type ProductBundleRequest = {
    slug: string;
    products: ProductBundleItem[];
    company_id?: number;
    logo?: string;
    choice: string;
    page_visibility?: string[];
    name: string;
    is_active: boolean;
    created_on?: string;
    meta?: any;
    same_store_assignment?: boolean;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
};
type GetProductBundleCreateResponse = {
    slug: string;
    products: ProductBundleItem[];
    company_id?: number;
    logo?: string;
    choice: string;
    page_visibility?: string[];
    name: string;
    is_active: boolean;
    created_on?: string;
    id?: string;
    meta?: any;
    same_store_assignment?: boolean;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    slug: string;
    products: ProductBundleItem[];
    company_id?: number;
    logo?: string;
    choice: string;
    page_visibility?: string[];
    name: string;
    is_active: boolean;
    meta?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    modified_by?: any;
};
type LimitedProductData = {
    uid?: number;
    slug?: string;
    country_of_origin?: string;
    identifier?: any;
    short_description?: string;
    item_code?: string;
    price?: any;
    name?: string;
    attributes?: any;
    sizes?: string[];
    quantity?: number;
    images?: string[];
};
type Price = {
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
    currency?: string;
};
type Size = {
    value?: string;
    display?: string;
    is_available?: boolean;
    quantity?: number;
};
type GetProducts = {
    max_quantity?: number;
    product_uid?: number;
    product_details?: LimitedProductData;
    price?: Price;
    sizes?: Size[];
    min_quantity?: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type GetProductBundleResponse = {
    slug?: string;
    products?: GetProducts[];
    company_id?: number;
    logo?: string;
    choice?: string;
    page_visibility?: string[];
    name?: string;
    is_active?: boolean;
    meta?: any;
    same_store_assignment?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    title: string;
    company_id?: number;
    brand_id?: number;
    description?: string;
    modified_on?: string;
    subtitle?: string;
    active?: boolean;
    name: string;
    image?: string;
    guide?: Guide;
    created_on?: string;
    id?: string;
    created_by?: any;
    tag?: string;
    modified_by?: any;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    title?: string;
    company_id?: number;
    tag?: string;
    brand_id?: number;
    name?: string;
    active?: boolean;
    guide?: any;
    created_on?: string;
    subtitle?: string;
    id?: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    alt_text?: any;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    seo?: SEOData;
    is_gift?: boolean;
    moq?: MOQData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    slug?: string;
    priority: number;
    logo?: string;
    unit?: string;
    name: string;
    is_active: boolean;
    display_type: string;
    key?: string;
};
type AppConfigurationDetail = {
    slug: string;
    priority: number;
    template_slugs?: string[];
    logo?: string;
    name?: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    app_id: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    logo?: string;
    default_key: string;
    name?: string;
    is_active: boolean;
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
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    filter_types?: string[];
    display?: string;
    units?: any[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    compare?: any;
    similar?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    title?: string;
    priority: number;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
    key: string;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    priority: number;
    logo?: string;
    name: string;
    is_active: boolean;
    display_type: string;
    key: string;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    priority: number;
    logo?: string;
    name?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    value?: string;
    sort?: string;
    map?: any;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    priority: number;
    display_name?: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    name?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    type?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_id?: string;
    created_on?: string;
    app_id: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    config_type: string;
};
type AppCatalogConfiguration = {
    type?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_id?: string;
    created_on?: string;
    id?: string;
    app_id: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    config_type: string;
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
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    id?: string;
    app_id: string;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersKey = {
    logo?: string;
    name: string;
    display: string;
    operators?: string[];
    kind?: string;
};
type ProductFiltersValue = {
    max?: number;
    count?: number;
    is_selected: boolean;
    currency_code?: string;
    query_format?: string;
    min?: number;
    selected_max?: number;
    display_format?: string;
    value: any;
    selected_min?: number;
    currency_symbol?: string;
    display: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    _custom_json?: any;
    is_active?: boolean;
    badge?: CollectionBadge;
    is_visible?: boolean;
    created_by?: UserInfo;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    app_id: string;
    allow_facets?: boolean;
    priority?: number;
    sort_on?: string;
    description?: string;
    _locale_language?: any;
    slug: string;
    name: string;
    seo?: SeoDetail;
    meta?: any;
    _schedule?: CollectionSchedule;
    logo: CollectionImage;
    published?: boolean;
    type: string;
    tags?: string[];
    banners: CollectionBanner;
    modified_by?: UserInfo;
    visible_facets_keys?: string[];
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
    cron?: any;
    is_active?: boolean;
    badge?: any;
    app_id?: string;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    priority?: number;
    description?: string;
    sort_on?: string;
    tag?: string[];
    slug?: string;
    name?: string;
    meta?: any;
    _schedule?: any;
    logo?: BannerImage;
    type?: string;
    banners?: ImageUrls;
    visible_facets_keys?: string[];
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    cron?: any;
    is_active?: boolean;
    badge?: any;
    app_id?: string;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    priority?: number;
    description?: string;
    tag?: string[];
    slug?: string;
    name?: string;
    meta?: any;
    _schedule?: any;
    uid?: string;
    logo?: Media1;
    action?: Action;
    type?: string;
    banners?: ImageUrls;
    visible_facets_keys?: string[];
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
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
type CollectionDetailResponse = {
    priority?: number;
    slug?: string;
    cron?: any;
    logo?: Media1;
    query?: CollectionQuery[];
    type?: string;
    description?: string;
    name?: string;
    is_active?: boolean;
    badge?: any;
    meta?: any;
    app_id?: string;
    allow_sort?: boolean;
    banners?: ImageUrls;
    tag?: string[];
    allow_facets?: boolean;
    _schedule?: any;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    _custom_json?: any;
    is_active?: boolean;
    badge?: CollectionBadge;
    is_visible?: boolean;
    allow_facets?: boolean;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    description?: string;
    sort_on?: string;
    _locale_language?: any;
    slug?: string;
    name?: string;
    seo?: SeoDetail;
    meta?: any;
    _schedule?: CollectionSchedule;
    logo?: CollectionImage;
    published?: boolean;
    type?: string;
    tags?: string[];
    banners?: CollectionBanner;
    modified_by?: UserInfo;
    visible_facets_keys?: string[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductBrand = {
    uid?: number;
    action?: Action;
    logo?: Media1;
    name?: string;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    teaser_tag?: any;
    short_description?: string;
    item_type?: string;
    has_variant?: boolean;
    product_online_date?: string;
    attributes?: any;
    similars?: string[];
    discount?: string;
    brand?: ProductBrand;
    description?: string;
    promo_meta?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    sellable?: boolean;
    rating_count?: number;
    price?: ProductListingPrice;
    name?: string;
    image_nature?: string;
    rating?: number;
    uid?: number;
    type?: string;
    color?: string;
    item_code?: string;
    medias?: Media1[];
    highlights?: string[];
    tryouts?: string[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightBrand = {
    total_articles?: number;
    article_freshness?: number;
    name?: string;
    available_articles?: number;
    total_sizes?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    opt_level: string;
    platform?: string;
};
type CompanyOptIn = {
    enabled: boolean;
    store_ids: number[];
    brand_ids: number[];
    company_id: number;
    opt_level: string;
    created_on: number;
    created_by?: any;
    modified_on: number;
    platform: string;
    modified_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    uid?: number;
    business_type?: string;
    company_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    total_article?: number;
    brand_name?: string;
    company_id?: number;
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
    uid?: number;
    additional_contacts?: any[];
    display_name?: string;
    store_type?: string;
    company_id?: number;
    store_code?: string;
    name?: string;
    created_on?: string;
    address?: any;
    manager?: any;
    modified_on?: string;
    timing?: any;
    documents?: any[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    multi?: boolean;
    mandatory?: boolean;
    format?: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type GenderDetail = {
    slug?: string;
    details?: AttributeMasterDetails;
    schema?: AttributeMaster;
    logo?: string;
    description?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    departments?: string[];
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    status?: number;
    code?: string;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    uid?: number;
    platforms?: any;
    slug?: string;
    logo: string;
    _custom_json?: any;
    name: string;
    is_active?: boolean;
    priority_order: number;
    synonyms?: string[];
    _cls?: string;
    tags?: string[];
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    uid?: string;
    user_id?: string;
    contact?: string;
    _id?: string;
    username?: string;
};
type GetDepartment = {
    uid?: number;
    slug?: string;
    logo?: string;
    item_type?: string;
    page_size?: number;
    search?: string;
    name?: string;
    is_active?: boolean;
    priority_order?: number;
    synonyms?: string[];
    created_on?: string;
    created_by?: UserSerializer;
    modified_on?: string;
    page_no?: number;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    status?: number;
    code?: string;
    meta?: any;
    message?: string;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    uid?: number;
    slug?: any;
    modified_by?: UserDetail;
    logo: string;
    _custom_json?: any;
    _id?: any;
    name: any;
    is_active?: boolean;
    created_on: string;
    verified_by?: UserDetail;
    priority_order: number;
    synonyms?: any[];
    created_by?: UserDetail;
    _cls?: any;
    modified_on: string;
    verified_on?: string;
};
type ProductTemplate = {
    slug: string;
    logo?: string;
    is_physical: boolean;
    description?: string;
    modified_on?: string;
    is_expirable: boolean;
    name?: string;
    is_active?: boolean;
    is_archived?: boolean;
    attributes?: string[];
    created_on?: string;
    categories?: string[];
    created_by?: any;
    departments?: string[];
    tag?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    teaser_tag?: any;
    variants?: any;
    short_description?: any;
    item_type?: any;
    command?: any;
    is_active?: any;
    return_config?: any;
    is_dependent?: any;
    country_of_origin?: any;
    product_group_tag?: any;
    description?: any;
    sizes?: any;
    tags?: any;
    slug?: any;
    trader?: any;
    product_publish?: any;
    category_slug?: any;
    name?: any;
    multi_size?: any;
    custom_order?: any;
    brand_uid?: any;
    no_of_boxes?: any;
    trader_type?: any;
    currency?: any;
    item_code?: any;
    hsn_code?: any;
    size_guide?: any;
    highlights?: any;
    media?: any;
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
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    slug: string;
    logo?: string;
    is_physical: boolean;
    description?: string;
    is_expirable: boolean;
    name?: string;
    is_active?: boolean;
    is_archived?: boolean;
    attributes?: string[];
    id?: string;
    categories?: string[];
    departments?: string[];
    tag?: string;
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
    templates?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    status?: string;
    trigger_on?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    completed_on?: string;
    id?: string;
    created_by?: VerifiedBy;
    url?: string;
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
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type CategoryRequestBody = {
    slug?: string;
    priority?: number;
    level: number;
    tryouts?: string[];
    name: string;
    is_active: boolean;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    departments: number[];
    hierarchy?: Hierarchy[];
    media?: Media2;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    uid?: number;
    slug?: string;
    priority?: number;
    level: number;
    tryouts?: string[];
    name: string;
    is_active: boolean;
    synonyms?: string[];
    created_on?: string;
    id?: string;
    created_by?: any;
    marketplaces?: CategoryMapping;
    departments: number[];
    modified_on?: string;
    modified_by?: any;
    hierarchy?: Hierarchy[];
    media?: Media2;
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
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdateSchemaV2 = {
    teaser_tag?: TeaserTag;
    variants?: any;
    short_description?: string;
    item_type: string;
    _custom_json?: any;
    variant_media?: any;
    is_active?: boolean;
    return_config: ReturnConfig;
    is_dependent?: boolean;
    attributes: any;
    requester?: string;
    departments: number[];
    variant_group?: any;
    country_of_origin: string;
    product_group_tag?: string[];
    company_id: number;
    description?: string;
    sizes: any[];
    tax_identifier: TaxIdentifier;
    is_set?: boolean;
    is_image_less_product?: boolean;
    tags?: string[];
    slug: string;
    trader: Trader[];
    product_publish?: ProductPublish;
    category_slug: string;
    name: string;
    multi_size?: boolean;
    custom_order?: CustomOrder;
    brand_uid: number;
    currency: string;
    template_tag: string;
    uid?: number;
    no_of_boxes?: number;
    bulk_job_id?: string;
    action?: string;
    item_code: string;
    net_quantity?: NetQuantity;
    size_guide?: string;
    change_request_id?: any;
    highlights?: string[];
    media?: Media1[];
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type Product = {
    teaser_tag?: any;
    variants?: any;
    short_description?: string;
    item_type?: string;
    _custom_json?: any;
    primary_color?: string;
    is_active?: boolean;
    variant_media?: any;
    is_dependent?: boolean;
    return_config?: ReturnConfigResponse;
    attributes?: any;
    created_by?: any;
    departments?: number[];
    l3_mapping?: string[];
    pending?: string;
    country_of_origin?: string;
    brand?: Brand;
    variant_group?: any;
    product_group_tag?: string[];
    company_id?: number;
    description?: string;
    sizes?: any[];
    all_sizes?: any[];
    tax_identifier?: any;
    id?: string;
    is_set?: boolean;
    is_image_less_product?: boolean;
    verified_on?: string;
    moq?: any;
    tags?: string[];
    slug?: string;
    category_uid?: number;
    trader?: any[];
    product_publish?: ProductPublished;
    is_physical?: boolean;
    category_slug?: string;
    name?: string;
    all_company_ids?: number[];
    image_nature?: string;
    multi_size?: boolean;
    verified_by?: VerifiedBy;
    stage?: string;
    custom_order?: any;
    brand_uid?: number;
    modified_on?: string;
    currency?: string;
    template_tag?: string;
    uid?: number;
    category?: any;
    no_of_boxes?: number;
    color?: string;
    all_identifiers?: string[];
    item_code?: string;
    is_expirable?: boolean;
    hsn_code?: string;
    size_guide?: string;
    net_quantity?: NetQuantityResponse;
    created_on?: string;
    highlights?: string[];
    modified_by?: any;
    images?: Image[];
    media?: Media1[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    uid?: number;
    category_uid?: number;
    item_code?: string;
    name?: string;
    brand_uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    suggestion?: string;
    unit?: string;
    created_by?: any;
    departments: string[];
    schema: AttributeMaster;
    description?: string;
    is_nested?: boolean;
    filters: AttributeMasterFilter;
    slug: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
    synonyms?: any;
    modified_on?: string;
    variant?: boolean;
    details: AttributeMasterDetails;
    logo?: string;
    raw_key?: string;
    created_on?: string;
    tags?: string[];
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
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
    item_length: number;
    item_weight: number;
    size: any;
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    item_width: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    template_tag?: string;
    total?: number;
    failed?: number;
    succeed?: number;
    company_id: number;
    file_path?: string;
    tracking_url?: string;
    failed_records?: any[];
    custom_template_tag?: string;
    is_active?: boolean;
    created_on: string;
    created_by?: UserInfo1;
    cancelled?: number;
    stage?: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    cancelled_records?: any[];
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    created_by?: UserInfo1;
    modified_on?: string;
    batch_id: string;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    template_tag?: string;
    total?: number;
    file_path?: string;
    company_id?: number;
    succeed?: number;
    failed_records?: string[];
    template?: ProductTemplate;
    cancelled_records?: string[];
    is_active?: boolean;
    created_on?: string;
    stage?: string;
    created_by?: UserDetail1;
    cancelled?: number;
    modified_on?: string;
    modified_by?: UserDetail1;
    failed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    batch_id: string;
    company_id: number;
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
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    total?: number;
    failed?: number;
    file_path?: string;
    succeed?: number;
    retry?: number;
    company_id?: number;
    tracking_url?: string;
    failed_records?: string[];
    is_active?: boolean;
    created_on?: string;
    id?: string;
    created_by?: UserCommon;
    stage?: string;
    cancelled?: number;
    modified_on?: string;
    modified_by?: UserCommon;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    item_length?: number;
    item_weight?: number;
    identifiers: GTIN[];
    item_width?: number;
    item_height?: number;
    store_code: string;
    set?: InventorySet;
    price?: number;
    price_transfer?: number;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    price_effective: number;
    quantity: number;
    is_set?: boolean;
    currency: string;
    size: any;
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
type InventoryResponse = {
    uid?: string;
    size?: string;
    identifiers?: any;
    price?: number;
    store?: any;
    price_transfer?: number;
    item_id?: number;
    seller_identifier?: string;
    price_effective?: number;
    quantity?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    currency?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type BrandMeta = {
    id: number;
    name: string;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type PriceMeta = {
    marked: number;
    updated_at?: string;
    currency: string;
    effective: number;
    transfer: number;
    tp_notes?: any;
};
type DimensionResponse = {
    length: number;
    unit: string;
    width: number;
    is_default: boolean;
    height: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    fragile: boolean;
    _custom_json?: any;
    store: StoreMeta;
    fynd_article_code: string;
    item_id: number;
    return_config?: ReturnConfig1;
    raw_meta?: any;
    is_active?: boolean;
    created_by?: UserSerializer;
    country_of_origin: string;
    brand: BrandMeta;
    set?: InventorySet;
    added_on_store?: string;
    tax_identifier?: any;
    is_set?: boolean;
    seller_identifier: string;
    track_inventory?: boolean;
    identifier: any;
    trader?: Trader1[];
    manufacturer: ManufacturerResponse;
    price: PriceMeta;
    fynd_item_code: string;
    expiration_date?: string;
    trace_id?: string;
    meta?: any;
    stage?: string;
    dimension: DimensionResponse;
    quantities?: Quantities;
    uid: string;
    weight: WeightResponse;
    company: CompanyMeta;
    total_quantity: number;
    tags?: string[];
    modified_by?: UserSerializer;
    size: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ArticleStoreResponse = {
    uid?: number;
    store_code?: string;
    store_type?: string;
    name?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type PriceArticle = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
    tp_notes?: any;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    length?: number;
    unit?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type GetInventories = {
    store?: ArticleStoreResponse;
    item_id?: number;
    return_config?: ReturnConfig2;
    created_by?: UserSerializer;
    country_of_origin?: string;
    brand?: BrandMeta1;
    date_meta?: DateMeta;
    tax_identifier?: any;
    id?: string;
    is_set?: boolean;
    seller_identifier?: string;
    inventory_updated_on?: string;
    track_inventory?: boolean;
    identifier?: any;
    trader?: Trader2[];
    manufacturer?: ManufacturerResponse1;
    price?: PriceArticle;
    expiration_date?: string;
    trace_id?: string;
    stage?: string;
    dimension?: DimensionResponse1;
    quantities?: QuantitiesArticle;
    platforms?: any;
    uid?: string;
    weight?: WeightResponse1;
    company?: CompanyMeta1;
    total_quantity?: number;
    tags?: string[];
    modified_by?: UserSerializer;
    size?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    total?: number;
    failed?: number;
    file_path?: string;
    company_id?: number;
    succeed?: number;
    failed_records?: string[];
    is_active?: boolean;
    created_on?: string;
    id?: string;
    cancelled?: number;
    created_by?: any;
    stage?: string;
    modified_on?: string;
    modified_by?: any;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_marked?: number;
    store_code: string;
    tags?: string[];
    price?: number;
    expiration_date?: string;
    total_quantity?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
    price_effective?: number;
    quantity?: number;
    seller_identifier: string;
    currency?: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
    user?: any;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    request_params?: any;
    trigger_on?: string;
    status?: string;
    task_id: string;
    seller_id: number;
};
type InventoryExportJob = {
    request_params?: any;
    status?: string;
    trigger_on?: string;
    task_id: string;
    completed_on?: string;
    seller_id: number;
    url?: string;
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
    price_marked?: number;
    expiration_date?: string;
    store_id: number;
    total_quantity?: number;
    trace_id?: string;
    price_effective?: number;
    tags?: string[];
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
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
type HsnUpsert = {
    uid?: number;
    tax_on_esp?: boolean;
    company_id: number;
    hs2_code: string;
    tax_on_mrp: boolean;
    is_active?: boolean;
    hsn_code: string;
    threshold2?: number;
    tax1: number;
    tax2?: number;
    threshold1: number;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    company_id?: number;
    hs2_code?: string;
    tax_on_mrp?: boolean;
    hsn_code?: string;
    threshold2?: number;
    id?: string;
    tax1?: number;
    tax2?: number;
    threshold1?: number;
    modified_on?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    item_total?: number;
    has_previous?: boolean;
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
    threshold: number;
    cess?: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    modified_by?: any;
    type: string;
    description: string;
    hsn_code: string;
    taxes: TaxSlab[];
    created_on?: string;
    created_by?: any;
    modified_on?: string;
    country_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type ArticleQuery = {
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    meta?: any;
    quantity?: number;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    store_ids?: number[];
    company_id?: number;
    channel_identifier?: string;
    channel_type?: string;
    app_id: string;
    articles: AssignStoreArticle[];
    pincode: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    uid?: string;
    price_marked?: number;
    company_id?: number;
    status: boolean;
    article_assignment: ArticleAssignment1;
    quantity: number;
    _id?: string;
    item_id: number;
    store_id?: number;
    s_city?: string;
    meta?: any;
    index?: number;
    price_effective?: number;
    strategy_wise_listing?: any[];
    store_pincode?: number;
    group_id?: string;
    size: string;
};
type BrandItem = {
    uid?: number;
    slug?: string;
    action?: Action;
    logo?: Media;
    name?: string;
    departments?: string[];
    banners?: ImageUrls;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    uid?: number;
    slug?: string;
    logo?: Media;
    name?: string;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    uid?: number;
    slug?: string;
    childs?: any[];
    action?: Action;
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    uid?: number;
    slug?: string;
    childs?: ThirdLevelChild[];
    action?: Action;
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
};
type Child = {
    uid?: number;
    slug?: string;
    childs?: SecondLevelChild[];
    action?: Action;
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
};
type CategoryItems = {
    uid?: number;
    slug?: string;
    childs?: Child[];
    action?: Action;
    name?: string;
    banners?: ImageUrls;
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
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
    operators?: any;
};
type ProductDetail = {
    teaser_tag?: any;
    short_description?: string;
    item_type?: string;
    has_variant?: boolean;
    product_online_date?: string;
    attributes?: any;
    similars?: string[];
    brand?: ProductBrand;
    description?: string;
    promo_meta?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    rating_count?: number;
    name?: string;
    image_nature?: string;
    rating?: number;
    uid?: number;
    type?: string;
    color?: string;
    item_code?: string;
    medias?: Media1[];
    highlights?: string[];
    tryouts?: string[];
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    next_id?: string;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type GetAddressSerializer = {
    country?: string;
    address1?: string;
    city?: string;
    address_type?: string;
    latitude?: number;
    landmark?: string;
    state?: string;
    address2?: string;
    country_code?: string;
    pincode?: number;
    longitude?: number;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    uid?: number;
    business_type?: string;
    modified_by?: UserSerializer2;
    reject_reason?: string;
    name?: string;
    created_on?: string;
    verified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer2;
    stage?: string;
    modified_on?: string;
    verified_on?: string;
    company_type?: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    _custom_json?: any;
    warnings?: any;
    notification_emails?: string[];
    created_by?: UserSerializer1;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    phone_number: string;
    verified_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    verified_by?: UserSerializer1;
    address: GetAddressSerializer;
    stage?: string;
    modified_on?: string;
    uid?: number;
    code: string;
    company?: GetCompanySerializer;
    created_on?: string;
    manager?: LocationManagerSerializer;
    integration_type?: LocationIntegrationType;
    modified_by?: UserSerializer1;
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
    uid: number;
    logo?: string;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    app_id: string;
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
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    name?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    documents?: Document[];
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer[];
    created_by?: UserSerializer;
    company_type: string;
    modified_on?: string;
    notification_emails?: string[];
    created_on?: string;
    uid: number;
    mode?: string;
    franchise_enabled?: boolean;
    verified_on?: string;
    business_type: string;
    stage?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    country: string;
    pincode: number;
    landmark?: string;
    city: string;
    address2?: string;
    address_type: string;
    address1: string;
    country_code?: string;
    latitude: number;
    state: string;
    longitude: number;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    name?: string;
    business_type?: string;
    business_info?: string;
    company_type?: string;
    warnings?: any;
    _custom_json?: any;
    contact_details?: ContactDetails;
    documents?: Document[];
    notification_emails?: string[];
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
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
    product?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    name: string;
    warnings?: any;
    _locale_language?: any;
    verified_by?: UserSerializer;
    synonyms?: string[];
    reject_reason?: string;
    created_by?: UserSerializer;
    slug_key?: string;
    modified_on?: string;
    created_on?: string;
    uid?: number;
    mode?: string;
    verified_on?: string;
    stage?: string;
    logo?: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    description?: string;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: string[];
    brand_tier?: string;
    name: string;
    _locale_language?: any;
    logo: string;
    uid?: number;
    _custom_json?: any;
    description?: string;
    banner?: BrandBannerSerializer;
    company_id?: number;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    verified_on?: string;
    created_by?: UserSerializer;
    details?: CompanyDetails;
    name?: string;
    business_type: string;
    company_type: string;
    stage?: string;
    verified_by?: UserSerializer;
    modified_on?: string;
    market_channels?: string[];
    modified_by?: UserSerializer;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    uid?: number;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    created_by?: UserSerializer;
    stage?: string;
    warnings?: any;
    company?: CompanySerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    uid?: number;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
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
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    country?: string;
    pincode?: number;
    state?: string;
    landmark?: string;
    address2?: string;
    city?: string;
    address1?: string;
    country_code?: string;
    latitude: number;
    address_type?: string;
    longitude: number;
};
type LocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    name: string;
    holiday?: HolidaySchemaSerializer[];
    display_name: string;
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    code: string;
    documents?: Document[];
    warnings?: any;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    address: AddressSerializer;
    uid?: number;
    _custom_json?: any;
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
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Rule = {
    value?: number;
    max?: number;
    min?: number;
    key?: number;
    discount_qty?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponSchedule = {
    next_schedule?: any[];
    duration?: number;
    start?: string;
    cron?: string;
    end?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
    networks?: string[];
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    payments?: any;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    user_groups?: number[];
    user_type?: string;
    uses?: UsesRestriction;
    post_order?: PostOrder;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    type: string;
    auto_apply?: boolean;
    is_exact?: boolean;
    applicable_on: string;
    value_type: string;
    currency_code?: string;
    scope?: string[];
    calculate_on: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponAdd = {
    state?: State;
    author?: CouponAuthor;
    ownership: Ownership;
    rule: Rule[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    code: string;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validation?: Validation;
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
    state?: State;
    author?: CouponAuthor;
    ownership: Ownership;
    rule: Rule[];
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    code: string;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validation?: Validation;
    tags?: string[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionSchedule = {
    next_schedule?: any[];
    published: boolean;
    duration?: number;
    start: string;
    cron?: string;
    end?: string;
};
type UserRegistered = {
    start?: string;
    end?: string;
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
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    user_id?: string[];
    anonymous_users?: boolean;
    platforms?: string[];
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    order_quantity?: number;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CompareObject = {
    equals?: number;
    greater_than?: number;
    less_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_store?: number[];
    available_zones?: string[];
    item_store?: number[];
    item_category?: number[];
    item_size?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_brand?: number[];
    item_exclude_brand?: number[];
    cart_total?: CompareObject;
    item_id?: number[];
    item_exclude_category?: number[];
    item_company?: number[];
    item_sku?: string[];
    cart_unique_item_amount?: CompareObject;
    all_items?: boolean;
    item_exclude_sku?: string[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    buy_rules?: string[];
};
type DiscountOffer = {
    max_discount_amount?: number;
    min_offer_quantity?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    code?: string;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    apply_priority?: number;
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    calculate_on?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    stackable?: boolean;
    buy_rules: any;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    apply_priority?: number;
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    calculate_on?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    stackable?: boolean;
    buy_rules: any;
};
type PromotionUpdate = {
    _custom_json?: any;
    application_id: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    mode: string;
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    apply_priority?: number;
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    calculate_on?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    stackable?: boolean;
    buy_rules: any;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_slug?: string;
    entity_type?: string;
    type?: string;
    example?: string;
    created_on?: string;
    title?: string;
    modified_on?: string;
    is_hidden?: boolean;
    description?: string;
    subtitle?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    coupon?: number;
    you_saved?: number;
    discount?: number;
    vog?: number;
    subtotal?: number;
    gift_card?: number;
    gst_charges?: number;
    fynd_cash?: number;
    total?: number;
    convenience_fee?: number;
    cod_charge?: number;
    mrp_total?: number;
    delivery_charge?: number;
};
type CouponBreakup = {
    value?: number;
    type?: string;
    max_discount_value?: number;
    coupon_value?: number;
    minimum_cart_value?: number;
    coupon_type?: string;
    uid?: string;
    code?: string;
    message?: string;
    title?: string;
    sub_title?: string;
    description?: string;
    is_applied?: boolean;
};
type DisplayBreakup = {
    value?: number;
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    message?: string[];
    display?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    total?: number;
    description?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type CouponDetails = {
    code?: string;
    discount_total_quantity?: number;
    discount_single_quantity?: number;
};
type DiscountRulesApp = {
    offer?: any;
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
};
type FreeGiftItem = {
    item_name?: string;
    item_slug?: string;
    item_images_url?: string[];
    item_brand_name?: string;
    item_price_details?: any;
    item_id?: number;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    article_id?: string;
    quantity?: number;
};
type AppliedPromotion = {
    amount?: number;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
    promotion_group?: string;
    promo_id?: string;
    promotion_type?: string;
    offer_text?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
};
type ProductPrice = {
    add_on?: number;
    marked?: number;
    selling?: number;
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
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
    other_store_quantity?: number;
    out_of_stock?: boolean;
    is_valid?: boolean;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    url?: string;
    query?: ActionQuery;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type Tags = {
    tags?: any;
};
type CartProduct = {
    type?: string;
    _custom_json?: any;
    categories?: CategoryInfo[];
    action?: ProductAction;
    uid?: number;
    name?: string;
    brand?: BaseInfo;
    images?: ProductImage[];
    tags?: string[];
    item_code?: string;
    slug?: string;
    teaser_tag?: Tags;
};
type BasePrice = {
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    is_gift_visible?: boolean;
    size?: string;
    type?: string;
    cart_item_meta?: any;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    price?: ArticlePriceInfo;
    uid?: string;
    extra_meta?: any;
    product_group_tags?: string[];
    identifier?: any;
    gift_card?: any;
    seller_identifier?: string;
    quantity?: number;
    seller?: BaseInfo;
};
type CartProductInfo = {
    coupon_message?: string;
    coupon?: CouponDetails;
    parent_item_identifiers?: any;
    promotions_applied?: AppliedPromotion[];
    discount?: string;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    identifiers: CartProductIdentifer;
    price?: ProductPriceInfo;
    message?: string;
    promo_meta?: PromoMeta;
    quantity?: number;
    availability?: ProductAvailability;
    product?: CartProduct;
    is_set?: boolean;
    article?: ProductArticle;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    meta?: any;
    pincode?: number;
    address_type?: string;
    email?: string;
    landmark?: string;
    area_code_slug?: string;
    state?: string;
    country?: string;
    phone?: number;
    address?: string;
    area?: string;
    name?: string;
    area_code: string;
    city?: string;
    country_code?: string;
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
    meta?: CartItemMeta;
    price_effective: number;
    employee_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    amount_paid: number;
    discount: number;
    delivery_charges: number;
    price_marked: number;
    cashback_applied: number;
    loyalty_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    cod_charges: number;
    quantity?: number;
    size: string;
    product_id: number;
    coupon_effective_discount: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon?: string;
    payment_mode?: string;
    employee_discount?: any;
    delivery_charges: number;
    order_id?: string;
    currency_code?: string;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    cart_items: OpenApiOrderItem[];
    coupon_code: string;
    comment?: string;
    coupon_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    cart_value: number;
    cashback_applied: number;
    billing_address: ShippingAddress;
    shipping_address?: ShippingAddress;
    gstin?: string;
    affiliate_order_id?: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
    message?: string;
};
type AbandonedCart = {
    promotion?: any;
    coupon?: any;
    merge_qty?: boolean;
    fc_index_map?: number[];
    delivery_charges?: any;
    pick_up_customer_details?: any;
    _id: string;
    fynd_credits?: any;
    cod_charges?: any;
    meta?: any;
    comment?: string;
    payment_methods?: any[];
    checkout_mode?: string;
    discount?: number;
    articles: any[];
    is_active?: boolean;
    cart_value?: number;
    payments?: any;
    created_on: string;
    cashback: any;
    payment_mode?: string;
    shipments?: any[];
    user_id: string;
    order_id?: string;
    bulk_coupon_discount?: number;
    uid: number;
    app_id?: string;
    last_modified: string;
    buy_now?: boolean;
    expire_at: string;
    is_default: boolean;
    gstin?: string;
    is_archive?: boolean;
};
type AbandonedCartResponse = {
    success?: boolean;
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
    result?: any;
};
type AddProductCart = {
    store_id?: number;
    quantity?: number;
    parent_item_identifiers?: any;
    seller_id?: number;
    article_assignment?: any;
    extra_meta?: any;
    product_group_tags?: string[];
    article_id?: string;
    pos?: boolean;
    display?: string;
    item_size?: string;
    item_id?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    delivery_promise?: ShipmentPromise;
    comment?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    id?: string;
    pan_no?: string;
    pan_config?: any;
    currency?: CartCurrency;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    message?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    last_modified?: string;
    gstin?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
    partial?: boolean;
};
type UpdateProductCart = {
    parent_item_identifiers?: any;
    item_index?: number;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    item_id?: number;
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
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    meta?: any;
    token?: string;
    created_on?: string;
    user?: any;
    source?: any;
};
type SharedCart = {
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    comment?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    id?: string;
    uid?: string;
    shared_cart_details?: SharedCartDetails;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    last_modified?: string;
    coupon_text?: string;
    gstin?: string;
    cart_id?: number;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    user_id?: string;
    pick_up_customer_details?: any;
    cart_value?: number;
    item_counts?: number;
    created_on?: string;
    cart_id?: string;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    delivery_promise?: ShipmentPromise;
    pan_no?: string;
    is_valid?: boolean;
    comment?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    user?: UserInfo;
    delivery_charge_info?: string;
    id?: string;
    pan_config?: any;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    last_modified?: string;
    coupon_text?: string;
    gstin?: string;
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
type PageCoupon = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    total?: number;
    total_item_count?: number;
};
type Coupon = {
    is_applicable?: boolean;
    coupon_code?: string;
    max_discount_value?: number;
    coupon_value?: number;
    expires_on?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
    title?: string;
    message?: string;
    sub_title?: string;
    description?: string;
    is_applied?: boolean;
};
type GetCouponResponse = {
    page?: PageCoupon;
    available_coupon_list?: Coupon[];
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    phone?: string;
    name?: string;
    state?: string;
    meta?: any;
    address_type?: string;
    landmark?: string;
    google_map_point?: any;
    checkout_mode?: string;
    is_active?: boolean;
    address?: string;
    city?: string;
    tags?: string[];
    is_default_address?: boolean;
    email?: string;
    user_id?: string;
    country?: string;
    id?: string;
    geo_location?: GeoLocation;
    created_by_user_id?: string;
    country_code?: string;
    area_code_slug?: string;
    area?: string;
    area_code?: string;
    cart_id?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    success?: boolean;
    id?: string;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    is_updated?: boolean;
    is_default_address?: boolean;
    id?: string;
    success?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    user_id?: string;
    checkout_mode?: string;
    id?: string;
    billing_address_id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    promise?: ShipmentPromise;
    shipments?: number;
    shipment_type?: string;
    order_type?: string;
    fulfillment_id?: number;
    items?: CartProductInfo[];
    box_type?: string;
    fulfillment_type?: string;
    dp_options?: any;
    dp_id?: string;
};
type CartShipmentsResponse = {
    delivery_promise?: ShipmentPromise;
    shipments?: ShipmentResponse[];
    delivery_charge_info?: string;
    id?: string;
    uid?: string;
    is_valid?: boolean;
    message?: string;
    error?: boolean;
    comment?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    last_modified?: string;
    coupon_text?: string;
    gstin?: string;
    cart_id?: number;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    article_uid: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    comment?: string;
    checkout_mode?: string;
    pan_no?: string;
    pick_up_customer_details?: any;
    gstin?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type Files = {
    values: string[];
    key: string;
};
type StaffCheckout = {
    first_name: string;
    last_name: string;
    user: string;
    _id: string;
};
type PlatformCartCheckoutDetailRequest = {
    ordering_store?: number;
    pick_at_store_uid?: number;
    meta?: any;
    checkout_mode?: string;
    payment_auto_confirm?: boolean;
    payment_params?: any;
    billing_address_id?: string;
    payment_mode: string;
    device_id?: string;
    user_id: string;
    address_id?: string;
    id: string;
    extra_meta?: any;
    payment_identifier?: string;
    files?: Files[];
    merchant_code?: string;
    callback_url?: string;
    aggregator?: string;
    order_type: string;
    billing_address?: any;
    pos?: boolean;
    delivery_address?: any;
    employee_code?: string;
    staff?: StaffCheckout;
};
type CheckCart = {
    delivery_promise?: ShipmentPromise;
    store_code?: string;
    error_message?: string;
    delivery_charges?: number;
    is_valid?: boolean;
    cod_charges?: number;
    store_emps?: any[];
    cod_message?: string;
    comment?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_order_value?: number;
    currency?: CartCurrency;
    cod_available?: boolean;
    success?: boolean;
    delivery_charge_info?: string;
    id?: string;
    order_id?: string;
    uid?: string;
    message?: string;
    items?: CartProductInfo[];
    user_type?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    last_modified?: string;
    coupon_text?: string;
    gstin?: string;
    cart_id?: number;
};
type CartCheckoutResponse = {
    success?: boolean;
    payment_confirm_url?: string;
    order_id?: string;
    data?: any;
    message?: string;
    cart?: CheckCart;
    app_intercept_url?: string;
    callback_url?: string;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    area_code_slug?: string;
    pincode?: number;
    address_type?: string;
    email?: string;
    landmark?: string;
    state?: string;
    store_code?: string;
    country?: string;
    id?: number;
    phone?: string;
    address?: string;
    area?: string;
    uid?: number;
    name?: string;
    area_code?: string;
    city?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    id?: string;
    payment_identifier?: string;
    payment_mode?: string;
    merchant_code?: string;
    aggregator_name?: string;
};
type CouponValidity = {
    discount?: number;
    valid?: boolean;
    display_message_en?: string;
    code?: string;
    title?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    message?: string;
    coupon_validity?: CouponValidity;
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
