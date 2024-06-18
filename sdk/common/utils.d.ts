export function transformRequestOptions(params: any): string;
export function getParamsFromItem(params: any): string;
export function getQuery(path: any): {};
export function trimChar(string?: string, charToRemove?: string): string;
export function generateUrlWithParams(item: {}, params: any): string;
export function findBestMatchingLink(allLinks?: any[], pathname?: string): {
    value: string;
    params: {};
};
export function validURL(str: any): boolean;
export function convertStringToBase64(string: any): string;
export function isBrowser(): boolean;
export function isNode(): boolean;
export namespace NAV_TYPE {
    const PAGE: string;
    const POPUP: string;
}
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
export function combineURLs(baseURL: string, relativeURL: string): string;
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
export function isAbsoluteURL(url: string): boolean;
