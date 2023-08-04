export = InternalClient;
declare class InternalClient {
    constructor(config: any);
    config: any;
    fileStorage: FileStorage;
    setExtraHeaders(header: any): void;
}
import FileStorage = require("./FileStorage/FileStorageInternalClient");
