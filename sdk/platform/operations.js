
const APIClient = require("./api_client");
const Configuration = require("./configuration");



const { 
    Page,
    Plan,
    DetailedPlan
} = require("./schema");

    
class Billing {
    constructor(_conf) {
        this._conf = _conf;
    }
    
    /**
    *
    * Summary: Get all public visible plans
    * Description:  Get all public visible plans with detailed componet data
    **/
    getPublicPlanDetailedList(
    ) {
        return APIClient.execute(
            this._conf,
            "get",
            "/service/platform/billing/v1.0/plan/detailed-list/{product_suite_slug}",
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
            "/service/platform/billing/v1.0/plan/list/{product_suite_slug}",
        );
    }
    
}


exports.Billing = Billing;


