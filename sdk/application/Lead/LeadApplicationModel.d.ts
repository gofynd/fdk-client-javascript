export = LeadApplicationModel;
/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content - Content for the ticket
 * @property {Object} [created_by] - Creator of the ticket
 * @property {PriorityEnum} [priority] - Priority of the ticket
 * @property {string} [status] - Status of the ticket
 * @property {string[]} [subscribers]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id - Agent's unique ID
 */
/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success - Denotes if operation was successfully
 */
/**
 * @typedef CommunicationDetails
 * @property {string} [description] - Short description for the communication method
 * @property {boolean} [enabled] - Denotes if this communication method has to be shown
 * @property {string} [title] - Title for the communication method
 * @property {string} [type] - Enum type for the communication method
 * @property {string} [value] - Value for the communication method
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {PollForAssignment} [poll_for_assignment] - Describes how polling
 *   will be done for the tickets createds
 * @property {PriorityEnum} priority - Describes the priority of the tickets
 *   created by the form
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} slug - Slug for the form
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {string} title - Title for the form
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {NotifyUser[]} [notify] - List of people to be notified
 * @property {string} unique_name - Ticket id
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name - Video Room's unique name
 */
/**
 * @typedef CustomForm
 * @property {string} _id - Unique identifier for the form
 * @property {string} application_id - Application ID for form
 * @property {CreatedOn} [created_on] - Gives details of when the form was created
 * @property {string} [description] - Form description that will be shown to the user
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {Object[]} inputs - List of all the form fields
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment] - Details of how polling
 *   should be done for support
 * @property {Priority} priority - Sets priority of tickets created by form response
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {SubmitButton} [submit_button] - Details for submit button
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {string} title - Form title that will be shown to the user
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items] - List of forms
 * @property {Page} [page] - Describes the pagination state
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 * @property {Object[]} response - Form response
 */
/**
 * @typedef Debug
 * @property {string} [platform] - Platform of user
 * @property {string} [source] - Source of user
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} [description] - Description of the form
 * @property {string} [header_image] - Header image that is to be shown for the form
 * @property {Object[]} inputs - List of all the form components
 * @property {boolean} [login_required] - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment] - Describes how polling
 *   will be done for the tickets createds
 * @property {PriorityEnum} priority - Describes the priority of the tickets
 *   created by the form
 * @property {boolean} [should_notify] - Indicates if staff should be notified
 *   when a response is received
 * @property {string} [success_message] - Success message that will be shown on submission
 * @property {string} title - Title for the form
 */
/**
 * @typedef EditTicketPayload
 * @property {AgentChangePayload} [assigned_to] - Details of support staff to
 *   whom ticket is assigned
 * @property {string} [category] - Category assigned to the ticket
 * @property {TicketContent} [content] - Ticket conetent details
 * @property {PriorityEnum} [priority] - Denotes the priority of ticket
 * @property {string} [source] - Denotes if the ticket was created at company or
 *   application level
 * @property {string} [status] - Denotes in what state is the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 */
/**
 * @typedef Email
 * @property {boolean} [active] - Denotes if the email is active
 * @property {string} [email] - Email Address
 * @property {boolean} [primary] - Denotes it's the primary email for the account
 * @property {boolean} [verified] - Denotes it's a verified email
 */
/**
 * @typedef FeedbackForm
 * @property {Object} [inputs] - Input details for the feed back form
 * @property {Object} [timestamps] - Gives details of category releted data
 * @property {string} [title] - Title for the feed back form
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display - Question/Title of the form field
 * @property {string} key - Key of the form field
 * @property {string} value - User response value for the form field
 */
/**
 * @typedef Filter
 * @property {Object[]} assignees - List of support staff availble for tickets assignment
 * @property {TicketCategory[]} [categories] - List of possible categories for tickets
 * @property {Priority[]} priorities - List of possible priorities for tickets
 * @property {Status[]} statuses - List of possible statuses for tickets
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */
/**
 * @typedef IntegrationConfig
 * @property {string} [_id] - Unique id
 * @property {boolean} allow_ticket_creation - Denotes ticket creation enable or
 *   disable on platform
 * @property {string} [base_url] - Integration base url for validate and create ticket
 * @property {CategoryData} [category_data] - Support category array list details
 * @property {string} [category_sync_apikey] - Integration apikey to sync
 *   category of selected type
 * @property {boolean} [config_completed] - Denotes the current intergration is
 *   completed or partially done
 * @property {string} [create_ticket_apikey] - Integration apikey to validate
 *   and create ticket
 * @property {string} integration_type - Enum string values for integration
 * @property {boolean} show_listing - Denotes ticket listing enable or disable on platform
 * @property {string} [update_ticket_apikey] - Integration apikey to update ticket
 * @property {string} [webhook_apikey] - Integration webhook apikey to got
 *   callbacks from integration type dashboard like freshdesk, etc
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code - Country code
 * @property {string} phone_number - Phone number
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef Participant
 * @property {string} [identity] - Unique identifier of participant
 * @property {string} [status] - Status of participant
 * @property {UserSchema} [user] - Details of participant
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active] - Denotes if the phone number is active
 * @property {number} [country_code] - Country code
 * @property {string} [phone] - Phone number
 * @property {boolean} [primary] - Denotes it's the primary phone number for the account
 * @property {boolean} [verified] - Denotes it's a verified phone number
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration - Duration for polling of staff
 * @property {string} failure_message - Message if polling failed
 * @property {string} message - Message for polling
 * @property {string} success_message - Message for successful polling
 */
/**
 * @typedef Priority
 * @property {string} color - Color for priority
 * @property {string} display - Display text for priority
 * @property {PriorityEnum} key - Key for priority
 */
/**
 * @typedef Status
 * @property {string} color - Color for status
 * @property {string} display - Display text for status
 * @property {string} key - Key for status
 */
/**
 * @typedef SubmitButton
 * @property {string} background_color - Color for submit button
 * @property {string} title - Title for submit button
 * @property {string} title_color - Title color submit button
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission
 * @property {Ticket} [ticket] - Ticket created on form submission
 */
/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id] - Unique id
 * @property {Object} [integration] - Contains integrations basic information
 * @property {boolean} [show_communication_info] - Denotes if support
 *   communication info should be shown
 * @property {boolean} [show_support_dris] - Denotes if support DRIS info should be shown
 * @property {CommunicationDetails} [support_communication] - Support
 *   communication array list details
 * @property {CommunicationDetails} [support_email] - Support e-mail details
 * @property {CommunicationDetails} [support_faq] - Support FAQ details
 * @property {CommunicationDetails} [support_phone] - Support Phone number details
 * @property {string} [type] - The enity/platform for which the config is stored
 */
/**
 * @typedef Ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {TicketCategory} category - Category assigned to the ticket
 * @property {TicketContent} [content] - Ticket conetent details
 * @property {TicketContext} [context] - Details of company and application
 *   realated to the ticket
 * @property {string} [created_at] - Time when the ticket was created
 * @property {Object} [created_by] - User details of ticket creator
 * @property {CreatedOn} [created_on] - Details of company and application
 *   realated to the ticket
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Priority} priority - Denotes the priority of ticket
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketSourceEnum} source - Denotes if the ticket was created at
 *   company or application level
 * @property {Status} status - Denotes in what state is the ticket
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 */
/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {TicketAssetTypeEnum} type - Type of asset
 * @property {string} value - To be used for details
 */
/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {FeedbackForm} [feedback_form] - Support category array list details
 * @property {number} [group_id] - Group id of category releted data
 * @property {string} key - Category key value identifier
 * @property {TicketCategory} [sub_categories] - Support category array list details
 */
/**
 * @typedef TicketContent
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the ticket
 * @property {string} [description] - Long description of issue
 * @property {string} title - Title for ticket
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} company_id - Company ID related to the ticket
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id - Unique identifier for the feedback
 * @property {string} [category] - Category of the ticket
 * @property {string} company_id - Company id for which ticket was raised
 * @property {string} [created_at] - Time when the feedback was created
 * @property {FeedbackResponseItem[]} response
 * @property {string} ticket_id - Readable ticket number
 * @property {string} [updated_at] - Time when the feedback was last updated
 * @property {Object} [user] - User who submitted the feedback
 */
/**
 * @typedef TicketFeedbackForm
 * @property {Object[]} [display] - List of all the form fields
 * @property {string} title - Feedback form title that will be shown to the user
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
 * @typedef TicketHistory
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {Object} [created_by] - User who created the history event
 * @property {CreatedOn} [created_on] - Time of creation of the history event
 * @property {string} ticket_id - Readable ticket number
 * @property {string} type - Type of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {Object} value - Data of the history event
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items] - List of ticket history
 * @property {Page} [page] - Describes the pagination state
 */
/**
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type - Type of history event
 * @property {Object} value - Details of history event
 */
/**
 * @typedef TicketList
 * @property {Filter} [filters] - All the filters available for tickets
 * @property {Ticket[]} [items] - List of tickets
 * @property {Page} [page] - Describes the pagination state
 */
/**
 * @typedef TicketSubCategory
 * @property {string} display - Display text for sub-category
 * @property {string} key - Key for sub-category
 * @property {TicketSubCategory} [sub_categories]
 */
/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {string} [dob]
 * @property {Email[]} [emails]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic_url]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/** @typedef {"rating" | "log" | "comment" | "thread"} HistoryTypeEnum */
/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */
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
/** @typedef {"default" | "freshdesk" | "kapture"} TicketIntegrationDetails */
/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */
declare class LeadApplicationModel {
}
declare namespace LeadApplicationModel {
    export { AddTicketPayload, AgentChangePayload, CategoryData, CloseVideoRoomResponse, CommunicationDetails, CreateCustomFormPayload, CreatedOn, CreateVideoRoomPayload, CreateVideoRoomResponse, CustomForm, CustomFormList, CustomFormSubmissionPayload, Debug, EditCustomFormPayload, EditTicketPayload, Email, FeedbackForm, FeedbackResponseItem, Filter, GetParticipantsInsideVideoRoomResponse, GetTokenForVideoRoomResponse, IntegrationConfig, NotifyUser, Page, Participant, PhoneNumber, PollForAssignment, Priority, Status, SubmitButton, SubmitCustomFormResponse, SupportGeneralConfig, Ticket, TicketAsset, TicketCategory, TicketContent, TicketContext, TicketFeedback, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, TicketHistory, TicketHistoryList, TicketHistoryPayload, TicketList, TicketSubCategory, UserSchema, HistoryTypeEnum, PriorityEnum, TicketAssetTypeEnum, TicketIntegrationDetails, TicketSourceEnum };
}
/** @returns {AddTicketPayload} */
declare function AddTicketPayload(): AddTicketPayload;
type AddTicketPayload = {
    /**
     * - Optional custom data that needs to be sent
     */
    _custom_json?: any;
    /**
     * - Category of the ticket
     */
    category: string;
    /**
     * - Content for the ticket
     */
    content: TicketContent;
    /**
     * - Creator of the ticket
     */
    created_by?: any;
    /**
     * - Priority of the ticket
     */
    priority?: PriorityEnum;
    /**
     * - Status of the ticket
     */
    status?: string;
    subscribers?: string[];
};
/** @returns {AgentChangePayload} */
declare function AgentChangePayload(): AgentChangePayload;
type AgentChangePayload = {
    /**
     * - Agent's unique ID
     */
    agent_id: string;
};
/** @returns {CategoryData} */
declare function CategoryData(): CategoryData;
type CategoryData = {
    list?: TicketCategory;
};
/** @returns {CloseVideoRoomResponse} */
declare function CloseVideoRoomResponse(): CloseVideoRoomResponse;
type CloseVideoRoomResponse = {
    /**
     * - Denotes if operation was successfully
     */
    success: boolean;
};
/** @returns {CommunicationDetails} */
declare function CommunicationDetails(): CommunicationDetails;
type CommunicationDetails = {
    /**
     * - Short description for the communication method
     */
    description?: string;
    /**
     * - Denotes if this communication method has to be shown
     */
    enabled?: boolean;
    /**
     * - Title for the communication method
     */
    title?: string;
    /**
     * - Enum type for the communication method
     */
    type?: string;
    /**
     * - Value for the communication method
     */
    value?: string;
};
/** @returns {CreateCustomFormPayload} */
declare function CreateCustomFormPayload(): CreateCustomFormPayload;
type CreateCustomFormPayload = {
    /**
     * - Description of the form
     */
    description?: string;
    /**
     * - Header image that is to be shown for the form
     */
    header_image?: string;
    /**
     * - List of all the form components
     */
    inputs: any[];
    /**
     * - Describes how polling
     * will be done for the tickets createds
     */
    poll_for_assignment?: PollForAssignment;
    /**
     * - Describes the priority of the tickets
     * created by the form
     */
    priority: PriorityEnum;
    /**
     * - Indicates if staff should be notified
     * when a response is received
     */
    should_notify?: boolean;
    /**
     * - Slug for the form
     */
    slug: string;
    /**
     * - Success message that will be shown on submission
     */
    success_message?: string;
    /**
     * - Title for the form
     */
    title: string;
};
/** @returns {CreatedOn} */
declare function CreatedOn(): CreatedOn;
type CreatedOn = {
    /**
     * - Useragent details
     */
    user_agent: string;
};
/** @returns {CreateVideoRoomPayload} */
declare function CreateVideoRoomPayload(): CreateVideoRoomPayload;
type CreateVideoRoomPayload = {
    /**
     * - List of people to be notified
     */
    notify?: NotifyUser[];
    /**
     * - Ticket id
     */
    unique_name: string;
};
/** @returns {CreateVideoRoomResponse} */
declare function CreateVideoRoomResponse(): CreateVideoRoomResponse;
type CreateVideoRoomResponse = {
    /**
     * - Video Room's unique name
     */
    unique_name: string;
};
/** @returns {CustomForm} */
declare function CustomForm(): CustomForm;
type CustomForm = {
    /**
     * - Unique identifier for the form
     */
    _id: string;
    /**
     * - Application ID for form
     */
    application_id: string;
    /**
     * - Gives details of when the form was created
     */
    created_on?: CreatedOn;
    /**
     * - Form description that will be shown to the user
     */
    description?: string;
    /**
     * - Form header image that will be shown to the user
     */
    header_image?: string;
    /**
     * - List of all the form fields
     */
    inputs: any[];
    /**
     * - Denotes if login is required to make a
     * form response submission
     */
    login_required: boolean;
    /**
     * - Details of how polling
     * should be done for support
     */
    poll_for_assignment?: PollForAssignment;
    /**
     * - Sets priority of tickets created by form response
     */
    priority: Priority;
    /**
     * - Denotes if new response submission for
     * the form should be notified to the assignees
     */
    should_notify: boolean;
    /**
     * - Slug for the form, which is to be used for accessing the form
     */
    slug: string;
    /**
     * - Details for submit button
     */
    submit_button?: SubmitButton;
    /**
     * - Message that is to be shown on
     * succesfull form response submission
     */
    success_message?: string;
    /**
     * - Form title that will be shown to the user
     */
    title: string;
};
/** @returns {CustomFormList} */
declare function CustomFormList(): CustomFormList;
type CustomFormList = {
    /**
     * - List of forms
     */
    items?: CustomForm[];
    /**
     * - Describes the pagination state
     */
    page?: Page;
};
/** @returns {CustomFormSubmissionPayload} */
declare function CustomFormSubmissionPayload(): CustomFormSubmissionPayload;
type CustomFormSubmissionPayload = {
    /**
     * - List of all attachments related to the form
     */
    attachments?: TicketAsset[];
    /**
     * - Form response
     */
    response: any[];
};
/** @returns {Debug} */
declare function Debug(): Debug;
type Debug = {
    /**
     * - Platform of user
     */
    platform?: string;
    /**
     * - Source of user
     */
    source?: string;
};
/** @returns {EditCustomFormPayload} */
declare function EditCustomFormPayload(): EditCustomFormPayload;
type EditCustomFormPayload = {
    /**
     * - Description of the form
     */
    description?: string;
    /**
     * - Header image that is to be shown for the form
     */
    header_image?: string;
    /**
     * - List of all the form components
     */
    inputs: any[];
    /**
     * - Denotes if login is required to make a
     * form response submission
     */
    login_required?: boolean;
    /**
     * - Describes how polling
     * will be done for the tickets createds
     */
    poll_for_assignment?: PollForAssignment;
    /**
     * - Describes the priority of the tickets
     * created by the form
     */
    priority: PriorityEnum;
    /**
     * - Indicates if staff should be notified
     * when a response is received
     */
    should_notify?: boolean;
    /**
     * - Success message that will be shown on submission
     */
    success_message?: string;
    /**
     * - Title for the form
     */
    title: string;
};
/** @returns {EditTicketPayload} */
declare function EditTicketPayload(): EditTicketPayload;
type EditTicketPayload = {
    /**
     * - Details of support staff to
     * whom ticket is assigned
     */
    assigned_to?: AgentChangePayload;
    /**
     * - Category assigned to the ticket
     */
    category?: string;
    /**
     * - Ticket conetent details
     */
    content?: TicketContent;
    /**
     * - Denotes the priority of ticket
     */
    priority?: PriorityEnum;
    /**
     * - Denotes if the ticket was created at company or
     * application level
     */
    source?: string;
    /**
     * - Denotes in what state is the ticket
     */
    status?: string;
    /**
     * - Sub-category assigned to the ticket
     */
    sub_category?: string;
    /**
     * - Tags relevant to ticket
     */
    tags?: string[];
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    /**
     * - Denotes if the email is active
     */
    active?: boolean;
    /**
     * - Email Address
     */
    email?: string;
    /**
     * - Denotes it's the primary email for the account
     */
    primary?: boolean;
    /**
     * - Denotes it's a verified email
     */
    verified?: boolean;
};
/** @returns {FeedbackForm} */
declare function FeedbackForm(): FeedbackForm;
type FeedbackForm = {
    /**
     * - Input details for the feed back form
     */
    inputs?: any;
    /**
     * - Gives details of category releted data
     */
    timestamps?: any;
    /**
     * - Title for the feed back form
     */
    title?: string;
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
    /**
     * - User response value for the form field
     */
    value: string;
};
/** @returns {Filter} */
declare function Filter(): Filter;
type Filter = {
    /**
     * - List of support staff availble for tickets assignment
     */
    assignees: any[];
    /**
     * - List of possible categories for tickets
     */
    categories?: TicketCategory[];
    /**
     * - List of possible priorities for tickets
     */
    priorities: Priority[];
    /**
     * - List of possible statuses for tickets
     */
    statuses: Status[];
};
/** @returns {GetParticipantsInsideVideoRoomResponse} */
declare function GetParticipantsInsideVideoRoomResponse(): GetParticipantsInsideVideoRoomResponse;
type GetParticipantsInsideVideoRoomResponse = {
    /**
     * - List of participants of the video room
     */
    participants: Participant[];
};
/** @returns {GetTokenForVideoRoomResponse} */
declare function GetTokenForVideoRoomResponse(): GetTokenForVideoRoomResponse;
type GetTokenForVideoRoomResponse = {
    /**
     * - Access token to be used for video room
     */
    access_token: string;
};
/** @returns {IntegrationConfig} */
declare function IntegrationConfig(): IntegrationConfig;
type IntegrationConfig = {
    /**
     * - Unique id
     */
    _id?: string;
    /**
     * - Denotes ticket creation enable or
     * disable on platform
     */
    allow_ticket_creation: boolean;
    /**
     * - Integration base url for validate and create ticket
     */
    base_url?: string;
    /**
     * - Support category array list details
     */
    category_data?: CategoryData;
    /**
     * - Integration apikey to sync
     * category of selected type
     */
    category_sync_apikey?: string;
    /**
     * - Denotes the current intergration is
     * completed or partially done
     */
    config_completed?: boolean;
    /**
     * - Integration apikey to validate
     * and create ticket
     */
    create_ticket_apikey?: string;
    /**
     * - Enum string values for integration
     */
    integration_type: string;
    /**
     * - Denotes ticket listing enable or disable on platform
     */
    show_listing: boolean;
    /**
     * - Integration apikey to update ticket
     */
    update_ticket_apikey?: string;
    /**
     * - Integration webhook apikey to got
     * callbacks from integration type dashboard like freshdesk, etc
     */
    webhook_apikey?: string;
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
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {Participant} */
declare function Participant(): Participant;
type Participant = {
    /**
     * - Unique identifier of participant
     */
    identity?: string;
    /**
     * - Status of participant
     */
    status?: string;
    /**
     * - Details of participant
     */
    user?: UserSchema;
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    /**
     * - Denotes if the phone number is active
     */
    active?: boolean;
    /**
     * - Country code
     */
    country_code?: number;
    /**
     * - Phone number
     */
    phone?: string;
    /**
     * - Denotes it's the primary phone number for the account
     */
    primary?: boolean;
    /**
     * - Denotes it's a verified phone number
     */
    verified?: boolean;
};
/** @returns {PollForAssignment} */
declare function PollForAssignment(): PollForAssignment;
type PollForAssignment = {
    /**
     * - Duration for polling of staff
     */
    duration: number;
    /**
     * - Message if polling failed
     */
    failure_message: string;
    /**
     * - Message for polling
     */
    message: string;
    /**
     * - Message for successful polling
     */
    success_message: string;
};
/** @returns {Priority} */
declare function Priority(): Priority;
type Priority = {
    /**
     * - Color for priority
     */
    color: string;
    /**
     * - Display text for priority
     */
    display: string;
    /**
     * - Key for priority
     */
    key: PriorityEnum;
};
/** @returns {Status} */
declare function Status(): Status;
type Status = {
    /**
     * - Color for status
     */
    color: string;
    /**
     * - Display text for status
     */
    display: string;
    /**
     * - Key for status
     */
    key: string;
};
/** @returns {SubmitButton} */
declare function SubmitButton(): SubmitButton;
type SubmitButton = {
    /**
     * - Color for submit button
     */
    background_color: string;
    /**
     * - Title for submit button
     */
    title: string;
    /**
     * - Title color submit button
     */
    title_color: string;
};
/** @returns {SubmitCustomFormResponse} */
declare function SubmitCustomFormResponse(): SubmitCustomFormResponse;
type SubmitCustomFormResponse = {
    /**
     * - Success message for form submission
     */
    message: string;
    /**
     * - Ticket created on form submission
     */
    ticket?: Ticket;
};
/** @returns {SupportGeneralConfig} */
declare function SupportGeneralConfig(): SupportGeneralConfig;
type SupportGeneralConfig = {
    /**
     * - Unique id
     */
    _id?: string;
    /**
     * - Contains integrations basic information
     */
    integration?: any;
    /**
     * - Denotes if support
     * communication info should be shown
     */
    show_communication_info?: boolean;
    /**
     * - Denotes if support DRIS info should be shown
     */
    show_support_dris?: boolean;
    /**
     * - Support
     * communication array list details
     */
    support_communication?: CommunicationDetails;
    /**
     * - Support e-mail details
     */
    support_email?: CommunicationDetails;
    /**
     * - Support FAQ details
     */
    support_faq?: CommunicationDetails;
    /**
     * - Support Phone number details
     */
    support_phone?: CommunicationDetails;
    /**
     * - The enity/platform for which the config is stored
     */
    type?: string;
};
/** @returns {Ticket} */
declare function Ticket(): Ticket;
type Ticket = {
    /**
     * - Custom json relevant to the ticket
     */
    _custom_json?: any;
    /**
     * - Unique identifier for the ticket
     */
    _id: string;
    /**
     * - Details of support staff to whom ticket is assigned
     */
    assigned_to?: any;
    /**
     * - Category assigned to the ticket
     */
    category: TicketCategory;
    /**
     * - Ticket conetent details
     */
    content?: TicketContent;
    /**
     * - Details of company and application
     * realated to the ticket
     */
    context?: TicketContext;
    /**
     * - Time when the ticket was created
     */
    created_at?: string;
    /**
     * - User details of ticket creator
     */
    created_by?: any;
    /**
     * - Details of company and application
     * realated to the ticket
     */
    created_on?: CreatedOn;
    /**
     * - Integration type and its details of the ticket
     */
    integration?: any;
    /**
     * - Denotes if feedback submission is
     * pending for the ticket
     */
    is_feedback_pending?: boolean;
    /**
     * - Denotes the priority of ticket
     */
    priority: Priority;
    /**
     * - Details of company and application
     * realated to the ticket
     */
    response_id?: string;
    /**
     * - Denotes if the ticket was created at
     * company or application level
     */
    source: TicketSourceEnum;
    /**
     * - Denotes in what state is the ticket
     */
    status: Status;
    /**
     * - Sub-category assigned to the ticket
     */
    sub_category?: string;
    /**
     * - Tags relevant to ticket
     */
    tags?: string[];
    /**
     * - Time when the ticket was last updated
     */
    updated_at?: string;
};
/** @returns {TicketAsset} */
declare function TicketAsset(): TicketAsset;
type TicketAsset = {
    /**
     * - Display text for asset
     */
    display?: string;
    /**
     * - Type of asset
     */
    type: TicketAssetTypeEnum;
    /**
     * - To be used for details
     */
    value: string;
};
/** @returns {TicketCategory} */
declare function TicketCategory(): TicketCategory;
type TicketCategory = {
    /**
     * - Category display value identifier
     */
    display: string;
    /**
     * - Support category array list details
     */
    feedback_form?: FeedbackForm;
    /**
     * - Group id of category releted data
     */
    group_id?: number;
    /**
     * - Category key value identifier
     */
    key: string;
    /**
     * - Support category array list details
     */
    sub_categories?: TicketCategory;
};
/** @returns {TicketContent} */
declare function TicketContent(): TicketContent;
type TicketContent = {
    /**
     * - List of all attachments related to the ticket
     */
    attachments?: TicketAsset[];
    /**
     * - Long description of issue
     */
    description?: string;
    /**
     * - Title for ticket
     */
    title: string;
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
/** @returns {TicketFeedback} */
declare function TicketFeedback(): TicketFeedback;
type TicketFeedback = {
    /**
     * - Unique identifier for the feedback
     */
    _id: string;
    /**
     * - Category of the ticket
     */
    category?: string;
    /**
     * - Company id for which ticket was raised
     */
    company_id: string;
    /**
     * - Time when the feedback was created
     */
    created_at?: string;
    response: FeedbackResponseItem[];
    /**
     * - Readable ticket number
     */
    ticket_id: string;
    /**
     * - Time when the feedback was last updated
     */
    updated_at?: string;
    /**
     * - User who submitted the feedback
     */
    user?: any;
};
/** @returns {TicketFeedbackForm} */
declare function TicketFeedbackForm(): TicketFeedbackForm;
type TicketFeedbackForm = {
    /**
     * - List of all the form fields
     */
    display?: any[];
    /**
     * - Feedback form title that will be shown to the user
     */
    title: string;
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
/** @returns {TicketHistory} */
declare function TicketHistory(): TicketHistory;
type TicketHistory = {
    /**
     * - Unique identifier of the history event
     */
    _id: string;
    /**
     * - Time of creation of the history event
     */
    created_at?: string;
    /**
     * - User who created the history event
     */
    created_by?: any;
    /**
     * - Time of creation of the history event
     */
    created_on?: CreatedOn;
    /**
     * - Readable ticket number
     */
    ticket_id: string;
    /**
     * - Type of the history event
     */
    type: string;
    /**
     * - Time of last update of the history event
     */
    updated_at?: string;
    /**
     * - Data of the history event
     */
    value: any;
};
/** @returns {TicketHistoryList} */
declare function TicketHistoryList(): TicketHistoryList;
type TicketHistoryList = {
    /**
     * - List of ticket history
     */
    items?: TicketHistory[];
    /**
     * - Describes the pagination state
     */
    page?: Page;
};
/** @returns {TicketHistoryPayload} */
declare function TicketHistoryPayload(): TicketHistoryPayload;
type TicketHistoryPayload = {
    /**
     * - Type of history event
     */
    type: HistoryTypeEnum;
    /**
     * - Details of history event
     */
    value: any;
};
/** @returns {TicketList} */
declare function TicketList(): TicketList;
type TicketList = {
    /**
     * - All the filters available for tickets
     */
    filters?: Filter;
    /**
     * - List of tickets
     */
    items?: Ticket[];
    /**
     * - Describes the pagination state
     */
    page?: Page;
};
/** @returns {TicketSubCategory} */
declare function TicketSubCategory(): TicketSubCategory;
type TicketSubCategory = {
    /**
     * - Display text for sub-category
     */
    display: string;
    /**
     * - Key for sub-category
     */
    key: string;
    sub_categories?: TicketSubCategory;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    _id?: string;
    account_type?: string;
    active?: boolean;
    application_id?: string;
    created_at?: string;
    dob?: string;
    emails?: Email[];
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: PhoneNumber[];
    profile_pic_url?: string;
    updated_at?: string;
    user_id?: string;
    username?: string;
};
/**
 * Enum: HistoryTypeEnum Used By: Lead
 *
 * @returns {HistoryTypeEnum}
 */
declare function HistoryTypeEnum(): HistoryTypeEnum;
type HistoryTypeEnum = "rating" | "log" | "comment" | "thread";
/**
 * Enum: PriorityEnum Used By: Lead
 *
 * @returns {PriorityEnum}
 */
declare function PriorityEnum(): PriorityEnum;
type PriorityEnum = "low" | "medium" | "high" | "urgent";
/**
 * Enum: TicketAssetTypeEnum Used By: Lead
 *
 * @returns {TicketAssetTypeEnum}
 */
declare function TicketAssetTypeEnum(): TicketAssetTypeEnum;
type TicketAssetTypeEnum = "image" | "video" | "file" | "youtube" | "product" | "collection" | "brand" | "shipment" | "order";
/**
 * Enum: TicketIntegrationDetails Used By: Lead
 *
 * @returns {TicketIntegrationDetails}
 */
declare function TicketIntegrationDetails(): TicketIntegrationDetails;
type TicketIntegrationDetails = "default" | "freshdesk" | "kapture";
/**
 * Enum: TicketSourceEnum Used By: Lead
 *
 * @returns {TicketSourceEnum}
 */
declare function TicketSourceEnum(): TicketSourceEnum;
type TicketSourceEnum = "platform_panel" | "sales_channel";
