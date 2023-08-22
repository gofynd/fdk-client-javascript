export = PartnerPlatformValidator;
/**
 * @typedef DeleteExtensionByIdParam
 * @property {string} extensionId - Extension id
 * @property {string} message - Message while uninstalling extension
 * @property {string} uninstallReasonType - Reason for uninstalling extension
 */
/**
 * @typedef GetExtensionByIdParam
 * @property {string} extensionId - Extension id
 */
/**
 * @typedef GetExtensionsForCompanyParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 * @property {string} [tag] - Tag
 * @property {string} [currentPage] - Tag
 * @property {number} [pageNo] - Current page number
 * @property {string} [filterBy] - Filter by
 * @property {string} [query] - Query
 */
/**
 * @typedef GetExtensionsSuggestionsParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 */
/**
 * @typedef GetPartnerInvitesParam
 * @property {string} [requestStatus] - Status of the request
 * @property {string} [pageSize] - Number of records per page
 * @property {string} [pageNo] - Number of page the user want to fetch
 */
/**
 * @typedef GetPartnerRequestDetailsParam
 * @property {string} inviteId - Invitation id
 */
/**
 * @typedef GetPrivateExtensionsParam
 * @property {number} [pageSize] - Number of records you want to get in single page
 * @property {number} [pageNo] - Number of page
 * @property {Object} [query] - Filter query which we want to pass
 */
/**
 * @typedef GetPublicExtensionParam
 * @property {string} extensionId - Extension id
 */
/**
 * @typedef ModifyPartnerRequestParam
 * @property {string} inviteId - Invitation id
 * @property {PartnerPlatformModel.ModifyPartnerReq} body
 */
/**
 * @typedef SetupProductsParam
 * @property {string} [requestId] - Extrequest id
 */
/**
 * @typedef SubscribeExtensionParam
 * @property {string} entity - Entity
 * @property {string} extensionId - Extension id
 * @property {string} entityId - Entity id
 * @property {PartnerPlatformModel.SubscriptionRequest} body
 */
declare class PartnerPlatformValidator {
    /** @returns {DeleteExtensionByIdParam} */
    static deleteExtensionById(): DeleteExtensionByIdParam;
    /** @returns {GetExtensionByIdParam} */
    static getExtensionById(): GetExtensionByIdParam;
    /** @returns {GetExtensionsForCompanyParam} */
    static getExtensionsForCompany(): GetExtensionsForCompanyParam;
    /** @returns {GetExtensionsSuggestionsParam} */
    static getExtensionsSuggestions(): GetExtensionsSuggestionsParam;
    /** @returns {GetPartnerInvitesParam} */
    static getPartnerInvites(): GetPartnerInvitesParam;
    /** @returns {GetPartnerRequestDetailsParam} */
    static getPartnerRequestDetails(): GetPartnerRequestDetailsParam;
    /** @returns {GetPrivateExtensionsParam} */
    static getPrivateExtensions(): GetPrivateExtensionsParam;
    /** @returns {GetPublicExtensionParam} */
    static getPublicExtension(): GetPublicExtensionParam;
    /** @returns {ModifyPartnerRequestParam} */
    static modifyPartnerRequest(): ModifyPartnerRequestParam;
    /** @returns {SetupProductsParam} */
    static setupProducts(): SetupProductsParam;
    /** @returns {SubscribeExtensionParam} */
    static subscribeExtension(): SubscribeExtensionParam;
}
declare namespace PartnerPlatformValidator {
    export { DeleteExtensionByIdParam, GetExtensionByIdParam, GetExtensionsForCompanyParam, GetExtensionsSuggestionsParam, GetPartnerInvitesParam, GetPartnerRequestDetailsParam, GetPrivateExtensionsParam, GetPublicExtensionParam, ModifyPartnerRequestParam, SetupProductsParam, SubscribeExtensionParam };
}
type DeleteExtensionByIdParam = {
    /**
     * - Extension id
     */
    extensionId: string;
    /**
     * - Message while uninstalling extension
     */
    message: string;
    /**
     * - Reason for uninstalling extension
     */
    uninstallReasonType: string;
};
type GetExtensionByIdParam = {
    /**
     * - Extension id
     */
    extensionId: string;
};
type GetExtensionsForCompanyParam = {
    /**
     * - Number of records you want to get in single page
     */
    pageSize?: number;
    /**
     * - Tag
     */
    tag?: string;
    /**
     * - Tag
     */
    currentPage?: string;
    /**
     * - Current page number
     */
    pageNo?: number;
    /**
     * - Filter by
     */
    filterBy?: string;
    /**
     * - Query
     */
    query?: string;
};
type GetExtensionsSuggestionsParam = {
    /**
     * - Number of records you want to get in single page
     */
    pageSize?: number;
};
type GetPartnerInvitesParam = {
    /**
     * - Status of the request
     */
    requestStatus?: string;
    /**
     * - Number of records per page
     */
    pageSize?: string;
    /**
     * - Number of page the user want to fetch
     */
    pageNo?: string;
};
type GetPartnerRequestDetailsParam = {
    /**
     * - Invitation id
     */
    inviteId: string;
};
type GetPrivateExtensionsParam = {
    /**
     * - Number of records you want to get in single page
     */
    pageSize?: number;
    /**
     * - Number of page
     */
    pageNo?: number;
    /**
     * - Filter query which we want to pass
     */
    query?: any;
};
type GetPublicExtensionParam = {
    /**
     * - Extension id
     */
    extensionId: string;
};
type ModifyPartnerRequestParam = {
    /**
     * - Invitation id
     */
    inviteId: string;
    body: PartnerPlatformModel.ModifyPartnerReq;
};
type SetupProductsParam = {
    /**
     * - Extrequest id
     */
    requestId?: string;
};
type SubscribeExtensionParam = {
    /**
     * - Entity
     */
    entity: string;
    /**
     * - Extension id
     */
    extensionId: string;
    /**
     * - Entity id
     */
    entityId: string;
    body: PartnerPlatformModel.SubscriptionRequest;
};
import PartnerPlatformModel = require("./PartnerPlatformModel");
