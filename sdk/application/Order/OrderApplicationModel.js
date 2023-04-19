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

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_current: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_passed: Joi.boolean(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      total_price: Joi.number(),

      pieces: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),

      timestamp: OrderModel.TimeStampData(),
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
      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Identifiers() {
    return Joi.object({
      sku_code: Joi.string().allow(""),

      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      coupon_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      item_name: Joi.string().allow(""),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      refund_credit: Joi.number(),

      total_units: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      hsn_code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      amount: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      name: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      id: Joi.number(),

      item: OrderModel.Item(),

      prices: OrderModel.Prices(),

      seller_identifier: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_cancel: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),
    });
  }

  static Shipments() {
    return Joi.object({
      order_type: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      invoice: OrderModel.Invoice(),

      show_download_invoice: Joi.boolean(),

      user_info: OrderModel.ShipmentUserInfo(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      fulfilling_store: OrderModel.FulfillingStore(),

      payment: OrderModel.ShipmentPayment(),

      total_details: OrderModel.ShipmentTotalDetails(),

      returnable_date: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),

      beneficiary_details: Joi.boolean(),

      size_info: Joi.any(),

      shipment_id: Joi.string().allow(""),

      total_bags: Joi.number(),

      comment: Joi.string().allow(""),

      delivery_date: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      refund_details: Joi.any(),

      prices: OrderModel.Prices(),

      traking_no: Joi.string().allow(""),

      can_break: Joi.any(),

      can_cancel: Joi.boolean(),

      delivery_address: OrderModel.DeliveryAddress(),

      need_help_url: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_created_at: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      promise: OrderModel.Promise(),

      can_return: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      awb_no: Joi.string().allow(""),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      level: Joi.string().allow(""),

      strategy: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_id: Joi.number(),

      quantity: Joi.number(),

      store_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      seller_id: Joi.number(),

      item_size: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static OrderSchema() {
    return Joi.object({
      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      user_info: OrderModel.UserInfo(),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      item_total: Joi.number(),
    });
  }

  static OrderList() {
    return Joi.object({
      filters: OrderModel.OrderFilters(),

      items: Joi.array().items(OrderModel.OrderSchema()),

      page: OrderModel.OrderPage(),
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
      success: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_time: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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

      shipment_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      request_id: Joi.string().allow(""),

      resend_timer: Joi.number(),

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

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.BagReasonMeta(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(OrderModel.BagReasons()),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      show_text_area: Joi.boolean(),

      reason_text: Joi.string().allow(""),

      priority: Joi.number(),

      feedback_type: Joi.string().allow(""),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
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
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
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
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest1()),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
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

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      message: Joi.string().allow("").allow(null),
    });
  }

  static Products1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters1()),

      data: OrderModel.ProductsReasonsData1(),
    });
  }

  static EntityReasonData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData1(),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons1()),

      entities: Joi.array().items(OrderModel.EntitiesReasons1()),
    });
  }

  static ProductsDataUpdatesFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates1() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters1()),

      data: Joi.any(),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products1()),

      reasons: OrderModel.ReasonsData1(),

      data_updates: OrderModel.DataUpdates(),
    });
  }
}
module.exports = OrderModel;
