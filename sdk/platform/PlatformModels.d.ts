export class LeadValidator {
    static getTickets: () => any;
    static createTicket: () => any;
    static getTicket: () => any;
    static editTicket: () => any;
    static createHistory: () => any;
    static getTicketHistory: () => any;
}
export class PaymentValidator {
    static getAllPayouts: () => any;
    static savePayout: () => any;
    static updatePayout: () => any;
    static activateAndDectivatePayout: () => any;
    static deletePayout: () => any;
    static getSubscriptionPaymentMethod: () => any;
    static deleteSubscriptionPaymentMethod: () => any;
    static getSubscriptionConfig: () => any;
    static saveSubscriptionSetupIntent: () => any;
}
export class OrderValidator {
    static shipmentStatusUpdate: () => any;
    static activityStatus: () => any;
    static storeProcessShipmentUpdate: () => any;
    static getOrdersByCompanyId: () => any;
    static getPing: () => any;
    static voiceCallback: () => any;
    static voiceClickToCall: () => any;
}
export class CompanyProfileValidator {
    static updateCompany: () => any;
    static cbsOnboardGet: () => any;
    static getCompanyMetrics: () => any;
    static editBrand: () => any;
    static getBrand: () => any;
    static createBrand: () => any;
    static getBrands: () => any;
    static createLocation: () => any;
    static getLocations: () => any;
    static updateLocation: () => any;
    static getLocationDetail: () => any;
}
export class AssetsValidator {
    static startUpload: () => any;
    static completeUpload: () => any;
    static getSignUrls: () => any;
    static copyFiles: () => any;
    static browse: () => any;
    static proxy: () => any;
}
export class InventoryValidator {
    static getJobsByCompany: () => any;
    static updateJob: () => any;
    static createJob: () => any;
    static getJobByCompanyAndIntegration: () => any;
    static getJobConfigDefaults: () => any;
    static getJobByCode: () => any;
    static getJobCodesByCompanyAndIntegration: () => any;
}
export class MarketplacesValidator {
    static getAvailableChannels: () => any;
    static getChannels: () => any;
    static getChannel: () => any;
    static registerMyntraChannel: () => any;
    static updateMyntraChannelCredentials: () => any;
    static registerAmazonChannel: () => any;
    static updateAmazonChannelCredentials: () => any;
    static registerFlipkartChannel: () => any;
    static updateFlipkartChannelCredentials: () => any;
    static registerTatacliqChannel: () => any;
    static updateTatacliqChannelCredentials: () => any;
    static registerAjioChannel: () => any;
    static updateAjioChannelCredentials: () => any;
    static updateChannelInventoryConfig: () => any;
    static getChannelLocationConfig: () => any;
    static updateChannelLocationConfig: () => any;
    static getChannelStatus: () => any;
    static updateChannelStatus: () => any;
    static triggerChannelInventoryUpdates: () => any;
}
export class AnalyticsValidator {
    static createExportJob: () => any;
    static getExportJobStatus: () => any;
    static getLogsList: () => any;
    static searchLogs: () => any;
}
