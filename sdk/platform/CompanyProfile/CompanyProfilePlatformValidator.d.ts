export = CompanyProfilePlatformValidator;
/** @typedef CbsOnboardGetParam */
/**
 * @typedef CreateBrandParam
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */
/**
 * @typedef CreateCompanyBrandMappingParam
 * @property {CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer} body
 */
/**
 * @typedef CreateLocationParam
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */
/**
 * @typedef CreateLocationBulkParam
 * @property {CompanyProfilePlatformModel.BulkLocationSerializer} body
 */
/**
 * @typedef EditBrandParam
 * @property {string} brandId - Id of the brand to be viewed.
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */
/**
 * @typedef GetBrandParam
 * @property {string} brandId - Id of the brand to be viewed.
 */
/**
 * @typedef GetBrandsParam
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [q] - Search term for name.
 */
/** @typedef GetCompanyMetricsParam */
/**
 * @typedef GetLocationDetailParam
 * @property {string} locationId - Id of the location which you want to view.
 */
/** @typedef GetLocationTagsParam */
/**
 * @typedef GetLocationsParam
 * @property {string} [storeType] - Helps to sort the location list on the basis
 *   of location type.
 * @property {string} [q] - Query that is to be searched.
 * @property {string} [stage] - To filter companies on basis of verified or
 *   unverified companies.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {number[]} [locationIds] - Helps to filter stores on the basis of uids.
 */
/**
 * @typedef UpdateCompanyParam
 * @property {CompanyProfilePlatformModel.UpdateCompany} body
 */
/**
 * @typedef UpdateLocationParam
 * @property {string} locationId - Id of the location which you want to edit.
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */
declare class CompanyProfilePlatformValidator {
    /** @returns {cbsOnboardGet} */
    static cbsOnboardGet(): cbsOnboardGet;
    /** @returns {createBrand} */
    static createBrand(): createBrand;
    /** @returns {createCompanyBrandMapping} */
    static createCompanyBrandMapping(): createCompanyBrandMapping;
    /** @returns {createLocation} */
    static createLocation(): createLocation;
    /** @returns {createLocationBulk} */
    static createLocationBulk(): createLocationBulk;
    /** @returns {editBrand} */
    static editBrand(): editBrand;
    /** @returns {getBrand} */
    static getBrand(): getBrand;
    /** @returns {getBrands} */
    static getBrands(): getBrands;
    /** @returns {getCompanyMetrics} */
    static getCompanyMetrics(): getCompanyMetrics;
    /** @returns {getLocationDetail} */
    static getLocationDetail(): getLocationDetail;
    /** @returns {getLocationTags} */
    static getLocationTags(): getLocationTags;
    /** @returns {getLocations} */
    static getLocations(): getLocations;
    /** @returns {updateCompany} */
    static updateCompany(): updateCompany;
    /** @returns {updateLocation} */
    static updateLocation(): updateLocation;
}
declare namespace CompanyProfilePlatformValidator {
    export { CbsOnboardGetParam, CreateBrandParam, CreateCompanyBrandMappingParam, CreateLocationParam, CreateLocationBulkParam, EditBrandParam, GetBrandParam, GetBrandsParam, GetCompanyMetricsParam, GetLocationDetailParam, GetLocationTagsParam, GetLocationsParam, UpdateCompanyParam, UpdateLocationParam };
}
type CbsOnboardGetParam = any;
type CreateBrandParam = {
    body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer;
};
type CreateCompanyBrandMappingParam = {
    body: CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer;
};
type CreateLocationParam = {
    body: CompanyProfilePlatformModel.LocationSerializer;
};
type CreateLocationBulkParam = {
    body: CompanyProfilePlatformModel.BulkLocationSerializer;
};
type EditBrandParam = {
    /**
     * - Id of the brand to be viewed.
     */
    brandId: string;
    body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer;
};
type GetBrandParam = {
    /**
     * - Id of the brand to be viewed.
     */
    brandId: string;
};
type GetBrandsParam = {
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 10.
     */
    pageSize?: number;
    /**
     * - Search term for name.
     */
    q?: string;
};
type GetCompanyMetricsParam = any;
type GetLocationDetailParam = {
    /**
     * - Id of the location which you want to view.
     */
    locationId: string;
};
type GetLocationTagsParam = any;
type GetLocationsParam = {
    /**
     * - Helps to sort the location list on the basis
     * of location type.
     */
    storeType?: string;
    /**
     * - Query that is to be searched.
     */
    q?: string;
    /**
     * - To filter companies on basis of verified or
     * unverified companies.
     */
    stage?: string;
    /**
     * - The page number to navigate through the given
     * set of results
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 10.
     */
    pageSize?: number;
    /**
     * - Helps to filter stores on the basis of uids.
     */
    locationIds?: number[];
};
type UpdateCompanyParam = {
    body: CompanyProfilePlatformModel.UpdateCompany;
};
type UpdateLocationParam = {
    /**
     * - Id of the location which you want to edit.
     */
    locationId: string;
    body: CompanyProfilePlatformModel.LocationSerializer;
};
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
