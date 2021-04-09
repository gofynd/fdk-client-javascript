export class LeadValidator {
    static getTickets(): any;
    static createTicket(): any;
    static getTicket(): any;
    static editTicket(): any;
    static createHistory(): any;
    static getTicketHistory(): any;
}
export class BillingValidator {
    static getInvoices(): any;
    static getInvoiceById(): any;
    static getCustomerDetail(): any;
    static upsertCustomerDetail(): any;
    static getSubscription(): any;
    static getFeatureLimitConfig(): any;
    static activateSubscriptionPlan(): any;
    static cancelSubscriptionPlan(): any;
}
export class CommunicationValidator {
    static getSystemNotifications(): any;
}
export class PaymentValidator {
    static getAllPayouts(): any;
    static savePayout(): any;
    static updatePayout(): any;
    static activateAndDectivatePayout(): any;
    static deletePayout(): any;
    static getSubscriptionPaymentMethod(): any;
    static deleteSubscriptionPaymentMethod(): any;
    static getSubscriptionConfig(): any;
    static saveSubscriptionSetupIntent(): any;
}
export class OrderValidator {
    static shipmentStatusUpdate(): any;
    static activityStatus(): any;
    static storeProcessShipmentUpdate(): any;
    static getOrdersByCompanyId(): any;
    static getPing(): any;
    static voiceCallback(): any;
    static voiceClickToCall(): any;
}
export class FileStorageValidator {
    static startUpload(): any;
    static completeUpload(): any;
    static getSignUrls(): any;
    static copyFiles(): any;
    static browse(): any;
    static proxy(): any;
}
export class InventoryValidator {
    static getJobsByCompany(): any;
    static updateJob(): any;
    static createJob(): any;
    static getJobByCompanyAndIntegration(): any;
    static getJobConfigDefaults(): any;
    static getJobByCode(): any;
    static getJobCodesByCompanyAndIntegration(): any;
}
export class ConfigurationValidator {
    static createApplication(): any;
    static getApplications(): any;
    static getCurrencies(): any;
    static getDomainAvailibility(): any;
    static getIntegrationById(): any;
    static getAvailableOptIns(): any;
    static getSelectedOptIns(): any;
    static getIntegrationLevelConfig(): any;
    static getIntegrationByLevelId(): any;
    static getLevelActiveIntegrations(): any;
    static getBrandsByCompany(): any;
    static getCompanyByBrands(): any;
    static getStoreByBrands(): any;
    static getOtherSellerApplications(): any;
    static getOtherSellerApplicationById(): any;
    static optOutFromApplication(): any;
}
export class MarketplacesValidator {
    static getAvailableChannels(): any;
    static getChannels(): any;
    static getChannel(): any;
    static registerMyntraChannel(): any;
    static updateMyntraChannelCredentials(): any;
    static registerAmazonChannel(): any;
    static updateAmazonChannelCredentials(): any;
    static registerFlipkartChannel(): any;
    static updateFlipkartChannelCredentials(): any;
    static registerTatacliqChannel(): any;
    static updateTatacliqChannelCredentials(): any;
    static registerAjioChannel(): any;
    static updateAjioChannelCredentials(): any;
    static updateChannelInventorySyncConfig(): any;
    static getChannelLocationConfig(): any;
    static updateChannelLocationConfig(): any;
    static getChannelStatus(): any;
    static updateChannelStatus(): any;
    static triggerChannelInventoryUpdates(): any;
}
export class AnalyticsValidator {
    static createExportJob(): any;
    static getExportJobStatus(): any;
    static getLogsList(): any;
    static searchLogs(): any;
}
export class DiscountValidator {
    static getDiscounts(): any;
    static createDiscount(): any;
    static getDiscount(): any;
    static updateDiscount(): any;
    static validateDiscountFile(): any;
    static downloadDiscountFile(): any;
    static getValidationJob(): any;
    static cancelValidationJob(): any;
    static getDownloadJob(): any;
    static cancelDownloadJob(): any;
}
