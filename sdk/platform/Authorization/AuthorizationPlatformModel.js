const Joi = require("joi");

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, can be 'cursor' or 'number'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef StandardError
 * @property {string} message - A brief description of the error.
 */

/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors - A list of validation errors in the request.
 */

/**
 * @typedef ApplicationStaff
 * @property {string} [application] - Unique ID of the associated application.
 * @property {string} [user] - Unique ID of the user.
 * @property {string} [title] - Title of the staff member.
 * @property {boolean} [order_incent] - Indicates whether the staff member is
 *   eligible for incentives on orders.
 * @property {number[]} [stores] - List of ids of the ordering stores where the
 *   staff member works.
 * @property {string} [employee_code] - Employee code of the staff member.
 * @property {string} [first_name] - First name of the associated user.
 * @property {string} [last_name] - Last name of the associated user.
 * @property {string} [profile_pic_url] - Profile picture URL of the associated user.
 */

/**
 * @typedef ApplicationStaffPage
 * @property {ApplicationStaff[]} [items] - List of application staff members.
 * @property {Page} [page]
 */

/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */

class AuthorizationPlatformModel {
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
      page_size: Joi.number(),
    });
  }

  /** @returns {StandardError} */
  static StandardError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ValidationErrors} */
  static ValidationErrors() {
    return Joi.object({
      errors: Joi.array()
        .items(AuthorizationPlatformModel.ValidationError())
        .required(),
    });
  }

  /** @returns {ApplicationStaff} */
  static ApplicationStaff() {
    return Joi.object({
      application: Joi.string().allow(""),
      user: Joi.string().allow(""),
      title: Joi.string().allow(""),
      order_incent: Joi.boolean(),
      stores: Joi.array().items(Joi.number()),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      profile_pic_url: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationStaffPage} */
  static ApplicationStaffPage() {
    return Joi.object({
      items: Joi.array().items(AuthorizationPlatformModel.ApplicationStaff()),
      page: AuthorizationPlatformModel.Page(),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }
}
module.exports = AuthorizationPlatformModel;
