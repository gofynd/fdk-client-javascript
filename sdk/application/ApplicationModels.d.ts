export type ProductListingActionPage = {
    query?: any;
    type?: string;
};
export type ProductListingAction = {
    type?: string;
    page?: ProductListingActionPage;
};
export type Media = {
    url?: string;
    type?: string;
};
export type ProductBrand = {
    uid?: number;
    action?: ProductListingAction;
    name?: string;
    logo?: Media;
};
export type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
export type ProductDetailGroupedAttribute = {
    details?: Array<ProductDetailAttribute>;
    title?: string;
};
export type ProductDetail = {
    categories?: Array<ProductBrand>;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    shortDescription?: string;
    type?: string;
    itemType?: string;
    imageNature?: string;
    name?: string;
    color?: string;
    brand?: ProductBrand;
    description?: string;
    rating?: number;
    productOnlineDate?: string;
    slug: string;
    ratingCount?: number;
    attributes?: any;
    teaserTag?: string;
    medias?: Array<Media>;
    highlights?: Array<string>;
    tryouts?: Array<string>;
    uid?: number;
    similars?: Array<string>;
    hasVariant?: boolean;
};
export type ErrorResponse = {
    error?: string;
};
export type ProductSize = {
    quantity?: number;
    display?: string;
    value?: string;
    isAvailable?: boolean;
};
export type Price = {
    currencySymbol?: string;
    min?: number;
    currencyCode?: string;
    max?: number;
};
export type ProductListingPrice = {
    effective?: Price;
    marked?: Price;
};
export type ProductSizeStores = {
    count?: number;
};
export type ProductSizes = {
    sizes?: Array<ProductSize>;
    discount?: string;
    price?: ProductListingPrice;
    stores?: ProductSizeStores;
    sellable?: boolean;
    sizeChart?: any;
};
export type ProductStockPrice = {
    currency?: string;
    effective?: number;
    marked?: number;
};
export type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
export type Seller = {
    uid?: number;
    name?: string;
    count?: number;
};
export type Store = {
    uid?: number;
    name?: string;
    count?: number;
};
export type ProductSizePriceResponse = {
    sellerCount?: number;
    longLat?: Array<number>;
    articleId?: string;
    specialBadge?: string;
    price?: ProductStockPrice;
    discount?: string;
    quantity?: number;
    articleAssignment?: ArticleAssignment;
    pricePerPrice?: ProductStockPrice;
    seller?: Seller;
    store?: Store;
    set?: any;
    strategyWiseListing?: Array<any>;
    pincode?: number;
    itemType?: string;
};
export type ProductSizeSellerFilter = {
    value?: string;
    name?: string;
    isSelected?: boolean;
};
export type Page = {
    current?: number;
    size?: number;
    hasNext?: boolean;
    itemTotal?: number;
    nextId?: string;
    hasPrevious?: boolean;
    type?: string;
};
export type ProductSizeSellersResponse = {
    sortOn?: Array<ProductSizeSellerFilter>;
    items?: Array<ProductSizePriceResponse>;
    page: Page;
};
export type AttributeDetail = {
    display?: string;
    key?: string;
    description?: string;
};
export type ProductsComparisonResponse = {
    items?: Array<ProductDetail>;
    attributesMetadata?: Array<AttributeDetail>;
};
export type ProductCompareResponse = {
    items?: Array<ProductDetail>;
    attributesMetadata?: Array<AttributeDetail>;
    subtitle?: string;
    title?: string;
};
export type ProductFrequentlyComparedSimilarResponse = {
    similars?: Array<ProductCompareResponse>;
};
export type ProductSimilarItem = {
    items?: Array<ProductDetail>;
    subtitle?: string;
    title?: string;
};
export type SimilarProductByTypeResponse = {
    similars?: Array<ProductSimilarItem>;
};
export type ProductVariantItemResponse = {
    action?: ProductListingAction;
    name?: string;
    colorName?: string;
    slug?: string;
    value?: string;
    uid?: number;
    color?: string;
    medias?: Array<Media>;
    isAvailable?: boolean;
};
export type ProductVariantResponse = {
    header?: string;
    items?: Array<ProductVariantItemResponse>;
    displayType?: string;
};
export type ProductVariantsResponse = {
    variants?: Array<ProductVariantResponse>;
};
export type StoreDetail = {
    code?: string;
    name?: string;
    id?: number;
    city?: string;
};
export type CompanyDetail = {
    name?: string;
    id?: number;
};
export type ProductStockStatusItem = {
    identifier?: any;
    size?: string;
    itemId?: number;
    price?: ProductStockPrice;
    quantity?: number;
    seller?: Seller;
    store?: StoreDetail;
    uid?: string;
    company?: CompanyDetail;
};
export type ProductStockStatusResponse = {
    items?: Array<ProductStockStatusItem>;
};
export type ProductStockPolling = {
    items?: Array<ProductStockStatusItem>;
    page: Page;
};
export type ProductFiltersKey = {
    kind?: string;
    display: string;
    name: string;
    logo?: string;
};
export type ProductFiltersValue = {
    display: string;
    queryFormat?: string;
    currencyCode?: string;
    max?: number;
    currencySymbol?: string;
    selectedMax?: number;
    isSelected: boolean;
    selectedMin?: number;
    displayFormat?: string;
    value?: string;
    count?: number;
    min?: number;
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
export type ProductListingDetail = {
    categories?: Array<ProductBrand>;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    sellable?: boolean;
    shortDescription?: string;
    type?: string;
    itemType?: string;
    imageNature?: string;
    name?: string;
    color?: string;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    description?: string;
    rating?: number;
    productOnlineDate?: string;
    discount?: string;
    slug: string;
    ratingCount?: number;
    attributes?: any;
    teaserTag?: string;
    medias?: Array<Media>;
    highlights?: Array<string>;
    tryouts?: Array<string>;
    uid?: number;
    similars?: Array<string>;
    hasVariant?: boolean;
};
export type ProductListingResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
    items?: Array<ProductListingDetail>;
    page: Page;
};
export type ImageUrls = {
    portrait?: Media;
    landscape?: Media;
};
export type BrandItem = {
    banners?: ImageUrls;
    name?: string;
    departments?: Array<string>;
    discount?: string;
    slug?: string;
    uid?: number;
    action?: ProductListingAction;
    logo?: Media;
};
export type BrandListingResponse = {
    items?: Array<BrandItem>;
    page: Page;
};
export type BrandDetailResponse = {
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    logo?: Media;
};
export type CategoryItems = {
    action?: ProductListingAction;
    name?: string;
    childs?: Array<any>;
    slug?: string;
    uid?: number;
    banners?: ImageUrls;
};
export type DepartmentCategoryTree = {
    items?: Array<CategoryItems>;
    department?: string;
};
export type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
export type CategoryListingResponse = {
    data?: Array<DepartmentCategoryTree>;
    departments?: Array<DepartmentIdentifier>;
};
export type CategoryMetaResponse = {
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    logo?: Media;
};
export type HomeListingResponse = {
    items?: Array<ProductListingDetail>;
    page: Page;
    message?: string;
};
export type Department = {
    name?: string;
    slug?: string;
    priorityOrder?: number;
    uid?: number;
    logo?: Media;
};
export type DepartmentResponse = {
    items?: Array<Department>;
};
export type PageQuery = {
    brand?: Array<string>;
    category?: Array<string>;
};
export type AutocompletePage = {
    query?: PageQuery;
    type?: string;
};
export type Action = {
    type?: string;
    page?: AutocompletePage;
};
export type AutocompleteItem = {
    display?: string;
    action?: Action;
    type?: string;
    logo?: Media;
};
export type AutoCompleteResponse = {
    items?: Array<AutocompleteItem>;
};
export type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    isSelected?: boolean;
};
export type CollectionListingFilterType = {
    display?: string;
    name?: string;
    isSelected?: boolean;
};
export type CollectionListingFilter = {
    tags?: Array<CollectionListingFilterTag>;
    type?: Array<CollectionListingFilterType>;
};
export type GetCollectionDetailNest = {
    schedule?: any;
    visibleFacetsKeys?: Array<string>;
    meta?: any;
    type?: string;
    badge?: any;
    name?: string;
    isActive?: boolean;
    description?: string;
    banners?: ImageUrls;
    allowFacets?: boolean;
    allowSort?: boolean;
    slug?: string;
    query?: any;
    appId?: string;
    logo?: Media;
    cron?: any;
    tag?: Array<string>;
    uid?: string;
    action?: ProductListingAction;
};
export type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
    page: Page;
};
export type CollectionDetailResponse = {
    schedule?: any;
    allowFacets?: boolean;
    visibleFacetsKeys?: Array<string>;
    badge?: any;
    name?: string;
    allowSort?: boolean;
    cron?: any;
    isActive?: boolean;
    description?: string;
    slug?: string;
    query?: any;
    tag?: Array<string>;
    meta?: any;
    banners?: ImageUrls;
    appId?: string;
    type?: string;
    logo?: Media;
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
    state?: string;
    name?: string;
    country?: string;
    storeCode?: string;
    latLong?: LatLong;
    uid?: number;
    pincode?: number;
    city?: string;
    storeEmail?: string;
    address?: string;
};
export type StoreListingResponse = {
    items: Array<Store1>;
    page: Page;
};
export type CartCurrency = {
    code?: string;
    symbol?: string;
};
export type PromiseFormatted = {
    max?: string;
    min?: string;
};
export type PromiseTimestamp = {
    max?: number;
    min?: number;
};
export type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
export type DisplayBreakup = {
    display?: string;
    value?: number;
    currencySymbol?: string;
    currencyCode?: string;
    key?: string;
    message?: Array<string>;
};
export type CouponBreakup = {
    type?: string;
    code?: string;
    value?: number;
    isApplied?: boolean;
    uid?: number;
    message?: string;
};
export type RawBreakup = {
    codCharge?: number;
    youSaved?: number;
    subtotal?: number;
    coupon?: number;
    fyndCash?: number;
    deliveryCharge?: number;
    total?: number;
};
export type LoyaltyPoints = {
    applicable?: number;
    isApplied?: boolean;
    description?: string;
    total?: number;
};
export type CartBreakup = {
    display?: Array<DisplayBreakup>;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyaltyPoints?: LoyaltyPoints;
};
export type BaseInfo = {
    uid?: number;
    name?: string;
};
export type BasePrice = {
    currencyCode?: string;
    marked?: number;
    currencySymbol?: string;
    effective?: number;
};
export type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
export type ProductArticle = {
    seller?: BaseInfo;
    store?: BaseInfo;
    type?: string;
    size?: string;
    quantity?: number;
    price?: ArticlePriceInfo;
    uid?: string;
};
export type ActionQuery = {
    productSlug?: Array<string>;
};
export type ProductAction = {
    url?: string;
    query?: ActionQuery;
    type?: string;
};
export type Image = {
    aspectRatio?: string;
    url?: string;
    secureUrl?: string;
};
export type CategoryInfo = {
    uid?: number;
    name?: string;
};
export type Product = {
    brand?: BaseInfo;
    action?: ProductAction;
    type?: string;
    name?: string;
    slug?: string;
    images?: Array<Image>;
    categories?: Array<CategoryInfo>;
    uid?: number;
};
export type ProductAvailability = {
    deliverable?: boolean;
    isValid?: boolean;
    otherStoreQuantity?: number;
    outOfStock?: boolean;
    sizes?: Array<string>;
};
export type ProductPrice = {
    marked?: number;
    selling?: number;
    addOn?: number;
    currencySymbol?: string;
    currencyCode?: string;
    effective?: number;
};
export type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
export type CartProductIdentifer = {
    identifier?: string;
};
export type CartProductInfo = {
    discount?: string;
    bulkOffer?: any;
    isSet?: boolean;
    article?: ProductArticle;
    product?: Product;
    couponMessage?: string;
    quantity?: number;
    key?: string;
    availability?: ProductAvailability;
    price?: ProductPriceInfo;
    message?: string;
    identifiers: CartProductIdentifer;
};
export type CartResponse = {
    deliveryChargeInfo?: string;
    gstin?: string;
    lastModified?: string;
    currency?: CartCurrency;
    cartId?: number;
    isValid?: boolean;
    deliveryPromise?: ShipmentPromise;
    breakupValues?: CartBreakup;
    checkoutMode?: string;
    restrictCheckout?: boolean;
    comment?: string;
    items?: Array<CartProductInfo>;
    uid?: string;
    couponText?: string;
    message?: string;
};
export type AddProductCart = {
    display?: string;
    articleId?: string;
    itemId?: number;
    sellerId?: number;
    articleAssignment?: any;
    storeId?: number;
    quantity?: number;
    pos?: boolean;
    itemSize?: string;
};
export type AddCartRequest = {
    items?: Array<AddProductCart>;
};
export type AddCartResponse = {
    cart?: CartResponse;
    message?: string;
    success?: boolean;
    partial?: boolean;
};
export type UpdateProductCart = {
    itemIndex?: number;
    articleId?: string;
    itemId?: number;
    quantity?: number;
    itemSize?: string;
    identifiers: CartProductIdentifer;
};
export type UpdateCartRequest = {
    operation: string;
    items?: Array<UpdateProductCart>;
};
export type UpdateCartResponse = {
    cart?: CartResponse;
    message?: string;
    success?: boolean;
};
export type CartItemCountResponse = {
    userCartItemsCount?: number;
};
export type Coupon = {
    couponCode?: string;
    title?: string;
    isApplied?: boolean;
    minimumCartValue?: number;
    expiresOn?: string;
    maxDiscountValue?: number;
    subTitle?: string;
    isApplicable?: boolean;
    couponValue?: number;
    message?: string;
};
export type PageCoupon = {
    hasNext?: boolean;
    current?: number;
    totalItemCount?: number;
    hasPrevious?: boolean;
    total?: number;
};
export type GetCouponResponse = {
    availableCouponList?: Array<Coupon>;
    page?: PageCoupon;
};
export type ApplyCouponRequest = {
    couponCode: string;
};
export type OfferSeller = {
    uid?: number;
    name?: string;
};
export type OfferPrice = {
    marked?: number;
    bulkEffective?: number;
    currencySymbol?: string;
    currencyCode?: string;
    effective?: number;
};
export type OfferItem = {
    type?: string;
    margin?: number;
    autoApplied?: boolean;
    quantity?: number;
    best?: boolean;
    price?: OfferPrice;
    total?: number;
};
export type BulkPriceOffer = {
    seller?: OfferSeller;
    offers?: Array<OfferItem>;
};
export type BulkPriceResponse = {
    data?: Array<BulkPriceOffer>;
};
export type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
export type Address = {
    address?: string;
    addressId?: number;
    isActive?: boolean;
    areaCode?: string;
    isDefaultAddress?: boolean;
    uid?: number;
    landmark?: string;
    email?: string;
    state?: string;
    userId?: string;
    checkoutMode?: string;
    country?: string;
    areaCodeSlug?: string;
    addressType?: string;
    countryCode?: string;
    tags?: Array<any>;
    name?: string;
    phone?: string;
    area?: string;
    city?: string;
    meta?: any;
    geoLocation?: GeoLocation;
};
export type GetAddressesResponse = {
    address?: Array<Address>;
};
export type SaveAddressResponse = {
    success?: string;
    addressId?: number;
    isDefaultAddress?: boolean;
};
export type UpdateAddressResponse = {
    isUpdated?: boolean;
    success?: boolean;
    addressId?: number;
    isDefaultAddress?: boolean;
};
export type DeleteAddressResponse = {
    addressId?: number;
    isDeleted?: boolean;
};
export type SelectCartAddressRequest = {
    billingAddressId?: number;
    uid?: string;
    addressId?: string;
};
export type UpdateCartPaymentRequest = {
    paymentIdentifier?: string;
    aggregatorName?: string;
    addressId?: number;
    merchantCode?: string;
    paymentMode?: string;
    uid?: number;
};
export type CouponValidity = {
    code?: string;
    discount?: number;
    displayMessageEn?: string;
    valid?: boolean;
};
export type PaymentUpdate = {
    success: boolean;
    message?: string;
    couponValidity?: CouponValidity;
};
export type ShipmentResponse = {
    fulfillmentId?: number;
    dpId?: number;
    dpOptions?: any;
    promise?: ShipmentPromise;
    fulfillmentType?: string;
    shipments?: number;
    shipmentType?: string;
    orderType?: string;
    boxType?: string;
    items?: Array<CartProductInfo>;
};
export type CartShipmentsResponse = {
    deliveryChargeInfo?: string;
    gstin?: string;
    lastModified?: string;
    currency?: CartCurrency;
    cartId?: number;
    isValid?: boolean;
    deliveryPromise?: ShipmentPromise;
    breakupValues?: CartBreakup;
    checkoutMode?: string;
    shipments?: Array<ShipmentResponse>;
    restrictCheckout?: boolean;
    comment?: string;
    uid?: string;
    couponText?: string;
    message?: string;
};
export type CartCheckoutRequest = {
    billingAddressId?: number;
    extraMeta?: any;
    aggregator?: string;
    paymentIdentifier?: string;
    addressId?: number;
    orderingStore?: number;
    merchantCode?: string;
    fyndstoreEmpId?: string;
    staff?: any;
    billingAddress?: any;
    deliveryAddress?: any;
    paymentParams?: any;
    callbackUrl?: string;
    paymentMode: string;
    paymentAutoConfirm?: boolean;
    meta?: any;
};
export type CheckCart = {
    lastModified?: string;
    currency?: CartCurrency;
    codCharges?: number;
    orderId?: string;
    isValid?: boolean;
    breakupValues?: CartBreakup;
    deliveryCharges?: number;
    items?: Array<CartProductInfo>;
    uid?: string;
    couponText?: string;
    gstin?: string;
    storeCode?: string;
    storeEmps?: Array<any>;
    deliveryPromise?: ShipmentPromise;
    checkoutMode?: string;
    comment?: string;
    message?: string;
    deliveryChargeOrderValue?: number;
    cartId?: number;
    restrictCheckout?: boolean;
    userType?: string;
    deliveryChargeInfo?: string;
    errorMessage?: string;
    codMessage?: string;
    success?: boolean;
    codAvailable?: boolean;
};
export type CartCheckoutResponse = {
    data?: any;
    cart?: CheckCart;
    orderId?: string;
    appInterceptUrl?: string;
    callbackUrl?: string;
    success?: boolean;
    message?: string;
};
export type CartMetaRequest = {
    checkoutMode?: string;
    pickUpCustomerDetails?: any;
    gstin?: string;
    comment?: string;
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
    createdOn?: string;
    token?: string;
    source?: any;
    meta?: any;
    user?: any;
};
export type SharedCart = {
    sharedCartDetails?: SharedCartDetails;
    deliveryChargeInfo?: string;
    gstin?: string;
    lastModified?: string;
    currency?: CartCurrency;
    cartId?: number;
    isValid?: boolean;
    deliveryPromise?: ShipmentPromise;
    breakupValues?: CartBreakup;
    checkoutMode?: string;
    restrictCheckout?: boolean;
    comment?: string;
    items?: Array<CartProductInfo>;
    uid?: string;
    couponText?: string;
    message?: string;
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
    items?: FontsSchemaItems;
    kind?: string;
};
export type BlitzkriegApiErrorSchema = {
    message?: string;
};
export type BlitzkriegNotFoundSchema = {
    message?: string;
};
export type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
export type FontsSchemaItems = {
    family?: string;
    variants?: Array<string>;
    subsets?: Array<string>;
    version?: string;
    lastModified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
export type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
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
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    availablePages?: AvailablePages;
    pages?: Pages;
    availableSections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    id?: string;
    v?: number;
    colors?: Colors;
};
export type pagesSchema = {
    text?: string;
    path?: string;
    type?: string;
    value?: string;
    sections?: Sections;
};
export type availableSectionSchema = {
    blocks?: Blocks;
    name?: string;
    label?: string;
    props?: any;
};
export type sectionSchema = {
    pageKey?: string;
    pageSections?: PageSections;
};
export type Information = {
    images?: Images;
    features?: Array<string>;
    name?: string;
    description?: string;
};
export type Images = {
    desktop?: Array<string>;
    android?: Array<string>;
    ios?: Array<string>;
    thumbnail?: Array<string>;
};
export type Src = {
    link?: string;
};
export type AssetsSchema = {
    umdJs?: UmdJs;
    commonJs?: CommonJs;
    css?: Css;
};
export type UmdJs = {
    link?: string;
};
export type CommonJs = {
    link?: string;
};
export type Css = {
    link?: string;
};
export type AvailablePages = {
    path?: string;
    type?: string;
    text?: string;
    value?: string;
    seo?: Seo;
    props?: any;
    sections?: Sections;
};
export type Seo = {
    title?: string;
    description?: string;
};
export type Props = any;
export type Sections = {
    attributes?: string;
};
export type Attributes = {
    page?: string;
};
export type Pages = {
    collectionListing?: pagesSchema;
    brands?: pagesSchema;
    cartLanding?: pagesSchema;
    collections?: pagesSchema;
    productDescription?: pagesSchema;
    productListing?: pagesSchema;
    home?: pagesSchema;
    categories?: pagesSchema;
    compareProducts?: pagesSchema;
    wishlist?: pagesSchema;
};
export type Constants = any;
export type Styles = any;
export type Config = {
    preset?: Preset;
    globalSchema?: GlobalSchema;
    current?: string;
    list?: List;
};
export type Preset = {
    sections?: sectionSchema;
};
export type GlobalSchema = {
    props?: any;
};
export type GlobalSchemaProps = any;
export type List = {
    global?: any;
    page?: Page;
    name?: string;
};
export type Global = any;
export type Colors = {
    bgColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    linkColor?: string;
    buttonSecondaryColor?: string;
};
export type Custom = {
    props?: any;
};
export type CustomProps = any;
export type Settings = any;
export type SettingsProps = any;
export type Font = {
    family?: string;
    variants?: Variants;
};
export type Variants = {
    medium?: Medium;
    semiBold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
export type Medium = {
    name?: string;
    file?: string;
};
export type SemiBold = {
    name?: string;
    file?: string;
};
export type Bold = {
    name?: string;
    file?: string;
};
export type Light = {
    name?: string;
    file?: string;
};
export type Regular = {
    name?: string;
    file?: string;
};
export type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps;
};
export type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
export type PageSections = {
    blocks?: PageSectionsBlocks;
    name?: string;
    label?: string;
    props?: any;
    preset?: any;
    predicate?: Predicate;
};
export type PageSectionsBlocks = {
    type?: string;
    name?: string;
    props?: PageSectionsBlocksProps;
};
export type PageSectionsBlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
export type PageSectionsProps = any;
export type PageSectionsPreset = any;
export type Predicate = {
    screen?: Screen;
    user?: UserSchema;
    route?: Route;
};
export type Screen = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
export type Route = {
    selected?: string;
    exactUrl?: string;
    query?: any;
};
export type Query = any;
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
export type OrderById = {
    order: OrderSchema;
};
export type OrderList = {
    orders: Array<OrderSchema>;
    page: OrderPage;
};
export type OrderPage = {
    itemTotal?: number;
    type?: string;
    size?: number;
    current?: number;
    hasNext?: boolean;
};
export type ShipmentById = {
    shipment: Shipments;
};
export type ShipmentReasons = {
    reasons: Array<Reasons>;
};
export type ShipmentStatusUpdateBody = {
    shipments: Shipments;
    forceTransition: boolean;
    task: boolean;
};
export type Shipments = {
    shipmentId?: string;
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
    totalBags?: number;
    items?: Array<ProductItems>;
    deliveryAddress?: DeliveryAddress;
    paymentStatus?: string;
    invoice?: Invoice;
    comment?: string;
    orderType?: string;
    promise?: Promise;
    fulfillingStore?: FulfillingStore;
    totalItems?: number;
    bags?: Array<Bags>;
    canCancel?: boolean;
    paymentLogo?: string;
    shipmentCreatedAt?: string;
    shipmentStatus?: ShipmentStatus;
    userInfo?: ShipmentUserInfo;
    meta?: ShipmentMeta;
};
export type ShipmentId = {
    statusUpdate?: StatusUpdate;
    message?: Array<any>;
    error?: string;
    status?: boolean;
};
export type StatusUpdate = {
    status?: string;
};
export type ShipmentStatusUpdate = {
    shipments: Shipments;
};
export type ShipmentTrack = {
    results: Array<Track>;
};
export type OrderSchema = {
    orderId?: string;
    breakupValues?: Array<BreakupValues>;
    orderCreatedTime?: string;
    shipments?: Array<Shipments>;
    totalShipmentsInOrder?: number;
    userInfo?: UserInfo;
};
export type PosOrderById = {
    order: OrderSchema;
};
export type Bags = {
    item?: Item;
    prices?: Prices;
    promotionEffectiveDiscount?: number;
    currentStatus?: CurrentStatus;
    bagStatus?: BagStatus;
    dates?: Dates;
    id?: number;
    status?: Status;
    type?: string;
    financialBreakup?: Array<FinancialBreakup>;
    reasons?: Reasons;
    article?: Article;
    journeyType?: string;
    currentOperationalStatus?: CurrentOperationalStatus;
    displayName?: string;
    entityType?: string;
    brand?: Brand;
    affiliateBagDetails?: AffiliateBagDetails;
    gstDetails?: GstDetails;
    bagId?: number;
    bagUpdateTime?: number;
};
export type Item = {
    brandId?: number;
    canCancel?: boolean;
    brand?: string;
    l1Category?: Array<string>;
    name?: string;
    l2Category?: Array<string>;
    size?: string;
    canReturn?: boolean;
    l3Category?: number;
    lastUpdatedAt?: string;
    slugKey?: string;
    attributes?: Attributes;
    id?: number;
    code?: string;
    l3CategoryName?: string;
    image?: Array<string>;
};
export type Prices = {
    amountPaidRoundoff?: number;
    fyndCredits?: number;
    codCharges?: number;
    cashback?: number;
    addedToFyndCash?: boolean;
    priceMarked?: number;
    transferPrice?: number;
    couponValue?: number;
    priceEffective?: number;
    refundCredit?: number;
    amountPaid?: number;
    refundAmount?: number;
    cashbackApplied?: number;
    gstTaxPercentage?: number;
    valueOfGood?: number;
    brandCalculatedAmount?: number;
    promotionEffectiveDiscount?: number;
    discount?: number;
    couponEffectiveDiscount?: number;
    deliveryCharge?: number;
};
export type CurrentStatus = {
    storeId?: number;
    bagId?: number;
    createdAt?: string;
    stateType?: string;
    id?: number;
    stateId?: number;
    updatedAt?: string;
    kafkaSync?: boolean;
    status?: string;
    bagStateMapper?: BagStateMapper;
};
export type BagStateMapper = {
    name?: string;
    appStateName?: string;
    displayName?: string;
    appDisplayName?: string;
    isActive?: boolean;
    appFacing?: boolean;
    notifyCustomer?: boolean;
    journeyType?: string;
    id?: number;
    stateType?: string;
};
export type BagStatus = {
    bagId?: number;
    kafkaSync?: boolean;
    status?: string;
    storeId?: number;
    stateType?: string;
    id?: number;
    updatedAt?: string;
    bagStateMapper?: BagStatusBagStateMapper;
    stateId?: number;
    createdAt?: string;
};
export type BagStatusBagStateMapper = {
    appStateName?: string;
    isActive?: boolean;
    id?: number;
    appDisplayName?: string;
    appFacing?: boolean;
    notifyCustomer?: boolean;
    stateType?: string;
    journeyType?: string;
    name?: string;
    displayName?: string;
};
export type Dates = {
    orderCreated?: string;
};
export type FinancialBreakup = {
    brandCalculatedAmount?: number;
    couponValue?: number;
    amountPaidRoundoff?: number;
    gstFee?: string;
    refundCredit?: number;
    cashback?: number;
    refundAmount?: number;
    valueOfGood?: number;
    promotionEffectiveDiscount?: number;
    size?: string;
    totalUnits?: number;
    discount?: number;
    amountPaid?: number;
    fyndCredits?: number;
    addedToFyndCash?: boolean;
    deliveryCharge?: number;
    hsnCode?: string;
    couponEffectiveDiscount?: number;
    transferPrice?: number;
    identifiers?: Identifiers;
    gstTag?: string;
    priceMarked?: number;
    priceEffective?: number;
    codCharges?: number;
    itemName?: string;
    cashbackApplied?: number;
    gstTaxPercentage?: number;
};
export type Identifiers = {
    ean?: string;
    skuCode?: string;
};
export type Reasons = {
    id?: number;
    state?: string;
    bagId?: number;
    slug?: string;
    displayName?: string;
    reasonText?: string;
    showTextArea?: boolean;
    feedbackType?: string;
    flow?: string;
    reasonId?: number;
    priority?: number;
};
export type Article = {
    espModified?: boolean;
    size?: string;
    id?: string;
    identifiers?: ArticleIdentifiers;
    isSet?: boolean;
    sellerIdentifier?: string;
    returnConfig?: ReturnConfig;
    uid?: string;
    code?: string;
};
export type ArticleIdentifiers = {
    ean?: string;
    skuCode?: string;
};
export type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
export type CurrentOperationalStatus = {
    id?: number;
    stateId?: number;
    kafkaSync?: boolean;
    reasons?: CurrentOperationalStatusReasons;
    storeId?: number;
    stateType?: string;
    updatedAt?: string;
    bagId?: number;
    status?: string;
    createdAt?: string;
    bagStateMapper?: CurrentOperationalStatusBagStateMapper;
};
export type CurrentOperationalStatusReasons = {
    id?: number;
    state?: string;
    slug?: string;
    displayName?: string;
};
export type CurrentOperationalStatusBagStateMapper = {
    stateType?: string;
    appStateName?: string;
    displayName?: string;
    id?: number;
    isActive?: boolean;
    journeyType?: string;
    name?: string;
    appDisplayName?: string;
    appFacing?: boolean;
    notifyCustomer?: boolean;
};
export type Brand = {
    modifiedOn?: string;
    createdOn?: string;
    brandName?: string;
    isVirtualInvoice?: boolean;
    id?: number;
    creditNoteAllowed?: boolean;
    logo?: string;
};
export type AffiliateBagDetails = {
    affiliateBagId?: string;
    affiliateOrderId?: string;
    affiliateMeta?: AffiliateMeta;
    loyaltyDiscount?: number;
    employeeDiscount?: number;
};
export type AffiliateMeta = {
    sizeLevelTotalQty?: number;
    fynd?: Fynd;
    isPriority?: boolean;
    employeeDiscount?: number;
    loyaltyDiscount?: number;
};
export type Fynd = {
    fulfilmentIdentifier?: string;
};
export type GstDetails = {
    valueOfGood?: number;
    gstTaxPercentage?: number;
    isDefaultHsnCode?: boolean;
    brandCalculatedAmount?: number;
    gstFee?: string;
    gstTag?: string;
    hsnCode?: string;
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
export type FulfillingStore = {
    address1?: string;
    storeEmail?: string;
    code?: string;
    storeAddressJson?: StoreAddressJson;
    country?: string;
    state?: string;
    pincode?: string;
    contactPerson?: string;
    brandStoreTags?: Array<any>;
    locationType?: string;
    address2?: string;
    isArchived?: boolean;
    id?: number;
    createdAt?: string;
    isEnabledForRecon?: boolean;
    city?: string;
    meta?: FulfillingStoreMeta;
    fulfillmentChannel?: string;
    isActive?: boolean;
    updatedAt?: string;
    loginUsername?: string;
    phone?: string;
    packagingMaterialCount?: number;
    name?: string;
    companyId?: number;
};
export type StoreAddressJson = {
    area?: string;
    city?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    address2?: string;
    landmark?: string;
    latitude?: number;
    addressType?: string;
    addressCategory?: string;
    state?: string;
    pincode?: string;
    version?: string;
    address1?: string;
    updatedAt?: string;
    country?: string;
    createdAt?: string;
    contactPerson?: string;
};
export type FulfillingStoreMeta = {
    additionalContactDetails?: AdditionalContactDetails;
    timing?: Timing;
    documents?: Documents;
    displayName?: string;
    stage?: string;
    gstNumber?: string;
    allowDpAssignmentFromFynd?: boolean;
};
export type AdditionalContactDetails = {
    number?: Array<any>;
};
export type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
export type Opening = {
    hour?: number;
    minute?: number;
};
export type Closing = {
    hour?: number;
    minute?: number;
};
export type Documents = {
    gst?: Gst;
};
export type Gst = {
    value?: string;
    verified?: boolean;
    legalName?: string;
    type?: string;
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
    image?: Array<string>;
    l3Category?: number;
    brandId?: number;
    name?: string;
    canCancel?: boolean;
    size?: string;
    slugKey?: string;
    l3CategoryName?: string;
    l2Category?: Array<string>;
    id?: number;
    canReturn?: boolean;
    l1Category?: Array<string>;
    attributes?: Attributes;
};
export type ShipmentMeta = {
    timestamp?: Timestamp;
    bagWeight?: any;
    dpOptions?: DpOptions;
    orderType?: string;
    sameStoreAvailable?: boolean;
    assignDpFromSb?: boolean;
    dpId?: string;
    weight?: number;
    formatted?: Formatted;
    debugInfo?: DebugInfo;
    dpSortKey?: string;
    packagingName?: string;
};
export type Timestamp = {
    max?: string;
    min?: string;
};
export type DpOptions = {
    dpOptionId?: DpOptionId;
};
export type DpOptionId = {
    fPriority?: number;
    operations?: string;
    rPriority?: number;
    paymentMode?: string;
    fmPriority?: number;
    lmPriority?: number;
    rvpPriority?: number;
    assignDpFromSb?: boolean;
};
export type Formatted = {
    max?: string;
    min?: string;
};
export type DebugInfo = {
    stormbreakerUuid?: string;
};
export type Promise = {
    timestamp?: Timestamp;
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
export type Track = {
    awb?: string;
    updatedAt?: string;
    lastLocationRecievedAt?: string;
    reason?: string;
    shipmentType?: string;
    status?: string;
    updatedTime?: string;
    accountName?: string;
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
    orderingStore?: number;
    deliveryAddress?: any;
    fyndstoreEmpId?: string;
    paymentMode: string;
    callbackUrl?: string;
    pos?: boolean;
    pickAtStoreUid?: number;
    staff?: any;
    files?: Files;
    paymentIdentifier?: string;
    extraMeta?: any;
    paymentAutoConfirm?: boolean;
    merchantCode?: string;
    orderType: string;
    billingAddress?: any;
    addressId?: number;
    billingAddressId?: number;
    meta?: any;
    paymentParams?: any;
    aggregator?: string;
};
export type CartDeliveryModesResponse = {
    pickupStores?: Array<number>;
    availableModes?: Array<string>;
};
export type PickupStoreDetail = {
    landmark?: string;
    phone?: string;
    storeCode?: string;
    uid?: number;
    pincode?: number;
    addressType?: string;
    city?: string;
    address?: string;
    state?: string;
    area?: string;
    email?: string;
    country?: string;
    areaCode?: string;
    name?: string;
    areaCodeSlug?: string;
};
export type StoreDetailsResponse = {
    items?: Array<PickupStoreDetail>;
};
export type GetPincodeCityResponse = {
    requestUuid: string;
    stormbreakerUuid: string;
    success: boolean;
    data: Array<Data>;
};
export type Data = {
    meta?: LogisticMeta;
    parents?: Array<Parents>;
    subType?: string;
    name?: string;
    error?: Error;
    uid?: string;
    displayName?: string;
};
export type LogisticMeta = {
    zone?: string;
    deliverables?: Array<any>;
};
export type Parents = {
    subType?: string;
    name?: string;
    displayName?: string;
    uid?: string;
};
export type Error = {
    type?: string;
    value?: string;
    message?: string;
};
export type GetTatProductReqBody = {
    locationDetails: LocationDetails;
    source: string;
    toPincode: string;
    action: string;
    identifier: string;
    journey: string;
};
export type LocationDetails = {
    fromPincode?: string;
    articles?: Articles;
    fulfillmentId?: number;
};
export type Articles = {
    error?: Error;
    category?: Category;
    promise?: LogisticPromise;
};
export type LogisticPromise = {
    timestamp?: LogisticTimestamp;
    formatted?: Formatted;
};
export type LogisticTimestamp = {
    min?: number;
    max?: number;
};
export type GetTatProductResponse = {
    locationDetails: LocationDetails;
    requestUuid: string;
    error: Error;
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
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductBrand
        
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [value]
        
        @property { string } [key]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */
/**
        @typedef ProductDetail
        
        
        @property { Array<ProductBrand> } [categories]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } [shortDescription]
        
        @property { string } [type]
        
        @property { string } [itemType]
        
        @property { string } [imageNature]
        
        @property { string } [name]
        
        @property { string } [color]
        
        @property { ProductBrand } [brand]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { string } slug
        
        @property { number } [ratingCount]
        
        @property { Object } [attributes]
        
        @property { string } [teaserTag]
        
        @property { Array<Media> } [medias]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [uid]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [error]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } [quantity]
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef Price
        
        
        @property { string } [currencySymbol]
        
        @property { number } [min]
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
         
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
        
        
        @property { Array<ProductSize> } [sizes]
        
        @property { string } [discount]
        
        @property { ProductListingPrice } [price]
        
        @property { ProductSizeStores } [stores]
        
        @property { boolean } [sellable]
        
        @property { Object } [sizeChart]
        
         
    */
/**
        @typedef ProductStockPrice
        
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */
/**
        @typedef Seller
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Store
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ProductSizePriceResponse
        
        
        @property { number } [sellerCount]
        
        @property { Array<number> } [longLat]
        
        @property { string } [articleId]
        
        @property { string } [specialBadge]
        
        @property { ProductStockPrice } [price]
        
        @property { string } [discount]
        
        @property { number } [quantity]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { ProductStockPrice } [pricePerPrice]
        
        @property { Seller } [seller]
        
        @property { Store } [store]
        
        @property { Object } [set]
        
        @property { Array<Object> } [strategyWiseListing]
        
        @property { number } [pincode]
        
        @property { string } [itemType]
        
         
    */
/**
        @typedef ProductSizeSellerFilter
        
        
        @property { string } [value]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductSizeSellersResponse
        
        
        @property { Array<ProductSizeSellerFilter> } [sortOn]
        
        @property { Array<ProductSizePriceResponse> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef AttributeDetail
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [description]
        
         
    */
/**
        @typedef ProductsComparisonResponse
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
         
    */
/**
        @typedef ProductCompareResponse
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef ProductFrequentlyComparedSimilarResponse
        
        
        @property { Array<ProductCompareResponse> } [similars]
        
         
    */
/**
        @typedef ProductSimilarItem
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef SimilarProductByTypeResponse
        
        
        @property { Array<ProductSimilarItem> } [similars]
        
         
    */
/**
        @typedef ProductVariantItemResponse
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { string } [colorName]
        
        @property { string } [slug]
        
        @property { string } [value]
        
        @property { number } [uid]
        
        @property { string } [color]
        
        @property { Array<Media> } [medias]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef ProductVariantResponse
        
        
        @property { string } [header]
        
        @property { Array<ProductVariantItemResponse> } [items]
        
        @property { string } [displayType]
        
         
    */
/**
        @typedef ProductVariantsResponse
        
        
        @property { Array<ProductVariantResponse> } [variants]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { string } [code]
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [city]
        
         
    */
/**
        @typedef CompanyDetail
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */
/**
        @typedef ProductStockStatusItem
        
        
        @property { Object } [identifier]
        
        @property { string } [size]
        
        @property { number } [itemId]
        
        @property { ProductStockPrice } [price]
        
        @property { number } [quantity]
        
        @property { Seller } [seller]
        
        @property { StoreDetail } [store]
        
        @property { string } [uid]
        
        @property { CompanyDetail } [company]
        
         
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
        @typedef ProductFiltersKey
        
        
        @property { string } [kind]
        
        @property { string } display
        
        @property { string } name
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } display
        
        @property { string } [queryFormat]
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMax]
        
        @property { boolean } isSelected
        
        @property { number } [selectedMin]
        
        @property { string } [displayFormat]
        
        @property { string } [value]
        
        @property { number } [count]
        
        @property { number } [min]
        
         
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
        @typedef ProductListingDetail
        
        
        @property { Array<ProductBrand> } [categories]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { boolean } [sellable]
        
        @property { string } [shortDescription]
        
        @property { string } [type]
        
        @property { string } [itemType]
        
        @property { string } [imageNature]
        
        @property { string } [name]
        
        @property { string } [color]
        
        @property { ProductListingPrice } [price]
        
        @property { ProductBrand } [brand]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { string } [discount]
        
        @property { string } slug
        
        @property { number } [ratingCount]
        
        @property { Object } [attributes]
        
        @property { string } [teaserTag]
        
        @property { Array<Media> } [medias]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [uid]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { Media } [portrait]
        
        @property { Media } [landscape]
        
         
    */
/**
        @typedef BrandItem
        
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Array<string> } [departments]
        
        @property { string } [discount]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef BrandDetailResponse
        
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CategoryItems
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { Array<Object> } [childs]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
         
    */
/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */
/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentCategoryTree> } [data]
        
        @property { Array<DepartmentIdentifier> } [departments]
        
         
    */
/**
        @typedef CategoryMetaResponse
        
        
        @property { number } [uid]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef HomeListingResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
        @property { string } [message]
        
         
    */
/**
        @typedef Department
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { number } [priorityOrder]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */
/**
        @typedef PageQuery
        
        
        @property { Array<string> } [brand]
        
        @property { Array<string> } [category]
        
         
    */
/**
        @typedef AutocompletePage
        
        
        @property { PageQuery } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Action
        
        
        @property { string } [type]
        
        @property { AutocompletePage } [page]
        
         
    */
/**
        @typedef AutocompleteItem
        
        
        @property { string } [display]
        
        @property { Action } [action]
        
        @property { string } [type]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef AutoCompleteResponse
        
        
        @property { Array<AutocompleteItem> } [items]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [isSelected]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [schedule]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [meta]
        
        @property { string } [type]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [description]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { string } [slug]
        
        @property { Object } [query]
        
        @property { string } [appId]
        
        @property { Media } [logo]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
        @property { string } [uid]
        
        @property { ProductListingAction } [action]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } page
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [schedule]
        
        @property { boolean } [allowFacets]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { boolean } [allowSort]
        
        @property { Object } [cron]
        
        @property { boolean } [isActive]
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { Object } [query]
        
        @property { Array<string> } [tag]
        
        @property { Object } [meta]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { string } [type]
        
        @property { Media } [logo]
        
         
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
        
        
        @property { string } [state]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [storeCode]
        
        @property { LatLong } [latLong]
        
        @property { number } [uid]
        
        @property { number } [pincode]
        
        @property { string } [city]
        
        @property { string } [storeEmail]
        
        @property { string } [address]
        
         
    */
/**
        @typedef StoreListingResponse
        
        
        @property { Array<Store1> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef CartCurrency
        
        
        @property { string } [code]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef PromiseFormatted
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */
/**
        @typedef PromiseTimestamp
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef ShipmentPromise
        
        
        @property { PromiseFormatted } [formatted]
        
        @property { PromiseTimestamp } [timestamp]
        
         
    */
/**
        @typedef DisplayBreakup
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { string } [key]
        
        @property { Array<string> } [message]
        
         
    */
/**
        @typedef CouponBreakup
        
        
        @property { string } [type]
        
        @property { string } [code]
        
        @property { number } [value]
        
        @property { boolean } [isApplied]
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */
/**
        @typedef RawBreakup
        
        
        @property { number } [codCharge]
        
        @property { number } [youSaved]
        
        @property { number } [subtotal]
        
        @property { number } [coupon]
        
        @property { number } [fyndCash]
        
        @property { number } [deliveryCharge]
        
        @property { number } [total]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { number } [applicable]
        
        @property { boolean } [isApplied]
        
        @property { string } [description]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CartBreakup
        
        
        @property { Array<DisplayBreakup> } [display]
        
        @property { CouponBreakup } [coupon]
        
        @property { RawBreakup } [raw]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
         
    */
/**
        @typedef BaseInfo
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BasePrice
        
        
        @property { string } [currencyCode]
        
        @property { number } [marked]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
         
    */
/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [base]
        
        @property { BasePrice } [converted]
        
         
    */
/**
        @typedef ProductArticle
        
        
        @property { BaseInfo } [seller]
        
        @property { BaseInfo } [store]
        
        @property { string } [type]
        
        @property { string } [size]
        
        @property { number } [quantity]
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [productSlug]
        
         
    */
/**
        @typedef ProductAction
        
        
        @property { string } [url]
        
        @property { ActionQuery } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Image
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef CategoryInfo
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Product
        
        
        @property { BaseInfo } [brand]
        
        @property { ProductAction } [action]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<Image> } [images]
        
        @property { Array<CategoryInfo> } [categories]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductAvailability
        
        
        @property { boolean } [deliverable]
        
        @property { boolean } [isValid]
        
        @property { number } [otherStoreQuantity]
        
        @property { boolean } [outOfStock]
        
        @property { Array<string> } [sizes]
        
         
    */
/**
        @typedef ProductPrice
        
        
        @property { number } [marked]
        
        @property { number } [selling]
        
        @property { number } [addOn]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [effective]
        
         
    */
/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [base]
        
        @property { ProductPrice } [converted]
        
         
    */
/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */
/**
        @typedef CartProductInfo
        
        
        @property { string } [discount]
        
        @property { Object } [bulkOffer]
        
        @property { boolean } [isSet]
        
        @property { ProductArticle } [article]
        
        @property { Product } [product]
        
        @property { string } [couponMessage]
        
        @property { number } [quantity]
        
        @property { string } [key]
        
        @property { ProductAvailability } [availability]
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [message]
        
        @property { CartProductIdentifer } identifiers
        
         
    */
/**
        @typedef CartResponse
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { string } [gstin]
        
        @property { string } [lastModified]
        
        @property { CartCurrency } [currency]
        
        @property { number } [cartId]
        
        @property { boolean } [isValid]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [uid]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
         
    */
/**
        @typedef AddProductCart
        
        
        @property { string } [display]
        
        @property { string } [articleId]
        
        @property { number } [itemId]
        
        @property { number } [sellerId]
        
        @property { Object } [articleAssignment]
        
        @property { number } [storeId]
        
        @property { number } [quantity]
        
        @property { boolean } [pos]
        
        @property { string } [itemSize]
        
         
    */
/**
        @typedef AddCartRequest
        
        
        @property { Array<AddProductCart> } [items]
        
         
    */
/**
        @typedef AddCartResponse
        
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
        @property { boolean } [partial]
        
         
    */
/**
        @typedef UpdateProductCart
        
        
        @property { number } [itemIndex]
        
        @property { string } [articleId]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
        @property { string } [itemSize]
        
        @property { CartProductIdentifer } identifiers
        
         
    */
/**
        @typedef UpdateCartRequest
        
        
        @property { string } operation
        
        @property { Array<UpdateProductCart> } [items]
        
         
    */
/**
        @typedef UpdateCartResponse
        
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef CartItemCountResponse
        
        
        @property { number } [userCartItemsCount]
        
         
    */
/**
        @typedef Coupon
        
        
        @property { string } [couponCode]
        
        @property { string } [title]
        
        @property { boolean } [isApplied]
        
        @property { number } [minimumCartValue]
        
        @property { string } [expiresOn]
        
        @property { number } [maxDiscountValue]
        
        @property { string } [subTitle]
        
        @property { boolean } [isApplicable]
        
        @property { number } [couponValue]
        
        @property { string } [message]
        
         
    */
/**
        @typedef PageCoupon
        
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { number } [totalItemCount]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [total]
        
         
    */
/**
        @typedef GetCouponResponse
        
        
        @property { Array<Coupon> } [availableCouponList]
        
        @property { PageCoupon } [page]
        
         
    */
/**
        @typedef ApplyCouponRequest
        
        
        @property { string } couponCode
        
         
    */
/**
        @typedef OfferSeller
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OfferPrice
        
        
        @property { number } [marked]
        
        @property { number } [bulkEffective]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [effective]
        
         
    */
/**
        @typedef OfferItem
        
        
        @property { string } [type]
        
        @property { number } [margin]
        
        @property { boolean } [autoApplied]
        
        @property { number } [quantity]
        
        @property { boolean } [best]
        
        @property { OfferPrice } [price]
        
        @property { number } [total]
        
         
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
        
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
         
    */
/**
        @typedef Address
        
        
        @property { string } [address]
        
        @property { number } [addressId]
        
        @property { boolean } [isActive]
        
        @property { string } [areaCode]
        
        @property { boolean } [isDefaultAddress]
        
        @property { number } [uid]
        
        @property { string } [landmark]
        
        @property { string } [email]
        
        @property { string } [state]
        
        @property { string } [userId]
        
        @property { string } [checkoutMode]
        
        @property { string } [country]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [addressType]
        
        @property { string } [countryCode]
        
        @property { Array<Object> } [tags]
        
        @property { string } [name]
        
        @property { string } [phone]
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { Object } [meta]
        
        @property { GeoLocation } [geoLocation]
        
         
    */
/**
        @typedef GetAddressesResponse
        
        
        @property { Array<Address> } [address]
        
         
    */
/**
        @typedef SaveAddressResponse
        
        
        @property { string } [success]
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
         
    */
/**
        @typedef UpdateAddressResponse
        
        
        @property { boolean } [isUpdated]
        
        @property { boolean } [success]
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
         
    */
/**
        @typedef DeleteAddressResponse
        
        
        @property { number } [addressId]
        
        @property { boolean } [isDeleted]
        
         
    */
/**
        @typedef SelectCartAddressRequest
        
        
        @property { number } [billingAddressId]
        
        @property { string } [uid]
        
        @property { string } [addressId]
        
         
    */
/**
        @typedef UpdateCartPaymentRequest
        
        
        @property { string } [paymentIdentifier]
        
        @property { string } [aggregatorName]
        
        @property { number } [addressId]
        
        @property { string } [merchantCode]
        
        @property { string } [paymentMode]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CouponValidity
        
        
        @property { string } [code]
        
        @property { number } [discount]
        
        @property { string } [displayMessageEn]
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef PaymentUpdate
        
        
        @property { boolean } success
        
        @property { string } [message]
        
        @property { CouponValidity } [couponValidity]
        
         
    */
/**
        @typedef ShipmentResponse
        
        
        @property { number } [fulfillmentId]
        
        @property { number } [dpId]
        
        @property { Object } [dpOptions]
        
        @property { ShipmentPromise } [promise]
        
        @property { string } [fulfillmentType]
        
        @property { number } [shipments]
        
        @property { string } [shipmentType]
        
        @property { string } [orderType]
        
        @property { string } [boxType]
        
        @property { Array<CartProductInfo> } [items]
        
         
    */
/**
        @typedef CartShipmentsResponse
        
        
        @property { string } [deliveryChargeInfo]
        
        @property { string } [gstin]
        
        @property { string } [lastModified]
        
        @property { CartCurrency } [currency]
        
        @property { number } [cartId]
        
        @property { boolean } [isValid]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [checkoutMode]
        
        @property { Array<ShipmentResponse> } [shipments]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { string } [uid]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartCheckoutRequest
        
        
        @property { number } [billingAddressId]
        
        @property { Object } [extraMeta]
        
        @property { string } [aggregator]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [addressId]
        
        @property { number } [orderingStore]
        
        @property { string } [merchantCode]
        
        @property { string } [fyndstoreEmpId]
        
        @property { Object } [staff]
        
        @property { Object } [billingAddress]
        
        @property { Object } [deliveryAddress]
        
        @property { Object } [paymentParams]
        
        @property { string } [callbackUrl]
        
        @property { string } paymentMode
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CheckCart
        
        
        @property { string } [lastModified]
        
        @property { CartCurrency } [currency]
        
        @property { number } [codCharges]
        
        @property { string } [orderId]
        
        @property { boolean } [isValid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { number } [deliveryCharges]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [uid]
        
        @property { string } [couponText]
        
        @property { string } [gstin]
        
        @property { string } [storeCode]
        
        @property { Array<Object> } [storeEmps]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [checkoutMode]
        
        @property { string } [comment]
        
        @property { string } [message]
        
        @property { number } [deliveryChargeOrderValue]
        
        @property { number } [cartId]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [userType]
        
        @property { string } [deliveryChargeInfo]
        
        @property { string } [errorMessage]
        
        @property { string } [codMessage]
        
        @property { boolean } [success]
        
        @property { boolean } [codAvailable]
        
         
    */
/**
        @typedef CartCheckoutResponse
        
        
        @property { Object } [data]
        
        @property { CheckCart } [cart]
        
        @property { string } [orderId]
        
        @property { string } [appInterceptUrl]
        
        @property { string } [callbackUrl]
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartMetaRequest
        
        
        @property { string } [checkoutMode]
        
        @property { Object } [pickUpCustomerDetails]
        
        @property { string } [gstin]
        
        @property { string } [comment]
        
         
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
        
        
        @property { string } [createdOn]
        
        @property { string } [token]
        
        @property { Object } [source]
        
        @property { Object } [meta]
        
        @property { Object } [user]
        
         
    */
/**
        @typedef SharedCart
        
        
        @property { SharedCartDetails } [sharedCartDetails]
        
        @property { string } [deliveryChargeInfo]
        
        @property { string } [gstin]
        
        @property { string } [lastModified]
        
        @property { CartCurrency } [currency]
        
        @property { number } [cartId]
        
        @property { boolean } [isValid]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [uid]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
         
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
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [lastModified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
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
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Pages } [pages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Constants } [constants]
        
        @property { Styles } [styles]
        
        @property { Config } [config]
        
        @property { Settings } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Colors } [colors]
        
         
    */
/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Props } [props]
        
         
    */
/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
    */
/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */
/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
        @property { Css } [css]
        
         
    */
/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Props } [props]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Props
         
    */
/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [page]
        
         
    */
/**
        @typedef Pages
        
        
        @property { pagesSchema } [collectionListing]
        
        @property { pagesSchema } [brands]
        
        @property { pagesSchema } [cartLanding]
        
        @property { pagesSchema } [collections]
        
        @property { pagesSchema } [productDescription]
        
        @property { pagesSchema } [productListing]
        
        @property { pagesSchema } [home]
        
        @property { pagesSchema } [categories]
        
        @property { pagesSchema } [compareProducts]
        
        @property { pagesSchema } [wishlist]
        
         
    */
/**
        @typedef Constants
         
    */
/**
        @typedef Styles
         
    */
/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [globalSchema]
        
        @property { string } [current]
        
        @property { List } [list]
        
         
    */
/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */
/**
        @typedef GlobalSchema
        
        
        @property { GlobalSchemaProps } [props]
        
         
    */
/**
        @typedef GlobalSchemaProps
         
    */
/**
        @typedef List
        
        
        @property { Global } [global]
        
        @property { Page } [page]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Global
         
    */
/**
        @typedef Colors
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
    */
/**
        @typedef Custom
        
        
        @property { CustomProps } [props]
        
         
    */
/**
        @typedef CustomProps
         
    */
/**
        @typedef Settings
         
    */
/**
        @typedef SettingsProps
         
    */
/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */
/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semiBold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */
/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */
/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { PageSectionsProps } [props]
        
        @property { PageSectionsPreset } [preset]
        
        @property { Predicate } [predicate]
        
         
    */
/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */
/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PageSectionsProps
         
    */
/**
        @typedef PageSectionsPreset
         
    */
/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { UserSchema } [user]
        
        @property { Route } [route]
        
         
    */
/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */
/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exactUrl]
        
        @property { Query } [query]
        
         
    */
/**
        @typedef Query
         
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
        @typedef OrderById
        
        
        @property { OrderSchema } order
        
         
    */
/**
        @typedef OrderList
        
        
        @property { Array<OrderSchema> } orders
        
        @property { OrderPage } page
        
         
    */
/**
        @typedef OrderPage
        
        
        @property { number } [itemTotal]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef ShipmentById
        
        
        @property { Shipments } shipment
        
         
    */
/**
        @typedef ShipmentReasons
        
        
        @property { Array<Reasons> } reasons
        
         
    */
/**
        @typedef ShipmentStatusUpdateBody
        
        
        @property { Shipments } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */
/**
        @typedef Shipments
        
        
        @property { string } [shipmentId]
        
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
        
        @property { number } [totalBags]
        
        @property { Array<ProductItems> } [items]
        
        @property { DeliveryAddress } [deliveryAddress]
        
        @property { string } [paymentStatus]
        
        @property { Invoice } [invoice]
        
        @property { string } [comment]
        
        @property { string } [orderType]
        
        @property { Promise } [promise]
        
        @property { FulfillingStore } [fulfillingStore]
        
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
        @typedef ShipmentId
        
        
        @property { StatusUpdate } [statusUpdate]
        
        @property { Array<any> } [message]
        
        @property { string } [error]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef StatusUpdate
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef ShipmentStatusUpdate
        
        
        @property { Shipments } shipments
        
         
    */
/**
        @typedef ShipmentTrack
        
        
        @property { Array<Track> } results
        
         
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
        @typedef PosOrderById
        
        
        @property { OrderSchema } order
        
         
    */
/**
        @typedef Bags
        
        
        @property { Item } [item]
        
        @property { Prices } [prices]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { CurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
        @property { Dates } [dates]
        
        @property { number } [id]
        
        @property { Status } [status]
        
        @property { string } [type]
        
        @property { Array<FinancialBreakup> } [financialBreakup]
        
        @property { Reasons } [reasons]
        
        @property { Article } [article]
        
        @property { string } [journeyType]
        
        @property { CurrentOperationalStatus } [currentOperationalStatus]
        
        @property { string } [displayName]
        
        @property { string } [entityType]
        
        @property { Brand } [brand]
        
        @property { AffiliateBagDetails } [affiliateBagDetails]
        
        @property { GstDetails } [gstDetails]
        
        @property { number } [bagId]
        
        @property { number } [bagUpdateTime]
        
         
    */
/**
        @typedef Item
        
        
        @property { number } [brandId]
        
        @property { boolean } [canCancel]
        
        @property { string } [brand]
        
        @property { Array<string> } [l1Category]
        
        @property { string } [name]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [size]
        
        @property { boolean } [canReturn]
        
        @property { number } [l3Category]
        
        @property { string } [lastUpdatedAt]
        
        @property { string } [slugKey]
        
        @property { Attributes } [attributes]
        
        @property { number } [id]
        
        @property { string } [code]
        
        @property { string } [l3CategoryName]
        
        @property { Array<string> } [image]
        
         
    */
/**
        @typedef Prices
        
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [codCharges]
        
        @property { number } [cashback]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [priceMarked]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [priceEffective]
        
        @property { number } [refundCredit]
        
        @property { number } [amountPaid]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [valueOfGood]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [deliveryCharge]
        
         
    */
/**
        @typedef CurrentStatus
        
        
        @property { number } [storeId]
        
        @property { number } [bagId]
        
        @property { string } [createdAt]
        
        @property { string } [stateType]
        
        @property { number } [id]
        
        @property { number } [stateId]
        
        @property { string } [updatedAt]
        
        @property { boolean } [kafkaSync]
        
        @property { string } [status]
        
        @property { BagStateMapper } [bagStateMapper]
        
         
    */
/**
        @typedef BagStateMapper
        
        
        @property { string } [name]
        
        @property { string } [appStateName]
        
        @property { string } [displayName]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [isActive]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
        @property { string } [journeyType]
        
        @property { number } [id]
        
        @property { string } [stateType]
        
         
    */
/**
        @typedef BagStatus
        
        
        @property { number } [bagId]
        
        @property { boolean } [kafkaSync]
        
        @property { string } [status]
        
        @property { number } [storeId]
        
        @property { string } [stateType]
        
        @property { number } [id]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
        @property { number } [stateId]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef BagStatusBagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { number } [id]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
        @property { string } [stateType]
        
        @property { string } [journeyType]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
         
    */
/**
        @typedef Dates
        
        
        @property { string } [orderCreated]
        
         
    */
/**
        @typedef FinancialBreakup
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaidRoundoff]
        
        @property { string } [gstFee]
        
        @property { number } [refundCredit]
        
        @property { number } [cashback]
        
        @property { number } [refundAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [amountPaid]
        
        @property { number } [fyndCredits]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [deliveryCharge]
        
        @property { string } [hsnCode]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [transferPrice]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [gstTag]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [itemName]
        
        @property { number } [cashbackApplied]
        
        @property { number } [gstTaxPercentage]
        
         
    */
/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
        @property { string } [skuCode]
        
         
    */
/**
        @typedef Reasons
        
        
        @property { number } [id]
        
        @property { string } [state]
        
        @property { number } [bagId]
        
        @property { string } [slug]
        
        @property { string } [displayName]
        
        @property { string } [reasonText]
        
        @property { boolean } [showTextArea]
        
        @property { string } [feedbackType]
        
        @property { string } [flow]
        
        @property { number } [reasonId]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef Article
        
        
        @property { boolean } [espModified]
        
        @property { string } [size]
        
        @property { string } [id]
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [isSet]
        
        @property { string } [sellerIdentifier]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } [uid]
        
        @property { string } [code]
        
         
    */
/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
        @property { string } [skuCode]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef CurrentOperationalStatus
        
        
        @property { number } [id]
        
        @property { number } [stateId]
        
        @property { boolean } [kafkaSync]
        
        @property { CurrentOperationalStatusReasons } [reasons]
        
        @property { number } [storeId]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { number } [bagId]
        
        @property { string } [status]
        
        @property { string } [createdAt]
        
        @property { CurrentOperationalStatusBagStateMapper } [bagStateMapper]
        
         
    */
/**
        @typedef CurrentOperationalStatusReasons
        
        
        @property { number } [id]
        
        @property { string } [state]
        
        @property { string } [slug]
        
        @property { string } [displayName]
        
         
    */
/**
        @typedef CurrentOperationalStatusBagStateMapper
        
        
        @property { string } [stateType]
        
        @property { string } [appStateName]
        
        @property { string } [displayName]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [journeyType]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
         
    */
/**
        @typedef Brand
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [brandName]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { number } [id]
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef AffiliateBagDetails
        
        
        @property { string } [affiliateBagId]
        
        @property { string } [affiliateOrderId]
        
        @property { AffiliateMeta } [affiliateMeta]
        
        @property { number } [loyaltyDiscount]
        
        @property { number } [employeeDiscount]
        
         
    */
/**
        @typedef AffiliateMeta
        
        
        @property { number } [sizeLevelTotalQty]
        
        @property { Fynd } [fynd]
        
        @property { boolean } [isPriority]
        
        @property { number } [employeeDiscount]
        
        @property { number } [loyaltyDiscount]
        
         
    */
/**
        @typedef Fynd
        
        
        @property { string } [fulfilmentIdentifier]
        
         
    */
/**
        @typedef GstDetails
        
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
         
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
        @typedef FulfillingStore
        
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { string } [code]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [pincode]
        
        @property { string } [contactPerson]
        
        @property { Array<any> } [brandStoreTags]
        
        @property { string } [locationType]
        
        @property { string } [address2]
        
        @property { boolean } [isArchived]
        
        @property { number } [id]
        
        @property { string } [createdAt]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [fulfillmentChannel]
        
        @property { boolean } [isActive]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [phone]
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef StoreAddressJson
        
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [address2]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { string } [addressType]
        
        @property { string } [addressCategory]
        
        @property { string } [state]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { string } [updatedAt]
        
        @property { string } [country]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
         
    */
/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Timing } [timing]
        
        @property { Documents } [documents]
        
        @property { string } [displayName]
        
        @property { string } [stage]
        
        @property { string } [gstNumber]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
         
    */
/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<any> } [number]
        
         
    */
/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */
/**
        @typedef Opening
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */
/**
        @typedef Gst
        
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
        @property { string } [legalName]
        
        @property { string } [type]
        
         
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
        
        @property { Array<string> } [image]
        
        @property { number } [l3Category]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { boolean } [canCancel]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { string } [l3CategoryName]
        
        @property { Array<string> } [l2Category]
        
        @property { number } [id]
        
        @property { boolean } [canReturn]
        
        @property { Array<string> } [l1Category]
        
        @property { Attributes } [attributes]
        
         
    */
/**
        @typedef ShipmentMeta
        
        
        @property { Timestamp } [timestamp]
        
        @property { Object } [bagWeight]
        
        @property { DpOptions } [dpOptions]
        
        @property { string } [orderType]
        
        @property { boolean } [sameStoreAvailable]
        
        @property { boolean } [assignDpFromSb]
        
        @property { string } [dpId]
        
        @property { number } [weight]
        
        @property { Formatted } [formatted]
        
        @property { DebugInfo } [debugInfo]
        
        @property { string } [dpSortKey]
        
        @property { string } [packagingName]
        
         
    */
/**
        @typedef Timestamp
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */
/**
        @typedef DpOptions
        
        
        @property { DpOptionId } [dpOptionId]
        
         
    */
/**
        @typedef DpOptionId
        
        
        @property { number } [fPriority]
        
        @property { string } [operations]
        
        @property { number } [rPriority]
        
        @property { string } [paymentMode]
        
        @property { number } [fmPriority]
        
        @property { number } [lmPriority]
        
        @property { number } [rvpPriority]
        
        @property { boolean } [assignDpFromSb]
        
         
    */
/**
        @typedef Formatted
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */
/**
        @typedef DebugInfo
        
        
        @property { string } [stormbreakerUuid]
        
         
    */
/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
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
        @typedef Track
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
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
        
        
        @property { number } [orderingStore]
        
        @property { Object } [deliveryAddress]
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } paymentMode
        
        @property { string } [callbackUrl]
        
        @property { boolean } [pos]
        
        @property { number } [pickAtStoreUid]
        
        @property { Object } [staff]
        
        @property { Files } [files]
        
        @property { string } [paymentIdentifier]
        
        @property { Object } [extraMeta]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { string } [merchantCode]
        
        @property { string } orderType
        
        @property { Object } [billingAddress]
        
        @property { number } [addressId]
        
        @property { number } [billingAddressId]
        
        @property { Object } [meta]
        
        @property { Object } [paymentParams]
        
        @property { string } [aggregator]
        
         
    */
/**
        @typedef CartDeliveryModesResponse
        
        
        @property { Array<number> } [pickupStores]
        
        @property { Array<string> } [availableModes]
        
         
    */
/**
        @typedef PickupStoreDetail
        
        
        @property { string } [landmark]
        
        @property { string } [phone]
        
        @property { string } [storeCode]
        
        @property { number } [uid]
        
        @property { number } [pincode]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address]
        
        @property { string } [state]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [country]
        
        @property { string } [areaCode]
        
        @property { string } [name]
        
        @property { string } [areaCodeSlug]
        
         
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
        
        @property { Array<Data> } data
        
         
    */
/**
        @typedef Data
        
        
        @property { LogisticMeta } [meta]
        
        @property { Array<Parents> } [parents]
        
        @property { string } [subType]
        
        @property { string } [name]
        
        @property { Error } [error]
        
        @property { string } [uid]
        
        @property { string } [displayName]
        
         
    */
/**
        @typedef LogisticMeta
        
        
        @property { string } [zone]
        
        @property { Array<any> } [deliverables]
        
         
    */
/**
        @typedef Parents
        
        
        @property { string } [subType]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [uid]
        
         
    */
/**
        @typedef Error
        
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetTatProductReqBody
        
        
        @property { LocationDetails } locationDetails
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */
/**
        @typedef LocationDetails
        
        
        @property { string } [fromPincode]
        
        @property { Articles } [articles]
        
        @property { number } [fulfillmentId]
        
         
    */
/**
        @typedef Articles
        
        
        @property { Error } [error]
        
        @property { Category } [category]
        
        @property { LogisticPromise } [promise]
        
         
    */
/**
        @typedef LogisticPromise
        
        
        @property { LogisticTimestamp } [timestamp]
        
        @property { Formatted } [formatted]
        
         
    */
/**
        @typedef LogisticTimestamp
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef GetTatProductResponse
        
        
        @property { LocationDetails } locationDetails
        
        @property { string } requestUuid
        
        @property { Error } error
        
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
      * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
      * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
      
      **/
    getProductPriceBySlug({ slug, size, pincode, storeId }?: {
        slug: string;
        size: string;
        pincode: string;
        storeId?: string;
    }): any;
    /**
      *
      * @summary: List sellers of a product
      * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
      * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
      * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize }?: {
        slug: string;
        size: string;
        pincode: string;
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
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollections({ pageNo, pageSize }?: {
        pageNo?: number;
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
    /**
      *
      * @summary: Get POS Order by order id for application based on application Id
      * @description: Get Order By Fynd Order Id
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    getPosOrderById({ orderId }?: {
        orderId: string;
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
