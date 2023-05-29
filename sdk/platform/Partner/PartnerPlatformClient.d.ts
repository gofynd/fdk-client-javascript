export = Partner;
declare class Partner {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {string} arg.message - Message while uninstalling extension
     * @param {string} arg.uninstallReasonType - Reason for uninstalling extension
     * @returns {Promise<UninstallExtension>} - Success response
     * @summary: Uninstall extension
     * @description: Use this API to remove extension from yout company or channel
     */
    deleteExtensionById({ extensionId, message, uninstallReasonType, }?: {
        extensionId: string;
        message: string;
        uninstallReasonType: string;
    }): Promise<UninstallExtension>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @returns {Promise<ExtensionCommon>} - Success response
     * @summary: Get extension details
     * @description: Use this API to get the details of extension
     */
    getExtensionById({ extensionId }?: {
        extensionId: string;
    }): Promise<ExtensionCommon>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of records you want to get in single page
     * @param {string} [arg.tag] - Tag
     * @param {string} [arg.currentPage] - Tag
     * @param {number} [arg.pageNo] - Current page number
     * @param {string} [arg.filterBy] - Filter by
     * @returns {Promise<ExtensionList>} - Success response
     * @summary: Get the list of all the extensions
     * @description: Use this API to get the the extensions for the company
     */
    getExtensionsForCompany({ pageSize, tag, currentPage, pageNo, filterBy, }?: {
        pageSize?: number;
        tag?: string;
        currentPage?: string;
        pageNo?: number;
        filterBy?: string;
    }): Promise<ExtensionList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of records you want to get in single page
     * @returns {Promise<ExtensionSuggestionList>} - Success response
     * @summary: Get the list of all the extension suggestions
     * @description: Use this API to get the the extensions suggestions
     */
    getExtensionsSuggestions({ pageSize }?: {
        pageSize?: number;
    }): Promise<ExtensionSuggestionList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.requestStatus] - Status of the request
     * @param {string} [arg.pageSize] - Number of records per page
     * @param {string} [arg.pageNo] - Number of page the user want to fetch
     * @returns {Promise<PartnerRequestList>} - Success response
     * @summary: Get partner invites
     * @description: Use this API to get pending, accepted and rejected partner invites in platform
     */
    getPartnerInvites({ requestStatus, pageSize, pageNo }?: {
        requestStatus?: string;
        pageSize?: string;
        pageNo?: string;
    }): Promise<PartnerRequestList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.inviteId - Invitation id
     * @returns {Promise<PartnerInviteDetails>} - Success response
     * @summary: Get partner request details
     * @description: Use this API to get details of pending partner request
     */
    getPartnerRequestDetails({ inviteId }?: {
        inviteId: string;
    }): Promise<PartnerInviteDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of records you want to get in single page
     * @param {number} [arg.pageNo] - Number of page
     * @param {string} [arg.query] - Filter query which we want to pass
     * @returns {Promise<ExtensionResponse>} - Success response
     * @summary: Get the list of private extensions
     * @description: Use this API to get the list of private extensions
     */
    getPrivateExtensions({ pageSize, pageNo, query }?: {
        pageSize?: number;
        pageNo?: number;
        query?: string;
    }): Promise<ExtensionResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @returns {Promise<PublicExtension>} - Success response
     * @summary: Get details of public extension
     * @description: Use this API to get the details of public extensions
     */
    getPublicExtension({ extensionId }?: {
        extensionId: string;
    }): Promise<PublicExtension>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.inviteId - Invitation id
     * @param {ModifyPartnerReq} arg.body
     * @returns {Promise<PartnerInviteDetails>} - Success response
     * @summary: Act on the pending partner request
     * @description: Use this API to approve or reject the pending partner request
     */
    modifyPartnerRequest({ inviteId, body }?: {
        inviteId: string;
        body: ModifyPartnerReq;
    }): Promise<PartnerInviteDetails>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.requestId] - Extrequest id
     * @returns {Promise<SetupProductRes>} - Success response
     * @summary:
     * @description: Use this API for setup
     */
    setupProducts({ requestId }?: {
        requestId?: string;
    }): Promise<SetupProductRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entity - Entity
     * @param {string} arg.extensionId - Extension id
     * @param {string} arg.entityId - Entity id
     * @param {SubscriptionRequest} arg.body
     * @returns {Promise<SubscriptionRes>} - Success response
     * @summary: Subscribe for extension plan
     * @description: Use this API to select plan for paid extension
     */
    subscribeExtension({ entity, extensionId, entityId, body }?: {
        entity: string;
        extensionId: string;
        entityId: string;
        body: SubscriptionRequest;
    }): Promise<SubscriptionRes>;
}
