export = User;
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {UserPlatformApplicationValidator.ArchiveUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.ArchiveUserSuccess>} - Success response
     * @name archiveUser
     * @summary: archive user
     * @description: archive user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/archiveUser/).
     */
    archiveUser({ body, requestHeaders }?: UserPlatformApplicationValidator.ArchiveUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.ArchiveUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.BlockOrUnblockUsersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BlockUserSuccess>} - Success response
     * @name blockOrUnblockUsers
     * @summary: Block/unblock users.
     * @description: Control user access by blocking or unblocking their accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/blockOrUnblockUsers/).
     */
    blockOrUnblockUsers({ body, requestHeaders }?: UserPlatformApplicationValidator.BlockOrUnblockUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.BlockUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name createUser
     * @summary: Create user.
     * @description: Register and add a new user to the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUser/).
     */
    createUser({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserAttributeDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinitionResponse>} -
     *   Success response
     * @name createUserAttributeDefinition
     * @summary: Create a User Attribute Definition
     * @description: Use this API to areate a new User Attribute Definition - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserAttributeDefinition/).
     */
    createUserAttributeDefinition({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserAttributeDefinitionParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinitionResponse>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserGroupParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name createUserGroup
     * @summary: Create user group.
     * @description: Form and add a new user group. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserGroup/).
     */
    createUserGroup({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserGroupParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserSessionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserSessionResponseSchema>} -
     *   Success response
     * @name createUserSession
     * @summary: Create user session.
     * @description: Establish a session for user interactions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/createUserSession/).
     */
    createUserSession({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserSessionParam, { responseHeaders }?: object): Promise<UserPlatformModel.CreateUserSessionResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteActiveSessionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SessionsDeleteResponseSchema>} -
     *   Success response
     * @name deleteActiveSessions
     * @summary: Delete active sessions.
     * @description: End multiple active user sessions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteActiveSessions/).
     */
    deleteActiveSessions({ id, reason, requestHeaders }?: UserPlatformApplicationValidator.DeleteActiveSessionsParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionsDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteSessionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
     *   Success response
     * @name deleteSession
     * @summary: Delete session.
     * @description: Terminate an active user session. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteSession/).
     */
    deleteSession({ id, sessionId, reason, requestHeaders }?: UserPlatformApplicationValidator.DeleteSessionParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SuccessMessageResponse>} - Success response
     * @name deleteUserAttribute
     * @summary: delete User Attribute
     * @description: delete User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteUserAttribute/).
     */
    deleteUserAttribute({ attributeDefId, userId, requestHeaders }?: UserPlatformApplicationValidator.DeleteUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.SuccessMessageResponse>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteUserAttributeDefinitionByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SuccessMessageResponse>} - Success response
     * @name deleteUserAttributeDefinitionById
     * @summary: Delete User Attribute Definition
     * @description: Delete a user attribute definition by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/deleteUserAttributeDefinitionById/).
     */
    deleteUserAttributeDefinitionById({ attributeDefId, requestHeaders }?: UserPlatformApplicationValidator.DeleteUserAttributeDefinitionByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.SuccessMessageResponse>;
    /**
     * @param {UserPlatformApplicationValidator.GetActiveSessionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SessionListResponseSchema>} - Success response
     * @name getActiveSessions
     * @summary: Get active sessions.
     * @description: Retrieve a list of currently active user sessions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getActiveSessions/).
     */
    getActiveSessions({ id, requestHeaders }?: UserPlatformApplicationValidator.GetActiveSessionsParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetCustomersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CustomerListResponseSchema>} - Success response
     * @name getCustomers
     * @summary: Get customers.
     * @description: Retrieve a list of customer profiles. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getCustomers/).
     */
    getCustomers({ q, pageSize, pageNo, requestHeaders }?: UserPlatformApplicationValidator.GetCustomersParam, { responseHeaders }?: object): Promise<UserPlatformModel.CustomerListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetPlatformConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get platform config.
     * @description: Retrieve configuration settings for the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getPlatformConfig/).
     */
    getPlatformConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
     * @name getUserAttribute
     * @summary: get User Attribute
     * @description: get User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttribute/).
     */
    getUserAttribute({ attributeDefId, userId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeResponse>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
     * @name getUserAttributeById
     * @summary: Get User Attribute
     * @description: Get User Attribute details by id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeById/).
     */
    getUserAttributeById({ attributeId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeResponse>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
     * @name getUserAttributeDefinitionById
     * @summary: Get User Attribute Definition
     * @description: Get a user attribute definition by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeDefinitionById/).
     */
    getUserAttributeDefinitionById({ attributeDefId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeDefinitionByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinition>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getUserAttributeDefinitions
     * @summary: Get User Attribute Definitions
     * @description: Retrieve user attribute definitions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributeDefinitions/).
     */
    getUserAttributeDefinitions({ excludingIds, slug, type, customerEditable, encrypted, pinned, pinOrder, isLocked, name, pageSize, pageNo, requestHeaders, }?: UserPlatformApplicationValidator.GetUserAttributeDefinitionsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributesForUserParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getUserAttributesForUser
     * @summary: Get User Attributes for user
     * @description: Get all user attributes for user - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserAttributesForUser/).
     */
    getUserAttributesForUser({ userId, pageSize, pageNo, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributesForUserParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name getUserGroupById
     * @summary: Get user group by ID.
     * @description: Retrieve a user group by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserGroupById/).
     */
    getUserGroupById({ groupId, requestHeaders }?: UserPlatformApplicationValidator.GetUserGroupByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupListResponseSchema>} -
     *   Success response
     * @name getUserGroups
     * @summary: Get user groups.
     * @description: Retrieve a list of user groups. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/getUserGroups/).
     */
    getUserGroups({ pageNo, pageSize, name, type, status, groupUid, requestHeaders }?: UserPlatformApplicationValidator.GetUserGroupsParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.SearchUsersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserSearchResponseSchema>} - Success response
     * @name searchUsers
     * @summary: Search users.
     * @description: Search and filter user profiles. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/searchUsers/).
     */
    searchUsers({ q, query, requestHeaders }?: UserPlatformApplicationValidator.SearchUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserSearchResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UnDeleteUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UnDeleteUserSuccess>} - Success response
     * @name unDeleteUser
     * @summary: Undelete user.
     * @description: Restore a previously deleted user account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/unDeleteUser/).
     */
    unDeleteUser({ body, requestHeaders }?: UserPlatformApplicationValidator.UnDeleteUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.UnDeleteUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.UpdatePlatformConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
     * @name updatePlatformConfig
     * @summary: Update platform config.
     * @description: Modify and update platform configuration settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updatePlatformConfig/).
     */
    updatePlatformConfig({ body, requestHeaders }?: UserPlatformApplicationValidator.UpdatePlatformConfigParam, { responseHeaders }?: object): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name updateUser
     * @summary: Update user.
     * @description: Modify and update user profile information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUser/).
     */
    updateUser({ userId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeResponse>} - Success response
     * @name updateUserAttribute
     * @summary: Update Or Create User Attribute
     * @description: Update Or Create User Attribute - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserAttribute/).
     */
    updateUserAttribute({ attributeDefId, userId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeResponse>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserAttributeDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
     * @name updateUserAttributeDefinition
     * @summary: Update User Attribute Definition
     * @description: Update an existing user attribute definition. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserAttributeDefinition/).
     */
    updateUserAttributeDefinition({ attributeDefId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserAttributeDefinitionParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinition>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserGroupParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name updateUserGroup
     * @summary: Update user group.
     * @description: Modify and update user group details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserGroup/).
     */
    updateUserGroup({ groupId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserGroupParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserGroupPartiallyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name updateUserGroupPartially
     * @summary: Add or Remove an user from particular user group and update user group details
     * @description: Update user group partially on the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/user/updateUserGroupPartially/).
     */
    updateUserGroupPartially({ groupId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserGroupPartiallyParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
}
import UserPlatformApplicationValidator = require("./UserPlatformApplicationValidator");
import UserPlatformModel = require("./UserPlatformModel");
