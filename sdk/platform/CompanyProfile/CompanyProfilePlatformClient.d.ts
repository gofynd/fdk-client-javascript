export = CompanyProfile;
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetCompanyProfileSerializerResponse>} - Success response
     * @summary: Get company profile
     * @description: This API allows to view the company profile of the seller account.
     */
    cbsOnboardGet({}?: any): Promise<GetCompanyProfileSerializerResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     */
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CompanyBrandPostRequestSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     */
    createCompanyBrandMapping({ body }?: {
        body: CompanyBrandPostRequestSerializer;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {LocationSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Create a location associated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    createLocation({ body }?: {
        body: LocationSerializer;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkLocationSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Create a location asscoiated to a company in bulk.
     * @description: This API allows to create a location associated to a company.
     */
    createLocationBulk({ body }?: {
        body: BulkLocationSerializer;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     */
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @returns {Promise<GetBrandResponseSerializer>} - Success response
     * @summary: Get a single company brand.
     * @description: This API helps to get data associated to a particular company brand.
     */
    getBrand({ brandId }?: {
        brandId: string;
    }): Promise<GetBrandResponseSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @returns {Promise<CompanyBrandListSerializer>} - Success response
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrands({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<CompanyBrandListSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrandsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<MetricsSerializer>} - Success response
     * @summary: Get company metrics
     * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
     */
    getCompanyMetrics({}?: any): Promise<MetricsSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.locationId - Id of the location which you want to view.
     * @returns {Promise<GetLocationSerializer>} - Success response
     * @summary: Get details of a specific location.
     * @description: This API helps to get data associated to a specific location.
     */
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): Promise<GetLocationSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {number[]} [arg.locationIds] - Helps to filter stores on the basis of uids.
     * @returns {Promise<LocationListSerializer>} - Success response
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocations({ storeType, q, stage, pageNo, pageSize, locationIds, }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
        locationIds?: number[];
    }): Promise<LocationListSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {number[]} [arg.locationIds] - Helps to filter stores on the basis of uids.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocationsPaginator({ storeType, q, stage, pageSize, locationIds }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
        locationIds?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateCompany} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     */
    updateCompany({ body }?: {
        body: UpdateCompany;
    }): Promise<ProfileSuccessResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     * @returns {Promise<ProfileSuccessResponse>} - Success response
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): Promise<ProfileSuccessResponse>;
}
import Paginator = require("../../common/Paginator");
