export = Catalog;
declare class Catalog {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getTaxonomyByLevel: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {CatalogPublicValidator.GetTaxonomyByLevelParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<CatalogPublicModel.TaxonomyResponseSchema>} - Success response
     * @name getTaxonomyByLevel
     * @summary: Get Taxonomy Information by Level
     * @description: Get Taxonomy Details for a given level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/catalog/getTaxonomyByLevel/).
     */
    getTaxonomyByLevel({ level, l0Slug, l1Slug, l2Slug, l3Slug, limit, requestHeaders }?: CatalogPublicValidator.GetTaxonomyByLevelParam, { responseHeaders }?: object): Promise<CatalogPublicModel.TaxonomyResponseSchema>;
}
import CatalogPublicValidator = require("./CatalogPublicValidator");
import CatalogPublicModel = require("./CatalogPublicModel");
