const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const OrderManageValidator = require("../models/OrderManageValidator");
class OrderManage {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderPayload} arg.body
   * @summary:
   * @description:
   */
  createOrder({ body } = {}) {
    const { error } = OrderManageValidator.createOrder().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/create-order`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvalidateShipmentCachePayload} arg.body
   * @summary:
   * @description: Invalidate shipment Cache
   */
  invalidateShipmentCache({ body } = {}) {
    const { error } = OrderManageValidator.invalidateShipmentCache().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/update-cache`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {StoreReassign} arg.body
   * @summary:
   * @description: Reassign Location
   */
  reassignLocation({ body } = {}) {
    const { error } = OrderManageValidator.reassignLocation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/store/reassign-internal`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateShipmentLockPayload} arg.body
   * @summary:
   * @description: update shipment lock
   */
  updateShipmentLock({ body } = {}) {
    const { error } = OrderManageValidator.updateShipmentLock().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/entity/lock-manager`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.date] -
   * @summary:
   * @description:
   */
  getAnnouncements({ date } = {}) {
    const { error } = OrderManageValidator.getAnnouncements().validate(
      {
        date,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["date"] = date;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/announcements`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @param {string} [arg.name] -
   * @param {string} [arg.address] -
   * @param {string} [arg.addressType] -
   * @param {string} [arg.pincode] -
   * @param {string} [arg.phone] -
   * @param {string} [arg.email] -
   * @param {string} [arg.landmark] -
   * @param {string} arg.addressCategory -
   * @param {string} [arg.city] -
   * @param {string} [arg.state] -
   * @param {string} [arg.country] -
   * @summary:
   * @description:
   */
  updateAddress({
    shipmentId,
    addressCategory,
    name,
    address,
    addressType,
    pincode,
    phone,
    email,
    landmark,
    city,
    state,
    country,
  } = {}) {
    const { error } = OrderManageValidator.updateAddress().validate(
      {
        shipmentId,
        addressCategory,
        name,
        address,
        addressType,
        pincode,
        phone,
        email,
        landmark,
        city,
        state,
        country,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["name"] = name;
    query_params["address"] = address;
    query_params["address_type"] = addressType;
    query_params["pincode"] = pincode;
    query_params["phone"] = phone;
    query_params["email"] = email;
    query_params["landmark"] = landmark;
    query_params["address_category"] = addressCategory;
    query_params["city"] = city;
    query_params["state"] = state;
    query_params["country"] = country;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/delight/update-address`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.caller -
   * @param {string} arg.receiver -
   * @param {string} arg.bagId -
   * @param {string} [arg.callingTo] -
   * @param {string} [arg.callerId] -
   * @summary:
   * @description:
   */
  click2Call({ caller, receiver, bagId, callingTo, callerId } = {}) {
    const { error } = OrderManageValidator.click2Call().validate(
      {
        caller,
        receiver,
        bagId,
        callingTo,
        callerId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["caller"] = caller;
    query_params["receiver"] = receiver;
    query_params["bag_id"] = bagId;
    query_params["calling_to"] = callingTo;
    query_params["caller_id"] = callerId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/click2call`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {StatusUpdateInternalRequest} arg.body
   * @summary:
   * @description: Reassign Location
   */
  statusUpdateInternalV4({ body } = {}) {
    const { error } = OrderManageValidator.statusUpdateInternalV4().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/status-internal`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateOrderPayload} arg.body
   * @summary:
   * @description:
   */
  processManifest({ body } = {}) {
    const { error } = OrderManageValidator.processManifest().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/process-manifest`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary:
   * @description:
   */
  getRoleBasedActions({} = {}) {
    const { error } = OrderManageValidator.getRoleBasedActions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/roles`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.shipmentId] -
   * @param {number} [arg.bagId] -
   * @summary:
   * @description:
   */
  getShipmentHistory({ shipmentId, bagId } = {}) {
    const { error } = OrderManageValidator.getShipmentHistory().validate(
      {
        shipmentId,
        bagId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["shipment_id"] = shipmentId;
    query_params["bag_id"] = bagId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/shipment/history`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendSmsPayload} arg.body
   * @summary:
   * @description:
   */
  sendSmsNinja({ body } = {}) {
    const { error } = OrderManageValidator.sendSmsNinja().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/ninja/send-sms`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderStatus} arg.body
   * @summary:
   * @description:
   */
  checkOrderStatus({ body } = {}) {
    const { error } = OrderManageValidator.checkOrderStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order-manage/v1.0/company/${this.config.companyId}/debug/order_status`,
      query_params,
      body
    );
  }
}

module.exports = OrderManage;
