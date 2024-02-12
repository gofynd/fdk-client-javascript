export = Serviceability;
declare class Serviceability {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
     *   Success response
     * @name createCourierPartnerRule
     * @summary: Create Courier Rules.
     * @description: Creates Courier Rules with rule configuration and dp priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerRule/).
     */
    createCourierPartnerRule({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRule>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleResponseSchema>}
     *   - Success response
     *
     * @name createStoreRules
     * @summary: Create Store Rule
     * @description: Create Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createStoreRules/).
     */
    createStoreRules({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.CreateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name getApplicationConfig
     * @summary: Get Application Configuration
     * @description: Get Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfig/).
     */
    getApplicationConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfig>} -
     *   Success response
     * @name getApplicationConfiguration
     * @summary: Get All Courier Rules applied to application
     * @description: This API returns all the Courier Rules applied to an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfiguration/).
     */
    getApplicationConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfig>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetApplicationServiceabilitySelfShipmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name getApplicationServiceabilitySelfShipment
     * @summary: Self-ship configuration of application.
     * @description: This API returns Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationServiceabilitySelfShipment/).
     */
    getApplicationServiceabilitySelfShipment({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
     *   Success response
     * @name getCourierPartnerRule
     * @summary: Fetch of Courier Rule.
     * @description: This API returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRule/).
     */
    getCourierPartnerRule({ ruleId, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRule>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResponse>}
     *   - Success response
     *
     * @name getCourierPartnerRules
     * @summary: Fetch Courier Rules List
     * @description: This API returns Courier Rules List - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRules/).
     */
    getCourierPartnerRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetCourierPartnerRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRulesListResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>} -
     *   Success response
     * @name getStoreRule
     * @summary: Get Single Store Rule
     * @description: Get Single Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRule/).
     */
    getStoreRule({ ruleUid, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleDataSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.GetStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>}
     *   - Success response
     *
     * @name getStoreRules
     * @summary: Get Multiple Store Rules
     * @description: Get Multiple Store Rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRules/).
     */
    getStoreRules({ pageNo, pageSize, status, requestHeaders }?: ServiceabilityPlatformApplicationValidator.GetStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.GetStoreRulesApiResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name insertApplicationConfig
     * @summary: Insert Application Configuration
     * @description: Insert Application Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/insertApplicationConfig/).
     */
    insertApplicationConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.InsertApplicationConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.PatchApplicationServiceabilitySelfShipmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>}
     *   - Success response
     *
     * @name patchApplicationServiceabilitySelfShipment
     * @summary: Self-ship configuration of application.
     * @description: This API updates Self-ship configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/patchApplicationServiceabilitySelfShipment/).
     */
    patchApplicationServiceabilitySelfShipment({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.PatchApplicationServiceabilitySelfShipmentParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationSelfShipConfigResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.ApplicationConfig>} -
     *   Success response
     * @name updateApplicationConfiguration
     * @summary: Apply configuration to an application
     * @description: Apply configuration to application to set DP rules and Zone configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationConfiguration/).
     */
    updateApplicationConfiguration({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateApplicationConfigurationParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.ApplicationConfig>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.RulePriorityResponse>} -
     *   Success response
     * @name updateCourierPartnerRulePriority
     * @summary: Updates Courier Partner Rules Priority for a sales channel
     * @description: Updates Courier Partner Rules Priority for a sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
     */
    updateCourierPartnerRulePriority({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierPartnerRulePriorityParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.RulePriorityResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.CourierPartnerRule>} -
     *   Success response
     * @name updateCourierRule
     * @summary: Updating of Courier Rule.
     * @description: This API updates and returns Courier Rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierRule/).
     */
    updateCourierRule({ ruleId, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateCourierRuleParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.CourierPartnerRule>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>}
     *   - Success response
     *
     * @name updatePincodeAuditHistory
     * @summary: Auditlog configuration of application.
     * @description: This API returns Audit logs of Pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
     */
    updatePincodeAuditHistory({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeAuditHistoryParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMopUpdateAuditHistoryResponseData>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>}
     *   - Success response
     *
     * @name updatePincodeBulkView
     * @summary: Bulk Update of pincode in the application.
     * @description: This API constructs bulk write operations to update the MOP data for each pincode in the payload. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
     */
    updatePincodeBulkView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeBulkViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeBulkViewResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>}
     *   - Success response
     *
     * @name updatePincodeCoDListing
     * @summary: Pincode count view of application.
     * @description: This API returns count of active pincode. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
     */
    updatePincodeCoDListing({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeCoDListingParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeCodStatusListingResponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.PincodeMOPresponse>} -
     *   Success response
     * @name updatePincodeMopView
     * @summary: PincodeView update of MOP.
     * @description: This API updates Pincode method of payment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
     */
    updatePincodeMopView({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdatePincodeMopViewParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.PincodeMOPresponse>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema>}
     *   - Success response
     *
     * @name updateStoreRules
     * @summary: Update Store Rule
     * @description: Update Store Rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRules/).
     */
    updateStoreRules({ ruleUid, body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleUpdateResponseSchema>;
    /**
     * @param {ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ServiceabilityPlatformModel.StoreRuleConfigData>} -
     *   Success response
     * @name updateStoreRulesConfig
     * @summary: Update Store Rule Configuration
     * @description: Update Store Rule Configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulesConfig/).
     */
    updateStoreRulesConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
