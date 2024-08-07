export = RewardsPlatformModel;
/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */
/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */
/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
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
 */
/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */
/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */
/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */
/**
 * @typedef Points
 * @property {number} [available]
 */
/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */
/**
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */
/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
 * @property {number} [points]
 */
/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef ConfigurationRes
 * @property {string[]} [valid_android_packages] - Contains array of string
 *   items, Valid android package names.
 * @property {string} [terms_conditions_link] - A URL that redirects to the
 *   referral information suport page link
 * @property {string} [application_id]
 * @property {boolean} [success]
 */
/**
 * @typedef SetConfigurationRes
 * @property {boolean} [success]
 */
/**
 * @typedef ConfigurationRequest
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 */
declare class RewardsPlatformModel {
}
declare namespace RewardsPlatformModel {
    export { E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, Asset, RewardsRule, Page, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest };
}
/** @returns {E} */
declare function E(): E;
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
/** @returns {GiveawayResponse} */
declare function GiveawayResponse(): GiveawayResponse;
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
/** @returns {Giveaway} */
declare function Giveaway(): Giveaway;
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
/** @returns {Schedule} */
declare function Schedule(): Schedule;
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
/** @returns {RewardsAudience} */
declare function RewardsAudience(): RewardsAudience;
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
/** @returns {RewardsRule} */
declare function RewardsRule(): RewardsRule;
type RewardsRule = {
    amount?: number;
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
};
/** @returns {Offer} */
declare function Offer(): Offer;
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
/** @returns {ShareMessages} */
declare function ShareMessages(): ShareMessages;
type ShareMessages = {
    email?: number;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
/** @returns {UserRes} */
declare function UserRes(): UserRes;
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
/** @returns {Points} */
declare function Points(): Points;
type Points = {
    available?: number;
};
/** @returns {RewardUser} */
declare function RewardUser(): RewardUser;
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
/** @returns {Referral} */
declare function Referral(): Referral;
type Referral = {
    code?: string;
};
/** @returns {AppUser} */
declare function AppUser(): AppUser;
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
/** @returns {HistoryRes} */
declare function HistoryRes(): HistoryRes;
type HistoryRes = {
    /**
     * - History is the list of points transaction.
     */
    items?: PointsHistory[];
    page?: Page;
    points?: number;
};
/** @returns {PointsHistory} */
declare function PointsHistory(): PointsHistory;
type PointsHistory = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    meta?: any;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
/** @returns {ConfigurationRes} */
declare function ConfigurationRes(): ConfigurationRes;
type ConfigurationRes = {
    /**
     * - Contains array of string
     * items, Valid android package names.
     */
    valid_android_packages?: string[];
    /**
     * - A URL that redirects to the
     * referral information suport page link
     */
    terms_conditions_link?: string;
    application_id?: string;
    success?: boolean;
};
/** @returns {SetConfigurationRes} */
declare function SetConfigurationRes(): SetConfigurationRes;
type SetConfigurationRes = {
    success?: boolean;
};
/** @returns {ConfigurationRequest} */
declare function ConfigurationRequest(): ConfigurationRequest;
type ConfigurationRequest = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
};
