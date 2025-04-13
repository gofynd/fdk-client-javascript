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
 * @typedef CreateUserAttributeDefinitionParam
 * @property {UserPlatformModel.CreateUserAttributeDefinition} body
 */

/**
 * @typedef CreateUserGroupParam
 * @property {UserPlatformModel.CreateUserGroup} body
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
 * @typedef DeleteUserAttributeParam
 * @property {string} attributeDefId - The unique identifier of the attribute definition.
 * @property {string} userId - The unique identifier of the user.
 */

/**
 * @typedef DeleteUserAttributeDefinitionByIdParam
 * @property {string} attributeDefId - The unique identifier of the attribute
 *   definition to delete.
 */

/**
 * @typedef GetActiveSessionsParam
 * @property {string} id - ID of a customer.
 */

/**
 * @typedef GetCustomersParam
 * @property {string} [q] - The search query. Mobile number or email ID of a customer.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/** @typedef GetPlatformConfigParam */

/**
 * @typedef GetUserAttributeParam
 * @property {string} attributeDefId - The unique identifier of the attribute definition.
 * @property {string} userId - The unique identifier of the user.
 */

/**
 * @typedef GetUserAttributeByIdParam
 * @property {string} attributeId - The unique identifier of the attribute to get.
 */

/**
 * @typedef GetUserAttributeDefinitionByIdParam
 * @property {string} attributeDefId - The unique identifier of the attribute
 *   definition to retrieve.
 */

/**
 * @typedef GetUserAttributeDefinitionsParam
 * @property {string} [excludingIds] - Exclude attribute definitions by Ids
 * @property {string} [slug] - Filter by attribute slug.
 * @property {string} [type] - Filter by attribute type.
 * @property {boolean} [customerEditable] - Filter by customer_editable status.
 * @property {boolean} [encrypted] - Filter by encrypted status.
 * @property {boolean} [pinned] - Filter by pinned status.
 * @property {number} [pinOrder] - Filter by pin order.
 * @property {boolean} [isLocked] - Filter by locked status.
 * @property {string} [name] - Filter by attribute name using a case-insensitive regex.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef GetUserAttributesForUserParam
 * @property {string} userId - The unique identifier of the user to update.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */

/**
 * @typedef GetUserGroupByIdParam
 * @property {string} groupId - Numeric ID allotted to a User Group
 */

/**
 * @typedef GetUserGroupsParam
 * @property {string} [pageNo] - Page number for pagination result
 * @property {string} [pageSize] - Page size for pagination result
 * @property {string} [name] - To search for User Groups which contains given
 *   string in their name
 * @property {string} [type] - To search for User Groups with given type
 * @property {string} [status] - To get User Groups with given status
 * @property {number} [groupUid] - To get User Groups with given uid
 */

/**
 * @typedef GetUsersByByGroupIdParam
 * @property {string} groupId - Numeric ID allotted to a User Group
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
 * @typedef UpdateUserAttributeParam
 * @property {string} attributeDefId - The unique identifier of the attribute
 *   definition to update.
 * @property {string} userId - The unique identifier of the user to update.
 * @property {UserPlatformModel.CreateUserAttributeRequest} body
 */

/**
 * @typedef UpdateUserAttributeDefinitionParam
 * @property {string} attributeDefId - The unique identifier of the attribute
 *   definition to update.
 * @property {UserPlatformModel.CreateUserAttributeDefinition} body
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

  /** @returns {CreateUserAttributeDefinitionParam} */
  static createUserAttributeDefinition() {
    return Joi.object({
      body: UserPlatformModel.CreateUserAttributeDefinition().required(),
    }).required();
  }

  /** @returns {CreateUserGroupParam} */
  static createUserGroup() {
    return Joi.object({
      body: UserPlatformModel.CreateUserGroup().required(),
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

  /** @returns {DeleteUserAttributeParam} */
  static deleteUserAttribute() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),
      userId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {DeleteUserAttributeDefinitionByIdParam} */
  static deleteUserAttributeDefinitionById() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),
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
      q: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {GetPlatformConfigParam} */
  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  /** @returns {GetUserAttributeParam} */
  static getUserAttribute() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),
      userId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserAttributeByIdParam} */
  static getUserAttributeById() {
    return Joi.object({
      attributeId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserAttributeDefinitionByIdParam} */
  static getUserAttributeDefinitionById() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetUserAttributeDefinitionsParam} */
  static getUserAttributeDefinitions() {
    return Joi.object({
      excludingIds: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      customerEditable: Joi.boolean(),
      encrypted: Joi.boolean(),
      pinned: Joi.boolean(),
      pinOrder: Joi.number(),
      isLocked: Joi.boolean(),
      name: Joi.string().allow(""),

      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {GetUserAttributesForUserParam} */
  static getUserAttributesForUser() {
    return Joi.object({
      userId: Joi.string().allow("").required(),

      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
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
      type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      groupUid: Joi.number(),
    }).required();
  }

  /** @returns {GetUsersByByGroupIdParam} */
  static getUsersByByGroupId() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
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

  /** @returns {UpdateUserAttributeParam} */
  static updateUserAttribute() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),
      userId: Joi.string().allow("").required(),

      body: UserPlatformModel.CreateUserAttributeRequest().required(),
    }).required();
  }

  /** @returns {UpdateUserAttributeDefinitionParam} */
  static updateUserAttributeDefinition() {
    return Joi.object({
      attributeDefId: Joi.string().allow("").required(),

      body: UserPlatformModel.CreateUserAttributeDefinition().required(),
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
