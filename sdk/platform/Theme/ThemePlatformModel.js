const Joi = require("joi");

class ThemeModel {
  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.AvailablePageSchema()),
    });
  }
  static AssetsSchema() {
    return Joi.object({
      common_js: ThemeModel.CommonJs(),
      css: ThemeModel.Css(),
      umd_js: ThemeModel.UmdJs(),
    });
  }
  static AvailablePagePredicate() {
    return Joi.object({
      route: ThemeModel.AvailablePageRoutePredicate(),
      screen: ThemeModel.AvailablePageScreenPredicate(),
      user: ThemeModel.AvailablePageUserPredicate(),
    });
  }
  static AvailablePageRoutePredicate() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      query: Joi.any(),
      selected: Joi.string().allow(""),
    });
  }
  static AvailablePageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      path: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
      sections: Joi.array().items(ThemeModel.AvailablePageSchemaSections()),
      sections_meta: Joi.array().items(
        ThemeModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemeModel.AvailablePageSeo(),
      text: Joi.string().allow(""),
      theme: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static AvailablePageSchemaSections() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      predicate: ThemeModel.AvailablePagePredicate(),
      preset: Joi.any(),
      props: Joi.any(),
    });
  }
  static AvailablePageScreenPredicate() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }
  static AvailablePageSeo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static AvailablePageUserPredicate() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }
  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.Blocks()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeModel.BlocksProps()),
    });
  }
  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Blocks() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeModel.BlocksProps()),
      type: Joi.string().allow(""),
    });
  }
  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static Bold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
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
  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static Config() {
    return Joi.object({
      current: Joi.string().allow(""),
      global_schema: ThemeModel.GlobalSchema(),
      list: Joi.array().items(ThemeModel.ListSchemaItem()),
      preset: ThemeModel.Preset(),
    });
  }
  static ConfigPage() {
    return Joi.object({
      page: Joi.string().allow(""),
      settings: Joi.any(),
    });
  }
  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }
  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),
      variants: ThemeModel.Variants(),
    });
  }
  static FontsSchema() {
    return Joi.object({
      items: ThemeModel.FontsSchemaItems(),
      kind: Joi.string().allow(""),
    });
  }
  static FontsSchemaItems() {
    return Joi.object({
      category: Joi.string().allow(""),
      family: Joi.string().allow(""),
      files: ThemeModel.FontsSchemaItemsFiles(),
      kind: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      subsets: Joi.array().items(Joi.string().allow("")),
      variants: Joi.array().items(Joi.string().allow("")),
      version: Joi.string().allow(""),
    });
  }
  static FontsSchemaItemsFiles() {
    return Joi.object({
      bold: Joi.string().allow(""),
      italic: Joi.string().allow(""),
      regular: Joi.string().allow(""),
    });
  }
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeModel.GlobalSchemaProps()),
    });
  }
  static GlobalSchemaProps() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static Images() {
    return Joi.object({
      android: Joi.array().items(Joi.string().allow("")),
      desktop: Joi.array().items(Joi.string().allow("")),
      ios: Joi.array().items(Joi.string().allow("")),
      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Information() {
    return Joi.object({
      description: Joi.string().allow(""),
      features: Joi.array().items(Joi.string().allow("")),
      images: ThemeModel.Images(),
      name: Joi.string().allow(""),
    });
  }
  static Light() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(ThemeModel.ConfigPage()),
    });
  }
  static Medium() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.AvailablePageSchema()),
    });
  }
  static Regular() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }
  static SemiBold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ThemeModel.ThemesSchema()),
      page: ThemeModel.PaginationSchema(),
    });
  }
  static ThemesSchema() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      applied: Joi.boolean(),
      archived: Joi.boolean(),
      assets: ThemeModel.AssetsSchema(),
      available_sections: Joi.array().items(
        ThemeModel.availableSectionSchema()
      ),
      colors: ThemeModel.Colors(),
      config: ThemeModel.Config(),
      created_at: Joi.string().allow(""),
      customized: Joi.boolean(),
      font: ThemeModel.Font(),
      information: ThemeModel.Information(),
      parent_theme: Joi.string().allow(""),
      parent_theme_version: Joi.string().allow(""),
      published: Joi.boolean(),
      src: ThemeModel.Src(),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static UpgradableThemeSchema() {
    return Joi.object({
      applied_theme: Joi.string().allow(""),
      parent_theme: Joi.string().allow(""),
      upgrade: Joi.boolean(),
    });
  }
  static Variants() {
    return Joi.object({
      bold: ThemeModel.Bold(),
      light: ThemeModel.Light(),
      medium: ThemeModel.Medium(),
      regular: ThemeModel.Regular(),
      semi_bold: ThemeModel.SemiBold(),
    });
  }
}
module.exports = ThemeModel;
