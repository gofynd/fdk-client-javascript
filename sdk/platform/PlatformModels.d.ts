export type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
export type Page = {
    itemTotal: number;
    nextId?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    current?: number;
    type: string;
    size: number;
};
export type TicketHistoryList = {
    docs?: Array<TicketHistory>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
export type CustomFormList = {
    docs?: Array<CustomForm>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
export type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
export type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    loginRequired?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
export type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assignedTo?: AgentChangePayload;
    tags?: Array<string>;
};
export type AgentChangePayload = {
    agentId: string;
};
export type CreateVideoRoomResponse = {
    uniqueName: string;
};
export type CloseVideoRoomResponse = {
    success: boolean;
};
export type CreateVideoRoomPayload = {
    uniqueName: string;
    notify?: Array<any>;
};
export type Filter = {
    priorities: Priority;
    categories?: Category;
    statuses: Status;
    assignees: Array<any>;
};
export type TicketHistoryPayload = {
    value: any;
    type: string;
};
export type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
export type KeyValue = {
    key: string;
    value: string;
};
export type GetTokenForVideoRoomResponse = {
    accessToken: string;
};
export type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
export type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
export type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
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
export type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    countryCode?: number;
};
export type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
export type Debug = {
    source?: string;
    platform?: string;
};
export type SubmitCustomFormResponse = {
    ticket: Ticket;
};
export type TicketContext = {
    applicationId?: string;
    companyId: string;
};
export type CreatedOn = {
    userAgent: string;
};
export type TicketAsset = {
    display?: string;
    value: string;
    type: string;
};
export type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
export type AddTicketPayload = {
    status: string;
    priority: string;
    category: string;
    content: TicketContent;
};
export type Priority = {
    key: string;
    display: string;
    color: string;
};
export type Status = {
    key: string;
    display: string;
    color: string;
};
export type Category = {
    key: string;
    display: string;
    form?: CustomForm;
};
export type SubmitButton = {
    title: string;
    titleColor: string;
    backgroundColor: string;
};
export type PollForAssignment = {
    duration: number;
    message: string;
    successMessage: string;
    failureMessage: string;
};
export type CustomForm = {
    applicationId: string;
    slug: string;
    headerImage?: string;
    title: string;
    description?: string;
    loginRequired: boolean;
    shouldNotify: boolean;
    successMessage?: string;
    submitButton?: SubmitButton;
    inputs: Array<any>;
    createdOn?: CreatedOn;
    createdBy?: any;
    pollForAssignment?: PollForAssignment;
    id: string;
};
export type TicketHistory = {
    type: string;
    value: any;
    ticketId: string;
    createdOn?: CreatedOn;
    createdBy?: any;
    id: string;
    updatedAt?: string;
    createdAt?: string;
};
export type Ticket = {
    context?: TicketContext;
    createdOn?: CreatedOn;
    responseId?: string;
    content?: TicketContent;
    ticketId: string;
    category: Category;
    source: string;
    status: Status;
    priority: Priority;
    createdBy?: any;
    assignedTo?: any;
    tags?: Array<string>;
    customJson?: any;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
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
export type GetSearchWordsData = {
    appId?: string;
    customJson?: any;
    result?: any;
    words?: Array<string>;
    uid?: string;
};
export type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
export type ErrorResponse = {
    errors?: any;
    code?: string;
    meta?: any;
    status?: number;
    message?: string;
};
export type SearchKeywordResult = {
    sortOn: string;
    query: any;
};
export type CreateSearchKeyword = {
    isActive?: boolean;
    appId?: string;
    customJson?: any;
    result: SearchKeywordResult;
    words?: Array<string>;
};
export type DeleteResponse = {
    message?: string;
};
export type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
export type GetAutocompleteWordsData = {
    appId?: string;
    customJson?: any;
    results?: Array<any>;
    words?: Array<string>;
    uid?: string;
};
export type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
export type Media = {
    type?: string;
    url?: string;
};
export type AutocompletePageAction = {
    params?: any;
    type: string;
    url?: string;
    query: any;
};
export type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
export type AutocompleteResult = {
    logo?: Media;
    customJson?: any;
    display?: string;
    action?: AutocompleteAction;
};
export type CreateAutocompleteKeyword = {
    isActive?: boolean;
    appId?: string;
    customJson?: any;
    results?: Array<AutocompleteResult>;
    words?: Array<string>;
};
export type CreateAutocompleteWordsResponse = {
    appId?: string;
    customJson?: any;
    words?: Array<string>;
    results?: Array<any>;
};
export type ProductBundleItem = {
    minQuantity: number;
    allowRemove?: boolean;
    autoSelect?: boolean;
    autoAddToCart?: boolean;
    productUid: number;
    maxQuantity: number;
};
export type GetProductBundleCreateResponse = {
    isActive: boolean;
    createdBy?: any;
    createdOn?: string;
    products: Array<ProductBundleItem>;
    meta?: any;
    modifiedOn?: string;
    sameStoreAssignment?: boolean;
    modifiedBy?: any;
    id?: string;
    pageVisibility?: Array<string>;
    name: string;
    choice: string;
    companyId?: number;
    logo?: string;
    slug: string;
};
export type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
export type ProductBundleRequest = {
    isActive: boolean;
    createdBy?: any;
    createdOn?: string;
    products: Array<ProductBundleItem>;
    meta?: any;
    modifiedOn?: string;
    sameStoreAssignment?: boolean;
    modifiedBy?: any;
    pageVisibility?: Array<string>;
    name: string;
    choice: string;
    logo?: string;
    slug: string;
};
export type Price = {
    maxMarked?: number;
    minMarked?: number;
    currency?: string;
    maxEffective?: number;
    minEffective?: number;
};
export type Size = {
    isAvailable?: boolean;
    display?: string;
    quantity?: number;
    value?: string;
};
export type LimitedProductData = {
    images?: Array<string>;
    attributes?: any;
    countryOfOrigin?: string;
    price?: any;
    itemCode?: string;
    name?: string;
    shortDescription?: string;
    quantity?: number;
    uid?: number;
    sizes?: Array<string>;
    identifier?: any;
    slug?: string;
};
export type GetProducts = {
    minQuantity?: number;
    allowRemove?: boolean;
    price?: Price;
    autoSelect?: boolean;
    autoAddToCart?: boolean;
    sizes?: Array<Size>;
    productUid?: number;
    productDetails?: LimitedProductData;
    maxQuantity?: number;
};
export type GetProductBundleResponse = {
    isActive?: boolean;
    products?: Array<GetProducts>;
    meta?: any;
    sameStoreAssignment?: boolean;
    pageVisibility?: Array<string>;
    name?: string;
    companyId?: number;
    choice?: string;
    logo?: string;
    slug?: string;
};
export type ProductBundleUpdateRequest = {
    isActive: boolean;
    products: Array<ProductBundleItem>;
    meta?: any;
    modifiedOn?: string;
    sameStoreAssignment?: boolean;
    modifiedBy?: any;
    pageVisibility?: Array<string>;
    name: string;
    choice: string;
    logo?: string;
    slug: string;
};
export type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
export type Guide = {
    meta?: Meta;
};
export type ValidateSizeGuide = {
    createdBy?: any;
    tag?: string;
    createdOn?: string;
    description?: string;
    modifiedOn?: string;
    modifiedBy?: any;
    id?: string;
    name: string;
    title: string;
    brandId?: number;
    companyId?: number;
    guide?: Guide;
    subtitle?: string;
    active?: boolean;
    image?: string;
};
export type SuccessResponse = {
    success?: boolean;
    uid?: number;
};
export type SizeGuideResponse = {
    createdBy?: any;
    createdOn?: string;
    tag?: string;
    modifiedOn?: string;
    modifiedBy?: any;
    id?: string;
    name?: string;
    brandId?: number;
    companyId?: number;
    title?: string;
    guide?: any;
    subtitle?: string;
    active?: boolean;
};
export type MetaDataListingFilterMetaResponse = {
    units?: Array<any>;
    filterTypes?: Array<string>;
    display?: string;
    key?: string;
};
export type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
export type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
export type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
export type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
export type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    variant?: any;
    compare?: any;
};
export type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
export type ProductSize = {
    min: number;
    max: number;
};
export type ConfigurationProductConfig = {
    isActive: boolean;
    key: string;
    size?: ProductSize;
    priority: number;
    title?: string;
    subtitle?: string;
    logo?: string;
};
export type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
export type ConfigurationProductVariantConfig = {
    isActive: boolean;
    key: string;
    size: ProductSize;
    name: string;
    priority: number;
    logo?: string;
    displayType: string;
};
export type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
export type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
export type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
export type ConfigurationListingFilterValue = {
    map?: any;
    sort?: string;
    bucketPoints?: Array<ConfigurationBucketPoints>;
    condition?: string;
    value?: string;
};
export type ConfigurationListingFilterConfig = {
    isActive: boolean;
    key: string;
    valueConfig?: ConfigurationListingFilterValue;
    type: string;
    name?: string;
    priority: number;
    logo?: string;
};
export type ConfigurationListingFilter = {
    allowSingle: boolean;
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
};
export type ConfigurationListingSortConfig = {
    isActive: boolean;
    key: string;
    name?: string;
    priority: number;
    logo?: string;
};
export type ConfigurationListingSort = {
    config?: Array<ConfigurationListingSortConfig>;
    defaultKey: string;
};
export type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
export type AppCatalogConfiguration = {
    appId: string;
    configId?: string;
    configType: string;
    id?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
export type GetAppCatalogConfiguration = {
    isDefault?: boolean;
    data?: AppCatalogConfiguration;
};
export type AppConfiguration = {
    appId: string;
    configId?: string;
    configType: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
export type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
export type EntityConfiguration = {
    appId: string;
    configId?: string;
    configType: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
export type GetAppCatalogEntityConfiguration = {
    isDefault?: boolean;
    data?: EntityConfiguration;
};
export type ProductFiltersValue = {
    min?: number;
    queryFormat?: string;
    currencyCode?: string;
    display: string;
    max?: number;
    displayFormat?: string;
    isSelected: boolean;
    count?: number;
    selectedMin?: number;
    selectedMax?: number;
    currencySymbol?: string;
    value: string;
};
export type ProductFiltersKey = {
    logo?: string;
    name: string;
    display: string;
    kind?: string;
};
export type ProductFilters = {
    values: Array<ProductFiltersValue>;
    key: ProductFiltersKey;
};
export type ProductSortOn = {
    name?: string;
    isSelected?: boolean;
    value?: string;
};
export type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
};
export type CollectionListingFilterType = {
    name?: string;
    display?: string;
    isSelected?: boolean;
};
export type CollectionListingFilterTag = {
    name?: string;
    display?: string;
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
    type?: string;
    url: string;
    meta?: any;
};
export type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
export type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
export type GetCollectionDetailNest = {
    isActive?: boolean;
    type?: string;
    name?: string;
    tag?: Array<string>;
    cron?: any;
    action?: ProductListingAction;
    uid?: string;
    schedule?: any;
    slug?: string;
    meta?: any;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    badge?: any;
    logo?: Media1;
    appId?: string;
    allowSort?: boolean;
    query?: any;
    allowFacets?: boolean;
    banners?: ImageUrls;
};
export type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
};
export type Schedule = {
    cron?: string;
    end?: string;
    duration?: number;
    start?: string;
};
export type SeoDetail = {
    title?: string;
    description?: string;
};
export type CollectionBadge = {
    color?: string;
    text?: string;
};
export type CollectionImage = {
    url: string;
    aspectRatio: string;
};
export type UserInfo = {
    email?: string;
    userId?: string;
    username?: string;
    uid?: string;
};
export type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
export type CreateCollection = {
    isActive?: boolean;
    type: string;
    tags?: Array<string>;
    name: string;
    customJson?: any;
    localeLanguage?: any;
    schedule?: Schedule;
    slug: string;
    meta?: any;
    seo?: SeoDetail;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    badge?: CollectionBadge;
    logo: CollectionImage;
    createdBy?: UserInfo;
    appId: string;
    modifiedBy?: UserInfo;
    sortOn?: string;
    allowSort?: boolean;
    published?: boolean;
    query?: any;
    allowFacets?: boolean;
    banners: CollectionBanner;
};
export type CollectionCreateResponse = {
    isActive?: boolean;
    appId?: string;
    tag?: Array<string>;
    meta?: any;
    description?: string;
    cron?: any;
    type?: string;
    allowSort?: boolean;
    name?: string;
    visibleFacetsKeys?: Array<string>;
    badge?: any;
    query?: any;
    allowFacets?: boolean;
    logo?: BannerImage;
    schedule?: any;
    banners?: ImageUrls;
    slug?: string;
};
export type CollectionDetailResponse = {
    isActive?: boolean;
    appId?: string;
    tag?: Array<string>;
    meta?: any;
    description?: string;
    cron?: any;
    type?: string;
    allowSort?: boolean;
    name?: string;
    visibleFacetsKeys?: Array<string>;
    badge?: any;
    query?: any;
    allowFacets?: boolean;
    logo?: Media1;
    schedule?: any;
    banners?: ImageUrls;
    slug?: string;
};
export type Price1 = {
    currencyCode?: string;
    min?: number;
    currencySymbol?: string;
    max?: number;
};
export type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
export type ProductListingDetail = {
    hasVariant?: boolean;
    promoMeta?: any;
    attributes?: any;
    medias?: Array<Media1>;
    type?: string;
    productOnlineDate?: string;
    itemType?: string;
    discount?: string;
    name?: string;
    shortDescription?: string;
    highlights?: Array<string>;
    imageNature?: string;
    tryouts?: Array<string>;
    rating?: number;
    uid?: number;
    description?: string;
    sellable?: boolean;
    color?: string;
    teaserTag?: any;
    price?: ProductListingPrice;
    ratingCount?: number;
    similars?: Array<string>;
    slug: string;
};
export type GetCollectionItemsResponse = {
    page?: Page;
    filters?: Array<ProductFilters>;
    items?: Array<ProductListingDetail>;
    sortOn?: Array<ProductSortOn>;
};
export type CollectionItemRequest = {
    pageSize: number;
    pageNo: number;
};
export type UpdatedResponse = {
    message?: string;
};
export type CatalogInsightBrand = {
    availableArticles?: number;
    totalArticles?: number;
    name?: string;
    availableSizes?: number;
    totalSizes?: number;
    articleFreshness?: number;
};
export type CatalogInsightItem = {
    outOfStockCount?: number;
    count?: number;
    sellableCount?: number;
};
export type CatalogInsightResponse = {
    brandDistribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
export type CrossSellingData = {
    products?: number;
    articles?: number;
};
export type CrossSellingResponse = {
    brandDistribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
export type OptInPostRequest = {
    optLevel: string;
    storeIds?: Array<number>;
    brandIds?: Array<number>;
    enabled?: boolean;
};
export type CompanyOptIn = {
    createdBy?: any;
    createdOn: number;
    brandIds: Array<number>;
    modifiedOn: number;
    optLevel: string;
    enabled: boolean;
    platform: string;
    modifiedBy?: any;
    storeIds: Array<number>;
    companyId: number;
};
export type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
export type OptinCompanyDetail = {
    name?: string;
    businessType?: string;
    companyType?: string;
    uid?: number;
};
export type CompanyBrandDetail = {
    brandName?: string;
    companyId?: number;
    brandId?: number;
    totalArticle?: number;
};
export type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
export type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
export type StoreDetail = {
    createdOn?: string;
    storeCode?: string;
    modifiedOn?: string;
    documents?: Array<any>;
    timing?: any;
    storeType?: string;
    additionalContacts?: Array<any>;
    name?: string;
    companyId?: number;
    uid?: number;
    displayName?: string;
};
export type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
export type BasePage = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    size?: number;
    itemTotal?: number;
};
export type MultipleCommon = any;
export type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: any;
};
export type PTErrorResponse = {
    errors?: any;
    code?: string;
    meta?: any;
    status?: number;
    message?: string;
};
export type BasePage1 = {
    hasPrevious?: boolean;
    hasNext?: boolean;
    nextPageId?: string;
    itemTotal?: number;
};
export type UserSerializer = {
    userId?: string;
    username?: string;
    contact?: string;
};
export type GetDepartment = {
    isActive?: boolean;
    createdBy?: UserSerializer;
    synonyms?: Array<string>;
    createdOn?: string;
    modifiedOn?: string;
    priorityOrder?: number;
    modifiedBy?: UserSerializer;
    itemType?: string;
    name?: string;
    pageNo?: number;
    pageSize?: number;
    uid?: number;
    logo?: string;
    slug?: string;
    search?: string;
};
export type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
export type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    meta?: any;
    status?: number;
    message?: string;
};
export type ProductTemplate = {
    departments?: Array<string>;
    isActive?: boolean;
    tag?: string;
    attributes?: Array<string>;
    createdBy?: any;
    createdOn?: string;
    description?: string;
    modifiedOn?: string;
    modifiedBy?: any;
    categories?: Array<string>;
    name?: string;
    isArchived?: boolean;
    isPhysical: boolean;
    logo?: string;
    slug: string;
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
    hsnCode?: Array<string>;
    countryOfOrigin?: Array<string>;
};
export type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
export type ProductConfligurationDownloads = {
    multivalue?: boolean;
    data?: Array<MultipleCommon>;
};
export type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
export type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
export type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
export type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
export type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
export type CategoryRequestBody = {
    departments: Array<number>;
    isActive: boolean;
    marketplaces?: CategoryMapping;
    synonyms?: Array<string>;
    level: number;
    media?: Media2;
    tryouts?: Array<string>;
    name: string;
    priority?: number;
    slug?: string;
    hierarchy?: Array<Hierarchy>;
};
export type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
export type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
export type PageData = {
    hasPrevious?: boolean;
    current?: string;
    hasNext?: boolean;
    itemTotal?: number;
    size?: number;
};
export type Logo = {
    url?: string;
    secureUrl?: string;
    aspectRatioF?: number;
    aspectRatio?: string;
};
export type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
export type UserCommon = {
    companyId?: number;
    userId?: string;
    username?: string;
};
export type VerifiedBy = {
    userId?: string;
    username?: string;
};
export type Attributes = {
    primaryMaterial?: string;
    modifiedOn?: string;
    isImageLessProduct?: boolean;
    neckType?: string;
    stage?: string;
    createdOn?: string;
    imageNature?: string;
    productFit?: string;
    sleeveLength?: string;
    verifiedOn?: string;
    essential?: string;
    primaryColor?: string;
    material?: string;
    color?: string;
    pattern?: string;
    metaNature?: string;
    createdBy?: UserCommon;
    modifiedBy?: UserCommon;
    verifiedBy?: VerifiedBy;
    l3Mapping?: Array<string>;
    gender?: Array<string>;
};
export type ProductPublished = {
    productOnlineDate?: number;
    isSet?: boolean;
};
export type Product = {
    isActive?: boolean;
    brand?: Brand;
    attributes?: Attributes;
    media?: Array<string>;
    itemType?: string;
    name?: string;
    companyId?: number;
    sizes?: Array<any>;
    highlights?: string;
    productPublish?: ProductPublished;
    categorySlug?: string;
    allSizes?: Array<string>;
    multiSize?: boolean;
    uid?: number;
    templateTag?: string;
    countryOfOrigin?: string;
    images?: Array<string>;
    description?: string;
    hsnCode?: string;
    itemCode?: string;
    departments?: Array<number>;
    isSet?: boolean;
    id?: string;
    currency?: string;
    sizeGuide?: string;
    slug?: string;
    isDependent?: boolean;
};
export type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
export type Trader = {
    name: string;
    address: string;
};
export type OrderQuantity = {
    maximum?: number;
    minimum?: number;
    isSet?: boolean;
};
export type ProductPublish = {
    productOnlineDate?: string;
    isSet?: boolean;
};
export type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
export type TeaserTag = {
    url?: string;
    tag?: string;
};
export type CustomOrder = {
    isCustomOrder?: boolean;
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
};
export type ProductCreateUpdate = {
    isActive?: boolean;
    variants?: any;
    media?: Array<Media1>;
    itemType: string;
    tags?: Array<string>;
    trader?: Trader;
    name: string;
    moq?: OrderQuantity;
    companyId: number;
    shortDescription?: string;
    highlights?: Array<string>;
    isImageLessProduct?: boolean;
    productPublish?: ProductPublish;
    customJson?: any;
    categorySlug: string;
    returnConfig?: ReturnConfig;
    multiSize?: boolean;
    uid?: number;
    requester?: string;
    templateTag: string;
    countryOfOrigin: string;
    noOfBoxes?: number;
    traderType?: string;
    description?: string;
    hsnCode: string;
    changeRequestId?: string;
    itemCode: string;
    departments: Array<number>;
    teaserTag?: TeaserTag;
    isSet?: boolean;
    customOrder?: CustomOrder;
    productGroupTag?: Array<string>;
    brandUid: number;
    currency: string;
    sizeGuide?: string;
    slug: string;
    isDependent?: boolean;
};
export type ValidateProduct = {
    valid?: boolean;
};
export type UserDetail = {
    fullName?: string;
    userId?: string;
    username?: string;
};
export type ProductBulkRequest = {
    stage?: string;
    isActive?: boolean;
    cancelledRecords?: Array<string>;
    createdOn?: string;
    failedRecords?: Array<string>;
    createdBy?: UserDetail;
    cancelled?: number;
    modifiedOn?: string;
    failed?: number;
    total?: number;
    modifiedBy?: UserDetail;
    companyId?: number;
    template?: ProductTemplate;
    succeed?: number;
    filePath?: string;
    templateTag?: string;
};
export type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
export type UserInfo1 = {
    email?: string;
    userId?: string;
    username?: string;
    uid?: string;
};
export type BulkJob = {
    isActive?: boolean;
    createdBy?: UserInfo1;
    createdOn: string;
    cancelled?: number;
    cancelledRecords?: Array<any>;
    failedRecords?: Array<any>;
    stage?: string;
    modifiedOn?: string;
    total: number;
    failed?: number;
    modifiedBy?: UserInfo1;
    trackingUrl?: string;
    companyId: number;
    succeed?: number;
    filePath?: string;
    customTemplateTag?: string;
    templateTag?: string;
};
export type BulkProductRequest = {
    batchId: string;
    companyId: number;
    templateTag: string;
    data: Array<any>;
};
export type NestedTags = {
    tags?: Array<string>;
};
export type ProductTagsViewResponse = {
    items?: NestedTags;
};
export type Items = {
    cancelledRecords?: Array<string>;
    createdBy?: UserCommon;
    createdOn?: string;
    failedRecords?: Array<string>;
    stage?: string;
    isActive?: boolean;
    cancelled?: number;
    modifiedOn?: string;
    failed?: number;
    total?: number;
    modifiedBy?: UserCommon;
    id?: string;
    trackingUrl?: string;
    companyId?: number;
    retry?: number;
    succeed?: number;
    filePath?: string;
};
export type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
export type ProductBulkAssets = {
    url: string;
    companyId?: number;
    user: any;
};
export type InventoryRequest = {
    total?: number;
    size?: string;
    pageSize?: number;
    pageNo?: number;
    search?: string;
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
export type GTIN = {
    gtinType: string;
    gtinValue: string;
    primary?: boolean;
};
export type InvSize = {
    priceEffective: number;
    storeCode: string;
    itemLength?: number;
    isSet?: boolean;
    set?: InventorySet;
    price: number;
    priceTransfer?: number;
    size: string;
    itemWeightUnitOfMeasure?: string;
    identifiers: Array<GTIN>;
    quantity: number;
    currency: string;
    itemDimensionsUnitOfMeasure?: string;
    itemWeight?: number;
    itemHeight?: number;
    itemWidth?: number;
};
export type ItemQuery = {
    itemCode?: string;
    brandUid?: number;
    uid?: number;
};
export type InventoryRequest1 = {
    sizes: Array<InvSize>;
    companyId: number;
    item: ItemQuery;
};
export type BulkRequestGet = {
    stage?: string;
    total?: number;
    startDate?: string;
    pageSize?: number;
    pageNo?: number;
    endDate?: string;
    customTemplateTag?: string;
    templateTag?: string;
    search?: string;
};
export type CommonResponse = {
    success?: string;
};
export type Size1 = {
    priceEffective: number;
    sellerIdentifier: string;
    storeCode: string;
    itemLength?: number;
    isSet?: boolean;
    set?: InventorySet;
    price: number;
    priceTransfer?: number;
    size?: string;
    itemWeightUnitOfMeasure?: string;
    identifiers?: Array<any>;
    quantity: number;
    currency: string;
    itemDimensionsUnitOfMeasure?: string;
    itemWeight?: number;
    itemHeight?: number;
    itemWidth?: number;
};
export type InventoryBulkRequest = {
    sizes: Array<Size1>;
    companyId: number;
    user?: any;
    batchId: string;
};
export type InventoryExportJob = {
    requestParams?: any;
    sellerId: number;
    url?: string;
    status?: string;
    taskId: string;
    completedOn?: string;
    triggerOn?: string;
};
export type InventoryExportRequest = {
    type?: string;
    brand?: Array<number>;
    store?: Array<number>;
};
export type FilerList = {
    display?: string;
    value?: string;
};
export type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
};
export type Website = {
    url?: string;
};
export type BusinessDetails = {
    website?: Website;
};
export type Document = {
    legalName: string;
    type: string;
    url?: string;
    verified?: boolean;
    value: string;
};
export type GetAddressSerializer = {
    addressType?: string;
    longitude?: number;
    city?: string;
    landmark?: string;
    pincode?: number;
    country?: string;
    address1?: string;
    latitude?: number;
    countryCode?: string;
    state?: string;
    address2?: string;
};
export type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<PhoneNumber>;
};
export type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
export type GetCompanyProfileSerializerResponse = {
    businessDetails?: BusinessDetails;
    stage?: string;
    uid: number;
    modifiedBy?: UserSerializer;
    businessInfo?: string;
    modifiedOn?: string;
    createdOn?: string;
    verifiedOn?: string;
    name?: string;
    verifiedBy?: UserSerializer;
    documents?: Array<Document>;
    addresses?: Array<GetAddressSerializer>;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer;
    franchiseEnabled?: boolean;
    contactDetails?: ContactDetails;
    companyType: string;
    businessCountryInfo?: BusinessCountryInfo;
    businessType: string;
    warnings?: any;
};
export type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
export type CompanyAddress = {
    longitude: number;
    city: string;
    landmark?: string;
    pincode: number;
    country: string;
    address1: string;
    latitude: number;
    countryCode?: string;
    state: string;
    address2?: string;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type CompanyStoreSerializerRequest = {
    brands: Array<number>;
    franchiseEnabled?: boolean;
    uid?: number;
    name: string;
    document: Document;
    businessCountryInfo: BusinessCountryInfo1;
    address: CompanyAddress;
    businessInfo?: string;
    notificationEmails?: Array<string>;
    businessType: string;
    referralInfo?: ReferralInfo;
    warnings?: any;
};
export type DocumentsObj = {
    pending?: number;
    verified?: number;
};
export type MetricsSerializer = {
    stage?: string;
    companyDocuments?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    store?: DocumentsObj;
};
export type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
export type UserSerializer1 = {
    userId?: string;
    username?: string;
    contact?: string;
};
export type GetBrandResponseSerializer = {
    slugKey?: string;
    verifiedOn?: string;
    banner?: BrandBannerSerializer;
    stage?: string;
    uid?: number;
    name: string;
    verifiedBy?: UserSerializer1;
    modifiedBy?: UserSerializer1;
    customJson?: any;
    synonyms?: Array<string>;
    modifiedOn?: string;
    localeLanguage?: any;
    description?: string;
    createdOn?: string;
    createdBy?: UserSerializer1;
    warnings?: any;
    rejectReason?: string;
    logo?: string;
};
export type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    uid?: number;
    name: string;
    brandTier?: string;
    companyId?: number;
    customJson?: any;
    synonyms?: Array<string>;
    localeLanguage?: any;
    description?: string;
    logo: string;
};
export type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    company: number;
    uid?: number;
};
export type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
export type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
export type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
};
export type LocationManagerSerializer = {
    name?: string;
    mobileNo: PhoneNumber;
    email?: string;
};
export type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
export type GetAddressSerializer1 = {
    addressType?: string;
    longitude?: number;
    city?: string;
    landmark?: string;
    pincode?: number;
    country?: string;
    address1?: string;
    latitude?: number;
    countryCode?: string;
    state?: string;
    address2?: string;
};
export type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
export type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
export type LocationSerializer = {
    storeType?: string;
    timing?: Array<LocationDayWiseSerializer>;
    warnings?: any;
    company: number;
    stage?: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    name: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    address: GetAddressSerializer1;
    documents?: Array<Document>;
    customJson?: any;
    notificationEmails?: Array<string>;
    gstCredentials?: InvoiceDetailsSerializer;
    contactNumbers?: Array<PhoneNumber>;
    displayName: string;
    code: string;
};
export type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
export type GetCompanySerializer = {
    verifiedOn?: string;
    stage?: string;
    uid?: number;
    name?: string;
    companyType?: string;
    verifiedBy?: UserSerializer;
    modifiedBy?: UserSerializer;
    modifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    createdOn?: string;
    createdBy?: UserSerializer;
    businessType?: string;
    rejectReason?: string;
};
export type GetLocationSerializer = {
    storeType?: string;
    stage?: string;
    uid?: number;
    productReturnConfig?: ProductReturnConfigSerializer;
    integrationType?: LocationIntegrationType;
    modifiedBy?: UserSerializer1;
    address: GetAddressSerializer;
    customJson?: any;
    modifiedOn?: string;
    createdOn?: string;
    contactNumbers?: Array<PhoneNumber>;
    verifiedOn?: string;
    company?: GetCompanySerializer;
    manager?: LocationManagerSerializer;
    name: string;
    verifiedBy?: UserSerializer1;
    documents?: Array<Document>;
    gstCredentials?: InvoiceDetailsSerializer;
    displayName: string;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer1;
    code: string;
    phoneNumber: string;
    timing?: Array<LocationDayWiseSerializer>;
    warnings?: any;
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
export type DataTresholdDTO = {
    minPrice?: number;
    safeStock?: number;
    periodThreshold?: number;
    periodThresholdType?: string;
    periodTypeList?: Array<GenericDTO>;
};
export type GenericDTO = {
    text?: string;
    value?: any;
};
export type JobConfigDTO = {
    integration: string;
    integrationData?: any;
    companyName?: string;
    companyId: number;
    taskDetails?: TaskDTO;
    thresholdDetails?: DataTresholdDTO;
    jobCode?: string;
    alias?: string;
};
export type TaskDTO = {
    type?: number;
    groupList?: Array<GenericDTO>;
};
export type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: string;
    payload?: string;
    traceId?: string;
    page?: Page;
};
export type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    accessKey?: string;
    secretKey?: string;
    localFilePath?: string;
    archivePath?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zipFormat?: string;
    fileRegex?: string;
    archiveConfig?: ArchiveConfig;
};
export type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archiveDir?: string;
};
export type Audit = {
    createdBy?: string;
    modifiedBy?: string;
    createdOn?: string;
    modifiedOn?: string;
};
export type CatalogMasterConfig = {
    sourceSlug?: string;
};
export type CompanyConfig = {
    companyId?: number;
    excludeSteps?: Array<number>;
    hiddenClosetKeys?: Array<string>;
    openTags?: any;
    taxIdentifiers?: Array<string>;
    deleteQuantityThreshold?: number;
};
export type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driverClass?: string;
    jdbcUrl?: string;
    optionalProperties?: any;
};
export type DBConnectionProfile = {
    inventory?: string;
};
export type DBParamConfig = {
    params?: any;
};
export type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intfArticleId?: PropBeanDTO;
    priceEffective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
export type DocMappingConfig = {
    properties?: any;
    junkDataThresholdCount?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    unwindField?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
export type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    readFromContent?: boolean;
    filterBasedOnRecepients?: boolean;
    pcol?: string;
    subjectLineRegex?: string;
    senderAddress?: string;
    localDir?: string;
    folderNameHierarchies?: Array<string>;
    attachmentRegex?: string;
    bodyContentRegex?: string;
    passwordProtected?: boolean;
    zipFormat?: string;
    attachmentMandate?: boolean;
    filterFilesAfterExtraction?: boolean;
    archiveConfig?: ArchiveConfig;
    readAllUnreadMails?: boolean;
    contentType?: string;
    downloadableLink?: boolean;
    properties?: any;
};
export type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    localDir?: string;
    remoteDir?: string;
    zipFileRegex?: string;
    archiveConfig?: ArchiveConfig;
    fileRegex?: string;
    zipFormat?: string;
    readAllFiles?: boolean;
};
export type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    fileHasHeader?: boolean;
    headerIndex?: number;
    headerArray?: Array<string>;
    dataStartIndex?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    junkDataThresholdCount?: number;
    fileType?: string;
    lineValidityCheck?: boolean;
    sheetNames?: Array<string>;
    readAllSheets?: boolean;
    quoteChar?: string;
    escapeChar?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
export type GoogleSpreadSheetConfig = {
    range?: string;
    sheetId?: string;
    clientSecretLocation?: string;
    credStorageDirectory?: string;
    localDir?: string;
    archiveConfig?: ArchiveConfig;
};
export type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    requestParams?: any;
    httpMethod?: string;
    requestPayload?: string;
    localPath?: string;
    archiveConfig?: ArchiveConfig;
};
export type JobConfig = {
    id?: number;
    jobCode?: string;
    taskType?: string;
    syncDelay?: number;
    cronExpression?: string;
    storeFilter?: StoreFilter;
    processConfig?: ProcessConfig;
    storeConfig?: Array<StoreConfig>;
    properties?: any;
    immediateFirstRun?: boolean;
    disable?: boolean;
    dependentJobCodes?: Array<string>;
    companyConfig?: Array<CompanyConfig>;
    companyIds?: Array<number>;
    taxIdentifiers?: Array<string>;
    priority?: string;
    periodThreshold?: number;
    periodThresholdType?: string;
    dbConnectionProfile?: DBConnectionProfile;
    params?: any;
    openTags?: any;
    deleteQuantityThreshold?: number;
    catalogMasterConfig?: CatalogMasterConfig;
    aggregatorTypes?: Array<string>;
    integrationType?: string;
    minPrice?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
export type JobConfigRawDTO = {
    integration: string;
    companyName: string;
    companyId: number;
    data?: JobConfig;
};
export type JsonDocConfig = {
    propBeanConfigs?: Array<PropBeanConfig>;
};
export type LocalFileConfig = {
    retries?: number;
    interval?: number;
    localDir?: string;
    workingDir?: string;
    unzip?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
export type MongoDocConfig = {
    collectionName?: string;
    findQuery?: any;
    projectionQuery?: any;
    propBeanConfigs?: Array<PropBeanConfig>;
    aggregatePipeline?: Array<any>;
    skipSave?: boolean;
};
export type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumerKey?: string;
    consumerSecret?: string;
    token?: string;
    tokenSecret?: string;
    restUrl?: string;
    restBaseUrl?: string;
    functionName?: string;
};
export type ProcessConfig = {
    dbConfig?: DBConfig;
    dbParamConfig?: DBParamConfig;
    sftpConfig?: SFTPConfig;
    awsS3Config?: AWSS3config;
    mongoDocConfig?: MongoDocConfig;
    ftpConfig?: FTPConfig;
    emailConfig?: EmailConfig;
    fileConfig?: FileConfig;
    jsonDocConfig?: JsonDocConfig;
    docMappingConfig?: DocMappingConfig;
    taskStepConfig?: TaskStepConfig;
    httpConfig?: HttpConfig;
    localFileConfig?: LocalFileConfig;
    oauthConfig?: OAuthConfig;
    googleSpreadsheetConfig?: GoogleSpreadSheetConfig;
};
export type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
export type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
export type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    traceId?: string;
    page?: Page;
};
export type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    privateKeyPath?: string;
    strictHostKeyChecking?: boolean;
    localDir?: string;
    remoteDir?: string;
    passwordProtected?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
export type Send = {
    raw?: boolean;
    processed?: boolean;
};
export type StoreConfig = {
    jobCode?: string;
    storeid?: string;
    storeAlias?: string;
    storeFileRegex?: string;
    storeFileName?: string;
    processConfig?: ProcessConfig;
    properties?: any;
};
export type StoreFilter = {
    includeTags?: Array<string>;
    excludeTags?: Array<string>;
    query?: any;
};
export type TaskConfig = {
    name?: string;
    taskConfigId?: number;
    taskParams?: Array<TaskParam>;
};
export type TaskParam = {
    name?: string;
    value?: any;
};
export type TaskStepConfig = {
    taskConfigs?: Array<TaskConfig>;
    taskConfigIds?: Array<number>;
    taskConfigGroupIds?: Array<number>;
};
export type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    traceId?: string;
    page?: Page;
};
export type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    traceId?: string;
    page?: Page;
};
export type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modifiedBy?: string;
    createdBy?: string;
    modifiedOn?: string;
    createdOn?: string;
    active?: boolean;
    type?: string;
};
export type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    traceId?: string;
    page?: Page;
};
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */
/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */
/**
        @typedef Filter
        
        
        @property { Priority } priorities
        
        @property { Category } [categories]
        
        @property { Status } statuses
        
        @property { Array<Object> } assignees
        
         
    */
/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */
/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */
/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */
/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */
/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
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
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */
/**
        @typedef Email
        
        
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
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */
/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */
/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */
/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */
/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */
/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Category
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { Category } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
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
        @typedef GetSearchWordsData
        
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Object } [result]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { string } sortOn
        
        @property { Object } query
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { SearchKeywordResult } result
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { Object } [params]
        
        @property { string } type
        
        @property { string } [url]
        
        @property { Object } query
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } minQuantity
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [autoAddToCart]
        
        @property { number } productUid
        
        @property { number } maxQuantity
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [meta]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } name
        
        @property { string } choice
        
        @property { number } [companyId]
        
        @property { string } [logo]
        
        @property { string } slug
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [meta]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [modifiedBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } [logo]
        
        @property { string } slug
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { string } [currency]
        
        @property { number } [maxEffective]
        
        @property { number } [minEffective]
        
         
    */
/**
        @typedef Size
        
        
        @property { boolean } [isAvailable]
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { string } [value]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [images]
        
        @property { Object } [attributes]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [price]
        
        @property { string } [itemCode]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { number } [quantity]
        
        @property { number } [uid]
        
        @property { Array<string> } [sizes]
        
        @property { Object } [identifier]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { number } [minQuantity]
        
        @property { boolean } [allowRemove]
        
        @property { Price } [price]
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [autoAddToCart]
        
        @property { Array<Size> } [sizes]
        
        @property { number } [productUid]
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [maxQuantity]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { boolean } [isActive]
        
        @property { Array<GetProducts> } [products]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { string } [choice]
        
        @property { string } [logo]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { boolean } isActive
        
        @property { Array<ProductBundleItem> } products
        
        @property { Object } [meta]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { Object } [modifiedBy]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } [logo]
        
        @property { string } slug
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { Object } [createdBy]
        
        @property { string } [tag]
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } title
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { Guide } [guide]
        
        @property { string } [subtitle]
        
        @property { boolean } [active]
        
        @property { string } [image]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { string } [title]
        
        @property { Object } [guide]
        
        @property { string } [subtitle]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filterTypes]
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
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
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { boolean } isActive
        
        @property { string } key
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { boolean } isActive
        
        @property { string } key
        
        @property { ProductSize } size
        
        @property { string } name
        
        @property { number } priority
        
        @property { string } [logo]
        
        @property { string } displayType
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [sort]
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [condition]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { boolean } isActive
        
        @property { string } key
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } type
        
        @property { string } [name]
        
        @property { number } priority
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { boolean } isActive
        
        @property { string } key
        
        @property { string } [name]
        
        @property { number } priority
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } [id]
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { number } [min]
        
        @property { string } [queryFormat]
        
        @property { string } [currencyCode]
        
        @property { string } display
        
        @property { number } [max]
        
        @property { string } [displayFormat]
        
        @property { boolean } isSelected
        
        @property { number } [count]
        
        @property { number } [selectedMin]
        
        @property { number } [selectedMax]
        
        @property { string } [currencySymbol]
        
        @property { string } value
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { string } display
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
        @property { string } [value]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { string } [display]
        
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
        
        
        @property { string } [type]
        
        @property { string } url
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { boolean } [isActive]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { Array<string> } [tag]
        
        @property { Object } [cron]
        
        @property { ProductListingAction } [action]
        
        @property { string } [uid]
        
        @property { Object } [schedule]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { Media1 } [logo]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { ImageUrls } [banners]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { string } [start]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [color]
        
        @property { string } [text]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { boolean } [isActive]
        
        @property { string } type
        
        @property { Array<string> } [tags]
        
        @property { string } name
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { Schedule } [schedule]
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { SeoDetail } [seo]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { CollectionBadge } [badge]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [createdBy]
        
        @property { string } appId
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } [sortOn]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [published]
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { CollectionBanner } banners
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { BannerImage } [logo]
        
        @property { Object } [schedule]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { Object } [meta]
        
        @property { string } [description]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { boolean } [allowFacets]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { ImageUrls } [banners]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { boolean } [hasVariant]
        
        @property { Object } [promoMeta]
        
        @property { Object } [attributes]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [type]
        
        @property { string } [productOnlineDate]
        
        @property { string } [itemType]
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { Array<string> } [highlights]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [rating]
        
        @property { number } [uid]
        
        @property { string } [description]
        
        @property { boolean } [sellable]
        
        @property { string } [color]
        
        @property { Object } [teaserTag]
        
        @property { ProductListingPrice } [price]
        
        @property { number } [ratingCount]
        
        @property { Array<string> } [similars]
        
        @property { string } slug
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Page } [page]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
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
        @typedef CatalogInsightBrand
        
        
        @property { number } [availableArticles]
        
        @property { number } [totalArticles]
        
        @property { string } [name]
        
        @property { number } [availableSizes]
        
        @property { number } [totalSizes]
        
        @property { number } [articleFreshness]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [outOfStockCount]
        
        @property { number } [count]
        
        @property { number } [sellableCount]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { string } optLevel
        
        @property { Array<number> } [storeIds]
        
        @property { Array<number> } [brandIds]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { Object } [createdBy]
        
        @property { number } createdOn
        
        @property { Array<number> } brandIds
        
        @property { number } modifiedOn
        
        @property { string } optLevel
        
        @property { boolean } enabled
        
        @property { string } platform
        
        @property { Object } [modifiedBy]
        
        @property { Array<number> } storeIds
        
        @property { number } companyId
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [name]
        
        @property { string } [businessType]
        
        @property { string } [companyType]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { string } [brandName]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { number } [totalArticle]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { string } [company]
        
        @property { number } [store]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { string } [createdOn]
        
        @property { string } [storeCode]
        
        @property { string } [modifiedOn]
        
        @property { Array<Object> } [documents]
        
        @property { Object } [timing]
        
        @property { string } [storeType]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { string } [displayName]
        
         
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
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
         
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
        
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { string } [message]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { boolean } [isActive]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { number } [priorityOrder]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [itemType]
        
        @property { string } [name]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { number } [uid]
        
        @property { string } [logo]
        
        @property { string } [slug]
        
        @property { string } [search]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [errors]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { Array<string> } [departments]
        
        @property { boolean } [isActive]
        
        @property { string } [tag]
        
        @property { Array<string> } [attributes]
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
        @property { boolean } [isArchived]
        
        @property { boolean } isPhysical
        
        @property { string } [logo]
        
        @property { string } slug
        
         
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
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } landscape
        
        @property { string } portrait
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } department
        
        @property { number } l1
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<number> } departments
        
        @property { boolean } isActive
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<string> } [synonyms]
        
        @property { number } level
        
        @property { Media2 } [media]
        
        @property { Array<string> } [tryouts]
        
        @property { string } name
        
        @property { number } [priority]
        
        @property { string } [slug]
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef PageData
        
        
        @property { boolean } [hasPrevious]
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
        @property { number } [aspectRatioF]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [primaryMaterial]
        
        @property { string } [modifiedOn]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [neckType]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { string } [imageNature]
        
        @property { string } [productFit]
        
        @property { string } [sleeveLength]
        
        @property { string } [verifiedOn]
        
        @property { string } [essential]
        
        @property { string } [primaryColor]
        
        @property { string } [material]
        
        @property { string } [color]
        
        @property { string } [pattern]
        
        @property { string } [metaNature]
        
        @property { UserCommon } [createdBy]
        
        @property { UserCommon } [modifiedBy]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { Array<string> } [l3Mapping]
        
        @property { Array<string> } [gender]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef Product
        
        
        @property { boolean } [isActive]
        
        @property { Brand } [brand]
        
        @property { Attributes } [attributes]
        
        @property { Array<string> } [media]
        
        @property { string } [itemType]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [highlights]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [categorySlug]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [multiSize]
        
        @property { number } [uid]
        
        @property { string } [templateTag]
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [images]
        
        @property { string } [description]
        
        @property { string } [hsnCode]
        
        @property { string } [itemCode]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [isSet]
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { string } [sizeGuide]
        
        @property { string } [slug]
        
        @property { boolean } [isDependent]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { string } [unit]
        
        @property { number } [time]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { boolean } [isActive]
        
        @property { Object } [variants]
        
        @property { Array<Media1> } [media]
        
        @property { string } itemType
        
        @property { Array<string> } [tags]
        
        @property { Trader } [trader]
        
        @property { string } name
        
        @property { OrderQuantity } [moq]
        
        @property { number } companyId
        
        @property { string } [shortDescription]
        
        @property { Array<string> } [highlights]
        
        @property { boolean } [isImageLessProduct]
        
        @property { ProductPublish } [productPublish]
        
        @property { Object } [customJson]
        
        @property { string } categorySlug
        
        @property { ReturnConfig } [returnConfig]
        
        @property { boolean } [multiSize]
        
        @property { number } [uid]
        
        @property { string } [requester]
        
        @property { string } templateTag
        
        @property { string } countryOfOrigin
        
        @property { number } [noOfBoxes]
        
        @property { string } [traderType]
        
        @property { string } [description]
        
        @property { string } hsnCode
        
        @property { string } [changeRequestId]
        
        @property { string } itemCode
        
        @property { Array<number> } departments
        
        @property { TeaserTag } [teaserTag]
        
        @property { boolean } [isSet]
        
        @property { CustomOrder } [customOrder]
        
        @property { Array<string> } [productGroupTag]
        
        @property { number } brandUid
        
        @property { string } currency
        
        @property { string } [sizeGuide]
        
        @property { string } slug
        
        @property { boolean } [isDependent]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { string } [stage]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [cancelled]
        
        @property { string } [modifiedOn]
        
        @property { number } [failed]
        
        @property { number } [total]
        
        @property { UserDetail } [modifiedBy]
        
        @property { number } [companyId]
        
        @property { ProductTemplate } [template]
        
        @property { number } [succeed]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { boolean } [isActive]
        
        @property { UserInfo1 } [createdBy]
        
        @property { string } createdOn
        
        @property { number } [cancelled]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [stage]
        
        @property { string } [modifiedOn]
        
        @property { number } total
        
        @property { number } [failed]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { string } [trackingUrl]
        
        @property { number } companyId
        
        @property { number } [succeed]
        
        @property { string } [filePath]
        
        @property { string } [customTemplateTag]
        
        @property { string } [templateTag]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { string } batchId
        
        @property { number } companyId
        
        @property { string } templateTag
        
        @property { Array<Object> } data
        
         
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
        @typedef Items
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [stage]
        
        @property { boolean } [isActive]
        
        @property { number } [cancelled]
        
        @property { string } [modifiedOn]
        
        @property { number } [failed]
        
        @property { number } [total]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [id]
        
        @property { string } [trackingUrl]
        
        @property { number } [companyId]
        
        @property { number } [retry]
        
        @property { number } [succeed]
        
        @property { string } [filePath]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { string } url
        
        @property { number } [companyId]
        
        @property { Object } user
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } [total]
        
        @property { string } [size]
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
         
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
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { string } gtinValue
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { number } priceEffective
        
        @property { string } storeCode
        
        @property { number } [itemLength]
        
        @property { boolean } [isSet]
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [priceTransfer]
        
        @property { string } size
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<GTIN> } identifiers
        
        @property { number } quantity
        
        @property { string } currency
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWidth]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [itemCode]
        
        @property { number } [brandUid]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { Array<InvSize> } sizes
        
        @property { number } companyId
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { string } [startDate]
        
        @property { number } [pageSize]
        
        @property { number } [pageNo]
        
        @property { string } [endDate]
        
        @property { string } [customTemplateTag]
        
        @property { string } [templateTag]
        
        @property { string } [search]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { number } priceEffective
        
        @property { string } sellerIdentifier
        
        @property { string } storeCode
        
        @property { number } [itemLength]
        
        @property { boolean } [isSet]
        
        @property { InventorySet } [set]
        
        @property { number } price
        
        @property { number } [priceTransfer]
        
        @property { string } [size]
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { Array<Object> } [identifiers]
        
        @property { number } quantity
        
        @property { string } currency
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWidth]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Array<Size1> } sizes
        
        @property { number } companyId
        
        @property { Object } [user]
        
        @property { string } batchId
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { Object } [requestParams]
        
        @property { number } sellerId
        
        @property { string } [url]
        
        @property { string } [status]
        
        @property { string } taskId
        
        @property { string } [completedOn]
        
        @property { string } [triggerOn]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
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
        @typedef Document
        
        
        @property { string } legalName
        
        @property { string } type
        
        @property { string } [url]
        
        @property { boolean } [verified]
        
        @property { string } value
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<PhoneNumber> } [phone]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } [stage]
        
        @property { number } uid
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [businessInfo]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { string } [name]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { Array<Document> } [documents]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [createdBy]
        
        @property { boolean } [franchiseEnabled]
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } companyType
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { string } businessType
        
        @property { Object } [warnings]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } [landmark]
        
        @property { number } pincode
        
        @property { string } country
        
        @property { string } address1
        
        @property { number } latitude
        
        @property { string } [countryCode]
        
        @property { string } state
        
        @property { string } [address2]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { Document } document
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { CompanyAddress } address
        
        @property { string } [businessInfo]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } businessType
        
        @property { ReferralInfo } [referralInfo]
        
        @property { Object } [warnings]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { string } [stage]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [store]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [slugKey]
        
        @property { string } [verifiedOn]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { Object } [warnings]
        
        @property { string } [rejectReason]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { string } [brandTier]
        
        @property { number } [companyId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { string } logo
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { boolean } open
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [email]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { string } [storeType]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [warnings]
        
        @property { number } company
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } name
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<Document> } [documents]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [notificationEmails]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } displayName
        
        @property { string } code
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [businessType]
        
        @property { string } [rejectReason]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { string } [storeType]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { GetAddressSerializer } address
        
        @property { Object } [customJson]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { string } [verifiedOn]
        
        @property { GetCompanySerializer } [company]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } name
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Array<Document> } [documents]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } displayName
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } code
        
        @property { string } phoneNumber
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [warnings]
        
         
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
/**
        @typedef DataTresholdDTO
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */
/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */
/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */
/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */
/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
    */
/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
    */
/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */
/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */
/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */
/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */
/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */
/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */
/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
    */
/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */
/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */
/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
export class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
export class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): any;
}
export class Catalog {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: List all Product Bundles
      * @description: Get all product bundles for a particular company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - A search string that is searched with product bundle name.
      
      **/
    getProductBundle({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     * @param {Object} arg - arg object.
     * @param {ProductBundleRequest} arg.body
     **/
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): any;
    /**
      *
      * @summary: Get a particular Product Bundle details
      * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getProductBundleDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     **/
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): any;
    /**
      *
      * @summary: Get list of size guides
      * @description: This API allows to view all the size guides associated to the seller.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.tag] - to filter size guide on basis of tag.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     * @param {Object} arg - arg object.
     * @param {ValidateSizeGuide} arg.body
     **/
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get a single size guide.
      * @description: This API helps to get data associated to a size guide.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Id of the size guide to be viewed.
      
      **/
    getSizeGuide({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     **/
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory that are being cross-selled.
      * @description: Analytics data of catalog and inventory that are being cross-selled.
      * @param {Object} arg - arg object.
      * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
      
      **/
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): any;
    /**
     *
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     * @param {Object} arg - arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     **/
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): any;
    /**
      *
      * @summary: Get opt-in infomation.
      * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
      * @param {Object} arg - arg object.
      
      **/
    getMarketplaceOptinDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company details.
      * @description: Get the details of the company associated with the given company_id passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company Brand details of Optin.
      * @description: Get the details of the Brands associated with the given company_id passed.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.isActive] - The is_active status for the optin id.
      * @param {boolean} [arg.q] - The search value to filter the list.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
      
      **/
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): any;
    /**
      *
      * @summary: Get the Company metrics
      * @description: Get the Company metrics associated with the company ID passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get the Store details.
      * @description: Get the details of the store associated with the company ID passed.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search related the store for the company id.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      
      **/
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List Department specifiec product categories
      * @description: Allows you to list all product categories values for the departments specified
      * @param {Object} arg - arg object.
      * @param {string} arg.department - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
      * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
      
      **/
    listProductTemplateCategories({ department, itemType }?: {
        department: string;
        itemType: string;
    }): any;
    /**
      *
      * @summary: List all Departments
      * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
      * @param {Object} arg - arg object.
      
      **/
    listDepartmentData({}?: any): any;
    /**
      *
      * @summary: Get specific departments details by passing in unique id of the department
      * @description: Allows you to get department data, by uid
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - A `uid` is a unique identifier of a department.
      
      **/
    getDepertmantsData({ uid }?: {
        uid: string;
    }): any;
    /**
      *
      * @summary: List all Templates
      * @description: Allows you to list all product templates, also can filter by department
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `departments` is the name of a particular department.
      
      **/
    listProductTemplate({ departments }?: {
        departments: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    validateProductTemplate({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item.
      
      **/
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
      
      **/
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: List HSN Codes
      * @description: Allows you to list all hsn Codes
      * @param {Object} arg - arg object.
      
      **/
    listHSNCodes({}?: any): any;
    /**
      *
      * @summary: Allows you to list all product templates export list details
      * @description: Can vies details including trigger data, task id , etc.
      * @param {Object} arg - arg object.
      
      **/
    listProductTemplateExportDetails({}?: any): any;
    /**
      *
      * @summary: Allows you to list all values for Templates, Brands or Type
      * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
      * @param {Object} arg - arg object.
      * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
      
      **/
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): any;
    /**
      *
      * @summary: Get product categories list
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} [arg.level] - Get category for multiple levels
      * @param {string} [arg.q] - Get multiple categories filtered by search string
      
      **/
    listCategories({ level, q }?: {
        level?: string;
        q?: string;
    }): any;
    /**
     *
     * @summary: Create product categories
     * @description: This API lets user create product categories
     * @param {Object} arg - arg object.
     * @param {CategoryRequestBody} arg.body
     **/
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product category by uid
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - Category unique id
      
      **/
    getCategoryData({ uid }?: {
        uid: string;
    }): any;
    /**
     *
     * @summary: Update product categories
     * @description: Update a product category using this apu
     * @param {Object} arg - arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     **/
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product list
      * @description: This API gets meta associated to products.
      * @param {Object} arg - arg object.
      * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
      * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
      * @param {string} [arg.search] - Get multiple products filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getProducts({ brandIds, categoryIds, search, pageNo, pageSize }?: {
        brandIds?: number;
        categoryIds?: number;
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a product.
     * @description: This API allows to create product.
     * @param {Object} arg - arg object.
     * @param {ProductCreateUpdate} arg.body
     **/
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Get a single product.
      * @description: This API helps to get data associated to a particular product.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product.
      * @param {number} arg.itemId - Item Id of the product.
      * @param {number} [arg.brandUid] - Brand Id of the product.
      * @param {number} [arg.uid] - Id of the product.
      
      **/
    getProduct({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     **/
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Delete a product.
      * @description: This API allows to delete product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product to be updated.
      
      **/
    deleteProduct({ itemId }?: {
        itemId: number;
    }): any;
    /**
      *
      * @summary: Validate product/size data
      * @description: This API validates product data.
      * @param {Object} arg - arg object.
      
      **/
    getProductValidation({}?: any): any;
    /**
      *
      * @summary: Get a single product size.
      * @description: This API helps to get data associated to a particular product size.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product size.
      * @param {number} arg.itemId - Item Id of the product size.
      * @param {number} [arg.brandUid] - Brand Id of the product size.
      * @param {number} [arg.uid] - Id of the product size.
      
      **/
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk product upload jobs.
      * @description: This API helps to get bulk product upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    updateProductAssetsInBulk({ body }?: {
        body: BulkJob;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     **/
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): any;
    /**
      *
      * @summary: Delete Bulk product job.
      * @description: This API allows to delete bulk product job associated with company.
      * @param {Object} arg - arg object.
      * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
      
      **/
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): any;
    /**
      *
      * @summary: Get a list of all tags associated with company.
      * @description: This API helps to get tags data associated to a particular copmpany.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyTags({}?: any): any;
    /**
      *
      * @summary: Get a list of all bulk asset jobs.
      * @description: This API helps to get bulk asset jobs data associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {ProductBulkAssets} arg.body
     **/
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): any;
    /**
      *
      * @summary: Delete a Size associated with product.
      * @description: This API allows to delete size associated with product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
      * @param {number} arg.size - size to be deleted.
      
      **/
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): any;
    /**
      *
      * @summary: Get Inventory for company
      * @description: This API allows get Inventory data for particular company grouped by size and store.
      * @param {Object} arg - arg object.
      * @param {string} arg.itemId - Item code of the product of which size is to be get.
      * @param {string} arg.size - Size of which inventory is to get.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventory({ itemId, size, pageNo, pageSize }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest1} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest1;
    }): any;
    /**
      *
      * @summary: Delete a Inventory.
      * @description: This API allows to delete inventory of a particular product for particular company.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
      * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
      
      **/
    deleteInventory({ itemId, locationId }?: {
        itemId: number;
        locationId: number;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk Inventory upload jobs.
      * @description: This API helps to get bulk Inventory upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {InventoryBulkRequest} arg.body
     **/
    createBulkInventory({ body }?: {
        body: InventoryBulkRequest;
    }): any;
    /**
      *
      * @summary: Delete Bulk Inventory job.
      * @description: This API allows to delete bulk Inventory job associated with company.
      * @param {Object} arg - arg object.
      
      **/
    deleteBulkInventoryJob({}?: any): any;
    /**
      *
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
    /**
     *
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     * @param {Object} arg - arg object.
     * @param {InventoryExportRequest} arg.body
     **/
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): any;
    /**
      *
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
}
export class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
    /**
     *
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     * @param {Object} arg - arg object.
     * @param {CompanyStoreSerializerRequest} arg.body
     **/
    updateCompany({ body }?: {
        body: CompanyStoreSerializerRequest;
    }): any;
    /**
      *
      * @summary: Get company metrics
      * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get a single brand.
      * @description: This API helps to get data associated to a particular brand.
      * @param {Object} arg - arg object.
      * @param {string} arg.brandId - Id of the brand to be viewed.
      
      **/
    getBrand({ brandId }?: {
        brandId: string;
    }): any;
    /**
     *
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     * @param {Object} arg - arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
     *
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
     *
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     * @param {Object} arg - arg object.
     * @param {CompanyBrandPostRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CompanyBrandPostRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      
      **/
    getBrands({}?: any): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a location asscoiated to a company.
     * @description: This API allows to create a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {LocationSerializer} arg.body
     **/
    createLocation({ body }?: {
        body: LocationSerializer;
    }): any;
    /**
      *
      * @summary: Get details of a specific location.
      * @description: This API helps to get data associated to a specific location.
      * @param {Object} arg - arg object.
      * @param {string} arg.locationId - Id of the location which you want to view.
      
      **/
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): any;
    /**
     *
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     **/
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): any;
}
export class Assets {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    companyCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowse({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    companyBrowsePaginator({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
export class Inventory {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get Job Configs For A Company
      * @description: REST Endpoint that returns all job configs for a company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    updateJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
     *
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    createJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
      *
      * @summary: Get Job Configs By Company And Integration
      * @description: REST Endpoint that returns all job configs by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get Job Configs Defaults
      * @description: REST Endpoint that returns default fields job configs by company And integration
      * @param {Object} arg - arg object.
      
      **/
    getJobConfigDefaults({}?: any): any;
    /**
      *
      * @summary: Get Job Config By Code
      * @description: REST Endpoint that returns job config by code
      * @param {Object} arg - arg object.
      * @param {string} arg.code - Job Code
      
      **/
    getJobByCode({ code }?: {
        code: string;
    }): any;
    /**
      *
      * @summary: Get Job Codes By Company And Integration
      * @description: REST Endpoint that returns all job codes by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
}
