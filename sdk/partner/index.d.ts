export const PartnerConfig: typeof import("./PartnerConfig");
export const PartnerClient: typeof import("./PartnerClient");
export namespace PartnerModel {
    const AuthorizationPartnerModel: typeof import("./Authorization/AuthorizationPartnerModel");
    const CatalogPartnerModel: typeof import("./Catalog/CatalogPartnerModel");
    const FileStoragePartnerModel: typeof import("./FileStorage/FileStoragePartnerModel");
    const LeadPartnerModel: typeof import("./Lead/LeadPartnerModel");
    const LogisticsPartnerModel: typeof import("./Logistics/LogisticsPartnerModel");
    const PaymentPartnerModel: typeof import("./Payment/PaymentPartnerModel");
    const ThemePartnerModel: typeof import("./Theme/ThemePartnerModel");
    const WebhookPartnerModel: typeof import("./Webhook/WebhookPartnerModel");
}
