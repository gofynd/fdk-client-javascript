




##### [Back to Application docs](./README.md)

## User Methods
Authentication Service

* [addEmail](#addemail)
* [addMobileNumber](#addmobilenumber)
* [deleteEmail](#deleteemail)
* [deleteMobileNumber](#deletemobilenumber)
* [deleteUser](#deleteuser)
* [forgotPassword](#forgotpassword)
* [getListOfActiveSessions](#getlistofactivesessions)
* [getLoggedInUser](#getloggedinuser)
* [getPlatformConfig](#getplatformconfig)
* [hasPassword](#haspassword)
* [loginWithAppleIOS](#loginwithappleios)
* [loginWithEmailAndPassword](#loginwithemailandpassword)
* [loginWithFacebook](#loginwithfacebook)
* [loginWithGoogle](#loginwithgoogle)
* [loginWithGoogleAndroid](#loginwithgoogleandroid)
* [loginWithGoogleIOS](#loginwithgoogleios)
* [loginWithOTP](#loginwithotp)
* [loginWithToken](#loginwithtoken)
* [logout](#logout)
* [registerWithForm](#registerwithform)
* [sendOTPOnEmail](#sendotponemail)
* [sendOTPOnMobile](#sendotponmobile)
* [sendResetPasswordEmail](#sendresetpasswordemail)
* [sendResetPasswordMobile](#sendresetpasswordmobile)
* [sendResetToken](#sendresettoken)
* [sendVerificationLinkToEmail](#sendverificationlinktoemail)
* [sendVerificationLinkToMobile](#sendverificationlinktomobile)
* [setEmailAsPrimary](#setemailasprimary)
* [setMobileNumberAsPrimary](#setmobilenumberasprimary)
* [updatePassword](#updatepassword)
* [updateProfile](#updateprofile)
* [verifyEmail](#verifyemail)
* [verifyEmailOTP](#verifyemailotp)
* [verifyMobile](#verifymobile)
* [verifyMobileOTP](#verifymobileotp)



## Methods with example and description




### addEmail
Add email to profile



```javascript
// Promise
const promise = applicationClient.user.addEmail({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.addEmail({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [EditEmailRequestSchema](#EditEmailRequestSchema) | yes | Request body |


Use this API to add a new email address to a profile

*Returned Response:*




[VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

Success. Returns a JSON object with user details. Refer `VerifyEmailOTPSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "verify_email_link": true,
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### addMobileNumber
Add mobile number to profile



```javascript
// Promise
const promise = applicationClient.user.addMobileNumber({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.addMobileNumber({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [EditMobileRequestSchema](#EditMobileRequestSchema) | yes | Request body |


Use this API to add a new mobile number to a profile.

*Returned Response:*




[VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

Success. Check the example shown below or refer `VerifyMobileOTPSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "verify_mobile_link": true,
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### deleteEmail
Delete email from profile



```javascript
// Promise
const promise = applicationClient.user.deleteEmail({  active : value,
 primary : value,
 verified : value,
 email : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.deleteEmail({  active : value,
 primary : value,
 verified : value,
 email : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |   
| active | boolean | yes | This is a boolean value to check if email ID is active 1. True - Email ID is active 2.False - Email ID is inactive |   
| primary | boolean | yes | This is a boolean value to check if email ID is primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is not primary |   
| verified | boolean | yes | This is a boolean value to check if email ID is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet |   
| email | string | yes | The email ID to delete |  



Use this API to delete an email address from a profile

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Returns a JSON object with user details. Refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### deleteMobileNumber
Delete mobile number from profile



```javascript
// Promise
const promise = applicationClient.user.deleteMobileNumber({  active : value,
 primary : value,
 verified : value,
 countryCode : value,
 phone : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.deleteMobileNumber({  active : value,
 primary : value,
 verified : value,
 countryCode : value,
 phone : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |   
| active | boolean | yes | This is a boolean value to check if mobile number is active 1.True - Number is active 2. False - Number is inactive |   
| primary | boolean | yes | This is a boolean value to check if mobile number is primary number (main number) 1. True - Number is primary 2. False - Number is not primary |   
| verified | boolean | yes | This is a boolean value to check if mobile number is verified 1. True - Number is verified 2.False - Number is not verified yet |   
| countryCode | string | yes | Country code of the phone number, e.g. 91 |   
| phone | string | yes | Phone number |  



Use this API to delete a mobile number from a profile.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### deleteUser
verify otp and delete user



```javascript
// Promise
const promise = applicationClient.user.deleteUser({  body : value });

// Async/Await
const data = await applicationClient.user.deleteUser({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [DeleteApplicationUserRequestSchema](#DeleteApplicationUserRequestSchema) | yes | Request body |


verify otp and delete user

*Returned Response:*




[DeleteUserSuccess](#DeleteUserSuccess)

Success. Returns a success message. Refer `DeleteUserSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### forgotPassword
Forgot Password



```javascript
// Promise
const promise = applicationClient.user.forgotPassword({  body : value });

// Async/Await
const data = await applicationClient.user.forgotPassword({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema) | yes | Request body |


Use this API to reset a password using the code sent on email or SMS.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### getListOfActiveSessions
Get list of sessions



```javascript
// Promise
const promise = applicationClient.user.getListOfActiveSessions();

// Async/Await
const data = await applicationClient.user.getListOfActiveSessions();
```






Use this API to retrieve all active sessions of a user.

*Returned Response:*




[SessionListSuccess](#SessionListSuccess)

Success. Returns a JSON object containing an array of sessions. Refer `SessionListSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "sessions": [
    "session_1",
    "session_2"
  ]
}
```
</details>









---


### getLoggedInUser
Get logged in user



```javascript
// Promise
const promise = applicationClient.user.getLoggedInUser();

// Async/Await
const data = await applicationClient.user.getLoggedInUser();
```






Use this API  to get the details of a logged in user.

*Returned Response:*




[UserObjectSchema](#UserObjectSchema)

Success. Returns a JSON object with user details. Refer `UserObjectSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### getPlatformConfig
Get platform configurations



```javascript
// Promise
const promise = applicationClient.user.getPlatformConfig({  name : value });

// Async/Await
const data = await applicationClient.user.getPlatformConfig({  name : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| name | string | no | Name of the application, e.g. Fynd |  



Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.

*Returned Response:*




[PlatformSchema](#PlatformSchema)

Success. Returns a JSON object containing the all the platform configurations. Refer `PlatformSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "active": true,
  "mobile_image": null,
  "desktop_image": null,
  "social": {
    "facebook": true,
    "google": true,
    "account_kit": true
  },
  "flash_card": {
    "text": "",
    "text_color": "#FFFFFF",
    "background_color": "#EF5350"
  },
  "register": true,
  "forgot_password": true,
  "login": {
    "password": true,
    "otp": true
  },
  "skip_captcha": false,
  "display": "Fynd",
  "subtext": "Login to Fynd",
  "name": "Fynd",
  "meta": {},
  "required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "register_required_fields": {
    "email": {
      "is_required": false,
      "level": "hard"
    },
    "mobile": {
      "is_required": true,
      "level": "hard"
    }
  },
  "skip_login": false,
  "look_and_feel": {
    "background_color": "#F5F5F5",
    "card_position": "center"
  },
  "social_tokens": {
    "google": {
      "appId": "token_123"
    },
    "facebook": {
      "appId": "2033146826724884"
    },
    "account_kit": {
      "appId": "548529975557631"
    }
  },
  "delete_account_reasons": [
    {
      "reason_text": "test",
      "reason_id": "123",
      "show_text_area": true
    }
  ],
  "delete_account_day": 7,
  "delete_account_consent": {
    "consent_text": ""
  },
  "session_config": {
    "duration": "30",
    "type": "Days",
    "is_rolling": false
  },
  "_id": "5e04a5e5220bc15839ad9bc0",
  "created_at": "2019-12-26T12:21:57.878Z",
  "updated_at": "2020-08-13T14:31:09.878Z",
  "__v": 0
}
```
</details>









---


### hasPassword
Check password



```javascript
// Promise
const promise = applicationClient.user.hasPassword();

// Async/Await
const data = await applicationClient.user.hasPassword();
```






Use this API to check if user has created a password for login.

*Returned Response:*




[HasPasswordSuccess](#HasPasswordSuccess)

Success. Returns a boolean value. Check the example shown below or refer `HasPasswordSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### loginWithAppleIOS
Login or Register using Apple on iOS



```javascript
// Promise
const promise = applicationClient.user.loginWithAppleIOS({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithAppleIOS({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [OAuthRequestAppleSchema](#OAuthRequestAppleSchema) | yes | Request body |


Use this API to login or register in iOS app using Apple Account credentials.

*Returned Response:*




[AuthSuccess](#AuthSuccess)

Success. Returns a JSON object with the user details. Check the example shown below or refer `AuthSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_exists": false,
    "user": {
      "emails": [
        {
          "email": "www.akash24@gmail.com",
          "verified": true,
          "primary": true,
          "active": true
        }
      ],
      "phone_numbers": [],
      "first_name": "Akash",
      "last_name": "Mane",
      "debug": {
        "platform": "Fynd"
      },
      "active": true
    },
    "register_token": "d960c388-e286-43d9-b688-f6d1decc632d"
  }
}
```
</details>

</details>









---


### loginWithEmailAndPassword
Login or Register with password



```javascript
// Promise
const promise = applicationClient.user.loginWithEmailAndPassword({  body : value });

// Async/Await
const data = await applicationClient.user.loginWithEmailAndPassword({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [PasswordLoginRequestSchema](#PasswordLoginRequestSchema) | yes | Request body |


Use this API to login or register using an email address and password.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### loginWithFacebook
Login or Register using Facebook



```javascript
// Promise
const promise = applicationClient.user.loginWithFacebook({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithFacebook({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [OAuthRequestSchema](#OAuthRequestSchema) | yes | Request body |


Use this API to login or register using Facebook credentials.

*Returned Response:*




[AuthSuccess](#AuthSuccess)

Success. Returns a JSON object with the user details. Check the example shown below or refer `AuthSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_exists": false,
    "user": {
      "emails": [
        {
          "email": "www.akash24@gmail.com",
          "verified": true,
          "primary": true,
          "active": true
        }
      ],
      "phone_numbers": [],
      "first_name": "Akash",
      "last_name": "Mane",
      "debug": {
        "platform": "Fynd"
      },
      "active": true
    },
    "register_token": "d960c388-e286-43d9-b688-f6d1decc632d"
  }
}
```
</details>

</details>









---


### loginWithGoogle
Login or Register using Google



```javascript
// Promise
const promise = applicationClient.user.loginWithGoogle({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithGoogle({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [OAuthRequestSchema](#OAuthRequestSchema) | yes | Request body |


Use this API to login or register using Google Account credentials.

*Returned Response:*




[AuthSuccess](#AuthSuccess)

Success. Returns a JSON object with the user details. Check the example shown below or refer `AuthSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_exists": false,
    "user": {
      "emails": [
        {
          "email": "www.akash24@gmail.com",
          "verified": true,
          "primary": true,
          "active": true
        }
      ],
      "phone_numbers": [],
      "first_name": "Akash",
      "last_name": "Mane",
      "debug": {
        "platform": "Fynd"
      },
      "active": true
    },
    "register_token": "d960c388-e286-43d9-b688-f6d1decc632d"
  }
}
```
</details>

</details>









---


### loginWithGoogleAndroid
Login or Register using Google on Android



```javascript
// Promise
const promise = applicationClient.user.loginWithGoogleAndroid({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithGoogleAndroid({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [OAuthRequestSchema](#OAuthRequestSchema) | yes | Request body |


Use this API to login or register in Android app using Google Account credentials.

*Returned Response:*




[AuthSuccess](#AuthSuccess)

Success. Returns a JSON object with the user details. Check the example shown below or refer `AuthSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_exists": false,
    "user": {
      "emails": [
        {
          "email": "www.akash24@gmail.com",
          "verified": true,
          "primary": true,
          "active": true
        }
      ],
      "phone_numbers": [],
      "first_name": "Akash",
      "last_name": "Mane",
      "debug": {
        "platform": "Fynd"
      },
      "active": true
    },
    "register_token": "d960c388-e286-43d9-b688-f6d1decc632d"
  }
}
```
</details>

</details>









---


### loginWithGoogleIOS
Login or Register using Google on iOS



```javascript
// Promise
const promise = applicationClient.user.loginWithGoogleIOS({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithGoogleIOS({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [OAuthRequestSchema](#OAuthRequestSchema) | yes | Request body |


Use this API to login or register in iOS app using Google Account credentials.

*Returned Response:*




[AuthSuccess](#AuthSuccess)

Success. Returns a JSON object with the user details. Check the example shown below or refer `AuthSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user_exists": false,
    "user": {
      "emails": [
        {
          "email": "www.akash24@gmail.com",
          "verified": true,
          "primary": true,
          "active": true
        }
      ],
      "phone_numbers": [],
      "first_name": "Akash",
      "last_name": "Mane",
      "debug": {
        "platform": "Fynd"
      },
      "active": true
    },
    "register_token": "d960c388-e286-43d9-b688-f6d1decc632d"
  }
}
```
</details>

</details>









---


### loginWithOTP
Login or Register with OTP



```javascript
// Promise
const promise = applicationClient.user.loginWithOTP({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.loginWithOTP({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendOtpRequestSchema](#SendOtpRequestSchema) | yes | Request body |


Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.

*Returned Response:*




[SendOtpResponse](#SendOtpResponse)

Success. Check the example shown below or refer `SendOtpResponse` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "success": true,
    "request_id": "01503005aeab87cbed93d40f46cc2749",
    "message": "OTP sent",
    "mobile": "8652523958",
    "country_code": "91",
    "resend_timer": 30,
    "resendToken": "58e72ca0-66ae-11eb-98b1-77d61363826e"
  }
}
```
</details>

</details>









---


### loginWithToken
Login or Register with token



```javascript
// Promise
const promise = applicationClient.user.loginWithToken({  body : value });

// Async/Await
const data = await applicationClient.user.loginWithToken({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [TokenRequestBodySchema](#TokenRequestBodySchema) | yes | Request body |


Use this API to login or register using a token for authentication.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Success</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### logout
Logs out currently logged in user



```javascript
// Promise
const promise = applicationClient.user.logout();

// Async/Await
const data = await applicationClient.user.logout();
```






Use this API to check to logout a user from the app.

*Returned Response:*




[LogoutSuccess](#LogoutSuccess)

Success. Returns a success message as shown below. Refer `LogoutSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### registerWithForm
Registration using a form



```javascript
// Promise
const promise = applicationClient.user.registerWithForm({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.registerWithForm({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [FormRegisterRequestSchema](#FormRegisterRequestSchema) | yes | Request body |


Use this API to perform user registration by sending form data in the request body.

*Returned Response:*




[RegisterFormSuccess](#RegisterFormSuccess)

Success. Check the example shown below or refer `RegisterFormSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "request_id": "ebc059191393681cdfb805b5424bddad",
  "message": "OTP sent",
  "mobile": "7400448798",
  "country_code": "91",
  "resend_timer": 30,
  "resend_token": "5197ff90-66e2-11eb-9399-0312fbf2c2a6",
  "verify_mobile_otp": true,
  "register_token": "276e718a-d406-4a4b-83f7-cb6cb72b99ff",
  "userExists": false
}
```
</details>









---


### sendOTPOnEmail
Send OTP on email



```javascript
// Promise
const promise = applicationClient.user.sendOTPOnEmail({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendOTPOnEmail({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema) | yes | Request body |


Use this API to send an OTP to an email ID.

*Returned Response:*




[EmailOtpSuccess](#EmailOtpSuccess)

Success. Returns a JSON object as shown below. Refer `EmailOtpSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true
}
```
</details>









---


### sendOTPOnMobile
Send OTP on mobile



```javascript
// Promise
const promise = applicationClient.user.sendOTPOnMobile({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendOTPOnMobile({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema) | yes | Request body |


Use this API to send an OTP to a mobile number.

*Returned Response:*




[OtpSuccess](#OtpSuccess)

Success. Returns a JSON object as shown below. Refer `OtpSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "success": true,
  "request_id": "01503005aeab87cbed93d40f46cc2749",
  "message": "OTP sent",
  "mobile": "8652523958",
  "country_code": "91",
  "resend_timer": 30,
  "resend_token": "18fc3d60-66e5-11eb-9399-0312fbf2c2a6"
}
```
</details>









---


### sendResetPasswordEmail
Reset Password



```javascript
// Promise
const promise = applicationClient.user.sendResetPasswordEmail({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendResetPasswordEmail({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema) | yes | Request body |


Use this API to reset a password using the link sent on email.

*Returned Response:*




[ResetPasswordSuccess](#ResetPasswordSuccess)

Success. Check the example shown below or refer `ResetPasswordSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": "sent"
}
```
</details>









---


### sendResetPasswordMobile
Reset Password



```javascript
// Promise
const promise = applicationClient.user.sendResetPasswordMobile({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendResetPasswordMobile({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendResetPasswordMobileRequestSchema](#SendResetPasswordMobileRequestSchema) | yes | Request body |


Use this API to reset a password using the link sent on mobile.

*Returned Response:*




[ResetPasswordSuccess](#ResetPasswordSuccess)

Success. Check the example shown below or refer `ResetPasswordSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": "sent"
}
```
</details>









---


### sendResetToken
Reset Password using token



```javascript
// Promise
const promise = applicationClient.user.sendResetToken({  body : value });

// Async/Await
const data = await applicationClient.user.sendResetToken({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CodeRequestBodySchema](#CodeRequestBodySchema) | yes | Request body |


Use this API to send code to reset password.

*Returned Response:*




[ResetPasswordSuccess](#ResetPasswordSuccess)

Success. Check the example shown below or refer `ResetPasswordSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "status": "success"
}
```
</details>









---


### sendVerificationLinkToEmail
Send verification link to email



```javascript
// Promise
const promise = applicationClient.user.sendVerificationLinkToEmail({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendVerificationLinkToEmail({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [EditEmailRequestSchema](#EditEmailRequestSchema) | yes | Request body |


Use this API to send verification link to an email address.

*Returned Response:*




[SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

Request body must contain an email ID. Refer `EditEmailRequestSchema` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### sendVerificationLinkToMobile
Send verification link to mobile



```javascript
// Promise
const promise = applicationClient.user.sendVerificationLinkToMobile({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.sendVerificationLinkToMobile({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema) | yes | Request body |


Use this API to send a verification link to a mobile number

*Returned Response:*




[SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

Success. Check the example shown below or refer `SendMobileVerifyLinkSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "verify_mobile_link": true,
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### setEmailAsPrimary
Set email as primary



```javascript
// Promise
const promise = applicationClient.user.setEmailAsPrimary({  body : value });

// Async/Await
const data = await applicationClient.user.setEmailAsPrimary({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [EditEmailRequestSchema](#EditEmailRequestSchema) | yes | Request body |


Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Returns a JSON object with user details. Refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### setMobileNumberAsPrimary
Set mobile as primary



```javascript
// Promise
const promise = applicationClient.user.setMobileNumberAsPrimary({  body : value });

// Async/Await
const data = await applicationClient.user.setMobileNumberAsPrimary({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema) | yes | Request body |


Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.

*Returned Response:*




[LoginSuccess](#LoginSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### updatePassword
Update user password



```javascript
// Promise
const promise = applicationClient.user.updatePassword({  body : value });

// Async/Await
const data = await applicationClient.user.updatePassword({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema) | yes | Request body |


Use this API to update the password.

*Returned Response:*




[VerifyEmailSuccess](#VerifyEmailSuccess)

Success. Returns a success message. Refer `VerifyEmailSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "success"
}
```
</details>









---


### updateProfile
Edit Profile Details



```javascript
// Promise
const promise = applicationClient.user.updateProfile({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.updateProfile({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [EditProfileRequestSchema](#EditProfileRequestSchema) | yes | Request body |


Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.

*Returned Response:*




[ProfileEditSuccess](#ProfileEditSuccess)

Success. Check the example shown below or refer `LoginSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### verifyEmail
Verify email



```javascript
// Promise
const promise = applicationClient.user.verifyEmail({  body : value });

// Async/Await
const data = await applicationClient.user.verifyEmail({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CodeRequestBodySchema](#CodeRequestBodySchema) | yes | Request body |


Use this API to send a verification code to verify an email.

*Returned Response:*




[VerifyEmailSuccess](#VerifyEmailSuccess)

Success. Check the example shown below or refer `VerifyEmailSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "verified"
}
```
</details>









---


### verifyEmailOTP
Verify OTP on email



```javascript
// Promise
const promise = applicationClient.user.verifyEmailOTP({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.verifyEmailOTP({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema) | yes | Request body |


Use this API to verify the OTP received on an email ID.

*Returned Response:*




[VerifyOtpSuccess](#VerifyOtpSuccess)

Success. Returns a JSON object as shown below. Refer `VerifyOtpSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "verify_mobile_link": true,
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---


### verifyMobile
Verify mobile



```javascript
// Promise
const promise = applicationClient.user.verifyMobile({  body : value });

// Async/Await
const data = await applicationClient.user.verifyMobile({  body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |
| body | [CodeRequestBodySchema](#CodeRequestBodySchema) | yes | Request body |


Use this API to send a verification code to verify a mobile number.

*Returned Response:*




[VerifyEmailSuccess](#VerifyEmailSuccess)

Success. Check the example shown below or refer `VerifyEmailSuccess` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "verified"
}
```
</details>









---


### verifyMobileOTP
Verify OTP on mobile



```javascript
// Promise
const promise = applicationClient.user.verifyMobileOTP({  body : value,
 platform : value });

// Async/Await
const data = await applicationClient.user.verifyMobileOTP({  body : value,
 platform : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| platform | string | no | ID of the application |  
| body | [VerifyOtpRequestSchema](#VerifyOtpRequestSchema) | yes | Request body |


Use this API to verify the OTP received on a mobile number.

*Returned Response:*




[VerifyOtpSuccess](#VerifyOtpSuccess)

Success. Returns a JSON object as shown below. Refer `VerifyOtpSuccess` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; default</i></summary>

```json
{
  "value": {
    "verify_mobile_link": true,
    "user": {
      "debug": {
        "source": "deadlock",
        "platform": "000000000000000000000001"
      },
      "gender": "male",
      "account_type": "user",
      "active": true,
      "profile_pic_url": "https://d2co8r51m5ca2d.cloudfront.net/inapp_banners/default_profile_img.png",
      "has_old_password_hash": false,
      "_id": "5e68af49cfa09bf7233022f1",
      "first_name": "Akash",
      "last_name": "Mane",
      "username": "akashmane_gofynd_com_10039",
      "phone_numbers": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "phone": "8652523958",
          "country_code": 91
        }
      ],
      "emails": [
        {
          "active": true,
          "primary": true,
          "verified": true,
          "email": "akashmane@gofynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@fynd.com"
        },
        {
          "active": true,
          "primary": false,
          "verified": true,
          "email": "akashmane@uniket.store"
        }
      ],
      "created_at": "2020-03-11T09:28:41.982Z",
      "updated_at": "2021-02-04T10:10:44.981Z"
    }
  }
}
```
</details>

</details>









---



### Schemas


#### [Accountkit](#Accountkit)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [ArchiveUserRequestSchema](#ArchiveUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user_id | string? |  yes  |  |
 

---

#### [ArchiveUserSuccess](#ArchiveUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [AuthenticationApiErrorSchema](#AuthenticationApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [AuthenticationInternalServerErrorSchema](#AuthenticationInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [AuthSuccess](#AuthSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 

---

#### [AuthSuccessUser](#AuthSuccessUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | debug | [AuthSuccessUserDebug](#AuthSuccessUserDebug)? |  yes  |  |
 | emails | [AuthSuccessUserEmails](#AuthSuccessUserEmails)? |  yes  |  |
 | first_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [AuthSuccessUserDebug](#AuthSuccessUserDebug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | platform | string? |  yes  |  |
 

---

#### [AuthSuccessUserEmails](#AuthSuccessUserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [BlockUserRequestSchema](#BlockUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | status | boolean? |  yes  |  |
 | user_id | [string]? |  yes  |  |
 

---

#### [BlockUserSuccess](#BlockUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [CodeRequestBodySchema](#CodeRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 

---

#### [CreateUserGroupSchema](#CreateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | file_url | string |  no  |  |
 | name | string |  no  |  |
 

---

#### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_number | string |  no  |  |
 | username | string |  no  |  |
 

---

#### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string? |  yes  |  |
 | max_age | number? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | cookie | string? |  yes  |  |
 | domain | string? |  yes  |  |
 | http_only | boolean? |  yes  |  |
 | max_age | number? |  yes  |  |
 | secure | boolean? |  yes  |  |
 

---

#### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserSchema](#UserSchema)]? |  yes  |  |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 

---

#### [DeleteAccountConsent](#DeleteAccountConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | consent_text | string? |  yes  |  |
 

---

#### [DeleteAccountReasons](#DeleteAccountReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason_id | string? |  yes  |  |
 | reason_text | string? |  yes  |  |
 | show_text_area | boolean? |  yes  |  |
 

---

#### [DeleteApplicationUserRequestSchema](#DeleteApplicationUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | string? |  yes  |  |
 | reason | string? |  yes  |  |
 | reason_id | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [DeleteUserSuccess](#DeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 

---

#### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 

---

#### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android_hash | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | dob | string? |  yes  |  |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | mobile | [EditProfileMobileSchema](#EditProfileMobileSchema)? |  yes  |  |
 | profile_pic_url | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | sender | string? |  yes  |  |
 

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [Facebook](#Facebook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [FlashCard](#FlashCard)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string? |  yes  |  |
 | text | string? |  yes  |  |
 | text_color | string? |  yes  |  |
 

---

#### [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | code | string? |  yes  |  |
 | password | string? |  yes  |  |
 

---

#### [FormRegisterRequestSchema](#FormRegisterRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | password | string? |  yes  |  |
 | phone | [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)? |  yes  |  |
 | register_token | string? |  yes  |  |
 

---

#### [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | app_id | string? |  yes  |  |
 

---

#### [HasPasswordSuccess](#HasPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | result | boolean? |  yes  |  |
 

---

#### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | boolean? |  yes  |  |
 | password | boolean? |  yes  |  |
 

---

#### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logout | boolean? |  yes  |  |
 

---

#### [LookAndFeel](#LookAndFeel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | background_color | string? |  yes  |  |
 | card_position | string? |  yes  |  |
 

---

#### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | fynd_default | boolean? |  yes  |  |
 

---

#### [NotFoundSchema](#NotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchema](#OAuthRequestAppleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | oauth | [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)? |  yes  |  |
 | profile | [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)? |  yes  |  |
 | user_identifier | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | identity_token | string? |  yes  |  |
 

---

#### [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | first_name | string? |  yes  |  |
 | full_name | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [OAuthRequestSchema](#OAuthRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_signed_in | boolean? |  yes  |  |
 | oauth2 | [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)? |  yes  |  |
 | profile | [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)? |  yes  |  |
 

---

#### [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | access_token | string? |  yes  |  |
 | expiry | number? |  yes  |  |
 | refresh_token | string? |  yes  |  |
 

---

#### [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | full_name | string? |  yes  |  |
 | id | string? |  yes  |  |
 | image | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 

---

#### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 

---

#### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number? |  yes  |  |
 | has_next | boolean? |  yes  |  |
 | item_total | number? |  yes  |  |
 | size | number? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [PasswordLoginRequestSchema](#PasswordLoginRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | password | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | number? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [PlatformEmail](#PlatformEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [PlatformMobile](#PlatformMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [PlatformSchema](#PlatformSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | created_at | string? |  yes  |  |
 | delete_account_consent | string? |  yes  |  |
 | delete_account_day | number? |  yes  |  |
 | delete_account_reasons | [[DeleteAccountReasons](#DeleteAccountReasons)]? |  yes  |  |
 | desktop_image | string? |  yes  |  |
 | display | string? |  yes  |  |
 | flash_card | [FlashCard](#FlashCard)? |  yes  |  |
 | forgot_password | boolean? |  yes  |  |
 | login | [Login](#Login)? |  yes  |  |
 | look_and_feel | [LookAndFeel](#LookAndFeel)? |  yes  |  |
 | meta | [MetaSchema](#MetaSchema)? |  yes  |  |
 | mobile_image | string? |  yes  |  |
 | name | string? |  yes  |  |
 | register | boolean? |  yes  |  |
 | register_required_fields | [RegisterRequiredFields](#RegisterRequiredFields)? |  yes  |  |
 | required_fields | [RequiredFields](#RequiredFields)? |  yes  |  |
 | session_config | string? |  yes  |  |
 | skip_captcha | boolean? |  yes  |  |
 | skip_login | boolean? |  yes  |  |
 | social | [Social](#Social)? |  yes  |  |
 | social_tokens | [SocialTokens](#SocialTokens)? |  yes  |  |
 | subtext | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 

---

#### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [ProfileEditSuccessSchema](#ProfileEditSuccessSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | user | string? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [RegisterRequiredFields](#RegisterRequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)? |  yes  |  |
 | mobile | [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)? |  yes  |  |
 

---

#### [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_required | boolean? |  yes  |  |
 | level | string? |  yes  |  |
 

---

#### [RequiredFields](#RequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | [PlatformEmail](#PlatformEmail)? |  yes  |  |
 | mobile | [PlatformMobile](#PlatformMobile)? |  yes  |  |
 

---

#### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | status | string? |  yes  |  |
 

---

#### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | email | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | token | string? |  yes  |  |
 

---

#### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_email_link | boolean? |  yes  |  |
 

---

#### [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | android_hash | string? |  yes  |  |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | force | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | token | string? |  yes  |  |
 

---

#### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | verify_mobile_link | boolean? |  yes  |  |
 

---

#### [SendOtpRequestSchema](#SendOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | android_hash | string? |  yes  |  |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 | message | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 | resend_email_token | string? |  yes  |  |
 | resend_timer | number? |  yes  |  |
 | resend_token | string? |  yes  |  |
 | success | boolean? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 | verify_email_otp | boolean? |  yes  |  |
 | verify_mobile_otp | boolean? |  yes  |  |
 

---

#### [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | email | string? |  yes  |  |
 

---

#### [SendResetPasswordMobileRequestSchema](#SendResetPasswordMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | captcha_code | string? |  yes  |  |
 | country_code | string? |  yes  |  |
 | mobile | string? |  yes  |  |
 

---

#### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [string]? |  yes  |  |
 

---

#### [SessionExpiry](#SessionExpiry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | duration | number? |  yes  |  |
 | is_rolling | boolean? |  yes  |  |
 | type | string? |  yes  |  |
 

---

#### [SessionListResponseInfo](#SessionListResponseInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | domain | string? |  yes  |  |
 | expire_in | string? |  yes  |  |
 | ip | string? |  yes  |  |
 | session_id | string? |  yes  |  |
 | user_agent | string? |  yes  |  |
 

---

#### [SessionListResponseSchema](#SessionListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[SessionListResponseInfo](#SessionListResponseInfo)]? |  yes  |  |
 

---

#### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sessions | [string]? |  yes  |  |
 

---

#### [Social](#Social)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_kit | boolean? |  yes  |  |
 | apple | boolean? |  yes  |  |
 | facebook | boolean? |  yes  |  |
 | google | boolean? |  yes  |  |
 

---

#### [SocialTokens](#SocialTokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | account_kit | [Accountkit](#Accountkit)? |  yes  |  |
 | facebook | [Facebook](#Facebook)? |  yes  |  |
 | google | [Google](#Google)? |  yes  |  |
 

---

#### [TokenRequestBodySchema](#TokenRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | token | string? |  yes  |  |
 

---

#### [UnauthenticatedSchema](#UnauthenticatedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean? |  yes  |  |
 

---

#### [UnauthorizedSchema](#UnauthorizedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [UnDeleteUserRequestSchema](#UnDeleteUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | reason | string? |  yes  |  |
 | reason_id | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 

---

#### [UnDeleteUserSuccess](#UnDeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | success | boolean? |  yes  |  |
 

---

#### [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | new_password | string? |  yes  |  |
 | old_password | string? |  yes  |  |
 

---

#### [UpdateUserGroupSchema](#UpdateUserGroupSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | name | string? |  yes  |  |
 

---

#### [UpdateUserRequestSchema](#UpdateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | emails | [[UserEmails](#UserEmails)]? |  yes  |  |
 | external_id | string? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_numbers | [[UserPhoneNumbers](#UserPhoneNumbers)]? |  yes  |  |
 

---

#### [UserEmails](#UserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | email | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [UserGroupListResponseSchema](#UserGroupListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[UserGroupResponseSchema](#UserGroupResponseSchema)]? |  yes  |  |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 

---

#### [UserGroupResponseSchema](#UserGroupResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | __v | number? |  yes  |  |
 | _id | string? |  yes  |  |
 | application_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | description | string? |  yes  |  |
 | file_url | string? |  yes  |  |
 | modified_at | string? |  yes  |  |
 | name | string? |  yes  |  |
 | status | string? |  yes  |  |
 | uid | number? |  yes  |  |
 

---

#### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 

---

#### [UserPhoneNumbers](#UserPhoneNumbers)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | active | boolean? |  yes  |  |
 | country_code | string? |  yes  |  |
 | phone | string? |  yes  |  |
 | primary | boolean? |  yes  |  |
 | verified | boolean? |  yes  |  |
 

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | account_type | string? |  yes  |  |
 | active | boolean? |  yes  |  |
 | application_id | string? |  yes  |  |
 | created_at | string? |  yes  |  |
 | dob | string? |  yes  |  |
 | emails | [[Email](#Email)]? |  yes  |  |
 | first_name | string? |  yes  |  |
 | gender | string? |  yes  |  |
 | last_name | string? |  yes  |  |
 | meta | string? |  yes  |  |
 | phone_numbers | [[PhoneNumber](#PhoneNumber)]? |  yes  |  |
 | profile_pic_url | string? |  yes  |  |
 | updated_at | string? |  yes  |  |
 | user_id | string? |  yes  |  |
 | username | string? |  yes  |  |
 

---

#### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | users | [[UserSchema](#UserSchema)]? |  yes  |  |
 

---

#### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | string? |  yes  |  |
 | email | string? |  yes  |  |
 | otp | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 

---

#### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | verify_email_link | boolean? |  yes  |  |
 

---

#### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | verify_mobile_link | boolean? |  yes  |  |
 

---

#### [VerifyOtpRequestSchema](#VerifyOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | otp | string? |  yes  |  |
 | register_token | string? |  yes  |  |
 | request_id | string? |  yes  |  |
 

---

#### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | register_token | string? |  yes  |  |
 | user | [UserSchema](#UserSchema)? |  yes  |  |
 | user_exists | boolean? |  yes  |  |
 

---




