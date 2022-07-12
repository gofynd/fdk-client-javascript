export function convertActionToUrl(action: any): any;
export function convertUrlToAction(url: any): {
    type: string;
    page: {
        type: any;
        query: {};
        params: {};
    };
};
