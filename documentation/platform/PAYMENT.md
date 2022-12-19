



##### [Back to Platform docs](./README.md)

## Payment Methods
Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account
* [getBrandPaymentGatewayConfig](#getbrandpaymentgatewayconfig)
* [saveBrandPaymentGatewayConfig](#savebrandpaymentgatewayconfig)
* [updateBrandPaymentGatewayConfig](#updatebrandpaymentgatewayconfig)
* [getPaymentModeRoutes](#getpaymentmoderoutes)
* [getAllPayouts](#getallpayouts)
* [savePayout](#savepayout)
* [updatePayout](#updatepayout)
* [activateAndDectivatePayout](#activateanddectivatepayout)
* [deletePayout](#deletepayout)
* [getSubscriptionPaymentMethod](#getsubscriptionpaymentmethod)
* [deleteSubscriptionPaymentMethod](#deletesubscriptionpaymentmethod)
* [getSubscriptionConfig](#getsubscriptionconfig)
* [saveSubscriptionSetupIntent](#savesubscriptionsetupintent)
* [getBankAccountDetailsOpenAPI](#getbankaccountdetailsopenapi)
* [addRefundBankAccountUsingOTP](#addrefundbankaccountusingotp)
* [verifyIfscCode](#verifyifsccode)
* [getUserOrderBeneficiaries](#getuserorderbeneficiaries)
* [getUserBeneficiaries](#getuserbeneficiaries)
* [confirmPayment](#confirmpayment)



## Methods with example and description


### getBrandPaymentGatewayConfig
Get All Brand Payment Gateway Config Secret



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.getBrandPaymentGatewayConfig();

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.getBrandPaymentGatewayConfig();
```






Get All Brand Payment Gateway Config Secret

*Returned Response:*




[PaymentGatewayConfigResponse](#PaymentGatewayConfigResponse)

Refund Transfer Mode




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "created": true,
  "app_id": "000000000000000000000004",
  "excluded_fields": [
    "config_type",
    "aggregator"
  ],
  "display_fields": [
    "logo",
    "display"
  ],
  "aggregators": [
    {
      "key": "rrroooouuurrrrdddd",
      "secret": "yyyyooo",
      "is_active": false,
      "config_type": "",
      "merchant_key": "vvvvvvvvddd",
      "aggregator": "juspay",
      "display": {
        "link": "",
        "text": "Review in under process. Please  wait while process completed or contact us for any further query.",
        "description": "Juspay is not a Payment Gateway (like Citrus, CCAvenue, PayU) but it works with any gateway or aggregator with zero interference in the Merchant-PG relations.",
        "reviewed": false
      },
      "logo": "https://hdn-1.fynd.com/payment/juspay-pg-logo.jpg"
    },
    {
      "key": "",
      "pin": "",
      "secret": "",
      "user_id": "",
      "is_active": false,
      "config_type": "",
      "merchant_id": "",
      "aggregator": "mswipe",
      "display": {
        "link": "",
        "text": "Submitted request to be reviewed before going live. Please contact us for any further query.",
        "description": "Mswipe card swipe machines are safe and secure and accepts all debit & credit cards."
      },
      "logo": "https://hdn-1.fynd.com/payment/mswipe-pg-logo.png"
    },
    {
      "key": "tttyyyyyy",
      "secret": "rerrrrrrrr",
      "is_active": false,
      "config_type": "",
      "merchant_salt": "qqqqq",
      "aggregator": "payumoney",
      "display": {
        "link": "",
        "text": "Review in under process. Please  wait while process completed or contact us for any further query.",
        "description": "PayUmoney supports wide range of options for making online payments via wallets, UPI, cards, and netbanking.",
        "reviewed": false
      },
      "logo": "https://hdn-1.fynd.com/payment/payu_logo_large.png"
    },
    {
      "key": "test",
      "secret": "test",
      "is_active": true,
      "config_type": "self",
      "webhook_secret": "test",
      "aggregator": "razorpay",
      "display": {
        "link": "",
        "text": "Well done, You payment gateway successfully lived. Collect your payment at your end.",
        "description": "Razorpay is a payments platform which accept online payments via Credit Card, Debit Card, Net banking, UPI, BharatQR and Wallets.",
        "reviewed": true
      },
      "logo": "https://hdn-1.fynd.com/payment/razorpay-pg-logo.jpg"
    },
    {
      "key": "",
      "secret": "",
      "is_active": false,
      "config_type": "",
      "aggregator": "rupifi",
      "display": {
        "link": "",
        "text": "Submitted request to be reviewed before going live. Please contact us for any further query.",
        "description": "Rupifi enables businesses to avail credits and allows a 'Buy now, Pay later' system for making transactions and purchases."
      },
      "logo": "https://hdn-1.fynd.com/payment/Rupifi.png"
    },
    {
      "key": "12345",
      "secret": "12345",
      "is_active": false,
      "config_type": "",
      "aggregator": "simpl",
      "display": {
        "link": "",
        "text": "Review in under process. Please  wait while process completed or contact us for any further query.",
        "description": "Simpl is a Pay Later payment method.",
        "reviewed": false
      },
      "logo": "https://hdn-1.fynd.com/payment/simpl-pg-logo.jpg"
    },
    {
      "key": "",
      "secret": "",
      "is_active": false,
      "product_id": "",
      "config_type": "",
      "webhook_secret": "",
      "aggregator": "stripe",
      "display": {
        "link": "",
        "text": "Submitted request to be reviewed before going live. Please contact us for any further query.",
        "description": "Stripe is a payment processor that supports online payments, credit cards, recurring subscriptions and direct payouts to bank accounts."
      },
      "logo": "https://hdn-1.fynd.com/payment/Stripe.png"
    }
  ]
}
```
</details>









---


### saveBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.saveBrandPaymentGatewayConfig({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.saveBrandPaymentGatewayConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentGatewayConfigRequest](#PaymentGatewayConfigRequest) | yes | Request body |


Save Config Secret For Brand Payment Gateway

*Returned Response:*




[PaymentGatewayToBeReviewed](#PaymentGatewayToBeReviewed)

Save Config Secret For Brand Payment Gateway Success Response.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "aggregators": [
    "razorpay"
  ]
}
```
</details>









---


### updateBrandPaymentGatewayConfig
Save Config Secret For Brand Payment Gateway



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.updateBrandPaymentGatewayConfig({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.updateBrandPaymentGatewayConfig({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentGatewayConfigRequest](#PaymentGatewayConfigRequest) | yes | Request body |


Save Config Secret For Brand Payment Gateway

*Returned Response:*




[PaymentGatewayToBeReviewed](#PaymentGatewayToBeReviewed)

Save Config Secret For Brand Payment Gateway Success Response.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "aggregators": [
    "razorpay"
  ]
}
```
</details>









---


### getPaymentModeRoutes
Get All Valid Payment Options



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.getPaymentModeRoutes({  refresh : value,
 requestType : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.getPaymentModeRoutes({  refresh : value,
 requestType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| refresh | boolean | yes |  |   
| requestType | string | yes |  |  



Use this API to get Get All Valid Payment Options for making payment

*Returned Response:*




[PaymentOptionsResponse](#PaymentOptionsResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "payment_options": {
    "payment_option": [
      {
        "name": "CARD",
        "display_priority": 2,
        "payment_mode_id": 2,
        "display_name": "Card",
        "list": [],
        "anonymous_enable": true,
        "aggregator_name": "Razorpay",
        "add_card_enabled": false,
        "save_card": true,
        "types": [],
        "networks": [],
        "banks": []
      },
      {
        "name": "NB",
        "display_priority": 3,
        "payment_mode_id": 3,
        "display_name": "Net Banking",
        "list": [
          {
            "aggregator_name": "Razorpay",
            "name": "ICICI Bank",
            "code": "ICIC",
            "bank_name": "ICICI Bank",
            "bank_code": "ICIC",
            "url": "https://hdn-1.fynd.com/payment/NB_ICICI.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_ICICI.png",
              "large": "https://hdn-1.fynd.com/payment/NB_ICICI.png"
            },
            "merchant_code": "NB_ICICI",
            "display_priority": 1,
            "display_name": "ICICI Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "HDFC Bank",
            "code": "HDFC",
            "bank_name": "HDFC Bank",
            "bank_code": "HDFC",
            "url": "https://hdn-1.fynd.com/payment/NB_HDFC.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_HDFC.png",
              "large": "https://hdn-1.fynd.com/payment/NB_HDFC.png"
            },
            "merchant_code": "NB_HDFC",
            "display_priority": 2,
            "display_name": "HDFC Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Axis Bank",
            "code": "UTIB",
            "bank_name": "Axis Bank",
            "bank_code": "UTIB",
            "url": "https://hdn-1.fynd.com/payment/NB_AXIS.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_AXIS.png",
              "large": "https://hdn-1.fynd.com/payment/NB_AXIS.png"
            },
            "merchant_code": "NB_AXIS",
            "display_priority": 3,
            "display_name": "Axis Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of India",
            "code": "SBIN",
            "bank_name": "State Bank of India",
            "bank_code": "SBIN",
            "url": "https://hdn-1.fynd.com/payment/NB_SBI.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_SBI.png",
              "large": "https://hdn-1.fynd.com/payment/NB_SBI.png"
            },
            "merchant_code": "NB_SBI",
            "display_priority": 4,
            "display_name": "State Bank of India"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Kotak Mahindra Bank",
            "code": "KKBK",
            "bank_name": "Kotak Mahindra Bank",
            "bank_code": "KKBK",
            "url": "https://hdn-1.fynd.com/payment/NB_KOTAK.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_KOTAK.png",
              "large": "https://hdn-1.fynd.com/payment/NB_KOTAK.png"
            },
            "merchant_code": "NB_KOTAK",
            "display_priority": 5,
            "display_name": "Kotak Mahindra Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Indusind Bank",
            "code": "INDB",
            "bank_name": "Indusind Bank",
            "bank_code": "INDB",
            "url": "https://hdn-1.fynd.com/payment/NB_INDUS.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_INDUS.png",
              "large": "https://hdn-1.fynd.com/payment/NB_INDUS.png"
            },
            "merchant_code": "INDB",
            "display_priority": 6,
            "display_name": "Indusind Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "City Union Bank",
            "code": "CIUB",
            "bank_name": "City Union Bank",
            "bank_code": "CIUB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_CUB",
            "display_priority": 9,
            "display_name": "City Union Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Catholic Syrian Bank",
            "code": "CSBK",
            "bank_name": "Catholic Syrian Bank",
            "bank_code": "CSBK",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "CSBK",
            "display_priority": 11,
            "display_name": "Catholic Syrian Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of Hyderabad",
            "code": "SBHY",
            "bank_name": "State Bank of Hyderabad",
            "bank_code": "SBHY",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SBH",
            "display_priority": 12,
            "display_name": "State Bank of Hyderabad"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Allahabad Bank",
            "code": "ALLA",
            "bank_name": "Allahabad Bank",
            "bank_code": "ALLA",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "ALLA",
            "display_priority": 15,
            "display_name": "Allahabad Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Syndicate Bank",
            "code": "SYNB",
            "bank_name": "Syndicate Bank",
            "bank_code": "SYNB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "SYNB",
            "display_priority": 17,
            "display_name": "Syndicate Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Corporation Bank",
            "code": "CORP",
            "bank_name": "Corporation Bank",
            "bank_code": "CORP",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_CORP",
            "display_priority": 18,
            "display_name": "Corporation Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Punjab National Bank - Corporate Banking",
            "code": "PUNB_C",
            "bank_name": "Punjab National Bank - Corporate Banking",
            "bank_code": "PUNB_C",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "PUNB_C",
            "display_priority": 19,
            "display_name": "Punjab National Bank - Corporate Banking"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Canara Bank",
            "code": "CNRB",
            "bank_name": "Canara Bank",
            "bank_code": "CNRB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_CANR",
            "display_priority": 20,
            "display_name": "Canara Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Saraswat Co-operative Bank",
            "code": "SRCB",
            "bank_name": "Saraswat Co-operative Bank",
            "bank_code": "SRCB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "SRCB",
            "display_priority": 21,
            "display_name": "Saraswat Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Deutsche Bank",
            "code": "DEUT",
            "bank_name": "Deutsche Bank",
            "bank_code": "DEUT",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_DEUT",
            "display_priority": 22,
            "display_name": "Deutsche Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Dhanlaxmi Bank",
            "code": "DLXB",
            "bank_name": "Dhanlaxmi Bank",
            "bank_code": "DLXB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "DLXB",
            "display_priority": 24,
            "display_name": "Dhanlaxmi Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Oriental Bank of Commerce",
            "code": "ORBC",
            "bank_name": "Oriental Bank of Commerce",
            "bank_code": "ORBC",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "ORBC",
            "display_priority": 25,
            "display_name": "Oriental Bank of Commerce"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Punjab National Bank - Retail Banking",
            "code": "PUNB_R",
            "bank_name": "Punjab National Bank - Retail Banking",
            "bank_code": "PUNB_R",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "PUNB_R",
            "display_priority": 26,
            "display_name": "Punjab National Bank - Retail Banking"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of Bikaner and Jaipur",
            "code": "SBBJ",
            "bank_name": "State Bank of Bikaner and Jaipur",
            "bank_code": "SBBJ",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SBBJ",
            "display_priority": 27,
            "display_name": "State Bank of Bikaner and Jaipur"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Indian Overseas Bank",
            "code": "IOBA",
            "bank_name": "Indian Overseas Bank",
            "bank_code": "IOBA",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_IOB",
            "display_priority": 28,
            "display_name": "Indian Overseas Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of Travancore",
            "code": "SBTR",
            "bank_name": "State Bank of Travancore",
            "bank_code": "SBTR",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SBT",
            "display_priority": 29,
            "display_name": "State Bank of Travancore"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Airtel Payments Bank",
            "code": "AIRP",
            "bank_name": "Airtel Payments Bank",
            "bank_code": "AIRP",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "AIRP",
            "display_priority": 30,
            "display_name": "Airtel Payments Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Development Bank of Singapore",
            "code": "DBSS",
            "bank_name": "Development Bank of Singapore",
            "bank_code": "DBSS",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "DBSS",
            "display_priority": 31,
            "display_name": "Development Bank of Singapore"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Vijaya Bank",
            "code": "VIJB",
            "bank_name": "Vijaya Bank",
            "bank_code": "VIJB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_VJYB",
            "display_priority": 32,
            "display_name": "Vijaya Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "NKGSB Co-operative Bank",
            "code": "NKGS",
            "bank_name": "NKGSB Co-operative Bank",
            "bank_code": "NKGS",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NKGS",
            "display_priority": 33,
            "display_name": "NKGSB Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "RBL Bank",
            "code": "RATN",
            "bank_name": "RBL Bank",
            "bank_code": "RATN",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "RATN",
            "display_priority": 35,
            "display_name": "RBL Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Bank of Baroda - Retail Banking",
            "code": "BARB_R",
            "bank_name": "Bank of Baroda - Retail Banking",
            "bank_code": "BARB_R",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "BARB_R",
            "display_priority": 36,
            "display_name": "Bank of Baroda - Retail Banking"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Karnataka Bank",
            "code": "KARB",
            "bank_name": "Karnataka Bank",
            "bank_code": "KARB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_KARN",
            "display_priority": 37,
            "display_name": "Karnataka Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Tamilnadu State Apex Co-operative Bank",
            "code": "TNSC",
            "bank_name": "Tamilnadu State Apex Co-operative Bank",
            "bank_code": "TNSC",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "TNSC",
            "display_priority": 38,
            "display_name": "Tamilnadu State Apex Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Tamilnadu Mercantile Bank",
            "code": "TMBL",
            "bank_name": "Tamilnadu Mercantile Bank",
            "bank_code": "TMBL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "TMBL",
            "display_priority": 40,
            "display_name": "Tamilnadu Mercantile Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Lakshmi Vilas Bank - Retail Banking",
            "code": "LAVB_R",
            "bank_name": "Lakshmi Vilas Bank - Retail Banking",
            "bank_code": "LAVB_R",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "LAVB_R",
            "display_priority": 42,
            "display_name": "Lakshmi Vilas Bank - Retail Banking"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Dena Bank",
            "code": "BKDN",
            "bank_name": "Dena Bank",
            "bank_code": "BKDN",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "BKDN",
            "display_priority": 43,
            "display_name": "Dena Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Federal Bank",
            "code": "FDRL",
            "bank_name": "Federal Bank",
            "bank_code": "FDRL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_FED",
            "display_priority": 44,
            "display_name": "Federal Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Indian Bank",
            "code": "IDIB",
            "bank_name": "Indian Bank",
            "bank_code": "IDIB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_INDB",
            "display_priority": 45,
            "display_name": "Indian Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "South Indian Bank",
            "code": "SIBL",
            "bank_name": "South Indian Bank",
            "bank_code": "SIBL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SOIB",
            "display_priority": 46,
            "display_name": "South Indian Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "IDBI",
            "code": "IBKL",
            "bank_name": "IDBI",
            "bank_code": "IBKL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "IBKL",
            "display_priority": 49,
            "display_name": "IDBI"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Karur Vysya Bank",
            "code": "KVBL",
            "bank_name": "Karur Vysya Bank",
            "bank_code": "KVBL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_KVB",
            "display_priority": 50,
            "display_name": "Karur Vysya Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Punjab & Sind Bank",
            "code": "PSIB",
            "bank_name": "Punjab & Sind Bank",
            "bank_code": "PSIB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "PSIB",
            "display_priority": 52,
            "display_name": "Punjab & Sind Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "UCO Bank",
            "code": "UCBA",
            "bank_name": "UCO Bank",
            "bank_code": "UCBA",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "UCBA",
            "display_priority": 53,
            "display_name": "UCO Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Bank of Bahrein and Kuwait",
            "code": "BBKM",
            "bank_name": "Bank of Bahrein and Kuwait",
            "bank_code": "BBKM",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "BBKM",
            "display_priority": 54,
            "display_name": "Bank of Bahrein and Kuwait"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Yes Bank",
            "code": "YESB",
            "bank_name": "Yes Bank",
            "bank_code": "YESB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_YESB",
            "display_priority": 55,
            "display_name": "Yes Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Punjab & Maharashtra Co-operative Bank",
            "code": "PMCB",
            "bank_name": "Punjab & Maharashtra Co-operative Bank",
            "bank_code": "PMCB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "PMCB",
            "display_priority": 56,
            "display_name": "Punjab & Maharashtra Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Bank of India",
            "code": "BKID",
            "bank_name": "Bank of India",
            "bank_code": "BKID",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_BOI",
            "display_priority": 57,
            "display_name": "Bank of India"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Bank of Maharashtra",
            "code": "MAHB",
            "bank_name": "Bank of Maharashtra",
            "bank_code": "MAHB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_BOM",
            "display_priority": 58,
            "display_name": "Bank of Maharashtra"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "IDFC Bank",
            "code": "IDFB",
            "bank_name": "IDFC Bank",
            "bank_code": "IDFB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "IDFB",
            "display_priority": 59,
            "display_name": "IDFC Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Janata Sahakari Bank (Pune)",
            "code": "JSBP",
            "bank_name": "Janata Sahakari Bank (Pune)",
            "bank_code": "JSBP",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "JSBP",
            "display_priority": 60,
            "display_name": "Janata Sahakari Bank (Pune)"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Shamrao Vithal Co-operative Bank",
            "code": "SVCB",
            "bank_name": "Shamrao Vithal Co-operative Bank",
            "bank_code": "SVCB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "SVCB",
            "display_priority": 61,
            "display_name": "Shamrao Vithal Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Cosmos Co-operative Bank",
            "code": "COSB",
            "bank_name": "Cosmos Co-operative Bank",
            "bank_code": "COSB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "COSB",
            "display_priority": 62,
            "display_name": "Cosmos Co-operative Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of Mysore",
            "code": "SBMY",
            "bank_name": "State Bank of Mysore",
            "bank_code": "SBMY",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SBM",
            "display_priority": 63,
            "display_name": "State Bank of Mysore"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Andhra Bank",
            "code": "ANDB",
            "bank_name": "Andhra Bank",
            "bank_code": "ANDB",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "ANDB",
            "display_priority": 65,
            "display_name": "Andhra Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Jammu and Kashmir Bank",
            "code": "JAKA",
            "bank_name": "Jammu and Kashmir Bank",
            "bank_code": "JAKA",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_JNK",
            "display_priority": 66,
            "display_name": "Jammu and Kashmir Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "United Bank of India",
            "code": "UTBI",
            "bank_name": "United Bank of India",
            "bank_code": "UTBI",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "UTBI",
            "display_priority": 67,
            "display_name": "United Bank of India"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Lakshmi Vilas Bank - Corporate Banking",
            "code": "LAVB_C",
            "bank_name": "Lakshmi Vilas Bank - Corporate Banking",
            "bank_code": "LAVB_C",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "LAVB_C",
            "display_priority": 69,
            "display_name": "Lakshmi Vilas Bank - Corporate Banking"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "State Bank of Patiala",
            "code": "STBP",
            "bank_name": "State Bank of Patiala",
            "bank_code": "STBP",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_SBP",
            "display_priority": 70,
            "display_name": "State Bank of Patiala"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "DCB Bank",
            "code": "DCBL",
            "bank_name": "DCB Bank",
            "bank_code": "DCBL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "DCBL",
            "display_priority": 71,
            "display_name": "DCB Bank"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Union Bank of India",
            "code": "UBIN",
            "bank_name": "Union Bank of India",
            "bank_code": "UBIN",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "NB_UBI",
            "display_priority": 73,
            "display_name": "Union Bank of India"
          },
          {
            "aggregator_name": "Razorpay",
            "name": "Standard Chartered Bank",
            "code": "SCBL",
            "bank_name": "Standard Chartered Bank",
            "bank_code": "SCBL",
            "url": "https://hdn-1.fynd.com/payment/NB_generic.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/NB_generic.png",
              "large": "https://hdn-1.fynd.com/payment/NB_generic.png"
            },
            "merchant_code": "SCBL",
            "display_priority": 74,
            "display_name": "Standard Chartered Bank"
          }
        ]
      },
      {
        "name": "WL",
        "display_priority": 4,
        "payment_mode_id": 4,
        "display_name": "Wallet",
        "list": [
          {
            "wallet_name": "Paytm",
            "wallet_code": "paytm",
            "name": "Paytm",
            "display_name": "Paytm",
            "code": "PAYTM",
            "wallet_id": 4,
            "merchant_code": "PAYTM",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/paytm_logo_small.png",
              "large": "https://hdn-1.fynd.com/payment/paytm_logo_large.png"
            },
            "aggregator_name": "Juspay",
            "display_priority": 1
          },
          {
            "wallet_name": "Mobikwik",
            "wallet_code": "mobikwik",
            "name": "Mobikwik",
            "display_name": "Mobikwik",
            "code": "MOBIKWIK",
            "wallet_id": 5,
            "merchant_code": "MOBIKWIK",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/mobikwik_logo_small.png",
              "large": "https://hdn-1.fynd.com/payment/mobikwik_logo_small.png"
            },
            "aggregator_name": "Juspay",
            "display_priority": 3
          },
          {
            "wallet_name": "Ola Money",
            "wallet_code": "olamoney",
            "name": "Ola Money",
            "display_name": "Ola Money",
            "code": "OLAMONEY",
            "wallet_id": 6,
            "merchant_code": "OLAMONEY",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/olamoney.png",
              "large": "https://hdn-1.fynd.com/payment/olamoney.png"
            },
            "aggregator_name": "Razorpay",
            "display_priority": 4
          },
          {
            "wallet_name": "Amazon Pay",
            "wallet_code": "amazonpay",
            "name": "Amazon Pay",
            "display_name": "Amazon Pay",
            "code": "AMAZONPAY",
            "wallet_id": 10,
            "merchant_code": "AMAZONPAY",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/amazon-pay.png",
              "large": "https://hdn-1.fynd.com/payment/amazon-pay.png"
            },
            "aggregator_name": "Razorpay",
            "display_priority": 9
          },
          {
            "wallet_name": "PayPal",
            "wallet_code": "paypal",
            "name": "PayPal",
            "display_name": "PayPal",
            "code": "PAYPAL",
            "wallet_id": 11,
            "merchant_code": "PAYPAL",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/paypal.jpg",
              "large": "https://hdn-1.fynd.com/payment/paypal.jpg "
            },
            "aggregator_name": "Razorpay",
            "display_priority": 10
          }
        ]
      },
      {
        "name": "UPI",
        "display_priority": 9,
        "payment_mode_id": 7,
        "display_name": "UPI",
        "list": [
          {
            "aggregator_name": "Razorpay",
            "name": "UPI",
            "display_name": "BHIM UPI",
            "code": "UPI",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/upi_150x100.png",
              "small": "https://hdn-1.fynd.com/payment/upi_100x78.png"
            },
            "merchant_code": "UPI",
            "timeout": 240,
            "retry_count": 0,
            "fynd_vpa": "shopsense.rzp@hdfcbank",
            "intent_flow": true,
            "intent_app": [
              {
                "code": "google_pay",
                "display_name": "Google Pay",
                "package_name": "com.google.android.apps.nbu.paisa.user",
                "logos": {
                  "small": "https://hdn-1.fynd.com/payment/upi-google-pay.png",
                  "large": "https://hdn-1.fynd.com/payment/upi-google-pay.png"
                }
              }
            ],
            "intent_app_error_list": [
              "com.csam.icici.bank.imobile",
              "in.org.npci.upiapp",
              "com.whatsapp"
            ],
            "intent_app_error_dict_list": [
              {
                "package_name": "com.csam.icici.bank.imobile",
                "code": "icici"
              },
              {
                "package_name": "in.org.npci.upiapp",
                "code": "upiapp"
              },
              {
                "package_name": "com.whatsapp",
                "code": "whatsapp"
              }
            ]
          }
        ]
      },
      {
        "name": "EMI",
        "display_priority": 18,
        "payment_mode_id": 19,
        "display_name": "Easy EMI",
        "list": [
          {
            "aggregator_name": "Razorpay",
            "name": "EMI",
            "display_name": "Easy EMI",
            "code": "EMI",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
              "small": "https://hdn-1.fynd.com/payment/Pos+Logo.png"
            },
            "merchant_code": "EMI"
          }
        ]
      },
      {
        "name": "JUSPAYPG",
        "display_priority": 18,
        "payment_mode_id": 23,
        "display_name": "Pay Using Juspay",
        "list": [
          {
            "aggregator_name": "Juspay",
            "name": "JUSPAYPG",
            "display_name": "Pay Using Juspay",
            "code": "JUSPAYPG",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/netbanking.png",
              "small": "https://hdn-1.fynd.com/payment/netbanking.png"
            },
            "merchant_code": "JUSPAYPG"
          }
        ]
      },
      {
        "name": "PG_PAYMENT",
        "display_priority": 20,
        "display_name": "Other payment gateway",
        "list": [
          {
            "aggregator_name": "Stripe",
            "name": "STRIPEPG",
            "display_name": "Pay using Stripe",
            "code": "STRIPEPG",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
              "small": "https://hdn-1.fynd.com/payment/Pos+Logo.png"
            },
            "merchant_code": "STRIPEPG"
          },
          {
            "aggregator_name": "Ccavenue",
            "name": "CCAVENUEPG",
            "display_name": "Pay using Ccavenue",
            "code": "CCAVENUEPG",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
              "small": "https://hdn-1.fynd.com/payment/Pos+Logo.png"
            },
            "merchant_code": "CCAVENUEPG"
          },
          {
            "aggregator_name": "Payumoney",
            "name": "PAYUMONEYPG",
            "display_name": "Pay using Payumoney",
            "code": "PAYUMONEYPG",
            "logo_url": {
              "large": "https://fynd-obscuro-media-new.s3.amazonaws.com/payment/payu_logo_large.png",
              "small": "https://fynd-obscuro-media-new.s3.amazonaws.com/payment/payu_logo_small.png"
            },
            "merchant_code": "PAYUMONEYPG"
          },
          {
            "aggregator_name": "Payubiz",
            "name": "PAYUBIZPG",
            "display_name": "Pay using Payubiz",
            "code": "PAYUBIZPG",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/payu.png",
              "small": "https://hdn-1.fynd.com/payment/payu.png"
            },
            "merchant_code": "PAYUBIZPG"
          }
        ]
      },
      {
        "name": "PL",
        "display_priority": 21,
        "display_name": "Pay Later",
        "list": [
          {
            "aggregator_name": "Simpl",
            "name": "Simpl",
            "display_name": "Simpl",
            "code": "SIMPL",
            "merchant_code": "SIMPL",
            "logo": "https://hdn-1.fynd.com/payment/simpl_logo.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/simpl_logo.png",
              "large": "https://hdn-1.fynd.com/payment/simpl_logo.png"
            }
          },
          {
            "aggregator_name": "Rupifi",
            "name": "RUPIFIPG",
            "display_name": "Pay using Rupifi",
            "code": "RUPIFIPG",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Rupifi.png",
              "small": "https://hdn-1.fynd.com/payment/Rupifi.png"
            },
            "merchant_code": "RUPIFIPG"
          }
        ]
      }
    ]
  }
}
```
</details>









---


### getAllPayouts
Get All Payouts



```javascript
// Promise
const promise = client.payment.getAllPayouts({  uniqueExternalId : value });

// Async/Await
const data = await client.payment.getAllPayouts({  uniqueExternalId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| uniqueExternalId | string | no | Fetch payouts using unique external id |  



Get All Payouts

*Returned Response:*




[PayoutsResponse](#PayoutsResponse)

payouts response object




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
[
  {
    "unique_transfer_no": "d2ff79fcd3459831864824da8c9d7e5f",
    "more_attributes": {
      "city": "",
      "state": "",
      "country": "",
      "bank_name": "YES",
      "ifsc_code": "IFSCYES101",
      "account_no": "9876541234",
      "branch_name": "Mumbai",
      "account_type": "current",
      "account_holder": "Vikas Kumar"
    },
    "transfer_type": "bank",
    "is_default": true,
    "is_active": true,
    "customers": {
      "id": 2,
      "name": "reliance retail",
      "mobile": "1234567890",
      "email": "reliance@gmail.com",
      "unique_external_id": "company:1"
    },
    "payouts_aggregators": [
      {
        "payout_details_id": 888,
        "aggregator_id": 3,
        "aggregator_fund_id": null
      }
    ]
  },
  {
    "unique_transfer_no": "e388c1c5df4933fa01f6da9f92595589",
    "more_attributes": {
      "city": "",
      "state": "",
      "country": "",
      "bank_name": "SBI",
      "ifsc_code": "SBIN0011513",
      "account_no": "9876543210",
      "branch_name": "Mumbai",
      "account_type": "saving",
      "account_holder": "Vikas Kumar"
    },
    "transfer_type": "bank",
    "is_default": false,
    "is_active": true,
    "customers": {
      "id": 2,
      "name": "reliance retail",
      "mobile": "1234567890",
      "email": "reliance@gmail.com",
      "unique_external_id": "company:1"
    },
    "payouts_aggregators": [
      {
        "payout_details_id": 891,
        "aggregator_id": 3,
        "aggregator_fund_id": null
      }
    ]
  }
]
```
</details>









---


### savePayout
Save Payout



```javascript
// Promise
const promise = client.payment.savePayout({  body : value });

// Async/Await
const data = await client.payment.savePayout({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PayoutRequest](#PayoutRequest) | yes | Request body |


Save Payout

*Returned Response:*




[PayoutResponse](#PayoutResponse)

save payout response object




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "is_active": true,
  "bank_details": {
    "account_type": "saving",
    "account_holder": "Vikas Kumar",
    "branch_name": "Mumbai",
    "country": "",
    "ifsc_code": "SBIN0011513",
    "account_no": "9876543210",
    "city": "",
    "state": "",
    "bank_name": "SBI"
  },
  "unique_transfer_no": "e388c1c5df4933fa01f6da9f92595589",
  "users": {
    "name": "reliance retail",
    "unique_external_id": "company:1",
    "mobile": "1234567890",
    "email": "reliance@gmail.com"
  },
  "aggregator": "Razorpay",
  "transfer_type": "bank",
  "created": true,
  "payouts": {
    "aggregator_fund_id": null
  },
  "payment_status": "payout_initiated"
}
```
</details>









---


### updatePayout
Update Payout



```javascript
// Promise
const promise = client.payment.updatePayout({  uniqueTransferNo : value,
 body : value });

// Async/Await
const data = await client.payment.updatePayout({  uniqueTransferNo : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueTransferNo | string | yes | Unique transfer id |  
| body | [PayoutRequest](#PayoutRequest) | yes | Request body |


Update Payout

*Returned Response:*




[UpdatePayoutResponse](#UpdatePayoutResponse)

save payout response object




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "is_default": true,
  "is_active": true
}
```
</details>









---


### activateAndDectivatePayout
Partial Update Payout



```javascript
// Promise
const promise = client.payment.activateAndDectivatePayout({  uniqueTransferNo : value,
 body : value });

// Async/Await
const data = await client.payment.activateAndDectivatePayout({  uniqueTransferNo : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueTransferNo | string | yes | Unique transfer id |  
| body | [UpdatePayoutRequest](#UpdatePayoutRequest) | yes | Request body |


Partial Update Payout

*Returned Response:*




[UpdatePayoutResponse](#UpdatePayoutResponse)

save payout response object




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "is_default": true,
  "is_active": true
}
```
</details>









---


### deletePayout
Delete Payout



```javascript
// Promise
const promise = client.payment.deletePayout({  uniqueTransferNo : value });

// Async/Await
const data = await client.payment.deletePayout({  uniqueTransferNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueTransferNo | string | yes | Unique transfer id |  



Delete Payout

*Returned Response:*




[DeletePayoutResponse](#DeletePayoutResponse)

delete payout response object




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### getSubscriptionPaymentMethod
List Subscription Payment Method



```javascript
// Promise
const promise = client.payment.getSubscriptionPaymentMethod({  uniqueExternalId : value });

// Async/Await
const data = await client.payment.getSubscriptionPaymentMethod({  uniqueExternalId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| uniqueExternalId | string | no | Unique external id |  



Get all  Subscription  Payment Method

*Returned Response:*




[SubscriptionPaymentMethodResponse](#SubscriptionPaymentMethodResponse)

List Subscription Payment Method Response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": [
    {
      "id": 68,
      "type": "card",
      "pg_payment_method_id": "pm_1H8HyIJ1ZTFIN1aD5eDOL4nU",
      "data": {
        "brand": "visa",
        "last4": "4242",
        "checks": {
          "cvc_check": "pass",
          "address_line1_check": null,
          "address_postal_code_check": null
        },
        "wallet": null,
        "country": "US",
        "funding": "credit",
        "exp_year": 2044,
        "networks": {
          "available": [
            "visa"
          ],
          "preferred": null
        },
        "exp_month": 12,
        "fingerprint": "0aror24meTf8iYfw",
        "generated_from": null,
        "three_d_secure_usage": {
          "supported": true
        }
      },
      "is_default": false
    },
    {
      "id": 81,
      "type": "card",
      "pg_payment_method_id": "pm_1Hc7tMJ1ZTFIN1aDCvMIIBeT",
      "data": {
        "brand": "visa",
        "last4": "4242",
        "checks": {
          "cvc_check": "pass",
          "address_line1_check": null,
          "address_postal_code_check": null
        },
        "wallet": null,
        "country": "US",
        "funding": "credit",
        "exp_year": 2020,
        "networks": {
          "available": [
            "visa"
          ],
          "preferred": null
        },
        "exp_month": 11,
        "fingerprint": "0aror24meTf8iYfw",
        "generated_from": null,
        "three_d_secure_usage": {
          "supported": true
        }
      },
      "is_default": true
    },
    {
      "id": 93,
      "type": "card",
      "pg_payment_method_id": "pm_1HvddjJ1ZTFIN1aDgebQvuyi",
      "data": {
        "brand": "visa",
        "last4": "4242",
        "checks": {
          "cvc_check": "pass",
          "address_line1_check": "pass",
          "address_postal_code_check": "pass"
        },
        "wallet": null,
        "country": "US",
        "funding": "credit",
        "exp_year": 2022,
        "networks": {
          "available": [
            "visa"
          ],
          "preferred": null
        },
        "exp_month": 11,
        "fingerprint": "0aror24meTf8iYfw",
        "generated_from": null,
        "three_d_secure_usage": {
          "supported": true
        }
      },
      "is_default": false
    },
    {
      "id": 98,
      "type": "card",
      "pg_payment_method_id": "pm_1IJDF0J1ZTFIN1aDnJFi4i2v",
      "data": {
        "brand": "visa",
        "last4": "1111",
        "checks": {
          "cvc_check": "pass",
          "address_line1_check": "pass",
          "address_postal_code_check": "pass"
        },
        "wallet": null,
        "country": "US",
        "funding": "credit",
        "exp_year": 2025,
        "networks": {
          "available": [
            "visa"
          ],
          "preferred": null
        },
        "exp_month": 11,
        "fingerprint": "ZtDTGycouUEup4Q4",
        "generated_from": null,
        "three_d_secure_usage": {
          "supported": true
        }
      },
      "is_default": false
    }
  ]
}
```
</details>









---


### deleteSubscriptionPaymentMethod
Delete Subscription Payment Method



```javascript
// Promise
const promise = client.payment.deleteSubscriptionPaymentMethod({  uniqueExternalId : value,
 paymentMethodId : value });

// Async/Await
const data = await client.payment.deleteSubscriptionPaymentMethod({  uniqueExternalId : value,
 paymentMethodId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| uniqueExternalId | string | yes |  |   
| paymentMethodId | string | yes |  |  



Uses this api to Delete Subscription Payment Method

*Returned Response:*




[DeleteSubscriptionPaymentMethodResponse](#DeleteSubscriptionPaymentMethodResponse)

Delete Subscription Payment Method Response.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### getSubscriptionConfig
List Subscription Config



```javascript
// Promise
const promise = client.payment.getSubscriptionConfig();

// Async/Await
const data = await client.payment.getSubscriptionConfig();
```






Get all  Subscription Config details

*Returned Response:*




[SubscriptionConfigResponse](#SubscriptionConfigResponse)

List Subscription Config Response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "aggregator": "stripe",
  "config": {
    "public_key": "pk_test_lHBf12TZLa5"
  }
}
```
</details>









---


### saveSubscriptionSetupIntent
Save Subscription Setup Intent



```javascript
// Promise
const promise = client.payment.saveSubscriptionSetupIntent({  body : value });

// Async/Await
const data = await client.payment.saveSubscriptionSetupIntent({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SaveSubscriptionSetupIntentRequest](#SaveSubscriptionSetupIntentRequest) | yes | Request body |


Uses this api to Save Subscription Setup Intent

*Returned Response:*




[SaveSubscriptionSetupIntentResponse](#SaveSubscriptionSetupIntentResponse)

Save Subscription Setup Intent Response.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "id": "test",
    "object": "test",
    "client_secret": "test",
    "customer": "test",
    "status": "requires_payment_method"
  }
}
```
</details>









---


### getBankAccountDetailsOpenAPI
Get bank details



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.getBankAccountDetailsOpenAPI({  orderId : value,
 requestHash : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.getBankAccountDetailsOpenAPI({  orderId : value,
 requestHash : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |    
| requestHash | string | no |  |  



Use this API to get saved bank details for returned/cancelled order using order id.

*Returned Response:*




[RefundAccountResponse](#RefundAccountResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "account_no": "XXXX-XXXX-6682",
    "ifsc_code": "SBIEXAMPLE001",
    "email": "loremipsum@example.com",
    "address": "1773  Monroe Street",
    "bank_name": "SBI",
    "branch_name": "HOUSTON",
    "comment": "Lorem Ipsum",
    "account_holder": "Leslie Rice",
    "mobile": "0987654321"
  }
}
```
</details>









---


### addRefundBankAccountUsingOTP
Save bank details for cancelled/returned order



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.addRefundBankAccountUsingOTP({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.addRefundBankAccountUsingOTP({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest) | yes | Request body |


Use this API to save bank details for returned/cancelled order to refund amount in his account.

*Returned Response:*




[RefundAccountResponse](#RefundAccountResponse)

Success




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Account successfully created",
  "data": {},
  "is_verified_flag": true
}
```
</details>









---


### verifyIfscCode
Ifsc Code Verification



```javascript
// Promise
const promise = client.payment.verifyIfscCode({  ifscCode : value });

// Async/Await
const data = await client.payment.verifyIfscCode({  ifscCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| ifscCode | string | no |  |  



Get True/False for correct IFSC Code for adding bank details for refund

*Returned Response:*




[IfscCodeResponse](#IfscCodeResponse)

Bank details on correct Ifsc Code




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "branch_name": "MANPUR",
  "bank_name": "GAYA",
  "BRANCH": "MANPUR",
  "CENTRE": "GAYA",
  "DISTRICT": "GAYA",
  "STATE": "BIHAR",
  "ADDRESS": "POBUNIYADGANJBIHAR",
  "CONTACT": "00",
  "MICR": "816002103",
  "UPI": true,
  "RTGS": true,
  "CITY": "GAYA",
  "NEFT": true,
  "IMPS": true,
  "SWIFT": "",
  "BANK": "State Bank of India",
  "BANKCODE": "SBIN",
  "IFSC": "SBIN0005611",
  "success": true
}
```
</details>









---


### getUserOrderBeneficiaries
List Order Beneficiary



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.getUserOrderBeneficiaries({  orderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.getUserOrderBeneficiaries({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |  



Get all active  beneficiary details added by the user for refund

*Returned Response:*




[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

List Order Beneficiary




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "beneficiaries": [
    {
      "id": 3695,
      "beneficiary_id": "4c86dd56e634a4c6a8fb51d195bc7b83",
      "bank_name": "State Bank of India",
      "branch_name": "BHOGAT",
      "account_holder": "PRAKASH TEST",
      "account_no": "3566342455454",
      "ifsc_code": "SBIN0014982",
      "mobile": "7819064010",
      "email": "prakashtest@gmail.com",
      "address": "49A, Dabhi seri, jodhpur, kalyanpur",
      "comment": "COD Refund",
      "is_active": null,
      "created_on": "2021-01-22 11:31:02",
      "modified_on": "2021-01-22 11:31:02",
      "display_name": "BANK",
      "transfer_mode": "bank",
      "title": "Bank Account",
      "subtitle": "35663423659",
      "delights_user_name": "shreeniwas_24x7_gmail_com_45978_16624463"
    }
  ]
}
```
</details>









---


### getUserBeneficiaries
List User Beneficiary



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.getUserBeneficiaries({  orderId : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.getUserBeneficiaries({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes |  |  



Get all active  beneficiary details added by the user for refund

*Returned Response:*




[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

List User Beneficiary




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "beneficiaries": [
    {
      "id": 221,
      "beneficiary_id": "0f7e44a922df352c05c5f73cb40ba115",
      "bank_name": "State Bank of India",
      "branch_name": "State Bank of India",
      "account_holder": "SHASHI TEST",
      "account_no": "1234567891",
      "ifsc_code": "SBIN0005611",
      "mobile": "9112042174",
      "email": "payment@gofynd.com",
      "address": "204A",
      "comment": "",
      "is_active": null,
      "created_on": "2020-06-29 12:38:39",
      "modified_on": "2020-06-29 12:38:39",
      "display_name": "BANK",
      "transfer_mode": "bank",
      "title": "Bank Account",
      "subtitle": "1234567891",
      "delights_user_name": null
    }
  ],
  "show_beneficiary_details": false
}
```
</details>









---


### confirmPayment
Confirm payment after successful payment from payment gateway



```javascript
// Promise
const promise = client.application("<APPLICATION_ID>").payment.confirmPayment({  body : value });

// Async/Await
const data = await client.application("<APPLICATION_ID>").payment.confirmPayment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentConfirmationRequest](#PaymentConfirmationRequest) | yes | Request body |


Use this API to confirm payment after payment gateway accepted payment.

*Returned Response:*




[PaymentConfirmationResponse](#PaymentConfirmationResponse)

Success. Returns the status of payment. Check the example shown below or refer `PaymentConfirmationResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment Successful",
  "order_id": "FY60F90AEF01FF43E878"
}
```
</details>









---



### Schemas

 
 
 #### [PaymentGatewayConfigResponse](#PaymentGatewayConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregators | [string] |  no  | List of all speceific Payment options with their Details. |
 | created | boolean |  yes  | Response is created or not |
 | success | boolean |  yes  | Response is successful or not |
 | app_id | string |  yes  | Application Id to which Payment config Mapped |
 | display_fields | [string] |  yes  | List of all included  options with their Details. |
 | excluded_fields | [string] |  yes  | List of all excluded  options with their Details. |

---


 
 
 #### [ErrorCodeDescription](#ErrorCodeDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  | Error descrption code. |
 | success | boolean |  yes  | Response is successful or not |
 | description | string |  yes  | Error human understandable description. |

---


 
 
 #### [PaymentGatewayConfig](#PaymentGatewayConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | secret | string |  yes  | Secret Key of the payment aggregator |
 | merchant_salt | string |  yes  | Merchant key of the payment aggregator |
 | is_active | boolean |  no  | Enable/ Disable Flag |
 | key | string |  yes  | Api key of the payment aggregator |
 | config_type | string |  yes  | Config Type of the aggregator |

---


 
 
 #### [PaymentGatewayConfigRequest](#PaymentGatewayConfigRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | [PaymentGatewayConfig](#PaymentGatewayConfig) |  no  |  |
 | app_id | string |  yes  | Application Id to which Payment config Mapped |
 | is_active | boolean |  no  | Enable/ Disable Flag |

---


 
 
 #### [PaymentGatewayToBeReviewed](#PaymentGatewayToBeReviewed)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | aggregator | [string] |  yes  | List of added payment gateway |

---


 
 
 #### [ErrorCodeAndDescription](#ErrorCodeAndDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  | Error descrption code. |
 | description | string |  yes  | Error human understandable description. |

---


 
 
 #### [HttpErrorCodeAndResponse](#HttpErrorCodeAndResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | error | [ErrorCodeAndDescription](#ErrorCodeAndDescription) |  yes  |  |

---


 
 
 #### [PaymentModeLogo](#PaymentModeLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | large | string |  yes  | large |
 | small | string |  yes  | smalll |

---


 
 
 #### [IntentApp](#IntentApp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | package_name | string |  no  | package_name |
 | code | string |  no  | code |
 | display_name | string |  no  | display_name |
 | logos | [PaymentModeLogo](#PaymentModeLogo) |  no  | logos |

---


 
 
 #### [IntentAppErrorList](#IntentAppErrorList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | package_name | string |  no  | package_name |
 | code | string |  no  | code |

---


 
 
 #### [PaymentModeList](#PaymentModeList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_reference | string |  no  | card_reference |
 | nickname | string |  no  | nickname |
 | name | string |  no  | name |
 | exp_month | number |  no  | exp_month |
 | card_token | string |  no  | card_token |
 | expired | boolean |  no  | expired |
 | fynd_vpa | string |  no  | fynd_vpa |
 | card_id | string |  no  | card_id |
 | display_name | string |  no  | display name |
 | exp_year | number |  no  | exp_year |
 | card_issuer | string |  no  | card_issuer |
 | card_isin | string |  no  | card_isin |
 | intent_app | [[IntentApp](#IntentApp)] |  no  | intent_app |
 | card_number | string |  no  | card_number |
 | card_brand_image | string |  no  | card_brand_image |
 | timeout | number |  no  | timeout |
 | merchant_code | string |  no  | merchant code |
 | intent_app_error_list | [string] |  no  | intent_app_error_list |
 | card_fingerprint | string |  no  | card_fingerprint |
 | compliant_with_tokenisation_guidelines | boolean |  no  | If card is tokenised or not |
 | code | string |  no  | code |
 | card_type | string |  no  | card_type |
 | logo_url | [PaymentModeLogo](#PaymentModeLogo) |  no  | Logo |
 | retry_count | number |  no  | retry_count |
 | aggregator_name | string |  yes  | aggregator_name |
 | display_priority | number |  no  | Dispaly Priority |
 | card_name | string |  no  | card_name |
 | intent_app_error_dict_list | [[IntentAppErrorList](#IntentAppErrorList)] |  no  | intent_app_error_dict_list |
 | intent_flow | boolean |  no  | intent_flow |
 | card_brand | string |  no  | card_brand |

---


 
 
 #### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | list | [[PaymentModeList](#PaymentModeList)] |  no  | Payment mode |
 | is_pay_by_card_pl | boolean |  no  | This flag will be true in case of Payment link payment through card |
 | name | string |  yes  | Payment mode name |
 | add_card_enabled | boolean |  no  | Annonymous card flag |
 | save_card | boolean |  no  | Card save or not |
 | anonymous_enable | boolean |  no  | Annonymous card flag |
 | display_name | string |  yes  | Payment mode display name |
 | aggregator_name | string |  no  | Dispaly Priority |
 | display_priority | number |  yes  | Dispaly Priority |

---


 
 
 #### [PaymentOptions](#PaymentOptions)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_option | [[RootPaymentMode](#RootPaymentMode)] |  yes  | Payment options |

---


 
 
 #### [PaymentOptionsResponse](#PaymentOptionsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | payment_options | [PaymentOptions](#PaymentOptions) |  yes  | Payment options |

---


 
 
 #### [PayoutsResponse](#PayoutsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | more_attributes | string |  yes  | bank details object |
 | transfer_type | string |  yes  | transafer type |
 | is_default | boolean |  yes  | default or not  |
 | unique_transfer_no | string |  yes  | display priority of the payment mode |
 | is_active | boolean |  yes  | Enable/DIsable Flag Payout |
 | payouts_aggregators | [string] |  yes  | payout aggregator object |
 | customers | string |  yes  | customers details object |

---


 
 
 #### [PayoutBankDetails](#PayoutBankDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pincode | number |  no  |  |
 | ifsc_code | string |  yes  |  |
 | branch_name | string |  no  |  |
 | state | string |  no  |  |
 | account_no | string |  no  |  |
 | country | string |  no  |  |
 | account_type | string |  yes  |  |
 | city | string |  no  |  |
 | account_holder | string |  no  |  |
 | bank_name | string |  no  |  |

---


 
 
 #### [PayoutRequest](#PayoutRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | string |  yes  | payout users object |
 | transfer_type | string |  yes  | transafer type |
 | aggregator | string |  yes  | Aggregator Name |
 | is_active | boolean |  yes  | Enable/Disable Flag Payout |
 | bank_details | [PayoutBankDetails](#PayoutBankDetails) |  yes  | payout bank details object |
 | unique_external_id | string |  yes  | Unique Id of Payout |

---


 
 
 #### [PayoutResponse](#PayoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | string |  yes  | users details object |
 | aggregator | string |  yes  | Aggregator Name |
 | transfer_type | string |  yes  | transfer type |
 | created | boolean |  yes  | created flag |
 | success | boolean |  yes  | Response is successful or not |
 | unique_transfer_no | string |  yes  | unique transfer no |
 | payouts | string |  yes  | payout  object |
 | is_active | boolean |  yes  | Enable/DIsable Flag Payout |
 | bank_details | string |  yes  | payout bank_details object |
 | payment_status | string |  yes  | status of payment |

---


 
 
 #### [UpdatePayoutResponse](#UpdatePayoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | is_active | boolean |  yes  | Enable/DIsable Flag Payout |
 | is_default | boolean |  yes  | Enable/Disable Default Payout |

---


 
 
 #### [UpdatePayoutRequest](#UpdatePayoutRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_external_id | string |  yes  | Unique Id of Payout |
 | is_active | boolean |  yes  | Enable/Disable Flag Payout |
 | is_default | boolean |  yes  | Enable/Disable Default Payout |

---


 
 
 #### [DeletePayoutResponse](#DeletePayoutResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [SubscriptionPaymentMethodResponse](#SubscriptionPaymentMethodResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | data | [string] |  yes  | Subscription Payment Method Object |

---


 
 
 #### [DeleteSubscriptionPaymentMethodResponse](#DeleteSubscriptionPaymentMethodResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Success or failure. |

---


 
 
 #### [SubscriptionConfigResponse](#SubscriptionConfigResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | aggregator | string |  yes  | Aggregator Name |
 | config | string |  yes  | Aggregator Config |

---


 
 
 #### [SaveSubscriptionSetupIntentRequest](#SaveSubscriptionSetupIntentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unique_external_id | string |  yes  | Unique id i.e company:id |

---


 
 
 #### [SaveSubscriptionSetupIntentResponse](#SaveSubscriptionSetupIntentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Response is successful or not |
 | data | string |  yes  | Subscription Payment Method Object |

---


 
 
 #### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  | Refund account data. |
 | is_verified_flag | boolean |  no  |  |
 | success | boolean |  yes  | Success or failure flag. |
 | message | string |  yes  | Response message |

---


 
 
 #### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  yes  | Bad Request Data |
 | success | boolean |  yes  | Response is successful or not |
 | description | string |  yes  | Not Found |

---


 
 
 #### [BankDetailsForOTP](#BankDetailsForOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ifsc_code | string |  yes  |  |
 | branch_name | string |  yes  |  |
 | account_no | string |  yes  |  |
 | account_holder | string |  yes  |  |
 | bank_name | string |  yes  |  |

---


 
 
 #### [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  yes  |  |
 | details | [BankDetailsForOTP](#BankDetailsForOTP) |  yes  |  |

---


 
 
 #### [IfscCodeResponse](#IfscCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bank_name | string |  yes  | Bank Name Of Account |
 | success | boolean |  no  | Response is successful or not |
 | branch_name | string |  yes  | Branch Name Of Account |

---


 
 
 #### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | boolean |  no  | MObile no of User |
 | display_name | string |  yes  | Display Name Of Account |
 | bank_name | string |  yes  | Bank Name Of Account |
 | modified_on | string |  yes  | MOdification Date of Beneficiary |
 | account_no | string |  yes  | Account Number |
 | address | string |  yes  | Address of User |
 | id | number |  yes  |   |
 | account_holder | string |  yes  | Account Holder Name |
 | delights_user_name | string |  no  | User Id Who filled the Beneficiary  |
 | title | string |  yes  | Title Of Account |
 | ifsc_code | string |  yes  | Ifsc Code Of Account |
 | comment | boolean |  no  | Remarks |
 | email | string |  yes  | EMail of User |
 | beneficiary_id | string |  yes  | Benenficiary Id |
 | is_active | boolean |  yes  | Boolean Flag whether Beneficiary set or not |
 | branch_name | boolean |  no  | Branch Name Of Account |
 | transfer_mode | string |  yes  | Transfer Mode Of Account |
 | subtitle | string |  yes  | SHort Title Of Account |
 | created_on | string |  yes  | Creation Date of Beneficiary |

---


 
 
 #### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | show_beneficiary_details | boolean |  no  | Show beneficiary details or not. |
 | beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)] |  no  | All Beneficiaries Of An Order |

---


 
 
 #### [MultiTenderPaymentMeta](#MultiTenderPaymentMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_gateway | string |  no  |  |
 | order_id | string |  no  |  |
 | current_status | string |  no  |  |
 | extra_meta | string |  no  |  |
 | payment_id | string |  no  |  |

---


 
 
 #### [MultiTenderPaymentMethod](#MultiTenderPaymentMethod)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  | Payment mode name |
 | amount | number |  yes  | Payment amount |
 | mode | string |  yes  |  |
 | meta | [MultiTenderPaymentMeta](#MultiTenderPaymentMeta) |  no  |  |

---


 
 
 #### [PaymentConfirmationRequest](#PaymentConfirmationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_methods | [[MultiTenderPaymentMethod](#MultiTenderPaymentMethod)] |  yes  |  |
 | order_id | string |  yes  | Unique order id |

---


 
 
 #### [PaymentConfirmationResponse](#PaymentConfirmationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  yes  | Payment confirmation updated or not. |
 | order_id | string |  yes  | Unique order id |
 | message | string |  yes  | Message |

---




