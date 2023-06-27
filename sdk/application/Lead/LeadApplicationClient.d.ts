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
     * @param {LeadApplicationValidator.createHistory} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.TicketHistory>} - Success response
     * @name createHistory
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: LeadApplicationValidator.createHistory): Promise<LeadApplicationModel.TicketHistory>;
    /**
     * @param {LeadApplicationValidator.createTicket} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name createTicket
     * @summary: Create Ticket
     * @description: This is used to Create Ticket.
     */
    createTicket({ body }?: LeadApplicationValidator.createTicket): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.getCustomForm} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get specific Custom Form using it's slug
     * @description: Get specific Custom Form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: LeadApplicationValidator.getCustomForm): Promise<LeadApplicationModel.CustomForm>;
    /**
     * @param {LeadApplicationValidator.getParticipantsInsideVideoRoom} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>}
     *   - Success response
     *
     * @name getParticipantsInsideVideoRoom
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getParticipantsInsideVideoRoom({ uniqueName }?: LeadApplicationValidator.getParticipantsInsideVideoRoom): Promise<LeadApplicationModel.GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.getTicket} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.Ticket>} - Success response
     * @name getTicket
     * @summary: Get Ticket with the specific id
     * @description: Get Ticket with the specific id, this is used to view the ticket details
     */
    getTicket({ id }?: LeadApplicationValidator.getTicket): Promise<LeadApplicationModel.Ticket>;
    /**
     * @param {LeadApplicationValidator.getTokenForVideoRoom} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>} -
     *   Success response
     * @name getTokenForVideoRoom
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: LeadApplicationValidator.getTokenForVideoRoom): Promise<LeadApplicationModel.GetTokenForVideoRoomResponse>;
    /**
     * @param {LeadApplicationValidator.submitCustomForm} arg - Arg object.
     * @returns {Promise<LeadApplicationModel.SubmitCustomFormResponse>} -
     *   Success response
     * @name submitCustomForm
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     */
    submitCustomForm({ slug, body }?: LeadApplicationValidator.submitCustomForm): Promise<LeadApplicationModel.SubmitCustomFormResponse>;
}
import LeadApplicationValidator = require("./LeadApplicationValidator");
import LeadApplicationModel = require("./LeadApplicationModel");
