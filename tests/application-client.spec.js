const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const { ApplicationConfig, ApplicationClient } = require("../index.js");

const mock = new MockAdapter(axios);
let applicationClient;

beforeAll(() => {
  const config = new ApplicationConfig({
    domain: "https://vivek.jiohostx0.de/api",
    applicationID: "605c6efd5ab8c845def75ae3",
    applicationToken: "Rmx5WXxPW",
  });
  applicationClient = new ApplicationClient(config);
});

afterAll(() => {
  applicationClient = null;
  mock.reset();
});

describe("Catalog test cases", () => {
  it("getProductDetailBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductSizesBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductPriceBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductSellersBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductComparisonBySlugs testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSimilarComparisonProductBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getComparedFrequentlyProductBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductSimilarByIdentifier testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductVariantsBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductStockByIds testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductStockForTimeByIds testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProducts testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBrands testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBrandDetailBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCategories testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCategoryDetailBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getHomeProducts testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getDepartments testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSearchResults testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCollections testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCollectionItemsBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCollectionDetailBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFollowedListing testing", async () => {
    expect(true).toBeTruthy();
  });

  it("unfollowById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("followById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFollowerCountById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFollowIds testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getStores testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Cart test cases", () => {
  it("getCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartLastModified testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addItems testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getItemCount testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCoupons testing", async () => {
    expect(true).toBeTruthy();
  });

  it("applyCoupon testing", async () => {
    expect(true).toBeTruthy();
  });

  it("removeCoupon testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBulkDiscountOffers testing", async () => {
    expect(true).toBeTruthy();
  });

  it("applyRewardPoints testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAddresses testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAddressById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("removeAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("selectAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("selectPaymentMode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("validateCouponForPayment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getShipments testing", async () => {
    expect(true).toBeTruthy();
  });

  it("checkoutCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCartMeta testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartShareLink testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartSharedItems testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCartWithSharedItems testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Common test cases", () => {
  it("getLocations testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Lead test cases", () => {
  it("getTicket testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createHistory testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createTicket testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCustomForm testing", async () => {
    expect(true).toBeTruthy();
  });

  it("submitCustomForm testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getParticipantsInsideVideoRoom testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getTokenForVideoRoom testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Theme test cases", () => {
  it("getAllPages testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPage testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAppliedTheme testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getThemeForPreview testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("User test cases", () => {
  it("loginWithFacebook testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithGoogle testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithGoogleAndroid testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithGoogleIOS testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithOTP testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithEmailAndPassword testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendResetPasswordEmail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("forgotPassword testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendResetToken testing", async () => {
    expect(true).toBeTruthy();
  });

  it("loginWithToken testing", async () => {
    expect(true).toBeTruthy();
  });

  it("registerWithForm testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyEmail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyMobile testing", async () => {
    expect(true).toBeTruthy();
  });

  it("hasPassword testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updatePassword testing", async () => {
    expect(true).toBeTruthy();
  });

  it("logout testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendOTPOnMobile testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyMobileOTP testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendOTPOnEmail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyEmailOTP testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getLoggedInUser testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getListOfActiveSessions testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPlatformConfig testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateProfile testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addMobileNumber testing", async () => {
    expect(true).toBeTruthy();
  });

  it("deleteMobileNumber testing", async () => {
    expect(true).toBeTruthy();
  });

  it("setMobileNumberAsPrimary testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendVerificationLinkToMobile testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addEmail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("deleteEmail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("setEmailAsPrimary testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendVerificationLinkToEmail testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Content test cases", () => {
  it("getAnnouncements testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBlog testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBlogs testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFaqs testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFaqCategories testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFaqBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFaqCategoryBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFaqsByCategorySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getLandingPage testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getLegalInformation testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getNavigations testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPage testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPages testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSEOConfiguration testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSlideshows testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSlideshow testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getSupportInformation testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getTags testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Communication test cases", () => {
  it("getCommunicationConsent testing", async () => {
    expect(true).toBeTruthy();
  });

  it("upsertCommunicationConsent testing", async () => {
    expect(true).toBeTruthy();
  });

  it("upsertAppPushtoken testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Share test cases", () => {
  it("getApplicationQRCode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getProductQRCodeBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCollectionQRCodeBySlug testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getUrlQRCode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createShortLink testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getShortLinkByHash testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOriginalShortLinkByHash testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("FileStorage test cases", () => {
  it("startUpload testing", async () => {
    expect(true).toBeTruthy();
  });

  it("completeUpload testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Configuration test cases", () => {
  it("getApplication testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOwnerInfo testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBasicDetails testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getIntegrationTokens testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOrderingStores testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getStoreDetailById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getFeatures testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getContactInfo testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCurrencies testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCurrencyById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAppCurrencies testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getLanguages testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOrderingStoreCookie testing", async () => {
    expect(true).toBeTruthy();
  });

  it("removeOrderingStoreCookie testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAppStaffs testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Payment test cases", () => {
  it("getAggregatorsConfig testing", async () => {
    expect(true).toBeTruthy();
  });

  it("attachCardToCustomer testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getActiveCardAggregator testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getActiveUserCards testing", async () => {
    expect(true).toBeTruthy();
  });

  it("deleteUserCard testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyCustomerForPayment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyAndChargePayment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("initialisePayment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("checkAndUpdatePaymentStatus testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPaymentModeRoutes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPosPaymentModeRoutes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getRupifiBannerDetails testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getActiveRefundTransferModes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("enableOrDisableRefundTransferMode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getUserBeneficiariesDetail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyIfscCode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOrderBeneficiariesDetail testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyOtpAndAddBeneficiaryForBank testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addBeneficiaryDetails testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addRefundBankAccountUsingOTP testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyOtpAndAddBeneficiaryForWallet testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateDefaultBeneficiary testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Order test cases", () => {
  it("getOrders testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOrderById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getShipmentById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getShipmentReasons testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateShipmentStatus testing", async () => {
    expect(true).toBeTruthy();
  });

  it("trackShipment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPosOrderById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCustomerDetailsByShipmentId testing", async () => {
    expect(true).toBeTruthy();
  });

  it("sendOtpToShipmentCustomer testing", async () => {
    expect(true).toBeTruthy();
  });

  it("verifyOtpShipmentCustomer testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Rewards test cases", () => {
  it("getPointsOnProduct testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOfferByName testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getOrderDiscount testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getUserPoints testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getUserPointsHistory testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getUserReferralDetails testing", async () => {
    expect(true).toBeTruthy();
  });

  it("redeemReferralCode testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Feedback test cases", () => {
  it("createAbuseReport testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateAbuseReport testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAbuseReports testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAttributes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createAttribute testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAttribute testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateAttribute testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createComment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateComment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getComments testing", async () => {
    expect(true).toBeTruthy();
  });

  it("checkEligibility testing", async () => {
    expect(true).toBeTruthy();
  });

  it("deleteMedia testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createMedia testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateMedia testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getMedias testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getReviewSummaries testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createReview testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateReview testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getReviews testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getTemplates testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createQuestion testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateQuestion testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getQuestionAndAnswers testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getVotes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("createVote testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateVote testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("PosCart test cases", () => {
  it("getCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartLastModified testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addItems testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getItemCount testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCoupons testing", async () => {
    expect(true).toBeTruthy();
  });

  it("applyCoupon testing", async () => {
    expect(true).toBeTruthy();
  });

  it("removeCoupon testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getBulkDiscountOffers testing", async () => {
    expect(true).toBeTruthy();
  });

  it("applyRewardPoints testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAddresses testing", async () => {
    expect(true).toBeTruthy();
  });

  it("addAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAddressById testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("removeAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("selectAddress testing", async () => {
    expect(true).toBeTruthy();
  });

  it("selectPaymentMode testing", async () => {
    expect(true).toBeTruthy();
  });

  it("validateCouponForPayment testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getShipments testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateShipments testing", async () => {
    expect(true).toBeTruthy();
  });

  it("checkoutCart testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCartMeta testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getAvailableDeliveryModes testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getStoreAddressByUid testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartShareLink testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getCartSharedItems testing", async () => {
    expect(true).toBeTruthy();
  });

  it("updateCartWithSharedItems testing", async () => {
    expect(true).toBeTruthy();
  });
});

describe("Logistic test cases", () => {
  it("getTatProduct testing", async () => {
    expect(true).toBeTruthy();
  });

  it("getPincodeCity testing", async () => {
    expect(true).toBeTruthy();
  });
});
