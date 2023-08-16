export = User;
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ArchiveUserRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ArchiveUserSuccess>} - Success response
     * @summary: archive user
     * @description: archive user
     */
    archiveUser({ body }?: {
        body: ArchiveUserRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ArchiveUserSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlockUserRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BlockUserSuccess>} - Success response
     * @summary: Block/Unblock user
     * @description: Block/Unblock user
     */
    blockOrUnblockUsers({ body }?: {
        body: BlockUserRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BlockUserSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateUserResponseSchema>} - Success response
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: {
        body: CreateUserRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateUserResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserGroupSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserGroupResponseSchema>} - Success response
     * @summary: Create an User Group
     * @description: Use this API to create new user Group
     */
    createUserGroup({ body }?: {
        body: CreateUserGroupSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UserGroupResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserSessionRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateUserSessionResponseSchema>} - Success response
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: {
        body: CreateUserSessionRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateUserSessionResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @param {string} arg.reason - Reason to delete sessions.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SessionDeleteResponseSchema>} - Success response
     * @summary: Delete a list of all session for a user
     * @description: Use this API to Delete a list of session of customers who have registered in the application.
     */
    deleteActiveSessions({ id, reason }?: {
        id: string;
        reason: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SessionDeleteResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @param {string} arg.sessionId - Session ID of a customer.
     * @param {string} arg.reason - Reason for deleting session.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SessionDeleteResponseSchema>} - Success response
     * @summary: Delete a session for a user
     * @description: Use this API to Delete a session of customers who have registered in the application.
     */
    deleteSession({ id, sessionId, reason }?: {
        id: string;
        sessionId: string;
        reason: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SessionDeleteResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SessionListResponseSchema>} - Success response
     * @summary: Get a list of all session with info for a user
     * @description: Use this API to retrieve a list of session with info of customers who have registered in the application.
     */
    getActiveSessions({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SessionListResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Object} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CustomerListResponseSchema>} - Success response
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: {
        q?: any;
        pageSize?: number;
        pageNo?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CustomerListResponseSchema>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PlatformSchema>} - Success response
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({ headers }?: import("../PlatformAPIClient").Options): Promise<PlatformSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupId - Numeric ID allotted to a User Group
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserGroupResponseSchema>} - Success response
     * @summary: Get an User Group by Id
     * @description: Use this API to get details of an existing user Group
     */
    getUserGroupById({ groupId }?: {
        groupId: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UserGroupResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageNo] - Page number for pagination result
     * @param {string} [arg.pageSize] - Page size for pagination result
     * @param {string} [arg.name] - To seartch for User Groups which contains
     *   given string in their name
     * @param {string} [arg.status] - To get User Groups with given status
     * @param {number} [arg.groupUid] - To get User Groups with given uid
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserGroupListResponseSchema>} - Success response
     * @summary: Get User Groups mathcing criteria
     * @description: Use this API to get User Groups mathing criteria passed in query
     */
    getUserGroups({ pageNo, pageSize, name, status, groupUid }?: {
        pageNo?: string;
        pageSize?: string;
        name?: string;
        status?: string;
        groupUid?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UserGroupListResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {any[]} [arg.query] - The search queries. Mobile numbers or email
     *   IDs of customers.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserSearchResponseSchema>} - Success response
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q, query }?: {
        q?: string;
        query?: any[];
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UserSearchResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UnDeleteUserRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UnDeleteUserSuccess>} - Success response
     * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
     * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
     */
    unDeleteUser({ body }?: {
        body: UnDeleteUserRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UnDeleteUserSuccess>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PlatformSchema>} - Success response
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<PlatformSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User ID
     * @param {UpdateUserRequestSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateUserResponseSchema>} - Success response
     * @summary: Update user
     * @description: Use this API to update user details, Note: Existing emails and phone numbers of user will be replaced directly if phone_numbers or emails field sent in request data.
     */
    updateUser({ userId, body }?: {
        userId: string;
        body: UpdateUserRequestSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateUserResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupId - Numeric ID allotted to a User Group
     * @param {UpdateUserGroupSchema} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserGroupResponseSchema>} - Success response
     * @summary: Update an User Group
     * @description: Use this API to update an existing user Group
     */
    updateUserGroup({ groupId, body }?: {
        groupId: string;
        body: UpdateUserGroupSchema;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<UserGroupResponseSchema>;
}
