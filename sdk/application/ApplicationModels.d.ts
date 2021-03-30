export type ProductListingActionPage = {
    query?: any;
    type?: string;
};
export type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
export type Media = {
    url?: string;
    type?: string;
};
export type ProductBrand = {
    name?: string;
    action?: ProductListingAction;
    logo?: Media;
    uid?: number;
};
export type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
export type ProductDetailGroupedAttribute = {
    title?: string;
    details?: Array<ProductDetailAttribute>;
};
export type ProductDetail = {
    highlights?: Array<string>;
    type?: string;
    ratingCount?: number;
    categories?: Array<ProductBrand>;
    teaserTag?: string;
    shortDescription?: string;
    hasVariant?: boolean;
    slug: string;
    productOnlineDate?: string;
    itemType?: string;
    name?: string;
    imageNature?: string;
    description?: string;
    medias?: Array<Media>;
    attributes?: any;
    uid?: number;
    brand?: ProductBrand;
    tryouts?: Array<string>;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    rating?: number;
    similars?: Array<string>;
    color?: string;
};
export type ErrorResponse = {
    error?: string;
};
export type ProductSize = {
    value?: string;
    display?: string;
    isAvailable?: boolean;
    quantity?: number;
};
export type Price = {
    max?: number;
    currencyCode?: string;
    min?: number;
    currencySymbol?: string;
};
export type ProductListingPrice = {
    effective?: Price;
    marked?: Price;
};
export type ProductSizeStores = {
    count?: number;
};
export type ProductSizes = {
    sellable?: boolean;
    sizeChart?: any;
    discount?: string;
    sizes?: Array<ProductSize>;
    price?: ProductListingPrice;
    stores?: ProductSizeStores;
};
export type Seller = {
    name?: string;
    count?: number;
    uid?: number;
};
export type Store = {
    name?: string;
    count?: number;
    uid?: number;
};
export type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
export type ProductStockPrice = {
    currency?: string;
    effective?: number;
    marked?: number;
};
export type ProductSizePriceResponse = {
    strategyWiseListing?: Array<any>;
    seller?: Seller;
    longLat?: Array<number>;
    store?: Store;
    specialBadge?: string;
    sellerCount?: number;
    discount?: string;
    itemType?: string;
    articleAssignment?: ArticleAssignment;
    pincode?: number;
    set?: any;
    quantity?: number;
    articleId?: string;
    pricePerPrice?: ProductStockPrice;
    price?: ProductStockPrice;
};
export type Page = {
    itemTotal?: number;
    nextId?: string;
    current?: number;
    hasPrevious?: boolean;
    size?: number;
    type?: string;
    hasNext?: boolean;
};
export type ProductSizeSellerFilter = {
    value?: string;
    name?: string;
    isSelected?: boolean;
};
export type ProductSizeSellersResponse = {
    items?: Array<ProductSizePriceResponse>;
    page: Page;
    sortOn?: Array<ProductSizeSellerFilter>;
};
export type AttributeDetail = {
    key?: string;
    display?: string;
    description?: string;
};
export type ProductsComparisonResponse = {
    items?: Array<ProductDetail>;
    attributesMetadata?: Array<AttributeDetail>;
};
export type ProductCompareResponse = {
    subtitle?: string;
    title?: string;
    attributesMetadata?: Array<AttributeDetail>;
    items?: Array<ProductDetail>;
};
export type ProductFrequentlyComparedSimilarResponse = {
    similars?: Array<ProductCompareResponse>;
};
export type ProductSimilarItem = {
    subtitle?: string;
    title?: string;
    items?: Array<ProductDetail>;
};
export type SimilarProductByTypeResponse = {
    similars?: Array<ProductSimilarItem>;
};
export type ProductVariantItemResponse = {
    value?: string;
    color?: string;
    colorName?: string;
    slug?: string;
    isAvailable?: boolean;
    name?: string;
    medias?: Array<Media>;
    action?: ProductListingAction;
    uid?: number;
};
export type ProductVariantResponse = {
    items?: Array<ProductVariantItemResponse>;
    header?: string;
    displayType?: string;
};
export type ProductVariantsResponse = {
    variants?: Array<ProductVariantResponse>;
};
export type CompanyDetail = {
    id?: number;
    name?: string;
};
export type StoreDetail = {
    id?: number;
    city?: string;
    name?: string;
    code?: string;
};
export type ProductStockStatusItem = {
    company?: CompanyDetail;
    seller?: Seller;
    itemId?: number;
    store?: StoreDetail;
    size?: string;
    quantity?: number;
    identifier?: any;
    price?: ProductStockPrice;
    uid?: string;
};
export type ProductStockStatusResponse = {
    items?: Array<ProductStockStatusItem>;
};
export type ProductStockPolling = {
    items?: Array<ProductStockStatusItem>;
    page: Page;
};
export type ProductListingDetail = {
    sellable?: boolean;
    highlights?: Array<string>;
    type?: string;
    ratingCount?: number;
    categories?: Array<ProductBrand>;
    teaserTag?: string;
    shortDescription?: string;
    hasVariant?: boolean;
    price?: ProductListingPrice;
    slug: string;
    discount?: string;
    productOnlineDate?: string;
    itemType?: string;
    name?: string;
    imageNature?: string;
    description?: string;
    medias?: Array<Media>;
    attributes?: any;
    uid?: number;
    brand?: ProductBrand;
    tryouts?: Array<string>;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    rating?: number;
    similars?: Array<string>;
    color?: string;
};
export type ProductFiltersKey = {
    name: string;
    display: string;
    kind?: string;
    logo?: string;
};
export type ProductFiltersValue = {
    value: string;
    display: string;
    queryFormat?: string;
    currencySymbol?: string;
    max?: number;
    selectedMin?: number;
    isSelected: boolean;
    min?: number;
    count?: number;
    currencyCode?: string;
    selectedMax?: number;
    displayFormat?: string;
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
export type ProductListingResponse = {
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
    page: Page;
    sortOn?: Array<ProductSortOn>;
};
export type ImageUrls = {
    landscape?: Media;
    portrait?: Media;
};
export type BrandItem = {
    logo?: Media;
    slug?: string;
    discount?: string;
    name?: string;
    departments?: Array<string>;
    banners?: ImageUrls;
    action?: ProductListingAction;
    uid?: number;
};
export type BrandListingResponse = {
    items?: Array<BrandItem>;
    page: Page;
};
export type BrandDetailResponse = {
    name?: string;
    banners?: ImageUrls;
    logo?: Media;
    uid?: number;
};
export type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
export type CategoryItems = {
    slug?: string;
    childs?: Array<any>;
    name?: string;
    banners?: ImageUrls;
    action?: ProductListingAction;
    uid?: number;
};
export type DepartmentCategoryTree = {
    items?: Array<CategoryItems>;
    department?: string;
};
export type CategoryListingResponse = {
    departments?: Array<DepartmentIdentifier>;
    data?: Array<DepartmentCategoryTree>;
};
export type CategoryMetaResponse = {
    name?: string;
    banners?: ImageUrls;
    logo?: Media;
    uid?: number;
};
export type HomeListingResponse = {
    items?: Array<ProductListingDetail>;
    page: Page;
    message?: string;
};
export type Department = {
    priorityOrder?: number;
    logo?: Media;
    slug?: string;
    name?: string;
    uid?: number;
};
export type DepartmentResponse = {
    items?: Array<Department>;
};
export type Query = {
    brand?: Array<string>;
    category?: Array<string>;
};
export type AutocompletePage = {
    query?: Query;
    type?: string;
};
export type Action = {
    page?: AutocompletePage;
    type?: string;
};
export type AutocompleteItem = {
    display?: string;
    type?: string;
    action?: Action;
    logo?: Media;
};
export type AutoCompleteResponse = {
    items?: Array<AutocompleteItem>;
};
export type GetCollectionDetailNest = {
    badge?: any;
    logo?: Media;
    query?: any;
    type?: string;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
    schedule?: any;
    meta?: any;
    appId?: string;
    action?: ProductListingAction;
    tag?: Array<string>;
    slug?: string;
    name?: string;
    description?: string;
    uid?: string;
    allowSort?: boolean;
    allowFacets?: boolean;
    banners?: ImageUrls;
    cron?: any;
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
export type GetCollectionListingResponse = {
    items?: Array<GetCollectionDetailNest>;
    filters?: CollectionListingFilter;
    page: Page;
};
export type CollectionDetailResponse = {
    visibleFacetsKeys?: Array<string>;
    tag?: Array<string>;
    badge?: any;
    logo?: Media;
    slug?: string;
    query?: any;
    schedule?: any;
    name?: string;
    meta?: any;
    allowSort?: boolean;
    description?: string;
    type?: string;
    allowFacets?: boolean;
    appId?: string;
    banners?: ImageUrls;
    isActive?: boolean;
    cron?: any;
};
export type GetFollowListingResponse = {
    items: Array<any>;
    page: Page;
};
export type FollowPostResponse = {
    id: string;
    message: string;
};
export type FollowerCountResponse = {
    count?: number;
};
export type FollowIdsData = {
    collections?: Array<number>;
    brands?: Array<number>;
    products?: Array<number>;
};
export type FollowIdsResponse = {
    data?: FollowIdsData;
};
export type LatLong = {
    coordinates?: Array<number>;
    type?: string;
};
export type Store1 = {
    address?: string;
    country?: string;
    pincode?: number;
    name?: string;
    storeEmail?: string;
    latLong?: LatLong;
    storeCode?: string;
    city?: string;
    state?: string;
    uid?: number;
};
export type StoreListingResponse = {
    items: Array<Store1>;
    page: Page;
};
export type ActionQuery = {
    productSlug?: Array<string>;
};
export type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
export type CategoryInfo = {
    name?: string;
    uid?: number;
};
export type BaseInfo = {
    name?: string;
    uid?: number;
};
export type Image = {
    secureUrl?: string;
    aspectRatio?: string;
    url?: string;
};
export type Product = {
    name?: string;
    slug?: string;
    type?: string;
    action?: ProductAction;
    uid?: number;
    categories?: Array<CategoryInfo>;
    brand?: BaseInfo;
    images?: Array<Image>;
};
export type ProductPrice = {
    marked?: number;
    currencySymbol?: string;
    effective?: number;
    selling?: number;
    currencyCode?: string;
    addOn?: number;
};
export type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
export type ProductAvailability = {
    sizes?: Array<string>;
    outOfStock?: boolean;
    isValid?: boolean;
    deliverable?: boolean;
    otherStoreQuantity?: number;
};
export type BasePrice = {
    marked?: number;
    effective?: number;
    currencyCode?: string;
    currencySymbol?: string;
};
export type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
export type ProductArticle = {
    quantity?: number;
    price?: ArticlePriceInfo;
    type?: string;
    seller?: BaseInfo;
    uid?: string;
    size?: string;
    store?: BaseInfo;
};
export type CartProductIdentifer = {
    identifier?: string;
};
export type CartProductInfo = {
    product?: Product;
    quantity?: number;
    price?: ProductPriceInfo;
    couponMessage?: string;
    key?: string;
    bulkOffer?: any;
    availability?: ProductAvailability;
    discount?: string;
    article?: ProductArticle;
    isSet?: boolean;
    message?: string;
    identifiers: CartProductIdentifer;
};
export type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    isApplied?: boolean;
    description?: string;
};
export type RawBreakup = {
    total?: number;
    coupon?: number;
    fyndCash?: number;
    subtotal?: number;
    youSaved?: number;
    codCharge?: number;
    deliveryCharge?: number;
};
export type CouponBreakup = {
    isApplied?: boolean;
    code?: string;
    type?: string;
    uid?: number;
    message?: string;
    value?: number;
};
export type DisplayBreakup = {
    key?: string;
    currencySymbol?: string;
    currencyCode?: string;
    message?: Array<string>;
    display?: string;
    value?: number;
};
export type CartBreakup = {
    loyaltyPoints?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: Array<DisplayBreakup>;
};
export type PromiseTimestamp = {
    min?: number;
    max?: number;
};
export type PromiseFormatted = {
    min?: string;
    max?: string;
};
export type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
export type CartCurrency = {
    code?: string;
    symbol?: string;
};
export type CartResponse = {
    deliveryChargeInfo?: string;
    cartId?: number;
    couponText?: string;
    items?: Array<CartProductInfo>;
    restrictCheckout?: boolean;
    isValid?: boolean;
    breakupValues?: CartBreakup;
    deliveryPromise?: ShipmentPromise;
    currency?: CartCurrency;
    uid?: string;
    message?: string;
    gstin?: string;
    checkoutMode?: string;
    lastModified?: string;
    comment?: string;
};
export type AddProductCart = {
    quantity?: number;
    itemId?: number;
    sellerId?: number;
    storeId?: number;
    articleAssignment?: any;
    display?: string;
    pos?: boolean;
    articleId?: string;
    itemSize?: string;
};
export type AddCartRequest = {
    items?: Array<AddProductCart>;
};
export type AddCartResponse = {
    partial?: boolean;
    cart?: CartResponse;
    success?: boolean;
    message?: string;
};
export type UpdateProductCart = {
    quantity?: number;
    itemId?: number;
    itemIndex?: number;
    identifiers: CartProductIdentifer;
    articleId?: string;
    itemSize?: string;
};
export type UpdateCartRequest = {
    items?: Array<UpdateProductCart>;
    operation: string;
};
export type UpdateCartResponse = {
    cart?: CartResponse;
    success?: boolean;
    message?: string;
};
export type CartItemCountResponse = {
    userCartItemsCount?: number;
};
export type PageCoupon = {
    total?: number;
    hasNext?: boolean;
    current?: number;
    hasPrevious?: boolean;
    totalItemCount?: number;
};
export type Coupon = {
    isApplied?: boolean;
    subTitle?: string;
    minimumCartValue?: number;
    title?: string;
    isApplicable?: boolean;
    couponValue?: number;
    couponCode?: string;
    message?: string;
    expiresOn?: string;
    maxDiscountValue?: number;
};
export type GetCouponResponse = {
    page?: PageCoupon;
    availableCouponList?: Array<Coupon>;
};
export type ApplyCouponRequest = {
    couponCode: string;
};
export type OfferSeller = {
    name?: string;
    uid?: number;
};
export type OfferPrice = {
    marked?: number;
    currencySymbol?: string;
    effective?: number;
    currencyCode?: string;
    bulkEffective?: number;
};
export type OfferItem = {
    quantity?: number;
    price?: OfferPrice;
    total?: number;
    type?: string;
    autoApplied?: boolean;
    margin?: number;
    best?: boolean;
};
export type BulkPriceOffer = {
    seller?: OfferSeller;
    offers?: Array<OfferItem>;
};
export type BulkPriceResponse = {
    data?: Array<BulkPriceOffer>;
};
export type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
export type Address = {
    geoLocation?: GeoLocation;
    areaCodeSlug?: string;
    isActive?: boolean;
    country?: string;
    area?: string;
    name?: string;
    tags?: Array<any>;
    addressId?: number;
    landmark?: string;
    checkoutMode?: string;
    areaCode?: string;
    isDefaultAddress?: boolean;
    email?: string;
    phone?: string;
    uid?: number;
    address?: string;
    countryCode?: string;
    meta?: any;
    userId?: string;
    state?: string;
    addressType?: string;
    city?: string;
};
export type GetAddressesResponse = {
    address?: Array<Address>;
};
export type SaveAddressResponse = {
    addressId?: number;
    isDefaultAddress?: boolean;
    success?: string;
};
export type UpdateAddressResponse = {
    addressId?: number;
    isUpdated?: boolean;
    isDefaultAddress?: boolean;
    success?: boolean;
};
export type DeleteAddressResponse = {
    addressId?: number;
    isDeleted?: boolean;
};
export type SelectCartAddressRequest = {
    addressId?: string;
    uid?: string;
    billingAddressId?: number;
};
export type UpdateCartPaymentRequest = {
    merchantCode?: string;
    addressId?: number;
    uid?: number;
    aggregatorName?: string;
    paymentIdentifier?: string;
    paymentMode?: string;
};
export type CouponValidity = {
    discount?: number;
    displayMessageEn?: string;
    code?: string;
    valid?: boolean;
};
export type PaymentUpdate = {
    couponValidity?: CouponValidity;
    success: boolean;
    message?: string;
};
export type ShipmentResponse = {
    shipmentType?: string;
    boxType?: string;
    items?: Array<CartProductInfo>;
    fulfillmentId?: number;
    dpId?: number;
    fulfillmentType?: string;
    shipments?: number;
    orderType?: string;
    dpOptions?: any;
    promise?: ShipmentPromise;
};
export type CartShipmentsResponse = {
    deliveryChargeInfo?: string;
    cartId?: number;
    couponText?: string;
    restrictCheckout?: boolean;
    isValid?: boolean;
    breakupValues?: CartBreakup;
    deliveryPromise?: ShipmentPromise;
    currency?: CartCurrency;
    shipments?: Array<ShipmentResponse>;
    uid?: string;
    message?: string;
    gstin?: string;
    checkoutMode?: string;
    lastModified?: string;
    comment?: string;
};
export type CartCheckoutRequest = {
    callbackUrl?: string;
    meta?: any;
    fyndstoreEmpId?: string;
    merchantCode?: string;
    extraMeta?: any;
    staff?: any;
    aggregator?: string;
    billingAddress?: any;
    addressId?: number;
    paymentParams?: any;
    deliveryAddress?: any;
    orderingStore?: number;
    paymentAutoConfirm?: boolean;
    paymentIdentifier?: string;
    billingAddressId?: number;
    paymentMode: string;
};
export type CheckCart = {
    deliveryChargeInfo?: string;
    restrictCheckout?: boolean;
    success?: boolean;
    codMessage?: string;
    isValid?: boolean;
    breakupValues?: CartBreakup;
    currency?: CartCurrency;
    gstin?: string;
    errorMessage?: string;
    orderId?: string;
    checkoutMode?: string;
    codCharges?: number;
    couponText?: string;
    deliveryChargeOrderValue?: number;
    storeEmps?: Array<any>;
    userType?: string;
    uid?: string;
    lastModified?: string;
    codAvailable?: boolean;
    cartId?: number;
    items?: Array<CartProductInfo>;
    deliveryPromise?: ShipmentPromise;
    deliveryCharges?: number;
    message?: string;
    storeCode?: string;
    comment?: string;
};
export type CartCheckoutResponse = {
    callbackUrl?: string;
    data?: any;
    success?: boolean;
    message?: string;
    orderId?: string;
    cart?: CheckCart;
    appInterceptUrl?: string;
};
export type CartMetaRequest = {
    checkoutMode?: string;
    comment?: string;
    pickUpCustomerDetails?: any;
    gstin?: string;
};
export type CartMetaResponse = {
    message?: string;
};
export type CartMetaMissingResponse = {
    errors?: Array<string>;
};
export type GetShareCartLinkRequest = {
    uid: number;
    meta?: any;
};
export type GetShareCartLinkResponse = {
    token?: string;
    shareUrl?: string;
};
export type SharedCartDetails = {
    meta?: any;
    createdOn?: string;
    user?: any;
    source?: any;
    token?: string;
};
export type SharedCart = {
    deliveryChargeInfo?: string;
    cartId?: number;
    sharedCartDetails?: SharedCartDetails;
    couponText?: string;
    items?: Array<CartProductInfo>;
    restrictCheckout?: boolean;
    isValid?: boolean;
    breakupValues?: CartBreakup;
    deliveryPromise?: ShipmentPromise;
    currency?: CartCurrency;
    uid?: string;
    message?: string;
    gstin?: string;
    checkoutMode?: string;
    lastModified?: string;
    comment?: string;
};
export type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
export type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
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
    response: Array<any>;
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
export type CommunicationConsentReq = {
    response?: string;
    action?: string;
    channel?: string;
};
export type CommunicationConsentRes = {
    appId?: string;
    userId?: string;
    channels?: any;
};
export type CommunicationConsent = {
    appId?: string;
    userId?: string;
    channels?: any;
};
export type PushtokenReq = {
    action?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
    type?: string;
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
export type QRCodeResp = {
    link?: string;
    svg?: string;
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
export type ApplicationAboutResponse = {
    applicationInfo?: any;
};
export type AppVersionRequest = {
    application: ApplicationVersionRequest;
    device: Device;
    locale?: string;
    timezone?: string;
};
export type ApplicationVersionRequest = {
    id?: string;
    name: string;
    namespace?: string;
    token?: string;
    version: string;
};
export type Device = {
    build?: number;
    model?: string;
    os: OS;
};
export type OS = {
    name: string;
    version?: string;
};
export type Language = {
    name?: string;
    code?: string;
};
export type LanguageResponse = {
    items?: Array<Language>;
};
export type TokensResponse = {
    tokens?: any;
    id?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
export type AppStaffResponse = {
    staffUsers?: Array<AppStaff>;
};
export type UpdateDialog = {
    type?: string;
    interval?: number;
};
export type OrderingStoreSelectRequest = {
    orderingStore: OrderingStoreSelect;
};
export type OrderingStoreSelect = {
    id: string;
    uid: number;
    storeCode: string;
};
export type AppStaff = {
    id?: string;
    orderIncent?: boolean;
    stores?: Array<number>;
    application?: string;
    title?: string;
    user?: string;
    employeeCode?: string;
    firstName?: string;
    lastName?: string;
    profilePicUrl?: string;
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
export type InvalidPayloadRequest = {
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
export type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    addressType?: string;
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
export type AggregatorConfigDetail = {
    api?: string;
    secret: string;
    sdk?: boolean;
    verifyApi?: string;
    merchantId?: string;
    key: string;
    configType: string;
    userId?: string;
    pin?: string;
    merchantKey?: string;
};
export type AggregatorsConfigDetailResponse = {
    payumoney?: AggregatorConfigDetail;
    mswipe?: AggregatorConfigDetail;
    juspay?: AggregatorConfigDetail;
    simpl?: AggregatorConfigDetail;
    stripe?: AggregatorConfigDetail;
    razorpay?: AggregatorConfigDetail;
    ccavenue?: AggregatorConfigDetail;
    success: boolean;
    env: string;
    rupifi?: AggregatorConfigDetail;
};
export type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
export type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
export type AttachCardRequest = {
    cardId: string;
    refresh?: boolean;
};
export type AttachCardsResponse = {
    success: boolean;
    data: any;
    message?: string;
};
export type CardPaymentGateway = {
    api?: string;
    aggregator: string;
    customerId?: string;
};
export type ActiveCardPaymentGatewayResponse = {
    cards: CardPaymentGateway;
    success: boolean;
    message: string;
};
export type Card = {
    expYear?: number;
    cardIsin?: string;
    nickname?: string;
    cardNumber?: string;
    cardId?: string;
    cardToken?: string;
    cardName?: string;
    cardReference?: string;
    expired?: boolean;
    aggregatorName: string;
    cardFingerprint?: string;
    expMonth?: number;
    cardBrand?: string;
    cardType?: string;
    cardBrandImage?: string;
    cardIssuer?: string;
};
export type ListCardsResponse = {
    success: boolean;
    data?: Array<Card>;
    message: string;
};
export type DeletehCardRequest = {
    cardId: string;
};
export type DeleteCardsResponse = {
    success: boolean;
    message?: string;
};
export type ValidateCustomerRequest = {
    aggregator: string;
    payload: string;
    phoneNumber: string;
    transactionAmountInPaise: number;
    merchantParams: any;
};
export type ValidateCustomerResponse = {
    success: boolean;
    data: any;
    message: string;
};
export type ChargeCustomerRequest = {
    aggregator: string;
    amount: number;
    transactionToken?: string;
    orderId: string;
    verified?: boolean;
};
export type ChargeCustomerResponse = {
    deliveryAddressId?: string;
    aggregator: string;
    orderId: string;
    message: string;
    success: boolean;
    cartId?: string;
    status: string;
};
export type PaymentInitializationRequest = {
    razorpayPaymentId: string;
    aggregator: string;
    virtualId?: string;
    timeout: number;
    merchantOrderId: string;
    method: string;
    aggregatorOrderId: string;
    pollingUrl: string;
    customerId: string;
};
export type PaymentInitializationResponse = {
    razorpayPaymentId?: string;
    aggregator: string;
    virtualId?: string;
    merchantOrderId: string;
    vpa?: string;
    amount?: number;
    timeout?: number;
    currency?: string;
    method: string;
    aggregatorOrderId?: string;
    pollingUrl: string;
    customerId?: string;
    success: boolean;
    bqrImage?: string;
    status?: string;
};
export type PaymentStatusUpdateRequest = {
    contact: string;
    aggregator: string;
    merchantOrderId: string;
    vpa: string;
    amount: number;
    email: string;
    orderId: string;
    currency: string;
    method: string;
    customerId: string;
    status: string;
};
export type PaymentStatusUpdateResponse = {
    aggregatorName: string;
    status: string;
    retry: boolean;
};
export type PaymentModeLogo = {
    small: string;
    large: string;
};
export type PaymentModeList = {
    retryCount?: number;
    displayPriority?: number;
    cardName?: string;
    displayName?: string;
    cardBrandImage?: string;
    cardIsin?: string;
    cardNumber?: string;
    cardId?: string;
    code?: string;
    cardReference?: string;
    expMonth?: number;
    logoUrl?: PaymentModeLogo;
    cardIssuer?: string;
    intentFlow?: string;
    fyndVpa?: string;
    cardFingerprint?: string;
    cardBrand?: string;
    expYear?: number;
    nickname?: string;
    timeout?: number;
    merchantCode?: string;
    cardToken?: string;
    name?: string;
    expired?: boolean;
    aggregatorName: string;
    intentAppErrorList?: Array<string>;
    cardType?: string;
};
export type RootPaymentMode = {
    displayPriority: number;
    name: string;
    addCardEnabled?: boolean;
    aggregatorName?: string;
    anonymousEnable?: boolean;
    displayName: string;
    list?: Array<PaymentModeList>;
};
export type AggregatorRoute = {
    paymentFlow?: string;
    apiLink?: string;
    data?: any;
};
export type PaymentFlow = {
    upiRazorpay?: AggregatorRoute;
    razorpay?: AggregatorRoute;
    juspay?: AggregatorRoute;
    payubiz?: AggregatorRoute;
    bqrRazorpay?: AggregatorRoute;
    stripe?: AggregatorRoute;
    ccavenue?: AggregatorRoute;
    rupifi?: AggregatorRoute;
    fynd?: AggregatorRoute;
    simpl?: AggregatorRoute;
};
export type PaymentOptionAndFlow = {
    paymentOption: Array<RootPaymentMode>;
    paymentFlows: PaymentFlow;
};
export type PaymentModeRouteResponse = {
    success: boolean;
    paymentOptions: PaymentOptionAndFlow;
};
export type OrderBeneficiaryDetails = {
    id: number;
    comment?: boolean;
    displayName: string;
    modifiedOn: string;
    createdOn: string;
    transferMode: string;
    bankName: string;
    address: string;
    subtitle: string;
    isActive: boolean;
    accountNo: string;
    mobile?: boolean;
    title: string;
    ifscCode: string;
    delightsUserName: string;
    email: string;
    branchName?: boolean;
    accountHolder: string;
    beneficiaryId: string;
};
export type OrderBeneficiaryResponse = {
    beneficiaries: Array<OrderBeneficiaryDetails>;
};
export type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
export type IfscCodeResponse = {
    branchName: string;
    success?: boolean;
    bankName: string;
};
export type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
export type AddBeneficiaryViaOtpVerificationRequest = {
    hashKey: string;
    otp: string;
    requestId: string;
};
export type AddBeneficiaryViaOtpVerificationResponse = {
    hashKey: string;
    otp: string;
    requestId: string;
};
export type WrongOtpError = {
    success: string;
    description: string;
};
export type BankDetails = {
    accountNo: string;
    comment?: string;
    mobile: string;
    address: string;
    ifscCode: string;
    email: string;
    bankName: string;
    branchName: string;
    accountHolder: string;
};
export type AddBeneficiaryDetailsRequest = {
    transferMode: string;
    delights: boolean;
    shipmentId: string;
    details: BankDetails;
    orderId: string;
};
export type RefundAccountResponse = {
    success: boolean;
    data?: any;
    message: string;
};
export type WalletOtpRequest = {
    countryCode: string;
    mobile: boolean;
};
export type WalletOtpResponse = {
    success?: boolean;
    requestId: string;
    isVerifiedFlag: string;
};
export type SetDefaultBeneficiaryRequest = {
    orderId: string;
    beneficiaryId: string;
};
export type SetDefaultBeneficiaryResponse = {
    success?: boolean;
    isBeneficiarySet: boolean;
};
export type OrderById = {
    order: OrderSchema;
};
export type OrderList = {
    orders: Array<any>;
    page: any;
};
export type ShipmentById = {
    shipment: any;
};
export type ShipmentReasons = {
    reasons: Array<any>;
};
export type ShipmentStatusUpdateBody = {
    shipments: any;
    forceTransition: boolean;
    task: boolean;
};
export type ShipmentStatusUpdate = {
    shipments: any;
};
export type ShipmentTrack = {
    results: Array<any>;
};
export type Bags = {
    item?: any;
    prices?: any;
    promotionEffectiveDiscount?: number;
    currentStatus?: any;
    bagStatus?: Array<any>;
    dates?: any;
    id?: number;
    status?: any;
    type?: string;
    financialBreakup?: Array<any>;
    reasons?: Array<any>;
    article?: any;
    journeyType?: string;
    currentOperationalStatus?: any;
    displayName?: string;
    entityType?: string;
    brand?: any;
    affiliateBagDetails?: any;
    gstDetails?: any;
    bagId?: number;
    bagUpdateTime?: number;
};
export type BreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
export type DeliveryAddress = {
    pincode?: string;
    landmark?: string;
    contactPerson?: string;
    phone?: string;
    state?: string;
    version?: string;
    address1?: string;
    createdAt?: string;
    addressType?: string;
    addressCategory?: string;
    area?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    email?: string;
    country?: string;
    address2?: string;
    updatedAt?: string;
    name?: string;
    address?: string;
};
export type Invoice = {
    updatedDate?: string;
    invoiceUrl?: string;
    labelUrl?: string;
};
export type ProductItems = {
    code?: string;
    lastUpdatedAt?: string;
    brand?: string;
    image?: Array<any>;
    l3Category?: number;
    brandId?: number;
    name?: string;
    canCancel?: boolean;
    size?: string;
    slugKey?: string;
    l3CategoryName?: string;
    l2Category?: Array<any>;
    id?: number;
    canReturn?: boolean;
    l1Category?: Array<any>;
    attributes?: any;
};
export type ShipmentMeta = {
    timestamp?: any;
    bagWeight?: any;
    dpOptions?: any;
    orderType?: string;
    sameStoreAvailable?: boolean;
    assignDpFromSb?: boolean;
    dpId?: string;
    weight?: number;
    formatted?: any;
    debugInfo?: any;
    dpSortKey?: string;
    packagingName?: string;
};
export type OrderSchema = {
    orderId?: string;
    breakupValues?: Array<BreakupValues>;
    orderCreatedTime?: string;
    shipments?: Array<Shipments>;
    totalShipmentsInOrder?: number;
    userInfo?: UserInfo;
};
export type Prices = {
    amountPaid?: number;
    priceMarked?: number;
    codCharges?: number;
    discount?: number;
    deliveryCharge?: number;
    fyndCredits?: number;
    cashback?: number;
    priceEffective?: number;
    valueOfGood?: number;
    refundAmount?: number;
    couponValue?: number;
    cashbackApplied?: number;
    refundCredit?: number;
};
export type ShipmentStatus = {
    title?: string;
    hexCode?: number;
};
export type ShipmentUserInfo = {
    gender?: string;
    mobile?: string;
    firstName?: string;
    lastName?: string;
};
export type Shipments = {
    orderId?: string;
    breakupValues?: Array<BreakupValues>;
    enableCanReturn?: boolean;
    paymentModeSource?: string;
    shipmentImages?: Array<string>;
    trackUrl?: string;
    trakingNo?: string;
    trackingDetails?: Array<TrackingDetails>;
    beneficiaryDetails?: boolean;
    canReturn?: boolean;
    enableTracking?: boolean;
    prices?: Prices;
    needHelpUrl?: string;
    shipmentId?: string;
    totalBags?: number;
    items?: Array<ProductItems>;
    deliveryAddress?: DeliveryAddress;
    paymentStatus?: string;
    invoice?: Invoice;
    totalItems?: number;
    bags?: Array<Bags>;
    canCancel?: boolean;
    paymentLogo?: string;
    shipmentCreatedAt?: string;
    shipmentStatus?: ShipmentStatus;
    userInfo?: ShipmentUserInfo;
    meta?: ShipmentMeta;
};
export type TrackingDetails = {
    isCurrent?: boolean;
    status?: string;
    time?: string;
    isPassed?: string;
};
export type UserInfo = {
    gender?: string;
    mobile?: string;
    name?: string;
    email?: string;
};
export type ApefaceApiError = {
    message?: string;
};
export type Article = {
    id?: string;
    points?: number;
    price?: number;
};
export type CatalogueOrderRequest = {
    articles?: Array<Article>;
};
export type CatalogueOrderResponse = {
    articles?: Array<Article>;
};
export type CursorPage = {
    hasNext?: boolean;
    hasPrevious?: boolean;
    itemTotal?: number;
    nextId?: string;
    type?: string;
};
export type Discount = {
    absolute?: number;
    currency?: string;
    displayAbsolute?: string;
    displayPercent?: string;
    percent?: number;
};
export type Error = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
export type Offer = {
    schedule?: string;
    active?: boolean;
    applicationId?: string;
    bannerImage?: Asset;
    createdAt?: string;
    infoAction?: Action;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    subText?: string;
    text?: string;
    type?: string;
    updatedAt?: string;
    updatedBy?: string;
    url?: string;
};
export type OrderDiscountRequest = {
    currency?: string;
    orderAmount: number;
};
export type OrderDiscountResponse = {
    appliedRuleBucket?: OrderDiscountRuleBucket;
    baseDiscount?: Discount;
    discount?: Discount;
    orderAmount?: number;
    points?: number;
};
export type OrderDiscountRuleBucket = {
    high?: number;
    low?: number;
    max?: number;
    value?: number;
    valueType?: string;
};
export type PointsHistory = {
    id?: string;
    applicationId?: string;
    claimed?: boolean;
    createdAt?: string;
    expiresOn?: string;
    meta?: string;
    points?: number;
    remainingPoints?: number;
    text1?: string;
    text2?: string;
    text3?: string;
    txnName?: string;
    updatedAt?: string;
    userId?: string;
};
export type PointsHistoryResponse = {
    history?: Array<PointsHistory>;
    page?: CursorPage;
};
export type PointsResponse = {
    points?: number;
};
export type RedeemReferralCodeRequest = {
    deviceId: string;
    referralCode: string;
};
export type RedeemReferralCodeResponse = {
    message?: string;
    points?: number;
    redeemed?: boolean;
    referrerId?: string;
    referrerInfo?: string;
};
export type ReferralDetailsResponse = {
    referral?: Offer;
    referrerInfo?: string;
    share?: ShareMessages;
    user?: any;
};
export type ShareMessages = {
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
export type Access = {
    answer?: boolean;
    askQuestion?: boolean;
    comment?: boolean;
    rnr?: boolean;
};
export type AddMediaListRequest = {
    entityId?: string;
    entityType?: string;
    mediaList?: Array<AddMediaRequest>;
    refId?: string;
    refType?: string;
};
export type AddMediaRequest = {
    cloudId?: string;
    cloudName?: string;
    cloudProvider?: string;
    entityId?: string;
    entityType?: string;
    mediaUrl?: string;
    refId?: string;
    refType?: string;
    tags?: Array<string>;
    thumbnailUrl?: string;
    type?: string;
};
export type Attribute = {
    createdOn?: string;
    description?: string;
    id?: string;
    modifiedOn?: string;
    name?: string;
    slug?: string;
    tags?: Array<TagMeta>;
};
export type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
export type CheckEligibilityResponse = {
    access?: Access;
    mediaCloud?: MediaCloud;
};
export type Cloud = {
    id?: string;
    name?: string;
    provider?: string;
};
export type CommentRequest = {
    comment: Array<string>;
    entityId: string;
    entityType: string;
};
export type CreateQNARequest = {
    choices?: Array<string>;
    entityId: string;
    entityType: string;
    maxLen?: number;
    sortPriority?: number;
    tags?: Array<string>;
    text: string;
    type?: string;
};
export type DeviceMeta = {
    appVersion?: string;
    platform?: string;
};
export type MediaCloud = {
    key?: string;
    name?: string;
    namespace?: string;
    path?: string;
    provider?: string;
    secret?: string;
};
export type MediaMeta = {
    cloud?: Cloud;
    comment?: Array<string>;
    description?: string;
    id?: string;
    type?: string;
    url?: Url;
};
export type PageCursor = {
    hasNext?: boolean;
    hasPrevious?: boolean;
    itemTotal?: number;
    nextId?: string;
    type?: string;
};
export type PageNumber = {
    current?: number;
    hasNext?: boolean;
    itemTotal?: number;
    size?: number;
    type?: string;
};
export type ReportAbuseRequest = {
    description?: string;
    entityId: string;
    entityType: string;
};
export type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
export type TagMeta = {
    media?: Array<MediaMeta>;
    name?: string;
    type?: string;
};
export type UpdateAbuseStatusRequest = {
    abusive?: boolean;
    active?: boolean;
    approve?: boolean;
    description?: string;
    entityId?: string;
    entityType?: string;
    id?: string;
};
export type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
export type UpdateCommentRequest = {
    active?: boolean;
    approve?: boolean;
    comment: Array<string>;
    id: string;
};
export type UpdateMediaListRequest = {
    approve?: boolean;
    archive?: boolean;
    entityType?: string;
    ids?: Array<string>;
};
export type UpdateQNARequest = {
    active?: boolean;
    approve?: boolean;
    choices?: Array<string>;
    id?: string;
    tags?: Array<string>;
};
export type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributesRating?: Array<AttributeObject>;
    description?: string;
    deviceMeta?: DeviceMeta;
    entityId?: string;
    entityType?: string;
    mediaResource?: Array<MediaMeta>;
    rating?: number;
    reviewId?: string;
    templateId?: string;
    title?: string;
};
export type UpdateVoteRequest = {
    action?: string;
    active?: boolean;
    id?: string;
    refId?: string;
    refType?: string;
};
export type Url = {
    main?: string;
    thumbnail?: string;
};
export type VoteRequest = {
    action?: string;
    entityId?: string;
    entityType?: string;
    refId?: string;
    refType?: string;
};
export type XCursorGetResponse = {
    items?: any;
    page?: PageCursor;
};
export type XInsertResponse = {
    ids?: string;
};
export type XNumberGetResponse = {
    items?: any;
    page?: PageNumber;
};
export type XUpdateResponse = {
    id?: string;
};
export type UpdateCartShipmentItem = {
    shipmentType: string;
    articleUid: string;
    quantity?: number;
};
export type UpdateCartShipmentRequest = {
    shipments: Array<UpdateCartShipmentItem>;
};
export type Files = {
    values: Array<string>;
    key: string;
};
export type CartPosCheckoutRequest = {
    paymentIdentifier?: string;
    billingAddressId?: number;
    addressId?: number;
    files?: Files;
    orderingStore?: number;
    extraMeta?: any;
    deliveryAddress?: any;
    paymentMode: string;
    pickAtStoreUid?: number;
    meta?: any;
    merchantCode?: string;
    pos?: boolean;
    staff?: any;
    aggregator?: string;
    orderType: string;
    billingAddress?: any;
    fyndstoreEmpId?: string;
    callbackUrl?: string;
    paymentAutoConfirm?: boolean;
    paymentParams?: any;
};
export type CartDeliveryModesResponse = {
    pickupStores?: Array<number>;
    availableModes?: Array<string>;
};
export type PickupStoreDetail = {
    state?: string;
    addressType?: string;
    area?: string;
    storeCode?: string;
    uid?: number;
    areaCode?: string;
    phone?: string;
    areaCodeSlug?: string;
    city?: string;
    country?: string;
    name?: string;
    landmark?: string;
    email?: string;
    pincode?: number;
    address?: string;
};
export type StoreDetailsResponse = {
    items?: Array<PickupStoreDetail>;
};
export type GetPincodeCityResponse = {
    requestUuid: string;
    stormbreakerUuid: string;
    success: boolean;
    data: Array<any>;
};
export type GetTatProductReqBody = {
    locationDetails: Array<any>;
    source: string;
    toPincode: string;
    action: string;
    identifier: string;
    journey: string;
};
export type GetTatProductResponse = {
    locationDetails: Array<any>;
    requestUuid: string;
    error: any;
    toCity: string;
    source: string;
    toPincode: string;
    action: string;
    stormbreakerUuid: string;
    success: boolean;
    identifier: string;
    journey: string;
};
/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductBrand
        
        
        @property { string } [name]
        
        @property { ProductListingAction } [action]
        
        @property { Media } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [value]
        
        @property { string } [key]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { string } [title]
        
        @property { Array<ProductDetailAttribute> } [details]
        
         
    */
/**
        @typedef ProductDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { string } [type]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { string } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { boolean } [hasVariant]
        
        @property { string } slug
        
        @property { string } [productOnlineDate]
        
        @property { string } [itemType]
        
        @property { string } [name]
        
        @property { string } [imageNature]
        
        @property { string } [description]
        
        @property { Array<Media> } [medias]
        
        @property { Object } [attributes]
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { number } [rating]
        
        @property { Array<string> } [similars]
        
        @property { string } [color]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [error]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { string } [value]
        
        @property { string } [display]
        
        @property { boolean } [isAvailable]
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [max]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price } [effective]
        
        @property { Price } [marked]
        
         
    */
/**
        @typedef ProductSizeStores
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef ProductSizes
        
        
        @property { boolean } [sellable]
        
        @property { Object } [sizeChart]
        
        @property { string } [discount]
        
        @property { Array<ProductSize> } [sizes]
        
        @property { ProductListingPrice } [price]
        
        @property { ProductSizeStores } [stores]
        
         
    */
/**
        @typedef Seller
        
        
        @property { string } [name]
        
        @property { number } [count]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Store
        
        
        @property { string } [name]
        
        @property { number } [count]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */
/**
        @typedef ProductStockPrice
        
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
         
    */
/**
        @typedef ProductSizePriceResponse
        
        
        @property { Array<Object> } [strategyWiseListing]
        
        @property { Seller } [seller]
        
        @property { Array<number> } [longLat]
        
        @property { Store } [store]
        
        @property { string } [specialBadge]
        
        @property { number } [sellerCount]
        
        @property { string } [discount]
        
        @property { string } [itemType]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { number } [pincode]
        
        @property { Object } [set]
        
        @property { number } [quantity]
        
        @property { string } [articleId]
        
        @property { ProductStockPrice } [pricePerPrice]
        
        @property { ProductStockPrice } [price]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { number } [current]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [type]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef ProductSizeSellerFilter
        
        
        @property { string } [value]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef ProductSizeSellersResponse
        
        
        @property { Array<ProductSizePriceResponse> } [items]
        
        @property { Page } page
        
        @property { Array<ProductSizeSellerFilter> } [sortOn]
        
         
    */
/**
        @typedef AttributeDetail
        
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { string } [description]
        
         
    */
/**
        @typedef ProductsComparisonResponse
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
         
    */
/**
        @typedef ProductCompareResponse
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { Array<ProductDetail> } [items]
        
         
    */
/**
        @typedef ProductFrequentlyComparedSimilarResponse
        
        
        @property { Array<ProductCompareResponse> } [similars]
        
         
    */
/**
        @typedef ProductSimilarItem
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { Array<ProductDetail> } [items]
        
         
    */
/**
        @typedef SimilarProductByTypeResponse
        
        
        @property { Array<ProductSimilarItem> } [similars]
        
         
    */
/**
        @typedef ProductVariantItemResponse
        
        
        @property { string } [value]
        
        @property { string } [color]
        
        @property { string } [colorName]
        
        @property { string } [slug]
        
        @property { boolean } [isAvailable]
        
        @property { string } [name]
        
        @property { Array<Media> } [medias]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductVariantResponse
        
        
        @property { Array<ProductVariantItemResponse> } [items]
        
        @property { string } [header]
        
        @property { string } [displayType]
        
         
    */
/**
        @typedef ProductVariantsResponse
        
        
        @property { Array<ProductVariantResponse> } [variants]
        
         
    */
/**
        @typedef CompanyDetail
        
        
        @property { number } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { number } [id]
        
        @property { string } [city]
        
        @property { string } [name]
        
        @property { string } [code]
        
         
    */
/**
        @typedef ProductStockStatusItem
        
        
        @property { CompanyDetail } [company]
        
        @property { Seller } [seller]
        
        @property { number } [itemId]
        
        @property { StoreDetail } [store]
        
        @property { string } [size]
        
        @property { number } [quantity]
        
        @property { Object } [identifier]
        
        @property { ProductStockPrice } [price]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef ProductStockStatusResponse
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
    */
/**
        @typedef ProductStockPolling
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { boolean } [sellable]
        
        @property { Array<string> } [highlights]
        
        @property { string } [type]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { string } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { boolean } [hasVariant]
        
        @property { ProductListingPrice } [price]
        
        @property { string } slug
        
        @property { string } [discount]
        
        @property { string } [productOnlineDate]
        
        @property { string } [itemType]
        
        @property { string } [name]
        
        @property { string } [imageNature]
        
        @property { string } [description]
        
        @property { Array<Media> } [medias]
        
        @property { Object } [attributes]
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { number } [rating]
        
        @property { Array<string> } [similars]
        
        @property { string } [color]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } value
        
        @property { string } display
        
        @property { string } [queryFormat]
        
        @property { string } [currencySymbol]
        
        @property { number } [max]
        
        @property { number } [selectedMin]
        
        @property { boolean } isSelected
        
        @property { number } [min]
        
        @property { number } [count]
        
        @property { string } [currencyCode]
        
        @property { number } [selectedMax]
        
        @property { string } [displayFormat]
        
         
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
        @typedef ProductListingResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Page } page
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { Media } [landscape]
        
        @property { Media } [portrait]
        
         
    */
/**
        @typedef BrandItem
        
        
        @property { Media } [logo]
        
        @property { string } [slug]
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { Array<string> } [departments]
        
        @property { ImageUrls } [banners]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef BrandDetailResponse
        
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { Media } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryItems
        
        
        @property { string } [slug]
        
        @property { Array<Object> } [childs]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */
/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentIdentifier> } [departments]
        
        @property { Array<DepartmentCategoryTree> } [data]
        
         
    */
/**
        @typedef CategoryMetaResponse
        
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { Media } [logo]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef HomeListingResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
        @property { string } [message]
        
         
    */
/**
        @typedef Department
        
        
        @property { number } [priorityOrder]
        
        @property { Media } [logo]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */
/**
        @typedef Query
        
        
        @property { Array<string> } [brand]
        
        @property { Array<string> } [category]
        
         
    */
/**
        @typedef AutocompletePage
        
        
        @property { Query } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Action
        
        
        @property { AutocompletePage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteItem
        
        
        @property { string } [display]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef AutoCompleteResponse
        
        
        @property { Array<AutocompleteItem> } [items]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [badge]
        
        @property { Media } [logo]
        
        @property { Object } [query]
        
        @property { string } [type]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [schedule]
        
        @property { Object } [meta]
        
        @property { string } [appId]
        
        @property { ProductListingAction } [action]
        
        @property { Array<string> } [tag]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [uid]
        
        @property { boolean } [allowSort]
        
        @property { boolean } [allowFacets]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
         
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
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } page
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Array<string> } [tag]
        
        @property { Object } [badge]
        
        @property { Media } [logo]
        
        @property { string } [slug]
        
        @property { Object } [query]
        
        @property { Object } [schedule]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { boolean } [allowSort]
        
        @property { string } [description]
        
        @property { string } [type]
        
        @property { boolean } [allowFacets]
        
        @property { string } [appId]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [isActive]
        
        @property { Object } [cron]
        
         
    */
/**
        @typedef GetFollowListingResponse
        
        
        @property { Array<Object> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef FollowPostResponse
        
        
        @property { string } id
        
        @property { string } message
        
         
    */
/**
        @typedef FollowerCountResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef FollowIdsData
        
        
        @property { Array<number> } [collections]
        
        @property { Array<number> } [brands]
        
        @property { Array<number> } [products]
        
         
    */
/**
        @typedef FollowIdsResponse
        
        
        @property { FollowIdsData } [data]
        
         
    */
/**
        @typedef LatLong
        
        
        @property { Array<number> } [coordinates]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Store1
        
        
        @property { string } [address]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [name]
        
        @property { string } [storeEmail]
        
        @property { LatLong } [latLong]
        
        @property { string } [storeCode]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef StoreListingResponse
        
        
        @property { Array<Store1> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [productSlug]
        
         
    */
/**
        @typedef ProductAction
        
        
        @property { ActionQuery } [query]
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef CategoryInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef BaseInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Image
        
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { ProductAction } [action]
        
        @property { number } [uid]
        
        @property { Array<CategoryInfo> } [categories]
        
        @property { BaseInfo } [brand]
        
        @property { Array<Image> } [images]
        
         
    */
/**
        @typedef ProductPrice
        
        
        @property { number } [marked]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [selling]
        
        @property { string } [currencyCode]
        
        @property { number } [addOn]
        
         
    */
/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [converted]
        
        @property { ProductPrice } [base]
        
         
    */
/**
        @typedef ProductAvailability
        
        
        @property { Array<string> } [sizes]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [isValid]
        
        @property { boolean } [deliverable]
        
        @property { number } [otherStoreQuantity]
        
         
    */
/**
        @typedef BasePrice
        
        
        @property { number } [marked]
        
        @property { number } [effective]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
         
    */
/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [converted]
        
        @property { BasePrice } [base]
        
         
    */
/**
        @typedef ProductArticle
        
        
        @property { number } [quantity]
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [type]
        
        @property { BaseInfo } [seller]
        
        @property { string } [uid]
        
        @property { string } [size]
        
        @property { BaseInfo } [store]
        
         
    */
/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */
/**
        @typedef CartProductInfo
        
        
        @property { Product } [product]
        
        @property { number } [quantity]
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [couponMessage]
        
        @property { string } [key]
        
        @property { Object } [bulkOffer]
        
        @property { ProductAvailability } [availability]
        
        @property { string } [discount]
        
        @property { ProductArticle } [article]
        
        @property { boolean } [isSet]
        
        @property { string } [message]
        
        @property { CartProductIdentifer } identifiers
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { number } [applicable]
        
        @property { number } [total]
        
        @property { boolean } [isApplied]
        
        @property { string } [description]
        
         
    */
/**
        @typedef RawBreakup
        
        
        @property { number } [total]
        
        @property { number } [coupon]
        
        @property { number } [fyndCash]
        
        @property { number } [subtotal]
        
        @property { number } [youSaved]
        
        @property { number } [codCharge]
        
        @property { number } [deliveryCharge]
        
         
    */
/**
        @typedef CouponBreakup
        
        
        @property { boolean } [isApplied]
        
        @property { string } [code]
        
        @property { string } [type]
        
        @property { number } [uid]
        
        @property { string } [message]
        
        @property { number } [value]
        
         
    */
/**
        @typedef DisplayBreakup
        
        
        @property { string } [key]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { Array<string> } [message]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef CartBreakup
        
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { RawBreakup } [raw]
        
        @property { CouponBreakup } [coupon]
        
        @property { Array<DisplayBreakup> } [display]
        
         
    */
/**
        @typedef PromiseTimestamp
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef PromiseFormatted
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */
/**
        @typedef ShipmentPromise
        
        
        @property { PromiseTimestamp } [timestamp]
        
        @property { PromiseFormatted } [formatted]
        
         
    */
/**
        @typedef CartCurrency
        
        
        @property { string } [code]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef CartResponse
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { number } [cartId]
        
        @property { string } [couponText]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { boolean } [restrictCheckout]
        
        @property { boolean } [isValid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartCurrency } [currency]
        
        @property { string } [uid]
        
        @property { string } [message]
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { string } [lastModified]
        
        @property { string } [comment]
        
         
    */
/**
        @typedef AddProductCart
        
        
        @property { number } [quantity]
        
        @property { number } [itemId]
        
        @property { number } [sellerId]
        
        @property { number } [storeId]
        
        @property { Object } [articleAssignment]
        
        @property { string } [display]
        
        @property { boolean } [pos]
        
        @property { string } [articleId]
        
        @property { string } [itemSize]
        
         
    */
/**
        @typedef AddCartRequest
        
        
        @property { Array<AddProductCart> } [items]
        
         
    */
/**
        @typedef AddCartResponse
        
        
        @property { boolean } [partial]
        
        @property { CartResponse } [cart]
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef UpdateProductCart
        
        
        @property { number } [quantity]
        
        @property { number } [itemId]
        
        @property { number } [itemIndex]
        
        @property { CartProductIdentifer } identifiers
        
        @property { string } [articleId]
        
        @property { string } [itemSize]
        
         
    */
/**
        @typedef UpdateCartRequest
        
        
        @property { Array<UpdateProductCart> } [items]
        
        @property { string } operation
        
         
    */
/**
        @typedef UpdateCartResponse
        
        
        @property { CartResponse } [cart]
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartItemCountResponse
        
        
        @property { number } [userCartItemsCount]
        
         
    */
/**
        @typedef PageCoupon
        
        
        @property { number } [total]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [totalItemCount]
        
         
    */
/**
        @typedef Coupon
        
        
        @property { boolean } [isApplied]
        
        @property { string } [subTitle]
        
        @property { number } [minimumCartValue]
        
        @property { string } [title]
        
        @property { boolean } [isApplicable]
        
        @property { number } [couponValue]
        
        @property { string } [couponCode]
        
        @property { string } [message]
        
        @property { string } [expiresOn]
        
        @property { number } [maxDiscountValue]
        
         
    */
/**
        @typedef GetCouponResponse
        
        
        @property { PageCoupon } [page]
        
        @property { Array<Coupon> } [availableCouponList]
        
         
    */
/**
        @typedef ApplyCouponRequest
        
        
        @property { string } couponCode
        
         
    */
/**
        @typedef OfferSeller
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef OfferPrice
        
        
        @property { number } [marked]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { string } [currencyCode]
        
        @property { number } [bulkEffective]
        
         
    */
/**
        @typedef OfferItem
        
        
        @property { number } [quantity]
        
        @property { OfferPrice } [price]
        
        @property { number } [total]
        
        @property { string } [type]
        
        @property { boolean } [autoApplied]
        
        @property { number } [margin]
        
        @property { boolean } [best]
        
         
    */
/**
        @typedef BulkPriceOffer
        
        
        @property { OfferSeller } [seller]
        
        @property { Array<OfferItem> } [offers]
        
         
    */
/**
        @typedef BulkPriceResponse
        
        
        @property { Array<BulkPriceOffer> } [data]
        
         
    */
/**
        @typedef GeoLocation
        
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
         
    */
/**
        @typedef Address
        
        
        @property { GeoLocation } [geoLocation]
        
        @property { string } [areaCodeSlug]
        
        @property { boolean } [isActive]
        
        @property { string } [country]
        
        @property { string } [area]
        
        @property { string } [name]
        
        @property { Array<Object> } [tags]
        
        @property { number } [addressId]
        
        @property { string } [landmark]
        
        @property { string } [checkoutMode]
        
        @property { string } [areaCode]
        
        @property { boolean } [isDefaultAddress]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { number } [uid]
        
        @property { string } [address]
        
        @property { string } [countryCode]
        
        @property { Object } [meta]
        
        @property { string } [userId]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
         
    */
/**
        @typedef GetAddressesResponse
        
        
        @property { Array<Address> } [address]
        
         
    */
/**
        @typedef SaveAddressResponse
        
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
        @property { string } [success]
        
         
    */
/**
        @typedef UpdateAddressResponse
        
        
        @property { number } [addressId]
        
        @property { boolean } [isUpdated]
        
        @property { boolean } [isDefaultAddress]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef DeleteAddressResponse
        
        
        @property { number } [addressId]
        
        @property { boolean } [isDeleted]
        
         
    */
/**
        @typedef SelectCartAddressRequest
        
        
        @property { string } [addressId]
        
        @property { string } [uid]
        
        @property { number } [billingAddressId]
        
         
    */
/**
        @typedef UpdateCartPaymentRequest
        
        
        @property { string } [merchantCode]
        
        @property { number } [addressId]
        
        @property { number } [uid]
        
        @property { string } [aggregatorName]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [paymentMode]
        
         
    */
/**
        @typedef CouponValidity
        
        
        @property { number } [discount]
        
        @property { string } [displayMessageEn]
        
        @property { string } [code]
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef PaymentUpdate
        
        
        @property { CouponValidity } [couponValidity]
        
        @property { boolean } success
        
        @property { string } [message]
        
         
    */
/**
        @typedef ShipmentResponse
        
        
        @property { string } [shipmentType]
        
        @property { string } [boxType]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { number } [fulfillmentId]
        
        @property { number } [dpId]
        
        @property { string } [fulfillmentType]
        
        @property { number } [shipments]
        
        @property { string } [orderType]
        
        @property { Object } [dpOptions]
        
        @property { ShipmentPromise } [promise]
        
         
    */
/**
        @typedef CartShipmentsResponse
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { number } [cartId]
        
        @property { string } [couponText]
        
        @property { boolean } [restrictCheckout]
        
        @property { boolean } [isValid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartCurrency } [currency]
        
        @property { Array<ShipmentResponse> } [shipments]
        
        @property { string } [uid]
        
        @property { string } [message]
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { string } [lastModified]
        
        @property { string } [comment]
        
         
    */
/**
        @typedef CartCheckoutRequest
        
        
        @property { string } [callbackUrl]
        
        @property { Object } [meta]
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [merchantCode]
        
        @property { Object } [extraMeta]
        
        @property { Object } [staff]
        
        @property { string } [aggregator]
        
        @property { Object } [billingAddress]
        
        @property { number } [addressId]
        
        @property { Object } [paymentParams]
        
        @property { Object } [deliveryAddress]
        
        @property { number } [orderingStore]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [billingAddressId]
        
        @property { string } paymentMode
        
         
    */
/**
        @typedef CheckCart
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { boolean } [restrictCheckout]
        
        @property { boolean } [success]
        
        @property { string } [codMessage]
        
        @property { boolean } [isValid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { CartCurrency } [currency]
        
        @property { string } [gstin]
        
        @property { string } [errorMessage]
        
        @property { string } [orderId]
        
        @property { string } [checkoutMode]
        
        @property { number } [codCharges]
        
        @property { string } [couponText]
        
        @property { number } [deliveryChargeOrderValue]
        
        @property { Array<Object> } [storeEmps]
        
        @property { string } [userType]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { boolean } [codAvailable]
        
        @property { number } [cartId]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { number } [deliveryCharges]
        
        @property { string } [message]
        
        @property { string } [storeCode]
        
        @property { string } [comment]
        
         
    */
/**
        @typedef CartCheckoutResponse
        
        
        @property { string } [callbackUrl]
        
        @property { Object } [data]
        
        @property { boolean } [success]
        
        @property { string } [message]
        
        @property { string } [orderId]
        
        @property { CheckCart } [cart]
        
        @property { string } [appInterceptUrl]
        
         
    */
/**
        @typedef CartMetaRequest
        
        
        @property { string } [checkoutMode]
        
        @property { string } [comment]
        
        @property { Object } [pickUpCustomerDetails]
        
        @property { string } [gstin]
        
         
    */
/**
        @typedef CartMetaResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartMetaMissingResponse
        
        
        @property { Array<string> } [errors]
        
         
    */
/**
        @typedef GetShareCartLinkRequest
        
        
        @property { number } uid
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetShareCartLinkResponse
        
        
        @property { string } [token]
        
        @property { string } [shareUrl]
        
         
    */
/**
        @typedef SharedCartDetails
        
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [user]
        
        @property { Object } [source]
        
        @property { string } [token]
        
         
    */
/**
        @typedef SharedCart
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { number } [cartId]
        
        @property { SharedCartDetails } [sharedCartDetails]
        
        @property { string } [couponText]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { boolean } [restrictCheckout]
        
        @property { boolean } [isValid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartCurrency } [currency]
        
        @property { string } [uid]
        
        @property { string } [message]
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { string } [lastModified]
        
        @property { string } [comment]
        
         
    */
/**
        @typedef SharedCartResponse
        
        
        @property { SharedCart } [cart]
        
        @property { string } [error]
        
         
    */
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
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
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
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
        @typedef CommunicationConsentReq
        
        
        @property { string } [response]
        
        @property { string } [action]
        
        @property { string } [channel]
        
         
    */
/**
        @typedef CommunicationConsentRes
        
        
        @property { string } [appId]
        
        @property { string } [userId]
        
        @property { Object } [channels]
        
         
    */
/**
        @typedef CommunicationConsent
        
        
        @property { string } [appId]
        
        @property { string } [userId]
        
        @property { Object } [channels]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
         
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
        @typedef QRCodeResp
        
        
        @property { string } [link]
        
        @property { string } [svg]
        
         
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
        @typedef ApplicationAboutResponse
        
        
        @property { Object } [applicationInfo]
        
         
    */
/**
        @typedef AppVersionRequest
        
        
        @property { ApplicationVersionRequest } application
        
        @property { Device } device
        
        @property { string } [locale]
        
        @property { string } [timezone]
        
         
    */
/**
        @typedef ApplicationVersionRequest
        
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } [namespace]
        
        @property { string } [token]
        
        @property { string } version
        
         
    */
/**
        @typedef Device
        
        
        @property { number } [build]
        
        @property { string } [model]
        
        @property { OS } os
        
         
    */
/**
        @typedef OS
        
        
        @property { string } name
        
        @property { string } [version]
        
         
    */
/**
        @typedef Language
        
        
        @property { string } [name]
        
        @property { string } [code]
        
         
    */
/**
        @typedef LanguageResponse
        
        
        @property { Array<Language> } [items]
        
         
    */
/**
        @typedef TokensResponse
        
        
        @property { Object } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef AppStaffResponse
        
        
        @property { Array<AppStaff> } [staffUsers]
        
         
    */
/**
        @typedef UpdateDialog
        
        
        @property { string } [type]
        
        @property { number } [interval]
        
         
    */
/**
        @typedef OrderingStoreSelectRequest
        
        
        @property { OrderingStoreSelect } orderingStore
        
         
    */
/**
        @typedef OrderingStoreSelect
        
        
        @property { string } id
        
        @property { number } uid
        
        @property { string } storeCode
        
         
    */
/**
        @typedef AppStaff
        
        
        @property { string } [id]
        
        @property { boolean } [orderIncent]
        
        @property { Array<number> } [stores]
        
        @property { string } [application]
        
        @property { string } [title]
        
        @property { string } [user]
        
        @property { string } [employeeCode]
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [profilePicUrl]
        
         
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
        @typedef InvalidPayloadRequest
        
        
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
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
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
        @typedef AggregatorConfigDetail
        
        
        @property { string } [api]
        
        @property { string } secret
        
        @property { boolean } [sdk]
        
        @property { string } [verifyApi]
        
        @property { string } [merchantId]
        
        @property { string } key
        
        @property { string } configType
        
        @property { string } [userId]
        
        @property { string } [pin]
        
        @property { string } [merchantKey]
        
         
    */
/**
        @typedef AggregatorsConfigDetailResponse
        
        
        @property { AggregatorConfigDetail } [payumoney]
        
        @property { AggregatorConfigDetail } [mswipe]
        
        @property { AggregatorConfigDetail } [juspay]
        
        @property { AggregatorConfigDetail } [simpl]
        
        @property { AggregatorConfigDetail } [stripe]
        
        @property { AggregatorConfigDetail } [razorpay]
        
        @property { AggregatorConfigDetail } [ccavenue]
        
        @property { boolean } success
        
        @property { string } env
        
        @property { AggregatorConfigDetail } [rupifi]
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */
/**
        @typedef AttachCardRequest
        
        
        @property { string } cardId
        
        @property { boolean } [refresh]
        
         
    */
/**
        @typedef AttachCardsResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
        @property { string } [message]
        
         
    */
/**
        @typedef CardPaymentGateway
        
        
        @property { string } [api]
        
        @property { string } aggregator
        
        @property { string } [customerId]
        
         
    */
/**
        @typedef ActiveCardPaymentGatewayResponse
        
        
        @property { CardPaymentGateway } cards
        
        @property { boolean } success
        
        @property { string } message
        
         
    */
/**
        @typedef Card
        
        
        @property { number } [expYear]
        
        @property { string } [cardIsin]
        
        @property { string } [nickname]
        
        @property { string } [cardNumber]
        
        @property { string } [cardId]
        
        @property { string } [cardToken]
        
        @property { string } [cardName]
        
        @property { string } [cardReference]
        
        @property { boolean } [expired]
        
        @property { string } aggregatorName
        
        @property { string } [cardFingerprint]
        
        @property { number } [expMonth]
        
        @property { string } [cardBrand]
        
        @property { string } [cardType]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardIssuer]
        
         
    */
/**
        @typedef ListCardsResponse
        
        
        @property { boolean } success
        
        @property { Array<Card> } [data]
        
        @property { string } message
        
         
    */
/**
        @typedef DeletehCardRequest
        
        
        @property { string } cardId
        
         
    */
/**
        @typedef DeleteCardsResponse
        
        
        @property { boolean } success
        
        @property { string } [message]
        
         
    */
/**
        @typedef ValidateCustomerRequest
        
        
        @property { string } aggregator
        
        @property { string } payload
        
        @property { string } phoneNumber
        
        @property { number } transactionAmountInPaise
        
        @property { Object } merchantParams
        
         
    */
/**
        @typedef ValidateCustomerResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
        @property { string } message
        
         
    */
/**
        @typedef ChargeCustomerRequest
        
        
        @property { string } aggregator
        
        @property { number } amount
        
        @property { string } [transactionToken]
        
        @property { string } orderId
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef ChargeCustomerResponse
        
        
        @property { string } [deliveryAddressId]
        
        @property { string } aggregator
        
        @property { string } orderId
        
        @property { string } message
        
        @property { boolean } success
        
        @property { string } [cartId]
        
        @property { string } status
        
         
    */
/**
        @typedef PaymentInitializationRequest
        
        
        @property { string } razorpayPaymentId
        
        @property { string } aggregator
        
        @property { string } [virtualId]
        
        @property { number } timeout
        
        @property { string } merchantOrderId
        
        @property { string } method
        
        @property { string } aggregatorOrderId
        
        @property { string } pollingUrl
        
        @property { string } customerId
        
         
    */
/**
        @typedef PaymentInitializationResponse
        
        
        @property { string } [razorpayPaymentId]
        
        @property { string } aggregator
        
        @property { string } [virtualId]
        
        @property { string } merchantOrderId
        
        @property { string } [vpa]
        
        @property { number } [amount]
        
        @property { number } [timeout]
        
        @property { string } [currency]
        
        @property { string } method
        
        @property { string } [aggregatorOrderId]
        
        @property { string } pollingUrl
        
        @property { string } [customerId]
        
        @property { boolean } success
        
        @property { string } [bqrImage]
        
        @property { string } [status]
        
         
    */
/**
        @typedef PaymentStatusUpdateRequest
        
        
        @property { string } contact
        
        @property { string } aggregator
        
        @property { string } merchantOrderId
        
        @property { string } vpa
        
        @property { number } amount
        
        @property { string } email
        
        @property { string } orderId
        
        @property { string } currency
        
        @property { string } method
        
        @property { string } customerId
        
        @property { string } status
        
         
    */
/**
        @typedef PaymentStatusUpdateResponse
        
        
        @property { string } aggregatorName
        
        @property { string } status
        
        @property { boolean } retry
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { number } [retryCount]
        
        @property { number } [displayPriority]
        
        @property { string } [cardName]
        
        @property { string } [displayName]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardIsin]
        
        @property { string } [cardNumber]
        
        @property { string } [cardId]
        
        @property { string } [code]
        
        @property { string } [cardReference]
        
        @property { number } [expMonth]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [cardIssuer]
        
        @property { string } [intentFlow]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardBrand]
        
        @property { number } [expYear]
        
        @property { string } [nickname]
        
        @property { number } [timeout]
        
        @property { string } [merchantCode]
        
        @property { string } [cardToken]
        
        @property { string } [name]
        
        @property { boolean } [expired]
        
        @property { string } aggregatorName
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardType]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { number } displayPriority
        
        @property { string } name
        
        @property { boolean } [addCardEnabled]
        
        @property { string } [aggregatorName]
        
        @property { boolean } [anonymousEnable]
        
        @property { string } displayName
        
        @property { Array<PaymentModeList> } [list]
        
         
    */
/**
        @typedef AggregatorRoute
        
        
        @property { string } [paymentFlow]
        
        @property { string } [apiLink]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef PaymentFlow
        
        
        @property { AggregatorRoute } [upiRazorpay]
        
        @property { AggregatorRoute } [razorpay]
        
        @property { AggregatorRoute } [juspay]
        
        @property { AggregatorRoute } [payubiz]
        
        @property { AggregatorRoute } [bqrRazorpay]
        
        @property { AggregatorRoute } [stripe]
        
        @property { AggregatorRoute } [ccavenue]
        
        @property { AggregatorRoute } [rupifi]
        
        @property { AggregatorRoute } [fynd]
        
        @property { AggregatorRoute } [simpl]
        
         
    */
/**
        @typedef PaymentOptionAndFlow
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
        @property { PaymentFlow } paymentFlows
        
         
    */
/**
        @typedef PaymentModeRouteResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptionAndFlow } paymentOptions
        
         
    */
/**
        @typedef OrderBeneficiaryDetails
        
        
        @property { number } id
        
        @property { boolean } [comment]
        
        @property { string } displayName
        
        @property { string } modifiedOn
        
        @property { string } createdOn
        
        @property { string } transferMode
        
        @property { string } bankName
        
        @property { string } address
        
        @property { string } subtitle
        
        @property { boolean } isActive
        
        @property { string } accountNo
        
        @property { boolean } [mobile]
        
        @property { string } title
        
        @property { string } ifscCode
        
        @property { string } delightsUserName
        
        @property { string } email
        
        @property { boolean } [branchName]
        
        @property { string } accountHolder
        
        @property { string } beneficiaryId
        
         
    */
/**
        @typedef OrderBeneficiaryResponse
        
        
        @property { Array<OrderBeneficiaryDetails> } beneficiaries
        
         
    */
/**
        @typedef NotFoundResourceError
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */
/**
        @typedef IfscCodeResponse
        
        
        @property { string } branchName
        
        @property { boolean } [success]
        
        @property { string } bankName
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */
/**
        @typedef AddBeneficiaryViaOtpVerificationRequest
        
        
        @property { string } hashKey
        
        @property { string } otp
        
        @property { string } requestId
        
         
    */
/**
        @typedef AddBeneficiaryViaOtpVerificationResponse
        
        
        @property { string } hashKey
        
        @property { string } otp
        
        @property { string } requestId
        
         
    */
/**
        @typedef WrongOtpError
        
        
        @property { string } success
        
        @property { string } description
        
         
    */
/**
        @typedef BankDetails
        
        
        @property { string } accountNo
        
        @property { string } [comment]
        
        @property { string } mobile
        
        @property { string } address
        
        @property { string } ifscCode
        
        @property { string } email
        
        @property { string } bankName
        
        @property { string } branchName
        
        @property { string } accountHolder
        
         
    */
/**
        @typedef AddBeneficiaryDetailsRequest
        
        
        @property { string } transferMode
        
        @property { boolean } delights
        
        @property { string } shipmentId
        
        @property { BankDetails } details
        
        @property { string } orderId
        
         
    */
/**
        @typedef RefundAccountResponse
        
        
        @property { boolean } success
        
        @property { Object } [data]
        
        @property { string } message
        
         
    */
/**
        @typedef WalletOtpRequest
        
        
        @property { string } countryCode
        
        @property { boolean } mobile
        
         
    */
/**
        @typedef WalletOtpResponse
        
        
        @property { boolean } [success]
        
        @property { string } requestId
        
        @property { string } isVerifiedFlag
        
         
    */
/**
        @typedef SetDefaultBeneficiaryRequest
        
        
        @property { string } orderId
        
        @property { string } beneficiaryId
        
         
    */
/**
        @typedef SetDefaultBeneficiaryResponse
        
        
        @property { boolean } [success]
        
        @property { boolean } isBeneficiarySet
        
         
    */
/**
        @typedef OrderById
        
        
        @property { OrderSchema } order
        
         
    */
/**
        @typedef OrderList
        
        
        @property { Array<Object> } orders
        
        @property { Object } page
        
         
    */
/**
        @typedef ShipmentById
        
        
        @property { Object } shipment
        
         
    */
/**
        @typedef ShipmentReasons
        
        
        @property { Array<Object> } reasons
        
         
    */
/**
        @typedef ShipmentStatusUpdateBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */
/**
        @typedef ShipmentStatusUpdate
        
        
        @property { Object } shipments
        
         
    */
/**
        @typedef ShipmentTrack
        
        
        @property { Array<Object> } results
        
         
    */
/**
        @typedef Bags
        
        
        @property { Object } [item]
        
        @property { Object } [prices]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { Object } [currentStatus]
        
        @property { Array<Object> } [bagStatus]
        
        @property { Object } [dates]
        
        @property { number } [id]
        
        @property { Object } [status]
        
        @property { string } [type]
        
        @property { Array<Object> } [financialBreakup]
        
        @property { Array<Object> } [reasons]
        
        @property { Object } [article]
        
        @property { string } [journeyType]
        
        @property { Object } [currentOperationalStatus]
        
        @property { string } [displayName]
        
        @property { string } [entityType]
        
        @property { Object } [brand]
        
        @property { Object } [affiliateBagDetails]
        
        @property { Object } [gstDetails]
        
        @property { number } [bagId]
        
        @property { number } [bagUpdateTime]
        
         
    */
/**
        @typedef BreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef DeliveryAddress
        
        
        @property { string } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [addressCategory]
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [country]
        
        @property { string } [address2]
        
        @property { string } [updatedAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
         
    */
/**
        @typedef ProductItems
        
        
        @property { string } [code]
        
        @property { string } [lastUpdatedAt]
        
        @property { string } [brand]
        
        @property { Array<any> } [image]
        
        @property { number } [l3Category]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { boolean } [canCancel]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { string } [l3CategoryName]
        
        @property { Array<any> } [l2Category]
        
        @property { number } [id]
        
        @property { boolean } [canReturn]
        
        @property { Array<any> } [l1Category]
        
        @property { Object } [attributes]
        
         
    */
/**
        @typedef ShipmentMeta
        
        
        @property { Object } [timestamp]
        
        @property { Object } [bagWeight]
        
        @property { Object } [dpOptions]
        
        @property { string } [orderType]
        
        @property { boolean } [sameStoreAvailable]
        
        @property { boolean } [assignDpFromSb]
        
        @property { string } [dpId]
        
        @property { number } [weight]
        
        @property { Object } [formatted]
        
        @property { Object } [debugInfo]
        
        @property { string } [dpSortKey]
        
        @property { string } [packagingName]
        
         
    */
/**
        @typedef OrderSchema
        
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { string } [orderCreatedTime]
        
        @property { Array<Shipments> } [shipments]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { UserInfo } [userInfo]
        
         
    */
/**
        @typedef Prices
        
        
        @property { number } [amountPaid]
        
        @property { number } [priceMarked]
        
        @property { number } [codCharges]
        
        @property { number } [discount]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [cashback]
        
        @property { number } [priceEffective]
        
        @property { number } [valueOfGood]
        
        @property { number } [refundAmount]
        
        @property { number } [couponValue]
        
        @property { number } [cashbackApplied]
        
        @property { number } [refundCredit]
        
         
    */
/**
        @typedef ShipmentStatus
        
        
        @property { string } [title]
        
        @property { number } [hexCode]
        
         
    */
/**
        @typedef ShipmentUserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
         
    */
/**
        @typedef Shipments
        
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { boolean } [enableCanReturn]
        
        @property { string } [paymentModeSource]
        
        @property { Array<string> } [shipmentImages]
        
        @property { string } [trackUrl]
        
        @property { string } [trakingNo]
        
        @property { Array<TrackingDetails> } [trackingDetails]
        
        @property { boolean } [beneficiaryDetails]
        
        @property { boolean } [canReturn]
        
        @property { boolean } [enableTracking]
        
        @property { Prices } [prices]
        
        @property { string } [needHelpUrl]
        
        @property { string } [shipmentId]
        
        @property { number } [totalBags]
        
        @property { Array<ProductItems> } [items]
        
        @property { DeliveryAddress } [deliveryAddress]
        
        @property { string } [paymentStatus]
        
        @property { Invoice } [invoice]
        
        @property { number } [totalItems]
        
        @property { Array<Bags> } [bags]
        
        @property { boolean } [canCancel]
        
        @property { string } [paymentLogo]
        
        @property { string } [shipmentCreatedAt]
        
        @property { ShipmentStatus } [shipmentStatus]
        
        @property { ShipmentUserInfo } [userInfo]
        
        @property { ShipmentMeta } [meta]
        
         
    */
/**
        @typedef TrackingDetails
        
        
        @property { boolean } [isCurrent]
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { string } [isPassed]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Article
        
        
        @property { string } [id]
        
        @property { number } [points]
        
        @property { number } [price]
        
         
    */
/**
        @typedef CatalogueOrderRequest
        
        
        @property { Array<Article> } [articles]
        
         
    */
/**
        @typedef CatalogueOrderResponse
        
        
        @property { Array<Article> } [articles]
        
         
    */
/**
        @typedef CursorPage
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Discount
        
        
        @property { number } [absolute]
        
        @property { string } [currency]
        
        @property { string } [displayAbsolute]
        
        @property { string } [displayPercent]
        
        @property { number } [percent]
        
         
    */
/**
        @typedef Error
        
        
        @property { number } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
         
    */
/**
        @typedef Offer
        
        
        @property { string } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { Action } [infoAction]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [url]
        
         
    */
/**
        @typedef OrderDiscountRequest
        
        
        @property { string } [currency]
        
        @property { number } orderAmount
        
         
    */
/**
        @typedef OrderDiscountResponse
        
        
        @property { OrderDiscountRuleBucket } [appliedRuleBucket]
        
        @property { Discount } [baseDiscount]
        
        @property { Discount } [discount]
        
        @property { number } [orderAmount]
        
        @property { number } [points]
        
         
    */
/**
        @typedef OrderDiscountRuleBucket
        
        
        @property { number } [high]
        
        @property { number } [low]
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { string } [valueType]
        
         
    */
/**
        @typedef PointsHistory
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { string } [meta]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef PointsHistoryResponse
        
        
        @property { Array<PointsHistory> } [history]
        
        @property { CursorPage } [page]
        
         
    */
/**
        @typedef PointsResponse
        
        
        @property { number } [points]
        
         
    */
/**
        @typedef RedeemReferralCodeRequest
        
        
        @property { string } deviceId
        
        @property { string } referralCode
        
         
    */
/**
        @typedef RedeemReferralCodeResponse
        
        
        @property { string } [message]
        
        @property { number } [points]
        
        @property { boolean } [redeemed]
        
        @property { string } [referrerId]
        
        @property { string } [referrerInfo]
        
         
    */
/**
        @typedef ReferralDetailsResponse
        
        
        @property { Offer } [referral]
        
        @property { string } [referrerInfo]
        
        @property { ShareMessages } [share]
        
        @property { Object } [user]
        
         
    */
/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */
/**
        @typedef Access
        
        
        @property { boolean } [answer]
        
        @property { boolean } [askQuestion]
        
        @property { boolean } [comment]
        
        @property { boolean } [rnr]
        
         
    */
/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<AddMediaRequest> } [mediaList]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */
/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloudId]
        
        @property { string } [cloudName]
        
        @property { string } [cloudProvider]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [mediaUrl]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnailUrl]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Attribute
        
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */
/**
        @typedef CheckEligibilityResponse
        
        
        @property { Access } [access]
        
        @property { MediaCloud } [mediaCloud]
        
         
    */
/**
        @typedef Cloud
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef CommentRequest
        
        
        @property { Array<string> } comment
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */
/**
        @typedef CreateQNARequest
        
        
        @property { Array<string> } [choices]
        
        @property { string } entityId
        
        @property { string } entityType
        
        @property { number } [maxLen]
        
        @property { number } [sortPriority]
        
        @property { Array<string> } [tags]
        
        @property { string } text
        
        @property { string } [type]
        
         
    */
/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef MediaCloud
        
        
        @property { string } [key]
        
        @property { string } [name]
        
        @property { string } [namespace]
        
        @property { string } [path]
        
        @property { string } [provider]
        
        @property { string } [secret]
        
         
    */
/**
        @typedef MediaMeta
        
        
        @property { Cloud } [cloud]
        
        @property { Array<string> } [comment]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { Url } [url]
        
         
    */
/**
        @typedef PageCursor
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */
/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */
/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef UpdateAbuseStatusRequest
        
        
        @property { boolean } [abusive]
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { string } [description]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [id]
        
         
    */
/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */
/**
        @typedef UpdateCommentRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } comment
        
        @property { string } id
        
         
    */
/**
        @typedef UpdateMediaListRequest
        
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { string } [entityType]
        
        @property { Array<string> } [ids]
        
         
    */
/**
        @typedef UpdateQNARequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } [choices]
        
        @property { string } [id]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributesRating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [deviceMeta]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<MediaMeta> } [mediaResource]
        
        @property { number } [rating]
        
        @property { string } [reviewId]
        
        @property { string } [templateId]
        
        @property { string } [title]
        
         
    */
/**
        @typedef UpdateVoteRequest
        
        
        @property { string } [action]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */
/**
        @typedef Url
        
        
        @property { string } [main]
        
        @property { string } [thumbnail]
        
         
    */
/**
        @typedef VoteRequest
        
        
        @property { string } [action]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */
/**
        @typedef XCursorGetResponse
        
        
        @property { Object } [items]
        
        @property { PageCursor } [page]
        
         
    */
/**
        @typedef XInsertResponse
        
        
        @property { string } [ids]
        
         
    */
/**
        @typedef XNumberGetResponse
        
        
        @property { Object } [items]
        
        @property { PageNumber } [page]
        
         
    */
/**
        @typedef XUpdateResponse
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef UpdateCartShipmentItem
        
        
        @property { string } shipmentType
        
        @property { string } articleUid
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef UpdateCartShipmentRequest
        
        
        @property { Array<UpdateCartShipmentItem> } shipments
        
         
    */
/**
        @typedef Files
        
        
        @property { Array<string> } values
        
        @property { string } key
        
         
    */
/**
        @typedef CartPosCheckoutRequest
        
        
        @property { string } [paymentIdentifier]
        
        @property { number } [billingAddressId]
        
        @property { number } [addressId]
        
        @property { Files } [files]
        
        @property { number } [orderingStore]
        
        @property { Object } [extraMeta]
        
        @property { Object } [deliveryAddress]
        
        @property { string } paymentMode
        
        @property { number } [pickAtStoreUid]
        
        @property { Object } [meta]
        
        @property { string } [merchantCode]
        
        @property { boolean } [pos]
        
        @property { Object } [staff]
        
        @property { string } [aggregator]
        
        @property { string } orderType
        
        @property { Object } [billingAddress]
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [callbackUrl]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [paymentParams]
        
         
    */
/**
        @typedef CartDeliveryModesResponse
        
        
        @property { Array<number> } [pickupStores]
        
        @property { Array<string> } [availableModes]
        
         
    */
/**
        @typedef PickupStoreDetail
        
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [area]
        
        @property { string } [storeCode]
        
        @property { number } [uid]
        
        @property { string } [areaCode]
        
        @property { string } [phone]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [name]
        
        @property { string } [landmark]
        
        @property { string } [email]
        
        @property { number } [pincode]
        
        @property { string } [address]
        
         
    */
/**
        @typedef StoreDetailsResponse
        
        
        @property { Array<PickupStoreDetail> } [items]
        
         
    */
/**
        @typedef GetPincodeCityResponse
        
        
        @property { string } requestUuid
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef GetTatProductReqBody
        
        
        @property { Array<Object> } locationDetails
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */
/**
        @typedef GetTatProductResponse
        
        
        @property { Array<Object> } locationDetails
        
        @property { string } requestUuid
        
        @property { Object } error
        
        @property { string } toCity
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */
export class Catalog {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get a product
      * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the sizes of a product
      * @description: A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} [arg.storeId] - The store id of the product whose sizes need to be retrieved
      
      **/
    getProductSizesBySlug({ slug, storeId }?: {
        slug: string;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: Get price a product size
      * @description: Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
      * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
      
      **/
    getProductPriceBySlug({ slug, size, pincode, storeId }?: {
        slug: string;
        size: string;
        pincode?: number;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: List sellers of a product
      * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
      * @param {number} [arg.pincode] - The pincode of the product for which the price needs to be retrieved.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize }?: {
        slug: string;
        size: string;
        pincode?: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Compare products
      * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getProductComparisonBySlugs({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get comparison between similar products
      * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getSimilarComparisonProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get comparison between frequently compared products with the given product
      * @description: Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
      
      **/
    getComparedFrequentlyProductBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get similar products
      * @description: Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
      
      **/
    getProductSimilarByIdentifier({ slug, similarType }?: {
        slug: string;
        similarType: string;
    }): any;
    /**
      *
      * @summary: Get variant of a particular product
      * @description: A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      
      **/
    getProductVariantsBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemId] - Product id to get product stock (Max. 50 allowed)
      * @param {string} [arg.alu] - Product identifier alu to get product stock (Max. 50 allowed)
      * @param {string} [arg.skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
      * @param {string} [arg.ean] - Product identifier ean to get product stock (Max. 50 allowed)
      * @param {string} [arg.upc] - Product identifier upc to get product stock (Max. 50 allowed)
      
      **/
    getProductStockByIds({ itemId, alu, skuCode, ean, upc }?: {
        itemId?: string;
        alu?: string;
        skuCode?: string;
        ean?: string;
        upc?: string;
    }): any;
    /**
      *
      * @summary: Get the stock of a product
      * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
      * @param {Object} arg - arg object.
      * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
      * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
      * @param {string} [arg.pageId] - will give next page results
      
      **/
    getProductStockForTimeByIds({ timestamp, pageSize, pageId }?: {
        timestamp: string;
        pageSize?: number;
        pageId?: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
      * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
      
      **/
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: List all the brands
      * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get metadata of a brand
      * @description: Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
      
      **/
    getBrandDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List all the categories
      * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
      
      **/
    getCategories({ department }?: {
        department?: string;
    }): any;
    /**
      *
      * @summary: Get metadata of a category
      * @description: Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
      
      **/
    getCategoryDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: List the products
      * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
      * @param {Object} arg - arg object.
      * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getHomeProducts({ sortOn, pageId, pageSize }?: {
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List all the departments
      * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
      * @param {Object} arg - arg object.
      
      **/
    getDepartments({}?: any): any;
    /**
      *
      * @summary: Get relevant suggestions for a search query
      * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
      * @param {Object} arg - arg object.
      * @param {string} arg.q - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    getSearchResults({ q }?: {
        q: string;
    }): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollections({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the items in a collection
      * @description: Get items in a collection specified by its `slug`.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
      * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
      * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
      * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
      * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItemsBySlug({ slug, f, filters, sortOn, pageId, pageSize, }?: {
        slug: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetailBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get a list of followed Products, Brands, Collections
      * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowedListing({ collectionType }?: {
        collectionType: string;
    }): any;
    /**
      *
      * @summary: Follow a particular Product
      * @description: Follow a particular Product specified by its uid. Pass the uid of the product in request URL
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      * @param {number} arg.collectionId - the `id` of the collection type you want to follow
      
      **/
    followById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: number;
    }): any;
    /**
      *
      * @summary: UnFollow a Product
      * @description: You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
      * @param {number} arg.collectionId - the `id` of the collection type you want to unfollow
      
      **/
    unfollowById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: number;
    }): any;
    /**
      *
      * @summary: Get Follow Count
      * @description: Get count of followers for given collection type and collection id.
      * @param {Object} arg - arg object.
      * @param {string} arg.collectionType - the `type` of the collection products/brands/collections.
      * @param {string} arg.collectionId - the `id` of the product/brand/collection.
      
      **/
    getFollowerCountById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): any;
    /**
      *
      * @summary: Get the Ids of followed product, brand and collection.
      * @description: You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
      * @param {Object} arg - arg object.
      * @param {string} [arg.collectionType] - Type of collection followed. i. e. products, brands, collections
      
      **/
    getFollowIds({ collectionType }?: {
        collectionType?: string;
    }): any;
    /**
      *
      * @summary: List store meta information.
      * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
      * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
      * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
      * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
      
      **/
    getStores({ pageNo, pageSize, q, range, latitude, longitude }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): any;
}
export class Cart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Fetch all Items Added to  Cart
      * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {number} [arg.assignCardId] -
      
      **/
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
    }): any;
    /**
      *
      * @summary: Fetch Last-Modified timestamp
      * @description: Fetch Last-Modified timestamp in header metadata
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCartLastModified({ uid }?: {
        uid?: number;
    }): any;
    /**
     *
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     **/
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: AddCartRequest;
    }): any;
    /**
     *
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     **/
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: UpdateCartRequest;
    }): any;
    /**
      *
      * @summary: Cart item count
      * @description: Get total count of item present in cart
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    getItemCount({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Fetch Coupon
      * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCoupons({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Apply Coupon
      * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {boolean} [arg.p] -
      * @param {number} [arg.uid] -
      * @param {ApplyCouponRequest} arg.body
      **/
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        uid?: number;
        body: ApplyCouponRequest;
    }): any;
    /**
      *
      * @summary: Remove Coupon Applied
      * @description: Remove Coupon applied on the cart by passing uid in request body.
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    removeCoupon({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get discount offers based on quantity
      * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param {Object} arg - arg object.
      * @param {number} [arg.itemId] - Item id
      * @param {string} [arg.articleId] - Article mongo id
      * @param {number} [arg.uid] - Item id
      * @param {string} [arg.slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): any;
    /**
      *
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: number;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param {Object} arg - arg object.
     * @param {Address} arg.body
     **/
    addAddress({ body }?: {
        body: Address;
    }): any;
    /**
      *
      * @summary: Fetch Single Address
      * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} arg.id -
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: number;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     **/
    updateAddress({ id, body }?: {
        id: number;
        body: Address;
    }): any;
    /**
      *
      * @summary: Remove Address Associated to the account
      * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Address id
      
      **/
    removeAddress({ id }?: {
        id: number;
    }): any;
    /**
     *
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     **/
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: SelectCartAddressRequest;
    }): any;
    /**
     *
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     * @param {Object} arg - arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     **/
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: UpdateCartPaymentRequest;
    }): any;
    /**
      *
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      
      **/
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): any;
    /**
      *
      * @summary: Get delivery date and options before checkout
      * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.p] - Get payment options or not
      * @param {number} [arg.uid] - Cart id
      * @param {number} [arg.addressId] - Address id
      * @param {string} [arg.areaCode] - Destination pincode.
      
      **/
    getShipments({ p, uid, addressId, areaCode }?: {
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
    }): any;
    /**
     *
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
     * @param {Object} arg - arg object.
     * @param {CartCheckoutRequest} arg.body
     **/
    checkoutCart({ body }?: {
        body: CartCheckoutRequest;
    }): any;
    /**
     *
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     **/
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: CartMetaRequest;
    }): any;
    /**
     *
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     * @param {Object} arg - arg object.
     * @param {GetShareCartLinkRequest} arg.body
     **/
    getCartShareLink({ body }?: {
        body: GetShareCartLinkRequest;
    }): any;
    /**
      *
      * @summary: Get shared cart snapshot and cart response
      * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      
      **/
    getCartSharedItems({ token }?: {
        token: string;
    }): any;
    /**
      *
      * @summary: Merge or Replace existing cart
      * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): any;
}
export class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get Ticket with the specific id
      * @description: Get Ticket with the specific id, this is used to view the ticket details
      * @param {Object} arg - arg object.
      * @param {string} arg.id - ID of ticket to be retrieved
      
      **/
    getTicket({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
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
     * @summary: Create Ticket
     * @description: This is used to Create Ticket.
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Get specific Custom Form using it's slug
      * @description: Get specific Custom Form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {CustomFormSubmissionPayload} arg.body
     **/
    submitCustomForm({ slug, body }?: {
        slug: string;
        body: CustomFormSubmissionPayload;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getParticipantsInsideVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
}
export class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get applied theme for an application
      * @description:
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Get theme for preview
      * @description:
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - ID of the theme to be retrieved
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
}
export class User {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Login/Register with Facebook
     * @description: Used to login or register with Facebook
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithFacebook({ body }?: {
        body: OAuthRequestSchema;
    }): any;
    /**
     *
     * @summary: Login/Register with Google
     * @description: Used to login or register with Google
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogle({ body }?: {
        body: OAuthRequestSchema;
    }): any;
    /**
     *
     * @summary: Login/Register with Google for android
     * @description: Used to login or register with Google for android
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleAndroid({ body }?: {
        body: OAuthRequestSchema;
    }): any;
    /**
     *
     * @summary: Login/Register with Google for ios
     * @description: Used to login or register with google for ios
     * @param {Object} arg - arg object.
     * @param {OAuthRequestSchema} arg.body
     **/
    loginWithGoogleIOS({ body }?: {
        body: OAuthRequestSchema;
    }): any;
    /**
     *
     * @summary: Login/Register with OTP
     * @description: Used to login or register with OTP
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendOtpRequestSchema} arg.body
     **/
    loginWithOTP({ body, platform }?: {
        platform?: string;
        body: SendOtpRequestSchema;
    }): any;
    /**
     *
     * @summary: Login/Register with password
     * @description: Used to login or register with email & password
     * @param {Object} arg - arg object.
     * @param {PasswordLoginRequestSchema} arg.body
     **/
    loginWithEmailAndPassword({ body }?: {
        body: PasswordLoginRequestSchema;
    }): any;
    /**
     *
     * @summary: Reset Password
     * @description: Used to reset account password
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendResetPasswordEmailRequestSchema} arg.body
     **/
    sendResetPasswordEmail({ body, platform }?: {
        platform?: string;
        body: SendResetPasswordEmailRequestSchema;
    }): any;
    /**
     *
     * @summary:
     * @description:
     * @param {Object} arg - arg object.
     * @param {ForgotPasswordRequestSchema} arg.body
     **/
    forgotPassword({ body }?: {
        body: ForgotPasswordRequestSchema;
    }): any;
    /**
     *
     * @summary:
     * @description: Send code incase of reset password
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    sendResetToken({ body }?: {
        body: CodeRequestBodySchema;
    }): any;
    /**
     *
     * @summary: Login/Register with token
     * @description: Login/Register with token
     * @param {Object} arg - arg object.
     * @param {TokenRequestBodySchema} arg.body
     **/
    loginWithToken({ body }?: {
        body: TokenRequestBodySchema;
    }): any;
    /**
     *
     * @summary: Registration Form
     * @description: Register using form
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {FormRegisterRequestSchema} arg.body
     **/
    registerWithForm({ body, platform }?: {
        platform?: string;
        body: FormRegisterRequestSchema;
    }): any;
    /**
     *
     * @summary: Verify email
     * @description: Used to verify email
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyEmail({ body }?: {
        body: CodeRequestBodySchema;
    }): any;
    /**
     *
     * @summary: Verify mobile
     * @description: Verify mobile
     * @param {Object} arg - arg object.
     * @param {CodeRequestBodySchema} arg.body
     **/
    verifyMobile({ body }?: {
        body: CodeRequestBodySchema;
    }): any;
    /**
      *
      * @summary: Check if user has password
      * @description: Checks if user is using password or not
      * @param {Object} arg - arg object.
      
      **/
    hasPassword({}?: any): any;
    /**
     *
     * @summary: Update user password
     * @description: Used to update user password
     * @param {Object} arg - arg object.
     * @param {UpdatePasswordRequestSchema} arg.body
     **/
    updatePassword({ body }?: {
        body: UpdatePasswordRequestSchema;
    }): any;
    /**
      *
      * @summary: Logout user
      * @description: Used to log out user
      * @param {Object} arg - arg object.
      
      **/
    logout({}?: any): any;
    /**
     *
     * @summary: Send OTP on mobile
     * @description: Used to send otp to mobile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendMobileOtpRequestSchema} arg.body
     **/
    sendOTPOnMobile({ body, platform }?: {
        platform?: string;
        body: SendMobileOtpRequestSchema;
    }): any;
    /**
     *
     * @summary: Verify OTP on mobile
     * @description: Used to verify otp sent to mobile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {VerifyOtpRequestSchema} arg.body
     **/
    verifyMobileOTP({ body, platform }?: {
        platform?: string;
        body: VerifyOtpRequestSchema;
    }): any;
    /**
     *
     * @summary: Send OTP on email
     * @description: Used to send otp to email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendEmailOtpRequestSchema} arg.body
     **/
    sendOTPOnEmail({ body, platform }?: {
        platform?: string;
        body: SendEmailOtpRequestSchema;
    }): any;
    /**
     *
     * @summary: Verify OTP on email
     * @description: Used to verify otp sent to email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {VerifyOtpRequestSchema} arg.body
     **/
    verifyEmailOTP({ body, platform }?: {
        platform?: string;
        body: VerifyOtpRequestSchema;
    }): any;
    /**
      *
      * @summary: Get logged in user
      * @description: Used to get logged in user details
      * @param {Object} arg - arg object.
      
      **/
    getLoggedInUser({}?: any): any;
    /**
      *
      * @summary: Get list of sessions
      * @description: Lists all active sessions
      * @param {Object} arg - arg object.
      
      **/
    getListOfActiveSessions({}?: any): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      * @param {string} [arg.name] - Name
      
      **/
    getPlatformConfig({ name }?: {
        name?: string;
    }): any;
    /**
     *
     * @summary: Edit Profile Details
     * @description: Used to update profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditProfileRequestSchema} arg.body
     **/
    updateProfile({ body, platform }?: {
        platform?: string;
        body: EditProfileRequestSchema;
    }): any;
    /**
     *
     * @summary: Add mobile number to profile
     * @description: Used to add new mobile number to profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditMobileRequestSchema} arg.body
     **/
    addMobileNumber({ body, platform }?: {
        platform?: string;
        body: EditMobileRequestSchema;
    }): any;
    /**
      *
      * @summary: Delete mobile number from profile
      * @description: Used to delete mobile number from profile
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - Platform
      * @param {boolean} arg.active - Active mobile number
      * @param {boolean} arg.primary - Primary number
      * @param {boolean} arg.verified - Verified Number
      * @param {string} arg.countryCode - Country code of phone number
      * @param {string} arg.phone - Phone number
      
      **/
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        countryCode: string;
        phone: string;
    }): any;
    /**
     *
     * @summary: Set mobile as primary
     * @description: Used to set a mobile number as primary
     * @param {Object} arg - arg object.
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    setMobileNumberAsPrimary({ body }?: {
        body: SendVerificationLinkMobileRequestSchema;
    }): any;
    /**
     *
     * @summary: Send verification link to mobile
     * @description: Used to send verification link to a mobile number
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     **/
    sendVerificationLinkToMobile({ body, platform }?: {
        platform?: string;
        body: SendVerificationLinkMobileRequestSchema;
    }): any;
    /**
     *
     * @summary: Add email to profile
     * @description: Used to add new email to profile
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditEmailRequestSchema} arg.body
     **/
    addEmail({ body, platform }?: {
        platform?: string;
        body: EditEmailRequestSchema;
    }): any;
    /**
      *
      * @summary: Delete email from profile
      * @description: Used to delete email from profile
      * @param {Object} arg - arg object.
      * @param {string} [arg.platform] - Platform
      * @param {boolean} arg.active - Whether email id is active
      * @param {boolean} arg.primary - Whether email id is primary email
      * @param {boolean} arg.verified - Whether email id is verified
      * @param {string} arg.email - Email ID to be deleted
      
      **/
    deleteEmail({ active, primary, verified, email, platform }?: {
        platform?: string;
        active: boolean;
        primary: boolean;
        verified: boolean;
        email: string;
    }): any;
    /**
     *
     * @summary: Set email as primary
     * @description: Used to set an email as primart
     * @param {Object} arg - arg object.
     * @param {EditEmailRequestSchema} arg.body
     **/
    setEmailAsPrimary({ body }?: {
        body: EditEmailRequestSchema;
    }): any;
    /**
     *
     * @summary: Send verification link to email
     * @description: Used to sent verification to an email
     * @param {Object} arg - arg object.
     * @param {string} [arg.platform] - Platform
     * @param {EditEmailRequestSchema} arg.body
     **/
    sendVerificationLinkToEmail({ body, platform }?: {
        platform?: string;
        body: EditEmailRequestSchema;
    }): any;
}
export class Content {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get live announcements
      * @description: Get live announcements for each or all pages with page slug of page and end date schedule.
      * @param {Object} arg - arg object.
      
      **/
    getAnnouncements({}?: any): any;
    /**
      *
      * @summary: Get Blog by slug
      * @description: Use this API to fetch a blog using `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The `slug` of a blog. Use this parameter to retrieve a particular blog
      
      **/
    getBlog({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get frequently asked questions
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      
      **/
    getFaqs({}?: any): any;
    /**
      *
      * @summary: Get FAQ categories list
      * @description: Get list of FAQ categories
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get frequently asked question
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get FAQ category by slug or id
      * @description: Get FAQ category by slug or id
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get FAQs of a Faq Category id or slug
      * @description: Get FAQs of a Faq Category `id` or `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get landing page
      * @description: Use this API to fetch a landing page
      * @param {Object} arg - arg object.
      
      **/
    getLandingPage({}?: any): any;
    /**
      *
      * @summary: Get legal information
      * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
      *
      * @summary: Get navigation
      * @description: Use this API to fetch a navigation
      * @param {Object} arg - arg object.
      
      **/
    getNavigations({}?: any): any;
    /**
      *
      * @summary: Get Page by slug
      * @description: Use this API to fetch a custom page using `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The `slug` of a page. Use this parameter to retrieve a particular page
      
      **/
    getPage({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get seo of application
      * @description: Get seo of application
      * @param {Object} arg - arg object.
      
      **/
    getSeoConfiguration({}?: any): any;
    /**
      *
      * @summary: Get slideshow by slug
      * @description: Use this API to fetch a slideshow using `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The `slug` of a slideshow. Use this parameter to retrieve a particular slideshow
      
      **/
    getSlideshow({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get support information
      * @description: Get contact details for customer support. Including emails and phone numbers
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
      *
      * @summary: Get Tags for application
      * @description:
      * @param {Object} arg - arg object.
      
      **/
    getTags({}?: any): any;
}
export class Communication {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get communication consent
      * @description: Get communication consent
      * @param {Object} arg - arg object.
      
      **/
    getCommunicationConsent({}?: any): any;
    /**
     *
     * @summary: Upsert communication consent
     * @description: Upsert communication consent
     * @param {Object} arg - arg object.
     * @param {CommunicationConsentReq} arg.body
     **/
    upsertCommunicationConsent({ body }?: {
        body: CommunicationConsentReq;
    }): any;
    /**
     *
     * @summary: Upsert push token of a user
     * @description: Upsert push token of a user
     * @param {Object} arg - arg object.
     * @param {PushtokenReq} arg.body
     **/
    upsertAppPushtoken({ body }?: {
        body: PushtokenReq;
    }): any;
}
export class Share {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Create application QR Code
      * @description: Create application QR Code
      * @param {Object} arg - arg object.
      
      **/
    getApplicationQRCode({}?: any): any;
    /**
      *
      * @summary: Create product QR Code
      * @description: Create product QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product
      
      **/
    getProductQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create collection QR Code
      * @description: Create collection QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a collection
      
      **/
    getCollectionQRCodeBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Create url QR Code
      * @description: Create url QR Code
      * @param {Object} arg - arg object.
      * @param {string} arg.url - Url
      
      **/
    getUrlQRCode({ url }?: {
        url: string;
    }): any;
    /**
     *
     * @summary: Create short link
     * @description: Create short link
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): any;
    /**
      *
      * @summary: Get short link by hash
      * @description: Get short link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short link
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
      *
      * @summary: Get original link by hash
      * @description: Get original link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short link
      
      **/
    getOriginalShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
}
export class FileStorage {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
}
export class Configuration {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get current application details
      * @description: Get current application details.
      * @param {Object} arg - arg object.
      
      **/
    getApplication({}?: any): any;
    /**
      *
      * @summary: Get application, owner and seller information
      * @description: Get application information with owner and seller basic details
      * @param {Object} arg - arg object.
      
      **/
    getOwnerInfo({}?: any): any;
    /**
      *
      * @summary: Get basic application details
      * @description: Get basic application details like name
      * @param {Object} arg - arg object.
      
      **/
    getBasicDetails({}?: any): any;
    /**
      *
      * @summary: Get integration tokens
      * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
      * @param {Object} arg - arg object.
      
      **/
    getIntegrationTokens({}?: any): any;
    /**
      *
      * @summary: Get deployment meta stores
      * @description: Get deployment meta stores.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      * @param {string} [arg.q] - Search ordering store by name or store code
      
      **/
    getOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get features of application
      * @description: Get features of application
      * @param {Object} arg - arg object.
      
      **/
    getFeatures({}?: any): any;
    /**
      *
      * @summary: Get application information
      * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
      * @param {Object} arg - arg object.
      
      **/
    getContactInfo({}?: any): any;
    /**
      *
      * @summary: Get application enabled currencies
      * @description: Get currency list for allowed currencies under current application
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
      *
      * @summary: Get currency by id
      * @description: Get currency object with symbol and name information by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Currency object id
      
      **/
    getCurrencyById({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get list of languages
      * @description: Get list of supported languages under application.
      * @param {Object} arg - arg object.
      
      **/
    getLanguages({}?: any): any;
    /**
     *
     * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
     * @description: Get ordering store signed cookie on selection of ordering store.
     * @param {Object} arg - arg object.
     * @param {OrderingStoreSelectRequest} arg.body
     **/
    getOrderingStoreCookie({ body }?: {
        body: OrderingStoreSelectRequest;
    }): any;
    /**
      *
      * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
      * @description: Unset ordering store cookie.
      * @param {Object} arg - arg object.
      
      **/
    removeOrderingStoreCookie({}?: any): any;
    /**
      *
      * @summary: Get Staff List.
      * @description: Get a staff list based on the user's session token passed in the header.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.orderIncent] - This is to check which staff members are applicable for order incentives.
      * @param {number} [arg.orderingStore] - This is to filter staff members from only selected ordering store.
      * @param {string} [arg.user] - Get single staff member details using staff user mongo id
      
      **/
    getAppStaffs({ orderIncent, orderingStore, user }?: {
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
    }): any;
}
export class Payment {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get payment gateway keys
      * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
      * @param {Object} arg - arg object.
      * @param {string} arg.xApiToken - api token
      * @param {boolean} [arg.refresh] - refresh cache
      
      **/
    getAggregatorsConfig({ xApiToken, refresh }?: {
        xApiToken: string;
        refresh?: boolean;
    }): any;
    /**
     *
     * @summary: Attach a saved card to customer.
     * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
     * @param {Object} arg - arg object.
     * @param {AttachCardRequest} arg.body
     **/
    attachCardToCustomer({ body }?: {
        body: AttachCardRequest;
    }): any;
    /**
      *
      * @summary: Fetch active payment gateway for card
      * @description: Fetch active payment gateway along with customer id for cards payments.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.refresh] -
      
      **/
    getActiveCardAggregator({ refresh }?: {
        refresh?: boolean;
    }): any;
    /**
      *
      * @summary: Fetch the list of saved cards of user.
      * @description: Fetch the list of saved cards of user from active payment gateway.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.forceRefresh] -
      
      **/
    getActiveUserCards({ forceRefresh }?: {
        forceRefresh?: boolean;
    }): any;
    /**
     *
     * @summary: Delete an user card.
     * @description: Delete an added user card on payment gateway and remove from cache.
     * @param {Object} arg - arg object.
     * @param {DeletehCardRequest} arg.body
     **/
    deleteUserCard({ body }?: {
        body: DeletehCardRequest;
    }): any;
    /**
     *
     * @summary: Validate customer for payment.
     * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
     * @param {Object} arg - arg object.
     * @param {ValidateCustomerRequest} arg.body
     **/
    verifyCustomerForPayment({ body }?: {
        body: ValidateCustomerRequest;
    }): any;
    /**
     *
     * @summary: Verify and charge payment
     * @description: Verify and charge payment server to server for Simpl & Mswipe.
     * @param {Object} arg - arg object.
     * @param {ChargeCustomerRequest} arg.body
     **/
    verifyAndChargePayment({ body }?: {
        body: ChargeCustomerRequest;
    }): any;
    /**
     *
     * @summary: Payment Initialisation server to server for UPI and BharatQR.
     * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
     * @param {Object} arg - arg object.
     * @param {PaymentInitializationRequest} arg.body
     **/
    initialisePayment({ body }?: {
        body: PaymentInitializationRequest;
    }): any;
    /**
     *
     * @summary: Continous polling to check status of payment on server.
     * @description: Continous polling on interval to check status of payment untill timeout.
     * @param {Object} arg - arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     **/
    checkAndUpdatePaymentStatus({ body }?: {
        body: PaymentStatusUpdateRequest;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payment amount
      * @param {string} arg.cartId - Cart id
      * @param {string} arg.pincode - Pincode
      * @param {string} arg.checkoutMode - Checkout mode
      * @param {boolean} [arg.refresh] -
      * @param {string} [arg.assignCardId] - selected card id
      * @param {string} [arg.userDetails] - URIencoded json annonymous user
      
      **/
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        userDetails?: string;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options for POS
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {number} arg.amount - Payment amount
      * @param {string} arg.cartId - Cart id
      * @param {string} arg.pincode - Pincode
      * @param {string} arg.checkoutMode - Checkout mode
      * @param {boolean} [arg.refresh] -
      * @param {string} [arg.assignCardId] - selected card id
      * @param {string} arg.orderType - Order type
      * @param {string} [arg.userDetails] - URIencoded json annonymous user
      
      **/
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        orderType: string;
        userDetails?: string;
    }): any;
    /**
      *
      * @summary: List User Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getUserBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Ifsc Code Verification
      * @description: Get True/False for correct IFSC Code for adding bank details for refund
      * @param {Object} arg - arg object.
      * @param {string} [arg.ifscCode] -
      
      **/
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): any;
    /**
      *
      * @summary: List Order Beneficiary
      * @description: Get all active  beneficiary details added by the user for refund
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId -
      
      **/
    getOrderBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): any;
    /**
     *
     * @summary: Save Beneficiary details on otp validation.
     * @description: Save Beneficiary details on otp validation.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForBank({ body }?: {
        body: AddBeneficiaryViaOtpVerificationRequest;
    }): any;
    /**
     *
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     * @param {Object} arg - arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     **/
    addBeneficiaryDetails({ body }?: {
        body: AddBeneficiaryDetailsRequest;
    }): any;
    /**
     *
     * @summary: Send Otp on Adding wallet beneficiary
     * @description: Send Otp on Adding wallet beneficiary for user mobile verification
     * @param {Object} arg - arg object.
     * @param {WalletOtpRequest} arg.body
     **/
    verifyOtpAndAddBeneficiaryForWallet({ body }?: {
        body: WalletOtpRequest;
    }): any;
    /**
     *
     * @summary: Mark Default Beneficiary For Refund
     * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
     * @param {Object} arg - arg object.
     * @param {SetDefaultBeneficiaryRequest} arg.body
     **/
    updateDefaultBeneficiary({ body }?: {
        body: SetDefaultBeneficiaryRequest;
    }): any;
}
export class Order {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Get Orders for application based on application Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      
      **/
    getOrders({ pageNo, pageSize, fromDate, toDate }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
    }): any;
    /**
      *
      * @summary: Get Order by order id for application based on application Id
      * @description: Get Order By Fynd Order Id
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    getOrderById({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Get Shipment by shipment id and order id for application based on application Id
      * @description: Get Shipment
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
      * @description: Get Shipment Reasons
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
     *
     * @summary: Update Shipment status by shipment id and order id for application based on application Id
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @param {ShipmentStatusUpdateBody} arg.body
     **/
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: ShipmentStatusUpdateBody;
    }): any;
    /**
      *
      * @summary: Track Shipment by shipment id and order id for application based on application Id
      * @description: Shipment Track
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): any;
}
export class Rewards {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Get reward points that could be earned on any catalogue product.
     * @description: Evaluate the amount of reward points that could be earned on any catalogue product.
     * @param {Object} arg - arg object.
     * @param {CatalogueOrderRequest} arg.body
     **/
    getPointsOnProduct({ body }?: {
        body: CatalogueOrderRequest;
    }): any;
    /**
     *
     * @summary: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @description: Calculates the discount on order-amount based on amount ranges configured in order_discount reward.
     * @param {Object} arg - arg object.
     * @param {OrderDiscountRequest} arg.body
     **/
    getOrderDiscount({ body }?: {
        body: OrderDiscountRequest;
    }): any;
    /**
      *
      * @summary: Total available points of a user for current application
      * @description: Total available points of a user for current application
      * @param {Object} arg - arg object.
      
      **/
    getUserPoints({}?: any): any;
    /**
      *
      * @summary: Get list of points transactions.
      * @description: Get list of points transactions.
  The list of points history is paginated.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
      * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
      
      **/
    getUserPointsHistory({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: User's referral details.
      * @description: User's referral details.
      * @param {Object} arg - arg object.
      
      **/
    getUserReferralDetails({}?: any): any;
    /**
     *
     * @summary: Redeems referral code and credits points to users points account.
     * @description: Redeems referral code and credits points to users points account.
     * @param {Object} arg - arg object.
     * @param {RedeemReferralCodeRequest} arg.body
     **/
    redeemReferralCode({ body }?: {
        body: RedeemReferralCodeRequest;
    }): any;
}
export class Feedback {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: post a new abuse request
     * @description: Report a new abuse for specific entity with description text.
     * @param {Object} arg - arg object.
     * @param {ReportAbuseRequest} arg.body
     **/
    createAbuseReport({ body }?: {
        body: ReportAbuseRequest;
    }): any;
    /**
     *
     * @summary: Update abuse details
     * @description: Update the abuse details like status and description text.
     * @param {Object} arg - arg object.
     * @param {UpdateAbuseStatusRequest} arg.body
     **/
    updateAbuseReport({ body }?: {
        body: UpdateAbuseStatusRequest;
    }): any;
    /**
      *
      * @summary: Get list of abuse data
      * @description: Get the list of abuse data from entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityId - entity id
      * @param {string} arg.entityType - entity type
      * @param {string} [arg.id] - abuse id
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAbuseReports({ entityId, entityType, id, pageId, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of attribute data
      * @description: Provides a list of all attribute data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - pagination page number
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add a new attribute request
     * @description: Add a new attribute with its name, slug and description.
     * @param {Object} arg - arg object.
     * @param {SaveAttributeRequest} arg.body
     **/
    createAttribute({ body }?: {
        body: SaveAttributeRequest;
    }): any;
    /**
      *
      * @summary: Get single attribute data
      * @description: Get a single attribute data from a given slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of attribute
      
      **/
    getAttribute({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Update attribute details
     * @description: Update the attribute's name and description.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of attribute
     * @param {UpdateAttributeRequest} arg.body
     **/
    updateAttribute({ slug, body }?: {
        slug: string;
        body: UpdateAttributeRequest;
    }): any;
    /**
     *
     * @summary: post a new comment
     * @description: This is used to add a new comment for specific entity.
     * @param {Object} arg - arg object.
     * @param {CommentRequest} arg.body
     **/
    createComment({ body }?: {
        body: CommentRequest;
    }): any;
    /**
     *
     * @summary: Update comment status
     * @description: Update the comment status (active/approve) or text.
     * @param {Object} arg - arg object.
     * @param {UpdateCommentRequest} arg.body
     **/
    updateComment({ body }?: {
        body: UpdateCommentRequest;
    }): any;
    /**
      *
      * @summary: Get list of comments
      * @description: Get the list of comments from specific entity type.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} [arg.id] - comment id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.userId] - user id - flag/filter to get comments for user
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getComments({ entityType, id, entityId, userId, pageId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Checks eligibility and cloud media config
      * @description: Checks eligibility to rate and review and cloud media configuration
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      
      **/
    checkEligibility({ entityType, entityId }?: {
        entityType: string;
        entityId: string;
    }): any;
    /**
      *
      * @summary: Delete Media
      * @description: Delete Media for the given entity IDs.
      * @param {Object} arg - arg object.
      
      **/
    deleteMedia({}?: any): any;
    /**
     *
     * @summary: Add Media
     * @description: Add Media list for specific entity.
     * @param {Object} arg - arg object.
     * @param {AddMediaListRequest} arg.body
     **/
    createMedia({ body }?: {
        body: AddMediaListRequest;
    }): any;
    /**
     *
     * @summary: Update Media
     * @description: Update Media (archive/approve) for the given entity.
     * @param {Object} arg - arg object.
     * @param {UpdateMediaListRequest} arg.body
     **/
    updateMedia({ body }?: {
        body: UpdateMediaListRequest;
    }): any;
    /**
      *
      * @summary: Get Media
      * @description: Get Media from the given entity type and entity ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - vote id
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getMedias({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a review summary
      * @description: Review summary gives ratings and attribute metrics of a review per entity
  It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - review summary identifier
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getReviewSummaries({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Add customer reviews
      * @description: Add customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param {Object} arg - arg object.
      * @param {UpdateReviewRequest} arg.body
      **/
    createReview({ body }?: {
        body: UpdateReviewRequest;
    }): any;
    /**
      *
      * @summary: Update customer reviews
      * @description: Update customer reviews for specific entity with following data:
  attributes rating, entity rating, title, description, media resources and template id.
      * @param {Object} arg - arg object.
      * @param {UpdateReviewRequest} arg.body
      **/
    updateReview({ body }?: {
        body: UpdateReviewRequest;
    }): any;
    /**
      *
      * @summary: Get list of customer reviews
      * @description: This is used to get the list of customer reviews based on entity and provided filters.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - review id
      * @param {string} [arg.userId] - user id
      * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
      * @param {Array<number>} [arg.rating] - rating filter, 1-5
      * @param {Array<string>} [arg.attributeRating] - attribute rating filter
      * @param {boolean} [arg.facets] - facets (true|false)
      * @param {string} [arg.sort] - sort by : default | top | recent
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getReviews({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
        attributeRating?: Array<string>;
        facets?: boolean;
        sort?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get the templates for product or l3 type
      * @description: This is used to get the templates details.
      * @param {Object} arg - arg object.
      * @param {string} [arg.templateId] - template id
      * @param {string} [arg.entityId] - entity id
      * @param {string} [arg.entityType] - entity type e.g. product | l3
      
      **/
    getTemplates({ templateId, entityId, entityType }?: {
        templateId?: string;
        entityId?: string;
        entityType?: string;
    }): any;
    /**
      *
      * @summary: Create a new question
      * @description: This is used to create a new question with following data:
  tags, text, type, choices for MCQ type questions, maximum length of answer.
      * @param {Object} arg - arg object.
      * @param {CreateQNARequest} arg.body
      **/
    createQuestion({ body }?: {
        body: CreateQNARequest;
    }): any;
    /**
     *
     * @summary: Update question
     * @description: This is used to update question's status, tags and choices.
     * @param {Object} arg - arg object.
     * @param {UpdateQNARequest} arg.body
     **/
    updateQuestion({ body }?: {
        body: UpdateQNARequest;
    }): any;
    /**
      *
      * @summary: Get a list of QnA
      * @description: This is used to get a list of questions and its answers.
      * @param {Object} arg - arg object.
      * @param {string} arg.entityType - entity type
      * @param {string} arg.entityId - entity id
      * @param {string} [arg.id] - qna id
      * @param {boolean} [arg.showAnswer] - show answer flag
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getQuestionAndAnswers({ entityType, entityId, id, showAnswer, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        showAnswer?: boolean;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of votes
      * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
      * @param {Object} arg - arg object.
      * @param {string} [arg.id] - vote id
      * @param {string} [arg.refType] - entity type e.g. review | comment
      
      **/
    getVotes({ id, refType }?: {
        id?: string;
        refType?: string;
    }): any;
    /**
     *
     * @summary: Create a new vote
     * @description: This is used to create a new vote and the actions can be upvote or downvote.
     * @param {Object} arg - arg object.
     * @param {VoteRequest} arg.body
     **/
    createVote({ body }?: {
        body: VoteRequest;
    }): any;
    /**
     *
     * @summary: Update vote
     * @description: This is used to update the vote and the actions can be upvote or downvote.
     * @param {Object} arg - arg object.
     * @param {UpdateVoteRequest} arg.body
     **/
    updateVote({ body }?: {
        body: UpdateVoteRequest;
    }): any;
}
export class PosCart {
    constructor(_conf: any);
    _conf: any;
    /**
      *
      * @summary: Fetch all Items Added to  Cart
      * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {number} [arg.assignCardId] -
      
      **/
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        assignCardId?: number;
    }): any;
    /**
      *
      * @summary: Fetch Last-Modified timestamp
      * @description: Fetch Last-Modified timestamp in header metadata
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCartLastModified({ uid }?: {
        uid?: number;
    }): any;
    /**
     *
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     **/
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: AddCartRequest;
    }): any;
    /**
     *
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     **/
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: UpdateCartRequest;
    }): any;
    /**
      *
      * @summary: Cart item count
      * @description: Get total count of item present in cart
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    getItemCount({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Fetch Coupon
      * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      
      **/
    getCoupons({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Apply Coupon
      * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
  </ul>
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.i] -
      * @param {boolean} [arg.b] -
      * @param {boolean} [arg.p] -
      * @param {number} [arg.uid] -
      * @param {ApplyCouponRequest} arg.body
      **/
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
        p?: boolean;
        uid?: number;
        body: ApplyCouponRequest;
    }): any;
    /**
      *
      * @summary: Remove Coupon Applied
      * @description: Remove Coupon applied on the cart by passing uid in request body.
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] - Cart id
      
      **/
    removeCoupon({ uid }?: {
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get discount offers based on quantity
      * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
      * @param {Object} arg - arg object.
      * @param {number} [arg.itemId] - Item id
      * @param {string} [arg.articleId] - Article mongo id
      * @param {number} [arg.uid] - Item id
      * @param {string} [arg.slug] - Item unique url from product page
      
      **/
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): any;
    /**
      *
      * @summary: Fetch Address
      * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: number;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     * @param {Object} arg - arg object.
     * @param {Address} arg.body
     **/
    addAddress({ body }?: {
        body: Address;
    }): any;
    /**
      *
      * @summary: Fetch Single Address
      * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
      * @param {Object} arg - arg object.
      * @param {number} arg.id -
      * @param {number} [arg.uid] -
      * @param {string} [arg.mobileNo] -
      * @param {string} [arg.checkoutMode] -
      * @param {number} [arg.tags] -
      * @param {boolean} [arg.isDefault] -
      
      **/
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
        tags?: number;
        isDefault?: boolean;
    }): any;
    /**
     *
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     **/
    updateAddress({ id, body }?: {
        id: number;
        body: Address;
    }): any;
    /**
      *
      * @summary: Remove Address Associated to the account
      * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Address id
      
      **/
    removeAddress({ id }?: {
        id: number;
    }): any;
    /**
     *
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     **/
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
        b?: boolean;
        body: SelectCartAddressRequest;
    }): any;
    /**
     *
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     * @param {Object} arg - arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     **/
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: UpdateCartPaymentRequest;
    }): any;
    /**
      *
      * @summary: Get Cart Payment for valid coupon
      * @description: Validate coupon for selected payment mode
      * @param {Object} arg - arg object.
      * @param {string} [arg.uid] -
      * @param {string} [arg.addressId] -
      * @param {string} [arg.paymentMode] -
      * @param {string} [arg.paymentIdentifier] -
      * @param {string} [arg.aggregatorName] -
      * @param {string} [arg.merchantCode] -
      
      **/
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
        paymentMode?: string;
        paymentIdentifier?: string;
        aggregatorName?: string;
        merchantCode?: string;
    }): any;
    /**
      *
      * @summary: Get delivery date and options before checkout
      * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pickAtStoreUid] -
      * @param {number} [arg.orderingStoreId] -
      * @param {boolean} [arg.p] - Get payment options or not
      * @param {number} [arg.uid] - Cart id
      * @param {number} [arg.addressId] - Address id
      * @param {string} [arg.areaCode] - Destination pincode.
      * @param {string} [arg.orderType] - Order type of shipment
      
      **/
    getShipments({ pickAtStoreUid, orderingStoreId, p, uid, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
        orderType?: string;
    }): any;
    /**
     *
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.i] - Get items or not
     * @param {boolean} [arg.p] - Get payment options or not
     * @param {number} [arg.uid] - Cart id
     * @param {number} [arg.addressId] - Address id
     * @param {string} [arg.orderType] - Order is hand over or home delivery
     * @param {UpdateCartShipmentRequest} arg.body
     **/
    updateShipments({ body, i, p, uid, addressId, orderType }?: {
        i?: boolean;
        p?: boolean;
        uid?: number;
        addressId?: number;
        orderType?: string;
        body: UpdateCartShipmentRequest;
    }): any;
    /**
     *
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] -
     * @param {CartPosCheckoutRequest} arg.body
     **/
    checkoutCart({ body, uid }?: {
        uid?: number;
        body: CartPosCheckoutRequest;
    }): any;
    /**
     *
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     * @param {Object} arg - arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     **/
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: CartMetaRequest;
    }): any;
    /**
      *
      * @summary: Get available delivery modes for cart
      * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
      * @param {Object} arg - arg object.
      * @param {string} arg.areaCode -
      * @param {number} [arg.uid] -
      
      **/
    getAvailableDeliveryModes({ areaCode, uid }?: {
        areaCode: string;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get list of stores for give uids
      * @description: Get list of stores by providing pick up available store uids.
      * @param {Object} arg - arg object.
      * @param {number} arg.storeUid -
      
      **/
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }): any;
    /**
     *
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     * @param {Object} arg - arg object.
     * @param {GetShareCartLinkRequest} arg.body
     **/
    getCartShareLink({ body }?: {
        body: GetShareCartLinkRequest;
    }): any;
    /**
      *
      * @summary: Get shared cart snapshot and cart response
      * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      
      **/
    getCartSharedItems({ token }?: {
        token: string;
    }): any;
    /**
      *
      * @summary: Merge or Replace existing cart
      * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
      * @param {Object} arg - arg object.
      * @param {string} arg.token - Shared short link token.
      * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
      
      **/
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): any;
}
export class Logistic {
    constructor(_conf: any);
    _conf: any;
    /**
     *
     * @summary: Get Tat Product
     * @description: Get Tat Product
     * @param {Object} arg - arg object.
     * @param {GetTatProductReqBody} arg.body
     **/
    getTatProduct({ body }?: {
        body: GetTatProductReqBody;
    }): any;
    /**
      *
      * @summary: Get City from Pincode
      * @description: Get City from Pincode
      * @param {Object} arg - arg object.
      * @param {string} arg.pincode - Pincode
      
      **/
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): any;
}
import Paginator = require("../common/Paginator");
