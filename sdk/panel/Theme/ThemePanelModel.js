const Joi = require("joi");

class ThemeModel {
  static CarouselItem() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static CatalogSize() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static Comments() {
    return Joi.object({
      developer_remark: Joi.string().allow(""),
      reviewer_feedback: Joi.string().allow(""),
    });
  }
  static ContactInfo() {
    return Joi.object({
      developer_contact: Joi.array().items(Joi.string().allow("")),
      seller_contact: Joi.string().allow(""),
    });
  }
  static Documentation() {
    return Joi.object({
      notes: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static Email() {
    return Joi.object({
      active: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
    });
  }
  static ExploreInfo() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Feature() {
    return Joi.object({
      category: Joi.string().allow(""),
      list: Joi.array().items(ThemeModel.FeatureItem()),
    });
  }
  static FeatureItem() {
    return Joi.object({
      description: Joi.string().allow(""),
      label: Joi.string().allow(""),
    });
  }
  static Highlight() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      carousel: Joi.array().items(ThemeModel.CarouselItem()),
      catalog_size: ThemeModel.CatalogSize(),
      comments: ThemeModel.Comments(),
      contact: ThemeModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      documentation: ThemeModel.Documentation(),
      explore: ThemeModel.ExploreInfo(),
      features: Joi.array().items(ThemeModel.Feature()),
      highlights: Joi.array().items(ThemeModel.Highlight()),
      images: ThemeModel.MarketplaceThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_default: Joi.boolean(),
      is_update: Joi.boolean(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      payment: ThemeModel.PaymentInfo(),
      release: ThemeModel.Release(),
      slug: Joi.string().allow(""),
      src: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.number(),
      tagline: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      variations: Joi.array().items(ThemeModel.Variation()),
    });
  }
  static MarketplaceThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static MarketplaceThemeResponseBody() {
    return Joi.object({
      items: Joi.array().items(ThemeModel.MarketplaceTheme()),
      page: ThemeModel.PaginationSchema(),
    });
  }
  static Organization() {
    return Joi.object({
      _id: Joi.string().allow(""),
      meta: ThemeModel.OrganizationMeta(),
    });
  }
  static OrganizationMeta() {
    return Joi.object({
      ecomm_platform_used: Joi.array().items(Joi.string().allow("")),
      goals: Joi.array().items(Joi.string().allow("")),
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
  static PaymentInfo() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean().required(),
      country_code: Joi.number(),
      phone: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
    });
  }
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static ThemeAndUserDetailsResponse() {
    return Joi.object({
      themes: Joi.array().items(ThemeModel.MarketplaceTheme()),
      user: Joi.array().items(ThemeModel.ThemeCreator()),
    });
  }
  static ThemeCreator() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      account_type: Joi.string().allow(""),
      active: Joi.boolean().required(),
      emails: Joi.array().items(ThemeModel.Email()).required(),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(ThemeModel.PhoneNumber()),
    });
  }
  static ThemeSlugResponse() {
    return Joi.object({
      organization: ThemeModel.Organization(),
      theme: ThemeModel.MarketplaceTheme(),
      user: Joi.array().items(ThemeModel.ThemeCreator()),
    });
  }
  static Variation() {
    return Joi.object({
      color: Joi.string().allow(""),
      demo_url: Joi.string().allow(""),
      images: ThemeModel.MarketplaceThemeImages(),
      name: Joi.string().allow(""),
    });
  }
}
module.exports = ThemeModel;
