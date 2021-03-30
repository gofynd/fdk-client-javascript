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
    value?: any;
    type?: string;
};
export type CustomFormSubmissionPayload = {
    response: Array<any>;
};
export type GetTokenForVideoRoomResponse = {
    accessToken: string;
};
export type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
export type Participant = {
    firstName?: string;
    lastName?: string;
    phone?: Phone;
};
export type Phone = {
    phoneNumber: string;
    countryCode: string;
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
    updatedAt?: string;
    createdAt?: string;
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
export type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
export type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
export type AddThemeRequestSchema = {
    themeId?: string;
};
export type UpgradableThemeSchema = {
    parentTheme?: string;
    appliedTheme?: string;
    upgrade?: boolean;
};
export type FontsSchema = {
    items?: Array<any>;
    kind?: string;
};
export type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
    version?: string;
    parentThemeVersion?: string;
    parentTheme?: string;
    information?: any;
    tags?: Array<string>;
    src?: any;
    assets?: any;
    availablePages?: Array<any>;
    pages?: any;
    availableSections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: any;
    settings?: any;
    font?: any;
    id?: string;
    v?: number;
    colors?: any;
};
export type pagesSchema = {
    text?: string;
    path?: string;
    type?: string;
    value?: string;
    sections?: Array<any>;
};
export type availableSectionSchema = {
    blocks?: Array<any>;
    name?: string;
    label?: string;
    props?: Array<any>;
};
export type sectionSchema = {
    pageKey?: string;
    pageSections?: Array<any>;
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
    phone?: any;
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
    oauth2?: any;
    profile?: any;
};
export type AuthSuccess = {
    registerToken?: string;
    userExists?: boolean;
    user?: any;
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
export type PlatformSchema = {
    display?: string;
    lookAndFeel?: any;
    updatedAt?: string;
    active?: boolean;
    forgotPassword?: boolean;
    login?: any;
    skipCaptcha?: boolean;
    name?: string;
    meta?: any;
    id?: string;
    social?: any;
    requiredFields?: any;
    registerRequiredFields?: any;
    skipLogin?: boolean;
    flashCard?: any;
    subtext?: string;
    socialTokens?: any;
    createdAt?: string;
    register?: boolean;
};
export type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: Array<any>;
    emails?: Array<any>;
    gender?: string;
    active?: boolean;
    profilePicUrl?: string;
    username?: string;
    accountType?: string;
    uid?: string;
    debug?: any;
    hasOldPasswordHash?: boolean;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};
export type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    faq?: Array<any>;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    v?: number;
};
export type Seo = {
    app: string;
    robotsTxt?: string;
    sitemapEnabled?: boolean;
    customMetaTags?: Array<any>;
    details?: any;
};
export type StorefrontAnnouncement = {
    announcements?: any;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
export type AdminAnnouncementSchema = {
    id?: string;
    platform?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<any>;
    editorMeta?: any;
    author?: any;
    createdAt?: string;
    app?: string;
    modifiedAt?: string;
    schedule?: any;
};
export type ScheduleSchema = {
    schedule?: any;
    published?: boolean;
};
export type BlogGetResponse = {
    items?: Array<any>;
    page?: any;
};
export type ResourceContent = {
    type?: string;
    value?: string;
};
export type Asset = {
    secureUrl?: string;
};
export type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
export type BlogSchema = {
    id?: Array<any>;
    schedule?: string;
    application?: string;
    archived?: boolean;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    dateMeta?: any;
};
export type BlogRequest = {
    schedule?: string;
    application?: string;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
};
export type GetAnnouncementListSchema = {
    items?: Array<AdminAnnouncementSchema>;
};
export type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
export type FaqSchema = {
    slug?: string;
    application?: string;
    v?: number;
    id?: string;
    question?: string;
    answer?: string;
};
export type CreateFaqResponseSchema = {
    faq?: any;
};
export type CreateFaqSchema = {
    faq?: any;
};
export type GetFaqSchema = {
    faqs?: Array<any>;
};
export type UpdateFaqCategoryRequestSchema = {
    category?: any;
};
export type CreateFaqCategoryRequestSchema = {
    category?: any;
};
export type CreateFaqCategorySchema = {
    category?: any;
};
export type GetFaqCategoriesSchema = {
    categories?: Array<any>;
};
export type GetFaqCategoryByIdOrSlugSchema = {
    category?: any;
};
export type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    createdBy?: any;
    dateMeta?: any;
    id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationRef;
};
export type NavigationRef = {
    acl?: Array<any>;
    localeLanguage?: any;
    image?: string;
    type?: string;
    action?: any;
    active?: boolean;
    display?: string;
    sortOrder?: number;
    subNavigation?: any;
};
export type LandingPage = {
    slug?: string;
    action?: any;
    platform?: Array<any>;
    createdBy?: any;
    dateMeta?: any;
    id?: string;
    application?: string;
};
export type Slideshow = {
    id?: string;
    slug?: string;
    dateMeta?: any;
    application?: string;
    name?: string;
    platform?: string;
    configuration?: any;
    media?: Array<any>;
    active?: boolean;
};
export type AnnouncementsResponseSchema = {
    announcements?: Array<any>;
};
export type FaqResponseSchema = {
    faqs?: Array<Faq>;
};
export type UpdateHandpickedSchema = {
    tag?: any;
};
export type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
export type TagsSchema = {
    id?: string;
    tags?: Array<any>;
    application?: string;
    v?: number;
};
export type CreateTagRequestSchema = {
    tags?: Array<any>;
};
export type APIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    requestId?: string;
    stackTrace?: string;
    meta?: any;
};
export type Faq = {
    id?: string;
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    v?: number;
};
export type LandingPageGetResponse = {
    items?: Array<any>;
    page?: any;
};
export type LandingPageSchema = {
    slug?: string;
    action?: any;
    platform?: Array<string>;
    createdBy?: any;
    dateMeta?: any;
    id?: string;
    application?: string;
    archived?: boolean;
};
export type LandingPageRequest = {
    slug?: string;
    action?: any;
    platform?: Array<string>;
};
export type DefaultNavigationResponse = {
    items?: Array<any>;
};
export type NavigationGetResponse = {
    items?: Array<any>;
    page?: any;
};
export type NavigationSchema = {
    id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: any;
    navigation?: any;
};
export type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: any;
    navigation?: any;
};
export type CustomPage = {
    data?: any;
};
export type CustomBlog = {
    data?: any;
};
export type PageGetResponse = {
    items?: Array<any>;
    page?: any;
};
export type PageSpec = {
    specifications?: Array<any>;
};
export type PageSpecItem = {
    pageType?: string;
    displayName?: string;
    params?: Array<string>;
    query?: Array<string>;
};
export type PageSchema = {
    id?: Array<any>;
    schedule?: string;
    application?: Array<any>;
    componentIds?: Array<string>;
    content?: Array<PageContent>;
    createdBy?: any;
    dateMeta?: any;
    description?: string;
    featureImage?: any;
    pageMeta?: Array<PageMeta>;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    type?: string;
    visibility?: any;
};
export type CreatedBy = {
    id?: string;
};
export type DateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
export type PageContent = {
    type?: string;
    value?: any;
};
export type PageMeta = {
    key?: string;
    value?: any;
};
export type PageRequest = {
    schedule?: string;
    application?: string;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
};
export type PagePublishRequest = {
    publish?: boolean;
};
export type PageMetaSchema = {
    systemPages?: Array<any>;
    customPages?: Array<any>;
    applicationId?: string;
};
export type SlideshowGetResponse = {
    items?: Array<any>;
    page?: any;
};
export type SlideshowSchema = {
    id?: string;
    slug?: string;
    dateMeta?: any;
    application?: string;
    platform?: string;
    configuration?: any;
    media?: Array<any>;
    active?: boolean;
    archived?: boolean;
};
export type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: any;
    media?: Array<any>;
    active?: boolean;
};
export type Support = {
    created?: boolean;
    id?: string;
    configType?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    contact?: any;
};
export type UnauthenticatedUser = {
    message?: string;
};
export type UnauthenticatedApplication = {
    message?: string;
};
export type BadRequest = {
    message?: string;
};
export type ResourceNotFound = {
    message?: string;
};
export type InternalServerError = {
    message?: string;
    code?: string;
};
export type Plan = {
    recurring?: any;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
export type DetailedPlan = {
    recurring?: any;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
    components?: Array<any>;
};
export type Invoice = {
    invoice?: any;
    invoiceItems?: Array<any>;
};
export type Invoices = {
    data?: Array<any>;
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
export type BillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
};
export type SubscriptionCustomer = {
    phone?: Phone;
    billingAddress?: BillingAddress;
    id?: string;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    modifiedAt?: string;
    data?: any;
};
export type SubscriptionCustomerCreate = {
    phone?: Phone;
    billingAddress?: BillingAddress;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
};
export type Subscription = {
    currentPeriod?: any;
    pauseCollection?: any;
    trial?: any;
    invoiceSettings?: any;
    isActive?: boolean;
    cancelAtPeriodEnd?: boolean;
    id?: string;
    subscriberId?: string;
    planId?: string;
    productSuiteId?: string;
    planData?: Plan;
    currentStatus?: string;
    collectionMethod?: string;
    createdAt?: string;
    modifiedAt?: string;
    latestInvoice?: string;
};
export type SubscriptionStatus = {
    isEnabled?: boolean;
    subscription?: Subscription;
};
export type SubscriptionLimit = {
    application?: any;
    marketplace?: any;
    otherPlatform?: any;
    team?: any;
    products?: any;
    extensions?: any;
    integrations?: any;
    isTrialPlan?: boolean;
};
export type SubscriptionActivateReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    planId?: string;
    paymentMethod?: string;
};
export type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
export type CancelSubscriptionReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    subscriptionId?: string;
};
export type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
export type GetStats = {
    items?: Array<any>;
};
export type CampaignReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
export type Campaign = {
    recipientHeaders?: any;
    email?: any;
    description?: string;
    tags?: Array<any>;
    isActive?: boolean;
    id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type Campaigns = {
    items?: Array<Campaign>;
    page?: any;
};
export type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
export type BigqueryHeadersRes = {
    headers?: Array<any>;
};
export type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
export type GetNRecordsCsvRes = {
    items?: Array<any>;
};
export type AudienceReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
export type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    id?: string;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type Audiences = {
    items?: Array<Audience>;
    page?: any;
};
export type EmailProviderReq = {
    name?: string;
    description?: string;
    apiKey?: string;
    type?: string;
    provider?: string;
    from?: Array<any>;
};
export type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<any>;
    id?: string;
    name?: string;
    description?: string;
    apiKey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type EmailProviders = {
    items?: Array<EmailProvider>;
    page?: any;
};
export type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
export type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
export type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: any;
    from?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    replyTo?: string;
    headers?: Array<any>;
    subject?: any;
    html?: any;
    text?: any;
    attachments?: Array<any>;
    priority?: string;
};
export type EmailTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    keys?: any;
    from?: string;
    replyTo?: string;
    headers?: Array<any>;
    subject?: any;
    html?: any;
    text?: any;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type EmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: any;
    html?: any;
    text?: any;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type SystemEmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: any;
    html?: any;
    text?: any;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type EmailTemplates = {
    items?: Array<EmailTemplate>;
    page?: any;
};
export type SystemEmailTemplates = {
    items?: Array<SystemEmailTemplate>;
    page?: any;
};
export type EventSubscriptions = {
    items?: Array<any>;
    page?: any;
};
export type TriggerJobResponse = {
    status?: number;
};
export type TriggerJobRequest = {
    jobId?: string;
};
export type Jobs = {
    items?: Array<any>;
    page?: any;
};
export type JobLogs = {
    items?: Array<any>;
    page?: any;
};
export type Log = {
    email?: any;
    pushnotification?: any;
    meta?: any;
    id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expireAt?: string;
    createdAt?: string;
};
export type Logs = {
    docs?: Array<Log>;
};
export type PushtokenReq = {
    action?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
};
export type PushtokenRes = {
    id?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
    type?: string;
    platform?: string;
    applicationId?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    expiredAt?: string;
};
export type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
export type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type SmsProviders = {
    items?: Array<SmsProvider>;
    page?: any;
};
export type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
export type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
export type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: any;
    templateVariables?: any;
    attachments?: Array<any>;
    priority?: string;
};
export type SmsTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    message?: any;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
export type SmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: any;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type SystemSmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: any;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type SmsTemplates = {
    items?: Array<SmsTemplate>;
    page?: any;
};
export type SystemSmsTemplates = {
    items?: Array<SystemSmsTemplate>;
    page?: any;
};
export type PaymentGatewayConfigResponse = {
    aggregators?: Array<any>;
    displayFields: Array<string>;
    created: boolean;
    appId: string;
    excludedFields: Array<string>;
    success: boolean;
};
export type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
export type PaymentGatewayConfig = {
    merchantSalt: string;
    secret: string;
    key: string;
    isActive?: boolean;
    configType: string;
};
export type PaymentGatewayConfigRequest = {
    isActive?: boolean;
    appId: string;
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
    success: boolean;
    error: ErrorCodeAndDescription;
};
export type PaymentModeLogo = {
    small: string;
    large: string;
};
export type PaymentModeList = {
    cardNumber?: string;
    cardToken?: string;
    aggregatorName: string;
    nickname?: string;
    cardName?: string;
    displayPriority?: number;
    code?: string;
    fyndVpa?: string;
    displayName?: string;
    cardReference?: string;
    intentFlow?: string;
    cardBrand?: string;
    expired?: boolean;
    merchantCode?: string;
    cardType?: string;
    name?: string;
    cardIsin?: string;
    logoUrl?: PaymentModeLogo;
    cardFingerprint?: string;
    expYear?: number;
    cardId?: string;
    retryCount?: number;
    expMonth?: number;
    timeout?: number;
    intentAppErrorList?: Array<string>;
    cardIssuer?: string;
    cardBrandImage?: string;
};
export type RootPaymentMode = {
    aggregatorName?: string;
    displayPriority: number;
    addCardEnabled?: boolean;
    list?: Array<PaymentModeList>;
    displayName: string;
    anonymousEnable?: boolean;
    name: string;
};
export type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
export type PaymentOptionsResponse = {
    success: boolean;
    paymentOptions: PaymentOptions;
};
export type PayoutsResponse = {
    isDefault: boolean;
    customers: any;
    transferType: string;
    payoutsAggregators: Array<any>;
    moreAttributes: any;
    uniqueTransferNo: any;
    isActive: boolean;
};
export type PayoutRequest = {
    bankDetails: any;
    users: any;
    transferType: string;
    aggregator: string;
    uniqueExternalId: string;
    isActive: boolean;
};
export type PayoutResponse = {
    bankDetails: any;
    users: any;
    transferType: string;
    paymentStatus: string;
    payouts: any;
    created: boolean;
    aggregator: string;
    uniqueTransferNo: string;
    isActive: boolean;
    success: boolean;
};
export type UpdatePayoutResponse = {
    isActive: boolean;
    success: boolean;
    isDefault: boolean;
};
export type UpdatePayoutRequest = {
    isActive: boolean;
    isDefault: boolean;
    uniqueExternalId: string;
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
    success: boolean;
    config: any;
    aggregator: string;
};
export type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
export type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
export type GetActivityStatus = {
    activityHistory: Array<any>;
};
export type FailedOrders = {
    orders: Array<any>;
};
export type OrderListing = {
    items: Array<any>;
    filters: any;
    nextOrderStatus: any;
    page: any;
    appliedFilters: any;
};
export type UpdateOrderReprocessResponse = {
    status: string;
};
export type PlatformOrderTrack = {
    success: boolean;
    requestId: string;
    message: string;
    mobile: string;
    countryCode: string;
    resendTimer: number;
    resendToken: string;
};
export type GetPingResponse = {
    ping: string;
};
export type UpdateShipmentStatusResponse = {
    shipments: any;
    errorShipments?: Array<any>;
};
export type UpdateShipmentStatusBody = {
    shipments: any;
    forceTransition: boolean;
    task: boolean;
};
export type PlatformShipmentTrack = {
    results: Array<any>;
};
export type UpdateProcessShipmenstRequestBody = {
    shipmentIds: Array<string>;
    expectedStatus: string;
};
export type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
export type GetVoiceCallbackResponse = {
    message: string;
};
export type GetClickToCallResponse = {
    message: string;
};
export type ApefaceApiError = {
    message?: string;
};
export type GetAddressSerializer = {
    longitude?: number;
    landmark?: string;
    pincode?: number;
    country?: string;
    city?: string;
    address1?: string;
    address2?: string;
    state?: string;
    latitude?: number;
    countryCode?: string;
    addressType?: string;
};
export type Website = {
    url?: string;
};
export type BusinessDetails = {
    website?: Website;
};
export type Document = {
    type: string;
    verified?: boolean;
    value: string;
    legalName: string;
    url?: string;
};
export type PhoneNumber = {
    countryCode: number;
    number: string;
};
export type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<PhoneNumber>;
};
export type UserSerializer = {
    username?: string;
    contact?: string;
    userId?: string;
};
export type BusinessCountryInfo = {
    country?: string;
    countryCode?: string;
};
export type GetCompanyProfileSerializerResponse = {
    businessInfo?: string;
    verifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    businessType: string;
    name?: string;
    businessDetails?: BusinessDetails;
    companyType: string;
    modifiedOn?: string;
    franchiseEnabled?: boolean;
    documents?: Array<Document>;
    contactDetails?: ContactDetails;
    notificationEmails?: Array<string>;
    createdOn?: string;
    warnings?: any;
    modifiedBy?: UserSerializer;
    createdBy?: UserSerializer;
    verifiedBy?: UserSerializer;
    stage?: string;
    businessCountryInfo?: BusinessCountryInfo;
    uid: number;
};
export type ErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    errors?: any;
    status?: number;
};
export type ReferralInfo = {
    referralCode?: string;
};
export type BusinessCountryInfo1 = {
    country?: string;
    countryCode?: string;
};
export type CompanyAddress = {
    longitude: number;
    landmark?: string;
    pincode: number;
    country: string;
    city: string;
    address1: string;
    address2?: string;
    state: string;
    latitude: number;
    countryCode?: string;
};
export type CompanyStoreSerializerRequest = {
    referralInfo?: ReferralInfo;
    businessInfo?: string;
    businessType: string;
    name: string;
    notificationEmails?: Array<string>;
    businessCountryInfo: BusinessCountryInfo1;
    warnings?: any;
    uid?: number;
    address: CompanyAddress;
    document: Document;
    brands: Array<number>;
    franchiseEnabled?: boolean;
};
export type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
export type DocumentsObj = {
    pending?: number;
    verified?: number;
};
export type MetricsSerializer = {
    brand?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    companyDocuments?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
};
export type UserSerializer1 = {
    username?: string;
    contact?: string;
    userId?: string;
};
export type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
export type GetBrandResponseSerializer = {
    localeLanguage?: any;
    slugKey?: string;
    verifiedOn?: string;
    createdBy?: UserSerializer1;
    rejectReason?: string;
    name: string;
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
    createdOn?: string;
    uid?: number;
    modifiedOn?: string;
    logo?: string;
    warnings?: any;
    customJson?: any;
    modifiedBy?: UserSerializer1;
    verifiedBy?: UserSerializer1;
    description?: string;
    stage?: string;
};
export type CreateUpdateBrandRequestSerializer = {
    companyId?: number;
    localeLanguage?: any;
    name: string;
    synonyms?: Array<string>;
    banner?: BrandBannerSerializer;
    uid?: number;
    logo: string;
    customJson?: any;
    brandTier?: string;
    description?: string;
};
export type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: Array<number>;
};
export type CompanyBrandListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type GetAddressSerializer1 = {
    longitude?: number;
    landmark?: string;
    pincode?: number;
    country?: string;
    city?: string;
    address1?: string;
    address2?: string;
    state?: string;
    latitude?: number;
    countryCode?: string;
    addressType?: string;
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
export type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
export type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
export type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobileNo: PhoneNumber;
};
export type ProductReturnConfigSerializer = {
    onSameStore?: boolean;
    storeUid?: number;
};
export type LocationSerializer = {
    code: string;
    name: string;
    notificationEmails?: Array<string>;
    company: number;
    documents?: Array<Document>;
    uid?: number;
    storeType?: string;
    warnings?: any;
    address: GetAddressSerializer1;
    contactNumbers?: Array<PhoneNumber>;
    gstCredentials?: InvoiceDetailsSerializer;
    timing?: Array<LocationDayWiseSerializer>;
    customJson?: any;
    manager?: LocationManagerSerializer;
    productReturnConfig?: ProductReturnConfigSerializer;
    stage?: string;
    displayName: string;
};
export type LocationListSerializer = {
    page?: any;
    items?: Array<any>;
};
export type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
export type GetCompanySerializer = {
    rejectReason?: string;
    verifiedOn?: string;
    createdBy?: UserSerializer;
    addresses?: Array<GetAddressSerializer>;
    businessType?: string;
    name?: string;
    createdOn?: string;
    uid?: number;
    modifiedOn?: string;
    companyType?: string;
    modifiedBy?: UserSerializer;
    verifiedBy?: UserSerializer;
    stage?: string;
};
export type GetLocationSerializer = {
    integrationType?: LocationIntegrationType;
    verifiedOn?: string;
    name: string;
    modifiedOn?: string;
    gstCredentials?: InvoiceDetailsSerializer;
    contactNumbers?: Array<PhoneNumber>;
    company?: GetCompanySerializer;
    documents?: Array<Document>;
    storeType?: string;
    timing?: Array<LocationDayWiseSerializer>;
    customJson?: any;
    manager?: LocationManagerSerializer;
    displayName: string;
    code: string;
    notificationEmails?: Array<string>;
    createdOn?: string;
    warnings?: any;
    address: GetAddressSerializer;
    modifiedBy?: UserSerializer1;
    createdBy?: UserSerializer1;
    verifiedBy?: UserSerializer1;
    productReturnConfig?: ProductReturnConfigSerializer;
    stage?: string;
    uid?: number;
    phoneNumber: string;
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
export type RedirectDevice = {
    link: string;
    type: string;
};
export type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: any;
    forceWeb?: boolean;
};
export type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: string;
    type?: string;
    expireAt?: string;
    enableTracking?: boolean;
    redirects?: Redirects;
};
export type ShortLinkRes = {
    title?: string;
    url?: any;
    createdBy?: string;
    personalized?: string;
    appRedirect?: string;
    fallback?: string;
    active?: boolean;
    id?: string;
    enableTracking?: boolean;
    expireAt?: boolean;
    application?: string;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    redirects?: Redirects;
};
export type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    size?: number;
    itemTotal?: number;
    current?: number;
    hasNext?: string;
    type?: string;
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
export type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    articleAssignment?: ArticleAssignmentConfig;
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    commsEnabled?: boolean;
    platforms?: Array<string>;
    id?: string;
    loyaltyPoints?: LoyaltyPoints;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    modifiedBy?: string;
};
export type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    outOfStock?: boolean;
    franchiseEnabled?: boolean;
    excludeCategory?: Array<any>;
    image?: Array<string>;
    companyStore?: Array<any>;
};
export type InventoryBrand = {
    criteria?: string;
    brands?: Array<any>;
};
export type InventoryStore = {
    criteria?: string;
    stores?: Array<any>;
    rules?: AppStoreRules;
};
export type AppStoreRules = {
    companies?: Array<number>;
    brands?: Array<any>;
};
export type InventoryCategory = {
    criteria?: string;
    categories?: Array<any>;
};
export type InventoryPrice = {
    min?: number;
    max?: number;
};
export type InventoryDiscount = {
    min?: number;
    max?: number;
};
export type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
export type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    postOrderReassignment?: boolean;
    enforcedStores?: Array<any>;
};
export type ArticleAssignmentRules = {
    storePriority?: StorePriority;
};
export type StorePriority = {
    enabled?: boolean;
    storetypeOrder?: Array<any>;
};
export type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
export type Credit = {
    enabled?: boolean;
};
export type Debit = {
    enabled?: boolean;
    autoApply?: boolean;
    strategyChannel?: string;
};
export type AppCartConfig = {
    deliveryCharges?: DeliveryCharges;
    enabled?: boolean;
    maxCartItems?: number;
    minCartValue?: number;
    bulkCoupons?: boolean;
};
export type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
export type Charges = {
    threshold?: number;
    charges?: number;
};
export type AppPaymentConfig = {
    callbackUrl?: CallbackUrl;
    methods?: Methods;
    paymentSelectionLock?: PaymentSelectionLock;
    modeOfPayment?: string;
    source?: string;
    enabled?: boolean;
    codAmountLimit?: number;
    codCharges?: number;
};
export type CallbackUrl = {
    app?: string;
    web?: string;
};
export type Methods = {
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
export type PaymentModeConfig = {
    enabled?: boolean;
};
export type PaymentSelectionLock = {
    enabled?: boolean;
    defaultOptions?: string;
    paymentIdentifier?: string;
};
export type AppOrderConfig = {
    enabled?: boolean;
    forceReassignment?: boolean;
};
export type AppLogisticsConfig = {
    logisticsBySeller?: boolean;
    serviceabilityCheck?: boolean;
    sameDayDelivery?: boolean;
    dpAssignment?: boolean;
};
export type LoyaltyPoints = {
    enabled?: boolean;
    autoApply?: boolean;
};
export type AppInventoryPartialUpdate = {
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyaltyPoints?: LoyaltyPoints;
    commsEnabled?: boolean;
};
export type BrandCompanyInfo = {
    companyName?: string;
    companyId?: number;
};
export type CompanyByBrandsRequest = {
    brands: number;
    searchText?: string;
};
export type CompanyByBrandsResponse = {
    items?: Array<BrandCompanyInfo>;
    page?: Pagination;
};
export type StoreByBrandsRequest = {
    companyId?: number;
    brands: number;
    searchText?: string;
};
export type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
    page?: Pagination;
};
export type BrandStoreInfo = {
    storeName?: string;
    storeId?: number;
    storeType?: string;
    storeCode?: string;
    storeAddress?: OptedStoreAddress;
    company?: OptedCompany;
};
export type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brandLogoUrl?: string;
    brandBannerUrl?: string;
    brandBannerPortraitUrl?: string;
};
export type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
export type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
export type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
export type ApplicationsResponse = {
    items?: Array<Application>;
    page?: Pagination;
};
export type MobileAppConfiguration = {
    isActive?: boolean;
    id?: string;
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    application?: string;
    platformType?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    packageName?: string;
};
export type LandingImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
export type SplashImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
export type MobileAppConfigRequest = {
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    isActive?: boolean;
};
export type BuildVersionHistory = {
    versions?: BuildVersion;
    latestAvailableVersionName?: string;
};
export type BuildVersion = {
    id?: string;
    application?: string;
    platformType?: string;
    buildStatus?: string;
    versionName?: string;
    versionCode?: number;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type AppSupportedCurrency = {
    id?: string;
    supportedCurrency?: Array<string>;
    application?: string;
    defaultCurrency?: DefaultCurrency;
    createdAt?: string;
    updatedAt?: string;
};
export type DefaultCurrency = {
    ref?: string;
    code?: string;
};
export type CurrencyConfig = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
export type DomainAdd = {
    name?: string;
};
export type DomainAddRequest = {
    domain?: DomainAdd;
};
export type DomainsResponse = {
    domains?: Array<Domain>;
};
export type UpdateDomain = {
    id?: string;
};
export type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
export type DomainStatusRequest = {
    domainUrl?: string;
};
export type DomainStatus = {
    display?: string;
    status?: boolean;
};
export type DomainStatusResponse = {
    connected?: boolean;
    status?: Array<DomainStatus>;
};
export type DomainSuggestionsRequest = {
    domainUrl?: string;
    custom?: boolean;
};
export type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    isAvailable: boolean;
    price?: number;
    currency?: string;
};
export type DomainSuggestionsResponse = {
    domains?: Array<DomainSuggestion>;
};
export type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn;
    page?: Pagination;
};
export type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
export type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
export type CompanyValidator = {
    jsonSchema?: JsonSchema;
    browserScript?: string;
};
export type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
export type StoreValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
export type InventoryValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
export type OrderValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
export type IntegrationMeta = {
    isPublic?: boolean;
    id?: string;
    name?: string;
    value?: string;
};
export type Integration = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: any;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
export type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
export type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    lastPatch?: Array<any>;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    data?: any;
};
export type OptedStoreIntegration = {
    otherOpted?: boolean;
    otherIntegration?: IntegrationOptIn;
    otherEntity?: OtherEntity;
};
export type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    lastPatch?: LastPatch;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
export type OtherEntityData = {
    articleIdentifier?: string;
};
export type App = {
    companyId?: string;
    channelType?: string;
    auth?: any;
    name?: string;
    desc?: string;
};
export type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: Array<string>;
    franchiseEnabled?: boolean;
    outOfStock?: boolean;
    payment?: InventoryPaymentConfig;
    articleAssignment?: InventoryArticleAssignment;
};
export type AppDomain = {
    name?: string;
};
export type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Pagination;
};
export type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    companyType?: string;
};
export type StoresResponse = {
    items?: AppInventoryStores;
    page?: Pagination;
};
export type AppInventoryStores = {
    id?: string;
    modifiedOn?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    companyId?: number;
};
export type FilterOrderingStoreRequest = {
    allStores?: boolean;
    deployedStores?: Array<number>;
    q?: string;
    pageNo?: number;
    pageSize?: number;
};
export type DeploymentMeta = {
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
export type OrderingStoreConfig = {
    deploymentMeta?: DeploymentMeta;
};
export type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
export type OtherSellerApplication = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    optType?: string;
};
export type OtherSellerApplications = {
    items?: Array<OtherSellerApplication>;
    page?: Pagination;
};
export type OptedApplicationResponse = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OptedCompany;
    optedInventory?: OptedInventory;
    optOutInventory?: OptOutInventory;
};
export type OptedCompany = {
    uid?: number;
    name?: string;
};
export type OptedInventory = {
    optType?: OptType;
    items?: any;
};
export type OptType = {
    key?: string;
    display?: string;
};
export type OptedStore = {
    name?: string;
    storeCode?: string;
    id?: string;
    modifiedOn?: string;
    uid?: number;
    address?: OptedStoreAddress;
    displayName?: string;
    storeType?: string;
    companyId?: number;
};
export type OptedStoreAddress = {
    state?: string;
    address1?: string;
    latLong?: LatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
export type LatLong = {
    type?: string;
    coordinates?: Array<number>;
};
export type OptOutInventory = {
    store: Array<number>;
    company: Array<number>;
};
export type TokenResponse = {
    tokens?: Tokens;
    id?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fyndRewards?: FyndRewards;
    auth?: Auth;
    googleMap?: GoogleMap;
};
export type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
export type Credentials = {
    ios?: Ios;
    android?: Android;
    projectId?: string;
    gcmSenderId?: string;
    applicationId?: string;
    apiKey?: string;
};
export type Ios = {
    applicationId?: string;
    apiKey?: string;
};
export type Android = {
    applicationId?: string;
    apiKey?: string;
};
export type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
export type MoengageCredentials = {
    appId?: string;
};
export type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
export type SegmentCredentials = {
    writeKey?: string;
};
export type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
export type GtmCredentials = {
    apiKey?: string;
};
export type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
export type FreshchatCredentials = {
    appId?: string;
    appKey?: string;
    webToken?: string;
};
export type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
export type SafetynetCredentials = {
    apiKey?: string;
};
export type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
export type FyndRewardsCredentials = {
    publicKey?: string;
};
export type Auth = {
    google?: Google;
    facebook?: Facebook;
    accountkit?: Accountkit;
};
export type Google = {
    appId?: string;
};
export type Facebook = {
    appId?: string;
};
export type Accountkit = {
    appId?: string;
};
export type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
export type GoogleMapCredentials = {
    apiKey?: string;
};
export type ProductDetailFeature = {
    similar?: Array<string>;
    sellerSelection?: boolean;
    updateProductMeta?: boolean;
    requestProduct?: boolean;
};
export type LaunchPage = {
    pageType?: string;
    params?: string;
    query?: string;
};
export type LandingPageFeature = {
    launchPage?: LaunchPage;
    continueAsGuest?: boolean;
    loginBtnText?: string;
    showDomainTextbox?: boolean;
    showRegisterBtn?: boolean;
};
export type RegistrationPageFeature = {
    askStoreAddress?: boolean;
};
export type AppFeature = {
    productDetail?: ProductDetailFeature;
    landingPage?: LandingPageFeature;
    registrationPage?: RegistrationPageFeature;
    homePage?: any;
    common?: any;
    cart?: any;
    qr?: any;
    pcr?: any;
    order?: any;
    id?: string;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type AppFeatureRequest = {
    feature?: AppFeature;
};
export type AppFeatureResponse = {
    feature?: AppFeature;
};
export type Currency = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
export type Domain = {
    verified?: boolean;
    isPrimary?: boolean;
    isDefault?: boolean;
    isShortlink?: boolean;
    id?: string;
    name?: string;
};
export type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
export type ApplicationCors = {
    domains?: Array<string>;
};
export type ApplicationAuth = {
    enabled?: boolean;
};
export type ApplicationRedirections = {
    from?: string;
    redirectTo?: string;
    type?: string;
};
export type ApplicationMeta = {
    name?: string;
    value?: string;
};
export type SecureUrl = {
    secureUrl?: string;
};
export type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channelType?: string;
    cacheTtl?: number;
    isInternal?: boolean;
    isActive?: boolean;
    id?: string;
    name?: string;
    owner?: string;
    companyId?: number;
    token?: string;
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    appType?: string;
    mobileLogo?: SecureUrl;
    domain?: Domain;
};
export type NotFound = {
    message?: string;
};
export type UnhandledError = {
    message?: string;
};
export type SuccessMessageResponse = {
    message?: string;
};
export type InventoryBrandRule = {
    criteria?: string;
    brands?: Array<number>;
};
export type StoreCriteriaRule = {
    companies?: Array<number>;
    brands?: Array<number>;
};
export type InventoryStoreRule = {
    criteria?: string;
    rules?: Array<StoreCriteriaRule>;
    stores?: Array<number>;
};
export type InventoryPaymentConfig = {
    modeOfPayment?: string;
    source?: string;
};
export type StorePriorityRule = {
    enabled?: boolean;
    storetypeOrder?: Array<string>;
};
export type ArticleAssignmentRule = {
    storePriority?: StorePriorityRule;
};
export type InventoryArticleAssignment = {
    postOrderReassignment?: boolean;
    enforcedStores?: Array<number>;
    rules?: ArticleAssignmentRule;
};
export type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
export type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    countryCode?: number;
    phone?: string;
};
export type Pagination = {
    type?: string;
    size?: number;
    current?: number;
    hasNext?: boolean;
    itemTotal?: number;
};
export type ApplicationInformation = {
    address?: any;
    support?: any;
    socialLinks?: any;
    links?: Array<any>;
    copyrightText?: string;
    id?: string;
    businessHighlights?: Array<any>;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobileLogo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Array<Domain>;
    id?: string;
};
export type CurrenciesResponse = {
    items?: Array<Currency>;
};
export type OrderingStore = {
    address?: any;
    id?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    pincode?: number;
    code?: string;
};
export type OrderingStores = {
    page?: Pagination;
    items?: Array<OrderingStore>;
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
export type StatsGroups = {
    groups?: Array<any>;
};
export type StatsGroupComponents = {
    title?: string;
    components?: Array<any>;
};
export type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
export type AbandonCartsList = {
    items?: Array<any>;
    cartTotal?: string;
    page?: any;
};
export type AbandonCartDetail = {
    id?: string;
    userId?: string;
    cartValue?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
export type ExportJobReq = {
    marketplaceName?: string;
    startTime?: string;
    endTime?: string;
    eventType?: string;
};
export type ExportJobRes = {
    status?: string;
    jobId?: string;
};
export type ExportJobStatusRes = {
    status?: string;
    jobId?: string;
    downloadUrl?: string;
};
export type GetLogsListReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
};
export type GetLogsListRes = {
    items?: Array<any>;
    page?: any;
};
export type SearchLogReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
    identifier?: string;
    identifierValue?: string;
};
export type SearchLogRes = {
    items?: Array<any>;
    page?: any;
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
        
        
        @property { Object } [value]
        
        @property { string } [type]
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<Object> } response
        
         
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
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Phone } [phone]
        
         
    */
/**
        @typedef Phone
        
        
        @property { string } phoneNumber
        
        @property { string } countryCode
        
         
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
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
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
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */
/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */
/**
        @typedef FontsSchema
        
        
        @property { Array<Object> } [items]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Object } [information]
        
        @property { Array<string> } [tags]
        
        @property { Object } [src]
        
        @property { Object } [assets]
        
        @property { Array<Object> } [availablePages]
        
        @property { Object } [pages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Object } [config]
        
        @property { Object } [settings]
        
        @property { Object } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Object } [colors]
        
         
    */
/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Array<Object> } [sections]
        
         
    */
/**
        @typedef availableSectionSchema
        
        
        @property { Array<Object> } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Array<Object> } [props]
        
         
    */
/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { Array<Object> } [pageSections]
        
         
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
        
        @property { Object } [phone]
        
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
        
        @property { Object } [oauth2]
        
        @property { Object } [profile]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { Object } [user]
        
         
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
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { Object } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Object } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { string } [id]
        
        @property { Object } [social]
        
        @property { Object } [requiredFields]
        
        @property { Object } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { Object } [flashCard]
        
        @property { string } [subtext]
        
        @property { Object } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<Object> } [phoneNumbers]
        
        @property { Array<Object> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Object } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { Array<Object> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Seo
        
        
        @property { string } app
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<any> } [customMetaTags]
        
        @property { Object } [details]
        
         
    */
/**
        @typedef StorefrontAnnouncement
        
        
        @property { Object } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */
/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platform]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<Object> } [pages]
        
        @property { Object } [editorMeta]
        
        @property { Object } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { Object } [schedule]
        
         
    */
/**
        @typedef ScheduleSchema
        
        
        @property { Object } [schedule]
        
        @property { boolean } [published]
        
         
    */
/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Asset
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BlogSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { Object } [dateMeta]
        
         
    */
/**
        @typedef BlogRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */
/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
         
    */
/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */
/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef CreateFaqResponseSchema
        
        
        @property { Object } [faq]
        
         
    */
/**
        @typedef CreateFaqSchema
        
        
        @property { Object } [faq]
        
         
    */
/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */
/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { Object } [category]
        
         
    */
/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { Object } [category]
        
         
    */
/**
        @typedef CreateFaqCategorySchema
        
        
        @property { Object } [category]
        
         
    */
/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<Object> } [categories]
        
         
    */
/**
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
        @property { Object } [category]
        
         
    */
/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationRef } [navigation]
        
         
    */
/**
        @typedef NavigationRef
        
        
        @property { Array<any> } [acl]
        
        @property { Object } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Object } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { Object } [subNavigation]
        
         
    */
/**
        @typedef LandingPage
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<any> } [platform]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Slideshow
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { Object } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [name]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Array<Object> } [announcements]
        
         
    */
/**
        @typedef FaqResponseSchema
        
        
        @property { Array<Faq> } [faqs]
        
         
    */
/**
        @typedef UpdateHandpickedSchema
        
        
        @property { Object } [tag]
        
         
    */
/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef TagsSchema
        
        
        @property { string } [id]
        
        @property { Array<Object> } [tags]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */
/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<Object> } [tags]
        
         
    */
/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef Faq
        
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { number } [v]
        
         
    */
/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<string> } [platform]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
         
    */
/**
        @typedef LandingPageRequest
        
        
        @property { string } [slug]
        
        @property { Object } [action]
        
        @property { Array<string> } [platform]
        
         
    */
/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Object } [orientation]
        
        @property { Object } [navigation]
        
         
    */
/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Object } [orientation]
        
        @property { Object } [navigation]
        
         
    */
/**
        @typedef CustomPage
        
        
        @property { Object } [data]
        
         
    */
/**
        @typedef CustomBlog
        
        
        @property { Object } [data]
        
         
    */
/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */
/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<string> } [params]
        
        @property { Array<string> } [query]
        
         
    */
/**
        @typedef PageSchema
        
        
        @property { Array<any> } [id]
        
        @property { string } [schedule]
        
        @property { Array<any> } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [visibility]
        
         
    */
/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageRequest
        
        
        @property { string } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
         
    */
/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */
/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */
/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { Object } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
         
    */
/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { Object } [configuration]
        
        @property { Array<Object> } [media]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [contact]
        
         
    */
/**
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef Plan
        
        
        @property { Object } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef DetailedPlan
        
        
        @property { Object } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Array<Object> } [components]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { Object } [invoice]
        
        @property { Array<Object> } [invoiceItems]
        
         
    */
/**
        @typedef Invoices
        
        
        @property { Array<Object> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */
/**
        @typedef BillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postalCode]
        
         
    */
/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { BillingAddress } [billingAddress]
        
        @property { string } [id]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { BillingAddress } [billingAddress]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef Subscription
        
        
        @property { Object } [currentPeriod]
        
        @property { Object } [pauseCollection]
        
        @property { Object } [trial]
        
        @property { Object } [invoiceSettings]
        
        @property { boolean } [isActive]
        
        @property { boolean } [cancelAtPeriodEnd]
        
        @property { string } [id]
        
        @property { string } [subscriberId]
        
        @property { string } [planId]
        
        @property { string } [productSuiteId]
        
        @property { Plan } [planData]
        
        @property { string } [currentStatus]
        
        @property { string } [collectionMethod]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [latestInvoice]
        
         
    */
/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [isEnabled]
        
        @property { Subscription } [subscription]
        
         
    */
/**
        @typedef SubscriptionLimit
        
        
        @property { Object } [application]
        
        @property { Object } [marketplace]
        
        @property { Object } [otherPlatform]
        
        @property { Object } [team]
        
        @property { Object } [products]
        
        @property { Object } [extensions]
        
        @property { Object } [integrations]
        
        @property { boolean } [isTrialPlan]
        
         
    */
/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [planId]
        
        @property { string } [paymentMethod]
        
         
    */
/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [subscriptionId]
        
         
    */
/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef GetStats
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Campaign
        
        
        @property { Object } [recipientHeaders]
        
        @property { Object } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<Object> } [headers]
        
         
    */
/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */
/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<Object> } [from]
        
         
    */
/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<Object> } [from]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { string } [replyTo]
        
        @property { Array<Object> } [headers]
        
        @property { Object } [subject]
        
        @property { Object } [html]
        
        @property { Object } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Object } [keys]
        
        @property { string } [from]
        
        @property { string } [replyTo]
        
        @property { Array<Object> } [headers]
        
        @property { Object } [subject]
        
        @property { Object } [html]
        
        @property { Object } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { Object } [subject]
        
        @property { Object } [html]
        
        @property { Object } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { Object } [subject]
        
        @property { Object } [html]
        
        @property { Object } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef EventSubscriptions
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */
/**
        @typedef TriggerJobRequest
        
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef Jobs
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef JobLogs
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef Log
        
        
        @property { Object } [email]
        
        @property { Object } [pushnotification]
        
        @property { Object } [meta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { Object } [data]
        
        @property { string } [expireAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Logs
        
        
        @property { Array<Log> } [docs]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
         
    */
/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
    */
/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { Object } [message]
        
        @property { Object } [templateVariables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Object } [message]
        
        @property { Object } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Object } [message]
        
        @property { Object } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { Object } [message]
        
        @property { Object } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } displayFields
        
        @property { boolean } created
        
        @property { string } appId
        
        @property { Array<string> } excludedFields
        
        @property { boolean } success
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } secret
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } configType
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
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
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [cardNumber]
        
        @property { string } [cardToken]
        
        @property { string } aggregatorName
        
        @property { string } [nickname]
        
        @property { string } [cardName]
        
        @property { number } [displayPriority]
        
        @property { string } [code]
        
        @property { string } [fyndVpa]
        
        @property { string } [displayName]
        
        @property { string } [cardReference]
        
        @property { string } [intentFlow]
        
        @property { string } [cardBrand]
        
        @property { boolean } [expired]
        
        @property { string } [merchantCode]
        
        @property { string } [cardType]
        
        @property { string } [name]
        
        @property { string } [cardIsin]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [cardFingerprint]
        
        @property { number } [expYear]
        
        @property { string } [cardId]
        
        @property { number } [retryCount]
        
        @property { number } [expMonth]
        
        @property { number } [timeout]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrandImage]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } [aggregatorName]
        
        @property { number } displayPriority
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { boolean } [anonymousEnable]
        
        @property { string } name
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } paymentOptions
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { boolean } isDefault
        
        @property { Object } customers
        
        @property { string } transferType
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } moreAttributes
        
        @property { Object } uniqueTransferNo
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { Object } bankDetails
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { string } aggregator
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { Object } bankDetails
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { string } paymentStatus
        
        @property { Object } payouts
        
        @property { boolean } created
        
        @property { string } aggregator
        
        @property { string } uniqueTransferNo
        
        @property { boolean } isActive
        
        @property { boolean } success
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
         
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
        
        
        @property { boolean } success
        
        @property { Object } config
        
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
        @typedef GetActivityStatus
        
        
        @property { Array<Object> } activityHistory
        
         
    */
/**
        @typedef FailedOrders
        
        
        @property { Array<Object> } orders
        
         
    */
/**
        @typedef OrderListing
        
        
        @property { Array<Object> } items
        
        @property { Object } filters
        
        @property { Object } nextOrderStatus
        
        @property { Object } page
        
        @property { Object } appliedFilters
        
         
    */
/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */
/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } resendToken
        
         
    */
/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */
/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */
/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */
/**
        @typedef PlatformShipmentTrack
        
        
        @property { Array<Object> } results
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */
/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { number } [longitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [countryCode]
        
        @property { string } [addressType]
        
         
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
        
        
        @property { string } type
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } legalName
        
        @property { string } [url]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<PhoneNumber> } [phone]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [businessInfo]
        
        @property { string } [verifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } businessType
        
        @property { string } [name]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { string } companyType
        
        @property { string } [modifiedOn]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<Document> } [documents]
        
        @property { ContactDetails } [contactDetails]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [createdOn]
        
        @property { Object } [warnings]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [stage]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { number } uid
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [errors]
        
        @property { number } [status]
        
         
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
        @typedef CompanyAddress
        
        
        @property { number } longitude
        
        @property { string } [landmark]
        
        @property { number } pincode
        
        @property { string } country
        
        @property { string } city
        
        @property { string } address1
        
        @property { string } [address2]
        
        @property { string } state
        
        @property { number } latitude
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } [businessInfo]
        
        @property { string } businessType
        
        @property { string } name
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { CompanyAddress } address
        
        @property { Document } document
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [store]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [contact]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Object } [localeLanguage]
        
        @property { string } [slugKey]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [rejectReason]
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [modifiedOn]
        
        @property { string } [logo]
        
        @property { Object } [warnings]
        
        @property { Object } [customJson]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [description]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { number } [companyId]
        
        @property { Object } [localeLanguage]
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [uid]
        
        @property { string } logo
        
        @property { Object } [customJson]
        
        @property { string } [brandTier]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { number } company
        
        @property { Array<number> } brands
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { number } [longitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [state]
        
        @property { number } [latitude]
        
        @property { string } [countryCode]
        
        @property { string } [addressType]
        
         
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
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { string } [name]
        
        @property { PhoneNumber } mobileNo
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { string } code
        
        @property { string } name
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } company
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { string } [storeType]
        
        @property { Object } [warnings]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [customJson]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [stage]
        
        @property { string } displayName
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [businessType]
        
        @property { string } [name]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [modifiedOn]
        
        @property { string } [companyType]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [stage]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [verifiedOn]
        
        @property { string } name
        
        @property { string } [modifiedOn]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<Document> } [documents]
        
        @property { string } [storeType]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [customJson]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { string } displayName
        
        @property { string } code
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [createdOn]
        
        @property { Object } [warnings]
        
        @property { GetAddressSerializer } address
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } phoneNumber
        
         
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
        @typedef RedirectDevice
        
        
        @property { string } link
        
        @property { string } type
        
         
    */
/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { Object } [web]
        
        @property { boolean } [forceWeb]
        
         
    */
/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { string } [active]
        
        @property { string } [type]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { Redirects } [redirects]
        
         
    */
/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { Object } [url]
        
        @property { string } [createdBy]
        
        @property { string } [personalized]
        
        @property { string } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [expireAt]
        
        @property { string } [application]
        
        @property { boolean } [userId]
        
        @property { boolean } [createdAt]
        
        @property { boolean } [updatedAt]
        
        @property { Redirects } [redirects]
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { number } [current]
        
        @property { string } [hasNext]
        
        @property { string } [type]
        
         
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
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
    */
/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */
/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */
/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
    */
/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */
/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
    */
/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */
/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */
/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
    */
/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */
/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */
/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
    */
/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */
/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */
/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */
/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */
/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */
/**
        @typedef UpdateDomain
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
    */
/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */
/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */
/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */
/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */
/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { Object } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
    */
/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
    */
/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
    */
/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
        @property { any } [items]
        
         
    */
/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { LatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef LatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
    */
/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
    */
/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
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
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */
/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { Object } [homePage]
        
        @property { Object } [common]
        
        @property { Object } [cart]
        
        @property { Object } [qr]
        
        @property { Object } [pcr]
        
        @property { Object } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */
/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */
/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */
/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */
/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */
/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef Pagination
        
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { Object } [address]
        
        @property { Object } [support]
        
        @property { Object } [socialLinks]
        
        @property { Array<Object> } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { Array<Object> } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */
/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { Object } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Pagination } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef StatsGroups
        
        
        @property { Array<Object> } [groups]
        
         
    */
/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<Object> } [components]
        
         
    */
/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef AbandonCartsList
        
        
        @property { Array<Object> } [items]
        
        @property { string } [cartTotal]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */
/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
         
    */
/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */
/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */
/**
        @typedef GetLogsListRes
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */
/**
        @typedef SearchLogRes
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
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
export class Billing {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get invoices
      * @description: Get invoices.
      * @param {Object} arg - arg object.
      
      **/
    getInvoices({}?: any): any;
    /**
      *
      * @summary: Get invoice by id
      * @description: Get invoice by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.invoiceId - Invoice id
      
      **/
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): any;
    /**
      *
      * @summary: Get subscription customer detail
      * @description: Get subscription customer detail.
      * @param {Object} arg - arg object.
      
      **/
    getCustomerDetail({}?: any): any;
    /**
     *
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     * @param {Object} arg - arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     **/
    upsertCustomerDetail({ body }?: {
        body: SubscriptionCustomerCreate;
    }): any;
    /**
      *
      * @summary: Get current subscription detail
      * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
  
      * @param {Object} arg - arg object.
      
      **/
    getSubscription({}?: any): any;
    /**
      *
      * @summary: Get subscription subscription limits
      * @description: Get subscription subscription limits.
      * @param {Object} arg - arg object.
      
      **/
    getFeatureLimitConfig({}?: any): any;
    /**
     *
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     * @param {Object} arg - arg object.
     * @param {SubscriptionActivateReq} arg.body
     **/
    activateSubscriptionPlan({ body }?: {
        body: SubscriptionActivateReq;
    }): any;
    /**
     *
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     * @param {Object} arg - arg object.
     * @param {CancelSubscriptionReq} arg.body
     **/
    cancelSubscriptionPlan({ body }?: {
        body: CancelSubscriptionReq;
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
export class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
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
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      
      **/
    getBrands({}?: any): any;
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
export class Configuration {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create application
     * @description: Create new application
     * @param {Object} arg - arg object.
     * @param {CreateApplicationRequest} arg.body
     **/
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {Object} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: any;
    }): any;
    /**
      *
      * @summary: Get all currencies
      * @description: Get all currencies
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
     *
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     * @param {Object} arg - arg object.
     * @param {DomainSuggestionsRequest} arg.body
     **/
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): any;
    /**
      *
      * @summary: Get integration data
      * @description: Get integration data
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Integration id
      
      **/
    getIntegrationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get integration level config
      * @description: Get integration level config
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      
      **/
    getIntegrationLevelConfig({ id, level }?: {
        id: string;
        level: string;
    }): any;
    /**
      *
      * @summary: Get level data for integration
      * @description: Get level data for integration
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Check store has active integration
      * @description: API checks if a store is already opted in any other integrations
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Get brands by company
      * @description: Get brands by company
      * @param {Object} arg - arg object.
      
      **/
    getBrandsByCompany({}?: any): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      
      **/
    getOtherSellerApplications({}?: any): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller application
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Application Id
      
      **/
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     **/
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): any;
}
export class Analytics {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create data export job in required format
     * @description: Create data export job in required format
     * @param {Object} arg - arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {ExportJobReq} arg.body
     **/
    createExportJob({ exportType, body }?: {
        exportType: string;
        body: ExportJobReq;
    }): any;
    /**
      *
      * @summary: Get data export job status
      * @description: Get data export job status
      * @param {Object} arg - arg object.
      * @param {string} arg.exportType - Export type / format
      * @param {string} arg.jobId - Export job id
      
      **/
    getExportJobStatus({ exportType, jobId }?: {
        exportType: string;
        jobId: string;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: string;
        pageSize?: string;
        body: GetLogsListReq;
    }): any;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: string;
        pageSize?: string;
        logType: string;
        body: SearchLogReq;
    }): any;
}
