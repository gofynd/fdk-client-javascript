export = Logistics;
declare class Logistics {
    constructor(config: any);
    config: any;
    /**
     * @param {LogisticsPartnerValidator.SampleFileServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResultItemData>}
     *   - Success response
     *
     * @name sampleFileServiceability
     * @summary: Sample File Download
     * @description: Sample File Download - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/sampleFileServiceability/).
     */
    sampleFileServiceability({ body, requestHeaders }?: LogisticsPartnerValidator.SampleFileServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResultItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResult>}
     *   - Success response
     *
     * @name getSampleFileServiceabilityStatus
     * @summary: Get Serviceability TAT sample files generator status
     * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getSampleFileServiceabilityStatus/).
     */
    getSampleFileServiceabilityStatus({ pageNo, pageSize, batchId, requestHeaders }?: LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResult>;
    /**
     * @param {LogisticsPartnerValidator.BulkTatParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResultItemData>} -
     *   Success response
     * @name bulkTat
     * @summary: Region TAT Import or Export
     * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkTat/).
     */
    bulkTat({ extensionId, schemeId, body, requestHeaders }?: LogisticsPartnerValidator.BulkTatParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResultItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetBulkTatParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResult>} - Success response
     * @name getBulkTat
     * @summary: Get region tat bulk history
     * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkTat/).
     */
    getBulkTat({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: LogisticsPartnerValidator.GetBulkTatParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResult>;
    /**
     * @param {LogisticsPartnerValidator.CreateDeliveryTimeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
     * @name createDeliveryTime
     * @summary: Region based delivery time insert
     * @description: Insert the region based delivery time for a specific region within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createDeliveryTime/).
     */
    createDeliveryTime({ partnerOrgId, courierPartnerExtensionId, schemeId, body, requestHeaders, }?: LogisticsPartnerValidator.CreateDeliveryTimeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionTatResult>;
    /**
     * @param {LogisticsPartnerValidator.GetDeliveryTimesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionTatItemResult>} - Success response
     * @name getDeliveryTimes
     * @summary: Get region based delivery time list
     * @description: Retrieve a list of delivery time for specific regions within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getDeliveryTimes/).
     */
    getDeliveryTimes({ partnerOrgId, courierPartnerExtensionId, schemeId, pageNo, pageSize, fromCountryCode, fromStateCode, fromCityCode, fromSectorCode, fromPincode, toCountryCode, toStateCode, toCityCode, toSectorCode, toPincode, requestHeaders, }?: LogisticsPartnerValidator.GetDeliveryTimesParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionTatItemResult>;
    /**
     * @param {LogisticsPartnerValidator.GetDeliveryTimeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
     * @name getDeliveryTime
     * @summary: Get region based delivery time for a given identifier
     * @description: Retrieve the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getDeliveryTime/).
     */
    getDeliveryTime({ partnerOrgId, courierPartnerExtensionId, schemeId, id, requestHeaders, }?: LogisticsPartnerValidator.GetDeliveryTimeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionTatResult>;
    /**
     * @param {LogisticsPartnerValidator.UpdateDeliveryTimeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
     * @name updateDeliveryTime
     * @summary: Region based delivery time update
     * @description: Update the delivery time details for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateDeliveryTime/).
     */
    updateDeliveryTime({ partnerOrgId, courierPartnerExtensionId, schemeId, id, body, requestHeaders, }?: LogisticsPartnerValidator.UpdateDeliveryTimeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionTatResult>;
    /**
     * @param {LogisticsPartnerValidator.DeleteDeliveryTimeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionTatResult>} - Success response
     * @name deleteDeliveryTime
     * @summary: Region based delivery time delete
     * @description: Delete the delivery time record for a specific region within a courier partner scheme using the unique delivery time record identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/deleteDeliveryTime/).
     */
    deleteDeliveryTime({ partnerOrgId, courierPartnerExtensionId, schemeId, id, requestHeaders, }?: LogisticsPartnerValidator.DeleteDeliveryTimeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionTatResult>;
    /**
     * @param {LogisticsPartnerValidator.CreateServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
     *   Success response
     * @name createServiceability
     * @summary: Serviceability insert
     * @description: Insert the serviceability for a specific region within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createServiceability/).
     */
    createServiceability({ partnerOrgId, courierPartnerExtensionId, schemeId, body, requestHeaders, }?: LogisticsPartnerValidator.CreateServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionServiceabilityResult>;
    /**
     * @param {LogisticsPartnerValidator.GetServiceabilitiesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityItemResult>}
     *   - Success response
     *
     * @name getServiceabilities
     * @summary: Get region serviceability list
     * @description: Retrieve a list of serviceability for specific regions within a courier partner scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getServiceabilities/).
     */
    getServiceabilities({ partnerOrgId, courierPartnerExtensionId, schemeId, pageNo, pageSize, countryCode, stateCode, cityCode, sectorCode, pincode, firstMile, lastMile, doorstepReturn, doorstepQc, installation, requestHeaders, }?: LogisticsPartnerValidator.GetServiceabilitiesParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionServiceabilityItemResult>;
    /**
     * @param {LogisticsPartnerValidator.GetServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
     *   Success response
     * @name getServiceability
     * @summary: Get region serviceability
     * @description: Retrieve serviceability for specific region within a courier partner scheme for a given identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getServiceability/).
     */
    getServiceability({ partnerOrgId, courierPartnerExtensionId, schemeId, id, requestHeaders, }?: LogisticsPartnerValidator.GetServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionServiceabilityResult>;
    /**
     * @param {LogisticsPartnerValidator.UpdateServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.ServiceabilityDetailsResult>} -
     *   Success response
     * @name updateServiceability
     * @summary: Serviceability update
     * @description: Update the serviceability for a specific region within a courier partner scheme based on unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateServiceability/).
     */
    updateServiceability({ partnerOrgId, courierPartnerExtensionId, schemeId, id, body, requestHeaders, }?: LogisticsPartnerValidator.UpdateServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.ServiceabilityDetailsResult>;
    /**
     * @param {LogisticsPartnerValidator.DeleteServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.RegionServiceabilityResult>} -
     *   Success response
     * @name deleteServiceability
     * @summary: Serviceability delete
     * @description: Delete the serviceability for a specific region within a courier partner scheme based on a unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/deleteServiceability/).
     */
    deleteServiceability({ partnerOrgId, courierPartnerExtensionId, schemeId, id, requestHeaders, }?: LogisticsPartnerValidator.DeleteServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.RegionServiceabilityResult>;
    /**
     * @param {LogisticsPartnerValidator.BulkServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResultItemData>} -
     *   Success response
     * @name bulkServiceability
     * @summary: Serviceability Import or Export
     * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkServiceability/).
     */
    bulkServiceability({ extensionId, schemeId, body, requestHeaders }?: LogisticsPartnerValidator.BulkServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResultItemData>;
    /**
     * @param {LogisticsPartnerValidator.GetBulkServiceabilityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.BulkRegionResult>} - Success response
     * @name getBulkServiceability
     * @summary: Get Region Serviceability Bulk History
     * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkServiceability/).
     */
    getBulkServiceability({ extensionId, schemeId, pageNo, pageSize, batchId, action, status, country, region, startDate, endDate, requestHeaders, }?: LogisticsPartnerValidator.GetBulkServiceabilityParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.BulkRegionResult>;
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
     * @returns {Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResult>}
     *   - Success response
     *
     * @name getCourierPartnerAccounts
     * @summary: Getting Courier Account list of a company
     * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccounts/).
     */
    getCourierPartnerAccounts({ companyId, pageNo, pageSize, stage, paymentMode, transportType, requestHeaders, }?: LogisticsPartnerValidator.GetCourierPartnerAccountsParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResult>;
    /**
     * @param {LogisticsPartnerValidator.UpdateCourierPartnerAccountParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierAccountResult>} - Success response
     * @name updateCourierPartnerAccount
     * @summary: Update Courier Account in database
     * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerAccount/).
     */
    updateCourierPartnerAccount({ companyId, accountId, body, requestHeaders }?: LogisticsPartnerValidator.UpdateCourierPartnerAccountParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierAccountResult>;
    /**
     * @param {LogisticsPartnerValidator.GetCourierPartnerAccountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierAccountResult>} - Success response
     * @name getCourierPartnerAccount
     * @summary: Getting Courier Account of a company from database
     * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccount/).
     */
    getCourierPartnerAccount({ companyId, accountId, requestHeaders }?: LogisticsPartnerValidator.GetCourierPartnerAccountParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierAccountResult>;
    /**
     * @param {LogisticsPartnerValidator.GetCountriesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.GetCountries>} - Success response
     * @name getCountries
     * @summary: Get all countries and associated data
     * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCountries/).
     */
    getCountries({ onboarding, pageNo, pageSize, q, requestHeaders }?: LogisticsPartnerValidator.GetCountriesParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.GetCountries>;
    /**
     * @param {LogisticsPartnerValidator.CreateCourierPartnerSchemeParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>} -
     *   Success response
     * @name createCourierPartnerScheme
     * @summary: Create Scheme for courier partner extension
     * @description: Create Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerScheme/).
     */
    createCourierPartnerScheme({ body, requestHeaders }?: LogisticsPartnerValidator.CreateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>;
    /**
     * @param {LogisticsPartnerValidator.GetCourierPartnerSchemesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.courierPartnerSchemeV2List>} -
     *   Success response
     * @name getCourierPartnerSchemes
     * @summary: Get created Schemes for courier partner
     * @description: Get created Schemes for courier partner - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerSchemes/).
     */
    getCourierPartnerSchemes({ schemeType, paymentMode, capabilities, schemeIds, requestHeaders }?: LogisticsPartnerValidator.GetCourierPartnerSchemesParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.courierPartnerSchemeV2List>;
    /**
     * @param {LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>} -
     *   Success response
     * @name updateCourierPartnerScheme
     * @summary: Update Scheme for courier partner extension
     * @description: Update Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerScheme/).
     */
    updateCourierPartnerScheme({ schemeId, body, requestHeaders }?: LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>;
    /**
     * @param {LogisticsPartnerValidator.GetCourierPartnerSchemeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>} -
     *   Success response
     * @name getCourierPartnerScheme
     * @summary: Get Scheme for courier partner extension by Id
     * @description: Update Scheme for courier partner extension by Id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerScheme/).
     */
    getCourierPartnerScheme({ schemeId, requestHeaders }?: LogisticsPartnerValidator.GetCourierPartnerSchemeParam, { responseHeaders }?: object): Promise<LogisticsPartnerModel.CourierPartnerV2SchemeModel>;
}
import LogisticsPartnerModel = require("./LogisticsPartnerModel");
