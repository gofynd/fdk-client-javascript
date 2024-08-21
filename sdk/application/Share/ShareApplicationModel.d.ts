export = ShareApplicationModel;
/**
 * @typedef QRCodeResp
 * @property {string} [link] - Original url that was used to encoded url into a QR code.
 * @property {string} [svg] - String representation of the QR Code in SVG format.
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link] - Fallback URL to redirect users to the app store
 *   or a web page if the app is not installed when they click the link.
 * @property {string} [type] - Type of fallback used to redirect users to the
 *   app store or a web page if the app is not installed when they click the link.
 */
/**
 * @typedef WebRedirect
 * @property {string} [link] - Fallback URL to redirect users to the app store
 *   or a web page if the app is not installed when they click the link.
 * @property {string} [type] - Type of fallback used to redirect users to the
 *   app store or a web page if the app is not installed when they click the link.
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web] - Flag for overriding redirection traffic to
 *   the web if the app is not installed when the link is clicked.
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source] - Source of communication of campaign.
 * @property {string} [medium] - Channel of communication of campaign.
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry] - Expiration of campaign.
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title] - Title to be displayed when link is shared on
 *   social media platforms.
 * @property {string} [description] - Description to be displayed when link is
 *   shared on social media platforms.
 * @property {string} [image] - Preview to be displayed when link is shared on
 *   social media platforms.
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 * @property {string} [hash] - A string value used for converting long URL to
 *   short URL and vice-versa.
 * @property {boolean} [active] - Status of the shortlink.
 * @property {string} [expire_at] - Expiry of the shortlink.
 * @property {boolean} [enable_tracking] - Flag to enable tracking of a short link.
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count] - Click count of shortlink.
 */
/**
 * @typedef UrlInfo
 * @property {string} [original] - Original web address which will be converted
 *   to shortlink.
 * @property {string} [hash] - A string value used for converting long URL to
 *   short URL and vice-versa.
 * @property {string} [short_url] - Condensed version of a longer URL,
 *   redirecting to the original page upon being clicked.
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title] - Name reference of the shortlink.
 * @property {UrlInfo} [url]
 * @property {string} [created_by] - Reference of the creator of the shortlink.
 * @property {boolean} [app_redirect] - Application redirection flag of shortlink.
 * @property {string} [fallback] - Fallback attributes of shortlink.
 * @property {boolean} [active] - Status of the shortlink.
 * @property {string} [_id] - Key used to uniquely identify document that
 *   contains shortlink details.
 * @property {boolean} [enable_tracking] - Flag to enable tracking of a short link.
 * @property {string} [expire_at] - Expiry of the shortlink.
 * @property {string} [application] - The ID of the sales channel associated
 *   with the shortlink.
 * @property {string} [user_id] - Identifier which can uniquely identify the user.
 * @property {string} [created_at] - The timestamp indicating when a record was
 *   initially created.
 * @property {Object} [meta] - Additional attributes of shortlink.
 * @property {string} [updated_at] - The timestamp indicating when a record was
 *   last modified or updated.
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count] - Click count of shortlink.
 */
/**
 * @typedef ErrorRes
 * @property {string} [message] - Error message providing details about the error.
 */
declare class ShareApplicationModel {
}
declare namespace ShareApplicationModel {
    export { QRCodeResp, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ErrorRes };
}
/** @returns {QRCodeResp} */
declare function QRCodeResp(): QRCodeResp;
type QRCodeResp = {
    /**
     * - Original url that was used to encoded url into a QR code.
     */
    link?: string;
    /**
     * - String representation of the QR Code in SVG format.
     */
    svg?: string;
};
/** @returns {RedirectDevice} */
declare function RedirectDevice(): RedirectDevice;
type RedirectDevice = {
    /**
     * - Fallback URL to redirect users to the app store
     * or a web page if the app is not installed when they click the link.
     */
    link?: string;
    /**
     * - Type of fallback used to redirect users to the
     * app store or a web page if the app is not installed when they click the link.
     */
    type?: string;
};
/** @returns {WebRedirect} */
declare function WebRedirect(): WebRedirect;
type WebRedirect = {
    /**
     * - Fallback URL to redirect users to the app store
     * or a web page if the app is not installed when they click the link.
     */
    link?: string;
    /**
     * - Type of fallback used to redirect users to the
     * app store or a web page if the app is not installed when they click the link.
     */
    type?: string;
};
/** @returns {Redirects} */
declare function Redirects(): Redirects;
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    /**
     * - Flag for overriding redirection traffic to
     * the web if the app is not installed when the link is clicked.
     */
    force_web?: boolean;
};
/** @returns {CampaignShortLink} */
declare function CampaignShortLink(): CampaignShortLink;
type CampaignShortLink = {
    /**
     * - Source of communication of campaign.
     */
    source?: string;
    /**
     * - Channel of communication of campaign.
     */
    medium?: string;
};
/** @returns {Attribution} */
declare function Attribution(): Attribution;
type Attribution = {
    /**
     * - Expiration of campaign.
     */
    campaign_cookie_expiry?: string;
};
/** @returns {SocialMediaTags} */
declare function SocialMediaTags(): SocialMediaTags;
type SocialMediaTags = {
    /**
     * - Title to be displayed when link is shared on
     * social media platforms.
     */
    title?: string;
    /**
     * - Description to be displayed when link is
     * shared on social media platforms.
     */
    description?: string;
    /**
     * - Preview to be displayed when link is shared on
     * social media platforms.
     */
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
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash?: string;
    /**
     * - Status of the shortlink.
     */
    active?: boolean;
    /**
     * - Expiry of the shortlink.
     */
    expire_at?: string;
    /**
     * - Flag to enable tracking of a short link.
     */
    enable_tracking?: boolean;
    /**
     * - To create personalized short links.
     */
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    /**
     * - Click count of shortlink.
     */
    count?: number;
};
/** @returns {UrlInfo} */
declare function UrlInfo(): UrlInfo;
type UrlInfo = {
    /**
     * - Original web address which will be converted
     * to shortlink.
     */
    original?: string;
    /**
     * - A string value used for converting long URL to
     * short URL and vice-versa.
     */
    hash?: string;
    /**
     * - Condensed version of a longer URL,
     * redirecting to the original page upon being clicked.
     */
    short_url?: string;
};
/** @returns {ShortLinkRes} */
declare function ShortLinkRes(): ShortLinkRes;
type ShortLinkRes = {
    /**
     * - Name reference of the shortlink.
     */
    title?: string;
    url?: UrlInfo;
    /**
     * - Reference of the creator of the shortlink.
     */
    created_by?: string;
    /**
     * - Application redirection flag of shortlink.
     */
    app_redirect?: boolean;
    /**
     * - Fallback attributes of shortlink.
     */
    fallback?: string;
    /**
     * - Status of the shortlink.
     */
    active?: boolean;
    /**
     * - Key used to uniquely identify document that
     * contains shortlink details.
     */
    _id?: string;
    /**
     * - Flag to enable tracking of a short link.
     */
    enable_tracking?: boolean;
    /**
     * - Expiry of the shortlink.
     */
    expire_at?: string;
    /**
     * - The ID of the sales channel associated
     * with the shortlink.
     */
    application?: string;
    /**
     * - Identifier which can uniquely identify the user.
     */
    user_id?: string;
    /**
     * - The timestamp indicating when a record was
     * initially created.
     */
    created_at?: string;
    /**
     * - Additional attributes of shortlink.
     */
    meta?: any;
    /**
     * - The timestamp indicating when a record was
     * last modified or updated.
     */
    updated_at?: string;
    /**
     * - To create personalized short links.
     */
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    /**
     * - Click count of shortlink.
     */
    count?: number;
};
/** @returns {ErrorRes} */
declare function ErrorRes(): ErrorRes;
type ErrorRes = {
    /**
     * - Error message providing details about the error.
     */
    message?: string;
};
