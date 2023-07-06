export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job.
     */
    cancelDownloadJob({ id }?: DiscountPlatformValidator.CancelDownloadJobParam): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job.
     */
    cancelValidationJob({ id }?: DiscountPlatformValidator.CancelValidationJobParam): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    createDiscount({ body }?: DiscountPlatformValidator.CreateDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Validate File.
     * @description: Validate File.
     */
    downloadDiscountFile({ type, body }?: DiscountPlatformValidator.DownloadDiscountFileParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Fetch discount.
     * @description: Fetch discount.
     */
    getDiscount({ id }?: DiscountPlatformValidator.GetDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Fetch discount list.
     * @description: Fetch discount list.
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: DiscountPlatformValidator.GetDiscountsParam): Promise<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: Download File Job.
     * @description: Download File Job.
     */
    getDownloadJob({ id }?: DiscountPlatformValidator.GetDownloadJobParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Validate File Job.
     * @description: Validate File Job.
     */
    getValidationJob({ id }?: DiscountPlatformValidator.GetValidationJobParam): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    updateDiscount({ id, body }?: DiscountPlatformValidator.UpdateDiscountParam): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API.
     */
    upsertDiscountItems({ id, body }?: DiscountPlatformValidator.UpsertDiscountItemsParam): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate File.
     * @description: Validate File.
     */
    validateDiscountFile({ body, discount }?: DiscountPlatformValidator.ValidateDiscountFileParam): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
