const Joi = require("joi");

const UserPlatformModel = require("./UserPlatformModel");

/**
 * @typedef archiveUser
 * @property {UserPlatformModel.ArchiveUserRequestSchema} body
 */

/**
 * @typedef blockOrUnblockUsers
 * @property {UserPlatformModel.BlockUserRequestSchema} body
 */

/**
 * @typedef createUser
 * @property {UserPlatformModel.CreateUserRequestSchema} body
 */

/**
 * @typedef createUserGroup
 * @property {UserPlatformModel.CreateUserGroupSchema} body
 */

/**
 * @typedef createUserSession
 * @property {UserPlatformModel.CreateUserSessionRequestSchema} body
 */

/**
 * @typedef deleteActiveSessions
 * @property {string} id - ID of a customer.
 * @property {string} reason - Reason to delete sessions.
 */

/**
 * @typedef deleteSession
 * @property {string} id - ID of a customer.
 * @property {string} sessionId - Session ID of a customer.
 * @property {string} reason - Reason for deleting session.
 */

/**
 * @typedef getActiveSessions
 * @property {string} id - ID of a customer.
 */

/**
 * @typedef getCustomers
 * @property {Object} [q] - The search query. Mobile number or email ID of a customer.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/** @typedef getPlatformConfig */

/**
 * @typedef getUserGroupById
 * @property {string} groupId - Numeric ID allotted to a User Group
 */

/**
 * @typedef getUserGroups
 * @property {string} [pageNo] - Page number for pagination result
 * @property {string} [pageSize] - Page size for pagination result
 * @property {string} [name] - To seartch for User Groups which contains given
 *   string in their name
 * @property {string} [status] - To get User Groups with given status
 * @property {number} [groupUid] - To get User Groups with given uid
 */

/**
 * @typedef searchUsers
 * @property {string} [q] - The search query. Mobile number, email ID or user ID
 *   of a customer.
 */

/**
 * @typedef unDeleteUser
 * @property {UserPlatformModel.UnDeleteUserRequestSchema} body
 */

/**
 * @typedef updatePlatformConfig
 * @property {UserPlatformModel.PlatformSchema} body
 */

/**
 * @typedef updateUser
 * @property {string} userId - User ID
 * @property {UserPlatformModel.UpdateUserRequestSchema} body
 */

/**
 * @typedef updateUserGroup
 * @property {string} groupId - Numeric ID allotted to a User Group
 * @property {UserPlatformModel.UpdateUserGroupSchema} body
 */

class UserPlatformApplicationValidator {
  /** @returns {archiveUser} */
  static archiveUser() {
    return Joi.object({
      body: UserPlatformModel.ArchiveUserRequestSchema().required(),
    }).required();
  }

  /** @returns {blockOrUnblockUsers} */
  static blockOrUnblockUsers() {
    return Joi.object({
      body: UserPlatformModel.BlockUserRequestSchema().required(),
    }).required();
  }

  /** @returns {createUser} */
  static createUser() {
    return Joi.object({
      body: UserPlatformModel.CreateUserRequestSchema().required(),
    }).required();
  }

  /** @returns {createUserGroup} */
  static createUserGroup() {
    return Joi.object({
      body: UserPlatformModel.CreateUserGroupSchema().required(),
    }).required();
  }

  /** @returns {createUserSession} */
  static createUserSession() {
    return Joi.object({
      body: UserPlatformModel.CreateUserSessionRequestSchema().required(),
    }).required();
  }

  /** @returns {deleteActiveSessions} */
  static deleteActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {deleteSession} */
  static deleteSession() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sessionId: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getActiveSessions} */
  static getActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getCustomers} */
  static getCustomers() {
    return Joi.object({
      q: Joi.any(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {getPlatformConfig} */
  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  /** @returns {getUserGroupById} */
  static getUserGroupById() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {getUserGroups} */
  static getUserGroups() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      groupUid: Joi.number(),
    }).required();
  }

  /** @returns {searchUsers} */
  static searchUsers() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  /** @returns {unDeleteUser} */
  static unDeleteUser() {
    return Joi.object({
      body: UserPlatformModel.UnDeleteUserRequestSchema().required(),
    }).required();
  }

  /** @returns {updatePlatformConfig} */
  static updatePlatformConfig() {
    return Joi.object({
      body: UserPlatformModel.PlatformSchema().required(),
    }).required();
  }

  /** @returns {updateUser} */
  static updateUser() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      body: UserPlatformModel.UpdateUserRequestSchema().required(),
    }).required();
  }

  /** @returns {updateUserGroup} */
  static updateUserGroup() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
      body: UserPlatformModel.UpdateUserGroupSchema().required(),
    }).required();
  }
}

module.exports = UserPlatformApplicationValidator;
