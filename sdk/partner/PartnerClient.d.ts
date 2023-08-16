export = PartnerClient;
declare class PartnerClient {
    constructor(config: any);
    config: any;
    theme: Theme;
    setExtraHeaders(header: any): void;
}
declare namespace PartnerClient {
    export { AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, MarketplaceThemeSchema, MarketplaceTheme, PaymentInfo, ContactInfo, CatalogSize, MarketplaceThemeImages, CarouselItem, ExploreInfo, Feature, FeatureItem, Highlight, Variation, Documentation, Comments, ThemeRejectionReasons, AllAvailablePageSchema, PaginationSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, ThemesSchema, Font, FontVariants, FontVariant, Config, ThemeConfiguration, CustomConfig, CustomProps, GlobalConfig, PaletteConfig, GeneralSetting, AdvanceSetting, UserAlertsSetting, ThemeSetting, TextSetting, ButtonSetting, SaleDiscountSetting, HeaderSetting, FooterSetting, OverlayPopupSetting, DividerStrokeHighlightSetting, StaticConfig, StaticProps, AuthConfig, Colors, Meta, ThemePayment, Release, Images, Assets, UMDJs, CommonJS, CSS, SectionItem, GlobalSchema, Prop, Preset, Page, SectionProps, SectionPreset, ImagePickerProp, UrlProp, BlockProps, TextProp, CheckboxProp, RangeProp, Section, Block, Predicate, Screen, ThemeUserSchema, Route, UpdateThemeRequestBody };
}
import Theme = require("./Theme/ThemePartnerClient");
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
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type MarketplaceThemeSchema = {
    themes?: MarketplaceTheme[];
    page?: PaginationSchema;
};
type MarketplaceTheme = {
    _id?: string;
    payment?: PaymentInfo;
    contact?: ContactInfo;
    industry?: string[];
    is_update?: boolean;
    is_default?: boolean;
    name?: string;
    tagline?: string;
    description?: string;
    catalog_size?: CatalogSize;
    images?: MarketplaceThemeImages;
    carousel?: CarouselItem[];
    src?: string;
    explore?: ExploreInfo;
    features?: Feature[];
    highlights?: Highlight[];
    variations?: Variation[];
    documentation?: Documentation;
    status?: string;
    step?: number;
    comments?: Comments;
    release?: Release;
    slug?: string;
    organization_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    template_theme_id?: string;
};
type PaymentInfo = {
    is_paid?: boolean;
    amount?: number;
};
type ContactInfo = {
    developer_contact?: string[];
    seller_contact?: string;
};
type CatalogSize = {
    min?: number;
    max?: number;
};
type MarketplaceThemeImages = {
    desktop?: string;
    mobile?: string;
};
type CarouselItem = {
    desktop?: string;
    mobile?: string;
};
type ExploreInfo = {
    title?: string;
    description?: string;
};
type Feature = {
    category?: string;
    list?: FeatureItem[];
};
type FeatureItem = {
    label?: string;
    description?: string;
};
type Highlight = {
    title?: string;
    description?: string;
    image?: string;
};
type Variation = {
    name?: string;
    color?: string;
    demo_url?: string;
    images?: MarketplaceThemeImages;
};
type Documentation = {
    notes?: string;
    url?: string;
};
type Comments = {
    developer_remark?: string;
    reviewer_feedback?: string;
};
type ThemeRejectionReasons = {
    _id: string;
    message?: string;
    theme_id: string;
    organization_id: string;
    admin_id: string;
    user_id: string;
    status: string;
    rejection_reasons: any;
    created_at?: string;
    updated_at?: string;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type ThemesSchema = {
    font?: Font;
    config?: Config;
    applied?: boolean;
    is_private?: boolean;
    tags?: string[];
    _id?: string;
    application_id?: string;
    marketplace_theme_id?: string;
    meta?: Meta;
    name?: string;
    template_theme_id?: string;
    version?: string;
    styles?: any;
    created_at?: string;
    updated_at?: string;
    assets?: Assets;
    available_sections?: SectionItem[];
};
type Font = {
    variants: FontVariants;
    family: string;
};
type FontVariants = {
    light?: FontVariant;
    regular?: FontVariant;
    medium?: FontVariant;
    semi_bold?: FontVariant;
    bold?: FontVariant;
};
type FontVariant = {
    name: string;
    file: string;
};
type Config = {
    current: string;
    list: ThemeConfiguration[];
    global_schema?: GlobalSchema;
    preset?: Preset;
};
type ThemeConfiguration = {
    name?: string;
    global_config?: GlobalConfig;
    custom?: CustomConfig;
    page?: string[];
};
type CustomConfig = {
    props?: CustomProps;
};
type CustomProps = {
    header_bg_color?: string;
    header_text_color?: string;
    header_border_color?: string;
    header_icon_color?: string;
    header_cart_notification_bg_color?: string;
    header_cart_notification_text_color?: string;
    header_nav_hover_color?: string;
    button_primary_color?: string;
    button_primary_label_color?: string;
    button_add_to_cart_color?: string;
    button_add_to_cart_label_color?: string;
    button_secondary_color?: string;
    button_secondary_label_color?: string;
    button_tertiary_color?: string;
    button_tertiary_label_color?: string;
    button_tertiary_hover_color?: string;
    button_tertiary_hover_text_color?: string;
    text_heading_link_color?: string;
    text_body_color?: string;
    text_price_color?: string;
    text_sale_price_color?: string;
    text_strikethrough_price_color?: string;
    text_discount_color?: string;
    footer_bg_color?: string;
    footer_text_color?: string;
    footer_border_color?: string;
    footer_nav_hover_color?: string;
    disable_cart?: boolean;
    is_menu_below_logo?: boolean;
    menu_position?: string;
};
type GlobalConfig = {
    statics?: StaticConfig;
    auth?: AuthConfig;
    palette?: PaletteConfig;
};
type PaletteConfig = {
    general_setting?: GeneralSetting;
    advance_setting?: AdvanceSetting;
};
type GeneralSetting = {
    theme?: ThemeSetting;
    text?: TextSetting;
    button?: ButtonSetting;
    sale_discount?: SaleDiscountSetting;
    header?: HeaderSetting;
    footer?: FooterSetting;
};
type AdvanceSetting = {
    overlay_popup?: OverlayPopupSetting;
    divider_stroke_highlight?: DividerStrokeHighlightSetting;
    user_alerts?: UserAlertsSetting;
};
type UserAlertsSetting = {
    success_background?: string;
    success_text?: string;
    error_background?: string;
    error_text?: string;
    info_background?: string;
    info_text?: string;
};
type ThemeSetting = {
    page_background?: string;
    theme_accent?: string;
};
type TextSetting = {
    text_heading?: string;
    text_body?: string;
    text_label?: string;
    text_secondary?: string;
};
type ButtonSetting = {
    button_primary?: string;
    button_secondary?: string;
    button_link?: string;
};
type SaleDiscountSetting = {
    sale_badge_background?: string;
    sale_badge_text?: string;
    sale_discount_text?: string;
    sale_timer?: string;
};
type HeaderSetting = {
    header_background?: string;
    header_nav?: string;
    header_icon?: string;
};
type FooterSetting = {
    footer_background?: string;
    footer_bottom_background?: string;
    footer_heading_text?: string;
    footer_body_text?: string;
    footer_icon?: string;
};
type OverlayPopupSetting = {
    dialog_backgroung?: string;
    overlay?: string;
};
type DividerStrokeHighlightSetting = {
    divider_strokes?: string;
    highlight?: string;
};
type StaticConfig = {
    props?: StaticProps;
};
type StaticProps = {
    colors?: Colors;
    auth?: AuthConfig;
};
type AuthConfig = {
    show_header_auth?: boolean;
    show_footer_auth?: boolean;
};
type Colors = {
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
    bg_color?: string;
};
type Meta = {
    payment?: ThemePayment;
    description?: string;
    industry?: string[];
    release?: Release;
    images?: Images;
    slug?: string;
    name?: string;
};
type ThemePayment = {
    is_paid?: boolean;
    amount?: number;
};
type Release = {
    notes?: string;
    version?: string;
};
type Images = {
    desktop?: string;
    mobile?: string;
};
type Assets = {
    umd_js?: UMDJs;
    common_js?: CommonJS;
    css?: CSS;
};
type UMDJs = {
    links?: string[];
};
type CommonJS = {
    link?: string;
};
type CSS = {
    links?: string[];
};
type SectionItem = {
    props?: any[];
    blocks?: any[];
    name?: string;
    label?: string;
};
type GlobalSchema = {
    props?: Prop[];
};
type Prop = {
    type?: string;
    category?: string;
    id?: string;
    label?: string;
    info?: string;
};
type Preset = {
    pages?: Page[];
};
type Page = {
    sections?: Section[];
    value?: string;
};
type SectionProps = {
    title?: TextProp;
    item_margin?: TextProp;
    autoplay?: CheckboxProp;
    slide_interval?: RangeProp;
};
type SectionPreset = {
    blocks?: Block[];
};
type ImagePickerProp = {
    type?: string;
    value?: string;
};
type UrlProp = {
    type?: string;
    value?: string;
};
type BlockProps = {
    image?: ImagePickerProp;
    slide_link?: UrlProp;
};
type TextProp = {
    value?: string;
    type?: string;
};
type CheckboxProp = {
    value?: boolean;
    type?: string;
};
type RangeProp = {
    value?: number;
    type?: string;
};
type Section = {
    blocks?: Block[];
    predicate?: Predicate;
    name?: string;
    props?: SectionProps;
    preset?: SectionPreset;
};
type Block = {
    type?: string;
    name?: string;
    props?: BlockProps;
};
type Predicate = {
    screen?: Screen;
    user?: ThemeUserSchema;
    route?: Route;
};
type Screen = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type ThemeUserSchema = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type Route = {
    selected?: string;
    exact_url?: string;
};
type UpdateThemeRequestBody = {
    config?: Config;
    font?: Font;
};
