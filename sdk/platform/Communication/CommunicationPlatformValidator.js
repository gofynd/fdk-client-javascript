const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

class CommunicationPlatformValidator {
  /** @returns {GetSystemNotificationsParam} */
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

module.exports = CommunicationPlatformValidator;
