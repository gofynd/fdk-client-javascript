const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef getSystemNotifications
 * @property {number} [pageNo]
 * @property {number} [pageSize]
 */

class CommunicationPlatformValidator {
  /** @returns {getSystemNotifications} */
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

module.exports = CommunicationPlatformValidator;
