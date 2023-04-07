const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      item_total: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      max: Joi.string().allow(""),

      min: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: OrderModel.TimeStampData(),

      show_promise: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      sizes: Joi.number(),

      total_price: Joi.number(),

      pieces: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
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

  static FulfillingStore() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: Joi.any(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),

      sku_code: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      hsn_code: Joi.string().allow(""),

      fynd_credits: Joi.number(),

      gst_tag: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      price_effective: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      item_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      gst_fee: Joi.number(),

      refund_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid_roundoff: Joi.number(),

      total_units: Joi.number(),

      gst_tax_percentage: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      identifiers: OrderModel.Identifiers(),
    });
  }

  static Bags() {
    return Joi.object({
      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      parent_promo_bags: Joi.any(),

      returnable_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      id: Joi.number(),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static Shipments() {
    return Joi.object({
      shipment_created_at: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      delivery_date: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      beneficiary_details: Joi.boolean(),

      promise: OrderModel.Promise(),

      size_info: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      return_meta: Joi.any(),

      can_break: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      show_download_invoice: Joi.boolean(),

      total_details: OrderModel.ShipmentTotalDetails(),

      show_track_link: Joi.boolean(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      order_id: Joi.string().allow(""),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      refund_details: Joi.any(),

      track_url: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      need_help_url: Joi.string().allow(""),

      user_info: OrderModel.ShipmentUserInfo(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      traking_no: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.Bags()),

      total_bags: Joi.number(),

      delivery_address: OrderModel.DeliveryAddress(),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      quantity: Joi.number(),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),
    });
  }

  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),

      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.Shipments(),
    });
  }

  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      phone: Joi.string().allow(""),

      name: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      otp_code: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
    });
  }

  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static BagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.BagReasons()),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.BagReasons()),

      success: Joi.boolean(),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      priority: Joi.number(),

      show_text_area: Joi.boolean(),

      feedback_type: Joi.string().allow(""),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),

      data: OrderModel.ProductsReasonsData(),
    });
  }

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),

      data: Joi.any(),
    });
  }

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatusesBodyResponse()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
