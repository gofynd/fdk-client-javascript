export = Partner;
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PartnerPlatformApplicationValidator.AddProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionProxyPathCreation>} -
     *   Success response
     * @name addProxyPath
     * @summary: Create extension proxy
     * @description: Extension proxy can be used to call extension API from storefront and make extension API integration seamless. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/addProxyPath/).
     */
    addProxyPath({ extensionId, body, requestHeaders }?: PartnerPlatformApplicationValidator.AddProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.ExtensionProxyPathCreation>;
    /**
     * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<PartnerPlatformModel.ExtensionProxyPathDelete>} -
     *   Success response
     * @name removeProxyPath
     * @summary: Remove extension proxy
     * @description: Remove the proxy which are created earlier for the extension. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/partner/removeProxyPath/).
     */
    removeProxyPath({ extensionId, attachedPath, requestHeaders }?: PartnerPlatformApplicationValidator.RemoveProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.ExtensionProxyPathDelete>;
}
import PartnerPlatformApplicationValidator = require("./PartnerPlatformApplicationValidator");
import PartnerPlatformModel = require("./PartnerPlatformModel");
