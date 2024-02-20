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
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
     */
    createHistory({ id, body, requestHeaders }?: LeadApplicationValidator.CreateHistoryParam, { responseHeaders }?: object): Promise<LeadApplicationModel.TicketHistory>;
    /**
     * @param {LeadApplicationValidator.CreateTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Create Ticket
     * @description: This is used to Create Ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: LeadApplicationValidator.CreateTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific Custom Form using it's slug
     * @description: Get specific Custom Form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
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
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getParticipantsInsideVideoRoom/).
     */
    getParticipantsInsideVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetParticipantsInsideVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.GetTicketParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Get Ticket with the specific id
     * @description: Get Ticket with the specific id, this is used to view the ticket details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
     */
    getTicket({ id, requestHeaders }?: LeadApplicationValidator.GetTicketParam, { responseHeaders }?: object): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetTokenForVideoRoomParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName, requestHeaders }?: LeadApplicationValidator.GetTokenForVideoRoomParam, { responseHeaders }?: object): Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.SubmitCustomFormParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
     *   Success response
     * @name submitCustomForm
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
     */
    submitCustomForm({ slug, body, requestHeaders }?: LeadApplicationValidator.SubmitCustomFormParam, { responseHeaders }?: object): Promise<LeadApplicationModel.SubmitCustomFormResponse>;
}
import LeadApplicationValidator = require("sdk/output/javascript/code/sdk/application/Lead/LeadApplicationValidator");
import LeadApplicationModel = require("sdk/output/javascript/code/sdk/application/Lead/LeadApplicationModel");
