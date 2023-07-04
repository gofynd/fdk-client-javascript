export = CompanyProfile;
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     * @param {CompanyProfilePlatformValidator.cbsOnboardGet} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>}
     *   - Success response
     *
     * @name cbsOnboardGet
     * @summary: Get company profile
     * @description: This API allows to view the company profile of the seller account.
     */
    cbsOnboardGet({}?: any): Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.createBrand} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createBrand
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     */
    createBrand({ body }?: CompanyProfilePlatformValidator.createBrand): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.createCompanyBrandMapping} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createCompanyBrandMapping
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     */
    createCompanyBrandMapping({ body }?: CompanyProfilePlatformValidator.createCompanyBrandMapping): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.createLocation} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocation
     * @summary: Create a location associated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    createLocation({ body }?: CompanyProfilePlatformValidator.createLocation): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.createLocationBulk} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocationBulk
     * @summary: Create a location asscoiated to a company in bulk.
     * @description: This API allows to create a location associated to a company.
     */
    createLocationBulk({ body }?: CompanyProfilePlatformValidator.createLocationBulk): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.editBrand} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name editBrand
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     */
    editBrand({ brandId, body }?: CompanyProfilePlatformValidator.editBrand): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.getBrand} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>}
     *   - Success response
     *
     * @name getBrand
     * @summary: Get a single company brand.
     * @description: This API helps to get data associated to a particular company brand.
     */
    getBrand({ brandId }?: CompanyProfilePlatformValidator.getBrand): Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.getBrands} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
     *   - Success response
     *
     * @name getBrands
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrands({ pageNo, pageSize, q }?: CompanyProfilePlatformValidator.getBrands): Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @returns {Paginator<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrandsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<CompanyProfilePlatformModel.CompanyBrandListSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.getCompanyMetrics} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.MetricsSerializer>} -
     *   Success response
     * @name getCompanyMetrics
     * @summary: Get company metrics
     * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
     */
    getCompanyMetrics({}?: any): Promise<CompanyProfilePlatformModel.MetricsSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.getLocationDetail} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.GetLocationSerializer>} -
     *   Success response
     * @name getLocationDetail
     * @summary: Get details of a specific location.
     * @description: This API helps to get data associated to a specific location.
     */
    getLocationDetail({ locationId }?: CompanyProfilePlatformValidator.getLocationDetail): Promise<CompanyProfilePlatformModel.GetLocationSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.getLocationTags} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.StoreTagsResponse>} -
     *   Success response
     * @name getLocationTags
     * @summary: Get tags associated with locations for a company.
     * @description: This API fetches all the tags associated to a company.
     */
    getLocationTags({}?: any): Promise<CompanyProfilePlatformModel.StoreTagsResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.getLocations} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.LocationListSerializer>} -
     *   Success response
     * @name getLocations
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocations({ storeType, q, stage, pageNo, pageSize, locationIds, }?: CompanyProfilePlatformValidator.getLocations): Promise<CompanyProfilePlatformModel.LocationListSerializer>;
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
     * @returns {Paginator<CompanyProfilePlatformModel.LocationListSerializer>}
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocationsPaginator({ storeType, q, stage, pageSize, locationIds }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
        locationIds?: number[];
    }): Paginator<CompanyProfilePlatformModel.LocationListSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.updateCompany} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateCompany
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     */
    updateCompany({ body }?: CompanyProfilePlatformValidator.updateCompany): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.updateLocation} arg - Arg object
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateLocation
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    updateLocation({ locationId, body }?: CompanyProfilePlatformValidator.updateLocation): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
}
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
import CompanyProfilePlatformValidator = require("./CompanyProfilePlatformValidator");
import Paginator = require("../../common/Paginator");
