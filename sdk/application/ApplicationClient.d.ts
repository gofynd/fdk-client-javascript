export = ApplicationClient;
/**
 * Represents the client for the application.
 *
 * @class
 */
declare class ApplicationClient {
    /** @param {import("./ApplicationConfig")} config - The application configuration. */
    constructor(config: import("./ApplicationConfig"));
    config: import("./ApplicationConfig");
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
    posCart: PosCart;
    logistic: Logistic;
    /**
     * Sets the cookie for the application.
     *
     * @param {string} cookie - The cookie to set, This cookie will be included
     *   in the headers of every subsequent request.
     */
    setCookie(cookie: string): void;
    /**
     * Sets the location details for the application.
     *
     * @param {import("./ApplicationModels").LocationObject} locationDetails -
     *   The location details to set.
     * @throws {FDKClientValidationError} When the location details validation fails.
     */
    setLocationDetails(locationDetails: import("./ApplicationModels").LocationObject): void;
    /**
     * Sets the currency code in ApplicationConfig.
     *
     * @param {string} currencyCode - The currency code to set.
     * @throws {FDKClientValidationError} When the provided currency code is not a string.
     */
    setCurrencyCode(currencyCode: string): void;
    /**
     * Sets the extra headers for the application.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
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
import Rewards = require("./Rewards/RewardsApplicationClient");
import PosCart = require("./PosCart/PosCartApplicationClient");
import Logistic = require("./Logistic/LogisticApplicationClient");
