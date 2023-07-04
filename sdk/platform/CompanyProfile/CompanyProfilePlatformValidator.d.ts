export = CompanyProfilePlatformValidator;
/** @typedef cbsOnboardGet */
/**
 * @typedef createBrand
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */
/**
 * @typedef createCompanyBrandMapping
 * @property {CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer} body
 */
/**
 * @typedef createLocation
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */
/**
 * @typedef createLocationBulk
 * @property {CompanyProfilePlatformModel.BulkLocationSerializer} body
 */
/**
 * @typedef editBrand
 * @property {string} brandId - Id of the brand to be viewed.
 * @property {CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer} body
 */
/**
 * @typedef getBrand
 * @property {string} brandId - Id of the brand to be viewed.
 */
/**
 * @typedef getBrands
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 10.
 * @property {string} [q] - Search term for name.
 */
/** @typedef getCompanyMetrics */
/**
 * @typedef getLocationDetail
 * @property {string} locationId - Id of the location which you want to view.
 */
/** @typedef getLocationTags */
/**
 * @typedef getLocations
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
 * @typedef updateCompany
 * @property {CompanyProfilePlatformModel.UpdateCompany} body
 */
/**
 * @typedef updateLocation
 * @property {string} locationId - Id of the location which you want to edit.
 * @property {CompanyProfilePlatformModel.LocationSerializer} body
 */
declare class CompanyProfilePlatformValidator {
}
declare namespace CompanyProfilePlatformValidator {
    export { cbsOnboardGet, createBrand, createCompanyBrandMapping, createLocation, createLocationBulk, editBrand, getBrand, getBrands, getCompanyMetrics, getLocationDetail, getLocationTags, getLocations, updateCompany, updateLocation };
}
/** @returns {cbsOnboardGet} */
declare function cbsOnboardGet(): any;
type cbsOnboardGet = any;
/** @returns {createBrand} */
declare function createBrand(): createBrand;
type createBrand = {
    body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer;
};
/** @returns {createCompanyBrandMapping} */
declare function createCompanyBrandMapping(): createCompanyBrandMapping;
type createCompanyBrandMapping = {
    body: CompanyProfilePlatformModel.CompanyBrandPostRequestSerializer;
};
/** @returns {createLocation} */
declare function createLocation(): createLocation;
type createLocation = {
    body: CompanyProfilePlatformModel.LocationSerializer;
};
/** @returns {createLocationBulk} */
declare function createLocationBulk(): createLocationBulk;
type createLocationBulk = {
    body: CompanyProfilePlatformModel.BulkLocationSerializer;
};
/** @returns {editBrand} */
declare function editBrand(): editBrand;
type editBrand = {
    /**
     * - Id of the brand to be viewed.
     */
    brandId: string;
    body: CompanyProfilePlatformModel.CreateUpdateBrandRequestSerializer;
};
/** @returns {getBrand} */
declare function getBrand(): getBrand;
type getBrand = {
    /**
     * - Id of the brand to be viewed.
     */
    brandId: string;
};
/** @returns {getBrands} */
declare function getBrands(): getBrands;
type getBrands = {
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
/** @returns {getCompanyMetrics} */
declare function getCompanyMetrics(): any;
type getCompanyMetrics = any;
/** @returns {getLocationDetail} */
declare function getLocationDetail(): getLocationDetail;
type getLocationDetail = {
    /**
     * - Id of the location which you want to view.
     */
    locationId: string;
};
/** @returns {getLocationTags} */
declare function getLocationTags(): any;
type getLocationTags = any;
/** @returns {getLocations} */
declare function getLocations(): getLocations;
type getLocations = {
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
/** @returns {updateCompany} */
declare function updateCompany(): updateCompany;
type updateCompany = {
    body: CompanyProfilePlatformModel.UpdateCompany;
};
/** @returns {updateLocation} */
declare function updateLocation(): updateLocation;
type updateLocation = {
    /**
     * - Id of the location which you want to edit.
     */
    locationId: string;
    body: CompanyProfilePlatformModel.LocationSerializer;
};
import CompanyProfilePlatformModel = require("./CompanyProfilePlatformModel");
