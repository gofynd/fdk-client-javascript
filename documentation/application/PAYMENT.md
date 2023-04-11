




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


### cancelPaymentLink
Cancel payment link



```javascript
// Promise
const promise = payment.cancelPaymentLink({  body : value });

// Async/Await
const data = await payment.cancelPaymentLink({  body : value });
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


### checkAndUpdatePaymentStatusPaymentLink
Performs continuous polling to check status of payment on the server



```javascript
// Promise
const promise = payment.checkAndUpdatePaymentStatusPaymentLink({  body : value });

// Async/Await
const data = await payment.checkAndUpdatePaymentStatusPaymentLink({  body : value });
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


### createOrderHandlerPaymentLink
Create Order user



```javascript
// Promise
const promise = payment.createOrderHandlerPaymentLink({  body : value });

// Async/Await
const data = await payment.createOrderHandlerPaymentLink({  body : value });
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
const promise = payment.createPaymentLink({  body : value });

// Async/Await
const data = await payment.createPaymentLink({  body : value });
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


### getPaymentLink
Get payment link



```javascript
// Promise
const promise = payment.getPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await payment.getPaymentLink({  paymentLinkId : value });
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
const promise = payment.getPaymentModeRoutesPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await payment.getPaymentModeRoutesPaymentLink({  paymentLinkId : value });
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
            "display_name": "Cash",
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
  "customer_id": "cust_dummy_001",
  "device_id": "1234567890"
}
```
</details>









---


### initialisePaymentPaymentLink
Initialize a payment (server-to-server) for UPI and BharatQR



```javascript
// Promise
const promise = payment.initialisePaymentPaymentLink({  body : value });

// Async/Await
const data = await payment.initialisePaymentPaymentLink({  body : value });
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
const promise = payment.pollingPaymentLink({  paymentLinkId : value });

// Async/Await
const data = await payment.pollingPaymentLink({  paymentLinkId : value });
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


### renderHTML
Convert base64 string to HTML form



```javascript
// Promise
const promise = payment.renderHTML({  body : value });

// Async/Await
const data = await payment.renderHTML({  body : value });
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


### resendPaymentLink
Resend payment link



```javascript
// Promise
const promise = payment.resendPaymentLink({  body : value });

// Async/Await
const data = await payment.resendPaymentLink({  body : value });
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


### validateVPA
API to Validate UPI ID



```javascript
// Promise
const promise = payment.validateVPA({  body : value });

// Async/Await
const data = await payment.validateVPA({  body : value });
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
  "message": "Account successfully created"
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



### Schemas


#### [ActiveCardPaymentGatewayResponse](#ActiveCardPaymentGatewayResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cards | [CardPaymentGateway](#CardPaymentGateway) |  yes  |  || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [AddBeneficiaryDetailsOTPRequest](#AddBeneficiaryDetailsOTPRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || details | [BankDetailsForOTP](#BankDetailsForOTP) |  yes  |  || order_id | string |  yes  |  |

---

#### [AddBeneficiaryDetailsRequest](#AddBeneficiaryDetailsRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || delights | boolean |  yes  |  || details | [BeneficiaryModeDetails](#BeneficiaryModeDetails) |  yes  |  || order_id | string |  yes  |  || otp | string |  no  |  || request_id | string |  no  |  || shipment_id | string |  yes  |  || transfer_mode | string |  yes  |  |

---

#### [AddBeneficiaryViaOtpVerificationRequest](#AddBeneficiaryViaOtpVerificationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || hash_key | string |  yes  |  || otp | string |  yes  |  || request_id | string |  yes  |  |

---

#### [AddBeneficiaryViaOtpVerificationResponse](#AddBeneficiaryViaOtpVerificationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || success | boolean |  no  |  |

---

#### [AggregatorConfigDetail](#AggregatorConfigDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || api | string |  no  |  || config_type | string |  yes  |  || key | string |  yes  |  || merchant_id | string |  no  |  || merchant_key | string |  no  |  || pin | string |  no  |  || sdk | boolean |  no  |  || secret | string |  yes  |  || user_id | string |  no  |  || verify_api | string |  no  |  |

---

#### [AggregatorRoute](#AggregatorRoute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || api_link | string |  no  |  || data | string |  no  |  || payment_flow | string |  no  |  || payment_flow_data | string |  no  |  |

---

#### [AggregatorsConfigDetailResponse](#AggregatorsConfigDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || ccavenue | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || env | string |  yes  |  || juspay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || mswipe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || payumoney | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || razorpay | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || rupifi | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || simpl | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || stripe | [AggregatorConfigDetail](#AggregatorConfigDetail) |  no  |  || success | boolean |  yes  |  |

---

#### [AttachCardRequest](#AttachCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || card_id | string |  yes  |  || name_on_card | string |  no  |  || nickname | string |  no  |  || refresh | boolean |  no  |  |

---

#### [AttachCardsResponse](#AttachCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | string |  yes  |  || message | string |  no  |  || success | boolean |  yes  |  |

---

#### [BalanceDetails](#BalanceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  yes  |  || formatted_value | string |  yes  |  || value | number |  yes  |  |

---

#### [BankDetailsForOTP](#BankDetailsForOTP)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_holder | string |  yes  |  || account_no | string |  yes  |  || bank_name | string |  yes  |  || branch_name | string |  yes  |  || ifsc_code | string |  yes  |  |

---

#### [BeneficiaryModeDetails](#BeneficiaryModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_holder | string |  yes  |  || account_no | string |  yes  |  || address | string |  no  |  || bank_name | string |  yes  |  || branch_name | string |  yes  |  || comment | string |  no  |  || email | string |  yes  |  || ifsc_code | string |  yes  |  || mobile | string |  yes  |  || vpa | string |  no  |  || wallet | string |  no  |  |

---

#### [BusinessDetails](#BusinessDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address | [KYCAddress](#KYCAddress) |  no  |  || business_ownership_type | string |  no  |  || business_type | string |  no  |  || entity_type | string |  no  |  || fda | string |  no  |  || fssai | string |  no  |  || gstin | string |  no  |  || name | string |  no  |  || pan | string |  no  |  || shop_and_establishment | string |  no  |  || vintage | string |  no  |  |

---

#### [CancelOrResendPaymentLinkRequest](#CancelOrResendPaymentLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || payment_link_id | string |  yes  |  |

---

#### [CancelPaymentLinkResponse](#CancelPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [Card](#Card)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator_name | string |  yes  |  || card_brand | string |  no  |  || card_brand_image | string |  no  |  || card_fingerprint | string |  no  |  || card_id | string |  no  |  || card_isin | string |  no  |  || card_issuer | string |  no  |  || card_name | string |  no  |  || card_number | string |  no  |  || card_reference | string |  no  |  || card_token | string |  no  |  || card_type | string |  no  |  || compliant_with_tokenisation_guidelines | boolean |  no  |  || exp_month | number |  no  |  || exp_year | number |  no  |  || expired | boolean |  no  |  || nickname | string |  no  |  |

---

#### [CardPaymentGateway](#CardPaymentGateway)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || api | string |  no  |  || customer_id | string |  no  |  |

---

#### [ChargeCustomerRequest](#ChargeCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || amount | number |  yes  |  || order_id | string |  yes  |  || transaction_token | string |  no  |  || verified | boolean |  no  |  |

---

#### [ChargeCustomerResponse](#ChargeCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || cart_id | string |  no  |  || delivery_address_id | string |  no  |  || message | string |  yes  |  || order_id | string |  yes  |  || status | string |  yes  |  || success | boolean |  yes  |  |

---

#### [CheckCreditResponse](#CheckCreditResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [CreditDetail](#CreditDetail) |  yes  |  || success | boolean |  yes  |  |

---

#### [CreateOrderUserData](#CreateOrderUserData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  no  |  || amount | number |  no  |  || callback_url | string |  no  |  || contact | string |  no  |  || currency | string |  no  |  || customer_id | string |  no  |  || email | string |  no  |  || merchant_order_id | string |  no  |  || method | string |  no  |  || order_id | string |  no  |  |

---

#### [CreateOrderUserPaymentMethods](#CreateOrderUserPaymentMethods)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || meta | [PaymentMethodsMeta](#PaymentMethodsMeta) |  yes  |  || mode | string |  yes  |  || name | string |  yes  |  |

---

#### [CreateOrderUserRequest](#CreateOrderUserRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || currency | string |  yes  |  || failure_callback_url | string |  yes  |  || meta | string |  no  |  || payment_link_id | string |  yes  |  || payment_methods | [CreateOrderUserPaymentMethods](#CreateOrderUserPaymentMethods) |  yes  |  || success_callback_url | string |  yes  |  |

---

#### [CreateOrderUserResponse](#CreateOrderUserResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || callback_url | string |  no  |  || data | [CreateOrderUserData](#CreateOrderUserData) |  no  |  || message | string |  yes  |  || order_id | string |  no  |  || payment_confirm_url | string |  no  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [CreatePaymentLinkMeta](#CreatePaymentLinkMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | string |  yes  |  || assign_card_id | string |  no  |  || cart_id | string |  yes  |  || checkout_mode | string |  yes  |  || pincode | string |  yes  |  |

---

#### [CreatePaymentLinkRequest](#CreatePaymentLinkRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | number |  yes  |  || description | string |  no  |  || email | string |  yes  |  || external_order_id | string |  yes  |  || meta | [CreatePaymentLinkMeta](#CreatePaymentLinkMeta) |  yes  |  || mobile_number | string |  yes  |  |

---

#### [CreatePaymentLinkResponse](#CreatePaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || payment_link_id | string |  no  |  || payment_link_url | string |  no  |  || polling_timeout | number |  no  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [CreditDetail](#CreditDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_registered | boolean |  yes  |  || signup_url | string |  yes  |  || status | boolean |  yes  |  |

---

#### [CreditSummary](#CreditSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || balance | [BalanceDetails](#BalanceDetails) |  no  |  || merchant_customer_ref_id | string |  yes  |  || status | string |  yes  |  || status_message | string |  yes  |  |

---

#### [CustomerCreditSummaryResponse](#CustomerCreditSummaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [CreditSummary](#CreditSummary) |  no  |  || success | boolean |  yes  |  |

---

#### [CustomerOnboardingRequest](#CustomerOnboardingRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || business_info | [BusinessDetails](#BusinessDetails) |  no  |  || device | [DeviceDetails](#DeviceDetails) |  no  |  || marketplace_info | [MarketplaceInfo](#MarketplaceInfo) |  no  |  || mcc | string |  no  |  || personal_info | [UserPersonalInfoInDetails](#UserPersonalInfoInDetails) |  yes  |  || source | string |  yes  |  |

---

#### [CustomerOnboardingResponse](#CustomerOnboardingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [OnboardSummary](#OnboardSummary) |  yes  |  || success | boolean |  yes  |  |

---

#### [DeleteCardsResponse](#DeleteCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  || success | boolean |  yes  |  |

---

#### [DeletehCardRequest](#DeletehCardRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || card_id | string |  yes  |  |

---

#### [DeviceDetails](#DeviceDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || device_make | string |  no  |  || device_model | string |  no  |  || device_type | string |  no  |  || identification_number | string |  no  |  || identifier_type | string |  no  |  || os | string |  no  |  || os_version | string |  no  |  |

---

#### [EpaylaterBannerData](#EpaylaterBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display | boolean |  yes  |  || message | string |  no  |  || status | string |  no  |  |

---

#### [EpaylaterBannerResponse](#EpaylaterBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [EpaylaterBannerData](#EpaylaterBannerData) |  yes  |  || success | boolean |  yes  |  |

---

#### [ErrorCodeAndDescription](#ErrorCodeAndDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  yes  |  || description | string |  yes  |  |

---

#### [ErrorCodeDescription](#ErrorCodeDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  yes  |  || description | string |  yes  |  || success | boolean |  yes  |  |

---

#### [ErrorDescription](#ErrorDescription)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | number |  no  |  || cancelled | boolean |  no  |  || expired | boolean |  no  |  || invalid_id | boolean |  no  |  || merchant_name | string |  no  |  || merchant_order_id | string |  no  |  || msg | string |  no  |  || payment_transaction_id | string |  no  |  |

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | [ErrorDescription](#ErrorDescription) |  no  |  || message | string |  yes  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [GetPaymentLinkResponse](#GetPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || amount | number |  no  |  || external_order_id | string |  no  |  || merchant_name | string |  no  |  || message | string |  yes  |  || payment_link_current_status | string |  no  |  || payment_link_url | string |  no  |  || polling_timeout | number |  no  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [HttpErrorCodeAndResponse](#HttpErrorCodeAndResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || error | [ErrorCodeAndDescription](#ErrorCodeAndDescription) |  yes  |  || success | boolean |  yes  |  |

---

#### [IfscCodeResponse](#IfscCodeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bank_name | string |  yes  |  || branch_name | string |  yes  |  || success | boolean |  no  |  |

---

#### [IntentApp](#IntentApp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || display_name | string |  no  |  || logos | [PaymentModeLogo](#PaymentModeLogo) |  no  |  || package_name | string |  no  |  |

---

#### [IntentAppErrorList](#IntentAppErrorList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || package_name | string |  no  |  |

---

#### [KYCAddress](#KYCAddress)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || addressline1 | string |  yes  |  || addressline2 | string |  no  |  || city | string |  yes  |  || land_mark | string |  no  |  || ownership_type | string |  no  |  || pincode | string |  yes  |  || state | string |  yes  |  |

---

#### [LinkStatus](#LinkStatus)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || status | boolean |  yes  |  |

---

#### [ListCardsResponse](#ListCardsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[Card](#Card)] |  no  |  || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [MarketplaceInfo](#MarketplaceInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || date_of_joining | string |  no  |  || membership_id | string |  yes  |  || name | string |  yes  |  |

---

#### [NotFoundResourceError](#NotFoundResourceError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  yes  |  || description | string |  yes  |  || success | boolean |  yes  |  |

---

#### [OnboardSummary](#OnboardSummary)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || redirect_url | string |  yes  |  || session | string |  yes  |  || status | boolean |  yes  |  |

---

#### [OrderBeneficiaryDetails](#OrderBeneficiaryDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_holder | string |  yes  |  || account_no | string |  yes  |  || address | string |  yes  |  || bank_name | string |  yes  |  || beneficiary_id | string |  yes  |  || branch_name | string |  no  |  || comment | string |  no  |  || created_on | string |  yes  |  || delights_user_name | string |  no  |  || display_name | string |  yes  |  || email | string |  yes  |  || id | number |  yes  |  || ifsc_code | string |  yes  |  || is_active | boolean |  yes  |  || mobile | string |  no  |  || modified_on | string |  yes  |  || subtitle | string |  yes  |  || title | string |  yes  |  || transfer_mode | string |  yes  |  |

---

#### [OrderBeneficiaryResponse](#OrderBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || beneficiaries | [[OrderBeneficiaryDetails](#OrderBeneficiaryDetails)] |  no  |  || show_beneficiary_details | boolean |  no  |  |

---

#### [PaymentFlow](#PaymentFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || bqr_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  |  || ccavenue | [AggregatorRoute](#AggregatorRoute) |  no  |  || epaylater | [AggregatorRoute](#AggregatorRoute) |  no  |  || fynd | [AggregatorRoute](#AggregatorRoute) |  no  |  || jiopay | [AggregatorRoute](#AggregatorRoute) |  no  |  || juspay | [AggregatorRoute](#AggregatorRoute) |  no  |  || mswipe | [AggregatorRoute](#AggregatorRoute) |  no  |  || payubiz | [AggregatorRoute](#AggregatorRoute) |  no  |  || razorpay | [AggregatorRoute](#AggregatorRoute) |  no  |  || rupifi | [AggregatorRoute](#AggregatorRoute) |  no  |  || simpl | [AggregatorRoute](#AggregatorRoute) |  no  |  || stripe | [AggregatorRoute](#AggregatorRoute) |  no  |  || upi_razorpay | [AggregatorRoute](#AggregatorRoute) |  no  |  |

---

#### [PaymentInitializationRequest](#PaymentInitializationRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || amount | number |  yes  |  || contact | string |  yes  |  || currency | string |  yes  |  || customer_id | string |  yes  |  || device_id | string |  no  |  || email | string |  yes  |  || merchant_order_id | string |  yes  |  || method | string |  yes  |  || order_id | string |  yes  |  || razorpay_payment_id | string |  no  |  || timeout | number |  no  |  || vpa | string |  no  |  |

---

#### [PaymentInitializationResponse](#PaymentInitializationResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || aggregator_order_id | string |  no  |  || amount | number |  no  |  || bqr_image | string |  no  |  || currency | string |  no  |  || customer_id | string |  no  |  || device_id | string |  no  |  || merchant_order_id | string |  yes  |  || method | string |  yes  |  || polling_url | string |  yes  |  || razorpay_payment_id | string |  no  |  || status | string |  no  |  || success | boolean |  yes  |  || timeout | number |  no  |  || upi_poll_url | string |  no  |  || virtual_id | string |  no  |  || vpa | string |  no  |  |

---

#### [PaymentMethodsMeta](#PaymentMethodsMeta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || merchant_code | string |  yes  |  || payment_gateway | string |  yes  |  || payment_identifier | string |  yes  |  |

---

#### [PaymentModeList](#PaymentModeList)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator_name | string |  yes  |  || card_brand | string |  no  |  || card_brand_image | string |  no  |  || card_fingerprint | string |  no  |  || card_id | string |  no  |  || card_isin | string |  no  |  || card_issuer | string |  no  |  || card_name | string |  no  |  || card_number | string |  no  |  || card_reference | string |  no  |  || card_token | string |  no  |  || card_type | string |  no  |  || cod_limit | number |  no  |  || cod_limit_per_order | number |  no  |  || code | string |  no  |  || compliant_with_tokenisation_guidelines | boolean |  no  |  || display_name | string |  no  |  || display_priority | number |  no  |  || exp_month | number |  no  |  || exp_year | number |  no  |  || expired | boolean |  no  |  || fynd_vpa | string |  no  |  || intent_app | [[IntentApp](#IntentApp)] |  no  |  || intent_app_error_dict_list | [[IntentAppErrorList](#IntentAppErrorList)] |  no  |  || intent_app_error_list | [string] |  no  |  || intent_flow | boolean |  no  |  || logo_url | [PaymentModeLogo](#PaymentModeLogo) |  no  |  || merchant_code | string |  no  |  || name | string |  no  |  || nickname | string |  no  |  || remaining_limit | number |  no  |  || retry_count | number |  no  |  || timeout | number |  no  |  |

---

#### [PaymentModeLogo](#PaymentModeLogo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || large | string |  yes  |  || small | string |  yes  |  |

---

#### [PaymentModeRouteResponse](#PaymentModeRouteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || payment_options | [PaymentOptionAndFlow](#PaymentOptionAndFlow) |  yes  |  || success | boolean |  yes  |  |

---

#### [PaymentOptionAndFlow](#PaymentOptionAndFlow)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || payment_flows | [PaymentFlow](#PaymentFlow) |  yes  |  || payment_option | [[RootPaymentMode](#RootPaymentMode)] |  yes  |  |

---

#### [PaymentStatusUpdateRequest](#PaymentStatusUpdateRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || amount | number |  yes  |  || contact | string |  yes  |  || currency | string |  yes  |  || customer_id | string |  yes  |  || device_id | string |  no  |  || email | string |  yes  |  || merchant_order_id | string |  yes  |  || method | string |  yes  |  || order_id | string |  yes  |  || status | string |  yes  |  || vpa | string |  no  |  |

---

#### [PaymentStatusUpdateResponse](#PaymentStatusUpdateResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator_name | string |  yes  |  || redirect_url | string |  no  |  || retry | boolean |  yes  |  || status | string |  yes  |  || success | boolean |  no  |  |

---

#### [PollingPaymentLinkResponse](#PollingPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator_name | string |  no  |  || amount | number |  no  |  || http_status | number |  no  |  || message | string |  no  |  || order_id | string |  no  |  || payment_link_id | string |  no  |  || redirect_url | string |  no  |  || status | string |  no  |  || status_code | number |  no  |  || success | boolean |  no  |  |

---

#### [RedirectToAggregatorResponse](#RedirectToAggregatorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [RedirectURL](#RedirectURL) |  yes  |  || success | boolean |  yes  |  |

---

#### [RedirectURL](#RedirectURL)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || signup_url | string |  yes  |  || status | boolean |  yes  |  |

---

#### [RefundAccountResponse](#RefundAccountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | string |  no  |  || is_verified_flag | boolean |  no  |  || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [renderHTMLRequest](#renderHTMLRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || base64_html | string |  yes  |  || returntype | string |  no  |  |

---

#### [renderHTMLResponse](#renderHTMLResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || html | string |  yes  |  |

---

#### [ResendOrCancelPaymentRequest](#ResendOrCancelPaymentRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || device_id | string |  no  |  || order_id | string |  yes  |  || request_type | string |  yes  |  |

---

#### [ResendOrCancelPaymentResponse](#ResendOrCancelPaymentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [LinkStatus](#LinkStatus) |  yes  |  || success | boolean |  yes  |  |

---

#### [ResendPaymentLinkResponse](#ResendPaymentLinkResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  yes  |  || polling_timeout | number |  no  |  || status_code | number |  yes  |  || success | boolean |  yes  |  |

---

#### [RootPaymentMode](#RootPaymentMode)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || add_card_enabled | boolean |  no  |  || aggregator_name | string |  no  |  || anonymous_enable | boolean |  no  |  || display_name | string |  yes  |  || display_priority | number |  yes  |  || is_pay_by_card_pl | boolean |  no  |  || list | [[PaymentModeList](#PaymentModeList)] |  no  |  || name | string |  yes  |  || save_card | boolean |  no  |  |

---

#### [RupifiBannerData](#RupifiBannerData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || kyc_url | string |  no  |  || status | string |  no  |  |

---

#### [RupifiBannerResponse](#RupifiBannerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [RupifiBannerData](#RupifiBannerData) |  yes  |  || success | boolean |  yes  |  |

---

#### [SetDefaultBeneficiaryRequest](#SetDefaultBeneficiaryRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || beneficiary_id | string |  yes  |  || order_id | string |  yes  |  |

---

#### [SetDefaultBeneficiaryResponse](#SetDefaultBeneficiaryResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_beneficiary_set | boolean |  yes  |  || success | boolean |  no  |  |

---

#### [TransferItemsDetails](#TransferItemsDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  no  |  || id | number |  yes  |  || logo_large | string |  yes  |  || logo_small | string |  yes  |  || name | string |  yes  |  |

---

#### [TransferModeDetails](#TransferModeDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || display_name | string |  yes  |  || items | [[TransferItemsDetails](#TransferItemsDetails)] |  no  |  |

---

#### [TransferModeResponse](#TransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [[TransferModeDetails](#TransferModeDetails)] |  yes  |  |

---

#### [UpdateRefundTransferModeRequest](#UpdateRefundTransferModeRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || enable | boolean |  yes  |  || transfer_mode | string |  yes  |  |

---

#### [UpdateRefundTransferModeResponse](#UpdateRefundTransferModeResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [UserPersonalInfoInDetails](#UserPersonalInfoInDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || address_as_per_id | [KYCAddress](#KYCAddress) |  yes  |  || dob | string |  yes  |  || driving_license | string |  no  |  || email | string |  no  |  || email_verified | boolean |  yes  |  || fathers_name | string |  no  |  || first_name | string |  yes  |  || gender | string |  no  |  || last_name | string |  no  |  || middle_name | string |  no  |  || mobile_verified | boolean |  yes  |  || mothers_name | string |  no  |  || pan | string |  no  |  || passport | string |  no  |  || phone | string |  yes  |  || voter_id | string |  no  |  |

---

#### [ValidateCustomerRequest](#ValidateCustomerRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || aggregator | string |  yes  |  || billing_address | string |  no  |  || delivery_address | string |  no  |  || merchant_params | string |  no  |  || order_items | [string] |  no  |  || payload | string |  no  |  || phone_number | string |  yes  |  || transaction_amount_in_paise | number |  yes  |  |

---

#### [ValidateCustomerResponse](#ValidateCustomerResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | string |  no  |  || error | string |  no  |  || message | string |  yes  |  || success | boolean |  yes  |  |

---

#### [ValidateUPI](#ValidateUPI)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || customer_name | string |  yes  |  || is_valid | boolean |  yes  |  || status | string |  yes  |  || upi_vpa | string |  yes  |  |

---

#### [ValidateVPARequest](#ValidateVPARequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || upi_vpa | string |  yes  |  |

---

#### [ValidateVPAResponse](#ValidateVPAResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || data | [ValidateUPI](#ValidateUPI) |  yes  |  || success | boolean |  yes  |  |

---

#### [WalletOtpRequest](#WalletOtpRequest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  yes  |  || mobile | string |  yes  |  |

---

#### [WalletOtpResponse](#WalletOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_verified_flag | string |  yes  |  || request_id | string |  yes  |  || success | boolean |  no  |  |

---

#### [WrongOtpError](#WrongOtpError)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || description | string |  yes  |  || is_verified_flag | boolean |  yes  |  || success | string |  yes  |  |

---




