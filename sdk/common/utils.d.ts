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
