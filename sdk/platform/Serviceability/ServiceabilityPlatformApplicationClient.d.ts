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
     * @summary: Create rourier rule
     * @description: Creates a rule within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerRule/).
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
     * @summary: Create store rule
     * @description: Create a rule within the order routing rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createStoreRules/).
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
     * @summary: Get store rule configuration
     * @description: Retrieves information about the order routing setup for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfig/).
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
     * @summary: Get delivery configuration
     * @description: Retrieves information about the delivery setup for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationConfiguration/).
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
     * @summary: Get self ship configuration
     * @description: Retrieves the self ship setup for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getApplicationServiceabilitySelfShipment/).
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
     * @summary: Get courier rule
     * @description: Retrieves a single rule within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRule/).
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
     * @summary: Get courier rules
     * @description: Retrieve a list of rules within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerRules/).
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
     * @summary: Get store rule
     * @description: Retrieves a single rule within the order routing rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRule/).
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
     * @summary: Get store rules
     * @description: Retrieves an existing order routing setup for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getStoreRules/).
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
     * @summary: Create store rule configuration
     * @description: Creates a order routing setup for an application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/insertApplicationConfig/).
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
     * @summary: Update self ship configuration
     * @description: Updates self ship setup for an existing application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/patchApplicationServiceabilitySelfShipment/).
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
     * @summary: Update delivery configuration
     * @description: Updates an existing delivery setup for an application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateApplicationConfiguration/).
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
     * @summary: Update courier partner rule priority
     * @description: Updates a courier partner rule priority for a single application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerRulePriority/).
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
     * @summary: Update courier rule
     * @description: Updates an existing rule within the delivery configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierRule/).
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
     * @summary: Get audit trail
     * @description: Retrieves the history of changes made to cash on delivery settings for pincodes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeAuditHistory/).
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
     * @summary: Bulk update pincode COD support
     * @description: Updates the cash on delivery settings for multiple specified pin codes simultaneously. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeBulkView/).
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
     * @summary: Get COD enabled pincodes
     * @description: Retrieves a list of pincodes along with the count based on whether cash on delivery settings. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeCoDListing/).
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
     * @summary: Update pincode COD support
     * @description: Modify and update views related to pincode MOP (Mode of Payment). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePincodeMopView/).
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
     * @summary: Update store rule
     * @description: Updates an existing rule within the order routing rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRules/).
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
     * @summary: Update store rules configuration
     * @description: Updates an existing order routing setup for a single application, which involves updating sorting settings or rule priorities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateStoreRulesConfig/).
     */
    updateStoreRulesConfig({ body, requestHeaders }?: ServiceabilityPlatformApplicationValidator.UpdateStoreRulesConfigParam, { responseHeaders }?: object): Promise<ServiceabilityPlatformModel.StoreRuleConfigData>;
}
import ServiceabilityPlatformApplicationValidator = require("./ServiceabilityPlatformApplicationValidator");
import ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
