# FDK Application Front API Documentaion


* [Billing](#Billing) - Handle platform subscription 
* [Communication](#Communication) - Manages email, sms, push notifications sent to users 
* [Payment](#Payment) - Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account 

----
----

### Classes and Methods


* [Billing](#Billing)
  * [Billing#getPublicPlanDetailedList](#billinggetpublicplandetailedlist)
  * [Billing#getPublicPlanDetailedById](#billinggetpublicplandetailedbyid)
  * [Billing#getPublicPlanList](#billinggetpublicplanlist)
  * [Billing#getCustomerDetail](#billinggetcustomerdetail)
  * [Billing#upsertCustomerDetail](#billingupsertcustomerdetail)
  * [Billing#getSubscription](#billinggetsubscription)
  * [Billing#getFeatureLimitConfig](#billinggetfeaturelimitconfig)
  * [Billing#activateSubscriptionPlan](#billingactivatesubscriptionplan)
  * [Billing#cancelSubscriptionPlan](#billingcancelsubscriptionplan)
 
* [Communication](#Communication)
  * [Communication#getCampaigns](#communicationgetcampaigns)
  * [Communication#createCampaign](#communicationcreatecampaign)
  * [Communication#getCampaignById](#communicationgetcampaignbyid)
  * [Communication#updateCampaignById](#communicationupdatecampaignbyid)
  * [Communication#getStatsOfCampaignById](#communicationgetstatsofcampaignbyid)
  * [Communication#getAudiences](#communicationgetaudiences)
  * [Communication#createAudience](#communicationcreateaudience)
  * [Communication#getBigqueryHeaders](#communicationgetbigqueryheaders)
  * [Communication#getAudienceById](#communicationgetaudiencebyid)
  * [Communication#updateAudienceById](#communicationupdateaudiencebyid)
  * [Communication#getNSampleRecordsFromCsv](#communicationgetnsamplerecordsfromcsv)
  * [Communication#getEmailProviders](#communicationgetemailproviders)
  * [Communication#getEmailProviderById](#communicationgetemailproviderbyid)
  * [Communication#updateEmailProviderById](#communicationupdateemailproviderbyid)
  * [Communication#createEmailProvider](#communicationcreateemailprovider)
  * [Communication#getEmailTemplates](#communicationgetemailtemplates)
  * [Communication#createEmailTemplate](#communicationcreateemailtemplate)
  * [Communication#getSystemEmailTemplates](#communicationgetsystememailtemplates)
  * [Communication#getEmailTemplateById](#communicationgetemailtemplatebyid)
  * [Communication#updateEmailTemplateById](#communicationupdateemailtemplatebyid)
  * [Communication#deleteEmailTemplateById](#communicationdeleteemailtemplatebyid)
  * [Communication#getCommunicationLogs](#communicationgetcommunicationlogs)
  * [Communication#getSmsProviders](#communicationgetsmsproviders)
  * [Communication#createSmsProvider](#communicationcreatesmsprovider)
  * [Communication#getSmsProviderById](#communicationgetsmsproviderbyid)
  * [Communication#updateSmsProviderById](#communicationupdatesmsproviderbyid)
  * [Communication#getSmsTemplates](#communicationgetsmstemplates)
  * [Communication#createSmsTemplate](#communicationcreatesmstemplate)
  * [Communication#getSmsTemplateById](#communicationgetsmstemplatebyid)
  * [Communication#updateSmsTemplateById](#communicationupdatesmstemplatebyid)
  * [Communication#deleteSmsTemplateById](#communicationdeletesmstemplatebyid)
  * [Communication#getSystemSystemTemplates](#communicationgetsystemsystemtemplates)
 
* [Payment](#Payment)
  * [Payment#getBrandPaymentGatewayConfig](#paymentgetbrandpaymentgatewayconfig)
  * [Payment#saveBrandPaymentGatewayConfig](#paymentsavebrandpaymentgatewayconfig)
  * [Payment#](#payment)
  * [Payment#getAllPayouts](#paymentgetallpayouts)
  * [Payment#savePayout](#paymentsavepayout)
  * [Payment#updatePayout](#paymentupdatepayout)
  * [Payment#activateAndDectivatePayout](#paymentactivateanddectivatepayout)
  * [Payment#deletePayout](#paymentdeletepayout)
  * [Payment#getSubscriptionPaymentMethod](#paymentgetsubscriptionpaymentmethod)
  * [Payment#deleteSubscriptionPaymentMethod](#paymentdeletesubscriptionpaymentmethod)
  * [Payment#getSubscriptionConfig](#paymentgetsubscriptionconfig)
  * [Payment#saveSubscriptionSetupIntent](#paymentsavesubscriptionsetupintent)
 

---
---



## Billing

```javascript
const { Configuration, Billing } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const billing = new Billing(conf);

```


#### Billing#getPublicPlanDetailedList
Get all public visible plans with detailed componet data

```javascript
// Promise
const promise = billing.getPublicPlanDetailedList(, );

// Async/Await
const data = await billing.getPublicPlanDetailedList(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get all public visible plans with detailed componet data


---


#### Billing#getPublicPlanDetailedById
Get plan details by id

```javascript
// Promise
const promise = billing.getPublicPlanDetailedById(plan_id, );

// Async/Await
const data = await billing.getPublicPlanDetailedById(plan_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| plan_id | string | Plan Id | 


Get Plan detaild with component data by plan_id.


---


#### Billing#getPublicPlanList
Get all public visible plans

```javascript
// Promise
const promise = billing.getPublicPlanList(, );

// Async/Await
const data = await billing.getPublicPlanList(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get all public visible plans


---


#### Billing#getCustomerDetail
Get subscription customer detail

```javascript
// Promise
const promise = billing.getCustomerDetail(, , );

// Async/Await
const data = await billing.getCustomerDetail(, , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 


Get subscription customer detail.


---


#### Billing#upsertCustomerDetail
Upsert subscription customer detail

```javascript
// Promise
const promise = billing.upsertCustomerDetail();

// Async/Await
const data = await billing.upsertCustomerDetail();

```




Upsert subscription customer detail.


---


#### Billing#getSubscription
Get current subscription detail

```javascript
// Promise
const promise = billing.getSubscription(, , , );

// Async/Await
const data = await billing.getSubscription(, , , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 
|  |  |  | 


If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.



---


#### Billing#getFeatureLimitConfig
Get subscription customer detail

```javascript
// Promise
const promise = billing.getFeatureLimitConfig(, , , );

// Async/Await
const data = await billing.getFeatureLimitConfig(, , , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 
|  |  |  | 


Get subscription customer detail.


---


#### Billing#activateSubscriptionPlan
Activate subscription

```javascript
// Promise
const promise = billing.activateSubscriptionPlan();

// Async/Await
const data = await billing.activateSubscriptionPlan();

```




It will activate subscription plan for customer


---


#### Billing#cancelSubscriptionPlan
Cancel subscription

```javascript
// Promise
const promise = billing.cancelSubscriptionPlan();

// Async/Await
const data = await billing.cancelSubscriptionPlan();

```




It will cancel current active subscription.


---



---
---


## Communication

```javascript
const { Configuration, Communication } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const communication = new Communication(conf);

```


#### Communication#getCampaigns
Get campaigns

```javascript
// Promise
const promise = communication.getCampaigns();

// Async/Await
const data = await communication.getCampaigns();

```




Get campaigns


---


#### Communication#createCampaign
Create campaign

```javascript
// Promise
const promise = communication.createCampaign();

// Async/Await
const data = await communication.createCampaign();

```




Create campaign


---


#### Communication#getCampaignById
Get campaign by id

```javascript
// Promise
const promise = communication.getCampaignById(, );

// Async/Await
const data = await communication.getCampaignById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get campaign by id


---


#### Communication#updateCampaignById
Update campaign by id

```javascript
// Promise
const promise = communication.updateCampaignById(, );

// Async/Await
const data = await communication.updateCampaignById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update campaign by id


---


#### Communication#getStatsOfCampaignById
Get stats of campaign by id

```javascript
// Promise
const promise = communication.getStatsOfCampaignById(, );

// Async/Await
const data = await communication.getStatsOfCampaignById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get stats of campaign by id


---


#### Communication#getAudiences
Get audiences

```javascript
// Promise
const promise = communication.getAudiences();

// Async/Await
const data = await communication.getAudiences();

```




Get audiences


---


#### Communication#createAudience
Create audience

```javascript
// Promise
const promise = communication.createAudience();

// Async/Await
const data = await communication.createAudience();

```




Create audience


---


#### Communication#getBigqueryHeaders
Get bigquery headers

```javascript
// Promise
const promise = communication.getBigqueryHeaders();

// Async/Await
const data = await communication.getBigqueryHeaders();

```




Get bigquery headers


---


#### Communication#getAudienceById
Get audience by id

```javascript
// Promise
const promise = communication.getAudienceById(, );

// Async/Await
const data = await communication.getAudienceById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get audience by id


---


#### Communication#updateAudienceById
Update audience by id

```javascript
// Promise
const promise = communication.updateAudienceById(, );

// Async/Await
const data = await communication.updateAudienceById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update audience by id


---


#### Communication#getNSampleRecordsFromCsv
Get n sample records from csv

```javascript
// Promise
const promise = communication.getNSampleRecordsFromCsv();

// Async/Await
const data = await communication.getNSampleRecordsFromCsv();

```




Get n sample records from csv


---


#### Communication#getEmailProviders
Get email providers

```javascript
// Promise
const promise = communication.getEmailProviders(, , );

// Async/Await
const data = await communication.getEmailProviders(, , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 


Get email providers


---


#### Communication#getEmailProviderById
Get email provider by id

```javascript
// Promise
const promise = communication.getEmailProviderById(, );

// Async/Await
const data = await communication.getEmailProviderById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get email provider by id


---


#### Communication#updateEmailProviderById
Update email provider by id

```javascript
// Promise
const promise = communication.updateEmailProviderById(, );

// Async/Await
const data = await communication.updateEmailProviderById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update email provider by id


---


#### Communication#createEmailProvider
Create email provider

```javascript
// Promise
const promise = communication.createEmailProvider();

// Async/Await
const data = await communication.createEmailProvider();

```




Create email provider


---


#### Communication#getEmailTemplates
Get email templates

```javascript
// Promise
const promise = communication.getEmailTemplates();

// Async/Await
const data = await communication.getEmailTemplates();

```




Get email templates


---


#### Communication#createEmailTemplate
Create email template

```javascript
// Promise
const promise = communication.createEmailTemplate();

// Async/Await
const data = await communication.createEmailTemplate();

```




Create email template


---


#### Communication#getSystemEmailTemplates
Get system email templates

```javascript
// Promise
const promise = communication.getSystemEmailTemplates();

// Async/Await
const data = await communication.getSystemEmailTemplates();

```




Get system email templates


---


#### Communication#getEmailTemplateById
Get email template by id

```javascript
// Promise
const promise = communication.getEmailTemplateById(, );

// Async/Await
const data = await communication.getEmailTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get email template by id


---


#### Communication#updateEmailTemplateById
Update email template by id

```javascript
// Promise
const promise = communication.updateEmailTemplateById(, );

// Async/Await
const data = await communication.updateEmailTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update email template by id


---


#### Communication#deleteEmailTemplateById
Delete email template by id

```javascript
// Promise
const promise = communication.deleteEmailTemplateById(, );

// Async/Await
const data = await communication.deleteEmailTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Delete email template by id


---


#### Communication#getCommunicationLogs
Get communication logs

```javascript
// Promise
const promise = communication.getCommunicationLogs(, , );

// Async/Await
const data = await communication.getCommunicationLogs(, , );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 
|  |  |  | 


Get communication logs


---


#### Communication#getSmsProviders
Get sms providers

```javascript
// Promise
const promise = communication.getSmsProviders();

// Async/Await
const data = await communication.getSmsProviders();

```




Get sms providers


---


#### Communication#createSmsProvider
Create sms provider

```javascript
// Promise
const promise = communication.createSmsProvider();

// Async/Await
const data = await communication.createSmsProvider();

```




Create sms provider


---


#### Communication#getSmsProviderById
Get sms provider by id

```javascript
// Promise
const promise = communication.getSmsProviderById(, );

// Async/Await
const data = await communication.getSmsProviderById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get sms provider by id


---


#### Communication#updateSmsProviderById
Update sms provider by id

```javascript
// Promise
const promise = communication.updateSmsProviderById(, );

// Async/Await
const data = await communication.updateSmsProviderById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update sms provider by id


---


#### Communication#getSmsTemplates
Get sms templates

```javascript
// Promise
const promise = communication.getSmsTemplates();

// Async/Await
const data = await communication.getSmsTemplates();

```




Get sms templates


---


#### Communication#createSmsTemplate
Create sms template

```javascript
// Promise
const promise = communication.createSmsTemplate();

// Async/Await
const data = await communication.createSmsTemplate();

```




Create sms template


---


#### Communication#getSmsTemplateById
Get sms template by id

```javascript
// Promise
const promise = communication.getSmsTemplateById(, );

// Async/Await
const data = await communication.getSmsTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Get sms template by id


---


#### Communication#updateSmsTemplateById
Update sms template by id

```javascript
// Promise
const promise = communication.updateSmsTemplateById(, );

// Async/Await
const data = await communication.updateSmsTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Update sms template by id


---


#### Communication#deleteSmsTemplateById
Delete sms template by id

```javascript
// Promise
const promise = communication.deleteSmsTemplateById(, );

// Async/Await
const data = await communication.deleteSmsTemplateById(, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
|  |  |  | 


Delete sms template by id


---


#### Communication#getSystemSystemTemplates
Get system sms templates

```javascript
// Promise
const promise = communication.getSystemSystemTemplates();

// Async/Await
const data = await communication.getSystemSystemTemplates();

```




Get system sms templates


---



---
---


## Payment

```javascript
const { Configuration, Payment } = require('fdk-client-nodejs/platform')
const conf = new Configuration({
    OAuth2Token: "5ljdffg191e810c19729de860ea"
});
const payment = new Payment(conf);

```


#### Payment#getBrandPaymentGatewayConfig
Get All Brand Payment Gateway Config Secret

```javascript
// Promise
const promise = payment.getBrandPaymentGatewayConfig(company_id, application_id, );

// Async/Await
const data = await payment.getBrandPaymentGatewayConfig(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| application_id | string | Application id | 


Get All Brand Payment Gateway Config Secret


---


#### Payment#saveBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway

```javascript
// Promise
const promise = payment.saveBrandPaymentGatewayConfig(company_id, application_id, );

// Async/Await
const data = await payment.saveBrandPaymentGatewayConfig(company_id, application_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| application_id | string | Application id | 


Save Config Secret For Brand Payment Gateway


---


#### Payment#
Get All Valid Payment Options

```javascript
// Promise
const promise = payment.(company_id, application_id, refresh, request_type, );

// Async/Await
const data = await payment.(company_id, application_id, refresh, request_type, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| application_id | string | Application id | 
| refresh | boolean |  | 
| request_type | string |  | 


Use this API to get Get All Valid Payment Options for making payment


---


#### Payment#getAllPayouts
Get All Payouts

```javascript
// Promise
const promise = payment.getAllPayouts(company_id, unique_external_id, );

// Async/Await
const data = await payment.getAllPayouts(company_id, unique_external_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| unique_external_id | string | Fetch payouts using unique external id | 


Get All Payouts


---


#### Payment#savePayout
Save Payout

```javascript
// Promise
const promise = payment.savePayout(company_id, );

// Async/Await
const data = await payment.savePayout(company_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 


Save Payout


---


#### Payment#updatePayout
Update Payout

```javascript
// Promise
const promise = payment.updatePayout(company_id, unique_transfer_no, );

// Async/Await
const data = await payment.updatePayout(company_id, unique_transfer_no, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| unique_transfer_no | string | Unique transfer id | 


Update Payout


---


#### Payment#activateAndDectivatePayout
Partial Update Payout

```javascript
// Promise
const promise = payment.activateAndDectivatePayout(company_id, unique_transfer_no, );

// Async/Await
const data = await payment.activateAndDectivatePayout(company_id, unique_transfer_no, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| unique_transfer_no | string | Unique transfer id | 


Partial Update Payout


---


#### Payment#deletePayout
Delete Payout

```javascript
// Promise
const promise = payment.deletePayout(company_id, unique_transfer_no, );

// Async/Await
const data = await payment.deletePayout(company_id, unique_transfer_no, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| unique_transfer_no | string | Unique transfer id | 


Delete Payout


---


#### Payment#getSubscriptionPaymentMethod
List Subscription Payment Method

```javascript
// Promise
const promise = payment.getSubscriptionPaymentMethod(company_id, );

// Async/Await
const data = await payment.getSubscriptionPaymentMethod(company_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 


Get all  Subscription  Payment Method


---


#### Payment#deleteSubscriptionPaymentMethod
Delete Subscription Payment Method

```javascript
// Promise
const promise = payment.deleteSubscriptionPaymentMethod(company_id, unique_external_id, payment_method_id, );

// Async/Await
const data = await payment.deleteSubscriptionPaymentMethod(company_id, unique_external_id, payment_method_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 
| unique_external_id | string |  | 
| payment_method_id | string |  | 


Uses this api to Delete Subscription Payment Method


---


#### Payment#getSubscriptionConfig
List Subscription Config

```javascript
// Promise
const promise = payment.getSubscriptionConfig(company_id, );

// Async/Await
const data = await payment.getSubscriptionConfig(company_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 


Get all  Subscription Config details


---


#### Payment#saveSubscriptionSetupIntent
Save Subscription Setup Intent

```javascript
// Promise
const promise = payment.saveSubscriptionSetupIntent(company_id, );

// Async/Await
const data = await payment.saveSubscriptionSetupIntent(company_id, );

```



| Argument  |  Type  | Description |
| --------- | ----  | --- |
| company_id | integer | Company Id | 


Uses this api to Save Subscription Setup Intent


---



---
---
