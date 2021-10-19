const AVAILABLE_PAGE_TYPE = {
  ABOUT_US: "about-us",
  ADDRESSES: "addresses",
  BLOG: "blog",
  BRANDS: "brands",
  CARDS: "cards",
  CART: "cart",
  CATEGORIES: "categories",
  BRAND: "brand",
  CATEGORY: "category",
  COLLECTION: "collection",
  COLLECTIONS: "collections",
  CONTACT_US: "contact-us",
  EXTERNAL: "external",
  FAQ: "faq",
  FRESHCHAT: "freshchat",
  HOME: "home",
  NOTIFICATION_SETTINGS: "notification-settings",
  ORDERS: "orders",
  PAGE: "page",
  POLICY: "policy",
  PRODUCT: "product",
  PRODUCT_REVIEWS: "product-reviews",
  ADD_PRODUCT_REVIEW: "add-product-review",
  PRODUCT_REQUEST: "product-request",
  PRODUCTS: "products",
  PROFILE: "profile",
  PROFILE_BASIC: "profile-basic",
  PROFILE_COMPANY: "profile-company",
  PROFILE_EMAILS: "profile-emails",
  PROFILE_PHONES: "profile-phones",
  RATE_US: "rate-us",
  REFER_EARN: "refer-earn",
  SETTINGS: "settings",
  SHARED_CART: "shared-cart",
  TNC: "tnc",
  TRACK_ORDER: "track-order",
  WISHLIST: "wishlist",
  SECTIONS: "sections",
  FORM: "form",
  CART_DELIVERY: "cart-delivery",
  CART_PAYMENT: "cart-payment",
  CART_REVIEW: "cart-review",
};

Object.freeze(AVAILABLE_PAGE_TYPE);

const NAVIGATORS = {
  "about-us": {
    name: "About Us",
    link: "/about-us",
  },
  addresses: {
    name: "Saved Addresses",
    link: "/profile/address",
  },
  blog: {
    name: "Blog",
    link: "/blog/:slug",
    params: [
      {
        key: "slug",
        required: false,
      },
    ],
  },
  brands: {
    name: "Brands",
    link: "/brands/:department",
    params: [
      {
        key: "department",
        required: false,
      },
    ],
  },
  cards: {
    name: "Saved Cards",
    link: "/profile/my-cards",
  },
  cart: {
    name: "Cart",
    link: "/cart/bag/",
  },
  categories: {
    name: "Categories",
    link: "/categories/:department",
    params: [
      {
        key: "department",
        required: false,
      },
    ],
  },
  brand: {
    name: "Brand",
    link: "/brand/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  category: {
    name: "Category",
    link: "/category/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  collection: {
    name: "Collection",
    link: "/collection/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  collections: {
    name: "Collections",
    link: "/collections/",
  },
  "contact-us": {
    name: "Contact Us",
    link: "/contact-us/",
  },
  external: {
    name: "External Link",
    link: "/external/:url",
    query: [
      {
        key: "url",
        required: true,
      },
    ],
  },
  faq: {
    name: "FAQ",
    link: "/faq/:category",
    params: [
      {
        key: "category",
        required: false,
      },
    ],
  },
  freshchat: {
    name: "Chat by Freshchat",
    link: "/freshchat",
  },
  home: {
    name: "Home",
    link: "/",
  },
  "notification-settings": {
    name: "Notification Settings",
    link: "/notification-settings",
  },
  orders: {
    name: "Orders",
    link: "/profile/orders",
  },
  page: {
    name: "Page",
    link: "/page/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  policy: {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  product: {
    name: "Product",
    link: "/product/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  "product-reviews": {
    name: "Product Reviews",
    link: "/product/:slug/reviews",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  "add-product-review": {
    name: "Add Product review",
    link: "/product/:slug/add-review",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  "product-request": {
    name: "Product Request",
    link: "/product-request/",
  },
  products: {
    name: "Products",
    link: "/products/",
  },
  profile: {
    name: "Profile",
    link: "/profile",
  },
  "profile-basic": {
    name: "Basic Profile",
    link: "/profile/details",
  },
  "profile-company": {
    name: "Profile Company",
    link: "/profile/company",
  },
  "profile-emails": {
    name: "Profile Emails",
    link: "/profile/email",
  },
  "profile-phones": {
    name: "Profile Phones",
    link: "/profile/phone",
  },
  "rate-us": {
    name: "Rate Us",
    link: "/rate-us",
  },
  "refer-earn": {
    name: "Refer & Earn",
    link: "/profile/refer-earn",
  },
  settings: {
    name: "Settings",
    link: "/setting/currency",
  },
  "shared-cart": {
    name: "Shared Cart",
    link: "/shared-cart/:token",
    params: [
      {
        key: "token",
        required: true,
      },
    ],
  },
  tnc: {
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  "track-order": {
    name: "Track Order",
    link: "/order-tracking/:orderId",
    params: [
      {
        key: "orderId",
        required: false,
      },
    ],
  },
  wishlist: {
    name: "Wishlist",
    link: "/wishlist/",
  },
  sections: {
    name: "Sections",
    link: "/sections/:group",
    params: [
      {
        key: "group",
        required: true,
      },
    ],
  },
  form: {
    name: "Form",
    link: "/form/:slug",
    params: [
      {
        key: "slug",
        required: true,
      },
    ],
  },
  "cart-delivery": {
    name: "Cart Delivery",
    link: "/cart/delivery",
  },
  "cart-payment": {
    name: "Cart Payment Information",
    link: "/cart/payment-info",
  },
  "cart-review": {
    name: "Cart Order Review",
    link: "/cart/order-review",
  },
};

module.exports = {
  AVAILABLE_PAGE_TYPE,
  NAVIGATORS,
};
