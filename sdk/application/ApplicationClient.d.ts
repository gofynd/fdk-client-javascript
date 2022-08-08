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
    rewards: Rewards;
    feedback: Feedback;
    posCart: PosCart;
    logistic: Logistic;
    setCookie(cookie: any): void;
    setLocationDetails(locationDetails: any): void;
    setExtraHeaders(header: any): void;
}
import Catalog = require("./client/CatalogApplicationClient");
import Cart = require("./client/CartApplicationClient");
import Common = require("./client/CommonApplicationClient");
import Lead = require("./client/LeadApplicationClient");
import Theme = require("./client/ThemeApplicationClient");
import User = require("./client/UserApplicationClient");
import Content = require("./client/ContentApplicationClient");
import Communication = require("./client/CommunicationApplicationClient");
import Share = require("./client/ShareApplicationClient");
import FileStorage = require("./client/FileStorageApplicationClient");
import Configuration = require("./client/ConfigurationApplicationClient");
import Payment = require("./client/PaymentApplicationClient");
import Order = require("./client/OrderApplicationClient");
import Rewards = require("./client/RewardsApplicationClient");
import Feedback = require("./client/FeedbackApplicationClient");
import PosCart = require("./client/PosCartApplicationClient");
import Logistic = require("./client/LogisticApplicationClient");
