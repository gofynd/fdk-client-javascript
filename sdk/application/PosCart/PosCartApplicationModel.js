const Joi = require("joi");

class PosCartModel {
  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      article_uid: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static UpdateCartShipmentRequest() {
    return Joi.object({
      shipments: Joi.array()
        .items(PosCartModel.UpdateCartShipmentItem())
        .required(),
    });
  }

  static Files() {
    return Joi.object({
      values: Joi.array().items(Joi.string().allow("")).required(),

      key: Joi.string().allow("").required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      address_id: Joi.string().allow(""),

      files: Joi.array().items(PosCartModel.Files()),

      pos: Joi.boolean(),

      payment_mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      extra_meta: Joi.any(),

      ordering_store: Joi.number().allow(null),

      staff: PosCartModel.StaffCheckout(),

      aggregator: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      billing_address: Joi.any(),

      order_type: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow(""),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      pick_at_store_uid: Joi.number().allow(null),

      id: Joi.string().allow("").allow(null),

      payment_auto_confirm: Joi.boolean(),

      delivery_address: Joi.any(),

      payment_identifier: Joi.string().allow("").allow(null),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      pickup_stores: Joi.array().items(Joi.number()),

      available_modes: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      name: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area_code: Joi.string().allow(""),

      id: Joi.number(),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow(""),

      uid: Joi.number(),

      address_type: Joi.string().allow(""),

      address: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.PickupStoreDetail()),
    });
  }
}
module.exports = PosCartModel;
