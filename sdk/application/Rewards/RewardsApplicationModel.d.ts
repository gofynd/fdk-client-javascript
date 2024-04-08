export = RewardsApplicationModel;
/**
 * @typedef RewardsArticle
 * @property {string} [id]
 * @property {number} [points]
 * @property {number} [price]
 */
/**
 * @typedef CatalogueOrderResponse
 * @property {RewardsArticle[]} [articles]
 */
/**
 * @typedef CatalogueOrderRequest
 * @property {RewardsArticle[]} [articles]
 */
/**
 * @typedef PointsResponse
 * @property {number} [points] - Total points available
 */
/**
 * @typedef ReferralDetailsUser
 * @property {boolean} [blocked]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referral_code]
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
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */
/**
 * @typedef Error
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
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
 * @typedef ReferralDetailsResponse
 * @property {Offer} [referral]
 * @property {ShareMessages} [share]
 * @property {ReferralDetailsUser} [user]
 * @property {string} [referrer_info]
 * @property {string} [terms_conditions_link]
 */
/**
 * @typedef OrderDiscountRequest
 * @property {number} order_amount
 * @property {string} [currency]
 */
/**
 * @typedef OrderDiscountRuleBucket
 * @property {number} [high]
 * @property {number} [low]
 * @property {number} [max]
 * @property {number} [value]
 * @property {string} [value_type]
 */
/**
 * @typedef DiscountProperties
 * @property {number} [absolute]
 * @property {string} [currency]
 * @property {string} [display_absolute]
 * @property {string} [display_percent]
 * @property {number} [percent]
 */
/**
 * @typedef OrderDiscountResponse
 * @property {number} [order_amount]
 * @property {number} [points]
 * @property {DiscountProperties} [discount]
 * @property {DiscountProperties} [base_discount]
 * @property {OrderDiscountRuleBucket} [applied_rule_bucket]
 */
/**
 * @typedef RedeemReferralCodeRequest
 * @property {string} [device_id]
 * @property {string} [referral_code]
 */
/**
 * @typedef RedeemReferralCodeResponse
 * @property {boolean} [redeemed]
 * @property {string} [message]
 * @property {string} [referrer_info]
 * @property {string} [referrer_id]
 * @property {number} [points]
 */
/**
 * @typedef PointsHistoryResponse
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
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
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
declare class RewardsApplicationModel {
}
declare namespace RewardsApplicationModel {
    export { RewardsArticle, CatalogueOrderResponse, CatalogueOrderRequest, PointsResponse, ReferralDetailsUser, Offer, Schedule, Error, Asset, ShareMessages, ReferralDetailsResponse, OrderDiscountRequest, OrderDiscountRuleBucket, DiscountProperties, OrderDiscountResponse, RedeemReferralCodeRequest, RedeemReferralCodeResponse, PointsHistoryResponse, PointsHistory, Page };
}
/** @returns {RewardsArticle} */
declare function RewardsArticle(): RewardsArticle;
type RewardsArticle = {
    id?: string;
    points?: number;
    price?: number;
};
/** @returns {CatalogueOrderResponse} */
declare function CatalogueOrderResponse(): CatalogueOrderResponse;
type CatalogueOrderResponse = {
    articles?: RewardsArticle[];
};
/** @returns {CatalogueOrderRequest} */
declare function CatalogueOrderRequest(): CatalogueOrderRequest;
type CatalogueOrderRequest = {
    articles?: RewardsArticle[];
};
/** @returns {PointsResponse} */
declare function PointsResponse(): PointsResponse;
type PointsResponse = {
    /**
     * - Total points available
     */
    points?: number;
};
/** @returns {ReferralDetailsUser} */
declare function ReferralDetailsUser(): ReferralDetailsUser;
type ReferralDetailsUser = {
    blocked?: boolean;
    points?: number;
    redeemed?: boolean;
    referral_code?: string;
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
/** @returns {Schedule} */
declare function Schedule(): Schedule;
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
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
/** @returns {ReferralDetailsResponse} */
declare function ReferralDetailsResponse(): ReferralDetailsResponse;
type ReferralDetailsResponse = {
    referral?: Offer;
    share?: ShareMessages;
    user?: ReferralDetailsUser;
    referrer_info?: string;
    terms_conditions_link?: string;
};
/** @returns {OrderDiscountRequest} */
declare function OrderDiscountRequest(): OrderDiscountRequest;
type OrderDiscountRequest = {
    order_amount: number;
    currency?: string;
};
/** @returns {OrderDiscountRuleBucket} */
declare function OrderDiscountRuleBucket(): OrderDiscountRuleBucket;
type OrderDiscountRuleBucket = {
    high?: number;
    low?: number;
    max?: number;
    value?: number;
    value_type?: string;
};
/** @returns {DiscountProperties} */
declare function DiscountProperties(): DiscountProperties;
type DiscountProperties = {
    absolute?: number;
    currency?: string;
    display_absolute?: string;
    display_percent?: string;
    percent?: number;
};
/** @returns {OrderDiscountResponse} */
declare function OrderDiscountResponse(): OrderDiscountResponse;
type OrderDiscountResponse = {
    order_amount?: number;
    points?: number;
    discount?: DiscountProperties;
    base_discount?: DiscountProperties;
    applied_rule_bucket?: OrderDiscountRuleBucket;
};
/** @returns {RedeemReferralCodeRequest} */
declare function RedeemReferralCodeRequest(): RedeemReferralCodeRequest;
type RedeemReferralCodeRequest = {
    device_id?: string;
    referral_code?: string;
};
/** @returns {RedeemReferralCodeResponse} */
declare function RedeemReferralCodeResponse(): RedeemReferralCodeResponse;
type RedeemReferralCodeResponse = {
    redeemed?: boolean;
    message?: string;
    referrer_info?: string;
    referrer_id?: string;
    points?: number;
};
/** @returns {PointsHistoryResponse} */
declare function PointsHistoryResponse(): PointsHistoryResponse;
type PointsHistoryResponse = {
    /**
     * - History is the list of points transaction.
     */
    items?: PointsHistory[];
    page?: Page;
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
