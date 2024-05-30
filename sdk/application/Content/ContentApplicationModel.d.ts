export = ContentApplicationModel;
/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {boolean} [cannonical_enabled]
 * @property {CustomMetaTag[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */
/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image_url]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 */
/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */
/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */
/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate] - Number of seconds after which api should
 *   hit again to fetch new announcements
 * @property {string[]} [refresh_pages] - List of page slugs on which
 *   announcement should be fetched as soon as they are loaded
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef CommonError
 * @property {string} [message]
 */
/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */
/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */
/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */
/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */
/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef {| "about-us"
 *   | "addresses"
 *   | "blog"
 *   | "brands"
 *   | "cards"
 *   | "cart"
 *   | "categories"
 *   | "brand"
 *   | "category"
 *   | "collection"
 *   | "collections"
 *   | "contact-us"
 *   | "external"
 *   | "faq"
 *   | "freshchat"
 *   | "home"
 *   | "notification-settings"
 *   | "orders"
 *   | "page"
 *   | "policy"
 *   | "product"
 *   | "product-request"
 *   | "products"
 *   | "profile"
 *   | "profile-order-shipment"
 *   | "profile-basic"
 *   | "profile-company"
 *   | "profile-emails"
 *   | "profile-phones"
 *   | "rate-us"
 *   | "refer-earn"
 *   | "settings"
 *   | "shared-cart"
 *   | "tnc"
 *   | "track-order"
 *   | "wishlist"
 *   | "sections"
 *   | "form"
 *   | "cart-delivery"
 *   | "cart-payment"
 *   | "cart-review"
 *   | "login"
 *   | "register"
 *   | "shipping-policy"
 *   | "return-policy"
 *   | "order-status"} PageType
 */
declare class ContentApplicationModel {
}
declare namespace ContentApplicationModel {
    export { ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, LocaleLanguage, Language, Action, ActionPage, NavigationReference, ConfigurationSchema, SlideshowMedia, AnnouncementsResponseSchema, FaqResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, FAQCategorySchema, FaqSchema, GetFaqSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, Page, LandingPageSchema, NavigationGetResponse, Orientation, NavigationSchema, PageGetResponse, PageSchema, CreatedBySchema, CronSchedule, SlideshowGetResponse, SlideshowSchema, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, PageType };
}
/** @returns {ApplicationLegal} */
declare function ApplicationLegal(): ApplicationLegal;
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
/** @returns {ApplicationLegalFAQ} */
declare function ApplicationLegalFAQ(): ApplicationLegalFAQ;
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
/** @returns {SeoComponent} */
declare function SeoComponent(): SeoComponent;
type SeoComponent = {
    seo?: SeoSchema;
};
/** @returns {SeoSchema} */
declare function SeoSchema(): SeoSchema;
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    cannonical_enabled?: boolean;
    custom_meta_tags?: CustomMetaTag[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
/** @returns {CustomMetaTag} */
declare function CustomMetaTag(): CustomMetaTag;
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
/** @returns {Detail} */
declare function Detail(): Detail;
type Detail = {
    title?: string;
    description?: string;
    image_url?: string;
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    start?: string;
    end?: string;
};
/** @returns {AnnouncementSchema} */
declare function AnnouncementSchema(): AnnouncementSchema;
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
/** @returns {ScheduleStartSchema} */
declare function ScheduleStartSchema(): ScheduleStartSchema;
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
/** @returns {BlogGetResponse} */
declare function BlogGetResponse(): BlogGetResponse;
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
/** @returns {ResourceContent} */
declare function ResourceContent(): ResourceContent;
type ResourceContent = {
    type?: string;
    value?: string;
};
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
/** @returns {Author} */
declare function Author(): Author;
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
/** @returns {BlogSchema} */
declare function BlogSchema(): BlogSchema;
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
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
/** @returns {SEOImage} */
declare function SEOImage(): SEOImage;
type SEOImage = {
    url?: string;
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {LocaleLanguage} */
declare function LocaleLanguage(): LocaleLanguage;
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
/** @returns {Language} */
declare function Language(): Language;
type Language = {
    display?: string;
};
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type: PageType;
};
/** @returns {NavigationReference} */
declare function NavigationReference(): NavigationReference;
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
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
/** @returns {SlideshowMedia} */
declare function SlideshowMedia(): SlideshowMedia;
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
/** @returns {AnnouncementsResponseSchema} */
declare function AnnouncementsResponseSchema(): AnnouncementsResponseSchema;
type AnnouncementsResponseSchema = {
    announcements?: any;
    /**
     * - Number of seconds after which api should
     * hit again to fetch new announcements
     */
    refresh_rate?: number;
    /**
     * - List of page slugs on which
     * announcement should be fetched as soon as they are loaded
     */
    refresh_pages?: string[];
};
/** @returns {FaqResponseSchema} */
declare function FaqResponseSchema(): FaqResponseSchema;
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
/** @returns {DataLoaderSchema} */
declare function DataLoaderSchema(): DataLoaderSchema;
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
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
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
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    message?: string;
};
/** @returns {CategorySchema} */
declare function CategorySchema(): CategorySchema;
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
/** @returns {ChildrenSchema} */
declare function ChildrenSchema(): ChildrenSchema;
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
/** @returns {FAQCategorySchema} */
declare function FAQCategorySchema(): FAQCategorySchema;
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
/** @returns {FaqSchema} */
declare function FaqSchema(): FaqSchema;
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
    tags?: string[];
};
/** @returns {GetFaqSchema} */
declare function GetFaqSchema(): GetFaqSchema;
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
/** @returns {GetFaqCategoriesSchema} */
declare function GetFaqCategoriesSchema(): GetFaqCategoriesSchema;
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
/** @returns {GetFaqCategoryBySlugSchema} */
declare function GetFaqCategoryBySlugSchema(): GetFaqCategoryBySlugSchema;
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
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
/** @returns {NavigationGetResponse} */
declare function NavigationGetResponse(): NavigationGetResponse;
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
/** @returns {Orientation} */
declare function Orientation(): Orientation;
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
/** @returns {NavigationSchema} */
declare function NavigationSchema(): NavigationSchema;
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
/** @returns {PageGetResponse} */
declare function PageGetResponse(): PageGetResponse;
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    _id?: string;
    application?: string;
    /**
     * - Components can be used to store
     * multiple components
     */
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
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    id?: string;
};
/** @returns {CronSchedule} */
declare function CronSchedule(): CronSchedule;
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
/** @returns {SlideshowGetResponse} */
declare function SlideshowGetResponse(): SlideshowGetResponse;
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
/** @returns {SlideshowSchema} */
declare function SlideshowSchema(): SlideshowSchema;
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
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
/** @returns {PhoneProperties} */
declare function PhoneProperties(): PhoneProperties;
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
/** @returns {PhoneSchema} */
declare function PhoneSchema(): PhoneSchema;
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
/** @returns {EmailProperties} */
declare function EmailProperties(): EmailProperties;
type EmailProperties = {
    key?: string;
    value?: string;
};
/** @returns {EmailSchema} */
declare function EmailSchema(): EmailSchema;
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
/** @returns {ContactSchema} */
declare function ContactSchema(): ContactSchema;
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
/** @returns {TagsSchema} */
declare function TagsSchema(): TagsSchema;
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
/** @returns {TagSchema} */
declare function TagSchema(): TagSchema;
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
/** @returns {TagSourceSchema} */
declare function TagSourceSchema(): TagSourceSchema;
type TagSourceSchema = {
    type?: string;
    id?: string;
};
/**
 * Enum: PageType Used By: Content
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status";
