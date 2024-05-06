export = Lead;
declare class Lead {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createHistory: string;
        createTicket: string;
        getCustomForm: string;
        getParticipantsInsideVideoRoom: string;
        getTicket: string;
        getTokenForVideoRoom: string;
        submitCustomForm: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {LeadApplicationValidator.CreateHistoryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Log ticket history
     * @description: Adds a history entry for a specific support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
     */
    createHistory({ id, body, requestHeaders }?: LeadApplicationValidator.CreateHistoryParam, { responseHeaders }?: object): Promise<LeadApplicationModel.TicketHistory>;
    /**
     * @param {LeadApplicationValidator.CreateTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a ticket
     * @description: Generates a new customer support ticket for a user query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadApplicationValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get custom form
     * @description: Get a customizable form template for data collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
     */
    getCustomForm({ slug, requestHeaders }?: LeadApplicationValidator.GetCustomFormParam, { responseHeaders }?: object): Promise<LeadApplicationModel.CustomForm>;
    /**
     * @param {LeadApplicationValidator.GetParticipantsInsideVideoRoomParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getParticipantsInsideVideoRoom
     * @summary: List video room participants
     * @description: Gets the current participants inside a specific video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getParticipantsInsideVideoRoom/).
     */
    getParticipantsInsideVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetParticipantsInsideVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.GetTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Get a support ticket
     * @description: Get details of a specific customer support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
     */
    getTicket({ id, requestHeaders }?: LeadApplicationValidator.GetTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetTokenForVideoRoomParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get video room token
     * @description: Get a secure token for accessing a video chat room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetTokenForVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.SubmitCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
     *   Success response
     * @name submitCustomForm
     * @summary: Submits form data
     * @description: Sends user-entered data from a custom form for processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
     */
    submitCustomForm({ slug, body, requestHeaders }?: LeadApplicationValidator.SubmitCustomFormParam, { responseHeaders }?: object): Promise<LeadApplicationModel.SubmitCustomFormResponse>;
}
import LeadApplicationValidator = require("sdk/output/javascript/code/sdk/application/Lead/LeadApplicationValidator");
import LeadApplicationModel = require("sdk/output/javascript/code/sdk/application/Lead/LeadApplicationModel");
