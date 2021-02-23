
const APIClient = require("./api_client");
const Configuration = require("./configuration");



const { 
    Page,
    UnauthenticatedUser,
    UnauthenticatedApplication,
    BadRequest,
    ResourceNotFound,
    InternalServerError,
    Plan,
    DetailedPlan,
    Phone,
    BillingAddress,
    SubscriptionCustomer,
    SubscriptionCustomerCreate,
    Subscription,
    SubscriptionStatus,
    SubscriptionLimit,
    SubscriptionActivateReq,
    SubscriptionActivateRes,
    CancelSubscriptionReq,
    CancelSubscriptionRes
} = require("./schema");

    
class Billing {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get all public visible plans with detailed componet data
    * Description:  Get all public visible plans with detailed componet data
    **/
    getPublicPlanDetailedList(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/plan/detailed-list/{product_suite}",
        );
    }
    
    /**
    *
    * Summary: Get plan details by id
    * Description:  Get Plan detaild with component data by plan_id.
    **/
    getPublicPlanDetailedById(
        planId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/plan/details/{plan_id}",
        );
    }
    
    /**
    *
    * Summary: Get all public visible plans
    * Description:  Get all public visible plans
    **/
    getPublicPlanList(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/plan/list/{product_suite}",
        );
    }
    
    /**
    *
    * Summary: Get subscription customer detail
    * Description:  Get subscription customer detail.
    **/
    getCustomerDetail(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/subscription/customer-detail/{type}/{unique_id}",
        );
    }
    
    /**
    *
    * Summary: Upsert subscription customer detail
    * Description:  Upsert subscription customer detail.
    **/
    upsertCustomerDetail(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/billing/v1.0/subscription/customer-detail",
        );
    }
    
    /**
    *
    * Summary: Get current subscription detail
    * Description:  If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.

    **/
    getSubscription(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/subscription/current/{product_suite}/{type}/{unique_id}",
        );
    }
    
    /**
    *
    * Summary: Get subscription customer detail
    * Description:  Get subscription customer detail.
    **/
    getFeatureLimitConfig(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/subscription/current-limit/{product_suite}/{type}/{unique_id}",
        );
    }
    
    /**
    *
    * Summary: Activate subscription
    * Description:  It will activate subscription plan for customer
    **/
    activateSubscriptionPlan(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/billing/v1.0/subscription/activate",
        );
    }
    
    /**
    *
    * Summary: Cancel subscription
    * Description:  It will cancel current active subscription.
    **/
    cancelSubscriptionPlan(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/billing/v1.0/subscription/cancel",
        );
    }
    
}


exports.Billing = Billing;



const { 
    GetStats,
    CampaignReq,
    Campaign,
    Campaigns,
    BigqueryHeadersReq,
    BigqueryHeadersRes,
    GetNRecordsCsvReq,
    GetNRecordsCsvRes,
    AudienceReq,
    Audience,
    Audiences,
    EmailProviderReq,
    EmailProvider,
    EmailProviders,
    EmailTemplateDeleteSuccessRes,
    EmailTemplateDeleteFailureRes,
    EmailTemplateReq,
    EmailTemplateRes,
    EmailTemplate,
    SystemEmailTemplate,
    EmailTemplates,
    SystemEmailTemplates,
    Log,
    Logs,
    SmsProviderReq,
    SmsProvider,
    SmsProviders,
    SmsTemplateDeleteSuccessRes,
    SmsTemplateDeleteFailureRes,
    SmsTemplateReq,
    SmsTemplateRes,
    SmsTemplate,
    SystemSmsTemplate,
    SmsTemplates,
    SystemSmsTemplates
} = require("./schema");

    
class Communication {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get campaigns
    * Description:  Get campaigns
    **/
    getCampaigns(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/campaigns/campaigns",
        );
    }
    
    /**
    *
    * Summary: Create campaign
    * Description:  Create campaign
    **/
    createCampaign(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/campaigns/campaigns",
        );
    }
    
    /**
    *
    * Summary: Get campaign by id
    * Description:  Get campaign by id
    **/
    getCampaignById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/campaigns/campaigns/{id}",
        );
    }
    
    /**
    *
    * Summary: Update campaign by id
    * Description:  Update campaign by id
    **/
    updateCampaignById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/campaigns/campaigns/{id}",
        );
    }
    
    /**
    *
    * Summary: Get stats of campaign by id
    * Description:  Get stats of campaign by id
    **/
    getStatsOfCampaignById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/campaigns/get-stats/{id}",
        );
    }
    
    /**
    *
    * Summary: Get audiences
    * Description:  Get audiences
    **/
    getAudiences(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sources/datasources",
        );
    }
    
    /**
    *
    * Summary: Create audience
    * Description:  Create audience
    **/
    createAudience(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/sources/datasources",
        );
    }
    
    /**
    *
    * Summary: Get bigquery headers
    * Description:  Get bigquery headers
    **/
    getBigqueryHeaders(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/sources/bigquery-headers",
        );
    }
    
    /**
    *
    * Summary: Get audience by id
    * Description:  Get audience by id
    **/
    getAudienceById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sources/datasources/{id}",
        );
    }
    
    /**
    *
    * Summary: Update audience by id
    * Description:  Update audience by id
    **/
    updateAudienceById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/sources/datasources/{id}",
        );
    }
    
    /**
    *
    * Summary: Get n sample records from csv
    * Description:  Get n sample records from csv
    **/
    getNSampleRecordsFromCsv(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/sources/get-n-records",
        );
    }
    
    /**
    *
    * Summary: Get email providers
    * Description:  Get email providers
    **/
    getEmailProviders(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/company/{company}/application/{application}/email/providers",
        );
    }
    
    /**
    *
    * Summary: Get email provider by id
    * Description:  Get email provider by id
    **/
    getEmailProviderById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/email/providers/{id}",
        );
    }
    
    /**
    *
    * Summary: Update email provider by id
    * Description:  Update email provider by id
    **/
    updateEmailProviderById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/email/providers/{id}",
        );
    }
    
    /**
    *
    * Summary: Create email provider
    * Description:  Create email provider
    **/
    createEmailProvider(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/email/providers",
        );
    }
    
    /**
    *
    * Summary: Get email templates
    * Description:  Get email templates
    **/
    getEmailTemplates(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/email/templates",
        );
    }
    
    /**
    *
    * Summary: Create email template
    * Description:  Create email template
    **/
    createEmailTemplate(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/email/templates",
        );
    }
    
    /**
    *
    * Summary: Get system email templates
    * Description:  Get system email templates
    **/
    getSystemEmailTemplates(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/email/system-templates",
        );
    }
    
    /**
    *
    * Summary: Get email template by id
    * Description:  Get email template by id
    **/
    getEmailTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/email/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Update email template by id
    * Description:  Update email template by id
    **/
    updateEmailTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/email/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Delete email template by id
    * Description:  Delete email template by id
    **/
    deleteEmailTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/platform/communication/v1.0/email/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Get communication logs
    * Description:  Get communication logs
    **/
    getCommunicationLogs(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/company/{company}/application/{application}/log",
        );
    }
    
    /**
    *
    * Summary: Get sms providers
    * Description:  Get sms providers
    **/
    getSmsProviders(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sms/providers",
        );
    }
    
    /**
    *
    * Summary: Create sms provider
    * Description:  Create sms provider
    **/
    createSmsProvider(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/sms/providers",
        );
    }
    
    /**
    *
    * Summary: Get sms provider by id
    * Description:  Get sms provider by id
    **/
    getSmsProviderById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sms/providers/{id}",
        );
    }
    
    /**
    *
    * Summary: Update sms provider by id
    * Description:  Update sms provider by id
    **/
    updateSmsProviderById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/sms/providers/{id}",
        );
    }
    
    /**
    *
    * Summary: Get sms templates
    * Description:  Get sms templates
    **/
    getSmsTemplates(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sms/templates",
        );
    }
    
    /**
    *
    * Summary: Create sms template
    * Description:  Create sms template
    **/
    createSmsTemplate(
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/communication/v1.0/sms/templates",
        );
    }
    
    /**
    *
    * Summary: Get sms template by id
    * Description:  Get sms template by id
    **/
    getSmsTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sms/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Update sms template by id
    * Description:  Update sms template by id
    **/
    updateSmsTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/communication/v1.0/sms/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Delete sms template by id
    * Description:  Delete sms template by id
    **/
    deleteSmsTemplateById(
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/platform/communication/v1.0/sms/templates/{id}",
        );
    }
    
    /**
    *
    * Summary: Get system sms templates
    * Description:  Get system sms templates
    **/
    getSystemSystemTemplates(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/communication/v1.0/sms/system-templates",
        );
    }
    
}


exports.Communication = Communication;



const { 
    PaymentGatewayConfigResponse,
    ErrorCodeDescription,
    PaymentGatewayConfig,
    PaymentGatewayConfigRequest,
    PaymentGatewayToBeReviewed,
    ErrorCodeAndDescription,
    HttpErrorCodeAndResponse,
    PaymentOptionsDetails,
    PaymentOptionsResponse,
    PayoutsResponse,
    PayoutRequest,
    PayoutResponse,
    UpdatePayoutResponse,
    UpdatePayoutRequest,
    DeletePayoutResponse,
    SubscriptionPaymentMethodResponse,
    DeleteSubscriptionPaymentMethodResponse,
    SubscriptionConfigResponse,
    SaveSubscriptionSetupIntentRequest,
    SaveSubscriptionSetupIntentResponse
} = require("./schema");

    
class Payment {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get All Brand Payment Gateway Config Secret
    * Description:  Get All Brand Payment Gateway Config Secret
    **/
    getBrandPaymentGatewayConfig(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/aggregator/request",
        );
    }
    
    /**
    *
    * Summary: Save Config Secret For Brand Payment Gateway
    * Description:  Save Config Secret For Brand Payment Gateway
    **/
    saveBrandPaymentGatewayConfig(
        companyId, opts
        applicationId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/aggregator/request",
        );
    }
    
    /**
    *
    * Summary: Get All Valid Payment Options
    * Description:  Use this API to get Get All Valid Payment Options for making payment
    **/
    (
        companyId, opts
        applicationId, opts
        refresh, opts
        requestType, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/payment/v1.0/company/{company_id}/application/{application_id}/payment/options",
        );
    }
    
    /**
    *
    * Summary: Get All Payouts
    * Description:  Get All Payouts
    **/
    getAllPayouts(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/payment/v1.0/company/{company_id}/payouts",
        );
    }
    
    /**
    *
    * Summary: Save Payout
    * Description:  Save Payout
    **/
    savePayout(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/payment/v1.0/company/{company_id}/payouts",
        );
    }
    
    /**
    *
    * Summary: Update Payout
    * Description:  Update Payout
    **/
    updatePayout(
        companyId, opts
        uniqueTransferNo, opts
    ) {
        return APIClient.execute(
            this._conf,
            "put",
            "/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}",
        );
    }
    
    /**
    *
    * Summary: Partial Update Payout
    * Description:  Partial Update Payout
    **/
    activateAndDectivatePayout(
        companyId, opts
        uniqueTransferNo, opts
    ) {
        return APIClient.execute(
            this._conf,
            "patch",
            "/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}",
        );
    }
    
    /**
    *
    * Summary: Delete Payout
    * Description:  Delete Payout
    **/
    deletePayout(
        companyId, opts
        uniqueTransferNo, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/platform/payment/v1.0/company/{company_id}/payouts/{unique_transfer_no}",
        );
    }
    
    /**
    *
    * Summary: List Subscription Payment Method
    * Description:  Get all  Subscription  Payment Method
    **/
    getSubscriptionPaymentMethod(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/payment/v1.0/company/{company_id}/subscription/methods",
        );
    }
    
    /**
    *
    * Summary: Delete Subscription Payment Method
    * Description:  Uses this api to Delete Subscription Payment Method
    **/
    deleteSubscriptionPaymentMethod(
        companyId, opts
        uniqueExternalId, opts
        paymentMethodId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "delete",
            "/service/platform/payment/v1.0/company/{company_id}/subscription/methods",
        );
    }
    
    /**
    *
    * Summary: List Subscription Config
    * Description:  Get all  Subscription Config details
    **/
    getSubscriptionConfig(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/payment/v1.0/company/{company_id}/subscription/configs",
        );
    }
    
    /**
    *
    * Summary: Save Subscription Setup Intent
    * Description:  Uses this api to Save Subscription Setup Intent
    **/
    saveSubscriptionSetupIntent(
        companyId, opts
    ) {
        return APIClient.execute(
            this._conf,
            "post",
            "/service/platform/payment/v1.0/company/{company_id}/subscription/setup/intent",
        );
    }
    
}


exports.Payment = Payment;


