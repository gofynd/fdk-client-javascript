export = CompanyProfilePlatformValidator;
/** @typedef CbsOnboardGetParam */
/**
 * @typedef CreateBrandParam
 * @property {CompanyProfilePlatformModel.CreateBrandRequestSchema} body
 */
/**
 * @typedef CreateCompanyBrandMappingParam
 * @property {CompanyProfilePlatformModel.CompanyBrandPostRequestSchema} body
 */
/**
 * @typedef CreateLocationParam
 * @property {CompanyProfilePlatformModel.LocationSchema} body
 */
/**
 * @typedef CreateLocationBulkParam
 * @property {CompanyProfilePlatformModel.BulkLocationSchema} body
 */
/**
 * @typedef EditBrandParam
 * @property {string} brandId - Id of the brand to be viewed.
 * @property {CompanyProfilePlatformModel.UpdateBrandRequestSchema} body
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
 * @property {string[]} [types] - Helps to get the location list on the basis of
 *   multiple location type.
 * @property {string[]} [tags] - Helps to get the location list on the basis of
 *   multiple location tag.
 */
/**
 * @typedef UpdateCompanyParam
 * @property {CompanyProfilePlatformModel.UpdateCompany} body
 */
/**
 * @typedef UpdateLocationParam
 * @property {string} locationId - Id of the location which you want to edit.
 * @property {CompanyProfilePlatformModel.LocationSchema} body
 */
declare class CompanyProfilePlatformValidator {
    /** @returns {CbsOnboardGetParam} */
    static cbsOnboardGet(): any;
    /** @returns {CreateBrandParam} */
    static createBrand(): CreateBrandParam;
    /** @returns {CreateCompanyBrandMappingParam} */
    static createCompanyBrandMapping(): CreateCompanyBrandMappingParam;
    /** @returns {CreateLocationParam} */
    static createLocation(): CreateLocationParam;
    /** @returns {CreateLocationBulkParam} */
    static createLocationBulk(): CreateLocationBulkParam;
    /** @returns {EditBrandParam} */
    static editBrand(): EditBrandParam;
    /** @returns {GetBrandParam} */
    static getBrand(): GetBrandParam;
    /** @returns {GetBrandsParam} */
    static getBrands(): GetBrandsParam;
    /** @returns {GetCompanyMetricsParam} */
    static getCompanyMetrics(): any;
    /** @returns {GetLocationDetailParam} */
    static getLocationDetail(): GetLocationDetailParam;
    /** @returns {GetLocationTagsParam} */
    static getLocationTags(): any;
    /** @returns {GetLocationsParam} */
    static getLocations(): GetLocationsParam;
    /** @returns {UpdateCompanyParam} */
    static updateCompany(): UpdateCompanyParam;
    /** @returns {UpdateLocationParam} */
    static updateLocation(): UpdateLocationParam;
}
declare namespace CompanyProfilePlatformValidator {
    export { CbsOnboardGetParam, CreateBrandParam, CreateCompanyBrandMappingParam, CreateLocationParam, CreateLocationBulkParam, EditBrandParam, GetBrandParam, GetBrandsParam, GetCompanyMetricsParam, GetLocationDetailParam, GetLocationTagsParam, GetLocationsParam, UpdateCompanyParam, UpdateLocationParam };
}
type CreateBrandParam = {
    body: CompanyProfilePlatformModel.CreateBrandRequestSchema;
};
type CreateCompanyBrandMappingParam = {
    body: CompanyProfilePlatformModel.CompanyBrandPostRequestSchema;
};
type CreateLocationParam = {
    body: CompanyProfilePlatformModel.LocationSchema;
};
type CreateLocationBulkParam = {
    body: CompanyProfilePlatformModel.BulkLocationSchema;
};
type EditBrandParam = {
    /**
     * - Id of the brand to be viewed.
     */
    brandId: string;
    body: CompanyProfilePlatformModel.UpdateBrandRequestSchema;
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
type GetLocationDetailParam = {
    /**
     * - Id of the location which you want to view.
     */
    locationId: string;
};
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
    /**
     * - Helps to get the location list on the basis of
     * multiple location type.
     */
    types?: string[];
    /**
     * - Helps to get the location list on the basis of
     * multiple location tag.
     */
    tags?: string[];
};
type UpdateCompanyParam = {
    body: CompanyProfilePlatformModel.UpdateCompany;
};
type UpdateLocationParam = {
    /**
     * - Id of the location which you want to edit.
     */
    locationId: string;
    body: CompanyProfilePlatformModel.LocationSchema;
};
type CbsOnboardGetParam = any;
type GetCompanyMetricsParam = any;
type GetLocationTagsParam = any;
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
