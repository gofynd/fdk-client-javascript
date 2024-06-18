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
    export { TicketList, Page, TicketHistoryList, EditTicketPayload, AgentChangePayload, GeneralConfigResponse, SupportCommunicationSchema, GeneralConfigIntegrationSchema, Filter, TicketHistoryPayload, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, SLA, Status, FeedbackForm, TicketCategory, TicketHistory, Ticket, PriorityEnum, HistoryTypeEnum, TicketAssetTypeEnum, TicketSourceEnum };
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
