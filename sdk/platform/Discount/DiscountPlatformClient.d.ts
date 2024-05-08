export = Discount;
declare class Discount {
    constructor(config: any);
    config: any;
    /**
     * @param {DiscountPlatformValidator.CancelDownloadJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelDownloadJob
     * @summary: delete discount download job
     * @description: Cancel a discount download job by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelDownloadJob/).
     */
    cancelDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CancelValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.CancelJobResponse>} - Success response
     * @name cancelValidationJob
     * @summary: deletel validation job discount
     * @description: Cancel validation job of a discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/cancelValidationJob/).
     */
    cancelValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.CancelValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.CancelJobResponse>;
    /**
     * @param {DiscountPlatformValidator.CreateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name createDiscount
     * @summary: Create discount
     * @description: Creates a discount. There are additional optional parameters that can be specified in the body of the request when creating a discount - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/createDiscount/).
     */
    createDiscount({ body, requestHeaders }?: DiscountPlatformValidator.CreateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.DownloadDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name downloadDiscountFile
     * @summary: Get discount file
     * @description: Retrieve a discount file by its type, it could be product or inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/downloadDiscountFile/).
     */
    downloadDiscountFile({ type, body, requestHeaders }?: DiscountPlatformValidator.DownloadDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name getDiscount
     * @summary: Get discount
     * @description: Retrieve a single discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscount/).
     */
    getDiscount({ id, requestHeaders }?: DiscountPlatformValidator.GetDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.GetDiscountsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.ListOrCalender>} - Success response
     * @name getDiscounts
     * @summary: List discounts
     * @description: Retrieve a list of discounts. You can also retrieve discounts using filter query parameters. There are additional optional parameters that can be specified in the parameters of the request when retrieving discount - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDiscounts/).
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, requestHeaders, }?: DiscountPlatformValidator.GetDiscountsParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.ListOrCalender>;
    /**
     * @param {DiscountPlatformValidator.GetDownloadJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getDownloadJob
     * @summary: List discount download job
     * @description: Retrieve a discount download job by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getDownloadJob/).
     */
    getDownloadJob({ id, requestHeaders }?: DiscountPlatformValidator.GetDownloadJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.GetValidationJobParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name getValidationJob
     * @summary: List validation job discount
     * @description: Retrieve a validation job of a discount by its id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/getValidationJob/).
     */
    getValidationJob({ id, requestHeaders }?: DiscountPlatformValidator.GetValidationJobParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
    /**
     * @param {DiscountPlatformValidator.UpdateDiscountParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.DiscountJob>} - Success response
     * @name updateDiscount
     * @summary: Update discount
     * @description: Update an existing discount by its id. Discount can only be updated after 5 min from last updated time stamp (modified_on). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/updateDiscount/).
     */
    updateDiscount({ id, body, requestHeaders }?: DiscountPlatformValidator.UpdateDiscountParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.DiscountJob>;
    /**
     * @param {DiscountPlatformValidator.UpsertDiscountItemsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name upsertDiscountItems
     * @summary: Upsert discount items
     * @description: Enables users to create custom discounts in bulk by providing the multiple products in requestBody. It allows for the efficient creation of multiple discounts simultaneously, streamlining the discount management process. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/upsertDiscountItems/).
     */
    upsertDiscountItems({ id, body, requestHeaders }?: DiscountPlatformValidator.UpsertDiscountItemsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {DiscountPlatformValidator.ValidateDiscountFileParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DiscountPlatformModel.FileJobResponse>} - Success response
     * @name validateDiscountFile
     * @summary: Validate discount file
     * @description: Validates the discount file for any discrepancies. like item should be valid etc.. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/discount/validateDiscountFile/).
     */
    validateDiscountFile({ body, discount, requestHeaders }?: DiscountPlatformValidator.ValidateDiscountFileParam, { responseHeaders }?: object): Promise<DiscountPlatformModel.FileJobResponse>;
}
import DiscountPlatformValidator = require("./DiscountPlatformValidator");
import DiscountPlatformModel = require("./DiscountPlatformModel");
