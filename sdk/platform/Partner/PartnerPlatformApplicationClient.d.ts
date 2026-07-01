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
     * @description: Use this endpoint to register a proxy for calling an extension's API from your storefront. This enables your storefront to interact with extension APIs seamlessly, helps enhance and extend your storefront's existing functionality using extensions, and simplifies integration by avoiding CORS issues when accessing extension APIs. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/partner/addProxyPath/).
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
     * @description: Remove the proxy that was created earlier for the extension. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/partner/removeProxyPath/).
     */
    removeProxyPath({ extensionId, attachedPath, requestHeaders }?: PartnerPlatformApplicationValidator.RemoveProxyPathParam, { responseHeaders }?: object): Promise<PartnerPlatformModel.ExtensionProxyPathDelete>;
}
import PartnerPlatformApplicationValidator = require("./PartnerPlatformApplicationValidator");
import PartnerPlatformModel = require("./PartnerPlatformModel");
