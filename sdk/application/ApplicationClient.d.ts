export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    config: any;
    catalog: Catalog;
    cart: Cart;
    common: Common;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    share: Share;
    fileStorage: FileStorage;
    configuration: Configuration;
    payment: Payment;
    order: Order;
    posCart: PosCart;
    logistic: Logistic;
    setCookie(cookie: any): void;
    setLocationDetails(locationDetails: any): void;
    setCurrencyCode(currencyCode: any): void;
    setExtraHeaders(header: any): void;
}
import Catalog = require("./Catalog/CatalogApplicationClient");
import Cart = require("./Cart/CartApplicationClient");
import Common = require("./Common/CommonApplicationClient");
import Lead = require("./Lead/LeadApplicationClient");
import Theme = require("./Theme/ThemeApplicationClient");
import User = require("./User/UserApplicationClient");
import Content = require("./Content/ContentApplicationClient");
import Communication = require("./Communication/CommunicationApplicationClient");
import Share = require("./Share/ShareApplicationClient");
import FileStorage = require("./FileStorage/FileStorageApplicationClient");
import Configuration = require("./Configuration/ConfigurationApplicationClient");
import Payment = require("./Payment/PaymentApplicationClient");
import Order = require("./Order/OrderApplicationClient");
import PosCart = require("./PosCart/PosCartApplicationClient");
import Logistic = require("./Logistic/LogisticApplicationClient");
