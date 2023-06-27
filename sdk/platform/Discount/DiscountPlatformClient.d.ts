export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.cancelDownloadJob} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job.
     */
    cancelDownloadJob({ id }?: DiscountPlatformValidator.cancelDownloadJob): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.cancelValidationJob} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job.
     */
    cancelValidationJob({ id }?: DiscountPlatformValidator.cancelValidationJob): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.createDiscount} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    createDiscount({ body }?: DiscountPlatformValidator.createDiscount): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.downloadDiscountFile} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Validate File.
     * @description: Validate File.
     */
    downloadDiscountFile({ type, body }?: DiscountPlatformValidator.downloadDiscountFile): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.getDiscount} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Fetch discount.
     * @description: Fetch discount.
     */
    getDiscount({ id }?: DiscountPlatformValidator.getDiscount): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.getDiscounts} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Fetch discount list.
     * @description: Fetch discount list.
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: DiscountPlatformValidator.getDiscounts): Promise<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {DiscountPlatformValidator.getDownloadJob} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: Download File Job.
     * @description: Download File Job.
     */
    getDownloadJob({ id }?: DiscountPlatformValidator.getDownloadJob): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.getValidationJob} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Validate File Job.
     * @description: Validate File Job.
     */
    getValidationJob({ id }?: DiscountPlatformValidator.getValidationJob): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.updateDiscount} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    updateDiscount({ id, body }?: DiscountPlatformValidator.updateDiscount): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.upsertDiscountItems} arg - Arg object
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API.
     */
    upsertDiscountItems({ id, body }?: DiscountPlatformValidator.upsertDiscountItems): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.validateDiscountFile} arg - Arg object
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate File.
     * @description: Validate File.
     */
    validateDiscountFile({ body, discount }?: DiscountPlatformValidator.validateDiscountFile): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
