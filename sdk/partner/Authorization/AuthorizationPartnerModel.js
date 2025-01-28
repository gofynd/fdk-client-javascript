const Joi = require("joi");

/**
 * @typedef ClientData
 * @property {ClientScopes} [scopes]
 * @property {string[]} [grants] - List of grants for the client.
 * @property {ClientMeta} [meta]
 */

/**
 * @typedef ClientScopes
 * @property {string} [type] - The type of the scope.
 * @property {string[]} [permissions] - List of permissions for the scope.
 */

/**
 * @typedef UpdateClient
 * @property {ClientMeta} [meta]
 */

/**
 * @typedef ClientMeta
 * @property {string[]} [tags] - Tags associated with the client.
 * @property {string} [name] - Name of the client.
 * @property {string} [description] - Description of the client.
 * @property {string} [user_id] - ID of the user associated with the client.
 */

/**
 * @typedef ClientResponse
 * @property {number} [company_id] - The ID of the company associated with the client.
 * @property {string} [client_id] - The unique identifier for the client.
 * @property {string[]} [secret] - List of secrets associated with the client.
 * @property {string} [slug] - Slug for the client.
 * @property {ClientScopes} [scopes]
 * @property {string[]} [grants] - List of grants for the client.
 * @property {string[]} [redirect_urls] - List of redirect URLs for the client.
 * @property {number} [access_token_lifetime] - Lifetime of the access token in seconds.
 * @property {number} [refresh_token_lifetime] - Lifetime of the refresh token in seconds.
 * @property {ClientMeta} [meta]
 * @property {Object} [author] - Author information related to the client.
 * @property {boolean} [is_active] - Wheather the client is active or not
 * @property {string} [client_type] - Type of the client.
 * @property {string} [organization_id] - ID of the organization associated with
 *   the client.
 * @property {string} [_id] - Unique identifier for the client.
 * @property {string} [created_at] - Timestamp when the client was created.
 * @property {string} [modified_at] - Timestamp when the client was last modified.
 * @property {string[]} [raw_permissions] - List of raw permissions associated
 *   with the client.
 */

/**
 * @typedef ClientListSchema
 * @property {ClientResponse[]} [items] - List of client responses.
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */

class AuthorizationPartnerModel {
  /** @returns {ClientData} */
  static ClientData() {
    return Joi.object({
      scopes: AuthorizationPartnerModel.ClientScopes(),
      grants: Joi.array().items(Joi.string().allow("")),
      meta: AuthorizationPartnerModel.ClientMeta(),
    });
  }

  /** @returns {ClientScopes} */
  static ClientScopes() {
    return Joi.object({
      type: Joi.string().allow(""),
      permissions: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateClient} */
  static UpdateClient() {
    return Joi.object({
      meta: AuthorizationPartnerModel.ClientMeta(),
    });
  }

  /** @returns {ClientMeta} */
  static ClientMeta() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {ClientResponse} */
  static ClientResponse() {
    return Joi.object({
      company_id: Joi.number(),
      client_id: Joi.string().allow(""),
      secret: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      scopes: AuthorizationPartnerModel.ClientScopes(),
      grants: Joi.array().items(Joi.string().allow("")),
      redirect_urls: Joi.array().items(Joi.string().allow("")),
      access_token_lifetime: Joi.number(),
      refresh_token_lifetime: Joi.number(),
      meta: AuthorizationPartnerModel.ClientMeta(),
      author: Joi.any(),
      is_active: Joi.boolean(),
      client_type: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      raw_permissions: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ClientListSchema} */
  static ClientListSchema() {
    return Joi.object({
      items: Joi.array().items(AuthorizationPartnerModel.ClientResponse()),
      page: AuthorizationPartnerModel.Page(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      total: Joi.number(),
    });
  }
}
module.exports = AuthorizationPartnerModel;
