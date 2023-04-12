const Joi = require("joi");

class OrderModel {
  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Bags() {
    return Joi.object({
      current_status: OrderModel.CurrentStatus(),
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
      id: Joi.number(),
      item: OrderModel.Item(),
      prices: OrderModel.Prices(),
    });
  }
  static BagsForReorder() {
    return Joi.object({
      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
      item_id: Joi.number(),
      item_size: Joi.string().allow(""),
      quantity: Joi.number(),
      seller_id: Joi.number(),
      store_id: Joi.number(),
    });
  }
  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),
      strategy: Joi.string().allow(""),
    });
  }
  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static CustomerDetailsByShipmentId() {
    return Joi.object({
      country: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
    });
  }
  static DeliveryAddress() {
    return Joi.object({
      address: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_fee: Joi.string().allow(""),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      hsn_code: Joi.string().allow(""),
      identifiers: OrderModel.Identifiers(),
      item_name: Joi.string().allow(""),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      size: Joi.string().allow(""),
      total_units: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
    });
  }
  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
      updated_date: Joi.string().allow(""),
    });
  }
  static Item() {
    return Joi.object({
      brand: OrderModel.ItemBrand(),
      code: Joi.string().allow(""),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      size: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
    });
  }
  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static OrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema().required(),
    });
  }
  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }
  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters().required(),
      items: Joi.array().items(OrderModel.OrderSchema()).required(),
      page: OrderModel.OrderPage().required(),
    });
  }
  static OrderPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.Shipments()),
      total_shipments_in_order: Joi.number(),
      user_info: OrderModel.UserInfo(),
    });
  }
  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.number(),
    });
  }
  static PosOrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema().required(),
    });
  }
  static Prices() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean(),
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gst_tax_percentage: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static Promise() {
    return Joi.object({
      timestamp: OrderModel.Timestamp(),
    });
  }
  static Reasons() {
    return Joi.object({
      feedback_type: Joi.string().allow(""),
      flow: Joi.string().allow(""),
      priority: Joi.number(),
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }
  static ReqBodyVerifyOTPShipment() {
    return Joi.object({
      otp_code: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
    });
  }
  static ResponseVerifyOTPShipment() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static sendOTPApplicationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      request_id: Joi.string().allow("").required(),
      resend_timer: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.Shipments().required(),
    });
  }
  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.Reasons()).required(),
    });
  }
  static Shipments() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      bags: Joi.array().items(OrderModel.Bags()),
      beneficiary_details: Joi.boolean(),
      breakup_values: Joi.array().items(OrderModel.BreakupValues()),
      can_break: Joi.any(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      comment: Joi.string().allow(""),
      delivery_address: OrderModel.DeliveryAddress(),
      dp_name: Joi.string().allow(""),
      fulfilling_store: OrderModel.FulfillingStore(),
      invoice: OrderModel.Invoice(),
      need_help_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      order_type: Joi.string().allow(""),
      payment: OrderModel.ShipmentPayment(),
      prices: OrderModel.Prices(),
      promise: OrderModel.Promise(),
      shipment_created_at: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      shipment_status: OrderModel.ShipmentStatus(),
      size_info: Joi.any(),
      total_bags: Joi.number(),
      total_details: OrderModel.ShipmentTotalDetails(),
      track_url: Joi.string().allow(""),
      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),
      traking_no: Joi.string().allow(""),
      user_info: OrderModel.ShipmentUserInfo(),
    });
  }
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ShipmentStatusUpdate() {
    return Joi.object({
      message: Joi.array().items(Joi.any()).required(),
      status: Joi.boolean().required(),
    });
  }
  static ShipmentStatusUpdateBody() {
    return Joi.object({
      force_transition: Joi.boolean().required(),
      statuses: Joi.array().items(OrderModel.StatusesBody()).required(),
    });
  }
  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),
      sizes: Joi.number(),
      total_price: Joi.number(),
    });
  }
  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()).required(),
    });
  }
  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static StatusesBody() {
    return Joi.object({
      shipments: Joi.any(),
      status: Joi.string().allow(""),
    });
  }
  static Timestamp() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
    });
  }
  static Track() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
    });
  }
  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow(""),
      time: Joi.string().allow(""),
    });
  }
  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
}
module.exports = OrderModel;
