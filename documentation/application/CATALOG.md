




##### [Back to Application docs](./README.md)

## Catalog Methods
Catalog API's allows you to access list of products, prices, seller details, similar features, variants and many more useful features. 

* [followById](#followbyid)
* [getBrandDetailBySlug](#getbranddetailbyslug)
* [getBrands](#getbrands)
* [getCategories](#getcategories)
* [getCategoryDetailBySlug](#getcategorydetailbyslug)
* [getCollectionDetailBySlug](#getcollectiondetailbyslug)
* [getCollectionItemsBySlug](#getcollectionitemsbyslug)
* [getCollections](#getcollections)
* [getComparedFrequentlyProductBySlug](#getcomparedfrequentlyproductbyslug)
* [getDepartments](#getdepartments)
* [getFollowIds](#getfollowids)
* [getFollowedListing](#getfollowedlisting)
* [getFollowerCountById](#getfollowercountbyid)
* [getHomeProducts](#gethomeproducts)
* [getInStockLocations](#getinstocklocations)
* [getLocationDetailsById](#getlocationdetailsbyid)
* [getProductBundlesBySlug](#getproductbundlesbyslug)
* [getProductComparisonBySlugs](#getproductcomparisonbyslugs)
* [getProductDetailBySlug](#getproductdetailbyslug)
* [getProductPriceBySlug](#getproductpricebyslug)
* [getProductSellersBySlug](#getproductsellersbyslug)
* [getProductSizesBySlug](#getproductsizesbyslug)
* [getProductStockByIds](#getproductstockbyids)
* [getProductStockForTimeByIds](#getproductstockfortimebyids)
* [getProductVariantsBySlug](#getproductvariantsbyslug)
* [getProducts](#getproducts)
* [getSearchResults](#getsearchresults)
* [getSimilarComparisonProductBySlug](#getsimilarcomparisonproductbyslug)
* [getStores](#getstores)
* [unfollowById](#unfollowbyid)



## Methods with example and description




### followById
Follow an entity (product/brand/collection)



```javascript
// Promise
const promise = catalog.followById({  collectionType : value,
 collectionId : value });

// Async/Await
const data = await catalog.followById({  collectionType : value,
 collectionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| collectionType | string | yes | Type of collection followed, i.e. products, brands, or collections. |   
| collectionId | string | yes | The ID of the collection type. |  



Follow a particular entity such as product, brand, collection specified by its ID.

*Returned Response:*




[FollowPostResponse](#FollowPostResponse)

Success. Returns a response object. Check the example shown below or refer `FollowPostResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Brands Added To Wishlist",
  "id": "1"
}
```
</details>









---


### getBrandDetailBySlug
Get metadata of a brand



```javascript
// Promise
const promise = catalog.getBrandDetailBySlug({  slug : value });

// Async/Await
const data = await catalog.getBrandDetailBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/. |  



Fetch metadata of a brand such as name, information, logo, banner, etc.

*Returned Response:*




[BrandDetailResponse](#BrandDetailResponse)

Success. Returns a metadata object. Check the example shown below or refer `BrandDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "logo": {
    "type": "image",
    "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
  },
  "banners": {
    "portrait": {
      "type": "image",
      "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
    },
    "landscape": {
      "type": "image",
      "url": "https://hdn-1.fynd.com/media/banner/brand/original/12536_e1a5cdcefc7540e68cedd8c2b0673179.png"
    }
  },
  "uid": 1,
  "name": "Hess Inc"
}
```
</details>









---


### getBrands
Get all the brands



```javascript
// Promise
const promise = catalog.getBrands({  department : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getBrands({  department : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/ |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.

*Returned Response:*




[BrandListingResponse](#BrandListingResponse)

Success. Returns a paginated list of brands. Check the example shown below or refer `BrandListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Barry, Jennings and Larson",
      "slug": "Hess-Inc",
      "action": {
        "page": {
          "type": "products",
          "query": {
            "brand": [
              "Hess-Inc"
            ]
          }
        },
        "type": "page"
      },
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
      },
      "banners": {
        "portrait": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/12537_9cdfc6835e814b0986ee1643d38cf6cd.png"
        }
      },
      "en_name": "Barry, Jennings and Larson"
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1,
    "type": "number"
  }
}
```
</details>









---


### getCategories
List all the categories



```javascript
// Promise
const promise = catalog.getCategories({  department : value });

// Async/Await
const data = await catalog.getCategories({  department : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| department | string | no | The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/ |  



Use this API to list all the categories. You can also filter the categories by department.

*Returned Response:*




[CategoryListingResponse](#CategoryListingResponse)

Success. Returns a list of categories. Check the example shown below or refer `CategoryListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "departments": [
    {
      "slug": "Cody-Doyle",
      "uid": 1
    }
  ],
  "data": [
    {
      "department": "Cody-Doyle",
      "items": [
        {
          "name": "Janet Parker",
          "image": {
            "aspect_ratio": "13:20",
            "aspect_ratio_f": 0.65,
            "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
          },
          "uid": 1,
          "slug": "Janet-Parker",
          "_custom_json": {},
          "action": {
            "type": "category",
            "url": "https://api.addsale.com/platform/content/v1/products/?l1_category=Janet-Parker&department=Jaime-Chambers",
            "query": {
              "l1_category": [
                "Janet-Parker"
              ],
              "department": [
                "Jaime-Chambers"
              ]
            }
          },
          "childs": [
            {
              "name": "Hannah Lawson",
              "image": {
                "aspect_ratio": "13:20",
                "aspect_ratio_f": 0.65,
                "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
              },
              "uid": 2,
              "slug": "Hannah-Lawson",
              "_custom_json": {},
              "action": {
                "type": "category",
                "url": "https://api.addsale.com/platform/content/v1/products/?l2_category=Hannah-Lawson&department=Jaime-Chambers",
                "query": {
                  "l2_category": [
                    "Hannah-Lawson"
                  ],
                  "department": [
                    "Jaime-Chambers"
                  ]
                }
              },
              "childs": [
                {
                  "name": "Logan Black",
                  "image": {
                    "aspect_ratio": "13:20",
                    "aspect_ratio_f": 0.65,
                    "url": "https://d2zv4gzhlr4ud6.cloudfront.net/media/banner_portrait/category/resize-w:130,h:200/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
                  },
                  "uid": 3,
                  "slug": "Logan-Black",
                  "_custom_json": {},
                  "action": {
                    "type": "category",
                    "url": "https://api.addsale.com/platform/content/v1/products/?category=Logan-Black&department=Jaime-Chambers",
                    "query": {
                      "category": [
                        "Logan-Black"
                      ],
                      "department": [
                        "Jaime-Chambers"
                      ]
                    }
                  },
                  "childs": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
</details>









---


### getCategoryDetailBySlug
Get metadata of a category



```javascript
// Promise
const promise = catalog.getCategoryDetailBySlug({  slug : value });

// Async/Await
const data = await catalog.getCategoryDetailBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/. |  



Fetch metadata of a category such as name, information, logo, banner, etc.

*Returned Response:*




[CategoryMetaResponse](#CategoryMetaResponse)

Success. Returns metadata of a category. Check the example shown below or refer `CategoryMetaResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "logo": {
    "type": "image",
    "url": "http://cdn4.gofynd.com/media/banner/category/original/12063_a5bb91bd5cb44c3c9db98c2a0e6b3d99.jpg"
  },
  "uid": 1,
  "name": "Kyle Cabrera",
  "banners": {
    "portrait": {
      "type": "image",
      "url": "http://cdn4.gofynd.com/media/banner_portrait/category/original/12064_e69e1d8b5e934d3488f0dc8663d8a158.jpg"
    },
    "landscape": {
      "type": "image",
      "url": "http://cdn4.gofynd.com/media/banner/category/original/12063_a5bb91bd5cb44c3c9db98c2a0e6b3d99.jpg"
    }
  },
  "_custom_json": {}
}
```
</details>









---


### getCollectionDetailBySlug
Get a particular collection



```javascript
// Promise
const promise = catalog.getCollectionDetailBySlug({  slug : value });

// Async/Await
const data = await catalog.getCollectionDetailBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/. |  



Get the details of a collection by its `slug`.

*Returned Response:*




[CollectionDetailResponse](#CollectionDetailResponse)

Success. Returns a Collection object. Check the example shown below or refer `CollectionDetailResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": "601a4f39448327cfa83e7db0",
  "type": "items",
  "query": {},
  "name": "collection with items",
  "banners": {
    "portrait": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729908/production/applications/app_000000000000000000000001/media/collection/portrait/pewrpnjrhcrca1dmtvx5.png"
    },
    "landscape": {
      "type": "image",
      "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729858/production/applications/app_000000000000000000000001/media/collection/landscape/tkclmj847hdvfbudeqbr.png"
    }
  },
  "logo": {
    "type": "image",
    "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729838/production/applications/app_000000000000000000000001/media/collection/logo/xierjsrcwhd2fphzyjod.png"
  },
  "published": true,
  "description": "Crimsoune Club | Upto 70% Off",
  "is_active": true,
  "tags": [
    "men",
    "women"
  ],
  "slug": "crimsoune-club-upto-70-off-754fa043",
  "action": {
    "page": {
      "type": "collection",
      "query": {
        "collection": [
          "crimsoune-club-upto-70-off-754fa043"
        ]
      }
    },
    "type": "page"
  },
  "allow_facets": true,
  "allow_sort": true,
  "visible_facets_keys": [],
  "meta": {},
  "badge": {},
  "sort_on": "popular",
  "_custom_json": {},
  "_locale_language": {},
  "_schedule": {}
}
```
</details>









---


### getCollectionItemsBySlug
Get the items in a collection



```javascript
// Promise
const promise = catalog.getCollectionItemsBySlug({  slug : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await catalog.getCollectionItemsBySlug({  slug : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/. |    
| f | string | no | The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (\|\|) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition. |    
| filters | boolean | no | This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters. |    
| sortOn | string | no | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below. |    
| pageId | string | no | Page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



Get items in a collection specified by its `slug`.

*Returned Response:*




[ProductListingResponse](#ProductListingResponse)

Success. Returns a list items in a given collection. Check the example shown below or refer `ProductListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "filters": [
    {
      "key": {
        "display": "Department",
        "name": "department",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Department.svg"
      },
      "values": [
        {
          "display": "Debra Villarreal",
          "count": 1,
          "is_selected": false,
          "value": "Debra-Villarreal",
          "logo": {
            "type": "image",
            "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
          }
        },
        {
          "display": "Tracey Miller",
          "count": 1,
          "is_selected": false,
          "value": "Tracey-Miller",
          "logo": {
            "type": "image",
            "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
          }
        }
      ]
    },
    {
      "key": {
        "display": "Category",
        "name": "category",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Category.svg"
      },
      "values": [
        {
          "display": "Amy Kim DDS",
          "count": 1,
          "is_selected": false,
          "value": "3",
          "logo": "http://cdn4.gofynd.com/media/banner/category/original/12063_a5bb91bd5cb44c3c9db98c2a0e6b3d99.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Gender",
        "name": "gender",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Gender.svg"
      },
      "values": [
        {
          "display": "Men",
          "count": 1,
          "is_selected": false,
          "value": "men"
        },
        {
          "display": "Women",
          "count": 1,
          "is_selected": false,
          "value": "women"
        }
      ]
    },
    {
      "key": {
        "display": "Size",
        "name": "sizes",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Sizes.svg"
      },
      "values": [
        {
          "display": "13",
          "count": 1,
          "is_selected": false,
          "value": "13"
        }
      ]
    },
    {
      "key": {
        "display": "Brand",
        "name": "brand",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Brand%20ID.svg"
      },
      "values": [
        {
          "display": "Barry, Jennings and Larson",
          "count": 1,
          "is_selected": false,
          "value": "1",
          "logo": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        }
      ]
    },
    {
      "key": {
        "display": "Rating",
        "name": "rating",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/Rating.svg"
      },
      "values": [
        {
          "count": 1,
          "display": "2 - 3",
          "value": "[2 TO 3}",
          "is_selected": false
        }
      ]
    },
    {
      "key": {
        "display": "Image",
        "name": "image_nature",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/global/menu-icons/image%20Nature.svg"
      },
      "values": [
        {
          "display": "GoodQuality",
          "count": 1,
          "is_selected": false,
          "value": "standard"
        }
      ]
    },
    {
      "key": {
        "display": "Monica Hampton",
        "name": "material",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Neoprene",
          "count": 1,
          "is_selected": false,
          "value": "Neoprene"
        }
      ]
    },
    {
      "key": {
        "display": "John Mendoza",
        "name": "weight",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "100",
          "count": 1,
          "is_selected": false,
          "value": "100"
        }
      ]
    },
    {
      "key": {
        "display": "Kimberly Mcdaniel",
        "name": "gender",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "['Men', 'Women']",
          "count": 1,
          "is_selected": false,
          "value": "['Men', 'Women']"
        }
      ]
    },
    {
      "key": {
        "display": "Kimberly Davidson",
        "name": "color",
        "kind": "multivalued",
        "logo": ""
      },
      "values": [
        {
          "display": "Grey",
          "count": 1,
          "is_selected": false,
          "value": "808080"
        }
      ]
    },
    {
      "key": {
        "display": "Available",
        "name": "is_available",
        "kind": "singlevalued"
      },
      "values": [
        {
          "display": "Available",
          "count": 3,
          "is_selected": false,
          "value": "true"
        }
      ]
    }
  ],
  "items": [
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": "808080",
        "weight": "100",
        "gender": "women",
        "material": "Neoprene",
        "primary_color": "DarkGrey"
      },
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "sellable": true,
      "name": "benchmark collaborative paradigms",
      "slug": "benchmark-collaborative-paradigms",
      "uid": 1,
      "item_type": "set",
      "brand": {
        "type": "brand",
        "name": "Hess Inc",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "benchmark-collaborative-paradigms"
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1499,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "promo_meta": {
        "title": "",
        "subtitle": ""
      },
      "rating": 2.7
    }
  ],
  "sort_on": [
    {
      "display": "Latest Products.",
      "name": "Latest Products.",
      "logo": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/360x0/56_MKT02AI060CORAL/1_1567590349681.jpg",
      "value": "latest",
      "is_selected": false
    }
  ],
  "page": {
    "type": "number",
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1
  }
}
```
</details>









---


### getCollections
List all the collections



```javascript
// Promise
const promise = catalog.getCollections({  pageNo : value,
 pageSize : value,
 tag : value });

// Async/Await
const data = await catalog.getCollections({  pageNo : value,
 pageSize : value,
 tag : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |    
| tag | Array<string> | no | List of tags  to filter collections |  



Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.

*Returned Response:*




[GetCollectionListingResponse](#GetCollectionListingResponse)

Success. Returns a list of collections. Check the example shown below or refer `GetCollectionListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "type": "number",
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 2
  },
  "items": [
    {
      "uid": "601a4f39448327cfa83e7db2",
      "type": "query",
      "query": {
        "category": [
          "Anna-Navarro"
        ]
      },
      "name": "collection with Anna-Navarro",
      "banners": {
        "portrait": {
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729908/production/applications/app_000000000000000000000001/media/collection/portrait/pewrpnjrhcrca1dmtvx5.png",
          "aspect_ratio": "13:20"
        },
        "landscape": {
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729858/production/applications/app_000000000000000000000001/media/collection/landscape/tkclmj847hdvfbudeqbr.png",
          "aspect_ratio": "27:20"
        }
      },
      "logo": {
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729838/production/applications/app_000000000000000000000001/media/collection/logo/xierjsrcwhd2fphzyjod.png",
        "aspect_ratio": "1:1"
      },
      "published": true,
      "description": "Crimsoune Club | Upto 70% Off",
      "is_active": true,
      "tags": [
        "men",
        "women"
      ],
      "slug": "crimsoune-club-upto-70-off-754fa043",
      "action": {
        "type": "collection",
        "url": "https://api.addsale.com/platform/content/v1/collections/crimsoune-club-upto-70-off-754fa043/items/"
      },
      "allow_facets": true,
      "allow_sort": true,
      "visible_facets_keys": [],
      "meta": {},
      "badge": {},
      "sort_on": "popular",
      "_custom_json": {},
      "_locale_language": {},
      "_schedule": {}
    },
    {
      "uid": "601a4f39448327cfa83e7db0",
      "type": "items",
      "query": {},
      "name": "collection with items",
      "banners": {
        "portrait": {
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729908/production/applications/app_000000000000000000000001/media/collection/portrait/pewrpnjrhcrca1dmtvx5.png",
          "aspect_ratio": "13:20"
        },
        "landscape": {
          "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729858/production/applications/app_000000000000000000000001/media/collection/landscape/tkclmj847hdvfbudeqbr.png",
          "aspect_ratio": "27:20"
        }
      },
      "logo": {
        "url": "https://res.cloudinary.com/dwzm9bysq/image/upload/v1571729838/production/applications/app_000000000000000000000001/media/collection/logo/xierjsrcwhd2fphzyjod.png",
        "aspect_ratio": "1:1"
      },
      "published": true,
      "description": "Crimsoune Club | Upto 70% Off",
      "is_active": true,
      "tags": [
        "men",
        "women"
      ],
      "slug": "crimsoune-club-upto-70-off-754fa043",
      "action": {
        "type": "collection",
        "url": "https://api.addsale.com/platform/content/v1/collections/crimsoune-club-upto-70-off-754fa043/items/"
      },
      "allow_facets": true,
      "allow_sort": true,
      "visible_facets_keys": [],
      "meta": {},
      "badge": {},
      "sort_on": "popular",
      "_custom_json": {},
      "_locale_language": {},
      "_schedule": {}
    }
  ],
  "filters": {
    "tags": [
      {
        "name": "men",
        "is_selected": false,
        "display": "men"
      },
      {
        "name": "women",
        "is_selected": false,
        "display": "women"
      }
    ],
    "type": [
      {
        "name": "items",
        "is_selected": false,
        "display": "items"
      },
      {
        "name": "query",
        "is_selected": false,
        "display": "query"
      }
    ]
  }
}
```
</details>









---


### getComparedFrequentlyProductBySlug
Get comparison between frequently compared products with the given product



```javascript
// Promise
const promise = catalog.getComparedFrequentlyProductBySlug({  slug : value });

// Async/Await
const data = await catalog.getComparedFrequentlyProductBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |  



Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.

*Returned Response:*




[ProductFrequentlyComparedSimilarResponse](#ProductFrequentlyComparedSimilarResponse)

Success. Returns an array of objects containing the attributes for comparision. Check the example shown below or refer `ProductFrequentlyComparedSimilarResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "similars": {
    "title": "Most Compared",
    "subtitle": "We bet you would love these!",
    "attributes_metadata": [
      {
        "title": "Alexander Sawyer",
        "details": [
          {
            "key": "color",
            "display": "Kimberly Davidson",
            "description": ""
          },
          {
            "key": "gender",
            "display": "Kimberly Mcdaniel",
            "description": ""
          },
          {
            "key": "material",
            "display": "Monica Hampton",
            "description": ""
          },
          {
            "key": "weight",
            "display": "John Mendoza",
            "description": ""
          }
        ]
      }
    ],
    "items": [
      {
        "type": "product",
        "name": "benchmark collaborative paradigms",
        "item_type": "set",
        "slug": "benchmark-collaborative-paradigms",
        "id": 1,
        "brand": {
          "type": "brand",
          "name": "Barry, Jennings and Larson",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
          },
          "action": {
            "page": {
              "type": "products",
              "query": {
                "brand": [
                  "Hess-Inc"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        },
        "action": {
          "page": {
            "type": "product",
            "query": {
              "slug": "benchmark-collaborative-paradigms"
            }
          },
          "type": "page"
        },
        "attributes": {
          "color_hex": "808080",
          "weight": 100,
          "product_type": "LaptopBags",
          "gender": [
            "Men",
            "Women"
          ],
          "material": "Neoprene",
          "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
          "item_code": "LGLAPTOPSLEEVE5",
          "occasion": "Casual",
          "primary_color": "Grey",
          "primary_material": "Others",
          "variant": "LGLAPTOPSLEEVE5",
          "color": "DarkGrey",
          "product_details": "This is a Unisex Product.",
          "primary_color_hex": "808080"
        },
        "medias": [
          {
            "type": "image",
            "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
          }
        ],
        "categories": [
          {
            "id": 3,
            "uid": 3,
            "name": "Amy Kim DDS",
            "logo": {
              "type": "image",
              "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
            },
            "action": {
              "page": {
                "type": "category",
                "query": {
                  "category": [
                    "Amy-Kim-DDS"
                  ]
                }
              },
              "type": "page"
            },
            "_custom_json": {}
          }
        ],
        "discount": "14% OFF",
        "price": {
          "marked": {
            "min": 1399,
            "max": 1399,
            "currency_code": "INR",
            "currency_symbol": "₹"
          },
          "effective": {
            "min": 1199,
            "max": 1399,
            "currency_code": "INR",
            "currency_symbol": "₹"
          }
        },
        "rating": 2.7,
        "rating_count": 2
      },
      {
        "type": "product",
        "attributes": {
          "primary_color_hex": "808080",
          "weight": "100",
          "gender": "women",
          "material": "Neoprene",
          "primary_color": "DarkGrey"
        },
        "categories": [
          {
            "id": 3,
            "uid": 3,
            "name": "Amy Kim DDS",
            "logo": {
              "type": "image",
              "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
            },
            "action": {
              "page": {
                "type": "category",
                "query": {
                  "category": [
                    "Amy-Kim-DDS"
                  ]
                }
              },
              "type": "page"
            },
            "_custom_json": {}
          }
        ],
        "sellable": true,
        "name": "deploy viral systems",
        "slug": "deploy-viral-systems",
        "uid": 2,
        "item_type": "set",
        "brand": {
          "type": "brand",
          "name": "Hess Inc",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
          },
          "action": {
            "page": {
              "type": "products",
              "query": {
                "brand": [
                  "Hess-Inc"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        },
        "action": {
          "page": {
            "type": "product",
            "query": {
              "slug": "deploy-viral-systems"
            }
          },
          "type": "page"
        },
        "medias": [
          {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
          }
        ],
        "discount": "14% OFF",
        "price": {
          "marked": {
            "min": 1399,
            "max": 1499,
            "currency_code": "INR",
            "currency_symbol": "₹"
          },
          "effective": {
            "min": 1199,
            "max": 1399,
            "currency_code": "INR",
            "currency_symbol": "₹"
          }
        },
        "is_tryout": false,
        "rating": 2.7
      }
    ]
  }
}
```
</details>









---


### getDepartments
List all the departments



```javascript
// Promise
const promise = catalog.getDepartments();

// Async/Await
const data = await catalog.getDepartments();
```






Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`

*Returned Response:*




[DepartmentResponse](#DepartmentResponse)

List of Departments. See example below or refer `DepartmentResponse` for details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": 1,
      "name": "Zachary Harris",
      "slug": "Zachary-Harris",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 2,
      "name": "Aaron Reilly",
      "slug": "Aaron-Reilly",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 3,
      "name": "Bobby Sandoval",
      "slug": "Bobby-Sandoval",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 4,
      "name": "Seth Hughes",
      "slug": "Seth-Hughes",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 5,
      "name": "Michelle Moore",
      "slug": "Michelle-Moore",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 6,
      "name": "Annette Baldwin",
      "slug": "Annette-Baldwin",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 7,
      "name": "Chris Mata",
      "slug": "Chris-Mata",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 8,
      "name": "Nicole Jacobs",
      "slug": "Nicole-Jacobs",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 9,
      "name": "Pamela Smith",
      "slug": "Pamela-Smith",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    },
    {
      "uid": 10,
      "name": "Nicole Simon",
      "slug": "Nicole-Simon",
      "priority_order": 7,
      "logo": {
        "type": "image",
        "url": "http://cdn4.gofynd.com/media/category_tab_icons/department/Men.png"
      }
    }
  ]
}
```
</details>









---


### getFollowIds
Get the IDs of followed products, brands and collections.



```javascript
// Promise
const promise = catalog.getFollowIds({  collectionType : value });

// Async/Await
const data = await catalog.getFollowIds({  collectionType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| collectionType | string | no | Type of collection, i.e. products, brands, collections. |  



You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids

*Returned Response:*




[FollowIdsResponse](#FollowIdsResponse)

Success. Returns the IDs of all the Products, Brands and Collections which were followed. Check the example shown below or refer `FollowIdsResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "data": {
    "products": [
      1,
      15,
      14,
      13,
      12,
      11,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2
    ],
    "brands": [
      1
    ],
    "collections": []
  }
}
```
</details>









---


### getFollowedListing
Get a list of followed Products, Brands, Collections



```javascript
// Promise
const promise = catalog.getFollowedListing({  collectionType : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await catalog.getFollowedListing({  collectionType : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| collectionType | string | yes | Type of collection followed, i.e. products, brands, or collections. |    
| pageId | string | no | Page ID to retrieve next set of results. |    
| pageSize | number | no | Page ID to retrieve next set of results. |  



Users can follow a product they like. This API retrieves the products the user have followed.

*Returned Response:*




[GetFollowListingResponse](#GetFollowListingResponse)

Success. Returns a Followed resource object. Check the example shown below or refer `GetFollowListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "type": "product",
      "name": "revolutionize end-to-end technologies",
      "item_type": "set",
      "slug": "revolutionize-end-to-end-technologies",
      "uid": 1,
      "brand": {
        "type": "brand",
        "name": "Chen PLC",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Chen-PLC"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "sellable": false,
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "revolutionize-end-to-end-technologies"
          }
        },
        "type": "page"
      },
      "attributes": {
        "color_hex": "808080",
        "weight": 100,
        "product_type": "LaptopBags",
        "gender": [
          "Men",
          "Women"
        ],
        "material": "Neoprene",
        "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
        "item_code": "LGLAPTOPSLEEVE5",
        "occasion": "Casual",
        "primary_color": "Grey",
        "primary_material": "Others",
        "variant": "LGLAPTOPSLEEVE5",
        "color": "DarkGrey",
        "product_details": "This is a Unisex Product.",
        "primary_color_hex": "808080"
      },
      "medias": [
        {
          "type": "image",
          "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Paul Palmer",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Paul-Palmer"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "rating": 2.7,
      "rating_count": 2
    },
    {
      "type": "product",
      "name": "grow B2B experiences",
      "item_type": "set",
      "slug": "grow-B2B-experiences",
      "uid": 15,
      "brand": {
        "type": "brand",
        "name": "Chen PLC",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Chen-PLC"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "sellable": false,
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "grow-B2B-experiences"
          }
        },
        "type": "page"
      },
      "attributes": {
        "color_hex": "808080",
        "weight": 100,
        "product_type": "LaptopBags",
        "gender": [
          "Men",
          "Women"
        ],
        "material": "Neoprene",
        "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
        "item_code": "LGLAPTOPSLEEVE5",
        "occasion": "Casual",
        "primary_color": "Grey",
        "primary_material": "Others",
        "variant": "LGLAPTOPSLEEVE5",
        "color": "DarkGrey",
        "product_details": "This is a Unisex Product.",
        "primary_color_hex": "808080"
      },
      "medias": [
        {
          "type": "image",
          "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Paul Palmer",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Paul-Palmer"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "rating": 2.7,
      "rating_count": 2
    },
    {
      "type": "product",
      "name": "target robust systems",
      "item_type": "set",
      "slug": "target-robust-systems",
      "uid": 14,
      "brand": {
        "type": "brand",
        "name": "Chen PLC",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Chen-PLC"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "sellable": false,
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "target-robust-systems"
          }
        },
        "type": "page"
      },
      "attributes": {
        "color_hex": "808080",
        "weight": 100,
        "product_type": "LaptopBags",
        "gender": [
          "Men",
          "Women"
        ],
        "material": "Neoprene",
        "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
        "item_code": "LGLAPTOPSLEEVE5",
        "occasion": "Casual",
        "primary_color": "Grey",
        "primary_material": "Others",
        "variant": "LGLAPTOPSLEEVE5",
        "color": "DarkGrey",
        "product_details": "This is a Unisex Product.",
        "primary_color_hex": "808080"
      },
      "medias": [
        {
          "type": "image",
          "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Paul Palmer",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Paul-Palmer"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "rating": 2.7,
      "rating_count": 2
    }
  ],
  "page": {
    "next_id": "6066fc7b3b17fd7038c46317",
    "has_previous": false,
    "has_next": true,
    "item_total": 15,
    "type": "number"
  }
}
```
</details>









---


### getFollowerCountById
Get Follow Count



```javascript
// Promise
const promise = catalog.getFollowerCountById({  collectionType : value,
 collectionId : value });

// Async/Await
const data = await catalog.getFollowerCountById({  collectionType : value,
 collectionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| collectionType | string | yes | Type of collection, i.e. products, brands, or collections. |   
| collectionId | string | yes | The ID of the collection type. |  



Get the total count of followers for a given collection type and collection ID.

*Returned Response:*




[FollowerCountResponse](#FollowerCountResponse)

Success. Returns the number of followers for a given collection type. Check the example shown below or refer `FollowerCountResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "count": 0
}
```
</details>









---


### getHomeProducts
List the products



```javascript
// Promise
const promise = catalog.getHomeProducts({  sortOn : value,
 pageId : value,
 pageSize : value });

// Async/Await
const data = await catalog.getHomeProducts({  sortOn : value,
 pageId : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| sortOn | string | no | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. |    
| pageId | string | no | Page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



List all the products associated with a brand, collection or category in a random order.

*Returned Response:*




[HomeListingResponse](#HomeListingResponse)

Success. Returns a paginated list of products. Check the example shown below or refer `HomeListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "filters": [
    {
      "key": {
        "display": "Department",
        "name": "department",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/FiQP7BeJbz-Department.png"
      },
      "values": [
        {
          "display": "Fashion",
          "count": 2496,
          "is_selected": false,
          "value": "fashion",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/ziRuAA0EX-https/hdn-1.fynd.com/department/pictures/square-logo/original/jSt0jjI7D-https/hdn-1.fynd.com/department/pictures/square-logo/original/6ouiCBSSn-https/hdn-1.fynd.com/department/pictures/square-logo/original/o2Rti5if7-.jpeg.jpeg.jpeg.jpeg"
          }
        },
        {
          "display": "Mary-Vargas",
          "count": 15,
          "is_selected": false,
          "value": "Mary-Vargas"
        },
        {
          "display": "Michael-Davis",
          "count": 15,
          "is_selected": false,
          "value": "Michael-Davis"
        },
        {
          "display": "Toys & games",
          "count": 2,
          "is_selected": false,
          "value": "toys",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/WU_YDGrIe-https/hdn-1.fynd.com/media/category_tab_icons/department/Toys.png.png"
          }
        }
      ]
    },
    {
      "key": {
        "display": "Category",
        "name": "category",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/YuQYSFD6Tu-Category.png"
      },
      "values": [
        {
          "display": "running-shoes",
          "count": 2495,
          "is_selected": false,
          "value": "running-shoes"
        },
        {
          "display": "Mr.-Robert-Wilson",
          "count": 15,
          "is_selected": false,
          "value": "Mr.-Robert-Wilson"
        },
        {
          "display": "action-figures",
          "count": 2,
          "is_selected": false,
          "value": "action-figures"
        },
        {
          "display": "hats",
          "count": 1,
          "is_selected": false,
          "value": "hats"
        }
      ]
    },
    {
      "key": {
        "display": "Size",
        "name": "sizes",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/M45tOYu45x-Sizes.png"
      },
      "values": [
        {
          "display": "11",
          "count": 1492,
          "is_selected": false,
          "value": "11"
        },
        {
          "display": "8",
          "count": 1003,
          "is_selected": false,
          "value": "8"
        },
        {
          "display": "13",
          "count": 15,
          "is_selected": false,
          "value": "13"
        },
        {
          "display": "FREE",
          "count": 2,
          "is_selected": false,
          "value": "FREE"
        },
        {
          "display": "OS",
          "count": 2,
          "is_selected": false,
          "value": "OS"
        },
        {
          "display": "R4",
          "count": 2,
          "is_selected": false,
          "value": "R4"
        },
        {
          "display": "10",
          "count": 1,
          "is_selected": false,
          "value": "10"
        },
        {
          "display": "9",
          "count": 1,
          "is_selected": false,
          "value": "9"
        }
      ]
    },
    {
      "key": {
        "display": "Brand",
        "name": "brand",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/m4SDdD279_-Min-price-effective.png"
      },
      "values": [
        {
          "display": "load-brand-1",
          "count": 1492,
          "is_selected": false,
          "value": "load-brand-1"
        },
        {
          "display": "caneworks",
          "count": 1002,
          "is_selected": false,
          "value": "caneworks"
        },
        {
          "display": "Mann-Morris",
          "count": 15,
          "is_selected": false,
          "value": "Mann-Morris"
        },
        {
          "display": "test",
          "count": 2,
          "is_selected": false,
          "value": "test"
        },
        {
          "display": "nexus",
          "count": 1,
          "is_selected": false,
          "value": "nexus"
        },
        {
          "display": "nike",
          "count": 1,
          "is_selected": false,
          "value": "nike"
        }
      ]
    },
    {
      "key": {
        "display": "Image",
        "name": "image_nature",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/JcGqgsW9FR-image-Nature.png"
      },
      "values": [
        {
          "display": "No Image",
          "count": 2479,
          "is_selected": false,
          "value": "default"
        },
        {
          "display": "Good Quality",
          "count": 34,
          "is_selected": false,
          "value": "standard"
        }
      ]
    },
    {
      "key": {
        "display": "Size Depth",
        "name": "size_depth",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/D6W3aAamqz-Size-Depth.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 1,
          "max": 4,
          "is_selected": false,
          "selected_min": 1,
          "selected_max": 4,
          "display_format": "{} - {}",
          "query_format": "[{} TO {}]",
          "display": "1 - 4"
        }
      ]
    },
    {
      "key": {
        "display": "Price",
        "name": "min_price_effective",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/m4SDdD279_-Min-price-effective.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 9,
          "max": 6789,
          "is_selected": false,
          "selected_min": 9.51,
          "selected_max": 6788.44,
          "display_format": "{} to {}",
          "currency_code": "INR",
          "currency_symbol": "₹",
          "query_format": "[{},INR TO {},INR]",
          "display": "₹9.51 to ₹6788.44"
        }
      ]
    },
    {
      "key": {
        "display": "Discount",
        "name": "discount",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/qsYhcYuntC-Platform-Discount.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 0,
          "max": 83,
          "is_selected": false,
          "selected_min": 0,
          "selected_max": 83,
          "display_format": "{}% - {}%",
          "query_format": "[{} TO {}]",
          "display": "0% - 83%"
        }
      ]
    }
  ],
  "items": [
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "filtercollection": "test",
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 671",
      "slug": "shoes-671-gs7hedxv_w01",
      "uid": 7501985,
      "item_code": "SHOE-671",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-671-gs7hedxv_w01"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 9000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 6000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-487-ciaqajcbvhxi"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501992,
              "slug": "shoes-487-ciaqajcbvhxi",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 487",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        },
        {
          "display_type": "text",
          "header": "RAM",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-1255-7_dtnnaaqay"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7503196,
              "slug": "shoes-1255-7_dtnnaaqay",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aM_8QuyQH-HP6YCHrbk7-484A0178.jpg",
                  "type": "image"
                }
              ],
              "name": "test1",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {
                "k a": [
                  "https://hdn-1.addsale.com/x0/misc/general/free/original/rnq4jjauz-Screenshot-2022-03-29-at-7.55.43-PM.png"
                ]
              },
              "color_name": "Red"
            },
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-413-yeskjstfl6va"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7502115,
              "slug": "shoes-413-yeskjstfl6va",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/uCrIUYgNs-Neemans-FieryRed-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/J87k8IiMW-nike-free-og-royal-blue-running-imported-sport-shoes-500x500.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/UHKXhrzCK-5_1_72f25caf-a641-402e-8f3a-c56604b7f602_765x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aUnsm8Z_T-sneaker-index-1587142381.jpg",
                  "type": "image"
                }
              ],
              "name": "Shoe 413 TEST2",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {}
            }
          ],
          "key": "ram",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "filtercollection": "test",
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 671",
      "slug": "shoes-671-gs7hedxv_w01",
      "uid": 7501985,
      "item_code": "SHOE-671",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-671-gs7hedxv_w01"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 9000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 6000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-487-ciaqajcbvhxi"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501992,
              "slug": "shoes-487-ciaqajcbvhxi",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 487",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        },
        {
          "display_type": "text",
          "header": "RAM",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-1255-7_dtnnaaqay"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7503196,
              "slug": "shoes-1255-7_dtnnaaqay",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aM_8QuyQH-HP6YCHrbk7-484A0178.jpg",
                  "type": "image"
                }
              ],
              "name": "test1",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {
                "k a": [
                  "https://hdn-1.addsale.com/x0/misc/general/free/original/rnq4jjauz-Screenshot-2022-03-29-at-7.55.43-PM.png"
                ]
              },
              "color_name": "Red"
            },
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-413-yeskjstfl6va"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7502115,
              "slug": "shoes-413-yeskjstfl6va",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/uCrIUYgNs-Neemans-FieryRed-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/J87k8IiMW-nike-free-og-royal-blue-running-imported-sport-shoes-500x500.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/UHKXhrzCK-5_1_72f25caf-a641-402e-8f3a-c56604b7f602_765x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aUnsm8Z_T-sneaker-index-1587142381.jpg",
                  "type": "image"
                }
              ],
              "name": "Shoe 413 TEST2",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {}
            }
          ],
          "key": "ram",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100931",
      "slug": "load-shoes-100931-qnuugutshoec",
      "uid": 7522863,
      "item_code": "LS100931",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100931-qnuugutshoec"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 101490",
      "slug": "load-shoes-101490-0cgg_86ozi6s",
      "uid": 7523770,
      "item_code": "LS101490",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-101490-0cgg_86ozi6s"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 487",
      "slug": "shoes-487-ciaqajcbvhxi",
      "uid": 7501992,
      "item_code": "SHOE-487",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-487-ciaqajcbvhxi"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-671-gs7hedxv_w01"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501985,
              "slug": "shoes-671-gs7hedxv_w01",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 671",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 487",
      "slug": "shoes-487-ciaqajcbvhxi",
      "uid": 7501992,
      "item_code": "SHOE-487",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-487-ciaqajcbvhxi"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-671-gs7hedxv_w01"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501985,
              "slug": "shoes-671-gs7hedxv_w01",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 671",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100241",
      "slug": "load-shoes-100241-9ee51v8qxpz",
      "uid": 7523366,
      "item_code": "LS100241",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100241-9ee51v8qxpz"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100407",
      "slug": "load-shoes-100407-jcubbw5xz3wa",
      "uid": 7523709,
      "item_code": "LS100407",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100407-jcubbw5xz3wa"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100763",
      "slug": "load-shoes-100763-gse_mewuxfxv",
      "uid": 7523185,
      "item_code": "LS100763",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100763-gse_mewuxfxv"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 539",
      "slug": "shoes-539-dkkfadu66m1l",
      "uid": 7501643,
      "item_code": "SHOE-539",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-539-dkkfadu66m1l"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 348",
      "slug": "shoes-348-dcnhciie0v3",
      "uid": 7502012,
      "item_code": "SHOE-348",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-348-dcnhciie0v3"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 1048",
      "slug": "shoes-1048-piqk6-rwmts5",
      "uid": 7502307,
      "item_code": "SHOE-1048",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-1048-piqk6-rwmts5"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    }
  ],
  "sort_on": [
    {
      "display": "Latest Products",
      "name": "Latest Products",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/QEvUfhsfyg-Latest-Products.png",
      "value": "latest",
      "is_selected": false
    },
    {
      "display": "Popularity",
      "name": "Popularity",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/iG82Qjay9X-Popularity.png",
      "value": "popular",
      "is_selected": true
    },
    {
      "display": "Price Low to High",
      "name": "Price Low to High",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/dLUtvNwoQt-Price-High-to-Low.png",
      "value": "price_asc",
      "is_selected": false
    },
    {
      "display": "Price High to Low",
      "name": "Price High to Low",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/dLUtvNwoQt-Price-High-to-Low.png",
      "value": "price_dsc",
      "is_selected": false
    },
    {
      "display": "Discount Low to High",
      "name": "Discount Low to High",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/9VdjDVc_aR-Discount-Low-to-High.png",
      "value": "discount_asc",
      "is_selected": false
    },
    {
      "display": "Discount High to Low",
      "name": "Discount High to Low",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/9VdjDVc_aR-Discount-Low-to-High.png",
      "value": "discount_dsc",
      "is_selected": false
    },
    {
      "display": "Rating",
      "name": "Rating",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/IyaIm4EZXI-Rating.png",
      "value": "rating_dsc",
      "is_selected": false
    },
    {
      "display": "Size Depth (High to Low)",
      "name": "Size Depth (High to Low)",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/hyWWrNJ1A--Size-Depth.png",
      "value": "depth_desc",
      "is_selected": false
    }
  ],
  "page": {
    "type": "cursor",
    "next_id": "AoIIRHjAAD8HMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIV9hbGxfITc1MDIzMDc=",
    "has_previous": false,
    "has_next": true,
    "item_total": 2513
  }
}
```
</details>









---


### getInStockLocations
Get store meta information.



```javascript
// Promise
const promise = catalog.getInStockLocations({  pageNo : value,
 pageSize : value,
 q : value,
 city : value,
 range : value,
 latitude : value,
 longitude : value });

// Async/Await
const data = await catalog.getInStockLocations({  pageNo : value,
 pageSize : value,
 q : value,
 city : value,
 range : value,
 latitude : value,
 longitude : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. |    
| q | string | no | Search a store by its name or store_code. |    
| city | string | no | Search stores by the city in which they are situated. |    
| range | number | no | Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range |    
| latitude | number | no | Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788 |    
| longitude | number | no | Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114 |  



Use this API to get a list of stores in a specific application.

*Returned Response:*




[ApplicationStoreListing](#ApplicationStoreListing)

Success. Returns a list of selling locations. Check the example shown below or refer `StoreListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "current": 1,
    "type": "number",
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 5
  },
  "items": [
    {
      "uid": 1,
      "_custom_json": {},
      "additional_contacts": [
        {
          "country_code": 91,
          "number": "9594495254"
        }
      ],
      "address": {
        "lat_long": {
          "type": "Point",
          "coordinates": [
            72.809786,
            19.138787
          ]
        },
        "city": "MUMBAI",
        "pincode": 400061,
        "state": "MAHARASHTRA",
        "country": "INDIA",
        "landmark": "",
        "address2": "",
        "address1": "YARI ROAD, ANDHERI WEST"
      },
      "company_id": 1,
      "display_name": "Reliance Digital P. Ltd",
      "manager": {
        "mobile_no": {
          "country_code": 91,
          "number": "9594495254"
        },
        "name": "Fahim Sakri",
        "email": "fahimsakri@gmail.com"
      },
      "name": "Reliance Digital P. Ltd",
      "store_code": "HS-52b69",
      "store_type": "high_street",
      "company": {
        "company_type": "mbo",
        "business_type": "ltd/pvt ltd",
        "name": "Reliance Digital P. Ltd1234789123",
        "uid": 1
      },
      "departments": [
        {
          "priority_order": 7,
          "name": "Baby Care & Kids Essentials",
          "uid": 7,
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/category_tab_icons/department/Babycareandkidsessential.png"
          },
          "is_active": true,
          "slug": "baby-care-kids-essentials"
        },
        {
          "priority_order": 9,
          "name": "Industrial Supplies",
          "uid": 11,
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/logo/department/original/15483_a8803bf3fc244c748180588166df82da.jpg"
          },
          "is_active": true,
          "slug": "industrial-supplies"
        },
        {
          "priority_order": 10,
          "name": "Electricals",
          "uid": 14,
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/department/pictures/square-logo/original/M93qfyuh1-https:hdn-1.fynd.commedialogodepartmentoriginal17588_44516b7413fd4a4a858556857aa0c4c8.jpg.jpeg"
          },
          "is_active": true,
          "slug": "electricals"
        },
        {
          "priority_order": 1,
          "name": "Fashion",
          "uid": 21,
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/department/pictures/square-logo/original/jSt0jjI7D-https/hdn-1.fynd.com/department/pictures/square-logo/original/6ouiCBSSn-https/hdn-1.fynd.com/department/pictures/square-logo/original/o2Rti5if7-.jpeg.jpeg.jpeg"
          },
          "is_active": true,
          "slug": "fashion"
        },
        {
          "slug": "automobile",
          "is_active": true,
          "logo": {
            "type": "image",
            "url": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/kRhYFHWZ5-.jpeg"
          },
          "name": "AUTOMOBILE",
          "uid": 24,
          "priority_order": 1
        }
      ]
    }
  ]
}
```
</details>









---


### getLocationDetailsById
Get store meta information.



```javascript
// Promise
const promise = catalog.getLocationDetailsById({  locationId : value });

// Async/Await
const data = await catalog.getLocationDetailsById({  locationId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| locationId | number | yes | Unique Location ID. |  



Use this API to get meta details for a store.

*Returned Response:*




[StoreDetails](#StoreDetails)

Success. Returns a metadata object. Check the example shown below or refer `StoreDetails` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "uid": 1,
  "_custom_json": {},
  "additional_contacts": [
    {
      "country_code": 91,
      "number": "9594495254"
    }
  ],
  "address": {
    "lat_long": {
      "type": "Point",
      "coordinates": [
        72.809786,
        19.138787
      ]
    },
    "city": "MUMBAI",
    "pincode": 400061,
    "state": "MAHARASHTRA",
    "country": "INDIA",
    "landmark": "",
    "address2": "",
    "address1": "YARI ROAD, ANDHERI WEST"
  },
  "company_id": 1,
  "display_name": "Reliance Digital P. Ltd",
  "manager": {
    "mobile_no": {
      "country_code": 91,
      "number": "9594495254"
    },
    "name": "Fahim Sakri",
    "email": "fahimsakri@gmail.com"
  },
  "name": "Reliance Digital P. Ltd",
  "store_code": "HS-52b69",
  "store_type": "high_street",
  "timing": [
    {
      "weekday": "monday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "tuesday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "wednesday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "thursday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "friday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "saturday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    },
    {
      "weekday": "sunday",
      "open": true,
      "closing": {
        "minute": 30,
        "hour": 21
      },
      "opening": {
        "minute": 0,
        "hour": 11
      }
    }
  ],
  "company": {
    "company_type": "mbo",
    "business_type": "ltd/pvt ltd",
    "name": "Reliance Digital P. Ltd1234789123",
    "uid": 1
  }
}
```
</details>









---


### getProductBundlesBySlug
Get product bundles



```javascript
// Promise
const promise = catalog.getProductBundlesBySlug({  slug : value,
 id : value });

// Async/Await
const data = await catalog.getProductBundlesBySlug({  slug : value,
 id : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| slug | string | no | Product slug for which bundles need to be fetched. |    
| id | string | no | Product uid |  



Use this API to retrieve products bundles to the one specified by its slug.

*Returned Response:*




[ProductBundle](#ProductBundle)

Success. Returns a group of products bundle.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "company_id": 1,
      "page_visibility": [],
      "name": "Test bundle",
      "choice": "multi",
      "same_store_assignment": true,
      "slug": "test-bundle",
      "logo": null,
      "meta": {},
      "products": [
        {
          "product_uid": 7502119,
          "min_quantity": 1,
          "product_details": {
            "name": "Neopack WSLTBR42 42 & 44 mm Leather Strap, Brown",
            "out_of_stock": false,
            "is_set": false,
            "identifier": {
              "sku_code": [
                "491667188"
              ]
            },
            "country_of_origin": "India",
            "media": [
              {
                "type": "image",
                "url": "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/G8moRC9NMj-neopack-wsltbr42-smart-watch-bands-491667188-i-1-1200wx1200h.jpeg"
              },
              {
                "type": "image",
                "url": "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/3Xumb2A0tV-neopack-wsltbr42-smart-watch-bands-491667188-i-2-1200wx1200h.jpeg"
              },
              {
                "type": "image",
                "url": "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/ZOnlihkNUS-neopack-wsltbr42-smart-watch-bands-491667188-i-3-1200wx1200h.jpeg"
              },
              {
                "type": "image",
                "url": "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/mu9B2afklQ-neopack-wsltbr42-smart-watch-bands-491667188-i-4-1200wx1200h.jpeg"
              }
            ],
            "template_tag": "health-care",
            "description": "Personalize your Apple Watch with this Classic and fashionable Neopack WSLTBR42 Leather Strap that fits your different mood and outfits in daily life & any occasion. It is a Perfect Replacement for original straps and is fully adjustable so that it can be adjusted and fit perfectly. The wrist strap is made of genuine calf leather and includes Space Grey Adapter and buckle.",
            "images": [
              "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/G8moRC9NMj-neopack-wsltbr42-smart-watch-bands-491667188-i-1-1200wx1200h.jpeg",
              "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/3Xumb2A0tV-neopack-wsltbr42-smart-watch-bands-491667188-i-2-1200wx1200h.jpeg",
              "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/ZOnlihkNUS-neopack-wsltbr42-smart-watch-bands-491667188-i-3-1200wx1200h.jpeg",
              "https://hdn-1.jiox0.de/jiox5/products/pictures/item/free/original/mu9B2afklQ-neopack-wsltbr42-smart-watch-bands-491667188-i-4-1200wx1200h.jpeg"
            ],
            "attributes": {
              "color": "Brown",
              "model": "WSLTBR42",
              "action": "upsert",
              "warranty": "1 Year",
              "product_details": "Personalize your Apple Watch with this Classic and fashionable Neopack WSLTBR42 Leather Strap that fits your different mood and outfits in daily life & any occasion. It is a Perfect Replacement for original straps and is fully adjustable so that it can be adjusted and fit perfectly. The wrist strap is made of genuine calf leather and includes Space Grey Adapter and buckle.",
              "brand_name": "Neopack",
              "primary_color_hex": "8B572A"
            },
            "hsn_code": 91130000,
            "image_nature": "standard",
            "slug": "neopack-wsltbr42-42-and-44-mm-leather-strap-brown",
            "brand_uid": 90,
            "item_code": "491667188"
          },
          "allow_remove": true,
          "auto_add_to_cart": false,
          "price": {
            "min_marked": 2499,
            "min_effective": 1499,
            "currency": "INR",
            "max_effective": 1499,
            "max_marked": 2499
          },
          "sizes": [
            {
              "value": "OS",
              "is_available": true,
              "quantity": 30000,
              "display": "OS"
            }
          ],
          "max_quantity": 1,
          "auto_select": false
        }
      ]
    }
  ]
}
```
</details>









---


### getProductComparisonBySlugs
Compare products



```javascript
// Promise
const promise = catalog.getProductComparisonBySlugs({  slug : value });

// Async/Await
const data = await catalog.getProductComparisonBySlugs({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | Array<string> | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/. |  



Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.

*Returned Response:*




[ProductsComparisonResponse](#ProductsComparisonResponse)

Success. Returns an array of objects containing the attributes for comparision. Check the example shown below or refer `ProductsComparisonResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "attributes_metadata": [
    {
      "title": "Alexander Sawyer",
      "details": [
        {
          "key": "color",
          "display": "Kimberly Davidson",
          "description": ""
        },
        {
          "key": "gender",
          "display": "Kimberly Mcdaniel",
          "description": ""
        },
        {
          "key": "material",
          "display": "Monica Hampton",
          "description": ""
        },
        {
          "key": "weight",
          "display": "John Mendoza",
          "description": ""
        }
      ]
    }
  ],
  "items": [
    {
      "type": "product",
      "name": "benchmark collaborative paradigms",
      "item_type": "set",
      "slug": "benchmark-collaborative-paradigms",
      "id": 1,
      "brand": {
        "type": "brand",
        "name": "Barry, Jennings and Larson",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "benchmark-collaborative-paradigms"
          }
        },
        "type": "page"
      },
      "attributes": {
        "color_hex": "808080",
        "weight": 100,
        "product_type": "LaptopBags",
        "gender": [
          "Men",
          "Women"
        ],
        "material": "Neoprene",
        "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
        "item_code": "LGLAPTOPSLEEVE5",
        "occasion": "Casual",
        "primary_color": "Grey",
        "primary_material": "Others",
        "variant": "LGLAPTOPSLEEVE5",
        "color": "DarkGrey",
        "product_details": "This is a Unisex Product.",
        "primary_color_hex": "808080"
      },
      "medias": [
        {
          "type": "image",
          "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "rating": 2.7,
      "rating_count": 2
    },
    {
      "type": "product",
      "name": "deploy viral systems",
      "item_type": "set",
      "slug": "deploy-viral-systems",
      "id": 2,
      "brand": {
        "type": "brand",
        "name": "Barry, Jennings and Larson",
        "logo": {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
        },
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "Hess-Inc"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "query": {
            "slug": "deploy-viral-systems"
          }
        },
        "type": "page"
      },
      "attributes": {
        "color_hex": "808080",
        "weight": 100,
        "product_type": "LaptopBags",
        "gender": [
          "Men",
          "Women"
        ],
        "material": "Neoprene",
        "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
        "item_code": "LGLAPTOPSLEEVE5",
        "occasion": "Casual",
        "primary_color": "Grey",
        "primary_material": "Others",
        "variant": "LGLAPTOPSLEEVE5",
        "color": "DarkGrey",
        "product_details": "This is a Unisex Product.",
        "primary_color_hex": "808080"
      },
      "medias": [
        {
          "type": "image",
          "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
        }
      ],
      "categories": [
        {
          "id": 3,
          "uid": 3,
          "name": "Amy Kim DDS",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
          },
          "action": {
            "page": {
              "type": "category",
              "query": {
                "category": [
                  "Amy-Kim-DDS"
                ]
              }
            },
            "type": "page"
          },
          "_custom_json": {}
        }
      ],
      "discount": "14% OFF",
      "price": {
        "marked": {
          "min": 1399,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1199,
          "max": 1399,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "rating": 2.7,
      "rating_count": 2
    }
  ]
}
```
</details>









---


### getProductDetailBySlug
Get a product



```javascript
// Promise
const promise = catalog.getProductDetailBySlug({  slug : value });

// Async/Await
const data = await catalog.getProductDetailBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |  



Use this API to retrieve a product by its slug value.

*Returned Response:*




[ProductDetail](#ProductDetail)

Success. Returns a Product object. Check the example shown below or refer `ProductDetail` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "type": "product",
  "grouped_attributes": [
    {
      "title": "Alexander Sawyer",
      "details": [
        {
          "key": "Kimberly Davidson",
          "type": "text",
          "value": "DarkGrey"
        },
        {
          "key": "Kimberly Mcdaniel",
          "type": "text",
          "value": "Men,Women"
        },
        {
          "key": "Monica Hampton",
          "type": "text",
          "value": "Neoprene"
        },
        {
          "key": "John Mendoza",
          "type": "text",
          "value": "100 g"
        }
      ]
    }
  ],
  "medias": [
    {
      "type": "image",
      "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
    }
  ],
  "brand": {
    "name": "Barry, Jennings and Larson",
    "uid": 1,
    "logo": {
      "type": "image",
      "url": "https://hdn-1.fynd.com/media/logo/brand/original/12391_0d956c6c71a4427895c15e44cba82f88.jpg"
    },
    "action": {
      "page": {
        "type": "products",
        "query": {
          "brand": [
            "Hess-Inc"
          ]
        }
      },
      "type": "page"
    },
    "_custom_json": {}
  },
  "uid": 1,
  "slug": "benchmark-collaborative-paradigms",
  "attributes": {
    "color_hex": "808080",
    "weight": 100,
    "product_type": "LaptopBags",
    "gender": [
      "Men",
      "Women"
    ],
    "material": "Neoprene",
    "style_note": "Shape up your overall appeal with this stunning laptop bag. The amazing storage and great design will let you carry your laptop in style!",
    "item_code": "LGLAPTOPSLEEVE5",
    "occasion": "Casual",
    "primary_color": "Grey",
    "primary_material": "Others",
    "variant": "LGLAPTOPSLEEVE5",
    "color": "DarkGrey",
    "product_details": "This is a Unisex Product.",
    "primary_color_hex": "808080",
    "brand": "Barry, Jennings and Larson"
  },
  "name": "benchmark collaborative paradigms",
  "has_variant": true,
  "categories": [
    {
      "id": 3,
      "uid": 3,
      "name": "Amy Kim DDS",
      "logo": {
        "type": "image",
        "url": "https://hdn-1.fynd.com/media/banner_portrait/brand/original/540_ecba3a1af141467da8abc20500f983db.jpg"
      },
      "action": {
        "page": {
          "type": "category",
          "query": {
            "category": [
              "Amy-Kim-DDS"
            ]
          }
        },
        "type": "page"
      },
      "_custom_json": {}
    }
  ],
  "tryouts": [],
  "rating": 2.7,
  "rating_count": 2,
  "image_nature": "standard",
  "tags": [
    "Digital"
  ],
  "teaser_tag": {},
  "no_of_boxes": 1,
  "custom_order": {},
  "color": "808080",
  "similars": [
    "brand"
  ],
  "_custom_json": {},
  "is_dependent": false
}
```
</details>









---


### getProductPriceBySlug
Get the price of a product size at a PIN Code



```javascript
// Promise
const promise = catalog.getProductPriceBySlug({  slug : value,
 size : value,
 storeId : value,
 pincode : value,
 moq : value });

// Async/Await
const data = await catalog.getProductPriceBySlug({  slug : value,
 size : value,
 storeId : value,
 pincode : value,
 moq : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |   
| size | string | yes | A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes |    
| storeId | number | no | The ID of the store that is selling the product, e.g. 1,2,3. |    
| pincode | string | no | The PIN Code of the area near which the selling locations should be searched, e.g. 400059. |    
| moq | number | no | An Integer indication the Minimum Order Quantity of a product, e.g. 100. |  



Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.

*Returned Response:*




[ProductSizePriceResponseV3](#ProductSizePriceResponseV3)

Success. Returns a ProductSizePriceV3 object. Check the example shown below or refer `ProductSizePriceResponseV3` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "price_per_piece": {
    "effective": 66.5,
    "marked": 66.5,
    "currency_code": "INR",
    "currency_symbol": "₹"
  },
  "price": {
    "effective": 399,
    "marked": 399,
    "currency_code": "INR",
    "currency_symbol": "₹"
  },
  "quantity": 5,
  "pincode": 400603,
  "article_id": "1",
  "long_lat": [
    72.9159784,
    19.0990231
  ],
  "item_type": "set",
  "discount": "",
  "article_assignment": {
    "level": "multi-companies",
    "strategy": "optimal"
  },
  "seller": {
    "uid": 1,
    "name": "Natalie Norman"
  },
  "store": {
    "uid": 1,
    "name": "Wayne Lamb",
    "count": 2
  },
  "strategy_wise_listing": [
    {
      "distance": 11,
      "quantity": 5,
      "tat": 2592000,
      "pincode": 400603
    },
    {
      "distance": 11,
      "quantity": 5,
      "tat": 2592000,
      "pincode": 400603
    }
  ],
  "set": {
    "size_distribution": {
      "sizes": [
        {
          "size": "5",
          "pieces": 1
        },
        {
          "size": "7",
          "pieces": 1
        },
        {
          "size": "8",
          "pieces": 2
        },
        {
          "size": "9",
          "pieces": 1
        },
        {
          "size": "10",
          "pieces": 1
        }
      ]
    },
    "quantity": 6
  },
  "is_gift": true,
  "is_cod": false
}
```
</details>









---


### getProductSellersBySlug
Get the sellers of a product size at a PIN Code



```javascript
// Promise
const promise = catalog.getProductSellersBySlug({  slug : value,
 size : value,
 pincode : value,
 strategy : value,
 pageNo : value,
 pageSize : value });

// Async/Await
const data = await catalog.getProductSellersBySlug({  slug : value,
 size : value,
 pincode : value,
 strategy : value,
 pageNo : value,
 pageSize : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |   
| size | string | yes | A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes |    
| pincode | string | no | The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059 |    
| strategy | string | no | Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal. |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |  



A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.

*Returned Response:*




[ProductSizeSellersResponseV3](#ProductSizeSellersResponseV3)

Success. Returns a ProductSizeSellerV3 object. Check the example shown below or refer `ProductSizeSellersResponseV3` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "price_per_piece": {
        "effective": 66.5,
        "marked": 66.5,
        "currency_code": "INR",
        "currency_symbol": "₹"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency_code": "INR",
        "currency_symbol": "₹"
      },
      "quantity": 5,
      "pincode": 400603,
      "article_id": "1",
      "discount": "",
      "article_assignment": {
        "level": "single-company",
        "strategy": "optimal"
      },
      "seller": {
        "uid": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "uid": 1,
        "name": "Wayne Lamb"
      },
      "is_gift": true,
      "is_cod": false
    },
    {
      "price_per_piece": {
        "effective": 66.5,
        "marked": 66.5,
        "currency_code": "INR",
        "currency_symbol": "₹"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency_code": "INR",
        "currency_symbol": "₹"
      },
      "quantity": 5,
      "pincode": 400603,
      "article_id": "2",
      "discount": "",
      "article_assignment": {
        "level": "single-company",
        "strategy": "optimal"
      },
      "seller": {
        "uid": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "uid": 1,
        "name": "Wayne Lamb"
      },
      "is_gift": true,
      "is_cod": false
    }
  ],
  "page": {
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 2,
    "type": "number"
  },
  "sort_on": [
    {
      "default": true,
      "is_selected": true,
      "name": "Best price & fast delivery",
      "value": "optimal"
    },
    {
      "default": false,
      "is_selected": false,
      "name": "Best Price",
      "value": "low-price"
    },
    {
      "default": false,
      "is_selected": false,
      "name": "Fastest Delivery",
      "value": "fast-delivery"
    }
  ]
}
```
</details>









---


### getProductSizesBySlug
Get the sizes of a product



```javascript
// Promise
const promise = catalog.getProductSizesBySlug({  slug : value,
 storeId : value });

// Async/Await
const data = await catalog.getProductSizesBySlug({  slug : value,
 storeId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |    
| storeId | number | no | The ID of the store that is selling the product, e.g. 1,2,3. |  



A product can have multiple sizes. Use this API to fetch all the available sizes of a product.

*Returned Response:*




[ProductSizes](#ProductSizes)

Success. Returns a ProductSize object. Check the example shown below or refer `ProductSizes` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "sellable": true,
  "sizes": [
    {
      "display": "13",
      "value": "13",
      "quantity": 10,
      "seller_identifiers": [
        "123456789",
        "987654321"
      ],
      "is_available": true
    }
  ],
  "discount": "",
  "stores": {
    "count": 1
  },
  "size_chart": {},
  "price": {
    "marked": {
      "min": 66.5,
      "max": 66.5,
      "currency_code": "INR",
      "currency_symbol": "₹"
    },
    "effective": {
      "min": 66.5,
      "max": 66.5,
      "currency_code": "INR",
      "currency_symbol": "₹"
    }
  },
  "tags": [
    "Digital"
  ]
}
```
</details>









---


### getProductStockByIds
Get the stock of a product



```javascript
// Promise
const promise = catalog.getProductStockByIds({  itemId : value,
 alu : value,
 skuCode : value,
 ean : value,
 upc : value });

// Async/Await
const data = await catalog.getProductStockByIds({  itemId : value,
 alu : value,
 skuCode : value,
 ean : value,
 upc : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| itemId | string | no | The Item ID of the product (Max. 50 allowed) |    
| alu | string | no | ALU of the product (limited upto 50 ALU identifier in a single request) |    
| skuCode | string | no | Stock-keeping Unit of the product (limited upto 50 SKU Code in a single request) |    
| ean | string | no | European Article Number of the product (limited upto 50 EAN identifier in a single request) |    
| upc | string | no | Universal Product Code of the product (limited upto 50 UPC identifier in a single request) |  



Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.

*Returned Response:*




[ProductStockStatusResponse](#ProductStockStatusResponse)

Success. Returns the status of the product stock.Check the example shown below or refer `ProductStockStatusResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "items": [
    {
      "uid": "1",
      "item_id": 1,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "2",
      "item_id": 1,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "3",
      "item_id": 2,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "4",
      "item_id": 2,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "5",
      "item_id": 3,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "6",
      "item_id": 3,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "7",
      "item_id": 4,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "8",
      "item_id": 4,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "9",
      "item_id": 5,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "10",
      "item_id": 5,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "11",
      "item_id": 6,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "12",
      "item_id": 6,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "13",
      "item_id": 7,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "14",
      "item_id": 7,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "15",
      "item_id": 8,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "16",
      "item_id": 8,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "17",
      "item_id": 9,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "18",
      "item_id": 9,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "19",
      "item_id": 10,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "20",
      "item_id": 10,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "21",
      "item_id": 11,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "22",
      "item_id": 11,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "23",
      "item_id": 12,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "24",
      "item_id": 12,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "25",
      "item_id": 13,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "26",
      "item_id": 13,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "27",
      "item_id": 14,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "28",
      "item_id": 14,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "29",
      "item_id": 15,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    },
    {
      "uid": "30",
      "item_id": 15,
      "identifier": {
        "sku_code": "P10101101154425S"
      },
      "price": {
        "effective": 399,
        "marked": 399,
        "currency": "INR"
      },
      "size": "13",
      "company": {
        "id": 1,
        "name": "Natalie Norman"
      },
      "store": {
        "id": 1,
        "name": "Wayne Lamb",
        "code": "Wayne-Lamb"
      },
      "quantity": 5
    }
  ]
}
```
</details>









---


### getProductStockForTimeByIds
Get the stock of a product



```javascript
// Promise
const promise = catalog.getProductStockForTimeByIds({  timestamp : value,
 pageSize : value,
 pageId : value });

// Async/Await
const data = await catalog.getProductStockForTimeByIds({  timestamp : value,
 pageSize : value,
 pageId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| timestamp | string | yes | Timestamp in UTC format (2020-07-23T10:27:50Z) |    
| pageSize | number | no | The number of items to retrieve in each page. |    
| pageId | string | no | Page ID to retrieve next set of results. |  



Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time

*Returned Response:*




[ProductStockPolling](#ProductStockPolling)

Success. Returns the status of the product stock.Check the example shown below or refer `ProductStockPolling` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getProductVariantsBySlug
Get variant of a particular product



```javascript
// Promise
const promise = catalog.getProductVariantsBySlug({  slug : value });

// Async/Await
const data = await catalog.getProductVariantsBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |  



A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.

*Returned Response:*




[ProductVariantsResponse](#ProductVariantsResponse)

Success. Returns all variants of a product. Check the example shown below or refer `ProductVariantsResponse` for more details. For `display_type:image`, `color` key will be present otherwise `value` key will be shown.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "variants": [
    {
      "header": "Addtn. Color",
      "key": "color",
      "display_type": "image",
      "logo": "https://d2zv4gzhlr4ud6.cloudfront.net/media/pictures/tagged_items/360x0/56_MKT02AI060CORAL/1_1567590349681.jpg",
      "items": [
        {
          "action": {
            "page": {
              "type": "product",
              "query": {
                "slug": "benchmark-collaborative-paradigms"
              }
            },
            "type": "page"
          },
          "uid": 1,
          "slug": "benchmark-collaborative-paradigms",
          "medias": [
            {
              "type": "image",
              "url": "http://cdn4.gofynd.com/media/pictures/tagged_items/original/1309_LGLAPTOPSLEEVE5/1_1564735832806.jpg"
            }
          ],
          "name": "benchmark collaborative paradigms",
          "is_available": true,
          "color_name": "DarkGrey",
          "color": "808080"
        }
      ]
    }
  ]
}
```
</details>









---


### getProducts
Get all the products



```javascript
// Promise
const promise = catalog.getProducts({  q : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value });

// Async/Await
const data = await catalog.getProducts({  q : value,
 f : value,
 filters : value,
 sortOn : value,
 pageId : value,
 pageSize : value,
 pageNo : value,
 pageType : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| q | string | no | The search query for entering partial or full name of product, brand, category, or collection. |    
| f | string | no | The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (\|\|) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition. |    
| filters | boolean | no | This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters. |    
| sortOn | string | no | The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below. |    
| pageId | string | no | Page ID to retrieve next set of results. |    
| pageSize | number | no | The number of items to retrieve in each page. |    
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageType | string | no | Available pagination types are cursor or number. |  



Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.

*Returned Response:*




[ProductListingResponse](#ProductListingResponse)

Success. Returns a paginated list of products..Check the example shown below or refer `ProductListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "filters": [
    {
      "key": {
        "display": "Department",
        "name": "department",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/FiQP7BeJbz-Department.png"
      },
      "values": [
        {
          "display": "Fashion",
          "count": 2496,
          "is_selected": false,
          "value": "fashion",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/ziRuAA0EX-https/hdn-1.fynd.com/department/pictures/square-logo/original/jSt0jjI7D-https/hdn-1.fynd.com/department/pictures/square-logo/original/6ouiCBSSn-https/hdn-1.fynd.com/department/pictures/square-logo/original/o2Rti5if7-.jpeg.jpeg.jpeg.jpeg"
          }
        },
        {
          "display": "Mary-Vargas",
          "count": 15,
          "is_selected": false,
          "value": "Mary-Vargas"
        },
        {
          "display": "Michael-Davis",
          "count": 15,
          "is_selected": false,
          "value": "Michael-Davis"
        },
        {
          "display": "Toys & games",
          "count": 2,
          "is_selected": false,
          "value": "toys",
          "logo": {
            "type": "image",
            "url": "https://hdn-1.addsale.com/x0/department/pictures/square-logo/original/WU_YDGrIe-https/hdn-1.fynd.com/media/category_tab_icons/department/Toys.png.png"
          }
        }
      ]
    },
    {
      "key": {
        "display": "Category",
        "name": "category",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/YuQYSFD6Tu-Category.png"
      },
      "values": [
        {
          "display": "running-shoes",
          "count": 2495,
          "is_selected": false,
          "value": "running-shoes"
        },
        {
          "display": "Mr.-Robert-Wilson",
          "count": 15,
          "is_selected": false,
          "value": "Mr.-Robert-Wilson"
        },
        {
          "display": "action-figures",
          "count": 2,
          "is_selected": false,
          "value": "action-figures"
        },
        {
          "display": "hats",
          "count": 1,
          "is_selected": false,
          "value": "hats"
        }
      ]
    },
    {
      "key": {
        "display": "Size",
        "name": "sizes",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/M45tOYu45x-Sizes.png"
      },
      "values": [
        {
          "display": "11",
          "count": 1492,
          "is_selected": false,
          "value": "11"
        },
        {
          "display": "8",
          "count": 1003,
          "is_selected": false,
          "value": "8"
        },
        {
          "display": "13",
          "count": 15,
          "is_selected": false,
          "value": "13"
        },
        {
          "display": "FREE",
          "count": 2,
          "is_selected": false,
          "value": "FREE"
        },
        {
          "display": "OS",
          "count": 2,
          "is_selected": false,
          "value": "OS"
        },
        {
          "display": "R4",
          "count": 2,
          "is_selected": false,
          "value": "R4"
        },
        {
          "display": "10",
          "count": 1,
          "is_selected": false,
          "value": "10"
        },
        {
          "display": "9",
          "count": 1,
          "is_selected": false,
          "value": "9"
        }
      ]
    },
    {
      "key": {
        "display": "Brand",
        "name": "brand",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/m4SDdD279_-Min-price-effective.png"
      },
      "values": [
        {
          "display": "load-brand-1",
          "count": 1492,
          "is_selected": false,
          "value": "load-brand-1"
        },
        {
          "display": "caneworks",
          "count": 1002,
          "is_selected": false,
          "value": "caneworks"
        },
        {
          "display": "Mann-Morris",
          "count": 15,
          "is_selected": false,
          "value": "Mann-Morris"
        },
        {
          "display": "test",
          "count": 2,
          "is_selected": false,
          "value": "test"
        },
        {
          "display": "nexus",
          "count": 1,
          "is_selected": false,
          "value": "nexus"
        },
        {
          "display": "nike",
          "count": 1,
          "is_selected": false,
          "value": "nike"
        }
      ]
    },
    {
      "key": {
        "display": "Image",
        "name": "image_nature",
        "kind": "multivalued",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/JcGqgsW9FR-image-Nature.png"
      },
      "values": [
        {
          "display": "No Image",
          "count": 2479,
          "is_selected": false,
          "value": "default"
        },
        {
          "display": "Good Quality",
          "count": 34,
          "is_selected": false,
          "value": "standard"
        }
      ]
    },
    {
      "key": {
        "display": "Size Depth",
        "name": "size_depth",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/D6W3aAamqz-Size-Depth.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 1,
          "max": 4,
          "is_selected": false,
          "selected_min": 1,
          "selected_max": 4,
          "display_format": "{} - {}",
          "query_format": "[{} TO {}]",
          "display": "1 - 4"
        }
      ]
    },
    {
      "key": {
        "display": "Price",
        "name": "min_price_effective",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/m4SDdD279_-Min-price-effective.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 9,
          "max": 6789,
          "is_selected": false,
          "selected_min": 9.51,
          "selected_max": 6788.44,
          "display_format": "{} to {}",
          "currency_code": "INR",
          "currency_symbol": "₹",
          "query_format": "[{},INR TO {},INR]",
          "display": "₹9.51 to ₹6788.44"
        }
      ]
    },
    {
      "key": {
        "display": "Discount",
        "name": "discount",
        "kind": "range",
        "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/qsYhcYuntC-Platform-Discount.png"
      },
      "values": [
        {
          "count": 2513,
          "min": 0,
          "max": 83,
          "is_selected": false,
          "selected_min": 0,
          "selected_max": 83,
          "display_format": "{}% - {}%",
          "query_format": "[{} TO {}]",
          "display": "0% - 83%"
        }
      ]
    }
  ],
  "items": [
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "filtercollection": "test",
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 671",
      "slug": "shoes-671-gs7hedxv_w01",
      "moq": {
        "maximum": 5,
        "minimum": 1,
        "increment_unit": 1
      },
      "uid": 7501985,
      "item_code": "SHOE-671",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-671-gs7hedxv_w01"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 9000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 6000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-487-ciaqajcbvhxi"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501992,
              "slug": "shoes-487-ciaqajcbvhxi",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 487",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        },
        {
          "display_type": "text",
          "header": "RAM",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-1255-7_dtnnaaqay"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7503196,
              "slug": "shoes-1255-7_dtnnaaqay",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aM_8QuyQH-HP6YCHrbk7-484A0178.jpg",
                  "type": "image"
                }
              ],
              "name": "test1",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {
                "k a": [
                  "https://hdn-1.addsale.com/x0/misc/general/free/original/rnq4jjauz-Screenshot-2022-03-29-at-7.55.43-PM.png"
                ]
              },
              "color_name": "Red"
            },
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-413-yeskjstfl6va"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7502115,
              "slug": "shoes-413-yeskjstfl6va",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/uCrIUYgNs-Neemans-FieryRed-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/J87k8IiMW-nike-free-og-royal-blue-running-imported-sport-shoes-500x500.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/UHKXhrzCK-5_1_72f25caf-a641-402e-8f3a-c56604b7f602_765x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aUnsm8Z_T-sneaker-index-1587142381.jpg",
                  "type": "image"
                }
              ],
              "name": "Shoe 413 TEST2",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {}
            }
          ],
          "key": "ram",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "filtercollection": "test",
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 671",
      "slug": "shoes-671-gs7hedxv_w01",
      "uid": 7501985,
      "item_code": "SHOE-671",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-671-gs7hedxv_w01"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 9000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 6000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-487-ciaqajcbvhxi"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501992,
              "slug": "shoes-487-ciaqajcbvhxi",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 487",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        },
        {
          "display_type": "text",
          "header": "RAM",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-1255-7_dtnnaaqay"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7503196,
              "slug": "shoes-1255-7_dtnnaaqay",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aM_8QuyQH-HP6YCHrbk7-484A0178.jpg",
                  "type": "image"
                }
              ],
              "name": "test1",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {
                "k a": [
                  "https://hdn-1.addsale.com/x0/misc/general/free/original/rnq4jjauz-Screenshot-2022-03-29-at-7.55.43-PM.png"
                ]
              },
              "color_name": "Red"
            },
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-413-yeskjstfl6va"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7502115,
              "slug": "shoes-413-yeskjstfl6va",
              "value": null,
              "medias": [
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/uCrIUYgNs-Neemans-FieryRed-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/J87k8IiMW-nike-free-og-royal-blue-running-imported-sport-shoes-500x500.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/UHKXhrzCK-5_1_72f25caf-a641-402e-8f3a-c56604b7f602_765x.jpg",
                  "type": "image"
                },
                {
                  "url": "https://hdn-1.addsale.com/x0/products/pictures/item/free/original/aUnsm8Z_T-sneaker-index-1587142381.jpg",
                  "type": "image"
                }
              ],
              "name": "Shoe 413 TEST2",
              "is_available": false,
              "display_type": "text",
              "_custom_json": {}
            }
          ],
          "key": "ram",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100931",
      "slug": "load-shoes-100931-qnuugutshoec",
      "uid": 7522863,
      "item_code": "LS100931",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100931-qnuugutshoec"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 101490",
      "slug": "load-shoes-101490-0cgg_86ozi6s",
      "uid": 7523770,
      "item_code": "LS101490",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-101490-0cgg_86ozi6s"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 487",
      "slug": "shoes-487-ciaqajcbvhxi",
      "uid": 7501992,
      "item_code": "SHOE-487",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-487-ciaqajcbvhxi"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-671-gs7hedxv_w01"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501985,
              "slug": "shoes-671-gs7hedxv_w01",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 671",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 487",
      "slug": "shoes-487-ciaqajcbvhxi",
      "uid": 7501992,
      "item_code": "SHOE-487",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-487-ciaqajcbvhxi"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": [
        {
          "display_type": "image",
          "header": "Additional Colors",
          "items": [
            {
              "action": {
                "page": {
                  "type": "product",
                  "params": {
                    "slug": [
                      "shoes-671-gs7hedxv_w01"
                    ]
                  }
                },
                "type": "page"
              },
              "uid": 7501985,
              "slug": "shoes-671-gs7hedxv_w01",
              "color": "4A90E2",
              "medias": [
                {
                  "type": "image",
                  "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
                }
              ],
              "name": "Shoe 671",
              "is_available": false,
              "display_type": "image",
              "_custom_json": {}
            }
          ],
          "key": "color",
          "total": 2
        }
      ]
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100241",
      "slug": "load-shoes-100241-9ee51v8qxpz",
      "uid": 7523366,
      "item_code": "LS100241",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100241-9ee51v8qxpz"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100407",
      "slug": "load-shoes-100407-jcubbw5xz3wa",
      "uid": 7523709,
      "item_code": "LS100407",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100407-jcubbw5xz3wa"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Load Galli, Mumbai",
        "marketer-name": "Load Wala",
        "primary_color": null,
        "primary_material": "Fabric"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Load Shoes 100763",
      "slug": "load-shoes-100763-gse_mewuxfxv",
      "uid": 7523185,
      "item_code": "LS100763",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "Load Brand 1",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "load-brand-1"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "load-shoes-100763-gse_mewuxfxv"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "6% OFF",
      "price": {
        "marked": {
          "min": 5000,
          "max": 5000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 4699,
          "max": 4699,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 539",
      "slug": "shoes-539-dkkfadu66m1l",
      "uid": 7501643,
      "item_code": "SHOE-539",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-539-dkkfadu66m1l"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 348",
      "slug": "shoes-348-dcnhciie0v3",
      "uid": 7502012,
      "item_code": "SHOE-348",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-348-dcnhciie0v3"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    },
    {
      "type": "product",
      "attributes": {
        "primary_color_hex": null,
        "gender": "men",
        "marketer-address": "Andheri",
        "marketer-name": "Puma",
        "primary_color": null,
        "primary_material": "Cotton"
      },
      "categories": [],
      "_custom_meta": [],
      "sellable": true,
      "name": "Shoe 1048",
      "slug": "shoes-1048-piqk6-rwmts5",
      "uid": 7502307,
      "item_code": "SHOE-1048",
      "item_type": "standard",
      "brand": {
        "type": "brand",
        "name": "CaneWorks",
        "logo": {},
        "action": {
          "page": {
            "type": "products",
            "query": {
              "brand": [
                "caneworks"
              ]
            }
          },
          "type": "page"
        },
        "_custom_json": {}
      },
      "action": {
        "page": {
          "type": "product",
          "params": {
            "slug": [
              "shoes-1048-piqk6-rwmts5"
            ]
          }
        },
        "type": "page"
      },
      "medias": [
        {
          "type": "image",
          "url": "https://hdn-1.fynd.com/media/fynd_store_items/l2_category/original/2830_c5bb5fc02f414307a828c4c56483c30a.jpg"
        }
      ],
      "discount": "50% OFF",
      "price": {
        "marked": {
          "min": 2000,
          "max": 2000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        },
        "effective": {
          "min": 1000,
          "max": 1000,
          "currency_code": "INR",
          "currency_symbol": "₹"
        }
      },
      "is_tryout": false,
      "channel": "000000000000000000000001",
      "_custom_json": {},
      "country_of_origin": "India",
      "variants": []
    }
  ],
  "sort_on": [
    {
      "display": "Latest Products",
      "name": "Latest Products",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/QEvUfhsfyg-Latest-Products.png",
      "value": "latest",
      "is_selected": false
    },
    {
      "display": "Popularity",
      "name": "Popularity",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/iG82Qjay9X-Popularity.png",
      "value": "popular",
      "is_selected": true
    },
    {
      "display": "Price Low to High",
      "name": "Price Low to High",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/dLUtvNwoQt-Price-High-to-Low.png",
      "value": "price_asc",
      "is_selected": false
    },
    {
      "display": "Price High to Low",
      "name": "Price High to Low",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/dLUtvNwoQt-Price-High-to-Low.png",
      "value": "price_dsc",
      "is_selected": false
    },
    {
      "display": "Discount Low to High",
      "name": "Discount Low to High",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/9VdjDVc_aR-Discount-Low-to-High.png",
      "value": "discount_asc",
      "is_selected": false
    },
    {
      "display": "Discount High to Low",
      "name": "Discount High to Low",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/9VdjDVc_aR-Discount-Low-to-High.png",
      "value": "discount_dsc",
      "is_selected": false
    },
    {
      "display": "Rating",
      "name": "Rating",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/IyaIm4EZXI-Rating.png",
      "value": "rating_dsc",
      "is_selected": false
    },
    {
      "display": "Size Depth (High to Low)",
      "name": "Size Depth (High to Low)",
      "logo": "https://hdn-1.fynd.com/products/pictures/attribute/logo/original/hyWWrNJ1A--Size-Depth.png",
      "value": "depth_desc",
      "is_selected": false
    }
  ],
  "page": {
    "type": "cursor",
    "next_id": "AoIIRHjAAD8HMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIV9hbGxfITc1MDIzMDc=",
    "has_previous": false,
    "has_next": true,
    "item_total": 2513
  }
}
```
</details>









---


### getSearchResults
Get relevant suggestions for a search query



```javascript
// Promise
const promise = catalog.getSearchResults({  q : value });

// Async/Await
const data = await catalog.getSearchResults({  q : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| q | string | yes | The search query for entering partial or full name of a product, brand or category. For example, if the given search query `q` is _ski_, the relevant search suggestions could be _skirt_, _ski shoes_, __skin cream_ etc. |  



Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.

*Returned Response:*




[AutoCompleteResponse](#AutoCompleteResponse)

Success. Returns a list autocomplete suggestions for the search query `q`. Check the example shown below or refer `AutoCompleteResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getSimilarComparisonProductBySlug
Get comparison between similar products



```javascript
// Promise
const promise = catalog.getSimilarComparisonProductBySlug({  slug : value });

// Async/Await
const data = await catalog.getSimilarComparisonProductBySlug({  slug : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| slug | string | yes | A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/ |  



Use this API to compare a given product automatically with similar products. Only one slug is needed.

*Returned Response:*




[ProductCompareResponse](#ProductCompareResponse)

Success. Returns an array of objects containing the attributes for comparision. Check the example shown below or refer `ProductCompareResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json

```
</details>









---


### getStores
Get store meta information.



```javascript
// Promise
const promise = catalog.getStores({  pageNo : value,
 pageSize : value,
 q : value,
 city : value,
 range : value,
 latitude : value,
 longitude : value });

// Async/Await
const data = await catalog.getStores({  pageNo : value,
 pageSize : value,
 q : value,
 city : value,
 range : value,
 latitude : value,
 longitude : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- |  
| pageNo | number | no | The page number to navigate through the given set of results. |    
| pageSize | number | no | Number of items to retrieve in each page. |    
| q | string | no | Search a store by its name or store_code. |    
| city | string | no | Search stores by the city in which they are situated. |    
| range | number | no | Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range |    
| latitude | number | no | Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788 |    
| longitude | number | no | Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114 |  



Use this API to get a list of stores in a specific application.

*Returned Response:*




[StoreListingResponse](#StoreListingResponse)

Success. Returns a list of selling locations. Check the example shown below or refer `StoreListingResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "page": {
    "type": "number",
    "current": 1,
    "total": 1,
    "has_previous": false,
    "has_next": false,
    "item_total": 1
  },
  "data": [
    {
      "pincode": 400059,
      "city": "MUMBAI",
      "state": "MAHARASHTRA",
      "country": "INDIA",
      "address": "SHOPSENSE RETAIL TECHNOLOGIES PRIVATE LIMITED 1ST FLOOR WEWORK VIJAY DIAMOND, CROSS RD B, AJIT NAGAR,",
      "store_email": "ASHISHCHANDORKAR@FYND.COM",
      "lat_long": {
        "type": "Point",
        "coordinates": [
          72.8691788,
          19.1174114
        ]
      },
      "name": "RRL01",
      "store_code": "WH_8513",
      "uid": 1
    }
  ]
}
```
</details>









---


### unfollowById
Unfollow an entity (product/brand/collection)



```javascript
// Promise
const promise = catalog.unfollowById({  collectionType : value,
 collectionId : value });

// Async/Await
const data = await catalog.unfollowById({  collectionType : value,
 collectionId : value });
```





| Argument  |  Type  | Required | Description |
| --------- | -----  | -------- | ----------- | 
| collectionType | string | yes | Type of collection followed, i.e. products, brands, or collections. |   
| collectionId | string | yes | The ID of the collection type. |  



You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.

*Returned Response:*




[FollowPostResponse](#FollowPostResponse)

Success. Returns a response object. Check the example shown below or refer `FollowPostResponse` for more details.




<details>
<summary><i>&nbsp; Example:</i></summary>

```json
{
  "message": "Products Removed From Wishlist",
  "id": "1"
}
```
</details>









---



### Schemas


#### [ApplicationItemMOQ](#ApplicationItemMOQ)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | increment_unit | number |  no  |  |
 | maximum | number |  no  |  |
 | minimum | number |  no  |  |
 

---

#### [ApplicationItemSEO](#ApplicationItemSEO)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | any |  no  |  |
 | title | any |  no  |  |
 

---

#### [ApplicationStoreListing](#ApplicationStoreListing)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[StoreDepartments](#StoreDepartments)] |  no  |  |
 | items | [[AppStore](#AppStore)] |  no  |  |
 | page | [Page](#Page) |  no  |  |
 

---

#### [AppStore](#AppStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | [StoreAddressSerializer](#StoreAddressSerializer) |  no  |  |
 | company | [CompanyStore](#CompanyStore) |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | departments | [[StoreDepartments](#StoreDepartments)] |  no  |  |
 | manager | [StoreManagerSerializer](#StoreManagerSerializer) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [ArticleAssignmentV3](#ArticleAssignmentV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | level | string |  no  |  |
 | strategy | string |  no  |  |
 

---

#### [AttributeDetail](#AttributeDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | display | string |  no  |  |
 | key | string |  no  |  |
 | logo | string |  no  |  |
 

---

#### [AttributeMetadata](#AttributeMetadata)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [[AttributeDetail](#AttributeDetail)] |  no  |  |
 | title | string |  no  |  |
 

---

#### [AutocompleteItem](#AutocompleteItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | display | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | type | string |  no  |  |
 

---

#### [AutoCompleteResponse](#AutoCompleteResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[AutocompleteItem](#AutocompleteItem)] |  no  |  |
 

---

#### [BrandDetailResponse](#BrandDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | description | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [BrandItem](#BrandItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | departments | [string] |  no  |  |
 | description | string |  no  |  |
 | discount | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [BrandListingResponse](#BrandListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[BrandItem](#BrandItem)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [CategoryBanner](#CategoryBanner)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landscape | [Media](#Media) |  yes  |  |
 | portrait | [Media](#Media) |  yes  |  |
 

---

#### [CategoryItems](#CategoryItems)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [ProductListingAction](#ProductListingAction) |  yes  |  |
 | banners | [CategoryBanner](#CategoryBanner) |  yes  |  |
 | childs | [[Child](#Child)] |  no  |  |
 | name | string |  yes  |  |
 | slug | string |  yes  |  |
 | uid | number |  yes  |  |
 

---

#### [CategoryListingResponse](#CategoryListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [[DepartmentCategoryTree](#DepartmentCategoryTree)] |  no  |  |
 | departments | [[DepartmentIdentifier](#DepartmentIdentifier)] |  no  |  |
 

---

#### [CategoryMetaResponse](#CategoryMetaResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Child](#Child)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | childs | [[SecondLevelChild](#SecondLevelChild)] |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [CollectionDetailResponse](#CollectionDetailResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _schedule | string |  no  |  |
 | allow_facets | boolean |  no  |  |
 | allow_sort | boolean |  no  |  |
 | app_id | string |  no  |  |
 | badge | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | cron | string |  no  |  |
 | description | string |  no  |  |
 | is_active | boolean |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | meta | string |  no  |  |
 | name | string |  no  |  |
 | priority | number |  no  |  |
 | query | [[CollectionQuery](#CollectionQuery)] |  no  |  |
 | slug | string |  no  |  |
 | sort_on | string |  no  |  |
 | tag | [string] |  no  |  |
 | type | string |  no  |  |
 | visible_facets_keys | [string] |  no  |  |
 

---

#### [CollectionListingFilter](#CollectionListingFilter)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | tags | [[CollectionListingFilterTag](#CollectionListingFilterTag)] |  no  |  |
 | type | [[CollectionListingFilterType](#CollectionListingFilterType)] |  no  |  |
 

---

#### [CollectionListingFilterTag](#CollectionListingFilterTag)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | is_selected | boolean |  no  |  |
 | name | string |  no  |  |
 

---

#### [CollectionListingFilterType](#CollectionListingFilterType)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  no  |  |
 | is_selected | boolean |  no  |  |
 | name | string |  no  |  |
 

---

#### [CollectionQuery](#CollectionQuery)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attribute | string |  yes  |  |
 | op | string |  yes  |  |
 | value | [any] |  yes  |  |
 

---

#### [ColumnHeader](#ColumnHeader)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | convertable | boolean |  no  |  |
 | value | string |  no  |  |
 

---

#### [ColumnHeaders](#ColumnHeaders)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | col_1 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_2 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_3 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_4 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_5 | [ColumnHeader](#ColumnHeader) |  no  |  |
 | col_6 | [ColumnHeader](#ColumnHeader) |  no  |  |
 

---

#### [CompanyDetail](#CompanyDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | number |  no  |  |
 | name | string |  no  |  |
 

---

#### [CompanyStore](#CompanyStore)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | business_type | string |  no  |  |
 | company_type | string |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [CustomMetaFields](#CustomMetaFields)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  yes  |  |
 | value | string |  yes  |  |
 

---

#### [Department](#Department)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | [Media](#Media) |  no  |  |
 | name | string |  no  |  |
 | priority_order | number |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [DepartmentCategoryTree](#DepartmentCategoryTree)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | department | string |  yes  |  |
 | items | [[CategoryItems](#CategoryItems)] |  no  |  |
 

---

#### [DepartmentIdentifier](#DepartmentIdentifier)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [DepartmentResponse](#DepartmentResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Department](#Department)] |  no  |  |
 

---

#### [DetailsSchemaV3](#DetailsSchemaV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [Dimension](#Dimension)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | height | number |  yes  |  |
 | is_default | boolean |  yes  |  |
 | length | number |  yes  |  |
 | unit | string |  yes  |  |
 | width | number |  yes  |  |
 

---

#### [ErrorResponse](#ErrorResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | error | string |  no  |  |
 

---

#### [FollowerCountResponse](#FollowerCountResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 

---

#### [FollowIdsData](#FollowIdsData)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | brands | [number] |  no  |  |
 | collections | [number] |  no  |  |
 | products | [number] |  no  |  |
 

---

#### [FollowIdsResponse](#FollowIdsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | data | [FollowIdsData](#FollowIdsData) |  no  |  |
 

---

#### [FollowPostResponse](#FollowPostResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | id | string |  yes  |  |
 | message | string |  yes  |  |
 

---

#### [GetCollectionDetailNest](#GetCollectionDetailNest)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _schedule | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | allow_facets | boolean |  no  |  |
 | allow_sort | boolean |  no  |  |
 | app_id | string |  no  |  |
 | badge | string |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | cron | string |  no  |  |
 | description | string |  no  |  |
 | is_active | boolean |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | meta | string |  no  |  |
 | name | string |  no  |  |
 | priority | number |  no  |  |
 | query | [[CollectionQuery](#CollectionQuery)] |  no  |  |
 | slug | string |  no  |  |
 | sort_on | string |  no  |  |
 | tag | [string] |  no  |  |
 | type | string |  no  |  |
 | uid | string |  no  |  |
 | visible_facets_keys | [string] |  no  |  |
 

---

#### [GetCollectionListingResponse](#GetCollectionListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [CollectionListingFilter](#CollectionListingFilter) |  no  |  |
 | items | [[GetCollectionDetailNest](#GetCollectionDetailNest)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [GetFollowListingResponse](#GetFollowListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [HomeListingResponse](#HomeListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  |
 | message | string |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [ImageUrls](#ImageUrls)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | landscape | [Media](#Media) |  no  |  |
 | portrait | [Media](#Media) |  no  |  |
 

---

#### [LatLong](#LatLong)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | coordinates | [number] |  no  |  |
 | type | string |  no  |  |
 

---

#### [MarketPlaceSttributesSchemaV3](#MarketPlaceSttributesSchemaV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [[DetailsSchemaV3](#DetailsSchemaV3)] |  no  |  |
 | title | string |  no  |  |
 

---

#### [Media](#Media)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | alt | string |  no  |  |
 | meta | [Meta](#Meta) |  no  |  |
 | type | string |  no  |  |
 | url | string |  no  |  |
 

---

#### [Meta](#Meta)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | source | string |  no  |  |
 

---

#### [NetQuantity](#NetQuantity)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | unit | any |  no  |  |
 | value | number |  no  |  |
 

---

#### [Page](#Page)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | current | number |  no  |  |
 | has_next | boolean |  no  |  |
 | has_previous | boolean |  no  |  |
 | item_total | number |  no  |  |
 | next_id | string |  no  |  |
 | size | number |  no  |  |
 | type | string |  yes  |  |
 

---

#### [Price](#Price)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | max | number |  no  |  |
 | min | number |  no  |  |
 

---

#### [ProductBrand](#ProductBrand)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | description | string |  no  |  |
 | logo | [Media](#Media) |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [ProductBundle](#ProductBundle)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductGroupingModel](#ProductGroupingModel)] |  no  |  |
 

---

#### [ProductCategoryMap](#ProductCategoryMap)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | l1 | [ProductBrand](#ProductBrand) |  no  |  |
 | l2 | [ProductBrand](#ProductBrand) |  no  |  |
 | l3 | [ProductBrand](#ProductBrand) |  no  |  |
 

---

#### [ProductCompareResponse](#ProductCompareResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes_metadata | [[AttributeMetadata](#AttributeMetadata)] |  no  |  |
 | items | [[ProductDetail](#ProductDetail)] |  no  |  |
 | subtitle | string |  no  |  |
 | title | string |  no  |  |
 

---

#### [ProductDetail](#ProductDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _custom_meta | [[CustomMetaFields](#CustomMetaFields)] |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | attributes | string |  no  |  |
 | brand | [ProductBrand](#ProductBrand) |  no  |  |
 | categories | [[ProductBrand](#ProductBrand)] |  no  |  |
 | category_map | [ProductCategoryMap](#ProductCategoryMap) |  no  |  |
 | color | string |  no  |  |
 | description | string |  no  |  |
 | discount | string |  no  |  |
 | grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  |
 | has_variant | boolean |  no  |  |
 | highlights | [string] |  no  |  |
 | image_nature | string |  no  |  |
 | is_dependent | boolean |  no  |  |
 | item_code | string |  no  |  |
 | item_type | string |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |
 | moq | [ApplicationItemMOQ](#ApplicationItemMOQ) |  no  |  |
 | name | string |  no  |  |
 | net_quantity | [NetQuantity](#NetQuantity) |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |
 | product_online_date | string |  no  |  |
 | rating | number |  no  |  |
 | rating_count | number |  no  |  |
 | seo | [ApplicationItemSEO](#ApplicationItemSEO) |  no  |  |
 | short_description | string |  no  |  |
 | similars | [string] |  no  |  |
 | slug | string |  yes  |  |
 | tags | [string] |  no  |  |
 | teaser_tag | string |  no  |  |
 | tryouts | [string] |  no  |  |
 | type | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [ProductDetailAttribute](#ProductDetailAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | string |  no  |  |
 | type | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [[ProductDetailAttribute](#ProductDetailAttribute)] |  no  |  |
 | title | string |  no  |  |
 

---

#### [ProductDetails](#ProductDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes | string |  no  |  |
 | brand_uid | number |  no  |  |
 | country_of_origin | any |  no  |  |
 | description | any |  no  |  |
 | grouped_attributes | string |  no  |  |
 | has_variant | boolean |  no  |  |
 | highlights | [any] |  no  |  |
 | hsn_code | number |  no  |  |
 | identifier | string |  no  |  |
 | image_nature | any |  no  |  |
 | images | [any] |  no  |  |
 | is_set | boolean |  no  |  |
 | item_code | any |  no  |  |
 | media | [string] |  no  |  |
 | name | any |  no  |  |
 | out_of_stock | boolean |  no  |  |
 | rating | number |  no  |  |
 | rating_count | number |  no  |  |
 | short_description | any |  no  |  |
 | slug | any |  no  |  |
 | template_tag | any |  no  |  |
 

---

#### [ProductFilters](#ProductFilters)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | key | [ProductFiltersKey](#ProductFiltersKey) |  yes  |  |
 | values | [[ProductFiltersValue](#ProductFiltersValue)] |  yes  |  |
 

---

#### [ProductFiltersKey](#ProductFiltersKey)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | string |  yes  |  |
 | kind | string |  no  |  |
 | logo | string |  no  |  |
 | name | string |  yes  |  |
 

---

#### [ProductFiltersValue](#ProductFiltersValue)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | currency_code | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | display | string |  yes  |  |
 | display_format | string |  no  |  |
 | is_selected | boolean |  yes  |  |
 | max | number |  no  |  |
 | min | number |  no  |  |
 | query_format | string |  no  |  |
 | selected_max | number |  no  |  |
 | selected_min | number |  no  |  |
 | value | string |  no  |  |
 

---

#### [ProductFrequentlyComparedSimilarResponse](#ProductFrequentlyComparedSimilarResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | similars | [ProductCompareResponse](#ProductCompareResponse) |  no  |  |
 

---

#### [ProductGroupingModel](#ProductGroupingModel)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _id | any |  no  |  |
 | choice | any |  no  |  |
 | company_id | number |  no  |  |
 | created_by | [UserDetail](#UserDetail) |  no  |  |
 | created_on | string |  yes  |  |
 | is_active | boolean |  no  |  |
 | logo | string |  no  |  |
 | meta | string |  no  |  |
 | modified_by | [UserDetail](#UserDetail) |  no  |  |
 | modified_on | string |  yes  |  |
 | name | any |  yes  |  |
 | page_visibility | [any] |  no  |  |
 | products | [[ProductInGroup](#ProductInGroup)] |  yes  |  |
 | same_store_assignment | boolean |  no  |  |
 | slug | any |  no  |  |
 | verified_by | [UserDetail](#UserDetail) |  no  |  |
 | verified_on | string |  no  |  |
 

---

#### [ProductGroupPrice](#ProductGroupPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | any |  no  |  |
 | max_effective | number |  no  |  |
 | max_marked | number |  no  |  |
 | min_effective | number |  no  |  |
 | min_marked | number |  no  |  |
 

---

#### [ProductInGroup](#ProductInGroup)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | allow_remove | boolean |  no  |  |
 | auto_add_to_cart | boolean |  no  |  |
 | auto_select | boolean |  no  |  |
 | max_quantity | number |  yes  |  |
 | min_quantity | number |  no  |  |
 | price | [ProductGroupPrice](#ProductGroupPrice) |  no  |  |
 | product_details | [ProductDetails](#ProductDetails) |  no  |  |
 | product_uid | number |  yes  |  |
 | sizes | [[Size](#Size)] |  no  |  |
 

---

#### [ProductListingAction](#ProductListingAction)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | page | [ProductListingActionPage](#ProductListingActionPage) |  no  |  |
 | type | string |  no  |  |
 

---

#### [ProductListingActionPage](#ProductListingActionPage)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | params | string |  no  |  |
 | query | string |  no  |  |
 | type | string |  no  |  |
 

---

#### [ProductListingDetail](#ProductListingDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | _custom_meta | [[CustomMetaFields](#CustomMetaFields)] |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | attributes | string |  no  |  |
 | brand | [ProductBrand](#ProductBrand) |  no  |  |
 | categories | [[ProductBrand](#ProductBrand)] |  no  |  |
 | category_map | [ProductCategoryMap](#ProductCategoryMap) |  no  |  |
 | color | string |  no  |  |
 | description | string |  no  |  |
 | discount | string |  no  |  |
 | grouped_attributes | [[ProductDetailGroupedAttribute](#ProductDetailGroupedAttribute)] |  no  |  |
 | has_variant | boolean |  no  |  |
 | highlights | [string] |  no  |  |
 | identifiers | [string] |  no  |  |
 | image_nature | string |  no  |  |
 | is_dependent | boolean |  no  |  |
 | item_code | string |  no  |  |
 | item_type | string |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |
 | moq | [ApplicationItemMOQ](#ApplicationItemMOQ) |  no  |  |
 | name | string |  no  |  |
 | net_quantity | [NetQuantity](#NetQuantity) |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |
 | product_online_date | string |  no  |  |
 | rating | number |  no  |  |
 | rating_count | number |  no  |  |
 | sellable | boolean |  no  |  |
 | seo | [ApplicationItemSEO](#ApplicationItemSEO) |  no  |  |
 | short_description | string |  no  |  |
 | similars | [string] |  no  |  |
 | sizes | [string] |  no  |  |
 | slug | string |  yes  |  |
 | tags | [string] |  no  |  |
 | teaser_tag | string |  no  |  |
 | tryouts | [string] |  no  |  |
 | type | string |  no  |  |
 | uid | number |  no  |  |
 | variants | [[ProductVariantListingResponse](#ProductVariantListingResponse)] |  no  |  |
 

---

#### [ProductListingPrice](#ProductListingPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | effective | [Price](#Price) |  no  |  |
 | marked | [Price](#Price) |  no  |  |
 

---

#### [ProductListingResponse](#ProductListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | filters | [[ProductFilters](#ProductFilters)] |  no  |  |
 | items | [[ProductListingDetail](#ProductListingDetail)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 | sort_on | [[ProductSortOn](#ProductSortOn)] |  no  |  |
 

---

#### [ProductsComparisonResponse](#ProductsComparisonResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | attributes_metadata | [[AttributeMetadata](#AttributeMetadata)] |  no  |  |
 | items | [[ProductDetail](#ProductDetail)] |  no  |  |
 

---

#### [ProductSetDistributionSizeV3](#ProductSetDistributionSizeV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | pieces | number |  no  |  |
 | size | string |  no  |  |
 

---

#### [ProductSetDistributionV3](#ProductSetDistributionV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | sizes | [[ProductSetDistributionSizeV3](#ProductSetDistributionSizeV3)] |  no  |  |
 

---

#### [ProductSetV3](#ProductSetV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | quantity | number |  no  |  |
 | size_distribution | [ProductSetDistributionV3](#ProductSetDistributionV3) |  no  |  |
 

---

#### [ProductSize](#ProductSize)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | dimension | [Dimension](#Dimension) |  no  |  |
 | display | string |  no  |  |
 | is_available | boolean |  no  |  |
 | quantity | number |  no  |  |
 | seller_identifiers | [string] |  no  |  |
 | value | string |  no  |  |
 | weight | [Weight](#Weight) |  no  |  |
 

---

#### [ProductSizePriceResponseV3](#ProductSizePriceResponseV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | article_assignment | [ArticleAssignmentV3](#ArticleAssignmentV3) |  no  |  |
 | article_id | string |  no  |  |
 | discount | string |  no  |  |
 | grouped_attributes | [[SellerGroupAttributes](#SellerGroupAttributes)] |  no  |  |
 | is_cod | boolean |  no  |  |
 | is_gift | boolean |  no  |  |
 | item_type | string |  no  |  |
 | long_lat | [number] |  no  |  |
 | marketplace_attributes | [[MarketPlaceSttributesSchemaV3](#MarketPlaceSttributesSchemaV3)] |  no  |  |
 | pincode | number |  no  |  |
 | price | [ProductStockPriceV3](#ProductStockPriceV3) |  no  |  |
 | price_per_piece | [ProductStockPriceV3](#ProductStockPriceV3) |  no  |  |
 | price_per_unit | [ProductStockUnitPriceV3](#ProductStockUnitPriceV3) |  no  |  |
 | quantity | number |  no  |  |
 | return_config | [ReturnConfigSchemaV3](#ReturnConfigSchemaV3) |  no  |  |
 | seller | [SellerV3](#SellerV3) |  no  |  |
 | seller_count | number |  no  |  |
 | set | [ProductSetV3](#ProductSetV3) |  no  |  |
 | special_badge | string |  no  |  |
 | store | [StoreV3](#StoreV3) |  no  |  |
 | strategy_wise_listing | [[StrategyWiseListingSchemaV3](#StrategyWiseListingSchemaV3)] |  no  |  |
 

---

#### [ProductSizes](#ProductSizes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | discount | string |  no  |  |
 | multi_size | boolean |  no  |  |
 | price | [ProductListingPrice](#ProductListingPrice) |  no  |  |
 | sellable | boolean |  no  |  |
 | size_chart | [SizeChart](#SizeChart) |  no  |  |
 | sizes | [[ProductSize](#ProductSize)] |  no  |  |
 | stores | [ProductSizeStores](#ProductSizeStores) |  no  |  |
 

---

#### [ProductSizeSellerFilterSchemaV3](#ProductSizeSellerFilterSchemaV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_selected | boolean |  no  |  |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ProductSizeSellersResponseV3](#ProductSizeSellersResponseV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductSizePriceResponseV3](#ProductSizePriceResponseV3)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 | sort_on | [[ProductSizeSellerFilterSchemaV3](#ProductSizeSellerFilterSchemaV3)] |  no  |  |
 

---

#### [ProductSizeStores](#ProductSizeStores)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 

---

#### [ProductSortOn](#ProductSortOn)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_selected | boolean |  no  |  |
 | name | string |  no  |  |
 | value | string |  no  |  |
 

---

#### [ProductStockPolling](#ProductStockPolling)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductStockStatusItem](#ProductStockStatusItem)] |  no  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [ProductStockPrice](#ProductStockPrice)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  |  |
 | effective | number |  no  |  |
 | marked | number |  no  |  |
 

---

#### [ProductStockPriceV3](#ProductStockPriceV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency | string |  no  |  |
 | effective | number |  no  |  |
 | marked | number |  no  |  |
 

---

#### [ProductStockStatusItem](#ProductStockStatusItem)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | company | [CompanyDetail](#CompanyDetail) |  no  |  |
 | identifier | string |  no  |  |
 | item_id | number |  no  |  |
 | price | [ProductStockPrice](#ProductStockPrice) |  no  |  |
 | quantity | number |  no  |  |
 | seller | [Seller](#Seller) |  no  |  |
 | size | string |  no  |  |
 | store | [StoreDetail](#StoreDetail) |  no  |  |
 | uid | string |  no  |  |
 

---

#### [ProductStockStatusResponse](#ProductStockStatusResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[ProductStockStatusItem](#ProductStockStatusItem)] |  no  |  |
 

---

#### [ProductStockUnitPriceV3](#ProductStockUnitPriceV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | currency_code | string |  no  |  |
 | currency_symbol | string |  no  |  |
 | price | number |  no  |  |
 | unit | string |  no  |  |
 

---

#### [ProductVariantItemResponse](#ProductVariantItemResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_meta | [[CustomMetaFields](#CustomMetaFields)] |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | color | string |  no  |  |
 | color_name | string |  no  |  |
 | is_available | boolean |  no  |  |
 | medias | [[Media](#Media)] |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 | value | string |  no  |  |
 

---

#### [ProductVariantListingResponse](#ProductVariantListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_type | string |  no  |  |
 | header | string |  no  |  |
 | items | [[ProductVariantItemResponse](#ProductVariantItemResponse)] |  no  |  |
 | key | string |  no  |  |
 | total | number |  no  |  |
 

---

#### [ProductVariantResponse](#ProductVariantResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display_type | string |  no  |  |
 | header | string |  no  |  |
 | items | [[ProductVariantItemResponse](#ProductVariantItemResponse)] |  no  |  |
 | key | string |  no  |  |
 

---

#### [ProductVariantsResponse](#ProductVariantsResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | variants | [[ProductVariantResponse](#ProductVariantResponse)] |  no  |  |
 

---

#### [ReturnConfigSchemaV3](#ReturnConfigSchemaV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | returnable | boolean |  no  |  |
 | time | number |  no  |  |
 | unit | string |  no  |  |
 

---

#### [SecondLevelChild](#SecondLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | childs | [[ThirdLevelChild](#ThirdLevelChild)] |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Seller](#Seller)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [SellerGroupAttributes](#SellerGroupAttributes)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | details | [[DetailsSchemaV3](#DetailsSchemaV3)] |  no  |  |
 | title | string |  no  |  |
 

---

#### [SellerPhoneNumber](#SellerPhoneNumber)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | country_code | number |  yes  |  |
 | number | string |  yes  |  |
 

---

#### [SellerV3](#SellerV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Size](#Size)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | display | any |  no  |  |
 | is_available | boolean |  no  |  |
 | quantity | number |  no  |  |
 | value | any |  no  |  |
 

---

#### [SizeChart](#SizeChart)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | description | string |  no  |  |
 | headers | [ColumnHeaders](#ColumnHeaders) |  no  |  |
 | image | string |  no  |  |
 | size_tip | string |  no  |  |
 | sizes | [[SizeChartValues](#SizeChartValues)] |  no  |  |
 | title | string |  no  |  |
 | unit | string |  no  |  |
 

---

#### [SizeChartValues](#SizeChartValues)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | col_1 | string |  no  |  |
 | col_2 | string |  no  |  |
 | col_3 | string |  no  |  |
 | col_4 | string |  no  |  |
 | col_5 | string |  no  |  |
 | col_6 | string |  no  |  |
 

---

#### [Store](#Store)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | lat_long | [LatLong](#LatLong) |  no  |  |
 | name | string |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 | store_code | string |  no  |  |
 | store_email | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [StoreAddressSerializer](#StoreAddressSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | address1 | string |  no  |  |
 | address2 | string |  no  |  |
 | city | string |  no  |  |
 | country | string |  no  |  |
 | landmark | string |  no  |  |
 | latitude | number |  no  |  |
 | longitude | number |  no  |  |
 | pincode | number |  no  |  |
 | state | string |  no  |  |
 

---

#### [StoreDepartments](#StoreDepartments)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | logo | string |  no  |  |
 | name | string |  no  |  |
 | priority_order | number |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [StoreDetail](#StoreDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | city | string |  no  |  |
 | code | string |  no  |  |
 | id | number |  no  |  |
 | name | string |  no  |  |
 

---

#### [StoreDetails](#StoreDetails)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | address | [StoreAddressSerializer](#StoreAddressSerializer) |  no  |  |
 | company | [CompanyStore](#CompanyStore) |  no  |  |
 | contact_numbers | [[SellerPhoneNumber](#SellerPhoneNumber)] |  no  |  |
 | departments | [[StoreDepartments](#StoreDepartments)] |  no  |  |
 | manager | [StoreManagerSerializer](#StoreManagerSerializer) |  no  |  |
 | name | string |  no  |  |
 | timing | [[StoreTiming](#StoreTiming)] |  no  |  |
 | uid | number |  no  |  |
 

---

#### [StoreListingResponse](#StoreListingResponse)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | items | [[Store](#Store)] |  yes  |  |
 | page | [Page](#Page) |  yes  |  |
 

---

#### [StoreManagerSerializer](#StoreManagerSerializer)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | email | string |  no  |  |
 | mobile_no | [SellerPhoneNumber](#SellerPhoneNumber) |  no  |  |
 | name | string |  no  |  |
 

---

#### [StoreTiming](#StoreTiming)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | closing | [Time](#Time) |  no  |  |
 | open | boolean |  no  |  |
 | opening | [Time](#Time) |  no  |  |
 | weekday | string |  no  |  |
 

---

#### [StoreV3](#StoreV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | count | number |  no  |  |
 | name | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [StrategyWiseListingSchemaV3](#StrategyWiseListingSchemaV3)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | distance | number |  no  |  |
 | pincode | number |  no  |  |
 | quantity | number |  no  |  |
 | tat | number |  no  |  |
 

---

#### [ThirdLevelChild](#ThirdLevelChild)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | _custom_json | string |  no  |  |
 | action | [ProductListingAction](#ProductListingAction) |  no  |  |
 | banners | [ImageUrls](#ImageUrls) |  no  |  |
 | childs | [string] |  no  |  |
 | name | string |  no  |  |
 | slug | string |  no  |  |
 | uid | number |  no  |  |
 

---

#### [Time](#Time)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | hour | number |  no  |  |
 | minute | number |  no  |  |
 

---

#### [UserDetail](#UserDetail)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | contact | string |  no  |  |
 | super_user | boolean |  no  |  |
 | user_id | string |  yes  |  |
 | username | string |  yes  |  |
 

---

#### [Weight](#Weight)

 | Properties | Type | Nullable | Description |
 | ---------- | ---- | -------- | ----------- |
 | is_default | boolean |  yes  |  |
 | shipping | number |  yes  |  |
 | unit | string |  yes  |  |
 

---




