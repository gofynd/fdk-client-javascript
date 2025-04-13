const Joi = require("joi");

const CommunicationPlatformModel = require("./CommunicationPlatformModel");

/**
 * @typedef GetSystemNotificationsParam
 * @property {number} [pageNo] - Current page no
 * @property {number} [pageSize] - Current request items count
 * @property {string} [sort] - To sort based on created_at
 * @property {string} [query] - To search based on plain text
 */

/**
 * @typedef SenByCompanyCommunicationAsynchronouslyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
 */

/**
 * @typedef SendByCompanyCommunicationInstantlyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
 */

/**
 * @typedef SendByCompanyCommunicationSynchronouslyParam
 * @property {string} xApplicationId - Application id
 * @property {CommunicationPlatformModel.EngineRequest} body
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

  /** @returns {SenByCompanyCommunicationAsynchronouslyParam} */
  static senByCompanyCommunicationAsynchronously() {
    return Joi.object({
      xApplicationId: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {SendByCompanyCommunicationInstantlyParam} */
  static sendByCompanyCommunicationInstantly() {
    return Joi.object({
      xApplicationId: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }

  /** @returns {SendByCompanyCommunicationSynchronouslyParam} */
  static sendByCompanyCommunicationSynchronously() {
    return Joi.object({
      xApplicationId: Joi.string().allow("").required(),
      body: CommunicationPlatformModel.EngineRequest().required(),
    }).required();
  }
}

module.exports = CommunicationPlatformValidator;
