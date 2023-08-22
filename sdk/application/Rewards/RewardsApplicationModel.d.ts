export = RewardsApplicationModel;
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef CatalogueOrderRequest
 * @property {RewardsArticle[]} [articles]
 */
/**
 * @typedef CatalogueOrderResponse
 * @property {RewardsArticle[]} [articles]
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
 * @typedef Error
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
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
 * @typedef OrderDiscountRequest
 * @property {string} [currency]
 * @property {number} order_amount
 */
/**
 * @typedef OrderDiscountResponse
 * @property {OrderDiscountRuleBucket} [applied_rule_bucket]
 * @property {DiscountProperties} [base_discount]
 * @property {DiscountProperties} [discount]
 * @property {number} [order_amount]
 * @property {number} [points]
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
 * @typedef PointsHistoryResponse
 * @property {PointsHistory[]} [items] - History is the list of points transaction.
 * @property {Page} [page]
 */
/**
 * @typedef PointsResponse
 * @property {number} [points] - Total points available
 */
/**
 * @typedef RedeemReferralCodeRequest
 * @property {string} [device_id]
 * @property {string} [referral_code]
 */
/**
 * @typedef RedeemReferralCodeResponse
 * @property {string} [message]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referrer_id]
 * @property {string} [referrer_info]
 */
/**
 * @typedef ReferralDetailsResponse
 * @property {Offer} [referral]
 * @property {string} [referrer_info]
 * @property {ShareMessages} [share]
 * @property {string} [terms_conditions_link]
 * @property {ReferralDetailsUser} [user]
 */
/**
 * @typedef ReferralDetailsUser
 * @property {boolean} [blocked]
 * @property {number} [points]
 * @property {boolean} [redeemed]
 * @property {string} [referral_code]
 */
/**
 * @typedef RewardsArticle
 * @property {string} [id]
 * @property {number} [points]
 * @property {number} [price]
 */
/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
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
declare class RewardsApplicationModel {
}
declare namespace RewardsApplicationModel {
    export { Asset, CatalogueOrderRequest, CatalogueOrderResponse, DiscountProperties, Error, Offer, OrderDiscountRequest, OrderDiscountResponse, OrderDiscountRuleBucket, Page, PointsHistory, PointsHistoryResponse, PointsResponse, RedeemReferralCodeRequest, RedeemReferralCodeResponse, ReferralDetailsResponse, ReferralDetailsUser, RewardsArticle, Schedule, ShareMessages };
}
/** @returns {Asset} */
declare function Asset(): Asset;
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
/** @returns {CatalogueOrderRequest} */
declare function CatalogueOrderRequest(): CatalogueOrderRequest;
type CatalogueOrderRequest = {
    articles?: RewardsArticle[];
};
/** @returns {CatalogueOrderResponse} */
declare function CatalogueOrderResponse(): CatalogueOrderResponse;
type CatalogueOrderResponse = {
    articles?: RewardsArticle[];
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
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
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
/** @returns {OrderDiscountRequest} */
declare function OrderDiscountRequest(): OrderDiscountRequest;
type OrderDiscountRequest = {
    currency?: string;
    order_amount: number;
};
/** @returns {OrderDiscountResponse} */
declare function OrderDiscountResponse(): OrderDiscountResponse;
type OrderDiscountResponse = {
    applied_rule_bucket?: OrderDiscountRuleBucket;
    base_discount?: DiscountProperties;
    discount?: DiscountProperties;
    order_amount?: number;
    points?: number;
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
/** @returns {PointsHistoryResponse} */
declare function PointsHistoryResponse(): PointsHistoryResponse;
type PointsHistoryResponse = {
    /**
     * - History is the list of points transaction.
     */
    items?: PointsHistory[];
    page?: Page;
};
/** @returns {PointsResponse} */
declare function PointsResponse(): PointsResponse;
type PointsResponse = {
    /**
     * - Total points available
     */
    points?: number;
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
    message?: string;
    points?: number;
    redeemed?: boolean;
    referrer_id?: string;
    referrer_info?: string;
};
/** @returns {ReferralDetailsResponse} */
declare function ReferralDetailsResponse(): ReferralDetailsResponse;
type ReferralDetailsResponse = {
    referral?: Offer;
    referrer_info?: string;
    share?: ShareMessages;
    terms_conditions_link?: string;
    user?: ReferralDetailsUser;
};
/** @returns {ReferralDetailsUser} */
declare function ReferralDetailsUser(): ReferralDetailsUser;
type ReferralDetailsUser = {
    blocked?: boolean;
    points?: number;
    redeemed?: boolean;
    referral_code?: string;
};
/** @returns {RewardsArticle} */
declare function RewardsArticle(): RewardsArticle;
type RewardsArticle = {
    id?: string;
    points?: number;
    price?: number;
};
/** @returns {Schedule} */
declare function Schedule(): Schedule;
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
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
