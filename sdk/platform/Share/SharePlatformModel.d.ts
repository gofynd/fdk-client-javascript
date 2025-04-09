export = SharePlatformModel;
/**
 * @typedef ClickStatsResult
 * @property {ClickStatsItem[]} click_stats - An array of click statistics for
 *   the short link.
 */
/**
 * @typedef ClickStatsItem
 * @property {string} display - The display name of the click statistic.
 * @property {number} total - The total number of clicks for the statistic.
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 * @property {shortLinkReqMeta} [meta]
 */
/**
 * @typedef shortLinkReqMeta
 * @property {boolean} [for_sms] - For_sms flag specifies that the short-link
 *   will be used in SMS communication and based on TRAI (Indian) guidelines,
 *   the generated short-link must contain an active SMS HEADER; ex. DLFYND, GOFYND.
 * @property {string} [sms_header] - This field is used to override the sms
 *   header to be used to generate a short-link for SMS communication in
 *   compliance with TRAI guidelines, this should be used in conjunction with
 *   for_sms flag set to true.
 */
/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [hash]
 * @property {string} [short_url]
 * @property {string} [alias]
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized] - To create personalized short links
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
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
 * @property {number} [page_size] - The number of items per page.
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
declare class SharePlatformModel {
}
declare namespace SharePlatformModel {
    export { ClickStatsResult, ClickStatsItem, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, shortLinkReqMeta, UrlInfo, ShortLinkRes, Page, ShortLinkList, ErrorRes };
}
/** @returns {ClickStatsResult} */
declare function ClickStatsResult(): ClickStatsResult;
type ClickStatsResult = {
    /**
     * - An array of click statistics for
     * the short link.
     */
    click_stats: ClickStatsItem[];
};
/** @returns {ClickStatsItem} */
declare function ClickStatsItem(): ClickStatsItem;
type ClickStatsItem = {
    /**
     * - The display name of the click statistic.
     */
    display: string;
    /**
     * - The total number of clicks for the statistic.
     */
    total: number;
};
/** @returns {RedirectDevice} */
declare function RedirectDevice(): RedirectDevice;
type RedirectDevice = {
    link?: string;
    type?: string;
};
/** @returns {WebRedirect} */
declare function WebRedirect(): WebRedirect;
type WebRedirect = {
    link?: string;
    type?: string;
};
/** @returns {Redirects} */
declare function Redirects(): Redirects;
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    force_web?: boolean;
};
/** @returns {CampaignShortLink} */
declare function CampaignShortLink(): CampaignShortLink;
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
/** @returns {Attribution} */
declare function Attribution(): Attribution;
type Attribution = {
    campaign_cookie_expiry?: string;
};
/** @returns {SocialMediaTags} */
declare function SocialMediaTags(): SocialMediaTags;
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
/** @returns {ShortLinkReq} */
declare function ShortLinkReq(): ShortLinkReq;
type ShortLinkReq = {
    /**
     * - Give a name to the link.
     */
    title: string;
    /**
     * - The web address to shorten.
     */
    url: string;
    hash?: string;
    active?: boolean;
    expire_at?: string;
    enable_tracking?: boolean;
    /**
     * - To create personalized short links.
     */
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
    meta?: shortLinkReqMeta;
};
/** @returns {shortLinkReqMeta} */
declare function shortLinkReqMeta(): shortLinkReqMeta;
type shortLinkReqMeta = {
    /**
     * - For_sms flag specifies that the short-link
     * will be used in SMS communication and based on TRAI (Indian) guidelines,
     * the generated short-link must contain an active SMS HEADER; ex. DLFYND, GOFYND.
     */
    for_sms?: boolean;
    /**
     * - This field is used to override the sms
     * header to be used to generate a short-link for SMS communication in
     * compliance with TRAI guidelines, this should be used in conjunction with
     * for_sms flag set to true.
     */
    sms_header?: string;
};
/** @returns {UrlInfo} */
declare function UrlInfo(): UrlInfo;
type UrlInfo = {
    original?: string;
    hash?: string;
    short_url?: string;
    alias?: string;
};
/** @returns {ShortLinkRes} */
declare function ShortLinkRes(): ShortLinkRes;
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    meta?: any;
    updated_at?: string;
    /**
     * - To create personalized short links
     */
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
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
     * - The number of items per page.
     */
    page_size?: number;
};
/** @returns {ShortLinkList} */
declare function ShortLinkList(): ShortLinkList;
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
/** @returns {ErrorRes} */
declare function ErrorRes(): ErrorRes;
type ErrorRes = {
    message?: string;
};
