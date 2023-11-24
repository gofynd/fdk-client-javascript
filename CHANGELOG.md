# CHANGE LOG (1.3.9) - fp-v1.8.6

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 200


#### addItems

- ##### What's New
	- [Added] property `cart.cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.success` of schema `CartDetailResponse` in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property `cart.cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `cart.success` of schema `CartDetailResponse` in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 201
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property `cart_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `uid` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `common_config` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `coupon` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `notification` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `staff_user_id` of schema `CartDetailResponse` in response with status code 200
	- [Added] property `success` of schema `CartDetailResponse` in response with status code 200


### Catalog



#### getStores

- ##### What's New
	- [Added] `query` parameter `tags` (type: `string`)

	- [Added] property `items[].tags` of schema `Store` in response with status code 200


## Platform Client



### Catalog



#### createCollection

- ##### What's New
	- [Added] property `uid` of schema `CollectionCreateResponse` in response with status code 200


### Order



#### getShipments

- ##### What's New
	- [Added] `query` parameter `allowInactive` (type: `boolean`)

	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].affiliate_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `shipments[].affiliate_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].affiliate_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getApplicationShipments

- ##### What's New
	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].bags[].affiliate_bag_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getBagById

- ##### What's New
	- [Added] property `affiliate_bag_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `affiliate_bag_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `affiliate_bag_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `affiliate_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `affiliate_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `affiliate_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


#### getBags

- ##### What's New
	- [Added] property `items[].affiliate_bag_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].affiliate_bag_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].affiliate_bag_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.affiliate_meta.is_serial_number_required` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.affiliate_meta.fulfilment_priority` of schema `AffiliateMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.affiliate_meta.customer_selling_price` of schema `AffiliateMeta` in response with status code 200


# CHANGE LOG (1.3.8) - fp-v1.8.5

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)

	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### addItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property `shipments[].items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `shipments[].items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getCartSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 404
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 404
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCartV2

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


### PosCart



#### getCart

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)



## Platform Client



### Cart



#### getAbandonedCartDetails

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)



### Catalog



#### getAppReturnConfiguration

- ##### What's New
	- [Added] method `getAppReturnConfiguration`



#### createAppReturnConfiguration

- ##### What's New
	- [Added] method `createAppReturnConfiguration`



#### updateAppReturnConfiguration

- ##### What's New
	- [Added] method `updateAppReturnConfiguration`



#### deleteAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `deleteAppCategoryReturnConfiguration`



#### getAppCategoryReturnConfig

- ##### What's New
	- [Added] method `getAppCategoryReturnConfig`



#### createAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `createAppCategoryReturnConfiguration`



#### updateAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `updateAppCategoryReturnConfiguration`



### Communication



#### sendOtp

- ##### What's New
	- [Added] property `email.provider` of schema `SendOtpCommsReqEmail` in request body


### Order



#### createOrder

- ##### What's New
	- [Added] property `user_info.primary_email` of schema `UserInfo` in request body
	- [Added] property `user_info.primary_mobile_number` of schema `UserInfo` in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property `user_info.email` of schema `UserInfo` in request body
	- [Breaking] [Deleted] property `user_info.mobile` of schema `UserInfo` in request body

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `user_info.email` in request body
	- [Breaking] [Changed] Required status of property `user_info.mobile` in request body


#### getShipments

- ##### What's Deprecated
	- [Deleted] properties `items[].meta.same_store_available`, `items[].meta.is_self_ship`, `items[].meta.is_international`, `items[].meta.formatted`, `items[].meta.debug_info`, `items[].meta.sla`, `items[].meta.shipment_chargeable_weight`, `items[].meta.pdf_media`, `items[].meta.tags`, `items[].meta.existing_dp_list`, `items[].meta.parent_dp_id`, `items[].meta.shipment_weight`, `items[].meta.dp_options`, `items[].meta.assign_dp_from_sb`, `items[].meta.shipping_zone`, `items[].meta.store_invoice_updated_date`, `items[].meta.activity_comment`, `items[].meta.fulfilment_priority_text`, `items[].meta.shipment_tags`, `items[].meta.external`, `items[].meta.ewaybill_info`, `items[].meta.lock_data`, `items[].meta.order_type`, `items[].meta.shipment_volumetric_weight`, `items[].meta.dp_sort_key`, `items[].meta.packaging_name`, `items[].meta.timestamp`, `items[].meta.auto_trigger_dp_assignment_acf`, `items[].meta.weight`, `items[].meta.bag_weight` in response with status code 200
	- [Deleted] Required status from property `items[].meta.auto_trigger_dp_assignment_acf` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `order.meta.platform_user_details`, `order.meta.company_logo`, `order.meta.currency_symbol`, `order.meta.comment`, `order.meta.extra_meta`, `order.meta.files`, `order.meta.transaction_data`, `order.meta.billing_staff_details`, `order.meta.ordering_store`, `order.meta.payment_type`, `order.meta.mongo_cart_id`, `order.meta.order_child_entities`, `order.meta.order_type`, `order.meta.order_platform`, `order.meta.employee_id`, `order.meta.order_tags`, `order.meta.customer_note`, `order.meta.staff`, `order.meta.cart_id`, `order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items[].shipments[].bags[].meta.gift_card`, `items[].shipments[].bags[].meta.custom_message`, `items[].shipments[].bags[].meta.docket_number`, `items[].shipments[].bags[].meta.group_id`, `items[].shipments[].bags[].meta.partial_can_ret`, `items[].shipments[].bags[].meta.extra_meta`, `items[].shipments[].bags[].meta.b2b_po_details`, `items[].shipments[].bags[].meta.custom_json` in response with status code 200


#### getShipmentBagReasons

- ##### What's New
	- [Added] method `getShipmentBagReasons`



#### getApplicationShipments

- ##### What's New
	- [Added] method `getApplicationShipments`



# CHANGE LOG (1.3.7) - fp-v1.8.5

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)

	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### addItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property `shipments[].items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `shipments[].items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getCartSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 404
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 404
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCartV2

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


### PosCart



#### getCart

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)



## Platform Client



### Cart



#### getAbandonedCartDetails

- ##### What's New
	- [Added] `query` parameter `c` (type: `boolean`)



### Catalog



#### getAppReturnConfiguration

- ##### What's New
	- [Added] method `getAppReturnConfiguration`



#### createAppReturnConfiguration

- ##### What's New
	- [Added] method `createAppReturnConfiguration`



#### updateAppReturnConfiguration

- ##### What's New
	- [Added] method `updateAppReturnConfiguration`



#### deleteAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `deleteAppCategoryReturnConfiguration`



#### getAppCategoryReturnConfig

- ##### What's New
	- [Added] method `getAppCategoryReturnConfig`



#### createAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `createAppCategoryReturnConfiguration`



#### updateAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `updateAppCategoryReturnConfiguration`



### Communication



#### sendOtp

- ##### What's New
	- [Added] property `email.provider` of schema `SendOtpCommsReqEmail` in request body


### Order



#### createOrder

- ##### What's New
	- [Added] property `user_info.primary_email` of schema `UserInfo` in request body
	- [Added] property `user_info.primary_mobile_number` of schema `UserInfo` in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property `user_info.email` of schema `UserInfo` in request body
	- [Breaking] [Deleted] property `user_info.mobile` of schema `UserInfo` in request body

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `user_info.email` in request body
	- [Breaking] [Changed] Required status of property `user_info.mobile` in request body


#### getShipments

- ##### What's Deprecated
	- [Deleted] properties `items[].meta.same_store_available`, `items[].meta.is_self_ship`, `items[].meta.is_international`, `items[].meta.formatted`, `items[].meta.debug_info`, `items[].meta.sla`, `items[].meta.shipment_chargeable_weight`, `items[].meta.pdf_media`, `items[].meta.tags`, `items[].meta.existing_dp_list`, `items[].meta.parent_dp_id`, `items[].meta.shipment_weight`, `items[].meta.dp_options`, `items[].meta.assign_dp_from_sb`, `items[].meta.shipping_zone`, `items[].meta.store_invoice_updated_date`, `items[].meta.activity_comment`, `items[].meta.fulfilment_priority_text`, `items[].meta.shipment_tags`, `items[].meta.external`, `items[].meta.ewaybill_info`, `items[].meta.lock_data`, `items[].meta.order_type`, `items[].meta.shipment_volumetric_weight`, `items[].meta.dp_sort_key`, `items[].meta.packaging_name`, `items[].meta.timestamp`, `items[].meta.auto_trigger_dp_assignment_acf`, `items[].meta.weight`, `items[].meta.bag_weight` in response with status code 200
	- [Deleted] Required status from property `items[].meta.auto_trigger_dp_assignment_acf` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `order.meta.platform_user_details`, `order.meta.company_logo`, `order.meta.currency_symbol`, `order.meta.comment`, `order.meta.extra_meta`, `order.meta.files`, `order.meta.transaction_data`, `order.meta.billing_staff_details`, `order.meta.ordering_store`, `order.meta.payment_type`, `order.meta.mongo_cart_id`, `order.meta.order_child_entities`, `order.meta.order_type`, `order.meta.order_platform`, `order.meta.employee_id`, `order.meta.order_tags`, `order.meta.customer_note`, `order.meta.staff`, `order.meta.cart_id`, `order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items[].shipments[].bags[].meta.gift_card`, `items[].shipments[].bags[].meta.custom_message`, `items[].shipments[].bags[].meta.docket_number`, `items[].shipments[].bags[].meta.group_id`, `items[].shipments[].bags[].meta.partial_can_ret`, `items[].shipments[].bags[].meta.extra_meta`, `items[].shipments[].bags[].meta.b2b_po_details`, `items[].shipments[].bags[].meta.custom_json` in response with status code 200


#### getShipmentBagReasons

- ##### What's New
	- [Added] method `getShipmentBagReasons`



#### getApplicationShipments

- ##### What's New
	- [Added] method `getApplicationShipments`



# CHANGE LOG (1.3.6) - fp-v1.8.5

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### addItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 201
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 201
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property `items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property `shipments[].items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `shipments[].items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `shipments[].items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### getCartSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 404
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 404
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


#### checkoutCartV2

- ##### What's New
	- [Added] property `cart.items[].price_per_unit.base.selling_price` of schema `ProductPricePerUnit` in response with status code 200
	- [Added] property `cart.items[].price_per_unit.converted.selling_price` of schema `ProductPricePerUnit` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.base.selling` of schema `ProductPrice` in response with status code 200
	- [Breaking] [Deleted] property `cart.items[].price_per_unit.converted.selling` of schema `ProductPrice` in response with status code 200


## Platform Client



### Catalog



#### getAppReturnConfiguration

- ##### What's New
	- [Added] method `getAppReturnConfiguration`



#### createAppReturnConfiguration

- ##### What's New
	- [Added] method `createAppReturnConfiguration`



#### updateAppReturnConfiguration

- ##### What's New
	- [Added] method `updateAppReturnConfiguration`



#### deleteAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `deleteAppCategoryReturnConfiguration`



#### getAppCategoryReturnConfig

- ##### What's New
	- [Added] method `getAppCategoryReturnConfig`



#### createAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `createAppCategoryReturnConfiguration`



#### updateAppCategoryReturnConfiguration

- ##### What's New
	- [Added] method `updateAppCategoryReturnConfiguration`



### Communication



#### sendOtp

- ##### What's New
	- [Added] property `email.provider` of schema `SendOtpCommsReqEmail` in request body


### Order



#### createOrder

- ##### What's New
	- [Added] property `user_info.primary_email` of schema `UserInfo` in request body
	- [Added] property `user_info.primary_mobile_number` of schema `UserInfo` in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property `user_info.email` of schema `UserInfo` in request body
	- [Breaking] [Deleted] property `user_info.mobile` of schema `UserInfo` in request body

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `user_info.email` in request body
	- [Breaking] [Changed] Required status of property `user_info.mobile` in request body


#### getShipments

- ##### What's Deprecated
	- [Deleted] properties `items[].meta.same_store_available`, `items[].meta.is_self_ship`, `items[].meta.is_international`, `items[].meta.formatted`, `items[].meta.debug_info`, `items[].meta.sla`, `items[].meta.shipment_chargeable_weight`, `items[].meta.pdf_media`, `items[].meta.tags`, `items[].meta.existing_dp_list`, `items[].meta.parent_dp_id`, `items[].meta.shipment_weight`, `items[].meta.dp_options`, `items[].meta.assign_dp_from_sb`, `items[].meta.shipping_zone`, `items[].meta.store_invoice_updated_date`, `items[].meta.activity_comment`, `items[].meta.fulfilment_priority_text`, `items[].meta.shipment_tags`, `items[].meta.external`, `items[].meta.ewaybill_info`, `items[].meta.lock_data`, `items[].meta.order_type`, `items[].meta.shipment_volumetric_weight`, `items[].meta.dp_sort_key`, `items[].meta.packaging_name`, `items[].meta.timestamp`, `items[].meta.auto_trigger_dp_assignment_acf`, `items[].meta.weight`, `items[].meta.bag_weight` in response with status code 200
	- [Deleted] Required status from property `items[].meta.auto_trigger_dp_assignment_acf` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `order.meta.platform_user_details`, `order.meta.company_logo`, `order.meta.currency_symbol`, `order.meta.comment`, `order.meta.extra_meta`, `order.meta.files`, `order.meta.transaction_data`, `order.meta.billing_staff_details`, `order.meta.ordering_store`, `order.meta.payment_type`, `order.meta.mongo_cart_id`, `order.meta.order_child_entities`, `order.meta.order_type`, `order.meta.order_platform`, `order.meta.employee_id`, `order.meta.order_tags`, `order.meta.customer_note`, `order.meta.staff`, `order.meta.cart_id`, `order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `shipments[].bags[].meta.gift_card`, `shipments[].bags[].meta.custom_message`, `shipments[].bags[].meta.docket_number`, `shipments[].bags[].meta.group_id`, `shipments[].bags[].meta.partial_can_ret`, `shipments[].bags[].meta.extra_meta`, `shipments[].bags[].meta.b2b_po_details`, `shipments[].bags[].meta.custom_json` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].invoice.links` of schema `InvoiceInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items[].shipments[].bags[].meta.gift_card`, `items[].shipments[].bags[].meta.custom_message`, `items[].shipments[].bags[].meta.docket_number`, `items[].shipments[].bags[].meta.group_id`, `items[].shipments[].bags[].meta.partial_can_ret`, `items[].shipments[].bags[].meta.extra_meta`, `items[].shipments[].bags[].meta.b2b_po_details`, `items[].shipments[].bags[].meta.custom_json` in response with status code 200


#### getShipmentBagReasons

- ##### What's New
	- [Added] method `getShipmentBagReasons`



#### getApplicationShipments

- ##### What's New
	- [Added] method `getApplicationShipments`



# CHANGE LOG (1.3.5) - fp-v1.8.4

## Application Client



### Cart



#### checkoutCart

- ##### What's Deprecated
	- [Deleted] Possible nullable value from `true` from property `customer_details` of schema `CartCheckoutDetailRequest` in request body
	- [Deleted] Possible nullable value from `true` from property `id` of schema `CartCheckoutDetailRequest` in request body
	- [Breaking] [Deleted] Default value from property `callback_url` of schema `CartCheckoutDetailRequest` in request body
	- [Deleted] Possible nullable value from `true` from property `callback_url` of schema `CartCheckoutDetailRequest` in request body
	- [Deleted] Possible nullable value from `true` from property `ordering_store` of schema `CartCheckoutDetailRequest` in request body
	- [Deleted] Possible nullable value from `true` from property `payment_identifier` of schema `CartCheckoutDetailRequest` in request body
	- [Deleted] Possible nullable value from `true` from property `payment_params` of schema `CartCheckoutDetailRequest` in request body


### Order



#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].bags[].item.attributes` of schema `Item` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `order.shipments[].bags[].item.attributes` of schema `Item` in response with status code 200


#### getPosOrderById

- ##### What's New
	- [Added] property `order.shipments[].bags[].item.attributes` of schema `Item` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipment.bags[].item.attributes` of schema `Item` in response with status code 200


## Platform Client



### Cart



#### getStoreAddressByUid

- ##### What's New
	- [Added] property `items[].store_manager_name` of schema `PickupStoreDetail` in response with status code 200


### Catalog



#### createCollection

- ##### What's New
	- [Added] property `seo.sitemap` of schema `SeoDetail` in request body
	- [Added] property `seo.breadcrumbs` of schema `SeoDetail` in request body
	- [Added] property `seo.meta_tags` of schema `SeoDetail` in request body


#### updateCollection

- ##### What's New
	- [Added] property `seo.sitemap` of schema `SeoDetail` in request body
	- [Added] property `seo.breadcrumbs` of schema `SeoDetail` in request body
	- [Added] property `seo.meta_tags` of schema `SeoDetail` in request body
	- [Added] property `seo.sitemap` of schema `SeoDetail` in response with status code 200
	- [Added] property `seo.breadcrumbs` of schema `SeoDetail` in response with status code 200
	- [Added] property `seo.meta_tags` of schema `SeoDetail` in response with status code 200


#### getAppProduct

- ##### What's New
	- [Added] Default value to property `seo` of schema `OwnerAppItemResponse` in response with status code 200
	- [Added] Default value `` to property `seo` of schema `OwnerAppItemResponse` in response with status code 200
	- [Added] Default value `` to property `seo` of schema `OwnerAppItemResponse` in response with status code 200


#### updateAppProduct

- ##### What's New
	- [Added] property `size_promotion_threshold` of schema `ApplicationItemMeta` in request body


#### getProductBulkUploadHistory

- ##### What's New
	- [Added] property `items[]` of schema `ProductBulkRequestList` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items.cancelled`, `items.cancelled_records`, `items.company_id`, `items.created_by`, `items.created_on`, `items.failed`, `items.failed_records`, `items.file_path`, `items.is_active`, `items.modified_by`, `items.modified_on`, `items.stage`, `items.succeed`, `items.template`, `items.template_tag`, `items.total` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `items` of schema `ProductBulkRequest` in response with status code 200


### Discount



#### validateDiscountFile

- ##### What's New
	- [Added] property `file_path` of schema `FileJobResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Possible values from `validation` to `validate` of property `type` of schema `FileJobResponse` in response with status code 200


#### downloadDiscountFile

- ##### What's New
	- [Added] property `file_path` of schema `FileJobResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Possible values from `validation` to `validate` of property `type` of schema `FileJobResponse` in response with status code 200


#### getValidationJob

- ##### What's New
	- [Added] property `file_path` of schema `FileJobResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Possible values from `validation` to `validate` of property `type` of schema `FileJobResponse` in response with status code 200


#### getDownloadJob

- ##### What's New
	- [Added] property `file_path` of schema `FileJobResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Possible values from `validation` to `validate` of property `type` of schema `FileJobResponse` in response with status code 200


### Order



#### createOrder

- ##### What's New
	- [Added] property `shipments[].order_type` of schema `Shipment` in request body
	- [Added] property `user_info` of schema `CreateOrderAPI` in request body


#### getShipments

- ##### What's New
	- [Added] property `items[].user.user_oid` of schema `UserDataInfo` in response with status code 200
	- [Added] property `items[].user.external_customer_id` of schema `UserDataInfo` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].user.user_oid` of schema `UserDataInfo` in response with status code 200
	- [Added] property `shipments[].user.external_customer_id` of schema `UserDataInfo` in response with status code 200
	- [Added] property `shipments[].status.current_shipment_status` of schema `ShipmentStatusData` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `shipments[].order.meta.platform_user_details`, `shipments[].order.meta.company_logo`, `shipments[].order.meta.currency_symbol`, `shipments[].order.meta.comment`, `shipments[].order.meta.extra_meta`, `shipments[].order.meta.files`, `shipments[].order.meta.transaction_data`, `shipments[].order.meta.billing_staff_details`, `shipments[].order.meta.ordering_store`, `shipments[].order.meta.payment_type`, `shipments[].order.meta.mongo_cart_id`, `shipments[].order.meta.order_child_entities`, `shipments[].order.meta.order_type`, `shipments[].order.meta.order_platform`, `shipments[].order.meta.employee_id`, `shipments[].order.meta.order_tags`, `shipments[].order.meta.customer_note`, `shipments[].order.meta.staff`, `shipments[].order.meta.cart_id`, `shipments[].order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `shipments[].meta.tracking_url`, `shipments[].meta.estimated_delivery_date`, `shipments[].meta.same_store_available`, `shipments[].meta.b2b_buyer_details`, `shipments[].meta.formatted`, `shipments[].meta.debug_info`, `shipments[].meta.return_awb_number`, `shipments[].meta.is_self_ship`, `shipments[].meta.box_type`, `shipments[].meta.einvoice_info`, `shipments[].meta.return_affiliate_shipment_id`, `shipments[].meta.parent_dp_id`, `shipments[].meta.shipment_weight`, `shipments[].meta.dimension`, `shipments[].meta.dp_options`, `shipments[].meta.assign_dp_from_sb`, `shipments[].meta.due_date`, `shipments[].meta.store_invoice_updated_date`, `shipments[].meta.forward_affiliate_shipment_id`, `shipments[].meta.return_store_node`, `shipments[].meta.fulfilment_priority_text`, `shipments[].meta.shipment_tags`, `shipments[].meta.external`, `shipments[].meta.awb_number`, `shipments[].meta.lock_data`, `shipments[].meta.order_type`, `shipments[].meta.ewaybill_info`, `shipments[].meta.dp_id`, `shipments[].meta.shipment_volumetric_weight`, `shipments[].meta.marketplace_store_id`, `shipments[].meta.return_details`, `shipments[].meta.dp_sort_key`, `shipments[].meta.packaging_name`, `shipments[].meta.timestamp`, `shipments[].meta.auto_trigger_dp_assignment_acf`, `shipments[].meta.dp_name`, `shipments[].meta.po_number`, `shipments[].meta.weight`, `shipments[].meta.b2c_buyer_details`, `shipments[].meta.forward_affiliate_order_id`, `shipments[].meta.return_affiliate_order_id`, `shipments[].meta.bag_weight`, `shipments[].meta.refund_to` in response with status code 200
	- [Deleted] Required status from properties `shipments[].meta.same_store_available`, `shipments[].meta.weight` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] `query` parameter `myOrders` (type: `boolean`)

	- [Added] property `shipments[].user.user_oid` of schema `UserDataInfo` in response with status code 200
	- [Added] property `shipments[].user.external_customer_id` of schema `UserDataInfo` in response with status code 200
	- [Added] property `shipments[].status.current_shipment_status` of schema `ShipmentStatusData` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `shipments[].order.meta.platform_user_details`, `shipments[].order.meta.company_logo`, `shipments[].order.meta.currency_symbol`, `shipments[].order.meta.comment`, `shipments[].order.meta.extra_meta`, `shipments[].order.meta.files`, `shipments[].order.meta.transaction_data`, `shipments[].order.meta.billing_staff_details`, `shipments[].order.meta.ordering_store`, `shipments[].order.meta.payment_type`, `shipments[].order.meta.mongo_cart_id`, `shipments[].order.meta.order_child_entities`, `shipments[].order.meta.order_type`, `shipments[].order.meta.order_platform`, `shipments[].order.meta.employee_id`, `shipments[].order.meta.order_tags`, `shipments[].order.meta.customer_note`, `shipments[].order.meta.staff`, `shipments[].order.meta.cart_id`, `shipments[].order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `shipments[].meta.tracking_url`, `shipments[].meta.estimated_delivery_date`, `shipments[].meta.same_store_available`, `shipments[].meta.b2b_buyer_details`, `shipments[].meta.formatted`, `shipments[].meta.debug_info`, `shipments[].meta.return_awb_number`, `shipments[].meta.is_self_ship`, `shipments[].meta.box_type`, `shipments[].meta.einvoice_info`, `shipments[].meta.return_affiliate_shipment_id`, `shipments[].meta.parent_dp_id`, `shipments[].meta.shipment_weight`, `shipments[].meta.dimension`, `shipments[].meta.dp_options`, `shipments[].meta.assign_dp_from_sb`, `shipments[].meta.due_date`, `shipments[].meta.store_invoice_updated_date`, `shipments[].meta.forward_affiliate_shipment_id`, `shipments[].meta.return_store_node`, `shipments[].meta.fulfilment_priority_text`, `shipments[].meta.shipment_tags`, `shipments[].meta.external`, `shipments[].meta.awb_number`, `shipments[].meta.lock_data`, `shipments[].meta.order_type`, `shipments[].meta.ewaybill_info`, `shipments[].meta.dp_id`, `shipments[].meta.shipment_volumetric_weight`, `shipments[].meta.marketplace_store_id`, `shipments[].meta.return_details`, `shipments[].meta.dp_sort_key`, `shipments[].meta.packaging_name`, `shipments[].meta.timestamp`, `shipments[].meta.auto_trigger_dp_assignment_acf`, `shipments[].meta.dp_name`, `shipments[].meta.po_number`, `shipments[].meta.weight`, `shipments[].meta.b2c_buyer_details`, `shipments[].meta.forward_affiliate_order_id`, `shipments[].meta.return_affiliate_order_id`, `shipments[].meta.bag_weight`, `shipments[].meta.refund_to` in response with status code 200
	- [Deleted] Required status from properties `shipments[].meta.same_store_available`, `shipments[].meta.weight` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].user.user_oid` of schema `UserDataInfo` in response with status code 200
	- [Added] property `items[].shipments[].user.external_customer_id` of schema `UserDataInfo` in response with status code 200
	- [Added] property `items[].shipments[].status.current_shipment_status` of schema `ShipmentStatusData` in response with status code 200
	- [Added] property `items[].user_info.user_oid` of schema `UserDataInfo` in response with status code 200
	- [Added] property `items[].user_info.external_customer_id` of schema `UserDataInfo` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items[].shipments[].order.meta.platform_user_details`, `items[].shipments[].order.meta.company_logo`, `items[].shipments[].order.meta.currency_symbol`, `items[].shipments[].order.meta.comment`, `items[].shipments[].order.meta.extra_meta`, `items[].shipments[].order.meta.files`, `items[].shipments[].order.meta.transaction_data`, `items[].shipments[].order.meta.billing_staff_details`, `items[].shipments[].order.meta.ordering_store`, `items[].shipments[].order.meta.payment_type`, `items[].shipments[].order.meta.mongo_cart_id`, `items[].shipments[].order.meta.order_child_entities`, `items[].shipments[].order.meta.order_type`, `items[].shipments[].order.meta.order_platform`, `items[].shipments[].order.meta.employee_id`, `items[].shipments[].order.meta.order_tags`, `items[].shipments[].order.meta.customer_note`, `items[].shipments[].order.meta.staff`, `items[].shipments[].order.meta.cart_id`, `items[].shipments[].order.meta.cart_object_id` in response with status code 200
	- [Deleted] properties `items[].shipments[].meta.tracking_url`, `items[].shipments[].meta.estimated_delivery_date`, `items[].shipments[].meta.same_store_available`, `items[].shipments[].meta.b2b_buyer_details`, `items[].shipments[].meta.formatted`, `items[].shipments[].meta.debug_info`, `items[].shipments[].meta.return_awb_number`, `items[].shipments[].meta.is_self_ship`, `items[].shipments[].meta.box_type`, `items[].shipments[].meta.einvoice_info`, `items[].shipments[].meta.return_affiliate_shipment_id`, `items[].shipments[].meta.parent_dp_id`, `items[].shipments[].meta.shipment_weight`, `items[].shipments[].meta.dimension`, `items[].shipments[].meta.dp_options`, `items[].shipments[].meta.assign_dp_from_sb`, `items[].shipments[].meta.due_date`, `items[].shipments[].meta.store_invoice_updated_date`, `items[].shipments[].meta.forward_affiliate_shipment_id`, `items[].shipments[].meta.return_store_node`, `items[].shipments[].meta.fulfilment_priority_text`, `items[].shipments[].meta.shipment_tags`, `items[].shipments[].meta.external`, `items[].shipments[].meta.awb_number`, `items[].shipments[].meta.lock_data`, `items[].shipments[].meta.order_type`, `items[].shipments[].meta.ewaybill_info`, `items[].shipments[].meta.dp_id`, `items[].shipments[].meta.shipment_volumetric_weight`, `items[].shipments[].meta.marketplace_store_id`, `items[].shipments[].meta.return_details`, `items[].shipments[].meta.dp_sort_key`, `items[].shipments[].meta.packaging_name`, `items[].shipments[].meta.timestamp`, `items[].shipments[].meta.auto_trigger_dp_assignment_acf`, `items[].shipments[].meta.dp_name`, `items[].shipments[].meta.po_number`, `items[].shipments[].meta.weight`, `items[].shipments[].meta.b2c_buyer_details`, `items[].shipments[].meta.forward_affiliate_order_id`, `items[].shipments[].meta.return_affiliate_order_id`, `items[].shipments[].meta.bag_weight`, `items[].shipments[].meta.refund_to` in response with status code 200
	- [Deleted] Required status from properties `items[].shipments[].meta.same_store_available`, `items[].shipments[].meta.weight` in response with status code 200


#### getBagById

- ##### What's Deprecated
	- [Deleted] properties `meta.gift_card`, `meta.custom_message`, `meta.docket_number`, `meta.group_id`, `meta.partial_can_ret`, `meta.extra_meta`, `meta.b2b_po_details`, `meta.custom_json` in response with status code 200


#### getBags

- ##### What's Deprecated
	- [Deleted] properties `items[].meta.gift_card`, `items[].meta.custom_message`, `items[].meta.docket_number`, `items[].meta.group_id`, `items[].meta.partial_can_ret`, `items[].meta.extra_meta`, `items[].meta.b2b_po_details`, `items[].meta.custom_json` in response with status code 200


### Payment



#### updatePaymentSession

- ##### What's New
	- [Added] property `meta` of schema `PaymentSessionRequestSerializer` in request body

- ##### What's Deprecated
	- [Deleted] Possible values from `test,live` from property `payment_details[].mode` of schema `PaymentSessionDetail` in request body
	- [Deleted] Required status from property `payment_details[].billing_address` in request body
	- [Deleted] Required status from property `payment_details[].shipping_address` in request body


#### updateRefundSession

- ##### What's New
	- [Added] property `meta` of schema `RefundSessionRequestSerializer` in request body


### User



#### getCustomers

- ##### What's New
	- [Added] property `items[].external_id` of schema `UserSchema` in response with status code 200


#### searchUsers

- ##### What's New
	- [Added] property `users[].external_id` of schema `UserSchema` in response with status code 200


#### createUser

- ##### What's New
	- [Added] property `external_id` of schema `CreateUserRequestSchema` in request body
	- [Added] property `user.external_id` of schema `UserSchema` in response with status code 200


#### updateUser

- ##### What's New
	- [Added] property `user.external_id` of schema `UserSchema` in response with status code 200


#### deleteSession

- ##### What's New
	- [Added] property `user_id` of schema `SessionDeleteResponseSchema` in response with status code 200
	- [Added] property `session_id` of schema `SessionDeleteResponseSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items` of schema `SessionDeleteResponseSchema` in response with status code 200


#### deleteActiveSessions

- ##### What's New
	- [Added] property `user_id` of schema `SessionsDeleteResponseSchema` in response with status code 200
	- [Added] property `session_ids` of schema `SessionsDeleteResponseSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items` of schema `SessionDeleteResponseSchema` in response with status code 200


# CHANGE LOG (1.3.4) - fp-v1.8.3

## Application Client



### Catalog



#### getProductDetailBySlug

- ##### What's New
	- [Added] property `department` of schema `ProductDetail` in response with status code 200


#### getProductComparisonBySlugs

- ##### What's New
	- [Added] property `items[].department` of schema `ProductDetail` in response with status code 200


#### getSimilarComparisonProductBySlug

- ##### What's New
	- [Added] property `items[].department` of schema `ProductDetail` in response with status code 200


#### getComparedFrequentlyProductBySlug

- ##### What's New
	- [Added] property `similars.items[].department` of schema `ProductDetail` in response with status code 200


### FileStorage



#### startUpload

- ##### What's New
	- [Breaking] [Added] properties `params.subpath` in request body
	- [Added] property `status` of schema `` in response with status code 400
	- [Added] property `valid_namespaces` of schema `` in response with status code 400

- ##### What's Changed
	- [Changed] Path From `/service/application/assets/v1.0/namespaces/{namespace}/upload/start/` To `/service/application/assets/v1.0/namespaces/{namespace}/upload/start`


#### completeUpload

- ##### What's New
	- [Added] property `created_by` of schema `CompleteResponse` in response with status code 200
	- [Added] property `_message` of schema `` in response with status code 400
	- [Added] property `name` of schema `` in response with status code 400
	- [Added] property `errors` of schema `` in response with status code 400

- ##### What's Changed
	- [Changed] Path From `/service/application/assets/v1.0/namespaces/{namespace}/upload/complete/` To `/service/application/assets/v1.0/namespaces/{namespace}/upload/complete`


#### signUrls

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 400

- ##### What's Changed
	- [Changed] Path From `/service/application/assets/v1.0/sign-urls/` To `/service/application/assets/v1.0/sign-urls`


### User



#### resetForgotPassword

- ##### What's New
	- [Added] method `resetForgotPassword`



#### sendForgotOTPOnMobile

- ##### What's New
	- [Added] method `sendForgotOTPOnMobile`



#### verifyMobileForgotOTP

- ##### What's New
	- [Added] method `verifyMobileForgotOTP`



#### sendForgotOTPOnEmail

- ##### What's New
	- [Added] method `sendForgotOTPOnEmail`



#### verifyEmailForgotOTP

- ##### What's New
	- [Added] method `verifyEmailForgotOTP`



## Partner Client

- [Added] FileStorage class in partner client


## Platform Client



### Content



#### deleteAllInjectableTags

- ##### What's Deprecated
	- [Breaking] [Deleted] method `deleteAllInjectableTags`



#### getInjectableTags

- ##### What's New
	- [Added] `query` parameter `all` (type: `boolean`)



### FileStorage



#### startUpload

- ##### What's New
	- [Breaking] [Added] properties `params.subpath` in request body
	- [Added] property `status` of schema `` in response with status code 400
	- [Added] property `valid_namespaces` of schema `` in response with status code 400


#### completeUpload

- ##### What's New
	- [Breaking] [Added] Required status to property `company_id` in response with status code 200
	- [Added] property `company_id` of schema `CompleteResponse` in response with status code 200
	- [Added] property `created_by` of schema `CompleteResponse` in response with status code 200
	- [Added] property `_message` of schema `` in response with status code 400
	- [Added] property `name` of schema `` in response with status code 400
	- [Added] property `errors` of schema `` in response with status code 400


#### appStartUpload

- ##### What's New
	- [Breaking] [Added] properties `params.subpath` in request body
	- [Added] property `status` of schema `` in response with status code 400
	- [Added] property `valid_namespaces` of schema `` in response with status code 400


#### appCompleteUpload

- ##### What's New
	- [Breaking] [Added] Required status to property `company_id` in response with status code 200
	- [Added] property `company_id` of schema `CompleteResponse` in response with status code 200
	- [Added] property `created_by` of schema `CompleteResponse` in response with status code 200
	- [Added] property `_message` of schema `` in response with status code 400
	- [Added] property `name` of schema `` in response with status code 400
	- [Added] property `errors` of schema `` in response with status code 400


#### getSignUrls

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 500


#### copyFiles

- ##### What's New
	- [Added] property `tracking_url` of schema `` in response with status code 200
	- [Added] property `task` of schema `` in response with status code 200
	- [Added] property `message` of schema `` in response with status code 400

- ##### What's Deprecated
	- [Deleted] Required status from property `urls` in request body
	- [Deleted] Required status from property `status` in response with status code 200
	- [Breaking] [Deleted] property `status` of schema `BulkUploadSyncMode` in response with status code 200
	- [Breaking] [Deleted] property `files` of schema `BulkUploadSyncMode` in response with status code 200
	- [Deleted] Required status from property `status` in response with status code 400
	- [Breaking] [Deleted] property `status` of schema `BulkUploadFailResponse` in response with status code 400


#### appCopyFiles

- ##### What's New
	- [Added] property `tracking_url` of schema `` in response with status code 200
	- [Added] property `task` of schema `` in response with status code 200
	- [Added] property `message` of schema `` in response with status code 400

- ##### What's Deprecated
	- [Deleted] Required status from property `urls` in request body
	- [Deleted] Required status from property `status` in response with status code 200
	- [Breaking] [Deleted] property `status` of schema `BulkUploadSyncMode` in response with status code 200
	- [Breaking] [Deleted] property `files` of schema `BulkUploadSyncMode` in response with status code 200
	- [Deleted] Required status from property `status` in response with status code 400
	- [Breaking] [Deleted] property `status` of schema `BulkUploadFailResponse` in response with status code 400


#### browse

- ##### What's New
	- [Added] property `items[].size` of schema `` in response with status code 200
	- [Added] property `items[].created_by` of schema `` in response with status code 200
	- [Added] property `items[].company_id` of schema `` in response with status code 200
	- [Added] property `items[].bucket_key` of schema `` in response with status code 200
	- [Added] property `items[].createdAt` of schema `` in response with status code 200
	- [Added] property `items[].updatedAt` of schema `` in response with status code 200
	- [Added] property `items[].__v` of schema `` in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from properties `items[].success`, `items[].tags`, `items[]._id`, `items[].file_name`, `items[].namespace`, `items[].content_type`, `items[].file_path`, `items[].upload`, `items[].cdn`, `items[].created_on`, `items[].modified_on` in response with status code 200
	- [Deleted] Required status from properties `items[].upload.expiry`, `items[].upload.url` in response with status code 200
	- [Deleted] Required status from properties `items[].cdn.url`, `items[].cdn.absolute_url`, `items[].cdn.relative_url` in response with status code 200
	- [Breaking] [Deleted] property `items[].cdn.absolute_url` of schema `CDN` in response with status code 200
	- [Breaking] [Deleted] property `items[].cdn.relative_url` of schema `CDN` in response with status code 200
	- [Breaking] [Deleted] property `items[].created_on` of schema `DbRecord` in response with status code 200
	- [Breaking] [Deleted] property `items[].modified_on` of schema `DbRecord` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `number` of property `items[].upload.expiry` of schema `Upload` in response with status code 200


#### appbrowse

- ##### What's New
	- [Added] property `items[].size` of schema `` in response with status code 200
	- [Added] property `items[].created_by` of schema `` in response with status code 200
	- [Added] property `items[].company_id` of schema `` in response with status code 200
	- [Added] property `items[].bucket_key` of schema `` in response with status code 200
	- [Added] property `items[].createdAt` of schema `` in response with status code 200
	- [Added] property `items[].updatedAt` of schema `` in response with status code 200
	- [Added] property `items[].__v` of schema `` in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from properties `items[].success`, `items[].tags`, `items[]._id`, `items[].file_name`, `items[].namespace`, `items[].content_type`, `items[].file_path`, `items[].upload`, `items[].cdn`, `items[].created_on`, `items[].modified_on` in response with status code 200
	- [Deleted] Required status from properties `items[].upload.expiry`, `items[].upload.url` in response with status code 200
	- [Deleted] Required status from properties `items[].cdn.url`, `items[].cdn.absolute_url`, `items[].cdn.relative_url` in response with status code 200
	- [Breaking] [Deleted] property `items[].cdn.absolute_url` of schema `CDN` in response with status code 200
	- [Breaking] [Deleted] property `items[].cdn.relative_url` of schema `CDN` in response with status code 200
	- [Breaking] [Deleted] property `items[].created_on` of schema `DbRecord` in response with status code 200
	- [Breaking] [Deleted] property `items[].modified_on` of schema `DbRecord` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `number` of property `items[].upload.expiry` of schema `Upload` in response with status code 200


#### proxy

- ##### What's New
	- [Added] Content (application/json) in Response 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Content (application/octet-stream) in Response 200


#### getPdfTypes

- ##### What's New
	- [Breaking] [Added] Required status to properties `data`, `success` in response with status code 200
	- [Breaking] [Added] properties `data`, `success` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `[]` of schema `` in response with status code 200
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `array` to `object` of property `` of schema `` in response with status code 200


#### getDefaultPdfData

- ##### What's New
	- [Breaking] [Added] Required status to properties `data`, `success` in response with status code 200
	- [Breaking] [Added] properties `data`, `success` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `[]` of schema `` in response with status code 200
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `array` to `object` of property `` of schema `` in response with status code 200


#### getDefaultHtmlTemplate

- ##### What's New
	- [Breaking] [Added] properties `data`, `success` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `[]` of schema `` in response with status code 200
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `array` to `object` of property `` of schema `` in response with status code 200


#### saveHtmlTemplate

- ##### What's New
	- [Added] Response with status 201
	- [Added] property `success` of schema `` in response with status code 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 200
	- [Deleted] Required status from property `message` in response with status code 500

- ##### What's Changed
	- [Changed] http method type from `put` To `post`


#### previewTemplate

- ##### What's Deprecated
	- [Breaking] [Deleted] method `previewTemplate`



#### getDefaultPdfTemplate

- ##### What's New
	- [Breaking] [Added] properties `data`, `success` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `[]` of schema `` in response with status code 200
	- [Breaking] [Deleted] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `array` to `object` of property `` of schema `` in response with status code 200


#### updateHtmlTemplate

- ##### What's New
	- [Added] method `updateHtmlTemplate`



#### generatePaymentReceipt

- ##### What's New
	- [Added] method `generatePaymentReceipt`



### Order



#### getShipments

- ##### What's New
	- [Added] property `items[].meta.is_self_ship` of schema `ShipmentItemMeta` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Added] property `shipments[].affiliate_details.shipment_meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property `shipments[].bags[].brand.company` in response with status code 200


#### getOrderById

- ##### What's New
	- [Added] property `shipments[].affiliate_details.shipment_meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property `shipments[].bags[].brand.company` in response with status code 200


#### getOrders

- ##### What's New
	- [Added] property `items[].shipments[].affiliate_details.shipment_meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.shipment_meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.shipment_meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200

- ##### What's Deprecated
	- [Deleted] Required status from property `items[].shipments[].bags[].brand.company` in response with status code 200


#### getBagById

- ##### What's New
	- [Added] property `affiliate_details.shipment_meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `affiliate_details.shipment_meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `affiliate_details.shipment_meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200


#### getBags

- ##### What's New
	- [Added] property `items[].affiliate_details.shipment_meta.tracking_url` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.shipment_meta.estimated_delivery_date` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.shipment_meta.is_self_ship` of schema `ShipmentMeta` in response with status code 200


### Payment



#### getMerchantRefundPriority

- ##### What's New
	- [Added] method `getMerchantRefundPriority`



#### createMerchantRefundPriority

- ##### What's New
	- [Added] method `createMerchantRefundPriority`



#### updateMerchantRefundPriority

- ##### What's New
	- [Added] method `updateMerchantRefundPriority`



### User



#### updateUserGroupPartially

- ##### What's New
	- [Added] method `updateUserGroupPartially`



# CHANGE LOG (1.3.3) - fp-v1.8.2

## Application Client



### Cart



#### checkoutCart

- ##### What's New
	- [Added] property `payment_extra_identifiers` of schema `CartCheckoutDetailRequest` in request body


#### checkoutCartV2

- ##### What's New
	- [Added] property `payment_methods[].payment_extra_identifiers` of schema `PaymentMethod` in request body


### Theme



#### getAppliedTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] property `config.list[].global_config.statics` of schema `StaticConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].global_config.auth` of schema `AuthConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].global_config.palette` of schema `PaletteConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].custom` of schema `CustomConfig` in response with status code 200


#### getThemeForPreview

- ##### What's Deprecated
	- [Breaking] [Deleted] property `config.list[].global_config.statics` of schema `StaticConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].global_config.auth` of schema `AuthConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].global_config.palette` of schema `PaletteConfig` in response with status code 200
	- [Breaking] [Deleted] property `config.list[].custom` of schema `CustomConfig` in response with status code 200


## Platform Client



### Cart



#### getCoupons

- ##### What's New
	- [Added] property `items[]` of schema `CouponAdd` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `items.date_meta`, `items.ownership`, `items.author`, `items.state`, `items.restrictions`, `items.validation`, `items.action`, `items.tags`, `items._schedule`, `items.rule`, `items.display_meta`, `items.code`, `items.type_slug`, `items.identifiers`, `items.validity`, `items.rule_definition` in response with status code 200
	- [Deleted] Required status from properties `items.code`, `items.display_meta`, `items.identifiers`, `items.ownership`, `items.rule`, `items.rule_definition`, `items.type_slug`, `items.validity` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `items` of schema `CouponAdd` in response with status code 200


#### createCoupon

- ##### What's New
	- [Added] property `_id` of schema `CouponAdd` in request body


#### platformCheckoutCart

- ##### What's New
	- [Added] property `payment_extra_identifiers` of schema `PlatformCartCheckoutDetailRequest` in request body


#### platformCheckoutCartV2

- ##### What's New
	- [Added] property `payment_methods[].payment_extra_identifiers` of schema `PaymentMethod` in request body


#### selectPaymentModeV2

- ##### What's New
	- [Added] property `payment_methods[].payment_extra_identifiers` of schema `PaymentMethod` in request body


### Catalog



#### getSearchKeywords

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetSearchWordsData` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getSearchKeywords` to `updateSearchKeywords`
	- [Changed] http method type from `get` To `put`


#### getAllSearchKeyword

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetSearchWordsResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getAllSearchKeyword` to `createCustomKeyword`
	- [Changed] http method type from `get` To `post`


#### getAutocompleteKeywordDetail

- ##### What's New
	- [Added] Body content in Request

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getAutocompleteKeywordDetail` to `updateAutocompleteKeyword`
	- [Changed] http method type from `get` To `put`


#### getAutocompleteConfig

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetAutocompleteWordsResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getAutocompleteConfig` to `createCustomAutocompleteRule`
	- [Changed] http method type from `get` To `post`


#### getProductBundle

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `slug` (type: `array`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetProductBundleListingResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProductBundle` to `createProductBundle`
	- [Changed] http method type from `get` To `post`


#### getProductBundleDetail

- ##### What's New
	- [Breaking] [Added] maximum validator for products[].max_quantity in response with status code 200
	- [Breaking] [Added] minimum validator for products[].max_quantity in response with status code 200
	- [Breaking] [Added] maximum validator for products[].min_quantity in response with status code 200
	- [Breaking] [Added] minimum validator for products[].min_quantity in response with status code 200
	- [Breaking] [Added] maxItems validator for products in response with status code 200
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `products[].sizes` of schema `GetProducts` in response with status code 200
	- [Breaking] [Deleted] property `products[].product_details` of schema `LimitedProductData` in response with status code 200
	- [Breaking] [Deleted] property `products[].price` of schema `Price` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProductBundleDetail` to `updateProductBundle`
	- [Changed] http method type from `get` To `put`


#### getSizeGuides

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `active` (type: `boolean`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `tag` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `ListSizeGuide` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `ListSizeGuide` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getSizeGuides` to `createSizeGuide`
	- [Changed] http method type from `get` To `post`


#### getSizeGuide

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `title` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `id` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `modified_on` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `guide` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `subtitle` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `company_id` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `active` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `brand_id` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `created_on` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `modified_by` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `tag` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `created_by` of schema `SizeGuideResponse` in response with status code 200
	- [Breaking] [Deleted] property `name` of schema `SizeGuideResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getSizeGuide` to `updateSizeGuide`
	- [Changed] http method type from `get` To `put`


#### getAppProduct

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `is_gift` of schema `OwnerAppItemResponse` in response with status code 200
	- [Breaking] [Deleted] property `is_cod` of schema `OwnerAppItemResponse` in response with status code 200
	- [Breaking] [Deleted] property `moq` of schema `OwnerAppItemResponse` in response with status code 200
	- [Breaking] [Deleted] property `alt_text` of schema `OwnerAppItemResponse` in response with status code 200
	- [Breaking] [Deleted] property `seo` of schema `OwnerAppItemResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getAppProduct` to `updateAppProduct`
	- [Changed] http method type from `get` To `patch`


#### getGroupConfigurations

- ##### What's New
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `search` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `templateSlug` (type: `string`)

	- [Breaking] [Deleted] property `page` of schema `PageResponseType` in response with status code 200
	- [Breaking] [Deleted] property `data` of schema `GetConfigResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getGroupConfigurations` to `createGroupConfiguration`
	- [Breaking] [Changed] Required status of property `data` in response with status code 200
	- [Breaking] [Changed] Required status of property `page` in response with status code 200
	- [Changed] http method type from `get` To `post`


#### getListingConfigurations

- ##### What's New
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `search` (type: `string`)

	- [Breaking] [Deleted] property `page` of schema `PageResponseType` in response with status code 200
	- [Breaking] [Deleted] property `data` of schema `GetConfigResponse` in response with status code 200
	- [Deleted] Required status from property `message` in response with status code 4XX

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getListingConfigurations` to `createListingConfiguration`
	- [Breaking] [Changed] Required status of property `data` in response with status code 200
	- [Breaking] [Changed] Required status of property `page` in response with status code 200
	- [Changed] http method type from `get` To `post`


#### getConfigurations

- ##### What's New
	- [Added] Body content in Request

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getConfigurations` to `createConfigurationProductListing`
	- [Changed] http method type from `get` To `post`


#### getConfigurationByType

- ##### What's New
	- [Breaking] [Added] properties  in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `data.product.compare` of schema `GetCatalogConfigurationDetailsProduct` in response with status code 200
	- [Breaking] [Deleted] property `data.product.detail` of schema `GetCatalogConfigurationDetailsProduct` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getConfigurationByType` to `createConfigurationByType`
	- [Changed] http method type from `get` To `post`


#### getAllCollections

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `scheduleStatus` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `type` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `tags` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `isActive` (type: `boolean`)

	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `filters` of schema `CollectionListingFilter` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetCollectionListingResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getAllCollections` to `createCollection`
	- [Changed] http method type from `get` To `post`


#### deleteCollection

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `message` of schema `DeleteResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `deleteCollection` to `updateCollection`
	- [Changed] http method type from `delete` To `put`


#### updateCollection

- ##### What's Deprecated
	- [Breaking] [Deleted] Body content in Request
	- [Deleted] properties `badge.color`, `badge.text` in response with status code 200
	- [Breaking] [Deleted] property `logo.aspect_ratio` of schema `CollectionImage` in response with status code 200
	- [Deleted] Required status from property `logo.aspect_ratio` in response with status code 200
	- [Breaking] [Deleted] property `is_visible` of schema `UpdateCollection` in response with status code 200
	- [Breaking] [Deleted] property `modified_by` of schema `UpdateCollection` in response with status code 200
	- [Deleted] properties `_schedule.duration`, `_schedule.end`, `_schedule.start`, `_schedule.cron`, `_schedule.next_schedule` in response with status code 200
	- [Breaking] [Deleted] property `_locale_language` of schema `UpdateCollection` in response with status code 200
	- [Breaking] [Deleted] property `seo` of schema `SeoDetail` in response with status code 200
	- [Breaking] [Deleted] property `_custom_json` of schema `UpdateCollection` in response with status code 200
	- [Deleted] Required status from properties `banners.landscape.aspect_ratio`, `banners.landscape.url` in response with status code 200
	- [Deleted] Required status from properties `banners.portrait.aspect_ratio`, `banners.portrait.url` in response with status code 200
	- [Deleted] Required status from properties `banners.landscape`, `banners.portrait` in response with status code 200
	- [Breaking] [Deleted] property `sort_on` of schema `UpdateCollection` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `UpdateCollection` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `UpdateCollection` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `updateCollection` to `getCollectionDetail`
	- [Changed] http method type from `put` To `get`


#### getCollectionItems

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `sortOn` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageId` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `filters` of schema `GetCollectionItemsResponse` in response with status code 200
	- [Breaking] [Deleted] property `sort_on` of schema `GetCollectionItemsResponse` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `GetCollectionItemsResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getCollectionItems` to `addCollectionItems`
	- [Changed] http method type from `get` To `post`


#### listDepartmentsData

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `itemType` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `name` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `search` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `isActive` (type: `boolean`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `DepartmentsResponse` in response with status code 200
	- [Breaking] [Deleted] property `code` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `message` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `status` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `errors` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `meta` of schema `DepartmentErrorResponse` in response with status code 4XX

- ##### What's Changed
	- [Breaking] [Changed] operationId from `listDepartmentsData` to `createDepartments`
	- [Changed] http method type from `get` To `post`


#### getDepartmentData

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `DepartmentsResponse` in response with status code 200
	- [Breaking] [Deleted] property `code` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `message` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `status` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `errors` of schema `DepartmentErrorResponse` in response with status code 4XX
	- [Breaking] [Deleted] property `meta` of schema `DepartmentErrorResponse` in response with status code 4XX

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getDepartmentData` to `updateDepartment`
	- [Changed] http method type from `get` To `put`


#### getProductExportJobs

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `status` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `fromDate` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `toDate` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)


- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProductExportJobs` to `createProductExportJob`
	- [Changed] http method type from `get` To `post`


#### listCategories

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `level` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `departments` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `CategoryResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `listCategories` to `createCategories`
	- [Changed] http method type from `get` To `post`


#### getCategoryData

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `data` of schema `Category` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getCategoryData` to `updateCategory`
	- [Changed] http method type from `get` To `put`


#### getProducts

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `brandIds` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `categoryIds` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `itemIds` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `departmentIds` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `itemCode` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `tags` (type: `array`)

	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `ProductListingResponseV2` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProducts` to `createProduct`
	- [Changed] http method type from `get` To `post`


#### getProduct

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `brandUid` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `itemCode` (type: `string`)

	- [Breaking] [Deleted] property `data` of schema `ProductSchemaV2` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProduct` to `editProduct`
	- [Changed] http method type from `get` To `put`


#### allSizes

- ##### What's New
	- [Breaking] [Added] Type `string` to property `all_sizes[].size` of schema `AllSizes` in response with status code 200
	- [Breaking] [Added] Type `string` to property `all_sizes[].item_weight_unit_of_measure` of schema `AllSizes` in response with status code 200


#### getProductBulkUploadHistory

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `search` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `ProductBulkRequest` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProductBulkUploadHistory` to `createBulkProductUploadJob`
	- [Changed] http method type from `get` To `post`


#### uploadBulkProducts

- ##### What's New
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `BulkJob` in request body

- ##### What's Changed
	- [Breaking] [Changed] Default value from `2023-07-11T00:42:55.835166` to `2023-08-16T12:07:13.817348` of property `modified_on` of schema `BulkJob` in request body
	- [Breaking] [Changed] Default value from `2023-07-11T00:42:55.835166` to `2023-08-16T12:07:13.817348` of property `modified_on` of schema `BulkResponse` in response with status code 200


#### getProductAssetsInBulk

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `BulkAssetResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProductAssetsInBulk` to `createProductAssetsInBulk`
	- [Changed] http method type from `get` To `post`


#### getInventoryBySize

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `sellable` (type: `boolean`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `InventoryResponsePaginated` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getInventoryBySize` to `addInventory`
	- [Changed] http method type from `get` To `post`


#### getInventoryBulkUploadHistory

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `BulkInventoryGet` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getInventoryBulkUploadHistory` to `createBulkInventoryJob`
	- [Changed] http method type from `get` To `post`


#### getInventoryExport

- ##### What's New
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `url` of schema `InventoryExportJob` in response with status code 200
	- [Breaking] [Deleted] property `completed_on` of schema `InventoryExportJob` in response with status code 200
	- [Deleted] Required status from property `type` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getInventoryExport` to `createInventoryExportJob`
	- [Changed] http method type from `get` To `post`


#### listInventoryExport

- ##### What's New
	- [Breaking] [Added] Required status to property `undefined` in response with status code 200
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `status` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `fromDate` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `toDate` (type: `string`)

	- [Breaking] [Deleted] `query` parameter `q` (type: `string`)

	- [Breaking] [Deleted] property `items` of schema `InventoryExportJobListResponse` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `listInventoryExport` to `createInventoryExport`
	- [Breaking] [Changed] Required status of property `items` in response with status code 200
	- [Changed] http method type from `get` To `post`


#### getHsnCode

- ##### What's New
	- [Added] Body content in Request

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getHsnCode` to `updateHsnCode`
	- [Changed] http method type from `get` To `put`


#### bulkHsnCode

- ##### What's New
	- [Added] Possible values `0.25` to property `data[].tax2` of schema `HsnUpsert` in request body
	- [Added] Possible values `1.5` to property `data[].tax2` of schema `HsnUpsert` in request body
	- [Added] Possible values `2.5` to property `data[].tax2` of schema `HsnUpsert` in request body
	- [Added] Possible values `0.25` to property `data[].tax1` of schema `HsnUpsert` in request body
	- [Added] Possible values `1.5` to property `data[].tax1` of schema `HsnUpsert` in request body
	- [Added] Possible values `2.5` to property `data[].tax1` of schema `HsnUpsert` in request body


#### getAppProducts

- ##### What's Deprecated
	- [Deleted] properties `items[].images[].aspect_ratio`, `items[].images[].secure_url`, `items[].images[].url`, `items[].images[].aspect_ratio_f` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `items[].images[]` of schema `Image` in response with status code 200


#### deleteSearchConfiguration

- ##### What's New
	- [Added] method `deleteSearchConfiguration`



#### getSearchConfiguration

- ##### What's New
	- [Added] method `getSearchConfiguration`



#### createSearchConfiguration

- ##### What's New
	- [Added] method `createSearchConfiguration`



#### updateSearchConfiguration

- ##### What's New
	- [Added] method `updateSearchConfiguration`



### Configuration



#### getOrderingStoreCookie

- ##### What's New
	- [Added] method `getOrderingStoreCookie`



#### removeOrderingStoreCookie

- ##### What's New
	- [Added] method `removeOrderingStoreCookie`



### Order



#### invalidateShipmentCache

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 5XX


#### reassignLocation

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### updateShipmentLock

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### getAnnouncements

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### updateAddress

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### updateShipmentStatus

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].status` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].final_state` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].identifier` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].stack_trace` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].code` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].meta` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].message` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `statuses[].shipments[].exception` of schema `ShipmentsResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### processManifest

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `order_info.shipment.shipment_data.location_details.articles[].status` of schema `ArticleDetails` in request body
	- [Breaking] [Added] Possible nullable value `true` to property `order_info.shipment.shipment_data.shipment[].articles[].status` of schema `ArticleDetails` in request body
	- [Breaking] [Added] Possible nullable value `true` to property `order_info.shipment.shipment_data.shipment[].lock_status` of schema `ShipmentDetails` in request body
	- [Breaking] [Added] Possible nullable value `true` to property `order_info.shipment.shipment_data.shipment[].lock_message` of schema `ShipmentDetails` in request body
	- [Breaking] [Added] Possible nullable value `true` to property `order_info.shipment.shipment_data.shipment[].action_to_status` of schema `ShipmentDetails` in request body
	- [Added] property `order_config.affiliate.config.app_company_id` of schema `AffiliateConfig` in request body
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### dispatchManifest

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### getRoleBasedActions

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 5XX


#### getShipmentHistory

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 5XX


#### updatePackagingDimensions

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### uploadConsent

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### fetchCreditBalanceDetail

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### fetchRefundModeConfig

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### attachOrderUser

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### sendUserMobileOTP

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### verifyMobileOTP

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### eInvoiceRetry

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### trackShipment

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### updateShipmentTracking

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX


#### getShipments

- ##### What's New
	- [Added] `query` parameter `orderType` (type: `string`)

	- [Breaking] [Added] Possible nullable value `true` to property `total_count` of schema `ShipmentInternalPlatformViewResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ShipmentInternalPlatformViewResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ShipmentInternalPlatformViewResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].order_date` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.current_shipment_status` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.shipment_status_id` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.bag_list` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.created_at` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.shipment_id` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_status.status_created_at` of schema `ShipmentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.uid` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.first_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.last_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.is_anonymous_user` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.avis_user_id` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user.name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.phone` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.address2` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.longitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.pincode` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.area` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.address_type` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.country` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.address_category` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.email` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.created_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.address1` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.landmark` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.updated_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.version` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.latitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.contact_person` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.state` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].delivery_address.city` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.channel_shipment_id` of schema `ShipmentListingChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.is_affiliate` of schema `ShipmentListingChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.logo` of schema `ShipmentListingChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.name` of schema `ShipmentListingChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].lock_status` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].payment_methods` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].display_name` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_type` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].gst.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].financial_breakup[].identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].bag_status[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_operational_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.dimensions.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.dimensions.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.dimensions.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.dimensions.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.dimensions.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.code` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.weight.is_default` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.weight.shipping` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.weight.unit` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].article.is_set` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].brand.logo` of schema `ShipmentListingBrand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].brand.created_on` of schema `ShipmentListingBrand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].brand.name` of schema `ShipmentListingBrand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].brand.logo_base64` of schema `ShipmentListingBrand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.employee_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].affiliate_bag_details.loyalty_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.attributes.currency` of schema `PlatformArticleAttributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.brand_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.slug_key` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.l3_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.l3_category_name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.last_updated_at` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.l2_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.brand` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.image` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.code` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.l1_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.size` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.can_cancel` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.can_return` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.meta` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.department_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].item.images` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].reasons` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].can_return` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].display_name` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].can_cancel` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].size` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].line_number` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].meta` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].dates.order_created` of schema `Dates` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].current_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bags[].entity_type` of schema `BagUnit` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.phone` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.pincode` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.location_type` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.store_email` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.name` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.state` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].fulfilling_store.city` of schema `ShipmentItemFulFillingStore` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.same_store_available` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.is_international` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.debug_info` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.sla` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_chargeable_weight` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.pdf_media` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.tags` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.existing_dp_list` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.parent_dp_id` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_weight` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.dp_options` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.assign_dp_from_sb` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipping_zone` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.store_invoice_updated_date` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.activity_comment` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.external` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.ewaybill_info` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.shipment_volumetric_weight` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.packaging_name` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.weight` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.bag_weight` of schema `ShipmentItemMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].payment_mode` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].can_process` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_channnel` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_id` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].customer_note` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].total_bags` of schema `ShipmentItem` in response with status code 200
	- [Added] property `items[].mode_of_payment` of schema `ShipmentItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `lane` of schema `ShipmentInternalPlatformViewResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.type` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.has_previous` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.has_next` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.total` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.size` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.current` of schema `Page` in response with status code 200


#### getShipmentById

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ShipmentInfoResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].picked_date` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].is_passed` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].is_current` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].time` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.invoice_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.updated_date` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.external_invoice_id` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.label_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_slot` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.order_date` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.tax_details` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.cod_charges` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.source` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.affiliate_id` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.ordering_channel_logo` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.order_value` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.ordering_channel` of schema `OrderDetailsData` in response with status code 200
	- [Added] property `shipments[].order.meta` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.uid` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.first_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.last_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.is_anonymous_user` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.avis_user_id` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].enable_dp_tracking` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].custom_message` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].estimated_sla_time` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].can_update_dimension` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_images` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].fulfilment_priority` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.articles[].status` of schema `ArticleDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.lock_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.lock_message` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.action_to_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].custom_meta` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_quantity` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_name` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.address` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_id` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_gst` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone[].country_code` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone[].number` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.emails` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.phone` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.pincode` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.meta` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.address` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.id` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.code` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.store_name` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.country` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.contact_person` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.state` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.city` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].lock_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].platform_logo` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user_agent` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.pincode` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.country` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.gst_tag` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice_id` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payment_methods` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].coupon` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.company_affiliate_tag` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.b2b` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.credit_note_url` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.delivery_challan_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.po_invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_id` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.ad_id` of schema `AffiliateDetails` in response with status code 200
	- [Added] property `shipments[].affiliate_details.config` of schema `AffiliateConfig` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].is_dp_assign_enabled` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gstin_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Required status to properties `shipments[].bags[].gst_details.brand_calculated_amount`, `shipments[].bags[].gst_details.gst_fee`, `shipments[].bags[].gst_details.tax_collected_at_source`, `shipments[].bags[].gst_details.value_of_good` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].parent_promo_bags` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].seller_identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.phone` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address2` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.longitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.pincode` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.area` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address_type` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.country` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address_category` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.email` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.created_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address1` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.landmark` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.updated_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.version` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.latitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.contact_person` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.state` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.city` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.identifiers` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.returnable` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.time` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.unit` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.uid` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.size` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.logo` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.created_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.brand_name` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.modified_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].group_id` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].affiliate_bag_details.affiliate_bag_id` of schema `AffiliateBagsDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.attributes.currency` of schema `PlatformArticleAttributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.brand_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.slug_key` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l3_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l3_category_name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.last_updated_at` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l2_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.brand` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.image` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.code` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l1_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.size` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.can_cancel` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.can_return` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.meta` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.department_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.images` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].payment_methods[].mode` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].payment_methods[].amount` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].quantity` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].can_return` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].can_cancel` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].display_name` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].line_number` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.gift_message` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.gift_price` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.display_text` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.is_gift_applied` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.custom_message` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.docket_number` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.group_id` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.partial_can_ret` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.extra_meta` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.docker_number` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.po_line_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.total_gst_percentage` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.partial_can_ret` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.po_tax_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.item_base_price` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.custom_json` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promotion_type` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promotion_name` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].discount_rules[].value` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].discount_rules[].type` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].amount` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].article_quantity` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].buy_rules[].item_criteria.item_brand` of schema `ItemCriterias` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].buy_rules[].cart_conditions` of schema `BuyRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promo_id` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].mrp_promotion` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.store_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.kafka_sync` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.state_type` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.state_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.shipment_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Value format `date-time` to property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.status` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].entity_type` of schema `OrderBags` in response with status code 200
	- [Added] property `shipments[].bags[].is_parent` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_assignment` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].total_items` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payment_mode` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].packaging_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].journey_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.mode` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.logo` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.source` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].operational_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.meta` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.bag_list` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.shipment_id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.status` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.display_name` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].total_bags` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_created_at` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].previous_shipment_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].shipment_update_time` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].rto_address` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Added] property `shipments[].credit_note_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].is_self_ship` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].mode_of_payment` of schema `PlatformShipment` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.cgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `number` of property `shipments[].bags[].gst_details.gst_tax_percentage` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.igst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.sgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `string` of property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200


#### getOrderById

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.platform_user_details.platform_user_first_name` of schema `PlatformUserDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.platform_user_details.platform_user_last_name` of schema `PlatformUserDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.company_logo` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.currency_symbol` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.comment` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.extra_meta` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.files` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.currency` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.amount_paid` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.payment_id` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.unique_reference_number` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.terminal_id` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.entity` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.transaction_id` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.transaction_data.status` of schema `TransactionData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.ordering_store` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.payment_type` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.mongo_cart_id` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.order_child_entities` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.order_type` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.order_platform` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.customer_note` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.staff` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.meta.cart_id` of schema `OrderMeta` in response with status code 200
	- [Added] property `order.meta.cart_object_id` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `order.payment_methods` of schema `OrderData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].picked_date` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].is_passed` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].is_current` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].tracking_list[].time` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.invoice_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.updated_date` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.external_invoice_id` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice.label_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_slot` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.order_date` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.tax_details` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.cod_charges` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.source` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.affiliate_id` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.ordering_channel_logo` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.order_value` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].order.ordering_channel` of schema `OrderDetailsData` in response with status code 200
	- [Added] property `shipments[].order.meta` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.uid` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.first_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.last_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.is_anonymous_user` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.avis_user_id` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user.name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].enable_dp_tracking` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].custom_message` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].estimated_sla_time` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].can_update_dimension` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_images` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].delivery_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].billing_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].fulfilment_priority` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.articles[].status` of schema `ArticleDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.lock_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.lock_message` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_details.action_to_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].custom_meta` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_quantity` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_name` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.address` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_id` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_gst` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone[].country_code` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone[].number` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.phone` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].company_details.company_contact.emails` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.phone` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.pincode` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.meta` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.address` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.id` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.code` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.store_name` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.country` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.contact_person` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.state` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].ordering_store.city` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].lock_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].platform_logo` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].user_agent` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.pincode` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.country` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_details.gst_tag` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].invoice_id` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payment_methods` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].coupon` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.shipment_meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].affiliate_details.shipment_meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.company_affiliate_tag` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.b2b` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.credit_note_url` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.delivery_challan_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.label_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.invoice_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.pdf_links.po_invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.affiliate_id` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].affiliate_details.ad_id` of schema `AffiliateDetails` in response with status code 200
	- [Added] property `shipments[].affiliate_details.config` of schema `AffiliateConfig` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bag_status_history[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].is_dp_assign_enabled` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gstin_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Required status to properties `shipments[].bags[].gst_details.brand_calculated_amount`, `shipments[].bags[].gst_details.gst_fee`, `shipments[].bags[].gst_details.tax_collected_at_source`, `shipments[].bags[].gst_details.value_of_good` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].parent_promo_bags` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].financial_breakup.identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].seller_identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.phone` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address2` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.longitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.pincode` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.area` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address_type` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.country` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address_category` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.email` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.created_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.address1` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.landmark` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.updated_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.version` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.latitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.contact_person` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.state` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].delivery_address.city` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.identifiers` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.returnable` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.time` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.return_config.unit` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.uid` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].article.size` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.logo` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.created_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.brand_name` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].brand.modified_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].group_id` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].affiliate_bag_details.affiliate_bag_id` of schema `AffiliateBagsDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.attributes.currency` of schema `PlatformArticleAttributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.brand_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.slug_key` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l3_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l3_category_name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.last_updated_at` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l2_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.brand` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.image` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.code` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.l1_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.size` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.can_cancel` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.can_return` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.meta` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.department_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].item.images` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].payment_methods[].mode` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].payment_methods[].amount` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].quantity` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].can_return` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].can_cancel` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].display_name` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].line_number` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.gift_message` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.gift_price` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.display_text` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.gift_card.is_gift_applied` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.custom_message` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.docket_number` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.group_id` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.partial_can_ret` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.extra_meta` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.docker_number` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.po_line_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.total_gst_percentage` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.partial_can_ret` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.po_tax_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.b2b_po_details.item_base_price` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].meta.custom_json` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promotion_type` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promotion_name` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].discount_rules[].value` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].discount_rules[].type` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].amount` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].article_quantity` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].buy_rules[].item_criteria.item_brand` of schema `ItemCriterias` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].buy_rules[].cart_conditions` of schema `BuyRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].promo_id` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].applied_promos[].mrp_promotion` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.store_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.kafka_sync` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.state_type` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.state_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.shipment_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Value format `date-time` to property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.bag_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].current_status.status` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].bags[].entity_type` of schema `OrderBags` in response with status code 200
	- [Added] property `shipments[].bags[].is_parent` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].dp_assignment` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].total_items` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `shipments[].meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payment_mode` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].packaging_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].journey_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.mode` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.logo` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].payments.source` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].operational_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.meta` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.bag_list` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.shipment_id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.status` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].status.display_name` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].total_bags` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipments[].shipment_created_at` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].previous_shipment_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].shipment_update_time` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].rto_address` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Added] property `shipments[].credit_note_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].is_self_ship` of schema `PlatformShipment` in response with status code 200
	- [Added] property `shipments[].mode_of_payment` of schema `PlatformShipment` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.cgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `number` of property `shipments[].bags[].gst_details.gst_tax_percentage` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.igst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].bags[].gst_details.sgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `string` of property `shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200


#### getLaneConfig

- ##### What's New
	- [Added] `query` parameter `orderType` (type: `string`)



#### getOrders

- ##### What's New
	- [Added] `query` parameter `orderType` (type: `string`)

	- [Breaking] [Added] Possible nullable value `true` to property `total_count` of schema `OrderListingResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `OrderListingResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `OrderListingResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].breakup_values[].value` of schema `PlatformBreakupValues` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].breakup_values[].name` of schema `PlatformBreakupValues` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].breakup_values[].display` of schema `PlatformBreakupValues` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].total_order_value` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].order_created_time` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].payment_mode` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].picked_date` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].tracking_list[].is_passed` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].tracking_list[].is_current` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].tracking_list[].time` of schema `TrackingList` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].invoice.invoice_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].invoice.updated_date` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].invoice.external_invoice_id` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].invoice.label_url` of schema `InvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_slot` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.order_date` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.tax_details` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.cod_charges` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.source` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.affiliate_id` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.ordering_channel_logo` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.order_value` of schema `OrderDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].order.ordering_channel` of schema `OrderDetailsData` in response with status code 200
	- [Added] property `items[].shipments[].order.meta` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.uid` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.first_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.last_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.is_anonymous_user` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.avis_user_id` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user.name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].enable_dp_tracking` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].custom_message` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].estimated_sla_time` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].can_update_dimension` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_images` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].delivery_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].billing_details.area` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].billing_details.address_type` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].billing_details.email` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].billing_details.address1` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].billing_details.landmark` of schema `UserDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].fulfilment_priority` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_details.articles[].status` of schema `ArticleDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_details.lock_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_details.lock_message` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_details.action_to_status` of schema `ShipmentDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].custom_meta` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_quantity` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_name` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.address` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_id` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_gst` of schema `CompanyDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_contact.phone[].country_code` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_contact.phone[].number` of schema `PhoneDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_contact.phone` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].company_details.company_contact.emails` of schema `ContactDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.phone` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.pincode` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.meta` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.address` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.id` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.code` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.store_name` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.country` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.contact_person` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.state` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].ordering_store.city` of schema `OrderingStoreDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].lock_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].platform_logo` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].user_agent` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].dp_details.pincode` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].dp_details.country` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].dp_details.gst_tag` of schema `DPDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].invoice_id` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].payment_methods` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].coupon` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.shipment_meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.shipment_meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.company_affiliate_tag` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.label_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.label_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.invoice_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.b2b` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.label` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.label_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.invoice_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.credit_note_url` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.delivery_challan_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.label_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.invoice_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.invoice_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.pdf_links.po_invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.affiliate_id` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].affiliate_details.ad_id` of schema `AffiliateDetails` in response with status code 200
	- [Added] property `items[].shipments[].affiliate_details.config` of schema `AffiliateConfig` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bag_status_history[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].is_dp_assign_enabled` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.gstin_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Required status to properties `items[].shipments[].bags[].gst_details.brand_calculated_amount`, `items[].shipments[].bags[].gst_details.gst_fee`, `items[].shipments[].bags[].gst_details.tax_collected_at_source`, `items[].shipments[].bags[].gst_details.value_of_good` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].parent_promo_bags` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].financial_breakup.identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].seller_identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.phone` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.address2` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.longitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.pincode` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.area` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.address_type` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.country` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.address_category` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.email` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.created_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.address1` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.landmark` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.updated_at` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.version` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.latitude` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.contact_person` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.state` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].delivery_address.city` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.identifiers` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.return_config.returnable` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.return_config.time` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.return_config.unit` of schema `ReturnConfig1` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.uid` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].article.size` of schema `OrderBagArticle` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].brand.logo` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].brand.created_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].brand.brand_name` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].brand.modified_on` of schema `OrderBrandName` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].group_id` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].affiliate_bag_details.affiliate_bag_id` of schema `AffiliateBagsDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.attributes.currency` of schema `PlatformArticleAttributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.brand_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.slug_key` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.l3_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.l3_category_name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.last_updated_at` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.name` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.l2_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.brand` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.image` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.code` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.l1_category` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.size` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.can_cancel` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.can_return` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.meta` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.department_id` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].item.images` of schema `PlatformItem` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].payment_methods[].mode` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].payment_methods[].amount` of schema `BagPaymentMethods` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].quantity` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].identifier` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].can_return` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].can_cancel` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].display_name` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].line_number` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.gift_card.gift_message` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.gift_card.gift_price` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.gift_card.display_text` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.gift_card.is_gift_applied` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.custom_message` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.docket_number` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.group_id` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.partial_can_ret` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.extra_meta` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.docker_number` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.po_line_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.total_gst_percentage` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.partial_can_ret` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.po_tax_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.b2b_po_details.item_base_price` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].meta.custom_json` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].promotion_type` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].promotion_name` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].discount_rules[].value` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].discount_rules[].type` of schema `DiscountRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].amount` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].article_quantity` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].buy_rules[].item_criteria.item_brand` of schema `ItemCriterias` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].buy_rules[].cart_conditions` of schema `BuyRules` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].promo_id` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].applied_promos[].mrp_promotion` of schema `AppliedPromos` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.store_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.kafka_sync` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.state_type` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.state_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.shipment_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Value format `date-time` to property `items[].shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.bag_id` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].current_status.status` of schema `CurrentStatus` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].bags[].entity_type` of schema `OrderBags` in response with status code 200
	- [Added] property `items[].shipments[].bags[].is_parent` of schema `OrderBags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].dp_assignment` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].total_items` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].shipments[].meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].payment_mode` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].packaging_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].journey_type` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].payments.mode` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].payments.logo` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].payments.source` of schema `ShipmentPayments` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].operational_status` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.meta` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.bag_list` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.shipment_id` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.status` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].status.display_name` of schema `ShipmentStatusData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].total_bags` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipments[].shipment_created_at` of schema `PlatformShipment` in response with status code 200
	- [Added] property `items[].shipments[].previous_shipment_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `items[].shipments[].shipment_update_time` of schema `PlatformShipment` in response with status code 200
	- [Added] property `items[].shipments[].rto_address` of schema `PlatformDeliveryAddress` in response with status code 200
	- [Added] property `items[].shipments[].credit_note_id` of schema `PlatformShipment` in response with status code 200
	- [Added] property `items[].shipments[].is_self_ship` of schema `PlatformShipment` in response with status code 200
	- [Added] property `items[].shipments[].mode_of_payment` of schema `PlatformShipment` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].order_id` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.logo` of schema `PlatformChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].channel.name` of schema `PlatformChannel` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.uid` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.first_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.last_name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.is_anonymous_user` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.avis_user_id` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].user_info.name` of schema `UserDataInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].order_value` of schema `PlatformOrderItems` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `lane` of schema `OrderListingResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.type` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.has_previous` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.has_next` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.total` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.size` of schema `Page` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `page.current` of schema `Page` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].bags[].gst_details.cgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `number` of property `items[].shipments[].bags[].gst_details.gst_tax_percentage` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].bags[].gst_details.igst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].bags[].gst_details.sgst_gst_fee` of schema `BagGST` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `string` of property `items[].shipments[].bags[].current_status.updated_at` of schema `CurrentStatus` in response with status code 200


#### getfilters

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned[].required` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.returned` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre[].required` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.action_centre` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled[].required` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.unfulfilled` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters[].required` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.filters` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed[].required` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.processed` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.applied_filters` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `advance_filter.page` of schema `AdvanceFilterInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `global_filter[].options[].show_ui` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `global_filter[].options[].placeholder_text` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `global_filter[].options[].min_search_size` of schema `FilterInfoOption` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `global_filter[].placeholder_text` of schema `FiltersInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `global_filter[].required` of schema `FiltersInfo` in response with status code 200


#### getBagById

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `bag_update_time` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `id` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `parent_promo_bags` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `tags` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `financial_breakup[].identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `seller_identifier` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `original_bag_list` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article_details.status` of schema `ArticleDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_operational_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.is_active` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.alohomora_user_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.is_enabled_for_recon` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.brand_store_tags` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.order_integration_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.parent_store_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.code` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.store_address_json.version` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.store_address_json.area` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.store_address_json.email` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.additional_contact_details` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.timing` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.notification_emails` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.gst_number` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.ewaybill_portal_details` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.einvoice_portal_details.username` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.einvoice_portal_details.user` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.einvoice_portal_details.password` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.gst_credentials.e_invoice.username` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.gst_credentials.e_invoice.user` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.gst_credentials.e_invoice.password` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.gst_credentials.e_waybill.enabled` of schema `StoreEwaybill` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.product_return_config` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.meta.documents.gst.url` of schema `Document` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.packaging_material_count` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.is_archived` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `ordering_store.address2` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.dimensions.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.dimensions.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.dimensions.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.dimensions.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.dimensions.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.code` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.weight.is_default` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.weight.shipping` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.weight.unit` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `article.is_set` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `brand.logo` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `brand.credit_note_allowed` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `brand.created_on` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `brand.modified_on` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.employee_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_bag_details.loyalty_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.primary_material` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.essential` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.marketer_name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.primary_color` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.marketer_address` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.primary_color_hex` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.brand_name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.attributes.gender` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l3_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l3_category_name` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.last_updated_at` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l2_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.code` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l1_category_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l1_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.can_cancel` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.can_return` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.meta` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.department_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `item.l2_category_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `identifier` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `quantity` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `restore_promos` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.shipment_meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `affiliate_details.shipment_meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.company_affiliate_tag` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.label_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.label_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.invoice_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.b2b` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.label` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.label_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.invoice_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.credit_note_url` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.delivery_challan_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.label_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.invoice_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.invoice_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.pdf_links.po_invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.affiliate_id` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `affiliate_details.ad_id` of schema `AffiliateDetails` in response with status code 200
	- [Added] property `affiliate_details.config` of schema `AffiliateConfig` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `reasons` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `bag_status_history.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `display_name` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `line_number` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `restore_coupon` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.gift_card.gift_message` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.gift_card.gift_price` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.gift_card.display_text` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.gift_card.is_gift_applied` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.custom_message` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.docket_number` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.group_id` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.partial_can_ret` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.extra_meta` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.docker_number` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.po_line_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.total_gst_percentage` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.partial_can_ret` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.po_tax_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.b2b_po_details.item_base_price` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `meta.custom_json` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `no_of_bags_order` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `applied_promos` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `journey_type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `dates.order_created` of schema `Dates` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `shipment_id` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `current_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `operational_status` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `entity_type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 5XX

- ##### What's Deprecated
	- [Deleted] Required status from property `gst_details.cgst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `gst_details.cgst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `gst_details.gst_tag` in response with status code 200
	- [Deleted] Required status from property `gst_details.gst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `gst_details.hsn_code` in response with status code 200
	- [Deleted] Required status from property `gst_details.hsn_code_id` in response with status code 200
	- [Deleted] Required status from property `gst_details.igst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `gst_details.igst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `gst_details.sgst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `gst_details.sgst_tax_percentage` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `gst_details.cgst_gst_fee` of schema `BagGSTDetails` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `gst_details.igst_gst_fee` of schema `BagGSTDetails` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `gst_details.sgst_gst_fee` of schema `BagGSTDetails` in response with status code 200


#### getBags

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_update_time` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].id` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.cgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.igst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.gst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.hsn_code_id` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.is_default_hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.gst_tag` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.sgst_tax_percentage` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].gst_details.hsn_code` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].parent_promo_bags` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].tags` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].amount_paid_roundoff` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].tax_collected_at_source` of schema `FinancialBreakup` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].identifiers.alu` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].identifiers.ean` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].identifiers.sku_code` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].identifiers.upc` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].financial_breakup[].identifiers.isbn` of schema `Identifier` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status[].display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].seller_identifier` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].original_bag_list` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article_details.status` of schema `ArticleDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_operational_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.is_active` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.alohomora_user_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.is_enabled_for_recon` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.brand_store_tags` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.order_integration_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.parent_store_id` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.code` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.store_address_json.version` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.store_address_json.area` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.store_address_json.email` of schema `StoreAddress` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.additional_contact_details` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.timing` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.notification_emails` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.gst_number` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.ewaybill_portal_details` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.einvoice_portal_details.username` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.einvoice_portal_details.user` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.einvoice_portal_details.password` of schema `EInvoicePortalDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.gst_credentials.e_invoice.username` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.gst_credentials.e_invoice.user` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.gst_credentials.e_invoice.password` of schema `StoreEinvoice` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.gst_credentials.e_waybill.enabled` of schema `StoreEwaybill` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.product_return_config` of schema `StoreMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.meta.documents.gst.url` of schema `Document` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.packaging_material_count` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.is_archived` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].ordering_store.address2` of schema `Store` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.dimensions.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.dimensions.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.dimensions.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.dimensions.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.dimensions.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.code` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.weight.is_default` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.weight.shipping` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.weight.unit` of schema `Weight` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].article.is_set` of schema `Article` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].brand.logo` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].brand.credit_note_allowed` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].brand.created_on` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].brand.modified_on` of schema `Brand` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.employee_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_bag_details.loyalty_discount` of schema `AffiliateBagDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.primary_material` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.essential` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.marketer_name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.primary_color` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.marketer_address` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.primary_color_hex` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.brand_name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.name` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.attributes.gender` of schema `Attributes` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l3_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l3_category_name` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.last_updated_at` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l2_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.code` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l1_category_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l1_category` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.can_cancel` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.can_return` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.meta` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.department_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].item.l2_category_id` of schema `Item` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].identifier` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].quantity` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].restore_promos` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.b2b_buyer_details.ajio_site_id` of schema `BuyerDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.formatted.max` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.formatted.min` of schema `Formatted` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.debug_info.stormbreaker_uuid` of schema `DebugInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.return_awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.einvoice_info.credit_note` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.einvoice_info.invoice` of schema `EinvoiceInfo` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.return_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.shipment_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dimension.height` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dimension.width` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dimension.is_default` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dimension.unit` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dimension.length` of schema `Dimensions` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dp_options` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.assign_dp_from_sb` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.due_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.store_invoice_updated_date` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.forward_affiliate_shipment_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.return_store_node` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.shipment_tags[].slug` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.shipment_tags[].entity_type` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.shipment_tags[].display_text` of schema `ShipmentTags` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.external` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.awb_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.lock_data.locked` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.lock_data.mto` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.lock_data.lock_message` of schema `LockData` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.shipment_volumetric_weight` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.marketplace_store_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.return_details` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dp_sort_key` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.packaging_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.timestamp.max` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.timestamp.min` of schema `ShipmentTimeStamp` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.auto_trigger_dp_assignment_acf` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.dp_name` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.po_number` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.forward_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.return_affiliate_order_id` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.shipment_meta.bag_weight` of schema `ShipmentMeta` in response with status code 200
	- [Added] property `items[].affiliate_details.shipment_meta.refund_to` of schema `ShipmentMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_meta.order_item_id` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_meta.employee_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_meta.quantity` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_meta.loyalty_discount` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_meta.is_priority` of schema `AffiliateMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.company_affiliate_tag` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.label_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.label_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.invoice_a6` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.b2b` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.label` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.label_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.invoice_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.credit_note_url` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.delivery_challan_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.label_export` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.invoice_a4` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.invoice_pos` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.pdf_links.po_invoice` of schema `PDFLinks` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.affiliate_id` of schema `AffiliateDetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].affiliate_details.ad_id` of schema `AffiliateDetails` in response with status code 200
	- [Added] property `items[].affiliate_details.config` of schema `AffiliateConfig` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].reasons` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].bag_status_history.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].display_name` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].line_number` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].restore_coupon` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.gift_card.gift_message` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.gift_card.gift_price` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.gift_card.display_text` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.gift_card.is_gift_applied` of schema `GiftCard` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.custom_message` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.docket_number` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.group_id` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.partial_can_ret` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.extra_meta` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.docker_number` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.po_line_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.total_gst_percentage` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.partial_can_ret` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.po_tax_amount` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.b2b_po_details.item_base_price` of schema `B2BPODetails` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].meta.custom_json` of schema `BagMeta` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].no_of_bags_order` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].applied_promos` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].journey_type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.refund_credit` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.amount_paid_roundoff` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.price_effective` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.promotion_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.pm_price_split` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.refund_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.transfer_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.coupon_effective_discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.tax_collected_at_source` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.brand_calculated_amount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.delivery_charge` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cashback` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.value_of_good` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cashback_applied` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.cod_charges` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.price_marked` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.amount_paid` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.coupon_value` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.discount` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.fynd_credits` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].prices.gift_price` of schema `Prices` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].dates.order_created` of schema `Dates` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].shipment_id` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.store_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.kafka_sync` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.app_display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.state_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.state_type` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bsh_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.created_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.shipment_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.updated_at` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_state_mapper.is_active` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_state_mapper.app_display_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_state_mapper.app_state_name` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_state_mapper.app_facing` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_state_mapper.notify_customer` of schema `BagStateMapper` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.bag_id` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.reasons` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].current_status.display_name` of schema `BagStatusHistory` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].operational_status` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `items[].entity_type` of schema `BagDetailsPlatformResponse` in response with status code 200
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 4XX
	- [Breaking] [Added] Possible nullable value `true` to property `status` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `success` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `message` of schema `ErrorResponse` in response with status code 5XX
	- [Breaking] [Added] Possible nullable value `true` to property `error_trace` of schema `ErrorResponse` in response with status code 5XX

- ##### What's Deprecated
	- [Deleted] Required status from property `items[].gst_details.cgst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.cgst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.gst_tag` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.gst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.hsn_code` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.hsn_code_id` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.igst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.igst_tax_percentage` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.sgst_gst_fee` in response with status code 200
	- [Deleted] Required status from property `items[].gst_details.sgst_tax_percentage` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].gst_details.cgst_gst_fee` of schema `BagGSTDetails` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].gst_details.igst_gst_fee` of schema `BagGSTDetails` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].gst_details.sgst_gst_fee` of schema `BagGSTDetails` in response with status code 200


# CHANGE LOG (1.3.2) FP-v1.8.1

## Application Client



### Cart



#### getCart

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### addItems

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### updateCart

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### applyCoupon

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 201


#### removeCoupon

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### applyRewardPoints

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### selectAddress

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 201


#### selectPaymentMode

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### getShipments

- ##### What's New
	- [Added] property `breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### checkoutCart

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### getCartSharedItems

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 404


#### updateCartWithSharedItems

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


#### checkoutCartV2

- ##### What's New
	- [Added] property `cart.breakup_values.raw.mop_total` of schema `RawBreakup` in response with status code 200


## Platform Client



### Order



#### getShipments

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].bags[].gst.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].bags[].gst.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].bags[].gst.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200


#### getShipmentById

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200


#### getOrderById

- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `string` of property `order.meta.employee_id` of schema `OrderMeta` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200


#### getOrders

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].gst_details.igst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].gst_details.sgst_gst_fee` of schema `GSTDetailsData` in response with status code 200
	- [Breaking] [Changed] Type from `string` to `number` of property `items[].shipments[].gst_details.cgst_gst_fee` of schema `GSTDetailsData` in response with status code 200


### Payment



#### getBrandPaymentGatewayConfig

- ##### What's New
	- [Added] `query` parameter `aggregator` (type: `string`)

	- [Added] `query` parameter `configType` (type: `string`)



### Theme



#### getCompanyLevelThemes

- ##### What's New
	- [Added] Content in Response 401


#### addMarketplaceThemeToCompany

- ##### What's New
	- [Added] Content in Response 401


### Webhook



#### getSubscribersByCompany

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberResponse` in response with status code 200


#### registerSubscriberToEvent

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberConfig` in response with status code 200
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberConfig` in response with status code 200
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberConfig` in response with status code 200


#### updateSubscriberConfig

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberConfig` in request body
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberConfig` in response with status code 200
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberConfig` in response with status code 200
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberConfig` in response with status code 200


#### getSubscriberById

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from `active` from property `status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `inactive` from property `status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `blocked` from property `status` of schema `SubscriberResponse` in response with status code 200


#### getSubscribersByExtensionId

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from `active` from property `items[].status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `inactive` from property `items[].status` of schema `SubscriberResponse` in response with status code 200
	- [Breaking] [Deleted] Possible values from `blocked` from property `items[].status` of schema `SubscriberResponse` in response with status code 200



# CHANGE LOG (1.3.0) FP-v1.8.0


## Application Client



### Cart



#### checkoutCart

- ##### What's New
	- [Breaking] [Added] Type `object` to property `customer_details` of schema `CartCheckoutDetailRequest` in request body


#### checkoutCartV2

- ##### What's New
	- [Breaking] [Added] Type `object` to property `customer_details` of schema `CartCheckoutDetailV2Request` in request body


### Catalog



#### getProductSizesBySlug

- ##### What's New
	- [Added] property `price.selling` of schema `Price` in response with status code 200
	- [Added] property `discount_meta` of schema `DiscountMeta` in response with status code 200


#### getProductBundlesBySlug

- ##### What's New
	- [Breaking] [Added] Type `string` to property `items[].logo` of schema `ProductGroupingModel` in response with status code 200


#### getProductPriceBySlug

- ##### What's New
	- [Added] property `price_per_piece.currency_code` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `price_per_piece.currency_symbol` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `price_per_piece.selling` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `price.currency_code` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `price.currency_symbol` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `price.selling` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `discount_meta` of schema `DiscountMeta` in response with status code 200
	- [Added] property `delivery_promise` of schema `PromiseSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `price_per_piece.currency` of schema `ProductStockPriceV3` in response with status code 200
	- [Breaking] [Deleted] property `price.currency` of schema `ProductStockPriceV3` in response with status code 200


#### getProductSellersBySlug

- ##### What's New
	- [Added] property `items[].price_per_piece.currency_code` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].price_per_piece.currency_symbol` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].price_per_piece.selling` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].price.currency_code` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].price.currency_symbol` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].price.selling` of schema `ProductStockPriceV3` in response with status code 200
	- [Added] property `items[].discount_meta` of schema `DiscountMeta` in response with status code 200
	- [Added] property `items[].delivery_promise` of schema `PromiseSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].price_per_piece.currency` of schema `ProductStockPriceV3` in response with status code 200
	- [Breaking] [Deleted] property `items[].price.currency` of schema `ProductStockPriceV3` in response with status code 200


### Content



#### getSEOConfiguration

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `seo.custom_meta_tags[]` of schema `CustomMetaTag` in response with status code 200


#### getPage

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getPages

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `items[]._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


### Payment



#### getAggregatorsConfig

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getActiveCardAggregator

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getActiveUserCards

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### deleteUserCard

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### verifyCustomerForPayment

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### verifyAndChargePayment

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### initialisePayment

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### checkAndUpdatePaymentStatus

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getPaymentModeRoutes

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getPosPaymentModeRoutes

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getRupifiBannerDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getEpaylaterBannerDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### resendOrCancelPayment

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### renderHTML

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### validateVPA

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### cardDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### getActiveRefundTransferModes

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### enableOrDisableRefundTransferMode

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### getUserBeneficiariesDetail

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### getOrderBeneficiariesDetail

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### verifyOtpAndAddBeneficiaryForBank

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### addBeneficiaryDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### addRefundBankAccountUsingOTP

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### verifyOtpAndAddBeneficiaryForWallet

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### updateDefaultBeneficiary

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 500


#### getPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### createPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### resendPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### cancelPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### getPaymentModeRoutesPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### pollingPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### createOrderHandlerPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### initialisePaymentPaymentLink

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### checkAndUpdatePaymentStatusPaymentLink

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### customerCreditSummary

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### redirectToAggregator

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### checkCredit

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### customerOnboard

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### outstandingOrderDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


#### paidOrderDetails

- ##### What's Deprecated
	- [Deleted] Required status from property `error` in response with status code 400
	- [Deleted] Required status from property `error` in response with status code 500


### PosCart



#### checkoutCart

- ##### What's New
	- [Breaking] [Added] Type `object` to property `customer_details` of schema `CartPosCheckoutDetailRequest` in request body


### Theme



#### getAppliedTheme

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties `config.list[].global_config.statics`, `config.list[].global_config.auth`, `config.list[].global_config.palette` in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/application/theme/v1.0/applied-theme` To `/service/application/theme/v2.0/applied-theme`


#### getThemeForPreview

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties `config.list[].global_config.statics`, `config.list[].global_config.auth`, `config.list[].global_config.palette` in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/application/theme/v1.0/{theme_id}/preview` To `/service/application/theme/v2.0/{theme_id}/preview`


### User



#### sendOTPOnEmail

- ##### What's New
	- [Added] property `captcha_code` of schema `SendEmailOtpRequestSchema` in request body


## Partner Client

- [Added] Theme class in partner client


## Platform Client



### AuditTrail



#### getAuditLogs

- ##### What's New
	- [Added] `query` parameter `limit` (type: `integer`)

	- [Added] `query` parameter `sort` (type: `object`)



### Billing



#### getSubscription

- ##### What's Deprecated
	- [Deleted] Value format from `date` from property `subscription.pause_collection.resume_at` of schema `SubscriptionPauseCollection` in response with status code 200
	- [Deleted] Value format from `date` from property `subscription.trial.start` of schema `SubscriptionTrial` in response with status code 200
	- [Deleted] Value format from `date` from property `subscription.trial.end` of schema `SubscriptionTrial` in response with status code 200


#### activateSubscriptionPlan

- ##### What's Deprecated
	- [Deleted] Value format from `date` from property `data.pause_collection.resume_at` of schema `SubscriptionPauseCollection` in response with status code 200
	- [Deleted] Value format from `date` from property `data.trial.start` of schema `SubscriptionTrial` in response with status code 200
	- [Deleted] Value format from `date` from property `data.trial.end` of schema `SubscriptionTrial` in response with status code 200


#### cancelSubscriptionPlan

- ##### What's Deprecated
	- [Deleted] Value format from `date` from property `data.pause_collection.resume_at` of schema `SubscriptionPauseCollection` in response with status code 200
	- [Deleted] Value format from `date` from property `data.trial.start` of schema `SubscriptionTrial` in response with status code 200
	- [Deleted] Value format from `date` from property `data.trial.end` of schema `SubscriptionTrial` in response with status code 200


#### getEnterprisePlans

- ##### What's New
	- [Added] method `getEnterprisePlans`



#### planStatusUpdate

- ##### What's New
	- [Added] method `planStatusUpdate`



#### subscripePlan

- ##### What's New
	- [Added] method `subscripePlan`



### Cart



#### getPromotions

- ##### What's New
	- [Breaking] [Added] Type `object` to property `items[].restrictions.user_registered` of schema `Restrictions1` in response with status code 200
	- [Added] property `items[]._id` of schema `PromotionListItem` in response with status code 200


#### createPromotion

- ##### What's New
	- [Breaking] [Added] Type `object` to property `restrictions.user_registered` of schema `Restrictions1` in request body
	- [Breaking] [Added] Type `object` to property `restrictions.user_registered` of schema `Restrictions1` in response with status code 201


#### getPromotionById

- ##### What's New
	- [Breaking] [Added] Type `object` to property `restrictions.user_registered` of schema `Restrictions1` in response with status code 200


#### updatePromotion

- ##### What's New
	- [Breaking] [Added] Type `object` to property `restrictions.user_registered` of schema `Restrictions1` in request body
	- [Breaking] [Added] Type `object` to property `restrictions.user_registered` of schema `Restrictions1` in response with status code 200


#### updatePriceAdjustment

- ##### What's New
	- [Added] Possible values `delivery_charge` to property `type` of schema `PriceAdjustmentUpdate` in request body
	- [Added] property `article_ids[].quantity` of schema `Article` in request body
	- [Added] Possible values `delivery_charge` to property `data.type` of schema `PriceAdjustment` in response with status code 200
	- [Added] property `data.article_ids[].quantity` of schema `Article` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart_value` of schema `PriceAdjustmentUpdate` in request body
	- [Breaking] [Deleted] property `data.cart_value` of schema `PriceAdjustment` in response with status code 200


#### addPriceAdjustment

- ##### What's New
	- [Added] Possible values `delivery_charge` to property `type` of schema `PriceAdjustmentAdd` in request body
	- [Added] property `article_ids[].quantity` of schema `Article` in request body
	- [Added] Possible values `delivery_charge` to property `data.type` of schema `PriceAdjustment` in response with status code 201
	- [Added] property `data.article_ids[].quantity` of schema `Article` in response with status code 201

- ##### What's Deprecated
	- [Breaking] [Deleted] property `cart_value` of schema `PriceAdjustmentAdd` in request body
	- [Breaking] [Deleted] property `data.cart_value` of schema `PriceAdjustment` in response with status code 201


#### platformCheckoutCart

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `user_id` of schema `PlatformCartCheckoutDetailRequest` in request body
	- [Added] property `custom_meta` of schema `PlatformCartCheckoutDetailRequest` in request body
	- [Added] property `customer_details` of schema `PlatformCartCheckoutDetailRequest` in request body


#### platformCheckoutCartV2

- ##### What's New
	- [Breaking] [Added] Possible nullable value `true` to property `user_id` of schema `PlatformCartCheckoutDetailV2Request` in request body
	- [Added] property `customer_details` of schema `PlatformCartCheckoutDetailV2Request` in request body


### Catalog



#### updateCollection

- ##### What's New
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `UpdateCollection` in request body
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `UpdateCollection` in response with status code 200


#### validateProductTemplate

- ##### What's New
	- [Added] `query` parameter `itemType` (type: `string`)

	- [Added] `query` parameter `bulk` (type: `boolean`)



#### downloadProductTemplateViews

- ##### What's New
	- [Added] `query` parameter `itemType` (type: `string`)

	- [Added] `query` parameter `type` (type: `string`)



#### createProduct

- ##### What's New
	- [Breaking] [Added] Type `string` to property `change_request_id` of schema `ProductCreateUpdateSchemaV2` in request body


#### getProductAttributes

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].example` of schema `AttributeMasterSerializer` in response with status code 200


#### editProduct

- ##### What's New
	- [Breaking] [Added] Type `string` to property `change_request_id` of schema `ProductCreateUpdateSchemaV2` in request body


#### createBulkProductUploadJob

- ##### What's New
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `BulkResponse` in response with status code 200


#### uploadBulkProducts

- ##### What's New
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `BulkResponse` in response with status code 200


#### getInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Type `string` to property `items[].modified_by` of schema `InventorySellerResponse` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].created_by` of schema `InventorySellerResponse` in response with status code 200


#### getDiscountedInventoryBySizeIdentifier

- ##### What's New
	- [Breaking] [Added] Type `string` to property `items[].modified_by` of schema `InventorySellerResponse` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].created_by` of schema `InventorySellerResponse` in response with status code 200


#### createBulkInventoryJob

- ##### What's New
	- [Breaking] [Added] Type `string` to property `modified_by` of schema `BulkResponse` in response with status code 200


### Common



#### searchApplication

- ##### What's New
	- [Added] property `_id` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `is_active` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `name` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `code` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `created_at` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `updated_at` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `decimal_digits` of schema `ApplicationResponse` in response with status code 200
	- [Added] property `symbol` of schema `ApplicationResponse` in response with status code 200


### Communication



#### getAudiences

- ##### What's New
	- [Added] Response with status 500


#### createAudience

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `is_active` of schema `AudienceReq` in request body
	- [Breaking] [Deleted] property `application` of schema `AudienceReq` in request body


#### getBigqueryHeaders
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's Deprecated
	- [Breaking] [Deleted] Body content in Request
	- [Deleted] properties `headers` in response with status code 200
	- [Breaking] [Deleted] Response with status 400

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getBigqueryHeaders` to `createBigQueryHeaders`


#### getAudienceById

- ##### What's New
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 404
	- [Added] property `sentry` of schema `GenericError` in response with status code 404
	- [Added] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `NotFound` in response with status code 404


#### updateAudienceById

- ##### What's New
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 404
	- [Added] property `sentry` of schema `GenericError` in response with status code 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `is_active` of schema `AudienceReq` in request body
	- [Breaking] [Deleted] property `application` of schema `AudienceReq` in request body

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `NotFound` in response with status code 404


#### getNSampleRecordsFromCsv

- ##### What's New
	- [Added] method `getNSampleRecordsFromCsv`



#### getEmailProviders

- ##### What's New
	- [Added] Response with status 500


#### createEmailProvider

- ##### What's New
	- [Added] Response with status 500


#### getEmailProviderById

- ##### What's New
	- [Added] Response with status 404
	- [Added] Response with status 500


#### updateEmailProviderById

- ##### What's New
	- [Added] Response with status 404
	- [Added] Response with status 500


#### getEmailTemplates

- ##### What's New
	- [Breaking] [Added] Type `string` to property `items[].static_to[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].static_cc[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].static_bcc[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].tags[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `items[].priority` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `items[].headers[]` of schema `EmailTemplateHeaders` in response with status code 200
	- [Breaking] [Added] properties `items[].headers[].key`, `items[].headers[].value` in response with status code 200
	- [Breaking] [Added] Type `integer` to property `items[].attachments[]` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].application` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].editor_type` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].editor_meta` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].reply_to` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `items[].template_variables` of schema `EmailTemplate` in response with status code 200
	- [Added] property `items[].category` of schema `EmailTemplate` in response with status code 200
	- [Added] Response with status 500


#### createEmailTemplate

- ##### What's New
	- [Breaking] [Added] Type `integer` to property `attachments[]` of schema `EmailTemplateReq` in request body
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `EmailTemplateReq` in request body
	- [Added] property `from_name` of schema `EmailTemplateReq` in request body
	- [Added] property `tags` of schema `EmailTemplateReq` in request body
	- [Added] property `template_variables` of schema `EmailTemplateReq` in request body
	- [Added] property `published` of schema `EmailTemplateReq` in request body
	- [Added] property `editor_type` of schema `EmailTemplateReq` in request body
	- [Added] property `editor_meta` of schema `EmailTemplateReq` in request body
	- [Breaking] [Added] Required status to property `name` in request body
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `integer` to property `attachments[]` of schema `EmailTemplate` in response with status code 200
	- [Added] property `application` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_type` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_meta` of schema `EmailTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `template_variables` of schema `EmailTemplate` in response with status code 200
	- [Added] property `category` of schema `EmailTemplate` in response with status code 200
	- [Added] property `from_name` of schema `EmailTemplate` in response with status code 200
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `keys` of schema `EmailTemplateKeys` in response with status code 200


#### getSystemEmailTemplates

- ##### What's New
	- [Breaking] [Added] Type `string` to property `items[].static_to[]` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].static_cc[]` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].static_bcc[]` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].tags[]` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `items[].priority` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `items[].headers[]` of schema `EmailTemplateHeaders` in response with status code 200
	- [Breaking] [Added] properties `items[].headers[].key`, `items[].headers[].value` in response with status code 200
	- [Breaking] [Added] Type `integer` to property `items[].attachments[]` of schema `SystemEmailTemplate` in response with status code 200
	- [Added] property `items[].url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `items[].template_variables` of schema `SystemEmailTemplate` in response with status code 200
	- [Added] property `items[].category` of schema `SystemEmailTemplate` in response with status code 200
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `sort` (type: `object`)

	- [Breaking] [Deleted] property `items[].from_name` of schema `SystemEmailTemplate` in response with status code 200
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200


#### getEmailTemplateById

- ##### What's New
	- [Breaking] [Added] Type `string` to property `static_to[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `static_cc[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `static_bcc[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `headers[]` of schema `EmailTemplateHeaders` in response with status code 200
	- [Breaking] [Added] properties `headers[].key`, `headers[].value` in response with status code 200
	- [Breaking] [Added] Type `integer` to property `attachments[]` of schema `EmailTemplate` in response with status code 200
	- [Added] property `application` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_type` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_meta` of schema `EmailTemplate` in response with status code 200
	- [Added] property `reply_to` of schema `EmailTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `template_variables` of schema `EmailTemplate` in response with status code 200
	- [Added] property `category` of schema `EmailTemplate` in response with status code 200
	- [Added] Response with status 400
	- [Added] Response with status 404
	- [Added] Response with status 500


#### updateEmailTemplateById

- ##### What's New
	- [Breaking] [Added] Type `integer` to property `attachments[]` of schema `EmailTemplateReq` in request body
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `EmailTemplateReq` in request body
	- [Added] property `from_name` of schema `EmailTemplateReq` in request body
	- [Added] property `tags` of schema `EmailTemplateReq` in request body
	- [Added] property `template_variables` of schema `EmailTemplateReq` in request body
	- [Added] property `published` of schema `EmailTemplateReq` in request body
	- [Added] property `editor_type` of schema `EmailTemplateReq` in request body
	- [Added] property `editor_meta` of schema `EmailTemplateReq` in request body
	- [Breaking] [Added] Required status to property `name` in request body
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `EmailTemplate` in response with status code 200
	- [Breaking] [Added] Type `integer` to property `attachments[]` of schema `EmailTemplate` in response with status code 200
	- [Added] property `application` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_type` of schema `EmailTemplate` in response with status code 200
	- [Added] property `editor_meta` of schema `EmailTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `template_variables` of schema `EmailTemplate` in response with status code 200
	- [Added] property `category` of schema `EmailTemplate` in response with status code 200
	- [Added] property `from_name` of schema `EmailTemplate` in response with status code 200
	- [Added] Response with status 400
	- [Added] Response with status 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `keys` of schema `EmailTemplateKeys` in response with status code 200


#### deleteEmailTemplateById

- ##### What's New
	- [Added] property `acknowledged` of schema `GenericDelete` in response with status code 200
	- [Added] property `affected` of schema `GenericDelete` in response with status code 200
	- [Added] property `operation` of schema `GenericDelete` in response with status code 200
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 400
	- [Added] property `sentry` of schema `GenericError` in response with status code 400
	- [Added] Response with status 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `success` of schema `EmailTemplateDeleteSuccessRes` in response with status code 200
	- [Breaking] [Deleted] property `success` of schema `EmailTemplateDeleteFailureRes` in response with status code 400

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `EmailTemplateDeleteFailureRes` in response with status code 400


#### getCommunicationLogs

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items[].source` of schema `Log` in response with status code 200
	- [Breaking] [Deleted] property `items[].channel_type` of schema `Log` in response with status code 200


#### sendOtp

- ##### What's Deprecated
	- [Breaking] [Deleted] property `email.provider` of schema `SendOtpEmailCommsProvider` in request body


#### getSmsProviders

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items` of schema `SmsProviders` in response with status code 200
	- [Breaking] [Deleted] property `page` of schema `Page` in response with status code 200


#### createSmsProvider

- ##### What's New
	- [Added] property `password` of schema `SmsProviderReq` in request body
	- [Added] property `senderid` of schema `SmsProviderReq` in request body
	- [Added] property `feedid` of schema `SmsProviderReq` in request body
	- [Added] property `entityid` of schema `SmsProviderReq` in request body
	- [Added] property `override_dnd` of schema `SmsProviderReq` in request body
	- [Added] property `host` of schema `SmsProviderReq` in request body
	- [Added] property `port` of schema `SmsProviderReq` in request body
	- [Added] property `entity_id` of schema `SmsProviderReq` in request body
	- [Added] property `apikey` of schema `SmsProviderReq` in request body
	- [Added] property `version_id` of schema `SmsProviderReq` in request body
	- [Added] property `sender_id` of schema `SmsProviderReq` in request body
	- [Added] property `api_key` of schema `SmsProviderReq` in request body
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `rpt` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `type` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `provider` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `name` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `description` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `sender` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `username` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `authkey` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `application` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `slug` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `SmsProvider` in response with status code 200


#### getSmsProviderById

- ##### What's New
	- [Added] Response with status 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `rpt` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `type` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `provider` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `name` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `description` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `sender` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `username` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `authkey` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `application` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `slug` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `SmsProvider` in response with status code 200


#### updateSmsProviderById

- ##### What's New
	- [Added] property `password` of schema `SmsProviderReq` in request body
	- [Added] property `senderid` of schema `SmsProviderReq` in request body
	- [Added] property `feedid` of schema `SmsProviderReq` in request body
	- [Added] property `entityid` of schema `SmsProviderReq` in request body
	- [Added] property `override_dnd` of schema `SmsProviderReq` in request body
	- [Added] property `host` of schema `SmsProviderReq` in request body
	- [Added] property `port` of schema `SmsProviderReq` in request body
	- [Added] property `entity_id` of schema `SmsProviderReq` in request body
	- [Added] property `apikey` of schema `SmsProviderReq` in request body
	- [Added] property `version_id` of schema `SmsProviderReq` in request body
	- [Added] property `sender_id` of schema `SmsProviderReq` in request body
	- [Added] property `api_key` of schema `SmsProviderReq` in request body
	- [Added] Response with status 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `rpt` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `type` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `provider` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `name` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `description` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `sender` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `username` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `authkey` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `application` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `slug` of schema `SmsProvider` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `SmsProvider` in response with status code 200


#### getSmsTemplates

- ##### What's New
	- [Breaking] [Added] Possible values `high,low` to property `items[].priority` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `items[].tags[]` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `items[].template_variables` of schema `SmsTemplate` in response with status code 200
	- [Added] property `items[].url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `items[].application` of schema `SmsTemplate` in response with status code 200
	- [Added] property `items[].meta` of schema `metaObj` in response with status code 200
	- [Added] property `items[].template_id` of schema `SmsTemplate` in response with status code 200
	- [Added] property `items[].category` of schema `SmsTemplate` in response with status code 200
	- [Added] Response with status 500


#### createSmsTemplate

- ##### What's New
	- [Breaking] [Added] Type `object` to property `template_variables` of schema `SmsTemplateReq` in request body
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `SmsTemplateReq` in request body
	- [Added] property `template_id` of schema `SmsTemplateReq` in request body
	- [Added] property `meta` of schema `metaObj` in request body
	- [Added] property `published` of schema `SmsTemplateReq` in request body
	- [Breaking] [Added] Required status to property `name` in request body
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `template_variables` of schema `SmsTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `application` of schema `SmsTemplate` in response with status code 200
	- [Added] property `meta` of schema `metaObj` in response with status code 200
	- [Added] property `template_id` of schema `SmsTemplate` in response with status code 200
	- [Added] property `category` of schema `SmsTemplate` in response with status code 200
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `attachments` of schema `SmsTemplateReq` in request body


#### getSmsTemplateById

- ##### What's New
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `template_variables` of schema `SmsTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `application` of schema `SmsTemplate` in response with status code 200
	- [Added] property `meta` of schema `metaObj` in response with status code 200
	- [Added] property `template_id` of schema `SmsTemplate` in response with status code 200
	- [Added] property `category` of schema `SmsTemplate` in response with status code 200
	- [Added] Response with status 400
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 404
	- [Added] property `sentry` of schema `GenericError` in response with status code 404
	- [Added] Response with status 500

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `NotFound` in response with status code 404


#### updateSmsTemplateById

- ##### What's New
	- [Breaking] [Added] Type `object` to property `template_variables` of schema `SmsTemplateReq` in request body
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `SmsTemplateReq` in request body
	- [Added] property `template_id` of schema `SmsTemplateReq` in request body
	- [Added] property `meta` of schema `metaObj` in request body
	- [Added] property `published` of schema `SmsTemplateReq` in request body
	- [Breaking] [Added] Required status to property `name` in request body
	- [Breaking] [Added] Type `string` to property `tags[]` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Possible values `high,low` to property `priority` of schema `SmsTemplate` in response with status code 200
	- [Breaking] [Added] Type `object` to property `template_variables` of schema `SmsTemplate` in response with status code 200
	- [Added] property `url_shorten` of schema `EnabledObj` in response with status code 200
	- [Added] property `application` of schema `SmsTemplate` in response with status code 200
	- [Added] property `meta` of schema `metaObj` in response with status code 200
	- [Added] property `template_id` of schema `SmsTemplate` in response with status code 200
	- [Added] property `category` of schema `SmsTemplate` in response with status code 200
	- [Added] Response with status 400
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 404
	- [Added] property `sentry` of schema `GenericError` in response with status code 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `attachments` of schema `SmsTemplateReq` in request body

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `NotFound` in response with status code 404


#### deleteSmsTemplateById

- ##### What's New
	- [Added] property `acknowledged` of schema `GenericDelete` in response with status code 200
	- [Added] property `affected` of schema `GenericDelete` in response with status code 200
	- [Added] property `operation` of schema `GenericDelete` in response with status code 200
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 400
	- [Added] property `sentry` of schema `GenericError` in response with status code 400
	- [Breaking] [Added] properties `message.message`, `message.success`, `message.info`, `message.operation` in response with status code 404
	- [Added] property `sentry` of schema `GenericError` in response with status code 404
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] property `success` of schema `SmsTemplateDeleteSuccessRes` in response with status code 200
	- [Breaking] [Deleted] property `success` of schema `SmsTemplateDeleteFailureRes` in response with status code 400

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `SmsTemplateDeleteFailureRes` in response with status code 400
	- [Breaking] [Changed] Type from `string` to `object` of property `message` of schema `NotFound` in response with status code 404


#### getSystemSystemTemplates

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `pageSize` (type: `integer`)

	- [Breaking] [Deleted] `query` parameter `sort` (type: `object`)

	- [Deleted] properties `items`, `page` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getSystemSystemTemplates` to `getSystemSmsTemplates`
	- [Breaking] [Changed] Type from `object` to `array` of property `` of schema `SystemSmsTemplates` in response with status code 200


#### getAppProviders

- ##### What's New
	- [Added] method `getAppProviders`



#### updateAppProviders

- ##### What's New
	- [Added] method `updateAppProviders`



#### getGlobalProviders

- ##### What's New
	- [Added] method `getGlobalProviders`



#### deleteEmailProviderById

- ##### What's New
	- [Added] method `deleteEmailProviderById`



#### getDefaultSmsProviders

- ##### What's New
	- [Added] method `getDefaultSmsProviders`



#### deleteSmsProviderById

- ##### What's New
	- [Added] method `deleteSmsProviderById`



#### getBigQueryRowCountById

- ##### What's New
	- [Added] method `getBigQueryRowCountById`



#### createBigQueryRowCount

- ##### What's New
	- [Added] method `createBigQueryRowCount`



#### getBigQueryHeadersById

- ##### What's New
	- [Added] method `getBigQueryHeadersById`



#### createBigQueryNCount

- ##### What's New
	- [Added] method `createBigQueryNCount`



#### getSystemAudiences

- ##### What's New
	- [Added] method `getSystemAudiences`



#### deleteAudienceById

- ##### What's New
	- [Added] method `deleteAudienceById`



#### getDummyDatasources

- ##### What's New
	- [Added] method `getDummyDatasources`



#### getDummyDatasourcesMeta

- ##### What's New
	- [Added] method `getDummyDatasourcesMeta`



#### getSubscribedEmailTemplates

- ##### What's New
	- [Added] method `getSubscribedEmailTemplates`



#### getSubscribedSmsTemplates

- ##### What's New
	- [Added] method `getSubscribedSmsTemplates`



#### getGlobalVariables

- ##### What's New
	- [Added] method `getGlobalVariables`



#### postGlobalVariables

- ##### What's New
	- [Added] method `postGlobalVariables`



### CompanyProfile



#### getLocations

- ##### What's New
	- [Added] property `items[].tags` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `items[].default_order_acceptance_timing` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `items[].order_acceptance_timing` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `items[].avg_order_processing_time` of schema `AverageOrderProcessingTime` in response with status code 200
	- [Added] property `items[].bulk_shipment` of schema `GetLocationSerializer` in response with status code 200


#### createLocation

- ##### What's New
	- [Added] property `tags` of schema `LocationSerializer` in request body
	- [Added] property `default_order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `avg_order_processing_time` of schema `AverageOrderProcessingTime` in request body
	- [Added] property `bulk_shipment` of schema `LocationSerializer` in request body


#### getLocationDetail

- ##### What's New
	- [Added] property `tags` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `default_order_acceptance_timing` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `order_acceptance_timing` of schema `GetLocationSerializer` in response with status code 200
	- [Added] property `avg_order_processing_time` of schema `AverageOrderProcessingTime` in response with status code 200
	- [Added] property `bulk_shipment` of schema `GetLocationSerializer` in response with status code 200


#### updateLocation

- ##### What's New
	- [Added] property `tags` of schema `LocationSerializer` in request body
	- [Added] property `default_order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `avg_order_processing_time` of schema `AverageOrderProcessingTime` in request body
	- [Added] property `bulk_shipment` of schema `LocationSerializer` in request body


#### createLocationBulk

- ##### What's New
	- [Added] property `data[].tags` of schema `LocationSerializer` in request body
	- [Added] property `data[].default_order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `data[].order_acceptance_timing` of schema `LocationSerializer` in request body
	- [Added] property `data[].avg_order_processing_time` of schema `AverageOrderProcessingTime` in request body
	- [Added] property `data[].bulk_shipment` of schema `LocationSerializer` in request body


#### getLocationTags

- ##### What's New
	- [Added] method `getLocationTags`



### Configuration



#### getInventoryConfig

- ##### What's New
	- [Added] property `inventory.store.rules[]` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Added] Possible values `standard,substandard,default` to property `inventory.image[]` of schema `AppInventoryConfig` in response with status code 200
	- [Added] property `cart.delivery_charges.charges[]` of schema `Charges` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `inventory.store.rules.companies`, `inventory.store.rules.brands` in response with status code 200
	- [Deleted] Possible values from `standard,substandard,default` from property `inventory.image` of schema `AppInventoryConfig` in response with status code 200
	- [Deleted] properties `cart.delivery_charges.charges.threshold`, `cart.delivery_charges.charges.charges` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `inventory.store.rules` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Changed] Type from `object` to `array` of property `cart.delivery_charges.charges` of schema `Charges` in response with status code 200


#### updateInventoryConfig

- ##### What's New
	- [Added] property `inventory.store.rules[]` of schema `AppStoreRules` in request body
	- [Breaking] [Added] Possible values `standard,substandard,default` to property `inventory.image[]` of schema `AppInventoryConfig` in request body
	- [Added] property `cart.delivery_charges.charges[]` of schema `Charges` in request body
	- [Added] property `inventory.store.rules[]` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Added] Possible values `standard,substandard,default` to property `inventory.image[]` of schema `AppInventoryConfig` in response with status code 200
	- [Added] property `cart.delivery_charges.charges[]` of schema `Charges` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `inventory.store.rules.companies`, `inventory.store.rules.brands` in request body
	- [Deleted] Possible values from `standard,substandard,default` from property `inventory.image` of schema `AppInventoryConfig` in request body
	- [Deleted] properties `cart.delivery_charges.charges.threshold`, `cart.delivery_charges.charges.charges` in request body
	- [Deleted] properties `inventory.store.rules.companies`, `inventory.store.rules.brands` in response with status code 200
	- [Deleted] Possible values from `standard,substandard,default` from property `inventory.image` of schema `AppInventoryConfig` in response with status code 200
	- [Deleted] properties `cart.delivery_charges.charges.threshold`, `cart.delivery_charges.charges.charges` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `inventory.store.rules` of schema `AppStoreRules` in request body
	- [Breaking] [Changed] Type from `object` to `array` of property `cart.delivery_charges.charges` of schema `Charges` in request body
	- [Breaking] [Changed] Type from `object` to `array` of property `inventory.store.rules` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Changed] Type from `object` to `array` of property `cart.delivery_charges.charges` of schema `Charges` in response with status code 200


#### partiallyUpdateInventoryConfig

- ##### What's New
	- [Added] property `cart.delivery_charges.charges[]` of schema `Charges` in request body
	- [Added] property `inventory.store.rules[]` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Added] Possible values `standard,substandard,default` to property `inventory.image[]` of schema `AppInventoryConfig` in response with status code 200
	- [Added] property `cart.delivery_charges.charges[]` of schema `Charges` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `cart.delivery_charges.charges.threshold`, `cart.delivery_charges.charges.charges` in request body
	- [Deleted] properties `inventory.store.rules.companies`, `inventory.store.rules.brands` in response with status code 200
	- [Deleted] Possible values from `standard,substandard,default` from property `inventory.image` of schema `AppInventoryConfig` in response with status code 200
	- [Deleted] properties `cart.delivery_charges.charges.threshold`, `cart.delivery_charges.charges.charges` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `cart.delivery_charges.charges` of schema `Charges` in request body
	- [Breaking] [Changed] Type from `object` to `array` of property `inventory.store.rules` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Changed] Type from `object` to `array` of property `cart.delivery_charges.charges` of schema `Charges` in response with status code 200


#### createApplication

- ##### What's New
	- [Added] property `configuration.inventory.store.rules[]` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Added] Possible values `standard,substandard,default` to property `configuration.inventory.image[]` of schema `AppInventoryConfig` in response with status code 200
	- [Added] property `configuration.cart.delivery_charges.charges[]` of schema `Charges` in response with status code 200

- ##### What's Deprecated
	- [Deleted] properties `configuration.inventory.store.rules.companies`, `configuration.inventory.store.rules.brands` in response with status code 200
	- [Deleted] Possible values from `standard,substandard,default` from property `configuration.inventory.image` of schema `AppInventoryConfig` in response with status code 200
	- [Deleted] properties `configuration.cart.delivery_charges.charges.threshold`, `configuration.cart.delivery_charges.charges.charges` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `array` of property `configuration.inventory.store.rules` of schema `AppStoreRules` in response with status code 200
	- [Breaking] [Changed] Type from `object` to `array` of property `configuration.cart.delivery_charges.charges` of schema `Charges` in response with status code 200


#### getOtherSellerApplications

- ##### What's Changed
	- [Changed] Path From `/service/platform/configuration/v1.0/company/{company_id}/other-seller-applications/` To `/service/platform/configuration/v1.0/company/{company_id}/other-seller-applications`


#### getOrderingStoreConfig

- ##### What's New
	- [Added] method `getOrderingStoreConfig`



### Content



#### getAnnouncementsList

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `items[]._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### createAnnouncement

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in request body
	- [Deleted] Type from `object` from property `data._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getAnnouncementById

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### updateAnnouncement

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in request body
	- [Deleted] Type from `object` from property `data._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### updateAnnouncementSchedule

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `next_schedule[]` of schema `NextSchedule` in request body
	- [Deleted] Type from `object` from property `data._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### deleteAnnouncement

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `data._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### resetDataLoader

- ##### What's Changed
	- [Breaking] [Changed] Type from `string` to `boolean` of property `reset` of schema `DataLoaderResetResponseSchema` in response with status code 200


#### getPageMeta

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `custom_pages[]._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getPageSpec

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `specifications[]` of schema `PageSpecItem` in response with status code 200


#### createPagePreview

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### updatePagePreview

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### deletePage

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getSEOConfiguration

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `seo.custom_meta_tags[]` of schema `CustomMetaTag` in response with status code 200


#### updateSEOConfiguration

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `seo.custom_meta_tags[]` of schema `CustomMetaTag` in request body
	- [Deleted] Type from `object` from property `custom_meta_tags[]` of schema `CustomMetaTag` in response with status code 200


#### createPage

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getPages

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `items[]._schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### updatePage

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in request body
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


#### getPageBySlug

- ##### What's Deprecated
	- [Deleted] Type from `object` from property `_schedule.next_schedule[]` of schema `NextSchedule` in response with status code 200


### Discount



#### getDiscounts

- ##### What's New
	- [Added] property `items[].discount_meta` of schema `DiscountMeta` in response with status code 200


#### createDiscount

- ##### What's New
	- [Added] property `discount_meta` of schema `DiscountMeta` in request body
	- [Added] property `discount_meta` of schema `DiscountMeta` in response with status code 200


#### getDiscount

- ##### What's New
	- [Added] property `discount_meta` of schema `DiscountMeta` in response with status code 200


#### updateDiscount

- ##### What's New
	- [Added] property `discount_meta` of schema `DiscountMeta` in request body
	- [Added] property `discount_meta` of schema `DiscountMeta` in response with status code 200


#### upsertDiscountItems

- ##### What's New
	- [Added] property `items[].discount_meta` of schema `DiscountMeta` in request body


#### validateDiscountFile

- ##### What's New
	- [Breaking] [Added] Required status to property `_id` in response with status code 200
	- [Added] property `_id` of schema `FileJobResponse` in response with status code 200


#### downloadDiscountFile

- ##### What's New
	- [Breaking] [Added] Required status to property `_id` in response with status code 200
	- [Added] property `_id` of schema `FileJobResponse` in response with status code 200


#### getValidationJob

- ##### What's New
	- [Breaking] [Added] Required status to property `_id` in response with status code 200
	- [Added] property `_id` of schema `FileJobResponse` in response with status code 200


#### getDownloadJob

- ##### What's New
	- [Breaking] [Added] Required status to property `_id` in response with status code 200
	- [Added] property `_id` of schema `FileJobResponse` in response with status code 200


### FileStorage



#### startUpload

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/upload/start/` To `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/upload/start`


#### completeUpload

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/upload/complete/` To `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/upload/complete`


#### appStartUpload

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/start/` To `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/start`


#### appCompleteUpload

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/complete/` To `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/upload/complete`


#### getSignUrls

- ##### What's New
	- [Added] Response with status 500

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 400

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/sign-urls/` To `/service/platform/assets/v1.0/company/{company_id}/sign-urls`


#### copyFiles

- ##### What's New
	- [Added] property `status` of schema `Status` in response with status code 200
	- [Added] property `files` of schema `BulkUploadSyncMode` in response with status code 200
	- [Added] property `status` of schema `Status` in response with status code 400

- ##### What's Deprecated
	- [Deleted] Required status from properties `destination.namespace`, `destination.rewrite` in request body
	- [Breaking] [Deleted] property `destination.rewrite` of schema `Destination` in request body
	- [Breaking] [Deleted] property `destination.basepath` of schema `Destination` in request body
	- [Breaking] [Deleted] property `configuration` of schema `ReqConfiguration` in request body
	- [Deleted] Required status from property `task` in response with status code 200
	- [Breaking] [Deleted] property `tracking_url` of schema `BulkUploadResponse` in response with status code 200
	- [Breaking] [Deleted] property `task` of schema `CopyFileTask` in response with status code 200
	- [Breaking] [Deleted] property `message` of schema `FailedResponse` in response with status code 400

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `tracking_url` in response with status code 200
	- [Breaking] [Changed] Required status of property `message` in response with status code 400
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/uploads/copy/` To `/service/platform/assets/v1.0/company/{company_id}/uploads/copy`


#### appCopyFiles

- ##### What's New
	- [Added] property `status` of schema `Status` in response with status code 200
	- [Added] property `files` of schema `BulkUploadSyncMode` in response with status code 200
	- [Added] property `status` of schema `Status` in response with status code 400

- ##### What's Deprecated
	- [Deleted] Required status from properties `destination.namespace`, `destination.rewrite` in request body
	- [Breaking] [Deleted] property `destination.rewrite` of schema `Destination` in request body
	- [Breaking] [Deleted] property `destination.basepath` of schema `Destination` in request body
	- [Breaking] [Deleted] property `configuration` of schema `ReqConfiguration` in request body
	- [Deleted] Required status from property `task` in response with status code 200
	- [Breaking] [Deleted] property `tracking_url` of schema `BulkUploadResponse` in response with status code 200
	- [Breaking] [Deleted] property `task` of schema `CopyFileTask` in response with status code 200
	- [Breaking] [Deleted] property `message` of schema `FailedResponse` in response with status code 400

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `tracking_url` in response with status code 200
	- [Breaking] [Changed] Required status of property `message` in response with status code 400
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/uploads/copy/` To `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/uploads/copy`


#### browse

- ##### What's New
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

- [Added] `query` parameter `page` (type: `integer`)
	- [Added] `query` parameter `limit` (type: `integer`)


- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `string` of property `page.type` of schema `Page` in response with status code 200
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/browse/` To `/service/platform/assets/v1.0/company/{company_id}/namespaces/{namespace}/browse`


#### appbrowse

- ##### What's New
	- [Breaking] [Deleted] `query` parameter `pageNo` (type: `integer`)

- [Added] `query` parameter `page` (type: `integer`)
	- [Added] `query` parameter `limit` (type: `integer`)


- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `string` of property `page.type` of schema `Page` in response with status code 200
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/browse/` To `/service/platform/assets/v1.0/company/{company_id}/application/{application_id}/namespaces/{namespace}/browse`


#### proxy

- ##### What's Changed
	- [Changed] Path From `/service/platform/assets/v1.0/company/{company_id}/proxy/` To `/service/platform/assets/v1.0/company/{company_id}/proxy`


#### getPdfTypes

- ##### What's New
	- [Added] method `getPdfTypes`



#### getDefaultPdfData

- ##### What's New
	- [Added] method `getDefaultPdfData`



#### getDefaultHtmlTemplate

- ##### What's New
	- [Added] method `getDefaultHtmlTemplate`



#### saveHtmlTemplate

- ##### What's New
	- [Added] method `saveHtmlTemplate`



#### previewTemplate

- ##### What's New
	- [Added] method `previewTemplate`



#### getDefaultPdfTemplate

- ##### What's New
	- [Added] method `getDefaultPdfTemplate`



### Finance



#### getData

- ##### What's Deprecated
	- [Deleted] properties `data.filters.config_field` in request body


#### getReason

- ##### What's New
	- [Added] property `item_list` of schema `GetReasonResponse` in response with status code 200
	- [Added] property `item_count` of schema `GetReasonResponse` in response with status code 200
	- [Added] property `page` of schema `Page` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `data` of schema `GetDocs` in response with status code 200


#### getReportList

- ##### What's New
	- [Breaking] [Added] Required status to Request body content
	- [Breaking] [Added] properties `items[].id`, `items[].name`, `items[].description`, `items[].allowed_filters`, `items[].config_meta`, `items[].report_type`, `items[].display_date` in response with status code 200
	- [Added] property `total_count` of schema `GetReportListResponse` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `item_count` of schema `GetEngineResponse` in response with status code 200


#### isCnRefundMethod

- ##### What's New
	- [Added] method `isCnRefundMethod`



#### createSellerCreditNoteConfig

- ##### What's New
	- [Added] method `createSellerCreditNoteConfig`



#### deleteConfig

- ##### What's New
	- [Added] method `deleteConfig`



#### channelDisplayName

- ##### What's New
	- [Added] method `channelDisplayName`



#### getPdfUrlView

- ##### What's New
	- [Added] method `getPdfUrlView`



#### creditNoteDetails

- ##### What's New
	- [Added] method `creditNoteDetails`



#### getCustomerCreditBalance

- ##### What's New
	- [Added] method `getCustomerCreditBalance`



#### getCnConfig

- ##### What's New
	- [Added] method `getCnConfig`



#### generateReportCustomerCn

- ##### What's New
	- [Added] method `generateReportCustomerCn`



#### downloadReportCustomerCn

- ##### What's New
	- [Added] method `downloadReportCustomerCn`



#### getReportingFilters

- ##### What's New
	- [Added] method `getReportingFilters`



### Lead



#### createTicket

- ##### What's New
	- [Added] method `createTicket`



#### getPlatformTicket

- ##### What's New
	- [Added] method `getPlatformTicket`



#### editPlatformTicket

- ##### What's New
	- [Added] method `editPlatformTicket`



#### createPlatformTicketHistory

- ##### What's New
	- [Added] method `createPlatformTicketHistory`



#### getPlatformTicketHistory

- ##### What's New
	- [Added] method `getPlatformTicketHistory`



#### getTokenForPlatformVideoRoom

- ##### What's New
	- [Added] method `getTokenForPlatformVideoRoom`



#### getPlatformVideoParticipants

- ##### What's New
	- [Added] method `getPlatformVideoParticipants`



### Order



#### createOrder

- ##### What's New
	- [Added] property `shipments[].line_items[].custom_message` of schema `LineItem` in request body
	- [Added] property `tax_info.pan_no` of schema `TaxInfo` in request body

- ##### What's Deprecated
	- [Breaking] [Deleted] property `shipments[].line_items[].custom_messasge` of schema `LineItem` in request body


#### getShipments

- ##### What's New
	- [Added] `query` parameter `sortType` (type: `string`)

	- [Added] `query` parameter `showCrossCompanyData` (type: `boolean`)

	- [Added] `query` parameter `customerId` (type: `string`)



#### getLaneConfig

- ##### What's New
	- [Added] `query` parameter `showCrossCompanyData` (type: `boolean`)



#### getOrders

- ##### What's New
	- [Added] `query` parameter `showCrossCompanyData` (type: `boolean`)

	- [Added] `query` parameter `customerId` (type: `string`)



#### getAllowedStateTransition

- ##### What's New
	- [Added] method `getAllowedStateTransition`



#### downloadLanesReport

- ##### What's New
	- [Added] method `downloadLanesReport`



#### eInvoiceRetry

- ##### What's New
	- [Added] method `eInvoiceRetry`



#### trackShipment

- ##### What's New
	- [Added] method `trackShipment`



#### updateShipmentTracking

- ##### What's New
	- [Added] method `updateShipmentTracking`



### Partner



#### subscribeExtension

- ##### What's Deprecated
	- [Breaking] [Deleted] method `subscribeExtension`



#### getExtensionsForCompany

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getExtensionsForCompany`



#### getPublicExtension

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getPublicExtension`



#### getExtensionById

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getExtensionById`



#### deleteExtensionById

- ##### What's Deprecated
	- [Breaking] [Deleted] method `deleteExtensionById`



#### getPrivateExtensions

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getPrivateExtensions`



#### getExtensionsSuggestions

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getExtensionsSuggestions`



#### getPartnerInvites

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getPartnerInvites`



#### getPartnerRequestDetails

- ##### What's Deprecated
	- [Breaking] [Deleted] method `getPartnerRequestDetails`



#### modifyPartnerRequest

- ##### What's Deprecated
	- [Breaking] [Deleted] method `modifyPartnerRequest`



#### setupProducts

- ##### What's Deprecated
	- [Breaking] [Deleted] method `setupProducts`



#### addProxyPath

- ##### What's Deprecated
	- [Breaking] [Deleted] method `addProxyPath`



#### getProxyPath

- ##### What's New
	- [Added] Response with status 400
	- [Added] Body content in Request

- ##### What's Deprecated
	- [Breaking] [Deleted] property `page` of schema `Pagination` in response with status code 200
	- [Breaking] [Deleted] property `items` of schema `getProxyPathRes` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProxyPath` to `addProxyPath`
	- [Changed] http method type from `get` To `post`


#### removeProxyPath

- ##### What's Deprecated
	- [Breaking] [Deleted] method `removeProxyPath`



#### getProxyPathAttachedPath

- ##### What's New
	- [Added] Response with status 201
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] Response with status 200

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getProxyPathAttachedPath` to `removeProxyPath`
	- [Changed] http method type from `get` To `delete`


### Payment



#### getPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### createPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### pollingPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### resendPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### cancelPaymentLink

- ##### What's New
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 400
	- [Breaking] [Added] Type `object` to property `error` of schema `ErrorResponse` in response with status code 500


#### updatePaymentSession

- ##### What's New
	- [Added] method `updatePaymentSession`



#### updateRefundSession

- ##### What's New
	- [Added] method `updateRefundSession`



#### getMerchantPaymentOption

- ##### What's New
	- [Added] method `getMerchantPaymentOption`



#### patchMerchantPaymentOption

- ##### What's New
	- [Added] method `patchMerchantPaymentOption`



#### getMerchantAggregatorPaymentModeDetails

- ##### What's New
	- [Added] method `getMerchantAggregatorPaymentModeDetails`



#### patchMerchantAggregatorPaymentModeDetails

- ##### What's New
	- [Added] method `patchMerchantAggregatorPaymentModeDetails`



#### getPGConfigAggregators

- ##### What's New
	- [Added] method `getPGConfigAggregators`



### Serviceability



#### patchApplicationServiceabilitySelfShipment

- ##### What's Changed
	- [Breaking] [Changed] operationId from `patchApplicationServiceabilitySelfShipment` to `updateSelfShip`


#### getApplicationServiceabilitySelfShipment

- ##### What's Changed
	- [Breaking] [Changed] operationId from `getApplicationServiceabilitySelfShipment` to `getSelfShip`


#### updateApplicationServiceability

- ##### What's New
	- [Added] method `updateApplicationServiceability`



### Share



#### getShortLinkClickStats

- ##### What's New
	- [Breaking] [Added] Required status to property `click_stats[].total` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Required status of property `click_stats[].display - total` in response with status code 200


### Theme



#### getThemeLibrary
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items` of schema `ThemesListingResponseSchema` in response with status code 200
	- [Breaking] [Deleted] property `page` of schema `PaginationSchema` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### addToThemeLibrary
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in response with status code 200
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `config` of schema `Config` in response with status code 200
	- [Breaking] [Deleted] property `font` of schema `Font` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### applyTheme

- ##### What's New
	- [Breaking] [Added] Required `path` parameter `themeId` (type: `string`)

	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] Body content in Request
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/apply` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/apply`
	- [Changed] http method type from `post` To `patch`


#### isUpgradable

- ##### What's New
	- [Added] property `versions` of schema `ThemeVersions` in response with status code 200
	- [Added] property `message` of schema `ThemeUpgradableResponse` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `parent_theme` of schema `UpgradableThemeSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied_theme` of schema `UpgradableThemeSchema` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/upgradable` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/upgradable`


#### upgradeTheme

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/upgrade` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/upgrade`


#### getPublicThemes
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `items` of schema `ThemesListingResponseSchema` in response with status code 200
	- [Breaking] [Deleted] property `page` of schema `PaginationSchema` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### createTheme

- ##### What's Deprecated
	- [Breaking] [Deleted] method `createTheme`



#### getAppliedTheme

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}`


#### getThemeById

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`


#### updateTheme

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in request body
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in request body
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in request body
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in request body
	- [Breaking] [Added] properties  in request body
	- [Added] property `config.list[].custom` of schema `CustomConfig` in request body
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in request body
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in request body
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in request body
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in request body
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in request body
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in request body
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in request body
	- [Breaking] [Added] Required status to Request body content
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `information` of schema `Information` in request body
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `src` of schema `Src` in request body
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in request body
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in request body
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in request body
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in request body
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in request body
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in request body
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in request body
	- [Breaking] [Deleted] property `colors` of schema `Colors` in request body
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in request body
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`


#### deleteTheme

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}`


#### getThemeForPreview

- ##### What's New
	- [Breaking] [Added] properties `config.preset.pages[].sections[].props.title`, `config.preset.pages[].sections[].props.item_margin`, `config.preset.pages[].sections[].props.autoplay`, `config.preset.pages[].sections[].props.slide_interval` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].blocks[].type`, `config.preset.pages[].sections[].blocks[].name`, `config.preset.pages[].sections[].blocks[].props` in response with status code 200
	- [Breaking] [Added] properties `config.preset.pages[].sections[].preset.blocks` in response with status code 200
	- [Added] property `config.global_schema.props[].info` of schema `Prop` in response with status code 200
	- [Breaking] [Added] properties  in response with status code 200
	- [Added] property `config.list[].custom` of schema `CustomConfig` in response with status code 200
	- [Breaking] [Added] Required status to properties `config.current`, `config.list` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.medium.name`, `font.variants.medium.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.semi_bold.name`, `font.variants.semi_bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.bold.name`, `font.variants.bold.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.light.name`, `font.variants.light.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants.regular.name`, `font.variants.regular.file` in response with status code 200
	- [Breaking] [Added] Required status to properties `font.variants`, `font.family` in response with status code 200
	- [Added] property `is_private` of schema `ThemesSchema` in response with status code 200
	- [Added] property `application_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `marketplace_theme_id` of schema `ThemesSchema` in response with status code 200
	- [Added] property `meta` of schema `Meta` in response with status code 200
	- [Added] property `name` of schema `ThemesSchema` in response with status code 200
	- [Added] property `template_theme_id` of schema `ThemesSchema` in response with status code 200

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets.umd_js.link` of schema `UmdJs` in response with status code 200
	- [Breaking] [Deleted] property `assets.css.link` of schema `Css` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].blocks[]` of schema `Blocks` in response with status code 200
	- [Deleted] properties `available_sections[].blocks[].type`, `available_sections[].blocks[].name`, `available_sections[].blocks[].props` in response with status code 200
	- [Deleted] Type from `object` from property `available_sections[].props[]` of schema `BlocksProps` in response with status code 200
	- [Deleted] properties `available_sections[].props[].id`, `available_sections[].props[].label`, `available_sections[].props[].type` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].text` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].path` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].type` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].label` of schema `AvailablePageSchemaSections` in response with status code 200
	- [Deleted] Possible values from `none,exact,query` from property `config.preset.pages[].sections[].predicate.route.selected` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections[].predicate.route.query` of schema `AvailablePageRoutePredicate` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].sections_meta` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].theme` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].seo` of schema `AvailablePageSeo` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[].props` of schema `AvailablePageSchema` in response with status code 200
	- [Breaking] [Deleted] property `config.preset.pages[]._id` of schema `AvailablePageSchema` in response with status code 200
	- [Deleted] properties `config.list[].page[].settings`, `config.list[].page[].page` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX

- ##### What's Changed
	- [Breaking] [Changed] Type from `object` to `string` of property `config.list[].page[]` of schema `ConfigPage` in response with status code 200
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/preview` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/preview`


#### publishTheme
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in response with status code 200
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `config` of schema `Config` in response with status code 200
	- [Breaking] [Deleted] property `font` of schema `Font` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### unpublishTheme
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in response with status code 200
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `config` of schema `Config` in response with status code 200
	- [Breaking] [Deleted] property `font` of schema `Font` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### archiveTheme
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in response with status code 200
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `config` of schema `Config` in response with status code 200
	- [Breaking] [Deleted] property `font` of schema `Font` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### unarchiveTheme
- [Note] This method is deprecated and it will be removed in future versions.

- ##### What's New
	- [Added] property `message` of schema `DummyResponse` in response with status code 200
	- [Added] Response with status 404

- ##### What's Deprecated
	- [Breaking] [Deleted] property `application` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `applied` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `customized` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `published` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `archived` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `created_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `updated_at` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme_version` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `parent_theme` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `information` of schema `Information` in response with status code 200
	- [Breaking] [Deleted] property `tags` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `src` of schema `Src` in response with status code 200
	- [Breaking] [Deleted] property `assets` of schema `AssetsSchema` in response with status code 200
	- [Breaking] [Deleted] property `available_sections` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `styles` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `config` of schema `Config` in response with status code 200
	- [Breaking] [Deleted] property `font` of schema `Font` in response with status code 200
	- [Breaking] [Deleted] property `_id` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `__v` of schema `ThemesSchema` in response with status code 200
	- [Breaking] [Deleted] property `colors` of schema `Colors` in response with status code 200
	- [Breaking] [Deleted] Response with status 4XX
	- [Breaking] [Deleted] Response with status 5XX


#### getThemeLastModified

- ##### What's Changed
	- [Changed] Path From `/service/platform/theme/v1.0/company/{company_id}/application/{application_id}/{theme_id}/polling` To `/service/platform/theme/v2.0/company/{company_id}/application/{application_id}/{theme_id}/polling`


#### getCompanyLevelThemes

- ##### What's New
	- [Added] method `getCompanyLevelThemes`



#### addMarketplaceThemeToCompany

- ##### What's New
	- [Added] method `addMarketplaceThemeToCompany`



#### deleteCompanyTheme

- ##### What's New
	- [Added] method `deleteCompanyTheme`



#### getApplicationThemes

- ##### What's New
	- [Added] method `getApplicationThemes`



#### getApplicationThemesCount

- ##### What's New
	- [Added] method `getApplicationThemesCount`



#### addThemeToApplication

- ##### What's New
	- [Added] method `addThemeToApplication`



#### updateThemeName

- ##### What's New
	- [Added] method `updateThemeName`



#### duplicateTheme

- ##### What's New
	- [Added] method `duplicateTheme`



### User



#### searchUsers

- ##### What's New
	- [Added] `query` parameter `query` (type: `array`)



### Webhook



#### getSubscribersByCompany

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200


#### registerSubscriberToEvent

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200


#### updateSubscriberConfig

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in request body
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200


#### getSubscribersByExtensionId

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property `items[].association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `items[].association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `items[].association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `items[].status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `items[].status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `items[].status` of schema `SubscriberStatus` in response with status code 200
	- [Deleted] Required status from property `page.type` in response with status code 200
	- [Deleted] Value format from `int32` from property `page.item_total` of schema `Page` in response with status code 200
	- [Breaking] [Deleted] property `page.next_id` of schema `Page` in response with status code 200
	- [Deleted] Value format from `int32` from property `page.current` of schema `Page` in response with status code 200
	- [Deleted] Value format from `int32` from property `page.size` of schema `Page` in response with status code 200

- ##### What's Changed
	- [Breaking] [Changed] Type from `integer` to `number` of property `page.item_total` of schema `Page` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `number` of property `page.current` of schema `Page` in response with status code 200
	- [Breaking] [Changed] Type from `integer` to `number` of property `page.size` of schema `Page` in response with status code 200


#### getSubscriberById

- ##### What's Deprecated
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `association.criteria` of schema `Association` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200
	- [Breaking] [Deleted] Possible values from property `status` of schema `SubscriberStatus` in response with status code 200


#### manualRetryOfFailedEvent

- ##### What's New
	- [Added] method `manualRetryOfFailedEvent`



#### getEventCounts

- ##### What's New
	- [Added] method `getEventCounts`



#### getManualRetryStatus

- ##### What's New
	- [Added] method `getManualRetryStatus`



#### manualRetryCancel

- ##### What's New
	- [Added] method `manualRetryCancel`



#### getDeliveryReports

- ##### What's New
	- [Added] method `getDeliveryReports`



#### downloadDeliveryReport

- ##### What's New
	- [Added] method `downloadDeliveryReport`



#### pingWebhook

- ##### What's New
	- [Added] method `pingWebhook`



#### getReportFilters

- ##### What's New
	- [Added] method `getReportFilters`



#### getHistoricalReports

- ##### What's New
	- [Added] method `getHistoricalReports`



#### cancelJobByName

- ##### What's New
	- [Added] method `cancelJobByName`



## Public Client

- [Added] Partner class in public client
