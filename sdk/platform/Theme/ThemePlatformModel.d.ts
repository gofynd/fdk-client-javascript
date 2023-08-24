export = ThemePlatformModel;
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef AdvanceSetting
 * @property {DividerStrokeHighlightSetting} [divider_stroke_highlight]
 * @property {OverlayPopupSetting} [overlay_popup]
 * @property {UserAlertsSetting} [user_alerts]
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
 * @typedef AuthConfig
 * @property {boolean} [show_footer_auth] - Whether to show footer authentication or not
 * @property {boolean} [show_header_auth] - Whether to show header authentication or not
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
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
 * @property {string} [description]
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
 * @typedef ButtonSetting
 * @property {string} [button_link] - The button link color
 * @property {string} [button_primary] - The primary button color
 * @property {string} [button_secondary] - The secondary button color
 */
/**
 * @typedef CheckboxProp
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */
/**
 * @typedef Colors
 * @property {string} [accent_color] - The accent color
 * @property {string} [bg_color] - The background color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [link_color] - The link color
 * @property {string} [primary_color] - The primary color
 * @property {string} [secondary_color] - The secondary color
 */
/**
 * @typedef CommonJS
 * @property {string} [link]
 */
/**
 * @typedef CompanyThemeSchema
 * @property {string} [_id] - The unique identifier for the theme.
 * @property {number} [company_id] - The ID of the company that the theme belongs to.
 * @property {string} [created_at] - The timestamp when the theme was created.
 * @property {MarketplaceThemeId} [marketplace_theme_id]
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme.
 * @property {string} [updated_at] - The timestamp when the theme was last updated.
 */
/**
 * @typedef Config
 * @property {string} current - The current configuration
 * @property {GlobalSchema} [global_schema]
 * @property {ThemeConfiguration[]} list - A list of configurations
 * @property {Preset} [preset]
 */
/**
 * @typedef CSS
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
 * @typedef DividerStrokeHighlightSetting
 * @property {string} [divider_strokes] - The divider strokes color
 * @property {string} [highlight] - The highlight color
 */
/**
 * @typedef DummyResponse
 * @property {string} [message]
 */
/**
 * @typedef Font
 * @property {string} family - The font family
 * @property {FontVariants} variants
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [category]
 * @property {string} [family]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [kind]
 * @property {string} [last_modified]
 * @property {string[]} [subsets]
 * @property {string[]} [variants]
 * @property {string} [version]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [bold]
 * @property {string} [italic]
 * @property {string} [regular]
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
 * @typedef FooterSetting
 * @property {string} [footer_background] - The footer background color
 * @property {string} [footer_body_text] - The footer body text color
 * @property {string} [footer_bottom_background] - The footer bottom background color
 * @property {string} [footer_heading_text] - The footer heading text color
 * @property {string} [footer_icon] - The footer icon color
 */
/**
 * @typedef GeneralSetting
 * @property {ButtonSetting} [button]
 * @property {FooterSetting} [footer]
 * @property {HeaderSetting} [header]
 * @property {SaleDiscountSetting} [sale_discount]
 * @property {TextSetting} [text]
 * @property {ThemeSetting} [theme]
 */
/**
 * @typedef GlobalConfig
 * @property {CustomConfig} [custom]
 * @property {StaticConfig} [statics]
 */
/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */
/**
 * @typedef HeaderSetting
 * @property {string} [header_background] - The header background color
 * @property {string} [header_icon] - The header icon color
 * @property {string} [header_nav] - The header navigation color
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
 * @typedef MarketplaceThemeId
 * @property {string} [_id] - The unique identifier for the marketplace theme.
 * @property {boolean} [is_default] - Whether the theme is the default theme.
 */
/**
 * @typedef Meta
 * @property {string} [description] - The description of the theme
 * @property {Images} [images]
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {string} [name] - The name of the theme
 * @property {ThemePayment} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - The slug of the theme
 */
/**
 * @typedef OverlayPopupSetting
 * @property {string} [dialog_backgroung] - The dialog background color
 * @property {string} [overlay] - The overlay color
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
 * @typedef PaletteConfig
 * @property {AdvanceSetting} [advance_setting]
 * @property {GeneralSetting} [general_setting]
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
 * @typedef SaleDiscountSetting
 * @property {string} [sale_badge_background] - The sale badge background color
 * @property {string} [sale_badge_text] - The sale badge text color
 * @property {string} [sale_discount_text] - The sale discount text color
 * @property {string} [sale_timer] - The sale timer color
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
 * @typedef StaticConfig
 * @property {StaticProps} [props]
 */
/**
 * @typedef StaticProps
 * @property {AuthConfig} [auth]
 * @property {Colors} [colors]
 * @property {PaletteConfig} [palette]
 */
/**
 * @typedef TextProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the text property.
 */
/**
 * @typedef TextSetting
 * @property {string} [text_body] - The text body color
 * @property {string} [text_heading] - The text heading color
 * @property {string} [text_label] - The text label color
 * @property {string} [text_secondary] - The secondary text color
 */
/**
 * @typedef ThemeConfiguration
 * @property {CustomConfig} [custom]
 * @property {Object} [global_config]
 * @property {string} [name] - The name of the configuration
 * @property {string[]} [page] - An array of pages
 */
/**
 * @typedef ThemeImages
 * @property {string} [desktop] - The URL of the desktop image for the theme.
 * @property {string} [mobile] - The URL of the mobile image for the theme.
 */
/**
 * @typedef ThemeMeta
 * @property {string} [description] - A description of the theme.
 * @property {ThemeImages} [images]
 * @property {string[]} [industry] - A list of industry categories the theme is
 *   suitable for.
 * @property {ThemePayment} [payment]
 * @property {string} [slug] - The slug for the theme.
 */
/**
 * @typedef ThemePayment
 * @property {number} [amount] - The amount to be paid for the theme.
 * @property {boolean} [is_paid] - Whether the theme is a paid theme.
 */
/**
 * @typedef ThemeReq
 * @property {string} [marketplace_theme_id] - The ID of the marketplace theme
 *   to apply to the company.
 */
/**
 * @typedef ThemeSetting
 * @property {string} [page_background] - The page background color
 * @property {string} [theme_accent] - The theme accent color
 */
/**
 * @typedef ThemesSchema
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {Config} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {Font} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {Meta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */
/**
 * @typedef ThemeUpgradableResponse
 * @property {string} [message] - A message describing the theme upgrade status
 * @property {boolean} [upgrade] - Indicates if the theme is upgradable or not
 * @property {ThemeVersions} [versions]
 */
/**
 * @typedef ThemeUserSchema
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */
/**
 * @typedef ThemeVersions
 * @property {string} [applied_theme] - The version of the applied theme
 * @property {string} [parent_theme] - The version of the parent theme
 */
/**
 * @typedef UMDJs
 * @property {string[]} [links]
 */
/**
 * @typedef UpdateThemeNameRequestBody
 * @property {string} [name] - The new name of the theme.
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
 * @typedef UserAlertsSetting
 * @property {string} [error_background] - The error background color
 * @property {string} [error_text] - The error text color
 * @property {string} [info_background] - The info background color
 * @property {string} [info_text] - The info text color
 * @property {string} [success_background] - The success background color
 * @property {string} [success_text] - The success text color
 */
declare class ThemePlatformModel {
}
declare namespace ThemePlatformModel {
    export { AddThemeRequestSchema, AdvanceSetting, AllAvailablePageSchema, Assets, AuthConfig, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, Block, BlockProps, ButtonSetting, CheckboxProp, Colors, CommonJS, CompanyThemeSchema, Config, CSS, CustomConfig, CustomProps, DividerStrokeHighlightSetting, DummyResponse, Font, FontsSchema, FontsSchemaItems, FontsSchemaItemsFiles, FontVariant, FontVariants, FooterSetting, GeneralSetting, GlobalConfig, GlobalSchema, HeaderSetting, ImagePickerProp, Images, MarketplaceThemeId, Meta, OverlayPopupSetting, Page, PaletteConfig, Predicate, Preset, Prop, RangeProp, Release, Route, SaleDiscountSetting, Screen, Section, SectionItem, SectionPreset, SectionProps, StaticConfig, StaticProps, TextProp, TextSetting, ThemeConfiguration, ThemeImages, ThemeMeta, ThemePayment, ThemeReq, ThemeSetting, ThemesSchema, ThemeUpgradableResponse, ThemeUserSchema, ThemeVersions, UMDJs, UpdateThemeNameRequestBody, UpdateThemeRequestBody, UrlProp, UserAlertsSetting };
}
/** @returns {AddThemeRequestSchema} */
declare function AddThemeRequestSchema(): AddThemeRequestSchema;
type AddThemeRequestSchema = {
    theme_id?: string;
};
/** @returns {AdvanceSetting} */
declare function AdvanceSetting(): AdvanceSetting;
type AdvanceSetting = {
    divider_stroke_highlight?: DividerStrokeHighlightSetting;
    overlay_popup?: OverlayPopupSetting;
    user_alerts?: UserAlertsSetting;
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
/** @returns {AuthConfig} */
declare function AuthConfig(): AuthConfig;
type AuthConfig = {
    /**
     * - Whether to show footer authentication or not
     */
    show_footer_auth?: boolean;
    /**
     * - Whether to show header authentication or not
     */
    show_header_auth?: boolean;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    route?: AvailablePageRoutePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    _id?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
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
    description?: string;
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
/** @returns {ButtonSetting} */
declare function ButtonSetting(): ButtonSetting;
type ButtonSetting = {
    /**
     * - The button link color
     */
    button_link?: string;
    /**
     * - The primary button color
     */
    button_primary?: string;
    /**
     * - The secondary button color
     */
    button_secondary?: string;
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
/** @returns {Colors} */
declare function Colors(): Colors;
type Colors = {
    /**
     * - The accent color
     */
    accent_color?: string;
    /**
     * - The background color
     */
    bg_color?: string;
    /**
     * - The secondary button color
     */
    button_secondary_color?: string;
    /**
     * - The link color
     */
    link_color?: string;
    /**
     * - The primary color
     */
    primary_color?: string;
    /**
     * - The secondary color
     */
    secondary_color?: string;
};
/** @returns {CommonJS} */
declare function CommonJS(): CommonJS;
type CommonJS = {
    link?: string;
};
/** @returns {CompanyThemeSchema} */
declare function CompanyThemeSchema(): CompanyThemeSchema;
type CompanyThemeSchema = {
    /**
     * - The unique identifier for the theme.
     */
    _id?: string;
    /**
     * - The ID of the company that the theme belongs to.
     */
    company_id?: number;
    /**
     * - The timestamp when the theme was created.
     */
    created_at?: string;
    marketplace_theme_id?: MarketplaceThemeId;
    meta?: ThemeMeta;
    /**
     * - The name of the theme.
     */
    name?: string;
    /**
     * - The timestamp when the theme was last updated.
     */
    updated_at?: string;
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
/** @returns {CSS} */
declare function CSS(): CSS;
type CSS = {
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
/** @returns {DummyResponse} */
declare function DummyResponse(): DummyResponse;
type DummyResponse = {
    message?: string;
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
/** @returns {FontsSchema} */
declare function FontsSchema(): FontsSchema;
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
/** @returns {FontsSchemaItems} */
declare function FontsSchemaItems(): FontsSchemaItems;
type FontsSchemaItems = {
    category?: string;
    family?: string;
    files?: FontsSchemaItemsFiles;
    kind?: string;
    last_modified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
};
/** @returns {FontsSchemaItemsFiles} */
declare function FontsSchemaItemsFiles(): FontsSchemaItemsFiles;
type FontsSchemaItemsFiles = {
    bold?: string;
    italic?: string;
    regular?: string;
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
/** @returns {FooterSetting} */
declare function FooterSetting(): FooterSetting;
type FooterSetting = {
    /**
     * - The footer background color
     */
    footer_background?: string;
    /**
     * - The footer body text color
     */
    footer_body_text?: string;
    /**
     * - The footer bottom background color
     */
    footer_bottom_background?: string;
    /**
     * - The footer heading text color
     */
    footer_heading_text?: string;
    /**
     * - The footer icon color
     */
    footer_icon?: string;
};
/** @returns {GeneralSetting} */
declare function GeneralSetting(): GeneralSetting;
type GeneralSetting = {
    button?: ButtonSetting;
    footer?: FooterSetting;
    header?: HeaderSetting;
    sale_discount?: SaleDiscountSetting;
    text?: TextSetting;
    theme?: ThemeSetting;
};
/** @returns {GlobalConfig} */
declare function GlobalConfig(): GlobalConfig;
type GlobalConfig = {
    custom?: CustomConfig;
    statics?: StaticConfig;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: Prop[];
};
/** @returns {HeaderSetting} */
declare function HeaderSetting(): HeaderSetting;
type HeaderSetting = {
    /**
     * - The header background color
     */
    header_background?: string;
    /**
     * - The header icon color
     */
    header_icon?: string;
    /**
     * - The header navigation color
     */
    header_nav?: string;
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
/** @returns {MarketplaceThemeId} */
declare function MarketplaceThemeId(): MarketplaceThemeId;
type MarketplaceThemeId = {
    /**
     * - The unique identifier for the marketplace theme.
     */
    _id?: string;
    /**
     * - Whether the theme is the default theme.
     */
    is_default?: boolean;
};
/** @returns {Meta} */
declare function Meta(): Meta;
type Meta = {
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
/** @returns {PaletteConfig} */
declare function PaletteConfig(): PaletteConfig;
type PaletteConfig = {
    advance_setting?: AdvanceSetting;
    general_setting?: GeneralSetting;
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
/** @returns {StaticConfig} */
declare function StaticConfig(): StaticConfig;
type StaticConfig = {
    props?: StaticProps;
};
/** @returns {StaticProps} */
declare function StaticProps(): StaticProps;
type StaticProps = {
    auth?: AuthConfig;
    colors?: Colors;
    palette?: PaletteConfig;
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
/** @returns {TextSetting} */
declare function TextSetting(): TextSetting;
type TextSetting = {
    /**
     * - The text body color
     */
    text_body?: string;
    /**
     * - The text heading color
     */
    text_heading?: string;
    /**
     * - The text label color
     */
    text_label?: string;
    /**
     * - The secondary text color
     */
    text_secondary?: string;
};
/** @returns {ThemeConfiguration} */
declare function ThemeConfiguration(): ThemeConfiguration;
type ThemeConfiguration = {
    custom?: CustomConfig;
    global_config?: any;
    /**
     * - The name of the configuration
     */
    name?: string;
    /**
     * - An array of pages
     */
    page?: string[];
};
/** @returns {ThemeImages} */
declare function ThemeImages(): ThemeImages;
type ThemeImages = {
    /**
     * - The URL of the desktop image for the theme.
     */
    desktop?: string;
    /**
     * - The URL of the mobile image for the theme.
     */
    mobile?: string;
};
/** @returns {ThemeMeta} */
declare function ThemeMeta(): ThemeMeta;
type ThemeMeta = {
    /**
     * - A description of the theme.
     */
    description?: string;
    images?: ThemeImages;
    /**
     * - A list of industry categories the theme is
     * suitable for.
     */
    industry?: string[];
    payment?: ThemePayment;
    /**
     * - The slug for the theme.
     */
    slug?: string;
};
/** @returns {ThemePayment} */
declare function ThemePayment(): ThemePayment;
type ThemePayment = {
    /**
     * - The amount to be paid for the theme.
     */
    amount?: number;
    /**
     * - Whether the theme is a paid theme.
     */
    is_paid?: boolean;
};
/** @returns {ThemeReq} */
declare function ThemeReq(): ThemeReq;
type ThemeReq = {
    /**
     * - The ID of the marketplace theme
     * to apply to the company.
     */
    marketplace_theme_id?: string;
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
    meta?: Meta;
    /**
     * - The name of the theme
     */
    name?: string;
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
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {ThemeUpgradableResponse} */
declare function ThemeUpgradableResponse(): ThemeUpgradableResponse;
type ThemeUpgradableResponse = {
    /**
     * - A message describing the theme upgrade status
     */
    message?: string;
    /**
     * - Indicates if the theme is upgradable or not
     */
    upgrade?: boolean;
    versions?: ThemeVersions;
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
/** @returns {ThemeVersions} */
declare function ThemeVersions(): ThemeVersions;
type ThemeVersions = {
    /**
     * - The version of the applied theme
     */
    applied_theme?: string;
    /**
     * - The version of the parent theme
     */
    parent_theme?: string;
};
/** @returns {UMDJs} */
declare function UMDJs(): UMDJs;
type UMDJs = {
    links?: string[];
};
/** @returns {UpdateThemeNameRequestBody} */
declare function UpdateThemeNameRequestBody(): UpdateThemeNameRequestBody;
type UpdateThemeNameRequestBody = {
    /**
     * - The new name of the theme.
     */
    name?: string;
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
/** @returns {UserAlertsSetting} */
declare function UserAlertsSetting(): UserAlertsSetting;
type UserAlertsSetting = {
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
    /**
     * - The success background color
     */
    success_background?: string;
    /**
     * - The success text color
     */
    success_text?: string;
};
