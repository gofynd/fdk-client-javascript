export = Partner;
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {PartnerPlatformApplicationValidator.AddProxyPathParam} arg - Arg object
     * @returns {Promise<PartnerPlatformModel.AddProxyResponse>} - Success response
     * @name addProxyPath
     * @summary: Create proxy URL for the external URL
     * @description: Use this API to generate proxy URL for the external URL
     */
    addProxyPath({ extensionId, body }?: PartnerPlatformApplicationValidator.AddProxyPathParam): Promise<PartnerPlatformModel.AddProxyResponse>;
    /**
     * @param {PartnerPlatformApplicationValidator.RemoveProxyPathParam} arg - Arg object
     * @returns {Promise<PartnerPlatformModel.RemoveProxyResponse>} - Success response
     * @name removeProxyPath
     * @summary: Remove proxy URL for the external URL
     * @description: Use this API to remove the proxy URL which is already generated for the external URL
     */
    removeProxyPath({ extensionId, attachedPath }?: PartnerPlatformApplicationValidator.RemoveProxyPathParam): Promise<PartnerPlatformModel.RemoveProxyResponse>;
}
import PartnerPlatformApplicationValidator = require("./PartnerPlatformApplicationValidator");
import PartnerPlatformModel = require("./PartnerPlatformModel");
