




##### [Back to Application docs](./README.md)

## Payment Methods
Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account

* [addBeneficiaryDetails](#addbeneficiarydetails)
* [addRefundBankAccountUsingOTP](#addrefundbankaccountusingotp)
* [attachCardToCustomer](#attachcardtocustomer)
* [checkAndUpdatePaymentStatus](#checkandupdatepaymentstatus)
* [deleteUserCard](#deleteusercard)
* [enableOrDisableRefundTransferMode](#enableordisablerefundtransfermode)
* [getActiveCardAggregator](#getactivecardaggregator)
* [getActiveRefundTransferModes](#getactiverefundtransfermodes)
* [getActiveUserCards](#getactiveusercards)
* [getAggregatorsConfig](#getaggregatorsconfig)
* [getOrderBeneficiariesDetail](#getorderbeneficiariesdetail)
* [getPaymentModeRoutes](#getpaymentmoderoutes)
* [getPosPaymentModeRoutes](#getpospaymentmoderoutes)
* [getRupifiBannerDetails](#getrupifibannerdetails)
* [getUserBeneficiariesDetail](#getuserbeneficiariesdetail)
* [initialisePayment](#initialisepayment)
* [updateDefaultBeneficiary](#updatedefaultbeneficiary)
* [verifyAndChargePayment](#verifyandchargepayment)
* [verifyCustomerForPayment](#verifycustomerforpayment)
* [verifyIfscCode](#verifyifsccode)
* [verifyOtpAndAddBeneficiaryForBank](#verifyotpandaddbeneficiaryforbank)
* [verifyOtpAndAddBeneficiaryForWallet](#verifyotpandaddbeneficiaryforwallet)



## Methods with example and description




### addBeneficiaryDetails
Save bank details for cancelled/returned order



```javascript
// Promise
const promise = applicationClient.payment.addBeneficiaryDetails({  body : value });

// Async/Await
const data = await applicationClient.payment.addBeneficiaryDetails({  body : value });
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
const promise = applicationClient.payment.addRefundBankAccountUsingOTP({  body : value });

// Async/Await
const data = await applicationClient.payment.addRefundBankAccountUsingOTP({  body : value });
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


### attachCardToCustomer
Attach a saved card to customer.



```javascript
// Promise
const promise = applicationClient.payment.attachCardToCustomer({  body : value });

// Async/Await
const data = await applicationClient.payment.attachCardToCustomer({  body : value });
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


### checkAndUpdatePaymentStatus
Performs continuous polling to check status of payment on the server



```javascript
// Promise
const promise = applicationClient.payment.checkAndUpdatePaymentStatus({  body : value });

// Async/Await
const data = await applicationClient.payment.checkAndUpdatePaymentStatus({  body : value });
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


### deleteUserCard
Delete a card



```javascript
// Promise
const promise = applicationClient.payment.deleteUserCard({  body : value });

// Async/Await
const data = await applicationClient.payment.deleteUserCard({  body : value });
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


### enableOrDisableRefundTransferMode
Enable/Disable a mode for transferring a refund



```javascript
// Promise
const promise = applicationClient.payment.enableOrDisableRefundTransferMode({  body : value });

// Async/Await
const data = await applicationClient.payment.enableOrDisableRefundTransferMode({  body : value });
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


### getActiveCardAggregator
Fetch active payment gateway for card payments



```javascript
// Promise
const promise = applicationClient.payment.getActiveCardAggregator({  refresh : value });

// Async/Await
const data = await applicationClient.payment.getActiveCardAggregator({  refresh : value });
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


### getActiveRefundTransferModes
Lists the mode of refund



```javascript
// Promise
const promise = applicationClient.payment.getActiveRefundTransferModes();

// Async/Await
const data = await applicationClient.payment.getActiveRefundTransferModes();
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


### getActiveUserCards
Fetch the list of cards saved by the user



```javascript
// Promise
const promise = applicationClient.payment.getActiveUserCards({  forceRefresh : value });

// Async/Await
const data = await applicationClient.payment.getActiveUserCards({  forceRefresh : value });
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


### getAggregatorsConfig
Get payment gateway keys



```javascript
// Promise
const promise = applicationClient.payment.getAggregatorsConfig({  xApiToken : value,
 refresh : value });

// Async/Await
const data = await applicationClient.payment.getAggregatorsConfig({  xApiToken : value,
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


### getOrderBeneficiariesDetail
Lists the beneficiary of a refund



```javascript
// Promise
const promise = applicationClient.payment.getOrderBeneficiariesDetail({  orderId : value });

// Async/Await
const data = await applicationClient.payment.getOrderBeneficiariesDetail({  orderId : value });
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


### getPaymentModeRoutes
Get applicable payment options



```javascript
// Promise
const promise = applicationClient.payment.getPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 refresh : value,
 cardReference : value,
 userDetails : value });

// Async/Await
const data = await applicationClient.payment.getPaymentModeRoutes({  amount : value,
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
            "intent_app_error_list": [
              "com.csam.icici.bank.imobile",
              "in.org.npci.upiapp",
              "com.whatsapp"
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
        "payment_flow": "sdk"
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
        "cust_validation_url": "https://api.jiox0.de/gringotts/api/v1/validate-customer/"
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
const promise = applicationClient.payment.getPosPaymentModeRoutes({  amount : value,
 cartId : value,
 pincode : value,
 checkoutMode : value,
 orderType : value,
 refresh : value,
 cardReference : value,
 userDetails : value });

// Async/Await
const data = await applicationClient.payment.getPosPaymentModeRoutes({  amount : value,
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
            "intent_app_error_list": [
              "com.csam.icici.bank.imobile",
              "in.org.npci.upiapp",
              "com.whatsapp"
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
const promise = applicationClient.payment.getRupifiBannerDetails();

// Async/Await
const data = await applicationClient.payment.getRupifiBannerDetails();
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


### getUserBeneficiariesDetail
Lists the beneficiary of a refund



```javascript
// Promise
const promise = applicationClient.payment.getUserBeneficiariesDetail({  orderId : value });

// Async/Await
const data = await applicationClient.payment.getUserBeneficiariesDetail({  orderId : value });
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


### initialisePayment
Initialize a payment (server-to-server) for UPI and BharatQR



```javascript
// Promise
const promise = applicationClient.payment.initialisePayment({  body : value });

// Async/Await
const data = await applicationClient.payment.initialisePayment({  body : value });
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


### updateDefaultBeneficiary
Set a default beneficiary for a refund



```javascript
// Promise
const promise = applicationClient.payment.updateDefaultBeneficiary({  body : value });

// Async/Await
const data = await applicationClient.payment.updateDefaultBeneficiary({  body : value });
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


### verifyAndChargePayment
Verify and charge payment



```javascript
// Promise
const promise = applicationClient.payment.verifyAndChargePayment({  body : value });

// Async/Await
const data = await applicationClient.payment.verifyAndChargePayment({  body : value });
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


### verifyCustomerForPayment
Validate customer for payment



```javascript
// Promise
const promise = applicationClient.payment.verifyCustomerForPayment({  body : value });

// Async/Await
const data = await applicationClient.payment.verifyCustomerForPayment({  body : value });
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


### verifyIfscCode
Verify IFSC Code



```javascript
// Promise
const promise = applicationClient.payment.verifyIfscCode({  ifscCode : value });

// Async/Await
const data = await applicationClient.payment.verifyIfscCode({  ifscCode : value });
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


### verifyOtpAndAddBeneficiaryForBank
Verify the beneficiary details using OTP



```javascript
// Promise
const promise = applicationClient.payment.verifyOtpAndAddBeneficiaryForBank({  body : value });

// Async/Await
const data = await applicationClient.payment.verifyOtpAndAddBeneficiaryForBank({  body : value });
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
  "message": "Account successfully created"
}
```
</details>









---


### verifyOtpAndAddBeneficiaryForWallet
Send OTP on adding a wallet beneficiary



```javascript
// Promise
const promise = applicationClient.payment.verifyOtpAndAddBeneficiaryForWallet({  body : value });

// Async/Await
const data = await applicationClient.payment.verifyOtpAndAddBeneficiaryForWallet({  body : value });
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



### Schemas


#### [ActiveCardPaymentGatewayResponse](#ActiveCardPaymentGatewayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cards | [CardPaymentGateway](#CardPaymentGateway) |  no  | Card's payment gateway with customer id. |
 | message | string |  no  | Human readable message. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [BankDetailsForOTP](#BankDetailsForOTP) |  no  |  |
 | order_id | string |  no  |  |
 

---

#### [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | delights | boolean |  no  | True if  beneficiary to be added by delights or False if by User |
 | details | [BeneficiaryModeDetails](#BeneficiaryModeDetails) |  no  | Beneficiary bank details |
 | order_id | string |  no  | Merchant Order Id |
 | otp | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | shipment_id | string |  no  | Shipment Id of the respective Merchant Order Id |
 | transfer_mode | string |  no  | Transfer Mode of the Beneficiary to be added |
 

---

#### [AddBeneficiaryViaOtpVerificationRequest](#AddBeneficiaryViaOtpVerificationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hash_key | string |  no  | Hash key of the beneficiary Id |
 | otp | string |  no  | Otp sent to the given Mobile No |
 | request_id | string |  no  | Request Id sent in  |
 

---

#### [AddBeneficiaryViaOtpVerificationResponse](#AddBeneficiaryViaOtpVerificationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Aggregator Response of beneficicary  |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [AggregatorConfigDetail](#AggregatorConfigDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api | string? |  yes  | Payment gateway api endpoint |
 | config_type | string |  no  | Fynd or self payment gateway |
 | key | string |  no  | Payment gateway api key |
 | merchant_id | string? |  yes  | Unique merchant id |
 | merchant_key | string? |  yes  | Unique merchant key |
 | pin | string? |  yes  | Masked pin |
 | sdk | boolean? |  yes  | SDK |
 | secret | string |  no  | Masked payment gateway api secret |
 | user_id | string? |  yes  | Registered User id |
 | verify_api | string? |  yes  | Payment gateway verify payment api endpoint |
 

---

#### [AggregatorRoute](#AggregatorRoute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | api_link | string? |  yes  | api_link |
 | data | string? |  yes  | Data |
 | payment_flow | string? |  yes  | payment_flow |
 

---

#### [AggregatorsConfigDetailResponse](#AggregatorsConfigDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | ccavenue | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | env | string |  no  | Environment i.e Live or Test |
 | juspay | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | mswipe | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | payumoney | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | razorpay | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | rupifi | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | simpl | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | stripe | [AggregatorConfigDetail](#AggregatorConfigDetail)? |  yes  |  |
 | success | boolean |  no  |  |
 

---

#### [AttachCardRequest](#AttachCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_id | string |  no  | Card token of payment gateway. |
 | name_on_card | string? |  yes  |  |
 | nickname | string? |  yes  |  |
 | refresh | boolean? |  yes  | Refresh cache flag. |
 

---

#### [AttachCardsResponse](#AttachCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  | List of cards of customer. |
 | message | string? |  yes  | Human readable message. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [BankDetailsForOTP](#BankDetailsForOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_holder | string |  no  |  |
 | account_no | string |  no  |  |
 | bank_name | string |  no  |  |
 | branch_name | string |  no  |  |
 | ifsc_code | string |  no  |  |
 

---

#### [BeneficiaryModeDetails](#BeneficiaryModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_holder | string |  no  | Name of the Account Holder |
 | account_no | string |  no  | Account NUmber of the Account Holder |
 | address | string? |  yes  | Address of the User |
 | bank_name | string |  no  | Bank Name of the Account |
 | branch_name | string |  no  | Branch Name of the Account |
 | comment | string? |  yes  | Remarks added by The user |
 | email | string |  no  | Email of the Account Holder |
 | ifsc_code | string |  no  | Ifsc Code of the Account |
 | mobile | string |  no  | Moblie Number of the User |
 | vpa | string? |  yes  |  |
 | wallet | string? |  yes  |  |
 

---

#### [Card](#Card)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  no  | aggregator_name |
 | card_brand | string? |  yes  | card_brand |
 | card_brand_image | string? |  yes  | card_brand_image |
 | card_fingerprint | string? |  yes  | card_fingerprint |
 | card_id | string? |  yes  | card_id |
 | card_isin | string? |  yes  | card_isin |
 | card_issuer | string? |  yes  | card_issuer |
 | card_name | string? |  yes  | card_name |
 | card_number | string? |  yes  | card_number |
 | card_reference | string? |  yes  | card_reference |
 | card_token | string? |  yes  | card_token |
 | card_type | string? |  yes  | card_type |
 | exp_month | number? |  yes  | exp_month |
 | exp_year | number? |  yes  | exp_year |
 | expired | boolean? |  yes  | expired |
 | nickname | string? |  yes  | nickname |
 

---

#### [CardPaymentGateway](#CardPaymentGateway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name. |
 | api | string? |  yes  | Payment gateway CARD api endpoint |
 | customer_id | string? |  yes  | Payment gateway customer id. |
 

---

#### [ChargeCustomerRequest](#ChargeCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name i.e Simpl, Mswipe |
 | amount | number |  no  | Chargable amount of order. |
 | order_id | string |  no  | Unique order id. |
 | transaction_token | string? |  yes  | Transaction token of payment gateway. |
 | verified | boolean? |  yes  | Already Verified flag from payment gateway i.e Mswipe |
 

---

#### [ChargeCustomerResponse](#ChargeCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name i.e Simpl, Mswipe |
 | cart_id | string? |  yes  | Cart id of customer |
 | delivery_address_id | string? |  yes  | Delivery adddress id of customer |
 | message | string |  no  | Human readable message. |
 | order_id | string |  no  | Unique order id. |
 | status | string |  no  | Status of charged payment. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [DeleteCardsResponse](#DeleteCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  | Human readable message. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [DeletehCardRequest](#DeletehCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | card_id | string |  no  | Card token of payment gateway. |
 

---

#### [ErrorCodeAndDescription](#ErrorCodeAndDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | Error descrption code. |
 | description | string |  no  | Error human understandable description. |
 

---

#### [ErrorCodeDescription](#ErrorCodeDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | Error descrption code. |
 | description | string |  no  | Error human understandable description. |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [HttpErrorCodeAndResponse](#HttpErrorCodeAndResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ErrorCodeAndDescription](#ErrorCodeAndDescription) |  no  |  |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [IfscCodeResponse](#IfscCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bank_name | string |  no  | Bank Name Of Account |
 | branch_name | string |  no  | Branch Name Of Account |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [ListCardsResponse](#ListCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Card](#Card)]? |  yes  | List of cards of customer. |
 | message | string |  no  | Human readable message. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | Bad Request Data |
 | description | string |  no  | Not Found |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_holder | string |  no  | Account Holder Name |
 | account_no | string |  no  | Account Number |
 | address | string |  no  | Address of User |
 | bank_name | string |  no  | Bank Name Of Account |
 | beneficiary_id | string |  no  | Benenficiary Id |
 | branch_name | boolean? |  yes  | Branch Name Of Account |
 | comment | boolean? |  yes  | Remarks |
 | created_on | string |  no  | Creation Date of Beneficiary |
 | delights_user_name | string |  no  | User Id Who filled the Beneficiary  |
 | display_name | string |  no  | Display Name Of Account |
 | email | string |  no  | EMail of User |
 | id | number |  no  |   |
 | ifsc_code | string |  no  | Ifsc Code Of Account |
 | is_active | boolean |  no  | Boolean Flag whether Beneficiary set or not |
 | mobile | boolean? |  yes  | MObile no of User |
 | modified_on | string |  no  | MOdification Date of Beneficiary |
 | subtitle | string |  no  | SHort Title Of Account |
 | title | string |  no  | Title Of Account |
 | transfer_mode | string |  no  | Transfer Mode Of Account |
 

---

#### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)] |  no  | All Beneficiaries Of An Order |
 | show_beneficiary_details | boolean? |  yes  | Show beneficiary details or not. |
 

---

#### [PaymentFlow](#PaymentFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bqr_razorpay | [AggregatorRoute](#AggregatorRoute)? |  yes  | BQR_Razorpay |
 | ccavenue | [AggregatorRoute](#AggregatorRoute)? |  yes  | Ccavenue |
 | fynd | [AggregatorRoute](#AggregatorRoute)? |  yes  | Fynd |
 | juspay | [AggregatorRoute](#AggregatorRoute)? |  yes  | Juspay |
 | mswipe | [AggregatorRoute](#AggregatorRoute)? |  yes  | mswipe |
 | payubiz | [AggregatorRoute](#AggregatorRoute)? |  yes  | Payubiz |
 | razorpay | [AggregatorRoute](#AggregatorRoute)? |  yes  | Razorpay |
 | rupifi | [AggregatorRoute](#AggregatorRoute)? |  yes  | Rupifi |
 | simpl | [AggregatorRoute](#AggregatorRoute)? |  yes  | simpl |
 | stripe | [AggregatorRoute](#AggregatorRoute)? |  yes  | Stripe |
 | upi_razorpay | [AggregatorRoute](#AggregatorRoute)? |  yes  | UPI_Razorpay |
 

---

#### [PaymentInitializationRequest](#PaymentInitializationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name |
 | aggregator_order_id | string |  no  | Payment gateway order id |
 | customer_id | string |  no  | Payment gateway customer id. |
 | merchant_order_id | string |  no  | Unique fynd order id |
 | method | string |  no  | Payment method |
 | polling_url | string |  no  | Polling url to check payment status |
 | razorpay_payment_id | string |  no  | Payment gateway payment id |
 | timeout | number |  no  | Payment polling timeout if not recieved response |
 | virtual_id | string? |  yes  | Bharat QR code virtual id |
 

---

#### [PaymentInitializationResponse](#PaymentInitializationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name |
 | aggregator_order_id | string? |  yes  | Payment order id |
 | amount | number? |  yes  | Payable amount. |
 | bqr_image | string? |  yes  | Bharath qr image url. |
 | currency | string? |  yes  | Currency code. |
 | customer_id | string? |  yes  | Payment gateway customer id. |
 | merchant_order_id | string |  no  | order id |
 | method | string |  no  | Payment method |
 | polling_url | string |  no  | Polling url. |
 | razorpay_payment_id | string? |  yes  | Payment  id. |
 | status | string? |  yes  | Status of payment. |
 | success | boolean |  no  | Response is successful or not. |
 | timeout | number? |  yes  | timeout. |
 | virtual_id | string? |  yes  | Payment virtual address. |
 | vpa | string? |  yes  | Customer vpa address |
 

---

#### [PaymentModeList](#PaymentModeList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  no  | aggregator_name |
 | card_brand | string? |  yes  | card_brand |
 | card_brand_image | string? |  yes  | card_brand_image |
 | card_fingerprint | string? |  yes  | card_fingerprint |
 | card_id | string? |  yes  | card_id |
 | card_isin | string? |  yes  | card_isin |
 | card_issuer | string? |  yes  | card_issuer |
 | card_name | string? |  yes  | card_name |
 | card_number | string? |  yes  | card_number |
 | card_reference | string? |  yes  | card_reference |
 | card_token | string? |  yes  | card_token |
 | card_type | string? |  yes  | card_type |
 | code | string? |  yes  | code |
 | display_name | string? |  yes  | display name |
 | display_priority | number? |  yes  | Dispaly Priority |
 | exp_month | number? |  yes  | exp_month |
 | exp_year | number? |  yes  | exp_year |
 | expired | boolean? |  yes  | expired |
 | fynd_vpa | string? |  yes  | fynd_vpa |
 | intent_app_error_list | [string]? |  yes  | intent_app_error_list |
 | intent_flow | boolean? |  yes  | intent_flow |
 | logo_url | [PaymentModeLogo](#PaymentModeLogo)? |  yes  | Logo |
 | merchant_code | string? |  yes  | merchant code |
 | name | string? |  yes  | name |
 | nickname | string? |  yes  | nickname |
 | retry_count | number? |  yes  | retry_count |
 | timeout | number? |  yes  | timeout |
 

---

#### [PaymentModeLogo](#PaymentModeLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | large | string |  no  | large |
 | small | string |  no  | smalll |
 

---

#### [PaymentModeRouteResponse](#PaymentModeRouteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_options | [PaymentOptionAndFlow](#PaymentOptionAndFlow) |  no  | payment_options |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [PaymentOptionAndFlow](#PaymentOptionAndFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_flows | [PaymentFlow](#PaymentFlow) |  no  | payment_flows |
 | payment_option | [[RootPaymentMode](#RootPaymentMode)] |  no  | Payment options |
 

---

#### [PaymentStatusUpdateRequest](#PaymentStatusUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name |
 | amount | number |  no  | Payable amount. |
 | contact | string |  no  | Customer valid mobile number |
 | currency | string |  no  | Currency code. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | email | string |  no  | Customer valid email |
 | merchant_order_id | string |  no  | Unique fynd order id |
 | method | string |  no  | Payment method |
 | order_id | string |  no  | Payment gateway order id |
 | status | string |  no  | Status of payment. |
 | vpa | string |  no  | Customer vpa address |
 

---

#### [PaymentStatusUpdateResponse](#PaymentStatusUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string |  no  | Payment gateway name |
 | retry | boolean |  no  | Response is successful or not. |
 | status | string |  no  | Payment status |
 

---

#### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  | Refund account data. |
 | is_verified_flag | boolean? |  yes  |  |
 | message | string |  no  | Response message |
 | success | boolean |  no  | Success or failure flag. |
 

---

#### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | add_card_enabled | boolean? |  yes  | Annonymous card flag |
 | aggregator_name | string? |  yes  | Dispaly Priority |
 | anonymous_enable | boolean? |  yes  | Annonymous card flag |
 | display_name | string |  no  | Payment mode display name |
 | display_priority | number |  no  | Dispaly Priority |
 | list | [[PaymentModeList](#PaymentModeList)]? |  yes  | Payment mode |
 | name | string |  no  | Payment mode name |
 

---

#### [RupifiBannerData](#RupifiBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | kyc_url | string? |  yes  | Rupifi KYC banner url. |
 | status | string? |  yes  | Rupifi KYC status |
 

---

#### [RupifiBannerResponse](#RupifiBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [RupifiBannerData](#RupifiBannerData) |  no  | Rupifi KYC banner details. |
 | success | boolean |  no  | Successful or not. |
 

---

#### [SetDefaultBeneficiaryRequest](#SetDefaultBeneficiaryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiary_id | string |  no  | Beneficiary Hash Id of the beneficiary added |
 | order_id | string |  no  | Merchant Order Id |
 

---

#### [SetDefaultBeneficiaryResponse](#SetDefaultBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_beneficiary_set | boolean |  no  | Boolean Flag whether Beneficiary set or not |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [TransferItemsDetails](#TransferItemsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | boolean? |  yes  | Beneficiary Display Name |
 | id | string |  no  |   |
 | logo_large | string |  no  | Beneficiary large Logo |
 | logo_small | string |  no  | Beneficiary small Logo |
 | name | string |  no  |  Beneficiary Name |
 

---

#### [TransferModeDetails](#TransferModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_name | string |  no  | Beneficiary Mode Name |
 | items | [[TransferItemsDetails](#TransferItemsDetails)]? |  yes  | Beneficiary Mode Items |
 

---

#### [TransferModeResponse](#TransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[TransferModeDetails](#TransferModeDetails)] |  no  | Response Object |
 

---

#### [UpdateRefundTransferModeRequest](#UpdateRefundTransferModeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | enable | boolean |  no  | True for enabling the Transfer Mode |
 | transfer_mode | string |  no  | Transfer Mode of the Beneficiary to be added |
 

---

#### [UpdateRefundTransferModeResponse](#UpdateRefundTransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [ValidateCustomerRequest](#ValidateCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name in camel case i.e Simpl, Rupifi |
 | merchant_params | string |  no  | Extra meta fields. |
 | payload | string |  no  | Hashed payload string. |
 | phone_number | string |  no  | User mobile number without country code. |
 | transaction_amount_in_paise | number |  no  | Payable amount in paise |
 

---

#### [ValidateCustomerResponse](#ValidateCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string |  no  | Payment gateway response data |
 | message | string |  no  | Error or success message. |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [WalletOtpRequest](#WalletOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string |  no  | Country Code of the Mobile Number |
 | mobile | string |  no  | Wallet Moblie Number of the User |
 

---

#### [WalletOtpResponse](#WalletOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_verified_flag | string |  no  | Boolean Flag whether OTP Validation is already done or not |
 | request_id | string |  no  | request id  |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [WrongOtpError](#WrongOtpError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  | Wrong OTP Code |
 | is_verified_flag | boolean |  no  | Vefified flag. |
 | success | string |  no  | Response is successful or not |
 

---




