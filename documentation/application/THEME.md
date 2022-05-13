



##### [Back to Application docs](./README.md)

## Theme Methods
Responsible for themes
* [getAllPages](#getallpages)
* [getPage](#getpage)
* [getAppliedTheme](#getappliedtheme)
* [getThemeForPreview](#getthemeforpreview)



## Methods with example and description


### getAllPages
Get all pages of a theme



```javascript
// Promise
const promise = theme.getAllPages({  themeId : value });

// Async/Await
const data = await theme.getAllPages({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |  



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


### getPage
Get page of a theme



```javascript
// Promise
const promise = theme.getPage({  themeId : value,
 pageValue : value });

// Async/Await
const data = await theme.getPage({  themeId : value,
 pageValue : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |   
| pageValue | string | yes | Value of the page to be retrieved |  



Use this API to retrieve a page of a theme.

*Returned Response:*




[AvailablePageSchema](#AvailablePageSchema)

Success. Returns an object of the pages.  Refer `AvailablePageSchema` for more details.




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


### getAppliedTheme
Get the theme currently applied to an application



```javascript
// Promise
const promise = theme.getAppliedTheme();

// Async/Await
const data = await theme.getAppliedTheme();
```






An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Returns a JSON object of the theme. Check the example shown below or    refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Applied Theme</i></summary>

```json
{
  "value": {
    "information": {
      "images": {
        "desktop": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-desktop.png"
        ],
        "android": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-mobile.png"
        ],
        "ios": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-mobile.png"
        ],
        "thumbnail": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-desktop.png"
        ]
      },
      "features": [
        "Responsive"
      ],
      "name": "Akash-Artisan"
    },
    "src": {
      "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/sources/J-1s-N-pl-archive.zip"
    },
    "assets": {
      "css": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/Ia4m885Mw2-themeBundle.css"
      },
      "umd_js": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/nEPGyc15g-themeBundle.umd.min.js"
      },
      "common_js": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/5f7tOB5rpq-themeBundle.common.js"
      }
    },
    "config": {
      "preset": {
        "sections": [
          {
            "page_sections": [
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1601219133573.jpeg"
                      },
                      "slide_link": {
                        "type": "url",
                        "value": "https://www.turtleonline.in/collection/men-collection-vcahuo2q"
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1601219184350.jpeg"
                      },
                      "slide_link": {
                        "type": "url",
                        "value": "https://www.turtleonline.in/collection/shirts-5e9654ad"
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "image-carousel",
                "props": {
                  "slide_height": {
                    "type": "select",
                    "value": "adapt"
                  },
                  "autoplay": {
                    "type": "checkbox",
                    "value": false
                  },
                  "slide_interval": {
                    "type": "range",
                    "value": 2
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "accessories-7ee89654"
                      },
                      "title": {
                        "type": "text",
                        "value": "Turtle sports club"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Casual Collections"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/casual_nfadbl.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "bottom-wear-fb133293"
                      },
                      "title": {
                        "type": "text",
                        "value": "Formal Collection"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Turtle Tailor Mark"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/tailors_nsrrfl.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "bottom-wear-fb133293"
                      },
                      "title": {
                        "type": "text",
                        "value": "Bottomwear"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Chinos | Trousers | Pants"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/bottomwear_tdkhn2.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "t-shirt-7ee3cbcd"
                      },
                      "title": {
                        "type": "text",
                        "value": "Shirts"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Casual"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/t-shirt_re9srk.jpg"
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "collectionGrid",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Collections"
                  },
                  "subtitle": {
                    "type": "text",
                    "value": "Buy from our"
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  }
                }
              }
            ],
            "page_key": "home"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "brandTemplate",
                "props": {
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "heading": {
                    "type": "text",
                    "value": ""
                  },
                  "brand_type": {
                    "type": "radio",
                    "value": "all"
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  },
                  "department": {
                    "type": "department",
                    "value": "others"
                  }
                }
              }
            ],
            "page_key": "brands"
          },
          {
            "page_sections": [],
            "page_key": "cart-landing"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "categoriesTemplate",
                "props": {
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "heading": {
                    "type": "text",
                    "value": ""
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  },
                  "view_all": {
                    "type": "checkbox",
                    "value": false
                  }
                }
              }
            ],
            "page_key": "categories"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "collectionTemplate",
                "props": {
                  "heading": {
                    "type": "text",
                    "value": "Featured Collections"
                  },
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  }
                }
              }
            ],
            "page_key": "collections"
          },
          {
            "page_sections": [],
            "page_key": "compare-products"
          },
          {
            "page_sections": [],
            "page_key": "product-description"
          },
          {
            "page_sections": [],
            "page_key": "product-listing"
          },
          {
            "page_sections": [],
            "page_key": "wishlist"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "color",
            "id": "header_bg_color",
            "default": "#ffffff",
            "category": "Header",
            "label": "Header background Color"
          },
          {
            "type": "color",
            "id": "footer_bg_color",
            "default": "#1b1b1b",
            "category": "Footer",
            "label": "Footer background Color"
          },
          {
            "type": "text",
            "id": "footer_text",
            "default": "",
            "category": "Footer",
            "label": "Footer Text"
          },
          {
            "type": "checkbox",
            "id": "disable_cart",
            "default": false,
            "category": "Cart",
            "label": "Disable Cart"
          }
        ]
      },
      "current": "default",
      "page_schema": [
        {
          "props": [],
          "_id": "5fe182f763d26d042fd205c4",
          "page": "add-product-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26dadc8d205c6",
          "page": "blog"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d0a36d205c7",
          "page": "brands"
        },
        {
          "props": [
            {
              "type": "checkbox",
              "id": "gst",
              "label": "GST",
              "default": true,
              "info": "Show GST on cart"
            },
            {
              "type": "checkbox",
              "id": "staff_selection",
              "label": "Staff Selection",
              "default": true,
              "info": "Show Staff selection on Cart"
            },
            {
              "type": "checkbox",
              "id": "enable_customer",
              "label": "Customer",
              "default": true,
              "info": "Placing on behalf of customer"
            },
            {
              "type": "checkbox",
              "id": "enable_guest",
              "label": "Enable Guest Checkout",
              "default": true,
              "info": "Enable Continue as Guest"
            }
          ],
          "_id": "5fe182f763d26d81c5d205c8",
          "page": "cart-landing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d7e15d205c9",
          "page": "cart-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d270ed205ca",
          "page": "categories"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d9b4fd205cb",
          "page": "collection-listing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26da6ecd205cc",
          "page": "collections"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d7156d205cd",
          "page": "compare-products"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d62bad205ce",
          "page": "home"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d5afcd205cf",
          "page": "order-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26def8dd205d0",
          "page": "order-tracking-details"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d381fd205d1",
          "page": "order-tracking"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "shipping_link",
              "label": "Shipping Link",
              "default": "https://fynd.freshdesk.com/support/solutions/folders/33000111600",
              "info": "Link of shipping page"
            },
            {
              "type": "checkbox",
              "id": "original_image",
              "label": "Use original Image",
              "default": false,
              "info": "Use original product image."
            },
            {
              "type": "checkbox",
              "id": "wishlist",
              "label": "Wishlist",
              "default": true,
              "info": "Show Wishlist for product"
            },
            {
              "type": "checkbox",
              "id": "reviews",
              "label": "Review",
              "default": true,
              "info": "Show Reviews of product"
            },
            {
              "type": "checkbox",
              "id": "add_to_compare",
              "label": "Add to Compare",
              "default": true,
              "info": "Allow comparison of products"
            },
            {
              "type": "checkbox",
              "id": "size_guide",
              "label": "Size Guide",
              "default": true,
              "info": "Show Size Guide"
            },
            {
              "type": "checkbox",
              "id": "product_request",
              "label": "Product Request",
              "default": true,
              "info": "Show Product Request"
            },
            {
              "type": "checkbox",
              "id": "share",
              "label": "Share",
              "default": true,
              "info": "Enable Sharing product"
            },
            {
              "type": "checkbox",
              "id": "sold_by",
              "label": "Show Sold By",
              "default": true,
              "info": "Show name of the store"
            },
            {
              "type": "checkbox",
              "id": "store_selection",
              "label": "Seller Store Selection",
              "default": true,
              "info": "Allow to explicitly select stores"
            },
            {
              "type": "checkbox",
              "id": "compare_products",
              "label": "Compare Products",
              "default": true,
              "info": "Show Most Compared Products"
            },
            {
              "type": "checkbox",
              "id": "variants",
              "label": "Product Variants",
              "default": true,
              "info": "Show Product Variants"
            },
            {
              "type": "checkbox",
              "id": "ratings",
              "label": "Product Rating",
              "default": true,
              "info": "Show Product Ratings"
            },
            {
              "type": "checkbox",
              "id": "similar_products",
              "label": "Similar Products",
              "default": true,
              "info": "Show Similar Products"
            },
            {
              "type": "checkbox",
              "id": "bulk_prices",
              "label": "Bulk Prices",
              "default": true,
              "info": "Show Bulk Prices"
            },
            {
              "type": "checkbox",
              "id": "showDeliveryInfo",
              "label": "Delivery Info",
              "default": true,
              "info": "Show Delivery Date"
            }
          ],
          "_id": "5fe182f763d26d29bbd205d2",
          "page": "product-description"
        },
        {
          "props": [],
          "_id": "5fe182f763d26da5f0d205d3",
          "page": "product-listing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d3d18d205d4",
          "page": "product-reviews"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d4e2dd205d5",
          "page": "wishlist"
        },
        {
          "props": [
            {
              "default": true,
              "id": "header",
              "label": "Header",
              "type": "checkbox"
            },
            {
              "default": true,
              "id": "footer",
              "label": "Footer",
              "type": "checkbox"
            }
          ],
          "_id": "5fe7166cbaae343115de8555",
          "page": "tesr"
        }
      ],
      "list": [
        {
          "name": "default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#7043f7",
                  "secondary_color": "#02d1cb",
                  "accent_color": "#FFFFFF",
                  "link_color": "#7043f7",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                }
              }
            },
            "custom": {
              "props": {
                "disable_cart": false
              }
            }
          },
          "page": [
            {
              "settings": {
                "props": {
                  "show_info_message": true
                }
              },
              "page": "cart-landing"
            }
          ],
          "_id": "5fc4bb9078e957737e7d79a3"
        }
      ]
    },
    "colors": {
      "primary_color": "#41434C",
      "secondary_color": "#41434C",
      "accent_color": "#FFFFFF",
      "link_color": "#33B1C0",
      "button_secondary_color": "#000000",
      "bg_color": "#F8F8F8"
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": ""
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/judson/v13/FeVRS0Fbvbc14VxRD7N01bV7kg.ttf"
        },
        "medium": {
          "name": "500",
          "file": ""
        },
        "semi_bold": {
          "name": "600",
          "file": ""
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/judson/v13/FeVSS0Fbvbc14Vxps5xQ3Z5nm29Gww.ttf"
        }
      },
      "family": "Judson"
    },
    "applied": true,
    "published": false,
    "archived": false,
    "customized": true,
    "version": "1.1.19",
    "tags": [],
    "_id": "5fe17f7063d26dc54fd202b4",
    "pages": {
      "home": {
        "path": "",
        "type": "system",
        "sections": [],
        "value": "home",
        "text": "Home"
      },
      "brands": {
        "path": "brands",
        "type": "system",
        "sections": [],
        "value": "brands",
        "text": "Brands"
      },
      "cart-landing": {
        "path": "cart/bag",
        "type": "system",
        "sections": [],
        "value": "cart-landing",
        "text": "Cart Landing"
      },
      "categories": {
        "path": "categories",
        "type": "system",
        "sections": [],
        "value": "categories",
        "text": "Categories"
      },
      "collections": {
        "path": "collections",
        "type": "system",
        "sections": [],
        "value": "collections",
        "text": "Collections"
      },
      "compare-products": {
        "path": "compare",
        "type": "system",
        "sections": [],
        "value": "compare-products",
        "text": "Compare Products"
      },
      "product-description": {
        "path": "product",
        "type": "system",
        "sections": [],
        "value": "product-description",
        "text": "Product Description"
      },
      "product-listing": {
        "path": "products",
        "type": "system",
        "sections": [],
        "value": "product-listing",
        "text": "Product Listing"
      },
      "collection-listing": {
        "path": "collection",
        "type": "system",
        "sections": [],
        "value": "collection-listing",
        "text": "COllection Listing"
      },
      "wishlist": {
        "path": "wishlist",
        "type": "system",
        "sections": [],
        "value": "wishlist",
        "text": "Wishlist"
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Brands",
            "label": "Brands Heading"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "default": "all",
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
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All"
          }
        ],
        "blocks": [
          {
            "type": "brand-item",
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
        "_id": "5feacca5bec232d59b89283a",
        "name": "brandTemplate",
        "label": "Brands List Page"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Categories",
            "label": "Categories Heading"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All",
            "info": "Check to show View All Button"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232404189283b",
        "name": "categoriesTemplate",
        "label": "Categories Page"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "default": "",
            "label": "Title"
          },
          {
            "type": "text",
            "id": "subtitle",
            "default": "",
            "label": "Subtitle"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "collection",
            "name": "Collection",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select a collection"
              },
              {
                "type": "image_picker",
                "id": "overlayImage",
                "default": "",
                "label": "Background image",
                "info": "Background Image"
              },
              {
                "type": "text",
                "id": "title",
                "default": "",
                "label": "Overlay title"
              },
              {
                "type": "text",
                "id": "subtitle",
                "default": "",
                "label": "Overlay subtitle"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2321fd589283c",
        "name": "collectionGrid",
        "label": "Collection Grid"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Collection List",
            "label": "Collection Heading",
            "info": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Collections per row",
            "default": 2,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "collection",
            "name": "Collection",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select a collection"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2323bf689283d",
        "name": "collectionList",
        "label": "Collection List"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Collections",
            "label": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Collections per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "default": "all",
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
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "Collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select collection"
              }
            ]
          }
        ],
        "_id": "5feacca5bec23263b489283e",
        "name": "collectionTemplate",
        "label": "Collection List Page"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232409489283f",
        "name": "customHtml",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Featured Products",
            "label": "Section Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": [
              {
                "type": "product",
                "id": "product",
                "label": "Select a Product",
                "info": "Product Item to be displayed"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2326213892840",
        "name": "featuredProducts",
        "label": "Featured Products",
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
        "props": [
          {
            "type": "range",
            "id": "item_count",
            "min": 1,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "default": 4,
            "info": "Maximum items allowed per row"
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
                "label": "Gallery Image",
                "default": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1603773049684.svg"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption",
                "default": ""
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "default": "",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2321047892841",
        "name": "gallery",
        "label": "Gallery",
        "preset": {
          "props": {
            "item_count": 4
          },
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
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232b085892842",
        "name": "heroBanner",
        "label": "Hero Banner"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image",
            "default": ""
          },
          {
            "type": "text",
            "id": "heading",
            "default": "",
            "label": "Heading"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "id": "overlayLayout",
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
            "default": "left",
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlayImage",
            "default": "",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "text",
            "default": "",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "default": "#000",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "ctaText",
            "default": "Shop Now",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec2321e74892843",
        "name": "imageBanner",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "id": "videoUrl",
            "type": "url",
            "label": "Video URL",
            "default": ""
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Video Cover Image URL",
            "default": ""
          },
          {
            "type": "checkbox",
            "id": "showcontrols",
            "default": false,
            "label": "Show Controls on Video",
            "info": "Check to show controls on video"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt"
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
            "default": "adapt",
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "text",
            "id": "heading",
            "default": "",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "default": "#000",
            "label": "Headin Text Color"
          },
          {
            "type": "text",
            "id": "subHeading",
            "default": "",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "subheading_color",
            "default": "#000",
            "label": "Subheading Text Color"
          },
          {
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "ctaText",
            "default": "ShopNow",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232bfc8892844",
        "name": "videoBanner",
        "label": "Hero Video"
      },
      {
        "props": [
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
            "default": "adapt",
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
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
            "default": 2,
            "info": "Autoplay slide duration"
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
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "_id": "5feacca5bec232a916892845",
        "name": "image-carousel",
        "label": "Image Carousel",
        "preset": {
          "blocks": [
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
            "id": "heading",
            "default": "Featured Collections",
            "label": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "default": 2,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec23258ec892846",
        "name": "productList",
        "label": "Product List",
        "preset": {
          "props": {
            "heading": "Featured Products",
            "item_count": 4,
            "collection": ""
          }
        }
      },
      {
        "props": [
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every",
            "default": 2
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
                "default": "",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author",
                "label": "Customers name"
              }
            ]
          }
        ],
        "_id": "5feacca5bec23299e8892847",
        "name": "testimonials",
        "label": "Testimonial"
      },
      {
        "props": [
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first video"
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
            "default": "adapt",
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
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
            "label": "Change slides every",
            "default": 2,
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [
          {
            "type": "video_item",
            "name": "Video Slide",
            "props": [
              {
                "id": "videoUrl",
                "type": "url",
                "label": "Video URL",
                "default": ""
              },
              {
                "type": "checkbox",
                "id": "showcontrols",
                "default": false,
                "label": "Show Controls on Video",
                "info": "Check to show controls on video"
              }
            ]
          }
        ],
        "_id": "5feacca5bec232d89b892848",
        "name": "videoCarousel",
        "label": "Video Carousel"
      }
    ],
    "sections": [
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "title": {
                "type": "text",
                "value": "Brands"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              },
              "heading": {
                "type": "text",
                "value": "Brands"
              },
              "brand_type": {
                "type": "radio",
                "value": "all"
              },
              "department": {
                "type": "department",
                "value": null
              },
              "layout": {
                "type": "select",
                "value": "grid"
              },
              "view_all": {
                "type": "checkbox",
                "value": null
              }
            }
          }
        ],
        "page_key": "product-description"
      },
      {
        "page_sections": [],
        "page_key": "collection-listing"
      },
      {
        "page_sections": [
          {
            "blocks": [
              {
                "type": "brand-item",
                "name": "Brand Item",
                "props": {
                  "brand": {
                    "type": "brand",
                    "value": {
                      "display": "Apple",
                      "id": "apple"
                    }
                  }
                }
              },
              {
                "type": "brand-item",
                "name": "Brand Item",
                "props": {
                  "brand": {
                    "type": "brand",
                    "value": {
                      "display": "Gionee",
                      "id": "gionee"
                    }
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "heading": {
                "type": "text",
                "value": "Brandss"
              },
              "brand_type": {
                "type": "radio",
                "value": "handpicked"
              },
              "department": {
                "type": "department"
              },
              "item_count": {
                "value": 4,
                "type": "range"
              },
              "full_width": {
                "value": false,
                "type": "checkbox"
              },
              "layout": {
                "type": "select",
                "value": "grid"
              },
              "view_all": {
                "value": false,
                "type": "checkbox"
              }
            }
          }
        ],
        "page_key": "home"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "title": {
                "type": "text",
                "value": "Brands"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "brands"
      },
      {
        "page_sections": [],
        "page_key": "cart-landing"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "categoriesTemplate",
            "props": {
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "categories"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "collectionTemplate",
            "props": {
              "heading": {
                "type": "text",
                "value": "Featured Collections"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "collections"
      },
      {
        "page_sections": [],
        "page_key": "compare-products"
      },
      {
        "page_sections": [],
        "page_key": "product-listing"
      },
      {
        "page_sections": [],
        "page_key": "wishlist"
      },
      {
        "page_sections": [],
        "page_key": "tesr"
      }
    ],
    "application": "5e737afb97e0f586bf9d04db",
    "available_pages": [
      {
        "path": "product",
        "type": "system",
        "sections": [],
        "text": "Product Description",
        "value": "product-description"
      },
      {
        "path": "collection",
        "type": "system",
        "sections": [],
        "text": "Collection Listing",
        "value": "collection-listing"
      },
      {
        "path": "",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec2327927892853",
            "attributes": {
              "page": "home"
            }
          }
        ],
        "value": "home",
        "text": "Home"
      },
      {
        "path": "brands",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec2326422892854",
            "attributes": {
              "page": "brands"
            }
          }
        ],
        "value": "brands",
        "text": "Brands"
      },
      {
        "path": "cart/bag",
        "type": "system",
        "sections": [],
        "value": "cart-landing",
        "text": "Cart Landing"
      },
      {
        "path": "categories",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec232424c892855",
            "attributes": {
              "page": "categories"
            }
          }
        ],
        "value": "categories",
        "text": "Categories"
      },
      {
        "path": "collections",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec23281de892856",
            "attributes": {
              "page": "collections"
            }
          }
        ],
        "value": "collections",
        "text": "Collections"
      },
      {
        "path": "compare",
        "type": "system",
        "sections": [],
        "value": "compare-products",
        "text": "Compare Products"
      },
      {
        "path": "products",
        "type": "system",
        "sections": [],
        "value": "product-listing",
        "text": "Product Listing"
      },
      {
        "path": "wishlist",
        "type": "system",
        "sections": [],
        "value": "wishlist",
        "text": "Wishlist"
      },
      {
        "path": "sections/test",
        "type": "sections",
        "sections": [],
        "text": "test",
        "value": "test"
      }
    ],
    "styles": {},
    "constants": {},
    "settings": {},
    "created_at": "2020-12-22T05:09:04.720Z",
    "updated_at": "2021-01-24T11:22:41.376Z"
  }
}
```
</details>

</details>









---


### getThemeForPreview
Get a theme for a preview



```javascript
// Promise
const promise = theme.getThemeForPreview({  themeId : value });

// Async/Await
const data = await theme.getThemeForPreview({  themeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| themeId | string | yes | ID of the theme to be retrieved |  



A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.

*Returned Response:*




[ThemesSchema](#ThemesSchema)

Success. Returns a JSON object of the theme. Check the example shown below or refer `ThemesSchema` for more details.




<details>
<summary><i>&nbsp; Examples:</i></summary>


<details>
<summary><i>&nbsp; Preview Theme</i></summary>

```json
{
  "value": {
    "information": {
      "images": {
        "desktop": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-desktop.png"
        ],
        "android": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-mobile.png"
        ],
        "ios": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-mobile.png"
        ],
        "thumbnail": [
          "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/artisan-desktop.png"
        ]
      },
      "features": [
        "Responsive"
      ],
      "name": "Akash-Artisan"
    },
    "src": {
      "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/sources/J-1s-N-pl-archive.zip"
    },
    "assets": {
      "css": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/Ia4m885Mw2-themeBundle.css"
      },
      "umd_js": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/nEPGyc15g-themeBundle.umd.min.js"
      },
      "common_js": {
        "link": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/assets/5f7tOB5rpq-themeBundle.common.js"
      }
    },
    "config": {
      "preset": {
        "sections": [
          {
            "page_sections": [
              {
                "blocks": [
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1601219133573.jpeg"
                      },
                      "slide_link": {
                        "type": "url",
                        "value": "https://www.turtleonline.in/collection/men-collection-vcahuo2q"
                      }
                    }
                  },
                  {
                    "type": "gallery_image",
                    "name": "Image",
                    "props": {
                      "image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1601219184350.jpeg"
                      },
                      "slide_link": {
                        "type": "url",
                        "value": "https://www.turtleonline.in/collection/shirts-5e9654ad"
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "image-carousel",
                "props": {
                  "slide_height": {
                    "type": "select",
                    "value": "adapt"
                  },
                  "autoplay": {
                    "type": "checkbox",
                    "value": false
                  },
                  "slide_interval": {
                    "type": "range",
                    "value": 2
                  }
                }
              },
              {
                "blocks": [
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "accessories-7ee89654"
                      },
                      "title": {
                        "type": "text",
                        "value": "Turtle sports club"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Casual Collections"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/casual_nfadbl.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "bottom-wear-fb133293"
                      },
                      "title": {
                        "type": "text",
                        "value": "Formal Collection"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Turtle Tailor Mark"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/tailors_nsrrfl.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "bottom-wear-fb133293"
                      },
                      "title": {
                        "type": "text",
                        "value": "Bottomwear"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Chinos | Trousers | Pants"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/bottomwear_tdkhn2.jpg"
                      }
                    }
                  },
                  {
                    "type": "collection",
                    "name": "Collection",
                    "props": {
                      "collection": {
                        "type": "collection",
                        "value": "t-shirt-7ee3cbcd"
                      },
                      "title": {
                        "type": "text",
                        "value": "Shirts"
                      },
                      "subtitle": {
                        "type": "text",
                        "value": "Casual"
                      },
                      "overlay_image": {
                        "type": "image_picker",
                        "value": "https://hdn-1.addsale.com/x0/company/1/applications/5e737afb97e0f586bf9d04db/theme/pictures/free/original/t-shirt_re9srk.jpg"
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "collectionGrid",
                "props": {
                  "title": {
                    "type": "text",
                    "value": "Collections"
                  },
                  "subtitle": {
                    "type": "text",
                    "value": "Buy from our"
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  }
                }
              }
            ],
            "page_key": "home"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "brandTemplate",
                "props": {
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "heading": {
                    "type": "text",
                    "value": ""
                  },
                  "brand_type": {
                    "type": "radio",
                    "value": "all"
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  },
                  "department": {
                    "type": "department",
                    "value": "others"
                  }
                }
              }
            ],
            "page_key": "brands"
          },
          {
            "page_sections": [],
            "page_key": "cart-landing"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "categoriesTemplate",
                "props": {
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "heading": {
                    "type": "text",
                    "value": ""
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  },
                  "view_all": {
                    "type": "checkbox",
                    "value": false
                  }
                }
              }
            ],
            "page_key": "categories"
          },
          {
            "page_sections": [
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
                    "query": {},
                    "exact_u_r_l": ""
                  }
                },
                "name": "collectionTemplate",
                "props": {
                  "heading": {
                    "type": "text",
                    "value": "Featured Collections"
                  },
                  "item_count": {
                    "type": "range",
                    "value": 4
                  },
                  "full_width": {
                    "type": "checkbox",
                    "value": false
                  },
                  "layout": {
                    "type": "select",
                    "value": "grid"
                  }
                }
              }
            ],
            "page_key": "collections"
          },
          {
            "page_sections": [],
            "page_key": "compare-products"
          },
          {
            "page_sections": [],
            "page_key": "product-description"
          },
          {
            "page_sections": [],
            "page_key": "product-listing"
          },
          {
            "page_sections": [],
            "page_key": "wishlist"
          }
        ]
      },
      "global_schema": {
        "props": [
          {
            "type": "color",
            "id": "header_bg_color",
            "default": "#ffffff",
            "category": "Header",
            "label": "Header background Color"
          },
          {
            "type": "color",
            "id": "footer_bg_color",
            "default": "#1b1b1b",
            "category": "Footer",
            "label": "Footer background Color"
          },
          {
            "type": "text",
            "id": "footer_text",
            "default": "",
            "category": "Footer",
            "label": "Footer Text"
          },
          {
            "type": "checkbox",
            "id": "disable_cart",
            "default": false,
            "category": "Cart",
            "label": "Disable Cart"
          }
        ]
      },
      "current": "default",
      "page_schema": [
        {
          "props": [],
          "_id": "5fe182f763d26d042fd205c4",
          "page": "add-product-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26dadc8d205c6",
          "page": "blog"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d0a36d205c7",
          "page": "brands"
        },
        {
          "props": [
            {
              "type": "checkbox",
              "id": "gst",
              "label": "GST",
              "default": true,
              "info": "Show GST on cart"
            },
            {
              "type": "checkbox",
              "id": "staff_selection",
              "label": "Staff Selection",
              "default": true,
              "info": "Show Staff selection on Cart"
            },
            {
              "type": "checkbox",
              "id": "enable_customer",
              "label": "Customer",
              "default": true,
              "info": "Placing on behalf of customer"
            },
            {
              "type": "checkbox",
              "id": "enable_guest",
              "label": "Enable Guest Checkout",
              "default": true,
              "info": "Enable Continue as Guest"
            }
          ],
          "_id": "5fe182f763d26d81c5d205c8",
          "page": "cart-landing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d7e15d205c9",
          "page": "cart-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d270ed205ca",
          "page": "categories"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d9b4fd205cb",
          "page": "collection-listing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26da6ecd205cc",
          "page": "collections"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d7156d205cd",
          "page": "compare-products"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d62bad205ce",
          "page": "home"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d5afcd205cf",
          "page": "order-review"
        },
        {
          "props": [],
          "_id": "5fe182f763d26def8dd205d0",
          "page": "order-tracking-details"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d381fd205d1",
          "page": "order-tracking"
        },
        {
          "props": [
            {
              "type": "text",
              "id": "shipping_link",
              "label": "Shipping Link",
              "default": "https://fynd.freshdesk.com/support/solutions/folders/33000111600",
              "info": "Link of shipping page"
            },
            {
              "type": "checkbox",
              "id": "original_image",
              "label": "Use original Image",
              "default": false,
              "info": "Use original product image."
            },
            {
              "type": "checkbox",
              "id": "wishlist",
              "label": "Wishlist",
              "default": true,
              "info": "Show Wishlist for product"
            },
            {
              "type": "checkbox",
              "id": "reviews",
              "label": "Review",
              "default": true,
              "info": "Show Reviews of product"
            },
            {
              "type": "checkbox",
              "id": "add_to_compare",
              "label": "Add to Compare",
              "default": true,
              "info": "Allow comparison of products"
            },
            {
              "type": "checkbox",
              "id": "size_guide",
              "label": "Size Guide",
              "default": true,
              "info": "Show Size Guide"
            },
            {
              "type": "checkbox",
              "id": "product_request",
              "label": "Product Request",
              "default": true,
              "info": "Show Product Request"
            },
            {
              "type": "checkbox",
              "id": "share",
              "label": "Share",
              "default": true,
              "info": "Enable Sharing product"
            },
            {
              "type": "checkbox",
              "id": "sold_by",
              "label": "Show Sold By",
              "default": true,
              "info": "Show name of the store"
            },
            {
              "type": "checkbox",
              "id": "store_selection",
              "label": "Seller Store Selection",
              "default": true,
              "info": "Allow to explicitly select stores"
            },
            {
              "type": "checkbox",
              "id": "compare_products",
              "label": "Compare Products",
              "default": true,
              "info": "Show Most Compared Products"
            },
            {
              "type": "checkbox",
              "id": "variants",
              "label": "Product Variants",
              "default": true,
              "info": "Show Product Variants"
            },
            {
              "type": "checkbox",
              "id": "ratings",
              "label": "Product Rating",
              "default": true,
              "info": "Show Product Ratings"
            },
            {
              "type": "checkbox",
              "id": "similar_products",
              "label": "Similar Products",
              "default": true,
              "info": "Show Similar Products"
            },
            {
              "type": "checkbox",
              "id": "bulk_prices",
              "label": "Bulk Prices",
              "default": true,
              "info": "Show Bulk Prices"
            },
            {
              "type": "checkbox",
              "id": "showDeliveryInfo",
              "label": "Delivery Info",
              "default": true,
              "info": "Show Delivery Date"
            }
          ],
          "_id": "5fe182f763d26d29bbd205d2",
          "page": "product-description"
        },
        {
          "props": [],
          "_id": "5fe182f763d26da5f0d205d3",
          "page": "product-listing"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d3d18d205d4",
          "page": "product-reviews"
        },
        {
          "props": [],
          "_id": "5fe182f763d26d4e2dd205d5",
          "page": "wishlist"
        },
        {
          "props": [
            {
              "default": true,
              "id": "header",
              "label": "Header",
              "type": "checkbox"
            },
            {
              "default": true,
              "id": "footer",
              "label": "Footer",
              "type": "checkbox"
            }
          ],
          "_id": "5fe7166cbaae343115de8555",
          "page": "tesr"
        }
      ],
      "list": [
        {
          "name": "default",
          "global_config": {
            "static": {
              "props": {
                "colors": {
                  "primary_color": "#7043f7",
                  "secondary_color": "#02d1cb",
                  "accent_color": "#FFFFFF",
                  "link_color": "#7043f7",
                  "button_secondary_color": "#000000",
                  "bg_color": "#F8F8F8"
                }
              }
            },
            "custom": {
              "props": {
                "disable_cart": false
              }
            }
          },
          "page": [
            {
              "settings": {
                "props": {
                  "show_info_message": true
                }
              },
              "page": "cart-landing"
            }
          ],
          "_id": "5fc4bb9078e957737e7d79a3"
        }
      ]
    },
    "colors": {
      "primary_color": "#41434C",
      "secondary_color": "#41434C",
      "accent_color": "#FFFFFF",
      "link_color": "#33B1C0",
      "button_secondary_color": "#000000",
      "bg_color": "#F8F8F8"
    },
    "font": {
      "variants": {
        "light": {
          "name": "300",
          "file": ""
        },
        "regular": {
          "name": "regular",
          "file": "https://fonts.gstatic.com/s/judson/v13/FeVRS0Fbvbc14VxRD7N01bV7kg.ttf"
        },
        "medium": {
          "name": "500",
          "file": ""
        },
        "semi_bold": {
          "name": "600",
          "file": ""
        },
        "bold": {
          "name": "700",
          "file": "https://fonts.gstatic.com/s/judson/v13/FeVSS0Fbvbc14Vxps5xQ3Z5nm29Gww.ttf"
        }
      },
      "family": "Judson"
    },
    "applied": true,
    "published": false,
    "archived": false,
    "customized": true,
    "version": "1.1.19",
    "tags": [],
    "_id": "5fe17f7063d26dc54fd202b4",
    "pages": {
      "home": {
        "path": "",
        "type": "system",
        "sections": [],
        "value": "home",
        "text": "Home"
      },
      "brands": {
        "path": "brands",
        "type": "system",
        "sections": [],
        "value": "brands",
        "text": "Brands"
      },
      "cart-landing": {
        "path": "cart/bag",
        "type": "system",
        "sections": [],
        "value": "cart-landing",
        "text": "Cart Landing"
      },
      "categories": {
        "path": "categories",
        "type": "system",
        "sections": [],
        "value": "categories",
        "text": "Categories"
      },
      "collections": {
        "path": "collections",
        "type": "system",
        "sections": [],
        "value": "collections",
        "text": "Collections"
      },
      "compare-products": {
        "path": "compare",
        "type": "system",
        "sections": [],
        "value": "compare-products",
        "text": "Compare Products"
      },
      "product-description": {
        "path": "product",
        "type": "system",
        "sections": [],
        "value": "product-description",
        "text": "Product Description"
      },
      "product-listing": {
        "path": "products",
        "type": "system",
        "sections": [],
        "value": "product-listing",
        "text": "Product Listing"
      },
      "collection-listing": {
        "path": "collection",
        "type": "system",
        "sections": [],
        "value": "collection-listing",
        "text": "COllection Listing"
      },
      "wishlist": {
        "path": "wishlist",
        "type": "system",
        "sections": [],
        "value": "wishlist",
        "text": "Wishlist"
      }
    },
    "available_sections": [
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Brands",
            "label": "Brands Heading"
          },
          {
            "type": "radio",
            "id": "brand_type",
            "default": "all",
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
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All"
          }
        ],
        "blocks": [
          {
            "type": "brand-item",
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
        "_id": "5feacca5bec232d59b89283a",
        "name": "brandTemplate",
        "label": "Brands List Page"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Categories",
            "label": "Categories Heading"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Items per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All",
            "info": "Check to show View All Button"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232404189283b",
        "name": "categoriesTemplate",
        "label": "Categories Page"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "title",
            "default": "",
            "label": "Title"
          },
          {
            "type": "text",
            "id": "subtitle",
            "default": "",
            "label": "Subtitle"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "collection",
            "name": "Collection",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select a collection"
              },
              {
                "type": "image_picker",
                "id": "overlayImage",
                "default": "",
                "label": "Background image",
                "info": "Background Image"
              },
              {
                "type": "text",
                "id": "title",
                "default": "",
                "label": "Overlay title"
              },
              {
                "type": "text",
                "id": "subtitle",
                "default": "",
                "label": "Overlay subtitle"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2321fd589283c",
        "name": "collectionGrid",
        "label": "Collection Grid"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Collection List",
            "label": "Collection Heading",
            "info": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Collections per row",
            "default": 2,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "collection",
            "name": "Collection",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select a collection"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2323bf689283d",
        "name": "collectionList",
        "label": "Collection List"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Collections",
            "label": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Collections per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "radio",
            "id": "collection_type",
            "default": "all",
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
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
            "default": "grid",
            "label": "Layout",
            "info": "Alignment of content"
          },
          {
            "type": "checkbox",
            "id": "view_all",
            "default": false,
            "label": "Show View All"
          }
        ],
        "blocks": [
          {
            "type": "collection-item",
            "name": "Collection Item",
            "props": [
              {
                "type": "collection",
                "id": "collection",
                "label": "Select collection"
              }
            ]
          }
        ],
        "_id": "5feacca5bec23263b489283e",
        "name": "collectionTemplate",
        "label": "Collection List Page"
      },
      {
        "props": [
          {
            "type": "code",
            "id": "code",
            "label": "Custom HTML",
            "info": "Add Your custom HTML Code below. You can also use the full screen icon to open a code editor and add your code"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232409489283f",
        "name": "customHtml",
        "label": "Custom HTML"
      },
      {
        "props": [
          {
            "type": "text",
            "id": "heading",
            "default": "Featured Products",
            "label": "Section Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 3,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "default": 4,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [
          {
            "type": "product",
            "name": "Product",
            "props": [
              {
                "type": "product",
                "id": "product",
                "label": "Select a Product",
                "info": "Product Item to be displayed"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2326213892840",
        "name": "featuredProducts",
        "label": "Featured Products",
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
        "props": [
          {
            "type": "range",
            "id": "item_count",
            "min": 1,
            "max": 4,
            "step": 1,
            "unit": "",
            "label": "No of items",
            "default": 4,
            "info": "Maximum items allowed per row"
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
                "label": "Gallery Image",
                "default": "https://hdn-1.fynd.com/company/163/applications/5d5265c8f8ad9cae6dbf18f1/theme/pictures/free/original/theme-image-1603773049684.svg"
              },
              {
                "type": "text",
                "id": "caption",
                "label": "Image Caption",
                "default": ""
              },
              {
                "type": "url",
                "id": "link",
                "label": "Link",
                "default": "",
                "info": "Link to redirect"
              }
            ]
          }
        ],
        "_id": "5feacca5bec2321047892841",
        "name": "gallery",
        "label": "Gallery",
        "preset": {
          "props": {
            "item_count": 4
          },
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
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232b085892842",
        "name": "heroBanner",
        "label": "Hero Banner"
      },
      {
        "props": [
          {
            "id": "image",
            "type": "image_picker",
            "label": "Hero Image",
            "default": ""
          },
          {
            "type": "text",
            "id": "heading",
            "default": "",
            "label": "Heading"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "id": "overlayLayout",
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
            "default": "left",
            "label": "Overlay Layout",
            "info": "Alignment of overlay content"
          },
          {
            "type": "image_picker",
            "id": "overlayImage",
            "default": "",
            "label": "Overlay image",
            "info": "Overlay Image"
          },
          {
            "type": "text",
            "id": "text",
            "default": "",
            "label": "Overlay Text"
          },
          {
            "type": "color",
            "id": "text_color",
            "default": "#000",
            "label": "Text Color"
          },
          {
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "ctaText",
            "default": "Shop Now",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec2321e74892843",
        "name": "imageBanner",
        "label": "Hero Image"
      },
      {
        "props": [
          {
            "id": "videoUrl",
            "type": "url",
            "label": "Video URL",
            "default": ""
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "id": "coverUrl",
            "type": "image_picker",
            "label": "Video Cover Image URL",
            "default": ""
          },
          {
            "type": "checkbox",
            "id": "showcontrols",
            "default": false,
            "label": "Show Controls on Video",
            "info": "Check to show controls on video"
          },
          {
            "type": "select",
            "id": "size",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt"
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
            "default": "adapt",
            "label": "Video Height",
            "info": "Height of Video"
          },
          {
            "type": "text",
            "id": "heading",
            "default": "",
            "label": "Heading"
          },
          {
            "type": "color",
            "id": "heading_color",
            "default": "#000",
            "label": "Headin Text Color"
          },
          {
            "type": "text",
            "id": "subHeading",
            "default": "",
            "label": "Sub-heading"
          },
          {
            "type": "color",
            "id": "subheading_color",
            "default": "#000",
            "label": "Subheading Text Color"
          },
          {
            "type": "url",
            "id": "ctaLink",
            "default": "",
            "label": "Redirect Link"
          },
          {
            "type": "text",
            "id": "ctaText",
            "default": "ShopNow",
            "label": "Button Text"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec232bfc8892844",
        "name": "videoBanner",
        "label": "Hero Video"
      },
      {
        "props": [
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
            "default": "adapt",
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
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
            "default": 2,
            "info": "Autoplay slide duration"
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
                "type": "url",
                "id": "slide_link",
                "label": "Slide Link"
              }
            ]
          }
        ],
        "_id": "5feacca5bec232a916892845",
        "name": "image-carousel",
        "label": "Image Carousel",
        "preset": {
          "blocks": [
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
            "id": "heading",
            "default": "Featured Collections",
            "label": "Collection Heading"
          },
          {
            "type": "range",
            "id": "item_count",
            "min": 2,
            "max": 5,
            "step": 1,
            "unit": "",
            "label": "Products per row",
            "default": 2,
            "info": "Maximum items allowed per row"
          },
          {
            "type": "collection",
            "id": "collection",
            "label": "Collection",
            "info": "Select a collection to display its products"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          }
        ],
        "blocks": [],
        "_id": "5feacca5bec23258ec892846",
        "name": "productList",
        "label": "Product List",
        "preset": {
          "props": {
            "heading": "Featured Products",
            "item_count": 4,
            "collection": ""
          }
        }
      },
      {
        "props": [
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
            "label": "AutoPlay Slides"
          },
          {
            "type": "range",
            "id": "slide_interval",
            "min": 1,
            "max": 10,
            "step": 1,
            "unit": "sec",
            "label": "Change slides every",
            "default": 2
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
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
                "default": "",
                "info": "Text for testimonial",
                "placeholder": "Text"
              },
              {
                "type": "text",
                "id": "author",
                "label": "Customers name"
              }
            ]
          }
        ],
        "_id": "5feacca5bec23299e8892847",
        "name": "testimonials",
        "label": "Testimonial"
      },
      {
        "props": [
          {
            "type": "select",
            "id": "slide_height",
            "options": [
              {
                "value": "adapt",
                "text": "Adapt to first video"
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
            "default": "adapt",
            "label": "Slide height",
            "info": "Size of the slide"
          },
          {
            "type": "checkbox",
            "id": "full_width",
            "default": false,
            "label": "Full width",
            "info": "Check to allow items to take entire width of the viewport"
          },
          {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
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
            "label": "Change slides every",
            "default": 2,
            "info": "Autoplay slide duration"
          }
        ],
        "blocks": [
          {
            "type": "video_item",
            "name": "Video Slide",
            "props": [
              {
                "id": "videoUrl",
                "type": "url",
                "label": "Video URL",
                "default": ""
              },
              {
                "type": "checkbox",
                "id": "showcontrols",
                "default": false,
                "label": "Show Controls on Video",
                "info": "Check to show controls on video"
              }
            ]
          }
        ],
        "_id": "5feacca5bec232d89b892848",
        "name": "videoCarousel",
        "label": "Video Carousel"
      }
    ],
    "sections": [
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "title": {
                "type": "text",
                "value": "Brands"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              },
              "heading": {
                "type": "text",
                "value": "Brands"
              },
              "brand_type": {
                "type": "radio",
                "value": "all"
              },
              "department": {
                "type": "department",
                "value": null
              },
              "layout": {
                "type": "select",
                "value": "grid"
              },
              "view_all": {
                "type": "checkbox",
                "value": null
              }
            }
          }
        ],
        "page_key": "product-description"
      },
      {
        "page_sections": [],
        "page_key": "collection-listing"
      },
      {
        "page_sections": [
          {
            "blocks": [
              {
                "type": "brand-item",
                "name": "Brand Item",
                "props": {
                  "brand": {
                    "type": "brand",
                    "value": {
                      "display": "Apple",
                      "id": "apple"
                    }
                  }
                }
              },
              {
                "type": "brand-item",
                "name": "Brand Item",
                "props": {
                  "brand": {
                    "type": "brand",
                    "value": {
                      "display": "Gionee",
                      "id": "gionee"
                    }
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "heading": {
                "type": "text",
                "value": "Brandss"
              },
              "brand_type": {
                "type": "radio",
                "value": "handpicked"
              },
              "department": {
                "type": "department"
              },
              "item_count": {
                "value": 4,
                "type": "range"
              },
              "full_width": {
                "value": false,
                "type": "checkbox"
              },
              "layout": {
                "type": "select",
                "value": "grid"
              },
              "view_all": {
                "value": false,
                "type": "checkbox"
              }
            }
          }
        ],
        "page_key": "home"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "brandTemplate",
            "props": {
              "title": {
                "type": "text",
                "value": "Brands"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "brands"
      },
      {
        "page_sections": [],
        "page_key": "cart-landing"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "categoriesTemplate",
            "props": {
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "categories"
      },
      {
        "page_sections": [
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
                "query": {},
                "exact_u_r_l": ""
              }
            },
            "name": "collectionTemplate",
            "props": {
              "heading": {
                "type": "text",
                "value": "Featured Collections"
              },
              "item_count": {
                "type": "range",
                "value": 4
              },
              "full_width": {
                "type": "checkbox",
                "value": false
              }
            }
          }
        ],
        "page_key": "collections"
      },
      {
        "page_sections": [],
        "page_key": "compare-products"
      },
      {
        "page_sections": [],
        "page_key": "product-listing"
      },
      {
        "page_sections": [],
        "page_key": "wishlist"
      },
      {
        "page_sections": [],
        "page_key": "tesr"
      }
    ],
    "application": "5e737afb97e0f586bf9d04db",
    "available_pages": [
      {
        "path": "product",
        "type": "system",
        "sections": [],
        "text": "Product Description",
        "value": "product-description"
      },
      {
        "path": "collection",
        "type": "system",
        "sections": [],
        "text": "Collection Listing",
        "value": "collection-listing"
      },
      {
        "path": "",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec2327927892853",
            "attributes": {
              "page": "home"
            }
          }
        ],
        "value": "home",
        "text": "Home"
      },
      {
        "path": "brands",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec2326422892854",
            "attributes": {
              "page": "brands"
            }
          }
        ],
        "value": "brands",
        "text": "Brands"
      },
      {
        "path": "cart/bag",
        "type": "system",
        "sections": [],
        "value": "cart-landing",
        "text": "Cart Landing"
      },
      {
        "path": "categories",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec232424c892855",
            "attributes": {
              "page": "categories"
            }
          }
        ],
        "value": "categories",
        "text": "Categories"
      },
      {
        "path": "collections",
        "type": "system",
        "sections": [
          {
            "_id": "5feacca5bec23281de892856",
            "attributes": {
              "page": "collections"
            }
          }
        ],
        "value": "collections",
        "text": "Collections"
      },
      {
        "path": "compare",
        "type": "system",
        "sections": [],
        "value": "compare-products",
        "text": "Compare Products"
      },
      {
        "path": "products",
        "type": "system",
        "sections": [],
        "value": "product-listing",
        "text": "Product Listing"
      },
      {
        "path": "wishlist",
        "type": "system",
        "sections": [],
        "value": "wishlist",
        "text": "Wishlist"
      },
      {
        "path": "sections/test",
        "type": "sections",
        "sections": [],
        "text": "test",
        "value": "test"
      }
    ],
    "styles": {},
    "constants": {},
    "settings": {},
    "created_at": "2020-12-22T05:09:04.720Z",
    "updated_at": "2021-01-24T11:22:41.376Z"
  }
}
```
</details>

</details>









---



### Schemas

 
 
 #### [AvailablePageSchema](#AvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | value | string |  no  |  |
 | text | string |  no  |  |
 | path | string |  no  |  |
 | type | string |  no  |  |
 | sections | [[AvailablePageSchemaSections](#AvailablePageSchemaSections)] |  no  |  |
 | sections_meta | [[AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)] |  no  |  |
 | theme | string |  no  |  |
 | seo | [AvailablePageSeo](#AvailablePageSeo) |  no  |  |
 | props | [string] |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSectionMetaAttributes](#AvailablePageSectionMetaAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [AvailablePageSeo](#AvailablePageSeo)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | title | string |  no  |  |
 | description | string |  no  |  |
 | _id | string |  no  |  |

---


 
 
 #### [AvailablePageSchemaSections](#AvailablePageSchemaSections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | string |  no  |  |
 | blocks | [string] |  no  |  |
 | preset | string |  no  |  |
 | predicate | [AvailablePagePredicate](#AvailablePagePredicate) |  no  |  |

---


 
 
 #### [AvailablePageScreenPredicate](#AvailablePageScreenPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | mobile | boolean |  no  |  |
 | desktop | boolean |  no  |  |
 | tablet | boolean |  no  |  |

---


 
 
 #### [AvailablePageUserPredicate](#AvailablePageUserPredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | authenticated | boolean |  no  |  |
 | anonymous | boolean |  no  |  |

---


 
 
 #### [AvailablePageRoutePredicate](#AvailablePageRoutePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | selected | string |  no  |  |
 | exact_url | string |  no  |  |
 | query | string |  no  |  |

---


 
 
 #### [AvailablePagePredicate](#AvailablePagePredicate)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | screen | [AvailablePageScreenPredicate](#AvailablePageScreenPredicate) |  no  |  |
 | user | [AvailablePageUserPredicate](#AvailablePageUserPredicate) |  no  |  |
 | route | [AvailablePageRoutePredicate](#AvailablePageRoutePredicate) |  no  |  |

---


 
 
 #### [AllAvailablePageSchema](#AllAvailablePageSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [PaginationSchema](#PaginationSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | size | number |  no  |  |
 | item_total | number |  no  |  |
 | has_next | boolean |  no  |  |
 | type | string |  no  |  |
 | current | number |  no  |  |

---


 
 
 #### [ThemesListingResponseSchema](#ThemesListingResponseSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ThemesSchema](#ThemesSchema)] |  no  |  |
 | page | [PaginationSchema](#PaginationSchema) |  no  |  |

---


 
 
 #### [AddThemeRequestSchema](#AddThemeRequestSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | theme_id | string |  no  |  |

---


 
 
 #### [UpgradableThemeSchema](#UpgradableThemeSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | parent_theme | string |  no  |  |
 | applied_theme | string |  no  |  |
 | upgrade | boolean |  no  |  |

---


 
 
 #### [FontsSchema](#FontsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [FontsSchemaItems](#FontsSchemaItems) |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [BlitzkriegApiErrorSchema](#BlitzkriegApiErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegNotFoundSchema](#BlitzkriegNotFoundSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [BlitzkriegInternalServerErrorSchema](#BlitzkriegInternalServerErrorSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | message | string |  no  |  |

---


 
 
 #### [FontsSchemaItems](#FontsSchemaItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [string] |  no  |  |
 | subsets | [string] |  no  |  |
 | version | string |  no  |  |
 | last_modified | string |  no  |  |
 | files | [FontsSchemaItemsFiles](#FontsSchemaItemsFiles) |  no  |  |
 | category | string |  no  |  |
 | kind | string |  no  |  |

---


 
 
 #### [FontsSchemaItemsFiles](#FontsSchemaItemsFiles)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | regular | string |  no  |  |
 | italic | string |  no  |  |
 | bold | string |  no  |  |

---


 
 
 #### [ThemesSchema](#ThemesSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | application | string |  no  |  |
 | applied | boolean |  no  |  |
 | customized | boolean |  no  |  |
 | published | boolean |  no  |  |
 | archived | boolean |  no  |  |
 | created_at | string |  no  |  |
 | updated_at | string |  no  |  |
 | version | string |  no  |  |
 | parent_theme_version | string |  no  |  |
 | parent_theme | string |  no  |  |
 | information | [Information](#Information) |  no  |  |
 | tags | [string] |  no  |  |
 | src | [Src](#Src) |  no  |  |
 | assets | [AssetsSchema](#AssetsSchema) |  no  |  |
 | available_sections | [[availableSectionSchema](#availableSectionSchema)] |  no  |  |
 | constants | string |  no  |  |
 | styles | string |  no  |  |
 | config | [Config](#Config) |  no  |  |
 | settings | string |  no  |  |
 | font | [Font](#Font) |  no  |  |
 | _id | string |  no  |  |
 | __v | number |  no  |  |
 | colors | [Colors](#Colors) |  no  |  |

---


 
 
 #### [availableSectionSchema](#availableSectionSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | blocks | [[Blocks](#Blocks)] |  no  |  |
 | name | string |  no  |  |
 | label | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [Information](#Information)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | images | [Images](#Images) |  no  |  |
 | features | [string] |  no  |  |
 | name | string |  no  |  |
 | description | string |  no  |  |

---


 
 
 #### [Images](#Images)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | desktop | [string] |  no  |  |
 | android | [string] |  no  |  |
 | ios | [string] |  no  |  |
 | thumbnail | [string] |  no  |  |

---


 
 
 #### [Src](#Src)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [AssetsSchema](#AssetsSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | umd_js | [UmdJs](#UmdJs) |  no  |  |
 | common_js | [CommonJs](#CommonJs) |  no  |  |
 | css | [Css](#Css) |  no  |  |

---


 
 
 #### [UmdJs](#UmdJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [CommonJs](#CommonJs)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Css](#Css)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | link | string |  no  |  |

---


 
 
 #### [Sections](#Sections)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |

---


 
 
 #### [Config](#Config)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | preset | [Preset](#Preset) |  no  |  |
 | global_schema | [GlobalSchema](#GlobalSchema) |  no  |  |
 | current | string |  no  |  |
 | list | [[ListSchemaItem](#ListSchemaItem)] |  no  |  |

---


 
 
 #### [Preset](#Preset)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pages | [[AvailablePageSchema](#AvailablePageSchema)] |  no  |  |

---


 
 
 #### [GlobalSchema](#GlobalSchema)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | [[GlobalSchemaProps](#GlobalSchemaProps)] |  no  |  |

---


 
 
 #### [ListSchemaItem](#ListSchemaItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | global_config | string |  no  |  |
 | page | [[ConfigPage](#ConfigPage)] |  no  |  |
 | name | string |  no  |  |

---


 
 
 #### [Colors](#Colors)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | bg_color | string |  no  |  |
 | primary_color | string |  no  |  |
 | secondary_color | string |  no  |  |
 | accent_color | string |  no  |  |
 | link_color | string |  no  |  |
 | button_secondary_color | string |  no  |  |

---


 
 
 #### [Custom](#Custom)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | props | string |  no  |  |

---


 
 
 #### [ConfigPage](#ConfigPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | settings | string |  no  |  |
 | page | string |  no  |  |

---


 
 
 #### [Font](#Font)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | family | string |  no  |  |
 | variants | [Variants](#Variants) |  no  |  |

---


 
 
 #### [Variants](#Variants)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | medium | [Medium](#Medium) |  no  |  |
 | semi_bold | [SemiBold](#SemiBold) |  no  |  |
 | bold | [Bold](#Bold) |  no  |  |
 | light | [Light](#Light) |  no  |  |
 | regular | [Regular](#Regular) |  no  |  |

---


 
 
 #### [Medium](#Medium)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [SemiBold](#SemiBold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Bold](#Bold)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Light](#Light)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Regular](#Regular)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | name | string |  no  |  |
 | file | string |  no  |  |

---


 
 
 #### [Blocks](#Blocks)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | type | string |  no  |  |
 | name | string |  no  |  |
 | props | [[BlocksProps](#BlocksProps)] |  no  |  |

---


 
 
 #### [GlobalSchemaProps](#GlobalSchemaProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |
 | category | string |  no  |  |

---


 
 
 #### [BlocksProps](#BlocksProps)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  no  |  |
 | label | string |  no  |  |
 | type | string |  no  |  |

---




