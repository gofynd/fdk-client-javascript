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
 * @typedef BulkImportStoreFrontUsersParam
 * @property {UserPlatformModel.CreateStoreFrontUsersPayload} body
 */
/**
 * @typedef CreateBulkExportUsersParam
 * @property {UserPlatformModel.BulkUserExportSchema} body
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
 * @typedef GetBulkExportUsersListParam
 * @property {string} [pageNo] - Page number for pagination result
 * @property {string} [pageSize] - Page size for pagination result
 * @property {string} [fileFormat] - Filter data based on file format eg csv or xlsx
 * @property {string} [search] - The search queries based on job name.
 * @property {string} [startDate] - Start date
 * @property {string} [endDate] - End date
 * @property {string} [status] - Status of the Import Documents
 */
/**
 * @typedef GetBulkImportUsersListParam
 * @property {string} [pageNo] - Page number for pagination result
 * @property {string} [pageSize] - Page size for pagination result
 * @property {string} [search] - The search queries based on job name.
 * @property {string} [startDate] - Start date
 * @property {string} [endDate] - End date
 * @property {string} [status] - Status of the Import Documents
 * @property {string} [fileFormat] - Filter data based on file format eg csv or xlsx
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
 * @typedef GetUserTimelineParam
 * @property {string} userId - User ID
 */
/**
 * @typedef GetUsersJobByJobIdParam
 * @property {string} jobId - The unique identifier of the job. This is used to
 *   fetch the details of the specific job.
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
 * @property {UserPlatformModel.CreateUserAttribute} body
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
declare class UserPlatformApplicationValidator {
    /** @returns {ArchiveUserParam} */
    static archiveUser(): ArchiveUserParam;
    /** @returns {BlockOrUnblockUsersParam} */
    static blockOrUnblockUsers(): BlockOrUnblockUsersParam;
    /** @returns {BulkImportStoreFrontUsersParam} */
    static bulkImportStoreFrontUsers(): BulkImportStoreFrontUsersParam;
    /** @returns {CreateBulkExportUsersParam} */
    static createBulkExportUsers(): CreateBulkExportUsersParam;
    /** @returns {CreateUserParam} */
    static createUser(): CreateUserParam;
    /** @returns {CreateUserAttributeDefinitionParam} */
    static createUserAttributeDefinition(): CreateUserAttributeDefinitionParam;
    /** @returns {CreateUserGroupParam} */
    static createUserGroup(): CreateUserGroupParam;
    /** @returns {CreateUserSessionParam} */
    static createUserSession(): CreateUserSessionParam;
    /** @returns {DeleteActiveSessionsParam} */
    static deleteActiveSessions(): DeleteActiveSessionsParam;
    /** @returns {DeleteSessionParam} */
    static deleteSession(): DeleteSessionParam;
    /** @returns {DeleteUserAttributeParam} */
    static deleteUserAttribute(): DeleteUserAttributeParam;
    /** @returns {DeleteUserAttributeDefinitionByIdParam} */
    static deleteUserAttributeDefinitionById(): DeleteUserAttributeDefinitionByIdParam;
    /** @returns {GetActiveSessionsParam} */
    static getActiveSessions(): GetActiveSessionsParam;
    /** @returns {GetBulkExportUsersListParam} */
    static getBulkExportUsersList(): GetBulkExportUsersListParam;
    /** @returns {GetBulkImportUsersListParam} */
    static getBulkImportUsersList(): GetBulkImportUsersListParam;
    /** @returns {GetCustomersParam} */
    static getCustomers(): GetCustomersParam;
    /** @returns {GetPlatformConfigParam} */
    static getPlatformConfig(): any;
    /** @returns {GetUserAttributeParam} */
    static getUserAttribute(): GetUserAttributeParam;
    /** @returns {GetUserAttributeByIdParam} */
    static getUserAttributeById(): GetUserAttributeByIdParam;
    /** @returns {GetUserAttributeDefinitionByIdParam} */
    static getUserAttributeDefinitionById(): GetUserAttributeDefinitionByIdParam;
    /** @returns {GetUserAttributeDefinitionsParam} */
    static getUserAttributeDefinitions(): GetUserAttributeDefinitionsParam;
    /** @returns {GetUserAttributesForUserParam} */
    static getUserAttributesForUser(): GetUserAttributesForUserParam;
    /** @returns {GetUserGroupByIdParam} */
    static getUserGroupById(): GetUserGroupByIdParam;
    /** @returns {GetUserGroupsParam} */
    static getUserGroups(): GetUserGroupsParam;
    /** @returns {GetUserTimelineParam} */
    static getUserTimeline(): GetUserTimelineParam;
    /** @returns {GetUsersJobByJobIdParam} */
    static getUsersJobByJobId(): GetUsersJobByJobIdParam;
    /** @returns {SearchUsersParam} */
    static searchUsers(): SearchUsersParam;
    /** @returns {UnDeleteUserParam} */
    static unDeleteUser(): UnDeleteUserParam;
    /** @returns {UpdatePlatformConfigParam} */
    static updatePlatformConfig(): UpdatePlatformConfigParam;
    /** @returns {UpdateUserParam} */
    static updateUser(): UpdateUserParam;
    /** @returns {UpdateUserAttributeParam} */
    static updateUserAttribute(): UpdateUserAttributeParam;
    /** @returns {UpdateUserAttributeDefinitionParam} */
    static updateUserAttributeDefinition(): UpdateUserAttributeDefinitionParam;
    /** @returns {UpdateUserGroupParam} */
    static updateUserGroup(): UpdateUserGroupParam;
    /** @returns {UpdateUserGroupPartiallyParam} */
    static updateUserGroupPartially(): UpdateUserGroupPartiallyParam;
}
declare namespace UserPlatformApplicationValidator {
    export { ArchiveUserParam, BlockOrUnblockUsersParam, BulkImportStoreFrontUsersParam, CreateBulkExportUsersParam, CreateUserParam, CreateUserAttributeDefinitionParam, CreateUserGroupParam, CreateUserSessionParam, DeleteActiveSessionsParam, DeleteSessionParam, DeleteUserAttributeParam, DeleteUserAttributeDefinitionByIdParam, GetActiveSessionsParam, GetBulkExportUsersListParam, GetBulkImportUsersListParam, GetCustomersParam, GetPlatformConfigParam, GetUserAttributeParam, GetUserAttributeByIdParam, GetUserAttributeDefinitionByIdParam, GetUserAttributeDefinitionsParam, GetUserAttributesForUserParam, GetUserGroupByIdParam, GetUserGroupsParam, GetUserTimelineParam, GetUsersJobByJobIdParam, SearchUsersParam, UnDeleteUserParam, UpdatePlatformConfigParam, UpdateUserParam, UpdateUserAttributeParam, UpdateUserAttributeDefinitionParam, UpdateUserGroupParam, UpdateUserGroupPartiallyParam };
}
type ArchiveUserParam = {
    body: UserPlatformModel.ArchiveUserRequestSchema;
};
type BlockOrUnblockUsersParam = {
    body: UserPlatformModel.BlockUserRequestSchema;
};
type BulkImportStoreFrontUsersParam = {
    body: UserPlatformModel.CreateStoreFrontUsersPayload;
};
type CreateBulkExportUsersParam = {
    body: UserPlatformModel.BulkUserExportSchema;
};
type CreateUserParam = {
    body: UserPlatformModel.CreateUserRequestSchema;
};
type CreateUserAttributeDefinitionParam = {
    body: UserPlatformModel.CreateUserAttributeDefinition;
};
type CreateUserGroupParam = {
    body: UserPlatformModel.CreateUserGroup;
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
type DeleteUserAttributeParam = {
    /**
     * - The unique identifier of the attribute definition.
     */
    attributeDefId: string;
    /**
     * - The unique identifier of the user.
     */
    userId: string;
};
type DeleteUserAttributeDefinitionByIdParam = {
    /**
     * - The unique identifier of the attribute
     * definition to delete.
     */
    attributeDefId: string;
};
type GetActiveSessionsParam = {
    /**
     * - ID of a customer.
     */
    id: string;
};
type GetBulkExportUsersListParam = {
    /**
     * - Page number for pagination result
     */
    pageNo?: string;
    /**
     * - Page size for pagination result
     */
    pageSize?: string;
    /**
     * - Filter data based on file format eg csv or xlsx
     */
    fileFormat?: string;
    /**
     * - The search queries based on job name.
     */
    search?: string;
    /**
     * - Start date
     */
    startDate?: string;
    /**
     * - End date
     */
    endDate?: string;
    /**
     * - Status of the Import Documents
     */
    status?: string;
};
type GetBulkImportUsersListParam = {
    /**
     * - Page number for pagination result
     */
    pageNo?: string;
    /**
     * - Page size for pagination result
     */
    pageSize?: string;
    /**
     * - The search queries based on job name.
     */
    search?: string;
    /**
     * - Start date
     */
    startDate?: string;
    /**
     * - End date
     */
    endDate?: string;
    /**
     * - Status of the Import Documents
     */
    status?: string;
    /**
     * - Filter data based on file format eg csv or xlsx
     */
    fileFormat?: string;
};
type GetCustomersParam = {
    /**
     * - The search query. Mobile number or email ID of a customer.
     */
    q?: string;
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
type GetUserAttributeParam = {
    /**
     * - The unique identifier of the attribute definition.
     */
    attributeDefId: string;
    /**
     * - The unique identifier of the user.
     */
    userId: string;
};
type GetUserAttributeByIdParam = {
    /**
     * - The unique identifier of the attribute to get.
     */
    attributeId: string;
};
type GetUserAttributeDefinitionByIdParam = {
    /**
     * - The unique identifier of the attribute
     * definition to retrieve.
     */
    attributeDefId: string;
};
type GetUserAttributeDefinitionsParam = {
    /**
     * - Exclude attribute definitions by Ids
     */
    excludingIds?: string;
    /**
     * - Filter by attribute slug.
     */
    slug?: string;
    /**
     * - Filter by attribute type.
     */
    type?: string;
    /**
     * - Filter by customer_editable status.
     */
    customerEditable?: boolean;
    /**
     * - Filter by encrypted status.
     */
    encrypted?: boolean;
    /**
     * - Filter by pinned status.
     */
    pinned?: boolean;
    /**
     * - Filter by pin order.
     */
    pinOrder?: number;
    /**
     * - Filter by locked status.
     */
    isLocked?: boolean;
    /**
     * - Filter by attribute name using a case-insensitive regex.
     */
    name?: string;
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
type GetUserAttributesForUserParam = {
    /**
     * - The unique identifier of the user to update.
     */
    userId: string;
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
     * - To search for User Groups which contains given
     * string in their name
     */
    name?: string;
    /**
     * - To search for User Groups with given type
     */
    type?: string;
    /**
     * - To get User Groups with given status
     */
    status?: string;
    /**
     * - To get User Groups with given uid
     */
    groupUid?: number;
};
type GetUserTimelineParam = {
    /**
     * - User ID
     */
    userId: string;
};
type GetUsersJobByJobIdParam = {
    /**
     * - The unique identifier of the job. This is used to
     * fetch the details of the specific job.
     */
    jobId: string;
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
type UpdateUserAttributeParam = {
    /**
     * - The unique identifier of the attribute
     * definition to update.
     */
    attributeDefId: string;
    /**
     * - The unique identifier of the user to update.
     */
    userId: string;
    body: UserPlatformModel.CreateUserAttribute;
};
type UpdateUserAttributeDefinitionParam = {
    /**
     * - The unique identifier of the attribute
     * definition to update.
     */
    attributeDefId: string;
    body: UserPlatformModel.CreateUserAttributeDefinition;
};
type UpdateUserGroupParam = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
    body: UserPlatformModel.UpdateUserGroupSchema;
};
type UpdateUserGroupPartiallyParam = {
    /**
     * - Numeric ID allotted to a User Group
     */
    groupId: string;
    body: UserPlatformModel.PartialUserGroupUpdateSchema;
};
type GetPlatformConfigParam = any;
import UserPlatformModel = require("./UserPlatformModel");
