const Joi = require("joi");

class PosCartModel {
  static UpdateCartShipmentItem() {
    return Joi.object({
      shipment_type: Joi.string().allow("").required(),

      quantity: Joi.number(),

      article_uid: Joi.string().allow("").required(),
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
      key: Joi.string().allow("").required(),

      values: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static CartPosCheckoutDetailRequest() {
    return Joi.object({
      ordering_store: Joi.number().allow(null),

      merchant_code: Joi.string().allow(""),

      address_id: Joi.string().allow(""),

      payment_identifier: Joi.string().allow("").allow(null),

      pos: Joi.boolean(),

      custom_meta: Joi.array().items(PosCartModel.CartCheckoutCustomMeta()),

      id: Joi.string().allow("").allow(null),

      billing_address: Joi.any(),

      payment_auto_confirm: Joi.boolean(),

      aggregator: Joi.string().allow(""),

      payment_params: Joi.any().allow(null),

      order_type: Joi.string().allow("").required(),

      files: Joi.array().items(PosCartModel.Files()),

      pick_at_store_uid: Joi.number().allow(null),

      callback_url: Joi.string().allow("").allow(null),

      billing_address_id: Joi.string().allow(""),

      extra_meta: Joi.any(),

      meta: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      staff: PosCartModel.StaffCheckout(),

      delivery_address: Joi.any(),
    });
  }

  static CartDeliveryModesResponse() {
    return Joi.object({
      available_modes: Joi.array().items(Joi.string().allow("")),

      pickup_stores: Joi.array().items(Joi.number()),
    });
  }

  static PickupStoreDetail() {
    return Joi.object({
      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area_code_slug: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      address: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area_code: Joi.string().allow(""),

      pincode: Joi.number(),

      area: Joi.string().allow(""),

      id: Joi.number(),

      uid: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static StoreDetailsResponse() {
    return Joi.object({
      items: Joi.array().items(PosCartModel.PickupStoreDetail()),
    });
  }
}
module.exports = PosCartModel;
