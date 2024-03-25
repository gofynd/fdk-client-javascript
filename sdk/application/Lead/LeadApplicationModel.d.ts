export = LeadApplicationModel;
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value - Details of history event
 * @property {string} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response - Form response
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token - Access token to be used for video room
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants - List of participants of the video room
 * @property {Object} [room]
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
 * @property {UserPasswordHistory[]} [password_history]
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
 * @typedef UserPasswordHistory
 * @property {string} [salt]
 * @property {string} [hash]
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
 * @typedef SubmitCustomFormResponse
 * @property {string} message - Success message for form submission
 * @property {Ticket} [ticket]
 * @property {string[]} [notified_to]
 * @property {FormResponse} [response]
 */
/**
 * @typedef FormResponse
 * @property {string} [application_id]
 * @property {string} [form_slug]
 * @property {Object[]} [response]
 * @property {string} [created_by]
 * @property {CreatedOn} [created_on]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
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
 * @typedef AddTicketPayload
 * @property {Object} [created_by] - Creator of the ticket
 * @property {string} [status] - Status of the ticket
 * @property {string} [priority]
 * @property {string} category - Category of the ticket
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
 * @typedef Status
 * @property {string} key - Key for status
 * @property {string} display - Display text for status
 * @property {string} color - Color for status
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
 * @typedef TicketHistory
 * @property {string} type - Type of the history event
 * @property {Object} value - Data of the history event
 * @property {string} ticket_id - Readable ticket number
 * @property {CreatedOn} [created_on]
 * @property {string} [created_by] - User who created the history event
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
 * @property {Object[]} [additional_info]
 * @property {number} [__v]
 * @property {TicketAsset[]} [attachments] - List of all attachments related to the form
 */
/**
 * @typedef NotFoundError
 * @property {string} [message]
 */
/**
 * @typedef Error4XX
 * @property {Object} [message]
 * @property {string} [stack]
 * @property {string} [sentry]
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
/** @typedef {"platform_panel" | "sales_channel"} TicketSourceEnum */
declare class LeadApplicationModel {
}
declare namespace LeadApplicationModel {
    export { TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, UserPasswordHistory, Email, Debug, SubmitCustomFormResponse, FormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, SubmitButton, PollForAssignment, CustomForm, FeedbackForm, TicketCategory, TicketHistory, Ticket, NotFoundError, Error4XX, TicketAssetTypeEnum, TicketSourceEnum };
}
/** @returns {TicketHistoryPayload} */
declare function TicketHistoryPayload(): TicketHistoryPayload;
type TicketHistoryPayload = {
    /**
     * - Details of history event
     */
    value: any;
    type: string;
};
/** @returns {CustomFormSubmissionPayload} */
declare function CustomFormSubmissionPayload(): CustomFormSubmissionPayload;
type CustomFormSubmissionPayload = {
    /**
     * - Form response
     */
    response: any[];
    /**
     * - List of all attachments related to the form
     */
    attachments?: TicketAsset[];
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
    room?: any;
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
    password_history?: UserPasswordHistory[];
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
/** @returns {UserPasswordHistory} */
declare function UserPasswordHistory(): UserPasswordHistory;
type UserPasswordHistory = {
    salt?: string;
    hash?: string;
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
/** @returns {SubmitCustomFormResponse} */
declare function SubmitCustomFormResponse(): SubmitCustomFormResponse;
type SubmitCustomFormResponse = {
    /**
     * - Success message for form submission
     */
    message: string;
    ticket?: Ticket;
    notified_to?: string[];
    response?: FormResponse;
};
/** @returns {FormResponse} */
declare function FormResponse(): FormResponse;
type FormResponse = {
    application_id?: string;
    form_slug?: string;
    response?: any[];
    created_by?: string;
    created_on?: CreatedOn;
    _id?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
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
    priority?: string;
    /**
     * - Category of the ticket
     */
    category: string;
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
    created_by?: string;
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
    additional_info?: any[];
    __v?: number;
    /**
     * - List of all attachments related to the form
     */
    attachments?: TicketAsset[];
};
/** @returns {NotFoundError} */
declare function NotFoundError(): NotFoundError;
type NotFoundError = {
    message?: string;
};
/** @returns {Error4XX} */
declare function Error4XX(): Error4XX;
type Error4XX = {
    message?: any;
    stack?: string;
    sentry?: string;
};
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
