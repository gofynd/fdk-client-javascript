export function convertActionToUrl(action: any): any;
export function convertUrlToAction(url: any): {
    type: string;
    page: {
        type: string;
        query: {};
        params: {};
    };
};
