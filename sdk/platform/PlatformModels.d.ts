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
export class CatalogValidator {
    static getProductBundle(): any;
    static createProductBundle(): any;
    static updateProductBundle(): any;
    static getProductBundleDetail(): any;
    static getSizeGuides(): any;
    static createSizeGuide(): any;
    static updateSizeGuide(): any;
    static getSizeGuide(): any;
    static getSellerInsights(): any;
    static createMarketplaceOptin(): any;
    static getMarketplaceOptinDetail(): any;
    static getCompanyDetail(): any;
    static getCompanyBrandDetail(): any;
    static getCompanyMetrics(): any;
    static getStoreDetail(): any;
    static getGenderAttribute(): any;
    static listProductTemplateCategories(): any;
    static listDepartmentsData(): any;
    static getDepartmentData(): any;
    static listProductTemplate(): any;
    static validateProductTemplate(): any;
    static downloadProductTemplateViews(): any;
    static downloadProductTemplateView(): any;
    static validateProductTemplateSchema(): any;
    static listHSNCodes(): any;
    static listProductTemplateExportDetails(): any;
    static listTemplateBrandTypeValues(): any;
    static listCategories(): any;
    static createCategories(): any;
    static updateCategory(): any;
    static getCategoryData(): any;
    static getProducts(): any;
    static createProduct(): any;
    static editProduct(): any;
    static deleteProduct(): any;
    static getProduct(): any;
    static getProductValidation(): any;
    static getProductSize(): any;
    static getProductBulkUploadHistory(): any;
    static updateProductAssetsInBulk(): any;
    static deleteProductBulkJob(): any;
    static createProductsInBulk(): any;
    static getCompanyTags(): any;
    static getProductAssetsInBulk(): any;
    static createProductAssetsInBulk(): any;
    static deleteSize(): any;
    static getInventory(): any;
    static addInventory(): any;
    static deleteInventory(): any;
    static getInventoryBulkUploadHistory(): any;
    static createBulkInventoryJob(): any;
    static deleteBulkInventoryJob(): any;
    static createBulkInventory(): any;
    static getInventoryExport(): any;
    static createInventoryExportJob(): any;
    static exportInventoryConfig(): any;
    static getAllHsnCodes(): any;
    static createHsnCode(): any;
    static updateHsnCode(): any;
    static getHsnCode(): any;
    static bulkHsnCode(): any;
}
export class CompanyProfileValidator {
    static cbsOnboardGet(): any;
    static updateCompany(): any;
    static getCompanyMetrics(): any;
    static getBrand(): any;
    static editBrand(): any;
    static createBrand(): any;
    static getBrands(): any;
    static createCompanyBrandMapping(): any;
    static getLocations(): any;
    static createLocation(): any;
    static getLocationDetail(): any;
    static updateLocation(): any;
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
export class WebhookValidator {
    static getSubscribersByCompanyAndEventId(): any;
    static registerSubscriberToEvent(): any;
    static updateSubscriberConfig(): any;
}
