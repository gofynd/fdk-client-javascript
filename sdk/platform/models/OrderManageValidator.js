const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrderManageValidator {
  static invalidateShipmentCache() {
    return Joi.object({
      body: Validator.InvalidateShipmentCachePayload().required(),
    }).required();
  }

  static reassignLocation() {
    return Joi.object({
      body: Validator.StoreReassign().required(),
    }).required();
  }

  static updateShipmentLock() {
    return Joi.object({
      body: Validator.UpdateShipmentLockPayload().required(),
    }).required();
  }

  static getAnnouncements() {
    return Joi.object({
      date: Joi.string().allow(""),
    }).required();
  }

  static updateAddress() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      addressType: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      addressCategory: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
    }).required();
  }

  static click2Call() {
    return Joi.object({
      caller: Joi.string().allow("").required(),
      receiver: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      callingTo: Joi.string().allow(""),
      callerId: Joi.string().allow(""),
    }).required();
  }

  static statusUpdateInternalV4() {
    return Joi.object({
      body: Validator.StatusUpdateInternalRequest().required(),
    }).required();
  }

  static processManifest() {
    return Joi.object({
      body: Validator.CreateOrderPayload().required(),
    }).required();
  }

  static getRoleBasedActions() {
    return Joi.object({}).required();
  }

  static getShipmentHistory() {
    return Joi.object({
      shipmentId: Joi.number(),
      bagId: Joi.number(),
    }).required();
  }

  static sendSmsNinja() {
    return Joi.object({
      body: Validator.SendSmsPayload().required(),
    }).required();
  }

  static platformManualAssignDPToShipment() {
    return Joi.object({
      body: Validator.ManualAssignDPToShipment().required(),
    }).required();
  }

  static updatePackagingDimensions() {
    return Joi.object({
      body: Validator.CreateOrderPayload().required(),
    }).required();
  }

  static createOrder() {
    return Joi.object({
      body: Validator.CreateOrderAPI().required(),
    }).required();
  }

  static checkOrderStatus() {
    return Joi.object({
      body: Validator.OrderStatus().required(),
    }).required();
  }
}
module.exports = OrderManageValidator;
