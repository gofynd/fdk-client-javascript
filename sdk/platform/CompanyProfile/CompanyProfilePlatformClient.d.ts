export = CompanyProfile;
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     * @param {CompanyProfilePlatformValidator.CbsOnboardGetParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>}
     *   - Success response
     *
     * @name cbsOnboardGet
     * @summary: Get company onboard data
     * @description: View the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/cbsOnboardGet/).
     */
    cbsOnboardGet({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.GetCompanyProfileSerializerResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateBrandParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createBrand
     * @summary: Create brand
     * @description: Allows to create a brand associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createBrand/).
     */
    createBrand({ body, requestHeaders }?: CompanyProfilePlatformValidator.CreateBrandParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateCompanyBrandMappingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createCompanyBrandMapping
     * @summary: Create company-brand mapping
     * @description: Establish a mapping between a company and a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createCompanyBrandMapping/).
     */
    createCompanyBrandMapping({ body, requestHeaders }?: CompanyProfilePlatformValidator.CreateCompanyBrandMappingParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocation
     * @summary: Create location
     * @description: Create a new location. Allows to edit a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocation/).
     */
    createLocation({ body, requestHeaders }?: CompanyProfilePlatformValidator.CreateLocationParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.CreateLocationBulkParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name createLocationBulk
     * @summary: Create locations in bulk
     * @description: Allows to create a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/createLocationBulk/).
     */
    createLocationBulk({ body, requestHeaders }?: CompanyProfilePlatformValidator.CreateLocationBulkParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.EditBrandParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name editBrand
     * @summary: Edit brand details
     * @description: Modify details and settings of a specific brand. Allows to edit meta of a brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/editBrand/).
     */
    editBrand({ brandId, body, requestHeaders }?: CompanyProfilePlatformValidator.EditBrandParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.GetBrandParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>}
     *   - Success response
     *
     * @name getBrand
     * @summary: Get brand details
     * @description: Retrieve detailed information about a specific brand. Get data associated to a particular company brand. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrand/).
     */
    getBrand({ brandId, requestHeaders }?: CompanyProfilePlatformValidator.GetBrandParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.GetBrandResponseSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
     *   - Success response
     *
     * @name getBrands
     * @summary: Get brands
     * @description: Retrieve a list of available brands. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getBrands/).
     */
    getBrands({ pageNo, pageSize, q, requestHeaders }?: CompanyProfilePlatformValidator.GetBrandsParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.CompanyBrandListSerializer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @returns {Paginator<CompanyProfilePlatformModel.CompanyBrandListSerializer>}
     * @summary: Get brands
     * @description: Retrieve a list of available brands.
     */
    getBrandsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<CompanyProfilePlatformModel.CompanyBrandListSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetCompanyMetricsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.MetricsSerializer>} -
     *   Success response
     * @name getCompanyMetrics
     * @summary: Get company metrics
     * @description: Allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getCompanyMetrics/).
     */
    getCompanyMetrics({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.MetricsSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationDetailParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.GetLocationSerializer>} -
     *   Success response
     * @name getLocationDetail
     * @summary: Get location detail
     * @description: Retrieve detailed information about a specific location. Get data associated to a specific location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationDetail/).
     */
    getLocationDetail({ locationId, requestHeaders }?: CompanyProfilePlatformValidator.GetLocationDetailParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.GetLocationSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationTagsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.StoreTagsResponseSchema>}
     *   - Success response
     *
     * @name getLocationTags
     * @summary: Get location tags
     * @description: Retrieve all the tags associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocationTags/).
     */
    getLocationTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.StoreTagsResponseSchema>;
    /**
     * @param {CompanyProfilePlatformValidator.GetLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.LocationListSerializer>} -
     *   Success response
     * @name getLocations
     * @summary: Get company locations
     * @description: Retrieve a list of locations associated with the company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/getLocations/).
     */
    getLocations({ storeType, q, stage, pageNo, pageSize, locationIds, types, tags, requestHeaders, }?: CompanyProfilePlatformValidator.GetLocationsParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.LocationListSerializer>;
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
     * @param {string[]} [arg.types] - Helps to get the location list on the
     *   basis of multiple location type.
     * @param {string[]} [arg.tags] - Helps to get the location list on the
     *   basis of multiple location tag.
     * @returns {Paginator<CompanyProfilePlatformModel.LocationListSerializer>}
     * @summary: Get company locations
     * @description: Retrieve a list of locations associated with the company.
     */
    getLocationsPaginator({ storeType, q, stage, pageSize, locationIds, types, tags, }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
        locationIds?: number[];
        types?: string[];
        tags?: string[];
    }): Paginator<CompanyProfilePlatformModel.LocationListSerializer>;
    /**
     * @param {CompanyProfilePlatformValidator.UpdateCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateCompany
     * @summary: Update company information
     * @description: Allows to edit the company profile of the seller account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateCompany/).
     */
    updateCompany({ body, requestHeaders }?: CompanyProfilePlatformValidator.UpdateCompanyParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
    /**
     * @param {CompanyProfilePlatformValidator.UpdateLocationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>} -
     *   Success response
     * @name updateLocation
     * @summary: Update location
     * @description: Allows to edit a location associated to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/companyprofile/updateLocation/).
     */
    updateLocation({ locationId, body, requestHeaders }?: CompanyProfilePlatformValidator.UpdateLocationParam, { responseHeaders }?: object): Promise<CompanyProfilePlatformModel.ProfileSuccessResponse>;
}
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
import CompanyProfilePlatformValidator = require("./CompanyProfilePlatformValidator");
import Paginator = require("../../common/Paginator");
