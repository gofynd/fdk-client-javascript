const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      area: Joi.string().allow(""),

      address_category: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      transfer_price: Joi.number(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      coupon_effective_discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
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

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),
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
      transfer_price: Joi.number(),

      cashback_applied: Joi.number(),

      price_marked: Joi.number(),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      total_units: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      size: Joi.string().allow(""),

      item_name: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      gst_tag: Joi.string().allow(""),

      discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      hsn_code: Joi.string().allow(""),
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

  static ItemBrand() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),
    });
  }

  static Bags() {
    return Joi.object({
      can_return: Joi.boolean(),

      delivery_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      returnable_date: Joi.string().allow(""),

      id: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      quantity: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      can_cancel: Joi.boolean(),

      item: OrderModel.Item(),

      parent_promo_bags: Joi.any(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.number(),
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
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: OrderModel.TimeStampData(),

      show_promise: Joi.boolean(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      delivery_address: OrderModel.DeliveryAddress(),

      shipment_created_at: Joi.string().allow(""),

      refund_details: Joi.any(),

      awb_no: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      show_track_link: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      need_help_url: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      traking_no: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      order_type: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      user_info: OrderModel.ShipmentUserInfo(),

      total_details: OrderModel.ShipmentTotalDetails(),

      dp_name: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      total_bags: Joi.number(),

      order_id: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      size_info: Joi.any(),

      beneficiary_details: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_return: Joi.boolean(),

      comment: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      invoice: OrderModel.Invoice(),

      can_break: Joi.any(),

      can_cancel: Joi.boolean(),

      show_download_invoice: Joi.boolean(),

      delivery_date: Joi.string().allow(""),
    });
  }

  static UserInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),
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
      seller_id: Joi.number(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      total_shipments_in_order: Joi.number(),

      shipments: Joi.array().items(OrderModel.Shipments()),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserInfo(),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),

      is_selected: Joi.boolean(),

      value: Joi.number(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderList() {
    return Joi.object({
      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),

      filters: OrderModel.OrderFilters(),
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

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

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
      name: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      resend_timer: Joi.number(),

      request_id: Joi.string().allow(""),
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
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      meta: OrderModel.BagReasonMeta(),
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
      show_text_area: Joi.boolean(),

      flow: Joi.string().allow(""),

      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates1()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
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
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
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
      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

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
      message: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number(),
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

  static Products1() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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

  static EntityReasonData1() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons1() {
    return Joi.object({
      data: OrderModel.EntityReasonData1(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData1() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons1()),

      entities: Joi.array().items(OrderModel.EntitiesReasons1()),
    });
  }

  static ShipmentsRequest1() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products1()),

      reasons: OrderModel.ReasonsData1(),

      identifier: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
