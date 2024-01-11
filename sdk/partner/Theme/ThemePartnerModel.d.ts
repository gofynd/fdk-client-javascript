export = ThemePartnerModel;
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
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef Assets
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 * @property {UMDJs} [umd_js]
 */
/**
 * @typedef AvailablePagePlatformPredicate
 * @property {boolean} [android] - Section visibility on android platform
 * @property {boolean} [ios] - Section visibility on ios platform
 * @property {boolean} [web] - Section visibility on web platform
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePagePlatformPredicate} [platform]
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageSchedulePredicate} [schedule]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {string[]} [zones] - An array of zone ids associated with the section
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */
/**
 * @typedef AvailablePageSchedulePredicate
 * @property {string} [cron]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [created_at] - The creation timestamp of the page
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
 * @property {string} [updated_at] - The last update timestamp of the page
 * @property {string} [value]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {Object[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {AvailablePagePredicate} [predicate]
 * @property {Object} [preset]
 * @property {Object} [props]
 * @property {string} [source]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [desktop]
 * @property {boolean} [mobile]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [_id]
 * @property {SEObreadcrumb[]} [breadcrumb]
 * @property {string} [description]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {string} [title]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [anonymous]
 * @property {boolean} [authenticated]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef Block
 * @property {string} [name] - The name of the block.
 * @property {BlockProps} [props]
 * @property {string} [type] - The type of the block.
 */
/**
 * @typedef BlockProps
 * @property {ImagePickerProp} [image]
 * @property {UrlProp} [slide_link]
 */
/**
 * @typedef CarouselItem
 * @property {string} [desktop] - Desktop carousel image URL
 * @property {string} [mobile] - Mobile carousel image URL
 */
/**
 * @typedef CatalogSize
 * @property {number} [max] - Maximum catalog size
 * @property {number} [min] - Minimum catalog size
 */
/**
 * @typedef CheckboxProp
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */
/**
 * @typedef Comments
 * @property {string} [developer_remark] - Developer remark
 * @property {string} [reviewer_feedback] - Reviewer feedback
 */
/**
 * @typedef CommonJS
 * @property {string} [link]
 */
/**
 * @typedef Config
 * @property {string} current - The current configuration
 * @property {GlobalSchema} [global_schema]
 * @property {ThemeConfiguration[]} list - A list of configurations
 * @property {Preset} [preset]
 */
/**
 * @typedef ContactInfo
 * @property {string[]} [developer_contact] - Developer contact information
 * @property {string} [seller_contact] - Seller contact information
 */
/**
 * @typedef CreateNewTheme
 * @property {SectionItem[]} available_sections - Available sections information
 * @property {string} [current] - The current configuration
 * @property {GlobalSchema} [global_schema]
 * @property {ThemeConfiguration[]} [list] - A list of configurations
 * @property {string} name - The name of the theme
 * @property {Page[]} [pages]
 * @property {Preset} [preset]
 * @property {string} theme_type - Type of the Theme
 * @property {string} version - The version of the theme
 */
/**
 * @typedef CSS
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */
/**
 * @typedef CustomProps
 * @property {string} [button_add_to_cart_color] - The add to cart button color
 * @property {string} [button_add_to_cart_label_color] - The add to cart button
 *   label color
 * @property {string} [button_primary_color] - The primary button color
 * @property {string} [button_primary_label_color] - The primary button label color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [button_secondary_label_color] - The secondary button label color
 * @property {string} [button_tertiary_color] - The tertiary button color
 * @property {string} [button_tertiary_hover_color] - The tertiary button hover color
 * @property {string} [button_tertiary_hover_text_color] - The tertiary button
 *   hover text color
 * @property {string} [button_tertiary_label_color] - The tertiary button label color
 * @property {boolean} [disable_cart] - Whether to disable the cart or not
 * @property {string} [footer_bg_color] - The footer background color
 * @property {string} [footer_border_color] - The footer border color
 * @property {string} [footer_nav_hover_color] - The footer navigation hover color
 * @property {string} [footer_text_color] - The footer text color
 * @property {string} [header_bg_color] - The header background color
 * @property {string} [header_border_color] - The header border color
 * @property {string} [header_cart_notification_bg_color] - The header cart
 *   notification background color
 * @property {string} [header_cart_notification_text_color] - The header cart
 *   notification text color
 * @property {string} [header_icon_color] - The header icon color
 * @property {string} [header_nav_hover_color] - The header navigation hover color
 * @property {string} [header_text_color] - The header text color
 * @property {boolean} [is_menu_below_logo] - Whether the menu is below the logo or not
 * @property {string} [menu_position] - The position of the menu
 * @property {string} [text_body_color] - The text body color
 * @property {string} [text_discount_color] - The text discount color
 * @property {string} [text_heading_link_color] - The text heading link color
 * @property {string} [text_price_color] - The text price color
 * @property {string} [text_sale_price_color] - The text sale price color
 * @property {string} [text_strikethrough_price_color] - The text strikethrough
 *   price color
 */
/**
 * @typedef DividerStrokeHighlight
 * @property {string} [divider_strokes]
 * @property {string} [highlight]
 */
/**
 * @typedef Documentation
 * @property {string} [notes] - Documentation notes
 * @property {string} [url] - Documentation URL
 */
/**
 * @typedef ExploreInfo
 * @property {string} [description] - Explore feature description
 * @property {string} [title] - Explore feature title
 */
/**
 * @typedef Feature
 * @property {string} [category] - Feature category
 * @property {FeatureItem[]} [list]
 */
/**
 * @typedef FeatureItem
 * @property {string} [description] - Feature description
 * @property {string} [label] - Feature label
 */
/**
 * @typedef Font
 * @property {string} family - The font family
 * @property {FontVariants} variants
 */
/**
 * @typedef FontVariant
 * @property {string} file - The URL of the font file
 * @property {string} name - The name of the font variant
 */
/**
 * @typedef FontVariants
 * @property {FontVariant} [bold]
 * @property {FontVariant} [light]
 * @property {FontVariant} [medium]
 * @property {FontVariant} [regular]
 * @property {FontVariant} [semi_bold]
 */
/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */
/**
 * @typedef Highlight
 * @property {string} [description] - Highlight description
 * @property {string} [image] - Highlight image URL
 * @property {string} [title] - Highlight title
 */
/**
 * @typedef ImagePickerProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the image picker property.
 */
/**
 * @typedef Images
 * @property {string} [desktop] - The URL of the desktop image
 * @property {string} [mobile] - The URL of the mobile image
 */
/**
 * @typedef MarketplaceTheme
 * @property {string} [_id] - Theme ID
 * @property {CarouselItem[]} [carousel]
 * @property {CatalogSize} [catalog_size]
 * @property {Comments} [comments]
 * @property {ContactInfo} [contact]
 * @property {string} [created_at] - Theme creation timestamp
 * @property {string} [description] - Theme description
 * @property {Documentation} [documentation]
 * @property {ExploreInfo} [explore]
 * @property {Feature[]} [features]
 * @property {Highlight[]} [highlights]
 * @property {MarketplaceThemeImages} [images]
 * @property {string[]} [industry] - Industries the theme is suitable for
 * @property {boolean} [is_default] - Indicates if the theme is a default theme
 * @property {boolean} [is_update] - Indicates if the theme is an update
 * @property {string} [name] - Theme name
 * @property {string} [organization_id] - Organization ID
 * @property {PaymentInfo} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - Theme slug
 * @property {string} [src] - Theme source URL
 * @property {string} [status] - Theme status
 * @property {number} [step] - Theme step
 * @property {string} [tagline] - Theme tagline
 * @property {string} [template_theme_id] - Template theme ID
 * @property {string} [updated_at] - Theme update timestamp
 * @property {string} [user_id] - User ID
 * @property {Variation[]} [variations]
 */
/**
 * @typedef MarketplaceThemeImages
 * @property {string} [desktop] - Desktop theme image URL
 * @property {string} [mobile] - Mobile theme image URL
 */
/**
 * @typedef MarketplaceThemeSchema
 * @property {PaginationSchema} [page]
 * @property {MarketplaceTheme[]} [themes]
 */
/**
 * @typedef OrderTracking
 * @property {boolean} [show_footer]
 * @property {boolean} [show_header]
 */
/**
 * @typedef OverlayPopup
 * @property {string} [dialog_backgroung]
 * @property {string} [overlay]
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
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef PaymentInfo
 * @property {number} [amount] - Amount of payment
 * @property {boolean} [is_paid] - Indicates if the theme is paid
 */
/**
 * @typedef Predicate
 * @property {Route} [route]
 * @property {Screen} [screen]
 * @property {ThemeUserSchema} [user]
 */
/**
 * @typedef Preset
 * @property {Page[]} [pages]
 */
/**
 * @typedef Prop
 * @property {string} [category] - The category of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [info] - Additional information about the property
 * @property {string} [label] - The label of the property
 * @property {string} [type] - The type of the property
 * @property {string} [value] - The value of the property
 */
/**
 * @typedef RangeProp
 * @property {string} [type] - The type of the property.
 * @property {number} [value] - The value of the range property.
 */
/**
 * @typedef Release
 * @property {string} [notes] - The release notes of the theme
 * @property {string} [version] - The version of the theme
 */
/**
 * @typedef Route
 * @property {string} [exact_url] - The exact URL of the route.
 * @property {string} [selected] - The selected route.
 */
/**
 * @typedef Screen
 * @property {boolean} [desktop] - True if the screen is a desktop device.
 * @property {boolean} [mobile] - True if the screen is a mobile device.
 * @property {boolean} [tablet] - True if the screen is a tablet device.
 */
/**
 * @typedef Section
 * @property {Block[]} [blocks]
 * @property {string} [name] - The name of the section.
 * @property {Predicate} [predicate]
 * @property {SectionPreset} [preset]
 * @property {SectionProps} [props]
 */
/**
 * @typedef SectionItem
 * @property {Object[]} [blocks] - Blocks
 * @property {string} [label] - Label for the section
 * @property {string} [name] - Name of the section
 * @property {Object[]} [props]
 */
/**
 * @typedef SectionPreset
 * @property {Block[]} [blocks]
 */
/**
 * @typedef SectionProps
 * @property {CheckboxProp} [autoplay]
 * @property {TextProp} [item_margin]
 * @property {RangeProp} [slide_interval]
 * @property {TextProp} [title]
 */
/**
 * @typedef SEObreadcrumb
 * @property {Action} [action]
 * @property {string} [url]
 */
/**
 * @typedef SEOMetaItem
 * @property {SEOMetaItems[]} [items]
 * @property {string} [title]
 */
/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef SEOSitemap
 * @property {string} [frequency]
 * @property {number} [priority]
 */
/**
 * @typedef TextProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the text property.
 */
/**
 * @typedef ThemeConfigListPage
 * @property {string} [page] - Name of the page
 * @property {ThemeConfigListPageSettingsProps} [settings]
 */
/**
 * @typedef ThemeConfigListPageSettingsProps
 * @property {Object} [props]
 */
/**
 * @typedef ThemeConfiguration
 * @property {Object} [global_config]
 * @property {string} [name] - The name of the configuration
 * @property {ThemeConfigListPage[]} [page] - An array of pages
 */
/**
 * @typedef ThemeMeta
 * @property {string} [description] - The description of the theme
 * @property {Images} [images]
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {string} [name] - The name of the theme
 * @property {ThemePayment} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - The slug of the theme
 */
/**
 * @typedef ThemePayment
 * @property {number} [amount] - The amount of the theme
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 */
/**
 * @typedef ThemeRejectionReasons
 * @property {string} _id - The ID of the theme rejection reasons object
 * @property {string} admin_id - The ID of the admin who rejected the theme
 * @property {string} [created_at] - The date and time when the theme rejection
 *   reasons object was created
 * @property {string} [message] - A general message about the rejection reasons
 * @property {string} organization_id - The ID of the organization
 * @property {Object} rejection_reasons
 * @property {string} status - The status of the theme (e.g., rejected)
 * @property {string} theme_id - The ID of the rejected theme
 * @property {string} [updated_at] - The date and time when the theme rejection
 *   reasons object was last updated
 * @property {string} user_id - The ID of the user who submitted the theme
 */
/**
 * @typedef ThemesSchema
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {number} [company_id] - The company id in which sales channel exists
 * @property {Config} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {Font} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {string} [src]
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [theme_type]
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */
/**
 * @typedef ThemeUserSchema
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */
/**
 * @typedef UMDJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef UpdateThemeRequestBody
 * @property {Config} [config]
 * @property {Font} [font]
 */
/**
 * @typedef UrlProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */
/**
 * @typedef UserAlerts
 * @property {string} [error_background]
 * @property {string} [error_text]
 * @property {string} [info_background]
 * @property {string} [info_text]
 * @property {string} [success_background]
 * @property {string} [success_text]
 */
/**
 * @typedef Variation
 * @property {string} [color] - Variation color
 * @property {string} [demo_url] - Variation demo URL
 * @property {MarketplaceThemeImages} [images]
 * @property {string} [name] - Variation name
 */
declare class ThemePartnerModel {
}
declare namespace ThemePartnerModel {
    export { Action, ActionPage, AllAvailablePageSchema, Assets, AvailablePagePlatformPredicate, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchedulePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, Block, BlockProps, CarouselItem, CatalogSize, CheckboxProp, Comments, CommonJS, Config, ContactInfo, CreateNewTheme, CSS, CustomConfig, CustomProps, DividerStrokeHighlight, Documentation, ExploreInfo, Feature, FeatureItem, Font, FontVariant, FontVariants, GlobalSchema, Highlight, ImagePickerProp, Images, MarketplaceTheme, MarketplaceThemeImages, MarketplaceThemeSchema, OrderTracking, OverlayPopup, Page, PaginationSchema, PaymentInfo, Predicate, Preset, Prop, RangeProp, Release, Route, Screen, Section, SectionItem, SectionPreset, SectionProps, SEObreadcrumb, SEOMetaItem, SEOMetaItems, SEOSitemap, TextProp, ThemeConfigListPage, ThemeConfigListPageSettingsProps, ThemeConfiguration, ThemeMeta, ThemePayment, ThemeRejectionReasons, ThemesSchema, ThemeUserSchema, UMDJs, UpdateThemeRequestBody, UrlProp, UserAlerts, Variation };
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
    type?: string;
    url?: string;
};
/** @returns {AllAvailablePageSchema} */
declare function AllAvailablePageSchema(): AllAvailablePageSchema;
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
/** @returns {Assets} */
declare function Assets(): Assets;
type Assets = {
    common_js?: CommonJS;
    css?: CSS;
    umd_js?: UMDJs;
};
/** @returns {AvailablePagePlatformPredicate} */
declare function AvailablePagePlatformPredicate(): AvailablePagePlatformPredicate;
type AvailablePagePlatformPredicate = {
    /**
     * - Section visibility on android platform
     */
    android?: boolean;
    /**
     * - Section visibility on ios platform
     */
    ios?: boolean;
    /**
     * - Section visibility on web platform
     */
    web?: boolean;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    platform?: AvailablePagePlatformPredicate;
    route?: AvailablePageRoutePredicate;
    schedule?: AvailablePageSchedulePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    /**
     * - An array of zone ids associated with the section
     */
    zones?: string[];
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
/** @returns {AvailablePageSchedulePredicate} */
declare function AvailablePageSchedulePredicate(): AvailablePageSchedulePredicate;
type AvailablePageSchedulePredicate = {
    cron?: string;
    end?: string;
    start?: string;
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    _id?: string;
    /**
     * - The creation timestamp of the page
     */
    created_at?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
    /**
     * - The last update timestamp of the page
     */
    updated_at?: string;
    value?: string;
};
/** @returns {AvailablePageSchemaSections} */
declare function AvailablePageSchemaSections(): AvailablePageSchemaSections;
type AvailablePageSchemaSections = {
    blocks?: any[];
    label?: string;
    name?: string;
    predicate?: AvailablePagePredicate;
    preset?: any;
    props?: any;
    source?: string;
};
/** @returns {AvailablePageScreenPredicate} */
declare function AvailablePageScreenPredicate(): AvailablePageScreenPredicate;
type AvailablePageScreenPredicate = {
    desktop?: boolean;
    mobile?: boolean;
    tablet?: boolean;
};
/** @returns {AvailablePageSectionMetaAttributes} */
declare function AvailablePageSectionMetaAttributes(): AvailablePageSectionMetaAttributes;
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
/** @returns {AvailablePageSeo} */
declare function AvailablePageSeo(): AvailablePageSeo;
type AvailablePageSeo = {
    _id?: string;
    breadcrumb?: SEObreadcrumb[];
    description?: string;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    title?: string;
};
/** @returns {AvailablePageUserPredicate} */
declare function AvailablePageUserPredicate(): AvailablePageUserPredicate;
type AvailablePageUserPredicate = {
    anonymous?: boolean;
    authenticated?: boolean;
};
/** @returns {BlitzkriegApiErrorSchema} */
declare function BlitzkriegApiErrorSchema(): BlitzkriegApiErrorSchema;
type BlitzkriegApiErrorSchema = {
    message?: string;
};
/** @returns {BlitzkriegInternalServerErrorSchema} */
declare function BlitzkriegInternalServerErrorSchema(): BlitzkriegInternalServerErrorSchema;
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
/** @returns {Block} */
declare function Block(): Block;
type Block = {
    /**
     * - The name of the block.
     */
    name?: string;
    props?: BlockProps;
    /**
     * - The type of the block.
     */
    type?: string;
};
/** @returns {BlockProps} */
declare function BlockProps(): BlockProps;
type BlockProps = {
    image?: ImagePickerProp;
    slide_link?: UrlProp;
};
/** @returns {CarouselItem} */
declare function CarouselItem(): CarouselItem;
type CarouselItem = {
    /**
     * - Desktop carousel image URL
     */
    desktop?: string;
    /**
     * - Mobile carousel image URL
     */
    mobile?: string;
};
/** @returns {CatalogSize} */
declare function CatalogSize(): CatalogSize;
type CatalogSize = {
    /**
     * - Maximum catalog size
     */
    max?: number;
    /**
     * - Minimum catalog size
     */
    min?: number;
};
/** @returns {CheckboxProp} */
declare function CheckboxProp(): CheckboxProp;
type CheckboxProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the checkbox property.
     */
    value?: boolean;
};
/** @returns {Comments} */
declare function Comments(): Comments;
type Comments = {
    /**
     * - Developer remark
     */
    developer_remark?: string;
    /**
     * - Reviewer feedback
     */
    reviewer_feedback?: string;
};
/** @returns {CommonJS} */
declare function CommonJS(): CommonJS;
type CommonJS = {
    link?: string;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    /**
     * - The current configuration
     */
    current: string;
    global_schema?: GlobalSchema;
    /**
     * - A list of configurations
     */
    list: ThemeConfiguration[];
    preset?: Preset;
};
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    /**
     * - Developer contact information
     */
    developer_contact?: string[];
    /**
     * - Seller contact information
     */
    seller_contact?: string;
};
/** @returns {CreateNewTheme} */
declare function CreateNewTheme(): CreateNewTheme;
type CreateNewTheme = {
    /**
     * - Available sections information
     */
    available_sections: SectionItem[];
    /**
     * - The current configuration
     */
    current?: string;
    global_schema?: GlobalSchema;
    /**
     * - A list of configurations
     */
    list?: ThemeConfiguration[];
    /**
     * - The name of the theme
     */
    name: string;
    pages?: Page[];
    preset?: Preset;
    /**
     * - Type of the Theme
     */
    theme_type: string;
    /**
     * - The version of the theme
     */
    version: string;
};
/** @returns {CSS} */
declare function CSS(): CSS;
type CSS = {
    link?: string;
    links?: string[];
};
/** @returns {CustomConfig} */
declare function CustomConfig(): CustomConfig;
type CustomConfig = {
    props?: CustomProps;
};
/** @returns {CustomProps} */
declare function CustomProps(): CustomProps;
type CustomProps = {
    /**
     * - The add to cart button color
     */
    button_add_to_cart_color?: string;
    /**
     * - The add to cart button
     * label color
     */
    button_add_to_cart_label_color?: string;
    /**
     * - The primary button color
     */
    button_primary_color?: string;
    /**
     * - The primary button label color
     */
    button_primary_label_color?: string;
    /**
     * - The secondary button color
     */
    button_secondary_color?: string;
    /**
     * - The secondary button label color
     */
    button_secondary_label_color?: string;
    /**
     * - The tertiary button color
     */
    button_tertiary_color?: string;
    /**
     * - The tertiary button hover color
     */
    button_tertiary_hover_color?: string;
    /**
     * - The tertiary button
     * hover text color
     */
    button_tertiary_hover_text_color?: string;
    /**
     * - The tertiary button label color
     */
    button_tertiary_label_color?: string;
    /**
     * - Whether to disable the cart or not
     */
    disable_cart?: boolean;
    /**
     * - The footer background color
     */
    footer_bg_color?: string;
    /**
     * - The footer border color
     */
    footer_border_color?: string;
    /**
     * - The footer navigation hover color
     */
    footer_nav_hover_color?: string;
    /**
     * - The footer text color
     */
    footer_text_color?: string;
    /**
     * - The header background color
     */
    header_bg_color?: string;
    /**
     * - The header border color
     */
    header_border_color?: string;
    /**
     * - The header cart
     * notification background color
     */
    header_cart_notification_bg_color?: string;
    /**
     * - The header cart
     * notification text color
     */
    header_cart_notification_text_color?: string;
    /**
     * - The header icon color
     */
    header_icon_color?: string;
    /**
     * - The header navigation hover color
     */
    header_nav_hover_color?: string;
    /**
     * - The header text color
     */
    header_text_color?: string;
    /**
     * - Whether the menu is below the logo or not
     */
    is_menu_below_logo?: boolean;
    /**
     * - The position of the menu
     */
    menu_position?: string;
    /**
     * - The text body color
     */
    text_body_color?: string;
    /**
     * - The text discount color
     */
    text_discount_color?: string;
    /**
     * - The text heading link color
     */
    text_heading_link_color?: string;
    /**
     * - The text price color
     */
    text_price_color?: string;
    /**
     * - The text sale price color
     */
    text_sale_price_color?: string;
    /**
     * - The text strikethrough
     * price color
     */
    text_strikethrough_price_color?: string;
};
/** @returns {DividerStrokeHighlight} */
declare function DividerStrokeHighlight(): DividerStrokeHighlight;
type DividerStrokeHighlight = {
    divider_strokes?: string;
    highlight?: string;
};
/** @returns {Documentation} */
declare function Documentation(): Documentation;
type Documentation = {
    /**
     * - Documentation notes
     */
    notes?: string;
    /**
     * - Documentation URL
     */
    url?: string;
};
/** @returns {ExploreInfo} */
declare function ExploreInfo(): ExploreInfo;
type ExploreInfo = {
    /**
     * - Explore feature description
     */
    description?: string;
    /**
     * - Explore feature title
     */
    title?: string;
};
/** @returns {Feature} */
declare function Feature(): Feature;
type Feature = {
    /**
     * - Feature category
     */
    category?: string;
    list?: FeatureItem[];
};
/** @returns {FeatureItem} */
declare function FeatureItem(): FeatureItem;
type FeatureItem = {
    /**
     * - Feature description
     */
    description?: string;
    /**
     * - Feature label
     */
    label?: string;
};
/** @returns {Font} */
declare function Font(): Font;
type Font = {
    /**
     * - The font family
     */
    family: string;
    variants: FontVariants;
};
/** @returns {FontVariant} */
declare function FontVariant(): FontVariant;
type FontVariant = {
    /**
     * - The URL of the font file
     */
    file: string;
    /**
     * - The name of the font variant
     */
    name: string;
};
/** @returns {FontVariants} */
declare function FontVariants(): FontVariants;
type FontVariants = {
    bold?: FontVariant;
    light?: FontVariant;
    medium?: FontVariant;
    regular?: FontVariant;
    semi_bold?: FontVariant;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: Prop[];
};
/** @returns {Highlight} */
declare function Highlight(): Highlight;
type Highlight = {
    /**
     * - Highlight description
     */
    description?: string;
    /**
     * - Highlight image URL
     */
    image?: string;
    /**
     * - Highlight title
     */
    title?: string;
};
/** @returns {ImagePickerProp} */
declare function ImagePickerProp(): ImagePickerProp;
type ImagePickerProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the image picker property.
     */
    value?: string;
};
/** @returns {Images} */
declare function Images(): Images;
type Images = {
    /**
     * - The URL of the desktop image
     */
    desktop?: string;
    /**
     * - The URL of the mobile image
     */
    mobile?: string;
};
/** @returns {MarketplaceTheme} */
declare function MarketplaceTheme(): MarketplaceTheme;
type MarketplaceTheme = {
    /**
     * - Theme ID
     */
    _id?: string;
    carousel?: CarouselItem[];
    catalog_size?: CatalogSize;
    comments?: Comments;
    contact?: ContactInfo;
    /**
     * - Theme creation timestamp
     */
    created_at?: string;
    /**
     * - Theme description
     */
    description?: string;
    documentation?: Documentation;
    explore?: ExploreInfo;
    features?: Feature[];
    highlights?: Highlight[];
    images?: MarketplaceThemeImages;
    /**
     * - Industries the theme is suitable for
     */
    industry?: string[];
    /**
     * - Indicates if the theme is a default theme
     */
    is_default?: boolean;
    /**
     * - Indicates if the theme is an update
     */
    is_update?: boolean;
    /**
     * - Theme name
     */
    name?: string;
    /**
     * - Organization ID
     */
    organization_id?: string;
    payment?: PaymentInfo;
    release?: Release;
    /**
     * - Theme slug
     */
    slug?: string;
    /**
     * - Theme source URL
     */
    src?: string;
    /**
     * - Theme status
     */
    status?: string;
    /**
     * - Theme step
     */
    step?: number;
    /**
     * - Theme tagline
     */
    tagline?: string;
    /**
     * - Template theme ID
     */
    template_theme_id?: string;
    /**
     * - Theme update timestamp
     */
    updated_at?: string;
    /**
     * - User ID
     */
    user_id?: string;
    variations?: Variation[];
};
/** @returns {MarketplaceThemeImages} */
declare function MarketplaceThemeImages(): MarketplaceThemeImages;
type MarketplaceThemeImages = {
    /**
     * - Desktop theme image URL
     */
    desktop?: string;
    /**
     * - Mobile theme image URL
     */
    mobile?: string;
};
/** @returns {MarketplaceThemeSchema} */
declare function MarketplaceThemeSchema(): MarketplaceThemeSchema;
type MarketplaceThemeSchema = {
    page?: PaginationSchema;
    themes?: MarketplaceTheme[];
};
/** @returns {OrderTracking} */
declare function OrderTracking(): OrderTracking;
type OrderTracking = {
    show_footer?: boolean;
    show_header?: boolean;
};
/** @returns {OverlayPopup} */
declare function OverlayPopup(): OverlayPopup;
type OverlayPopup = {
    dialog_backgroung?: string;
    overlay?: string;
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
/** @returns {PaginationSchema} */
declare function PaginationSchema(): PaginationSchema;
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    /**
     * - Amount of payment
     */
    amount?: number;
    /**
     * - Indicates if the theme is paid
     */
    is_paid?: boolean;
};
/** @returns {Predicate} */
declare function Predicate(): Predicate;
type Predicate = {
    route?: Route;
    screen?: Screen;
    user?: ThemeUserSchema;
};
/** @returns {Preset} */
declare function Preset(): Preset;
type Preset = {
    pages?: Page[];
};
/** @returns {Prop} */
declare function Prop(): Prop;
type Prop = {
    /**
     * - The category of the property
     */
    category?: string;
    /**
     * - The ID of the property
     */
    id?: string;
    /**
     * - Additional information about the property
     */
    info?: string;
    /**
     * - The label of the property
     */
    label?: string;
    /**
     * - The type of the property
     */
    type?: string;
    /**
     * - The value of the property
     */
    value?: string;
};
/** @returns {RangeProp} */
declare function RangeProp(): RangeProp;
type RangeProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the range property.
     */
    value?: number;
};
/** @returns {Release} */
declare function Release(): Release;
type Release = {
    /**
     * - The release notes of the theme
     */
    notes?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {Route} */
declare function Route(): Route;
type Route = {
    /**
     * - The exact URL of the route.
     */
    exact_url?: string;
    /**
     * - The selected route.
     */
    selected?: string;
};
/** @returns {Screen} */
declare function Screen(): Screen;
type Screen = {
    /**
     * - True if the screen is a desktop device.
     */
    desktop?: boolean;
    /**
     * - True if the screen is a mobile device.
     */
    mobile?: boolean;
    /**
     * - True if the screen is a tablet device.
     */
    tablet?: boolean;
};
/** @returns {Section} */
declare function Section(): Section;
type Section = {
    blocks?: Block[];
    /**
     * - The name of the section.
     */
    name?: string;
    predicate?: Predicate;
    preset?: SectionPreset;
    props?: SectionProps;
};
/** @returns {SectionItem} */
declare function SectionItem(): SectionItem;
type SectionItem = {
    /**
     * - Blocks
     */
    blocks?: any[];
    /**
     * - Label for the section
     */
    label?: string;
    /**
     * - Name of the section
     */
    name?: string;
    props?: any[];
};
/** @returns {SectionPreset} */
declare function SectionPreset(): SectionPreset;
type SectionPreset = {
    blocks?: Block[];
};
/** @returns {SectionProps} */
declare function SectionProps(): SectionProps;
type SectionProps = {
    autoplay?: CheckboxProp;
    item_margin?: TextProp;
    slide_interval?: RangeProp;
    title?: TextProp;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    action?: Action;
    url?: string;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    items?: SEOMetaItems[];
    title?: string;
};
/** @returns {SEOMetaItems} */
declare function SEOMetaItems(): SEOMetaItems;
type SEOMetaItems = {
    key?: string;
    value?: string;
};
/** @returns {SEOSitemap} */
declare function SEOSitemap(): SEOSitemap;
type SEOSitemap = {
    frequency?: string;
    priority?: number;
};
/** @returns {TextProp} */
declare function TextProp(): TextProp;
type TextProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the text property.
     */
    value?: string;
};
/** @returns {ThemeConfigListPage} */
declare function ThemeConfigListPage(): ThemeConfigListPage;
type ThemeConfigListPage = {
    /**
     * - Name of the page
     */
    page?: string;
    settings?: ThemeConfigListPageSettingsProps;
};
/** @returns {ThemeConfigListPageSettingsProps} */
declare function ThemeConfigListPageSettingsProps(): ThemeConfigListPageSettingsProps;
type ThemeConfigListPageSettingsProps = {
    props?: any;
};
/** @returns {ThemeConfiguration} */
declare function ThemeConfiguration(): ThemeConfiguration;
type ThemeConfiguration = {
    global_config?: any;
    /**
     * - The name of the configuration
     */
    name?: string;
    /**
     * - An array of pages
     */
    page?: ThemeConfigListPage[];
};
/** @returns {ThemeMeta} */
declare function ThemeMeta(): ThemeMeta;
type ThemeMeta = {
    /**
     * - The description of the theme
     */
    description?: string;
    images?: Images;
    /**
     * - An array of industries associated with the theme
     */
    industry?: string[];
    /**
     * - The name of the theme
     */
    name?: string;
    payment?: ThemePayment;
    release?: Release;
    /**
     * - The slug of the theme
     */
    slug?: string;
};
/** @returns {ThemePayment} */
declare function ThemePayment(): ThemePayment;
type ThemePayment = {
    /**
     * - The amount of the theme
     */
    amount?: number;
    /**
     * - Whether the theme is paid or not
     */
    is_paid?: boolean;
};
/** @returns {ThemeRejectionReasons} */
declare function ThemeRejectionReasons(): ThemeRejectionReasons;
type ThemeRejectionReasons = {
    /**
     * - The ID of the theme rejection reasons object
     */
    _id: string;
    /**
     * - The ID of the admin who rejected the theme
     */
    admin_id: string;
    /**
     * - The date and time when the theme rejection
     * reasons object was created
     */
    created_at?: string;
    /**
     * - A general message about the rejection reasons
     */
    message?: string;
    /**
     * - The ID of the organization
     */
    organization_id: string;
    rejection_reasons: any;
    /**
     * - The status of the theme (e.g., rejected)
     */
    status: string;
    /**
     * - The ID of the rejected theme
     */
    theme_id: string;
    /**
     * - The date and time when the theme rejection
     * reasons object was last updated
     */
    updated_at?: string;
    /**
     * - The ID of the user who submitted the theme
     */
    user_id: string;
};
/** @returns {ThemesSchema} */
declare function ThemesSchema(): ThemesSchema;
type ThemesSchema = {
    /**
     * - The unique identifier of the theme
     */
    _id?: string;
    /**
     * - The ID of the application
     */
    application_id?: string;
    /**
     * - Whether the theme has been applied or not
     */
    applied?: boolean;
    assets?: Assets;
    /**
     * - Available sections information
     */
    available_sections?: SectionItem[];
    /**
     * - The company id in which sales channel exists
     */
    company_id?: number;
    config?: Config;
    /**
     * - The creation timestamp of the theme
     */
    created_at?: string;
    font?: Font;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    /**
     * - The ID of the theme in the marketplace
     */
    marketplace_theme_id?: string;
    meta?: ThemeMeta;
    /**
     * - The name of the theme
     */
    name?: string;
    src?: string;
    /**
     * - The styles associated with the theme
     */
    styles?: any;
    /**
     * - An array of tags associated with the theme
     */
    tags?: string[];
    /**
     * - The ID of the template theme
     */
    template_theme_id?: string;
    theme_type?: string;
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {ThemeUserSchema} */
declare function ThemeUserSchema(): ThemeUserSchema;
type ThemeUserSchema = {
    /**
     * - True if the user is anonymous.
     */
    anonymous?: boolean;
    /**
     * - True if the user is authenticated.
     */
    authenticated?: boolean;
};
/** @returns {UMDJs} */
declare function UMDJs(): UMDJs;
type UMDJs = {
    link?: string;
    links?: string[];
};
/** @returns {UpdateThemeRequestBody} */
declare function UpdateThemeRequestBody(): UpdateThemeRequestBody;
type UpdateThemeRequestBody = {
    config?: Config;
    font?: Font;
};
/** @returns {UrlProp} */
declare function UrlProp(): UrlProp;
type UrlProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the URL property.
     */
    value?: string;
};
/** @returns {UserAlerts} */
declare function UserAlerts(): UserAlerts;
type UserAlerts = {
    error_background?: string;
    error_text?: string;
    info_background?: string;
    info_text?: string;
    success_background?: string;
    success_text?: string;
};
/** @returns {Variation} */
declare function Variation(): Variation;
type Variation = {
    /**
     * - Variation color
     */
    color?: string;
    /**
     * - Variation demo URL
     */
    demo_url?: string;
    images?: MarketplaceThemeImages;
    /**
     * - Variation name
     */
    name?: string;
};
