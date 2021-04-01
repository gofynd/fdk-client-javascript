export type EditEmailRequestSchema = {
    email?: string;
};
export type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    countryCode?: string;
    phone?: string;
    primary?: boolean;
};
export type EditMobileRequestSchema = {
    countryCode?: string;
    phone?: string;
};
export type EditProfileRequestSchema = {
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profilePicUrl?: string;
    androidHash?: string;
    sender?: string;
    registerToken?: string;
};
export type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    registerToken?: string;
};
export type VerifyOtpRequestSchema = {
    requestId?: string;
    registerToken?: string;
    otp?: string;
};
export type SendMobileOtpRequestSchema = {
    mobile?: string;
    countryCode?: string;
    action?: string;
    token?: string;
    androidHash?: string;
    force?: string;
};
export type UpdatePasswordRequestSchema = {
    oldPassword?: string;
    newPassword?: string;
};
export type FormRegisterRequestSchema = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    registerToken?: string;
};
export type TokenRequestBodySchema = {
    token?: string;
};
export type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
export type CodeRequestBodySchema = {
    code?: string;
};
export type SendResetPasswordEmailRequestSchema = {
    email?: string;
    gRecaptchaResponse?: string;
};
export type PasswordLoginRequestSchema = {
    gRecaptchaResponse?: string;
    password?: string;
    username?: string;
};
export type SendOtpRequestSchema = {
    countryCode?: string;
    gRecaptchaResponse?: string;
    mobile?: string;
};
export type OAuthRequestSchema = {
    isSignedIn?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
export type AuthSuccess = {
    registerToken?: string;
    userExists?: boolean;
    user?: AuthSuccessUser;
};
export type SendOtpResponse = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
export type LoginSuccess = {
    user?: UserSchema;
};
export type VerifyOtpSuccess = {
    user?: UserSchema;
    userExists?: boolean;
};
export type ResetPasswordSuccess = {
    status?: string;
};
export type RegisterFormSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
export type VerifyEmailSuccess = {
    message?: string;
};
export type HasPasswordSuccess = {
    result?: boolean;
};
export type LogoutSuccess = {
    logout?: boolean;
};
export type OtpSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
export type EmailOtpSuccess = {
    resendToken?: string;
};
export type SessionListSuccess = {
    sessions?: Array<string>;
};
export type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verifyMobileLink?: boolean;
};
export type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verifyEmailLink?: boolean;
};
export type SendMobileVerifyLinkSuccess = {
    verifyMobileLink?: boolean;
};
export type SendEmailVerifyLinkSuccess = {
    verifyEmailLink?: boolean;
};
export type UserSearchResponseSchema = {
    users?: Array<UserSchema>;
};
export type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
export type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
export type UnauthorizedSchema = {
    message?: string;
};
export type UnauthenticatedSchema = {
    authenticated?: boolean;
};
export type NotFoundSchema = {
    message?: string;
};
export type AuthenticationApiErrorSchema = {
    message?: string;
};
export type ProfileEditSuccessSchema = {
    email?: string;
    verifyEmailOtp?: boolean;
    verifyEmailLink?: boolean;
    verifyMobileOtp?: boolean;
    user?: string;
    registerToken?: string;
    userExists?: boolean;
};
export type FormRegisterRequestSchemaPhone = {
    countryCode?: string;
    mobile?: string;
};
export type OAuthRequestSchemaOauth2 = {
    accessToken?: string;
    expiry?: number;
    refreshToken?: string;
};
export type OAuthRequestSchemaProfile = {
    lastName?: string;
    image?: string;
    id?: string;
    email?: string;
    fullName?: string;
    firstName?: string;
};
export type AuthSuccessUser = {
    firstName?: string;
    lastName?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
export type AuthSuccessUserDebug = {
    platform?: string;
};
export type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
export type PlatformSchema = {
    display?: string;
    lookAndFeel?: LookAndFeel;
    updatedAt?: string;
    active?: boolean;
    forgotPassword?: boolean;
    login?: Login;
    skipCaptcha?: boolean;
    name?: string;
    meta?: Meta;
    id?: string;
    social?: Social;
    requiredFields?: RequiredFields;
    registerRequiredFields?: RegisterRequiredFields;
    skipLogin?: boolean;
    flashCard?: FlashCard;
    subtext?: string;
    socialTokens?: SocialTokens;
    createdAt?: string;
    register?: boolean;
};
export type LookAndFeel = {
    cardPosition?: string;
    backgroundColor?: string;
};
export type Login = {
    password?: boolean;
    otp?: boolean;
};
export type Meta = {
    fyndDefault?: boolean;
};
export type Social = {
    accountKit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
export type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
export type Email = {
    isRequired?: boolean;
    level?: string;
};
export type Mobile = {
    isRequired?: boolean;
    level?: string;
};
export type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
export type RegisterRequiredFieldsEmail = {
    isRequired?: boolean;
    level?: string;
};
export type RegisterRequiredFieldsMobile = {
    isRequired?: boolean;
    level?: string;
};
export type FlashCard = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
};
export type SocialTokens = {
    facebook?: Facebook;
    accountKit?: Accountkit;
    google?: Google;
};
export type Facebook = {
    appId?: string;
};
export type Accountkit = {
    appId?: string;
};
export type Google = {
    appId?: string;
};
export type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: PhoneNumbers;
    emails?: Emails;
    gender?: string;
    active?: boolean;
    profilePicUrl?: string;
    username?: string;
    accountType?: string;
    uid?: string;
    debug?: Debug;
    hasOldPasswordHash?: boolean;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};
export type PhoneNumbers = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    countryCode?: number;
};
export type Emails = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
export type Debug = {
    source?: string;
    platform?: string;
};
export type PaymentGatewayConfigResponse = {
    created: boolean;
    aggregators?: Array<any>;
    appId: string;
    success: boolean;
    displayFields: Array<string>;
    excludedFields: Array<string>;
};
export type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
export type PaymentGatewayConfig = {
    merchantSalt: string;
    key: string;
    isActive?: boolean;
    secret: string;
    configType: string;
};
export type PaymentGatewayConfigRequest = {
    appId: string;
    isActive?: boolean;
    aggregatorName?: PaymentGatewayConfig;
};
export type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: Array<string>;
};
export type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
export type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
export type PaymentModeLogo = {
    large: string;
    small: string;
};
export type PaymentModeList = {
    cardIsin?: string;
    fyndVpa?: string;
    intentAppErrorList?: Array<string>;
    cardIssuer?: string;
    cardBrand?: string;
    cardNumber?: string;
    code?: string;
    intentFlow?: string;
    expired?: boolean;
    merchantCode?: string;
    nickname?: string;
    cardName?: string;
    aggregatorName: string;
    name?: string;
    displayPriority?: number;
    timeout?: number;
    cardToken?: string;
    cardFingerprint?: string;
    cardReference?: string;
    expMonth?: number;
    retryCount?: number;
    cardBrandImage?: string;
    cardId?: string;
    cardType?: string;
    expYear?: number;
    logoUrl?: PaymentModeLogo;
    displayName?: string;
};
export type RootPaymentMode = {
    addCardEnabled?: boolean;
    aggregatorName?: string;
    name: string;
    displayPriority: number;
    list?: Array<PaymentModeList>;
    displayName: string;
    anonymousEnable?: boolean;
};
export type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
export type PaymentOptionsResponse = {
    paymentOptions: PaymentOptions;
    success: boolean;
};
export type PayoutsResponse = {
    uniqueTransferNo: any;
    payoutsAggregators: Array<any>;
    customers: any;
    isActive: boolean;
    isDefault: boolean;
    moreAttributes: any;
    transferType: string;
};
export type PayoutRequest = {
    bankDetails: any;
    uniqueExternalId: string;
    isActive: boolean;
    aggregator: string;
    users: any;
    transferType: string;
};
export type PayoutResponse = {
    uniqueTransferNo: string;
    bankDetails: any;
    created: boolean;
    isActive: boolean;
    aggregator: string;
    payouts: any;
    users: any;
    paymentStatus: string;
    success: boolean;
    transferType: string;
};
export type UpdatePayoutResponse = {
    isDefault: boolean;
    isActive: boolean;
    success: boolean;
};
export type UpdatePayoutRequest = {
    isDefault: boolean;
    uniqueExternalId: string;
    isActive: boolean;
};
export type DeletePayoutResponse = {
    success: boolean;
};
export type SubscriptionPaymentMethodResponse = {
    data: Array<any>;
    success: boolean;
};
export type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
export type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
    aggregator: string;
};
export type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
export type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
export type DeleteResponse = {
    message?: string;
};
export type ErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
export type SearchKeywordResult = {
    sortOn: string;
    query: any;
};
export type CreateSearchKeyword = {
    appId?: string;
    result: SearchKeywordResult;
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
};
export type GetSearchWordsData = {
    appId?: string;
    result?: any;
    words?: Array<string>;
    customJson?: any;
    uid?: string;
};
export type Page = {
    hasPrevious?: boolean;
    current?: number;
    nextPageId?: string;
    itemTotal?: number;
    hasNext?: boolean;
};
export type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
export type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
export type Media = {
    url?: string;
    type?: string;
};
export type AutocompletePageAction = {
    url?: string;
    type: string;
    query: any;
    params?: any;
};
export type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
export type AutocompleteResult = {
    logo?: Media;
    display?: string;
    action?: AutocompleteAction;
    customJson?: any;
};
export type CreateAutocompleteKeyword = {
    appId?: string;
    results?: Array<AutocompleteResult>;
    words?: Array<string>;
    customJson?: any;
    isActive?: boolean;
};
export type GetAutocompleteWordsData = {
    appId?: string;
    results?: Array<any>;
    words?: Array<string>;
    customJson?: any;
    uid?: string;
};
export type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
export type CreateAutocompleteWordsResponse = {
    appId?: string;
    results?: Array<any>;
    words?: Array<string>;
    customJson?: any;
};
export type ProductBundleItem = {
    maxQuantity: number;
    autoSelect?: boolean;
    minQuantity: number;
    allowRemove?: boolean;
    productUid: number;
    autoAddToCart?: boolean;
};
export type ProductBundleRequest = {
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    meta?: any;
    logo?: string;
    modifiedBy?: any;
    name: string;
    createdBy?: any;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    slug: string;
    createdOn?: string;
    choice: string;
    isActive: boolean;
};
export type GetProductBundleCreateResponse = {
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    meta?: any;
    logo?: string;
    modifiedBy?: any;
    companyId?: number;
    name: string;
    createdBy?: any;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    id?: string;
    slug: string;
    createdOn?: string;
    choice: string;
    isActive: boolean;
};
export type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
export type ProductBundleUpdateRequest = {
    products: Array<ProductBundleItem>;
    modifiedOn?: string;
    meta?: any;
    logo?: string;
    modifiedBy?: any;
    name: string;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    slug: string;
    choice: string;
    isActive: boolean;
};
export type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    isAvailable?: boolean;
};
export type Price = {
    minMarked?: number;
    maxEffective?: number;
    currency?: string;
    minEffective?: number;
    maxMarked?: number;
};
export type LimitedProductData = {
    sizes?: Array<string>;
    price?: any;
    attributes?: any;
    countryOfOrigin?: string;
    shortDescription?: string;
    itemCode?: string;
    images?: Array<string>;
    name?: string;
    slug?: string;
    quantity?: number;
    identifier?: any;
    uid?: number;
};
export type GetProducts = {
    sizes?: Array<Size>;
    price?: Price;
    productDetails?: LimitedProductData;
    maxQuantity?: number;
    allowRemove?: boolean;
    minQuantity?: number;
    autoSelect?: boolean;
    productUid?: number;
    autoAddToCart?: boolean;
};
export type GetProductBundleResponse = {
    meta?: any;
    logo?: string;
    companyId?: number;
    slug?: string;
    name?: string;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    products?: Array<GetProducts>;
    choice?: string;
    isActive?: boolean;
};
export type Guide = {
    meta?: Meta;
};
export type ValidateSizeGuide = {
    tag?: string;
    guide?: Guide;
    brandId?: number;
    modifiedOn?: string;
    image?: string;
    active?: boolean;
    title: string;
    description?: string;
    companyId?: number;
    modifiedBy?: any;
    name: string;
    createdBy?: any;
    subtitle?: string;
    id?: string;
    createdOn?: string;
};
export type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
export type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
export type SizeGuideResponse = {
    tag?: string;
    guide?: any;
    brandId?: number;
    modifiedOn?: string;
    active?: boolean;
    title?: string;
    modifiedBy?: any;
    companyId?: number;
    createdBy?: any;
    name?: string;
    subtitle?: string;
    id?: string;
    createdOn?: string;
};
export type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
export type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
export type MetaDataListingFilterMetaResponse = {
    display?: string;
    units?: Array<any>;
    key?: string;
    filterTypes?: Array<string>;
};
export type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
export type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
export type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    variant?: any;
    detail?: any;
    similar?: any;
};
export type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
export type ConfigurationListingSortConfig = {
    priority: number;
    key: string;
    logo?: string;
    name?: string;
    isActive: boolean;
};
export type ConfigurationListingSort = {
    defaultKey: string;
    config?: Array<ConfigurationListingSortConfig>;
};
export type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
export type ConfigurationListingFilterValue = {
    bucketPoints?: Array<ConfigurationBucketPoints>;
    sort?: string;
    map?: any;
    value?: string;
    condition?: string;
};
export type ConfigurationListingFilterConfig = {
    valueConfig?: ConfigurationListingFilterValue;
    priority: number;
    type: string;
    key: string;
    logo?: string;
    name?: string;
    isActive: boolean;
};
export type ConfigurationListingFilter = {
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
    allowSingle: boolean;
};
export type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
export type ProductSize = {
    max: number;
    min: number;
};
export type ConfigurationProductVariantConfig = {
    priority: number;
    key: string;
    logo?: string;
    name: string;
    size: ProductSize;
    displayType: string;
    isActive: boolean;
};
export type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
export type ConfigurationProductConfig = {
    priority: number;
    key: string;
    title?: string;
    logo?: string;
    size?: ProductSize;
    subtitle?: string;
    isActive: boolean;
};
export type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
export type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
export type AppConfiguration = {
    appId: string;
    configType: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    configId?: string;
};
export type AppCatalogConfiguration = {
    appId: string;
    id?: string;
    configType: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    configId?: string;
};
export type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    isDefault?: boolean;
};
export type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
export type EntityConfiguration = {
    appId: string;
    id?: string;
    configType: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    configId?: string;
};
export type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    isDefault?: boolean;
};
export type ProductFiltersKey = {
    display: string;
    logo?: string;
    name: string;
    kind?: string;
};
export type ProductFiltersValue = {
    selectedMin?: number;
    queryFormat?: string;
    selectedMax?: number;
    max?: number;
    display: string;
    currencyCode?: string;
    count?: number;
    isSelected: boolean;
    min?: number;
    displayFormat?: string;
    value: string;
    currencySymbol?: string;
};
export type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
export type ProductSortOn = {
    value?: string;
    name?: string;
    isSelected?: boolean;
};
export type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
};
export type Schedule = {
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
};
export type CollectionImage = {
    aspectRatio: string;
    url: string;
};
export type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
export type SeoDetail = {
    description?: string;
    title?: string;
};
export type CollectionBadge = {
    text?: string;
    color?: string;
};
export type UserInfo = {
    email?: string;
    username?: string;
    userId?: string;
    uid?: string;
};
export type CreateCollection = {
    type: string;
    schedule?: Schedule;
    banners: CollectionBanner;
    localeLanguage?: any;
    isActive?: boolean;
    appId: string;
    seo?: SeoDetail;
    tags?: Array<string>;
    badge?: CollectionBadge;
    visibleFacetsKeys?: Array<string>;
    query?: any;
    description?: string;
    modifiedBy?: UserInfo;
    createdBy?: UserInfo;
    allowSort?: boolean;
    published?: boolean;
    name: string;
    sortOn?: string;
    meta?: any;
    logo: CollectionImage;
    allowFacets?: boolean;
    slug: string;
    customJson?: any;
};
export type BannerImage = {
    aspectRatio?: string;
    url?: string;
};
export type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
export type CollectionCreateResponse = {
    appId?: string;
    tag?: Array<string>;
    type?: string;
    schedule?: any;
    badge?: any;
    visibleFacetsKeys?: Array<string>;
    description?: string;
    query?: any;
    logo?: BannerImage;
    meta?: any;
    name?: string;
    allowFacets?: boolean;
    allowSort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    isActive?: boolean;
};
export type CollectionListingFilterType = {
    display?: string;
    name?: string;
    isSelected?: boolean;
};
export type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    isSelected?: boolean;
};
export type CollectionListingFilter = {
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
export type ProductListingActionPage = {
    type?: string;
    query?: any;
};
export type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
export type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
export type GetCollectionDetailNest = {
    tag?: Array<string>;
    type?: string;
    schedule?: any;
    action?: ProductListingAction;
    banners?: ImageUrls;
    isActive?: boolean;
    appId?: string;
    badge?: any;
    visibleFacetsKeys?: Array<string>;
    description?: string;
    query?: any;
    allowSort?: boolean;
    uid?: string;
    name?: string;
    meta?: any;
    logo?: Media1;
    allowFacets?: boolean;
    slug?: string;
    cron?: any;
};
export type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
};
export type CollectionDetailResponse = {
    appId?: string;
    tag?: Array<string>;
    type?: string;
    schedule?: any;
    badge?: any;
    visibleFacetsKeys?: Array<string>;
    description?: string;
    query?: any;
    logo?: Media1;
    meta?: any;
    name?: string;
    allowFacets?: boolean;
    allowSort?: boolean;
    banners?: ImageUrls;
    slug?: string;
    cron?: any;
    isActive?: boolean;
};
export type CollectionItemRequest = {
    pageSize: number;
    pageNo: number;
};
export type UpdatedResponse = {
    message?: string;
};
export type Price1 = {
    currencyCode?: string;
    currencySymbol?: string;
    max?: number;
    min?: number;
};
export type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
export type ProductListingDetail = {
    highlights?: Array<string>;
    type?: string;
    promoMeta?: any;
    discount?: string;
    teaserTag?: any;
    ratingCount?: number;
    attributes?: any;
    shortDescription?: string;
    description?: string;
    similars?: Array<string>;
    uid?: number;
    tryouts?: Array<string>;
    hasVariant?: boolean;
    rating?: number;
    itemType?: string;
    price?: ProductListingPrice;
    name?: string;
    sellable?: boolean;
    medias?: Array<Media1>;
    color?: string;
    imageNature?: string;
    productOnlineDate?: string;
    slug: string;
};
export type GetCollectionItemsResponse = {
    page?: Page;
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
    items?: Array<ProductListingDetail>;
};
export type CatalogInsightItem = {
    outOfStockCount?: number;
    sellableCount?: number;
    count?: number;
};
export type CatalogInsightBrand = {
    totalArticles?: number;
    availableSizes?: number;
    availableArticles?: number;
    name?: string;
    articleFreshness?: number;
    totalSizes?: number;
};
export type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brandDistribution?: CatalogInsightBrand;
};
export type CrossSellingData = {
    products?: number;
    articles?: number;
};
export type CrossSellingResponse = {
    data?: CrossSellingData;
    brandDistribution?: CatalogInsightBrand;
};
export type OptInPostRequest = {
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    enabled?: boolean;
    optLevel: string;
};
export type CompanyOptIn = {
    createdOn: number;
    storeIds: Array<number>;
    optLevel: string;
    modifiedOn: number;
    platform: string;
    enabled: boolean;
    companyId: number;
    modifiedBy?: any;
    createdBy?: any;
    brandIds: Array<number>;
};
export type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
export type OptinCompanyDetail = {
    businessType?: string;
    companyType?: string;
    name?: string;
    uid?: number;
};
export type CompanyBrandDetail = {
    brandId?: number;
    companyId?: number;
    totalArticle?: number;
    brandName?: string;
};
export type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
export type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
export type StoreDetail = {
    modifiedOn?: string;
    displayName?: string;
    timing?: any;
    storeCode?: string;
    storeType?: string;
    documents?: Array<any>;
    companyId?: number;
    name?: string;
    additionalContacts?: Array<any>;
    createdOn?: string;
    uid?: number;
};
export type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
export type BasePage = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    itemTotal?: number;
    size?: number;
};
export type MultipleCommon = any;
export type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: any;
};
export type PTErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
export type BasePage1 = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    itemTotal?: number;
    nextPageId?: string;
};
export type UserSerializer = {
    username?: string;
    contact?: string;
    userId?: string;
};
export type GetDepartment = {
    priorityOrder?: number;
    pageSize?: number;
    pageNo?: number;
    search?: string;
    itemType?: string;
    modifiedOn?: string;
    uid?: number;
    synonyms?: Array<string>;
    logo?: string;
    modifiedBy?: UserSerializer;
    name?: string;
    createdBy?: UserSerializer;
    slug?: string;
    createdOn?: string;
    isActive?: boolean;
};
export type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
export type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
export type ProductTemplate = {
    tag?: string;
    departments?: Array<string>;
    attributes?: Array<string>;
    isArchived?: boolean;
    modifiedOn?: string;
    isPhysical: boolean;
    description?: string;
    logo?: string;
    modifiedBy?: any;
    name?: string;
    categories?: Array<string>;
    createdBy?: any;
    slug: string;
    createdOn?: string;
    isActive?: boolean;
};
export type TemplatesResponse = {
    page?: BasePage;
    items?: ProductTemplate;
};
export type TemplatesValidationResponse = {
    data?: any;
};
export type InventoryValidationResponse = {
    message?: string;
    data?: any;
};
export type HSNData = {
    countryOfOrigin?: Array<string>;
    hsnCode?: Array<string>;
};
export type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
export type ProductConfligurationDownloads = {
    data?: Array<MultipleCommon>;
    multivalue?: boolean;
};
export type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
export type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
export type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
export type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
export type CategoryRequestBody = {
    tryouts?: Array<string>;
    departments: Array<number>;
    marketplaces?: CategoryMapping;
    priority?: number;
    synonyms?: Array<string>;
    name: string;
    media?: Media2;
    hierarchy?: Array<Hierarchy>;
    slug?: string;
    level: number;
    isActive: boolean;
};
export type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
export type Category = {
    tryouts?: Array<string>;
    departments: Array<number>;
    marketplaces?: CategoryMapping;
    priority?: number;
    isActive: boolean;
    modifiedOn?: string;
    id?: string;
    synonyms?: Array<string>;
    modifiedBy?: any;
    name: string;
    createdBy?: any;
    media?: Media2;
    hierarchy?: Array<Hierarchy>;
    slug?: string;
    createdOn?: string;
    level: number;
    uid?: number;
};
export type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
export type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
export type TeaserTag = {
    tag?: string;
    url?: string;
};
export type CustomOrder = {
    isCustomOrder?: boolean;
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
};
export type ProductPublish = {
    isSet?: boolean;
    productOnlineDate?: string;
};
export type Trader = {
    name: string;
    address: string;
};
export type OrderQuantity = {
    isSet?: boolean;
    maximum?: number;
    minimum?: number;
};
export type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
export type ProductCreateUpdate = {
    highlights?: Array<string>;
    currency: string;
    companyId: number;
    traderType?: string;
    brandUid: number;
    teaserTag?: TeaserTag;
    media?: Array<Media1>;
    categorySlug: string;
    isActive?: boolean;
    customOrder?: CustomOrder;
    tags?: Array<string>;
    isImageLessProduct?: boolean;
    description?: string;
    itemCode: string;
    shortDescription?: string;
    productPublish?: ProductPublish;
    changeRequestId?: string;
    trader?: Trader;
    uid?: number;
    itemType: string;
    departments: Array<number>;
    countryOfOrigin: string;
    requester?: string;
    isSet?: boolean;
    name: string;
    moq?: OrderQuantity;
    multiSize?: boolean;
    productGroupTag?: Array<string>;
    variants?: any;
    isDependent?: boolean;
    sizeGuide?: string;
    returnConfig?: ReturnConfig;
    noOfBoxes?: number;
    hsnCode: string;
    templateTag: string;
    slug: string;
    customJson?: any;
};
export type PageData = {
    hasPrevious?: boolean;
    current?: string;
    itemTotal?: number;
    hasNext?: boolean;
    size?: number;
};
export type UserCommon = {
    companyId?: number;
    username?: string;
    userId?: string;
};
export type VerifiedBy = {
    username?: string;
    userId?: string;
};
export type Attributes = {
    metaNature?: string;
    primaryMaterial?: string;
    productFit?: string;
    sleeveLength?: string;
    modifiedOn?: string;
    isImageLessProduct?: boolean;
    pattern?: string;
    modifiedBy?: UserCommon;
    stage?: string;
    createdBy?: UserCommon;
    l3Mapping?: Array<string>;
    verifiedOn?: string;
    essential?: string;
    createdOn?: string;
    primaryColor?: string;
    neckType?: string;
    gender?: Array<string>;
    color?: string;
    verifiedBy?: VerifiedBy;
    material?: string;
    imageNature?: string;
};
export type ProductPublished = {
    isSet?: boolean;
    productOnlineDate?: number;
};
export type Logo = {
    aspectRatio?: string;
    url?: string;
    aspectRatioF?: number;
    secureUrl?: string;
};
export type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
export type Product = {
    highlights?: string;
    currency?: string;
    companyId?: number;
    media?: Array<string>;
    categorySlug?: string;
    allSizes?: Array<string>;
    isActive?: boolean;
    sizes?: Array<any>;
    attributes?: Attributes;
    description?: string;
    itemCode?: string;
    images?: Array<string>;
    productPublish?: ProductPublished;
    id?: string;
    uid?: number;
    departments?: Array<number>;
    itemType?: string;
    countryOfOrigin?: string;
    isSet?: boolean;
    name?: string;
    multiSize?: boolean;
    isDependent?: boolean;
    sizeGuide?: string;
    hsnCode?: string;
    templateTag?: string;
    brand?: Brand;
    slug?: string;
};
export type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
export type ValidateProduct = {
    valid?: boolean;
};
export type UserInfo1 = {
    email?: string;
    username?: string;
    userId?: string;
    uid?: string;
};
export type BulkJob = {
    succeed?: number;
    cancelled?: number;
    cancelledRecords?: Array<any>;
    modifiedOn?: string;
    filePath?: string;
    failed?: number;
    failedRecords?: Array<any>;
    modifiedBy?: UserInfo1;
    companyId: number;
    createdBy?: UserInfo1;
    total: number;
    stage?: string;
    customTemplateTag?: string;
    templateTag?: string;
    trackingUrl?: string;
    createdOn: string;
    isActive?: boolean;
};
export type UserDetail = {
    fullName?: string;
    username?: string;
    userId?: string;
};
export type ProductBulkRequest = {
    succeed?: number;
    cancelled?: number;
    template?: ProductTemplate;
    cancelledRecords?: Array<string>;
    modifiedOn?: string;
    filePath?: string;
    failed?: number;
    failedRecords?: Array<string>;
    stage?: string;
    companyId?: number;
    createdBy?: UserDetail;
    total?: number;
    modifiedBy?: UserDetail;
    templateTag?: string;
    createdOn?: string;
    isActive?: boolean;
};
export type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
export type BulkProductRequest = {
    companyId: number;
    data: Array<any>;
    batchId: string;
    templateTag: string;
};
export type NestedTags = {
    tags?: Array<string>;
};
export type ProductTagsViewResponse = {
    items?: NestedTags;
};
export type ProductBulkAssets = {
    companyId?: number;
    user: any;
    url: string;
};
export type Items = {
    succeed?: number;
    cancelled?: number;
    id?: string;
    filePath?: string;
    modifiedOn?: string;
    cancelledRecords?: Array<string>;
    failed?: number;
    failedRecords?: Array<string>;
    modifiedBy?: UserCommon;
    stage?: string;
    createdBy?: UserCommon;
    total?: number;
    retry?: number;
    companyId?: number;
    trackingUrl?: string;
    createdOn?: string;
    isActive?: boolean;
};
export type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
export type GTIN = {
    gtinType: string;
    gtinValue: string;
    primary?: boolean;
};
export type SetSize = {
    pieces: number;
    size: string;
};
export type SizeDistribution = {
    sizes: Array<SetSize>;
};
export type InventorySet = {
    quantity?: number;
    sizeDistribution: SizeDistribution;
};
export type InvSize = {
    price: number;
    itemWidth?: number;
    itemWeightUnitOfMeasure?: string;
    identifiers: Array<GTIN>;
    priceTransfer?: number;
    set?: InventorySet;
    storeCode: string;
    itemDimensionsUnitOfMeasure?: string;
    currency: string;
    isSet?: boolean;
    quantity: number;
    itemHeight?: number;
    itemWeight?: number;
    priceEffective: number;
    itemLength?: number;
    size: string;
};
export type ItemQuery = {
    brandUid?: number;
    itemCode?: string;
    uid?: number;
};
export type InventoryRequest = {
    sizes: Array<InvSize>;
    companyId: number;
    item: ItemQuery;
};
export type InventoryRequest1 = {
    pageSize?: number;
    pageNo?: number;
    search?: string;
    total?: number;
    size?: string;
};
export type CommonResponse = {
    success?: string;
};
export type BulkRequestGet = {
    pageSize?: number;
    pageNo?: number;
    search?: string;
    startDate?: string;
    endDate?: string;
    total?: number;
    stage?: string;
    templateTag?: string;
    customTemplateTag?: string;
};
export type Size1 = {
    price: number;
    itemWidth?: number;
    itemWeightUnitOfMeasure?: string;
    identifiers?: Array<any>;
    sellerIdentifier: string;
    priceTransfer?: number;
    set?: InventorySet;
    storeCode: string;
    itemDimensionsUnitOfMeasure?: string;
    currency: string;
    isSet?: boolean;
    quantity: number;
    itemHeight?: number;
    itemWeight?: number;
    priceEffective: number;
    itemLength?: number;
    size?: string;
};
export type InventoryBulkRequest = {
    sizes: Array<Size1>;
    companyId: number;
    user?: any;
    batchId: string;
};
export type InventoryExportRequest = {
    brand?: Array<number>;
    store?: Array<number>;
    type?: string;
};
export type InventoryExportJob = {
    completedOn?: string;
    requestParams?: any;
    url?: string;
    status?: string;
    sellerId: number;
    triggerOn?: string;
    taskId: string;
};
export type FilerList = {
    display?: string;
    value?: string;
};
export type InventoryConfig = {
    data?: Array<FilerList>;
    multivalues?: boolean;
};
export type Website = {
    url?: string;
};
export type BusinessDetails = {
    website?: Website;
};
export type BusinessCountryInfo = {
    country?: string;
    countryCode?: string;
};
export type GetAddressSerializer = {
    address2?: string;
    addressType?: string;
    city?: string;
    country?: string;
    pincode?: number;
    latitude?: number;
    longitude?: number;
    countryCode?: string;
    landmark?: string;
    address1?: string;
    state?: string;
};
export type PhoneNumber = {
    number: string;
    countryCode: number;
};
export type ContactDetails = {
    phone?: Array<PhoneNumber>;
    emails?: Array<string>;
};
export type Document = {
    verified?: boolean;
    type: string;
    url?: string;
    legalName: string;
    value: string;
};
export type GetCompanyProfileSerializerResponse = {
    name?: string;
    modifiedOn?: string;
    businessDetails?: BusinessDetails;
    businessCountryInfo?: BusinessCountryInfo;
    notificationEmails?: Array<string>;
    createdOn?: string;
    addresses?: Array<GetAddressSerializer>;
    verifiedOn?: string;
    companyType: string;
    modifiedBy?: UserSerializer;
    businessInfo?: string;
    warnings?: any;
    stage?: string;
    contactDetails?: ContactDetails;
    verifiedBy?: UserSerializer;
    createdBy?: UserSerializer;
    documents?: Array<Document>;
    franchiseEnabled?: boolean;
    uid: number;
    businessType: string;
};
export type CompanyAddress = {
    address2?: string;
    city: string;
    country: string;
    pincode: number;
    latitude: number;
    longitude: number;
    countryCode?: string;
    landmark?: string;
    address1: string;
    state: string;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type BusinessCountryInfo1 = {
    country?: string;
    countryCode?: string;
};
export type CompanyStoreSerializerRequest = {
    name: string;
    brands: Array<number>;
    franchiseEnabled?: boolean;
    uid?: number;
    address: CompanyAddress;
    businessType: string;
    document: Document;
    businessInfo?: string;
    referralInfo?: ReferralInfo;
    warnings?: any;
    businessCountryInfo: BusinessCountryInfo1;
    notificationEmails?: Array<string>;
};
export type DocumentsObj = {
    pending?: number;
    verified?: number;
};
export type MetricsSerializer = {
    product?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    stage?: string;
};
export type UserSerializer1 = {
    username?: string;
    userId?: string;
    contact?: string;
};
export type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
export type GetBrandResponseSerializer = {
    slugKey?: string;
    name: string;
    verifiedOn?: string;
    localeLanguage?: any;
    uid?: number;
    modifiedBy?: UserSerializer1;
    description?: string;
    customJson?: any;
    modifiedOn?: string;
    warnings?: any;
    verifiedBy?: UserSerializer1;
    logo?: string;
    createdBy?: UserSerializer1;
    createdOn?: string;
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
    stage?: string;
    rejectReason?: string;
};
export type CreateUpdateBrandRequestSerializer = {
    name: string;
    companyId?: number;
    uid?: number;
    customJson?: any;
    brandTier?: string;
    description?: string;
    logo: string;
    localeLanguage?: any;
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
};
export type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    uid?: number;
    company: number;
};
export type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
export type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
export type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
export type GetAddressSerializer1 = {
    address2?: string;
    addressType?: string;
    city?: string;
    country?: string;
    pincode?: number;
    latitude?: number;
    longitude?: number;
    countryCode?: string;
    landmark?: string;
    address1?: string;
    state?: string;
};
export type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
export type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    open: boolean;
};
export type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobileNo: PhoneNumber;
};
export type LocationSerializer = {
    productReturnConfig?: ProductReturnConfigSerializer;
    name: string;
    displayName: string;
    storeType?: string;
    documents?: Array<Document>;
    uid?: number;
    gstCredentials?: InvoiceDetailsSerializer;
    customJson?: any;
    company: number;
    address: GetAddressSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    code: string;
    warnings?: any;
    notificationEmails?: Array<string>;
    manager?: LocationManagerSerializer;
    stage?: string;
    contactNumbers?: Array<PhoneNumber>;
};
export type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
export type GetCompanySerializer = {
    addresses?: Array<GetAddressSerializer>;
    name?: string;
    verifiedOn?: string;
    uid?: number;
    companyType?: string;
    modifiedBy?: UserSerializer;
    businessType?: string;
    modifiedOn?: string;
    verifiedBy?: UserSerializer;
    createdBy?: UserSerializer;
    createdOn?: string;
    stage?: string;
    rejectReason?: string;
};
export type GetLocationSerializer = {
    name: string;
    customJson?: any;
    modifiedOn?: string;
    createdOn?: string;
    notificationEmails?: Array<string>;
    displayName: string;
    verifiedOn?: string;
    modifiedBy?: UserSerializer1;
    warnings?: any;
    integrationType?: LocationIntegrationType;
    manager?: LocationManagerSerializer;
    stage?: string;
    contactNumbers?: Array<PhoneNumber>;
    storeType?: string;
    gstCredentials?: InvoiceDetailsSerializer;
    company?: GetCompanySerializer;
    address: GetAddressSerializer;
    phoneNumber: string;
    verifiedBy?: UserSerializer1;
    createdBy?: UserSerializer1;
    productReturnConfig?: ProductReturnConfigSerializer;
    documents?: Array<Document>;
    uid?: number;
    timing?: Array<LocationDayWiseSerializer>;
    code: string;
};
export type FailedResponse = {
    message: string;
};
export type CDN = {
    url: string;
};
export type Upload = {
    expiry: number;
    url: string;
};
export type StartResponse = {
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
export type StartRequest = {
    fileName: string;
    contentType: string;
    size: number;
    tags?: Array<string>;
};
export type CompleteResponse = {
    id: string;
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    createdOn: string;
    modifiedOn: string;
};
export type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
export type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attemptsMade: number;
    stacktrace?: Array<string>;
    finishedOn: number;
    processedOn: number;
};
export type BulkResponse = {
    trackingUrl: string;
    task: CopyFileTask;
};
export type ReqConfiguration = {
    concurrency?: number;
};
export type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
export type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
export type Urls = {
    url: string;
    signedUrl: string;
    expiry: number;
};
export type SignUrlResponse = {
    urls: Array<Urls>;
};
export type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
export type Item = {
    success: boolean;
    tags: Array<string>;
    id: string;
    fileName: string;
    operation?: string;
    namespace: string;
    contentType: string;
    filePath: string;
    upload: Upload;
    cdn: CDN;
    createdOn: string;
    modifiedOn: string;
};
export type BrowseResponse = {
    items: Array<Item>;
    page: Page;
};
/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */
/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */
/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [gRecaptchaResponse]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [gRecaptchaResponse]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */
/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */
/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */
/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */
/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */
/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */
/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { Meta } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef Meta
        
        
        @property { boolean } [fyndDefault]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */
/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */
/**
        @typedef Email
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { PhoneNumbers } [phoneNumbers]
        
        @property { Emails } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef PhoneNumbers
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */
/**
        @typedef Emails
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { Array<string> } excludedFields
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } secret
        
        @property { string } configType
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [cardIsin]
        
        @property { string } [fyndVpa]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { string } [code]
        
        @property { string } [intentFlow]
        
        @property { boolean } [expired]
        
        @property { string } [merchantCode]
        
        @property { string } [nickname]
        
        @property { string } [cardName]
        
        @property { string } aggregatorName
        
        @property { string } [name]
        
        @property { number } [displayPriority]
        
        @property { number } [timeout]
        
        @property { string } [cardToken]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardReference]
        
        @property { number } [expMonth]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { number } [expYear]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [displayName]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [addCardEnabled]
        
        @property { string } [aggregatorName]
        
        @property { string } name
        
        @property { number } displayPriority
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { boolean } [anonymousEnable]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } customers
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { Object } moreAttributes
        
        @property { string } transferType
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { Object } bankDetails
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { string } transferType
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { Object } bankDetails
        
        @property { boolean } created
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } transferType
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { boolean } success
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { string } sortOn
        
        @property { Object } query
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [appId]
        
        @property { SearchKeywordResult } result
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { string } [appId]
        
        @property { Object } [result]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef Page
        
        
        @property { boolean } [hasPrevious]
        
        @property { number } [current]
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { string } type
        
        @property { Object } query
        
        @property { Object } [params]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [appId]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } maxQuantity
        
        @property { boolean } [autoSelect]
        
        @property { number } minQuantity
        
        @property { boolean } [allowRemove]
        
        @property { number } productUid
        
        @property { boolean } [autoAddToCart]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [id]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modifiedOn]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [minMarked]
        
        @property { number } [maxEffective]
        
        @property { string } [currency]
        
        @property { number } [minEffective]
        
        @property { number } [maxMarked]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [sizes]
        
        @property { Object } [price]
        
        @property { Object } [attributes]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [shortDescription]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [images]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { number } [quantity]
        
        @property { Object } [identifier]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { Array<Size> } [sizes]
        
        @property { Price } [price]
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
        @property { boolean } [autoSelect]
        
        @property { number } [productUid]
        
        @property { boolean } [autoAddToCart]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { number } [companyId]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [choice]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [tag]
        
        @property { Guide } [guide]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { string } [image]
        
        @property { boolean } [active]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [tag]
        
        @property { Object } [guide]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [active]
        
        @property { string } [title]
        
        @property { Object } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { Object } [createdBy]
        
        @property { string } [name]
        
        @property { string } [subtitle]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { Array<Object> } [units]
        
        @property { string } [key]
        
        @property { Array<string> } [filterTypes]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
        @property { Object } [similar]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { string } defaultKey
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [sort]
        
        @property { Object } [map]
        
        @property { string } [value]
        
        @property { string } [condition]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { number } priority
        
        @property { string } type
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
        @property { boolean } allowSingle
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { ProductSize } size
        
        @property { string } displayType
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { number } priority
        
        @property { string } key
        
        @property { string } [title]
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { string } appId
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } appId
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } appId
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [configId]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMin]
        
        @property { string } [queryFormat]
        
        @property { number } [selectedMax]
        
        @property { number } [max]
        
        @property { string } display
        
        @property { string } [currencyCode]
        
        @property { number } [count]
        
        @property { boolean } isSelected
        
        @property { number } [min]
        
        @property { string } [displayFormat]
        
        @property { string } value
        
        @property { string } [currencySymbol]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } aspectRatio
        
        @property { string } url
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { string } type
        
        @property { Schedule } [schedule]
        
        @property { CollectionBanner } banners
        
        @property { Object } [localeLanguage]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
        @property { SeoDetail } [seo]
        
        @property { Array<string> } [tags]
        
        @property { CollectionBadge } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { UserInfo } [modifiedBy]
        
        @property { UserInfo } [createdBy]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [published]
        
        @property { string } name
        
        @property { string } [sortOn]
        
        @property { Object } [meta]
        
        @property { CollectionImage } logo
        
        @property { boolean } [allowFacets]
        
        @property { string } slug
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { BannerImage } [logo]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { string } [type]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { boolean } [allowSort]
        
        @property { string } [uid]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { boolean } [allowFacets]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { string } [type]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { Media1 } [logo]
        
        @property { Object } [meta]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
        @property { Object } [cron]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageSize
        
        @property { number } pageNo
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { string } [type]
        
        @property { Object } [promoMeta]
        
        @property { string } [discount]
        
        @property { Object } [teaserTag]
        
        @property { number } [ratingCount]
        
        @property { Object } [attributes]
        
        @property { string } [shortDescription]
        
        @property { string } [description]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { boolean } [hasVariant]
        
        @property { number } [rating]
        
        @property { string } [itemType]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [name]
        
        @property { boolean } [sellable]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [color]
        
        @property { string } [imageNature]
        
        @property { string } [productOnlineDate]
        
        @property { string } slug
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [outOfStockCount]
        
        @property { number } [sellableCount]
        
        @property { number } [count]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalArticles]
        
        @property { number } [availableSizes]
        
        @property { number } [availableArticles]
        
        @property { string } [name]
        
        @property { number } [articleFreshness]
        
        @property { number } [totalSizes]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { boolean } [enabled]
        
        @property { string } optLevel
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { number } createdOn
        
        @property { Array<number> } storeIds
        
        @property { string } optLevel
        
        @property { number } modifiedOn
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
        @property { Object } [createdBy]
        
        @property { Array<number> } brandIds
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [businessType]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { number } [store]
        
        @property { string } [company]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { string } [modifiedOn]
        
        @property { string } [displayName]
        
        @property { Object } [timing]
        
        @property { string } [storeCode]
        
        @property { string } [storeType]
        
        @property { Array<Object> } [documents]
        
        @property { number } [companyId]
        
        @property { string } [name]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
         
    */
/**
        @typedef MultipleCommon
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { string } [nextPageId]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [priorityOrder]
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [itemType]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [slug]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [tag]
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } [isArchived]
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { string } [description]
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
        @property { string } [name]
        
        @property { Array<string> } [categories]
        
        @property { Object } [createdBy]
        
        @property { string } slug
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [countryOfOrigin]
        
        @property { Array<string> } [hsnCode]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } portrait
        
        @property { string } landscape
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } l1
        
        @property { number } department
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { Media2 } [media]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { number } level
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Category
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [priority]
        
        @property { boolean } isActive
        
        @property { string } [modifiedOn]
        
        @property { string } [id]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
        @property { Object } [createdBy]
        
        @property { Media2 } [media]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { string } [slug]
        
        @property { string } [createdOn]
        
        @property { number } level
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { number } [time]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [highlights]
        
        @property { string } currency
        
        @property { number } companyId
        
        @property { string } [traderType]
        
        @property { number } brandUid
        
        @property { TeaserTag } [teaserTag]
        
        @property { Array<Media1> } [media]
        
        @property { string } categorySlug
        
        @property { boolean } [isActive]
        
        @property { CustomOrder } [customOrder]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [description]
        
        @property { string } itemCode
        
        @property { string } [shortDescription]
        
        @property { ProductPublish } [productPublish]
        
        @property { string } [changeRequestId]
        
        @property { Trader } [trader]
        
        @property { number } [uid]
        
        @property { string } itemType
        
        @property { Array<number> } departments
        
        @property { string } countryOfOrigin
        
        @property { string } [requester]
        
        @property { boolean } [isSet]
        
        @property { string } name
        
        @property { OrderQuantity } [moq]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [productGroupTag]
        
        @property { Object } [variants]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { number } [noOfBoxes]
        
        @property { string } hsnCode
        
        @property { string } templateTag
        
        @property { string } slug
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef PageData
        
        
        @property { boolean } [hasPrevious]
        
        @property { string } [current]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { number } [size]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [metaNature]
        
        @property { string } [primaryMaterial]
        
        @property { string } [productFit]
        
        @property { string } [sleeveLength]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [pattern]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [stage]
        
        @property { UserCommon } [createdBy]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [verifiedOn]
        
        @property { string } [essential]
        
        @property { string } [createdOn]
        
        @property { string } [primaryColor]
        
        @property { string } [neckType]
        
        @property { Array<string> } [gender]
        
        @property { string } [color]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [material]
        
        @property { string } [imageNature]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
        @property { number } [aspectRatioF]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [highlights]
        
        @property { string } [currency]
        
        @property { number } [companyId]
        
        @property { Array<string> } [media]
        
        @property { string } [categorySlug]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [isActive]
        
        @property { Array<Object> } [sizes]
        
        @property { Attributes } [attributes]
        
        @property { string } [description]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [images]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { Array<number> } [departments]
        
        @property { string } [itemType]
        
        @property { string } [countryOfOrigin]
        
        @property { boolean } [isSet]
        
        @property { string } [name]
        
        @property { boolean } [multiSize]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { string } [hsnCode]
        
        @property { string } [templateTag]
        
        @property { Brand } [brand]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [modifiedOn]
        
        @property { string } [filePath]
        
        @property { number } [failed]
        
        @property { Array<Object> } [failedRecords]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } companyId
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } total
        
        @property { string } [stage]
        
        @property { string } [customTemplateTag]
        
        @property { string } [templateTag]
        
        @property { string } [trackingUrl]
        
        @property { string } createdOn
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { ProductTemplate } [template]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [modifiedOn]
        
        @property { string } [filePath]
        
        @property { number } [failed]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [stage]
        
        @property { number } [companyId]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [total]
        
        @property { UserDetail } [modifiedBy]
        
        @property { string } [templateTag]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { number } companyId
        
        @property { Array<Object> } data
        
        @property { string } batchId
        
        @property { string } templateTag
        
         
    */
/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { number } [companyId]
        
        @property { Object } user
        
        @property { string } url
        
         
    */
/**
        @typedef Items
        
        
        @property { number } [succeed]
        
        @property { number } [cancelled]
        
        @property { string } [id]
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [failed]
        
        @property { Array<string> } [failedRecords]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [stage]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [total]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [trackingUrl]
        
        @property { string } [createdOn]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { string } gtinValue
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */
/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */
/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } sizeDistribution
        
         
    */
/**
        @typedef InvSize
        
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<GTIN> } identifiers
        
        @property { number } [priceTransfer]
        
        @property { InventorySet } [set]
        
        @property { string } storeCode
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { number } quantity
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { string } size
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { number } [brandUid]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { Array<InvSize> } sizes
        
        @property { number } companyId
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { number } [total]
        
        @property { string } [size]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [startDate]
        
        @property { string } [endDate]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { string } [templateTag]
        
        @property { string } [customTemplateTag]
        
         
    */
/**
        @typedef Size1
        
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } sellerIdentifier
        
        @property { number } [priceTransfer]
        
        @property { InventorySet } [set]
        
        @property { string } storeCode
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { number } quantity
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { string } [size]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Array<Size1> } sizes
        
        @property { number } companyId
        
        @property { Object } [user]
        
        @property { string } batchId
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } [completedOn]
        
        @property { Object } [requestParams]
        
        @property { string } [url]
        
        @property { string } [status]
        
        @property { number } sellerId
        
        @property { string } [triggerOn]
        
        @property { string } taskId
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */
/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [state]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { string } number
        
        @property { number } countryCode
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } type
        
        @property { string } [url]
        
        @property { string } legalName
        
        @property { string } value
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [createdOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [verifiedOn]
        
        @property { string } companyType
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessInfo]
        
        @property { Object } [warnings]
        
        @property { string } [stage]
        
        @property { ContactDetails } [contactDetails]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<Document> } [documents]
        
        @property { boolean } [franchiseEnabled]
        
        @property { number } uid
        
        @property { string } businessType
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { string } city
        
        @property { string } country
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } state
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } name
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { number } [uid]
        
        @property { CompanyAddress } address
        
        @property { string } businessType
        
        @property { Document } document
        
        @property { string } [businessInfo]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { Array<string> } [notificationEmails]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [store]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [slugKey]
        
        @property { string } name
        
        @property { string } [verifiedOn]
        
        @property { Object } [localeLanguage]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [description]
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [logo]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [brandTier]
        
        @property { string } [description]
        
        @property { string } logo
        
        @property { Object } [localeLanguage]
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } [uid]
        
        @property { number } company
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [countryCode]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [state]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
        @property { boolean } open
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { string } [name]
        
        @property { PhoneNumber } mobileNo
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } name
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Object } [customJson]
        
        @property { number } company
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } code
        
        @property { Object } [warnings]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [stage]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [name]
        
        @property { string } [verifiedOn]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessType]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { string } name
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } displayName
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } [stage]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } [storeType]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { GetCompanySerializer } [company]
        
        @property { GetAddressSerializer } address
        
        @property { string } phoneNumber
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } code
        
         
    */
/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */
/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */
/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */
/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */
/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */
/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */
/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */
/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */
/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */
/**
        @typedef Item
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef BrowseResponse
        
        
        @property { Array<Item> } items
        
        @property { Page } page
        
         
    */
export class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of customers
      * @description: Used to get application customers list
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Search users
      * @description: Search users
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    searchUsers({ q }?: {
        q?: string;
    }): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      
      **/
    getPlatformConfig({}?: any): any;
    /**
     *
     * @summary: Update platform config
     * @description: Used to update platform config
     * @param {Object} arg - arg object.
     * @param {PlatformSchema} arg.body
     **/
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): any;
}
export class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get All Brand Payment Gateway Config Secret
      * @description: Get All Brand Payment Gateway Config Secret
      * @param {Object} arg - arg object.
      
      **/
    getBrandPaymentGatewayConfig({}?: any): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {boolean} arg.refresh -
      * @param {string} arg.requestType -
      
      **/
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): any;
}
export class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Delete a Search Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     **/
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Get a Search Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateSearchKeyword} arg.body
     **/
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: List all Search Custom Keyword Listing
      * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAllSearchKeyword({}?: any): any;
    /**
      *
      * @summary: Delete a Autocomplete Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Get a Autocomplete Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: List all Autocomplete Keyword Listing
      * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAutocompleteConfig({}?: any): any;
    /**
      *
      * @summary: Get configuration meta  details for catalog for admin panel
      * @description: configuration meta  details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getCatalogConfiguration({}?: any): any;
    /**
     *
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     * @param {Object} arg - arg object.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getConfigurations({}?: any): any;
    /**
     *
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      * @param {string} arg.type - type can be brands, categories etc.
      
      **/
    getConfigurationByType({ type }?: {
        type: string;
    }): any;
    /**
      *
      * @summary: Get query filters to configure a collection
      * @description: Get query filters to configure a collection
      * @param {Object} arg - arg object.
      
      **/
    getQueryFilters({}?: any): any;
    /**
     *
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     * @param {Object} arg - arg object.
     * @param {CreateCollection} arg.body
     **/
    createCollection({ body }?: {
        body: CreateCollection;
    }): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
      * @param {Object} arg - arg object.
      
      **/
    getAllCollections({}?: any): any;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetail({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Update a collection
      * @description: Update a collection by it's id. On successful request, returns the updated collection
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    updateCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Delete a Collection
      * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    deleteCollection({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     **/
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): any;
    /**
      *
      * @summary: Get the items for a collection
      * @description: Get items from a collection specified by its `id`.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain next_page_id param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory.
      * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
      * @param {Object} arg - arg object.
      * @param {string} [arg.brand] - Brand slug
      
      **/
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): any;
}
export class Assets {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    appBrowse({ namespace }?: {
        namespace: string;
    }): any;
}
