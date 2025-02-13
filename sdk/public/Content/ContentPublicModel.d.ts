export = ContentPublicModel;
/**
 * @typedef BasicDetailsPayloadSchema
 * @property {string} [name]
 * @property {string} [logo_url]
 * @property {string} [favicon_url]
 * @property {string} [title]
 * @property {string} [meta_title]
 * @property {string} [meta_description]
 * @property {string} [meta_image]
 * @property {WhatsNew[]} [whats_new]
 * @property {Features[]} [features]
 * @property {Object} [authentication]
 * @property {BusinessAccount} [business_account]
 * @property {SellerSupport} [seller_support]
 * @property {string} [copyright]
 * @property {string} [address]
 * @property {string} [documentation_url]
 * @property {string} [faq_url]
 * @property {string} [facebook_url]
 * @property {string} [instagram_url]
 * @property {string} [privacy_url]
 * @property {string} [twitter_url]
 * @property {string} [termsofservice_url]
 */
/**
 * @typedef WhatsNew
 * @property {string} [description]
 */
/**
 * @typedef Features
 * @property {string} [title]
 * @property {string} [text]
 * @property {string[]} [list]
 * @property {string} [image]
 */
/**
 * @typedef BusinessAccount
 * @property {boolean} [is_limit]
 * @property {number} [threshold]
 */
/**
 * @typedef SellerSupport
 * @property {string} [email]
 * @property {number} [phone_number]
 */
/**
 * @typedef MenuSchema
 * @property {SalesChannelSchema} [sales_channel]
 * @property {OtherSellerSchema} [other_seller]
 * @property {FooterContentSchema} [footer_content]
 * @property {boolean} [can_create_business_account]
 * @property {CompanyLevelMenuItemSchema[]} [company_level]
 * @property {ApplicationLevelMenuItemSchema[]} [application_level]
 */
/**
 * @typedef MenusSchema
 * @property {string} [_id]
 * @property {MenuTypeSchema} [desktop]
 * @property {MenuTypeSchema} [mobile]
 * @property {number} [__v]
 */
/**
 * @typedef MenuTypeSchema
 * @property {MenuSchema} [menu]
 */
/**
 * @typedef CompanyLevelMenuItemSchema
 * @property {VisibleOnSchema} [visible_on]
 * @property {string} [display]
 * @property {string[]} [permissions]
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [icon]
 * @property {boolean} [is_disabled]
 * @property {CompanyLevelMenuItemSchema[]} [child]
 */
/**
 * @typedef ApplicationLevelMenuItemSchema
 * @property {VisibleOnSchema} [visible_on]
 * @property {string} [display]
 * @property {string[]} [permissions]
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [icon]
 * @property {boolean} [is_disabled]
 * @property {ApplicationLevelMenuItemSchema[]} [child]
 */
/**
 * @typedef VisibleOnSchema
 * @property {boolean} [web]
 * @property {boolean} [ios]
 * @property {boolean} [android]
 */
/**
 * @typedef SalesChannelSchema
 * @property {boolean} [can_add]
 * @property {string} [title]
 */
/**
 * @typedef OtherSellerSchema
 * @property {boolean} [is_visible]
 * @property {string} [title]
 */
/**
 * @typedef FooterContentSchema
 * @property {boolean} [is_visible]
 * @property {string} [line_one]
 * @property {string} [line_two]
 */
/**
 * @typedef AnalyticsTagsSchema
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {string} [body_code]
 * @property {boolean} [enabled]
 * @property {string} [header_code]
 * @property {string} [name]
 */
/**
 * @typedef CustomPageBySlugSchema
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {ItemSchema[]} [content]
 * @property {CreateCustomPageSeoSchema} [seo]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {boolean} [archived]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */
/**
 * @typedef ItemSchema
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef CreateCustomPageSeoSchema
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef RawHtmlContentSchema
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef FooterSchema
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {RawHtmlContentSchema[]} [content]
 * @property {Object[]} [footer_meta]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {boolean} [archived]
 * @property {number} [__v]
 */
/**
 * @typedef HomePageContentSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {CreatedBySchema} [created_by]
 * @property {boolean} [archived]
 * @property {string} [page_type]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */
/**
 * @typedef NavItemSchema
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [href]
 */
/**
 * @typedef NavbarSchema
 * @property {string} [_id]
 * @property {NavItemSchema[]} [items]
 * @property {number} [__v]
 * @property {CreatedBySchema} [modified_by]
 */
/**
 * @typedef MediaSchema
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [alt]
 * @property {string} [anchor_link]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [user_id]
 */
/**
 * @typedef PricingBannerSchema
 * @property {string} [_id]
 * @property {MediaSchema} [web_banner]
 * @property {MediaSchema} [mobile_banner]
 * @property {boolean} [published]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */
/**
 * @typedef SdkReadmeSchema
 * @property {string} [data]
 */
/**
 * @typedef TagsSchema
 * @property {CustomItemSchema[]} [items]
 * @property {PageSchema} [page]
 */
/**
 * @typedef CustomItemSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [position]
 * @property {boolean} [archived]
 * @property {UserSchema} [created_by]
 * @property {string} [url]
 * @property {string} [content]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */
/**
 * @typedef PageSchema
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef UserSchema
 * @property {string} [user_id]
 */
/**
 * @typedef CredentialSchema
 * @property {string} [_id]
 * @property {ConfigurationSchema} [configuration]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {boolean} [is_enable]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {number} [__v]
 */
/**
 * @typedef ConfigurationSchema
 * @property {string} [token]
 * @property {string} [host]
 */
/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
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
declare class ContentPublicModel {
}
declare namespace ContentPublicModel {
    export { BasicDetailsPayloadSchema, WhatsNew, Features, BusinessAccount, SellerSupport, MenuSchema, MenusSchema, MenuTypeSchema, CompanyLevelMenuItemSchema, ApplicationLevelMenuItemSchema, VisibleOnSchema, SalesChannelSchema, OtherSellerSchema, FooterContentSchema, AnalyticsTagsSchema, CustomPageBySlugSchema, ItemSchema, CreateCustomPageSeoSchema, RawHtmlContentSchema, FooterSchema, HomePageContentSchema, NavItemSchema, NavbarSchema, MediaSchema, CreatedBySchema, PricingBannerSchema, SdkReadmeSchema, TagsSchema, CustomItemSchema, PageSchema, UserSchema, CredentialSchema, ConfigurationSchema, CredentialsSchema, ContentAPIError };
}
/** @returns {BasicDetailsPayloadSchema} */
declare function BasicDetailsPayloadSchema(): BasicDetailsPayloadSchema;
type BasicDetailsPayloadSchema = {
    name?: string;
    logo_url?: string;
    favicon_url?: string;
    title?: string;
    meta_title?: string;
    meta_description?: string;
    meta_image?: string;
    whats_new?: WhatsNew[];
    features?: Features[];
    authentication?: any;
    business_account?: BusinessAccount;
    seller_support?: SellerSupport;
    copyright?: string;
    address?: string;
    documentation_url?: string;
    faq_url?: string;
    facebook_url?: string;
    instagram_url?: string;
    privacy_url?: string;
    twitter_url?: string;
    termsofservice_url?: string;
};
/** @returns {WhatsNew} */
declare function WhatsNew(): WhatsNew;
type WhatsNew = {
    description?: string;
};
/** @returns {Features} */
declare function Features(): Features;
type Features = {
    title?: string;
    text?: string;
    list?: string[];
    image?: string;
};
/** @returns {BusinessAccount} */
declare function BusinessAccount(): BusinessAccount;
type BusinessAccount = {
    is_limit?: boolean;
    threshold?: number;
};
/** @returns {SellerSupport} */
declare function SellerSupport(): SellerSupport;
type SellerSupport = {
    email?: string;
    phone_number?: number;
};
/** @returns {MenuSchema} */
declare function MenuSchema(): MenuSchema;
type MenuSchema = {
    sales_channel?: SalesChannelSchema;
    other_seller?: OtherSellerSchema;
    footer_content?: FooterContentSchema;
    can_create_business_account?: boolean;
    company_level?: CompanyLevelMenuItemSchema[];
    application_level?: ApplicationLevelMenuItemSchema[];
};
/** @returns {MenusSchema} */
declare function MenusSchema(): MenusSchema;
type MenusSchema = {
    _id?: string;
    desktop?: MenuTypeSchema;
    mobile?: MenuTypeSchema;
    __v?: number;
};
/** @returns {MenuTypeSchema} */
declare function MenuTypeSchema(): MenuTypeSchema;
type MenuTypeSchema = {
    menu?: MenuSchema;
};
/** @returns {CompanyLevelMenuItemSchema} */
declare function CompanyLevelMenuItemSchema(): CompanyLevelMenuItemSchema;
type CompanyLevelMenuItemSchema = {
    visible_on?: VisibleOnSchema;
    display?: string;
    permissions?: string[];
    title?: string;
    link?: string;
    icon?: string;
    is_disabled?: boolean;
    child?: CompanyLevelMenuItemSchema[];
};
/** @returns {ApplicationLevelMenuItemSchema} */
declare function ApplicationLevelMenuItemSchema(): ApplicationLevelMenuItemSchema;
type ApplicationLevelMenuItemSchema = {
    visible_on?: VisibleOnSchema;
    display?: string;
    permissions?: string[];
    title?: string;
    link?: string;
    icon?: string;
    is_disabled?: boolean;
    child?: ApplicationLevelMenuItemSchema[];
};
/** @returns {VisibleOnSchema} */
declare function VisibleOnSchema(): VisibleOnSchema;
type VisibleOnSchema = {
    web?: boolean;
    ios?: boolean;
    android?: boolean;
};
/** @returns {SalesChannelSchema} */
declare function SalesChannelSchema(): SalesChannelSchema;
type SalesChannelSchema = {
    can_add?: boolean;
    title?: string;
};
/** @returns {OtherSellerSchema} */
declare function OtherSellerSchema(): OtherSellerSchema;
type OtherSellerSchema = {
    is_visible?: boolean;
    title?: string;
};
/** @returns {FooterContentSchema} */
declare function FooterContentSchema(): FooterContentSchema;
type FooterContentSchema = {
    is_visible?: boolean;
    line_one?: string;
    line_two?: string;
};
/** @returns {AnalyticsTagsSchema} */
declare function AnalyticsTagsSchema(): AnalyticsTagsSchema;
type AnalyticsTagsSchema = {
    _id?: string;
    __v?: number;
    body_code?: string;
    enabled?: boolean;
    header_code?: string;
    name?: string;
};
/** @returns {CustomPageBySlugSchema} */
declare function CustomPageBySlugSchema(): CustomPageBySlugSchema;
type CustomPageBySlugSchema = {
    _id?: string;
    title?: string;
    slug?: string;
    type?: string;
    description?: string;
    published?: boolean;
    content?: ItemSchema[];
    seo?: CreateCustomPageSeoSchema;
    created_by?: CreatedBySchema;
    modified_by?: CreatedBySchema;
    archived?: boolean;
    created_on?: string;
    modified_on?: string;
    __v?: number;
};
/** @returns {ItemSchema} */
declare function ItemSchema(): ItemSchema;
type ItemSchema = {
    type?: string;
    value?: string;
};
/** @returns {CreateCustomPageSeoSchema} */
declare function CreateCustomPageSeoSchema(): CreateCustomPageSeoSchema;
type CreateCustomPageSeoSchema = {
    title?: string;
    description?: string;
};
/** @returns {RawHtmlContentSchema} */
declare function RawHtmlContentSchema(): RawHtmlContentSchema;
type RawHtmlContentSchema = {
    type?: string;
    value?: string;
};
/** @returns {FooterSchema} */
declare function FooterSchema(): FooterSchema;
type FooterSchema = {
    _id?: string;
    title?: string;
    description?: string;
    type?: string;
    tags?: any[];
    published?: boolean;
    content?: RawHtmlContentSchema[];
    footer_meta?: any[];
    created_by?: CreatedBySchema;
    modified_by?: CreatedBySchema;
    archived?: boolean;
    __v?: number;
};
/** @returns {HomePageContentSchema} */
declare function HomePageContentSchema(): HomePageContentSchema;
type HomePageContentSchema = {
    _id?: string;
    slug?: string;
    created_by?: CreatedBySchema;
    archived?: boolean;
    page_type?: string;
    created_on?: string;
    modified_on?: string;
    __v?: number;
};
/** @returns {NavItemSchema} */
declare function NavItemSchema(): NavItemSchema;
type NavItemSchema = {
    title?: string;
    link?: string;
    href?: string;
};
/** @returns {NavbarSchema} */
declare function NavbarSchema(): NavbarSchema;
type NavbarSchema = {
    _id?: string;
    items?: NavItemSchema[];
    __v?: number;
    modified_by?: CreatedBySchema;
};
/** @returns {MediaSchema} */
declare function MediaSchema(): MediaSchema;
type MediaSchema = {
    url?: string;
    type?: string;
    alt?: string;
    anchor_link?: string;
};
/** @returns {CreatedBySchema} */
declare function CreatedBySchema(): CreatedBySchema;
type CreatedBySchema = {
    user_id?: string;
};
/** @returns {PricingBannerSchema} */
declare function PricingBannerSchema(): PricingBannerSchema;
type PricingBannerSchema = {
    _id?: string;
    web_banner?: MediaSchema;
    mobile_banner?: MediaSchema;
    published?: boolean;
    created_by?: CreatedBySchema;
    modified_by?: CreatedBySchema;
    created_on?: string;
    modified_on?: string;
    __v?: number;
};
/** @returns {SdkReadmeSchema} */
declare function SdkReadmeSchema(): SdkReadmeSchema;
type SdkReadmeSchema = {
    data?: string;
};
/** @returns {TagsSchema} */
declare function TagsSchema(): TagsSchema;
type TagsSchema = {
    items?: CustomItemSchema[];
    page?: PageSchema;
};
/** @returns {CustomItemSchema} */
declare function CustomItemSchema(): CustomItemSchema;
type CustomItemSchema = {
    _id?: string;
    name?: string;
    type?: string;
    sub_type?: string;
    position?: string;
    archived?: boolean;
    created_by?: UserSchema;
    url?: string;
    content?: string;
    created_on?: string;
    modified_on?: string;
    __v?: number;
};
/** @returns {PageSchema} */
declare function PageSchema(): PageSchema;
type PageSchema = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    user_id?: string;
};
/** @returns {CredentialSchema} */
declare function CredentialSchema(): CredentialSchema;
type CredentialSchema = {
    _id?: string;
    configuration?: ConfigurationSchema;
    entity_type?: string;
    type?: string;
    is_enable?: boolean;
    updated_at?: string;
    created_at?: string;
    __v?: number;
};
/** @returns {ConfigurationSchema} */
declare function ConfigurationSchema(): ConfigurationSchema;
type ConfigurationSchema = {
    token?: string;
    host?: string;
};
/** @returns {CredentialsSchema} */
declare function CredentialsSchema(): CredentialsSchema;
type CredentialsSchema = {
    items?: CredentialSchema[];
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
