




##### [Back to Partner docs](./README.md)

## Theme Methods
Responsible for partner theme submission


Default
* [createNewThemeInOrganization](#createnewthemeinorganization)
* [createPage](#createpage)
* [deleteOrganizationTheme](#deleteorganizationtheme)
* [deletePage](#deletepage)
* [deleteTheme](#deletetheme)
* [getAllPages](#getallpages)
* [getApplicationThemes](#getapplicationthemes)
* [getLatestVersionOfThemeBySlug](#getlatestversionofthemebyslug)
* [getOrganizationThemeDetails](#getorganizationthemedetails)
* [getOrganizationThemes](#getorganizationthemes)
* [getPage](#getpage)
* [getThemeById](#getthemebyid)
* [getThemeRejectionReasons](#getthemerejectionreasons)
* [getThemeVersions](#getthemeversions)
* [submitOrganizationTheme](#submitorganizationtheme)
* [updateDraftTheme](#updatedrafttheme)
* [updateMultiplePages](#updatemultiplepages)
* [updatePage](#updatepage)
* [updateTheme](#updatetheme)




## Methods with example and description





### createNewThemeInOrganization
Create a new theme for the organization



```javascript
// Promise
const promise = partnerClient.theme.createNewThemeInOrganization({  organizationId : value,
 body : value,
 slug : value });

// Async/Await
const data = await partnerClient.theme.createNewThemeInOrganization({  organizationId : value,
 body : value,
 slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |    
| slug | string | no | The slug of the theme. |  
| body | [MarketplaceTheme](#MarketplaceTheme) | yes | Request body |


Use this api to create a new theme for the organization

*Returned Response:*




[MarketplaceTheme](#MarketplaceTheme)

Theme updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": {
    "_id": "64be51bee7048a025f4fb0b8",
    "payment": {
      "is_paid": false,
      "amount": 0
    },
    "contact": {
      "developer_contact": [
        "test@gofynd.com"
      ],
      "seller_contact": "test@gofynd.com"
    },
    "industry": [
      "Business equipment and supplies",
      "Books, music, and video",
      "Clothing"
    ],
    "is_update": false,
    "is_default": false,
    "name": "White-Splash",
    "tagline": "Where Style Meets Artistry",
    "description": "Kartmax is the perfect theme to get you started with your store. Capture audiences' attention through captivating layouts inspired by editorial design, striking typography, and impactful hero sections. Embrace a contemporary narrative that exudes personality and brings your content to life.",
    "catalog_size": {
      "min": 200,
      "max": 0
    },
    "images": {
      "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
      "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
    },
    "carousel": [
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/u3zWsTqM5-carousel_mobile_1.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      }
    ],
    "src": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/zrIW3mA4G-White-Splash_1.0.157.zip",
    "explore": {
      "title": "Elevate Your Shopping Experience",
      "description": "Designed to cater to extensive carts and inventories, featuring a prominent search bar and the choice for a permanently visible cart sidebar."
    },
    "features": [
      {
        "category": "Home Sections",
        "list": [
          {
            "label": "Video",
            "description": "Video as a section"
          },
          {
            "label": "Carousel",
            "description": "Carousel as a section"
          }
        ]
      },
      {
        "category": "Authentication",
        "list": [
          {
            "label": "Standard Login Interface",
            "description": "Deafult Login Interface, use this if you have not implmented custom login interface for login, register flows inside your theme code."
          },
          {
            "label": "Login with Email",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Login with Mobile Number",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Voice OTP",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Social Media login",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          }
        ]
      },
      {
        "category": "Cart & Checkout",
        "list": [
          {
            "label": "Guest Checkout",
            "description": "Enables customer to buy a product without login"
          },
          {
            "label": "Customized Cart",
            "description": "--"
          }
        ]
      },
      {
        "category": "Product Description",
        "list": [
          {
            "label": "Buy Now",
            "description": "Buy Now flow support along with Add to Cart"
          },
          {
            "label": "Product Videos",
            "description": "Videos present in product catalog can be shown"
          },
          {
            "label": "3D Model of Product",
            "description": "3D Models present in product catalog can be shown"
          },
          {
            "label": "Product Variants",
            "description": "Show variants of a particular product"
          },
          {
            "label": "Extension Support",
            "description": "Supports various extensions made for Prdouct Page"
          },
          {
            "label": "Default Size Selection",
            "description": "By default select one size"
          },
          {
            "label": "Product Highlights",
            "description": "Show highlights added in the cartalog"
          },
          {
            "label": "Short Description",
            "description": "Show short description from catalog in PDP"
          }
        ]
      },
      {
        "category": "Product Listing",
        "list": [
          {
            "label": "Infinite Scroll",
            "description": "Infinite scrolling support using lazy loady"
          },
          {
            "label": "Discount Badges",
            "description": "Show discount or custom badges on Product tiles"
          },
          {
            "label": "Product Variants",
            "description": "Supports showcase various variants on the listing itself"
          }
        ]
      },
      {
        "category": "Navigation",
        "list": [
          {
            "label": "Customizable Navigation Menu",
            "description": "Customize Navigation Menu to accomodate multiple desings"
          }
        ]
      },
      {
        "category": "SEO",
        "list": [
          {
            "label": "alt text",
            "description": "Alt text data received in API is used on Product Images"
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Styles and Colours",
        "description": "With custom colours and styles, you can modify the appearance of your entire store or particular sections for specific events, marketing drives, or whenever des",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      },
      {
        "title": "Enhanced Navigation and Menu:",
        "description": "Unleash the full potential of your header by showcasing images, videos, products, and collections in an enhanced dropdown menu. Improve the browsing experience ",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      }
    ],
    "variations": [
      {
        "name": "default",
        "color": "#35919b",
        "demo_url": "nx7zjzx4i.hostx1.de",
        "images": {
          "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
          "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
        }
      }
    ],
    "documentation": {
      "notes": "<p>White splash user documentation</p>",
      "url": ""
    },
    "status": "published",
    "step": 7,
    "comments": {
      "developer_remark": "White Splash fyndx1 theme submission",
      "reviewer_feedback": ""
    },
    "release": {
      "version": "1.0.157",
      "notes": "<p>White-splash release notes. Fyndx1 theme submission.</p>"
    },
    "slug": "white-splash",
    "organization_id": "64aec4634bc407961ed265c5",
    "user_id": "ce6432937739e49875dedae0",
    "created_at": "2023-07-24T10:26:06.612Z",
    "updated_at": "2023-07-24T10:26:37.894Z",
    "template_theme_id": "64be51dd44650d20b5b15f18",
    "theme_type": "vue2"
  }
}
```
</details>

</details>









---


### createPage
Create a page 



```javascript
// Promise
const promise = partnerClient.theme.createPage({  themeId : value,
 organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.createPage({  themeId : value,
 organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |   
| organizationId | string | yes | Organization ID |  
| body | [AvailablePageSchema](#AvailablePageSchema) | yes | Request body |


Use this API to create a page for a theme by its ID.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "value": {
    "path": "",
    "type": "system",
    "seo": {
      "title": "",
      "description": "",
      "_id": "60210832d7e98115b013f6ac"
    },
    "props": [],
    "_id": "60ab5ca6d572fed64294eafc",
    "sections": [
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": false,
            "desktop": false,
            "tablet": false
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "utm": "facebook"
            }
          }
        },
        "name": "customHtml",
        "props": {
          "code": {
            "type": "code",
            "value": "<p style=\"text-align:right;\"><a href=\"tel:+919820204442\"><img src=\"https://dabuttonfactory.com/button.png?t=For+any+queries%2C+call%3A+%2B91+98202+04442&f=Open+Sans-Bold&ts=21&tc=fff&hp=20&vp=15&c=round&bgt=unicolored&bgc=7043f7\"/> </a></p>"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "udm": "vivek"
            }
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "Popular rrrrr"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          }
        ],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": false,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "featuredProducts",
        "props": {
          "heading": {
            "value": "Featured Products",
            "type": "text"
          },
          "item_count": {
            "type": "range",
            "value": 4
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          }
        },
        "preset": {
          "blocks": [
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            }
          ]
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "categoryListPage",
        "props": {
          "heading": {
            "type": "text",
            "value": "Explore Categories"
          },
          "layout": {
            "type": "select",
            "value": "grid"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "heroBanner",
        "props": {
          "ctaLink": {
            "type": "url",
            "value": "https://uniket.hostx0.de/about-us"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "imageBanner",
        "props": {
          "image": {
            "value": "",
            "type": "image_picker"
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          },
          "overlayLayout": {
            "value": "left",
            "type": "select"
          },
          "overlayImage": {
            "value": "",
            "type": "image_picker"
          },
          "text": {
            "value": "",
            "type": "text"
          },
          "text_color": {
            "value": "#000",
            "type": "color"
          },
          "ctaLink": {
            "value": "",
            "type": "url"
          },
          "ctaText": {
            "value": "",
            "type": "text"
          },
          "layout": {
            "type": "select",
            "value": "full"
          },
          "height": {
            "type": "select",
            "value": "h-auto"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "asdfasdf"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      }
    ],
    "value": "home",
    "text": "Home",
    "theme": "5fb3ee4194a5181feeeba8e5",
    "sections_meta": [],
    "__v": 9
  }
}
```
</details>

</details>









---


### deleteOrganizationTheme
Delete a theme



```javascript
// Promise
const promise = partnerClient.theme.deleteOrganizationTheme({  organizationId : value,
 themeId : value });

// Async/Await
const data = await partnerClient.theme.deleteOrganizationTheme({  organizationId : value,
 themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| themeId | string | yes | The ID of the theme |  



This endpoint allows you to delete a theme by providing the organization and theme IDs.

*Returned Response:*




[MarketplaceTheme](#MarketplaceTheme)

Successful deletion of the theme




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### deletePage
Deletes a page 



```javascript
// Promise
const promise = partnerClient.theme.deletePage({  themeId : value,
 pageValue : value,
 organizationId : value });

// Async/Await
const data = await partnerClient.theme.deletePage({  themeId : value,
 pageValue : value,
 organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |   
| organizationId | string | yes | Organization ID |  



Use this API to delete a page for a theme by its ID and page_value.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "value": {
    "path": "",
    "type": "system",
    "seo": {
      "title": "",
      "description": "",
      "_id": "60210832d7e98115b013f6ac"
    },
    "props": [],
    "_id": "60ab5ca6d572fed64294eafc",
    "sections": [
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": false,
            "desktop": false,
            "tablet": false
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "utm": "facebook"
            }
          }
        },
        "name": "customHtml",
        "props": {
          "code": {
            "type": "code",
            "value": "<p style=\"text-align:right;\"><a href=\"tel:+919820204442\"><img src=\"https://dabuttonfactory.com/button.png?t=For+any+queries%2C+call%3A+%2B91+98202+04442&f=Open+Sans-Bold&ts=21&tc=fff&hp=20&vp=15&c=round&bgt=unicolored&bgc=7043f7\"/> </a></p>"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "udm": "vivek"
            }
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "Popular rrrrr"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          }
        ],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": false,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "featuredProducts",
        "props": {
          "heading": {
            "value": "Featured Products",
            "type": "text"
          },
          "item_count": {
            "type": "range",
            "value": 4
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          }
        },
        "preset": {
          "blocks": [
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            }
          ]
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "categoryListPage",
        "props": {
          "heading": {
            "type": "text",
            "value": "Explore Categories"
          },
          "layout": {
            "type": "select",
            "value": "grid"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "heroBanner",
        "props": {
          "ctaLink": {
            "type": "url",
            "value": "https://uniket.hostx0.de/about-us"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "imageBanner",
        "props": {
          "image": {
            "value": "",
            "type": "image_picker"
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          },
          "overlayLayout": {
            "value": "left",
            "type": "select"
          },
          "overlayImage": {
            "value": "",
            "type": "image_picker"
          },
          "text": {
            "value": "",
            "type": "text"
          },
          "text_color": {
            "value": "#000",
            "type": "color"
          },
          "ctaLink": {
            "value": "",
            "type": "url"
          },
          "ctaText": {
            "value": "",
            "type": "text"
          },
          "layout": {
            "type": "select",
            "value": "full"
          },
          "height": {
            "type": "select",
            "value": "h-auto"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "asdfasdf"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      }
    ],
    "value": "home",
    "text": "Home",
    "theme": "5fb3ee4194a5181feeeba8e5",
    "sections_meta": [],
    "__v": 9
  }
}
```
</details>

</details>









---


### deleteTheme
Delete a theme



```javascript
// Promise
const promise = partnerClient.theme.deleteTheme({  themeId : value,
 organizationId : value });

// Async/Await
const data = await partnerClient.theme.deleteTheme({  themeId : value,
 organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | The ID of the theme to be deleted. |   
| organizationId | string | yes | Organization ID |  



This endpoint is used to delete a theme from the specified company and application.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Theme successfully deleted.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": {
    "_id": "64be4423bc7b28003211322e",
    "applied": false,
    "is_private": false,
    "tags": [],
    "application_id": "6487ea376e1442284917c44e",
    "marketplace_theme_id": "64be1f4cceb549012e93d5f4",
    "meta": {
      "payment": {
        "is_paid": false,
        "amount": 0
      },
      "description": "Indulge in the epitome of luxury with our expertly crafted theme, showcasing a high-end aesthetic that exudes elegance. Designed with meticulous attention to detail, our features are tailored to elevate your products and amplify your brand identity.",
      "industry": [
        "Arts and crafts",
        "Baby and kids",
        "Books, music, and video"
      ],
      "release": {
        "notes": "<p>Emerge release notes. Fyndx1 theme submission.</p>"
      },
      "images": {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/McHjwol_h-images_desktop.webp",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/bq6gXrmVE-images_mobile.webp"
      },
      "slug": "emerge"
    },
    "name": "Emerge",
    "template_theme_id": "64be1fdc2139f66b3ca2e94d",
    "version": "1.0.153",
    "styles": {},
    "created_at": "2023-07-24T09:28:03.845Z",
    "updated_at": "2023-07-31T12:14:13.097Z",
    "theme_type": "vue2",
    "assets": {
      "umd_js": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.8.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.cart.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.extras.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.js"
        ],
        "link": ""
      },
      "common_js": {
        "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.common.js"
      },
      "css": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_cart.1b038cd83e502f2d58bc.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_extras.f8a9789ae6a06b0bd503.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products-listing.1d639747568baee211ba.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products.c1f151d12b3f704fe028.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_profile.c9e6a92612e4b423dbd7.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_vendors_products-listing.c8fe85761d60286348e3.css"
        ],
        "link": ""
      }
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
        },
        "medium": {
          "name": "500",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
        },
        "semi_bold": {
          "name": "600",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        }
      },
      "family": "Poppins"
    },
    "config": {
      "current": "Default",
      "list": [
        {
          "name": "Default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#ffffff",
                "header_text_color": "#000000",
                "header_border_color": "#e1e1e1",
                "header_icon_color": "#000000",
                "header_cart_notification_bg_color": "#e8a76c",
                "header_cart_notification_text_color": "#ffffff",
                "header_nav_hover_color": "#999999",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#ffffff",
                "footer_text_color": "#999999",
                "footer_border_color": "#e1e1e1",
                "footer_nav_hover_color": "#000000",
                "disable_cart": false,
                "is_menu_below_logo": false,
                "menu_position": "left"
              }
            }
          },
          "page": []
        },
        {
          "name": "Dark",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#2e3032",
                "header_text_color": "#ffffff",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#ffffff",
                "header_cart_notification_bg_color": "#FFFFFF",
                "header_cart_notification_text_color": "#2e3032",
                "header_nav_hover_color": "#000000",
                "button_primary_color": "#000000",
                "button_primary_label_color": "#ffffff",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#2e3032",
                "footer_text_color": "#ffffff",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#ffffff"
              }
            }
          },
          "page": []
        },
        {
          "name": "Blue",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#7f9ed0",
                "header_text_color": "#FFFFFF",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#FFFFFF",
                "header_cart_notification_bg_color": "#2e3032",
                "header_cart_notification_text_color": "#FFFFFF",
                "header_nav_hover_color": "#2e3032",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#7f9ed0",
                "footer_text_color": "#FFFFFF",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#2e3032"
              }
            }
          },
          "page": []
        }
      ],
      "preset": {
        "pages": [
          {
            "sections": [
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "hero_image",
                "props": {
                  "image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_layout": {
                    "type": "select",
                    "value": "center"
                  },
                  "overlay_image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_text": {
                    "value": "",
                    "type": "text"
                  },
                  "text_color": {
                    "value": "#000",
                    "type": "color"
                  },
                  "button_link": {
                    "type": "url",
                    "value": ""
                  },
                  "button_text": {
                    "value": "Shop Now",
                    "type": "text"
                  },
                  "full_width": {
                    "value": true,
                    "type": "checkbox"
                  }
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_slideshow",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_height": {
                    "value": "adapt",
                    "type": "select"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  },
                  "title": {
                    "value": "Trending",
                    "type": "text"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    }
                  ]
                }
              },
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_gallery",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Popular Brands"
                  },
                  "layout": {
                    "value": "grid",
                    "type": "select"
                  },
                  "item_count": {
                    "value": 4,
                    "type": "range"
                  },
                  "cta_text": {
                    "value": "",
                    "type": "text"
                  },
                  "cta_link": {
                    "type": "url",
                    "value": ""
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    }
                  ]
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "brands_listing",
                "props": {
                  "brand_type": {
                    "value": "all",
                    "type": "radio"
                  },
                  "cta_text": {
                    "value": "View all",
                    "type": "text"
                  },
                  "department": {
                    "type": "department"
                  },
                  "header": {
                    "type": "header"
                  },
                  "items_per_row": {
                    "value": 5,
                    "type": "range"
                  },
                  "layout": {
                    "value": "horizontal",
                    "type": "select"
                  },
                  "title": {
                    "type": "text",
                    "value": "Brands"
                  },
                  "view_options": {
                    "value": "fullview",
                    "type": "select"
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "testimonials",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    }
                  ]
                }
              }
            ],
            "value": "home"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "checkbox",
            "id": "disable_cart",
            "category": "Colors",
            "label": "header"
          }
        ]
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "url",
            "id": "banner_link",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "application_banner",
        "label": "Application Banner"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "header",
            "id": "header",
            "value": "Choose Brands to Show"
          },
          {
            "id": "view_options",
            "type": "select",
            "options": [
              {
                "value": "logo",
                "text": "Logo View"
              },
              {
                "value": "fullview",
                "text": "Logo and Banner View"
              }
            ],
            "label": "View Options",
            "info": "Brand card view options"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "department",
                "text": "Department"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "department",
            "id": "department",
            "label": "Department",
            "info": "Select a department of brands",
            "note": "Department only applies if 'department' type is selected"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "brand_item",
            "name": "Brand Item",
            "props": [
              {
                "type": "brand",
                "id": "brand",
                "label": "Select Brand"
              }
            ]
          }
        ],
        "name": "brands_listing",
        "label": "Brands Listing"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "text",
            "id": "tags_filter",
            "label": "Filter by tags",
            "info": "Filter by Tags "
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Max items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select Collection"
              }
            ]
          }
        ],
        "name": "collections_listing",
        "label": "Collections Listing"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "custom_html",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "extension",
            "id": "extension",
            "label": "Extension Positions",
            "info": "Handle extension in these positions",
            "positions": [
              {
                "value": "section_extension",
                "text": ""
              }
            ]
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "section_extension",
        "label": "Extensions"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [],
        "name": "featured_collection",
        "label": "Featured Collection"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "overlay_layout",
            "type": "select",
            "options": [
              {
                "value": "left",
                "text": "Align Left"
              },
              {
                "value": "center",
                "text": "Align Center"
              },
              {
                "value": "right",
                "text": "Align Right"
              }
            ],
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlay_image",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "overlay_text",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "fullscreen_image",
            "label": "Fullscreen Banner ",
            "info": "Check to allow items to take entire viewport"
          }
        ],
        "blocks": [],
        "name": "hero_image",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "type": "video",
            "id": "videoFile",
            "label": "Primary Video"
          },
          {
            "id": "videoUrl",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "hidecontrols",
            "label": "Hide Video Controls",
            "info": "check to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "showloop",
            "label": "Play Video in Loop",
            "info": "check to disable Loop"
          },
          {
            "type": "text",
            "id": "title",
            "label": "Heading"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Thumbnail Image"
          }
        ],
        "blocks": [],
        "name": "hero_video-v2",
        "label": "Hero Video V2"
      },
      {
        "props": [
          {
            "id": "video_url",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "controls",
            "label": "Video Controls",
            "info": "Uncheck to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "bg_video",
            "label": "Video In Background",
            "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              },
              {
                "value": "adapt",
                "text": "Adapt"
              },
              {
                "value": "fullscreen",
                "text": "Fullscreen"
              }
            ],
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_image",
            "label": "Enable Overlay Image"
          },
          {
            "id": "cover_url",
            "type": "image_picker",
            "label": "Video Overlay Image"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_color",
            "label": "Enable Overlay Colour"
          },
          {
            "type": "color",
            "id": "overlay_color",
            "label": "Overlay Color"
          },
          {
            "type": "range",
            "id": "overlay_opacity",
            "min": 0,
            "max": 1,
            "step": 0.1,
            "unit": "",
            "label": "Overlay Opacity"
          },
          {
            "type": "select",
            "id": "overlay_size",
            "options": [
              {
                "value": "container",
                "text": "Container (Default)"
              },
              {
                "value": "content",
                "text": "Content"
              }
            ],
            "label": "Overlay Size"
          },
          {
            "id": "overlay_position",
            "type": "select",
            "options": [
              {
                "value": "top-left",
                "text": "Top Left"
              },
              {
                "value": "top-center",
                "text": "Top Center"
              },
              {
                "value": "top-right",
                "text": "Top Right"
              },
              {
                "value": "center-left",
                "text": "Center Left"
              },
              {
                "value": "center-center",
                "text": "Center (Default)"
              },
              {
                "value": "center-right",
                "text": "Center Right"
              },
              {
                "value": "bottom-left",
                "text": "Bottom Left"
              },
              {
                "value": "bottom-center",
                "text": "Bottom Center"
              },
              {
                "value": "bottom-right",
                "text": "Bottom right"
              }
            ],
            "label": "Overlay position",
            "info": "Alignment of Overlay content(heading, sub-heading, button)"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "label": "Heading Text Color"
          },
          {
            "type": "text",
            "id": "sub_heading",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "sub_heading_color",
            "label": "Sub-heading Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "name": "hero_video",
        "label": "Hero Video"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          },
          {
            "type": "url",
            "id": "cta_link",
            "label": "CTA Link",
            "info": "Link to redirect"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "gallery_image",
            "name": "Image",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Gallery Image"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption"
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "name": "image_gallery",
        "label": "Image Gallery",
        "preset": {
          "blocks": [
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          },
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first image"
              },
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              }
            ],
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "image_slide",
            "name": "Slide",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Image"
              },
              {
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "name": "image_slideshow",
        "label": "Image Slideshow",
        "preset": {
          "blocks": [
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "image_picker",
            "id": "image",
            "label": "Image"
          },
          {
            "id": "video",
            "type": "url",
            "label": "Video"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "cover",
            "type": "url",
            "label": "Video Cover Image"
          },
          {
            "type": "select",
            "id": "media_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Media Alignment"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "text",
            "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
            "label": "Text"
          },
          {
            "type": "select",
            "id": "text_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Text Alignment"
          }
        ],
        "blocks": [],
        "name": "media_with_text",
        "label": "Media with text"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every"
          }
        ],
        "blocks": [
          {
            "type": "testimonial",
            "name": "Testimonial",
            "props": [
              {
                "type": "textarea",
                "id": "testimonialText",
                "label": "Text for Testimonial",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author_name",
                "label": "Author name"
              },
              {
                "type": "text",
                "id": "author_description",
                "label": "Author Description"
              },
              {
                "type": "image_picker",
                "id": "author_image",
                "label": "Author Image"
              }
            ]
          }
        ],
        "name": "testimonials",
        "label": "Testimonial",
        "preset": {
          "blocks": [
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            }
          ]
        }
      }
    ],
    "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/7yuL57qP2-archive.zip"
  }
}
```
</details>

<details>
<summary><i>&nbsp; example2</i></summary>

```json
{
  "value": {
    "_id": "64b91fe317422a1e1392f85b",
    "applied": true,
    "is_private": true,
    "tags": [],
    "name": "Astra",
    "version": "1.0.11",
    "application_id": "7487ea376e1442284917c44e",
    "styles": {},
    "template_theme_id": "64be264c0347c5002279b75f",
    "created_at": "2023-07-24T07:20:44.629Z",
    "updated_at": "2023-08-01T11:09:25.857Z",
    "theme_type": "vue2",
    "assets": {
      "umd_js": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.9.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.cart.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.extras.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing_profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.js"
        ],
        "link": ""
      },
      "common_js": {
        "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.common.js"
      },
      "css": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_extras.8604b743eb82cd74e4bb.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing_profile.944723408675f52ed297.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing.ca493ea7d081b4b575f7.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products.2c64f7731dab64227f0b.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_profile.1b1467735927e188d272.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_vendors_products-listing.c8fe85761d60286348e3.css"
        ],
        "link": ""
      }
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
        },
        "medium": {
          "name": "500",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
        },
        "semi_bold": {
          "name": "600",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        }
      },
      "family": "Poppins"
    },
    "config": {
      "current": "Default",
      "list": [
        {
          "name": "Default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#ffffff",
                "header_text_color": "#000000",
                "header_border_color": "#e1e1e1",
                "header_icon_color": "#000000",
                "header_cart_notification_bg_color": "#e8a76c",
                "header_cart_notification_text_color": "#ffffff",
                "header_nav_hover_color": "#999999",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#ffffff",
                "footer_text_color": "#999999",
                "footer_border_color": "#e1e1e1",
                "footer_nav_hover_color": "#000000",
                "disable_cart": false,
                "is_menu_below_logo": false,
                "menu_position": "left"
              }
            }
          },
          "page": []
        },
        {
          "name": "Dark",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#2e3032",
                "header_text_color": "#ffffff",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#ffffff",
                "header_cart_notification_bg_color": "#FFFFFF",
                "header_cart_notification_text_color": "#2e3032",
                "header_nav_hover_color": "#000000",
                "button_primary_color": "#000000",
                "button_primary_label_color": "#ffffff",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#2e3032",
                "footer_text_color": "#ffffff",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#ffffff"
              }
            }
          },
          "page": []
        },
        {
          "name": "Blue",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#7f9ed0",
                "header_text_color": "#FFFFFF",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#FFFFFF",
                "header_cart_notification_bg_color": "#2e3032",
                "header_cart_notification_text_color": "#FFFFFF",
                "header_nav_hover_color": "#2e3032",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#7f9ed0",
                "footer_text_color": "#FFFFFF",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#2e3032"
              }
            }
          },
          "page": []
        }
      ],
      "preset": {
        "pages": [
          {
            "sections": [
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "hero_image",
                "props": {
                  "image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_layout": {
                    "type": "select",
                    "value": "center"
                  },
                  "overlay_image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_text": {
                    "value": "",
                    "type": "text"
                  },
                  "text_color": {
                    "value": "#000",
                    "type": "color"
                  },
                  "button_link": {
                    "type": "url",
                    "value": ""
                  },
                  "button_text": {
                    "value": "Shop Now",
                    "type": "text"
                  },
                  "full_width": {
                    "value": true,
                    "type": "checkbox"
                  }
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_slideshow",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_height": {
                    "value": "adapt",
                    "type": "select"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  },
                  "title": {
                    "value": "Trending",
                    "type": "text"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    }
                  ]
                }
              },
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_gallery",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Popular Brands"
                  },
                  "layout": {
                    "value": "grid",
                    "type": "select"
                  },
                  "item_count": {
                    "value": 4,
                    "type": "range"
                  },
                  "cta_text": {
                    "value": "",
                    "type": "text"
                  },
                  "cta_link": {
                    "type": "url",
                    "value": ""
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    }
                  ]
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "brands_listing",
                "props": {
                  "brand_type": {
                    "value": "all",
                    "type": "radio"
                  },
                  "cta_text": {
                    "value": "View all",
                    "type": "text"
                  },
                  "department": {
                    "type": "department"
                  },
                  "header": {
                    "type": "header"
                  },
                  "items_per_row": {
                    "value": 5,
                    "type": "range"
                  },
                  "layout": {
                    "value": "horizontal",
                    "type": "select"
                  },
                  "title": {
                    "type": "text",
                    "value": "Brands"
                  },
                  "view_options": {
                    "value": "fullview",
                    "type": "select"
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "testimonials",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    }
                  ]
                }
              }
            ],
            "value": "home"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "checkbox",
            "id": "disable_cart",
            "category": "Colors",
            "label": "header"
          }
        ]
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "url",
            "id": "banner_link",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "application_banner",
        "label": "Application Banner"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "header",
            "id": "header",
            "value": "Choose Brands to Show"
          },
          {
            "id": "view_options",
            "type": "select",
            "options": [
              {
                "value": "logo",
                "text": "Logo View"
              },
              {
                "value": "fullview",
                "text": "Logo and Banner View"
              }
            ],
            "label": "View Options",
            "info": "Brand card view options"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "department",
                "text": "Department"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "department",
            "id": "department",
            "label": "Department",
            "info": "Select a department of brands",
            "note": "Department only applies if 'department' type is selected"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "brand_item",
            "name": "Brand Item",
            "props": [
              {
                "type": "brand",
                "id": "brand",
                "label": "Select Brand"
              }
            ]
          }
        ],
        "name": "brands_listing",
        "label": "Brands Listing"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "text",
            "id": "tags_filter",
            "label": "Filter by tags",
            "info": "Filter by Tags "
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Max items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select Collection"
              }
            ]
          }
        ],
        "name": "collections_listing",
        "label": "Collections Listing"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "custom_html",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "extension",
            "id": "extension",
            "label": "Extension Positions",
            "info": "Handle extension in these positions",
            "positions": [
              {
                "value": "section_extension",
                "text": ""
              }
            ]
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "section_extension",
        "label": "Extensions"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [],
        "name": "featured_collection",
        "label": "Featured Collection"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "overlay_layout",
            "type": "select",
            "options": [
              {
                "value": "left",
                "text": "Align Left"
              },
              {
                "value": "center",
                "text": "Align Center"
              },
              {
                "value": "right",
                "text": "Align Right"
              }
            ],
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlay_image",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "overlay_text",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "fullscreen_image",
            "label": "Fullscreen Banner ",
            "info": "Check to allow items to take entire viewport"
          }
        ],
        "blocks": [],
        "name": "hero_image",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "type": "video",
            "id": "videoFile",
            "label": "Primary Video"
          },
          {
            "id": "videoUrl",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "hidecontrols",
            "label": "Hide Video Controls",
            "info": "check to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "showloop",
            "label": "Play Video in Loop",
            "info": "check to disable Loop"
          },
          {
            "type": "text",
            "id": "title",
            "label": "Heading"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Thumbnail Image"
          }
        ],
        "blocks": [],
        "name": "hero_video-v2",
        "label": "Hero Video V2"
      },
      {
        "props": [
          {
            "id": "video_url",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "controls",
            "label": "Video Controls",
            "info": "Uncheck to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "bg_video",
            "label": "Video In Background",
            "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              },
              {
                "value": "adapt",
                "text": "Adapt"
              },
              {
                "value": "fullscreen",
                "text": "Fullscreen"
              }
            ],
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_image",
            "label": "Enable Overlay Image"
          },
          {
            "id": "cover_url",
            "type": "image_picker",
            "label": "Video Overlay Image"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_color",
            "label": "Enable Overlay Colour"
          },
          {
            "type": "color",
            "id": "overlay_color",
            "label": "Overlay Color"
          },
          {
            "type": "range",
            "id": "overlay_opacity",
            "min": 0,
            "max": 1,
            "step": 0.1,
            "unit": "",
            "label": "Overlay Opacity"
          },
          {
            "type": "select",
            "id": "overlay_size",
            "options": [
              {
                "value": "container",
                "text": "Container (Default)"
              },
              {
                "value": "content",
                "text": "Content"
              }
            ],
            "label": "Overlay Size"
          },
          {
            "id": "overlay_position",
            "type": "select",
            "options": [
              {
                "value": "top-left",
                "text": "Top Left"
              },
              {
                "value": "top-center",
                "text": "Top Center"
              },
              {
                "value": "top-right",
                "text": "Top Right"
              },
              {
                "value": "center-left",
                "text": "Center Left"
              },
              {
                "value": "center-center",
                "text": "Center (Default)"
              },
              {
                "value": "center-right",
                "text": "Center Right"
              },
              {
                "value": "bottom-left",
                "text": "Bottom Left"
              },
              {
                "value": "bottom-center",
                "text": "Bottom Center"
              },
              {
                "value": "bottom-right",
                "text": "Bottom right"
              }
            ],
            "label": "Overlay position",
            "info": "Alignment of Overlay content(heading, sub-heading, button)"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "label": "Heading Text Color"
          },
          {
            "type": "text",
            "id": "sub_heading",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "sub_heading_color",
            "label": "Sub-heading Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "name": "hero_video",
        "label": "Hero Video"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          },
          {
            "type": "url",
            "id": "cta_link",
            "label": "CTA Link",
            "info": "Link to redirect"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "gallery_image",
            "name": "Image",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Gallery Image"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption"
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "name": "image_gallery",
        "label": "Image Gallery",
        "preset": {
          "blocks": [
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          },
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first image"
              },
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              }
            ],
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "image_slide",
            "name": "Slide",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Image"
              },
              {
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "name": "image_slideshow",
        "label": "Image Slideshow",
        "preset": {
          "blocks": [
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "image_picker",
            "id": "image",
            "label": "Image"
          },
          {
            "id": "video",
            "type": "url",
            "label": "Video"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "cover",
            "type": "url",
            "label": "Video Cover Image"
          },
          {
            "type": "select",
            "id": "media_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Media Alignment"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "text",
            "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
            "label": "Text"
          },
          {
            "type": "select",
            "id": "text_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Text Alignment"
          }
        ],
        "blocks": [],
        "name": "media_with_text",
        "label": "Media with text"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every"
          }
        ],
        "blocks": [
          {
            "type": "testimonial",
            "name": "Testimonial",
            "props": [
              {
                "type": "textarea",
                "id": "testimonialText",
                "label": "Text for Testimonial",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author_name",
                "label": "Author name"
              },
              {
                "type": "text",
                "id": "author_description",
                "label": "Author Description"
              },
              {
                "type": "image_picker",
                "id": "author_image",
                "label": "Author Image"
              }
            ]
          }
        ],
        "name": "testimonials",
        "label": "Testimonial",
        "preset": {
          "blocks": [
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            }
          ]
        }
      }
    ],
    "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/Gpbt5naNG-archive.zip"
  }
}
```
</details>

</details>









---


### getAllPages
Get all pages of a theme



```javascript
// Promise
const promise = partnerClient.theme.getAllPages({  themeId : value,
 organizationId : value });

// Async/Await
const data = await partnerClient.theme.getAllPages({  themeId : value,
 organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |   
| organizationId | string | yes | Organization ID |  



Use this API to retrieve all the available pages of a theme by its ID.

*Returned Response:*




[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; All pages</i></summary>

```json
{
  "value": {
    "pages": [
      {
        "path": "products",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981639e13f6b2"
        },
        "_id": "60ab5ca6d572fed64294eb0e",
        "value": "product-listing",
        "text": "Product Listing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "collection",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981fc5d13f6b9"
        },
        "_id": "60ab5ca6d572fed64294eaf9",
        "text": "Collection Listing",
        "value": "collection-listing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "compare",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981cbca13f6b1"
        },
        "_id": "60ab5ca6d572fed64294eb0b",
        "value": "compare-products",
        "text": "Compare Products",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "cart/bag",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9812fdf13f6ae"
        },
        "_id": "60ab5ca6d572fed64294eb02",
        "value": "cart-landing",
        "text": "Cart Landing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9815c9713f6ab"
        },
        "_id": "60ab5ca6d572fed64294eaf6",
        "text": "Product Description",
        "value": "product-description",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product/:slug/reviews",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb24"
        },
        "_id": "60ab5ca6d572fed64294eb25",
        "sections_meta": [],
        "value": "product-reviews",
        "text": "Product Reviews",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "blog",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb22"
        },
        "_id": "60ab5ca6d572fed64294eb23",
        "sections_meta": [],
        "value": "blog",
        "text": "Blog",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "sections/cookie",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9814fed13f6b5"
        },
        "_id": "60ab5ca6d572fed64294eb17",
        "text": "cookie",
        "value": "cookie",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/vivek",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981b32713f6b6"
        },
        "_id": "60ab5ca6d572fed64294eb1a",
        "text": "vivek",
        "value": "vivek",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "about-us",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb28"
        },
        "_id": "60ab5ca6d572fed64294eb29",
        "sections_meta": [],
        "value": "about-us",
        "text": "About Us",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "wishlist",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981dd2d13f6b3"
        },
        "_id": "60ab5ca6d572fed64294eb11",
        "value": "wishlist",
        "text": "Wishlist",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product/:slug/add-review",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb26"
        },
        "_id": "60ab5ca6d572fed64294eb27",
        "sections_meta": [],
        "value": "add-product-review",
        "text": "Add Product Review",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "brands",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981161a13f6ad"
        },
        "_id": "60ab5ca6d572fed64294eaff",
        "value": "brands",
        "text": "Brands",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98115b013f6ac"
        },
        "_id": "60ab5ca6d572fed64294eafc",
        "value": "home",
        "text": "Home",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "collections",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981ad0b13f6b0"
        },
        "_id": "60ab5ca6d572fed64294eb08",
        "value": "collections",
        "text": "Collections",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "categories",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981872c13f6af"
        },
        "_id": "60ab5ca6d572fed64294eb05",
        "value": "categories",
        "text": "Categories",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/test",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98177f713f6b4"
        },
        "_id": "60ab5ca6d572fed64294eb14",
        "text": "Test",
        "value": "test",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/vinit",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98170b813f6b8"
        },
        "_id": "60ab5ca6d572fed64294eb20",
        "text": "vinit",
        "value": "vinit",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/maggie",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981469613f6b7"
        },
        "_id": "60ab5ca6d572fed64294eb1d",
        "text": "maggie",
        "value": "maggie",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      }
    ]
  }
}
```
</details>

</details>









---


### getApplicationThemes
Get all the themes for a specific application



```javascript
// Promise
const promise = partnerClient.theme.getApplicationThemes({  organizationId : value });

// Async/Await
const data = await partnerClient.theme.getApplicationThemes({  organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Organization ID |  



Use this API to get list of theme

*Returned Response:*




[Array<ThemesSchema>](#Array<ThemesSchema>)

The list of themes for the application was fetched successfully.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": [
    {
      "_id": "64be4423bc7b28003211322e",
      "applied": false,
      "is_private": false,
      "tags": [],
      "application_id": "6487ea376e1442284917c44e",
      "marketplace_theme_id": "64be1f4cceb549012e93d5f4",
      "meta": {
        "payment": {
          "is_paid": false,
          "amount": 0
        },
        "description": "Indulge in the epitome of luxury with our expertly crafted theme, showcasing a high-end aesthetic that exudes elegance. Designed with meticulous attention to detail, our features are tailored to elevate your products and amplify your brand identity.",
        "industry": [
          "Arts and crafts",
          "Baby and kids",
          "Books, music, and video"
        ],
        "release": {
          "notes": "<p>Emerge release notes. Fyndx1 theme submission.</p>"
        },
        "images": {
          "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/McHjwol_h-images_desktop.webp",
          "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/bq6gXrmVE-images_mobile.webp"
        },
        "slug": "emerge"
      },
      "name": "Emerge",
      "template_theme_id": "64be1fdc2139f66b3ca2e94d",
      "version": "1.0.153",
      "styles": {},
      "created_at": "2023-07-24T09:28:03.845Z",
      "updated_at": "2023-07-31T12:14:13.097Z",
      "theme_type": "vue2",
      "assets": {
        "umd_js": {
          "links": [
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.8.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.cart.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.extras.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products-listing.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.profile.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products-listing.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.js"
          ],
          "link": ""
        },
        "common_js": {
          "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.common.js"
        },
        "css": {
          "links": [
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_cart.1b038cd83e502f2d58bc.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_extras.f8a9789ae6a06b0bd503.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products-listing.1d639747568baee211ba.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products.c1f151d12b3f704fe028.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_profile.c9e6a92612e4b423dbd7.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_vendors_products-listing.c8fe85761d60286348e3.css"
          ],
          "link": ""
        }
      },
      "font": {
        "variants": {
          "light": {
            "name": "300",
            "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
          },
          "regular": {
            "name": "regular",
            "file": "https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
          },
          "medium": {
            "name": "500",
            "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
          },
          "semi_bold": {
            "name": "600",
            "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
          },
          "bold": {
            "name": "700",
            "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
          }
        },
        "family": "Poppins"
      },
      "config": {
        "current": "Default",
        "list": [
          {
            "name": "Default",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#ffffff",
                  "header_text_color": "#000000",
                  "header_border_color": "#e1e1e1",
                  "header_icon_color": "#000000",
                  "header_cart_notification_bg_color": "#e8a76c",
                  "header_cart_notification_text_color": "#ffffff",
                  "header_nav_hover_color": "#999999",
                  "button_primary_color": "#ffffff",
                  "button_primary_label_color": "#000000",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#ffffff",
                  "footer_text_color": "#999999",
                  "footer_border_color": "#e1e1e1",
                  "footer_nav_hover_color": "#000000",
                  "disable_cart": false,
                  "is_menu_below_logo": false,
                  "menu_position": "left"
                }
              }
            },
            "page": []
          },
          {
            "name": "Dark",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#2e3032",
                  "header_text_color": "#ffffff",
                  "header_border_color": "#FFFFFF",
                  "header_icon_color": "#ffffff",
                  "header_cart_notification_bg_color": "#FFFFFF",
                  "header_cart_notification_text_color": "#2e3032",
                  "header_nav_hover_color": "#000000",
                  "button_primary_color": "#000000",
                  "button_primary_label_color": "#ffffff",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#2e3032",
                  "footer_text_color": "#ffffff",
                  "footer_border_color": "#FFFFFF",
                  "footer_nav_hover_color": "#ffffff"
                }
              }
            },
            "page": []
          },
          {
            "name": "Blue",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#7f9ed0",
                  "header_text_color": "#FFFFFF",
                  "header_border_color": "#FFFFFF",
                  "header_icon_color": "#FFFFFF",
                  "header_cart_notification_bg_color": "#2e3032",
                  "header_cart_notification_text_color": "#FFFFFF",
                  "header_nav_hover_color": "#2e3032",
                  "button_primary_color": "#ffffff",
                  "button_primary_label_color": "#000000",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#7f9ed0",
                  "footer_text_color": "#FFFFFF",
                  "footer_border_color": "#FFFFFF",
                  "footer_nav_hover_color": "#2e3032"
                }
              }
            },
            "page": []
          }
        ],
        "preset": {
          "pages": [
            {
              "sections": [
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "hero_image",
                  "props": {
                    "image": {
                      "value": "",
                      "type": "image_picker"
                    },
                    "overlay_layout": {
                      "type": "select",
                      "value": "center"
                    },
                    "overlay_image": {
                      "value": "",
                      "type": "image_picker"
                    },
                    "overlay_text": {
                      "value": "",
                      "type": "text"
                    },
                    "text_color": {
                      "value": "#000",
                      "type": "color"
                    },
                    "button_link": {
                      "type": "url",
                      "value": ""
                    },
                    "button_text": {
                      "value": "Shop Now",
                      "type": "text"
                    },
                    "full_width": {
                      "value": true,
                      "type": "checkbox"
                    }
                  }
                },
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "image_slideshow",
                  "props": {
                    "autoplay": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "full_width": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "slide_height": {
                      "value": "adapt",
                      "type": "select"
                    },
                    "slide_interval": {
                      "value": 2,
                      "type": "range"
                    },
                    "title": {
                      "value": "Trending",
                      "type": "text"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Slide"
                      },
                      {
                        "name": "Slide"
                      },
                      {
                        "name": "Slide"
                      }
                    ]
                  }
                },
                {
                  "blocks": [
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    }
                  ],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "image_gallery",
                  "props": {
                    "title": {
                      "type": "text",
                      "value": "Popular Brands"
                    },
                    "layout": {
                      "value": "grid",
                      "type": "select"
                    },
                    "item_count": {
                      "value": 4,
                      "type": "range"
                    },
                    "cta_text": {
                      "value": "",
                      "type": "text"
                    },
                    "cta_link": {
                      "type": "url",
                      "value": ""
                    },
                    "full_width": {
                      "value": false,
                      "type": "checkbox"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      }
                    ]
                  }
                },
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "brands_listing",
                  "props": {
                    "brand_type": {
                      "value": "all",
                      "type": "radio"
                    },
                    "cta_text": {
                      "value": "View all",
                      "type": "text"
                    },
                    "department": {
                      "type": "department"
                    },
                    "header": {
                      "type": "header"
                    },
                    "items_per_row": {
                      "value": 5,
                      "type": "range"
                    },
                    "layout": {
                      "value": "horizontal",
                      "type": "select"
                    },
                    "title": {
                      "type": "text",
                      "value": "Brands"
                    },
                    "view_options": {
                      "value": "fullview",
                      "type": "select"
                    }
                  }
                },
                {
                  "blocks": [
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    }
                  ],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "testimonials",
                  "props": {
                    "autoplay": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "slide_interval": {
                      "value": 2,
                      "type": "range"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Testimonial"
                      },
                      {
                        "name": "Testimonial"
                      },
                      {
                        "name": "Testimonial"
                      }
                    ]
                  }
                }
              ],
              "value": "home"
            }
          ]
        },
        "global_schema": {
          "props": [
            {
              "type": "checkbox",
              "id": "disable_cart",
              "category": "Colors",
              "label": "header"
            }
          ]
        }
      },
      "available_sections": [
        {
          "props": [
            {
              "type": "url",
              "id": "banner_link",
              "label": "Redirect Link"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "application_banner",
          "label": "Application Banner"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "header",
              "id": "header",
              "value": "Choose Brands to Show"
            },
            {
              "id": "view_options",
              "type": "select",
              "options": [
                {
                  "value": "logo",
                  "text": "Logo View"
                },
                {
                  "value": "fullview",
                  "text": "Logo and Banner View"
                }
              ],
              "label": "View Options",
              "info": "Brand card view options"
            },
            {
              "type": "radio",
              "id": "brand_type",
              "options": [
                {
                  "value": "all",
                  "text": "All"
                },
                {
                  "value": "department",
                  "text": "Department"
                },
                {
                  "value": "handpicked",
                  "text": "Handpicked"
                }
              ]
            },
            {
              "type": "department",
              "id": "department",
              "label": "Department",
              "info": "Select a department of brands",
              "note": "Department only applies if 'department' type is selected"
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 3,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Items per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            }
          ],
          "blocks": [
            {
              "type": "brand_item",
              "name": "Brand Item",
              "props": [
                {
                  "type": "brand",
                  "id": "brand",
                  "label": "Select Brand"
                }
              ]
            }
          ],
          "name": "brands_listing",
          "label": "Brands Listing"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "radio",
              "id": "collection_type",
              "options": [
                {
                  "value": "all",
                  "text": "All"
                },
                {
                  "value": "handpicked",
                  "text": "Handpicked"
                }
              ]
            },
            {
              "type": "text",
              "id": "tags_filter",
              "label": "Filter by tags",
              "info": "Filter by Tags "
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 3,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Max items per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            }
          ],
          "blocks": [
            {
              "type": "collection-item",
              "name": "collection Item",
              "props": [
                {
                  "type": "collection",
                  "id": "collection",
                  "label": "Select Collection"
                }
              ]
            }
          ],
          "name": "collections_listing",
          "label": "Collections Listing"
        },
        {
          "props": [
            {
              "type": "code",
              "id": "code",
              "label": "Custom HTML",
              "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "custom_html",
          "label": "Custom HTML"
        },
        {
          "props": [
            {
              "type": "extension",
              "id": "extension",
              "label": "Extension Positions",
              "info": "Handle extension in these positions",
              "positions": [
                {
                  "value": "section_extension",
                  "text": ""
                }
              ]
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "section_extension",
          "label": "Extensions"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "collection",
              "id": "collection",
              "label": "Collection",
              "info": "Select a collection to display its products"
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 2,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Products per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides",
              "info": "Check to autoplay slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides after every",
              "info": "Autoplay slide duration"
            }
          ],
          "blocks": [],
          "name": "featured_collection",
          "label": "Featured Collection"
        },
        {
          "props": [
            {
              "id": "image",
              "type": "image_picker",
              "label": "Hero Image"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "overlay_layout",
              "type": "select",
              "options": [
                {
                  "value": "left",
                  "text": "Align Left"
                },
                {
                  "value": "center",
                  "text": "Align Center"
                },
                {
                  "value": "right",
                  "text": "Align Right"
                }
              ],
              "label": "Overlay Layout",
              "info": "Alignment of overlay content"
            },
            {
              "type": "image_picker",
              "id": "overlay_image",
              "label": "Overlay image",
              "info": "Overlay Image"
            },
            {
              "type": "text",
              "id": "overlay_text",
              "label": "Overlay Text"
            },
            {
              "type": "color",
              "id": "text_color",
              "label": "Text Color"
            },
            {
              "type": "url",
              "id": "button_link",
              "label": "Redirect Link"
            },
            {
              "type": "text",
              "id": "button_text",
              "label": "Button Text"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "checkbox",
              "id": "fullscreen_image",
              "label": "Fullscreen Banner ",
              "info": "Check to allow items to take entire viewport"
            }
          ],
          "blocks": [],
          "name": "hero_image",
          "label": "Hero Image"
        },
        {
          "props": [
            {
              "type": "video",
              "id": "videoFile",
              "label": "Primary Video"
            },
            {
              "id": "videoUrl",
              "type": "text",
              "label": "Video URL",
              "info": "Supports MP4 Video & Youtube Video URL"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "Autoplay",
              "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
            },
            {
              "type": "checkbox",
              "id": "hidecontrols",
              "label": "Hide Video Controls",
              "info": "check to disable video controls"
            },
            {
              "type": "checkbox",
              "id": "showloop",
              "label": "Play Video in Loop",
              "info": "check to disable Loop"
            },
            {
              "type": "text",
              "id": "title",
              "label": "Heading"
            },
            {
              "id": "coverUrl",
              "type": "image_picker",
              "label": "Thumbnail Image"
            }
          ],
          "blocks": [],
          "name": "hero_video-v2",
          "label": "Hero Video V2"
        },
        {
          "props": [
            {
              "id": "video_url",
              "type": "text",
              "label": "Video URL",
              "info": "Supports MP4 Video & Youtube Video URL"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "Autoplay",
              "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
            },
            {
              "type": "checkbox",
              "id": "controls",
              "label": "Video Controls",
              "info": "Uncheck to disable video controls"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "checkbox",
              "id": "bg_video",
              "label": "Video In Background",
              "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
            },
            {
              "type": "select",
              "id": "size",
              "options": [
                {
                  "value": "small",
                  "text": "Small"
                },
                {
                  "value": "medium",
                  "text": "Medium"
                },
                {
                  "value": "large",
                  "text": "Large"
                },
                {
                  "value": "adapt",
                  "text": "Adapt"
                },
                {
                  "value": "fullscreen",
                  "text": "Fullscreen"
                }
              ],
              "label": "Video Height",
              "info": "Height of Video"
            },
            {
              "type": "checkbox",
              "id": "enable_overlay_image",
              "label": "Enable Overlay Image"
            },
            {
              "id": "cover_url",
              "type": "image_picker",
              "label": "Video Overlay Image"
            },
            {
              "type": "checkbox",
              "id": "enable_overlay_color",
              "label": "Enable Overlay Colour"
            },
            {
              "type": "color",
              "id": "overlay_color",
              "label": "Overlay Color"
            },
            {
              "type": "range",
              "id": "overlay_opacity",
              "min": 0,
              "max": 1,
              "step": 0.1,
              "unit": "",
              "label": "Overlay Opacity"
            },
            {
              "type": "select",
              "id": "overlay_size",
              "options": [
                {
                  "value": "container",
                  "text": "Container (Default)"
                },
                {
                  "value": "content",
                  "text": "Content"
                }
              ],
              "label": "Overlay Size"
            },
            {
              "id": "overlay_position",
              "type": "select",
              "options": [
                {
                  "value": "top-left",
                  "text": "Top Left"
                },
                {
                  "value": "top-center",
                  "text": "Top Center"
                },
                {
                  "value": "top-right",
                  "text": "Top Right"
                },
                {
                  "value": "center-left",
                  "text": "Center Left"
                },
                {
                  "value": "center-center",
                  "text": "Center (Default)"
                },
                {
                  "value": "center-right",
                  "text": "Center Right"
                },
                {
                  "value": "bottom-left",
                  "text": "Bottom Left"
                },
                {
                  "value": "bottom-center",
                  "text": "Bottom Center"
                },
                {
                  "value": "bottom-right",
                  "text": "Bottom right"
                }
              ],
              "label": "Overlay position",
              "info": "Alignment of Overlay content(heading, sub-heading, button)"
            },
            {
              "type": "text",
              "id": "heading",
              "label": "Heading"
            },
            {
              "type": "color",
              "id": "heading_color",
              "label": "Heading Text Color"
            },
            {
              "type": "text",
              "id": "sub_heading",
              "label": "Sub-heading"
            },
            {
              "type": "color",
              "id": "sub_heading_color",
              "label": "Sub-heading Text Color"
            },
            {
              "type": "url",
              "id": "button_link",
              "label": "Redirect Link"
            },
            {
              "type": "text",
              "id": "button_text",
              "label": "Button Text"
            }
          ],
          "blocks": [],
          "name": "hero_video",
          "label": "Hero Video"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "range",
              "id": "item_count",
              "min": 3,
              "max": 4,
              "step": 1,
              "unit": "",
              "label": "No of items",
              "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            },
            {
              "type": "url",
              "id": "cta_link",
              "label": "CTA Link",
              "info": "Link to redirect"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            }
          ],
          "blocks": [
            {
              "type": "gallery_image",
              "name": "Image",
              "props": [
                {
                  "type": "image_picker",
                  "id": "image",
                  "label": "Gallery Image"
                },
                {
                  "type": "text",
                  "id": "caption",
                  "label": "Image Caption"
                },
                {
                  "type": "url",
                  "id": "link",
                  "label": "Link",
                  "info": "Link to redirect"
                }
              ]
            }
          ],
          "name": "image_gallery",
          "label": "Image Gallery",
          "preset": {
            "blocks": [
              {
                "name": "Image"
              },
              {
                "name": "Image"
              },
              {
                "name": "Image"
              },
              {
                "name": "Image"
              }
            ]
          }
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides",
              "info": "Check to autoplay slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides after every",
              "info": "Autoplay slide duration"
            },
            {
              "type": "select",
              "id": "slide_height",
              "options": [
                {
                  "value": "adapt",
                  "text": "Adapt to first image"
                },
                {
                  "value": "small",
                  "text": "Small"
                },
                {
                  "value": "medium",
                  "text": "Medium"
                },
                {
                  "value": "large",
                  "text": "Large"
                }
              ],
              "label": "Slide height",
              "info": "Size of the slide"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            }
          ],
          "blocks": [
            {
              "type": "image_slide",
              "name": "Slide",
              "props": [
                {
                  "type": "image_picker",
                  "id": "image",
                  "label": "Image"
                },
                {
                  "type": "url",
                  "id": "slide_link",
                  "label": "Slide Link"
                }
              ]
            }
          ],
          "name": "image_slideshow",
          "label": "Image Slideshow",
          "preset": {
            "blocks": [
              {
                "name": "Slide"
              },
              {
                "name": "Slide"
              },
              {
                "name": "Slide"
              }
            ]
          }
        },
        {
          "props": [
            {
              "type": "image_picker",
              "id": "image",
              "label": "Image"
            },
            {
              "id": "video",
              "type": "url",
              "label": "Video"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "cover",
              "type": "url",
              "label": "Video Cover Image"
            },
            {
              "type": "select",
              "id": "media_alignment",
              "options": [
                {
                  "value": "left",
                  "text": "Left"
                },
                {
                  "value": "center",
                  "text": "Center"
                },
                {
                  "value": "right",
                  "text": "Right"
                }
              ],
              "label": "Media Alignment"
            },
            {
              "type": "text",
              "id": "heading",
              "label": "Heading"
            },
            {
              "type": "text",
              "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
              "label": "Text"
            },
            {
              "type": "select",
              "id": "text_alignment",
              "options": [
                {
                  "value": "left",
                  "text": "Left"
                },
                {
                  "value": "center",
                  "text": "Center"
                },
                {
                  "value": "right",
                  "text": "Right"
                }
              ],
              "label": "Text Alignment"
            }
          ],
          "blocks": [],
          "name": "media_with_text",
          "label": "Media with text"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides every"
            }
          ],
          "blocks": [
            {
              "type": "testimonial",
              "name": "Testimonial",
              "props": [
                {
                  "type": "textarea",
                  "id": "testimonialText",
                  "label": "Text for Testimonial",
                  "info": "Text for testimonial",
                  "placeholder": "Text"
                },
                {
                  "type": "text",
                  "id": "author_name",
                  "label": "Author name"
                },
                {
                  "type": "text",
                  "id": "author_description",
                  "label": "Author Description"
                },
                {
                  "type": "image_picker",
                  "id": "author_image",
                  "label": "Author Image"
                }
              ]
            }
          ],
          "name": "testimonials",
          "label": "Testimonial",
          "preset": {
            "blocks": [
              {
                "name": "Testimonial"
              },
              {
                "name": "Testimonial"
              },
              {
                "name": "Testimonial"
              }
            ]
          }
        }
      ],
      "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/7yuL57qP2-archive.zip"
    }
  ]
}
```
</details>

<details>
<summary><i>&nbsp; example2</i></summary>

```json
{
  "value": [
    {
      "_id": "64b91fe317422a1e1392f85b",
      "applied": true,
      "is_private": true,
      "tags": [],
      "name": "Astra",
      "version": "1.0.11",
      "application_id": "7487ea376e1442284917c44e",
      "styles": {},
      "template_theme_id": "64be264c0347c5002279b75f",
      "created_at": "2023-07-24T07:20:44.629Z",
      "updated_at": "2023-08-01T11:09:25.857Z",
      "theme_type": "vue2",
      "assets": {
        "umd_js": {
          "links": [
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.9.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.cart.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.extras.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing_profile.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.profile.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products-listing.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products.js",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.js"
          ],
          "link": ""
        },
        "common_js": {
          "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.common.js"
        },
        "css": {
          "links": [
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_extras.8604b743eb82cd74e4bb.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing_profile.944723408675f52ed297.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing.ca493ea7d081b4b575f7.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products.2c64f7731dab64227f0b.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_profile.1b1467735927e188d272.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.css",
            "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_vendors_products-listing.c8fe85761d60286348e3.css"
          ],
          "link": ""
        }
      },
      "font": {
        "variants": {
          "light": {
            "name": "300",
            "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
          },
          "regular": {
            "name": "regular",
            "file": "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
          },
          "medium": {
            "name": "500",
            "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
          },
          "semi_bold": {
            "name": "600",
            "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
          },
          "bold": {
            "name": "700",
            "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
          }
        },
        "family": "Poppins"
      },
      "config": {
        "current": "Default",
        "list": [
          {
            "name": "Default",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#ffffff",
                  "header_text_color": "#000000",
                  "header_border_color": "#e1e1e1",
                  "header_icon_color": "#000000",
                  "header_cart_notification_bg_color": "#e8a76c",
                  "header_cart_notification_text_color": "#ffffff",
                  "header_nav_hover_color": "#999999",
                  "button_primary_color": "#ffffff",
                  "button_primary_label_color": "#000000",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#ffffff",
                  "footer_text_color": "#999999",
                  "footer_border_color": "#e1e1e1",
                  "footer_nav_hover_color": "#000000",
                  "disable_cart": false,
                  "is_menu_below_logo": false,
                  "menu_position": "left"
                }
              }
            },
            "page": []
          },
          {
            "name": "Dark",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#2e3032",
                  "header_text_color": "#ffffff",
                  "header_border_color": "#FFFFFF",
                  "header_icon_color": "#ffffff",
                  "header_cart_notification_bg_color": "#FFFFFF",
                  "header_cart_notification_text_color": "#2e3032",
                  "header_nav_hover_color": "#000000",
                  "button_primary_color": "#000000",
                  "button_primary_label_color": "#ffffff",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#2e3032",
                  "footer_text_color": "#ffffff",
                  "footer_border_color": "#FFFFFF",
                  "footer_nav_hover_color": "#ffffff"
                }
              }
            },
            "page": []
          },
          {
            "name": "Blue",
            "global_config": {
              "static": {
                "props": {
                  "colors": {
                    "primary_color": "#000000",
                    "secondary_color": "#000000",
                    "accent_color": "#000000",
                    "link_color": "#4499FF",
                    "button_secondary_color": "#000000",
                    "bg_color": "#F8F8F8"
                  },
                  "auth": {
                    "show_header_auth": false,
                    "show_footer_auth": false
                  },
                  "palette": {
                    "general_setting": {
                      "theme": {
                        "page_background": "#F3F3ED",
                        "theme_accent": "#E1D0C8"
                      },
                      "text": {
                        "text_heading": "#26201A",
                        "text_body": "#3C3131",
                        "text_label": "#7D7676",
                        "text_secondary": "#9C9C9C"
                      },
                      "button": {
                        "button_primary": "#4E3F09",
                        "button_secondary": "#FFFFFF",
                        "button_link": "#B1655B"
                      },
                      "sale_discount": {
                        "sale_badge_background": "#FFFFFF",
                        "sale_badge_text": "#1C958F",
                        "sale_discount_text": "#1C958F",
                        "sale_timer": "#994449"
                      },
                      "header": {
                        "header_background": "#F3F3ED",
                        "header_nav": "#261A1A",
                        "header_icon": "#261A1A"
                      },
                      "footer": {
                        "footer_background": "#2C231E",
                        "footer_bottom_background": "#231812",
                        "footer_heading_text": "#FFFFFF",
                        "footer_body_text": "#FFFFFF",
                        "footer_icon": "#FFFFFF"
                      }
                    },
                    "advance_setting": {
                      "overlay_popup": {
                        "dialog_backgroung": "#FFFFFF",
                        "overlay": "#14130E"
                      },
                      "divider_stroke_highlight": {
                        "divider_strokes": "#D4D1D1",
                        "highlight": "#EDECE9"
                      },
                      "user_alerts": {
                        "success_background": "#C2DBC9",
                        "success_text": "#1C958F",
                        "error_background": "#E6D5D5",
                        "error_text": "#B24141",
                        "info_background": "#EBD3BC",
                        "info_text": "#D28F51"
                      }
                    }
                  },
                  "extension": {
                    "header_top": [],
                    "header_bottom": [],
                    "footer_top": [],
                    "footer_bottom": []
                  }
                }
              },
              "custom": {
                "props": {
                  "header_bg_color": "#7f9ed0",
                  "header_text_color": "#FFFFFF",
                  "header_border_color": "#FFFFFF",
                  "header_icon_color": "#FFFFFF",
                  "header_cart_notification_bg_color": "#2e3032",
                  "header_cart_notification_text_color": "#FFFFFF",
                  "header_nav_hover_color": "#2e3032",
                  "button_primary_color": "#ffffff",
                  "button_primary_label_color": "#000000",
                  "button_add_to_cart_color": "#000000",
                  "button_add_to_cart_label_color": "#ffffff",
                  "button_secondary_color": "#000000",
                  "button_secondary_label_color": "#ffffff",
                  "button_tertiary_color": "#000000",
                  "button_tertiary_label_color": "#000000",
                  "button_tertiary_hover_color": "#000000",
                  "button_tertiary_hover_text_color": "#ffffff",
                  "text_heading_link_color": "#000000",
                  "text_body_color": "#000000",
                  "text_price_color": "#000000",
                  "text_sale_price_color": "#fb406b",
                  "text_strikethrough_price_color": "#9b9b9b",
                  "text_discount_color": "#ee478d",
                  "footer_bg_color": "#7f9ed0",
                  "footer_text_color": "#FFFFFF",
                  "footer_border_color": "#FFFFFF",
                  "footer_nav_hover_color": "#2e3032"
                }
              }
            },
            "page": []
          }
        ],
        "preset": {
          "pages": [
            {
              "sections": [
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "hero_image",
                  "props": {
                    "image": {
                      "value": "",
                      "type": "image_picker"
                    },
                    "overlay_layout": {
                      "type": "select",
                      "value": "center"
                    },
                    "overlay_image": {
                      "value": "",
                      "type": "image_picker"
                    },
                    "overlay_text": {
                      "value": "",
                      "type": "text"
                    },
                    "text_color": {
                      "value": "#000",
                      "type": "color"
                    },
                    "button_link": {
                      "type": "url",
                      "value": ""
                    },
                    "button_text": {
                      "value": "Shop Now",
                      "type": "text"
                    },
                    "full_width": {
                      "value": true,
                      "type": "checkbox"
                    }
                  }
                },
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "image_slideshow",
                  "props": {
                    "autoplay": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "full_width": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "slide_height": {
                      "value": "adapt",
                      "type": "select"
                    },
                    "slide_interval": {
                      "value": 2,
                      "type": "range"
                    },
                    "title": {
                      "value": "Trending",
                      "type": "text"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Slide"
                      },
                      {
                        "name": "Slide"
                      },
                      {
                        "name": "Slide"
                      }
                    ]
                  }
                },
                {
                  "blocks": [
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "gallery_image",
                      "name": "Image",
                      "props": {
                        "image": {
                          "type": "image_picker",
                          "value": ""
                        },
                        "caption": {
                          "type": "text",
                          "value": ""
                        },
                        "link": {
                          "type": "url",
                          "value": ""
                        }
                      }
                    }
                  ],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "image_gallery",
                  "props": {
                    "title": {
                      "type": "text",
                      "value": "Popular Brands"
                    },
                    "layout": {
                      "value": "grid",
                      "type": "select"
                    },
                    "item_count": {
                      "value": 4,
                      "type": "range"
                    },
                    "cta_text": {
                      "value": "",
                      "type": "text"
                    },
                    "cta_link": {
                      "type": "url",
                      "value": ""
                    },
                    "full_width": {
                      "value": false,
                      "type": "checkbox"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      },
                      {
                        "name": "Image"
                      }
                    ]
                  }
                },
                {
                  "blocks": [],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "brands_listing",
                  "props": {
                    "brand_type": {
                      "value": "all",
                      "type": "radio"
                    },
                    "cta_text": {
                      "value": "View all",
                      "type": "text"
                    },
                    "department": {
                      "type": "department"
                    },
                    "header": {
                      "type": "header"
                    },
                    "items_per_row": {
                      "value": 5,
                      "type": "range"
                    },
                    "layout": {
                      "value": "horizontal",
                      "type": "select"
                    },
                    "title": {
                      "type": "text",
                      "value": "Brands"
                    },
                    "view_options": {
                      "value": "fullview",
                      "type": "select"
                    }
                  }
                },
                {
                  "blocks": [
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "testimonial",
                      "name": "Testimonial",
                      "props": {
                        "testimonialText": {
                          "type": "textarea",
                          "value": ""
                        },
                        "author_name": {
                          "type": "text"
                        },
                        "author_description": {
                          "type": "text",
                          "value": ""
                        },
                        "author_image": {
                          "type": "image_picker",
                          "value": ""
                        }
                      }
                    }
                  ],
                  "predicate": {
                    "screen": {
                      "mobile": true,
                      "desktop": true,
                      "tablet": true
                    },
                    "user": {
                      "authenticated": true,
                      "anonymous": true
                    },
                    "route": {
                      "selected": "none",
                      "exact_url": ""
                    }
                  },
                  "name": "testimonials",
                  "props": {
                    "autoplay": {
                      "value": false,
                      "type": "checkbox"
                    },
                    "slide_interval": {
                      "value": 2,
                      "type": "range"
                    }
                  },
                  "preset": {
                    "blocks": [
                      {
                        "name": "Testimonial"
                      },
                      {
                        "name": "Testimonial"
                      },
                      {
                        "name": "Testimonial"
                      }
                    ]
                  }
                }
              ],
              "value": "home"
            }
          ]
        },
        "global_schema": {
          "props": [
            {
              "type": "checkbox",
              "id": "disable_cart",
              "category": "Colors",
              "label": "header"
            }
          ]
        }
      },
      "available_sections": [
        {
          "props": [
            {
              "type": "url",
              "id": "banner_link",
              "label": "Redirect Link"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "application_banner",
          "label": "Application Banner"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "header",
              "id": "header",
              "value": "Choose Brands to Show"
            },
            {
              "id": "view_options",
              "type": "select",
              "options": [
                {
                  "value": "logo",
                  "text": "Logo View"
                },
                {
                  "value": "fullview",
                  "text": "Logo and Banner View"
                }
              ],
              "label": "View Options",
              "info": "Brand card view options"
            },
            {
              "type": "radio",
              "id": "brand_type",
              "options": [
                {
                  "value": "all",
                  "text": "All"
                },
                {
                  "value": "department",
                  "text": "Department"
                },
                {
                  "value": "handpicked",
                  "text": "Handpicked"
                }
              ]
            },
            {
              "type": "department",
              "id": "department",
              "label": "Department",
              "info": "Select a department of brands",
              "note": "Department only applies if 'department' type is selected"
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 3,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Items per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            }
          ],
          "blocks": [
            {
              "type": "brand_item",
              "name": "Brand Item",
              "props": [
                {
                  "type": "brand",
                  "id": "brand",
                  "label": "Select Brand"
                }
              ]
            }
          ],
          "name": "brands_listing",
          "label": "Brands Listing"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "radio",
              "id": "collection_type",
              "options": [
                {
                  "value": "all",
                  "text": "All"
                },
                {
                  "value": "handpicked",
                  "text": "Handpicked"
                }
              ]
            },
            {
              "type": "text",
              "id": "tags_filter",
              "label": "Filter by tags",
              "info": "Filter by Tags "
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 3,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Max items per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            }
          ],
          "blocks": [
            {
              "type": "collection-item",
              "name": "collection Item",
              "props": [
                {
                  "type": "collection",
                  "id": "collection",
                  "label": "Select Collection"
                }
              ]
            }
          ],
          "name": "collections_listing",
          "label": "Collections Listing"
        },
        {
          "props": [
            {
              "type": "code",
              "id": "code",
              "label": "Custom HTML",
              "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "custom_html",
          "label": "Custom HTML"
        },
        {
          "props": [
            {
              "type": "extension",
              "id": "extension",
              "label": "Extension Positions",
              "info": "Handle extension in these positions",
              "positions": [
                {
                  "value": "section_extension",
                  "text": ""
                }
              ]
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            }
          ],
          "blocks": [],
          "name": "section_extension",
          "label": "Extensions"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "collection",
              "id": "collection",
              "label": "Collection",
              "info": "Select a collection to display its products"
            },
            {
              "type": "range",
              "id": "items_per_row",
              "min": 2,
              "max": 5,
              "step": 1,
              "unit": "",
              "label": "Products per row",
              "info": "Maximum items allowed per row"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides",
              "info": "Check to autoplay slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides after every",
              "info": "Autoplay slide duration"
            }
          ],
          "blocks": [],
          "name": "featured_collection",
          "label": "Featured Collection"
        },
        {
          "props": [
            {
              "id": "image",
              "type": "image_picker",
              "label": "Hero Image"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "overlay_layout",
              "type": "select",
              "options": [
                {
                  "value": "left",
                  "text": "Align Left"
                },
                {
                  "value": "center",
                  "text": "Align Center"
                },
                {
                  "value": "right",
                  "text": "Align Right"
                }
              ],
              "label": "Overlay Layout",
              "info": "Alignment of overlay content"
            },
            {
              "type": "image_picker",
              "id": "overlay_image",
              "label": "Overlay image",
              "info": "Overlay Image"
            },
            {
              "type": "text",
              "id": "overlay_text",
              "label": "Overlay Text"
            },
            {
              "type": "color",
              "id": "text_color",
              "label": "Text Color"
            },
            {
              "type": "url",
              "id": "button_link",
              "label": "Redirect Link"
            },
            {
              "type": "text",
              "id": "button_text",
              "label": "Button Text"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "checkbox",
              "id": "fullscreen_image",
              "label": "Fullscreen Banner ",
              "info": "Check to allow items to take entire viewport"
            }
          ],
          "blocks": [],
          "name": "hero_image",
          "label": "Hero Image"
        },
        {
          "props": [
            {
              "type": "video",
              "id": "videoFile",
              "label": "Primary Video"
            },
            {
              "id": "videoUrl",
              "type": "text",
              "label": "Video URL",
              "info": "Supports MP4 Video & Youtube Video URL"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "Autoplay",
              "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
            },
            {
              "type": "checkbox",
              "id": "hidecontrols",
              "label": "Hide Video Controls",
              "info": "check to disable video controls"
            },
            {
              "type": "checkbox",
              "id": "showloop",
              "label": "Play Video in Loop",
              "info": "check to disable Loop"
            },
            {
              "type": "text",
              "id": "title",
              "label": "Heading"
            },
            {
              "id": "coverUrl",
              "type": "image_picker",
              "label": "Thumbnail Image"
            }
          ],
          "blocks": [],
          "name": "hero_video-v2",
          "label": "Hero Video V2"
        },
        {
          "props": [
            {
              "id": "video_url",
              "type": "text",
              "label": "Video URL",
              "info": "Supports MP4 Video & Youtube Video URL"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "Autoplay",
              "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
            },
            {
              "type": "checkbox",
              "id": "controls",
              "label": "Video Controls",
              "info": "Uncheck to disable video controls"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            },
            {
              "type": "checkbox",
              "id": "bg_video",
              "label": "Video In Background",
              "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
            },
            {
              "type": "select",
              "id": "size",
              "options": [
                {
                  "value": "small",
                  "text": "Small"
                },
                {
                  "value": "medium",
                  "text": "Medium"
                },
                {
                  "value": "large",
                  "text": "Large"
                },
                {
                  "value": "adapt",
                  "text": "Adapt"
                },
                {
                  "value": "fullscreen",
                  "text": "Fullscreen"
                }
              ],
              "label": "Video Height",
              "info": "Height of Video"
            },
            {
              "type": "checkbox",
              "id": "enable_overlay_image",
              "label": "Enable Overlay Image"
            },
            {
              "id": "cover_url",
              "type": "image_picker",
              "label": "Video Overlay Image"
            },
            {
              "type": "checkbox",
              "id": "enable_overlay_color",
              "label": "Enable Overlay Colour"
            },
            {
              "type": "color",
              "id": "overlay_color",
              "label": "Overlay Color"
            },
            {
              "type": "range",
              "id": "overlay_opacity",
              "min": 0,
              "max": 1,
              "step": 0.1,
              "unit": "",
              "label": "Overlay Opacity"
            },
            {
              "type": "select",
              "id": "overlay_size",
              "options": [
                {
                  "value": "container",
                  "text": "Container (Default)"
                },
                {
                  "value": "content",
                  "text": "Content"
                }
              ],
              "label": "Overlay Size"
            },
            {
              "id": "overlay_position",
              "type": "select",
              "options": [
                {
                  "value": "top-left",
                  "text": "Top Left"
                },
                {
                  "value": "top-center",
                  "text": "Top Center"
                },
                {
                  "value": "top-right",
                  "text": "Top Right"
                },
                {
                  "value": "center-left",
                  "text": "Center Left"
                },
                {
                  "value": "center-center",
                  "text": "Center (Default)"
                },
                {
                  "value": "center-right",
                  "text": "Center Right"
                },
                {
                  "value": "bottom-left",
                  "text": "Bottom Left"
                },
                {
                  "value": "bottom-center",
                  "text": "Bottom Center"
                },
                {
                  "value": "bottom-right",
                  "text": "Bottom right"
                }
              ],
              "label": "Overlay position",
              "info": "Alignment of Overlay content(heading, sub-heading, button)"
            },
            {
              "type": "text",
              "id": "heading",
              "label": "Heading"
            },
            {
              "type": "color",
              "id": "heading_color",
              "label": "Heading Text Color"
            },
            {
              "type": "text",
              "id": "sub_heading",
              "label": "Sub-heading"
            },
            {
              "type": "color",
              "id": "sub_heading_color",
              "label": "Sub-heading Text Color"
            },
            {
              "type": "url",
              "id": "button_link",
              "label": "Redirect Link"
            },
            {
              "type": "text",
              "id": "button_text",
              "label": "Button Text"
            }
          ],
          "blocks": [],
          "name": "hero_video",
          "label": "Hero Video"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "layout",
              "type": "select",
              "options": [
                {
                  "value": "grid",
                  "text": "Grid View"
                },
                {
                  "value": "horizontal",
                  "text": "Horizontal View"
                }
              ],
              "label": "Layout",
              "info": "Alignment of content"
            },
            {
              "type": "range",
              "id": "item_count",
              "min": 3,
              "max": 4,
              "step": 1,
              "unit": "",
              "label": "No of items",
              "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
            },
            {
              "type": "text",
              "id": "cta_text",
              "label": "CTA Text"
            },
            {
              "type": "url",
              "id": "cta_link",
              "label": "CTA Link",
              "info": "Link to redirect"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            }
          ],
          "blocks": [
            {
              "type": "gallery_image",
              "name": "Image",
              "props": [
                {
                  "type": "image_picker",
                  "id": "image",
                  "label": "Gallery Image"
                },
                {
                  "type": "text",
                  "id": "caption",
                  "label": "Image Caption"
                },
                {
                  "type": "url",
                  "id": "link",
                  "label": "Link",
                  "info": "Link to redirect"
                }
              ]
            }
          ],
          "name": "image_gallery",
          "label": "Image Gallery",
          "preset": {
            "blocks": [
              {
                "name": "Image"
              },
              {
                "name": "Image"
              },
              {
                "name": "Image"
              },
              {
                "name": "Image"
              }
            ]
          }
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides",
              "info": "Check to autoplay slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides after every",
              "info": "Autoplay slide duration"
            },
            {
              "type": "select",
              "id": "slide_height",
              "options": [
                {
                  "value": "adapt",
                  "text": "Adapt to first image"
                },
                {
                  "value": "small",
                  "text": "Small"
                },
                {
                  "value": "medium",
                  "text": "Medium"
                },
                {
                  "value": "large",
                  "text": "Large"
                }
              ],
              "label": "Slide height",
              "info": "Size of the slide"
            },
            {
              "type": "checkbox",
              "id": "full_width",
              "label": "Full width",
              "info": "Check to allow items to take entire width of the viewport"
            }
          ],
          "blocks": [
            {
              "type": "image_slide",
              "name": "Slide",
              "props": [
                {
                  "type": "image_picker",
                  "id": "image",
                  "label": "Image"
                },
                {
                  "type": "url",
                  "id": "slide_link",
                  "label": "Slide Link"
                }
              ]
            }
          ],
          "name": "image_slideshow",
          "label": "Image Slideshow",
          "preset": {
            "blocks": [
              {
                "name": "Slide"
              },
              {
                "name": "Slide"
              },
              {
                "name": "Slide"
              }
            ]
          }
        },
        {
          "props": [
            {
              "type": "image_picker",
              "id": "image",
              "label": "Image"
            },
            {
              "id": "video",
              "type": "url",
              "label": "Video"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "id": "cover",
              "type": "url",
              "label": "Video Cover Image"
            },
            {
              "type": "select",
              "id": "media_alignment",
              "options": [
                {
                  "value": "left",
                  "text": "Left"
                },
                {
                  "value": "center",
                  "text": "Center"
                },
                {
                  "value": "right",
                  "text": "Right"
                }
              ],
              "label": "Media Alignment"
            },
            {
              "type": "text",
              "id": "heading",
              "label": "Heading"
            },
            {
              "type": "text",
              "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
              "label": "Text"
            },
            {
              "type": "select",
              "id": "text_alignment",
              "options": [
                {
                  "value": "left",
                  "text": "Left"
                },
                {
                  "value": "center",
                  "text": "Center"
                },
                {
                  "value": "right",
                  "text": "Right"
                }
              ],
              "label": "Text Alignment"
            }
          ],
          "blocks": [],
          "name": "media_with_text",
          "label": "Media with text"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "title",
              "label": "Title"
            },
            {
              "type": "range",
              "id": "margin_top",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Top Margin"
            },
            {
              "type": "range",
              "id": "margin_bottom",
              "min": 0,
              "max": 1000,
              "step": 1,
              "unit": "px",
              "label": "Section Bottom Margin"
            },
            {
              "type": "checkbox",
              "id": "autoplay",
              "label": "AutoPlay Slides"
            },
            {
              "type": "range",
              "id": "slide_interval",
              "min": 1,
              "max": 10,
              "step": 1,
              "unit": "sec",
              "label": "Change slides every"
            }
          ],
          "blocks": [
            {
              "type": "testimonial",
              "name": "Testimonial",
              "props": [
                {
                  "type": "textarea",
                  "id": "testimonialText",
                  "label": "Text for Testimonial",
                  "info": "Text for testimonial",
                  "placeholder": "Text"
                },
                {
                  "type": "text",
                  "id": "author_name",
                  "label": "Author name"
                },
                {
                  "type": "text",
                  "id": "author_description",
                  "label": "Author Description"
                },
                {
                  "type": "image_picker",
                  "id": "author_image",
                  "label": "Author Image"
                }
              ]
            }
          ],
          "name": "testimonials",
          "label": "Testimonial",
          "preset": {
            "blocks": [
              {
                "name": "Testimonial"
              },
              {
                "name": "Testimonial"
              },
              {
                "name": "Testimonial"
              }
            ]
          }
        }
      ],
      "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/Gpbt5naNG-archive.zip"
    }
  ]
}
```
</details>

</details>









---


### getLatestVersionOfThemeBySlug
Get latest version of specified theme



```javascript
// Promise
const promise = partnerClient.theme.getLatestVersionOfThemeBySlug({  organizationId : value,
 slugName : value });

// Async/Await
const data = await partnerClient.theme.getLatestVersionOfThemeBySlug({  organizationId : value,
 slugName : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| slugName | string | yes | Slug of theme |  



Use this api to get latest version of specified theme

*Returned Response:*




[Array<MarketplaceTheme>](#Array<MarketplaceTheme>)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrganizationThemeDetails
Get theme details for an organization



```javascript
// Promise
const promise = partnerClient.theme.getOrganizationThemeDetails({  organizationId : value,
 themeId : value });

// Async/Await
const data = await partnerClient.theme.getOrganizationThemeDetails({  organizationId : value,
 themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| themeId | string | yes | The ID of the theme |  



Fetches the theme details for a specific organization and theme ID

*Returned Response:*




[MarketplaceTheme](#MarketplaceTheme)

Successful response




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getOrganizationThemes
Get organization's themes



```javascript
// Promise
const promise = partnerClient.theme.getOrganizationThemes({  organizationId : value,
 status : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await partnerClient.theme.getOrganizationThemes({  organizationId : value,
 status : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | Id of your organization |    
| status | string | no | The status of the theme |    
| pageSize | number | no | Number of themes per page |    
| pageNo | number | no | Page number to retrieve |  



Get organization's themes

*Returned Response:*




[MarketplaceThemeSchema](#MarketplaceThemeSchema)

Successful operation




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getPage
Get page of a theme



```javascript
// Promise
const promise = partnerClient.theme.getPage({  themeId : value,
 pageValue : value,
 organizationId : value });

// Async/Await
const data = await partnerClient.theme.getPage({  themeId : value,
 pageValue : value,
 organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |   
| pageValue | string | yes | Value of the page to be retrieved |   
| organizationId | string | yes | Organization ID |  



Use this API to retrieve a page of a theme.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns an object of the page.  Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Home page</i></summary>

```json
{
  "value": {
    "path": "",
    "type": "system",
    "seo": {
      "title": "",
      "description": "",
      "_id": "60210832d7e98115b013f6ac"
    },
    "props": [],
    "_id": "60ab5ca6d572fed64294eafc",
    "sections": [
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": false,
            "desktop": false,
            "tablet": false
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "utm": "facebook"
            }
          }
        },
        "name": "customHtml",
        "props": {
          "code": {
            "type": "code",
            "value": "<p style=\"text-align:right;\"><a href=\"tel:+919820204442\"><img src=\"https://dabuttonfactory.com/button.png?t=For+any+queries%2C+call%3A+%2B91+98202+04442&f=Open+Sans-Bold&ts=21&tc=fff&hp=20&vp=15&c=round&bgt=unicolored&bgc=7043f7\"/> </a></p>"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "udm": "vivek"
            }
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "Popular rrrrr"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          }
        ],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": false,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "featuredProducts",
        "props": {
          "heading": {
            "value": "Featured Products",
            "type": "text"
          },
          "item_count": {
            "type": "range",
            "value": 4
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          }
        },
        "preset": {
          "blocks": [
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            }
          ]
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "categoryListPage",
        "props": {
          "heading": {
            "type": "text",
            "value": "Explore Categories"
          },
          "layout": {
            "type": "select",
            "value": "grid"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "heroBanner",
        "props": {
          "ctaLink": {
            "type": "url",
            "value": "https://uniket.hostx0.de/about-us"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "imageBanner",
        "props": {
          "image": {
            "value": "",
            "type": "image_picker"
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          },
          "overlayLayout": {
            "value": "left",
            "type": "select"
          },
          "overlayImage": {
            "value": "",
            "type": "image_picker"
          },
          "text": {
            "value": "",
            "type": "text"
          },
          "text_color": {
            "value": "#000",
            "type": "color"
          },
          "ctaLink": {
            "value": "",
            "type": "url"
          },
          "ctaText": {
            "value": "",
            "type": "text"
          },
          "layout": {
            "type": "select",
            "value": "full"
          },
          "height": {
            "type": "select",
            "value": "h-auto"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "asdfasdf"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      }
    ],
    "value": "home",
    "text": "Home",
    "theme": "5fb3ee4194a5181feeeba8e5",
    "sections_meta": [],
    "__v": 9
  }
}
```
</details>

</details>









---


### getThemeById
Get Theme By Theme Id



```javascript
// Promise
const promise = partnerClient.theme.getThemeById({  themeId : value,
 organizationId : value });

// Async/Await
const data = await partnerClient.theme.getThemeById({  themeId : value,
 organizationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | The ID of the theme |   
| organizationId | string | yes | Organization ID |  



Use this API to get theme details

*Returned Response:*




[ThemesSchema](#ThemesSchema)

The Details of themes for the application was fetched successfully.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getThemeRejectionReasons
Get theme rejection reasons



```javascript
// Promise
const promise = partnerClient.theme.getThemeRejectionReasons({  organizationId : value,
 themeId : value });

// Async/Await
const data = await partnerClient.theme.getThemeRejectionReasons({  organizationId : value,
 themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| themeId | string | yes | The ID of the theme |  



Use this api to get theme rejection reasons

*Returned Response:*




[ThemeRejectionReasons](#ThemeRejectionReasons)

Theme rejection reasons retrieved successfully




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getThemeVersions
Get theme versions



```javascript
// Promise
const promise = partnerClient.theme.getThemeVersions({  organizationId : value,
 themeSlug : value,
 pageSize : value,
 pageNo : value });

// Async/Await
const data = await partnerClient.theme.getThemeVersions({  organizationId : value,
 themeSlug : value,
 pageSize : value,
 pageNo : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization. |   
| themeSlug | string | yes | The slug of the theme. |    
| pageSize | number | no | The number of items to return per page. |    
| pageNo | number | no | The page number to return. |  



Retrieve a list of theme versions for a specific theme in an organization.

*Returned Response:*




[MarketplaceThemeSchema](#MarketplaceThemeSchema)

Successful operation.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### submitOrganizationTheme
Submit a theme



```javascript
// Promise
const promise = partnerClient.theme.submitOrganizationTheme({  organizationId : value,
 themeId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.submitOrganizationTheme({  organizationId : value,
 themeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| themeId | string | yes | The ID of the theme |  
| body | [MarketplaceTheme](#MarketplaceTheme) | yes | Request body |


Use this api to Submit a theme

*Returned Response:*




[MarketplaceTheme](#MarketplaceTheme)

Theme updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": {
    "_id": "64be51bee7048a025f4fb0b8",
    "payment": {
      "is_paid": false,
      "amount": 0
    },
    "contact": {
      "developer_contact": [
        "test@gofynd.com"
      ],
      "seller_contact": "test@gofynd.com"
    },
    "industry": [
      "Business equipment and supplies",
      "Books, music, and video",
      "Clothing"
    ],
    "is_update": false,
    "is_default": false,
    "name": "White-Splash",
    "tagline": "Where Style Meets Artistry",
    "description": "Kartmax is the perfect theme to get you started with your store. Capture audiences' attention through captivating layouts inspired by editorial design, striking typography, and impactful hero sections. Embrace a contemporary narrative that exudes personality and brings your content to life.",
    "catalog_size": {
      "min": 200,
      "max": 0
    },
    "images": {
      "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
      "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
    },
    "carousel": [
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/u3zWsTqM5-carousel_mobile_1.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      }
    ],
    "src": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/zrIW3mA4G-White-Splash_1.0.157.zip",
    "explore": {
      "title": "Elevate Your Shopping Experience",
      "description": "Designed to cater to extensive carts and inventories, featuring a prominent search bar and the choice for a permanently visible cart sidebar."
    },
    "features": [
      {
        "category": "Home Sections",
        "list": [
          {
            "label": "Video",
            "description": "Video as a section"
          },
          {
            "label": "Carousel",
            "description": "Carousel as a section"
          }
        ]
      },
      {
        "category": "Authentication",
        "list": [
          {
            "label": "Standard Login Interface",
            "description": "Deafult Login Interface, use this if you have not implmented custom login interface for login, register flows inside your theme code."
          },
          {
            "label": "Login with Email",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Login with Mobile Number",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Voice OTP",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Social Media login",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          }
        ]
      },
      {
        "category": "Cart & Checkout",
        "list": [
          {
            "label": "Guest Checkout",
            "description": "Enables customer to buy a product without login"
          },
          {
            "label": "Customized Cart",
            "description": "--"
          }
        ]
      },
      {
        "category": "Product Description",
        "list": [
          {
            "label": "Buy Now",
            "description": "Buy Now flow support along with Add to Cart"
          },
          {
            "label": "Product Videos",
            "description": "Videos present in product catalog can be shown"
          },
          {
            "label": "3D Model of Product",
            "description": "3D Models present in product catalog can be shown"
          },
          {
            "label": "Product Variants",
            "description": "Show variants of a particular product"
          },
          {
            "label": "Extension Support",
            "description": "Supports various extensions made for Prdouct Page"
          },
          {
            "label": "Default Size Selection",
            "description": "By default select one size"
          },
          {
            "label": "Product Highlights",
            "description": "Show highlights added in the cartalog"
          },
          {
            "label": "Short Description",
            "description": "Show short description from catalog in PDP"
          }
        ]
      },
      {
        "category": "Product Listing",
        "list": [
          {
            "label": "Infinite Scroll",
            "description": "Infinite scrolling support using lazy loady"
          },
          {
            "label": "Discount Badges",
            "description": "Show discount or custom badges on Product tiles"
          },
          {
            "label": "Product Variants",
            "description": "Supports showcase various variants on the listing itself"
          }
        ]
      },
      {
        "category": "Navigation",
        "list": [
          {
            "label": "Customizable Navigation Menu",
            "description": "Customize Navigation Menu to accomodate multiple desings"
          }
        ]
      },
      {
        "category": "SEO",
        "list": [
          {
            "label": "alt text",
            "description": "Alt text data received in API is used on Product Images"
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Styles and Colours",
        "description": "With custom colours and styles, you can modify the appearance of your entire store or particular sections for specific events, marketing drives, or whenever des",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      },
      {
        "title": "Enhanced Navigation and Menu:",
        "description": "Unleash the full potential of your header by showcasing images, videos, products, and collections in an enhanced dropdown menu. Improve the browsing experience ",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      }
    ],
    "variations": [
      {
        "name": "default",
        "color": "#35919b",
        "demo_url": "nx7zjzx4i.hostx1.de",
        "images": {
          "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
          "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
        }
      }
    ],
    "documentation": {
      "notes": "<p>White splash user documentation</p>",
      "url": ""
    },
    "status": "published",
    "step": 7,
    "comments": {
      "developer_remark": "White Splash fyndx1 theme submission",
      "reviewer_feedback": ""
    },
    "release": {
      "version": "1.0.157",
      "notes": "<p>White-splash release notes. Fyndx1 theme submission.</p>"
    },
    "slug": "white-splash",
    "organization_id": "64aec4634bc407961ed265c5",
    "user_id": "ce6432937739e49875dedae0",
    "created_at": "2023-07-24T10:26:06.612Z",
    "updated_at": "2023-07-24T10:26:37.894Z",
    "template_theme_id": "64be51dd44650d20b5b15f18",
    "theme_type": "vue2"
  }
}
```
</details>

</details>









---


### updateDraftTheme
Update theme draft/submitted



```javascript
// Promise
const promise = partnerClient.theme.updateDraftTheme({  organizationId : value,
 themeId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.updateDraftTheme({  organizationId : value,
 themeId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| organizationId | string | yes | The ID of the organization |   
| themeId | string | yes | The ID of the theme |  
| body | [MarketplaceTheme](#MarketplaceTheme) | yes | Request body |


Update theme draft/submitted

*Returned Response:*




[MarketplaceTheme](#MarketplaceTheme)

Theme updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": {
    "_id": "64be51bee7048a025f4fb0b8",
    "payment": {
      "is_paid": false,
      "amount": 0
    },
    "contact": {
      "developer_contact": [
        "test@gofynd.com"
      ],
      "seller_contact": "test@gofynd.com"
    },
    "industry": [
      "Business equipment and supplies",
      "Books, music, and video",
      "Clothing"
    ],
    "is_update": false,
    "is_default": false,
    "name": "White-Splash",
    "tagline": "Where Style Meets Artistry",
    "description": "Kartmax is the perfect theme to get you started with your store. Capture audiences' attention through captivating layouts inspired by editorial design, striking typography, and impactful hero sections. Embrace a contemporary narrative that exudes personality and brings your content to life.",
    "catalog_size": {
      "min": 200,
      "max": 0
    },
    "images": {
      "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
      "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
    },
    "carousel": [
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/u3zWsTqM5-carousel_mobile_1.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/fhPI_ADIa-carousel_mobile_0.png"
      }
    ],
    "src": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/zrIW3mA4G-White-Splash_1.0.157.zip",
    "explore": {
      "title": "Elevate Your Shopping Experience",
      "description": "Designed to cater to extensive carts and inventories, featuring a prominent search bar and the choice for a permanently visible cart sidebar."
    },
    "features": [
      {
        "category": "Home Sections",
        "list": [
          {
            "label": "Video",
            "description": "Video as a section"
          },
          {
            "label": "Carousel",
            "description": "Carousel as a section"
          }
        ]
      },
      {
        "category": "Authentication",
        "list": [
          {
            "label": "Standard Login Interface",
            "description": "Deafult Login Interface, use this if you have not implmented custom login interface for login, register flows inside your theme code."
          },
          {
            "label": "Login with Email",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Login with Mobile Number",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Voice OTP",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          },
          {
            "label": "Social Media login",
            "description": "This is be default available in Standard Login Interface. If custom login interface is used, check your implmentation."
          }
        ]
      },
      {
        "category": "Cart & Checkout",
        "list": [
          {
            "label": "Guest Checkout",
            "description": "Enables customer to buy a product without login"
          },
          {
            "label": "Customized Cart",
            "description": "--"
          }
        ]
      },
      {
        "category": "Product Description",
        "list": [
          {
            "label": "Buy Now",
            "description": "Buy Now flow support along with Add to Cart"
          },
          {
            "label": "Product Videos",
            "description": "Videos present in product catalog can be shown"
          },
          {
            "label": "3D Model of Product",
            "description": "3D Models present in product catalog can be shown"
          },
          {
            "label": "Product Variants",
            "description": "Show variants of a particular product"
          },
          {
            "label": "Extension Support",
            "description": "Supports various extensions made for Prdouct Page"
          },
          {
            "label": "Default Size Selection",
            "description": "By default select one size"
          },
          {
            "label": "Product Highlights",
            "description": "Show highlights added in the cartalog"
          },
          {
            "label": "Short Description",
            "description": "Show short description from catalog in PDP"
          }
        ]
      },
      {
        "category": "Product Listing",
        "list": [
          {
            "label": "Infinite Scroll",
            "description": "Infinite scrolling support using lazy loady"
          },
          {
            "label": "Discount Badges",
            "description": "Show discount or custom badges on Product tiles"
          },
          {
            "label": "Product Variants",
            "description": "Supports showcase various variants on the listing itself"
          }
        ]
      },
      {
        "category": "Navigation",
        "list": [
          {
            "label": "Customizable Navigation Menu",
            "description": "Customize Navigation Menu to accomodate multiple desings"
          }
        ]
      },
      {
        "category": "SEO",
        "list": [
          {
            "label": "alt text",
            "description": "Alt text data received in API is used on Product Images"
          }
        ]
      }
    ],
    "highlights": [
      {
        "title": "Styles and Colours",
        "description": "With custom colours and styles, you can modify the appearance of your entire store or particular sections for specific events, marketing drives, or whenever des",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      },
      {
        "title": "Enhanced Navigation and Menu:",
        "description": "Unleash the full potential of your header by showcasing images, videos, products, and collections in an enhanced dropdown menu. Improve the browsing experience ",
        "image": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xD9aRhQIO-highlight_0.png"
      }
    ],
    "variations": [
      {
        "name": "default",
        "color": "#35919b",
        "demo_url": "nx7zjzx4i.hostx1.de",
        "images": {
          "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/EXo5oubRa-desktop.png",
          "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/PY-1mmO03-mobile.png"
        }
      }
    ],
    "documentation": {
      "notes": "<p>White splash user documentation</p>",
      "url": ""
    },
    "status": "published",
    "step": 7,
    "comments": {
      "developer_remark": "White Splash fyndx1 theme submission",
      "reviewer_feedback": ""
    },
    "release": {
      "version": "1.0.157",
      "notes": "<p>White-splash release notes. Fyndx1 theme submission.</p>"
    },
    "slug": "white-splash",
    "organization_id": "64aec4634bc407961ed265c5",
    "user_id": "ce6432937739e49875dedae0",
    "created_at": "2023-07-24T10:26:06.612Z",
    "updated_at": "2023-07-24T10:26:37.894Z",
    "template_theme_id": "64be51dd44650d20b5b15f18",
    "theme_type": "vue2"
  }
}
```
</details>

<details>
<summary><i>&nbsp; example2</i></summary>

```json
{
  "value": {
    "catalog_size": {
      "min": 0,
      "max": 0
    },
    "payment": {
      "is_paid": false,
      "amount": 0
    },
    "explore": {
      "title": "",
      "description": ""
    },
    "documentation": {
      "notes": "",
      "url": ""
    },
    "contact": {
      "developer_contact": [],
      "seller_contact": ""
    },
    "comments": {
      "developer_remark": "",
      "reviewer_feedback": ""
    },
    "release": {
      "version": "1.0.0",
      "notes": "<p>Release note test</p>"
    },
    "industry": [],
    "is_update": false,
    "is_default": false,
    "theme_type": "vue2",
    "_id": "64cb9d131239c4e21fa0e7a3",
    "name": "X1 Sanity Test",
    "tagline": "test",
    "description": "test",
    "images": {
      "desktop": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/IiBdydAkw-EXo5oubRa-desktop.png",
      "mobile": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/ZTATfW8Oe-PY-1mmO03-mobile.png"
    },
    "carousel": [
      {
        "desktop": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/1U3wS93Kx-carousel_desktop_0.png",
        "mobile": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xoLlqTg6W-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/1U3wS93Kx-carousel_desktop_0.png",
        "mobile": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xoLlqTg6W-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/1U3wS93Kx-carousel_desktop_0.png",
        "mobile": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xoLlqTg6W-carousel_mobile_0.png"
      },
      {
        "desktop": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/1U3wS93Kx-carousel_desktop_0.png",
        "mobile": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/xoLlqTg6W-carousel_mobile_0.png"
      }
    ],
    "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/general/free/original/jMpHx4fM7-Archive.zip",
    "features": [
      {
        "category": "",
        "list": []
      }
    ],
    "highlights": [
      {
        "title": "",
        "description": "",
        "image": ""
      }
    ],
    "variations": [
      {
        "name": "default",
        "color": "#35919b",
        "demo_url": "",
        "images": {
          "desktop": "",
          "mobile": ""
        }
      }
    ],
    "status": "draft",
    "step": 2,
    "slug": "x1-sanity-test",
    "organization_id": "64aec4634bc407961ed265c5",
    "user_id": "6c62ef5b0770d76cabdc24c3",
    "created_at": "2023-08-03T12:26:59.652Z",
    "updated_at": "2023-08-05T08:59:06.697Z",
    "id": "64cb9d131239c4e21fa0e7a3"
  }
}
```
</details>

</details>









---


### updateMultiplePages
Update multiple pages of a theme



```javascript
// Promise
const promise = partnerClient.theme.updateMultiplePages({  themeId : value,
 organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.updateMultiplePages({  themeId : value,
 organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |   
| organizationId | string | yes | Organization ID |  
| body | [AllAvailablePageSchema](#AllAvailablePageSchema) | yes | Request body |


Use this API to update multiple pages of a theme by its ID.

*Returned Response:*




[AllAvailablePageSchema](#AllAvailablePageSchema)

Success. Returns an array all the pages of the theme. Refer `AllAvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; All pages</i></summary>

```json
{
  "value": {
    "pages": [
      {
        "path": "products",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981639e13f6b2"
        },
        "_id": "60ab5ca6d572fed64294eb0e",
        "value": "product-listing",
        "text": "Product Listing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "collection",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981fc5d13f6b9"
        },
        "_id": "60ab5ca6d572fed64294eaf9",
        "text": "Collection Listing",
        "value": "collection-listing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "compare",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981cbca13f6b1"
        },
        "_id": "60ab5ca6d572fed64294eb0b",
        "value": "compare-products",
        "text": "Compare Products",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "cart/bag",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9812fdf13f6ae"
        },
        "_id": "60ab5ca6d572fed64294eb02",
        "value": "cart-landing",
        "text": "Cart Landing",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9815c9713f6ab"
        },
        "_id": "60ab5ca6d572fed64294eaf6",
        "text": "Product Description",
        "value": "product-description",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product/:slug/reviews",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb24"
        },
        "_id": "60ab5ca6d572fed64294eb25",
        "sections_meta": [],
        "value": "product-reviews",
        "text": "Product Reviews",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "blog",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb22"
        },
        "_id": "60ab5ca6d572fed64294eb23",
        "sections_meta": [],
        "value": "blog",
        "text": "Blog",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "sections/cookie",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e9814fed13f6b5"
        },
        "_id": "60ab5ca6d572fed64294eb17",
        "text": "cookie",
        "value": "cookie",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/vivek",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981b32713f6b6"
        },
        "_id": "60ab5ca6d572fed64294eb1a",
        "text": "vivek",
        "value": "vivek",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "about-us",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb28"
        },
        "_id": "60ab5ca6d572fed64294eb29",
        "sections_meta": [],
        "value": "about-us",
        "text": "About Us",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "wishlist",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981dd2d13f6b3"
        },
        "_id": "60ab5ca6d572fed64294eb11",
        "value": "wishlist",
        "text": "Wishlist",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "product/:slug/add-review",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60ab5ca6d572fed64294eb26"
        },
        "_id": "60ab5ca6d572fed64294eb27",
        "sections_meta": [],
        "value": "add-product-review",
        "text": "Add Product Review",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "__v": 9
      },
      {
        "path": "brands",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981161a13f6ad"
        },
        "_id": "60ab5ca6d572fed64294eaff",
        "value": "brands",
        "text": "Brands",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98115b013f6ac"
        },
        "_id": "60ab5ca6d572fed64294eafc",
        "value": "home",
        "text": "Home",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "collections",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981ad0b13f6b0"
        },
        "_id": "60ab5ca6d572fed64294eb08",
        "value": "collections",
        "text": "Collections",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "categories",
        "type": "system",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981872c13f6af"
        },
        "_id": "60ab5ca6d572fed64294eb05",
        "value": "categories",
        "text": "Categories",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/test",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98177f713f6b4"
        },
        "_id": "60ab5ca6d572fed64294eb14",
        "text": "Test",
        "value": "test",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/vinit",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e98170b813f6b8"
        },
        "_id": "60ab5ca6d572fed64294eb20",
        "text": "vinit",
        "value": "vinit",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      },
      {
        "path": "sections/maggie",
        "type": "sections",
        "seo": {
          "title": "",
          "description": "",
          "_id": "60210832d7e981469613f6b7"
        },
        "_id": "60ab5ca6d572fed64294eb1d",
        "text": "maggie",
        "value": "maggie",
        "theme": "5fb3ee4194a5181feeeba8e5",
        "sections_meta": [],
        "__v": 9
      }
    ]
  }
}
```
</details>

</details>









---


### updatePage
Updates a page 



```javascript
// Promise
const promise = partnerClient.theme.updatePage({  themeId : value,
 pageValue : value,
 organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.updatePage({  themeId : value,
 pageValue : value,
 organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme |   
| pageValue | string | yes | Value of the page to be updated |   
| organizationId | string | yes | Organization ID |  
| body | [AvailablePageSchema](#AvailablePageSchema) | yes | Request body |


Use this API to update a page for a theme by its ID.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns a the page of the theme. Refer `AvailablePageSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; page</i></summary>

```json
{
  "value": {
    "path": "",
    "type": "system",
    "seo": {
      "title": "",
      "description": "",
      "_id": "60210832d7e98115b013f6ac"
    },
    "props": [],
    "_id": "60ab5ca6d572fed64294eafc",
    "sections": [
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": false,
            "desktop": false,
            "tablet": false
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "utm": "facebook"
            }
          }
        },
        "name": "customHtml",
        "props": {
          "code": {
            "type": "code",
            "value": "<p style=\"text-align:right;\"><a href=\"tel:+919820204442\"><img src=\"https://dabuttonfactory.com/button.png?t=For+any+queries%2C+call%3A+%2B91+98202+04442&f=Open+Sans-Bold&ts=21&tc=fff&hp=20&vp=15&c=round&bgt=unicolored&bgc=7043f7\"/> </a></p>"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "udm": "vivek"
            }
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "Popular rrrrr"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          },
          {
            "type": "product",
            "name": "Product",
            "props": {
              "product": {
                "type": "product"
              }
            }
          }
        ],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": false,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "featuredProducts",
        "props": {
          "heading": {
            "value": "Featured Products",
            "type": "text"
          },
          "item_count": {
            "type": "range",
            "value": 4
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          }
        },
        "preset": {
          "blocks": [
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            },
            {
              "name": "Product"
            }
          ]
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "categoryListPage",
        "props": {
          "heading": {
            "type": "text",
            "value": "Explore Categories"
          },
          "layout": {
            "type": "select",
            "value": "grid"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "heroBanner",
        "props": {
          "ctaLink": {
            "type": "url",
            "value": "https://uniket.hostx0.de/about-us"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": "",
            "query": {
              "": ""
            }
          }
        },
        "name": "imageBanner",
        "props": {
          "image": {
            "value": "",
            "type": "image_picker"
          },
          "full_width": {
            "value": false,
            "type": "checkbox"
          },
          "overlayLayout": {
            "value": "left",
            "type": "select"
          },
          "overlayImage": {
            "value": "",
            "type": "image_picker"
          },
          "text": {
            "value": "",
            "type": "text"
          },
          "text_color": {
            "value": "#000",
            "type": "color"
          },
          "ctaLink": {
            "value": "",
            "type": "url"
          },
          "ctaText": {
            "value": "",
            "type": "text"
          },
          "layout": {
            "type": "select",
            "value": "full"
          },
          "height": {
            "type": "select",
            "value": "h-auto"
          }
        }
      },
      {
        "blocks": [],
        "predicate": {
          "screen": {
            "mobile": true,
            "desktop": true,
            "tablet": true
          },
          "user": {
            "authenticated": true,
            "anonymous": true
          },
          "route": {
            "selected": "none",
            "exactURL": ""
          }
        },
        "name": "brands-listing",
        "props": {
          "title": {
            "type": "text",
            "value": "asdfasdf"
          },
          "header": {
            "type": "header"
          },
          "brand_type": {
            "value": "all",
            "type": "radio"
          },
          "department": {
            "type": "department"
          },
          "item_count": {
            "value": 5,
            "type": "range"
          },
          "layout": {
            "value": "horizontal",
            "type": "select"
          },
          "view_all": {
            "value": false,
            "type": "checkbox"
          }
        }
      }
    ],
    "value": "home",
    "text": "Home",
    "theme": "5fb3ee4194a5181feeeba8e5",
    "sections_meta": [],
    "__v": 9
  }
}
```
</details>

</details>









---


### updateTheme
Update theme for a specific company and application



```javascript
// Promise
const promise = partnerClient.theme.updateTheme({  themeId : value,
 organizationId : value,
 body : value });

// Async/Await
const data = await partnerClient.theme.updateTheme({  themeId : value,
 organizationId : value,
 body : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | The ID of the theme. |   
| organizationId | string | yes | Organization ID |  
| body | [UpdateThemeRequestBody](#UpdateThemeRequestBody) | yes | Request body |


Update theme for a specific company and application

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Theme updated successfully




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; example1</i></summary>

```json
{
  "value": {
    "_id": "64be4423bc7b28003211322e",
    "applied": false,
    "is_private": false,
    "tags": [],
    "application_id": "6487ea376e1442284917c44e",
    "marketplace_theme_id": "64be1f4cceb549012e93d5f4",
    "meta": {
      "payment": {
        "is_paid": false,
        "amount": 0
      },
      "description": "Indulge in the epitome of luxury with our expertly crafted theme, showcasing a high-end aesthetic that exudes elegance. Designed with meticulous attention to detail, our features are tailored to elevate your products and amplify your brand identity.",
      "industry": [
        "Arts and crafts",
        "Baby and kids",
        "Books, music, and video"
      ],
      "release": {
        "notes": "<p>Emerge release notes. Fyndx1 theme submission.</p>"
      },
      "images": {
        "desktop": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/McHjwol_h-images_desktop.webp",
        "mobile": "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/misc/pictures/free-icon/original/bq6gXrmVE-images_mobile.webp"
      },
      "slug": "emerge"
    },
    "name": "Emerge",
    "template_theme_id": "64be1fdc2139f66b3ca2e94d",
    "version": "1.0.153",
    "styles": {},
    "created_at": "2023-07-24T09:28:03.845Z",
    "updated_at": "2023-07-31T12:14:13.097Z",
    "theme_type": "vue2",
    "assets": {
      "umd_js": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.8.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.cart.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.extras.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.vendors_products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.umd.min.js"
        ],
        "link": ""
      },
      "common_js": {
        "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.common.js"
      },
      "css": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_cart.1b038cd83e502f2d58bc.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_extras.f8a9789ae6a06b0bd503.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products-listing.1d639747568baee211ba.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_products.c1f151d12b3f704fe028.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_profile.c9e6a92612e4b423dbd7.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_themeBundle.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/yf7ijNZKa_vendors_products-listing.c8fe85761d60286348e3.css"
        ],
        "link": ""
      }
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
        },
        "medium": {
          "name": "500",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
        },
        "semi_bold": {
          "name": "600",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        }
      },
      "family": "Poppins"
    },
    "config": {
      "current": "Default",
      "list": [
        {
          "name": "Default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#ffffff",
                "header_text_color": "#000000",
                "header_border_color": "#e1e1e1",
                "header_icon_color": "#000000",
                "header_cart_notification_bg_color": "#e8a76c",
                "header_cart_notification_text_color": "#ffffff",
                "header_nav_hover_color": "#999999",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#ffffff",
                "footer_text_color": "#999999",
                "footer_border_color": "#e1e1e1",
                "footer_nav_hover_color": "#000000",
                "disable_cart": false,
                "is_menu_below_logo": false,
                "menu_position": "left"
              }
            }
          },
          "page": []
        },
        {
          "name": "Dark",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#2e3032",
                "header_text_color": "#ffffff",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#ffffff",
                "header_cart_notification_bg_color": "#FFFFFF",
                "header_cart_notification_text_color": "#2e3032",
                "header_nav_hover_color": "#000000",
                "button_primary_color": "#000000",
                "button_primary_label_color": "#ffffff",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#2e3032",
                "footer_text_color": "#ffffff",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#ffffff"
              }
            }
          },
          "page": []
        },
        {
          "name": "Blue",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#7f9ed0",
                "header_text_color": "#FFFFFF",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#FFFFFF",
                "header_cart_notification_bg_color": "#2e3032",
                "header_cart_notification_text_color": "#FFFFFF",
                "header_nav_hover_color": "#2e3032",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#7f9ed0",
                "footer_text_color": "#FFFFFF",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#2e3032"
              }
            }
          },
          "page": []
        }
      ],
      "preset": {
        "pages": [
          {
            "sections": [
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "hero_image",
                "props": {
                  "image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_layout": {
                    "type": "select",
                    "value": "center"
                  },
                  "overlay_image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_text": {
                    "value": "",
                    "type": "text"
                  },
                  "text_color": {
                    "value": "#000",
                    "type": "color"
                  },
                  "button_link": {
                    "type": "url",
                    "value": ""
                  },
                  "button_text": {
                    "value": "Shop Now",
                    "type": "text"
                  },
                  "full_width": {
                    "value": true,
                    "type": "checkbox"
                  }
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_slideshow",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_height": {
                    "value": "adapt",
                    "type": "select"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  },
                  "title": {
                    "value": "Trending",
                    "type": "text"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    }
                  ]
                }
              },
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_gallery",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Popular Brands"
                  },
                  "layout": {
                    "value": "grid",
                    "type": "select"
                  },
                  "item_count": {
                    "value": 4,
                    "type": "range"
                  },
                  "cta_text": {
                    "value": "",
                    "type": "text"
                  },
                  "cta_link": {
                    "type": "url",
                    "value": ""
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    }
                  ]
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "brands_listing",
                "props": {
                  "brand_type": {
                    "value": "all",
                    "type": "radio"
                  },
                  "cta_text": {
                    "value": "View all",
                    "type": "text"
                  },
                  "department": {
                    "type": "department"
                  },
                  "header": {
                    "type": "header"
                  },
                  "items_per_row": {
                    "value": 5,
                    "type": "range"
                  },
                  "layout": {
                    "value": "horizontal",
                    "type": "select"
                  },
                  "title": {
                    "type": "text",
                    "value": "Brands"
                  },
                  "view_options": {
                    "value": "fullview",
                    "type": "select"
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "testimonials",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    }
                  ]
                }
              }
            ],
            "value": "home"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "checkbox",
            "id": "disable_cart",
            "category": "Colors",
            "label": "header"
          }
        ]
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "url",
            "id": "banner_link",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "application_banner",
        "label": "Application Banner"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "header",
            "id": "header",
            "value": "Choose Brands to Show"
          },
          {
            "id": "view_options",
            "type": "select",
            "options": [
              {
                "value": "logo",
                "text": "Logo View"
              },
              {
                "value": "fullview",
                "text": "Logo and Banner View"
              }
            ],
            "label": "View Options",
            "info": "Brand card view options"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "department",
                "text": "Department"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "department",
            "id": "department",
            "label": "Department",
            "info": "Select a department of brands",
            "note": "Department only applies if 'department' type is selected"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "brand_item",
            "name": "Brand Item",
            "props": [
              {
                "type": "brand",
                "id": "brand",
                "label": "Select Brand"
              }
            ]
          }
        ],
        "name": "brands_listing",
        "label": "Brands Listing"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "text",
            "id": "tags_filter",
            "label": "Filter by tags",
            "info": "Filter by Tags "
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Max items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select Collection"
              }
            ]
          }
        ],
        "name": "collections_listing",
        "label": "Collections Listing"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "custom_html",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "extension",
            "id": "extension",
            "label": "Extension Positions",
            "info": "Handle extension in these positions",
            "positions": [
              {
                "value": "section_extension",
                "text": ""
              }
            ]
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "section_extension",
        "label": "Extensions"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [],
        "name": "featured_collection",
        "label": "Featured Collection"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "overlay_layout",
            "type": "select",
            "options": [
              {
                "value": "left",
                "text": "Align Left"
              },
              {
                "value": "center",
                "text": "Align Center"
              },
              {
                "value": "right",
                "text": "Align Right"
              }
            ],
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlay_image",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "overlay_text",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "fullscreen_image",
            "label": "Fullscreen Banner ",
            "info": "Check to allow items to take entire viewport"
          }
        ],
        "blocks": [],
        "name": "hero_image",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "type": "video",
            "id": "videoFile",
            "label": "Primary Video"
          },
          {
            "id": "videoUrl",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "hidecontrols",
            "label": "Hide Video Controls",
            "info": "check to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "showloop",
            "label": "Play Video in Loop",
            "info": "check to disable Loop"
          },
          {
            "type": "text",
            "id": "title",
            "label": "Heading"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Thumbnail Image"
          }
        ],
        "blocks": [],
        "name": "hero_video-v2",
        "label": "Hero Video V2"
      },
      {
        "props": [
          {
            "id": "video_url",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "controls",
            "label": "Video Controls",
            "info": "Uncheck to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "bg_video",
            "label": "Video In Background",
            "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              },
              {
                "value": "adapt",
                "text": "Adapt"
              },
              {
                "value": "fullscreen",
                "text": "Fullscreen"
              }
            ],
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_image",
            "label": "Enable Overlay Image"
          },
          {
            "id": "cover_url",
            "type": "image_picker",
            "label": "Video Overlay Image"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_color",
            "label": "Enable Overlay Colour"
          },
          {
            "type": "color",
            "id": "overlay_color",
            "label": "Overlay Color"
          },
          {
            "type": "range",
            "id": "overlay_opacity",
            "min": 0,
            "max": 1,
            "step": 0.1,
            "unit": "",
            "label": "Overlay Opacity"
          },
          {
            "type": "select",
            "id": "overlay_size",
            "options": [
              {
                "value": "container",
                "text": "Container (Default)"
              },
              {
                "value": "content",
                "text": "Content"
              }
            ],
            "label": "Overlay Size"
          },
          {
            "id": "overlay_position",
            "type": "select",
            "options": [
              {
                "value": "top-left",
                "text": "Top Left"
              },
              {
                "value": "top-center",
                "text": "Top Center"
              },
              {
                "value": "top-right",
                "text": "Top Right"
              },
              {
                "value": "center-left",
                "text": "Center Left"
              },
              {
                "value": "center-center",
                "text": "Center (Default)"
              },
              {
                "value": "center-right",
                "text": "Center Right"
              },
              {
                "value": "bottom-left",
                "text": "Bottom Left"
              },
              {
                "value": "bottom-center",
                "text": "Bottom Center"
              },
              {
                "value": "bottom-right",
                "text": "Bottom right"
              }
            ],
            "label": "Overlay position",
            "info": "Alignment of Overlay content(heading, sub-heading, button)"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "label": "Heading Text Color"
          },
          {
            "type": "text",
            "id": "sub_heading",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "sub_heading_color",
            "label": "Sub-heading Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "name": "hero_video",
        "label": "Hero Video"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          },
          {
            "type": "url",
            "id": "cta_link",
            "label": "CTA Link",
            "info": "Link to redirect"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "gallery_image",
            "name": "Image",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Gallery Image"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption"
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "name": "image_gallery",
        "label": "Image Gallery",
        "preset": {
          "blocks": [
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          },
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first image"
              },
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              }
            ],
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "image_slide",
            "name": "Slide",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Image"
              },
              {
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "name": "image_slideshow",
        "label": "Image Slideshow",
        "preset": {
          "blocks": [
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "image_picker",
            "id": "image",
            "label": "Image"
          },
          {
            "id": "video",
            "type": "url",
            "label": "Video"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "cover",
            "type": "url",
            "label": "Video Cover Image"
          },
          {
            "type": "select",
            "id": "media_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Media Alignment"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "text",
            "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
            "label": "Text"
          },
          {
            "type": "select",
            "id": "text_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Text Alignment"
          }
        ],
        "blocks": [],
        "name": "media_with_text",
        "label": "Media with text"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every"
          }
        ],
        "blocks": [
          {
            "type": "testimonial",
            "name": "Testimonial",
            "props": [
              {
                "type": "textarea",
                "id": "testimonialText",
                "label": "Text for Testimonial",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author_name",
                "label": "Author name"
              },
              {
                "type": "text",
                "id": "author_description",
                "label": "Author Description"
              },
              {
                "type": "image_picker",
                "id": "author_image",
                "label": "Author Image"
              }
            ]
          }
        ],
        "name": "testimonials",
        "label": "Testimonial",
        "preset": {
          "blocks": [
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            }
          ]
        }
      }
    ],
    "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64b0eb01c35f990518880a82/theme/assets/7yuL57qP2-archive.zip"
  }
}
```
</details>

<details>
<summary><i>&nbsp; example2</i></summary>

```json
{
  "value": {
    "_id": "64b91fe317422a1e1392f85b",
    "applied": true,
    "is_private": true,
    "tags": [],
    "name": "Astra",
    "version": "1.0.11",
    "application_id": "7487ea376e1442284917c44e",
    "styles": {},
    "template_theme_id": "64be264c0347c5002279b75f",
    "created_at": "2023-07-24T07:20:44.629Z",
    "updated_at": "2023-08-01T11:09:25.857Z",
    "theme_type": "vue2",
    "assets": {
      "umd_js": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.9.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.cart.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.extras.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing_profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.profile.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products-listing.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.vendors_products.js",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.umd.min.js"
        ],
        "link": ""
      },
      "common_js": {
        "link": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.common.js"
      },
      "css": {
        "links": [
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_extras.8604b743eb82cd74e4bb.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing_profile.944723408675f52ed297.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products-listing.ca493ea7d081b4b575f7.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_products.2c64f7731dab64227f0b.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_profile.1b1467735927e188d272.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_themeBundle.css",
          "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/O3s2Kmnsc_vendors_products-listing.c8fe85761d60286348e3.css"
        ],
        "link": ""
      }
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf"
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf"
        },
        "medium": {
          "name": "500",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf"
        },
        "semi_bold": {
          "name": "600",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf"
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf"
        }
      },
      "family": "Poppins"
    },
    "config": {
      "current": "Default",
      "list": [
        {
          "name": "Default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#ffffff",
                "header_text_color": "#000000",
                "header_border_color": "#e1e1e1",
                "header_icon_color": "#000000",
                "header_cart_notification_bg_color": "#e8a76c",
                "header_cart_notification_text_color": "#ffffff",
                "header_nav_hover_color": "#999999",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#ffffff",
                "footer_text_color": "#999999",
                "footer_border_color": "#e1e1e1",
                "footer_nav_hover_color": "#000000",
                "disable_cart": false,
                "is_menu_below_logo": false,
                "menu_position": "left"
              }
            }
          },
          "page": []
        },
        {
          "name": "Dark",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#2e3032",
                "header_text_color": "#ffffff",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#ffffff",
                "header_cart_notification_bg_color": "#FFFFFF",
                "header_cart_notification_text_color": "#2e3032",
                "header_nav_hover_color": "#000000",
                "button_primary_color": "#000000",
                "button_primary_label_color": "#ffffff",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#2e3032",
                "footer_text_color": "#ffffff",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#ffffff"
              }
            }
          },
          "page": []
        },
        {
          "name": "Blue",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#000000",
                  "secondary_color": "#000000",
                  "accent_color": "#000000",
                  "link_color": "#4499FF",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                },
                "auth": {
                  "show_header_auth": false,
                  "show_footer_auth": false
                },
                "palette": {
                  "general_setting": {
                    "theme": {
                      "page_background": "#F3F3ED",
                      "theme_accent": "#E1D0C8"
                    },
                    "text": {
                      "text_heading": "#26201A",
                      "text_body": "#3C3131",
                      "text_label": "#7D7676",
                      "text_secondary": "#9C9C9C"
                    },
                    "button": {
                      "button_primary": "#4E3F09",
                      "button_secondary": "#FFFFFF",
                      "button_link": "#B1655B"
                    },
                    "sale_discount": {
                      "sale_badge_background": "#FFFFFF",
                      "sale_badge_text": "#1C958F",
                      "sale_discount_text": "#1C958F",
                      "sale_timer": "#994449"
                    },
                    "header": {
                      "header_background": "#F3F3ED",
                      "header_nav": "#261A1A",
                      "header_icon": "#261A1A"
                    },
                    "footer": {
                      "footer_background": "#2C231E",
                      "footer_bottom_background": "#231812",
                      "footer_heading_text": "#FFFFFF",
                      "footer_body_text": "#FFFFFF",
                      "footer_icon": "#FFFFFF"
                    }
                  },
                  "advance_setting": {
                    "overlay_popup": {
                      "dialog_backgroung": "#FFFFFF",
                      "overlay": "#14130E"
                    },
                    "divider_stroke_highlight": {
                      "divider_strokes": "#D4D1D1",
                      "highlight": "#EDECE9"
                    },
                    "user_alerts": {
                      "success_background": "#C2DBC9",
                      "success_text": "#1C958F",
                      "error_background": "#E6D5D5",
                      "error_text": "#B24141",
                      "info_background": "#EBD3BC",
                      "info_text": "#D28F51"
                    }
                  }
                },
                "extension": {
                  "header_top": [],
                  "header_bottom": [],
                  "footer_top": [],
                  "footer_bottom": []
                }
              }
            },
            "custom": {
              "props": {
                "header_bg_color": "#7f9ed0",
                "header_text_color": "#FFFFFF",
                "header_border_color": "#FFFFFF",
                "header_icon_color": "#FFFFFF",
                "header_cart_notification_bg_color": "#2e3032",
                "header_cart_notification_text_color": "#FFFFFF",
                "header_nav_hover_color": "#2e3032",
                "button_primary_color": "#ffffff",
                "button_primary_label_color": "#000000",
                "button_add_to_cart_color": "#000000",
                "button_add_to_cart_label_color": "#ffffff",
                "button_secondary_color": "#000000",
                "button_secondary_label_color": "#ffffff",
                "button_tertiary_color": "#000000",
                "button_tertiary_label_color": "#000000",
                "button_tertiary_hover_color": "#000000",
                "button_tertiary_hover_text_color": "#ffffff",
                "text_heading_link_color": "#000000",
                "text_body_color": "#000000",
                "text_price_color": "#000000",
                "text_sale_price_color": "#fb406b",
                "text_strikethrough_price_color": "#9b9b9b",
                "text_discount_color": "#ee478d",
                "footer_bg_color": "#7f9ed0",
                "footer_text_color": "#FFFFFF",
                "footer_border_color": "#FFFFFF",
                "footer_nav_hover_color": "#2e3032"
              }
            }
          },
          "page": []
        }
      ],
      "preset": {
        "pages": [
          {
            "sections": [
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "hero_image",
                "props": {
                  "image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_layout": {
                    "type": "select",
                    "value": "center"
                  },
                  "overlay_image": {
                    "value": "",
                    "type": "image_picker"
                  },
                  "overlay_text": {
                    "value": "",
                    "type": "text"
                  },
                  "text_color": {
                    "value": "#000",
                    "type": "color"
                  },
                  "button_link": {
                    "type": "url",
                    "value": ""
                  },
                  "button_text": {
                    "value": "Shop Now",
                    "type": "text"
                  },
                  "full_width": {
                    "value": true,
                    "type": "checkbox"
                  }
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_slideshow",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_height": {
                    "value": "adapt",
                    "type": "select"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  },
                  "title": {
                    "value": "Trending",
                    "type": "text"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    },
                    {
                      "name": "Slide"
                    }
                  ]
                }
              },
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": ""
                      },
                      "caption": {
                        "type": "text",
                        "value": ""
                      },
                      "link": {
                        "type": "url",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "image_gallery",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Popular Brands"
                  },
                  "layout": {
                    "value": "grid",
                    "type": "select"
                  },
                  "item_count": {
                    "value": 4,
                    "type": "range"
                  },
                  "cta_text": {
                    "value": "",
                    "type": "text"
                  },
                  "cta_link": {
                    "type": "url",
                    "value": ""
                  },
                  "full_width": {
                    "value": false,
                    "type": "checkbox"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    },
                    {
                      "name": "Image"
                    }
                  ]
                }
              },
              {
                "blocks": [],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "brands_listing",
                "props": {
                  "brand_type": {
                    "value": "all",
                    "type": "radio"
                  },
                  "cta_text": {
                    "value": "View all",
                    "type": "text"
                  },
                  "department": {
                    "type": "department"
                  },
                  "header": {
                    "type": "header"
                  },
                  "items_per_row": {
                    "value": 5,
                    "type": "range"
                  },
                  "layout": {
                    "value": "horizontal",
                    "type": "select"
                  },
                  "title": {
                    "type": "text",
                    "value": "Brands"
                  },
                  "view_options": {
                    "value": "fullview",
                    "type": "select"
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "testimonial",
                    "name": "Testimonial",
                    "props": {
                      "testimonialText": {
                        "type": "textarea",
                        "value": ""
                      },
                      "author_name": {
                        "type": "text"
                      },
                      "author_description": {
                        "type": "text",
                        "value": ""
                      },
                      "author_image": {
                        "type": "image_picker",
                        "value": ""
                      }
                    }
                  }
                ],
                "predicate": {
                  "screen": {
                    "mobile": true,
                    "desktop": true,
                    "tablet": true
                  },
                  "user": {
                    "authenticated": true,
                    "anonymous": true
                  },
                  "route": {
                    "selected": "none",
                    "exact_url": ""
                  }
                },
                "name": "testimonials",
                "props": {
                  "autoplay": {
                    "value": false,
                    "type": "checkbox"
                  },
                  "slide_interval": {
                    "value": 2,
                    "type": "range"
                  }
                },
                "preset": {
                  "blocks": [
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    },
                    {
                      "name": "Testimonial"
                    }
                  ]
                }
              }
            ],
            "value": "home"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "checkbox",
            "id": "disable_cart",
            "category": "Colors",
            "label": "header"
          }
        ]
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "url",
            "id": "banner_link",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "application_banner",
        "label": "Application Banner"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "header",
            "id": "header",
            "value": "Choose Brands to Show"
          },
          {
            "id": "view_options",
            "type": "select",
            "options": [
              {
                "value": "logo",
                "text": "Logo View"
              },
              {
                "value": "fullview",
                "text": "Logo and Banner View"
              }
            ],
            "label": "View Options",
            "info": "Brand card view options"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "department",
                "text": "Department"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "department",
            "id": "department",
            "label": "Department",
            "info": "Select a department of brands",
            "note": "Department only applies if 'department' type is selected"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "brand_item",
            "name": "Brand Item",
            "props": [
              {
                "type": "brand",
                "id": "brand",
                "label": "Select Brand"
              }
            ]
          }
        ],
        "name": "brands_listing",
        "label": "Brands Listing"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "options": [
              {
                "value": "all",
                "text": "All"
              },
              {
                "value": "handpicked",
                "text": "Handpicked"
              }
            ]
          },
          {
            "type": "text",
            "id": "tags_filter",
            "label": "Filter by tags",
            "info": "Filter by Tags "
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Max items per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select Collection"
              }
            ]
          }
        ],
        "name": "collections_listing",
        "label": "Collections Listing"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "custom_html",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "extension",
            "id": "extension",
            "label": "Extension Positions",
            "info": "Handle extension in these positions",
            "positions": [
              {
                "value": "section_extension",
                "text": ""
              }
            ]
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          }
        ],
        "blocks": [],
        "name": "section_extension",
        "label": "Extensions"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "range",
            "id": "items_per_row",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "info": "Maximum items allowed per row"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [],
        "name": "featured_collection",
        "label": "Featured Collection"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "overlay_layout",
            "type": "select",
            "options": [
              {
                "value": "left",
                "text": "Align Left"
              },
              {
                "value": "center",
                "text": "Align Center"
              },
              {
                "value": "right",
                "text": "Align Right"
              }
            ],
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlay_image",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "overlay_text",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "fullscreen_image",
            "label": "Fullscreen Banner ",
            "info": "Check to allow items to take entire viewport"
          }
        ],
        "blocks": [],
        "name": "hero_image",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "type": "video",
            "id": "videoFile",
            "label": "Primary Video"
          },
          {
            "id": "videoUrl",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "hidecontrols",
            "label": "Hide Video Controls",
            "info": "check to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "showloop",
            "label": "Play Video in Loop",
            "info": "check to disable Loop"
          },
          {
            "type": "text",
            "id": "title",
            "label": "Heading"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Thumbnail Image"
          }
        ],
        "blocks": [],
        "name": "hero_video-v2",
        "label": "Hero Video V2"
      },
      {
        "props": [
          {
            "id": "video_url",
            "type": "text",
            "label": "Video URL",
            "info": "Supports MP4 Video & Youtube Video URL"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "Autoplay",
            "info": "Check to enable autoplay (Video will be muted if autoplay is active)"
          },
          {
            "type": "checkbox",
            "id": "controls",
            "label": "Video Controls",
            "info": "Uncheck to disable video controls"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "bg_video",
            "label": "Video In Background",
            "info": "Use video in background with overlay (Overlay Image & Video Controls will be disabled by default on website)"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              },
              {
                "value": "adapt",
                "text": "Adapt"
              },
              {
                "value": "fullscreen",
                "text": "Fullscreen"
              }
            ],
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_image",
            "label": "Enable Overlay Image"
          },
          {
            "id": "cover_url",
            "type": "image_picker",
            "label": "Video Overlay Image"
          },
          {
            "type": "checkbox",
            "id": "enable_overlay_color",
            "label": "Enable Overlay Colour"
          },
          {
            "type": "color",
            "id": "overlay_color",
            "label": "Overlay Color"
          },
          {
            "type": "range",
            "id": "overlay_opacity",
            "min": 0,
            "max": 1,
            "step": 0.1,
            "unit": "",
            "label": "Overlay Opacity"
          },
          {
            "type": "select",
            "id": "overlay_size",
            "options": [
              {
                "value": "container",
                "text": "Container (Default)"
              },
              {
                "value": "content",
                "text": "Content"
              }
            ],
            "label": "Overlay Size"
          },
          {
            "id": "overlay_position",
            "type": "select",
            "options": [
              {
                "value": "top-left",
                "text": "Top Left"
              },
              {
                "value": "top-center",
                "text": "Top Center"
              },
              {
                "value": "top-right",
                "text": "Top Right"
              },
              {
                "value": "center-left",
                "text": "Center Left"
              },
              {
                "value": "center-center",
                "text": "Center (Default)"
              },
              {
                "value": "center-right",
                "text": "Center Right"
              },
              {
                "value": "bottom-left",
                "text": "Bottom Left"
              },
              {
                "value": "bottom-center",
                "text": "Bottom Center"
              },
              {
                "value": "bottom-right",
                "text": "Bottom right"
              }
            ],
            "label": "Overlay position",
            "info": "Alignment of Overlay content(heading, sub-heading, button)"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "label": "Heading Text Color"
          },
          {
            "type": "text",
            "id": "sub_heading",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "sub_heading_color",
            "label": "Sub-heading Text Color"
          },
          {
            "type": "url",
            "id": "button_link",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "button_text",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "name": "hero_video",
        "label": "Hero Video"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "layout",
            "type": "select",
            "options": [
              {
                "value": "grid",
                "text": "Grid View"
              },
              {
                "value": "horizontal",
                "text": "Horizontal View"
              }
            ],
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "info": "Maximum items allowed per row for Horizontal view, for gallery max 5 are viewable and only 5 blocks are required"
          },
          {
            "type": "text",
            "id": "cta_text",
            "label": "CTA Text"
          },
          {
            "type": "url",
            "id": "cta_link",
            "label": "CTA Link",
            "info": "Link to redirect"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "gallery_image",
            "name": "Image",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Gallery Image"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption"
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "name": "image_gallery",
        "label": "Image Gallery",
        "preset": {
          "blocks": [
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            },
            {
              "name": "Image"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides",
            "info": "Check to autoplay slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides after every",
            "info": "Autoplay slide duration"
          },
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first image"
              },
              {
                "value": "small",
                "text": "Small"
              },
              {
                "value": "medium",
                "text": "Medium"
              },
              {
                "value": "large",
                "text": "Large"
              }
            ],
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "image_slide",
            "name": "Slide",
            "props": [
              {
                "type": "image_picker",
                "id": "image",
                "label": "Image"
              },
              {
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "name": "image_slideshow",
        "label": "Image Slideshow",
        "preset": {
          "blocks": [
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            },
            {
              "name": "Slide"
            }
          ]
        }
      },
      {
        "props": [
          {
            "type": "image_picker",
            "id": "image",
            "label": "Image"
          },
          {
            "id": "video",
            "type": "url",
            "label": "Video"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "id": "cover",
            "type": "url",
            "label": "Video Cover Image"
          },
          {
            "type": "select",
            "id": "media_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Media Alignment"
          },
          {
            "type": "text",
            "id": "heading",
            "label": "Heading"
          },
          {
            "type": "text",
            "id": "text Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
            "label": "Text"
          },
          {
            "type": "select",
            "id": "text_alignment",
            "options": [
              {
                "value": "left",
                "text": "Left"
              },
              {
                "value": "center",
                "text": "Center"
              },
              {
                "value": "right",
                "text": "Right"
              }
            ],
            "label": "Text Alignment"
          }
        ],
        "blocks": [],
        "name": "media_with_text",
        "label": "Media with text"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "label": "Title"
          },
          {
            "type": "range",
            "id": "margin_top",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Top Margin"
          },
          {
            "type": "range",
            "id": "margin_bottom",
            "min": 0,
            "max": 1000,
            "step": 1,
            "unit": "px",
            "label": "Section Bottom Margin"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every"
          }
        ],
        "blocks": [
          {
            "type": "testimonial",
            "name": "Testimonial",
            "props": [
              {
                "type": "textarea",
                "id": "testimonialText",
                "label": "Text for Testimonial",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author_name",
                "label": "Author name"
              },
              {
                "type": "text",
                "id": "author_description",
                "label": "Author Description"
              },
              {
                "type": "image_picker",
                "id": "author_image",
                "label": "Author Image"
              }
            ]
          }
        ],
        "name": "testimonials",
        "label": "Testimonial",
        "preset": {
          "blocks": [
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            },
            {
              "name": "Testimonial"
            }
          ]
        }
      }
    ],
    "src": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/organization/64aec4634bc407961ed265c5/theme/assets/Gpbt5naNG-archive.zip"
  }
}
```
</details>

</details>









---




### Schemas


#### [AdvanceSetting](#AdvanceSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | divider_stroke_highlight | [DividerStrokeHighlightSetting](#DividerStrokeHighlightSetting)? |  yes  |  |
 | overlay_popup | [OverlayPopupSetting](#OverlayPopupSetting)? |  yes  |  |
 | user_alerts | [UserAlertsSetting](#UserAlertsSetting)? |  yes  |  |
 

---

#### [AllAvailablePageSchema](#AllAvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)]? |  yes  |  |
 

---

#### [Assets](#Assets)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | common_js | [CommonJS](#CommonJS)? |  yes  |  |
 | css | [CSS](#CSS)? |  yes  |  |
 | umd_js | [UMDJs](#UMDJs)? |  yes  |  |
 

---

#### [AuthConfig](#AuthConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | show_footer_auth | boolean? |  yes  | Whether to show footer authentication or not |
 | show_header_auth | boolean? |  yes  | Whether to show header authentication or not |
 

---

#### [AvailablePagePredicate](#AvailablePagePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | route | [AvailablePageRoutePredicate](#AvailablePageRoutePredicate)? |  yes  |  |
 | screen | [AvailablePageScreenPredicate](#AvailablePageScreenPredicate)? |  yes  |  |
 | user | [AvailablePageUserPredicate](#AvailablePageUserPredicate)? |  yes  |  |
 

---

#### [AvailablePageRoutePredicate](#AvailablePageRoutePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exact_url | string? |  yes  |  |
 | query | string? |  yes  |  |
 | selected | string? |  yes  |  |
 

---

#### [AvailablePageSchema](#AvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | path | string? |  yes  |  |
 | props | [string]? |  yes  |  |
 | sections | [[AvailablePageSchemaSections](#AvailablePageSchemaSections)]? |  yes  |  |
 | sections_meta | [[AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)]? |  yes  |  |
 | seo | [AvailablePageSeo](#AvailablePageSeo)? |  yes  |  |
 | text | string? |  yes  |  |
 | theme | string? |  yes  |  |
 | type | string? |  yes  |  |
 | value | string? |  yes  |  |
 

---

#### [AvailablePageSchemaSections](#AvailablePageSchemaSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [string]? |  yes  |  |
 | label | string? |  yes  |  |
 | name | string? |  yes  |  |
 | predicate | [AvailablePagePredicate](#AvailablePagePredicate)? |  yes  |  |
 | preset | string? |  yes  |  |
 | props | string? |  yes  |  |
 

---

#### [AvailablePageScreenPredicate](#AvailablePageScreenPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | boolean? |  yes  |  |
 | mobile | boolean? |  yes  |  |
 | tablet | boolean? |  yes  |  |
 

---

#### [AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string? |  yes  |  |
 

---

#### [AvailablePageSeo](#AvailablePageSeo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  |  |
 | description | string? |  yes  |  |
 | title | string? |  yes  |  |
 

---

#### [AvailablePageUserPredicate](#AvailablePageUserPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | anonymous | boolean? |  yes  |  |
 | authenticated | boolean? |  yes  |  |
 

---

#### [BlitzkriegApiErrorSchema](#BlitzkriegApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [BlitzkriegInternalServerErrorSchema](#BlitzkriegInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string? |  yes  |  |
 

---

#### [Block](#Block)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string? |  yes  | The name of the block. |
 | props | [BlockProps](#BlockProps)? |  yes  |  |
 | type | string? |  yes  | The type of the block. |
 

---

#### [BlockProps](#BlockProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | image | [ImagePickerProp](#ImagePickerProp)? |  yes  |  |
 | slide_link | [UrlProp](#UrlProp)? |  yes  |  |
 

---

#### [ButtonSetting](#ButtonSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | button_link | string? |  yes  | The button link color |
 | button_primary | string? |  yes  | The primary button color |
 | button_secondary | string? |  yes  | The secondary button color |
 

---

#### [CarouselItem](#CarouselItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | string? |  yes  | Desktop carousel image URL |
 | mobile | string? |  yes  | Mobile carousel image URL |
 

---

#### [CatalogSize](#CatalogSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | max | number? |  yes  | Maximum catalog size |
 | min | number? |  yes  | Minimum catalog size |
 

---

#### [CheckboxProp](#CheckboxProp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of the property. |
 | value | boolean? |  yes  | The value of the checkbox property. |
 

---

#### [Colors](#Colors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | accent_color | string? |  yes  | The accent color |
 | bg_color | string? |  yes  | The background color |
 | button_secondary_color | string? |  yes  | The secondary button color |
 | link_color | string? |  yes  | The link color |
 | primary_color | string? |  yes  | The primary color |
 | secondary_color | string? |  yes  | The secondary color |
 

---

#### [Comments](#Comments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | developer_remark | string? |  yes  | Developer remark |
 | reviewer_feedback | string? |  yes  | Reviewer feedback |
 

---

#### [CommonJS](#CommonJS)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string? |  yes  |  |
 

---

#### [Config](#Config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | string |  no  | The current configuration |
 | global_schema | [GlobalSchema](#GlobalSchema)? |  yes  |  |
 | list | [[ThemeConfiguration](#ThemeConfiguration)] |  no  | A list of configurations |
 | preset | [Preset](#Preset)? |  yes  |  |
 

---

#### [ContactInfo](#ContactInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | developer_contact | [string]? |  yes  | Developer contact information |
 | seller_contact | string? |  yes  | Seller contact information |
 

---

#### [CSS](#CSS)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | links | [string]? |  yes  |  |
 

---

#### [CustomConfig](#CustomConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [CustomProps](#CustomProps)? |  yes  |  |
 

---

#### [CustomProps](#CustomProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | button_add_to_cart_color | string? |  yes  | The add to cart button color |
 | button_add_to_cart_label_color | string? |  yes  | The add to cart button label color |
 | button_primary_color | string? |  yes  | The primary button color |
 | button_primary_label_color | string? |  yes  | The primary button label color |
 | button_secondary_color | string? |  yes  | The secondary button color |
 | button_secondary_label_color | string? |  yes  | The secondary button label color |
 | button_tertiary_color | string? |  yes  | The tertiary button color |
 | button_tertiary_hover_color | string? |  yes  | The tertiary button hover color |
 | button_tertiary_hover_text_color | string? |  yes  | The tertiary button hover text color |
 | button_tertiary_label_color | string? |  yes  | The tertiary button label color |
 | disable_cart | boolean? |  yes  | Whether to disable the cart or not |
 | footer_bg_color | string? |  yes  | The footer background color |
 | footer_border_color | string? |  yes  | The footer border color |
 | footer_nav_hover_color | string? |  yes  | The footer navigation hover color |
 | footer_text_color | string? |  yes  | The footer text color |
 | header_bg_color | string? |  yes  | The header background color |
 | header_border_color | string? |  yes  | The header border color |
 | header_cart_notification_bg_color | string? |  yes  | The header cart notification background color |
 | header_cart_notification_text_color | string? |  yes  | The header cart notification text color |
 | header_icon_color | string? |  yes  | The header icon color |
 | header_nav_hover_color | string? |  yes  | The header navigation hover color |
 | header_text_color | string? |  yes  | The header text color |
 | is_menu_below_logo | boolean? |  yes  | Whether the menu is below the logo or not |
 | menu_position | string? |  yes  | The position of the menu |
 | text_body_color | string? |  yes  | The text body color |
 | text_discount_color | string? |  yes  | The text discount color |
 | text_heading_link_color | string? |  yes  | The text heading link color |
 | text_price_color | string? |  yes  | The text price color |
 | text_sale_price_color | string? |  yes  | The text sale price color |
 | text_strikethrough_price_color | string? |  yes  | The text strikethrough price color |
 

---

#### [DividerStrokeHighlightSetting](#DividerStrokeHighlightSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | divider_strokes | string? |  yes  | The divider strokes color |
 | highlight | string? |  yes  | The highlight color |
 

---

#### [Documentation](#Documentation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notes | string? |  yes  | Documentation notes |
 | url | string? |  yes  | Documentation URL |
 

---

#### [ExploreInfo](#ExploreInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Explore feature description |
 | title | string? |  yes  | Explore feature title |
 

---

#### [Feature](#Feature)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  | Feature category |
 | list | [[FeatureItem](#FeatureItem)]? |  yes  |  |
 

---

#### [FeatureItem](#FeatureItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Feature description |
 | label | string? |  yes  | Feature label |
 

---

#### [Font](#Font)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  | The font family |
 | variants | [FontVariants](#FontVariants) |  no  |  |
 

---

#### [FontVariant](#FontVariant)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | file | string |  no  | The URL of the font file |
 | name | string |  no  | The name of the font variant |
 

---

#### [FontVariants](#FontVariants)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bold | [FontVariant](#FontVariant)? |  yes  |  |
 | light | [FontVariant](#FontVariant)? |  yes  |  |
 | medium | [FontVariant](#FontVariant)? |  yes  |  |
 | regular | [FontVariant](#FontVariant)? |  yes  |  |
 | semi_bold | [FontVariant](#FontVariant)? |  yes  |  |
 

---

#### [FooterSetting](#FooterSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | footer_background | string? |  yes  | The footer background color |
 | footer_body_text | string? |  yes  | The footer body text color |
 | footer_bottom_background | string? |  yes  | The footer bottom background color |
 | footer_heading_text | string? |  yes  | The footer heading text color |
 | footer_icon | string? |  yes  | The footer icon color |
 

---

#### [GeneralSetting](#GeneralSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | button | [ButtonSetting](#ButtonSetting)? |  yes  |  |
 | footer | [FooterSetting](#FooterSetting)? |  yes  |  |
 | header | [HeaderSetting](#HeaderSetting)? |  yes  |  |
 | sale_discount | [SaleDiscountSetting](#SaleDiscountSetting)? |  yes  |  |
 | text | [TextSetting](#TextSetting)? |  yes  |  |
 | theme | [ThemeSetting](#ThemeSetting)? |  yes  |  |
 

---

#### [GlobalConfig](#GlobalConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth | [AuthConfig](#AuthConfig)? |  yes  |  |
 | palette | [PaletteConfig](#PaletteConfig)? |  yes  |  |
 | statics | [StaticConfig](#StaticConfig)? |  yes  |  |
 

---

#### [GlobalSchema](#GlobalSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [[Prop](#Prop)]? |  yes  |  |
 

---

#### [HeaderSetting](#HeaderSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | header_background | string? |  yes  | The header background color |
 | header_icon | string? |  yes  | The header icon color |
 | header_nav | string? |  yes  | The header navigation color |
 

---

#### [Highlight](#Highlight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | Highlight description |
 | image | string? |  yes  | Highlight image URL |
 | title | string? |  yes  | Highlight title |
 

---

#### [ImagePickerProp](#ImagePickerProp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of the property. |
 | value | string? |  yes  | The value of the image picker property. |
 

---

#### [Images](#Images)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | string? |  yes  | The URL of the desktop image |
 | mobile | string? |  yes  | The URL of the mobile image |
 

---

#### [MarketplaceTheme](#MarketplaceTheme)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | Theme ID |
 | carousel | [[CarouselItem](#CarouselItem)]? |  yes  |  |
 | catalog_size | [CatalogSize](#CatalogSize)? |  yes  |  |
 | comments | [Comments](#Comments)? |  yes  |  |
 | contact | [ContactInfo](#ContactInfo)? |  yes  |  |
 | created_at | string? |  yes  | Theme creation timestamp |
 | description | string? |  yes  | Theme description |
 | documentation | [Documentation](#Documentation)? |  yes  |  |
 | explore | [ExploreInfo](#ExploreInfo)? |  yes  |  |
 | features | [[Feature](#Feature)]? |  yes  |  |
 | highlights | [[Highlight](#Highlight)]? |  yes  |  |
 | images | [MarketplaceThemeImages](#MarketplaceThemeImages)? |  yes  |  |
 | industry | [string]? |  yes  | Industries the theme is suitable for |
 | is_default | boolean? |  yes  | Indicates if the theme is a default theme |
 | is_update | boolean? |  yes  | Indicates if the theme is an update |
 | name | string? |  yes  | Theme name |
 | organization_id | string? |  yes  | Organization ID |
 | payment | [PaymentInfo](#PaymentInfo)? |  yes  |  |
 | release | [Release](#Release)? |  yes  |  |
 | slug | string? |  yes  | Theme slug |
 | src | string? |  yes  | Theme source URL |
 | status | string? |  yes  | Theme status |
 | step | number? |  yes  | Theme step |
 | tagline | string? |  yes  | Theme tagline |
 | template_theme_id | string? |  yes  | Template theme ID |
 | updated_at | string? |  yes  | Theme update timestamp |
 | user_id | string? |  yes  | User ID |
 | variations | [[Variation](#Variation)]? |  yes  |  |
 

---

#### [MarketplaceThemeImages](#MarketplaceThemeImages)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | string? |  yes  | Desktop theme image URL |
 | mobile | string? |  yes  | Mobile theme image URL |
 

---

#### [MarketplaceThemeSchema](#MarketplaceThemeSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [PaginationSchema](#PaginationSchema)? |  yes  |  |
 | themes | [[MarketplaceTheme](#MarketplaceTheme)]? |  yes  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string? |  yes  | The description of the theme |
 | images | [Images](#Images)? |  yes  |  |
 | industry | [string]? |  yes  | An array of industries associated with the theme |
 | name | string? |  yes  | The name of the theme |
 | payment | [ThemePayment](#ThemePayment)? |  yes  |  |
 | release | [Release](#Release)? |  yes  |  |
 | slug | string? |  yes  | The slug of the theme |
 

---

#### [OverlayPopupSetting](#OverlayPopupSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dialog_backgroung | string? |  yes  | The dialog background color |
 | overlay | string? |  yes  | The overlay color |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sections | [[Section](#Section)]? |  yes  |  |
 | value | string? |  yes  | The value of the page. |
 

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

#### [PaletteConfig](#PaletteConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | advance_setting | [AdvanceSetting](#AdvanceSetting)? |  yes  |  |
 | general_setting | [GeneralSetting](#GeneralSetting)? |  yes  |  |
 

---

#### [PaymentInfo](#PaymentInfo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | Amount of payment |
 | is_paid | boolean? |  yes  | Indicates if the theme is paid |
 

---

#### [Predicate](#Predicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | route | [Route](#Route)? |  yes  |  |
 | screen | [Screen](#Screen)? |  yes  |  |
 | user | [ThemeUserSchema](#ThemeUserSchema)? |  yes  |  |
 

---

#### [Preset](#Preset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[Page](#Page)]? |  yes  |  |
 

---

#### [Prop](#Prop)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | category | string? |  yes  | The category of the property |
 | id | string? |  yes  | The ID of the property |
 | info | string? |  yes  | Additional information about the property |
 | label | string? |  yes  | The label of the property |
 | type | string? |  yes  | The type of the property |
 

---

#### [RangeProp](#RangeProp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of the property. |
 | value | number? |  yes  | The value of the range property. |
 

---

#### [Release](#Release)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | notes | string? |  yes  | The release notes of the theme |
 | version | string? |  yes  | The version of the theme |
 

---

#### [Route](#Route)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | exact_url | string? |  yes  | The exact URL of the route. |
 | selected | string? |  yes  | The selected route. |
 

---

#### [SaleDiscountSetting](#SaleDiscountSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sale_badge_background | string? |  yes  | The sale badge background color |
 | sale_badge_text | string? |  yes  | The sale badge text color |
 | sale_discount_text | string? |  yes  | The sale discount text color |
 | sale_timer | string? |  yes  | The sale timer color |
 

---

#### [Screen](#Screen)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | boolean? |  yes  | True if the screen is a desktop device. |
 | mobile | boolean? |  yes  | True if the screen is a mobile device. |
 | tablet | boolean? |  yes  | True if the screen is a tablet device. |
 

---

#### [Section](#Section)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [[Block](#Block)]? |  yes  |  |
 | name | string? |  yes  | The name of the section. |
 | predicate | [Predicate](#Predicate)? |  yes  |  |
 | preset | [SectionPreset](#SectionPreset)? |  yes  |  |
 | props | [SectionProps](#SectionProps)? |  yes  |  |
 

---

#### [SectionItem](#SectionItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [any]? |  yes  | Blocks |
 | label | string? |  yes  | Label for the section |
 | name | string? |  yes  | Name of the section |
 | props | [any]? |  yes  |  |
 

---

#### [SectionPreset](#SectionPreset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [[Block](#Block)]? |  yes  |  |
 

---

#### [SectionProps](#SectionProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | autoplay | [CheckboxProp](#CheckboxProp)? |  yes  |  |
 | item_margin | [TextProp](#TextProp)? |  yes  |  |
 | slide_interval | [RangeProp](#RangeProp)? |  yes  |  |
 | title | [TextProp](#TextProp)? |  yes  |  |
 

---

#### [StaticConfig](#StaticConfig)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [StaticProps](#StaticProps)? |  yes  |  |
 

---

#### [StaticProps](#StaticProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | auth | [AuthConfig](#AuthConfig)? |  yes  |  |
 | colors | [Colors](#Colors)? |  yes  |  |
 

---

#### [TextProp](#TextProp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of the property. |
 | value | string? |  yes  | The value of the text property. |
 

---

#### [TextSetting](#TextSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | text_body | string? |  yes  | The text body color |
 | text_heading | string? |  yes  | The text heading color |
 | text_label | string? |  yes  | The text label color |
 | text_secondary | string? |  yes  | The secondary text color |
 

---

#### [ThemeConfiguration](#ThemeConfiguration)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | custom | [CustomConfig](#CustomConfig)? |  yes  |  |
 | global_config | [GlobalConfig](#GlobalConfig)? |  yes  |  |
 | name | string? |  yes  | The name of the configuration |
 | page | [string]? |  yes  | An array of pages |
 

---

#### [ThemePayment](#ThemePayment)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | amount | number? |  yes  | The amount of the theme |
 | is_paid | boolean? |  yes  | Whether the theme is paid or not |
 

---

#### [ThemeRejectionReasons](#ThemeRejectionReasons)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string |  no  | The ID of the theme rejection reasons object |
 | admin_id | string |  no  | The ID of the admin who rejected the theme |
 | created_at | string? |  yes  | The date and time when the theme rejection reasons object was created |
 | message | string? |  yes  | A general message about the rejection reasons |
 | organization_id | string |  no  | The ID of the organization |
 | rejection_reasons | string |  no  |  |
 | status | string |  no  | The status of the theme (e.g., rejected) |
 | theme_id | string |  no  | The ID of the rejected theme |
 | updated_at | string? |  yes  | The date and time when the theme rejection reasons object was last updated |
 | user_id | string |  no  | The ID of the user who submitted the theme |
 

---

#### [ThemeSetting](#ThemeSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page_background | string? |  yes  | The page background color |
 | theme_accent | string? |  yes  | The theme accent color |
 

---

#### [ThemesSchema](#ThemesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | string? |  yes  | The unique identifier of the theme |
 | application_id | string? |  yes  | The ID of the application |
 | applied | boolean? |  yes  | Whether the theme has been applied or not |
 | assets | [Assets](#Assets)? |  yes  |  |
 | available_sections | [[SectionItem](#SectionItem)]? |  yes  | Available sections information |
 | config | [Config](#Config)? |  yes  |  |
 | created_at | string? |  yes  | The creation timestamp of the theme |
 | font | [Font](#Font)? |  yes  |  |
 | is_private | boolean? |  yes  | Whether the theme is private or not |
 | marketplace_theme_id | string? |  yes  | The ID of the theme in the marketplace |
 | meta | [Meta](#Meta)? |  yes  |  |
 | name | string? |  yes  | The name of the theme |
 | styles | string? |  yes  | The styles associated with the theme |
 | tags | [string]? |  yes  | An array of tags associated with the theme |
 | template_theme_id | string? |  yes  | The ID of the template theme |
 | updated_at | string? |  yes  | The last update timestamp of the theme |
 | version | string? |  yes  | The version of the theme |
 

---

#### [ThemeUserSchema](#ThemeUserSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | anonymous | boolean? |  yes  | True if the user is anonymous. |
 | authenticated | boolean? |  yes  | True if the user is authenticated. |
 

---

#### [UMDJs](#UMDJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | links | [string]? |  yes  |  |
 

---

#### [UpdateThemeRequestBody](#UpdateThemeRequestBody)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | config | [Config](#Config)? |  yes  |  |
 | font | [Font](#Font)? |  yes  |  |
 

---

#### [UrlProp](#UrlProp)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string? |  yes  | The type of the property. |
 | value | string? |  yes  | The value of the URL property. |
 

---

#### [UserAlertsSetting](#UserAlertsSetting)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error_background | string? |  yes  | The error background color |
 | error_text | string? |  yes  | The error text color |
 | info_background | string? |  yes  | The info background color |
 | info_text | string? |  yes  | The info text color |
 | success_background | string? |  yes  | The success background color |
 | success_text | string? |  yes  | The success text color |
 

---

#### [Variation](#Variation)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | color | string? |  yes  | Variation color |
 | demo_url | string? |  yes  | Variation demo URL |
 | images | [MarketplaceThemeImages](#MarketplaceThemeImages)? |  yes  |  |
 | name | string? |  yes  | Variation name |
 

---




