export = Lead;
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CloseVideoRoomResponse>} - Success response
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CloseVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCustomFormPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CustomForm>} - Success response
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CustomForm>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TicketHistory>} - Success response
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createNewHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TicketHistory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CustomForm>} - Success response
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CustomForm>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Ticket>} - Success response
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editNewTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CustomForm>} - Success response
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CustomForm>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CustomFormList>} - Success response
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({ headers }?: import("../PlatformAPIClient").Options): Promise<CustomFormList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Ticket>} - Success response
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getNewTicket({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Ticket>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TicketHistoryList>} - Success response
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getNewTicketHistory({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TicketHistoryList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TicketList>} - Success response
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getNewTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: PriorityEnum;
        category?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TicketList>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getNewTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetTokenForVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getNewVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<GetParticipantsInsideVideoRoomResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateVideoRoomPayload} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CreateVideoRoomResponse>} - Success response
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CreateVideoRoomResponse>;
}
