export = UserPlatformApplicationValidator;
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
declare class UserPlatformApplicationValidator {
}
declare namespace UserPlatformApplicationValidator {
    export { archiveUser, blockOrUnblockUsers, createUser, createUserGroup, createUserSession, deleteActiveSessions, deleteSession, getActiveSessions, getCustomers, getPlatformConfig, getUserGroupById, getUserGroups, searchUsers, unDeleteUser, updatePlatformConfig, updateUser, updateUserGroup };
}
/** @returns {archiveUser} */
declare function archiveUser(): archiveUser;
type archiveUser = {
    body: UserPlatformModel.ArchiveUserRequestSchema;
};
/** @returns {blockOrUnblockUsers} */
declare function blockOrUnblockUsers(): blockOrUnblockUsers;
type blockOrUnblockUsers = {
    body: UserPlatformModel.BlockUserRequestSchema;
};
/** @returns {createUser} */
declare function createUser(): createUser;
type createUser = {
    body: UserPlatformModel.CreateUserRequestSchema;
};
/** @returns {createUserGroup} */
declare function createUserGroup(): createUserGroup;
type createUserGroup = {
    body: UserPlatformModel.CreateUserGroupSchema;
};
/** @returns {createUserSession} */
declare function createUserSession(): createUserSession;
type createUserSession = {
    body: UserPlatformModel.CreateUserSessionRequestSchema;
};
/** @returns {deleteActiveSessions} */
declare function deleteActiveSessions(): deleteActiveSessions;
type deleteActiveSessions = {
    /**
     * - ID of a customer.
     */
    id: string;
    /**
     * - Reason to delete sessions.
     */
    reason: string;
};
/** @returns {deleteSession} */
declare function deleteSession(): deleteSession;
type deleteSession = {
    /**
     * - ID of a customer.
     */
    id: string;
    /**
     * - Session ID of a customer.
     */
    sessionId: string;
    /**
     * - Reason for deleting session.
     */
    reason: string;
};
/** @returns {getActiveSessions} */
declare function getActiveSessions(): getActiveSessions;
type getActiveSessions = {
    /**
     * - ID of a customer.
     */
    id: string;
};
/** @returns {getCustomers} */
declare function getCustomers(): getCustomers;
type getCustomers = {
    /**
     * - The search query. Mobile number or email ID of a customer.
     */
    q?: any;
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
/** @returns {getPlatformConfig} */
declare function getPlatformConfig(): any;
type getPlatformConfig = any;
/** @returns {getUserGroupById} */
declare function getUserGroupById(): getUserGroupById;
type getUserGroupById = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
};
/** @returns {getUserGroups} */
declare function getUserGroups(): getUserGroups;
type getUserGroups = {
    /**
     * - Page number for pagination result
     */
    pageNo?: string;
    /**
     * - Page size for pagination result
     */
    pageSize?: string;
    /**
     * - To seartch for User Groups which contains given
     * string in their name
     */
    name?: string;
    /**
     * - To get User Groups with given status
     */
    status?: string;
    /**
     * - To get User Groups with given uid
     */
    groupUid?: number;
};
/** @returns {searchUsers} */
declare function searchUsers(): searchUsers;
type searchUsers = {
    /**
     * - The search query. Mobile number, email ID or user ID
     * of a customer.
     */
    q?: string;
};
/** @returns {unDeleteUser} */
declare function unDeleteUser(): unDeleteUser;
type unDeleteUser = {
    body: UserPlatformModel.UnDeleteUserRequestSchema;
};
/** @returns {updatePlatformConfig} */
declare function updatePlatformConfig(): updatePlatformConfig;
type updatePlatformConfig = {
    body: UserPlatformModel.PlatformSchema;
};
/** @returns {updateUser} */
declare function updateUser(): updateUser;
type updateUser = {
    /**
     * - User ID
     */
    userId: string;
    body: UserPlatformModel.UpdateUserRequestSchema;
};
/** @returns {updateUserGroup} */
declare function updateUserGroup(): updateUserGroup;
type updateUserGroup = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
    body: UserPlatformModel.UpdateUserGroupSchema;
};
import UserPlatformModel = require("./UserPlatformModel");
