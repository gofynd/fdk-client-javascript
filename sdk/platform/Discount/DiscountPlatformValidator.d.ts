export = DiscountPlatformValidator;
/**
 * @typedef CancelDownloadJobParam
 * @property {string} id - Id
 */
/**
 * @typedef CancelValidationJobParam
 * @property {string} id - Id
 */
/**
 * @typedef CreateDiscountParam
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef DownloadDiscountFileParam
 * @property {string} type - Type
 * @property {DiscountPlatformModel.DownloadFileJob} body
 */
/**
 * @typedef GetDiscountParam
 * @property {string} id - Unique id.
 */
/**
 * @typedef GetDiscountsParam
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
 * @typedef GetDownloadJobParam
 * @property {string} id - Id
 */
/**
 * @typedef GetValidationJobParam
 * @property {string} id - Id
 */
/**
 * @typedef UpdateDiscountParam
 * @property {string} id - Id
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef UpsertDiscountItemsParam
 * @property {string} id - Job ID of the discount.
 * @property {DiscountPlatformModel.BulkDiscount} body
 */
/**
 * @typedef ValidateDiscountFileParam
 * @property {string} [discount] - Discount
 * @property {DiscountPlatformModel.FileJobRequest} body
 */
declare class DiscountPlatformValidator {
    /** @returns {cancelDownloadJob} */
    static cancelDownloadJob(): cancelDownloadJob;
    /** @returns {cancelValidationJob} */
    static cancelValidationJob(): cancelValidationJob;
    /** @returns {createDiscount} */
    static createDiscount(): createDiscount;
    /** @returns {downloadDiscountFile} */
    static downloadDiscountFile(): downloadDiscountFile;
    /** @returns {getDiscount} */
    static getDiscount(): getDiscount;
    /** @returns {getDiscounts} */
    static getDiscounts(): getDiscounts;
    /** @returns {getDownloadJob} */
    static getDownloadJob(): getDownloadJob;
    /** @returns {getValidationJob} */
    static getValidationJob(): getValidationJob;
    /** @returns {updateDiscount} */
    static updateDiscount(): updateDiscount;
    /** @returns {upsertDiscountItems} */
    static upsertDiscountItems(): upsertDiscountItems;
    /** @returns {validateDiscountFile} */
    static validateDiscountFile(): validateDiscountFile;
}
declare namespace DiscountPlatformValidator {
    export { CancelDownloadJobParam, CancelValidationJobParam, CreateDiscountParam, DownloadDiscountFileParam, GetDiscountParam, GetDiscountsParam, GetDownloadJobParam, GetValidationJobParam, UpdateDiscountParam, UpsertDiscountItemsParam, ValidateDiscountFileParam };
}
type CancelDownloadJobParam = {
    /**
     * - Id
     */
    id: string;
};
type CancelValidationJobParam = {
    /**
     * - Id
     */
    id: string;
};
type CreateDiscountParam = {
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
type DownloadDiscountFileParam = {
    /**
     * - Type
     */
    type: string;
    body: DiscountPlatformModel.DownloadFileJob;
};
type GetDiscountParam = {
    /**
     * - Unique id.
     */
    id: string;
};
type GetDiscountsParam = {
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
type GetDownloadJobParam = {
    /**
     * - Id
     */
    id: string;
};
type GetValidationJobParam = {
    /**
     * - Id
     */
    id: string;
};
type UpdateDiscountParam = {
    /**
     * - Id
     */
    id: string;
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
type UpsertDiscountItemsParam = {
    /**
     * - Job ID of the discount.
     */
    id: string;
    body: DiscountPlatformModel.BulkDiscount;
};
type ValidateDiscountFileParam = {
    /**
     * - Discount
     */
    discount?: string;
    body: DiscountPlatformModel.FileJobRequest;
};
import DiscountPlatformModel = require("./DiscountPlatformModel");
