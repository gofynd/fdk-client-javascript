export type Media = {
    url?: string;
    type?: string;
};
export type ProductListingActionPage = {
    query?: any;
    type?: string;
};
export type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
export type ProductBrand = {
    action?: ProductListingAction;
    uid?: number;
    logo?: Media;
    name?: string;
};
export type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
export type ProductDetailGroupedAttribute = {
    details?: Array<ProductDetailAttribute>;
    title?: string;
};
export type ProductDetail = {
    hasVariant?: boolean;
    name?: string;
    shortDescription?: string;
    imageNature?: string;
    itemType?: string;
    productOnlineDate?: string;
    attributes?: any;
    teaserTag?: string;
    color?: string;
    type?: string;
    tryouts?: Array<string>;
    medias?: Array<Media>;
    categories?: Array<ProductBrand>;
    ratingCount?: number;
    rating?: number;
    description?: string;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    slug: string;
    uid?: number;
    brand?: ProductBrand;
    highlights?: Array<string>;
    similars?: Array<string>;
};
export type ErrorResponse = {
    error?: string;
};
export type ProductSizeStores = {
    count?: number;
};
export type Price = {
    max?: number;
    currencyCode?: string;
    currencySymbol?: string;
    min?: number;
};
export type ProductListingPrice = {
    effective?: Price;
    marked?: Price;
};
export type ProductSize = {
    value?: string;
    display?: string;
    quantity?: number;
    isAvailable?: boolean;
};
export type ProductSizes = {
    stores?: ProductSizeStores;
    price?: ProductListingPrice;
    sellable?: boolean;
    sizeChart?: any;
    sizes?: Array<ProductSize>;
    discount?: string;
};
export type ProductStockPrice = {
    effective?: number;
    currency?: string;
    marked?: number;
};
export type Store = {
    count?: number;
    uid?: number;
    name?: string;
};
export type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
export type Seller = {
    count?: number;
    uid?: number;
    name?: string;
};
export type ProductSizePriceResponse = {
    pricePerPrice?: ProductStockPrice;
    set?: any;
    quantity?: number;
    store?: Store;
    price?: ProductStockPrice;
    longLat?: Array<number>;
    articleAssignment?: ArticleAssignment;
    itemType?: string;
    seller?: Seller;
    articleId?: string;
    specialBadge?: string;
    discount?: string;
    sellerCount?: number;
    strategyWiseListing?: Array<any>;
    pincode?: number;
};
export type Page = {
    type?: string;
    current?: number;
    hasPrevious?: boolean;
    size?: number;
    hasNext?: boolean;
    itemTotal?: number;
    nextId?: string;
};
export type ProductSizeSellerFilter = {
    isSelected?: boolean;
    value?: string;
    name?: string;
};
export type ProductSizeSellersResponse = {
    page: Page;
    sortOn?: Array<ProductSizeSellerFilter>;
    items?: Array<ProductSizePriceResponse>;
};
export type AttributeDetail = {
    key?: string;
    description?: string;
    display?: string;
};
export type ProductsComparisonResponse = {
    items?: Array<ProductDetail>;
    attributesMetadata?: Array<AttributeDetail>;
};
export type ProductCompareResponse = {
    items?: Array<ProductDetail>;
    title?: string;
    attributesMetadata?: Array<AttributeDetail>;
    subtitle?: string;
};
export type ProductFrequentlyComparedSimilarResponse = {
    similars?: Array<ProductCompareResponse>;
};
export type ProductSimilarItem = {
    items?: Array<ProductDetail>;
    title?: string;
    subtitle?: string;
};
export type SimilarProductByTypeResponse = {
    similars?: Array<ProductSimilarItem>;
};
export type ProductVariantItemResponse = {
    action?: ProductListingAction;
    name?: string;
    value?: string;
    medias?: Array<Media>;
    isAvailable?: boolean;
    slug?: string;
    uid?: number;
    colorName?: string;
    color?: string;
};
export type ProductVariantResponse = {
    header?: string;
    displayType?: string;
    items?: Array<ProductVariantItemResponse>;
};
export type ProductVariantsResponse = {
    variants?: Array<ProductVariantResponse>;
};
export type StoreDetail = {
    city?: string;
    code?: string;
    id?: number;
    name?: string;
};
export type CompanyDetail = {
    id?: number;
    name?: string;
};
export type ProductStockStatusItem = {
    quantity?: number;
    store?: StoreDetail;
    price?: ProductStockPrice;
    identifier?: any;
    size?: string;
    seller?: Seller;
    itemId?: number;
    uid?: string;
    company?: CompanyDetail;
};
export type ProductStockStatusResponse = {
    items?: Array<ProductStockStatusItem>;
};
export type ProductStockPolling = {
    page: Page;
    items?: Array<ProductStockStatusItem>;
};
export type ProductSortOn = {
    value?: string;
    isSelected?: boolean;
    name?: string;
};
export type ProductListingDetail = {
    hasVariant?: boolean;
    name?: string;
    shortDescription?: string;
    imageNature?: string;
    itemType?: string;
    productOnlineDate?: string;
    attributes?: any;
    teaserTag?: string;
    color?: string;
    type?: string;
    tryouts?: Array<string>;
    medias?: Array<Media>;
    categories?: Array<ProductBrand>;
    sellable?: boolean;
    ratingCount?: number;
    rating?: number;
    price?: ProductListingPrice;
    description?: string;
    groupedAttributes?: Array<ProductDetailGroupedAttribute>;
    slug: string;
    uid?: number;
    brand?: ProductBrand;
    highlights?: Array<string>;
    similars?: Array<string>;
    discount?: string;
};
export type ProductFiltersKey = {
    display: string;
    kind?: string;
    logo?: string;
    name: string;
};
export type ProductFiltersValue = {
    queryFormat?: string;
    selectedMin?: number;
    value: string;
    min?: number;
    displayFormat?: string;
    count?: number;
    max?: number;
    selectedMax?: number;
    currencySymbol?: string;
    isSelected: boolean;
    display: string;
    currencyCode?: string;
};
export type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
export type ProductListingResponse = {
    page: Page;
    sortOn?: Array<ProductSortOn>;
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
};
export type ImageUrls = {
    landscape?: Media;
    portrait?: Media;
};
export type BrandItem = {
    action?: ProductListingAction;
    banners?: ImageUrls;
    departments?: Array<string>;
    name?: string;
    discount?: string;
    slug?: string;
    uid?: number;
    logo?: Media;
};
export type BrandListingResponse = {
    page: Page;
    items?: Array<BrandItem>;
};
export type BrandDetailResponse = {
    banners?: ImageUrls;
    uid?: number;
    logo?: Media;
    name?: string;
};
export type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
export type CategoryItems = {
    banners?: ImageUrls;
    action?: ProductListingAction;
    name?: string;
    slug?: string;
    childs?: Array<any>;
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
    banners?: ImageUrls;
    uid?: number;
    logo?: Media;
    name?: string;
};
export type HomeListingResponse = {
    page: Page;
    message?: string;
    items?: Array<ProductListingDetail>;
};
export type Department = {
    name?: string;
    priorityOrder?: number;
    slug?: string;
    uid?: number;
    logo?: Media;
};
export type DepartmentResponse = {
    items?: Array<Department>;
};
export type Query = {
    category?: Array<string>;
    brand?: Array<string>;
};
export type AutocompletePage = {
    pageQuery?: Query;
    type?: string;
};
export type Action = {
    page?: AutocompletePage;
    type?: string;
};
export type AutocompleteItem = {
    action?: Action;
    type?: string;
    logo?: Media;
    display?: string;
};
export type AutoCompleteResponse = {
    items?: Array<AutocompleteItem>;
};
export type GetCollectionDetailNest = {
    allowSort?: boolean;
    name?: string;
    badge?: any;
    query?: any;
    logo?: Media;
    action?: ProductListingAction;
    type?: string;
    appId?: string;
    tag?: Array<string>;
    banners?: ImageUrls;
    isActive?: boolean;
    visibleFacetsKeys?: Array<string>;
    allowFacets?: boolean;
    description?: string;
    slug?: string;
    uid?: string;
    cron?: any;
    schedule?: any;
    meta?: any;
};
export type CollectionListingFilterType = {
    isSelected?: boolean;
    display?: string;
    name?: string;
};
export type CollectionListingFilterTag = {
    isSelected?: boolean;
    display?: string;
    name?: string;
};
export type CollectionListingFilter = {
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
export type GetCollectionListingResponse = {
    page: Page;
    items?: Array<GetCollectionDetailNest>;
    filters?: CollectionListingFilter;
};
export type CollectionDetailResponse = {
    banners?: ImageUrls;
    isActive?: boolean;
    type?: string;
    visibleFacetsKeys?: Array<string>;
    allowSort?: boolean;
    name?: string;
    cron?: any;
    allowFacets?: boolean;
    description?: string;
    appId?: string;
    badge?: any;
    tag?: Array<string>;
    slug?: string;
    query?: any;
    logo?: Media;
    schedule?: any;
    meta?: any;
};
export type GetFollowListingResponse = {
    page: Page;
    items: Array<any>;
};
export type FollowPostResponse = {
    message: string;
    id: string;
};
export type FollowerCountResponse = {
    count?: number;
};
export type FollowIdsData = {
    brands?: Array<number>;
    collections?: Array<number>;
    products?: Array<number>;
};
export type FollowIdsResponse = {
    data?: FollowIdsData;
};
export type LatLong = {
    type?: string;
    coordinates?: Array<number>;
};
export type Store1 = {
    address?: string;
    name?: string;
    storeCode?: string;
    storeEmail?: string;
    latLong?: LatLong;
    state?: string;
    city?: string;
    uid?: number;
    pincode?: number;
    country?: string;
};
export type StoreListingResponse = {
    page: Page;
    items: Array<Store1>;
};
export type CartProductIdentifer = {
    identifier?: string;
};
export type ProductPrice = {
    currencyCode?: string;
    currencySymbol?: string;
    effective?: number;
    marked?: number;
    selling?: number;
    addOn?: number;
};
export type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
export type ProductAvailability = {
    deliverable?: boolean;
    sizes?: Array<string>;
    isValid?: boolean;
    outOfStock?: boolean;
    otherStoreQuantity?: number;
};
export type BaseInfo = {
    name?: string;
    uid?: number;
};
export type BasePrice = {
    effective?: number;
    currencyCode?: string;
    currencySymbol?: string;
    marked?: number;
};
export type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
export type ProductArticle = {
    type?: string;
    store?: BaseInfo;
    uid?: string;
    price?: ArticlePriceInfo;
    size?: string;
    quantity?: number;
    seller?: BaseInfo;
};
export type ActionQuery = {
    productSlug?: Array<string>;
};
export type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
export type Image = {
    url?: string;
    secureUrl?: string;
    aspectRatio?: string;
};
export type CategoryInfo = {
    name?: string;
    uid?: number;
};
export type Product = {
    type?: string;
    slug?: string;
    uid?: number;
    action?: ProductAction;
    brand?: BaseInfo;
    name?: string;
    images?: Array<Image>;
    categories?: Array<CategoryInfo>;
};
export type CartProductInfo = {
    message?: string;
    identifiers: CartProductIdentifer;
    price?: ProductPriceInfo;
    couponMessage?: string;
    bulkOffer?: any;
    availability?: ProductAvailability;
    quantity?: number;
    discount?: string;
    isSet?: boolean;
    article?: ProductArticle;
    key?: string;
    product?: Product;
};
export type CouponBreakup = {
    type?: string;
    message?: string;
    uid?: number;
    value?: number;
    code?: string;
    isApplied?: boolean;
};
export type LoyaltyPoints = {
    isApplied?: boolean;
    total?: number;
    applicable?: number;
    description?: string;
};
export type DisplayBreakup = {
    message?: Array<string>;
    currencyCode?: string;
    currencySymbol?: string;
    value?: number;
    display?: string;
    key?: string;
};
export type RawBreakup = {
    subtotal?: number;
    coupon?: number;
    codCharge?: number;
    fyndCash?: number;
    youSaved?: number;
    deliveryCharge?: number;
    total?: number;
};
export type CartBreakup = {
    coupon?: CouponBreakup;
    loyaltyPoints?: LoyaltyPoints;
    display?: Array<DisplayBreakup>;
    raw?: RawBreakup;
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
export type CartCurrency = {
    code?: string;
    symbol?: string;
};
export type CartResponse = {
    items?: Array<CartProductInfo>;
    checkoutMode?: string;
    message?: string;
    uid?: string;
    lastModified?: string;
    breakupValues?: CartBreakup;
    restrictCheckout?: boolean;
    comment?: string;
    deliveryChargeInfo?: string;
    deliveryPromise?: ShipmentPromise;
    couponText?: string;
    isValid?: boolean;
    gstin?: string;
    cartId?: number;
    currency?: CartCurrency;
};
export type AddProductCart = {
    sellerId?: number;
    itemId?: number;
    quantity?: number;
    storeId?: number;
    display?: string;
    articleId?: string;
    articleAssignment?: any;
    itemSize?: string;
    pos?: boolean;
};
export type AddCartRequest = {
    items?: Array<AddProductCart>;
};
export type AddCartResponse = {
    success?: boolean;
    cart?: CartResponse;
    partial?: boolean;
    message?: string;
};
export type UpdateProductCart = {
    itemIndex?: number;
    itemId?: number;
    quantity?: number;
    articleId?: string;
    identifiers: CartProductIdentifer;
    itemSize?: string;
};
export type UpdateCartRequest = {
    items?: Array<UpdateProductCart>;
    operation: string;
};
export type UpdateCartResponse = {
    success?: boolean;
    cart?: CartResponse;
    message?: string;
};
export type CartItemCountResponse = {
    userCartItemsCount?: number;
};
export type PageCoupon = {
    totalItemCount?: number;
    hasPrevious?: boolean;
    hasNext?: boolean;
    total?: number;
    current?: number;
};
export type Coupon = {
    message?: string;
    isApplicable?: boolean;
    minimumCartValue?: number;
    subTitle?: string;
    maxDiscountValue?: number;
    couponCode?: string;
    title?: string;
    expiresOn?: string;
    isApplied?: boolean;
    couponValue?: number;
};
export type GetCouponResponse = {
    page?: PageCoupon;
    availableCouponList?: Array<Coupon>;
};
export type ApplyCouponRequest = {
    couponCode: string;
};
export type OfferPrice = {
    bulkEffective?: number;
    currencyCode?: string;
    currencySymbol?: string;
    effective?: number;
    marked?: number;
};
export type OfferItem = {
    type?: string;
    autoApplied?: boolean;
    margin?: number;
    price?: OfferPrice;
    quantity?: number;
    best?: boolean;
    total?: number;
};
export type OfferSeller = {
    name?: string;
    uid?: number;
};
export type BulkPriceOffer = {
    offers?: Array<OfferItem>;
    seller?: OfferSeller;
};
export type BulkPriceResponse = {
    data?: Array<BulkPriceOffer>;
};
export type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
export type Address = {
    addressType?: string;
    areaCode?: string;
    userId?: string;
    country?: string;
    uid?: number;
    isDefaultAddress?: boolean;
    isActive?: boolean;
    landmark?: string;
    phone?: string;
    state?: string;
    name?: string;
    address?: string;
    area?: string;
    email?: string;
    tags?: Array<any>;
    checkoutMode?: string;
    geoLocation?: GeoLocation;
    areaCodeSlug?: string;
    city?: string;
    meta?: any;
    addressId?: number;
    countryCode?: string;
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
    success?: boolean;
    addressId?: number;
    isDefaultAddress?: boolean;
    isUpdated?: boolean;
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
    aggregatorName?: string;
    uid?: number;
    paymentIdentifier?: string;
    addressId?: number;
    paymentMode?: string;
    merchantCode?: string;
};
export type CouponValidity = {
    displayMessageEn?: string;
    code?: string;
    discount?: number;
    valid?: boolean;
};
export type PaymentUpdate = {
    success: boolean;
    message?: string;
    couponValidity?: CouponValidity;
};
export type ShipmentResponse = {
    items?: Array<CartProductInfo>;
    dpId?: number;
    fulfillmentType?: string;
    fulfillmentId?: number;
    orderType?: string;
    boxType?: string;
    shipments?: number;
    shipmentType?: string;
    promise?: ShipmentPromise;
    dpOptions?: any;
};
export type CartShipmentsResponse = {
    checkoutMode?: string;
    message?: string;
    uid?: string;
    lastModified?: string;
    breakupValues?: CartBreakup;
    restrictCheckout?: boolean;
    comment?: string;
    shipments?: Array<ShipmentResponse>;
    deliveryChargeInfo?: string;
    deliveryPromise?: ShipmentPromise;
    couponText?: string;
    isValid?: boolean;
    gstin?: string;
    cartId?: number;
    currency?: CartCurrency;
};
export type CartCheckoutRequest = {
    paymentParams?: any;
    callbackUrl?: string;
    billingAddressId?: number;
    fyndstoreEmpId?: string;
    paymentIdentifier?: string;
    paymentAutoConfirm?: boolean;
    meta?: any;
    aggregator?: string;
    extraMeta?: any;
    addressId?: number;
    paymentMode: string;
    orderingStore?: number;
    staff?: any;
    billingAddress?: any;
    deliveryAddress?: any;
    merchantCode?: string;
};
export type CheckCart = {
    items?: Array<CartProductInfo>;
    codMessage?: string;
    message?: string;
    success?: boolean;
    orderId?: string;
    restrictCheckout?: boolean;
    deliveryCharges?: number;
    comment?: string;
    codCharges?: number;
    uid?: string;
    breakupValues?: CartBreakup;
    codAvailable?: boolean;
    deliveryPromise?: ShipmentPromise;
    gstin?: string;
    storeCode?: string;
    lastModified?: string;
    errorMessage?: string;
    deliveryChargeOrderValue?: number;
    storeEmps?: Array<any>;
    couponText?: string;
    cartId?: number;
    currency?: CartCurrency;
    checkoutMode?: string;
    userType?: string;
    deliveryChargeInfo?: string;
    isValid?: boolean;
};
export type CartCheckoutResponse = {
    callbackUrl?: string;
    message?: string;
    success?: boolean;
    data?: any;
    orderId?: string;
    appInterceptUrl?: string;
    cart?: CheckCart;
};
export type CartMetaRequest = {
    gstin?: string;
    checkoutMode?: string;
    pickUpCustomerDetails?: any;
    comment?: string;
};
export type CartMetaResponse = {
    message?: string;
};
export type CartMetaMissingResponse = {
    errors?: Array<string>;
};
export type GetShareCartLinkRequest = {
    meta?: any;
    uid: number;
};
export type GetShareCartLinkResponse = {
    token?: string;
    shareUrl?: string;
};
export type SharedCartDetails = {
    user?: any;
    token?: string;
    meta?: any;
    createdOn?: string;
    source?: any;
};
export type SharedCart = {
    items?: Array<CartProductInfo>;
    checkoutMode?: string;
    message?: string;
    uid?: string;
    lastModified?: string;
    breakupValues?: CartBreakup;
    restrictCheckout?: boolean;
    comment?: string;
    deliveryChargeInfo?: string;
    deliveryPromise?: ShipmentPromise;
    couponText?: string;
    isValid?: boolean;
    gstin?: string;
    cartId?: number;
    currency?: CartCurrency;
    sharedCartDetails?: SharedCartDetails;
};
export type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
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
    articleUid: string;
    shipmentType: string;
    quantity?: number;
};
export type UpdateCartShipmentRequest = {
    shipments: Array<UpdateCartShipmentItem>;
};
export type Files = {
    key: string;
    values: Array<string>;
};
export type CartPosCheckoutRequest = {
    fyndstoreEmpId?: string;
    paymentIdentifier?: string;
    pickAtStoreUid?: number;
    paymentAutoConfirm?: boolean;
    paymentParams?: any;
    billingAddress?: any;
    orderingStore?: number;
    paymentMode: string;
    pos?: boolean;
    addressId?: number;
    extraMeta?: any;
    files?: Files;
    callbackUrl?: string;
    aggregator?: string;
    billingAddressId?: number;
    staff?: any;
    meta?: any;
    merchantCode?: string;
    orderType: string;
    deliveryAddress?: any;
};
export type CartDeliveryModesResponse = {
    availableModes?: Array<string>;
    pickupStores?: Array<number>;
};
export type PickupStoreDetail = {
    name?: string;
    pincode?: number;
    area?: string;
    areaCode?: string;
    addressType?: string;
    phone?: string;
    areaCodeSlug?: string;
    country?: string;
    city?: string;
    uid?: number;
    storeCode?: string;
    state?: string;
    address?: string;
    email?: string;
    landmark?: string;
};
export type StoreDetailsResponse = {
    items?: Array<PickupStoreDetail>;
};
/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
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
        @typedef ProductBrand
        
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { Array<ProductDetailAttribute> } [details]
        
        @property { string } [title]
        
         
    */
/**
        @typedef ProductDetail
        
        
        @property { boolean } [hasVariant]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { string } [imageNature]
        
        @property { string } [itemType]
        
        @property { string } [productOnlineDate]
        
        @property { Object } [attributes]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { string } [type]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Media> } [medias]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { number } [ratingCount]
        
        @property { number } [rating]
        
        @property { string } [description]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [similars]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [error]
        
         
    */
/**
        @typedef ProductSizeStores
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [max]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [min]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price } [effective]
        
        @property { Price } [marked]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { string } [value]
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef ProductSizes
        
        
        @property { ProductSizeStores } [stores]
        
        @property { ProductListingPrice } [price]
        
        @property { boolean } [sellable]
        
        @property { Object } [sizeChart]
        
        @property { Array<ProductSize> } [sizes]
        
        @property { string } [discount]
        
         
    */
/**
        @typedef ProductStockPrice
        
        
        @property { number } [effective]
        
        @property { string } [currency]
        
        @property { number } [marked]
        
         
    */
/**
        @typedef Store
        
        
        @property { number } [count]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [level]
        
        @property { string } [strategy]
        
         
    */
/**
        @typedef Seller
        
        
        @property { number } [count]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductSizePriceResponse
        
        
        @property { ProductStockPrice } [pricePerPrice]
        
        @property { Object } [set]
        
        @property { number } [quantity]
        
        @property { Store } [store]
        
        @property { ProductStockPrice } [price]
        
        @property { Array<number> } [longLat]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { string } [itemType]
        
        @property { Seller } [seller]
        
        @property { string } [articleId]
        
        @property { string } [specialBadge]
        
        @property { string } [discount]
        
        @property { number } [sellerCount]
        
        @property { Array<Object> } [strategyWiseListing]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef Page
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
         
    */
/**
        @typedef ProductSizeSellerFilter
        
        
        @property { boolean } [isSelected]
        
        @property { string } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductSizeSellersResponse
        
        
        @property { Page } page
        
        @property { Array<ProductSizeSellerFilter> } [sortOn]
        
        @property { Array<ProductSizePriceResponse> } [items]
        
         
    */
/**
        @typedef AttributeDetail
        
        
        @property { string } [key]
        
        @property { string } [description]
        
        @property { string } [display]
        
         
    */
/**
        @typedef ProductsComparisonResponse
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
         
    */
/**
        @typedef ProductCompareResponse
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [title]
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef ProductFrequentlyComparedSimilarResponse
        
        
        @property { Array<ProductCompareResponse> } [similars]
        
         
    */
/**
        @typedef ProductSimilarItem
        
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef SimilarProductByTypeResponse
        
        
        @property { Array<ProductSimilarItem> } [similars]
        
         
    */
/**
        @typedef ProductVariantItemResponse
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { string } [value]
        
        @property { Array<Media> } [medias]
        
        @property { boolean } [isAvailable]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { string } [colorName]
        
        @property { string } [color]
        
         
    */
/**
        @typedef ProductVariantResponse
        
        
        @property { string } [header]
        
        @property { string } [displayType]
        
        @property { Array<ProductVariantItemResponse> } [items]
        
         
    */
/**
        @typedef ProductVariantsResponse
        
        
        @property { Array<ProductVariantResponse> } [variants]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { string } [city]
        
        @property { string } [code]
        
        @property { number } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompanyDetail
        
        
        @property { number } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductStockStatusItem
        
        
        @property { number } [quantity]
        
        @property { StoreDetail } [store]
        
        @property { ProductStockPrice } [price]
        
        @property { Object } [identifier]
        
        @property { string } [size]
        
        @property { Seller } [seller]
        
        @property { number } [itemId]
        
        @property { string } [uid]
        
        @property { CompanyDetail } [company]
        
         
    */
/**
        @typedef ProductStockStatusResponse
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
    */
/**
        @typedef ProductStockPolling
        
        
        @property { Page } page
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { boolean } [hasVariant]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { string } [imageNature]
        
        @property { string } [itemType]
        
        @property { string } [productOnlineDate]
        
        @property { Object } [attributes]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { string } [type]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Media> } [medias]
        
        @property { Array<ProductBrand> } [categories]
        
        @property { boolean } [sellable]
        
        @property { number } [ratingCount]
        
        @property { number } [rating]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [description]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [similars]
        
        @property { string } [discount]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } [logo]
        
        @property { string } name
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } [queryFormat]
        
        @property { number } [selectedMin]
        
        @property { string } value
        
        @property { number } [min]
        
        @property { string } [displayFormat]
        
        @property { number } [count]
        
        @property { number } [max]
        
        @property { number } [selectedMax]
        
        @property { string } [currencySymbol]
        
        @property { boolean } isSelected
        
        @property { string } display
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { Page } page
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { Media } [landscape]
        
        @property { Media } [portrait]
        
         
    */
/**
        @typedef BrandItem
        
        
        @property { ProductListingAction } [action]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [departments]
        
        @property { string } [name]
        
        @property { string } [discount]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef BrandListingResponse
        
        
        @property { Page } page
        
        @property { Array<BrandItem> } [items]
        
         
    */
/**
        @typedef BrandDetailResponse
        
        
        @property { ImageUrls } [banners]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
         
    */
/**
        @typedef DepartmentIdentifier
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CategoryItems
        
        
        @property { ImageUrls } [banners]
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<Object> } [childs]
        
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
        
        
        @property { ImageUrls } [banners]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
         
    */
/**
        @typedef HomeListingResponse
        
        
        @property { Page } page
        
        @property { string } [message]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */
/**
        @typedef Department
        
        
        @property { string } [name]
        
        @property { number } [priorityOrder]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */
/**
        @typedef Query
        
        
        @property { Array<string> } [category]
        
        @property { Array<string> } [brand]
        
         
    */
/**
        @typedef AutocompletePage
        
        
        @property { Query } [pageQuery]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Action
        
        
        @property { AutocompletePage } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteItem
        
        
        @property { Action } [action]
        
        @property { string } [type]
        
        @property { Media } [logo]
        
        @property { string } [display]
        
         
    */
/**
        @typedef AutoCompleteResponse
        
        
        @property { Array<AutocompleteItem> } [items]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { Media } [logo]
        
        @property { ProductListingAction } [action]
        
        @property { string } [type]
        
        @property { string } [appId]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [allowFacets]
        
        @property { string } [description]
        
        @property { string } [slug]
        
        @property { string } [uid]
        
        @property { Object } [cron]
        
        @property { Object } [schedule]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { boolean } [isSelected]
        
        @property { string } [display]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } page
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [isActive]
        
        @property { string } [type]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { Object } [cron]
        
        @property { boolean } [allowFacets]
        
        @property { string } [description]
        
        @property { string } [appId]
        
        @property { Object } [badge]
        
        @property { Array<string> } [tag]
        
        @property { string } [slug]
        
        @property { Object } [query]
        
        @property { Media } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetFollowListingResponse
        
        
        @property { Page } page
        
        @property { Array<Object> } items
        
         
    */
/**
        @typedef FollowPostResponse
        
        
        @property { string } message
        
        @property { string } id
        
         
    */
/**
        @typedef FollowerCountResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef FollowIdsData
        
        
        @property { Array<number> } [brands]
        
        @property { Array<number> } [collections]
        
        @property { Array<number> } [products]
        
         
    */
/**
        @typedef FollowIdsResponse
        
        
        @property { FollowIdsData } [data]
        
         
    */
/**
        @typedef LatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef Store1
        
        
        @property { string } [address]
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [storeEmail]
        
        @property { LatLong } [latLong]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { number } [uid]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef StoreListingResponse
        
        
        @property { Page } page
        
        @property { Array<Store1> } items
        
         
    */
/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */
/**
        @typedef ProductPrice
        
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { number } [selling]
        
        @property { number } [addOn]
        
         
    */
/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [converted]
        
        @property { ProductPrice } [base]
        
         
    */
/**
        @typedef ProductAvailability
        
        
        @property { boolean } [deliverable]
        
        @property { Array<string> } [sizes]
        
        @property { boolean } [isValid]
        
        @property { boolean } [outOfStock]
        
        @property { number } [otherStoreQuantity]
        
         
    */
/**
        @typedef BaseInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef BasePrice
        
        
        @property { number } [effective]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [marked]
        
         
    */
/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [converted]
        
        @property { BasePrice } [base]
        
         
    */
/**
        @typedef ProductArticle
        
        
        @property { string } [type]
        
        @property { BaseInfo } [store]
        
        @property { string } [uid]
        
        @property { ArticlePriceInfo } [price]
        
        @property { string } [size]
        
        @property { number } [quantity]
        
        @property { BaseInfo } [seller]
        
         
    */
/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [productSlug]
        
         
    */
/**
        @typedef ProductAction
        
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { ActionQuery } [query]
        
         
    */
/**
        @typedef Image
        
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef CategoryInfo
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Product
        
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { ProductAction } [action]
        
        @property { BaseInfo } [brand]
        
        @property { string } [name]
        
        @property { Array<Image> } [images]
        
        @property { Array<CategoryInfo> } [categories]
        
         
    */
/**
        @typedef CartProductInfo
        
        
        @property { string } [message]
        
        @property { CartProductIdentifer } identifiers
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [couponMessage]
        
        @property { Object } [bulkOffer]
        
        @property { ProductAvailability } [availability]
        
        @property { number } [quantity]
        
        @property { string } [discount]
        
        @property { boolean } [isSet]
        
        @property { ProductArticle } [article]
        
        @property { string } [key]
        
        @property { Product } [product]
        
         
    */
/**
        @typedef CouponBreakup
        
        
        @property { string } [type]
        
        @property { string } [message]
        
        @property { number } [uid]
        
        @property { number } [value]
        
        @property { string } [code]
        
        @property { boolean } [isApplied]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [isApplied]
        
        @property { number } [total]
        
        @property { number } [applicable]
        
        @property { string } [description]
        
         
    */
/**
        @typedef DisplayBreakup
        
        
        @property { Array<string> } [message]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [value]
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */
/**
        @typedef RawBreakup
        
        
        @property { number } [subtotal]
        
        @property { number } [coupon]
        
        @property { number } [codCharge]
        
        @property { number } [fyndCash]
        
        @property { number } [youSaved]
        
        @property { number } [deliveryCharge]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CartBreakup
        
        
        @property { CouponBreakup } [coupon]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { Array<DisplayBreakup> } [display]
        
        @property { RawBreakup } [raw]
        
         
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
        @typedef CartCurrency
        
        
        @property { string } [code]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef CartResponse
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
         
    */
/**
        @typedef AddProductCart
        
        
        @property { number } [sellerId]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
        @property { number } [storeId]
        
        @property { string } [display]
        
        @property { string } [articleId]
        
        @property { Object } [articleAssignment]
        
        @property { string } [itemSize]
        
        @property { boolean } [pos]
        
         
    */
/**
        @typedef AddCartRequest
        
        
        @property { Array<AddProductCart> } [items]
        
         
    */
/**
        @typedef AddCartResponse
        
        
        @property { boolean } [success]
        
        @property { CartResponse } [cart]
        
        @property { boolean } [partial]
        
        @property { string } [message]
        
         
    */
/**
        @typedef UpdateProductCart
        
        
        @property { number } [itemIndex]
        
        @property { number } [itemId]
        
        @property { number } [quantity]
        
        @property { string } [articleId]
        
        @property { CartProductIdentifer } identifiers
        
        @property { string } [itemSize]
        
         
    */
/**
        @typedef UpdateCartRequest
        
        
        @property { Array<UpdateProductCart> } [items]
        
        @property { string } operation
        
         
    */
/**
        @typedef UpdateCartResponse
        
        
        @property { boolean } [success]
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CartItemCountResponse
        
        
        @property { number } [userCartItemsCount]
        
         
    */
/**
        @typedef PageCoupon
        
        
        @property { number } [totalItemCount]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [total]
        
        @property { number } [current]
        
         
    */
/**
        @typedef Coupon
        
        
        @property { string } [message]
        
        @property { boolean } [isApplicable]
        
        @property { number } [minimumCartValue]
        
        @property { string } [subTitle]
        
        @property { number } [maxDiscountValue]
        
        @property { string } [couponCode]
        
        @property { string } [title]
        
        @property { string } [expiresOn]
        
        @property { boolean } [isApplied]
        
        @property { number } [couponValue]
        
         
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
        @typedef OfferPrice
        
        
        @property { number } [bulkEffective]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
         
    */
/**
        @typedef OfferItem
        
        
        @property { string } [type]
        
        @property { boolean } [autoApplied]
        
        @property { number } [margin]
        
        @property { OfferPrice } [price]
        
        @property { number } [quantity]
        
        @property { boolean } [best]
        
        @property { number } [total]
        
         
    */
/**
        @typedef OfferSeller
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef BulkPriceOffer
        
        
        @property { Array<OfferItem> } [offers]
        
        @property { OfferSeller } [seller]
        
         
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
        
        
        @property { string } [addressType]
        
        @property { string } [areaCode]
        
        @property { string } [userId]
        
        @property { string } [country]
        
        @property { number } [uid]
        
        @property { boolean } [isDefaultAddress]
        
        @property { boolean } [isActive]
        
        @property { string } [landmark]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { Array<Object> } [tags]
        
        @property { string } [checkoutMode]
        
        @property { GeoLocation } [geoLocation]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [city]
        
        @property { Object } [meta]
        
        @property { number } [addressId]
        
        @property { string } [countryCode]
        
         
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
        
        
        @property { boolean } [success]
        
        @property { number } [addressId]
        
        @property { boolean } [isDefaultAddress]
        
        @property { boolean } [isUpdated]
        
         
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
        
        
        @property { string } [aggregatorName]
        
        @property { number } [uid]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [addressId]
        
        @property { string } [paymentMode]
        
        @property { string } [merchantCode]
        
         
    */
/**
        @typedef CouponValidity
        
        
        @property { string } [displayMessageEn]
        
        @property { string } [code]
        
        @property { number } [discount]
        
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
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { number } [dpId]
        
        @property { string } [fulfillmentType]
        
        @property { number } [fulfillmentId]
        
        @property { string } [orderType]
        
        @property { string } [boxType]
        
        @property { number } [shipments]
        
        @property { string } [shipmentType]
        
        @property { ShipmentPromise } [promise]
        
        @property { Object } [dpOptions]
        
         
    */
/**
        @typedef CartShipmentsResponse
        
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { Array<ShipmentResponse> } [shipments]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
         
    */
/**
        @typedef CartCheckoutRequest
        
        
        @property { Object } [paymentParams]
        
        @property { string } [callbackUrl]
        
        @property { number } [billingAddressId]
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [paymentIdentifier]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [meta]
        
        @property { string } [aggregator]
        
        @property { Object } [extraMeta]
        
        @property { number } [addressId]
        
        @property { string } paymentMode
        
        @property { number } [orderingStore]
        
        @property { Object } [staff]
        
        @property { Object } [billingAddress]
        
        @property { Object } [deliveryAddress]
        
        @property { string } [merchantCode]
        
         
    */
/**
        @typedef CheckCart
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [codMessage]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
        @property { string } [orderId]
        
        @property { boolean } [restrictCheckout]
        
        @property { number } [deliveryCharges]
        
        @property { string } [comment]
        
        @property { number } [codCharges]
        
        @property { string } [uid]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [codAvailable]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [gstin]
        
        @property { string } [storeCode]
        
        @property { string } [lastModified]
        
        @property { string } [errorMessage]
        
        @property { number } [deliveryChargeOrderValue]
        
        @property { Array<Object> } [storeEmps]
        
        @property { string } [couponText]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
        @property { string } [checkoutMode]
        
        @property { string } [userType]
        
        @property { string } [deliveryChargeInfo]
        
        @property { boolean } [isValid]
        
         
    */
/**
        @typedef CartCheckoutResponse
        
        
        @property { string } [callbackUrl]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
        @property { Object } [data]
        
        @property { string } [orderId]
        
        @property { string } [appInterceptUrl]
        
        @property { CheckCart } [cart]
        
         
    */
/**
        @typedef CartMetaRequest
        
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { Object } [pickUpCustomerDetails]
        
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
        
        
        @property { Object } [meta]
        
        @property { number } uid
        
         
    */
/**
        @typedef GetShareCartLinkResponse
        
        
        @property { string } [token]
        
        @property { string } [shareUrl]
        
         
    */
/**
        @typedef SharedCartDetails
        
        
        @property { Object } [user]
        
        @property { string } [token]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [source]
        
         
    */
/**
        @typedef SharedCart
        
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [checkoutMode]
        
        @property { string } [message]
        
        @property { string } [uid]
        
        @property { string } [lastModified]
        
        @property { CartBreakup } [breakupValues]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [comment]
        
        @property { string } [deliveryChargeInfo]
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [couponText]
        
        @property { boolean } [isValid]
        
        @property { string } [gstin]
        
        @property { number } [cartId]
        
        @property { CartCurrency } [currency]
        
        @property { SharedCartDetails } [sharedCartDetails]
        
         
    */
/**
        @typedef SharedCartResponse
        
        
        @property { SharedCart } [cart]
        
        @property { string } [error]
        
         
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
        
        
        @property { string } articleUid
        
        @property { string } shipmentType
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef UpdateCartShipmentRequest
        
        
        @property { Array<UpdateCartShipmentItem> } shipments
        
         
    */
/**
        @typedef Files
        
        
        @property { string } key
        
        @property { Array<string> } values
        
         
    */
/**
        @typedef CartPosCheckoutRequest
        
        
        @property { string } [fyndstoreEmpId]
        
        @property { string } [paymentIdentifier]
        
        @property { number } [pickAtStoreUid]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [paymentParams]
        
        @property { Object } [billingAddress]
        
        @property { number } [orderingStore]
        
        @property { string } paymentMode
        
        @property { boolean } [pos]
        
        @property { number } [addressId]
        
        @property { Object } [extraMeta]
        
        @property { Files } [files]
        
        @property { string } [callbackUrl]
        
        @property { string } [aggregator]
        
        @property { number } [billingAddressId]
        
        @property { Object } [staff]
        
        @property { Object } [meta]
        
        @property { string } [merchantCode]
        
        @property { string } orderType
        
        @property { Object } [deliveryAddress]
        
         
    */
/**
        @typedef CartDeliveryModesResponse
        
        
        @property { Array<string> } [availableModes]
        
        @property { Array<number> } [pickupStores]
        
         
    */
/**
        @typedef PickupStoreDetail
        
        
        @property { string } [name]
        
        @property { number } [pincode]
        
        @property { string } [area]
        
        @property { string } [areaCode]
        
        @property { string } [addressType]
        
        @property { string } [phone]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [country]
        
        @property { string } [city]
        
        @property { number } [uid]
        
        @property { string } [storeCode]
        
        @property { string } [state]
        
        @property { string } [address]
        
        @property { string } [email]
        
        @property { string } [landmark]
        
         
    */
/**
        @typedef StoreDetailsResponse
        
        
        @property { Array<PickupStoreDetail> } [items]
        
         
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
import Paginator = require("../common/Paginator");
