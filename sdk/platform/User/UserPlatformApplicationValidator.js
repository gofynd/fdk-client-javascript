const Joi = require("joi");

const UserPlatformModel = require("./UserPlatformModel");

/**
 * @typedef ArchiveUserParam
 * @property {UserPlatformModel.ArchiveUserRequestSchema} body
 */

/**
 * @typedef BlockOrUnblockUsersParam
 * @property {UserPlatformModel.BlockUserRequestSchema} body
 */

/**
 * @typedef CreateUserParam
 * @property {UserPlatformModel.CreateUserRequestSchema} body
 */

/**
 * @typedef CreateUserGroupParam
 * @property {UserPlatformModel.CreateUserGroupSchema} body
 */

/**
 * @typedef CreateUserSessionParam
 * @property {UserPlatformModel.CreateUserSessionRequestSchema} body
 */

/**
 * @typedef DeleteActiveSessionsParam
 * @property {string} id - ID of a customer.
 * @property {string} reason - Reason to delete sessions.
 */

/**
 * @typedef DeleteSessionParam
 * @property {string} id - ID of a customer.
 * @property {string} sessionId - Session ID of a customer.
 * @property {string} reason - Reason for deleting session.
 */

/**
 * @typedef GetActiveSessionsParam
 * @property {string} id - ID of a customer.
 */

/**
 * @typedef GetCustomersParam
 * @property {Object} [q] - The search query. Mobile number or email ID of a customer.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/** @typedef GetPlatformConfigParam */

/**
 * @typedef GetUserGroupByIdParam
 * @property {string} groupId - Numeric ID allotted to a User Group
 */

/**
 * @typedef GetUserGroupsParam
 * @property {string} [pageNo] - Page number for pagination result
 * @property {string} [pageSize] - Page size for pagination result
 * @property {string} [name] - To seartch for User Groups which contains given
 *   string in their name
 * @property {string} [status] - To get User Groups with given status
 * @property {number} [groupUid] - To get User Groups with given uid
 */

/**
 * @typedef SearchUsersParam
 * @property {string} [q] - The search query. Mobile number or email ID of a customer.
 * @property {string[]} [query] - The search queries. Mobile numbers or email
 *   IDs of customers.
 */

/**
 * @typedef UnDeleteUserParam
 * @property {UserPlatformModel.UnDeleteUserRequestSchema} body
 */

/**
 * @typedef UpdatePlatformConfigParam
 * @property {UserPlatformModel.PlatformSchema} body
 */

/**
 * @typedef UpdateUserParam
 * @property {string} userId - User ID
 * @property {UserPlatformModel.UpdateUserRequestSchema} body
 */

/**
 * @typedef UpdateUserGroupParam
 * @property {string} groupId - Numeric ID allotted to a User Group
 * @property {UserPlatformModel.UpdateUserGroupSchema} body
 */

/**
 * @typedef UpdateUserGroupPartiallyParam
 * @property {string} groupId - Numeric ID allotted to a User Group
 * @property {UserPlatformModel.PartialUserGroupUpdateSchema} body
 */

class UserPlatformApplicationValidator {
  /** @returns {ArchiveUserParam} */
  static archiveUser() {
    return Joi.object({
      body: UserPlatformModel.ArchiveUserRequestSchema().required(),
    }).required();
  }

  /** @returns {BlockOrUnblockUsersParam} */
  static blockOrUnblockUsers() {
    return Joi.object({
      body: UserPlatformModel.BlockUserRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateUserParam} */
  static createUser() {
    return Joi.object({
      body: UserPlatformModel.CreateUserRequestSchema().required(),
    }).required();
  }

  /** @returns {CreateUserGroupParam} */
  static createUserGroup() {
    return Joi.object({
      body: UserPlatformModel.CreateUserGroupSchema().required(),
    }).required();
  }

  /** @returns {CreateUserSessionParam} */
  static createUserSession() {
    return Joi.object({
      body: UserPlatformModel.CreateUserSessionRequestSchema().required(),
    }).required();
  }

  /** @returns {DeleteActiveSessionsParam} */
  static deleteActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteSessionParam} */
  static deleteSession() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sessionId: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetActiveSessionsParam} */
  static getActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetCustomersParam} */
  static getCustomers() {
    return Joi.object({
      q: Joi.any(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {GetPlatformConfigParam} */
  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetUserGroupByIdParam} */
  static getUserGroupById() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserGroupsParam} */
  static getUserGroups() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      groupUid: Joi.number(),
    }).required();
  }

  /** @returns {SearchUsersParam} */
  static searchUsers() {
    return Joi.object({
      q: Joi.string().allow(""),
      query: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  /** @returns {UnDeleteUserParam} */
  static unDeleteUser() {
    return Joi.object({
      body: UserPlatformModel.UnDeleteUserRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdatePlatformConfigParam} */
  static updatePlatformConfig() {
    return Joi.object({
      body: UserPlatformModel.PlatformSchema().required(),
    }).required();
  }

  /** @returns {UpdateUserParam} */
  static updateUser() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      body: UserPlatformModel.UpdateUserRequestSchema().required(),
    }).required();
  }

  /** @returns {UpdateUserGroupParam} */
  static updateUserGroup() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
      body: UserPlatformModel.UpdateUserGroupSchema().required(),
    }).required();
  }

  /** @returns {UpdateUserGroupPartiallyParam} */
  static updateUserGroupPartially() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
      body: UserPlatformModel.PartialUserGroupUpdateSchema().required(),
    }).required();
  }
}

module.exports = UserPlatformApplicationValidator;
