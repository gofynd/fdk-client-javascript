




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
const promise = user.addEmail({  body : value,
 platform : value });

// Async/Await
const data = await user.addEmail({  body : value,
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
const promise = user.addMobileNumber({  body : value,
 platform : value });

// Async/Await
const data = await user.addMobileNumber({  body : value,
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
const promise = user.deleteEmail({  active : value,
 primary : value,
 verified : value,
 email : value,
 platform : value });

// Async/Await
const data = await user.deleteEmail({  active : value,
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
const promise = user.deleteMobileNumber({  active : value,
 primary : value,
 verified : value,
 countryCode : value,
 phone : value,
 platform : value });

// Async/Await
const data = await user.deleteMobileNumber({  active : value,
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
const promise = user.deleteUser({  body : value });

// Async/Await
const data = await user.deleteUser({  body : value });
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
const promise = user.forgotPassword({  body : value });

// Async/Await
const data = await user.forgotPassword({  body : value });
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
const promise = user.getListOfActiveSessions();

// Async/Await
const data = await user.getListOfActiveSessions();
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
const promise = user.getLoggedInUser();

// Async/Await
const data = await user.getLoggedInUser();
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
const promise = user.getPlatformConfig({  name : value });

// Async/Await
const data = await user.getPlatformConfig({  name : value });
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
const promise = user.hasPassword();

// Async/Await
const data = await user.hasPassword();
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
const promise = user.loginWithAppleIOS({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithAppleIOS({  body : value,
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
const promise = user.loginWithEmailAndPassword({  body : value });

// Async/Await
const data = await user.loginWithEmailAndPassword({  body : value });
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
const promise = user.loginWithFacebook({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithFacebook({  body : value,
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
const promise = user.loginWithGoogle({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithGoogle({  body : value,
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
const promise = user.loginWithGoogleAndroid({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithGoogleAndroid({  body : value,
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
const promise = user.loginWithGoogleIOS({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithGoogleIOS({  body : value,
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
const promise = user.loginWithOTP({  body : value,
 platform : value });

// Async/Await
const data = await user.loginWithOTP({  body : value,
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
const promise = user.loginWithToken({  body : value });

// Async/Await
const data = await user.loginWithToken({  body : value });
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
const promise = user.logout();

// Async/Await
const data = await user.logout();
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
const promise = user.registerWithForm({  body : value,
 platform : value });

// Async/Await
const data = await user.registerWithForm({  body : value,
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
const promise = user.sendOTPOnEmail({  body : value,
 platform : value });

// Async/Await
const data = await user.sendOTPOnEmail({  body : value,
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
const promise = user.sendOTPOnMobile({  body : value,
 platform : value });

// Async/Await
const data = await user.sendOTPOnMobile({  body : value,
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
const promise = user.sendResetPasswordEmail({  body : value,
 platform : value });

// Async/Await
const data = await user.sendResetPasswordEmail({  body : value,
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
const promise = user.sendResetPasswordMobile({  body : value,
 platform : value });

// Async/Await
const data = await user.sendResetPasswordMobile({  body : value,
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
const promise = user.sendResetToken({  body : value });

// Async/Await
const data = await user.sendResetToken({  body : value });
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
const promise = user.sendVerificationLinkToEmail({  body : value,
 platform : value });

// Async/Await
const data = await user.sendVerificationLinkToEmail({  body : value,
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
const promise = user.sendVerificationLinkToMobile({  body : value,
 platform : value });

// Async/Await
const data = await user.sendVerificationLinkToMobile({  body : value,
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
const promise = user.setEmailAsPrimary({  body : value });

// Async/Await
const data = await user.setEmailAsPrimary({  body : value });
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
const promise = user.setMobileNumberAsPrimary({  body : value });

// Async/Await
const data = await user.setMobileNumberAsPrimary({  body : value });
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
const promise = user.updatePassword({  body : value });

// Async/Await
const data = await user.updatePassword({  body : value });
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
const promise = user.updateProfile({  body : value,
 platform : value });

// Async/Await
const data = await user.updateProfile({  body : value,
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
const promise = user.verifyEmail({  body : value });

// Async/Await
const data = await user.verifyEmail({  body : value });
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
const promise = user.verifyEmailOTP({  body : value,
 platform : value });

// Async/Await
const data = await user.verifyEmailOTP({  body : value,
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
const promise = user.verifyMobile({  body : value });

// Async/Await
const data = await user.verifyMobile({  body : value });
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
const promise = user.verifyMobileOTP({  body : value,
 platform : value });

// Async/Await
const data = await user.verifyMobileOTP({  body : value,
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
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [ArchiveUserRequestSchema](#ArchiveUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user_id | string |  no  |  |

---

#### [ArchiveUserSuccess](#ArchiveUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [AuthenticationApiErrorSchema](#AuthenticationApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [AuthenticationInternalServerErrorSchema](#AuthenticationInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [AuthSuccess](#AuthSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  |

---

#### [AuthSuccessUser](#AuthSuccessUser)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || debug | [AuthSuccessUserDebug](#AuthSuccessUserDebug) |  no  |  || emails | [AuthSuccessUserEmails](#AuthSuccessUserEmails) |  no  |  || first_name | string |  no  |  || last_name | string |  no  |  |

---

#### [AuthSuccessUserDebug](#AuthSuccessUserDebug)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || platform | string |  no  |  |

---

#### [AuthSuccessUserEmails](#AuthSuccessUserEmails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || email | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [BlockUserRequestSchema](#BlockUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason | string |  no  |  || status | boolean |  no  |  || user_id | [string] |  no  |  |

---

#### [BlockUserSuccess](#BlockUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [CodeRequestBodySchema](#CodeRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  |

---

#### [CreateUserRequestSchema](#CreateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  || phone_number | string |  yes  |  || username | string |  yes  |  |

---

#### [CreateUserResponseSchema](#CreateUserResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [CreateUserSessionRequestSchema](#CreateUserSessionRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || domain | string |  no  |  || max_age | number |  no  |  || user_id | string |  no  |  |

---

#### [CreateUserSessionResponseSchema](#CreateUserSessionResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || cookie | string |  no  |  || domain | string |  no  |  || http_only | boolean |  no  |  || max_age | number |  no  |  || secure | boolean |  no  |  |

---

#### [CustomerListResponseSchema](#CustomerListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [[UserSchema](#UserSchema)] |  no  |  || page | [PaginationSchema](#PaginationSchema) |  no  |  |

---

#### [DeleteAccountConsent](#DeleteAccountConsent)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || consent_text | string |  no  |  |

---

#### [DeleteAccountReasons](#DeleteAccountReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason_id | string |  no  |  || reason_text | string |  no  |  || show_text_area | boolean |  no  |  |

---

#### [DeleteApplicationUserRequestSchema](#DeleteApplicationUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | string |  no  |  || reason | string |  no  |  || reason_id | string |  no  |  || request_id | string |  no  |  || user_id | string |  no  |  |

---

#### [DeleteUserSuccess](#DeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [EditEmailRequestSchema](#EditEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  |

---

#### [EditMobileRequestSchema](#EditMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || phone | string |  no  |  |

---

#### [EditProfileMobileSchema](#EditProfileMobileSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || phone | string |  no  |  |

---

#### [EditProfileRequestSchema](#EditProfileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || android_hash | string |  no  |  || country_code | string |  no  |  || dob | string |  no  |  || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || mobile | [EditProfileMobileSchema](#EditProfileMobileSchema) |  no  |  || profile_pic_url | string |  no  |  || register_token | string |  no  |  || sender | string |  no  |  |

---

#### [Email](#Email)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || email | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [EmailOtpSuccess](#EmailOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [Facebook](#Facebook)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [FlashCard](#FlashCard)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || background_color | string |  no  |  || text | string |  no  |  || text_color | string |  no  |  |

---

#### [ForgotPasswordRequestSchema](#ForgotPasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || code | string |  no  |  || password | string |  no  |  |

---

#### [FormRegisterRequestSchema](#FormRegisterRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || password | string |  no  |  || phone | [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone) |  no  |  || register_token | string |  no  |  |

---

#### [FormRegisterRequestSchemaPhone](#FormRegisterRequestSchemaPhone)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [Google](#Google)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || app_id | string |  no  |  |

---

#### [HasPasswordSuccess](#HasPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || result | boolean |  no  |  |

---

#### [Login](#Login)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | boolean |  no  |  || password | boolean |  no  |  |

---

#### [LoginSuccess](#LoginSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || request_id | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [LogoutSuccess](#LogoutSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || logout | boolean |  no  |  |

---

#### [LookAndFeel](#LookAndFeel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || background_color | string |  no  |  || card_position | string |  no  |  |

---

#### [MetaSchema](#MetaSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || fynd_default | boolean |  no  |  |

---

#### [NotFoundSchema](#NotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [OAuthRequestAppleSchema](#OAuthRequestAppleSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || oauth | [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth) |  no  |  || profile | [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile) |  no  |  || user_identifier | string |  no  |  |

---

#### [OAuthRequestAppleSchemaOauth](#OAuthRequestAppleSchemaOauth)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || identity_token | string |  no  |  |

---

#### [OAuthRequestAppleSchemaProfile](#OAuthRequestAppleSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || first_name | string |  no  |  || full_name | string |  no  |  || last_name | string |  no  |  |

---

#### [OAuthRequestSchema](#OAuthRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_signed_in | boolean |  no  |  || oauth2 | [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2) |  no  |  || profile | [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile) |  no  |  |

---

#### [OAuthRequestSchemaOauth2](#OAuthRequestSchemaOauth2)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || access_token | string |  no  |  || expiry | number |  no  |  || refresh_token | string |  no  |  |

---

#### [OAuthRequestSchemaProfile](#OAuthRequestSchemaProfile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || first_name | string |  no  |  || full_name | string |  no  |  || id | string |  no  |  || image | string |  no  |  || last_name | string |  no  |  |

---

#### [OtpSuccess](#OtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  |

---

#### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || current | number |  no  |  || has_next | boolean |  no  |  || item_total | number |  no  |  || size | number |  no  |  || type | string |  no  |  |

---

#### [PasswordLoginRequestSchema](#PasswordLoginRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || password | string |  no  |  || username | string |  no  |  |

---

#### [PhoneNumber](#PhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || country_code | number |  no  |  || phone | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [PlatformEmail](#PlatformEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [PlatformMobile](#PlatformMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [PlatformSchema](#PlatformSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || active | boolean |  no  |  || created_at | string |  no  |  || delete_account_consent | string |  no  |  || delete_account_day | number |  no  |  || delete_account_reasons | [[DeleteAccountReasons](#DeleteAccountReasons)] |  no  |  || desktop_image | string |  no  |  || display | string |  no  |  || flash_card | [FlashCard](#FlashCard) |  no  |  || forgot_password | boolean |  no  |  || login | [Login](#Login) |  no  |  || look_and_feel | [LookAndFeel](#LookAndFeel) |  no  |  || meta | [MetaSchema](#MetaSchema) |  no  |  || mobile_image | string |  no  |  || name | string |  no  |  || register | boolean |  no  |  || register_required_fields | [RegisterRequiredFields](#RegisterRequiredFields) |  no  |  || required_fields | [RequiredFields](#RequiredFields) |  no  |  || session_config | string |  no  |  || skip_captcha | boolean |  no  |  || skip_login | boolean |  no  |  || social | [Social](#Social) |  no  |  || social_tokens | [SocialTokens](#SocialTokens) |  no  |  || subtext | string |  no  |  || updated_at | string |  no  |  |

---

#### [ProfileEditSuccess](#ProfileEditSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  || verify_email_link | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [ProfileEditSuccessSchema](#ProfileEditSuccessSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | string |  no  |  || register_token | string |  no  |  || user | string |  no  |  || user_exists | boolean |  no  |  || verify_email_link | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [RegisterFormSuccess](#RegisterFormSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user_exists | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [RegisterRequiredFields](#RegisterRequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail) |  no  |  || mobile | [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile) |  no  |  |

---

#### [RegisterRequiredFieldsEmail](#RegisterRequiredFieldsEmail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [RegisterRequiredFieldsMobile](#RegisterRequiredFieldsMobile)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || is_required | boolean |  no  |  || level | string |  no  |  |

---

#### [RequiredFields](#RequiredFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || email | [PlatformEmail](#PlatformEmail) |  no  |  || mobile | [PlatformMobile](#PlatformMobile) |  no  |  |

---

#### [ResetPasswordSuccess](#ResetPasswordSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || status | string |  no  |  |

---

#### [SendEmailOtpRequestSchema](#SendEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || email | string |  no  |  || register_token | string |  no  |  || token | string |  no  |  |

---

#### [SendEmailVerifyLinkSuccess](#SendEmailVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || verify_email_link | boolean |  no  |  |

---

#### [SendMobileOtpRequestSchema](#SendMobileOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || android_hash | string |  no  |  || captcha_code | string |  no  |  || country_code | string |  no  |  || force | string |  no  |  || mobile | string |  no  |  || token | string |  no  |  |

---

#### [SendMobileVerifyLinkSuccess](#SendMobileVerifyLinkSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || verify_mobile_link | boolean |  no  |  |

---

#### [SendOtpRequestSchema](#SendOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || android_hash | string |  no  |  || captcha_code | string |  no  |  || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [SendOtpResponse](#SendOtpResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || country_code | string |  no  |  || email | string |  no  |  || message | string |  no  |  || mobile | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  || resend_email_token | string |  no  |  || resend_timer | number |  no  |  || resend_token | string |  no  |  || success | boolean |  no  |  || user_exists | boolean |  no  |  || verify_email_otp | boolean |  no  |  || verify_mobile_otp | boolean |  no  |  |

---

#### [SendResetPasswordEmailRequestSchema](#SendResetPasswordEmailRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || email | string |  no  |  |

---

#### [SendResetPasswordMobileRequestSchema](#SendResetPasswordMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || captcha_code | string |  no  |  || country_code | string |  no  |  || mobile | string |  no  |  |

---

#### [SendVerificationLinkMobileRequestSchema](#SendVerificationLinkMobileRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || active | boolean |  no  |  || country_code | string |  no  |  || phone | string |  no  |  || primary | boolean |  no  |  || verified | boolean |  no  |  |

---

#### [SessionDeleteResponseSchema](#SessionDeleteResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  |

---

#### [SessionExpiry](#SessionExpiry)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || duration | number |  no  |  || is_rolling | boolean |  no  |  || type | string |  no  |  |

---

#### [SessionListResponseSchema](#SessionListResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || items | [string] |  no  |  |

---

#### [SessionListSuccess](#SessionListSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || sessions | [string] |  no  |  |

---

#### [Social](#Social)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_kit | boolean |  no  |  || apple | boolean |  no  |  || facebook | boolean |  no  |  || google | boolean |  no  |  |

---

#### [SocialTokens](#SocialTokens)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || account_kit | [Accountkit](#Accountkit) |  no  |  || facebook | [Facebook](#Facebook) |  no  |  || google | [Google](#Google) |  no  |  |

---

#### [TokenRequestBodySchema](#TokenRequestBodySchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || token | string |  no  |  |

---

#### [UnauthenticatedSchema](#UnauthenticatedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || authenticated | boolean |  no  |  |

---

#### [UnauthorizedSchema](#UnauthorizedSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [UnDeleteUserRequestSchema](#UnDeleteUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || reason | string |  no  |  || reason_id | string |  no  |  || user_id | string |  no  |  |

---

#### [UnDeleteUserSuccess](#UnDeleteUserSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || success | boolean |  no  |  |

---

#### [UpdatePasswordRequestSchema](#UpdatePasswordRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || new_password | string |  no  |  || old_password | string |  no  |  |

---

#### [UpdateUserRequestSchema](#UpdateUserRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || external_id | string |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  |

---

#### [UserObjectSchema](#UserObjectSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  |

---

#### [UserSchema](#UserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || _id | string |  no  |  || account_type | string |  no  |  || active | boolean |  no  |  || application_id | string |  no  |  || created_at | string |  no  |  || dob | string |  no  |  || emails | [[Email](#Email)] |  no  |  || first_name | string |  no  |  || gender | string |  no  |  || last_name | string |  no  |  || meta | string |  no  |  || phone_numbers | [[PhoneNumber](#PhoneNumber)] |  no  |  || profile_pic_url | string |  no  |  || updated_at | string |  no  |  || user_id | string |  no  |  || username | string |  no  |  |

---

#### [UserSearchResponseSchema](#UserSearchResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || users | [[UserSchema](#UserSchema)] |  no  |  |

---

#### [VerifyEmailOtpRequestSchema](#VerifyEmailOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || action | string |  no  |  || email | string |  no  |  || otp | string |  no  |  || register_token | string |  no  |  |

---

#### [VerifyEmailOTPSuccess](#VerifyEmailOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  || verify_email_link | boolean |  no  |  |

---

#### [VerifyEmailSuccess](#VerifyEmailSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || message | string |  no  |  |

---

#### [VerifyMobileOTPSuccess](#VerifyMobileOTPSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || user | [UserSchema](#UserSchema) |  no  |  || verify_mobile_link | boolean |  no  |  |

---

#### [VerifyOtpRequestSchema](#VerifyOtpRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || otp | string |  no  |  || register_token | string |  no  |  || request_id | string |  no  |  |

---

#### [VerifyOtpSuccess](#VerifyOtpSuccess)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- || register_token | string |  no  |  || user | [UserSchema](#UserSchema) |  no  |  || user_exists | boolean |  no  |  |

---




