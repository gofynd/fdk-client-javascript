const Theme = require("./Theme/ThemePartnerClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PartnerClient {
  constructor(config) {
    this.config = config;
    this.theme = new Theme(config);
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

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
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
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
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef MarketplaceThemeSchema
 * @property {MarketplaceTheme[]} [themes]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef MarketplaceTheme
 * @property {string} [_id]
 * @property {PaymentInfo} [payment]
 * @property {ContactInfo} [contact]
 * @property {string[]} [industry]
 * @property {boolean} [is_update]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {string} [tagline]
 * @property {string} [description]
 * @property {CatalogSize} [catalog_size]
 * @property {MarketplaceThemeImages} [images]
 * @property {CarouselItem[]} [carousel]
 * @property {string} [src]
 * @property {ExploreInfo} [explore]
 * @property {Feature[]} [features]
 * @property {Highlight[]} [highlights]
 * @property {Variation[]} [variations]
 * @property {Documentation} [documentation]
 * @property {string} [status]
 * @property {number} [step]
 * @property {Comments} [comments]
 * @property {Release} [release]
 * @property {string} [slug]
 * @property {string} [organization_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [template_theme_id]
 */

/**
 * @typedef PaymentInfo
 * @property {boolean} [is_paid]
 * @property {number} [amount]
 */

/**
 * @typedef ContactInfo
 * @property {string[]} [developer_contact]
 * @property {string} [seller_contact]
 */

/**
 * @typedef CatalogSize
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef MarketplaceThemeImages
 * @property {string} [desktop]
 * @property {string} [mobile]
 */

/**
 * @typedef CarouselItem
 * @property {string} [desktop]
 * @property {string} [mobile]
 */

/**
 * @typedef ExploreInfo
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef Feature
 * @property {string} [category]
 * @property {FeatureItem[]} [list]
 */

/**
 * @typedef FeatureItem
 * @property {string} [label]
 * @property {string} [description]
 */

/**
 * @typedef Highlight
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef Variation
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [demo_url]
 * @property {MarketplaceThemeImages} [images]
 */

/**
 * @typedef Documentation
 * @property {string} [notes]
 * @property {string} [url]
 */

/**
 * @typedef Comments
 * @property {string} [developer_remark]
 * @property {string} [reviewer_feedback]
 */

/**
 * @typedef ThemeRejectionReasons
 * @property {string} _id
 * @property {string} [message]
 * @property {string} theme_id
 * @property {string} organization_id
 * @property {string} admin_id
 * @property {string} user_id
 * @property {string} status
 * @property {Object} rejection_reasons
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
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
 * @typedef ThemesSchema
 * @property {Font} [font]
 * @property {Config} [config]
 * @property {boolean} [applied]
 * @property {boolean} [is_private]
 * @property {string[]} [tags]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [marketplace_theme_id]
 * @property {Meta} [meta]
 * @property {string} [name]
 * @property {string} [template_theme_id]
 * @property {string} [version]
 * @property {Object} [styles]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections]
 */

/**
 * @typedef Font
 * @property {FontVariants} variants
 * @property {string} family
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
 * @property {string} name
 * @property {string} file
 */

/**
 * @typedef Config
 * @property {string} current
 * @property {ThemeConfiguration[]} list
 * @property {GlobalSchema} [global_schema]
 * @property {Preset} [preset]
 */

/**
 * @typedef ThemeConfiguration
 * @property {string} [name]
 * @property {GlobalConfig} [global_config]
 * @property {CustomConfig} [custom]
 * @property {string[]} [page]
 */

/**
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */

/**
 * @typedef CustomProps
 * @property {string} [header_bg_color]
 * @property {string} [header_text_color]
 * @property {string} [header_border_color]
 * @property {string} [header_icon_color]
 * @property {string} [header_cart_notification_bg_color]
 * @property {string} [header_cart_notification_text_color]
 * @property {string} [header_nav_hover_color]
 * @property {string} [button_primary_color]
 * @property {string} [button_primary_label_color]
 * @property {string} [button_add_to_cart_color]
 * @property {string} [button_add_to_cart_label_color]
 * @property {string} [button_secondary_color]
 * @property {string} [button_secondary_label_color]
 * @property {string} [button_tertiary_color]
 * @property {string} [button_tertiary_label_color]
 * @property {string} [button_tertiary_hover_color]
 * @property {string} [button_tertiary_hover_text_color]
 * @property {string} [text_heading_link_color]
 * @property {string} [text_body_color]
 * @property {string} [text_price_color]
 * @property {string} [text_sale_price_color]
 * @property {string} [text_strikethrough_price_color]
 * @property {string} [text_discount_color]
 * @property {string} [footer_bg_color]
 * @property {string} [footer_text_color]
 * @property {string} [footer_border_color]
 * @property {string} [footer_nav_hover_color]
 * @property {boolean} [disable_cart]
 * @property {boolean} [is_menu_below_logo]
 * @property {string} [menu_position]
 */

/**
 * @typedef GlobalConfig
 * @property {StaticConfig} [statics]
 * @property {AuthConfig} [auth]
 * @property {PaletteConfig} [palette]
 */

/**
 * @typedef PaletteConfig
 * @property {GeneralSetting} [general_setting]
 * @property {AdvanceSetting} [advance_setting]
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
 * @property {string} [success_background]
 * @property {string} [success_text]
 * @property {string} [error_background]
 * @property {string} [error_text]
 * @property {string} [info_background]
 * @property {string} [info_text]
 */

/**
 * @typedef ThemeSetting
 * @property {string} [page_background]
 * @property {string} [theme_accent]
 */

/**
 * @typedef TextSetting
 * @property {string} [text_heading]
 * @property {string} [text_body]
 * @property {string} [text_label]
 * @property {string} [text_secondary]
 */

/**
 * @typedef ButtonSetting
 * @property {string} [button_primary]
 * @property {string} [button_secondary]
 * @property {string} [button_link]
 */

/**
 * @typedef SaleDiscountSetting
 * @property {string} [sale_badge_background]
 * @property {string} [sale_badge_text]
 * @property {string} [sale_discount_text]
 * @property {string} [sale_timer]
 */

/**
 * @typedef HeaderSetting
 * @property {string} [header_background]
 * @property {string} [header_nav]
 * @property {string} [header_icon]
 */

/**
 * @typedef FooterSetting
 * @property {string} [footer_background]
 * @property {string} [footer_bottom_background]
 * @property {string} [footer_heading_text]
 * @property {string} [footer_body_text]
 * @property {string} [footer_icon]
 */

/**
 * @typedef OverlayPopupSetting
 * @property {string} [dialog_backgroung]
 * @property {string} [overlay]
 */

/**
 * @typedef DividerStrokeHighlightSetting
 * @property {string} [divider_strokes]
 * @property {string} [highlight]
 */

/**
 * @typedef StaticConfig
 * @property {StaticProps} [props]
 */

/**
 * @typedef StaticProps
 * @property {Colors} [colors]
 * @property {AuthConfig} [auth]
 */

/**
 * @typedef AuthConfig
 * @property {boolean} [show_header_auth]
 * @property {boolean} [show_footer_auth]
 */

/**
 * @typedef Colors
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 * @property {string} [bg_color]
 */

/**
 * @typedef Meta
 * @property {ThemePayment} [payment]
 * @property {string} [description]
 * @property {string[]} [industry]
 * @property {Release} [release]
 * @property {Images} [images]
 * @property {string} [slug]
 * @property {string} [name]
 */

/**
 * @typedef ThemePayment
 * @property {boolean} [is_paid]
 * @property {number} [amount]
 */

/**
 * @typedef Release
 * @property {string} [notes]
 * @property {string} [version]
 */

/**
 * @typedef Images
 * @property {string} [desktop]
 * @property {string} [mobile]
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
 * @property {Object[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 */

/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */

/**
 * @typedef Prop
 * @property {string} [type]
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [info]
 */

/**
 * @typedef Preset
 * @property {Page[]} [pages]
 */

/**
 * @typedef Page
 * @property {Section[]} [sections]
 * @property {string} [value]
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
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef UrlProp
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef BlockProps
 * @property {ImagePickerProp} [image]
 * @property {UrlProp} [slide_link]
 */

/**
 * @typedef TextProp
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef CheckboxProp
 * @property {boolean} [value]
 * @property {string} [type]
 */

/**
 * @typedef RangeProp
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef Section
 * @property {Block[]} [blocks]
 * @property {Predicate} [predicate]
 * @property {string} [name]
 * @property {SectionProps} [props]
 * @property {SectionPreset} [preset]
 */

/**
 * @typedef Block
 * @property {string} [type]
 * @property {string} [name]
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
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef ThemeUserSchema
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef Route
 * @property {string} [selected]
 * @property {string} [exact_url]
 */

/**
 * @typedef UpdateThemeRequestBody
 * @property {Config} [config]
 * @property {Font} [font]
 */

module.exports = PartnerClient;
