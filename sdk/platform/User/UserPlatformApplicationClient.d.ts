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
     * @summary: Archive User
     * @description: Delete user from sales channel, allowing re-registration with the same mobile/email for a new user account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/archiveUser/).
     */
    archiveUser({ body, requestHeaders }?: UserPlatformApplicationValidator.ArchiveUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.ArchiveUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.BlockOrUnblockUsersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BlockUserSuccess>} - Success response
     * @name blockOrUnblockUsers
     * @summary: Block/Unblock Users
     * @description: Manage user access by blocking or unblocking their accounts, restricting login for blocked accounts and allowing login for unblocked accounts. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/blockOrUnblockUsers/).
     */
    blockOrUnblockUsers({ body, requestHeaders }?: UserPlatformApplicationValidator.BlockOrUnblockUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.BlockUserSuccess>;
    /**
     * @param {UserPlatformApplicationValidator.BulkImportStoreFrontUsersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkActionModel>} - Success response
     * @name bulkImportStoreFrontUsers
     * @summary: Bulk import storefront customers using CSV and XLSX files.
     * @description: The API allows bulk import of storefront customers using CSV or XLSX files. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/bulkImportStoreFrontUsers/).
     */
    bulkImportStoreFrontUsers({ body, requestHeaders }?: UserPlatformApplicationValidator.BulkImportStoreFrontUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkActionModel>;
    /**
     * @param {UserPlatformApplicationValidator.CreateBulkExportUsersParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkActionModel>} - Success response
     * @name createBulkExportUsers
     * @summary: Bulk export storefront customers using CSV and XLSX files.
     * @description: This API allows bulk export of storefront users by requesting files in CSV or XLSX format. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/createBulkExportUsers/).
     */
    createBulkExportUsers({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateBulkExportUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkActionModel>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name createUser
     * @summary: Create User
     * @description: Register and add a new user to the sales channel. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/createUser/).
     */
    createUser({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserAttributeDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinitionDetails>} -
     *   Success response
     * @name createUserAttributeDefinition
     * @summary: Create a User Attribute Definition
     * @description: Create a new User Attribute Definition - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/createUserAttributeDefinition/).
     */
    createUserAttributeDefinition({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserAttributeDefinitionParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinitionDetails>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserGroupParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name createUserGroup
     * @summary: Create User Group
     * @description: Form and add a new user group. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/createUserGroup/).
     */
    createUserGroup({ body, requestHeaders }?: UserPlatformApplicationValidator.CreateUserGroupParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.CreateUserSessionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserSessionResponseSchema>} -
     *   Success response
     * @name createUserSession
     * @summary: Create User Session
     * @description: Create session for user interactions - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/createUserSession/).
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
     * @summary: Delete User Active Sessions
     * @description: Terminate all active user sessions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/deleteActiveSessions/).
     */
    deleteActiveSessions({ id, reason, requestHeaders }?: UserPlatformApplicationValidator.DeleteActiveSessionsParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionsDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteSessionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SessionDeleteResponseSchema>} -
     *   Success response
     * @name deleteSession
     * @summary: Delete User Session
     * @description: Terminate an active user session. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/deleteSession/).
     */
    deleteSession({ id, sessionId, reason, requestHeaders }?: UserPlatformApplicationValidator.DeleteSessionParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionDeleteResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SuccessMessage>} - Success response
     * @name deleteUserAttribute
     * @summary: Delete User Attribute
     * @description: Delete User Attribute - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/deleteUserAttribute/).
     */
    deleteUserAttribute({ attributeDefId, userId, requestHeaders }?: UserPlatformApplicationValidator.DeleteUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.SuccessMessage>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteUserAttributeDefinitionByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SuccessMessage>} - Success response
     * @name deleteUserAttributeDefinitionById
     * @summary: Delete User Attribute Definition
     * @description: Delete a user attribute definition by its unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/deleteUserAttributeDefinitionById/).
     */
    deleteUserAttributeDefinitionById({ attributeDefId, requestHeaders }?: UserPlatformApplicationValidator.DeleteUserAttributeDefinitionByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.SuccessMessage>;
    /**
     * @param {UserPlatformApplicationValidator.DeleteUserAttributesInBulkParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SuccessMessage>} - Success response
     * @name deleteUserAttributesInBulk
     * @summary: Delete User Attribute Values in Bulk
     * @description: This request deletes attribute values for a single user based on the provided user attribute definition. Each user attribute definition represents a distinct attribute, and for each definition, a user can have one corresponding value. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/deleteUserAttributesInBulk/).
     */
    deleteUserAttributesInBulk({ userId, body, requestHeaders }?: UserPlatformApplicationValidator.DeleteUserAttributesInBulkParam, { responseHeaders }?: object): Promise<UserPlatformModel.SuccessMessage>;
    /**
     * @param {UserPlatformApplicationValidator.FilterUsersByAttributesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeFiltered>} - Success response
     * @name filterUsersByAttributes
     * @summary: Filter Users by Attribute Conditions
     * @description: Returns a filtered list of users based on user attribute conditions and along with details of definition Ids. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/filterUsersByAttributes/).
     */
    filterUsersByAttributes({ body, requestHeaders }?: UserPlatformApplicationValidator.FilterUsersByAttributesParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeFiltered>;
    /**
     * @param {UserPlatformApplicationValidator.GetActiveSessionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.SessionListResponseSchema>} - Success response
     * @name getActiveSessions
     * @summary: Get User Active Sessions
     * @description: Retrieve a list of currently active user sessions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getActiveSessions/).
     */
    getActiveSessions({ id, requestHeaders }?: UserPlatformApplicationValidator.GetActiveSessionsParam, { responseHeaders }?: object): Promise<UserPlatformModel.SessionListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetBulkExportUsersListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkActionPaginationSchema>} - Success response
     * @name getBulkExportUsersList
     * @summary: Get Bulk User's Export Lists for a specific Application.
     * @description: This API allows fetching the list of bulk user exports for a specific application and company.
     * It supports pagination and filtering based on various parameters.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getBulkExportUsersList/).
     */
    getBulkExportUsersList({ pageNo, pageSize, fileFormat, search, startDate, endDate, status, requestHeaders, }?: UserPlatformApplicationValidator.GetBulkExportUsersListParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkActionPaginationSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetBulkImportUsersListParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkActionPaginationSchema>} - Success response
     * @name getBulkImportUsersList
     * @summary: Get Bulk User's Import Lists for a specific Application.
     * @description: This API allows fetching the list of bulk user imports for a specific application and company.
     * It supports pagination and filtering based on various parameters.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getBulkImportUsersList/).
     */
    getBulkImportUsersList({ pageNo, pageSize, search, startDate, endDate, status, fileFormat, requestHeaders, }?: UserPlatformApplicationValidator.GetBulkImportUsersListParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkActionPaginationSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetCustomersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CustomerListResponseSchema>} - Success response
     * @name getCustomers
     * @summary: Get a List of Users
     * @description: Retrieve details of users registered in the sales channel - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getCustomers/).
     */
    getCustomers({ q, pageSize, pageNo, requestHeaders }?: UserPlatformApplicationValidator.GetCustomersParam, { responseHeaders }?: object): Promise<UserPlatformModel.CustomerListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetPlatformConfigParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.PlatformSchema>} - Success response
     * @name getPlatformConfig
     * @summary: Get Platform Config
     * @description: Retrieve platform sales channel authentication configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getPlatformConfig/).
     */
    getPlatformConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttribute>} - Success response
     * @name getUserAttribute
     * @summary: Get User Attribute
     * @description: Get User Attribute - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserAttribute/).
     */
    getUserAttribute({ attributeDefId, userId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttribute>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttribute>} - Success response
     * @name getUserAttributeById
     * @summary: Get User Attribute
     * @description: Retrieve User Attribute details by ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserAttributeById/).
     */
    getUserAttributeById({ attributeId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttribute>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
     * @name getUserAttributeDefinitionById
     * @summary: Get User Attribute Definition
     * @description: Get a user attribute definition by its unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserAttributeDefinitionById/).
     */
    getUserAttributeDefinitionById({ attributeDefId, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributeDefinitionByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinition>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributeDefinitionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinitionList>} -
     *   Success response
     * @name getUserAttributeDefinitions
     * @summary: Get User Attribute Definitions
     * @description: Retrieve user attribute definitions. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserAttributeDefinitions/).
     */
    getUserAttributeDefinitions({ excludingIds, slug, type, customerEditable, encrypted, pinned, pinOrder, isLocked, name, pageSize, pageNo, requestHeaders, }?: UserPlatformApplicationValidator.GetUserAttributeDefinitionsParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinitionList>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserAttributesForUserParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getUserAttributesForUser
     * @summary: Get All Customer Attributes
     * @description: Retrieve all user attributes for a specific user - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserAttributesForUser/).
     */
    getUserAttributesForUser({ userId, pageSize, pageNo, requestHeaders }?: UserPlatformApplicationValidator.GetUserAttributesForUserParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name getUserGroupById
     * @summary: Get User Group
     * @description: Retrieve a user group by its unique identifier. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserGroupById/).
     */
    getUserGroupById({ groupId, requestHeaders }?: UserPlatformApplicationValidator.GetUserGroupByIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserGroupsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupListResponseSchema>} -
     *   Success response
     * @name getUserGroups
     * @summary: Get User Groups
     * @description: Retrieve a list of user groups. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserGroups/).
     */
    getUserGroups({ pageNo, pageSize, name, type, status, groupUid, requestHeaders }?: UserPlatformApplicationValidator.GetUserGroupsParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupListResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.GetUserTimelineParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.GetUserTimeline>} - Success response
     * @name getUserTimeline
     * @summary: Get Deleted User Timeline
     * @description: Fetches the timeline for the user who has made a data erase request. The timeline will show when the request was raised and when the request will be completed. It will also show if request has been cancelled before completion. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUserTimeline/).
     */
    getUserTimeline({ userId, requestHeaders }?: UserPlatformApplicationValidator.GetUserTimelineParam, { responseHeaders }?: object): Promise<UserPlatformModel.GetUserTimeline>;
    /**
     * @param {UserPlatformApplicationValidator.GetUsersJobByJobIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkActionModel>} - Success response
     * @name getUsersJobByJobId
     * @summary: Retrieve Job Details by Job ID for a Specific Application, Including Both Import and Export Jobs.
     * @description: This endpoint retrieves the details of a specific user's import and export related jobs associated with a given `job_id`, `application_id`, and `company_id`.
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/getUsersJobByJobId/).
     */
    getUsersJobByJobId({ jobId, requestHeaders }?: UserPlatformApplicationValidator.GetUsersJobByJobIdParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkActionModel>;
    /**
     * @param {UserPlatformApplicationValidator.SearchUsersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserSearchResponseSchema>} - Success response
     * @name searchUsers
     * @summary: Search an Existing Users
     * @description: Search and filter users details registered in the sales channel - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/searchUsers/).
     */
    searchUsers({ q, query, requestHeaders }?: UserPlatformApplicationValidator.SearchUsersParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserSearchResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UnDeleteUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UnDeleteUserSuccess>} - Success response
     * @name unDeleteUser
     * @summary: Restore Deleted User
     * @description: Restore a previously deleted user account. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/unDeleteUser/).
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
     * @summary: Update Platform Config
     * @description: Modify and update platform sales channel authentication configuration. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updatePlatformConfig/).
     */
    updatePlatformConfig({ body, requestHeaders }?: UserPlatformApplicationValidator.UpdatePlatformConfigParam, { responseHeaders }?: object): Promise<UserPlatformModel.PlatformSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.CreateUserResponseSchema>} - Success response
     * @name updateUser
     * @summary: Update User Details
     * @description: Modify and update user profile information. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUser/).
     */
    updateUser({ userId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserParam, { responseHeaders }?: object): Promise<UserPlatformModel.CreateUserResponseSchema>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserAttributeParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttribute>} - Success response
     * @name updateUserAttribute
     * @summary: Update Or Create User Attribute
     * @description: Update Or Create User Attribute - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUserAttribute/).
     */
    updateUserAttribute({ attributeDefId, userId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserAttributeParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttribute>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserAttributeDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserAttributeDefinition>} - Success response
     * @name updateUserAttributeDefinition
     * @summary: Update User Attribute Definition
     * @description: Update an existing user attribute definition. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUserAttributeDefinition/).
     */
    updateUserAttributeDefinition({ attributeDefId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserAttributeDefinitionParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserAttributeDefinition>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserAttributesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.BulkUserAttribute>} - Success response
     * @name updateUserAttributes
     * @summary: Create Or Update User Attribute
     * @description: This API is used to create or update multiple user attribute values for the specified user ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUserAttributes/).
     */
    updateUserAttributes({ userId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserAttributesParam, { responseHeaders }?: object): Promise<UserPlatformModel.BulkUserAttribute>;
    /**
     * @param {UserPlatformApplicationValidator.UpdateUserGroupParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<UserPlatformModel.UserGroupResponseSchema>} - Success response
     * @name updateUserGroup
     * @summary: Update User Group
     * @description: Modify and update user group details. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUserGroup/).
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
     * @summary: Modify User Group
     * @description: Update user group partially on the platform. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/user/updateUserGroupPartially/).
     */
    updateUserGroupPartially({ groupId, body, requestHeaders }?: UserPlatformApplicationValidator.UpdateUserGroupPartiallyParam, { responseHeaders }?: object): Promise<UserPlatformModel.UserGroupResponseSchema>;
}
import UserPlatformApplicationValidator = require("./UserPlatformApplicationValidator");
import UserPlatformModel = require("./UserPlatformModel");
