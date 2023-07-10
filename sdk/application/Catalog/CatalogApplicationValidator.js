const Joi = require("joi");

const CatalogModel = require("./CatalogApplicationModel");
class CatalogValidator {
  static followById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static getBrandDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      department: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    });
  }

  static getCategories() {
    return Joi.object({
      department: Joi.string().allow(""),
    });
  }

  static getCategoryDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCollectionDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCollectionItemsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      f: Joi.string().allow(""),
      q: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
    }).required();
  }

  static getCollections() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      tag: Joi.array().items(Joi.string().allow("")),
      q: Joi.string().allow(""),
    });
  }

  static getComparedFrequentlyProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getDepartments() {
    return Joi.object({});
  }

  static getFollowIds() {
    return Joi.object({
      collectionType: Joi.string().allow(""),
    });
  }

  static getFollowedListing() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    }).required();
  }

  static getFollowerCountById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }

  static getHomeProducts() {
    return Joi.object({
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
    });
  }

  static getInStockLocations() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      city: Joi.string().allow(""),
      range: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  static getLocationDetailsById() {
    return Joi.object({
      locationId: Joi.number().required(),
    }).required();
  }

  static getProductBundlesBySlug() {
    return Joi.object({
      slug: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  static getProductComparisonBySlugs() {
    return Joi.object({
      slug: Joi.array().items(Joi.string().allow("")).required(),
    }).required();
  }

  static getProductDetailBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getProductPriceBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      storeId: Joi.number(),
      pincode: Joi.string().allow(""),
      moq: Joi.number(),
    }).required();
  }

  static getProductSellersBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      pincode: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getProductSizesBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
      storeId: Joi.number(),
    }).required();
  }

  static getProductStockByIds() {
    return Joi.object({
      itemId: Joi.string().allow(""),
      alu: Joi.string().allow(""),
      skuCode: Joi.string().allow(""),
      ean: Joi.string().allow(""),
      upc: Joi.string().allow(""),
    });
  }

  static getProductStockForTimeByIds() {
    return Joi.object({
      timestamp: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageId: Joi.string().allow(""),
    }).required();
  }

  static getProductVariantsBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      q: Joi.string().allow(""),
      f: Joi.string().allow(""),
      filters: Joi.boolean(),
      sortOn: Joi.string().allow(""),
      pageId: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
      pageType: Joi.string().allow(""),
    });
  }

  static getSearchResults() {
    return Joi.object({
      q: Joi.string().allow("").required(),
    }).required();
  }

  static getSimilarComparisonProductBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getStores() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string().allow(""),
      city: Joi.string().allow(""),
      range: Joi.number(),
      latitude: Joi.number(),
      longitude: Joi.number(),
    });
  }

  static unfollowById() {
    return Joi.object({
      collectionType: Joi.string().allow("").required(),
      collectionId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = CatalogValidator;
