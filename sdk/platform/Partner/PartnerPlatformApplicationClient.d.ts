export = Partner;
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PartnerPlatformApplicationValidator.AddProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.AddProxyResponse>} - Success response
     * @name addProxyPath
     * @summary: Create proxy URL for the external URL
     * @description: Use this API to generate proxy URL for the external URL - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/addProxyPath/).
     */
    addProxyPath({ extensionId, body, requestHeaders }?: PartnerPlatformApplicationValidator.AddProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.AddProxyResponse>;
    /**
     * @param {PartnerPlatformApplicationValidator.GetProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.getProxyPathRes>} - Success response
     * @name getProxyPath
     * @summary: Proxy
     * @description: Use this API to get proxy url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getProxyPath/).
     */
    getProxyPath({ extensionId, requestHeaders }?: PartnerPlatformApplicationValidator.GetProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.getProxyPathRes>;
    /**
     * @param {PartnerPlatformApplicationValidator.GetProxyPathAttachedPathParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.AddProxyResponse>} - Success response
     * @name getProxyPathAttachedPath
     * @summary: Proxy
     * @description: Use this API to get proxy url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/getProxyPathAttachedPath/).
     */
    getProxyPathAttachedPath({ extensionId, attachedPath, requestHeaders }?: PartnerPlatformApplicationValidator.GetProxyPathAttachedPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.AddProxyResponse>;
    /**
     * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.RemoveProxyResponse>} - Success response
     * @name removeProxyPath
     * @summary: Remove proxy URL for the external URL
     * @description: Use this API to remove the proxy URL which is already generated for the external URL - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/removeProxyPath/).
     */
    removeProxyPath({ extensionId, attachedPath, requestHeaders }?: PartnerPlatformApplicationValidator.RemoveProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.RemoveProxyResponse>;
}
import PartnerPlatformApplicationValidator = require("./PartnerPlatformApplicationValidator");
import PartnerPlatformModel = require("./PartnerPlatformModel");
