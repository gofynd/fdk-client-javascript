export = DiscountPlatformValidator;
/**
 * @typedef cancelDownloadJob
 * @property {string} id - Id
 */
/**
 * @typedef cancelValidationJob
 * @property {string} id - Id
 */
/**
 * @typedef createDiscount
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef downloadDiscountFile
 * @property {string} type - Type
 * @property {DiscountPlatformModel.DownloadFileJob} body
 */
/**
 * @typedef getDiscount
 * @property {string} id - Unique id.
 */
/**
 * @typedef getDiscounts
 * @property {string} [view] - Listing or calender. Default is listing.
 * @property {string} [q] - The search query. This can be a partial or complete
 *   name of a discount.
 * @property {number} [pageNo] - Page number. Default is 1.
 * @property {number} [pageSize] - Page size. Default is 12.
 * @property {boolean} [archived] - Archived. Default is false.
 * @property {number} [month] - Month. Default is current month.
 * @property {number} [year] - Year. Default is current year.
 * @property {string} [type] - Basic or custom.
 * @property {string[]} [appIds] - Application ids.
 */
/**
 * @typedef getDownloadJob
 * @property {string} id - Id
 */
/**
 * @typedef getValidationJob
 * @property {string} id - Id
 */
/**
 * @typedef updateDiscount
 * @property {string} id - Id
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef upsertDiscountItems
 * @property {string} id - Job ID of the discount.
 * @property {DiscountPlatformModel.BulkDiscount} body
 */
/**
 * @typedef validateDiscountFile
 * @property {string} [discount] - Discount
 * @property {DiscountPlatformModel.FileJobRequest} body
 */
declare class DiscountPlatformValidator {
}
declare namespace DiscountPlatformValidator {
    export { cancelDownloadJob, cancelValidationJob, createDiscount, downloadDiscountFile, getDiscount, getDiscounts, getDownloadJob, getValidationJob, updateDiscount, upsertDiscountItems, validateDiscountFile };
}
/** @returns {cancelDownloadJob} */
declare function cancelDownloadJob(): cancelDownloadJob;
type cancelDownloadJob = {
    /**
     * - Id
     */
    id: string;
};
/** @returns {cancelValidationJob} */
declare function cancelValidationJob(): cancelValidationJob;
type cancelValidationJob = {
    /**
     * - Id
     */
    id: string;
};
/** @returns {createDiscount} */
declare function createDiscount(): createDiscount;
type createDiscount = {
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
/** @returns {downloadDiscountFile} */
declare function downloadDiscountFile(): downloadDiscountFile;
type downloadDiscountFile = {
    /**
     * - Type
     */
    type: string;
    body: DiscountPlatformModel.DownloadFileJob;
};
/** @returns {getDiscount} */
declare function getDiscount(): getDiscount;
type getDiscount = {
    /**
     * - Unique id.
     */
    id: string;
};
/** @returns {getDiscounts} */
declare function getDiscounts(): getDiscounts;
type getDiscounts = {
    /**
     * - Listing or calender. Default is listing.
     */
    view?: string;
    /**
     * - The search query. This can be a partial or complete
     * name of a discount.
     */
    q?: string;
    /**
     * - Page number. Default is 1.
     */
    pageNo?: number;
    /**
     * - Page size. Default is 12.
     */
    pageSize?: number;
    /**
     * - Archived. Default is false.
     */
    archived?: boolean;
    /**
     * - Month. Default is current month.
     */
    month?: number;
    /**
     * - Year. Default is current year.
     */
    year?: number;
    /**
     * - Basic or custom.
     */
    type?: string;
    /**
     * - Application ids.
     */
    appIds?: string[];
};
/** @returns {getDownloadJob} */
declare function getDownloadJob(): getDownloadJob;
type getDownloadJob = {
    /**
     * - Id
     */
    id: string;
};
/** @returns {getValidationJob} */
declare function getValidationJob(): getValidationJob;
type getValidationJob = {
    /**
     * - Id
     */
    id: string;
};
/** @returns {updateDiscount} */
declare function updateDiscount(): updateDiscount;
type updateDiscount = {
    /**
     * - Id
     */
    id: string;
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
/** @returns {upsertDiscountItems} */
declare function upsertDiscountItems(): upsertDiscountItems;
type upsertDiscountItems = {
    /**
     * - Job ID of the discount.
     */
    id: string;
    body: DiscountPlatformModel.BulkDiscount;
};
/** @returns {validateDiscountFile} */
declare function validateDiscountFile(): validateDiscountFile;
type validateDiscountFile = {
    /**
     * - Discount
     */
    discount?: string;
    body: DiscountPlatformModel.FileJobRequest;
};
import DiscountPlatformModel = require("./DiscountPlatformModel");
