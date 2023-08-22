const Joi = require("joi");

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef AssetsSchema
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 * @property {UmdJs} [umd_js]
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
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
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
 * @typedef Blocks
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 * @property {string} [type]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef Bold
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef Colors
 * @property {string} [accent_color]
 * @property {string} [bg_color]
 * @property {string} [button_secondary_color]
 * @property {string} [link_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef Config
 * @property {string} [current]
 * @property {GlobalSchema} [global_schema]
 * @property {ListSchemaItem[]} [list]
 * @property {Preset} [preset]
 */

/**
 * @typedef ConfigPage
 * @property {string} [page]
 * @property {Object} [settings]
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef Images
 * @property {string[]} [android]
 * @property {string[]} [desktop]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef Information
 * @property {string} [description]
 * @property {string[]} [features]
 * @property {Images} [images]
 * @property {string} [name]
 */

/**
 * @typedef Light
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {string} [name]
 * @property {ConfigPage[]} [page]
 */

/**
 * @typedef Medium
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef Regular
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef SemiBold
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef ThemesSchema
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [archived]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Colors} [colors]
 * @property {Config} [config]
 * @property {string} [created_at]
 * @property {boolean} [customized]
 * @property {Font} [font]
 * @property {Information} [information]
 * @property {string} [parent_theme]
 * @property {string} [parent_theme_version]
 * @property {boolean} [published]
 * @property {Src} [src]
 * @property {Object} [styles]
 * @property {string[]} [tags]
 * @property {string} [updated_at]
 * @property {string} [version]
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Variants
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Medium} [medium]
 * @property {Regular} [regular]
 * @property {SemiBold} [semi_bold]
 */

class ThemeApplicationModel {
  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {AssetsSchema} */
  static AssetsSchema() {
    return Joi.object({
      common_js: ThemeApplicationModel.CommonJs(),
      css: ThemeApplicationModel.Css(),
      umd_js: ThemeApplicationModel.UmdJs(),
    });
  }

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      route: ThemeApplicationModel.AvailablePageRoutePredicate(),
      screen: ThemeApplicationModel.AvailablePageScreenPredicate(),
      user: ThemeApplicationModel.AvailablePageUserPredicate(),
    });
  }

  /** @returns {AvailablePageRoutePredicate} */
  static AvailablePageRoutePredicate() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      query: Joi.any(),
      selected: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchema} */
  static AvailablePageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      path: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
      sections: Joi.array().items(
        ThemeApplicationModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemeApplicationModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemeApplicationModel.AvailablePageSeo(),
      text: Joi.string().allow(""),
      theme: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      predicate: ThemeApplicationModel.AvailablePagePredicate(),
      preset: Joi.any(),
      props: Joi.any(),
    });
  }

  /** @returns {AvailablePageScreenPredicate} */
  static AvailablePageScreenPredicate() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }

  /** @returns {AvailablePageSectionMetaAttributes} */
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  /** @returns {AvailablePageSeo} */
  static AvailablePageSeo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageUserPredicate} */
  static AvailablePageUserPredicate() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {availableSectionSchema} */
  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Blocks()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeApplicationModel.BlocksProps()),
    });
  }

  /** @returns {BlitzkriegApiErrorSchema} */
  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BlitzkriegInternalServerErrorSchema} */
  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Blocks} */
  static Blocks() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeApplicationModel.BlocksProps()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlocksProps} */
  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Bold} */
  static Bold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Colors} */
  static Colors() {
    return Joi.object({
      accent_color: Joi.string().allow(""),
      bg_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      link_color: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      secondary_color: Joi.string().allow(""),
    });
  }

  /** @returns {CommonJs} */
  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      current: Joi.string().allow(""),
      global_schema: ThemeApplicationModel.GlobalSchema(),
      list: Joi.array().items(ThemeApplicationModel.ListSchemaItem()),
      preset: ThemeApplicationModel.Preset(),
    });
  }

  /** @returns {ConfigPage} */
  static ConfigPage() {
    return Joi.object({
      page: Joi.string().allow(""),
      settings: Joi.any(),
    });
  }

  /** @returns {Css} */
  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),
      variants: ThemeApplicationModel.Variants(),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeApplicationModel.GlobalSchemaProps()),
    });
  }

  /** @returns {GlobalSchemaProps} */
  static GlobalSchemaProps() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Images} */
  static Images() {
    return Joi.object({
      android: Joi.array().items(Joi.string().allow("")),
      desktop: Joi.array().items(Joi.string().allow("")),
      ios: Joi.array().items(Joi.string().allow("")),
      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Information} */
  static Information() {
    return Joi.object({
      description: Joi.string().allow(""),
      features: Joi.array().items(Joi.string().allow("")),
      images: ThemeApplicationModel.Images(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Light} */
  static Light() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ListSchemaItem} */
  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(ThemeApplicationModel.ConfigPage()),
    });
  }

  /** @returns {Medium} */
  static Medium() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {Regular} */
  static Regular() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {SemiBold} */
  static SemiBold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Src} */
  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      applied: Joi.boolean(),
      archived: Joi.boolean(),
      assets: ThemeApplicationModel.AssetsSchema(),
      available_sections: Joi.array().items(
        ThemeApplicationModel.availableSectionSchema()
      ),
      colors: ThemeApplicationModel.Colors(),
      config: ThemeApplicationModel.Config(),
      created_at: Joi.string().allow(""),
      customized: Joi.boolean(),
      font: ThemeApplicationModel.Font(),
      information: ThemeApplicationModel.Information(),
      parent_theme: Joi.string().allow(""),
      parent_theme_version: Joi.string().allow(""),
      published: Joi.boolean(),
      src: ThemeApplicationModel.Src(),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {UmdJs} */
  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Variants} */
  static Variants() {
    return Joi.object({
      bold: ThemeApplicationModel.Bold(),
      light: ThemeApplicationModel.Light(),
      medium: ThemeApplicationModel.Medium(),
      regular: ThemeApplicationModel.Regular(),
      semi_bold: ThemeApplicationModel.SemiBold(),
    });
  }
}
module.exports = ThemeApplicationModel;
