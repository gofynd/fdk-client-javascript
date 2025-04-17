export = CatalogPublicValidator;
/**
 * @typedef GetTaxonomyByLevelParam
 * @property {number} level - The level of taxonomy hierarchy to fetch: 0: Fetch
 *   departments. 1: Fetch L1 categories. 2: Fetch L2 categories. 3: Fetch L3 categories.
 * @property {string} [l0Slug] - Level 0 (Department) slug of the taxonomy to
 *   filter results.
 * @property {string} [l1Slug] - Level 1 (L1 Category) slug of the taxonomy to
 *   filter results.
 * @property {string} [l2Slug] - Level 2 (L2 Category) slug of the taxonomy to
 *   filter results.
 * @property {string} [l3Slug] - Level 3 (L3 Category) slug of the taxonomy to
 *   filter results.
 * @property {number} [limit] - Applied limit on the number of items to be
 *   returned. Default is 5000.
 */
declare class CatalogPublicValidator {
    /** @returns {GetTaxonomyByLevelParam} */
    static getTaxonomyByLevel(): GetTaxonomyByLevelParam;
}
declare namespace CatalogPublicValidator {
    export { GetTaxonomyByLevelParam };
}
type GetTaxonomyByLevelParam = {
    /**
     * - The level of taxonomy hierarchy to fetch: 0: Fetch
     * departments. 1: Fetch L1 categories. 2: Fetch L2 categories. 3: Fetch L3 categories.
     */
    level: number;
    /**
     * - Level 0 (Department) slug of the taxonomy to
     * filter results.
     */
    l0Slug?: string;
    /**
     * - Level 1 (L1 Category) slug of the taxonomy to
     * filter results.
     */
    l1Slug?: string;
    /**
     * - Level 2 (L2 Category) slug of the taxonomy to
     * filter results.
     */
    l2Slug?: string;
    /**
     * - Level 3 (L3 Category) slug of the taxonomy to
     * filter results.
     */
    l3Slug?: string;
    /**
     * - Applied limit on the number of items to be
     * returned. Default is 5000.
     */
    limit?: number;
};
