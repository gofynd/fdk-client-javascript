export = ContentPlatformModel;
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
 * @property {PageType} type
 * @property {string} [url]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [announcement]
 * @property {string} [app]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {EditorMeta} [editor_meta]
 * @property {string} [modified_at]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {string[]} [platforms]
 * @property {string} [title]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {string[]} [refresh_pages] - List of page slugs on which
 *   announcement should be fetched as soon as they are loaded
 * @property {number} [refresh_rate] - Number of seconds after which api should
 *   hit again to fetch new announcements
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [policy]
 * @property {string} [returns]
 * @property {string} [shipping]
 * @property {string} [tnc]
 * @property {string} [updated_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [answer]
 * @property {string} [question]
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
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BlogRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef BlogSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {DateMeta} [date_meta]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef CategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 */
/**
 * @typedef CommonError
 * @property {string} [message]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [duration]
 * @property {number} [sleep_time]
 * @property {string} [slide_direction]
 * @property {boolean} [start_on_launch]
 */
/**
 * @typedef ContactSchema
 * @property {EmailSchema} [email]
 * @property {PhoneSchema} [phone]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {AdminAnnouncementSchema} [data]
 * @property {string} [message]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */
/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef DataLoaderSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef Detail
 * @property {string} [description]
 * @property {string} [image_url]
 * @property {string} [title]
 */
/**
 * @typedef EditorMeta
 * @property {string} [background_color]
 * @property {string} [content]
 * @property {string} [content_type]
 * @property {string} [foreground_color]
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
 * @typedef FAQ
 * @property {string} [answer]
 * @property {string} [question]
 * @property {string} [slug]
 */
/**
 * @typedef FAQCategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef FaqSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 * @property {string[]} [tags]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef GeneratedSEOContent
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef GenerateSEOContent
 * @property {string} [existing_text]
 * @property {string[]} [keywords]
 * @property {string} [text]
 * @property {string} [type]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
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
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {Action} [action]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [ar]
 * @property {Language} [en_us]
 * @property {Language} [hi]
 */
/**
 * @typedef Navigation
 * @property {string} [_id]
 * @property {string} [application]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference} [navigation]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {string} [position]
 * @property {string} [slug]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef NavigationReference
 * @property {LocaleLanguage} [_locale_language]
 * @property {string[]} [acl]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {string} [image]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 * @property {string[]} [tags]
 * @property {string} [type]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 * @property {number} [version]
 */
/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef Orientation
 * @property {string[]} [landscape]
 * @property {string[]} [portrait]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageMetaSchema
 * @property {string} [application_id]
 * @property {PageSchema[]} [custom_pages]
 * @property {NavigationSchema[]} [system_pages]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef PageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {Object[]} [page_meta]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [visibility]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [display_name]
 * @property {string} [page_type]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PathMappingSchema
 * @property {PathSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 */
/**
 * @typedef PathSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [code]
 * @property {string} [key]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef SeoSchema
 * @property {string} [_id]
 * @property {string} [app]
 * @property {boolean} [cannonical_enabled]
 * @property {string} [created_at]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [updated_at]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowMedia
 * @property {Action} [action]
 * @property {boolean} [auto_decide_duration]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef SlideshowRequest
 * @property {boolean} [active]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef SlideshowSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {ConfigurationSchema} [configuration]
 * @property {DateMeta} [date_meta]
 * @property {SlideshowMedia[]} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef Support
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [config_type]
 * @property {ContactSchema} [contact]
 * @property {boolean} [created]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TagSchema
 * @property {TagSourceSchema} [__source]
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef TagsSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */
/** @typedef {"title" | "description"} GenerationEntityType */
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
declare class ContentPlatformModel {
}
declare namespace ContentPlatformModel {
    export { Action, ActionPage, AdminAnnouncementSchema, AnnouncementAuthorSchema, AnnouncementPageSchema, AnnouncementSchema, AnnouncementsResponseSchema, ApplicationLegal, ApplicationLegalFAQ, Asset, Author, BlogGetResponse, BlogRequest, BlogSchema, CategoryRequestSchema, CategorySchema, ChildrenSchema, CommonError, ConfigurationSchema, ContactSchema, ContentAPIError, ContentSchema, CreateAnnouncementSchema, CreatedBySchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, CreateFaqResponseSchema, CreateFaqSchema, CreateTagRequestSchema, CreateTagSchema, CronSchedule, CustomMetaTag, CustomPage, CustomPageSchema, DataLoaderResetResponseSchema, DataLoaderResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, DateMeta, DefaultNavigationResponse, Detail, EditorMeta, EmailProperties, EmailSchema, FAQ, FAQCategorySchema, FaqResponseSchema, FaqSchema, FeatureImage, GeneratedSEOContent, GenerateSEOContent, GetAnnouncementListSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, HandpickedTagSchema, LandingPage, LandingPageGetResponse, LandingPageSchema, Language, LocaleLanguage, Navigation, NavigationGetResponse, NavigationReference, NavigationRequest, NavigationSchema, NextSchedule, Orientation, Page, PageContent, PageGetResponse, PageMeta, PageMetaSchema, PagePublishRequest, PageRequest, PageSchema, PageSpec, PageSpecItem, PageSpecParam, PathMappingSchema, PathSourceSchema, PhoneProperties, PhoneSchema, RemoveHandpickedSchema, ResourceContent, ScheduleSchema, ScheduleStartSchema, SEO, SeoComponent, SEOImage, SeoSchema, Slideshow, SlideshowGetResponse, SlideshowMedia, SlideshowRequest, SlideshowSchema, Support, TagDeleteSuccessResponse, TagSchema, TagSourceSchema, TagsSchema, UpdateFaqCategoryRequestSchema, UpdateHandpickedSchema, GenerationEntityType, PageType };
}
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
    type: PageType;
    url?: string;
};
/** @returns {AdminAnnouncementSchema} */
declare function AdminAnnouncementSchema(): AdminAnnouncementSchema;
type AdminAnnouncementSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    announcement?: string;
    app?: string;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    editor_meta?: EditorMeta;
    modified_at?: string;
    pages?: AnnouncementPageSchema[];
    platforms?: string[];
    title?: string;
};
/** @returns {AnnouncementAuthorSchema} */
declare function AnnouncementAuthorSchema(): AnnouncementAuthorSchema;
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
/** @returns {AnnouncementPageSchema} */
declare function AnnouncementPageSchema(): AnnouncementPageSchema;
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
/** @returns {AnnouncementSchema} */
declare function AnnouncementSchema(): AnnouncementSchema;
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
/** @returns {AnnouncementsResponseSchema} */
declare function AnnouncementsResponseSchema(): AnnouncementsResponseSchema;
type AnnouncementsResponseSchema = {
    announcements?: any;
    /**
     * - List of page slugs on which
     * announcement should be fetched as soon as they are loaded
     */
    refresh_pages?: string[];
    /**
     * - Number of seconds after which api should
     * hit again to fetch new announcements
     */
    refresh_rate?: number;
};
/** @returns {ApplicationLegal} */
declare function ApplicationLegal(): ApplicationLegal;
type ApplicationLegal = {
    _id?: string;
    application?: string;
    created_at?: string;
    faq?: ApplicationLegalFAQ[];
    policy?: string;
    returns?: string;
    shipping?: string;
    tnc?: string;
    updated_at?: string;
};
/** @returns {ApplicationLegalFAQ} */
declare function ApplicationLegalFAQ(): ApplicationLegalFAQ;
type ApplicationLegalFAQ = {
    answer?: string;
    question?: string;
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
/** @returns {BlogGetResponse} */
declare function BlogGetResponse(): BlogGetResponse;
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
/** @returns {BlogRequest} */
declare function BlogRequest(): BlogRequest;
type BlogRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {BlogSchema} */
declare function BlogSchema(): BlogSchema;
type BlogSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: CronSchedule;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    date_meta?: DateMeta;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {CategoryRequestSchema} */
declare function CategoryRequestSchema(): CategoryRequestSchema;
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
/** @returns {CategorySchema} */
declare function CategorySchema(): CategorySchema;
type CategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: string[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
/** @returns {ChildrenSchema} */
declare function ChildrenSchema(): ChildrenSchema;
type ChildrenSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
};
/** @returns {CommonError} */
declare function CommonError(): CommonError;
type CommonError = {
    message?: string;
};
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    duration?: number;
    sleep_time?: number;
    slide_direction?: string;
    start_on_launch?: boolean;
};
/** @returns {ContactSchema} */
declare function ContactSchema(): ContactSchema;
type ContactSchema = {
    email?: EmailSchema;
    phone?: PhoneSchema;
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    code?: string;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
/** @returns {ContentSchema} */
declare function ContentSchema(): ContentSchema;
type ContentSchema = {
    type?: string;
    value?: any;
};
/** @returns {CreateAnnouncementSchema} */
declare function CreateAnnouncementSchema(): CreateAnnouncementSchema;
type CreateAnnouncementSchema = {
    data?: AdminAnnouncementSchema;
    message?: string;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    id?: string;
};
/** @returns {CreateFaqCategoryRequestSchema} */
declare function CreateFaqCategoryRequestSchema(): CreateFaqCategoryRequestSchema;
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
/** @returns {CreateFaqCategorySchema} */
declare function CreateFaqCategorySchema(): CreateFaqCategorySchema;
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
/** @returns {CreateFaqResponseSchema} */
declare function CreateFaqResponseSchema(): CreateFaqResponseSchema;
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
/** @returns {CreateFaqSchema} */
declare function CreateFaqSchema(): CreateFaqSchema;
type CreateFaqSchema = {
    faq?: FAQ;
};
/** @returns {CreateTagRequestSchema} */
declare function CreateTagRequestSchema(): CreateTagRequestSchema;
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
/** @returns {CreateTagSchema} */
declare function CreateTagSchema(): CreateTagSchema;
type CreateTagSchema = {
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {CronSchedule} */
declare function CronSchedule(): CronSchedule;
type CronSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
/** @returns {CustomMetaTag} */
declare function CustomMetaTag(): CustomMetaTag;
type CustomMetaTag = {
    _id?: string;
    content?: string;
    name?: string;
};
/** @returns {CustomPage} */
declare function CustomPage(): CustomPage;
type CustomPage = {
    data?: CustomPageSchema;
};
/** @returns {CustomPageSchema} */
declare function CustomPageSchema(): CustomPageSchema;
type CustomPageSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
};
/** @returns {DataLoaderResetResponseSchema} */
declare function DataLoaderResetResponseSchema(): DataLoaderResetResponseSchema;
type DataLoaderResetResponseSchema = {
    reset?: string;
};
/** @returns {DataLoaderResponseSchema} */
declare function DataLoaderResponseSchema(): DataLoaderResponseSchema;
type DataLoaderResponseSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    application?: string;
    company?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
/** @returns {DataLoaderSchema} */
declare function DataLoaderSchema(): DataLoaderSchema;
type DataLoaderSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
/** @returns {DataLoaderSourceSchema} */
declare function DataLoaderSourceSchema(): DataLoaderSourceSchema;
type DataLoaderSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {DataLoadersSchema} */
declare function DataLoadersSchema(): DataLoadersSchema;
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
/** @returns {DateMeta} */
declare function DateMeta(): DateMeta;
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
/** @returns {DefaultNavigationResponse} */
declare function DefaultNavigationResponse(): DefaultNavigationResponse;
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
/** @returns {Detail} */
declare function Detail(): Detail;
type Detail = {
    description?: string;
    image_url?: string;
    title?: string;
};
/** @returns {EditorMeta} */
declare function EditorMeta(): EditorMeta;
type EditorMeta = {
    background_color?: string;
    content?: string;
    content_type?: string;
    foreground_color?: string;
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
/** @returns {FAQ} */
declare function FAQ(): FAQ;
type FAQ = {
    answer?: string;
    question?: string;
    slug?: string;
};
/** @returns {FAQCategorySchema} */
declare function FAQCategorySchema(): FAQCategorySchema;
type FAQCategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: ChildrenSchema[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
/** @returns {FaqResponseSchema} */
declare function FaqResponseSchema(): FaqResponseSchema;
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
/** @returns {FaqSchema} */
declare function FaqSchema(): FaqSchema;
type FaqSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
    tags?: string[];
};
/** @returns {FeatureImage} */
declare function FeatureImage(): FeatureImage;
type FeatureImage = {
    secure_url?: string;
};
/** @returns {GeneratedSEOContent} */
declare function GeneratedSEOContent(): GeneratedSEOContent;
type GeneratedSEOContent = {
    description?: string;
    title?: string;
};
/** @returns {GenerateSEOContent} */
declare function GenerateSEOContent(): GenerateSEOContent;
type GenerateSEOContent = {
    existing_text?: string;
    keywords?: string[];
    text?: string;
    type?: string;
};
/** @returns {GetAnnouncementListSchema} */
declare function GetAnnouncementListSchema(): GetAnnouncementListSchema;
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
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
/** @returns {GetFaqSchema} */
declare function GetFaqSchema(): GetFaqSchema;
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
/** @returns {HandpickedTagSchema} */
declare function HandpickedTagSchema(): HandpickedTagSchema;
type HandpickedTagSchema = {
    attributes?: any;
    content?: string;
    name?: string;
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {LandingPage} */
declare function LandingPage(): LandingPage;
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
/** @returns {LandingPageGetResponse} */
declare function LandingPageGetResponse(): LandingPageGetResponse;
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
/** @returns {LandingPageSchema} */
declare function LandingPageSchema(): LandingPageSchema;
type LandingPageSchema = {
    _custom_json?: any;
    _id?: string;
    action?: Action;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    platform?: string[];
    slug?: string;
};
/** @returns {Language} */
declare function Language(): Language;
type Language = {
    display?: string;
};
/** @returns {LocaleLanguage} */
declare function LocaleLanguage(): LocaleLanguage;
type LocaleLanguage = {
    ar?: Language;
    en_us?: Language;
    hi?: Language;
};
/** @returns {Navigation} */
declare function Navigation(): Navigation;
type Navigation = {
    _id?: string;
    application?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference;
    orientation?: string;
    platform?: string;
    position?: string;
    slug?: string;
};
/** @returns {NavigationGetResponse} */
declare function NavigationGetResponse(): NavigationGetResponse;
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
/** @returns {NavigationReference} */
declare function NavigationReference(): NavigationReference;
type NavigationReference = {
    _locale_language?: LocaleLanguage;
    acl?: string[];
    action?: Action;
    active?: boolean;
    display?: string;
    image?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
    tags?: string[];
    type?: string;
};
/** @returns {NavigationRequest} */
declare function NavigationRequest(): NavigationRequest;
type NavigationRequest = {
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
};
/** @returns {NavigationSchema} */
declare function NavigationSchema(): NavigationSchema;
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
    version?: number;
};
/** @returns {NextSchedule} */
declare function NextSchedule(): NextSchedule;
type NextSchedule = {
    end?: string;
    start?: string;
};
/** @returns {Orientation} */
declare function Orientation(): Orientation;
type Orientation = {
    landscape?: string[];
    portrait?: string[];
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PageContent} */
declare function PageContent(): PageContent;
type PageContent = {
    type?: string;
    value?: any;
};
/** @returns {PageGetResponse} */
declare function PageGetResponse(): PageGetResponse;
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
/** @returns {PageMeta} */
declare function PageMeta(): PageMeta;
type PageMeta = {
    key?: string;
    value?: any;
};
/** @returns {PageMetaSchema} */
declare function PageMetaSchema(): PageMetaSchema;
type PageMetaSchema = {
    application_id?: string;
    custom_pages?: PageSchema[];
    system_pages?: NavigationSchema[];
};
/** @returns {PagePublishRequest} */
declare function PagePublishRequest(): PagePublishRequest;
type PagePublishRequest = {
    publish?: boolean;
};
/** @returns {PageRequest} */
declare function PageRequest(): PageRequest;
type PageRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: any[];
    feature_image?: Asset;
    orientation?: string;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    archived?: boolean;
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
    orientation?: string;
    page_meta?: any[];
    platform?: string;
    published?: boolean;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    visibility?: any;
};
/** @returns {PageSpec} */
declare function PageSpec(): PageSpec;
type PageSpec = {
    specifications?: any[];
};
/** @returns {PageSpecItem} */
declare function PageSpecItem(): PageSpecItem;
type PageSpecItem = {
    display_name?: string;
    page_type?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
/** @returns {PageSpecParam} */
declare function PageSpecParam(): PageSpecParam;
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
/** @returns {PathMappingSchema} */
declare function PathMappingSchema(): PathMappingSchema;
type PathMappingSchema = {
    __source?: PathSourceSchema;
    _id?: string;
    application?: string;
    created_at?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
};
/** @returns {PathSourceSchema} */
declare function PathSourceSchema(): PathSourceSchema;
type PathSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {PhoneProperties} */
declare function PhoneProperties(): PhoneProperties;
type PhoneProperties = {
    code?: string;
    key?: string;
    number?: string;
};
/** @returns {PhoneSchema} */
declare function PhoneSchema(): PhoneSchema;
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
/** @returns {RemoveHandpickedSchema} */
declare function RemoveHandpickedSchema(): RemoveHandpickedSchema;
type RemoveHandpickedSchema = {
    tags?: string[];
};
/** @returns {ResourceContent} */
declare function ResourceContent(): ResourceContent;
type ResourceContent = {
    type?: string;
    value?: string;
};
/** @returns {ScheduleSchema} */
declare function ScheduleSchema(): ScheduleSchema;
type ScheduleSchema = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
/** @returns {ScheduleStartSchema} */
declare function ScheduleStartSchema(): ScheduleStartSchema;
type ScheduleStartSchema = {
    end?: string;
    start?: string;
};
/** @returns {SEO} */
declare function SEO(): SEO;
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
/** @returns {SeoComponent} */
declare function SeoComponent(): SeoComponent;
type SeoComponent = {
    seo?: SeoSchema;
};
/** @returns {SEOImage} */
declare function SEOImage(): SEOImage;
type SEOImage = {
    url?: string;
};
/** @returns {SeoSchema} */
declare function SeoSchema(): SeoSchema;
type SeoSchema = {
    _id?: string;
    app?: string;
    cannonical_enabled?: boolean;
    created_at?: string;
    custom_meta_tags?: any[];
    details?: Detail;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    updated_at?: string;
};
/** @returns {Slideshow} */
declare function Slideshow(): Slideshow;
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
/** @returns {SlideshowGetResponse} */
declare function SlideshowGetResponse(): SlideshowGetResponse;
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
/** @returns {SlideshowMedia} */
declare function SlideshowMedia(): SlideshowMedia;
type SlideshowMedia = {
    action?: Action;
    auto_decide_duration?: boolean;
    bg_color?: string;
    duration?: number;
    type?: string;
    url?: string;
};
/** @returns {SlideshowRequest} */
declare function SlideshowRequest(): SlideshowRequest;
type SlideshowRequest = {
    active?: boolean;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    platform?: string;
    slug?: string;
};
/** @returns {SlideshowSchema} */
declare function SlideshowSchema(): SlideshowSchema;
type SlideshowSchema = {
    _custom_json?: any;
    _id?: string;
    active?: boolean;
    application?: string;
    archived?: boolean;
    configuration?: ConfigurationSchema;
    date_meta?: DateMeta;
    media?: SlideshowMedia[];
    platform?: string;
    slug?: string;
};
/** @returns {Support} */
declare function Support(): Support;
type Support = {
    _id?: string;
    application?: string;
    config_type?: string;
    contact?: ContactSchema;
    created?: boolean;
    created_at?: string;
    updated_at?: string;
};
/** @returns {TagDeleteSuccessResponse} */
declare function TagDeleteSuccessResponse(): TagDeleteSuccessResponse;
type TagDeleteSuccessResponse = {
    success?: boolean;
};
/** @returns {TagSchema} */
declare function TagSchema(): TagSchema;
type TagSchema = {
    __source?: TagSourceSchema;
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
/** @returns {TagSourceSchema} */
declare function TagSourceSchema(): TagSourceSchema;
type TagSourceSchema = {
    id?: string;
    type?: string;
};
/** @returns {TagsSchema} */
declare function TagsSchema(): TagsSchema;
type TagsSchema = {
    _id?: string;
    application?: string;
    tags?: TagSchema[];
};
/** @returns {UpdateFaqCategoryRequestSchema} */
declare function UpdateFaqCategoryRequestSchema(): UpdateFaqCategoryRequestSchema;
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
/** @returns {UpdateHandpickedSchema} */
declare function UpdateHandpickedSchema(): UpdateHandpickedSchema;
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
/**
 * Enum: GenerationEntityType Used By: Content
 *
 * @returns {GenerationEntityType}
 */
declare function GenerationEntityType(): GenerationEntityType;
type GenerationEntityType = "title" | "description";
/**
 * Enum: PageType Used By: Content
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status";
