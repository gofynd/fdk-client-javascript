export = Partner;
declare class Partner {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getOrganizationList: string;
        getPanelExtensionDetails: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {PartnerPublicValidator.GetOrganizationListParam} arg - Arg object.
     * @returns {Promise<PartnerPublicModel.OrganizationList>} - Success response
     * @name getOrganizationList
     * @summary: Get organization list
     * @description: Use this API to get the list of organization for the current user
     */
    getOrganizationList({}?: any): Promise<PartnerPublicModel.OrganizationList>;
    /**
     * @param {PartnerPublicValidator.GetPanelExtensionDetailsParam} arg - Arg object.
     * @returns {Promise<PartnerPublicModel.ExtensionUsingSlug>} - Success response
     * @name getPanelExtensionDetails
     * @summary: Get extension details
     * @description: Use this API to get extension details
     */
    getPanelExtensionDetails({ slug }?: PartnerPublicValidator.GetPanelExtensionDetailsParam): Promise<PartnerPublicModel.ExtensionUsingSlug>;
}
import PartnerPublicModel = require("./PartnerPublicModel");
import PartnerPublicValidator = require("./PartnerPublicValidator");
