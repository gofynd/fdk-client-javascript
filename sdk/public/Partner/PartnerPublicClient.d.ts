export = Partner;
declare class Partner {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPanelExtensionDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {PartnerPublicValidator.GetPanelExtensionDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<PartnerPublicModel.ExtensionUsingSlug>} - Success response
     * @name getPanelExtensionDetails
     * @summary: Get panel extension details
     * @description: Retrieve detailed information about panel extensions in the public server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/partner/getPanelExtensionDetails/).
     */
    getPanelExtensionDetails({ slug, requestHeaders }?: PartnerPublicValidator.GetPanelExtensionDetailsParam, { responseHeaders }?: object): Promise<PartnerPublicModel.ExtensionUsingSlug>;
}
import PartnerPublicValidator = require("sdk/output/javascript/code/sdk/public/Partner/PartnerPublicValidator");
import PartnerPublicModel = require("sdk/output/javascript/code/sdk/public/Partner/PartnerPublicModel");
