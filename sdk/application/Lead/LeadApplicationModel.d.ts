export = LeadApplicationModel;
/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json] - Optional custom data that needs to be sent
 * @property {string} category - Category of the ticket
 * @property {TicketContent} content
 * @property {Object} [created_by] - Creator of the ticket
 * @property {PriorityEnum} [priority]
 * @property {string} [status] - Status of the ticket
 * @property {string[]} [subscribers]
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent - Useragent details
 */
/**
 * @typedef CustomForm
 * @property {string} _id - Unique identifier for the form
 * @property {string} application_id - Application ID for form
 * @property {CreatedOn} [created_on]
 * @property {string} [description] - Form description that will be shown to the user
 * @property {string} [header_image] - Form header image that will be shown to the user
 * @property {Object[]} inputs - List of all the form fields
 * @property {boolean} login_required - Denotes if login is required to make a
 *   form response submission
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {Priority} priority
 * @property {boolean} should_notify - Denotes if new response submission for
 *   the form should be notified to the assignees
 * @property {string} slug - Slug for the form, which is to be used for accessing the form
 * @property {SubmitButton} [submit_button]
 * @property {string} [success_message] - Message that is to be shown on
 *   succesfull form response submission
 * @property {string} title - Form title that will be shown to the user
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
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */
/**
 * @typedef Participant
 * @property {string} [identity] - Unique identifier of participant
 * @property {string} [status] - Status of participant
 * @property {UserSchema} [user]
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
 * @property {PriorityEnum} key
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
 * @property {Ticket} [ticket]
 */
/**
 * @typedef Ticket
 * @property {Object} [_custom_json] - Custom json relevant to the ticket
 * @property {string} _id - Unique identifier for the ticket
 * @property {Object} [assigned_to] - Details of support staff to whom ticket is assigned
 * @property {TicketCategory} category
 * @property {TicketContent} [content]
 * @property {TicketContext} [context]
 * @property {string} [created_at] - Time when the ticket was created
 * @property {Object} [created_by] - User details of ticket creator
 * @property {CreatedOn} [created_on]
 * @property {Object} [integration] - Integration type and its details of the ticket
 * @property {boolean} [is_feedback_pending] - Denotes if feedback submission is
 *   pending for the ticket
 * @property {Priority} priority
 * @property {string} [response_id] - Details of company and application
 *   realated to the ticket
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {string} [sub_category] - Sub-category assigned to the ticket
 * @property {string[]} [tags] - Tags relevant to ticket
 * @property {string} [updated_at] - Time when the ticket was last updated
 */
/**
 * @typedef TicketAsset
 * @property {string} [display] - Display text for asset
 * @property {TicketAssetTypeEnum} type
 * @property {string} value - To be used for details
 */
/**
 * @typedef TicketCategory
 * @property {string} display - Category display value identifier
 * @property {FeedbackForm} [feedback_form]
 * @property {number} [group_id] - Group id of category releted data
 * @property {string} key - Category key value identifier
 * @property {TicketCategory} [sub_categories]
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
 * @typedef TicketHistory
 * @property {string} _id - Unique identifier of the history event
 * @property {string} [created_at] - Time of creation of the history event
 * @property {Object} [created_by] - User who created the history event
 * @property {CreatedOn} [created_on]
 * @property {string} ticket_id - Readable ticket number
 * @property {string} type - Type of the history event
 * @property {string} [updated_at] - Time of last update of the history event
 * @property {Object} value - Data of the history event
 */
/**
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type
 * @property {Object} value - Details of history event
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
/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */
declare class LeadApplicationModel {
}
declare namespace LeadApplicationModel {
    export { AddTicketPayload, CreatedOn, CustomForm, CustomFormSubmissionPayload, Debug, Email, FeedbackForm, GetParticipantsInsideVideoRoomResponse, GetTokenForVideoRoomResponse, Participant, PhoneNumber, PollForAssignment, Priority, Status, SubmitButton, SubmitCustomFormResponse, Ticket, TicketAsset, TicketCategory, TicketContent, TicketContext, TicketHistory, TicketHistoryPayload, UserSchema, HistoryTypeEnum, PriorityEnum, TicketAssetTypeEnum, TicketSourceEnum };
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
    content: TicketContent;
    /**
     * - Creator of the ticket
     */
    created_by?: any;
    priority?: PriorityEnum;
    /**
     * - Status of the ticket
     */
    status?: string;
    subscribers?: string[];
};
/** @returns {CreatedOn} */
declare function CreatedOn(): CreatedOn;
type CreatedOn = {
    /**
     * - Useragent details
     */
    user_agent: string;
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
    poll_for_assignment?: PollForAssignment;
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
    ticket?: Ticket;
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
    category: TicketCategory;
    content?: TicketContent;
    context?: TicketContext;
    /**
     * - Time when the ticket was created
     */
    created_at?: string;
    /**
     * - User details of ticket creator
     */
    created_by?: any;
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
    priority: Priority;
    /**
     * - Details of company and application
     * realated to the ticket
     */
    response_id?: string;
    source: TicketSourceEnum;
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
    feedback_form?: FeedbackForm;
    /**
     * - Group id of category releted data
     */
    group_id?: number;
    /**
     * - Category key value identifier
     */
    key: string;
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
/** @returns {TicketHistoryPayload} */
declare function TicketHistoryPayload(): TicketHistoryPayload;
type TicketHistoryPayload = {
    type: HistoryTypeEnum;
    /**
     * - Details of history event
     */
    value: any;
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
 * Enum: TicketSourceEnum Used By: Lead
 *
 * @returns {TicketSourceEnum}
 */
declare function TicketSourceEnum(): TicketSourceEnum;
type TicketSourceEnum = "platform_panel" | "sales_channel";
