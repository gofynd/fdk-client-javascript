export = ThemeApplicationModel;
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef SEOMetaItem
 * @property {string} [title]
 * @property {SEOMetaItems[]} [items]
 */
/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef SEOSitemap
 * @property {number} [priority]
 * @property {string} [frequency]
 */
/**
 * @typedef SEObreadcrumb
 * @property {string} [url]
 * @property {Action} [action]
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
 * @property {string} [type]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [canonical_url]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumbs]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {string} [source]
 * @property {AvailablePagePredicate} [predicate]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageSchedulePredicate} [schedule]
 * @property {AvailablePagePlatformPredicate} [platform]
 * @property {string[]} [zones] - An array of zone ids associated with the section
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */
/**
 * @typedef AvailablePageSchedulePredicate
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef ThemesSchema
 * @property {Font} [font]
 * @property {Config} [config]
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [version] - The version of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {string} [theme_type]
 * @property {number} [company_id] - The company id in which sales channel exists
 * @property {string} [src]
 * @property {Object[]} [global_sections]
 */
/**
 * @typedef Font
 * @property {FontVariants} variants
 * @property {string} family - The font family
 */
/**
 * @typedef FontVariants
 * @property {FontVariant} [light]
 * @property {FontVariant} [regular]
 * @property {FontVariant} [medium]
 * @property {FontVariant} [semi_bold]
 * @property {FontVariant} [bold]
 */
/**
 * @typedef FontVariant
 * @property {string} name - The name of the font variant
 * @property {string} file - The URL of the font file
 */
/**
 * @typedef Config
 * @property {string} current - The current configuration
 * @property {ThemeConfiguration[]} list - A list of configurations
 * @property {GlobalSchema} [global_schema]
 * @property {Object} [preset] - An Object of default theme configurations
 */
/**
 * @typedef ThemeConfiguration
 * @property {string} [name] - The name of the configuration
 * @property {Object} [global_config]
 * @property {string[]} [page] - An array of pages
 */
/**
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */
/**
 * @typedef CustomProps
 * @property {string} [header_bg_color] - The header background color
 * @property {string} [header_text_color] - The header text color
 * @property {string} [header_border_color] - The header border color
 * @property {string} [header_icon_color] - The header icon color
 * @property {string} [header_cart_notification_bg_color] - The header cart
 *   notification background color
 * @property {string} [header_cart_notification_text_color] - The header cart
 *   notification text color
 * @property {string} [header_nav_hover_color] - The header navigation hover color
 * @property {string} [button_primary_color] - The primary button color
 * @property {string} [button_primary_label_color] - The primary button label color
 * @property {string} [button_add_to_cart_color] - The add to cart button color
 * @property {string} [button_add_to_cart_label_color] - The add to cart button
 *   label color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [button_secondary_label_color] - The secondary button label color
 * @property {string} [button_tertiary_color] - The tertiary button color
 * @property {string} [button_tertiary_label_color] - The tertiary button label color
 * @property {string} [button_tertiary_hover_color] - The tertiary button hover color
 * @property {string} [button_tertiary_hover_text_color] - The tertiary button
 *   hover text color
 * @property {string} [text_heading_link_color] - The text heading link color
 * @property {string} [text_body_color] - The text body color
 * @property {string} [text_price_color] - The text price color
 * @property {string} [text_sale_price_color] - The text sale price color
 * @property {string} [text_strikethrough_price_color] - The text strikethrough
 *   price color
 * @property {string} [text_discount_color] - The text discount color
 * @property {string} [footer_bg_color] - The footer background color
 * @property {string} [footer_text_color] - The footer text color
 * @property {string} [footer_border_color] - The footer border color
 * @property {string} [footer_nav_hover_color] - The footer navigation hover color
 * @property {boolean} [disable_cart] - Whether to disable the cart or not
 * @property {boolean} [is_menu_below_logo] - Whether the menu is below the logo or not
 * @property {string} [menu_position] - The position of the menu
 */
/**
 * @typedef GlobalConfig
 * @property {CustomConfig} [custom]
 */
/**
 * @typedef GeneralSetting
 * @property {ThemeSetting} [theme]
 * @property {TextSetting} [text]
 * @property {ButtonSetting} [button]
 * @property {SaleDiscountSetting} [sale_discount]
 * @property {HeaderSetting} [header]
 * @property {FooterSetting} [footer]
 */
/**
 * @typedef AdvanceSetting
 * @property {OverlayPopupSetting} [overlay_popup]
 * @property {DividerStrokeHighlightSetting} [divider_stroke_highlight]
 * @property {UserAlertsSetting} [user_alerts]
 */
/**
 * @typedef UserAlertsSetting
 * @property {string} [success_background] - The success background color
 * @property {string} [success_text] - The success text color
 * @property {string} [error_background] - The error background color
 * @property {string} [error_text] - The error text color
 * @property {string} [info_background] - The info background color
 * @property {string} [info_text] - The info text color
 */
/**
 * @typedef ThemeSetting
 * @property {string} [page_background] - The page background color
 * @property {string} [theme_accent] - The theme accent color
 */
/**
 * @typedef TextSetting
 * @property {string} [text_heading] - The text heading color
 * @property {string} [text_body] - The text body color
 * @property {string} [text_label] - The text label color
 * @property {string} [text_secondary] - The secondary text color
 */
/**
 * @typedef ButtonSetting
 * @property {string} [button_primary] - The primary button color
 * @property {string} [button_secondary] - The secondary button color
 * @property {string} [button_link] - The button link color
 */
/**
 * @typedef SaleDiscountSetting
 * @property {string} [sale_badge_background] - The sale badge background color
 * @property {string} [sale_badge_text] - The sale badge text color
 * @property {string} [sale_discount_text] - The sale discount text color
 * @property {string} [sale_timer] - The sale timer color
 */
/**
 * @typedef HeaderSetting
 * @property {string} [header_background] - The header background color
 * @property {string} [header_nav] - The header navigation color
 * @property {string} [header_icon] - The header icon color
 */
/**
 * @typedef FooterSetting
 * @property {string} [footer_background] - The footer background color
 * @property {string} [footer_bottom_background] - The footer bottom background color
 * @property {string} [footer_heading_text] - The footer heading text color
 * @property {string} [footer_body_text] - The footer body text color
 * @property {string} [footer_icon] - The footer icon color
 */
/**
 * @typedef OverlayPopupSetting
 * @property {string} [dialog_backgroung] - The dialog background color
 * @property {string} [overlay] - The overlay color
 */
/**
 * @typedef DividerStrokeHighlightSetting
 * @property {string} [divider_strokes] - The divider strokes color
 * @property {string} [highlight] - The highlight color
 */
/**
 * @typedef StaticConfig
 * @property {StaticProps} [props]
 */
/**
 * @typedef StaticProps
 * @property {Colors} [colors]
 * @property {AuthConfig} [auth]
 * @property {PaletteConfig} [palette]
 * @property {Object} [order_tracking]
 * @property {Object} [manifest]
 */
/**
 * @typedef Colors
 * @property {string} [primary_color] - The primary color
 * @property {string} [secondary_color] - The secondary color
 * @property {string} [accent_color] - The accent color
 * @property {string} [link_color] - The link color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [bg_color] - The background color
 */
/**
 * @typedef AuthConfig
 * @property {boolean} [show_header_auth] - Whether to show header authentication or not
 * @property {boolean} [show_footer_auth] - Whether to show footer authentication or not
 */
/**
 * @typedef PaletteConfig
 * @property {GeneralSetting} [general_setting]
 * @property {AdvanceSetting} [advance_setting]
 */
/**
 * @typedef ThemeMeta
 * @property {ThemePayment} [payment]
 * @property {string} [description] - The description of the theme
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {Release} [release]
 * @property {Images} [images]
 * @property {string} [slug] - The slug of the theme
 * @property {string} [name] - The name of the theme
 */
/**
 * @typedef ThemePayment
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 * @property {number} [amount] - The amount of the theme
 */
/**
 * @typedef Release
 * @property {string} [notes] - The release notes of the theme
 * @property {string} [version] - The version of the theme
 */
/**
 * @typedef Images
 * @property {string} [desktop] - The URL of the desktop image
 * @property {string} [mobile] - The URL of the mobile image
 */
/**
 * @typedef Assets
 * @property {UMDJs} [umd_js]
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 */
/**
 * @typedef UMDJs
 * @property {string[]} [links]
 */
/**
 * @typedef CommonJS
 * @property {string} [link]
 */
/**
 * @typedef CSS
 * @property {string[]} [links]
 */
/**
 * @typedef SectionItem
 * @property {Object[]} [props]
 * @property {Object[]} [blocks] - Blocks
 * @property {string} [name] - Name of the section
 * @property {string} [label] - Label for the section
 */
/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */
/**
 * @typedef Prop
 * @property {string} [type] - The type of the property
 * @property {string} [category] - The category of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [label] - The label of the property
 * @property {string} [info] - Additional information about the property
 */
/**
 * @typedef Preset
 * @property {Page[]} [pages]
 */
/**
 * @typedef Page
 * @property {Section[]} [sections]
 * @property {string} [value] - The value of the page.
 */
/**
 * @typedef SectionProps
 * @property {TextProp} [title]
 * @property {TextProp} [item_margin]
 * @property {CheckboxProp} [autoplay]
 * @property {RangeProp} [slide_interval]
 */
/**
 * @typedef SectionPreset
 * @property {Block[]} [blocks]
 */
/**
 * @typedef ImagePickerProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the image picker property.
 */
/**
 * @typedef UrlProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */
/**
 * @typedef BlockProps
 * @property {ImagePickerProp} [image]
 * @property {UrlProp} [slide_link]
 */
/**
 * @typedef TextProp
 * @property {string} [value] - The value of the text property.
 * @property {string} [type] - The type of the property.
 */
/**
 * @typedef CheckboxProp
 * @property {boolean} [value] - The value of the checkbox property.
 * @property {string} [type] - The type of the property.
 */
/**
 * @typedef RangeProp
 * @property {number} [value] - The value of the range property.
 * @property {string} [type] - The type of the property.
 */
/**
 * @typedef Section
 * @property {Block[]} [blocks]
 * @property {Predicate} [predicate]
 * @property {string} [name] - The name of the section.
 * @property {SectionProps} [props]
 * @property {SectionPreset} [preset]
 */
/**
 * @typedef Block
 * @property {string} [type] - The type of the block.
 * @property {string} [name] - The name of the block.
 * @property {BlockProps} [props]
 */
/**
 * @typedef Predicate
 * @property {Screen} [screen]
 * @property {ThemeUserSchema} [user]
 * @property {Route} [route]
 */
/**
 * @typedef Screen
 * @property {boolean} [mobile] - True if the screen is a mobile device.
 * @property {boolean} [desktop] - True if the screen is a desktop device.
 * @property {boolean} [tablet] - True if the screen is a tablet device.
 */
/**
 * @typedef ThemeUserSchema
 * @property {boolean} [authenticated] - True if the user is authenticated.
 * @property {boolean} [anonymous] - True if the user is anonymous.
 */
/**
 * @typedef Route
 * @property {string} [selected] - The selected route.
 * @property {string} [exact_url] - The exact URL of the route.
 */
/**
 * @typedef AvailablePagePlatformPredicate
 * @property {boolean} [ios] - Section visibility on ios platform
 * @property {boolean} [android] - Section visibility on android platform
 * @property {boolean} [web] - Section visibility on web platform
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
declare class ThemeApplicationModel {
}
declare namespace ThemeApplicationModel {
    export { AllAvailablePageSchema, AvailablePageSchema, AvailablePageSectionMetaAttributes, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, Action, ActionPage, AvailablePageSeo, AvailablePageSchemaSections, AvailablePagePredicate, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePageSchedulePredicate, ThemesSchema, Font, FontVariants, FontVariant, Config, ThemeConfiguration, CustomConfig, CustomProps, GlobalConfig, GeneralSetting, AdvanceSetting, UserAlertsSetting, ThemeSetting, TextSetting, ButtonSetting, SaleDiscountSetting, HeaderSetting, FooterSetting, OverlayPopupSetting, DividerStrokeHighlightSetting, StaticConfig, StaticProps, Colors, AuthConfig, PaletteConfig, ThemeMeta, ThemePayment, Release, Images, Assets, UMDJs, CommonJS, CSS, SectionItem, GlobalSchema, Prop, Preset, Page, SectionProps, SectionPreset, ImagePickerProp, UrlProp, BlockProps, TextProp, CheckboxProp, RangeProp, Section, Block, Predicate, Screen, ThemeUserSchema, Route, AvailablePagePlatformPredicate, BlitzkriegInternalServerErrorSchema, BlitzkriegApiErrorSchema };
}
/** @returns {AllAvailablePageSchema} */
declare function AllAvailablePageSchema(): AllAvailablePageSchema;
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    updated_at?: string;
    created_at?: string;
    _id?: string;
};
/** @returns {AvailablePageSectionMetaAttributes} */
declare function AvailablePageSectionMetaAttributes(): AvailablePageSectionMetaAttributes;
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    title?: string;
    items?: SEOMetaItems[];
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
    priority?: number;
    frequency?: string;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    url?: string;
    action?: Action;
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
    type?: string;
};
/** @returns {AvailablePageSeo} */
declare function AvailablePageSeo(): AvailablePageSeo;
type AvailablePageSeo = {
    title?: string;
    description?: string;
    canonical_url?: string;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    breadcrumbs?: SEObreadcrumb[];
    _id?: string;
};
/** @returns {AvailablePageSchemaSections} */
declare function AvailablePageSchemaSections(): AvailablePageSchemaSections;
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    source?: string;
    predicate?: AvailablePagePredicate;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
    schedule?: AvailablePageSchedulePredicate;
    platform?: AvailablePagePlatformPredicate;
    /**
     * - An array of zone ids associated with the section
     */
    zones?: string[];
};
/** @returns {AvailablePageScreenPredicate} */
declare function AvailablePageScreenPredicate(): AvailablePageScreenPredicate;
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
/** @returns {AvailablePageUserPredicate} */
declare function AvailablePageUserPredicate(): AvailablePageUserPredicate;
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
/** @returns {AvailablePageSchedulePredicate} */
declare function AvailablePageSchedulePredicate(): AvailablePageSchedulePredicate;
type AvailablePageSchedulePredicate = {
    cron?: string;
    start?: string;
    end?: string;
};
/** @returns {ThemesSchema} */
declare function ThemesSchema(): ThemesSchema;
type ThemesSchema = {
    font?: Font;
    config?: Config;
    /**
     * - Whether the theme has been applied or not
     */
    applied?: boolean;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    /**
     * - An array of tags associated with the theme
     */
    tags?: string[];
    /**
     * - The unique identifier of the theme
     */
    _id?: string;
    /**
     * - The ID of the application
     */
    application_id?: string;
    /**
     * - The ID of the theme in the marketplace
     */
    marketplace_theme_id?: string;
    meta?: ThemeMeta;
    /**
     * - The name of the theme
     */
    name?: string;
    /**
     * - The ID of the template theme
     */
    template_theme_id?: string;
    /**
     * - The version of the theme
     */
    version?: string;
    /**
     * - The styles associated with the theme
     */
    styles?: any;
    /**
     * - The creation timestamp of the theme
     */
    created_at?: string;
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    assets?: Assets;
    /**
     * - Available sections information
     */
    available_sections?: SectionItem[];
    theme_type?: string;
    /**
     * - The company id in which sales channel exists
     */
    company_id?: number;
    src?: string;
    global_sections?: any[];
};
/** @returns {Font} */
declare function Font(): Font;
type Font = {
    variants: FontVariants;
    /**
     * - The font family
     */
    family: string;
};
/** @returns {FontVariants} */
declare function FontVariants(): FontVariants;
type FontVariants = {
    light?: FontVariant;
    regular?: FontVariant;
    medium?: FontVariant;
    semi_bold?: FontVariant;
    bold?: FontVariant;
};
/** @returns {FontVariant} */
declare function FontVariant(): FontVariant;
type FontVariant = {
    /**
     * - The name of the font variant
     */
    name: string;
    /**
     * - The URL of the font file
     */
    file: string;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    /**
     * - The current configuration
     */
    current: string;
    /**
     * - A list of configurations
     */
    list: ThemeConfiguration[];
    global_schema?: GlobalSchema;
    /**
     * - An Object of default theme configurations
     */
    preset?: any;
};
/** @returns {ThemeConfiguration} */
declare function ThemeConfiguration(): ThemeConfiguration;
type ThemeConfiguration = {
    /**
     * - The name of the configuration
     */
    name?: string;
    global_config?: any;
    /**
     * - An array of pages
     */
    page?: string[];
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
     * - The header background color
     */
    header_bg_color?: string;
    /**
     * - The header text color
     */
    header_text_color?: string;
    /**
     * - The header border color
     */
    header_border_color?: string;
    /**
     * - The header icon color
     */
    header_icon_color?: string;
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
     * - The header navigation hover color
     */
    header_nav_hover_color?: string;
    /**
     * - The primary button color
     */
    button_primary_color?: string;
    /**
     * - The primary button label color
     */
    button_primary_label_color?: string;
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
     * - The tertiary button label color
     */
    button_tertiary_label_color?: string;
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
     * - The text heading link color
     */
    text_heading_link_color?: string;
    /**
     * - The text body color
     */
    text_body_color?: string;
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
    /**
     * - The text discount color
     */
    text_discount_color?: string;
    /**
     * - The footer background color
     */
    footer_bg_color?: string;
    /**
     * - The footer text color
     */
    footer_text_color?: string;
    /**
     * - The footer border color
     */
    footer_border_color?: string;
    /**
     * - The footer navigation hover color
     */
    footer_nav_hover_color?: string;
    /**
     * - Whether to disable the cart or not
     */
    disable_cart?: boolean;
    /**
     * - Whether the menu is below the logo or not
     */
    is_menu_below_logo?: boolean;
    /**
     * - The position of the menu
     */
    menu_position?: string;
};
/** @returns {GlobalConfig} */
declare function GlobalConfig(): GlobalConfig;
type GlobalConfig = {
    custom?: CustomConfig;
};
/** @returns {GeneralSetting} */
declare function GeneralSetting(): GeneralSetting;
type GeneralSetting = {
    theme?: ThemeSetting;
    text?: TextSetting;
    button?: ButtonSetting;
    sale_discount?: SaleDiscountSetting;
    header?: HeaderSetting;
    footer?: FooterSetting;
};
/** @returns {AdvanceSetting} */
declare function AdvanceSetting(): AdvanceSetting;
type AdvanceSetting = {
    overlay_popup?: OverlayPopupSetting;
    divider_stroke_highlight?: DividerStrokeHighlightSetting;
    user_alerts?: UserAlertsSetting;
};
/** @returns {UserAlertsSetting} */
declare function UserAlertsSetting(): UserAlertsSetting;
type UserAlertsSetting = {
    /**
     * - The success background color
     */
    success_background?: string;
    /**
     * - The success text color
     */
    success_text?: string;
    /**
     * - The error background color
     */
    error_background?: string;
    /**
     * - The error text color
     */
    error_text?: string;
    /**
     * - The info background color
     */
    info_background?: string;
    /**
     * - The info text color
     */
    info_text?: string;
};
/** @returns {ThemeSetting} */
declare function ThemeSetting(): ThemeSetting;
type ThemeSetting = {
    /**
     * - The page background color
     */
    page_background?: string;
    /**
     * - The theme accent color
     */
    theme_accent?: string;
};
/** @returns {TextSetting} */
declare function TextSetting(): TextSetting;
type TextSetting = {
    /**
     * - The text heading color
     */
    text_heading?: string;
    /**
     * - The text body color
     */
    text_body?: string;
    /**
     * - The text label color
     */
    text_label?: string;
    /**
     * - The secondary text color
     */
    text_secondary?: string;
};
/** @returns {ButtonSetting} */
declare function ButtonSetting(): ButtonSetting;
type ButtonSetting = {
    /**
     * - The primary button color
     */
    button_primary?: string;
    /**
     * - The secondary button color
     */
    button_secondary?: string;
    /**
     * - The button link color
     */
    button_link?: string;
};
/** @returns {SaleDiscountSetting} */
declare function SaleDiscountSetting(): SaleDiscountSetting;
type SaleDiscountSetting = {
    /**
     * - The sale badge background color
     */
    sale_badge_background?: string;
    /**
     * - The sale badge text color
     */
    sale_badge_text?: string;
    /**
     * - The sale discount text color
     */
    sale_discount_text?: string;
    /**
     * - The sale timer color
     */
    sale_timer?: string;
};
/** @returns {HeaderSetting} */
declare function HeaderSetting(): HeaderSetting;
type HeaderSetting = {
    /**
     * - The header background color
     */
    header_background?: string;
    /**
     * - The header navigation color
     */
    header_nav?: string;
    /**
     * - The header icon color
     */
    header_icon?: string;
};
/** @returns {FooterSetting} */
declare function FooterSetting(): FooterSetting;
type FooterSetting = {
    /**
     * - The footer background color
     */
    footer_background?: string;
    /**
     * - The footer bottom background color
     */
    footer_bottom_background?: string;
    /**
     * - The footer heading text color
     */
    footer_heading_text?: string;
    /**
     * - The footer body text color
     */
    footer_body_text?: string;
    /**
     * - The footer icon color
     */
    footer_icon?: string;
};
/** @returns {OverlayPopupSetting} */
declare function OverlayPopupSetting(): OverlayPopupSetting;
type OverlayPopupSetting = {
    /**
     * - The dialog background color
     */
    dialog_backgroung?: string;
    /**
     * - The overlay color
     */
    overlay?: string;
};
/** @returns {DividerStrokeHighlightSetting} */
declare function DividerStrokeHighlightSetting(): DividerStrokeHighlightSetting;
type DividerStrokeHighlightSetting = {
    /**
     * - The divider strokes color
     */
    divider_strokes?: string;
    /**
     * - The highlight color
     */
    highlight?: string;
};
/** @returns {StaticConfig} */
declare function StaticConfig(): StaticConfig;
type StaticConfig = {
    props?: StaticProps;
};
/** @returns {StaticProps} */
declare function StaticProps(): StaticProps;
type StaticProps = {
    colors?: Colors;
    auth?: AuthConfig;
    palette?: PaletteConfig;
    order_tracking?: any;
    manifest?: any;
};
/** @returns {Colors} */
declare function Colors(): Colors;
type Colors = {
    /**
     * - The primary color
     */
    primary_color?: string;
    /**
     * - The secondary color
     */
    secondary_color?: string;
    /**
     * - The accent color
     */
    accent_color?: string;
    /**
     * - The link color
     */
    link_color?: string;
    /**
     * - The secondary button color
     */
    button_secondary_color?: string;
    /**
     * - The background color
     */
    bg_color?: string;
};
/** @returns {AuthConfig} */
declare function AuthConfig(): AuthConfig;
type AuthConfig = {
    /**
     * - Whether to show header authentication or not
     */
    show_header_auth?: boolean;
    /**
     * - Whether to show footer authentication or not
     */
    show_footer_auth?: boolean;
};
/** @returns {PaletteConfig} */
declare function PaletteConfig(): PaletteConfig;
type PaletteConfig = {
    general_setting?: GeneralSetting;
    advance_setting?: AdvanceSetting;
};
/** @returns {ThemeMeta} */
declare function ThemeMeta(): ThemeMeta;
type ThemeMeta = {
    payment?: ThemePayment;
    /**
     * - The description of the theme
     */
    description?: string;
    /**
     * - An array of industries associated with the theme
     */
    industry?: string[];
    release?: Release;
    images?: Images;
    /**
     * - The slug of the theme
     */
    slug?: string;
    /**
     * - The name of the theme
     */
    name?: string;
};
/** @returns {ThemePayment} */
declare function ThemePayment(): ThemePayment;
type ThemePayment = {
    /**
     * - Whether the theme is paid or not
     */
    is_paid?: boolean;
    /**
     * - The amount of the theme
     */
    amount?: number;
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
/** @returns {Assets} */
declare function Assets(): Assets;
type Assets = {
    umd_js?: UMDJs;
    common_js?: CommonJS;
    css?: CSS;
};
/** @returns {UMDJs} */
declare function UMDJs(): UMDJs;
type UMDJs = {
    links?: string[];
};
/** @returns {CommonJS} */
declare function CommonJS(): CommonJS;
type CommonJS = {
    link?: string;
};
/** @returns {CSS} */
declare function CSS(): CSS;
type CSS = {
    links?: string[];
};
/** @returns {SectionItem} */
declare function SectionItem(): SectionItem;
type SectionItem = {
    props?: any[];
    /**
     * - Blocks
     */
    blocks?: any[];
    /**
     * - Name of the section
     */
    name?: string;
    /**
     * - Label for the section
     */
    label?: string;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: Prop[];
};
/** @returns {Prop} */
declare function Prop(): Prop;
type Prop = {
    /**
     * - The type of the property
     */
    type?: string;
    /**
     * - The category of the property
     */
    category?: string;
    /**
     * - The ID of the property
     */
    id?: string;
    /**
     * - The label of the property
     */
    label?: string;
    /**
     * - Additional information about the property
     */
    info?: string;
};
/** @returns {Preset} */
declare function Preset(): Preset;
type Preset = {
    pages?: Page[];
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    sections?: Section[];
    /**
     * - The value of the page.
     */
    value?: string;
};
/** @returns {SectionProps} */
declare function SectionProps(): SectionProps;
type SectionProps = {
    title?: TextProp;
    item_margin?: TextProp;
    autoplay?: CheckboxProp;
    slide_interval?: RangeProp;
};
/** @returns {SectionPreset} */
declare function SectionPreset(): SectionPreset;
type SectionPreset = {
    blocks?: Block[];
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
/** @returns {BlockProps} */
declare function BlockProps(): BlockProps;
type BlockProps = {
    image?: ImagePickerProp;
    slide_link?: UrlProp;
};
/** @returns {TextProp} */
declare function TextProp(): TextProp;
type TextProp = {
    /**
     * - The value of the text property.
     */
    value?: string;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {CheckboxProp} */
declare function CheckboxProp(): CheckboxProp;
type CheckboxProp = {
    /**
     * - The value of the checkbox property.
     */
    value?: boolean;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {RangeProp} */
declare function RangeProp(): RangeProp;
type RangeProp = {
    /**
     * - The value of the range property.
     */
    value?: number;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {Section} */
declare function Section(): Section;
type Section = {
    blocks?: Block[];
    predicate?: Predicate;
    /**
     * - The name of the section.
     */
    name?: string;
    props?: SectionProps;
    preset?: SectionPreset;
};
/** @returns {Block} */
declare function Block(): Block;
type Block = {
    /**
     * - The type of the block.
     */
    type?: string;
    /**
     * - The name of the block.
     */
    name?: string;
    props?: BlockProps;
};
/** @returns {Predicate} */
declare function Predicate(): Predicate;
type Predicate = {
    screen?: Screen;
    user?: ThemeUserSchema;
    route?: Route;
};
/** @returns {Screen} */
declare function Screen(): Screen;
type Screen = {
    /**
     * - True if the screen is a mobile device.
     */
    mobile?: boolean;
    /**
     * - True if the screen is a desktop device.
     */
    desktop?: boolean;
    /**
     * - True if the screen is a tablet device.
     */
    tablet?: boolean;
};
/** @returns {ThemeUserSchema} */
declare function ThemeUserSchema(): ThemeUserSchema;
type ThemeUserSchema = {
    /**
     * - True if the user is authenticated.
     */
    authenticated?: boolean;
    /**
     * - True if the user is anonymous.
     */
    anonymous?: boolean;
};
/** @returns {Route} */
declare function Route(): Route;
type Route = {
    /**
     * - The selected route.
     */
    selected?: string;
    /**
     * - The exact URL of the route.
     */
    exact_url?: string;
};
/** @returns {AvailablePagePlatformPredicate} */
declare function AvailablePagePlatformPredicate(): AvailablePagePlatformPredicate;
type AvailablePagePlatformPredicate = {
    /**
     * - Section visibility on ios platform
     */
    ios?: boolean;
    /**
     * - Section visibility on android platform
     */
    android?: boolean;
    /**
     * - Section visibility on web platform
     */
    web?: boolean;
};
/** @returns {BlitzkriegInternalServerErrorSchema} */
declare function BlitzkriegInternalServerErrorSchema(): BlitzkriegInternalServerErrorSchema;
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
/** @returns {BlitzkriegApiErrorSchema} */
declare function BlitzkriegApiErrorSchema(): BlitzkriegApiErrorSchema;
type BlitzkriegApiErrorSchema = {
    message?: string;
};
