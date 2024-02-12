export = LeadPartnerModel;
/**
 * @typedef TicketList
 * @property {Ticket[]} [items] - List of tickets
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 * @property {PriorityEnum} priority
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
 * @property {PriorityEnum} priority
 * @property {string} [header_image] - Header image that is to be shown for the form
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
 * @property {string} [source] - Denotes if the ticket was created at partner or
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
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name - Video Room's unique name
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success - Denotes if operation was successfully
 */
/**
 * @typedef GeneralConfigResponse
 * @property {SupportCommunicationSchema[]} [support_communication]
 * @property {string} [type]
 * @property {GeneralConfigIntegrationSchema} [integration]
 * @property {string[]} [available_integration]
 */
/**
 * @typedef SupportCommunicationSchema
 * @property {string} [type]
 * @property {string} [title]
 * @property {Object} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GeneralConfigIntegrationSchema
 * @property {string} [type]
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name - Ticket id
 * @property {NotifyUser[]} [notify] - List of people to be notified
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
 * @property {Object[]} assignees - List of support staff availble for tickets assignment
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */
/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity] - Unique identifier of participant
 * @property {string} [status] - Status of participant
 */
/**
 * @typedef UserSchema
 * @property {string} [first_name] - First name
 * @property {string} [last_name] - Last name
 * @property {PhoneNumber[]} [phone_numbers] - List of phone numbers
 * @property {Email[]} [emails] - List of email addresses
 * @property {string} [gender] - Gender of user
 * @property {boolean} [active] - Is account active
 * @property {string} [profile_pic_url] - URL for profile pic
 * @property {string} [username] - Username of user
 * @property {string} [account_type] - Type of account
 * @property {string} [uid] - Unique identifier of user
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash] - Denotes if user has old password hash
 * @property {string} [_id] - Unique identifier of user
 * @property {string} [created_at] - Time of user creation
 * @property {string} [updated_at] - Last time of user details update
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active] - Denotes if the phone number is active
 * @property {boolean} [primary] - Denotes it's the primary phone number for the account
 * @property {boolean} [verified] - Denotes it's a verified phone number
 * @property {string} [phone] - Phone number
 * @property {number} [country_code] - Country code
 */
/**
 * @typedef Email
 * @property {boolean} [primary] - Denotes it's the primary email for the account
 * @property {boolean} [verified] - Denotes it's a verified email
 * @property {string} [email] - Email Address
 * @property {boolean} [active] - Denotes if the email is active
 */
/**
 * @typedef Debug
 * @property {string} [source] - Source of user
 * @property {string} [platform] - Platform of user
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id] - Application ID related to the ticket
 * @property {string} partner_id - Partner ID related to the ticket
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
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
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket
 * @property {string} [status] - Status of the ticket
 * @property {PriorityEnum} [priority]
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display - Display text for priority
 * @property {string} color - Color for priority
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
 * @property {Priority} priority
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
 * @property {string} _id - Unique identifier for the form
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
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id] - Group id of category releted data
 * @property {FeedbackForm} [feedback_form]
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display - Question/Title of the form field
 * @property {string} key - Key of the form field
 * @property {string} value - User response value for the form field
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id - Unique identifier for the feedback
 * @property {string} ticket_id - Readable ticket number
 * @property {string} partner_id - Partner id for which ticket was raised
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category] - Category of the ticket
 * @property {Object} [user] - User who submitted the feedback
 * @property {string} [updated_at] - Time when the feedback was last updated
 * @property {string} [created_at] - Time when the feedback was created
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
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id] - Details of partner and application
 *   realated to the ticket
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
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
 */
/** @typedef {"low" | "medium" | "high" | "urgent"} PriorityEnum */
/** @typedef {"rating" | "log" | "comment"} HistoryTypeEnum */
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
declare class LeadPartnerModel {
}
declare namespace LeadPartnerModel {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, GeneralConfigResponse, SupportCommunicationSchema, GeneralConfigIntegrationSchema, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, FeedbackForm, TicketCategory, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, PriorityEnum, HistoryTypeEnum, TicketAssetTypeEnum, TicketSourceEnum };
}
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
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
    priority: PriorityEnum;
    /**
     * - Header image that is to be shown for the form
     */
    header_image?: string;
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
     * - Denotes if the ticket was created at partner or
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
/** @returns {CreateVideoRoomResponse} */
declare function CreateVideoRoomResponse(): CreateVideoRoomResponse;
type CreateVideoRoomResponse = {
    /**
     * - Video Room's unique name
     */
    unique_name: string;
};
/** @returns {CloseVideoRoomResponse} */
declare function CloseVideoRoomResponse(): CloseVideoRoomResponse;
type CloseVideoRoomResponse = {
    /**
     * - Denotes if operation was successfully
     */
    success: boolean;
};
/** @returns {GeneralConfigResponse} */
declare function GeneralConfigResponse(): GeneralConfigResponse;
type GeneralConfigResponse = {
    support_communication?: SupportCommunicationSchema[];
    type?: string;
    integration?: GeneralConfigIntegrationSchema;
    available_integration?: string[];
};
/** @returns {SupportCommunicationSchema} */
declare function SupportCommunicationSchema(): SupportCommunicationSchema;
type SupportCommunicationSchema = {
    type?: string;
    title?: string;
    value?: any;
    description?: string;
    enabled?: boolean;
};
/** @returns {GeneralConfigIntegrationSchema} */
declare function GeneralConfigIntegrationSchema(): GeneralConfigIntegrationSchema;
type GeneralConfigIntegrationSchema = {
    type?: string;
};
/** @returns {CreateVideoRoomPayload} */
declare function CreateVideoRoomPayload(): CreateVideoRoomPayload;
type CreateVideoRoomPayload = {
    /**
     * - Ticket id
     */
    unique_name: string;
    /**
     * - List of people to be notified
     */
    notify?: NotifyUser[];
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
     * - List of support staff availble for tickets assignment
     */
    assignees: any[];
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
/** @returns {GetTokenForVideoRoomResponse} */
declare function GetTokenForVideoRoomResponse(): GetTokenForVideoRoomResponse;
type GetTokenForVideoRoomResponse = {
    /**
     * - Access token to be used for video room
     */
    access_token: string;
};
/** @returns {GetParticipantsInsideVideoRoomResponse} */
declare function GetParticipantsInsideVideoRoomResponse(): GetParticipantsInsideVideoRoomResponse;
type GetParticipantsInsideVideoRoomResponse = {
    /**
     * - List of participants of the video room
     */
    participants: Participant[];
};
/** @returns {Participant} */
declare function Participant(): Participant;
type Participant = {
    user?: UserSchema;
    /**
     * - Unique identifier of participant
     */
    identity?: string;
    /**
     * - Status of participant
     */
    status?: string;
};
/** @returns {UserSchema} */
declare function UserSchema(): UserSchema;
type UserSchema = {
    /**
     * - First name
     */
    first_name?: string;
    /**
     * - Last name
     */
    last_name?: string;
    /**
     * - List of phone numbers
     */
    phone_numbers?: PhoneNumber[];
    /**
     * - List of email addresses
     */
    emails?: Email[];
    /**
     * - Gender of user
     */
    gender?: string;
    /**
     * - Is account active
     */
    active?: boolean;
    /**
     * - URL for profile pic
     */
    profile_pic_url?: string;
    /**
     * - Username of user
     */
    username?: string;
    /**
     * - Type of account
     */
    account_type?: string;
    /**
     * - Unique identifier of user
     */
    uid?: string;
    debug?: Debug;
    /**
     * - Denotes if user has old password hash
     */
    has_old_password_hash?: boolean;
    /**
     * - Unique identifier of user
     */
    _id?: string;
    /**
     * - Time of user creation
     */
    created_at?: string;
    /**
     * - Last time of user details update
     */
    updated_at?: string;
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    /**
     * - Denotes if the phone number is active
     */
    active?: boolean;
    /**
     * - Denotes it's the primary phone number for the account
     */
    primary?: boolean;
    /**
     * - Denotes it's a verified phone number
     */
    verified?: boolean;
    /**
     * - Phone number
     */
    phone?: string;
    /**
     * - Country code
     */
    country_code?: number;
};
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    /**
     * - Denotes it's the primary email for the account
     */
    primary?: boolean;
    /**
     * - Denotes it's a verified email
     */
    verified?: boolean;
    /**
     * - Email Address
     */
    email?: string;
    /**
     * - Denotes if the email is active
     */
    active?: boolean;
};
/** @returns {Debug} */
declare function Debug(): Debug;
type Debug = {
    /**
     * - Source of user
     */
    source?: string;
    /**
     * - Platform of user
     */
    platform?: string;
};
/** @returns {TicketContext} */
declare function TicketContext(): TicketContext;
type TicketContext = {
    /**
     * - Application ID related to the ticket
     */
    application_id?: string;
    /**
     * - Partner ID related to the ticket
     */
    partner_id: string;
};
/** @returns {CreatedOn} */
declare function CreatedOn(): CreatedOn;
type CreatedOn = {
    /**
     * - Useragent details
     */
    user_agent: string;
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
    content: TicketContent;
    /**
     * - Optional custom data that needs to be sent
     */
    _custom_json?: any;
};
/** @returns {Priority} */
declare function Priority(): Priority;
type Priority = {
    key: PriorityEnum;
    /**
     * - Display text for priority
     */
    display: string;
    /**
     * - Color for priority
     */
    color: string;
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
    priority: Priority;
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
    /**
     * - Unique identifier for the form
     */
    _id: string;
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
    sub_categories?: TicketCategory;
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
    /**
     * - User response value for the form field
     */
    value: string;
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
     * - Partner id for which ticket was raised
     */
    partner_id: string;
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
};
/** @returns {Ticket} */
declare function Ticket(): Ticket;
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    /**
     * - Details of partner and application
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
type HistoryTypeEnum = "rating" | "log" | "comment";
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
