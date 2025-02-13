export = Lead;
declare class Lead {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createHistory: string;
        createTicket: string;
        getCustomForm: string;
        getTicket: string;
        submitCustomForm: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<TicketHistory>} - Success response
     * @name createHistory
     * @summary: Log ticket history
     * @description: Create a history entry for a specific support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createHistory/).
     */
    createHistory({ id, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<TicketHistory>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Ticket>} - Success response
     * @name createTicket
     * @summary: Creates a ticket
     * @description: Create a new customer support ticket for a user query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/createTicket/).
     */
    createTicket({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<Ticket>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CustomForm>} - Success response
     * @name getCustomForm
     * @summary: Get custom form
     * @description: Get a customizable form template for data collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getCustomForm/).
     */
    getCustomForm({ slug, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<CustomForm>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Ticket>} - Success response
     * @name getTicket
     * @summary: Get a support ticket
     * @description: Get details of a specific customer support ticket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/getTicket/).
     */
    getTicket({ id, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<Ticket>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SubmitCustomFormDetails>} - Success response
     * @name submitCustomForm
     * @summary: Submits form data
     * @description: Create user-entered data from a custom form for processing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/lead/submitCustomForm/).
     */
    submitCustomForm({ slug, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<SubmitCustomFormDetails>;
}
