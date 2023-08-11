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
     * @returns {Promise<LeadApplicationModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
     */
    createHistory({ id, body }?: LeadApplicationValidator.CreateHistoryParam): Promise<LeadApplicationModel.TicketHistory>;
    /**
     * @param {LeadApplicationValidator.CreateTicketParam} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Create Ticket
     * @description: This is used to Create Ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
     */
    createTicket({ body }?: LeadApplicationValidator.CreateTicketParam): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetCustomFormParam} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific Custom Form using it's slug
     * @description: Get specific Custom Form using it's slug, this is used to view the form. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
     */
    getCustomForm({ slug }?: LeadApplicationValidator.GetCustomFormParam): Promise<LeadApplicationModel.CustomForm>;
    /**
     * @param {LeadApplicationValidator.GetParticipantsInsideVideoRoomParam} arg
     *   - Arg object.
     *
     * @returns {Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getParticipantsInsideVideoRoom
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getParticipantsInsideVideoRoom/).
     */
    getParticipantsInsideVideoRoom({ uniqueName }?: LeadApplicationValidator.GetParticipantsInsideVideoRoomParam): Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.GetTicketParam} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Get Ticket with the specific id
     * @description: Get Ticket with the specific id, this is used to view the ticket details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
     */
    getTicket({ id }?: LeadApplicationValidator.GetTicketParam): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.GetTokenForVideoRoomParam} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTokenForVideoRoom/).
     */
    getTokenForVideoRoom({ uniqueName }?: LeadApplicationValidator.GetTokenForVideoRoomParam): Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.SubmitCustomFormParam} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
     *   Success response
     * @name submitCustomForm
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
     */
    submitCustomForm({ slug, body }?: LeadApplicationValidator.SubmitCustomFormParam): Promise<LeadApplicationModel.SubmitCustomFormResponse>;
}
import LeadApplicationValidator = require("./LeadApplicationValidator");
import LeadApplicationModel = require("./LeadApplicationModel");
