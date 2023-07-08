export = Communication;
declare class Communication {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        sendSellerCommunicationAsynchronously: string;
        sendSellerCommunicationSynchronously: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendSellerCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<EngineResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @returns {Promise<EngineResponse>} - Success response
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendSellerCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<EngineResponse>;
}
