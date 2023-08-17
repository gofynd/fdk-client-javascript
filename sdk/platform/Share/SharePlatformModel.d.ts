export = SharePlatformModel;
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [medium]
 * @property {string} [source]
 */
/**
 * @typedef ClickStatsItem
 * @property {string} [display] - The display name of the click statistic.
 * @property {number} [total] - The total number of clicks for the statistic.
 */
/**
 * @typedef ClickStatsResponse
 * @property {ClickStatsItem[]} click_stats - An array of click statistics for
 *   the short link.
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
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
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [android]
 * @property {boolean} [force_web]
 * @property {RedirectDevice} [ios]
 * @property {WebRedirect} [web]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ShortLinkReq
 * @property {boolean} [active]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [hash]
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {boolean} [app_redirect]
 * @property {string} [application]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [fallback]
 * @property {Object} [meta]
 * @property {boolean} [personalized] - To create personalized short links
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} [title]
 * @property {string} [updated_at]
 * @property {UrlInfo} [url]
 * @property {string} [user_id]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [title]
 */
/**
 * @typedef UrlInfo
 * @property {string} [hash]
 * @property {string} [original]
 * @property {string} [short]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
declare class SharePlatformModel {
}
declare namespace SharePlatformModel {
    export { Attribution, CampaignShortLink, ClickStatsItem, ClickStatsResponse, ErrorRes, Page, RedirectDevice, Redirects, ShortLinkList, ShortLinkReq, ShortLinkRes, SocialMediaTags, UrlInfo, WebRedirect };
}
/** @returns {Attribution} */
declare function Attribution(): Attribution;
type Attribution = {
    campaign_cookie_expiry?: string;
};
/** @returns {CampaignShortLink} */
declare function CampaignShortLink(): CampaignShortLink;
type CampaignShortLink = {
    medium?: string;
    source?: string;
};
/** @returns {ClickStatsItem} */
declare function ClickStatsItem(): ClickStatsItem;
type ClickStatsItem = {
    /**
     * - The display name of the click statistic.
     */
    display?: string;
    /**
     * - The total number of clicks for the statistic.
     */
    total?: number;
};
/** @returns {ClickStatsResponse} */
declare function ClickStatsResponse(): ClickStatsResponse;
type ClickStatsResponse = {
    /**
     * - An array of click statistics for
     * the short link.
     */
    click_stats: ClickStatsItem[];
};
/** @returns {ErrorRes} */
declare function ErrorRes(): ErrorRes;
type ErrorRes = {
    message?: string;
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
/** @returns {RedirectDevice} */
declare function RedirectDevice(): RedirectDevice;
type RedirectDevice = {
    link?: string;
    type?: string;
};
/** @returns {Redirects} */
declare function Redirects(): Redirects;
type Redirects = {
    android?: RedirectDevice;
    force_web?: boolean;
    ios?: RedirectDevice;
    web?: WebRedirect;
};
/** @returns {ShortLinkList} */
declare function ShortLinkList(): ShortLinkList;
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
/** @returns {ShortLinkReq} */
declare function ShortLinkReq(): ShortLinkReq;
type ShortLinkReq = {
    active?: boolean;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    enable_tracking?: boolean;
    expire_at?: string;
    hash?: string;
    /**
     * - To create personalized short links.
     */
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    /**
     * - Give a name to the link.
     */
    title: string;
    /**
     * - The web address to shorten.
     */
    url: string;
};
/** @returns {ShortLinkRes} */
declare function ShortLinkRes(): ShortLinkRes;
type ShortLinkRes = {
    _id?: string;
    active?: boolean;
    app_redirect?: boolean;
    application?: string;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    created_at?: string;
    created_by?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    fallback?: string;
    meta?: any;
    /**
     * - To create personalized short links
     */
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    title?: string;
    updated_at?: string;
    url?: UrlInfo;
    user_id?: string;
};
/** @returns {SocialMediaTags} */
declare function SocialMediaTags(): SocialMediaTags;
type SocialMediaTags = {
    description?: string;
    image?: string;
    title?: string;
};
/** @returns {UrlInfo} */
declare function UrlInfo(): UrlInfo;
type UrlInfo = {
    hash?: string;
    original?: string;
    short?: string;
};
/** @returns {WebRedirect} */
declare function WebRedirect(): WebRedirect;
type WebRedirect = {
    link?: string;
    type?: string;
};
