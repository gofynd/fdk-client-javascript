export = LeadApplicationModel;
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event.
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response - Custom form response.
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form.
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission.
 * @property {Ticket} [ticket]
 * @property {FormFieldResponse} [response]
 */
/**
 * @typedef FormFieldResponse
 * @property {string} [_id] - Unique identifier for a custom form response.
 * @property {number} [__v] - Version of the form.
 * @property {string} [application_id] - Unique identifier for a Sales channel.
 * @property {string} [form_slug] - A short, human-readable, URL-friendly unique
 *   identifier for a custom form.
 * @property {CreatedOn} [created_on]
 * @property {FormFieldResponseValues[]} [response] - Data related to
 *   acknowledgement on submission of custom form.
 */
/**
 * @typedef FormFieldResponseValues
 * @property {string} [key] - Keyname of field against which the input was
 *   filled in custom form.
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id] - Unique identifier for a Sales channel.
 * @property {string} company_id - Company ID related to the ticket.
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details.
 */
/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset.
 * @property {string} value - To be used for details.
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title - Title for ticket.
 * @property {string} [description] - Long description of issue.
 * @property {TicketAsset[]} [attachments] - List of all attachments related to
 *   the ticket.
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket.
 * @property {string} [status] - Status of the ticket.
 * @property {PriorityEnum} [priority]
 * @property {string} category - Category of the ticket.
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent.
 * @property {string[]} [subscribers] - List of emails to be informed for ticket updates.
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display - Display text for priority.
 * @property {string} color - Color for priority.
 */
/**
 * @typedef Status
 * @property {string} key - Key for status.
 * @property {string} display - Display text for status.
 * @property {string} color - Color for status.
 */
/**
 * @typedef SubmitButton
 * @property {string} title - Title for submit button.
 * @property {string} title_color - Title color submit button.
 * @property {string} background_color - Color for submit button.
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff.
 * @property {string} message - Message for polling.
 * @property {string} success_message - Message for successful polling.
 * @property {string} failure_message - Message if polling failed.
 */
/**
 * @typedef CustomForm
 * @property {string} application_id - Application ID - Identifier for a Sales channel.
 * @property {string} slug - Slug for the form, which is to be used for
 *   accessing the form.
 * @property {string} [header_image] - Form header image that will be shown to the user.
 * @property {string} title - Form title that will be shown to the user.
 * @property {string} [description] - Form description that will be shown to the user.
 * @property {Priority} priority
 * @property {boolean} login_required - If login is required to make a form
 *   response submission.
 * @property {boolean} should_notify - If new response submission for the form
 *   should be notified to the assignees.
 * @property {string} [success_message] - Message that is to be shown on
 *   successful form response submission.
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs - List of all the form fields.
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id - Unique identifier for the form.
 */
/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feedback form.
 * @property {string} [title] - Title for the feedback form.
 * @property {Object} [timestamps] - Timestamp details of feedback form.
 */
/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier.
 * @property {string} key - Category key value identifier.
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id] - Group id of category related data.
 * @property {FeedbackForm} [feedback_form]
 */
/**
 * @typedef TicketHistory
 * @property {string} type - Type of the history event.
 * @property {Object} value - Data of the history event.
 * @property {string} ticket_id - Readable ticket number.
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by] - User who created the history event.
 * @property {string} _id - Unique identifier of the history event.
 * @property {string} [updated_at] - Time of last update of the history event.
 * @property {string} [created_at] - Time of creation of the history event.
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of company and application related
 *   to the ticket.
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket.
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by] - User details of ticket creator.
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned.
 * @property {string[]} [tags] - Tags relevant to ticket.
 * @property {Object} [_custom_json] - Custom json relevant to the ticket.
 * @property {boolean} [is_feedback_pending] - If feedback submission is pending
 *   for the ticket.
 * @property {Object} [integration] - Integration type and its details of the ticket.
 * @property {string} _id - Unique identifier for the ticket.
 * @property {string} [updated_at] - Time when the ticket was last updated.
 * @property {string} [created_at] - Time when the ticket was created.
 */
/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */
/** @typedef {"rating" | "log" | "comment" | "thread"} HistoryTypeEnum */
/**
 * @typedef {| "image"
 *   | "video"
 *   | "file"
 *   | "youtube"
 *   | "product"
 *   | "collection"
 *   | "brand"
 *   | "shipment"
 *   | "order"} TicketAssetTypeEnum
 */
/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */
declare class LeadApplicationModel {
}
declare namespace LeadApplicationModel {
    export { TicketHistoryPayload, CustomFormSubmissionPayload, SubmitCustomFormResponse, FormFieldResponse, FormFieldResponseValues, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, SubmitButton, PollForAssignment, CustomForm, FeedbackForm, TicketCategory, TicketHistory, Ticket, PriorityEnum, HistoryTypeEnum, TicketAssetTypeEnum, TicketSourceEnum };
}
/** @returns {TicketHistoryPayload} */
declare function TicketHistoryPayload(): TicketHistoryPayload;
type TicketHistoryPayload = {
    /**
     * - Details of history event.
     */
    value: any;
    type: HistoryTypeEnum;
};
/** @returns {CustomFormSubmissionPayload} */
declare function CustomFormSubmissionPayload(): CustomFormSubmissionPayload;
type CustomFormSubmissionPayload = {
    /**
     * - Custom form response.
     */
    response: any[];
    /**
     * - List of all attachments related to the form.
     */
    attachments?: TicketAsset[];
};
/** @returns {SubmitCustomFormResponse} */
declare function SubmitCustomFormResponse(): SubmitCustomFormResponse;
type SubmitCustomFormResponse = {
    /**
     * - Success message for form submission.
     */
    message: string;
    ticket?: Ticket;
    response?: FormFieldResponse;
};
/** @returns {FormFieldResponse} */
declare function FormFieldResponse(): FormFieldResponse;
type FormFieldResponse = {
    /**
     * - Unique identifier for a custom form response.
     */
    _id?: string;
    /**
     * - Version of the form.
     */
    __v?: number;
    /**
     * - Unique identifier for a Sales channel.
     */
    application_id?: string;
    /**
     * - A short, human-readable, URL-friendly unique
     * identifier for a custom form.
     */
    form_slug?: string;
    created_on?: CreatedOn;
    /**
     * - Data related to
     * acknowledgement on submission of custom form.
     */
    response?: FormFieldResponseValues[];
};
/** @returns {FormFieldResponseValues} */
declare function FormFieldResponseValues(): FormFieldResponseValues;
type FormFieldResponseValues = {
    /**
     * - Keyname of field against which the input was
     * filled in custom form.
     */
    key?: string;
};
/** @returns {TicketContext} */
declare function TicketContext(): TicketContext;
type TicketContext = {
    /**
     * - Unique identifier for a Sales channel.
     */
    application_id?: string;
    /**
     * - Company ID related to the ticket.
     */
    company_id: string;
};
/** @returns {CreatedOn} */
declare function CreatedOn(): CreatedOn;
type CreatedOn = {
    /**
     * - Useragent details.
     */
    user_agent: string;
};
/** @returns {TicketAsset} */
declare function TicketAsset(): TicketAsset;
type TicketAsset = {
    /**
     * - Display text for asset.
     */
    display?: string;
    /**
     * - To be used for details.
     */
    value: string;
    type: TicketAssetTypeEnum;
};
/** @returns {TicketContent} */
declare function TicketContent(): TicketContent;
type TicketContent = {
    /**
     * - Title for ticket.
     */
    title: string;
    /**
     * - Long description of issue.
     */
    description?: string;
    /**
     * - List of all attachments related to
     * the ticket.
     */
    attachments?: TicketAsset[];
};
/** @returns {AddTicketPayload} */
declare function AddTicketPayload(): AddTicketPayload;
type AddTicketPayload = {
    /**
     * - Creator of the ticket.
     */
    created_by?: any;
    /**
     * - Status of the ticket.
     */
    status?: string;
    priority?: PriorityEnum;
    /**
     * - Category of the ticket.
     */
    category: string;
    content: TicketContent;
    /**
     * - Optional custom data that needs to be sent.
     */
    _custom_json?: any;
    /**
     * - List of emails to be informed for ticket updates.
     */
    subscribers?: string[];
};
/** @returns {Priority} */
declare function Priority(): Priority;
type Priority = {
    key: PriorityEnum;
    /**
     * - Display text for priority.
     */
    display: string;
    /**
     * - Color for priority.
     */
    color: string;
};
/** @returns {Status} */
declare function Status(): Status;
type Status = {
    /**
     * - Key for status.
     */
    key: string;
    /**
     * - Display text for status.
     */
    display: string;
    /**
     * - Color for status.
     */
    color: string;
};
/** @returns {SubmitButton} */
declare function SubmitButton(): SubmitButton;
type SubmitButton = {
    /**
     * - Title for submit button.
     */
    title: string;
    /**
     * - Title color submit button.
     */
    title_color: string;
    /**
     * - Color for submit button.
     */
    background_color: string;
};
/** @returns {PollForAssignment} */
declare function PollForAssignment(): PollForAssignment;
type PollForAssignment = {
    /**
     * - Duration for polling of staff.
     */
    duration: number;
    /**
     * - Message for polling.
     */
    message: string;
    /**
     * - Message for successful polling.
     */
    success_message: string;
    /**
     * - Message if polling failed.
     */
    failure_message: string;
};
/** @returns {CustomForm} */
declare function CustomForm(): CustomForm;
type CustomForm = {
    /**
     * - Application ID - Identifier for a Sales channel.
     */
    application_id: string;
    /**
     * - Slug for the form, which is to be used for
     * accessing the form.
     */
    slug: string;
    /**
     * - Form header image that will be shown to the user.
     */
    header_image?: string;
    /**
     * - Form title that will be shown to the user.
     */
    title: string;
    /**
     * - Form description that will be shown to the user.
     */
    description?: string;
    priority: Priority;
    /**
     * - If login is required to make a form
     * response submission.
     */
    login_required: boolean;
    /**
     * - If new response submission for the form
     * should be notified to the assignees.
     */
    should_notify: boolean;
    /**
     * - Message that is to be shown on
     * successful form response submission.
     */
    success_message?: string;
    submit_button?: SubmitButton;
    /**
     * - List of all the form fields.
     */
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    /**
     * - Unique identifier for the form.
     */
    _id: string;
};
/** @returns {FeedbackForm} */
declare function FeedbackForm(): FeedbackForm;
type FeedbackForm = {
    /**
     * - Input details for the feedback form.
     */
    inputs?: any;
    /**
     * - Title for the feedback form.
     */
    title?: string;
    /**
     * - Timestamp details of feedback form.
     */
    timestamps?: any;
};
/** @returns {TicketCategory} */
declare function TicketCategory(): TicketCategory;
type TicketCategory = {
    /**
     * - Category display value identifier.
     */
    display: string;
    /**
     * - Category key value identifier.
     */
    key: string;
    sub_categories?: TicketCategory;
    /**
     * - Group id of category related data.
     */
    group_id?: number;
    feedback_form?: FeedbackForm;
};
/** @returns {TicketHistory} */
declare function TicketHistory(): TicketHistory;
type TicketHistory = {
    /**
     * - Type of the history event.
     */
    type: string;
    /**
     * - Data of the history event.
     */
    value: any;
    /**
     * - Readable ticket number.
     */
    ticket_id: string;
    created_on?: CreatedOn;
    /**
     * - User who created the history event.
     */
    created_by?: any;
    /**
     * - Unique identifier of the history event.
     */
    _id: string;
    /**
     * - Time of last update of the history event.
     */
    updated_at?: string;
    /**
     * - Time of creation of the history event.
     */
    created_at?: string;
};
/** @returns {Ticket} */
declare function Ticket(): Ticket;
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    /**
     * - Details of company and application related
     * to the ticket.
     */
    response_id?: string;
    content?: TicketContent;
    category: TicketCategory;
    /**
     * - Sub-category assigned to the ticket.
     */
    sub_category?: string;
    source: TicketSourceEnum;
    status: Status;
    priority: Priority;
    /**
     * - User details of ticket creator.
     */
    created_by?: any;
    /**
     * - Details of support staff to whom ticket is assigned.
     */
    assigned_to?: any;
    /**
     * - Tags relevant to ticket.
     */
    tags?: string[];
    /**
     * - Custom json relevant to the ticket.
     */
    _custom_json?: any;
    /**
     * - If feedback submission is pending
     * for the ticket.
     */
    is_feedback_pending?: boolean;
    /**
     * - Integration type and its details of the ticket.
     */
    integration?: any;
    /**
     * - Unique identifier for the ticket.
     */
    _id: string;
    /**
     * - Time when the ticket was last updated.
     */
    updated_at?: string;
    /**
     * - Time when the ticket was created.
     */
    created_at?: string;
};
/**
 * Enum: PriorityEnum Used By: Lead
 *
 * @returns {PriorityEnum}
 */
declare function PriorityEnum(): PriorityEnum;
type PriorityEnum = "low" | "medium" | "high" | "urgent";
/**
 * Enum: HistoryTypeEnum Used By: Lead
 *
 * @returns {HistoryTypeEnum}
 */
declare function HistoryTypeEnum(): HistoryTypeEnum;
type HistoryTypeEnum = "rating" | "log" | "comment" | "thread";
/**
 * Enum: TicketAssetTypeEnum Used By: Lead
 *
 * @returns {TicketAssetTypeEnum}
 */
declare function TicketAssetTypeEnum(): TicketAssetTypeEnum;
type TicketAssetTypeEnum = "image" | "video" | "file" | "youtube" | "product" | "collection" | "brand" | "shipment" | "order";
/**
 * Enum: TicketSourceEnum Used By: Lead
 *
 * @returns {TicketSourceEnum}
 */
declare function TicketSourceEnum(): TicketSourceEnum;
type TicketSourceEnum = "platform_panel" | "sales_channel";
