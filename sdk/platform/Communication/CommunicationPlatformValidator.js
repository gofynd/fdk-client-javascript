const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */

class CommunicationPlatformValidator {
  /** @returns {GetSystemNotificationsParam} */
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      sort: Joi.string().allow(""),
      query: Joi.string().allow(""),
    }).required();
  }
}

module.exports = CommunicationPlatformValidator;
