export = UserPlatformApplicationValidator;
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
declare class UserPlatformApplicationValidator {
    /** @returns {ArchiveUserParam} */
    static archiveUser(): ArchiveUserParam;
    /** @returns {BlockOrUnblockUsersParam} */
    static blockOrUnblockUsers(): BlockOrUnblockUsersParam;
    /** @returns {CreateUserParam} */
    static createUser(): CreateUserParam;
    /** @returns {CreateUserGroupParam} */
    static createUserGroup(): CreateUserGroupParam;
    /** @returns {CreateUserSessionParam} */
    static createUserSession(): CreateUserSessionParam;
    /** @returns {DeleteActiveSessionsParam} */
    static deleteActiveSessions(): DeleteActiveSessionsParam;
    /** @returns {DeleteSessionParam} */
    static deleteSession(): DeleteSessionParam;
    /** @returns {GetActiveSessionsParam} */
    static getActiveSessions(): GetActiveSessionsParam;
    /** @returns {GetCustomersParam} */
    static getCustomers(): GetCustomersParam;
    /** @returns {GetPlatformConfigParam} */
    static getPlatformConfig(): any;
    /** @returns {GetUserGroupByIdParam} */
    static getUserGroupById(): GetUserGroupByIdParam;
    /** @returns {GetUserGroupsParam} */
    static getUserGroups(): GetUserGroupsParam;
    /** @returns {SearchUsersParam} */
    static searchUsers(): SearchUsersParam;
    /** @returns {UnDeleteUserParam} */
    static unDeleteUser(): UnDeleteUserParam;
    /** @returns {UpdatePlatformConfigParam} */
    static updatePlatformConfig(): UpdatePlatformConfigParam;
    /** @returns {UpdateUserParam} */
    static updateUser(): UpdateUserParam;
    /** @returns {UpdateUserGroupParam} */
    static updateUserGroup(): UpdateUserGroupParam;
}
declare namespace UserPlatformApplicationValidator {
    export { ArchiveUserParam, BlockOrUnblockUsersParam, CreateUserParam, CreateUserGroupParam, CreateUserSessionParam, DeleteActiveSessionsParam, DeleteSessionParam, GetActiveSessionsParam, GetCustomersParam, GetPlatformConfigParam, GetUserGroupByIdParam, GetUserGroupsParam, SearchUsersParam, UnDeleteUserParam, UpdatePlatformConfigParam, UpdateUserParam, UpdateUserGroupParam };
}
type ArchiveUserParam = {
    body: UserPlatformModel.ArchiveUserRequestSchema;
};
type BlockOrUnblockUsersParam = {
    body: UserPlatformModel.BlockUserRequestSchema;
};
type CreateUserParam = {
    body: UserPlatformModel.CreateUserRequestSchema;
};
type CreateUserGroupParam = {
    body: UserPlatformModel.CreateUserGroupSchema;
};
type CreateUserSessionParam = {
    body: UserPlatformModel.CreateUserSessionRequestSchema;
};
type DeleteActiveSessionsParam = {
    /**
     * - ID of a customer.
     */
    id: string;
    /**
     * - Reason to delete sessions.
     */
    reason: string;
};
type DeleteSessionParam = {
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
type GetActiveSessionsParam = {
    /**
     * - ID of a customer.
     */
    id: string;
};
type GetCustomersParam = {
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
type GetUserGroupByIdParam = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
};
type GetUserGroupsParam = {
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
type SearchUsersParam = {
    /**
     * - The search query. Mobile number or email ID of a customer.
     */
    q?: string;
    /**
     * - The search queries. Mobile numbers or email
     * IDs of customers.
     */
    query?: string[];
};
type UnDeleteUserParam = {
    body: UserPlatformModel.UnDeleteUserRequestSchema;
};
type UpdatePlatformConfigParam = {
    body: UserPlatformModel.PlatformSchema;
};
type UpdateUserParam = {
    /**
     * - User ID
     */
    userId: string;
    body: UserPlatformModel.UpdateUserRequestSchema;
};
type UpdateUserGroupParam = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
    body: UserPlatformModel.UpdateUserGroupSchema;
};
type GetPlatformConfigParam = any;
import UserPlatformModel = require("./UserPlatformModel");
