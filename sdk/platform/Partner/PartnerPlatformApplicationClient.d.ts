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
     * @summary: Add proxy path.
     * @description: Create and add a new proxy path. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/addProxyPath/).
     */
    addProxyPath({ extensionId, body, requestHeaders }?: PartnerPlatformApplicationValidator.AddProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.AddProxyResponse>;
    /**
     * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.RemoveProxyResponse>} - Success response
     * @name removeProxyPath
     * @summary: Remove proxy path.
     * @description: Delete a proxy path from the platform. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/removeProxyPath/).
     */
    removeProxyPath({ extensionId, attachedPath, requestHeaders }?: PartnerPlatformApplicationValidator.RemoveProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.RemoveProxyResponse>;
}
import PartnerPlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Partner/PartnerPlatformApplicationValidator");
import PartnerPlatformModel = require("sdk/output/javascript/code/sdk/platform/Partner/PartnerPlatformModel");
