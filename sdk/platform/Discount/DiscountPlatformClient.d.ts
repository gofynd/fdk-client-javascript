export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
     */
    cancelDownloadJob({ id }?: DiscountPlatformValidator.CancelDownloadJobParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
     */
    cancelValidationJob({ id }?: DiscountPlatformValidator.CancelValidationJobParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create Discount.
     * @description: Create Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
     */
    createDiscount({ body }?: DiscountPlatformValidator.CreateDiscountParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
     */
    downloadDiscountFile({ type, body }?: DiscountPlatformValidator.DownloadDiscountFileParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Fetch discount.
     * @description: Fetch discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
     */
    getDiscount({ id }?: DiscountPlatformValidator.GetDiscountParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: Fetch discount list.
     * @description: Fetch discount list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds }?: DiscountPlatformValidator.GetDiscountsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: Download File Job.
     * @description: Download File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
     */
    getDownloadJob({ id }?: DiscountPlatformValidator.GetDownloadJobParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: Validate File Job.
     * @description: Validate File Job. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
     */
    getValidationJob({ id }?: DiscountPlatformValidator.GetValidationJobParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Create Discount.
     * @description: Create Discount. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
     */
    updateDiscount({ id, body }?: DiscountPlatformValidator.UpdateDiscountParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Create custom discount from bulk.
     * @description: Create custom discounts through API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
     */
    upsertDiscountItems({ id, body }?: DiscountPlatformValidator.UpsertDiscountItemsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate File.
     * @description: Validate File. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
     */
    validateDiscountFile({ body, discount }?: DiscountPlatformValidator.ValidateDiscountFileParam, { headers }?: import("../PlatformAPIClient").Options): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
