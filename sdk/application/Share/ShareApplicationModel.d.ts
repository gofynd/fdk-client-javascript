export = ShareApplicationModel;
/**
 * @typedef QRCodeResp
 * @property {string} [link]
 * @property {string} [svg]
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
 */
/**
 * @typedef UrlInfo
 * @property {string} [hash]
 * @property {string} [url_hash]
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
 * @typedef ErrorRes
 * @property {string} [message]
 */
declare class ShareApplicationModel {
}
declare namespace ShareApplicationModel {
    export { QRCodeResp, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ErrorRes };
}
/** @returns {QRCodeResp} */
declare function QRCodeResp(): QRCodeResp;
type QRCodeResp = {
    link?: string;
    svg?: string;
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
};
/** @returns {UrlInfo} */
declare function UrlInfo(): UrlInfo;
type UrlInfo = {
    hash?: string;
    url_hash?: string;
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
/** @returns {ErrorRes} */
declare function ErrorRes(): ErrorRes;
type ErrorRes = {
    message?: string;
};
