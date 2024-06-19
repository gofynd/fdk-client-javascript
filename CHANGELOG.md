# CHANGE LOG (1.4.8-beta.2) - v1.9.4-prerelease-v2

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### addItems

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### updateCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### getCoupons

- ##### What's New
	- [Added] property <code>available_coupon_list[].offer_text</code> of schema <code>Coupon</code> in response with status code 200
	- [Added] property <code>available_coupon_list[].is_bank_offer</code> of schema <code>Coupon</code> in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartShipmentsResponse</code> in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CheckCart</code> in response with status code 200


#### updateCartMeta

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartMetaRequest</code> in request body


#### getCartSharedItems

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 200
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 200


#### getPromotionOffers

- ##### What's New
	- [Breaking] [Added] properties <code>available_promotions[].free_gift_items[].item_price_details.marked</code>, <code>available_promotions[].free_gift_items[].item_price_details.effective</code>, <code>available_promotions[].free_gift_items[].item_price_details.currency</code> in response with status code 200
	- [Added] property <code>available_promotions[].promotion_type</code> of schema <code>PromotionOffer</code> in response with status code 200
	- [Added] property <code>available_promotions[].promotion_name</code> of schema <code>PromotionOffer</code> in response with status code 200


#### getLadderOffers

- ##### What's New
	- [Breaking] [Added] properties <code>available_offers[].free_gift_items[].item_price_details.marked</code>, <code>available_offers[].free_gift_items[].item_price_details.effective</code>, <code>available_offers[].free_gift_items[].item_price_details.currency</code> in response with status code 200


#### checkoutCartV2

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CheckCart</code> in response with status code 200


#### getPromotionPaymentOffers

- ##### What's New
	- [Added] method <code>getPromotionPaymentOffers</code>



### Catalog



#### getProductSizesBySlug

- ##### What's Deprecated
	- [Deleted] Required status from property <code>discount_meta.timer</code> in response with status code 200


#### getProductVariantsBySlug

- ##### What's New
	- [Added] property <code>variants[].group_id</code> of schema <code>ProductVariantResponse</code> in response with status code 200


#### getProductPriceBySlug

- ##### What's Deprecated
	- [Deleted] Required status from property <code>discount_meta.timer</code> in response with status code 200


#### getProductSellersBySlug

- ##### What's Deprecated
	- [Deleted] Required status from property <code>items[].discount_meta.timer</code> in response with status code 200


### Content



#### getBlog

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getBlogs

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getLandingPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigations

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshows

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshow

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### Lead



#### getParticipantsInsideVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getParticipantsInsideVideoRoom</code>



#### getTokenForVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getTokenForVideoRoom</code>



### Logistic



#### getLocations

- ##### What's New
	- [Added] property <code>message</code> of schema <code>ErrorResponse</code> in response with status code 400


#### getCountries

- ##### What's Changed
	- [Changed] Path From <code>/service/application/logistics/v1.0/countries</code> To <code>/service/application/logistics/v2.0/countries</code>


#### getCountry

- ##### What's New
	- [Added] property <code>message</code> of schema <code>ErrorResponse</code> in response with status code 400


#### getLocalities

- ##### What's New
	- [Added] property <code>message</code> of schema <code>ErrorResponse</code> in response with status code 400


#### getLocality

- ##### What's New
	- [Added] property <code>message</code> of schema <code>ErrorResponse</code> in response with status code 400


#### validateAddress

- ##### What's New
	- [Added] property <code>message</code> of schema <code>ErrorResponse</code> in response with status code 400


### Order



#### getOrders

- ##### What's New
	- [Added] property <code>items[].meta</code> of schema <code>OrderSchema</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.meta</code> of schema <code>OrderSchema</code> in response with status code 200


### Payment



#### resendOrCancelPayment

- ##### What's New
	- [Added] property <code>data.is_payment_done</code> of schema <code>LinkStatus</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>boolean</code> to <code>string</code> of property <code>data.status</code> of schema <code>LinkStatus</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Added] property <code>pages[].sections[].source</code> of schema <code>AvailablePageSchemaSections</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's New
	- [Added] property <code>sections[].source</code> of schema <code>AvailablePageSchemaSections</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


## Partner Client



### Lead



#### getTickets

- ##### What's New
	- [Added] property <code>items[].sla</code> of schema <code>Ticket</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### getTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### editTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### getTokenForVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getTokenForVideoRoom</code>



#### getVideoParticipants

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getVideoParticipants</code>



### Logistics



#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### updateCourierPartnerAccount

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getCourierPartnerAccount

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### createCourierPartnerScheme

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### updateCourierPartnerScheme

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getCountries

- ##### What's Changed
	- [Changed] Path From <code>/service/partner/logistics/v1.0/organization/{organization_id}/countries</code> To <code>/service/partner/logistics/v2.0/organization/{organization_id}/countries</code>


### Theme



#### getAllPages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateMultiplePages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createExtensionSectionDraft

- ##### What's New
	- [Added] method <code>createExtensionSectionDraft</code>



#### publishExtensionSections

- ##### What's New
	- [Added] method <code>publishExtensionSections</code>



## Platform Client



### Billing



#### checkCouponValidity

- ##### What's New
	- [Added] property <code>code</code> of schema <code>ResourceNotFound</code> in response with status code 400
	- [Added] property <code>success</code> of schema <code>ResourceNotFound</code> in response with status code 400
	- [Added] Security in Request


#### createSubscriptionCharge

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>createSubscriptionCharge</code>



#### getSubscriptionCharge

- ##### What's New
	- [Added] property <code>product_suit_id</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>entity_id</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>entity_type</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>is_test</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>created_at</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>modified_at</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>code</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] property <code>success</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Possible values from <code>pending,active,cancelled,frozen,declined</code> from property <code>status</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] Value format from <code>int32</code> from property <code>company_id</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] Value format from <code>int32</code> from property <code>trial_days</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Deleted] property <code>trial_period</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Deleted] property <code>metadata</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] properties <code>line_items[]._id</code>, <code>line_items[].name</code>, <code>line_items[].term</code>, <code>line_items[].pricing_type</code>, <code>line_items[].price</code>, <code>line_items[].recurring</code>, <code>line_items[].capped_amount</code>, <code>line_items[].activated_on</code>, <code>line_items[].cancelled_on</code>, <code>line_items[].billing_date</code>, <code>line_items[].current_period</code>, <code>line_items[].status</code>, <code>line_items[].is_test</code>, <code>line_items[].metadata</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>company_id</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>trial_days</code> of schema <code>EntitySubscription</code> in response with status code 200


#### cancelSubscriptionCharge

- ##### What's New
	- [Added] property <code>product_suit_id</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>entity_id</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>entity_type</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>is_test</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>created_at</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>modified_at</code> of schema <code>SubscriptionChargeRes</code> in response with status code 200
	- [Added] property <code>code</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] property <code>success</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Possible values from <code>pending,active,cancelled,frozen,declined</code> from property <code>status</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] Value format from <code>int32</code> from property <code>company_id</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] Value format from <code>int32</code> from property <code>trial_days</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Deleted] property <code>trial_period</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Deleted] property <code>metadata</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Deleted] properties <code>line_items[]._id</code>, <code>line_items[].name</code>, <code>line_items[].term</code>, <code>line_items[].pricing_type</code>, <code>line_items[].price</code>, <code>line_items[].recurring</code>, <code>line_items[].capped_amount</code>, <code>line_items[].activated_on</code>, <code>line_items[].cancelled_on</code>, <code>line_items[].billing_date</code>, <code>line_items[].current_period</code>, <code>line_items[].status</code>, <code>line_items[].is_test</code>, <code>line_items[].metadata</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 400

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>company_id</code> of schema <code>EntitySubscription</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>trial_days</code> of schema <code>EntitySubscription</code> in response with status code 200


#### createOneTimeCharge

- ##### What's New
	- [Added] property <code>charge.final_charge</code> of schema <code>Charge</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Required status from properties <code>charge.price.amount</code>, <code>charge.price.currency_code</code> in request body
	- [Deleted] Required status from properties <code>charge.name</code>, <code>charge.pricing_type</code>, <code>charge.price</code> in request body
	- [Deleted] Required status from properties <code>name</code>, <code>charge</code>, <code>return_url</code> in request body
	- [Breaking] [Deleted] property <code>charge._id</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.name</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.status</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.activated_on</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.cancelled_on</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.metadata</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.return_url</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.is_test</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.pricing_type</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.subscriber_id</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.entity_type</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.entity_id</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.meta</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>charge.price</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200


#### getChargeDetails

- ##### What's New
	- [Added] property <code>term</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>charge_type</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>recurring</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>capped_amount</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>billing_date</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>current_period</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>modified_at</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>created_at</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>company_id</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>ChargeDetails</code> in response with status code 200
	- [Added] property <code>code</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] property <code>success</code> of schema <code>ResourceNotFound</code> in response with status code 404
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>metadata</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>return_url</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Breaking] [Deleted] property <code>subscriber_id</code> of schema <code>OneTimeChargeEntity</code> in response with status code 200
	- [Deleted] Required status from properties <code>price.amount</code>, <code>price.currency_code</code> in response with status code 200


#### getInvoices

- ##### What's New
	- [Added] property <code>data[].documents</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].payment</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].old_settlement</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].credit_balance</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].discount</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].taxation</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>data[].credit_note_amount</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] Response with status 400
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Value format from <code>int32</code> from property <code>data[].invoice_items[].plan.recurring.interval_count</code> of schema <code>InvoiceItemsPlanRecurring</code> in response with status code 200


#### getInvoiceById

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>invoice.attemp</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.documents</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.payment</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.discount</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.taxation</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.old_settlement</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.credit_balance</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.attempt</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>invoice.credit_note_amount</code> of schema <code>InvoiceDetailsData</code> in response with status code 200
	- [Added] property <code>shopsense_details</code> of schema <code>InvoiceData</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Value format from <code>int32</code> from property <code>invoice.attemp</code> of schema <code>InvoiceDetails</code> in response with status code 200
	- [Deleted] properties  in response with status code 200
	- [Breaking] [Deleted] property <code>invoice.hash_identifier</code> of schema <code>InvoiceDetails</code> in response with status code 200
	- [Breaking] [Deleted] property <code>invoice.payment_method</code> of schema <code>InvoiceDetails</code> in response with status code 200
	- [Deleted] Value format from <code>int32</code> from property <code>invoice_items[].plan.recurring.interval_count</code> of schema <code>InvoiceItemsPlanRecurring</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>invoice.attemp</code> of schema <code>InvoiceDetails</code> in response with status code 200


#### getCustomerDetail

- ##### What's New
	- [Added] property <code>documents</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>consent</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>comms</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>credit_balance</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>business_country_info</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 404


#### upsertCustomerDetail

- ##### What's New
	- [Added] property <code>documents</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>consent</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>comms</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>credit_balance</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] property <code>business_country_info</code> of schema <code>SubscriptionCustomer</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 404
	- [Breaking] [Deleted] Response with status 500


#### getSubscription

- ##### What's New
	- [Added] property <code>subscription.plan_data.fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.plan_data.created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>subscription.meta</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>subscription.freezed</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>subscription.cancel_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>subscription.canceled_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>latest_invoice.documents</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.payment</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.old_settlement</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.credit_balance</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.discount</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.taxation</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>latest_invoice.credit_note_amount</code> of schema <code>InvoicesData</code> in response with status code 200
	- [Added] property <code>next_plan.fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>next_plan.created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Breaking] [Added] Type <code>object</code> to property <code>current_subscriptions[]</code> of schema <code>Subscription</code> in response with status code 200
	- [Breaking] [Added] properties <code>current_subscriptions[].meta</code>, <code>current_subscriptions[].current_period</code>, <code>current_subscriptions[].pause_collection</code>, <code>current_subscriptions[].trial</code>, <code>current_subscriptions[].invoice_settings</code>, <code>current_subscriptions[].is_active</code>, <code>current_subscriptions[].cancel_at_period_end</code>, <code>current_subscriptions[]._id</code>, <code>current_subscriptions[].subscriber_id</code>, <code>current_subscriptions[].plan_id</code>, <code>current_subscriptions[].product_suite_id</code>, <code>current_subscriptions[].plan_data</code>, <code>current_subscriptions[].current_status</code>, <code>current_subscriptions[].collection_method</code>, <code>current_subscriptions[].created_at</code>, <code>current_subscriptions[].modified_at</code>, <code>current_subscriptions[].latest_invoice</code>, <code>current_subscriptions[].channel_type</code>, <code>current_subscriptions[].freezed</code>, <code>current_subscriptions[].cancel_at</code>, <code>current_subscriptions[].canceled_at</code> in response with status code 200
	- [Added] property <code>message</code> of schema <code>SubscriptionStatus</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] Value format from <code>int32</code> from property <code>latest_invoice.invoice_items[].plan.recurring.interval_count</code> of schema <code>InvoiceItemsPlanRecurring</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>number</code> of property <code>mandate_amount</code> of schema <code>SubscriptionStatus</code> in response with status code 200


#### getFeatureLimitConfig

- ##### What's New
	- [Added] Response with status 404
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500


#### activateSubscriptionPlan

- ##### What's New
	- [Added] property <code>subscription_id</code> of schema <code>SubscriptionActivateReq</code> in request body
	- [Added] property <code>coupon</code> of schema <code>SubscriptionActivateReq</code> in request body
	- [Added] property <code>meta</code> of schema <code>SubscriptionActivateReq</code> in request body
	- [Added] property <code>data.plan_data.fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.meta</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.freezed</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.cancel_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.canceled_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] Response with status 400
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 404
	- [Breaking] [Deleted] Response with status 500


#### cancelSubscriptionPlan

- ##### What's New
	- [Added] property <code>data.plan_data.fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.plan_data.created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>data.meta</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.freezed</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.cancel_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] property <code>data.canceled_at</code> of schema <code>Subscription</code> in response with status code 200
	- [Added] Response with status 400
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 404


#### getEnterprisePlans

- ##### What's New
	- [Added] property <code>[].fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>[].created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500


#### planStatusUpdate

- ##### What's New
	- [Added] property <code>fee_components</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>taxation</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>one_time_fees</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>credit_line</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>current_status</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>channel_type</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>company_ids</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>platform</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>activated_on</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>meta</code> of schema <code>Plan</code> in response with status code 200
	- [Added] property <code>created_by</code> of schema <code>Plan</code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500


#### subscripePlan

- ##### What's New
	- [Added] Response with status 400
	- [Added] Security in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] operationId from <code>subscripePlan</code> to <code>paymentInitiate</code>


#### getentityDetail

- ##### What's New
	- [Added] property <code>[]</code> of schema <code></code> in response with status code 200
	- [Added] Security in Request

- ##### What's Deprecated
	- [Deleted] properties <code>success</code>, <code>page</code>, <code>page_size</code>, <code>items</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 400
	- [Breaking] [Deleted] Response with status 404
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code></code> of schema <code>EntityResponse</code> in response with status code 200


#### currentAppLimit

- ##### What's New
	- [Added] method <code>currentAppLimit</code>



#### globalSettings

- ##### What's New
	- [Added] method <code>globalSettings</code>



#### paymentStatus

- ##### What's New
	- [Added] method <code>paymentStatus</code>



#### creditTransaction

- ##### What's New
	- [Added] method <code>creditTransaction</code>



#### updateConsent

- ##### What's New
	- [Added] method <code>updateConsent</code>



#### subscriptionConfigs

- ##### What's New
	- [Added] method <code>subscriptionConfigs</code>



#### getBankList

- ##### What's New
	- [Added] method <code>getBankList</code>



#### getPaymentTransaction

- ##### What's New
	- [Added] method <code>getPaymentTransaction</code>



#### getPaymentOptions

- ##### What's New
	- [Added] method <code>getPaymentOptions</code>



#### upgradePlan

- ##### What's New
	- [Added] method <code>upgradePlan</code>



#### subscriptionMethods

- ##### What's New
	- [Added] method <code>subscriptionMethods</code>



#### subscriptionMethodsDelete

- ##### What's New
	- [Added] method <code>subscriptionMethodsDelete</code>



#### planDowngradeGet

- ##### What's New
	- [Added] method <code>planDowngradeGet</code>



#### planDowngrade

- ##### What's New
	- [Added] method <code>planDowngrade</code>



#### subscriptionPlanChange

- ##### What's New
	- [Added] method <code>subscriptionPlanChange</code>



#### changePlan

- ##### What's New
	- [Added] method <code>changePlan</code>



#### methodDefault

- ##### What's New
	- [Added] method <code>methodDefault</code>



#### topupCredit

- ##### What's New
	- [Added] method <code>topupCredit</code>



#### topupCancelCredit

- ##### What's New
	- [Added] method <code>topupCancelCredit</code>



#### setupPayment

- ##### What's New
	- [Added] method <code>setupPayment</code>



#### setupMandate

- ##### What's New
	- [Added] method <code>setupMandate</code>



#### setupIntent

- ##### What's New
	- [Added] method <code>setupIntent</code>



#### updateSetupIntent

- ##### What's New
	- [Added] method <code>updateSetupIntent</code>



#### subscriptionRenew

- ##### What's New
	- [Added] method <code>subscriptionRenew</code>



#### paymentCollect

- ##### What's New
	- [Added] method <code>paymentCollect</code>



#### paymentOptions

- ##### What's New
	- [Added] method <code>paymentOptions</code>



#### verifyPayment

- ##### What's New
	- [Added] method <code>verifyPayment</code>



### Cart



#### getPriceAdjustments

- ##### What's New
	- [Added] property <code>data[]</code> of schema <code>GetPriceAdjustmentResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>data.value</code>, <code>data.message</code>, <code>data.apply_expiry</code>, <code>data.restrictions</code>, <code>data.article_level_distribution</code>, <code>data.id</code>, <code>data.collection</code>, <code>data.type</code>, <code>data.allowed_refund</code>, <code>data.is_authenticated</code>, <code>data.article_ids</code>, <code>data.meta</code>, <code>data.cart_id</code> in response with status code 200
	- [Deleted] Required status from properties <code>data.article_ids</code>, <code>data.article_level_distribution</code>, <code>data.cart_id</code>, <code>data.collection</code>, <code>data.is_authenticated</code>, <code>data.message</code>, <code>data.type</code>, <code>data.value</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>data</code> of schema <code>PriceAdjustment</code> in response with status code 200


#### getAbandonedCartDetails

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### addItems

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### getCartSharedItems

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 200
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>SharedCart</code> in response with status code 200


#### updateCartUser

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>UserCartMappingResponse</code> in response with status code 200


#### getCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### platformAddItems

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### platformUpdateCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>orderType</code> (type: <code>string</code>)

	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### getShipments

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>PlatformCartShipmentsResponse</code> in response with status code 200


#### updateShipments

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>PlatformCartShipmentsResponse</code> in response with status code 200


#### platformCheckoutCart

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CheckCart</code> in response with status code 200


#### selectPaymentMode

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### platformCheckoutCartV2

- ##### What's New
	- [Added] property <code>cart.custom_cart_meta</code> of schema <code>CheckCart</code> in response with status code 200


#### selectPaymentModeV2

- ##### What's New
	- [Added] property <code>custom_cart_meta</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### getPromotionOffers

- ##### What's New
	- [Added] method <code>getPromotionOffers</code>



#### getPromotionPaymentOffers

- ##### What's New
	- [Added] method <code>getPromotionPaymentOffers</code>



### Catalog



#### getApplicationBrandListing

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getApplicationBrands

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getCategories

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>data[].items[].childs[].childs[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getApplicationCategoryListing

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getAllCollections

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getCollectionItems

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getAppicationProducts

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getProductDetailBySlug

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### listProductTemplateExportDetails

- ##### What's New
	- [Added] property <code>page</code> of schema <code>ProductDownloadsResponse</code> in response with status code 200


#### listInventoryExport

- ##### What's New
	- [Added] <code>query</code> parameter <code>pageNo</code> (type: <code>integer</code>)

	- [Added] <code>query</code> parameter <code>pageSize</code> (type: <code>integer</code>)

	- [Added] property <code>page</code> of schema <code>InventoryExportJobListResponse</code> in response with status code 200


#### getProductExportJobs

- ##### What's New
	- [Added] <code>query</code> parameter <code>pageNo</code> (type: <code>integer</code>)

	- [Added] <code>query</code> parameter <code>pageSize</code> (type: <code>integer</code>)

	- [Added] property <code>page</code> of schema <code>ProductDownloadsResponse</code> in response with status code 200


#### createProductExportJob

- ##### What's New
	- [Added] property <code>page</code> of schema <code>ProductDownloadsResponse</code> in response with status code 200


### Content



#### createBlog

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getBlogs

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateBlog

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteBlog

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getComponentById

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getLandingPages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createLandingPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateLandingPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteLandingPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigations

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createNavigation

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getDefaultNavigations

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigationBySlug

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateNavigation

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteNavigation

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPageMeta

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>system_pages[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>system_pages[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPagePreview

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePagePreview

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshows

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createSlideshow

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshowBySlug

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateSlideshow

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteSlideshow

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getBlogBySlug

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPageBySlug

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### FileStorage



#### copyFiles

- ##### What's New
	- [Added] property <code>internal_tracking_url</code> of schema <code></code> in response with status code 200


#### appCopyFiles

- ##### What's New
	- [Added] property <code>internal_tracking_url</code> of schema <code></code> in response with status code 200


### Finance



#### generateReport

- ##### What's New
	- [Added] property <code>data</code> of schema <code>GenerateReportJson</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### downloadReport

- ##### What's New
	- [Added] property <code>data</code> of schema <code>DownloadReport</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page</code> of schema <code>DownloadReport</code> in request body
	- [Breaking] [Deleted] property <code>pagesize</code> of schema <code>DownloadReport</code> in request body
	- [Breaking] [Deleted] property <code>start_date</code> of schema <code>DownloadReport</code> in request body
	- [Breaking] [Deleted] property <code>end_date</code> of schema <code>DownloadReport</code> in request body
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getData

- ##### What's New
	- [Breaking] [Added] properties <code>data.filters.config_field</code>, <code>data.filters.status</code>, <code>data.filters.is_active</code>, <code>data.filters.seller_id</code> in request body
	- [Added] property <code>data.status</code> of schema <code>GetEngineData</code> in request body
	- [Added] property <code>data.search</code> of schema <code>GetEngineData</code> in request body
	- [Added] property <code>data.page</code> of schema <code>GetEngineData</code> in request body
	- [Added] property <code>data.page_size</code> of schema <code>GetEngineData</code> in request body
	- [Added] property <code>data.order_by</code> of schema <code>GetEngineData</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getReason

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getReportList

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getAffiliate

- ##### What's New
	- [Added] property <code>reason</code> of schema <code>GetAffiliateResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### downloadCreditDebitNote

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### paymentProcess

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>number</code> of property <code>data.amount</code> of schema <code>PaymentProcessPayload</code> in request body
	- [Breaking] [Changed] Type from <code>string</code> to <code>number</code> of property <code>data.total_amount</code> of schema <code>PaymentProcessPayload</code> in request body
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### creditlineDataplatform

- ##### What's New
	- [Added] property <code>data.end_date</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Added] property <code>data.start_date</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Added] property <code>data.page_size</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data.end_end</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Breaking] [Deleted] property <code>data.start_end</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Breaking] [Deleted] property <code>data.pagesize</code> of schema <code>CreditlineDataPlatformPayload</code> in request body
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### isCreditlinePlatform

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoiceType

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoiceListing

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].currency</code> of schema <code>Currency</code> in response with status code 200
	- [Added] property <code>success</code> of schema <code>InvoiceListingResponse</code> in response with status code 200
	- [Added] property <code>headers</code> of schema <code>InvoiceListingResponse</code> in response with status code 200
	- [Added] Response with status 400
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>number</code> of property <code>items[].amount</code> of schema <code>InvoiceListingResponseItems</code> in response with status code 200
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoicePDF

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### isCnRefundMethod

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### createSellerCreditNoteConfig

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### deleteConfig

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### channelDisplayName

- ##### What's New
	- [Added] property <code>items</code> of schema <code>ChannelDisplayNameResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data</code> of schema <code>ChannelDisplayNameResponse</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getPdfUrlView

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### creditNoteDetails

- ##### What's New
	- [Added] property <code>data.redemption_details[].meta</code> of schema <code>RedemptionDetails</code> in response with status code 200
	- [Added] property <code>data.currency</code> of schema <code>CreditNoteDetails</code> in response with status code 200
	- [Added] property <code>data.current_amount_used</code> of schema <code>CreditNoteDetails</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getCustomerCreditBalance

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getCnConfig

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Deleted] Type from <code>object</code> from property <code>data.meta</code> of schema <code>GetCnConfigResponseMeta</code> in response with status code 200
	- [Deleted] properties <code>data.meta.reason</code>, <code>data.meta.source_channel</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### generateReportCustomerCn

- ##### What's New
	- [Added] property <code>data.filters.type_of_transaction</code> of schema <code>CnGenerateReportFilters</code> in request body
	- [Added] property <code>data.filters.issuance_channel</code> of schema <code>CnGenerateReportFilters</code> in request body
	- [Added] property <code>data.page_size</code> of schema <code>CnGenerateReport</code> in request body
	- [Added] property <code>data.success</code> of schema <code>GenerateReportCustomerCnResponseData</code> in response with status code 200
	- [Added] property <code>data.message</code> of schema <code>GenerateReportCustomerCnResponseData</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data.pagesize</code> of schema <code>CnGenerateReport</code> in request body
	- [Breaking] [Deleted] property <code>data.filters.types_of_transaction</code> of schema <code>CnGenerateReportFilters</code> in request body
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### downloadReportCustomerCn

- ##### What's New
	- [Added] property <code>data.page_size</code> of schema <code>CnDownloadReport</code> in request body
	- [Added] property <code>items</code> of schema <code>DownloadReportCustomerCnResponse</code> in response with status code 200
	- [Added] property <code>item_count</code> of schema <code>DownloadReportCustomerCnResponse</code> in response with status code 200
	- [Added] property <code>page</code> of schema <code>DownloadReportCustomerCnResponse</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data.status[]</code> of schema <code>CnDownloadReport</code> in request body
	- [Breaking] [Deleted] property <code>data.pagesize</code> of schema <code>CnDownloadReport</code> in request body
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>array</code> to <code>string</code> of property <code>data.status</code> of schema <code>CnDownloadReport</code> in request body
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### getReportingFilters

- ##### What's New
	- [Added] property <code>reason</code> of schema <code>GetReportingFiltersResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoicePaymentDetails

- ##### What's New
	- [Added] property <code>reason</code> of schema <code>InvoicePaymentDetailsResponse</code> in response with status code 200
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoiceActivityLogs

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].performed_by</code> of schema <code>InvoiceActivityLogsResponseData</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].reason</code> of schema <code>InvoiceActivityLogsResponseData</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].max_retry_attempts</code> of schema <code>InvoiceActivityLogsResponseData</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### unlockCreditNote

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX

- ##### What's Changed
	- [Changed] Security in Request
	- [Changed] Security in Request
	- [Breaking] [Changed] Security in Request


#### invoicePaymentOptions

- ##### What's New
	- [Added] method <code>invoicePaymentOptions</code>



#### orderFreeze

- ##### What's New
	- [Added] method <code>orderFreeze</code>



### Lead



#### getPlatformTickets

- ##### What's New
	- [Added] property <code>items[].sla</code> of schema <code>Ticket</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### getNewTickets

- ##### What's New
	- [Added] property <code>items[].sla</code> of schema <code>Ticket</code> in response with status code 200


#### getPlatformTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### editPlatformTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### getNewTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### editNewTicket

- ##### What's New
	- [Added] property <code>sla</code> of schema <code>Ticket</code> in response with status code 200


#### getTokenForPlatformVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getTokenForPlatformVideoRoom</code>



#### getNewTokenForVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getNewTokenForVideoRoom</code>



#### getPlatformVideoParticipants

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getPlatformVideoParticipants</code>



#### getNewVideoParticipants

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getNewVideoParticipants</code>



#### openVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>openVideoRoom</code>



#### closeVideoRoom

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>closeVideoRoom</code>



#### getGeneralConfig

- ##### What's New
	- [Added] property <code>_id</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>support_communication</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>show_communication_info</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>show_support_dris</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>type</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>integration</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>allow_ticket_creation</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>show_listing</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>available_integration</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>enable_dris</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>support_email</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>support_phone</code> of schema <code>GeneralConfigResponse</code> in response with status code 200
	- [Added] property <code>support_faq</code> of schema <code>GeneralConfigResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>success</code> in response with status code 200
	- [Breaking] [Deleted] property <code>success</code> of schema <code>CloseVideoRoomResponse</code> in response with status code 200


### Serviceability



#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### updateCourierPartnerAccount

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getCourierPartnerAccount

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>scheme_rules.weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### updateCourierRule

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getCourierPartnerRule

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### createCourierPartnerRule

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getCourierPartnerRules

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_cost.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_cost.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_cost.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_cost.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_volumetric_weight.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_volumetric_weight.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_volumetric_weight.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.shipment_volumetric_weight.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getStoreRules

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### createStoreRules

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### getStoreRule

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


#### updateStoreRules

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gt</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.lte</code> of schema <code>ArithmeticOperations</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>conditions.order_place_date.gte</code> of schema <code>ArithmeticOperations</code> in response with status code 200


### Order



#### updateShipmentStatus

- ##### What's New
	- [Added] property <code>resume_tasks_after_unlock</code> of schema <code>UpdateShipmentStatusRequest</code> in request body


### Payment



#### setUserCODlimitRoutes

- ##### What's New
	- [Added] property <code>business_unit</code> of schema <code>SetCODForUserRequest</code> in request body


#### resendOrCancelPayment

- ##### What's New
	- [Added] property <code>data.is_payment_done</code> of schema <code>LinkStatus</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateMultiplePages

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getExtensionSections

- ##### What's New
	- [Added] method <code>getExtensionSections</code>



### Webhook



#### manualRetryOfFailedEvent

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>manualRetryOfFailedEvent</code>



#### getEventCounts

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getEventCounts</code>



#### getManualRetryStatus

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getManualRetryStatus</code>



#### manualRetryCancel

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>manualRetryCancel</code>



#### downloadDeliveryReport

- ##### What's New
	- [Breaking] [Added] Required status to properties <code>search_text</code>, <code>end_date</code>, <code>start_date</code>, <code>subscriber_ids</code>, <code>status</code>, <code>event</code> in request body


#### pingWebhook

- ##### What's New
	- [Breaking] [Added] Required status to property <code>webhook_url</code> in request body


#### getReportFilters

- ##### What's New
	- [Breaking] [Added] Required status to property <code>subscriber_ids</code> in request body


#### getHistoricalReports

- ##### What's New
	- [Breaking] [Added] Required status to property <code>type</code> in request body


#### getDeliveryReports

- ##### What's New
	- [Breaking] [Added] Required status to properties <code>search_text</code>, <code>end_date</code>, <code>start_date</code>, <code>subscriber_ids</code>, <code>status</code>, <code>event</code> in request body


#### registerSubscriberToEventV2

- ##### What's New
	- [Breaking] [Added] Type <code>object</code> to property <code></code> of schema <code>SubscriberConfigPostRequestV2</code> in request body
	- [Breaking] [Added] Required status to properties <code>provider</code>, <code>association</code>, <code>status</code>, <code>email_id</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>id</code> of schema <code>SubscriberConfigRequestV2</code> in request body
	- [Breaking] [Deleted] property <code>association.company_id</code> of schema <code>Association</code> in request body


#### updateSubscriberV2

- ##### What's New
	- [Breaking] [Added] Type <code>object</code> to property <code></code> of schema <code>SubscriberConfigUpdateRequestV2</code> in request body
	- [Breaking] [Added] Required status to properties <code>id</code>, <code>provider</code>, <code>association</code>, <code>status</code>, <code>email_id</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>association.company_id</code> of schema <code>Association</code> in request body


#### registerSubscriberToEvent

- ##### What's New
	- [Breaking] [Added] Type <code>object</code> to property <code></code> of schema <code>SubscriberConfigPost</code> in request body
	- [Breaking] [Added] Required status to properties <code>webhook_url</code>, <code>association</code>, <code>status</code>, <code>email_id</code>, <code>event_id</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>id</code> of schema <code>SubscriberConfig</code> in request body
	- [Breaking] [Deleted] property <code>association.company_id</code> of schema <code>Association</code> in request body


#### updateSubscriberConfig

- ##### What's New
	- [Breaking] [Added] Type <code>object</code> to property <code></code> of schema <code>SubscriberConfigUpdate</code> in request body
	- [Breaking] [Added] Required status to properties <code>id</code>, <code>webhook_url</code>, <code>association</code>, <code>status</code>, <code>email_id</code>, <code>event_id</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>association.company_id</code> of schema <code>Association</code> in request body


## Public Client



### Billing



#### getStandardPlans

- ##### What's New
	- [Added] property <code>plans[].recurring.aggregate_usage</code> of schema <code>PlanRecurring</code> in response with status code 200
	- [Added] property <code>plans[].recurring.usage_type</code> of schema <code>PlanRecurring</code> in response with status code 200
	- [Added] property <code>plans[].approved_by</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].updated_by</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].company_ids</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].created_by</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].channel_type</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].platform</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].taxation</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].one_time_fees</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].credit_line</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].current_status</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].meta</code> of schema <code>PlanDetails</code> in response with status code 200
	- [Added] property <code>plans[].components</code> of schema <code>PlanDetails</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>trial_plan</code> of schema <code>DetailList</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 400
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Changed] Required status of query parameter <code>platform</code>
	- [Changed] Path From <code>/service/public/billing/v1.0/plan/detailed-list</code> To <code>/service/public/billing/v1.0/plan/detailed-list/</code>


#### getPlanDetails

- ##### What's New
	- [Added] method <code>getPlanDetails</code>



#### planList

- ##### What's New
	- [Added] method <code>planList</code>



### Webhook



#### testHandlerTransformation

- ##### What's New
	- [Breaking] [Added] Required status to properties <code>event_name</code>, <code>event_type</code>, <code>event_category</code>, <code>event_version</code>, <code>event</code> in request body


#### validateSchema

- ##### What's New
	- [Breaking] [Added] Required status to properties <code>event_name</code>, <code>event_type</code>, <code>event_category</code>, <code>event_version</code>, <code>event</code>, <code>event_schema</code> in request body


# CHANGE LOG (1.4.7) - fp-v1.9.3

## Application Client

- [Added] Webhook class in application client


### Catalog



#### getProductSizesBySlug

- ##### What's New
	- [Added] property <code>price_per_piece</code> of schema <code>ProductSizes</code> in response with status code 200


#### getProductVariantsBySlug

- ##### What's New
	- [Added] property <code>variants[].items[]._custom_json</code> of schema <code>ProductVariantItemResponse</code> in response with status code 200
	- [Added] property <code>variants[].logo</code> of schema <code>ProductVariantResponse</code> in response with status code 200


#### getProducts

- ##### What's New
	- [Added] property <code>items[].variants[].items[]._custom_json</code> of schema <code>ProductVariantItemResponse</code> in response with status code 200


#### getHomeProducts

- ##### What's New
	- [Added] property <code>items[].variants[].items[]._custom_json</code> of schema <code>ProductVariantItemResponse</code> in response with status code 200


#### getCollectionItemsBySlug

- ##### What's New
	- [Added] property <code>items[].variants[].items[]._custom_json</code> of schema <code>ProductVariantItemResponse</code> in response with status code 200


#### getFollowedListing

- ##### What's New
	- [Added] property <code>items[].variants[].items[]._custom_json</code> of schema <code>ProductVariantItemResponse</code> in response with status code 200


### Content



#### getBlog

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### getLandingPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshow

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### Logistic



#### getPincodeCity
- [Note] This method is deprecated and it will be removed in future versions.


#### getTatProduct
- [Note] This method is deprecated and it will be removed in future versions.


#### getPincodeZones
- [Note] This method is deprecated and it will be removed in future versions.


#### getOptimalLocations
- [Note] This method is deprecated and it will be removed in future versions.


#### getLocations
- [Note] This method is deprecated and it will be removed in future versions.


### Order



#### getOrders

- ##### What's New
	- [Added] property <code>items[].shipments[].payment_info[].amount</code> of schema <code>ShipmentPaymentInfo</code> in response with status code 200
	- [Added] property <code>items[].shipments[].billing_address</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>items[].gstin_code</code> of schema <code>OrderSchema</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.shipments[].payment_info[].amount</code> of schema <code>ShipmentPaymentInfo</code> in response with status code 200
	- [Added] property <code>order.shipments[].billing_address</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>order.gstin_code</code> of schema <code>OrderSchema</code> in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property <code>shipment.payment_info[].amount</code> of schema <code>ShipmentPaymentInfo</code> in response with status code 200
	- [Added] property <code>shipment.billing_address</code> of schema <code>Shipments</code> in response with status code 200


### Payment



#### checkAndUpdatePaymentStatus

- ##### What's Deprecated
	- [Deleted] Required status from property <code>amount</code> in request body
	- [Deleted] Required status from property <code>contact</code> in request body
	- [Deleted] Required status from property <code>currency</code> in request body
	- [Deleted] Required status from property <code>customer_id</code> in request body
	- [Deleted] Required status from property <code>email</code> in request body
	- [Deleted] Required status from property <code>merchant_transaction_id</code> in request body
	- [Deleted] Required status from property <code>order_id</code> in request body
	- [Deleted] Required status from property <code>status</code> in request body


#### getPaymentModeRoutes

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.bqr_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.fynd.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.epaylater.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.juspay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ajiodhan.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.simpl.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.rupifi.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.mswipe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.stripe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ccavenue.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.payubiz.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.jiopay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.upi_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200


#### getPosPaymentModeRoutes

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.bqr_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.fynd.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.epaylater.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.juspay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ajiodhan.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.simpl.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.rupifi.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.mswipe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.stripe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ccavenue.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.payubiz.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.jiopay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.upi_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200


#### getPaymentModeRoutesPaymentLink

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.bqr_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.fynd.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.epaylater.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.juspay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ajiodhan.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.simpl.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.rupifi.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.mswipe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.stripe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ccavenue.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.payubiz.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.jiopay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.upi_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200


#### checkAndUpdatePaymentStatusPaymentLink

- ##### What's Deprecated
	- [Deleted] Required status from property <code>amount</code> in request body
	- [Deleted] Required status from property <code>contact</code> in request body
	- [Deleted] Required status from property <code>currency</code> in request body
	- [Deleted] Required status from property <code>customer_id</code> in request body
	- [Deleted] Required status from property <code>email</code> in request body
	- [Deleted] Required status from property <code>merchant_transaction_id</code> in request body
	- [Deleted] Required status from property <code>order_id</code> in request body
	- [Deleted] Required status from property <code>status</code> in request body


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


## Partner Client



### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### Webhook



#### getHistoricalReports

- ##### What's New
	- [Added] property <code>items[].filters.webhook_type</code> of schema <code>HistoryFilters</code> in response with status code 200


#### fetchSubscribers

- ##### What's New
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping.topic</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].group</code> of schema <code>EventConfigResponse</code> in response with status code 200
	- [Added] property <code>items[].provider</code> of schema <code>ItemSchema</code> in response with status code 200


## Platform Client

- [Added] Analytics class in platform client


### Cart



#### overrideCart

- ##### What's New
	- [Added] property <code>callback_url</code> of schema <code>OverrideCheckoutReq</code> in request body


#### getPriceAdjustments

- ##### What's New
	- [Added] method <code>getPriceAdjustments</code>



### Catalog



#### getApplicationBrandListing

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getApplicationBrands

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getCategories

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].items[].childs[].childs[].childs[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getApplicationCategoryListing

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getAllCollections

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getCollectionItems

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getAppicationProducts

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getProductDetailBySlug

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>brand.action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getInventoryBulkUploadHistory

- ##### What's New
	- [Added] <code>query</code> parameter <code>search</code> (type: <code>string</code>)

	- [Breaking] [Added] properties <code>items[].failed_records[].identifiers</code>, <code>items[].failed_records[].message</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>items[].failed_records[]</code> of schema <code>BulkInventoryGetItems</code> in response with status code 200


#### createMarketplaceOptin

- ##### What's New
	- [Added] Response with status 201

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 200

- ##### What's Changed
	- [Changed] Path From <code>/service/platform/catalog/v1.0/company/{company_id}/marketplaces/{marketplace}/optin/</code> To <code>/service/platform/catalog/v1.0/company/{company_id}/channel/{marketplace_slug}/opt-in</code>


#### getConfigurationMetadata

- ##### What's New
	- [Breaking] [Added] properties <code>condition[].key</code>, <code>condition[].display</code> in response with status code 200
	- [Breaking] [Added] properties <code>data[].key</code>, <code>data[].display</code>, <code>data[].filter_types</code>, <code>data[].compatible_units</code> in response with status code 200
	- [Breaking] [Added] properties <code>values.type</code>, <code>values.sort</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>values[]</code> of schema <code>GetConfigMetadataResponse</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>array</code> to <code>object</code> of property <code>values</code> of schema <code>GetConfigMetadataResponse</code> in response with status code 200


#### uploadBulkProducts

- ##### What's New
	- [Added] property <code>product_type</code> of schema <code>BulkProductJob</code> in request body
	- [Added] property <code>department</code> of schema <code>BulkProductJob</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>cancelled</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>cancelled_records</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>created_by</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>created_on</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>custom_template_tag</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>failed</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>failed_records</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>is_active</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>modified_by</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>modified_on</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>stage</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>succeed</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>total</code> of schema <code>BulkJob</code> in request body
	- [Breaking] [Deleted] property <code>tracking_url</code> of schema <code>BulkJob</code> in request body
	- [Deleted] Required status from properties <code>company_id</code>, <code>created_on</code> in request body


### Content



#### createBlog

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### updateBlog

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### deleteBlog

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### getComponentById

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### getLandingPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createLandingPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateLandingPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteLandingPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createNavigation

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getDefaultNavigations

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getNavigationBySlug

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateNavigation

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteNavigation

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPageMeta

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>system_pages[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>system_pages[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPagePreview

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePagePreview

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createSlideshow

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getSlideshowBySlug

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateSlideshow

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deleteSlideshow

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getBlogBySlug

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>publish_date</code> of schema <code>BlogSchema</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPageBySlug

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### Serviceability



#### patchApplicationServiceabilitySelfShipment
- [Note] This method is deprecated and it will be removed in future versions.


### Order



#### getManifestShipments

- ##### What's Changed
	- [Changed] Path From <code>/service/platform/order-manage/v1.0/company/{company_id}/manifests/shipments</code> To <code>/service/platform/order-manage/v1.0/company/{company_id}/manifest/shipments-listing</code>


#### getManifests

- ##### What's New
	- [Added] property <code>items[].filters.deselected_shipments</code> of schema <code>Filters</code> in response with status code 200
	- [Added] property <code>items[].meta.filters.deselected_shipments</code> of schema <code>Filters</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>items[].filters.dp_ids</code> of schema <code>Filters</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>items[].meta.filters.dp_ids</code> of schema <code>Filters</code> in response with status code 200


#### processManifests

- ##### What's New
	- [Added] property <code>items.filters.deselected_shipments</code> of schema <code>Filters</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>items.filters.dp_ids</code> of schema <code>Filters</code> in response with status code 200


#### getManifestDetails

- ##### What's New
	- [Added] property <code>manifest_details[].filters.deselected_shipments</code> of schema <code>Filters</code> in response with status code 200
	- [Added] property <code>manifest_details[].meta.filters.deselected_shipments</code> of schema <code>Filters</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>manifest_details[].filters.dp_ids</code> of schema <code>Filters</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>manifest_details[].meta.filters.dp_ids</code> of schema <code>Filters</code> in response with status code 200


#### dispatchManifests

- ##### What's Deprecated
	- [Breaking] [Deleted] Required <code>path</code> parameter <code>manifestId</code> (type: <code>string</code>)


- ##### What's Changed
	- [Changed] Path From <code>/service/platform/order-manage/v1.0/company/{company_id}/manifest/{manifest_id}/dispatch</code> To <code>/service/platform/order-manage/v1.0/company/{company_id}/manifest/dispatch</code>


#### generateProcessManifest

- ##### What's New
	- [Added] method <code>generateProcessManifest</code>



### Payment



#### getPosPaymentModeRoutes

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.bqr_razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.fynd.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.epaylater.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.razorpay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.juspay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ajiodhan.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.simpl.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.rupifi.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.mswipe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.stripe.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.ccavenue.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.payubiz.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code>payment_options.payment_flows.jiopay.payment_flow_data</code> of schema <code>AggregatorRoute</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200


### Webhook



#### getHistoricalReports

- ##### What's New
	- [Added] property <code>items[].filters.webhook_type</code> of schema <code>HistoryFilters</code> in response with status code 200


#### fetchAllEventConfigurations

- ##### What's New
	- [Added] property <code>event_configs[].subscriber_event_mapping.topic</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Added] property <code>event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.event_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.subscriber_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200


#### registerSubscriberToEvent

- ##### What's New
	- [Added] property <code>provider</code> of schema <code>SubscriberConfigResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscribersByCompany

- ##### What's New
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping.topic</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200
	- [Added] property <code>items[].provider</code> of schema <code>SubscriberResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.event_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.subscriber_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200


#### updateSubscriberConfig

- ##### What's New
	- [Added] property <code>provider</code> of schema <code>SubscriberConfigResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscriberById

- ##### What's New
	- [Added] property <code>event_configs[].subscriber_event_mapping.topic</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Added] property <code>event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200
	- [Added] property <code>provider</code> of schema <code>SubscriberResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.event_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>event_configs[].subscriber_event_mapping.subscriber_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200


#### getSubscribersByExtensionId

- ##### What's New
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping.topic</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200
	- [Added] property <code>items[].provider</code> of schema <code>SubscriberResponse</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from <code>blocked</code> from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.event_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>items[].event_configs[].subscriber_event_mapping.subscriber_id</code> of schema <code>SubscriberEventMapping</code> in response with status code 200


#### registerSubscriberToEventV2

- ##### What's New
	- [Added] method <code>registerSubscriberToEventV2</code>



#### updateSubscriberV2

- ##### What's New
	- [Added] method <code>updateSubscriberV2</code>



## Public Client



### Webhook



#### fetchAllWebhookEvents

- ##### What's New
	- [Added] property <code>event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200


#### queryWebhookEventDetails

- ##### What's New
	- [Added] property <code>event_configs[].group</code> of schema <code>EventConfig</code> in response with status code 200


# CHANGE LOG (1.4.6) - fp-v1.9.2

## Application Client

- [Breaking] [Removed] PosCart class from application client


### Cart



#### getCart

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### addItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### updateCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)


- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)


- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### removeCoupon

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyRewardPoints

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### selectAddress

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### selectPaymentMode

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### validateCouponForPayment

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)



#### getShipments

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartShipmentsResponse</code> in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)

	- [Added] property <code>iin</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>network</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>type</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>card_id</code> of schema <code>CartCheckoutDetailRequest</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CheckCart</code> in response with status code 200


#### getCartSharedItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 200
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 404


#### updateCartWithSharedItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 200


#### getPromotionOffers

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)



#### checkoutCartV2

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)

	- [Added] property <code>iin</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>network</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>type</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>card_id</code> of schema <code>CartCheckoutDetailV2Request</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CheckCart</code> in response with status code 200


### Catalog



#### getProductStockForTimeByIds

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getBrands

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getHomeProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getCollections

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getCollectionItemsBySlug

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getFollowedListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getStores

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getInStockLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getProductSellersBySlug

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


### Content



#### getBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.popup.type</code> in response with status code 200


#### getSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


### Lead



#### getTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### submitCustomForm

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getParticipantsInsideVideoRoom

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


### Logistic



#### getLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCountries

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getLocalities

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Order



#### getOrders

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>items[].shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>items[].shipments[].payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>items[].shipments[].order</code> of schema <code>Shipments</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>order.shipments[].payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>order.shipments[].order</code> of schema <code>Shipments</code> in response with status code 200


#### getPosOrderById

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getPosOrderById</code>



#### getShipmentById

- ##### What's New
	- [Added] property <code>shipment.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipment.bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipment.bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipment.bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>shipment.payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>shipment.order</code> of schema <code>Shipments</code> in response with status code 200


### Payment



#### getPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### getPosPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### walletLinkInitate

- ##### What's Changed
	- [Breaking] [Changed] operationId from <code>walletLinkInitate</code> to <code>walletLinkInitiate</code>


#### validateVPA

- ##### What's New
	- [Added] property <code>aggregator</code> of schema <code>ValidateVPARequest</code> in request body


#### getPaymentModeRoutesPaymentLink

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### createPaymentOrder

- ##### What's Deprecated
	- [Deleted] Required status from property <code>success</code> in response with status code 200


### Rewards



#### getUserPointsHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Share



#### createShortLink

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinkByHash

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getOriginalShortLinkByHash

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### User



#### loginWithFacebook

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogle

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogleAndroid

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogleIOS

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithAppleIOS

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithOTP

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>SendOtpRequestSchema</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithEmailAndPassword

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetPasswordEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetPasswordMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### forgotPassword

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### resetForgotPassword

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetToken

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithToken

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>code</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>info</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>request_id</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>error</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>meta</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>authenticated</code> of schema <code>APIError</code> in response with status code 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### registerWithForm

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### hasPassword

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>boolean</code> to <code>integer</code> of property <code>result</code> of schema <code>HasPasswordSuccess</code> in response with status code 200


#### updatePassword

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500
	- [Breaking] [Deleted] Response with status 4XX


#### deleteUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500
	- [Breaking] [Deleted] Response with status 4XX


#### logout

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendOTPOnMobile

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>SendMobileOtpRequestSchema</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendForgotOTPOnMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobileOTP

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobileForgotOTP

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendOTPOnEmail

- ##### What's New
	- [Added] property <code>resend_email_token</code> of schema <code>EmailOtpSuccess</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendForgotOTPOnEmail

- ##### What's New
	- [Added] property <code>resend_email_token</code> of schema <code>EmailOtpSuccess</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmailOTP

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmailForgotOTP

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getLoggedInUser

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getListOfActiveSessions

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getPlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.accountkit</code> of schema <code>SocialTokens</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>social_tokens.account_kit</code> of schema <code>SocialTokens</code> in response with status code 200
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateProfile

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>EditProfileRequestSchema</code> in request body
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### addMobileNumber

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteMobileNumber

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### setMobileNumberAsPrimary

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendVerificationLinkToMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### addEmail

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteEmail

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### setEmailAsPrimary

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendVerificationLinkToEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### userExists

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributes

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttributes

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


## Partner Client



### Lead



#### getTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


### Logistics



#### getSampleFileServiceabilityStatus

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getBulkTat

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getBulkServiceability

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCountries

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### Webhook



#### getDeliveryDetailInsights

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>rows[].data</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>rows[].last_attempted_on</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getHistoricalReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.end_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.start_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].created_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].updated_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### fetchSubscribers

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


## Platform Client

- [Breaking] [Removed] Inventory class from platform client


### Cart



#### getCoupons

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### createCoupon

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getCouponById

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCoupon

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCouponPartially

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### getPromotions

- ##### What's New
	- [Added] property <code>items[].tags</code> of schema <code>PromotionListItem</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### createPromotion

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionAdd</code> in request body
	- [Added] property <code>tags</code> of schema <code>PromotionAdd</code> in response with status code 201
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getPromotionById

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updatePromotion

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in request body
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updatePromotionPartially

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigUpdate</code> in request body
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### fetchCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### createCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in request body
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in response with status code 201
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### updatePriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### removePriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### addPriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getAbandonedCart

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### platformCheckoutCart

- ##### What's New
	- [Added] property <code>iin</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>network</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>type</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>card_id</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body


#### platformCheckoutCartV2

- ##### What's New
	- [Added] property <code>iin</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>network</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>type</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>card_id</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body


### Catalog



#### getApplicationBrandListing

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getApplicationBrands

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getCategories

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200


#### getApplicationCategoryListing

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAllCollections

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### createCollection

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body


#### updateCollection

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200


#### getCollectionItems

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].brand.action.page.type</code> in response with status code 200
	- [Added] property <code>items[].brand.action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### addCollectionItems

- ##### What's New
	- [Breaking] [Added] Required status to property <code>type</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>items_not_updated</code> of schema <code>UpdatedResponse</code> in response with status code 200


#### getCollectionDetail

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200


#### getApplicationDepartmentListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAppLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAppProduct

- ##### What's New
	- [Added] property <code>_custom_json</code> of schema <code>OwnerAppItemResponse</code> in response with status code 200
	- [Added] property <code>_custom_meta</code> of schema <code>OwnerAppItemResponse</code> in response with status code 200


#### getAppicationProducts

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].brand.action.page.type</code> in response with status code 200
	- [Added] property <code>items[].brand.action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDiscountedInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductDetailBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>brand.action.page.type</code> in response with status code 200
	- [Added] property <code>brand.action.popup</code> of schema <code>Action</code> in response with status code 200


#### getAppProducts

- ##### What's New
	- [Added] property <code>items[].store_id_list</code> of schema <code>RawProduct</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAutocompleteConfig

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAutocompleteKeywordDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### updateAutocompleteKeyword

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAllSearchKeyword

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getSearchKeywords

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listCategories

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listDepartmentsData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDepartmentData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventories

- ##### What's New
	- [Added] <code>query</code> parameter <code>pageId</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>pageType</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>brandIds</code> (type: <code>array</code>)

	- [Added] <code>query</code> parameter <code>sellerIdentifiers</code> (type: <code>array</code>)

	- [Added] <code>query</code> parameter <code>qtyGt</code> (type: <code>integer</code>)

	- [Added] <code>query</code> parameter <code>qtyLt</code> (type: <code>integer</code>)

	- [Added] <code>query</code> parameter <code>qtyType</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>fromDate</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>toDate</code> (type: <code>string</code>)

	- [Added] property <code>items[].quantities.damaged.updated_at</code> of schema <code>Quantity</code> in response with status code 200
	- [Added] property <code>items[].quantities.not_available.updated_at</code> of schema <code>Quantity</code> in response with status code 200
	- [Added] property <code>items[].quantities.order_committed.updated_at</code> of schema <code>Quantity</code> in response with status code 200
	- [Added] property <code>items[].quantities.sellable.updated_at</code> of schema <code>Quantity</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBulkUploadHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getMarketplaceOptinDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getCompanyBrandDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getStoreDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductBundle

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductAssetsInBulk

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductBulkUploadHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listProductTemplate

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listProductTemplateCategories

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductSize

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBySize

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getVariantsOfProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getConfigurationMetadata

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getMarketplaces

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getApplicationFilterValues

- ##### What's New
	- [Added] method <code>getApplicationFilterValues</code>



#### getApplicationFilterKeys

- ##### What's New
	- [Added] method <code>getApplicationFilterKeys</code>



### Communication



#### createSmsProvider

- ##### What's New
	- [Added] property <code>token</code> of schema <code>SmsProviderReq</code> in request body


#### updateSmsProviderById

- ##### What's New
	- [Added] property <code>token</code> of schema <code>SmsProviderReq</code> in request body


#### verfiyOtp

- ##### What's New
	- [Added] property <code>email</code> of schema <code>VerifyOtpCommsSuccessRes</code> in response with status code 200


### CompanyProfile



#### createBrand

- ##### What's New
	- [Added] property <code>slug_key</code> of schema <code>CreateBrandRequestSerializer</code> in request body


#### getBrands

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200


### Configuration



#### getApplicationById

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>tokens[].created_by</code> of schema <code>TokenSchema</code> in response with status code 200


### Content



#### createBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deleteBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getComponentById

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getLandingPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.popup.type</code> in response with status code 200


#### createLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### updateLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### deleteLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>items[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### createNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in request body
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getDefaultNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>items[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getNavigationBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### updateNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in request body
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### deleteNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getPageMeta

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>system_pages[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>system_pages[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>system_pages[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>system_pages[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>system_pages[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPagePreview

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePagePreview

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.popup.type</code> in response with status code 200


#### createSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getSlideshowBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### updateSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### deleteSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getBlogBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPageBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### FileStorage



#### proxy

- ##### What's New
	- [Breaking] [Added] properties <code>data</code>, <code>support</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>binary</code> from property <code></code> of schema <code></code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code></code> of schema <code></code> in response with status code 200


#### getDefaultPdfData

- ##### What's New
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].payload.company_detail.gstin</code> of schema <code>CompanyDetail</code> in response with status code 200
	- [Breaking] [Added] Possible nullable value <code>true</code> to property <code>data[].payload.company_detail.phone_no</code> of schema <code>CompanyDetail</code> in response with status code 200


### Finance



#### generateReport

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### downloadReport

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getReason

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getReportList

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### creditlineDataplatform

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### invoiceListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### generateReportCustomerCn

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>data.page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>data.page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data.page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data.page.item_count</code> of schema <code>Page</code> in response with status code 200


### Lead



#### getPlatformTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getNewTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getPlatformTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editPlatformTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getNewTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editNewTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createPlatformTicketHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### createNewHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### getCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### deleteCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getCustomForms

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getPlatformVideoParticipants

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


#### getNewVideoParticipants

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


### Serviceability



#### getZones

- ##### What's New
	- [Breaking] [Added] properties <code>page.has_next</code>, <code>page.item_total</code>, <code>page.size</code>, <code>page.current</code>, <code>page.type</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>page.current</code>, <code>page.has_next</code>, <code>page.item_total</code>, <code>page.size</code>, <code>page.type</code> in response with status code 200
	- [Added] property <code>items[].channels[]</code> of schema <code>ListViewItems</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page[]</code> of schema <code>ListViewResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>items[].product</code> of schema <code>ListViewItems</code> in response with status code 200
	- [Deleted] properties <code>items[].channels.channel_id</code>, <code>items[].channels.channel_type</code> in response with status code 200
	- [Deleted] Required status from properties <code>items[].channels.channel_id</code>, <code>items[].channels.channel_type</code> in response with status code 200
	- [Deleted] Required status from property <code>items[].product</code> in response with status code 200
	- [Deleted] Required status from property <code>summary</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>array</code> to <code>object</code> of property <code>page</code> of schema <code>ListViewResponse</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>items[].channels</code> of schema <code>ListViewChannels</code> in response with status code 200


#### getOptimalLocations

- ##### What's New
	- [Added] property <code>channel_id</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>channel_type</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>channel_identifier</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>to_serviceability</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>article</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>assigned_stores</code> of schema <code>OptimalLocationsResponse</code> in response with status code 200
	- [Added] property <code>faulty_articles</code> of schema <code>OptimalLocationsResponse</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>to_pincode</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>identifier</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>configuration</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>ignored_locations</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>articles</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Deleted] Required status from property <code>to_pincode</code> in request body
	- [Breaking] [Deleted] property <code>to_pincode</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>success</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>error</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>articles</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Deleted] Required status from property <code>success</code> in response with status code 200
	- [Deleted] Required status from property <code>to_pincode</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Required status of property <code>configuration</code> in request body
	- [Breaking] [Changed] Required status of property <code>identifier</code> in request body
	- [Breaking] [Changed] Required status of property <code>ignored_locations</code> in request body
	- [Breaking] [Changed] Required status of property <code>error</code> in response with status code 200
	- [Changed] Path From <code>/service/platform/logistics/v1.0/company/{company_id}/reassign</code> To <code>/service/platform/logistics/v1.0/company/{company_id}/optimal-locations</code>


#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getCourierPartnerRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getBulkTat

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getStoreRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getBulkServiceability

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPackageMaterialList

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPackageMaterialRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


### Order



#### invalidateShipmentCache
- [Note] This method is deprecated and it will be removed in future versions.


#### updateShipmentLock

- ##### What's New
	- [Added] property <code>resume_tasks_after_unlock</code> of schema <code>UpdateShipmentLockPayload</code> in request body
	- [Added] property <code>lock_after_transition</code> of schema <code>UpdateShipmentLockPayload</code> in request body
	- [Added] property <code>unlock_before_transition</code> of schema <code>UpdateShipmentLockPayload</code> in request body


#### click2Call

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>click2Call</code>



#### sendSmsNinja

- ##### What's New
	- [Added] property <code>result[].order_details.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200


#### createOrder

- ##### What's New
	- [Added] property <code>shipments[].price.amount_to_be_collected</code> of schema <code>Prices</code> in request body
	- [Added] property <code>ordering_store_id</code> of schema <code>CreateOrderAPI</code> in request body
	- [Added] property <code>order_platform</code> of schema <code>CreateOrderAPI</code> in request body

- ##### What's Deprecated
	- [Deleted] Required status from property <code>user_info.primary_email</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>shipments[].gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in request body


#### checkOrderStatus

- ##### What's New
	- [Added] property <code>result[].order_details.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property <code>items[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].bags[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>items[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].payment_info</code> of schema <code>ShipmentItem</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.payment_info</code> of schema <code>OrderData</code> in response with status code 200
	- [Added] property <code>shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200


#### getOrders

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>items[].shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>items[].shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>items[].shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getApplicationShipments

- ##### What's New
	- [Added] property <code>items[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].bags[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>items[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].payment_info</code> of schema <code>ShipmentItem</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getBagById

- ##### What's New
	- [Added] property <code>data.article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>data.financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>data.order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.shipment.price.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.brand.modified_on</code> of schema <code>Brand</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.fulfilling_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.ordering_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.shipment.gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.shipment_gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200


#### getBags

- ##### What's New
	- [Added] property <code>data.items[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>data.items[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>data.items[].order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.items[].shipment.price.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].brand.modified_on</code> of schema <code>Brand</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].fulfilling_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].ordering_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.items[].shipment.gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.items[].shipment_gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200


### Payment



#### edcDeviceList

- ##### What's New
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPosPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200


#### updatePaymentSession

- ##### What's New
	- [Added] property <code>checksum</code> of schema <code>PaymentSessionRequestSerializer</code> in request body
	- [Breaking] [Added] Required status to property <code>checksum</code> in request body


#### updateRefundSession

- ##### What's New
	- [Added] property <code>refund_details[].pg_refund_id</code> of schema <code>RefundSessionDetail</code> in request body
	- [Added] property <code>checksum</code> of schema <code>RefundSessionRequestSerializer</code> in request body
	- [Breaking] [Added] Required status to property <code>total_amount</code> in request body
	- [Breaking] [Added] Required status to property <code>checksum</code> in request body


### Share



#### createShortLink

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinks

- ##### What's New
	- [Breaking] [Deleted] <code>query</code> parameter <code>q</code> (type: <code>string</code>),
 [Added] <code>query</code> parameter <code>shortUrl</code> (type: <code>string</code>)
	- [Added] <code>query</code> parameter <code>originalUrl</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>title</code> (type: <code>string</code>)

	- [Added] property <code>items[].url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>items[].url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinkByHash

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### updateShortLinkById

- ##### What's New
	- [Added] property <code>url.short_url</code> of schema <code>UrlInfo</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getThemeLibrary

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getThemeLibrary</code>



#### addToThemeLibrary

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>addToThemeLibrary</code>



#### getPublicThemes

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>getPublicThemes</code>



#### publishTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>publishTheme</code>



#### unpublishTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>unpublishTheme</code>



#### archiveTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>archiveTheme</code>



#### unarchiveTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] method <code>unarchiveTheme</code>



### User



#### getCustomers

- ##### What's New
	- [Added] property <code>items[].rr_id</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>items[].archive</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>items[].status</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### searchUsers

- ##### What's New
	- [Added] property <code>users[].rr_id</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>users[].archive</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>users[].status</code> of schema <code>UserSearchSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUser

- ##### What's New
	- [Added] property <code>rr_id</code> of schema <code>CreateUserRequestSchema</code> in request body
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### blockOrUnblockUsers

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### archiveUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### unDeleteUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUser

- ##### What's New
	- [Added] property <code>rr_id</code> of schema <code>UpdateUserRequestSchema</code> in request body
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserSession

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteSession

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getActiveSessions

- ##### What's New
	- [Added] property <code>items[].location</code> of schema <code>SessionListResponseInfo</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteActiveSessions

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getPlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in response with status code 200
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in response with status code 200
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updatePlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in request body
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in request body
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in request body
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in request body
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in request body
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in request body
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in response with status code 200
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in response with status code 200
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in request body
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in request body
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserGroup

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserGroups

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserGroup

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserGroupById

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserGroupPartially

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserAttributeDefinition

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributeDefinitions

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttributeDefinition

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteUserAttributeDefinitionById

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributesForUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributeById

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


### Webhook



#### downloadDeliveryReport

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>end_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Deleted] Value format from <code>date-time</code> from property <code>start_date</code> of schema <code>EventProcessRequest</code> in request body


#### getHistoricalReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.end_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.start_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].created_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].updated_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDeliveryReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>end_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Deleted] Value format from <code>date-time</code> from property <code>start_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>rows[].data</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>rows[].last_attempted_on</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### fetchAllEventConfigurations

- ##### What's New
	- [Added] property <code>event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200


#### registerSubscriberToEvent

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscribersByCompany

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### updateSubscriberConfig

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscriberById

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscribersByExtensionId

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


## Public Client



### Billing



#### getStandardPlans

- ##### What's New
	- [Breaking] [Deleted] Required <code>query</code> parameter <code>platformType</code> (type: <code>string</code>),
 [Breaking] [Added] Required <code>query</code> parameter <code>platform</code> (type: <code>string</code>)


### Content



#### getCredentialsByEntity

- ##### What's New
	- [Breaking] [Added] Required status to path parameter <code>entity</code>








# CHANGE LOG (1.4.3) - fp-v1.9.2

## Application Client



### Cart



#### getCart

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### addItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### updateCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)


- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)


- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### removeCoupon

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### applyRewardPoints

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### selectAddress

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 201


#### selectPaymentMode

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartDetailResponse</code> in response with status code 200


#### validateCouponForPayment

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)



#### getShipments

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>last_modified</code> of schema <code>CartShipmentsResponse</code> in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)

	- [Added] property <code>iin</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>network</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>type</code> of schema <code>CartCheckoutDetailRequest</code> in request body
	- [Added] property <code>card_id</code> of schema <code>CartCheckoutDetailRequest</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CheckCart</code> in response with status code 200


#### getCartSharedItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 200
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 404


#### updateCartWithSharedItems

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>SharedCart</code> in response with status code 200


#### getPromotionOffers

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)



#### checkoutCartV2

- ##### What's New
	- [Added] <code>query</code> parameter <code>cartType</code> (type: <code>string</code>)

	- [Added] property <code>iin</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>network</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>type</code> of schema <code>CartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>card_id</code> of schema <code>CartCheckoutDetailV2Request</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Value format from <code>date</code> to <code>date-time</code> of property <code>cart.last_modified</code> of schema <code>CheckCart</code> in response with status code 200


### Catalog



#### getProductStockForTimeByIds

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getBrands

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getHomeProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getCollections

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getCollectionItemsBySlug

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getFollowedListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getStores

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getInStockLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


#### getProductSellersBySlug

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200


### Content



#### getBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.popup.type</code> in response with status code 200


#### getSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


### Lead



#### getTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### submitCustomForm

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>ticket.priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getParticipantsInsideVideoRoom

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


### Logistic



#### getLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCountries

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getLocalities

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Order



#### getOrders

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>items[].shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>items[].shipments[].payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>items[].shipments[].order</code> of schema <code>Shipments</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>order.shipments[].payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>order.shipments[].order</code> of schema <code>Shipments</code> in response with status code 200


#### getPosOrderById

- ##### What's New
	- [Added] property <code>order.shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>order.shipments[].bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>order.shipments[].payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>order.shipments[].order</code> of schema <code>Shipments</code> in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property <code>shipment.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipment.bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipment.bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipment.bags[].article</code> of schema <code>Bags</code> in response with status code 200
	- [Added] property <code>shipment.payment_info</code> of schema <code>Shipments</code> in response with status code 200
	- [Added] property <code>shipment.order</code> of schema <code>Shipments</code> in response with status code 200


### Payment



#### getPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### getPosPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### walletLinkInitate

- ##### What's Changed
	- [Breaking] [Changed] operationId from <code>walletLinkInitate</code> to <code>walletLinkInitiate</code>


#### validateVPA

- ##### What's New
	- [Added] property <code>aggregator</code> of schema <code>ValidateVPARequest</code> in request body


#### getPaymentModeRoutesPaymentLink

- ##### What's New
	- [Added] property <code>payment_options.payment_option[]</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties <code>payment_options.payment_option.is_pay_by_card_pl</code>, <code>payment_options.payment_option.add_card_enabled</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.list</code>, <code>payment_options.payment_option.save_card</code>, <code>payment_options.payment_option.aggregator_name</code>, <code>payment_options.payment_option.name</code>, <code>payment_options.payment_option.anonymous_enable</code> in response with status code 200
	- [Deleted] Required status from properties <code>payment_options.payment_option.display_name</code>, <code>payment_options.payment_option.display_priority</code>, <code>payment_options.payment_option.name</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>payment_options.payment_option</code> of schema <code>RootPaymentMode</code> in response with status code 200


#### createPaymentOrder

- ##### What's Deprecated
	- [Deleted] Required status from property <code>success</code> in response with status code 200


### Rewards



#### getUserPointsHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Share



#### createShortLink

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinkByHash

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getOriginalShortLinkByHash

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### User



#### loginWithFacebook

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogle

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogleAndroid

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithGoogleIOS

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithAppleIOS

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithOTP

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>SendOtpRequestSchema</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithEmailAndPassword

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetPasswordEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetPasswordMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### forgotPassword

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### resetForgotPassword

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendResetToken

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### loginWithToken

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>code</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>info</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>request_id</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>error</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>meta</code> of schema <code>APIError</code> in response with status code 400
	- [Added] property <code>authenticated</code> of schema <code>APIError</code> in response with status code 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### registerWithForm

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### hasPassword

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>boolean</code> to <code>integer</code> of property <code>result</code> of schema <code>HasPasswordSuccess</code> in response with status code 200


#### updatePassword

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500
	- [Breaking] [Deleted] Response with status 4XX


#### deleteUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500
	- [Breaking] [Deleted] Response with status 4XX


#### logout

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendOTPOnMobile

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>SendMobileOtpRequestSchema</code> in request body
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendForgotOTPOnMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobileOTP

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyMobileForgotOTP

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendOTPOnEmail

- ##### What's New
	- [Added] property <code>resend_email_token</code> of schema <code>EmailOtpSuccess</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendForgotOTPOnEmail

- ##### What's New
	- [Added] property <code>resend_email_token</code> of schema <code>EmailOtpSuccess</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmailOTP

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### verifyEmailForgotOTP

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getLoggedInUser

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getListOfActiveSessions

- ##### What's New
	- [Added] Response with status 401

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getPlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.accountkit</code> of schema <code>SocialTokens</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>social_tokens.account_kit</code> of schema <code>SocialTokens</code> in response with status code 200
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateProfile

- ##### What's New
	- [Added] property <code>encrypt_otp</code> of schema <code>EditProfileRequestSchema</code> in request body
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### addMobileNumber

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteMobileNumber

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### setMobileNumberAsPrimary

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendVerificationLinkToMobile

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### addEmail

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteEmail

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### setEmailAsPrimary

- ##### What's New
	- [Added] property <code>user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### sendVerificationLinkToEmail

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### userExists

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributes

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttributes

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


## Partner Client



### Lead



#### getTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


### Logistics



#### getSampleFileServiceabilityStatus

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getBulkTat

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getBulkServiceability

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


#### getCountries

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### Webhook



#### getDeliveryDetailInsights

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>rows[].data</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>rows[].last_attempted_on</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getHistoricalReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.end_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.start_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].created_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].updated_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### fetchSubscribers

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


## Platform Client



### Cart



#### getCoupons

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### createCoupon

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getCouponById

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCoupon

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCouponPartially

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### getPromotions

- ##### What's New
	- [Added] property <code>items[].tags</code> of schema <code>PromotionListItem</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### createPromotion

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionAdd</code> in request body
	- [Added] property <code>tags</code> of schema <code>PromotionAdd</code> in response with status code 201
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getPromotionById

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updatePromotion

- ##### What's New
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in request body
	- [Added] property <code>tags</code> of schema <code>PromotionUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updatePromotionPartially

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 404


#### updateCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigUpdate</code> in request body
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigUpdate</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### fetchCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in response with status code 200
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### createCartMetaConfig

- ##### What's New
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in request body
	- [Added] property <code>max_cart_value</code> of schema <code>CartMetaConfigAdd</code> in response with status code 201
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### updatePriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### removePriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### addPriceAdjustment

- ##### What's New
	- [Added] property <code>error</code> of schema <code>OperationErrorResponse</code> in response with status code 400


#### getAbandonedCart

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.page</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.last_id</code> of schema <code>Page</code> in response with status code 200


#### platformCheckoutCart

- ##### What's New
	- [Added] property <code>iin</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>network</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>type</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body
	- [Added] property <code>card_id</code> of schema <code>PlatformCartCheckoutDetailRequest</code> in request body


#### platformCheckoutCartV2

- ##### What's New
	- [Added] property <code>iin</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>network</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>type</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body
	- [Added] property <code>card_id</code> of schema <code>PlatformCartCheckoutDetailV2Request</code> in request body


### Catalog



#### getApplicationBrandListing

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getApplicationBrands

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getCategories

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data[].items[].childs[].childs[].childs[].action.page.type</code> in response with status code 200
	- [Added] property <code>data[].items[].childs[].childs[].childs[].action.popup</code> of schema <code>Action</code> in response with status code 200


#### getApplicationCategoryListing

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAllCollections

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Added] property <code>items[].action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### createCollection

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body


#### updateCollection

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in request body
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in request body
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200


#### getCollectionItems

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].brand.action.page.type</code> in response with status code 200
	- [Added] property <code>items[].brand.action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### addCollectionItems

- ##### What's New
	- [Breaking] [Added] Required status to property <code>type</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>items_not_updated</code> of schema <code>UpdatedResponse</code> in response with status code 200


#### getCollectionDetail

- ##### What's New
	- [Breaking] [Added] Required status to property <code>seo.breadcrumbs[].action[].type</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].key</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Added] property <code>seo.meta_tags[].items[].value</code> of schema <code>ApplicationItemSeoMetaTagItem</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>seo.meta_tags[].items[].key</code>, <code>seo.meta_tags[].items[].value</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].title</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200
	- [Breaking] [Deleted] property <code>seo.meta_tags[].items[].items</code> of schema <code>ApplicationItemSeoMetaTags</code> in response with status code 200


#### getApplicationDepartmentListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAppLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAppProduct

- ##### What's New
	- [Added] property <code>_custom_json</code> of schema <code>OwnerAppItemResponse</code> in response with status code 200
	- [Added] property <code>_custom_meta</code> of schema <code>OwnerAppItemResponse</code> in response with status code 200


#### getAppicationProducts

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>items[].brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].brand.action.page.type</code> in response with status code 200
	- [Added] property <code>items[].brand.action.popup</code> of schema <code>Action</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDiscountedInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductDetailBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>brand.action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Added] property <code>brand.action.page.params</code> of schema <code>ActionPage</code> in response with status code 200
	- [Added] property <code>brand.action.page.url</code> of schema <code>ActionPage</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>brand.action.page.type</code> in response with status code 200
	- [Added] property <code>brand.action.popup</code> of schema <code>Action</code> in response with status code 200


#### getAppProducts

- ##### What's New
	- [Added] property <code>items[].store_id_list</code> of schema <code>RawProduct</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAutocompleteConfig

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAutocompleteKeywordDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### updateAutocompleteKeyword

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getAllSearchKeyword

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getSearchKeywords

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listCategories

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listDepartmentsData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDepartmentData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventories

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBulkUploadHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getMarketplaceOptinDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getCompanyBrandDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getStoreDetail

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductBundle

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductAssetsInBulk

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductBulkUploadHistory

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listProductTemplate

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### listProductTemplateCategories

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProductSize

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getInventoryBySize

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getVariantsOfProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getConfigurationMetadata

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getProducts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getMarketplaces

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getApplicationFilterValues

- ##### What's New
	- [Added] method <code>getApplicationFilterValues</code>



#### getApplicationFilterKeys

- ##### What's New
	- [Added] method <code>getApplicationFilterKeys</code>



### Communication



#### createSmsProvider

- ##### What's New
	- [Added] property <code>token</code> of schema <code>SmsProviderReq</code> in request body


#### updateSmsProviderById

- ##### What's New
	- [Added] property <code>token</code> of schema <code>SmsProviderReq</code> in request body


#### verfiyOtp

- ##### What's New
	- [Added] property <code>email</code> of schema <code>VerifyOtpCommsSuccessRes</code> in response with status code 200


### CompanyProfile



#### editBrand

- ##### What's New
	- [Added] property <code>slug</code> of schema <code>CreateUpdateBrandRequestSerializer</code> in request body


#### createBrand

- ##### What's New
	- [Added] property <code>slug</code> of schema <code>CreateUpdateBrandRequestSerializer</code> in request body


#### getBrands

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getLocations

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200


### Configuration



#### getApplicationById

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>tokens[].created_by</code> of schema <code>TokenSchema</code> in response with status code 200


### Content



#### createBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getBlogs

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deleteBlog

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getComponentById

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getLandingPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].action.popup.type</code> in response with status code 200


#### createLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### updateLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### deleteLandingPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>action.popup.type</code> in response with status code 200


#### getNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>items[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### createNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in request body
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getDefaultNavigations

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>items[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getNavigationBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### updateNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in request body
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### deleteNavigation

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200


#### getPageMeta

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>system_pages[].navigation[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>system_pages[].navigation[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>system_pages[].navigation[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>system_pages[].navigation[].action.popup.type</code> in response with status code 200
	- [Added] property <code>system_pages[].navigation[].schedule</code> of schema <code>NavigationReference</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>custom_pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>custom_pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPagePreview

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePagePreview

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getSlideshows

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].media[].action.popup.type</code> in response with status code 200


#### createSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getSlideshowBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### updateSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media.action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>media.action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### deleteSlideshow

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>media[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>media[].action.popup.type</code> in response with status code 200


#### getBlogBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>items[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>items[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPageBySlug

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### FileStorage



#### proxy

- ##### What's New
	- [Breaking] [Added] properties <code>data</code>, <code>support</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>binary</code> from property <code></code> of schema <code></code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>string</code> to <code>object</code> of property <code></code> of schema <code></code> in response with status code 200


### Finance



#### generateReport

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### downloadReport

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getData

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getReason

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### getReportList

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### creditlineDataplatform

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### invoiceListing

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page.item_count</code> of schema <code>Page</code> in response with status code 200


#### generateReportCustomerCn

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>data.page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>data.page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>data.page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>data.page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>data.page.item_count</code> of schema <code>Page</code> in response with status code 200


### Lead



#### getPlatformTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createTicket

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getNewTickets

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>filters.priorities[].key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getPlatformTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editPlatformTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getNewTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editNewTicket

- ##### What's New
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>image</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>video</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>file</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>youtube</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>product</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>collection</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>brand</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>shipment</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>order</code> to property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Added] Possible values <code>platform_panel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>sales_channel</code> to property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>content.attachments[].type</code> of schema <code>TicketAssetTypeEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>source</code> of schema <code>TicketSourceEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createPlatformTicketHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### createNewHistory

- ##### What's New
	- [Added] Possible values <code>rating</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>log</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>comment</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Added] Possible values <code>thread</code> to property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>type</code> of schema <code>HistoryTypeEnum</code> in request body


#### getCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### editCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### deleteCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getCustomForms

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### createCustomForm

- ##### What's New
	- [Added] Possible values <code>low</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>medium</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>high</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>urgent</code> to property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Added] Possible values <code>low</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>medium</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>high</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Added] Possible values <code>urgent</code> to property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority</code> of schema <code>PriorityEnum</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>priority.key</code> of schema <code>PriorityEnum</code> in response with status code 200


#### getPlatformVideoParticipants

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


#### getNewVideoParticipants

- ##### What's New
	- [Added] property <code>participants[].user.application_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.user_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.meta</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.dob</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.external_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] property <code>participants[].user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>participants[].user.uid</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.debug</code> of schema <code>UserSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>participants[].user.has_old_password_hash</code> of schema <code>UserSchema</code> in response with status code 200


### Serviceability



#### getZones

- ##### What's New
	- [Breaking] [Added] properties <code>page.has_next</code>, <code>page.item_total</code>, <code>page.size</code>, <code>page.current</code>, <code>page.type</code> in response with status code 200
	- [Breaking] [Added] Required status to properties <code>page.current</code>, <code>page.has_next</code>, <code>page.item_total</code>, <code>page.size</code>, <code>page.type</code> in response with status code 200
	- [Added] property <code>items[].channels[]</code> of schema <code>ListViewItems</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>page[]</code> of schema <code>ListViewResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>items[].product</code> of schema <code>ListViewItems</code> in response with status code 200
	- [Deleted] properties <code>items[].channels.channel_id</code>, <code>items[].channels.channel_type</code> in response with status code 200
	- [Deleted] Required status from properties <code>items[].channels.channel_id</code>, <code>items[].channels.channel_type</code> in response with status code 200
	- [Deleted] Required status from property <code>items[].product</code> in response with status code 200
	- [Deleted] Required status from property <code>summary</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>array</code> to <code>object</code> of property <code>page</code> of schema <code>ListViewResponse</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>object</code> to <code>array</code> of property <code>items[].channels</code> of schema <code>ListViewChannels</code> in response with status code 200


#### getOptimalLocations

- ##### What's New
	- [Added] property <code>channel_id</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>channel_type</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>channel_identifier</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>to_serviceability</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>article</code> of schema <code>OptimlLocationsRequestSchema</code> in request body
	- [Added] property <code>assigned_stores</code> of schema <code>OptimalLocationsResponse</code> in response with status code 200
	- [Added] property <code>faulty_articles</code> of schema <code>OptimalLocationsResponse</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>to_pincode</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>identifier</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>configuration</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>ignored_locations</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Breaking] [Deleted] property <code>articles</code> of schema <code>ReAssignStoreRequest</code> in request body
	- [Deleted] Required status from property <code>to_pincode</code> in request body
	- [Breaking] [Deleted] property <code>to_pincode</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>success</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>error</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Breaking] [Deleted] property <code>articles</code> of schema <code>ReAssignStoreResponse</code> in response with status code 200
	- [Deleted] Required status from property <code>success</code> in response with status code 200
	- [Deleted] Required status from property <code>to_pincode</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Required status of property <code>configuration</code> in request body
	- [Breaking] [Changed] Required status of property <code>identifier</code> in request body
	- [Breaking] [Changed] Required status of property <code>ignored_locations</code> in request body
	- [Breaking] [Changed] Required status of property <code>error</code> in response with status code 200
	- [Changed] Path From <code>/service/platform/logistics/v1.0/company/{company_id}/reassign</code> To <code>/service/platform/logistics/v1.0/company/{company_id}/optimal-locations</code>


#### getCourierPartnerAccounts

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getCourierPartnerRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getBulkTat

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getStoreRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getBulkServiceability

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPackageMaterialList

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPackageMaterialRules

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_previous</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


### Order



#### updateShipmentLock

- ##### What's New
	- [Added] property <code>resume_tasks_after_unlock</code> of schema <code>UpdateShipmentLockPayload</code> in request body


#### sendSmsNinja

- ##### What's New
	- [Added] property <code>result[].order_details.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200


#### createOrder

- ##### What's New
	- [Added] property <code>shipments[].price.amount_to_be_collected</code> of schema <code>Prices</code> in request body
	- [Added] property <code>ordering_store_id</code> of schema <code>CreateOrderAPI</code> in request body
	- [Added] property <code>order_platform</code> of schema <code>CreateOrderAPI</code> in request body

- ##### What's Deprecated
	- [Deleted] Required status from property <code>user_info.primary_email</code> in request body

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>shipments[].gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in request body


#### checkOrderStatus

- ##### What's New
	- [Added] property <code>result[].order_details.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property <code>items[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].bags[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>items[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].payment_info</code> of schema <code>ShipmentItem</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property <code>order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>order.payment_info</code> of schema <code>OrderData</code> in response with status code 200
	- [Added] property <code>shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200


#### getOrders

- ##### What's New
	- [Added] <code>query</code> parameter <code>allowInactive</code> (type: <code>boolean</code>)

	- [Added] property <code>items[].shipments[].order.affiliate_order_id</code> of schema <code>OrderDetailsData</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].financial_breakup.amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].article.tags</code> of schema <code>OrderBagArticle</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].bags[].payment_info</code> of schema <code>OrderBags</code> in response with status code 200
	- [Added] property <code>items[].shipments[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].shipments[].order_platform</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Added] property <code>items[].shipments[].payment_info</code> of schema <code>PlatformShipment</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getApplicationShipments

- ##### What's New
	- [Added] property <code>items[].bags[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>items[].bags[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>items[].bags[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>items[].payment_info</code> of schema <code>ShipmentItem</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.type</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.has_next</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Deleted] Possible nullable value from <code>true</code> from property <code>page.current</code> of schema <code>Page</code> in response with status code 200


#### getBagById

- ##### What's New
	- [Added] property <code>data.article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>data.financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>data.order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.shipment.price.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.brand.modified_on</code> of schema <code>Brand</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.fulfilling_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.ordering_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.shipment.gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.shipment_gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200


#### getBags

- ##### What's New
	- [Added] property <code>data.items[].article.tags</code> of schema <code>Article</code> in response with status code 200
	- [Added] property <code>data.items[].financial_breakup[].amount_to_be_collected</code> of schema <code>FinancialBreakup</code> in response with status code 200
	- [Added] property <code>data.items[].order.prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.items[].prices.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200
	- [Added] property <code>data.items[].shipment.price.amount_to_be_collected</code> of schema <code>Prices</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].brand.modified_on</code> of schema <code>Brand</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].fulfilling_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>string</code> of property <code>data.items[].ordering_store.phone</code> of schema <code>Store</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.items[].shipment.gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>string</code> of property <code>data.items[].shipment_gst.gstin_code</code> of schema <code>ShipmentGstDetails</code> in response with status code 200


### Payment



#### edcDeviceList

- ##### What's New
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.has_previous</code> of schema <code>Page</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property <code>page.current</code> in response with status code 200
	- [Deleted] Required status from property <code>page.has_next</code> in response with status code 200
	- [Deleted] Required status from property <code>page.item_total</code> in response with status code 200
	- [Deleted] Required status from property <code>page.size</code> in response with status code 200


#### getPosPaymentModeRoutes

- ##### What's New
	- [Added] property <code>payment_options.payment_default_selection</code> of schema <code>PaymentOptionAndFlow</code> in response with status code 200


#### updatePaymentSession

- ##### What's New
	- [Added] property <code>checksum</code> of schema <code>PaymentSessionRequestSerializer</code> in request body
	- [Breaking] [Added] Required status to property <code>checksum</code> in request body


#### updateRefundSession

- ##### What's New
	- [Added] property <code>checksum</code> of schema <code>RefundSessionRequestSerializer</code> in request body
	- [Breaking] [Added] Required status to property <code>total_amount</code> in request body
	- [Breaking] [Added] Required status to property <code>checksum</code> in request body


### Share



#### createShortLink

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinks

- ##### What's New
	- [Breaking] [Deleted] <code>query</code> parameter <code>q</code> (type: <code>string</code>),
 [Added] <code>query</code> parameter <code>shortUrl</code> (type: <code>string</code>)
	- [Added] <code>query</code> parameter <code>originalUrl</code> (type: <code>string</code>)

	- [Added] <code>query</code> parameter <code>title</code> (type: <code>string</code>)


- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>items[].url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### getShortLinkByHash

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


#### updateShortLinkById

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>url.short</code> of schema <code>UrlInfo</code> in response with status code 200


### Theme



#### getAllPages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### createPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updateMultiplePages

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>pages[].seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>pages[].seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### getPage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### updatePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in request body
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in request body
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


#### deletePage

- ##### What's New
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.page.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.page.type</code> in response with status code 200
	- [Breaking] [Added] Possible values <code>about-us,addresses,blog,brands,cards,cart,categories,brand,category,collection,collections,contact-us,external,faq,freshchat,home,notification-settings,orders,page,policy,product,product-request,products,profile,profile-order-shipment,profile-basic,profile-company,profile-emails,profile-phones,rate-us,refer-earn,settings,shared-cart,tnc,track-order,wishlist,sections,form,cart-delivery,cart-payment,cart-review,login,register,shipping-policy,return-policy,order-status</code> to property <code>seo.breadcrumb[].action.popup.type</code> of schema <code>PageType</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>seo.breadcrumb[].action.popup.type</code> in response with status code 200


### User



#### getCustomers

- ##### What's New
	- [Added] property <code>items[].rr_id</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>items[].archive</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>items[].status</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### searchUsers

- ##### What's New
	- [Added] property <code>users[].rr_id</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>users[].archive</code> of schema <code>UserSearchSchema</code> in response with status code 200
	- [Added] property <code>users[].status</code> of schema <code>UserSearchSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUser

- ##### What's New
	- [Added] property <code>rr_id</code> of schema <code>CreateUserRequestSchema</code> in request body
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### blockOrUnblockUsers

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### archiveUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### unDeleteUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUser

- ##### What's New
	- [Added] property <code>rr_id</code> of schema <code>UpdateUserRequestSchema</code> in request body
	- [Added] property <code>user.rr_id</code> of schema <code>UserSchema</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserSession

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteSession

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getActiveSessions

- ##### What's New
	- [Added] property <code>items[].location</code> of schema <code>SessionListResponseInfo</code> in response with status code 200
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteActiveSessions

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getPlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in response with status code 200
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in response with status code 200
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updatePlatformConfig

- ##### What's New
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in request body
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in request body
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in request body
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in request body
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in request body
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in request body
	- [Added] property <code>social_tokens.facebook.app_secret</code> of schema <code>Facebook</code> in response with status code 200
	- [Added] property <code>social_tokens.account_kit.app_secret</code> of schema <code>Accountkit</code> in response with status code 200
	- [Added] property <code>social_tokens.google.app_secret</code> of schema <code>Google</code> in response with status code 200
	- [Breaking] [Added] properties <code>delete_account_consent.consent_text</code> in response with status code 200
	- [Breaking] [Added] properties <code>session_config.duration</code>, <code>session_config.type</code>, <code>session_config.is_rolling</code> in response with status code 200
	- [Added] property <code>__v</code> of schema <code>PlatformSchema</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in request body
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in request body
	- [Breaking] [Deleted] property <code>delete_account_consent[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] property <code>session_config[]</code> of schema <code>PlatformSchema</code> in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserGroup

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserGroups

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserGroup

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserGroupById

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserGroupPartially

- ##### What's New
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createUserAttributeDefinition

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributeDefinitions

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttributeDefinition

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteUserAttributeDefinitionById

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### updateUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### deleteUserAttribute

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributesForUser

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getUserAttributeById

- ##### What's New
	- [Added] Response with status 400

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


### Webhook



#### downloadDeliveryReport

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>end_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Deleted] Value format from <code>date-time</code> from property <code>start_date</code> of schema <code>EventProcessRequest</code> in request body


#### getHistoricalReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.end_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].filters.start_date</code> of schema <code>HistoryFilters</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].created_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Deleted] Value format from <code>date-time</code> from property <code>items[].updated_on</code> of schema <code>HistoryItems</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### getDeliveryReports

- ##### What's New
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Deleted] Value format from <code>date-time</code> from property <code>end_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Deleted] Value format from <code>date-time</code> from property <code>start_date</code> of schema <code>EventProcessRequest</code> in request body
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>object</code> to <code>string</code> of property <code>rows[].data</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>integer</code> to <code>number</code> of property <code>rows[].last_attempted_on</code> of schema <code>EventProcessReportObject</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### fetchAllEventConfigurations

- ##### What's New
	- [Added] property <code>event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200


#### registerSubscriberToEvent

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscribersByCompany

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


#### updateSubscriberConfig

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in request body
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscriberById

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>status</code> of schema <code>SubscriberStatus</code> in response with status code 200


#### getSubscribersByExtensionId

- ##### What's New
	- [Added] Possible values <code>active</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>inactive</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] Possible values <code>blocked</code> to property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Added] property <code>items[].event_configs[].subscriber_event_mapping</code> of schema <code>EventConfig</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Value format <code>int32</code> to property <code>page.size</code> of schema <code>Page</code> in response with status code 200
	- [Added] property <code>page.next_id</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Added] Required status to property <code>page.type</code> in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] Possible values from property <code>items[].status</code> of schema <code>SubscriberStatus</code> in response with status code 200
	- [Breaking] [Deleted] property <code>page.total_page</code> of schema <code>Page</code> in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.current</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.item_total</code> of schema <code>Page</code> in response with status code 200
	- [Breaking] [Changed] Type from <code>number</code> to <code>integer</code> of property <code>page.size</code> of schema <code>Page</code> in response with status code 200


## Public Client



### Billing



#### getStandardPlans

- ##### What's New
	- [Breaking] [Deleted] Required <code>query</code> parameter <code>platformType</code> (type: <code>string</code>),
 [Breaking] [Added] Required <code>query</code> parameter <code>platform</code> (type: <code>string</code>)


### Content



#### getCredentialsByEntity

- ##### What's New
	- [Breaking] [Added] Required status to path parameter <code>entity</code>
