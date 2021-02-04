
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


