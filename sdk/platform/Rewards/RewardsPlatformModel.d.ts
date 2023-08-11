export = RewardsPlatformModel;
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
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef ConfigurationRequest
 * @property {string} [terms_conditions_link]
 * @property {string[]} [valid_android_packages]
 */
/**
 * @typedef ConfigurationRes
 * @property {string} [application_id]
 * @property {boolean} [success]
 * @property {string} [terms_conditions_link] - A URL that redirects to the
 *   referral information suport page link
 * @property {string[]} [valid_android_packages] - Contains array of string
 *   items, Valid android package names.
 */
/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
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
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
 * @property {number} [points]
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
 * @typedef Points
 * @property {number} [available]
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
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
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
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SetConfigurationRes
 * @property {boolean} [success]
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
declare class RewardsPlatformModel {
}
declare namespace RewardsPlatformModel {
    export { AppUser, Asset, ConfigurationRequest, ConfigurationRes, E, Giveaway, GiveawayResponse, HistoryRes, Offer, Page, Points, PointsHistory, Referral, RewardsAudience, RewardsRule, RewardUser, Schedule, SetConfigurationRes, ShareMessages, UserRes };
}
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
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
/** @returns {ConfigurationRequest} */
declare function ConfigurationRequest(): ConfigurationRequest;
type ConfigurationRequest = {
    terms_conditions_link?: string;
    valid_android_packages?: string[];
};
/** @returns {ConfigurationRes} */
declare function ConfigurationRes(): ConfigurationRes;
type ConfigurationRes = {
    application_id?: string;
    success?: boolean;
    /**
     * - A URL that redirects to the
     * referral information suport page link
     */
    terms_conditions_link?: string;
    /**
     * - Contains array of string
     * items, Valid android package names.
     */
    valid_android_packages?: string[];
};
/** @returns {E} */
declare function E(): E;
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
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
/** @returns {GiveawayResponse} */
declare function GiveawayResponse(): GiveawayResponse;
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
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
/** @returns {Points} */
declare function Points(): Points;
type Points = {
    available?: number;
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
/** @returns {Referral} */
declare function Referral(): Referral;
type Referral = {
    code?: string;
};
/** @returns {RewardsAudience} */
declare function RewardsAudience(): RewardsAudience;
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
/** @returns {RewardsRule} */
declare function RewardsRule(): RewardsRule;
type RewardsRule = {
    amount?: number;
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
/** @returns {Schedule} */
declare function Schedule(): Schedule;
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
/** @returns {SetConfigurationRes} */
declare function SetConfigurationRes(): SetConfigurationRes;
type SetConfigurationRes = {
    success?: boolean;
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
