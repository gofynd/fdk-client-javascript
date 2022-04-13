



##### [Back to Application docs](./README.md)

## Payment Methods
Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account
* [getAggregatorsConfig](#getaggregatorsconfig)
* [attachCardToCustomer](#attachcardtocustomer)
* [getActiveCardAggregator](#getactivecardaggregator)
* [getActiveUserCards](#getactiveusercards)
* [deleteUserCard](#deleteusercard)
* [verifyCustomerForPayment](#verifycustomerforpayment)
* [verifyAndChargePayment](#verifyandchargepayment)
* [initialisePayment](#initialisepayment)
* [checkAndUpdatePaymentStatus](#checkandupdatepaymentstatus)
* [getPaymentModeRoutes](#getpaymentmoderoutes)
* [getPosPaymentModeRoutes](#getpospaymentmoderoutes)
* [getRupifiBannerDetails](#getrupifibannerdetails)
* [getEpaylaterBannerDetails](#getepaylaterbannerdetails)
* [resendOrCancelPayment](#resendorcancelpayment)
* [getActiveRefundTransferModes](#getactiverefundtransfermodes)
* [enableOrDisableRefundTransferMode](#enableordisablerefundtransfermode)
* [getUserBeneficiariesDetail](#getuserbeneficiariesdetail)
* [verifyIfscCode](#verifyifsccode)
* [getOrderBeneficiariesDetail](#getorderbeneficiariesdetail)
* [verifyOtpAndAddBeneficiaryForBank](#verifyotpandaddbeneficiaryforbank)
* [addBeneficiaryDetails](#addbeneficiarydetails)
* [addRefundBankAccountUsingOTP](#addrefundbankaccountusingotp)
* [verifyOtpAndAddBeneficiaryForWallet](#verifyotpandaddbeneficiaryforwallet)
* [updateDefaultBeneficiary](#updatedefaultbeneficiary)
* [customerCreditSummary](#customercreditsummary)
* [redirectToAggregator](#redirecttoaggregator)
* [checkCredit](#checkcredit)
* [customerOnboard](#customeronboard)



## Methods with example and description


### getAggregatorsConfig
Get payment gateway keys



```javascript
// Promise
const promise = payment.getAggregatorsConfig({  xApiToken : value,
 refresh : value });

// Async/Await
const data = await payment.getAggregatorsConfig({  xApiToken : value,
 refresh : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| xApiToken | string | no | Used for basic authentication. |    
| refresh | boolean | no | This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one. |  



Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.

*Returned Response:*




[AggregatorsConfigDetailResponse](#AggregatorsConfigDetailResponse)

Success. Returns the keys of all payment gateways. Check the example shown below or refer `AggregatorsConfigDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "simpl": {
    "key": "bf9d0ff65ffe6e54223a871e733bbd1c",
    "secret": "XXXX-XXXX-XXXX-XXXX",
    "config_type": "fynd",
    "sdk": true
  },
  "juspay": {
    "key": "XXXX-XXXX-XXXX-XXXX",
    "secret": "XXXX-XXXX-XXXX-XXXX",
    "config_type": "fynd",
    "merchant_key": "XXXX-XXXX-XXXX-XXXX",
    "sdk": false,
    "api": "https://api.juspay.in"
  },
  "mswipe": {
    "key": "XXXX-XXXX-XXXX-XXXX",
    "secret": "XXXX-XXXX-XXXX-XXXX",
    "config_type": "fynd",
    "merchant_id": "XXXX-XXXX-XXXX-XXXX",
    "user_id": "XXXX-XXXX-XXXX-XXXX",
    "pin": "XXXX-XXXX-XXXX-XXXX",
    "sdk": true,
    "verify_api": "https://www.mswipetech.com/verificationapi/api/VerificationApi/MswipeCardSaleVerificationApi"
  },
  "razorpay": {
    "key": "XXXX-XXXX-XXXX-XXXX",
    "secret": "XXXX-XXXX-XXXX-XXXX",
    "config_type": "fynd",
    "webhook_secret": "XXXX-XXXX-XXXX-XXXX",
    "sdk": true,
    "api": "https://api.razorpay.com/v1/",
    "vpa": "XXXX-XXXX-XXXX-XXXX"
  },
  "success": true,
  "env": "live"
}
```
</details>









---


### attachCardToCustomer
Attach a saved card to customer.



```javascript
// Promise
const promise = payment.attachCardToCustomer({  body : value });

// Async/Await
const data = await payment.attachCardToCustomer({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AttachCardRequest](#AttachCardRequest) | yes | Request body |


Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.

*Returned Response:*




[AttachCardsResponse](#AttachCardsResponse)

Success. Check the example shown below or refer `AttachCardsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "",
  "data": {
    "id": "pm_1IGQlvHY5NCLOJpYNTBP6WpY",
    "brand": "visa",
    "checks": {
      "address_line1_check": null,
      "address_postal_code_check": null,
      "cvc_check": "pass"
    },
    "country": "US",
    "exp_month": 11,
    "exp_year": 2025,
    "fingerprint": "poKWfSweJ0I5CvEA",
    "funding": "credit",
    "generated_from": null,
    "last4": "1111",
    "networks": {
      "available": [
        "visa"
      ],
      "preferred": null
    },
    "three_d_secure_usage": {
      "supported": true
    },
    "wallet": null
  }
}
```
</details>









---


### getActiveCardAggregator
Fetch active payment gateway for card payments



```javascript
// Promise
const promise = payment.getActiveCardAggregator({  refresh : value });

// Async/Await
const data = await payment.getActiveCardAggregator({  refresh : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| refresh | boolean | no |  |  



Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.

*Returned Response:*




[ActiveCardPaymentGatewayResponse](#ActiveCardPaymentGatewayResponse)

Success. Returns an active payment gateway. Check the example shown below or refer `ActiveCardPaymentGatewayResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "",
  "cards": {
    "aggregator": "Stripe",
    "api": "https://www.example.com/cards/",
    "customer_id": "lorem_12345"
  }
}
```
</details>









---


### getActiveUserCards
Fetch the list of cards saved by the user



```javascript
// Promise
const promise = payment.getActiveUserCards({  forceRefresh : value });

// Async/Await
const data = await payment.getActiveUserCards({  forceRefresh : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| forceRefresh | boolean | no |  |  



Use this API to retrieve a list of cards stored by user from an active payment gateway.

*Returned Response:*




[ListCardsResponse](#ListCardsResponse)

Success. Returns a list of cards saved by the user. Check the example shown below or refer `ListCardsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Success",
  "data": [
    {
      "aggregator_name": "Razorpay",
      "card_id": "token_lorem_ipsum_001",
      "card_token": "card_token_lorem_ipsum_001",
      "card_reference": "ref_lorem_ipsum_001",
      "card_number": "XXXX-XXXX-XXXX-1111",
      "card_isin": "001",
      "exp_year": 2025,
      "exp_month": 5,
      "card_type": "credit",
      "card_issuer": "ICIC",
      "card_brand": "VISA",
      "nickname": "Visa",
      "card_name": "Lorem Ipsum",
      "expired": false,
      "card_fingerprint": null,
      "card_brand_image": "https://hdn-1.fynd.com/payment/visa.png"
    }
  ]
}
```
</details>









---


### deleteUserCard
Delete a card



```javascript
// Promise
const promise = payment.deleteUserCard({  body : value });

// Async/Await
const data = await payment.deleteUserCard({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DeletehCardRequest](#DeletehCardRequest) | yes | Request body |


Use this API to delete a card added by a user on the payment gateway and clear the cache.

*Returned Response:*




[DeleteCardsResponse](#DeleteCardsResponse)

Success. Returns a success message if card is deleted.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### verifyCustomerForPayment
Validate customer for payment



```javascript
// Promise
const promise = payment.verifyCustomerForPayment({  body : value });

// Async/Await
const data = await payment.verifyCustomerForPayment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ValidateCustomerRequest](#ValidateCustomerRequest) | yes | Request body |


Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.

*Returned Response:*




[ValidateCustomerResponse](#ValidateCustomerResponse)

Success. Check the example shown below or refer `ValidateCustomerResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "data fetched",
  "data": {
    "api_version": 2,
    "data": {
      "approved": true,
      "button_text": "Buy Now, Pay Later",
      "first_transaction": false
    },
    "aggregator": "Simpl"
  }
}
```
</details>









---


### verifyAndChargePayment
Verify and charge payment



```javascript
// Promise
const promise = payment.verifyAndChargePayment({  body : value });

// Async/Await
const data = await payment.verifyAndChargePayment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ChargeCustomerRequest](#ChargeCustomerRequest) | yes | Request body |


Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.

*Returned Response:*




[ChargeCustomerResponse](#ChargeCustomerResponse)

Success. Check the example shown below or refer `ChargeCustomerResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment Successful",
  "status": "complete",
  "order_id": "FY000000001000000101",
  "aggregator": "Simpl",
  "cart_id": "0000000",
  "delivery_address_id": "0000000"
}
```
</details>









---


### initialisePayment
Initialize a payment (server-to-server) for UPI and BharatQR



```javascript
// Promise
const promise = payment.initialisePayment({  body : value });

// Async/Await
const data = await payment.initialisePayment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentInitializationRequest](#PaymentInitializationRequest) | yes | Request body |


PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.

*Returned Response:*




[PaymentInitializationResponse](#PaymentInitializationResponse)

Success. Check the example shown below or refer `PaymentInitializationResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "aggregator": "UPI_Razorpay",
  "method": "upi",
  "status": "success",
  "merchant_order_id": "FY000120000101",
  "aggregator_order_id": "lorem_GX8W00p2ipsum",
  "polling_url": "https://api.fynd.com/service/application/payment/v0.1/payments/confirm/polling/?app_id=000000000000000000000001",
  "timeout": 240,
  "virtual_id": null,
  "razorpay_payment_id": "pay_dummy_001",
  "customer_id": "cust_dummy_001"
}
```
</details>









---


### checkAndUpdatePaymentStatus
Performs continuous polling to check status of payment on the server



```javascript
// Promise
const promise = payment.checkAndUpdatePaymentStatus({  body : value });

// Async/Await
const data = await payment.checkAndUpdatePaymentStatus({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentStatusUpdateRequest](#PaymentStatusUpdateRequest) | yes | Request body |


Use this API to perform continuous polling at intervals to check the status of payment until timeout.

*Returned Response:*




[PaymentStatusUpdateResponse](#PaymentStatusUpdateResponse)

Success. Returns the status of payment. Check the example shown below or refer `PaymentStatusUpdateResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "aggregator_name": "UPI_Razorpay",
  "status": "success",
  "retry": false
}
```
</details>









---


### getPaymentModeRoutes
Get applicable payment options



```javascript
// Promise
const promise = payment.getPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 refresh : value,
 cardReference : value,
 userDetails : value });

// Async/Await
const data = await payment.getPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 refresh : value,
 cardReference : value,
 userDetails : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| amount | number | yes | Payable amount. |   
| cartId | string | yes | Identifier of the cart. |   
| pincode | string | yes | The PIN Code of the destination address, e.g. 400059 |   
| checkoutMode | string | yes | Option to checkout for self or for others. |    
| refresh | boolean | no | This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one. |    
| cardReference | string | no | Card reference id of user's debit or credit card. |    
| userDetails | string | no | URIencoded JSON containing details of an anonymous user. |  



Use this API to get all valid payment options for doing a payment.

*Returned Response:*




[PaymentModeRouteResponse](#PaymentModeRouteResponse)

Success. Returns all available options for payment. Check the example shown below or refer `PaymentModeRouteResponse` for more details.




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
        "add_card_enabled": false
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
            "code": "paytm",
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
            "wallet_name": "Amazon Pay",
            "wallet_code": "amazonpay",
            "name": "Amazon Pay",
            "display_name": "Amazon Pay",
            "code": "amazonpay",
            "wallet_id": 10,
            "merchant_code": "AMAZONPAY",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/amazon-pay.png",
              "large": "https://hdn-1.fynd.com/payment/amazon-pay.png"
            },
            "aggregator_name": "Razorpay",
            "display_priority": 9
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
              "small": "https://hdn-1.fynd.com/payment/upi_100x78.png",
              "large": "https://hdn-1.fynd.com/payment/upi_150x100.png"
            },
            "merchant_code": "UPI",
            "timeout": 310,
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
        "name": "JUSPAYPG",
        "display_priority": 18,
        "payment_mode_id": 24,
        "display_name": "Pay Using Juspay",
        "list": []
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
            "code": "simpl",
            "merchant_code": "SIMPL",
            "logo": "https://hdn-1.fynd.com/payment/simpl_logo.png",
            "logo_url": {
              "small": "https://hdn-1.fynd.com/payment/simpl_logo.png",
              "large": "https://hdn-1.fynd.com/payment/simpl_logo.png"
            }
          }
        ]
      }
    ],
    "payment_flows": {
      "simpl": {
        "data": {
          "gateway": {
            "route": "simpl",
            "entity": "sdk",
            "is_customer_validation_required": true,
            "cust_validation_url": "https://api.fyndx0.de/gringotts/api/v1/validate-customer/?app_id=000000000000000000000001",
            "sdk": {
              "config": {
                "redirect": false,
                "callback_url": null,
                "action_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/confirm/charge/?app_id=000000000000000000000001"
              },
              "data": {
                "user_phone": "9999632145",
                "user_email": "app@fynd.com"
              }
            },
            "return_url": null
          }
        },
        "api_link": "",
        "payment_flow": "sdk",
        "payment_flow_data": {
          "is_customer_validation_required": true,
          "cust_validation_url": "https://api.fyndx0.de/platform/payment/api/v1/validate-customer/?app_id=000000000000000000000001",
          "config": {
            "redirect": false,
            "final_payment_action_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/confirm/charge/?app_id=000000000000000000000001"
          },
          "data": {
            "user_phone": null,
            "user_email": null
          },
          "return_url": null
        }
      },
      "mswipe": {
        "data": {
          "gateway": {
            "sdk": {
              "config": {
                "redirect": false,
                "action_url": "url",
                "webhook_url": "url",
                "timeout": 60
              }
            }
          }
        },
        "api_link": "",
        "payment_flow": "sdk"
      },
      "juspay": {
        "data": {},
        "api_link": "https://sandbox.juspay.in/txns",
        "payment_flow": "api"
      },
      "razorpay": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "bqr_razorpay": {
        "data": {},
        "api_link": "https://api.fyndx0.de/platform/payment/v2/external/payments/request/?app_id=000000000000000000000001",
        "payment_flow": "api"
      },
      "fynd": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      },
      "jio": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      },
      "stripe": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "ccavenue": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "payumoney": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "rupifi": {
        "data": {},
        "api_link": "",
        "return_url": "",
        "payment_flow": "api",
        "cust_validation_url": "https://api.jiox0.de/gringotts/api/v1/validate-customer/",
        "payment_flow_data": {
          "is_customer_validation_required": true,
          "cust_validation_url": "https://api.fyndx0.de/platform/payment/api/v1/validate-customer/?app_id=000000000000000000000001",
          "config": {
            "redirect": false,
            "final_payment_action_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/confirm/charge/?app_id=000000000000000000000001"
          },
          "data": {
            "user_phone": null,
            "user_email": null
          },
          "return_url": null
        }
      },
      "jiopay": {
        "api_link": "http://psp-mandate-merchant-sit.jiomoney.com:3003/pg",
        "payment_flow": "api",
        "data": {}
      },
      "epaylater": {
        "data": {},
        "api_link": "https://api-blackbox.epaylater.in/web/process-transaction/",
        "payment_flow": "api"
      }
    }
  }
}
```
</details>









---


### getPosPaymentModeRoutes
Get applicable payment options for Point-of-Sale (POS)



```javascript
// Promise
const promise = payment.getPosPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 orderType : value,
 refresh : value,
 cardReference : value,
 userDetails : value });

// Async/Await
const data = await payment.getPosPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 orderType : value,
 refresh : value,
 cardReference : value,
 userDetails : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| amount | number | yes | Payable amount. |   
| cartId | string | yes | Identifier of the cart. |   
| pincode | string | yes | The PIN Code of the destination address, e.g. 400059 |   
| checkoutMode | string | yes | Option to checkout for self or for others. |    
| refresh | boolean | no | This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one. |    
| cardReference | string | no | Card reference id of user's debit or credit card. |   
| orderType | string | yes | The order type of shipment * HomeDelivery - If the customer wants the order home-delivered * PickAtStore - If the customer wants the handover of an order at the store itself. |    
| userDetails | string | no | URIencoded JSON containing details of an anonymous user. |  



Use this API to get all valid payment options for doing a payment in POS.

*Returned Response:*




[PaymentModeRouteResponse](#PaymentModeRouteResponse)

Success. Returns all available options for payment. Check the example shown below or refer `PaymentModeRouteResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "payment_options": {
    "payment_option": [
      {
        "name": "CAS",
        "display_priority": 21,
        "payment_mode_id": 39,
        "display_name": "Cash at Store",
        "list": [
          {
            "aggregator_name": "Fynd",
            "name": "CAS",
            "display_name": "CASH",
            "code": "CAS",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/cod.png",
              "small": "https://hdn-1.fynd.com/payment/cod.png"
            },
            "merchant_code": "CAS"
          }
        ]
      },
      {
        "name": "CSAS",
        "display_priority": 21,
        "payment_mode_id": 40,
        "display_name": "Card Swiped at Store",
        "list": [
          {
            "aggregator_name": "Fynd",
            "name": "CSAS",
            "display_name": "Card Swipe",
            "code": "CSAS",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/cod.png",
              "small": "https://hdn-1.fynd.com/payment/cod.png"
            },
            "merchant_code": "CSAS"
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
              "small": "https://hdn-1.fynd.com/payment/upi_100x78.png",
              "large": "https://hdn-1.fynd.com/payment/upi_150x100.png"
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
      }
    ],
    "payment_flows": {
      "simpl": {
        "data": {
          "gateway": {
            "route": "simpl",
            "entity": "sdk",
            "is_customer_validation_required": true,
            "cust_validation_url": "https://api.fyndx0.de/gringotts/api/v1/validate-customer/?app_id=000000000000000000000001",
            "sdk": {
              "config": {
                "redirect": false,
                "callback_url": null,
                "action_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/confirm/charge/?app_id=000000000000000000000001"
              },
              "data": {
                "user_phone": "9999632145",
                "user_email": "app@fynd.com"
              }
            },
            "return_url": null
          }
        },
        "api_link": "",
        "payment_flow": "sdk"
      },
      "juspay": {
        "data": {},
        "api_link": "https://sandbox.juspay.in/txns",
        "payment_flow": "api"
      },
      "razorpay": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "upi_razorpay": {
        "data": {},
        "api_link": "https://api.fyndx0.de/platform/payment/v2/external/payments/request/?app_id=000000000000000000000001",
        "payment_flow": "api"
      },
      "bqr_razorpay": {
        "data": {},
        "api_link": "https://api.fyndx0.de/platform/payment/v2/external/payments/request/?app_id=000000000000000000000001",
        "payment_flow": "api"
      },
      "cashfree": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      },
      "fynd": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      },
      "jio": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      },
      "stripe": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "ccavenue": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "payumoney": {
        "data": {},
        "api_link": "",
        "payment_flow": "sdk"
      },
      "rupifi": {
        "data": {},
        "api_link": "",
        "return_url": "",
        "payment_flow": "api",
        "cust_validation_url": "https://api.jiox0.de/gringotts/api/v1/validate-customer/"
      }
    }
  }
}
```
</details>









---


### getRupifiBannerDetails
Get CreditLine Offer



```javascript
// Promise
const promise = payment.getRupifiBannerDetails();

// Async/Await
const data = await payment.getRupifiBannerDetails();
```






Get CreditLine Offer if user is tentatively approved by rupifi

*Returned Response:*




[RupifiBannerResponse](#RupifiBannerResponse)

Success. Return CreditLine Offer detail. Check the example shown below or refer `RupifiBannerResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "kyc_url": "http://rupifi.kyc1.com/",
    "status": "APPROVED"
  }
}
```
</details>









---


### getEpaylaterBannerDetails
Get Epaylater Enabled



```javascript
// Promise
const promise = payment.getEpaylaterBannerDetails();

// Async/Await
const data = await payment.getEpaylaterBannerDetails();
```






Get Epaylater Enabled if user is tentatively approved by epaylater

*Returned Response:*




[EpaylaterBannerResponse](#EpaylaterBannerResponse)

Success. Return Epaylater Offer detail. Check the example shown below or refer `EpaylaterBannerResponseSchema` for more details. if `display=True`, then show banner otherwise do not show.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; User is registered successfully</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "display": false,
      "message": "User is Active",
      "status": "ACTIVE"
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; User is not registered or KYC not done or approval pending</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "display": true,
      "message": "User is not registered",
      "status": "NOT REGISTERED"
    }
  }
}
```
</details>

</details>









---


### resendOrCancelPayment
API to resend and cancel a payment link which was already generated.



```javascript
// Promise
const promise = payment.resendOrCancelPayment({  body : value });

// Async/Await
const data = await payment.resendOrCancelPayment({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ResendOrCancelPaymentRequest](#ResendOrCancelPaymentRequest) | yes | Request body |


Use this API to perform resend or cancel a payment link based on request payload.

*Returned Response:*




[ResendOrCancelPaymentResponse](#ResendOrCancelPaymentResponse)

Success. Returns the status of payment. Check the example shown below or refer `ResendOrCancelPaymentResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; request_type is cancel</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "message": "Payment link Cancelled.",
      "status": true
    }
  }
}
```
</details>

<details>
<summary><i>&nbsp; request_type is resend</i></summary>

```json
{
  "value": {
    "success": true,
    "data": {
      "message": "Notification triggered.",
      "status": true
    }
  }
}
```
</details>

</details>









---


### getActiveRefundTransferModes
Lists the mode of refund



```javascript
// Promise
const promise = payment.getActiveRefundTransferModes();

// Async/Await
const data = await payment.getActiveRefundTransferModes();
```






Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.

*Returned Response:*




[TransferModeResponse](#TransferModeResponse)

Success. Shows the available refund mode to choose, e.g. Netbanking. Check the example shown below or refer `TransferModeResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": [
    {
      "display_name": "BANK",
      "items": [
        {
          "id": 6,
          "name": "bank",
          "display_name": "BANK",
          "logo_small": "https://hdn-1.fynd.com/payment/netbanking.png",
          "logo_large": "https://hdn-1.fynd.com/payment/netbanking.png"
        }
      ]
    }
  ]
}
```
</details>









---


### enableOrDisableRefundTransferMode
Enable/Disable a mode for transferring a refund



```javascript
// Promise
const promise = payment.enableOrDisableRefundTransferMode({  body : value });

// Async/Await
const data = await payment.enableOrDisableRefundTransferMode({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdateRefundTransferModeRequest](#UpdateRefundTransferModeRequest) | yes | Request body |


Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund

*Returned Response:*




[UpdateRefundTransferModeResponse](#UpdateRefundTransferModeResponse)

Success. Shows whether the refund mode was successfully enabled or disabled.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### getUserBeneficiariesDetail
Lists the beneficiary of a refund



```javascript
// Promise
const promise = payment.getUserBeneficiariesDetail({  orderId : value });

// Async/Await
const data = await payment.getUserBeneficiariesDetail({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  



Use this API to get the details of all active beneficiary added by a user for refund.

*Returned Response:*




[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

Success. Returns the details of the beneficiary getting a refund. Check the example shown below or refer `OrderBeneficiaryResponse` for more details.




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


### verifyIfscCode
Verify IFSC Code



```javascript
// Promise
const promise = payment.verifyIfscCode({  ifscCode : value });

// Async/Await
const data = await payment.verifyIfscCode({  ifscCode : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| ifscCode | string | no | A 11-digit alphanumeric code that uniquely identifies a bank branch. |  



Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.

*Returned Response:*




[IfscCodeResponse](#IfscCodeResponse)

Success. Shows whether the IFSC code is valid, and returns the bank details. Check the example shown below or refer `IfscCodeResponse` for more details.




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


### getOrderBeneficiariesDetail
Lists the beneficiary of a refund



```javascript
// Promise
const promise = payment.getOrderBeneficiariesDetail({  orderId : value });

// Async/Await
const data = await payment.getOrderBeneficiariesDetail({  orderId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| orderId | string | yes | A unique number used for identifying and tracking your orders. |  



Use this API to get the details of all active beneficiary added by a user for refund.

*Returned Response:*




[OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

Success. Returns the details of the beneficiary getting a refund. Check the example shown below or refer `OrderBeneficiaryResponse` for more details.




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


### verifyOtpAndAddBeneficiaryForBank
Verify the beneficiary details using OTP



```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForBank({  body : value });

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForBank({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddBeneficiaryViaOtpVerificationRequest](#AddBeneficiaryViaOtpVerificationRequest) | yes | Request body |


Use this API to perform an OTP validation before saving the beneficiary details added for a refund.

*Returned Response:*




[AddBeneficiaryViaOtpVerificationResponse](#AddBeneficiaryViaOtpVerificationResponse)

Success. Check the example shown below or refer `AddBeneficiaryViaOtpVerificationRequest` for more details.




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


### addBeneficiaryDetails
Save bank details for cancelled/returned order



```javascript
// Promise
const promise = payment.addBeneficiaryDetails({  body : value });

// Async/Await
const data = await payment.addBeneficiaryDetails({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest) | yes | Request body |


Use this API to save the bank details for a returned or cancelled order to refund the amount.

*Returned Response:*




[RefundAccountResponse](#RefundAccountResponse)

Success. Shows whether the beneficiary details were saved to a returned/cancelled order or not.




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


### addRefundBankAccountUsingOTP
Save bank details for cancelled/returned order



```javascript
// Promise
const promise = payment.addRefundBankAccountUsingOTP({  body : value });

// Async/Await
const data = await payment.addRefundBankAccountUsingOTP({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest) | yes | Request body |


Use this API to save bank details for returned/cancelled order to refund amount in his account.

*Returned Response:*




[RefundAccountResponse](#RefundAccountResponse)

Success. Shows whether the beneficiary details were saved to a returned/cancelled order or not.




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


### verifyOtpAndAddBeneficiaryForWallet
Send OTP on adding a wallet beneficiary



```javascript
// Promise
const promise = payment.verifyOtpAndAddBeneficiaryForWallet({  body : value });

// Async/Await
const data = await payment.verifyOtpAndAddBeneficiaryForWallet({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [WalletOtpRequest](#WalletOtpRequest) | yes | Request body |


Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.

*Returned Response:*




[WalletOtpResponse](#WalletOtpResponse)

Success. Sends the OTP to the given mobile number. Check the example shown below or refer `WalletOtpResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "is_verified_flag": false,
  "request_id": "c3ca6c13d490c885a125d106b45697b7"
}
```
</details>









---


### updateDefaultBeneficiary
Set a default beneficiary for a refund



```javascript
// Promise
const promise = payment.updateDefaultBeneficiary({  body : value });

// Async/Await
const data = await payment.updateDefaultBeneficiary({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SetDefaultBeneficiaryRequest](#SetDefaultBeneficiaryRequest) | yes | Request body |


Use this API to set a default beneficiary for getting a refund.

*Returned Response:*




[SetDefaultBeneficiaryResponse](#SetDefaultBeneficiaryResponse)

Success. Check the example shown below or refer `SetDefaultBeneficiaryResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "is_beneficiary_set": true
}
```
</details>









---


### customerCreditSummary
API to fetch the customer credit summary



```javascript
// Promise
const promise = payment.customerCreditSummary({  aggregator : value });

// Async/Await
const data = await payment.customerCreditSummary({  aggregator : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| aggregator | string | no |  |  



Use this API to fetch the customer credit summary.

*Returned Response:*




[CustomerCreditSummaryResponse](#CustomerCreditSummaryResponse)

Success. Returns the status of payment. Check the example shown below or refer `CustomerCreditSummaryResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "merchant_customer_ref_id": "ABHI0002",
    "status": "Bill Due",
    "status_message": "Pay now to avoid interest charges",
    "balance": {
      "value": 87424,
      "formatted_value": "₹ 87,424.00",
      "currency": "INR"
    },
    "limit": {
      "value": 100000,
      "formatted_value": "₹ 100,000.00",
      "currency": "INR"
    },
    "due_amount": {
      "value": 12576,
      "formatted_value": "₹ 12,576.00",
      "currency": "INR"
    },
    "used_amount": {
      "value": 12576,
      "formatted_value": "₹ 12,576.00",
      "currency": "INR"
    },
    "due_date": "Oct 22 2021",
    "days_overdue": 123
  }
}
```
</details>









---


### redirectToAggregator
API to get the redirect url to redirect the user to aggregator's page



```javascript
// Promise
const promise = payment.redirectToAggregator({  source : value,
 aggregator : value });

// Async/Await
const data = await payment.redirectToAggregator({  source : value,
 aggregator : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| source | string | no | This is a String value that contains callback URL as value. |    
| aggregator | string | no | This is a String value that contains aggregator name as value. |  



Use this API to get the redirect url to redirect the user to aggregator's page

*Returned Response:*




[RedirectToAggregatorResponse](#RedirectToAggregatorResponse)

Success. Returns the status of payment. Check the example shown below or refer `RedirectToAggregatorResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "redirect_url": "https://api-blackbox.epaylater.in//marketplace/customer/transactions/v2?encryptedPayload=dpPuB2+kZ6NyIrg0eWAwk7TbF14502RkIARgullt3PGWMh7Ix0Tc720b6idZzXNxzwaA3BOi2DHUALpqSfOagra+i0wRIVc36O62fwPscQE=checksum=6F06AEAE2A3CBBC81457FB2287C4DEFCFC16DEA8F33482D682134D64E43E34C2merchantId=Sample1234567890redirectConfirmUrl=http://localhost:8000/",
    "status": true
  }
}
```
</details>









---


### checkCredit
API to fetch the customer credit summary



```javascript
// Promise
const promise = payment.checkCredit({  aggregator : value });

// Async/Await
const data = await payment.checkCredit({  aggregator : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| aggregator | string | no |  |  



Use this API to fetch the customer credit summary.

*Returned Response:*




[CheckCreditResponse](#CheckCreditResponse)

Success. Returns the status of payment. Check the example shown below or refer `CheckCreditResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "is_registered": false,
    "status": true,
    "signup_url": "https://merchant.epaylater.in"
  }
}
```
</details>









---


### customerOnboard
API to fetch the customer credit summary



```javascript
// Promise
const promise = payment.customerOnboard({  body : value });

// Async/Await
const data = await payment.customerOnboard({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CustomerOnboardingRequest](#CustomerOnboardingRequest) | yes | Request body |


Use this API to fetch the customer credit summary.

*Returned Response:*




[CustomerOnboardingResponse](#CustomerOnboardingResponse)

Success. Returns the status of payment. Check the example shown below or refer `CustomerOnboardingResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "session": {
      "session_id": "109dae9a-9fe0-4277-979c-0bebb0136930"
    },
    "redirect_url": "https://retail-dev.epaylater.in?sessionId=109dae9a-9fe0-4277-979c-0bebb0136930",
    "status": true
  }
}
```
</details>









---



### Schemas

 
 
 #### [AggregatorConfigDetail](#AggregatorConfigDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_key | string |  no  | Unique merchant key |
 | pin | string |  no  | Masked pin |
 | sdk | boolean |  no  | SDK |
 | config_type | string |  yes  | Fynd or self payment gateway |
 | api | string |  no  | Payment gateway api endpoint |
 | merchant_id | string |  no  | Unique merchant id |
 | secret | string |  yes  | Masked payment gateway api secret |
 | verify_api | string |  no  | Payment gateway verify payment api endpoint |
 | user_id | string |  no  | Registered User id |
 | key | string |  yes  | Payment gateway api key |

---


 
 
 #### [AggregatorsConfigDetailResponse](#AggregatorsConfigDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mswipe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | ccavenue | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | rupifi | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | stripe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | env | string |  yes  | Environment i.e Live or Test |
 | payumoney | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | juspay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | razorpay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |
 | success | boolean |  yes  |  |
 | simpl | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  |

---


 
 
 #### [ErrorCodeAndDescription](#ErrorCodeAndDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Error human understandable description. |
 | code | string |  yes  | Error descrption code. |

---


 
 
 #### [HttpErrorCodeAndResponse](#HttpErrorCodeAndResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ErrorCodeAndDescription](#ErrorCodeAndDescription) |  yes  |  |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [AttachCardRequest](#AttachCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name_on_card | string |  no  |  |
 | card_id | string |  yes  | Card token of payment gateway. |
 | nickname | string |  no  |  |
 | refresh | boolean |  no  | Refresh cache flag. |

---


 
 
 #### [AttachCardsResponse](#AttachCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Human readable message. |
 | data | string |  yes  | List of cards of customer. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [CardPaymentGateway](#CardPaymentGateway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  yes  | Payment gateway name. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | api | string |  no  | Payment gateway CARD api endpoint |

---


 
 
 #### [ActiveCardPaymentGatewayResponse](#ActiveCardPaymentGatewayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Human readable message. |
 | cards | [CardPaymentGateway](#CardPaymentGateway) |  yes  | Card's payment gateway with customer id. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [Card](#Card)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exp_year | number |  no  | exp_year |
 | card_reference | string |  no  | card_reference |
 | expired | boolean |  no  | expired |
 | card_name | string |  no  | card_name |
 | nickname | string |  no  | nickname |
 | card_issuer | string |  no  | card_issuer |
 | card_isin | string |  no  | card_isin |
 | card_id | string |  no  | card_id |
 | card_brand | string |  no  | card_brand |
 | card_token | string |  no  | card_token |
 | exp_month | number |  no  | exp_month |
 | card_type | string |  no  | card_type |
 | card_brand_image | string |  no  | card_brand_image |
 | card_number | string |  no  | card_number |
 | card_fingerprint | string |  no  | card_fingerprint |
 | aggregator_name | string |  yes  | aggregator_name |

---


 
 
 #### [ListCardsResponse](#ListCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Human readable message. |
 | data | [[Card](#Card)] |  no  | List of cards of customer. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [DeletehCardRequest](#DeletehCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_id | string |  yes  | Card token of payment gateway. |

---


 
 
 #### [DeleteCardsResponse](#DeleteCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Human readable message. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [ValidateCustomerRequest](#ValidateCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payload | string |  yes  | Hashed payload string. |
 | aggregator | string |  yes  | Payment gateway name in camel case i.e Simpl, Rupifi |
 | phone_number | string |  yes  | User mobile number without country code. |
 | merchant_params | string |  yes  | Extra meta fields. |
 | transaction_amount_in_paise | number |  yes  | Payable amount in paise |

---


 
 
 #### [ValidateCustomerResponse](#ValidateCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Error or success message. |
 | data | string |  yes  | Payment gateway response data |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [ChargeCustomerRequest](#ChargeCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  yes  | Payment gateway name i.e Simpl, Mswipe |
 | verified | boolean |  no  | Already Verified flag from payment gateway i.e Mswipe |
 | order_id | string |  yes  | Unique order id. |
 | amount | number |  yes  | Chargable amount of order. |
 | transaction_token | string |  no  | Transaction token of payment gateway. |

---


 
 
 #### [ChargeCustomerResponse](#ChargeCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Human readable message. |
 | status | string |  yes  | Status of charged payment. |
 | aggregator | string |  yes  | Payment gateway name i.e Simpl, Mswipe |
 | cart_id | string |  no  | Cart id of customer |
 | delivery_address_id | string |  no  | Delivery adddress id of customer |
 | order_id | string |  yes  | Unique order id. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [PaymentInitializationRequest](#PaymentInitializationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string |  yes  | Customer valid mobile number |
 | merchant_order_id | string |  yes  | Unique fynd order id |
 | timeout | number |  no  | Payment polling timeout if not recieved response |
 | method | string |  yes  | Payment method |
 | aggregator | string |  yes  | Payment gateway name |
 | order_id | string |  yes  | Payment gateway order id |
 | email | string |  yes  | Customer valid email |
 | currency | string |  yes  | Currency code. |
 | amount | number |  yes  | Payable amount. |
 | customer_id | string |  yes  | Payment gateway customer id. |
 | razorpay_payment_id | string |  no  | Payment gateway payment id |
 | vpa | string |  no  | Customer vpa address |

---


 
 
 #### [PaymentInitializationResponse](#PaymentInitializationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_order_id | string |  yes  | order id |
 | virtual_id | string |  no  | Payment virtual address. |
 | bqr_image | string |  no  | Bharath qr image url. |
 | polling_url | string |  yes  | Polling url. |
 | timeout | number |  no  | timeout. |
 | status | string |  no  | Status of payment. |
 | aggregator | string |  yes  | Payment gateway name |
 | method | string |  yes  | Payment method |
 | currency | string |  no  | Currency code. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | amount | number |  no  | Payable amount. |
 | aggregator_order_id | string |  no  | Payment order id |
 | vpa | string |  no  | Customer vpa address |
 | success | boolean |  yes  | Response is successful or not. |
 | razorpay_payment_id | string |  no  | Payment  id. |
 | upi_poll_url | string |  no  | UPI poll url. |

---


 
 
 #### [PaymentStatusUpdateRequest](#PaymentStatusUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string |  yes  | Customer valid mobile number |
 | merchant_order_id | string |  yes  | Unique fynd order id |
 | status | string |  yes  | Status of payment. |
 | aggregator | string |  yes  | Payment gateway name |
 | method | string |  yes  | Payment method |
 | order_id | string |  yes  | Payment gateway order id |
 | email | string |  yes  | Customer valid email |
 | currency | string |  yes  | Currency code. |
 | amount | number |  yes  | Payable amount. |
 | customer_id | string |  yes  | Payment gateway customer id. |
 | vpa | string |  yes  | Customer vpa address |

---


 
 
 #### [PaymentStatusUpdateResponse](#PaymentStatusUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | retry | boolean |  yes  | Response is successful or not. |
 | aggregator_name | string |  yes  | Payment gateway name |
 | status | string |  yes  | Payment status |

---


 
 
 #### [AggregatorRoute](#AggregatorRoute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_link | string |  no  | api_link |
 | data | string |  no  | Data |
 | payment_flow | string |  no  | payment_flow |
 | payment_flow_data | string |  no  | payment_flow_data |

---


 
 
 #### [PaymentFlow](#PaymentFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mswipe | [AggregatorRoute](#AggregatorRoute) |  no  | mswipe |
 | epaylater | [AggregatorRoute](#AggregatorRoute) |  no  | Epaylater |
 | upi_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | UPI_Razorpay |
 | ccavenue | [AggregatorRoute](#AggregatorRoute) |  no  | Ccavenue |
 | rupifi | [AggregatorRoute](#AggregatorRoute) |  no  | Rupifi |
 | stripe | [AggregatorRoute](#AggregatorRoute) |  no  | Stripe |
 | payubiz | [AggregatorRoute](#AggregatorRoute) |  no  | Payubiz |
 | jiopay | [AggregatorRoute](#AggregatorRoute) |  no  | Jiopay |
 | juspay | [AggregatorRoute](#AggregatorRoute) |  no  | Juspay |
 | razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | Razorpay |
 | bqr_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  | BQR_Razorpay |
 | simpl | [AggregatorRoute](#AggregatorRoute) |  no  | simpl |
 | fynd | [AggregatorRoute](#AggregatorRoute) |  no  | Fynd |

---


 
 
 #### [PaymentModeLogo](#PaymentModeLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | small | string |  yes  | smalll |
 | large | string |  yes  | large |

---


 
 
 #### [IntentApp](#IntentApp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | code |
 | display_name | string |  no  | display_name |
 | package_name | string |  no  | package_name |
 | logos | [PaymentModeLogo](#PaymentModeLogo) |  no  | logos |

---


 
 
 #### [IntentAppErrorList](#IntentAppErrorList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | code |
 | package_name | string |  no  | package_name |

---


 
 
 #### [PaymentModeList](#PaymentModeList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | code |
 | card_reference | string |  no  | card_reference |
 | name | string |  no  | name |
 | logo_url | [PaymentModeLogo](#PaymentModeLogo) |  no  | Logo |
 | timeout | number |  no  | timeout |
 | retry_count | number |  no  | retry_count |
 | aggregator_name | string |  yes  | aggregator_name |
 | exp_year | number |  no  | exp_year |
 | intent_app | [[IntentApp](#IntentApp)] |  no  | intent_app |
 | fynd_vpa | string |  no  | fynd_vpa |
 | card_isin | string |  no  | card_isin |
 | card_brand | string |  no  | card_brand |
 | card_token | string |  no  | card_token |
 | card_type | string |  no  | card_type |
 | card_brand_image | string |  no  | card_brand_image |
 | intent_app_error_list | [string] |  no  | intent_app_error_list |
 | card_fingerprint | string |  no  | card_fingerprint |
 | intent_flow | boolean |  no  | intent_flow |
 | expired | boolean |  no  | expired |
 | card_id | string |  no  | card_id |
 | display_priority | number |  no  | Dispaly Priority |
 | card_number | string |  no  | card_number |
 | display_name | string |  no  | display name |
 | merchant_code | string |  no  | merchant code |
 | card_name | string |  no  | card_name |
 | nickname | string |  no  | nickname |
 | intent_app_error_dict_list | [[IntentAppErrorList](#IntentAppErrorList)] |  no  | intent_app_error_dict_list |
 | card_issuer | string |  no  | card_issuer |
 | exp_month | number |  no  | exp_month |

---


 
 
 #### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | add_card_enabled | boolean |  no  | Annonymous card flag |
 | name | string |  yes  | Payment mode name |
 | display_priority | number |  yes  | Dispaly Priority |
 | list | [[PaymentModeList](#PaymentModeList)] |  no  | Payment mode |
 | display_name | string |  yes  | Payment mode display name |
 | anonymous_enable | boolean |  no  | Annonymous card flag |
 | aggregator_name | string |  no  | Dispaly Priority |

---


 
 
 #### [PaymentOptionAndFlow](#PaymentOptionAndFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_flows | [PaymentFlow](#PaymentFlow) |  yes  | payment_flows |
 | payment_option | [[RootPaymentMode](#RootPaymentMode)] |  yes  | Payment options |

---


 
 
 #### [PaymentModeRouteResponse](#PaymentModeRouteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_options | [PaymentOptionAndFlow](#PaymentOptionAndFlow) |  yes  | payment_options |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [RupifiBannerData](#RupifiBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  | Rupifi KYC status |
 | kyc_url | string |  no  | Rupifi KYC banner url. |

---


 
 
 #### [RupifiBannerResponse](#RupifiBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [RupifiBannerData](#RupifiBannerData) |  yes  | Rupifi KYC banner details. |
 | success | boolean |  yes  | Successful or not. |

---


 
 
 #### [EpaylaterBannerData](#EpaylaterBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  no  | Epaylater KYC status |
 | display | boolean |  yes  | Need to display banner or not |
 | message | string |  no  | ePayLater message |

---


 
 
 #### [EpaylaterBannerResponse](#EpaylaterBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [EpaylaterBannerData](#EpaylaterBannerData) |  yes  | Epaylater KYC banner details. |
 | success | boolean |  yes  | Successful or not. |

---


 
 
 #### [ResendOrCancelPaymentRequest](#ResendOrCancelPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_type | string |  yes  | Either resend or cancel |
 | order_id | string |  yes  | Unique order id |

---


 
 
 #### [LinkStatus](#LinkStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  | Link action status |
 | message | string |  yes  | Message |

---


 
 
 #### [ResendOrCancelPaymentResponse](#ResendOrCancelPaymentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LinkStatus](#LinkStatus) |  yes  | Data about link action status. |
 | success | boolean |  yes  | Response is successful or not. |

---


 
 
 #### [TransferItemsDetails](#TransferItemsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  yes  |  Beneficiary Name |
 | logo_small | string |  yes  | Beneficiary small Logo |
 | logo_large | string |  yes  | Beneficiary large Logo |
 | display_name | string |  no  | Beneficiary Display Name |
 | id | number |  yes  |   |

---


 
 
 #### [TransferModeDetails](#TransferModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  yes  | Beneficiary Mode Name |
 | items | [[TransferItemsDetails](#TransferItemsDetails)] |  no  | Beneficiary Mode Items |

---


 
 
 #### [TransferModeResponse](#TransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[TransferModeDetails](#TransferModeDetails)] |  yes  | Response Object |

---


 
 
 #### [UpdateRefundTransferModeRequest](#UpdateRefundTransferModeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | transfer_mode | string |  yes  | Transfer Mode of the Beneficiary to be added |
 | enable | boolean |  yes  | True for enabling the Transfer Mode |

---


 
 
 #### [UpdateRefundTransferModeResponse](#UpdateRefundTransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  yes  | Title Of Account |
 | subtitle | string |  yes  | SHort Title Of Account |
 | branch_name | boolean |  no  | Branch Name Of Account |
 | ifsc_code | string |  yes  | Ifsc Code Of Account |
 | account_holder | string |  yes  | Account Holder Name |
 | is_active | boolean |  yes  | Boolean Flag whether Beneficiary set or not |
 | delights_user_name | string |  no  | User Id Who filled the Beneficiary  |
 | address | string |  yes  | Address of User |
 | modified_on | string |  yes  | MOdification Date of Beneficiary |
 | account_no | string |  yes  | Account Number |
 | bank_name | string |  yes  | Bank Name Of Account |
 | created_on | string |  yes  | Creation Date of Beneficiary |
 | display_name | string |  yes  | Display Name Of Account |
 | id | number |  yes  |   |
 | comment | boolean |  no  | Remarks |
 | email | string |  yes  | EMail of User |
 | transfer_mode | string |  yes  | Transfer Mode Of Account |
 | beneficiary_id | string |  yes  | Benenficiary Id |
 | mobile | boolean |  no  | MObile no of User |

---


 
 
 #### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | show_beneficiary_details | boolean |  no  | Show beneficiary details or not. |
 | beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)] |  no  | All Beneficiaries Of An Order |

---


 
 
 #### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Not Found |
 | code | string |  yes  | Bad Request Data |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [IfscCodeResponse](#IfscCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bank_name | string |  yes  | Bank Name Of Account |
 | branch_name | string |  yes  | Branch Name Of Account |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [ErrorCodeDescription](#ErrorCodeDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Error human understandable description. |
 | code | string |  yes  | Error descrption code. |
 | success | boolean |  yes  | Response is successful or not |

---


 
 
 #### [AddBeneficiaryViaOtpVerificationRequest](#AddBeneficiaryViaOtpVerificationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hash_key | string |  yes  | Hash key of the beneficiary Id |
 | otp | string |  yes  | Otp sent to the given Mobile No |
 | request_id | string |  yes  | Request Id sent in  |

---


 
 
 #### [AddBeneficiaryViaOtpVerificationResponse](#AddBeneficiaryViaOtpVerificationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Aggregator Response of beneficicary  |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [WrongOtpError](#WrongOtpError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  yes  | Wrong OTP Code |
 | is_verified_flag | boolean |  yes  | Vefified flag. |
 | success | string |  yes  | Response is successful or not |

---


 
 
 #### [BeneficiaryModeDetails](#BeneficiaryModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_no | string |  yes  | Account NUmber of the Account Holder |
 | wallet | string |  no  |  |
 | bank_name | string |  yes  | Bank Name of the Account |
 | comment | string |  no  | Remarks added by The user |
 | address | string |  no  | Address of the User |
 | branch_name | string |  yes  | Branch Name of the Account |
 | email | string |  yes  | Email of the Account Holder |
 | ifsc_code | string |  yes  | Ifsc Code of the Account |
 | account_holder | string |  yes  | Name of the Account Holder |
 | vpa | string |  no  |  |
 | mobile | string |  yes  | Moblie Number of the User |

---


 
 
 #### [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  no  |  |
 | shipment_id | string |  yes  | Shipment Id of the respective Merchant Order Id |
 | otp | string |  no  |  |
 | order_id | string |  yes  | Merchant Order Id |
 | delights | boolean |  yes  | True if  beneficiary to be added by delights or False if by User |
 | transfer_mode | string |  yes  | Transfer Mode of the Beneficiary to be added |
 | details | [BeneficiaryModeDetails](#BeneficiaryModeDetails) |  yes  | Beneficiary bank details |

---


 
 
 #### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  yes  | Response message |
 | data | string |  no  | Refund account data. |
 | is_verified_flag | boolean |  no  |  |
 | success | boolean |  yes  | Success or failure flag. |

---


 
 
 #### [BankDetailsForOTP](#BankDetailsForOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_no | string |  yes  |  |
 | bank_name | string |  yes  |  |
 | branch_name | string |  yes  |  |
 | ifsc_code | string |  yes  |  |
 | account_holder | string |  yes  |  |

---


 
 
 #### [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [BankDetailsForOTP](#BankDetailsForOTP) |  yes  |  |
 | order_id | string |  yes  |  |

---


 
 
 #### [WalletOtpRequest](#WalletOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | string |  yes  | Wallet Moblie Number of the User |
 | country_code | string |  yes  | Country Code of the Mobile Number |

---


 
 
 #### [WalletOtpResponse](#WalletOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | request_id | string |  yes  | request id  |
 | is_verified_flag | string |  yes  | Boolean Flag whether OTP Validation is already done or not |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [SetDefaultBeneficiaryRequest](#SetDefaultBeneficiaryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiary_id | string |  yes  | Beneficiary Hash Id of the beneficiary added |
 | order_id | string |  yes  | Merchant Order Id |

---


 
 
 #### [SetDefaultBeneficiaryResponse](#SetDefaultBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_beneficiary_set | boolean |  yes  | Boolean Flag whether Beneficiary set or not |
 | success | boolean |  no  | Response is successful or not |

---


 
 
 #### [BalanceDetails](#BalanceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | formatted_value | string |  yes  | Formated Amount with currency symbol |
 | currency | string |  yes  | Currency Code |
 | value | number |  yes  | Payment amount |

---


 
 
 #### [CreditSummary](#CreditSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string |  yes  | Customer Credit status |
 | balance | [BalanceDetails](#BalanceDetails) |  no  | Credit summary of user. |
 | status_message | string |  yes  | message to customer |
 | merchant_customer_ref_id | string |  yes  | Unique aggregator customer id |

---


 
 
 #### [CustomerCreditSummaryResponse](#CustomerCreditSummaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditSummary](#CreditSummary) |  no  | Credit summary of user. |
 | success | boolean |  yes  | Payment confirmation updated or not. |

---


 
 
 #### [RedirectURL](#RedirectURL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  | Aggregator's Operation is successful or not. |
 | signup_url | string |  yes  | URL to which the user may redirect. |

---


 
 
 #### [RedirectToAggregatorResponse](#RedirectToAggregatorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [RedirectURL](#RedirectURL) |  yes  | Redirect URL. |
 | success | boolean |  yes  | Status updated or not. |

---


 
 
 #### [CreditDetail](#CreditDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  | Operation is successful or not. |
 | signup_url | string |  yes  | URL to which the user may redirect. |
 | is_registered | boolean |  yes  | User is registered with aggregator or not. |

---


 
 
 #### [CheckCreditResponse](#CheckCreditResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditDetail](#CreditDetail) |  yes  | Credit summary of user. |
 | success | boolean |  yes  | Operation is successful or not. |

---


 
 
 #### [KYCAddress](#KYCAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ownership_type | string |  no  | Address Owner Type |
 | addressline1 | string |  yes  | Address Line 1 |
 | land_mark | string |  no  | Land Mark |
 | city | string |  yes  | City |
 | pincode | string |  yes  | Pincode |
 | state | string |  yes  | State |
 | addressline2 | string |  no  | Address Line 2 |

---


 
 
 #### [UserPersonalInfoInDetails](#UserPersonalInfoInDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | gender | string |  no  | Gender |
 | phone | string |  yes  | Email |
 | driving_license | string |  no  | Driver License |
 | mobile_verified | boolean |  yes  | Is Mobile Verified or not |
 | fathers_name | string |  no  | Father's Name |
 | dob | string |  yes  | DOB |
 | address_as_per_id | [KYCAddress](#KYCAddress) |  yes  | Address details |
 | passport | string |  no  | Passport |
 | voter_id | string |  no  | Voter ID Number |
 | email | string |  yes  | Email |
 | email_verified | boolean |  yes  | Is Email Verified or not |
 | pan | string |  no  | Pan Number |
 | last_name | string |  no  | Last Name |
 | mothers_name | string |  no  | Mother's Name |
 | first_name | string |  yes  | First Name |
 | middle_name | string |  no  | middle Name |

---


 
 
 #### [MarketplaceInfo](#MarketplaceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_of_joining | string |  no  | Date of joining |
 | name | string |  yes  | Name of store |
 | membership_id | string |  yes  | merchant id |

---


 
 
 #### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fda | string |  no  | Driver License |
 | name | string |  no  | Business Name |
 | gstin | string |  no  | GSTIN Number |
 | business_ownership_type | string |  no  | business Ownershipp type(e.g Rented) |
 | vintage | string |  no  | Vintage |
 | address | [KYCAddress](#KYCAddress) |  no  | Address details |
 | entity_type | string |  no  | Busineess Entity Type |
 | fssai | string |  no  | FDA License Number |
 | business_type | string |  no  | Business Type |
 | pan | string |  no  | Pan Number |
 | shop_and_establishment | string |  no  | Shop Establishment |

---


 
 
 #### [DeviceDetails](#DeviceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identifier_type | string |  no  | Static value = ip |
 | device_type | string |  no  | Device Type(E.g. Mobile) |
 | identification_number | string |  no  | IP |
 | os | string |  no  | OS Name |
 | device_make | string |  no  | Device maker |
 | os_version | string |  no  | OS Version |
 | device_model | string |  no  | Device Model |

---


 
 
 #### [CustomerOnboardingRequest](#CustomerOnboardingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | personal_info | [UserPersonalInfoInDetails](#UserPersonalInfoInDetails) |  yes  | Credit summary of user. |
 | aggregator | string |  yes  | Aggregator Name |
 | marketplace_info | [MarketplaceInfo](#MarketplaceInfo) |  no  | Market Place info. |
 | business_info | [BusinessDetails](#BusinessDetails) |  no  | Business summary. |
 | source | string |  yes  | callbackURL |
 | device | [DeviceDetails](#DeviceDetails) |  no  | Device Details. |

---


 
 
 #### [OnboardSummary](#OnboardSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | boolean |  yes  | Operation Status |
 | redirect_url | string |  yes  | URL to which the user may redirect. |
 | session | string |  yes  | User Session |

---


 
 
 #### [CustomerOnboardingResponse](#CustomerOnboardingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [OnboardSummary](#OnboardSummary) |  yes  | Redirect URL. |
 | success | boolean |  yes  | Status updated or not. |

---




