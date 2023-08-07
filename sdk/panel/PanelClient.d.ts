export = PanelClient;
declare class PanelClient {
    constructor(config: any);
    config: any;
    theme: Theme;
    setExtraHeaders(header: any): void;
}
import Theme = require("./Theme/ThemePanelClient");
