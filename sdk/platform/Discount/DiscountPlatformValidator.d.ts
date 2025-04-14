export = DiscountPlatformValidator;
/**
 * @typedef CancelDownloadJobParam
 * @property {string} id - Unique identifier for the discount
 */
/**
 * @typedef CancelValidationJobParam
 * @property {string} id - Unique identifier for the discount.
 */
/**
 * @typedef CreateDiscountParam
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef DownloadDiscountFileParam
 * @property {string} type - The type of discount file to download, either
 *   'product' or 'inventory'.
 * @property {DiscountPlatformModel.DownloadFileJob} body
 */
/**
 * @typedef GetDiscountParam
 * @property {string} id - Unique identifier for the discount.
 */
/**
 * @typedef GetDiscountsParam
 * @property {string} [view] - Specifies the format in which the discounts are
 *   displayed. Options are 'listing' for a list view or 'calendar' for a
 *   calendar view. Defaults to 'listing'.
 * @property {string} [q] - The search query. This can be a partial or complete
 *   name of a discount.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default is 1.
 * @property {number} [pageSize] - Number of items to retrieve in each page.
 *   Default is 12.
 * @property {boolean} [archived] - Indicates whether to include expired
 *   discounts in the results. Defaults to false.
 * @property {number} [month] - The month for which discounts is requested.
 *   Defaults to the current month if not specified.
 * @property {number} [year] - The year for which discounts is requested.
 *   Defaults to the current year if not specified.
 * @property {string} [type] - Specifies the type of disocunt to list, either
 *   'basic' or 'custom'.
 * @property {string[]} [appIds] - A `application_id` is a unique identifier for
 *   a particular sales channel.
 */
/**
 * @typedef GetDownloadJobParam
 * @property {string} id - Unique identifier for the discount.
 */
/**
 * @typedef GetValidationJobParam
 * @property {string} id - Unique identifier for the discount.
 */
/**
 * @typedef UpdateDiscountParam
 * @property {string} id - Unique identifier for the discount.
 * @property {DiscountPlatformModel.CreateUpdateDiscount} body
 */
/**
 * @typedef UpsertDiscountItemsParam
 * @property {string} id - Unique identifier for the discount.
 * @property {DiscountPlatformModel.BulkDiscount} body
 */
/**
 * @typedef ValidateDiscountFileParam
 * @property {string} [discount] - Unique identifier for the discount.
 * @property {DiscountPlatformModel.FileJobRequestSchema} body
 */
declare class DiscountPlatformValidator {
    /** @returns {CancelDownloadJobParam} */
    static cancelDownloadJob(): CancelDownloadJobParam;
    /** @returns {CancelValidationJobParam} */
    static cancelValidationJob(): CancelValidationJobParam;
    /** @returns {CreateDiscountParam} */
    static createDiscount(): CreateDiscountParam;
    /** @returns {DownloadDiscountFileParam} */
    static downloadDiscountFile(): DownloadDiscountFileParam;
    /** @returns {GetDiscountParam} */
    static getDiscount(): GetDiscountParam;
    /** @returns {GetDiscountsParam} */
    static getDiscounts(): GetDiscountsParam;
    /** @returns {GetDownloadJobParam} */
    static getDownloadJob(): GetDownloadJobParam;
    /** @returns {GetValidationJobParam} */
    static getValidationJob(): GetValidationJobParam;
    /** @returns {UpdateDiscountParam} */
    static updateDiscount(): UpdateDiscountParam;
    /** @returns {UpsertDiscountItemsParam} */
    static upsertDiscountItems(): UpsertDiscountItemsParam;
    /** @returns {ValidateDiscountFileParam} */
    static validateDiscountFile(): ValidateDiscountFileParam;
}
declare namespace DiscountPlatformValidator {
    export { CancelDownloadJobParam, CancelValidationJobParam, CreateDiscountParam, DownloadDiscountFileParam, GetDiscountParam, GetDiscountsParam, GetDownloadJobParam, GetValidationJobParam, UpdateDiscountParam, UpsertDiscountItemsParam, ValidateDiscountFileParam };
}
type CancelDownloadJobParam = {
    /**
     * - Unique identifier for the discount
     */
    id: string;
};
type CancelValidationJobParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
};
type CreateDiscountParam = {
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
type DownloadDiscountFileParam = {
    /**
     * - The type of discount file to download, either
     * 'product' or 'inventory'.
     */
    type: string;
    body: DiscountPlatformModel.DownloadFileJob;
};
type GetDiscountParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
};
type GetDiscountsParam = {
    /**
     * - Specifies the format in which the discounts are
     * displayed. Options are 'listing' for a list view or 'calendar' for a
     * calendar view. Defaults to 'listing'.
     */
    view?: string;
    /**
     * - The search query. This can be a partial or complete
     * name of a discount.
     */
    q?: string;
    /**
     * - The page number to navigate through the given
     * set of results. Default is 1.
     */
    pageNo?: number;
    /**
     * - Number of items to retrieve in each page.
     * Default is 12.
     */
    pageSize?: number;
    /**
     * - Indicates whether to include expired
     * discounts in the results. Defaults to false.
     */
    archived?: boolean;
    /**
     * - The month for which discounts is requested.
     * Defaults to the current month if not specified.
     */
    month?: number;
    /**
     * - The year for which discounts is requested.
     * Defaults to the current year if not specified.
     */
    year?: number;
    /**
     * - Specifies the type of disocunt to list, either
     * 'basic' or 'custom'.
     */
    type?: string;
    /**
     * - A `application_id` is a unique identifier for
     * a particular sales channel.
     */
    appIds?: string[];
};
type GetDownloadJobParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
};
type GetValidationJobParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
};
type UpdateDiscountParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
    body: DiscountPlatformModel.CreateUpdateDiscount;
};
type UpsertDiscountItemsParam = {
    /**
     * - Unique identifier for the discount.
     */
    id: string;
    body: DiscountPlatformModel.BulkDiscount;
};
type ValidateDiscountFileParam = {
    /**
     * - Unique identifier for the discount.
     */
    discount?: string;
    body: DiscountPlatformModel.FileJobRequestSchema;
};
import DiscountPlatformModel = require("./DiscountPlatformModel");
