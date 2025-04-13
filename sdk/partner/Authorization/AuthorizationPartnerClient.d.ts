export = Authorization;
declare class Authorization {
    constructor(config: any);
    config: any;
    /**
     * @param {AuthorizationPartnerValidator.CreateOrganizationClientParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
     * @name createOrganizationClient
     * @summary: Create a new client for a specific organization
     * @description: Use this Api to create a new client for an organization - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/createOrganizationClient/).
     */
    createOrganizationClient({ body, requestHeaders }?: AuthorizationPartnerValidator.CreateOrganizationClientParam, { responseHeaders }?: object): Promise<AuthorizationPartnerModel.ClientResponse>;
    /**
     * @param {AuthorizationPartnerValidator.GetOrganizationClientListParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPartnerModel.ClientListSchema>} - Success response
     * @name getOrganizationClientList
     * @summary: Get organization OAuth client
     * @description: Get the list of organization OAuth Client - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/getOrganizationClientList/).
     */
    getOrganizationClientList({ pageNo, pageSize, isActive, requestHeaders }?: AuthorizationPartnerValidator.GetOrganizationClientListParam, { responseHeaders }?: object): Promise<AuthorizationPartnerModel.ClientListSchema>;
    /**
     * @param {AuthorizationPartnerValidator.GetOrganizationClientByIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
     * @name getOrganizationClientById
     * @summary: Get organization OAuth client
     * @description: Get the organization oauth client by cliend id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/getOrganizationClientById/).
     */
    getOrganizationClientById({ clientId, requestHeaders }?: AuthorizationPartnerValidator.GetOrganizationClientByIdParam, { responseHeaders }?: object): Promise<AuthorizationPartnerModel.ClientResponse>;
    /**
     * @param {AuthorizationPartnerValidator.UpdateOrganizationClientByIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
     * @name updateOrganizationClientById
     * @summary: Update Specific Oauth client of organization
     * @description: Use this Api to Update OAuth Client name and tags description - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/updateOrganizationClientById/).
     */
    updateOrganizationClientById({ clientId, body, requestHeaders }?: AuthorizationPartnerValidator.UpdateOrganizationClientByIdParam, { responseHeaders }?: object): Promise<AuthorizationPartnerModel.ClientResponse>;
    /**
     * @param {AuthorizationPartnerValidator.DeleteOrganizationOAuthClientByIdParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<AuthorizationPartnerModel.ClientResponse>} - Success response
     * @name deleteOrganizationOAuthClientById
     * @summary: Delete Organization OAuth client
     * @description: This endpoint allows you to delete a specific Organization OAuth client. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/authorization/deleteOrganizationOAuthClientById/).
     */
    deleteOrganizationOAuthClientById({ clientId, requestHeaders }?: AuthorizationPartnerValidator.DeleteOrganizationOAuthClientByIdParam, { responseHeaders }?: object): Promise<AuthorizationPartnerModel.ClientResponse>;
}
import AuthorizationPartnerModel = require("./AuthorizationPartnerModel");
