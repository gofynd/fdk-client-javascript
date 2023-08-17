export = Partner;
declare class Partner {
    constructor(config: any);
    config: any;
    /**
     * @param {PartnerPlatformValidator.DeleteExtensionByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.UninstallExtension>} - Success response
     * @name deleteExtensionById
     * @summary: Uninstall extension
     * @description: Use this API to remove extension from yout company or channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/deleteExtensionById/).
     */
    deleteExtensionById({ extensionId, message, uninstallReasonType }?: PartnerPlatformValidator.DeleteExtensionByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.UninstallExtension>;
    /**
     * @param {PartnerPlatformValidator.GetExtensionByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionCommon>} - Success response
     * @name getExtensionById
     * @summary: Get extension details
     * @description: Use this API to get the details of extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionById/).
     */
    getExtensionById({ extensionId }?: PartnerPlatformValidator.GetExtensionByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.ExtensionCommon>;
    /**
     * @param {PartnerPlatformValidator.GetExtensionsForCompanyParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionList>} - Success response
     * @name getExtensionsForCompany
     * @summary: Get the list of all the extensions
     * @description: Use this API to get the the extensions for the company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionsForCompany/).
     */
    getExtensionsForCompany({ pageSize, tag, currentPage, pageNo, filterBy, query }?: PartnerPlatformValidator.GetExtensionsForCompanyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.ExtensionList>;
    /**
     * @param {PartnerPlatformValidator.GetExtensionsSuggestionsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionSuggestionList>} - Success response
     * @name getExtensionsSuggestions
     * @summary: Get the list of all the extension suggestions
     * @description: Use this API to get the the extensions suggestions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getExtensionsSuggestions/).
     */
    getExtensionsSuggestions({ pageSize }?: PartnerPlatformValidator.GetExtensionsSuggestionsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.ExtensionSuggestionList>;
    /**
     * @param {PartnerPlatformValidator.GetPartnerInvitesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.PartnerRequestList>} - Success response
     * @name getPartnerInvites
     * @summary: Get partner invites
     * @description: Use this API to get pending, accepted and rejected partner invites in platform - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPartnerInvites/).
     */
    getPartnerInvites({ requestStatus, pageSize, pageNo }?: PartnerPlatformValidator.GetPartnerInvitesParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.PartnerRequestList>;
    /**
     * @param {PartnerPlatformValidator.GetPartnerRequestDetailsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.PartnerInviteDetails>} - Success response
     * @name getPartnerRequestDetails
     * @summary: Get partner request details
     * @description: Use this API to get details of pending partner request - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPartnerRequestDetails/).
     */
    getPartnerRequestDetails({ inviteId }?: PartnerPlatformValidator.GetPartnerRequestDetailsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.PartnerInviteDetails>;
    /**
     * @param {PartnerPlatformValidator.GetPrivateExtensionsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionResponse>} - Success response
     * @name getPrivateExtensions
     * @summary: Get the list of private extensions
     * @description: Use this API to get the list of private extensions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPrivateExtensions/).
     */
    getPrivateExtensions({ pageSize, pageNo, query }?: PartnerPlatformValidator.GetPrivateExtensionsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.ExtensionResponse>;
    /**
     * @param {PartnerPlatformValidator.GetPublicExtensionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.PublicExtension>} - Success response
     * @name getPublicExtension
     * @summary: Get details of public extension
     * @description: Use this API to get the details of public extensions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getPublicExtension/).
     */
    getPublicExtension({ extensionId }?: PartnerPlatformValidator.GetPublicExtensionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.PublicExtension>;
    /**
     * @param {PartnerPlatformValidator.ModifyPartnerRequestParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.PartnerInviteDetails>} - Success response
     * @name modifyPartnerRequest
     * @summary: Act on the pending partner request
     * @description: Use this API to approve or reject the pending partner request - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/modifyPartnerRequest/).
     */
    modifyPartnerRequest({ inviteId, body }?: PartnerPlatformValidator.ModifyPartnerRequestParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.PartnerInviteDetails>;
    /**
     * @param {PartnerPlatformValidator.SetupProductsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.SetupProductRes>} - Success response
     * @name setupProducts
     * @summary:
     * @description: Use this API for setup - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/setupProducts/).
     */
    setupProducts({ requestId }?: PartnerPlatformValidator.SetupProductsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.SetupProductRes>;
    /**
     * @param {PartnerPlatformValidator.SubscribeExtensionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.SubscriptionRes>} - Success response
     * @name subscribeExtension
     * @summary: Subscribe for extension plan
     * @description: Use this API to select plan for paid extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/subscribeExtension/).
     */
    subscribeExtension({ entity, extensionId, entityId, body }?: PartnerPlatformValidator.SubscribeExtensionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<PartnerPlatformModel.SubscriptionRes>;
}
import PartnerPlatformValidator = require("./PartnerPlatformValidator");
import PartnerPlatformModel = require("./PartnerPlatformModel");
