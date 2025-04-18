export = Catalog;
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     * @param {CatalogPartnerValidator.PartnerCompanyDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<CatalogPartnerModel.CompaniesSerializer>} - Success response
     * @name partnerCompanyDetails
     * @summary: Fetch partner company details
     * @description: This API helps in fetch details of partner companies with the help of uid. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/catalog/partnerCompanyDetails/).
     */
    partnerCompanyDetails({ body, requestHeaders }?: CatalogPartnerValidator.PartnerCompanyDetailsParam, { responseHeaders }?: object): Promise<CatalogPartnerModel.CompaniesSerializer>;
    /**
     * @param {CatalogPartnerValidator.GetCompaniesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<CatalogPartnerModel.CompanyListSerializer>} - Success response
     * @name getCompanies
     * @summary: Get company profile
     * @description: This API allows to view the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/catalog/getCompanies/).
     */
    getCompanies({ q, stage, requestHeaders }?: CatalogPartnerValidator.GetCompaniesParam, { responseHeaders }?: object): Promise<CatalogPartnerModel.CompanyListSerializer>;
}
import CatalogPartnerModel = require("./CatalogPartnerModel");
