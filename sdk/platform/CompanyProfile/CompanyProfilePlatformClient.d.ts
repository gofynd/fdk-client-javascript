export = CompanyProfile;
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     * @param {CompanyProfilePlatformValidator.CbsOnboardGetParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>}
     *   - Success response
     *
     * @name cbsOnboardGet
     * @summary: Get company profile
     * @description: This API allows to view the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/cbsOnboardGet/).
     */
    cbsOnboardGet({ headers }?: any): Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateBrandParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createBrand
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createBrand/).
     */
    createBrand({ body }?: CompanyProfilePlatformValidator.CreateBrandParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateCompanyBrandMappingParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createCompanyBrandMapping
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createCompanyBrandMapping/).
     */
    createCompanyBrandMapping({ body }?: CompanyProfilePlatformValidator.CreateCompanyBrandMappingParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateLocationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocation
     * @summary: Create a location associated to a company.
     * @description: This API allows to edit a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocation/).
     */
    createLocation({ body }?: CompanyProfilePlatformValidator.CreateLocationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateLocationBulkParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocationBulk
     * @summary: Create a location asscoiated to a company in bulk.
     * @description: This API allows to create a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocationBulk/).
     */
    createLocationBulk({ body }?: CompanyProfilePlatformValidator.CreateLocationBulkParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.EditBrandParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name editBrand
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/editBrand/).
     */
    editBrand({ brandId, body }?: CompanyProfilePlatformValidator.EditBrandParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.GetBrandParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>}
     *   - Success response
     *
     * @name getBrand
     * @summary: Get a single company brand.
     * @description: This API helps to get data associated to a particular company brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrand/).
     */
    getBrand({ brandId }?: CompanyProfilePlatformValidator.GetBrandParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetBrandsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
     *   - Success response
     *
     * @name getBrands
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrands/).
     */
    getBrands({ pageNo, pageSize, q }?: CompanyProfilePlatformValidator.GetBrandsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>;
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
     * @param {CompanyProfilePlatformValidator.GetCompanyMetricsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.MetricsSerializer>} -
     *   Success response
     * @name getCompanyMetrics
     * @summary: Get company metrics
     * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getCompanyMetrics/).
     */
    getCompanyMetrics({ headers }?: any): Promise<CompanyProfilePlatformModel.MetricsSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationDetailParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetLocationSerializer>} -
     *   Success response
     * @name getLocationDetail
     * @summary: Get details of a specific location.
     * @description: This API helps to get data associated to a specific location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationDetail/).
     */
    getLocationDetail({ locationId }?: CompanyProfilePlatformValidator.GetLocationDetailParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.GetLocationSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationTagsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.StoreTagsResponseSchema>}
     *   - Success response
     *
     * @name getLocationTags
     * @summary: Get tags associated with locations for a company.
     * @description: This API fetches all the tags associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationTags/).
     */
    getLocationTags({ headers }?: any): Promise<CompanyProfilePlatformModel.StoreTagsResponseSchema>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.LocationListSerializer>} -
     *   Success response
     * @name getLocations
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocations/).
     */
    getLocations({ storeType, q, stage, pageNo, pageSize, locationIds }?: CompanyProfilePlatformValidator.GetLocationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.LocationListSerializer>;
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
     * @param {CompanyProfilePlatformValidator.UpdateCompanyParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateCompany
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateCompany/).
     */
    updateCompany({ body }?: CompanyProfilePlatformValidator.UpdateCompanyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.UpdateLocationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateLocation
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateLocation/).
     */
    updateLocation({ locationId, body }?: CompanyProfilePlatformValidator.UpdateLocationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
}
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
import CompanyProfilePlatformValidator = require("./CompanyProfilePlatformValidator");
import Paginator = require("../../common/Paginator");
