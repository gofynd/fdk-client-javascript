export = User;
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {UserPlatformApplicationValidator.ArchiveUserParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.ArchiveUserSuccess>} - Success response
     * @name archiveUser
     * @summary: archive user
     * @description: archive user
     */
    archiveUser({ body }?: UserPlatformApplicationValidator.ArchiveUserParam): Promise<UserPlatformModel.ArchiveUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.BlockOrUnblockUsersParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.BlockUserSuccess>} - Success response
     * @name blockOrUnblockUsers
     * @summary: Block/Unblock user
     * @description: Block/Unblock user
     */
    blockOrUnblockUsers({ body }?: UserPlatformApplicationValidator.BlockOrUnblockUsersParam): Promise<UserPlatformModel.BlockUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name createUser
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: UserPlatformApplicationValidator.CreateUserParam): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserGroupParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name createUserGroup
     * @summary: Create an User Group
     * @description: Use this API to create new user Group
     */
    createUserGroup({ body }?: UserPlatformApplicationValidator.CreateUserGroupParam): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserSessionParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.CreateUserSessionResponseSchema>} -
     *   Success response
     * @name createUserSession
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: UserPlatformApplicationValidator.CreateUserSessionParam): Promise<UserPlatformModel.CreateUserSessionResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteActiveSessionsParam} arg
     *   - Arg object
     *
     * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
     *   Success response
     * @name deleteActiveSessions
     * @summary: Delete a list of all session for a user
     * @description: Use this API to Delete a list of session of customers who have registered in the application.
     */
    deleteActiveSessions({ id, reason }?: UserPlatformApplicationValidator.DeleteActiveSessionsParam): Promise<UserPlatformModel.SessionDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteSessionParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
     *   Success response
     * @name deleteSession
     * @summary: Delete a session for a user
     * @description: Use this API to Delete a session of customers who have registered in the application.
     */
    deleteSession({ id, sessionId, reason }?: UserPlatformApplicationValidator.DeleteSessionParam): Promise<UserPlatformModel.SessionDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetActiveSessionsParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.SessionListResponseSchema>} - Success response
     * @name getActiveSessions
     * @summary: Get a list of all session with info for a user
     * @description: Use this API to retrieve a list of session with info of customers who have registered in the application.
     */
    getActiveSessions({ id }?: UserPlatformApplicationValidator.GetActiveSessionsParam): Promise<UserPlatformModel.SessionListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetCustomersParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.CustomerListResponseSchema>} - Success response
     * @name getCustomers
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: UserPlatformApplicationValidator.GetCustomersParam): Promise<UserPlatformModel.CustomerListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetPlatformConfigParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({}?: any): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupByIdParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name getUserGroupById
     * @summary: Get an User Group by Id
     * @description: Use this API to get details of an existing user Group
     */
    getUserGroupById({ groupId }?: UserPlatformApplicationValidator.GetUserGroupByIdParam): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupsParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UserGroupListResponseSchema>} -
     *   Success response
     * @name getUserGroups
     * @summary: Get User Groups mathcing criteria
     * @description: Use this API to get User Groups mathing criteria passed in query
     */
    getUserGroups({ pageNo, pageSize, name, status, groupUid }?: UserPlatformApplicationValidator.GetUserGroupsParam): Promise<UserPlatformModel.UserGroupListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.SearchUsersParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UserSearchResponseSchema>} - Success response
     * @name searchUsers
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q }?: UserPlatformApplicationValidator.SearchUsersParam): Promise<UserPlatformModel.UserSearchResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UnDeleteUserParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UnDeleteUserSuccess>} - Success response
     * @name unDeleteUser
     * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
     * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
     */
    unDeleteUser({ body }?: UserPlatformApplicationValidator.UnDeleteUserParam): Promise<UserPlatformModel.UnDeleteUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.UpdatePlatformConfigParam} arg
     *   - Arg object
     *
     * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
     * @name updatePlatformConfig
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: UserPlatformApplicationValidator.UpdatePlatformConfigParam): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name updateUser
     * @summary: Update user
     * @description: Use this API to update user details, Note: Existing emails and phone numbers of user will be replaced directly if phone_numbers or emails field sent in request data.
     */
    updateUser({ userId, body }?: UserPlatformApplicationValidator.UpdateUserParam): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserGroupParam} arg - Arg object
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name updateUserGroup
     * @summary: Update an User Group
     * @description: Use this API to update an existing user Group
     */
    updateUserGroup({ groupId, body }?: UserPlatformApplicationValidator.UpdateUserGroupParam): Promise<UserPlatformModel.UserGroupResponseSchema>;
}
import UserPlatformApplicationValidator = require("./UserPlatformApplicationValidator");
import UserPlatformModel = require("./UserPlatformModel");
