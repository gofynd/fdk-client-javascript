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
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @returns {Promise<TicketHistory>} - Success response
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): Promise<TicketHistory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddTicketPayload} arg.body
     * @returns {Promise<Ticket>} - Success response
     * @summary: Create Ticket
     * @description: This is used to Create Ticket.
     */
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @returns {Promise<CustomForm>} - Success response
     * @summary: Get specific Custom Form using it's slug
     * @description: Get specific Custom Form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): Promise<CustomForm>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getParticipantsInsideVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of ticket to be retrieved
     * @returns {Promise<Ticket>} - Success response
     * @summary: Get Ticket with the specific id
     * @description: Get Ticket with the specific id, this is used to view the ticket details
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<GetTokenForVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {CustomFormSubmissionPayload} arg.body
     * @returns {Promise<SubmitCustomFormResponse>} - Success response
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     */
    submitCustomForm({ slug, body }?: {
        slug: string;
        body: CustomFormSubmissionPayload;
    }): Promise<SubmitCustomFormResponse>;
}
