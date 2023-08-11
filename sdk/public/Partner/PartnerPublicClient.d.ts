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
     * @returns {Promise<PartnerPublicModel.ExtensionUsingSlug>} - Success response
     * @name getPanelExtensionDetails
     * @summary: Get extension details
     * @description: Use this API to get extension details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/partner/getPanelExtensionDetails/).
     */
    getPanelExtensionDetails({ slug }?: PartnerPublicValidator.GetPanelExtensionDetailsParam): Promise<PartnerPublicModel.ExtensionUsingSlug>;
}
import PartnerPublicValidator = require("./PartnerPublicValidator");
import PartnerPublicModel = require("./PartnerPublicModel");
