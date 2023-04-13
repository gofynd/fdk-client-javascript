const Joi = require("joi");

class OrderModel {
  static OrderStatuses() {
    return Joi.object({
      value: Joi.number(),

      is_selected: Joi.boolean(),

      display: Joi.string().allow(""),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_effective_discount: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      transfer_price: Joi.number(),

      value_of_good: Joi.number(),
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

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      longitude: Joi.number(),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      name: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_item_identifier: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_type: Joi.string().allow(""),

      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      l3_category_name: Joi.string().allow(""),

      l1_categories: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      l2_categories: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      id: Joi.number(),
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
      delivery_charge: Joi.number(),

      total_units: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      size: Joi.string().allow(""),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      gst_tax_percentage: Joi.number(),

      item_name: Joi.string().allow(""),

      price_effective: Joi.number(),

      cashback_applied: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      cashback: Joi.number(),

      hsn_code: Joi.string().allow(""),

      promotion_effective_discount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_effective_discount: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      gst_tag: Joi.string().allow(""),

      amount_paid: Joi.number(),

      transfer_price: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static Bags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      delivery_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      item: OrderModel.Item(),

      returnable_date: Joi.string().allow(""),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_return: Joi.boolean(),

      id: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      total_price: Joi.number(),

      sizes: Joi.number(),
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
      company_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      company_id: Joi.number(),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      status: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static BreakupValues() {
    return Joi.object({
      value: Joi.number(),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow(""),

      refund_details: Joi.any(),

      can_return: Joi.boolean(),

      order_type: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      delivery_date: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      shipment_status: OrderModel.ShipmentStatus(),

      delivery_address: OrderModel.DeliveryAddress(),

      beneficiary_details: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      custom_meta: Joi.array().items(Joi.any()),

      total_details: OrderModel.ShipmentTotalDetails(),

      fulfilling_company: OrderModel.FulfillingCompany(),

      fulfilling_store: OrderModel.FulfillingStore(),

      size_info: Joi.any(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      traking_no: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      track_url: Joi.string().allow(""),

      can_break: Joi.any(),

      user_info: OrderModel.ShipmentUserInfo(),

      total_bags: Joi.number(),

      invoice: OrderModel.Invoice(),

      returnable_date: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      need_help_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      show_track_link: Joi.boolean(),
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

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      item_size: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      user_info: OrderModel.UserInfo(),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipments()),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      total_shipments_in_order: Joi.number(),
    });
  }

  static OrderPage() {
    return Joi.object({
      current: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

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

      presigned_type: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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

      country: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

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
      feedback_type: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      flow: Joi.string().allow(""),

      reason_text: Joi.string().allow(""),

      show_text_area: Joi.boolean(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
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

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

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

  static creditNoteParameter() {
    return Joi.object({
      expires_in: Joi.number(),
    });
  }

  static invoiceParameter() {
    return Joi.object({
      document_type: Joi.string().allow(""),

      expires_in: Joi.number(),
    });
  }

  static ResponseGetInvoiceShipment1() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static getInvoiceByShipmentId400Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static getInvoiceByShipmentId500Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow(""),
    });
  }

  static ReqBodyPresignedPOST() {
    return Joi.object({
      event: Joi.string().allow("").required(),

      media_type: Joi.array().items(Joi.string().allow("")).required(),

      expires_in: Joi.number(),
    });
  }

  static ResponsePresignedGETURL() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static ErrorResponsePresignedUrl() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }
}
module.exports = OrderModel;
