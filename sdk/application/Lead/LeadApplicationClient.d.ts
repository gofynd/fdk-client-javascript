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
     * @summary: Logs ticket history.
     * @description: Adds a history entry for a specific support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
     */
    createHistory({ id, body, requestHeaders }?: LeadApplicationValidator.CreateHistoryParam, { responseHeaders }?: object): Promise<LeadApplicationModel.TicketHistory>;
    /**
     * @param {LeadApplicationValidator.CreateTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a new ticket.
     * @description: Generates a new customer support ticket for a user query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadApplicationValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Fetches custom form.
     * @description: Retrieves a customizable form template for data collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
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
     * @summary: Lists video room participants.
     * @description: Gets the current participants inside a specific video room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getParticipantsInsideVideoRoom/).
     */
    getParticipantsInsideVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetParticipantsInsideVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.GetTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Retrieves a support ticket.
     * @description: Retrieve details of a specific customer support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
     */
    getTicket({ id, requestHeaders }?: LeadApplicationValidator.GetTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetTokenForVideoRoomParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Retrieves video room token.
     * @description: Retrieves a secure token for accessing a video chat room. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetTokenForVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.SubmitCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
     *   Success response
     * @name submitCustomForm
     * @summary: Submits form data.
     * @description: Sends user-entered data from a custom form for processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
     */
    submitCustomForm({ slug, body, requestHeaders }?: LeadApplicationValidator.SubmitCustomFormParam, { responseHeaders }?: object): Promise<LeadApplicationModel.SubmitCustomFormResponse>;
}
import LeadApplicationValidator = require("./LeadApplicationValidator");
import LeadApplicationModel = require("./LeadApplicationModel");
