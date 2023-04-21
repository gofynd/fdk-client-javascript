const Joi = require("joi");

const UserModel = require("./UserPlatformModel");
class UserValidator {
  static archiveUser() {
    return Joi.object({
      body: UserModel.ArchiveUserRequestSchema().required(),
    }).required();
  }

  static blockOrUnblockUsers() {
    return Joi.object({
      body: UserModel.BlockUserRequestSchema().required(),
    }).required();
  }

  static createUser() {
    return Joi.object({
      body: UserModel.CreateUserRequestSchema().required(),
    }).required();
  }

  static createUserGroup() {
    return Joi.object({
      body: UserModel.CreateUserGroupSchema().required(),
    }).required();
  }

  static createUserSession() {
    return Joi.object({
      body: UserModel.CreateUserSessionRequestSchema().required(),
    }).required();
  }

  static deleteActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  static deleteSession() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      sessionId: Joi.string().allow("").required(),
      reason: Joi.string().allow("").required(),
    }).required();
  }

  static getActiveSessions() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getCustomers() {
    return Joi.object({
      q: Joi.any(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static getPlatformConfig() {
    return Joi.object({}).required();
  }

  static getUserGroupById() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
    }).required();
  }

  static getUserGroups() {
    return Joi.object({
      pageNo: Joi.string().allow(""),
      pageSize: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      groupUid: Joi.number(),
    }).required();
  }

  static searchUsers() {
    return Joi.object({
      q: Joi.string().allow(""),
    }).required();
  }

  static unDeleteUser() {
    return Joi.object({
      body: UserModel.UnDeleteUserRequestSchema().required(),
    }).required();
  }

  static updatePlatformConfig() {
    return Joi.object({
      body: UserModel.PlatformSchema().required(),
    }).required();
  }

  static updateUser() {
    return Joi.object({
      userId: Joi.string().allow("").required(),
      body: UserModel.UpdateUserRequestSchema().required(),
    }).required();
  }

  static updateUserGroup() {
    return Joi.object({
      groupId: Joi.string().allow("").required(),
      body: UserModel.UpdateUserGroupSchema().required(),
    }).required();
  }
}

module.exports = UserValidator;
