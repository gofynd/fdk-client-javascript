export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {LeadPlatformApplicationValidator.CreateCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name createCustomForm
     * @summary: Create custom form
     * @description: Create a new custom form for application users to fill - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/createCustomForm/).
     */
    createCustomForm({ body, requestHeaders }?: LeadPlatformApplicationValidator.CreateCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.CreateNewHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistory>} - Success response
     * @name createNewHistory
     * @summary: Create ticket history interaction
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/createNewHistory/).
     */
    createNewHistory({ id, body, requestHeaders }?: LeadPlatformApplicationValidator.CreateNewHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistory>;
    /**
     * @param {LeadPlatformApplicationValidator.DeleteCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name deleteCustomForm
     * @summary: Delete a custom form
     * @description: Delete a custom form using it's slug - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/deleteCustomForm/).
     */
    deleteCustomForm({ slug, requestHeaders }?: LeadPlatformApplicationValidator.DeleteCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name editCustomForm
     * @summary: Update custom form
     * @description: Modify the content and associated settings of a custom form. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/editCustomForm/).
     */
    editCustomForm({ slug, body, requestHeaders }?: LeadPlatformApplicationValidator.EditCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.EditNewTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name editNewTicket
     * @summary: Update Ticket Details
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/editNewTicket/).
     */
    editNewTicket({ id, body, requestHeaders }?: LeadPlatformApplicationValidator.EditNewTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get custom form
     * @description: Get information about a custom form which includes corresponding field details and any validation regex required against that field or not - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/getCustomForm/).
     */
    getCustomForm({ slug, requestHeaders }?: LeadPlatformApplicationValidator.GetCustomFormParam, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomForm>;
    /**
     * @param {LeadPlatformApplicationValidator.GetCustomFormsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.CustomFormList>} - Success response
     * @name getCustomForms
     * @summary: Get custom forms
     * @description: List all available custom forms - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/getCustomForms/).
     */
    getCustomForms({ requestHeaders }?: any, { responseHeaders }?: object): Promise<LeadPlatformModel.CustomFormList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.Ticket>} - Success response
     * @name getNewTicket
     * @summary: Get Ticket Details
     * @description: Get ticket details of a application level ticket with ticket ID - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/getNewTicket/).
     */
    getNewTicket({ id, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketParam, { responseHeaders }?: object): Promise<LeadPlatformModel.Ticket>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketHistoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketHistoryList>} - Success response
     * @name getNewTicketHistory
     * @summary: Get ticket history interaction
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/getNewTicketHistory/).
     */
    getNewTicketHistory({ id, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketHistoryParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketHistoryList>;
    /**
     * @param {LeadPlatformApplicationValidator.GetNewTicketsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<LeadPlatformModel.TicketList>} - Success response
     * @name getNewTickets
     * @summary: List sales channel tickets
     * @description: Gets the list of Application level Tickets and/or ticket filters - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/lead/getNewTickets/).
     */
    getNewTickets({ items, filters, q, status, priority, category, requestHeaders }?: LeadPlatformApplicationValidator.GetNewTicketsParam, { responseHeaders }?: object): Promise<LeadPlatformModel.TicketList>;
}
import LeadPlatformApplicationValidator = require("./LeadPlatformApplicationValidator");
import LeadPlatformModel = require("./LeadPlatformModel");
