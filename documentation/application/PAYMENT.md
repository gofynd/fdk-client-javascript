




##### [Back to Application docs](./README.md)

## Payment Methods
Collect payment through many payment gateway i.e Stripe, Razorpay, Juspay etc.into Fynd or Self account

* [addBeneficiaryDetails](#addbeneficiarydetails)
* [addRefundBankAccountUsingOTP](#addrefundbankaccountusingotp)
* [attachCardToCustomer](#attachcardtocustomer)
* [cancelPaymentLink](#cancelpaymentlink)
* [checkAndUpdatePaymentStatus](#checkandupdatepaymentstatus)
* [checkAndUpdatePaymentStatusPaymentLink](#checkandupdatepaymentstatuspaymentlink)
* [checkCredit](#checkcredit)
* [createOrderHandlerPaymentLink](#createorderhandlerpaymentlink)
* [createPaymentLink](#createpaymentlink)
* [customerCreditSummary](#customercreditsummary)
* [customerOnboard](#customeronboard)
* [deleteUserCard](#deleteusercard)
* [enableOrDisableRefundTransferMode](#enableordisablerefundtransfermode)
* [getActiveCardAggregator](#getactivecardaggregator)
* [getActiveRefundTransferModes](#getactiverefundtransfermodes)
* [getActiveUserCards](#getactiveusercards)
* [getAggregatorsConfig](#getaggregatorsconfig)
* [getEpaylaterBannerDetails](#getepaylaterbannerdetails)
* [getOrderBeneficiariesDetail](#getorderbeneficiariesdetail)
* [getPaymentLink](#getpaymentlink)
* [getPaymentModeRoutes](#getpaymentmoderoutes)
* [getPaymentModeRoutesPaymentLink](#getpaymentmoderoutespaymentlink)
* [getPosPaymentModeRoutes](#getpospaymentmoderoutes)
* [getRupifiBannerDetails](#getrupifibannerdetails)
* [getUserBeneficiariesDetail](#getuserbeneficiariesdetail)
* [initialisePayment](#initialisepayment)
* [initialisePaymentPaymentLink](#initialisepaymentpaymentlink)
* [pollingPaymentLink](#pollingpaymentlink)
* [redirectToAggregator](#redirecttoaggregator)
* [renderHTML](#renderhtml)
* [resendOrCancelPayment](#resendorcancelpayment)
* [resendPaymentLink](#resendpaymentlink)
* [updateDefaultBeneficiary](#updatedefaultbeneficiary)
* [validateVPA](#validatevpa)
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


### cancelPaymentLink
Cancel payment link



```javascript
// Promise
const promise = applicationClient.payment.cancelPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.cancelPaymentLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CancelOrResendPaymentLinkRequest](#CancelOrResendPaymentLinkRequest) | yes | Request body |


Use this API to cancel a payment link for the customer

*Returned Response:*




[CancelPaymentLinkResponse](#CancelPaymentLinkResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment link cancelled",
  "status_code": 200
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


### checkAndUpdatePaymentStatusPaymentLink
Performs continuous polling to check status of payment on the server



```javascript
// Promise
const promise = applicationClient.payment.checkAndUpdatePaymentStatusPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.checkAndUpdatePaymentStatusPaymentLink({  body : value });
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


### checkCredit
API to fetch the customer credit summary



```javascript
// Promise
const promise = applicationClient.payment.checkCredit({  aggregator : value });

// Async/Await
const data = await applicationClient.payment.checkCredit({  aggregator : value });
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


### createOrderHandlerPaymentLink
Create Order user



```javascript
// Promise
const promise = applicationClient.payment.createOrderHandlerPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.createOrderHandlerPaymentLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreateOrderUserRequest](#CreateOrderUserRequest) | yes | Request body |


Use this API to create a order and payment on aggregator side

*Returned Response:*




[CreateOrderUserResponse](#CreateOrderUserResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "",
  "success": true,
  "data": {
    "amount": 2190000,
    "order_id": "order_JeaZ5ryKO01rno",
    "email": "abc@example.com",
    "contact": "9999999999",
    "currency": "INR",
    "customer_id": "cust_CZgcLVGsGP8BUQ",
    "callback_url": "https://api.fyndx0.com/service/webhooks/payment/v1.0/callback/link/?razorpay_order_id=order_JeaZ5ryKO01rno",
    "method": "upi",
    "aggregator": "Razorpay",
    "merchant_order_id": "FY629EDC0980B6A8C1EA"
  },
  "callback_url": "https://api.fyndx0.com/service/webhooks/payment/v1.0/callback/link/?razorpay_order_id=order_JeaZ5ryKO01rno",
  "payment_confirm_url": "https://api.fyndx0.com/service/webhooks/payment/v1.0/callback/link/?razorpay_order_id=order_JeaZ5ryKO01rno",
  "order_id": "FY629EDC0980B6A8C1EA"
}
```
</details>









---


### createPaymentLink
Create payment link



```javascript
// Promise
const promise = applicationClient.payment.createPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.createPaymentLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CreatePaymentLinkRequest](#CreatePaymentLinkRequest) | yes | Request body |


Use this API to create a payment link for the customer

*Returned Response:*




[CreatePaymentLinkResponse](#CreatePaymentLinkResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment link created",
  "status_code": 200,
  "payment_link_url": "https://api.fyndx0.de/service/application/payment/v1.0/payment/options/link/?id=96b15ea2014a76c8d2774783e239ce26&refresh=false",
  "payment_link_id": "96b15ea2014a76c8d2774783e239ce26",
  "polling_timeout": 480
}
```
</details>









---


### customerCreditSummary
API to fetch the customer credit summary



```javascript
// Promise
const promise = applicationClient.payment.customerCreditSummary({  aggregator : value });

// Async/Await
const data = await applicationClient.payment.customerCreditSummary({  aggregator : value });
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


### customerOnboard
API to fetch the customer credit summary



```javascript
// Promise
const promise = applicationClient.payment.customerOnboard({  body : value });

// Async/Await
const data = await applicationClient.payment.customerOnboard({  body : value });
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
      "card_brand_image": "https://hdn-1.fynd.com/payment/visa.png",
      "compliant_with_tokenisation_guidelines": true
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


### getEpaylaterBannerDetails
Get Epaylater Enabled



```javascript
// Promise
const promise = applicationClient.payment.getEpaylaterBannerDetails();

// Async/Await
const data = await applicationClient.payment.getEpaylaterBannerDetails();
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


### getPaymentLink
Get payment link



```javascript
// Promise
const promise = applicationClient.payment.getPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await applicationClient.payment.getPaymentLink({  paymentLinkId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| paymentLinkId | string | no |  |  



Use this API to get a payment link

*Returned Response:*




[GetPaymentLinkResponse](#GetPaymentLinkResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment link",
  "status_code": 200,
  "payment_link_current_status": "resent",
  "payment_link_url": "https://api.fyndx0.de/service/application/payment/v1.0/payment/options/link/?id=4adb4451720a82ee69a3c1c4cc9ab442&refresh=false",
  "external_order_id": "FY62614DF9D5CF31D3D0",
  "amount": 21900,
  "merchant_name": "Fynd",
  "polling_timeout": 1800
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
        "name": "COD",
        "display_name": "Cash on Delivery",
        "display_priority": 1,
        "payment_mode_id": 11,
        "aggregator_name": "Fynd",
        "logo": "https://hdn-1.fynd.com/payment/cod.png",
        "logo_url": {
          "small": "https://hdn-1.fynd.com/payment/cod.png",
          "large": "https://hdn-1.fynd.com/payment/cod.png"
        },
        "list": [
          {
            "cod_limit": 1000,
            "remaining_limit": 100
          }
        ]
      },
      {
        "name": "CARD",
        "display_priority": 2,
        "payment_mode_id": 2,
        "display_name": "Card",
        "list": [],
        "anonymous_enable": true,
        "aggregator_name": "Razorpay",
        "add_card_enabled": false,
        "save_card": true
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
          },
          {
            "aggregator_name": "Potlee",
            "name": "POTLEE",
            "display_name": "Potlee",
            "code": "POTLEE",
            "merchant_code": "POTLEE",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Potlee.png",
              "small": "https://hdn-1.fynd.com/payment/Potlee.png"
            }
          }
        ]
      },
      {
        "name": "JIOPP",
        "display_priority": 15,
        "payment_mode_id": 15,
        "display_name": "Jio Partner Pay",
        "list": [
          {
            "aggregator_name": "Jio",
            "name": "JioPP",
            "display_name": "Jio Partner Pay",
            "code": "JIOPP",
            "logo_url": {
              "large": "https://hdn-1.fynd.com/payment/Pos+Logo.png",
              "small": "https://hdn-1.fynd.com/payment/Pos+Logo.png"
            },
            "merchant_code": "JIOPP"
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
      "potlee": {
        "data": {
          "gateway": {
            "route": "potlee",
            "entity": "api",
            "is_customer_validation_required": true,
            "cust_validation_url": "https://api.fyndx0.de/gringotts/api/v1/validate-customer/",
            "return_url": null
          },
          "payment_flow_data": {
            "is_customer_validation_required": true,
            "cust_validation_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/callback/",
            "config": {
              "redirect": true,
              "final_payment_action_url": "https://api.fyndx0.de/platform/payment/v2/external/payments/callback/"
            },
            "return_url": null
          }
        },
        "api_link": "",
        "payment_flow": "api",
        "payment_flow_data": {
          "return_url": null,
          "cust_validation_url": "https://api.fyndx0.de/gringotts/api/v1/validate-customer/",
          "is_customer_validation_required": true
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
      },
      "Jio": {
        "data": {},
        "api_link": "",
        "payment_flow": "api"
      }
    }
  }
}
```
</details>









---


### getPaymentModeRoutesPaymentLink
Get applicable payment options for payment link



```javascript
// Promise
const promise = applicationClient.payment.getPaymentModeRoutesPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await applicationClient.payment.getPaymentModeRoutesPaymentLink({  paymentLinkId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| paymentLinkId | string | yes | Payment link id |  



Use this API to get all valid payment options for doing a payment through payment link

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
        "add_card_enabled": false,
        "is_pay_by_card_pl": true
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


### initialisePaymentPaymentLink
Initialize a payment (server-to-server) for UPI and BharatQR



```javascript
// Promise
const promise = applicationClient.payment.initialisePaymentPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.initialisePaymentPaymentLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PaymentInitializationRequest](#PaymentInitializationRequest) | yes | Request body |


Use this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.

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


### pollingPaymentLink
Used for polling if payment successful or not



```javascript
// Promise
const promise = applicationClient.payment.pollingPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await applicationClient.payment.pollingPaymentLink({  paymentLinkId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| paymentLinkId | string | no |  |  



Use this API to poll if payment through payment was successful or not

*Returned Response:*




[PollingPaymentLinkResponse](#PollingPaymentLinkResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "aggregator_name": "Fynd",
  "status": "complete",
  "redirect_url": "https://api.fyndx0.de/service/application/order/v1.0/orders/?success=true&order_id=FY62B3FF87016F24A4E6&aggregator_name=Fynd&cart_id=412&delivery_address_id=136&billing_address_id=136",
  "payment_link_id": "223d2a8df39a5dcdd8525498bee73199",
  "amount": 21900,
  "order_id": "FY62B3FF87016F24A4E6",
  "status_code": 200
}
```
</details>









---


### redirectToAggregator
API to get the redirect url to redirect the user to aggregator's page



```javascript
// Promise
const promise = applicationClient.payment.redirectToAggregator({  source : value,
 aggregator : value });

// Async/Await
const data = await applicationClient.payment.redirectToAggregator({  source : value,
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


### renderHTML
Convert base64 string to HTML form



```javascript
// Promise
const promise = applicationClient.payment.renderHTML({  body : value });

// Async/Await
const data = await applicationClient.payment.renderHTML({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [renderHTMLRequest](#renderHTMLRequest) | yes | Request body |


Use this API to decode base64 html form to plain HTML string.

*Returned Response:*




[renderHTMLResponse](#renderHTMLResponse)

Success and return HTML decoded text




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "html": "<html><body>Your HTML text</body></html>"
}
```
</details>









---


### resendOrCancelPayment
API to resend and cancel a payment link which was already generated.



```javascript
// Promise
const promise = applicationClient.payment.resendOrCancelPayment({  body : value });

// Async/Await
const data = await applicationClient.payment.resendOrCancelPayment({  body : value });
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


### resendPaymentLink
Resend payment link



```javascript
// Promise
const promise = applicationClient.payment.resendPaymentLink({  body : value });

// Async/Await
const data = await applicationClient.payment.resendPaymentLink({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CancelOrResendPaymentLinkRequest](#CancelOrResendPaymentLinkRequest) | yes | Request body |


Use this API to resend a payment link for the customer

*Returned Response:*




[ResendPaymentLinkResponse](#ResendPaymentLinkResponse)

Success. Check the example shown below




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "message": "Payment link resent",
  "status_code": 200,
  "polling_timeout": 480
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


### validateVPA
API to Validate UPI ID



```javascript
// Promise
const promise = applicationClient.payment.validateVPA({  body : value });

// Async/Await
const data = await applicationClient.payment.validateVPA({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ValidateVPARequest](#ValidateVPARequest) | yes | Request body |


API to Validate UPI ID

*Returned Response:*




[ValidateVPAResponse](#ValidateVPAResponse)

Success. Returns the status of payment. Check the example shown below or refer `ValidateVPAResponseSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "data": {
    "upi_vpa": "success@razorpay",
    "status": "VALID",
    "is_valid": true,
    "customer_name": "Verified"
  }
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
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; success is True i.e user is allowed</i></summary>

```json
{
  "value": {
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
}
```
</details>

<details>
<summary><i>&nbsp; success is True i.e user not allowed</i></summary>

```json
{
  "value": {
    "success": false,
    "message": "data fetched",
    "error": {
      "api_version": 2,
      "data": {
        "approved": false,
        "button_text": "Buy Now, Pay Later",
        "first_transaction": false
      },
      "aggregator": "Simpl"
    },
    "data": {}
  }
}
```
</details>

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
 | payment_flow_data | string? |  yes  | payment_flow_data |
 

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

#### [BalanceDetails](#BalanceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  | Currency Code |
 | formatted_value | string |  no  | Formated Amount with currency symbol |
 | value | number |  no  | Payment amount |
 

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

#### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [KYCAddress](#KYCAddress)? |  yes  | Address details |
 | business_ownership_type | string? |  yes  | business Ownershipp type(e.g Rented) |
 | business_type | string? |  yes  | Business Type |
 | entity_type | string? |  yes  | Busineess Entity Type |
 | fda | string? |  yes  | Driver License |
 | fssai | string? |  yes  | FDA License Number |
 | gstin | string? |  yes  | GSTIN Number |
 | name | string? |  yes  | Business Name |
 | pan | string? |  yes  | Pan Number |
 | shop_and_establishment | string? |  yes  | Shop Establishment |
 | vintage | string? |  yes  | Vintage |
 

---

#### [CancelOrResendPaymentLinkRequest](#CancelOrResendPaymentLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | payment_link_id | string |  no  | Unique id of payment link |
 

---

#### [CancelPaymentLinkResponse](#CancelPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Message |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

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
 | compliant_with_tokenisation_guidelines | boolean? |  yes  | If card is tokenised or not |
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

#### [CheckCreditResponse](#CheckCreditResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditDetail](#CreditDetail) |  no  | Credit summary of user. |
 | success | boolean |  no  | Operation is successful or not. |
 

---

#### [CreateOrderUserData](#CreateOrderUserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string? |  yes  | Aggregator name |
 | amount | number? |  yes  | Amount |
 | callback_url | string? |  yes  | Callback url for aggregator |
 | contact | string? |  yes  | Mobile number |
 | currency | string? |  yes  | Currency |
 | customer_id | string? |  yes  | Aggregator customer id |
 | email | string? |  yes  | Email |
 | merchant_order_id | string? |  yes  | Merchant order id |
 | method | string? |  yes  | Method |
 | order_id | string? |  yes  | Aggregator order id |
 

---

#### [CreateOrderUserPaymentMethods](#CreateOrderUserPaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | meta | [PaymentMethodsMeta](#PaymentMethodsMeta) |  no  | Meta |
 | mode | string |  no  | Payment mode |
 | name | string |  no  | Payment mode name |
 

---

#### [CreateOrderUserRequest](#CreateOrderUserRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  | Currency |
 | failure_callback_url | string |  no  | Failure page url |
 | meta | string? |  yes  | Meta |
 | payment_link_id | string |  no  | Unique id of payment link |
 | payment_methods | [CreateOrderUserPaymentMethods](#CreateOrderUserPaymentMethods) |  no  | Payment method details |
 | success_callback_url | string |  no  | Success  page url |
 

---

#### [CreateOrderUserResponse](#CreateOrderUserResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | callback_url | string? |  yes  | Callback url for aggregator |
 | data | [CreateOrderUserData](#CreateOrderUserData)? |  yes  |  |
 | message | string |  no  | Message |
 | order_id | string? |  yes  | Merchant order id |
 | payment_confirm_url | string? |  yes  | Payment confirm url for aggregator |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

---

#### [CreatePaymentLinkMeta](#CreatePaymentLinkMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | string |  no  |  |
 | assign_card_id | string? |  yes  |  |
 | cart_id | string |  no  |  |
 | checkout_mode | string |  no  |  |
 | pincode | string |  no  |  |
 

---

#### [CreatePaymentLinkRequest](#CreatePaymentLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number |  no  | Total value of order |
 | description | string? |  yes  | Merchant order id |
 | email | string |  no  | Email to which the payment link is to be sent |
 | external_order_id | string |  no  | Merchant order id |
 | meta | [CreatePaymentLinkMeta](#CreatePaymentLinkMeta) |  no  | Meta |
 | mobile_number | string |  no  | Mobile number to which the payment link is to be sent |
 

---

#### [CreatePaymentLinkResponse](#CreatePaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Message |
 | payment_link_id | string? |  yes  | Unique id of payment link |
 | payment_link_url | string? |  yes  | Url of payment link |
 | polling_timeout | number? |  yes  | Polling request timeout |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

---

#### [CreditDetail](#CreditDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_registered | boolean |  no  | User is registered with aggregator or not. |
 | signup_url | string |  no  | URL to which the user may redirect. |
 | status | boolean |  no  | Operation is successful or not. |
 

---

#### [CreditSummary](#CreditSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | balance | [BalanceDetails](#BalanceDetails)? |  yes  | Credit summary of user. |
 | merchant_customer_ref_id | string |  no  | Unique aggregator customer id |
 | status | string |  no  | Customer Credit status |
 | status_message | string |  no  | message to customer |
 

---

#### [CustomerCreditSummaryResponse](#CustomerCreditSummaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [CreditSummary](#CreditSummary)? |  yes  | Credit summary of user. |
 | success | boolean |  no  | Payment confirmation updated or not. |
 

---

#### [CustomerOnboardingRequest](#CustomerOnboardingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Aggregator Name |
 | business_info | [BusinessDetails](#BusinessDetails)? |  yes  | Business summary. |
 | device | [DeviceDetails](#DeviceDetails)? |  yes  | Device Details. |
 | marketplace_info | [MarketplaceInfo](#MarketplaceInfo)? |  yes  | Market Place info. |
 | mcc | string? |  yes  | Mcc |
 | personal_info | [UserPersonalInfoInDetails](#UserPersonalInfoInDetails) |  no  | Credit summary of user. |
 | source | string |  no  | callbackURL |
 

---

#### [CustomerOnboardingResponse](#CustomerOnboardingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [OnboardSummary](#OnboardSummary) |  no  | Redirect URL. |
 | success | boolean |  no  | Status updated or not. |
 

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

#### [DeviceDetails](#DeviceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | device_make | string? |  yes  | Device maker |
 | device_model | string? |  yes  | Device Model |
 | device_type | string? |  yes  | Device Type(E.g. Mobile) |
 | identification_number | string? |  yes  | IP |
 | identifier_type | string? |  yes  | Static value = ip |
 | os | string? |  yes  | OS Name |
 | os_version | string? |  yes  | OS Version |
 

---

#### [EpaylaterBannerData](#EpaylaterBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | boolean |  no  | Need to display banner or not |
 | message | string? |  yes  | ePayLater message |
 | status | string? |  yes  | Epaylater KYC status |
 

---

#### [EpaylaterBannerResponse](#EpaylaterBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [EpaylaterBannerData](#EpaylaterBannerData) |  no  | Epaylater KYC banner details. |
 | success | boolean |  no  | Successful or not. |
 

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

#### [ErrorDescription](#ErrorDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Amount paid |
 | cancelled | boolean? |  yes  | Payment link is cancelled or not |
 | expired | boolean? |  yes  | Payment link expired or not |
 | invalid_id | boolean? |  yes  | Payment link id is valid or not |
 | merchant_name | string? |  yes  | Name of merchant that created payment link |
 | merchant_order_id | string? |  yes  | Order id |
 | msg | string? |  yes  | Message |
 | payment_transaction_id | string? |  yes  | Payment transaction id |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | [ErrorDescription](#ErrorDescription)? |  yes  |  |
 | message | string |  no  | Message |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

---

#### [GetPaymentLinkResponse](#GetPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Total value of order |
 | external_order_id | string? |  yes  | Merchant order id |
 | merchant_name | string? |  yes  | Merchant name |
 | message | string |  no  | Message |
 | payment_link_current_status | string? |  yes  | Status of payment link |
 | payment_link_url | string? |  yes  | Url of payment link |
 | polling_timeout | number? |  yes  | Polling request timeout |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

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

#### [IntentApp](#IntentApp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | code |
 | display_name | string? |  yes  | display_name |
 | logos | [PaymentModeLogo](#PaymentModeLogo)? |  yes  | logos |
 | package_name | string? |  yes  | package_name |
 

---

#### [IntentAppErrorList](#IntentAppErrorList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  | code |
 | package_name | string? |  yes  | package_name |
 

---

#### [KYCAddress](#KYCAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | addressline1 | string |  no  | Address Line 1 |
 | addressline2 | string? |  yes  | Address Line 2 |
 | city | string |  no  | City |
 | land_mark | string? |  yes  | Land Mark |
 | ownership_type | string? |  yes  | Address Owner Type |
 | pincode | string |  no  | Pincode |
 | state | string |  no  | State |
 

---

#### [LinkStatus](#LinkStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Message |
 | status | boolean |  no  | Link action status |
 

---

#### [ListCardsResponse](#ListCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[Card](#Card)]? |  yes  | List of cards of customer. |
 | message | string |  no  | Human readable message. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [MarketplaceInfo](#MarketplaceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | date_of_joining | string? |  yes  | Date of joining |
 | membership_id | string |  no  | merchant id |
 | name | string |  no  | Name of store |
 

---

#### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string |  no  | Bad Request Data |
 | description | string |  no  | Not Found |
 | success | boolean |  no  | Response is successful or not |
 

---

#### [OnboardSummary](#OnboardSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | redirect_url | string |  no  | URL to which the user may redirect. |
 | session | string |  no  | User Session |
 | status | boolean |  no  | Operation Status |
 

---

#### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_holder | string |  no  | Account Holder Name |
 | account_no | string |  no  | Account Number |
 | address | string |  no  | Address of User |
 | bank_name | string |  no  | Bank Name Of Account |
 | beneficiary_id | string |  no  | Benenficiary Id |
 | branch_name | string? |  yes  | Branch Name Of Account |
 | comment | string? |  yes  | Remarks |
 | created_on | string |  no  | Creation Date of Beneficiary |
 | delights_user_name | string? |  yes  | User Id Who filled the Beneficiary  |
 | display_name | string |  no  | Display Name Of Account |
 | email | string |  no  | EMail of User |
 | id | number |  no  |   |
 | ifsc_code | string |  no  | Ifsc Code Of Account |
 | is_active | boolean |  no  | Boolean Flag whether Beneficiary set or not |
 | mobile | string? |  yes  | MObile no of User |
 | modified_on | string |  no  | MOdification Date of Beneficiary |
 | subtitle | string |  no  | SHort Title Of Account |
 | title | string |  no  | Title Of Account |
 | transfer_mode | string |  no  | Transfer Mode Of Account |
 

---

#### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)]? |  yes  | All Beneficiaries Of An Order |
 | show_beneficiary_details | boolean? |  yes  | Show beneficiary details or not. |
 

---

#### [PaymentFlow](#PaymentFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bqr_razorpay | [AggregatorRoute](#AggregatorRoute)? |  yes  | BQR_Razorpay |
 | ccavenue | [AggregatorRoute](#AggregatorRoute)? |  yes  | Ccavenue |
 | epaylater | [AggregatorRoute](#AggregatorRoute)? |  yes  | Epaylater |
 | fynd | [AggregatorRoute](#AggregatorRoute)? |  yes  | Fynd |
 | jiopay | [AggregatorRoute](#AggregatorRoute)? |  yes  | Jiopay |
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
 | amount | number |  no  | Payable amount. |
 | contact | string |  no  | Customer valid mobile number |
 | currency | string |  no  | Currency code. |
 | customer_id | string |  no  | Payment gateway customer id. |
 | email | string |  no  | Customer valid email |
 | merchant_order_id | string |  no  | Unique fynd order id |
 | method | string |  no  | Payment method |
 | order_id | string |  no  | Payment gateway order id |
 | razorpay_payment_id | string? |  yes  | Payment gateway payment id |
 | timeout | number? |  yes  | Payment polling timeout if not recieved response |
 | vpa | string? |  yes  | Customer vpa address |
 

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
 | upi_poll_url | string? |  yes  | UPI poll url. |
 | virtual_id | string? |  yes  | Payment virtual address. |
 | vpa | string? |  yes  | Customer vpa address |
 

---

#### [PaymentMethodsMeta](#PaymentMethodsMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | merchant_code | string |  no  | Merchant code |
 | payment_gateway | string |  no  | Payment gateway name |
 | payment_identifier | string |  no  | Payment identifier |
 

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
 | cod_limit | number? |  yes  | cod limit |
 | cod_limit_per_order | number? |  yes  | Cod limit per order |
 | code | string? |  yes  | code |
 | compliant_with_tokenisation_guidelines | boolean? |  yes  | If card is tokenised or not |
 | display_name | string? |  yes  | display name |
 | display_priority | number? |  yes  | Dispaly Priority |
 | exp_month | number? |  yes  | exp_month |
 | exp_year | number? |  yes  | exp_year |
 | expired | boolean? |  yes  | expired |
 | fynd_vpa | string? |  yes  | fynd_vpa |
 | intent_app | [[IntentApp](#IntentApp)]? |  yes  | intent_app |
 | intent_app_error_dict_list | [[IntentAppErrorList](#IntentAppErrorList)]? |  yes  | intent_app_error_dict_list |
 | intent_app_error_list | [string]? |  yes  | intent_app_error_list |
 | intent_flow | boolean? |  yes  | intent_flow |
 | logo_url | [PaymentModeLogo](#PaymentModeLogo)? |  yes  | Logo |
 | merchant_code | string? |  yes  | merchant code |
 | name | string? |  yes  | name |
 | nickname | string? |  yes  | nickname |
 | remaining_limit | number? |  yes  | Remaining limit |
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
 | redirect_url | string? |  yes  | Redirect url |
 | retry | boolean |  no  | Response is successful or not. |
 | status | string |  no  | Payment status |
 | success | boolean? |  yes  | Response is successful or not |
 

---

#### [PollingPaymentLinkResponse](#PollingPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator_name | string? |  yes  | Aggregator name |
 | amount | number? |  yes  | Amount |
 | http_status | number? |  yes  | HTTP status code |
 | message | string? |  yes  | Message |
 | order_id | string? |  yes  | Fynd order id |
 | payment_link_id | string? |  yes  | Payment link id |
 | redirect_url | string? |  yes  | Url to redirect to |
 | status | string? |  yes  | Status of payment link |
 | status_code | number? |  yes  | HTTP status code |
 | success | boolean? |  yes  | Successful or failure |
 

---

#### [RedirectToAggregatorResponse](#RedirectToAggregatorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [RedirectURL](#RedirectURL) |  no  | Redirect URL. |
 | success | boolean |  no  | Status updated or not. |
 

---

#### [RedirectURL](#RedirectURL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | signup_url | string |  no  | URL to which the user may redirect. |
 | status | boolean |  no  | Aggregator's Operation is successful or not. |
 

---

#### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | string? |  yes  | Refund account data. |
 | is_verified_flag | boolean? |  yes  |  |
 | message | string |  no  | Response message |
 | success | boolean |  no  | Success or failure flag. |
 

---

#### [renderHTMLRequest](#renderHTMLRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | base64_html | string |  no  | base64 encoded html string |
 | returntype | string? |  yes  | Return Type of API |
 

---

#### [renderHTMLResponse](#renderHTMLResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | html | string |  no  | HTML string |
 

---

#### [ResendOrCancelPaymentRequest](#ResendOrCancelPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | order_id | string |  no  | Unique order id |
 | request_type | string |  no  | Either resend or cancel |
 

---

#### [ResendOrCancelPaymentResponse](#ResendOrCancelPaymentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [LinkStatus](#LinkStatus) |  no  | Data about link action status. |
 | success | boolean |  no  | Response is successful or not. |
 

---

#### [ResendPaymentLinkResponse](#ResendPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  | Message |
 | polling_timeout | number? |  yes  | Polling request timeout |
 | status_code | number |  no  | HTTP status code |
 | success | boolean |  no  | Successful or failure |
 

---

#### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | add_card_enabled | boolean? |  yes  | Annonymous card flag |
 | aggregator_name | string? |  yes  | Dispaly Priority |
 | anonymous_enable | boolean? |  yes  | Annonymous card flag |
 | display_name | string |  no  | Payment mode display name |
 | display_priority | number |  no  | Dispaly Priority |
 | is_pay_by_card_pl | boolean? |  yes  | This flag will be true in case of Payment link payment through card |
 | list | [[PaymentModeList](#PaymentModeList)]? |  yes  | Payment mode |
 | name | string |  no  | Payment mode name |
 | save_card | boolean? |  yes  | Card save or not |
 

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
 | display_name | string? |  yes  | Beneficiary Display Name |
 | id | number |  no  |   |
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

#### [UserPersonalInfoInDetails](#UserPersonalInfoInDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address_as_per_id | [KYCAddress](#KYCAddress) |  no  | Address details |
 | dob | string |  no  | DOB |
 | driving_license | string? |  yes  | Driver License |
 | email | string? |  yes  | Email |
 | email_verified | boolean |  no  | Is Email Verified or not |
 | fathers_name | string? |  yes  | Father's Name |
 | first_name | string |  no  | First Name |
 | gender | string? |  yes  | Gender |
 | last_name | string? |  yes  | Last Name |
 | middle_name | string? |  yes  | middle Name |
 | mobile_verified | boolean |  no  | Is Mobile Verified or not |
 | mothers_name | string? |  yes  | Mother's Name |
 | pan | string? |  yes  | Pan Number |
 | passport | string? |  yes  | Passport |
 | phone | string |  no  | Email |
 | voter_id | string? |  yes  | Voter ID Number |
 

---

#### [ValidateCustomerRequest](#ValidateCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | aggregator | string |  no  | Payment gateway name in camel case i.e Simpl, Rupifi |
 | billing_address | string? |  yes  | Extra meta fields. |
 | delivery_address | string? |  yes  | Extra meta fields. |
 | merchant_params | string? |  yes  | Extra meta fields. |
 | order_items | [string]? |  yes  | Extra meta fields. |
 | payload | string? |  yes  | Hashed payload string. |
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

#### [ValidateUPI](#ValidateUPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | customer_name | string |  no  | Customer Bank |
 | is_valid | boolean |  no  | boolean is true or false. |
 | status | string |  no  | VALID or INVALID |
 | upi_vpa | string |  no  | UPI ID |
 

---

#### [ValidateVPARequest](#ValidateVPARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | upi_vpa | string |  no  | UPI ID |
 

---

#### [ValidateVPAResponse](#ValidateVPAResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [ValidateUPI](#ValidateUPI) |  no  | Data about UPI ID validate. |
 | success | boolean |  no  | Response is successful or not. |
 

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




