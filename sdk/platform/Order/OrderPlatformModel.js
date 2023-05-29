const Joi = require("joi");

class OrderModel {
  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }
  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      gst_fee: Joi.number(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      gstin_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      is_default_hsn_code: Joi.boolean(),
      value_of_good: Joi.number(),
    });
  }
  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.boolean(),
      display_name: Joi.boolean(),
      forward: Joi.boolean(),
      state_type: Joi.boolean(),
      status: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
    });
  }
  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),
      gst: OrderModel.GST(),
      item: OrderModel.Item(),
      item_quantity: Joi.number().required(),
      ordering_channel: Joi.string().allow("").required(),
      prices: OrderModel.Prices(),
      shipment_id: Joi.string().allow("").required(),
      status: Joi.any().required(),
      total_shipment_bags: Joi.number().required(),
    });
  }
  static DPDetails() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      country: Joi.string().allow(""),
      eway_bill_id: Joi.string().allow(""),
      gst_tag: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      track_url: Joi.string().allow(""),
    });
  }
  static Error() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static ErrorSchemaDataSet() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),
      text: Joi.string().allow("").required(),
      value: Joi.string().allow(""),
    });
  }
  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderModel.FilterInfoOption()),
      text: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static FiltersResponse() {
    return Joi.object({
      channels: Joi.array().items(OrderModel.FiltersInfo()),
      delivery_partners: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean().required(),
      amount_paid: Joi.number().required(),
      brand_calculated_amount: Joi.number().required(),
      cashback: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      coupon_value: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_credits: Joi.number().required(),
      gst_fee: Joi.string().allow("").required(),
      gst_tag: Joi.string().allow("").required(),
      gst_tax_percentage: Joi.number().required(),
      hsn_code: Joi.string().allow("").required(),
      identifiers: Joi.any().required(),
      item_name: Joi.string().allow("").required(),
      pm_price_split: Joi.any().required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      promotion_effective_discount: Joi.number().required(),
      refund_credit: Joi.number().required(),
      size: Joi.string().allow("").required(),
      total_units: Joi.number().required(),
      transfer_price: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      meta: Joi.any().required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
    });
  }
  static GST() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gstin_code: Joi.string().allow("").required(),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static HistoryDict() {
    return Joi.object({
      createdat: Joi.string().allow("").required(),
      l1_detail: Joi.string().allow(""),
      l2_detail: Joi.string().allow(""),
      l3_detail: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      ticket_id: Joi.string().allow(""),
      ticket_url: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }
  static Item() {
    return Joi.object({
      can_cancel: Joi.boolean().required(),
      can_return: Joi.boolean().required(),
      code: Joi.string().allow("").required(),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().required(),
      id: Joi.number().required(),
      image: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number().required(),
      l3_category_name: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
    });
  }
  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      item_id: Joi.string().allow(""),
      jio_code: Joi.string().allow(""),
    });
  }
  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderModel.JioCodeUpsertDataSet()),
    });
  }
  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
      identifier: Joi.string().allow(""),
      success: Joi.boolean(),
      trace_id: Joi.string().allow(""),
    });
  }
  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }
  static ManifestShipmentResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment1()),
      success: Joi.boolean().required(),
    });
  }
  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }
  static MetricsCount() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      options: Joi.array().items(OrderModel.Options()),
      text: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }
  static NestedErrorSchemaDataSet() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static OmsReports() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      report_created_at: Joi.string().allow("").allow(null),
      report_id: Joi.string().allow(""),
      report_name: Joi.string().allow(""),
      report_requested_at: Joi.string().allow("").allow(null),
      report_type: Joi.string().allow(""),
      request_details: Joi.any(),
      s3_key: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),
      return_config: Joi.any(),
      uid: Joi.string().allow(""),
    });
  }
  static OrderBagItem() {
    return Joi.object({
      brand: Joi.string().allow("").required(),
      image: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number().required(),
      name: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      slug_key: Joi.string().allow("").required(),
    });
  }
  static OrderBags() {
    return Joi.object({
      article: OrderModel.OrderBagArticle(),
      bag_configs: OrderModel.BagConfigs(),
      bag_id: Joi.number().required(),
      brand: OrderModel.OrderBrandName(),
      current_status: Joi.string().allow("").required(),
      display_name: Joi.string().allow("").required(),
      entity_type: Joi.string().allow("").required(),
      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),
      gst_details: OrderModel.BagGST(),
      item: OrderModel.OrderBagItem(),
      quantity: Joi.number().required(),
    });
  }
  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),
      company: Joi.string().allow("").required(),
      created_on: Joi.number().required(),
      id: Joi.number().required(),
      logo: Joi.string().allow("").required(),
      modified_on: Joi.number(),
    });
  }
  static OrderDataSet() {
    return Joi.object({
      order_created_time: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      shipments: Joi.array().items(OrderModel.ShipmentDataSet()),
      user_info: OrderModel.UserDataSet(),
    });
  }
  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      cod_charges: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow("").required(),
      order_date: Joi.string().allow(""),
      order_value: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      ordering_channel_logo: Joi.any(),
      source: Joi.string().allow(""),
      tax_details: Joi.any(),
    });
  }
  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      is_validated: Joi.boolean(),
      order_date: Joi.string().allow("").required(),
      shipment_count: Joi.number().required(),
    });
  }
  static OrderErrorSchemaDataSet() {
    return Joi.object({
      reason: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static OrderListingResponse() {
    return Joi.object({
      orders: Joi.array().items(OrderModel.OrderDataSet()),
      success: Joi.boolean().required(),
    });
  }
  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }
  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }
  static PlatformShipmentStatusInternal() {
    return Joi.object({
      force_transition: Joi.boolean(),
      statuses: OrderModel.Statuses(),
      task: Joi.boolean(),
    });
  }
  static Prices() {
    return Joi.object({
      amount_paid: Joi.number().required(),
      amount_paid_roundoff: Joi.number().required(),
      cashback: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_value: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_credits: Joi.number().required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      promotion_effective_discount: Joi.number().required(),
      refund_amount: Joi.number().required(),
      refund_credit: Joi.number().required(),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static ProductDetail() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      quantity: Joi.number(),
    });
  }
  static ResponseDetail() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
    });
  }
  static Shipment() {
    return Joi.object({
      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),
      bags: OrderModel.OrderBags(),
      billing_details: OrderModel.UserDetailsData(),
      delivery_details: OrderModel.UserDetailsData(),
      delivery_slot: Joi.any().required(),
      dp_details: OrderModel.DPDetails(),
      enable_dp_tracking: Joi.string().allow("").required(),
      fulfilling_store: OrderModel.FulfillingStore(),
      gst_details: OrderModel.GST(),
      journey_type: Joi.string().allow("").required(),
      order: OrderModel.OrderDetailsData(),
      packaging_type: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow("").required(),
      payments: OrderModel.ShipmentPayments(),
      picked_date: Joi.string().allow("").required(),
      platform_logo: Joi.string().allow("").required(),
      prices: OrderModel.Prices(),
      priority_text: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
      shipment_quantity: Joi.number().required(),
      status: OrderModel.ShipmentStatusData(),
      total_items: Joi.number(),
      tracking_list: Joi.array().items(OrderModel.TrackingList()),
      user_agent: Joi.string().allow("").required(),
      vertical: Joi.string().allow(""),
    });
  }
  static Shipment1() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      prices: OrderModel.ShipmentPricesDataSet(),
      rtd_done: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
      shipment_status: Joi.string().allow("").required(),
      total_items: Joi.string().allow("").required(),
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
  static ShipmentDataSet() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      coupon_effective_discount: Joi.number(),
      delivery_charge: Joi.number(),
      fynd_credits: Joi.number(),
      price_effective: Joi.number(),
      prices: OrderModel.ShipmentPricesDataInfo(),
      refund_credit: Joi.number(),
      shipment_id: Joi.string().allow("").required(),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      shipment_status: Joi.any().required(),
      tax_collected_at_source: Joi.number(),
      total_bags: Joi.number().required(),
      total_items: Joi.number().required(),
      value_of_good: Joi.number(),
    });
  }
  static ShipmentDetail() {
    return Joi.object({
      shipment_id: OrderModel.ShipmentBody(),
    });
  }
  static ShipmentDetailsResponse() {
    return Joi.object({
      is_validated: Joi.boolean(),
      order: OrderModel.OrderDict(),
      shipments: Joi.array().items(OrderModel.Shipment()),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()),
    });
  }
  static ShipmentInfoResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),
      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),
      bags: OrderModel.OrderBags(),
      bank_data: Joi.any(),
      beneficiary_details: Joi.boolean(),
      billing_details: OrderModel.UserDetailsData(),
      can_break: Joi.string().allow("").required(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      child_nodes: Joi.array().items(Joi.string().allow("")),
      company: Joi.any().required(),
      coupon: Joi.any(),
      credit_note_id: Joi.string().allow("").required(),
      current_shipment_status: Joi.any().required(),
      delivery_details: OrderModel.UserDetailsData(),
      delivery_slot: Joi.any().required(),
      delivery_status: Joi.array().items(Joi.any()).required(),
      dp_details: OrderModel.DPDetails(),
      due_date: Joi.string().allow(""),
      email_id: Joi.string().allow("").required(),
      enable_dp_tracking: Joi.string().allow("").required(),
      enable_tracking: Joi.boolean(),
      escalation: Joi.any(),
      forward_order_status: Joi.array().items(Joi.any()),
      forward_shipment_status: Joi.array().items(Joi.any()),
      forward_tracking_list: Joi.array().items(Joi.any()),
      fulfilling_store: OrderModel.FulfillingStore(),
      fyndstore_emp: Joi.any().required(),
      go_green: Joi.boolean(),
      gst_details: OrderModel.GST(),
      invoice: Joi.any().required(),
      is_fynd_coupon: Joi.boolean().required(),
      is_fynd_store: Joi.string().allow(""),
      is_invoiced: Joi.boolean().required(),
      is_not_fynd_source: Joi.boolean().required(),
      is_packaging_order: Joi.boolean().required(),
      is_pdsr: Joi.string().allow(""),
      items: Joi.array().items(Joi.any()).required(),
      journey_type: Joi.string().allow("").required(),
      kirana_store_id: Joi.string().allow(""),
      lock_status: Joi.string().allow("").required(),
      mid: Joi.string().allow(""),
      order: OrderModel.OrderDetailsData(),
      order_created_time: Joi.string().allow(""),
      order_status: Joi.any().required(),
      order_type: Joi.string().allow("").required(),
      ordering_store: Joi.any().required(),
      packaging_type: Joi.string().allow("").required(),
      pay_button: Joi.string().allow(""),
      payment_mode: Joi.string().allow("").required(),
      payments: OrderModel.ShipmentPayments(),
      picked_date: Joi.string().allow("").required(),
      platform_logo: Joi.boolean().required(),
      prices: OrderModel.Prices(),
      priority_text: Joi.string().allow(""),
      refund_details: Joi.any(),
      refund_text: Joi.string().allow(""),
      replacement_details: Joi.string().allow(""),
      secured_delivery_flag: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
      shipment_quantity: Joi.number().required(),
      status: OrderModel.ShipmentStatusData(),
      status_progress: Joi.number().required(),
      total_items: Joi.number(),
      tracking_list: Joi.array().items(OrderModel.TrackingList()),
      tracking_url: Joi.string().allow("").required(),
      user_agent: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
      user_info: Joi.any(),
      vertical: Joi.string().allow(""),
    });
  }
  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),
      filters: Joi.array().items(OrderModel.FiltersInfo()),
      items: Joi.array().items(OrderModel.ShipmentItem()),
      page: Joi.any(),
    });
  }
  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),
      bags: Joi.array().items(OrderModel.BagUnit()),
      channel: Joi.any(),
      created_at: Joi.string().allow("").required(),
      fulfilling_centre: Joi.string().allow("").required(),
      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),
      id: Joi.string().allow("").required(),
      payment_mode_info: OrderModel.PaymentModeInfo(),
      prices: OrderModel.Prices(),
      shipment_created_at: Joi.number().required(),
      shipment_status: OrderModel.ShipmentStatus(),
      sla: Joi.any(),
      total_bags_count: Joi.number().required(),
      total_shipments_in_order: Joi.number().required(),
      user: OrderModel.UserDataInfo(),
    });
  }
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    });
  }
  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),
      mode: Joi.string().allow("").required(),
      source: Joi.string().allow(""),
    });
  }
  static ShipmentPricesDataInfo() {
    return Joi.object({
      amount_paid: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_value: Joi.string().allow(""),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static ShipmentPricesDataSet() {
    return Joi.object({
      amount_paid: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.string().allow(""),
      fynd_credits: Joi.number(),
      gst_fee: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      refund_credit: Joi.number(),
      tax_collected_at_source: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),
      hex_code: Joi.string().allow("").required(),
      ops_status: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
    });
  }
  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),
      created_at: Joi.string().allow("").allow(null),
      id: Joi.number(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static Statuses() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: OrderModel.ShipmentDetail(),
      status: Joi.string().allow("").required(),
    });
  }
  static SubLane() {
    return Joi.object({
      current_state: Joi.array().items(Joi.string().allow("")),
      index: Joi.number().required(),
      next_state: Joi.array().items(Joi.string().allow("")),
      text: Joi.string().allow("").required(),
      total_shipments: Joi.number().required(),
      value: Joi.string().allow("").required(),
    });
  }
  static Success() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),
      text: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow("").required(),
      time: Joi.string().allow(""),
    });
  }
  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
      gender: Joi.string().allow("").required(),
      is_anonymous_user: Joi.boolean().required(),
      last_name: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
      uid: Joi.number().required(),
    });
  }
  static UserDataSet() {
    return Joi.object({
      email: Joi.string().allow(""),
      gender: Joi.string().allow("").allow(null),
      mobile: Joi.number().required(),
      name: Joi.string().allow("").required(),
    });
  }
  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
