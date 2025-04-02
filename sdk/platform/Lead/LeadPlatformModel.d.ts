export = LeadPlatformModel;
/**
 * @typedef GeneralConfigResponse
 * @property {string} [_id]
 * @property {SupportCommunicationSchema[]} [support_communication]
 * @property {boolean} [show_communication_info]
 * @property {boolean} [show_support_dris]
 * @property {string} [type]
 * @property {GeneralConfigIntegrationSchema} [integration]
 * @property {boolean} [allow_ticket_creation]
 * @property {boolean} [show_listing]
 * @property {string[]} [available_integration]
 * @property {boolean} [enable_dris]
 * @property {SupportSchema} [support_email]
 * @property {SupportSchema} [support_phone]
 * @property {SupportSchema} [support_faq]
 */
/**
 * @typedef SupportSchema
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SupportCommunicationSchema
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GeneralConfigIntegrationSchema
 * @property {string} [type]
 */
/**
 * @typedef TicketList
 * @property {Ticket[]} [items] - List of tickets
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items] - List of forms
 * @property {Page} [page]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug - Slug for the form
 * @property {string} title - Title for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {string} priority
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} title - Title for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {string} [description] - Description of the form
 * @property {string} priority
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {boolean} [login_required] - Denotes if login is required to make a
 *   form response submission
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category] - Category assigned to the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string} [source] - Denotes if the ticket was created at company or
 *   application level
 * @property {string} [status] - Denotes in what state is the ticket
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags] - Tags relevant to ticket
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code - Country code
 * @property {string} phone_number - Phone number
 */
/**
 * @typedef Filter
 * @property {Priority[]} priorities - List of possible priorities for tickets
 * @property {TicketCategory[]} [categories] - List of possible categories for tickets
 * @property {Status[]} statuses - List of possible statuses for tickets
 * @property {Object[]} [assignees] - List of support staff availble for tickets
 *   assignment
 * @property {Object} [all_categories]
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} company_id - Company ID related to the ticket
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
 * @property {string} [platform]
 */
/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {string} value - To be used for details
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title - Title for ticket
 * @property {string} [description] - Long description of issue
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the ticket
 */
/**
 * @typedef AdditionalInfoSchema
 * @property {string} [display_name] - Display name for additional info
 * @property {string} [display_value] - Display value for additional info
 * @property {number} [priority] - Priority for additional info
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket
 * @property {string} [status] - Status of the ticket
 * @property {PriorityEnum} [priority]
 * @property {string} category - Category of the ticket
 * @property {AdditionalInfoSchema[]} [additional_info]
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string[]} [subscribers]
 */
/**
 * @typedef Priority
 * @property {string} key - Priority value of the ticket like urgent, low, medium, high.
 * @property {string} display - Display text for priority
 * @property {string} color - Color for priority
 */
/**
 * @typedef SLA
 * @property {string} resolution_time
 */
/**
 * @typedef Status
 * @property {string} key - Key for status
 * @property {string} display - Display text for status
 * @property {string} color - Color for status
 */
/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items] - List of all ticket feedback for the ticket
 */
/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response] - Key-value pairs of all the form fields
 *   and their response
 */
/**
 * @typedef SubmitButton
 * @property {string} title - Title for submit button
 * @property {string} title_color - Title color submit button
 * @property {string} background_color - Color for submit button
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff
 * @property {string} message - Message for polling
 * @property {string} success_message - Message for successful polling
 * @property {string} failure_message - Message if polling failed
 */
/**
 * @typedef CustomForm
 * @property {string} application_id - Application ID for form
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {string} title - Form title that will be shown to the user
 * @property {string} [description] - Form description that will be shown to the user
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs - List of all the form fields
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string[]} [available_assignees]
 * @property {string} _id - Unique identifier for the form
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [created_by]
 */
/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feed back form
 * @property {string} [title] - Title for the feed back form
 * @property {Object} [timestamps] - Gives details of category releted data
 */
/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {string} key - Category key value identifier
 * @property {TicketCategory[]} [sub_categories]
 * @property {number} [group_id] - Group id of category releted data
 * @property {FeedbackForm} [feedback_form]
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display - Question/Title of the form field
 * @property {string} key - Key of the form field
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id - Unique identifier for the feedback
 * @property {string} ticket_id - Readable ticket number
 * @property {string} company_id - Company id for which ticket was raised
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category] - Category of the ticket
 * @property {Object} [user] - User who submitted the feedback
 * @property {string} [updated_at] - Time when the feedback was last updated
 * @property {string} [created_at] - Time when the feedback was created
 * @property {number} [__v]
 */
/**
 * @typedef TicketHistory
 * @property {string} type - Type of the history event
 * @property {Object} value - Data of the history event
 * @property {string} ticket_id - Readable ticket number
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by] - User who created the history event
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {number} [__v]
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {SLA} [sla]
 * @property {Object} [created_by] - User details of ticket creator
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 * @property {string} [created_at] - Time when the ticket was created
 * @property {string} [video_room_id]
 * @property {string[]} [subscribers]
 * @property {AdditionalInfoSchema[]} [additional_info]
 * @property {number} [__v]
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 */
/**
 * @typedef Error4XX
 * @property {Object} [message]
 * @property {string} [stack]
 * @property {string} [sentry]
 */
/**
 * @typedef NotFoundError
 * @property {string} [message]
 */
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
/** @typedef {"high" | "low" | "medium" | "urgent"} PriorityEnum */
/** @typedef {"rating" | "log" | "comment" | "diff" | "thread"} HistoryTypeEnum */
/** @typedef {"platform_panel" | "sales_channel" | "partner_panel"} TicketSourceEnum */
declare class LeadPlatformModel {
}
declare namespace LeadPlatformModel {
    export { GeneralConfigResponse, SupportSchema, SupportCommunicationSchema, GeneralConfigIntegrationSchema, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, NotifyUser, Filter, TicketHistoryPayload, TicketContext, CreatedOn, TicketAsset, TicketContent, AdditionalInfoSchema, AddTicketPayload, Priority, SLA, Status, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, FeedbackForm, TicketCategory, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Error4XX, NotFoundError, TicketAssetTypeEnum, PriorityEnum, HistoryTypeEnum, TicketSourceEnum };
}
/** @returns {GeneralConfigResponse} */
declare function GeneralConfigResponse(): GeneralConfigResponse;
type GeneralConfigResponse = {
    _id?: string;
    support_communication?: SupportCommunicationSchema[];
    show_communication_info?: boolean;
    show_support_dris?: boolean;
    type?: string;
    integration?: GeneralConfigIntegrationSchema;
    allow_ticket_creation?: boolean;
    show_listing?: boolean;
    available_integration?: string[];
    enable_dris?: boolean;
    support_email?: SupportSchema;
    support_phone?: SupportSchema;
    support_faq?: SupportSchema;
};
/** @returns {SupportSchema} */
declare function SupportSchema(): SupportSchema;
type SupportSchema = {
    value?: string;
    description?: string;
    enabled?: boolean;
};
/** @returns {SupportCommunicationSchema} */
declare function SupportCommunicationSchema(): SupportCommunicationSchema;
type SupportCommunicationSchema = {
    type?: string;
    title?: string;
    description?: string;
    enabled?: boolean;
};
/** @returns {GeneralConfigIntegrationSchema} */
declare function GeneralConfigIntegrationSchema(): GeneralConfigIntegrationSchema;
type GeneralConfigIntegrationSchema = {
    type?: string;
};
/** @returns {TicketList} */
declare function TicketList(): TicketList;
type TicketList = {
    /**
     * - List of tickets
     */
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - Total number of items.
     */
    total?: number;
};
/** @returns {TicketHistoryList} */
declare function TicketHistoryList(): TicketHistoryList;
type TicketHistoryList = {
    /**
     * - List of ticket history
     */
    items?: TicketHistory[];
    page?: Page;
};
/** @returns {CustomFormList} */
declare function CustomFormList(): CustomFormList;
type CustomFormList = {
    /**
     * - List of forms
     */
    items?: CustomForm[];
    page?: Page;
};
/** @returns {CreateCustomFormPayload} */
declare function CreateCustomFormPayload(): CreateCustomFormPayload;
type CreateCustomFormPayload = {
    /**
     * - Slug for the form
     */
    slug: string;
    /**
     * - Title for the form
     */
    title: string;
    /**
     * - List of all the form components
     */
    inputs: any[];
    /**
     * - Description of the form
     */
    description?: string;
    /**
     * - Header image that is to be shown for the form
     */
    header_image?: string;
    priority: string;
    /**
     * - Indicates if staff should be notified
     * when a response is received
     */
    should_notify?: boolean;
    /**
     * - Success message that will be shown on submission
     */
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
/** @returns {EditCustomFormPayload} */
declare function EditCustomFormPayload(): EditCustomFormPayload;
type EditCustomFormPayload = {
    /**
     * - Title for the form
     */
    title: string;
    /**
     * - List of all the form components
     */
    inputs: any[];
    /**
     * - Description of the form
     */
    description?: string;
    priority: string;
    /**
     * - Indicates if staff should be notified
     * when a response is received
     */
    should_notify?: boolean;
    /**
     * - Denotes if login is required to make a
     * form response submission
     */
    login_required?: boolean;
    /**
     * - Success message that will be shown on submission
     */
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
/** @returns {EditTicketPayload} */
declare function EditTicketPayload(): EditTicketPayload;
type EditTicketPayload = {
    content?: TicketContent;
    /**
     * - Category assigned to the ticket
     */
    category?: string;
    /**
     * - Sub-category assigned to the ticket
     */
    sub_category?: string;
    /**
     * - Denotes if the ticket was created at company or
     * application level
     */
    source?: string;
    /**
     * - Denotes in what state is the ticket
     */
    status?: string;
    priority?: PriorityEnum;
    assigned_to?: AgentChangePayload;
    /**
     * - Tags relevant to ticket
     */
    tags?: string[];
};
/** @returns {AgentChangePayload} */
declare function AgentChangePayload(): AgentChangePayload;
type AgentChangePayload = {
    /**
     * - Agent's unique ID
     */
    agent_id: string;
};
/** @returns {NotifyUser} */
declare function NotifyUser(): NotifyUser;
type NotifyUser = {
    /**
     * - Country code
     */
    country_code: string;
    /**
     * - Phone number
     */
    phone_number: string;
};
/** @returns {Filter} */
declare function Filter(): Filter;
type Filter = {
    /**
     * - List of possible priorities for tickets
     */
    priorities: Priority[];
    /**
     * - List of possible categories for tickets
     */
    categories?: TicketCategory[];
    /**
     * - List of possible statuses for tickets
     */
    statuses: Status[];
    /**
     * - List of support staff availble for tickets
     * assignment
     */
    assignees?: any[];
    all_categories?: any;
};
/** @returns {TicketHistoryPayload} */
declare function TicketHistoryPayload(): TicketHistoryPayload;
type TicketHistoryPayload = {
    /**
     * - Details of history event
     */
    value: any;
    type: HistoryTypeEnum;
};
/** @returns {TicketContext} */
declare function TicketContext(): TicketContext;
type TicketContext = {
    /**
     * - Application ID related to the ticket
     */
    application_id?: string;
    /**
     * - Company ID related to the ticket
     */
    company_id: string;
};
/** @returns {CreatedOn} */
declare function CreatedOn(): CreatedOn;
type CreatedOn = {
    /**
     * - Useragent details
     */
    user_agent: string;
    platform?: string;
};
/** @returns {TicketAsset} */
declare function TicketAsset(): TicketAsset;
type TicketAsset = {
    /**
     * - Display text for asset
     */
    display?: string;
    /**
     * - To be used for details
     */
    value: string;
    type: TicketAssetTypeEnum;
};
/** @returns {TicketContent} */
declare function TicketContent(): TicketContent;
type TicketContent = {
    /**
     * - Title for ticket
     */
    title: string;
    /**
     * - Long description of issue
     */
    description?: string;
    /**
     * - List of all attachments related to the ticket
     */
    attachments?: TicketAsset[];
};
/** @returns {AdditionalInfoSchema} */
declare function AdditionalInfoSchema(): AdditionalInfoSchema;
type AdditionalInfoSchema = {
    /**
     * - Display name for additional info
     */
    display_name?: string;
    /**
     * - Display value for additional info
     */
    display_value?: string;
    /**
     * - Priority for additional info
     */
    priority?: number;
};
/** @returns {AddTicketPayload} */
declare function AddTicketPayload(): AddTicketPayload;
type AddTicketPayload = {
    /**
     * - Creator of the ticket
     */
    created_by?: any;
    /**
     * - Status of the ticket
     */
    status?: string;
    priority?: PriorityEnum;
    /**
     * - Category of the ticket
     */
    category: string;
    additional_info?: AdditionalInfoSchema[];
    content: TicketContent;
    /**
     * - Optional custom data that needs to be sent
     */
    _custom_json?: any;
    subscribers?: string[];
};
/** @returns {Priority} */
declare function Priority(): Priority;
type Priority = {
    /**
     * - Priority value of the ticket like urgent, low, medium, high.
     */
    key: string;
    /**
     * - Display text for priority
     */
    display: string;
    /**
     * - Color for priority
     */
    color: string;
};
/** @returns {SLA} */
declare function SLA(): SLA;
type SLA = {
    resolution_time: string;
};
/** @returns {Status} */
declare function Status(): Status;
type Status = {
    /**
     * - Key for status
     */
    key: string;
    /**
     * - Display text for status
     */
    display: string;
    /**
     * - Color for status
     */
    color: string;
};
/** @returns {TicketFeedbackList} */
declare function TicketFeedbackList(): TicketFeedbackList;
type TicketFeedbackList = {
    /**
     * - List of all ticket feedback for the ticket
     */
    items?: TicketFeedback[];
};
/** @returns {TicketFeedbackPayload} */
declare function TicketFeedbackPayload(): TicketFeedbackPayload;
type TicketFeedbackPayload = {
    /**
     * - Key-value pairs of all the form fields
     * and their response
     */
    form_response?: any;
};
/** @returns {SubmitButton} */
declare function SubmitButton(): SubmitButton;
type SubmitButton = {
    /**
     * - Title for submit button
     */
    title: string;
    /**
     * - Title color submit button
     */
    title_color: string;
    /**
     * - Color for submit button
     */
    background_color: string;
};
/** @returns {PollForAssignment} */
declare function PollForAssignment(): PollForAssignment;
type PollForAssignment = {
    /**
     * - Duration for polling of staff
     */
    duration: number;
    /**
     * - Message for polling
     */
    message: string;
    /**
     * - Message for successful polling
     */
    success_message: string;
    /**
     * - Message if polling failed
     */
    failure_message: string;
};
/** @returns {CustomForm} */
declare function CustomForm(): CustomForm;
type CustomForm = {
    /**
     * - Application ID for form
     */
    application_id: string;
    /**
     * - Slug for the form, which is to be used for accessing the form
     */
    slug: string;
    /**
     * - Form header image that will be shown to the user
     */
    header_image?: string;
    /**
     * - Form title that will be shown to the user
     */
    title: string;
    /**
     * - Form description that will be shown to the user
     */
    description?: string;
    /**
     * - Denotes if login is required to make a
     * form response submission
     */
    login_required: boolean;
    /**
     * - Denotes if new response submission for
     * the form should be notified to the assignees
     */
    should_notify: boolean;
    /**
     * - Message that is to be shown on
     * succesfull form response submission
     */
    success_message?: string;
    submit_button?: SubmitButton;
    /**
     * - List of all the form fields
     */
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    available_assignees?: string[];
    /**
     * - Unique identifier for the form
     */
    _id: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    created_by?: string;
};
/** @returns {FeedbackForm} */
declare function FeedbackForm(): FeedbackForm;
type FeedbackForm = {
    /**
     * - Input details for the feed back form
     */
    inputs?: any;
    /**
     * - Title for the feed back form
     */
    title?: string;
    /**
     * - Gives details of category releted data
     */
    timestamps?: any;
};
/** @returns {TicketCategory} */
declare function TicketCategory(): TicketCategory;
type TicketCategory = {
    /**
     * - Category display value identifier
     */
    display: string;
    /**
     * - Category key value identifier
     */
    key: string;
    sub_categories?: TicketCategory[];
    /**
     * - Group id of category releted data
     */
    group_id?: number;
    feedback_form?: FeedbackForm;
};
/** @returns {FeedbackResponseItem} */
declare function FeedbackResponseItem(): FeedbackResponseItem;
type FeedbackResponseItem = {
    /**
     * - Question/Title of the form field
     */
    display: string;
    /**
     * - Key of the form field
     */
    key: string;
};
/** @returns {TicketFeedback} */
declare function TicketFeedback(): TicketFeedback;
type TicketFeedback = {
    /**
     * - Unique identifier for the feedback
     */
    _id: string;
    /**
     * - Readable ticket number
     */
    ticket_id: string;
    /**
     * - Company id for which ticket was raised
     */
    company_id: string;
    response: FeedbackResponseItem[];
    /**
     * - Category of the ticket
     */
    category?: string;
    /**
     * - User who submitted the feedback
     */
    user?: any;
    /**
     * - Time when the feedback was last updated
     */
    updated_at?: string;
    /**
     * - Time when the feedback was created
     */
    created_at?: string;
    __v?: number;
};
/** @returns {TicketHistory} */
declare function TicketHistory(): TicketHistory;
type TicketHistory = {
    /**
     * - Type of the history event
     */
    type: string;
    /**
     * - Data of the history event
     */
    value: any;
    /**
     * - Readable ticket number
     */
    ticket_id: string;
    created_on?: CreatedOn;
    /**
     * - User who created the history event
     */
    created_by?: any;
    /**
     * - Unique identifier of the history event
     */
    _id: string;
    /**
     * - Time of last update of the history event
     */
    updated_at?: string;
    /**
     * - Time of creation of the history event
     */
    created_at?: string;
    __v?: number;
};
/** @returns {Ticket} */
declare function Ticket(): Ticket;
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    /**
     * - Details of company and application
     * realated to the ticket
     */
    response_id?: string;
    content?: TicketContent;
    category: TicketCategory;
    /**
     * - Sub-category assigned to the ticket
     */
    sub_category?: string;
    source: TicketSourceEnum;
    status: Status;
    priority: Priority;
    sla?: SLA;
    /**
     * - User details of ticket creator
     */
    created_by?: any;
    /**
     * - Details of support staff to whom ticket is assigned
     */
    assigned_to?: any;
    /**
     * - Tags relevant to ticket
     */
    tags?: string[];
    /**
     * - Custom json relevant to the ticket
     */
    _custom_json?: any;
    /**
     * - Denotes if feedback submission is
     * pending for the ticket
     */
    is_feedback_pending?: boolean;
    /**
     * - Integration type and its details of the ticket
     */
    integration?: any;
    /**
     * - Unique identifier for the ticket
     */
    _id: string;
    /**
     * - Time when the ticket was last updated
     */
    updated_at?: string;
    /**
     * - Time when the ticket was created
     */
    created_at?: string;
    video_room_id?: string;
    subscribers?: string[];
    additional_info?: AdditionalInfoSchema[];
    __v?: number;
    /**
     * - List of all attachments related to the form
     */
    attachments?: TicketAsset[];
};
/** @returns {Error4XX} */
declare function Error4XX(): Error4XX;
type Error4XX = {
    message?: any;
    stack?: string;
    sentry?: string;
};
/** @returns {NotFoundError} */
declare function NotFoundError(): NotFoundError;
type NotFoundError = {
    message?: string;
};
/**
 * Enum: TicketAssetTypeEnum Used By: Lead
 *
 * @returns {TicketAssetTypeEnum}
 */
declare function TicketAssetTypeEnum(): TicketAssetTypeEnum;
type TicketAssetTypeEnum = "image" | "video" | "file" | "youtube" | "product" | "collection" | "brand" | "shipment" | "order";
/**
 * Enum: PriorityEnum Used By: Lead
 *
 * @returns {PriorityEnum}
 */
declare function PriorityEnum(): PriorityEnum;
type PriorityEnum = "high" | "low" | "medium" | "urgent";
/**
 * Enum: HistoryTypeEnum Used By: Lead
 *
 * @returns {HistoryTypeEnum}
 */
declare function HistoryTypeEnum(): HistoryTypeEnum;
type HistoryTypeEnum = "rating" | "log" | "comment" | "diff" | "thread";
/**
 * Enum: TicketSourceEnum Used By: Lead
 *
 * @returns {TicketSourceEnum}
 */
declare function TicketSourceEnum(): TicketSourceEnum;
type TicketSourceEnum = "platform_panel" | "sales_channel" | "partner_panel";
