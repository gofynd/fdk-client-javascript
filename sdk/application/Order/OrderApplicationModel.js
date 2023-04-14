const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      item_total: Joi.number(),

      current: Joi.number(),

      size: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
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
      quantity: Joi.number(),

      item_id: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_size: Joi.string().allow(""),

      store_id: Joi.number(),

      seller_id: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),
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

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      mop: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      address2: Joi.string().allow(""),
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
      id: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      slug_key: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
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
      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tag: Joi.string().allow(""),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      hsn_code: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      size: Joi.string().allow(""),

      total_units: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      transfer_price: Joi.number(),

      item_name: Joi.string().allow(""),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      delivery_charge: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      transfer_price: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      coupon_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      delivery_date: Joi.string().allow(""),

      item: OrderModel.Item(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      id: Joi.number(),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      prices: OrderModel.Prices(),

      seller_identifier: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      line_number: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number(),

      code: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static Shipments() {
    return Joi.object({
      delivery_date: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      size_info: Joi.any(),

      beneficiary_details: Joi.boolean(),

      order_id: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      total_details: OrderModel.ShipmentTotalDetails(),

      user_info: OrderModel.ShipmentUserInfo(),

      refund_details: Joi.any(),

      total_bags: Joi.number(),

      dp_name: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      order_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      payment: OrderModel.ShipmentPayment(),

      invoice: OrderModel.Invoice(),

      delivery_address: OrderModel.DeliveryAddress(),

      bags: Joi.array().items(OrderModel.Bags()),

      returnable_date: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      need_help_url: Joi.string().allow(""),

      traking_no: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      comment: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      can_break: Joi.any(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      shipments: Joi.array().items(OrderModel.Shipments()),

      total_shipments_in_order: Joi.number(),
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
      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      resend_timer: Joi.number(),

      message: Joi.string().allow(""),

      request_id: Joi.string().allow(""),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      otp_code: Joi.string().allow(""),
    });
  }

  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static BagReasons() {
    return Joi.object({
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      meta: OrderModel.BagReasonMeta(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),
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

      feedback_type: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),

      priority: Joi.number(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
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

      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),
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

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest1()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

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
      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      message: Joi.string().allow("").allow(null),
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
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters1()),
    });
  }

  static EntityReasonData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      data: OrderModel.EntityReasonData1(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ProductsReasonsData1() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasons1() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData1(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters1()),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons1()),

      products: Joi.array().items(OrderModel.ProductsReasons1()),
    });
  }

  static Products1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData1(),

      products: Joi.array().items(OrderModel.Products1()),
    });
  }
}
module.exports = OrderModel;
