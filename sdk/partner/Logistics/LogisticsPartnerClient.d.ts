export = Logistics;
declare class Logistics {
    constructor(config: any);
    config: any;
    /**
     * @param {LogisticsPartnerValidator.SampleFileServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponseItemData>}
     *   - Success response
     *
     * @name sampleFileServiceability
     * @summary: Sample File Download
     * @description: Sample File Download - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/sampleFileServiceability/).
     */
    sampleFileServiceability({ body, requestHeaders }?: LogisticsPartnerValidator.SampleFileServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponseItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponse>}
     *   - Success response
     *
     * @name getSampleFileServiceabilityStatus
     * @summary: Get Serviceability TAT sample files generator status
     * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getSampleFileServiceabilityStatus/).
     */
    getSampleFileServiceabilityStatus({ pageNo, pageSize, batchId, requestHeaders }?: LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponse>;
    /**
     * @param {LogisticsPartnerValidator.BulkTatParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResponseItemData>} -
     *   Success response
     * @name bulkTat
     * @summary: Region TAT Import or Export
     * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkTat/).
     */
    bulkTat({ extensionId, schemeId, body, requestHeaders }?: LogisticsPartnerValidator.BulkTatParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResponseItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetBulkTatParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResponse>} - Success response
     * @name getBulkTat
     * @summary: Get region tat bulk history
     * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkTat/).
     */
    getBulkTat({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: LogisticsPartnerValidator.GetBulkTatParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResponse>;
    /**
     * @param {LogisticsPartnerValidator.BulkServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResponseItemData>} -
     *   Success response
     * @name bulkServiceability
     * @summary: Serviceability Import or Export
     * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkServiceability/).
     */
    bulkServiceability({ extensionId, schemeId, body, requestHeaders }?: LogisticsPartnerValidator.BulkServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResponseItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetBulkServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResponse>} - Success response
     * @name getBulkServiceability
     * @summary: Get Region Serviceability Bulk History
     * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkServiceability/).
     */
    getBulkServiceability({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: LogisticsPartnerValidator.GetBulkServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResponse>;
    /**
     * @param {LogisticsPartnerValidator.CreateCourierPartnerAccountParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierAccount>} - Success response
     * @name createCourierPartnerAccount
     * @summary: Creation of Courier Account
     * @description: This API Creates a new Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerAccount/).
     */
    createCourierPartnerAccount({ companyId, body, requestHeaders }?: LogisticsPartnerValidator.CreateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierAccount>;
    /**
     * @param {LogisticsPartnerValidator.GetCourierPartnerAccountsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResponse>}
     *   - Success response
     *
     * @name getCourierPartnerAccounts
     * @summary: Getting Courier Account list of a company.
     * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccounts/).
     */
    getCourierPartnerAccounts({ companyId, pageNo, pageSize, stage, paymentMode, transportType, requestHeaders, }?: LogisticsPartnerValidator.GetCourierPartnerAccountsParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResponse>;
    /**
     * @param {LogisticsPartnerValidator.UpdateCourierPartnerAccountParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierAccountResponse>} - Success response
     * @name updateCourierPartnerAccount
     * @summary: Update Courier Account in database.
     * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ companyId, accountId, body, requestHeaders }?: LogisticsPartnerValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierAccountResponse>;
    /**
     * @param {LogisticsPartnerValidator.GetCourierPartnerAccountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierAccountResponse>} - Success response
     * @name getCourierPartnerAccount
     * @summary: Getting Courier Account of a company from database.
     * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccount/).
     */
    getCourierPartnerAccount({ companyId, accountId, requestHeaders }?: LogisticsPartnerValidator.GetCourierPartnerAccountParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierAccountResponse>;
    /**
     * @param {LogisticsPartnerValidator.CreateCourierPartnerSchemeParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeModel>} -
     *   Success response
     * @name createCourierPartnerScheme
     * @summary: Create Scheme for courier partner extension
     * @description: Create Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerScheme/).
     */
    createCourierPartnerScheme({ body, requestHeaders }?: LogisticsPartnerValidator.CreateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierPartnerSchemeModel>;
    /**
     * @param {LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeUpdateRequest>}
     *   - Success response
     *
     * @name updateCourierPartnerScheme
     * @summary: Update Scheme for courier partner extension
     * @description: Update Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerScheme/).
     */
    updateCourierPartnerScheme({ schemeId, body, requestHeaders }?: LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierPartnerSchemeUpdateRequest>;
    /**
     * @param {LogisticsPartnerValidator.GetCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, requestHeaders }?: LogisticsPartnerValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.GetCountries>;
}
import LogisticsPartnerModel = require("./LogisticsPartnerModel");
