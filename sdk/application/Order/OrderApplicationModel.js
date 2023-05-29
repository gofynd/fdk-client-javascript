const Joi = require("joi");

class OrderModel {
  static BagsData() {
    return Joi.object({
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      current_status: OrderModel.CurrentStatus(),
      financial_breakup: Joi.array().items(Joi.any()),
      id: Joi.number(),
      item: OrderModel.Item(),
      prices: OrderModel.Prices(),
      quantity: Joi.number(),
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
  static CustomerDetailsResponse() {
    return Joi.object({
      country: Joi.string().allow(""),
      name: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
    });
  }
  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Filters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.Statuses()),
    });
  }
  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow(""),
      company_id: Joi.number(),
      id: Joi.number(),
      name: Joi.string().allow(""),
    });
  }
  static Item() {
    return Joi.object({
      brand: OrderModel.ItemBrand(),
      code: Joi.string().allow(""),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
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
  static OrderItems() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(Joi.any()),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.ShipmentResponse()),
      total_shipments_in_order: Joi.number(),
      user_info: Joi.any(),
    });
  }
  static OrderList() {
    return Joi.object({
      filters: OrderModel.Filters(),
      items: Joi.array().items(OrderModel.OrderItems()),
      page: OrderModel.Page(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static PaymentInfo() {
    return Joi.object({
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      mop: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static Prices() {
    return Joi.object({
      added_to_fynd_cash: Joi.number(),
      amount_paid: Joi.number(),
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
      pm_price_split: Joi.any(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static PricesBreakup() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static ProductDetail() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }
  static SendOtpToCustomerResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
      success: Joi.boolean(),
    });
  }
  static ShipmentBody() {
    return Joi.object({
      bags: Joi.array().items(Joi.number()),
      data_update: Joi.any(),
      products: Joi.array().items(OrderModel.ProductDetail()),
      reason: Joi.array().items(Joi.number()),
      store_invoice_id: Joi.string().allow(""),
    });
  }
  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.ShipmentResponse(),
    });
  }
  static ShipmentDetail() {
    return Joi.object({
      shipment_id: OrderModel.ShipmentBody(),
    });
  }
  static ShipmentReasonsResponse() {
    return Joi.object({
      feedback_type: Joi.string().allow(""),
      flow: Joi.string().allow(""),
      priority: Joi.number(),
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
      show_text_area: Joi.boolean(),
    });
  }
  static ShipmentResponse() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      bags: Joi.array().items(OrderModel.BagsData()),
      beneficiary_details: Joi.boolean(),
      breakup_values: Joi.array().items(OrderModel.PricesBreakup()),
      can_break: Joi.any(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      comment: Joi.string().allow(""),
      delivery_address: Joi.any(),
      delivery_date: Joi.string().allow(""),
      dp_name: Joi.string().allow(""),
      fulfilling_company: OrderModel.FulfillingCompany(),
      fulfilling_store: OrderModel.FulfillingStore(),
      invoice: Joi.any(),
      need_help_url: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment: OrderModel.PaymentInfo(),
      prices: Joi.any(),
      promise: Joi.any(),
      refund_details: Joi.any(),
      returnable_date: Joi.string().allow(""),
      shipment_created_at: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      shipment_status: Joi.any(),
      show_download_invoice: Joi.boolean(),
      show_track_link: Joi.boolean(),
      size_info: Joi.any(),
      total_bags: Joi.number(),
      total_details: Joi.any(),
      track_url: Joi.string().allow(""),
      tracking_details: Joi.any(),
      traking_no: Joi.string().allow(""),
      user_info: OrderModel.UserInfo(),
    });
  }
  static ShipmentStatusUpdate() {
    return Joi.object({
      message: Joi.array().items(Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentStatusUpdateBody() {
    return Joi.object({
      force_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderModel.Statuses1()),
      task: Joi.boolean(),
    });
  }
  static Statuses() {
    return Joi.object({
      display: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      value: Joi.number(),
    });
  }
  static Statuses1() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: OrderModel.ShipmentDetail(),
      status: Joi.string().allow("").required(),
    });
  }
  static TrackShipmentResponse() {
    return Joi.object({
      results: Joi.array().items(OrderModel.TrackShipmentResults()),
    });
  }
  static TrackShipmentResults() {
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
  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.number(),
      request_id: Joi.string().allow(""),
    });
  }
  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
}
module.exports = OrderModel;
