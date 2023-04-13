const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      prices: OrderModel.Prices(),

      quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      line_number: Joi.number().required(),

      can_return: Joi.boolean(),

      status: Joi.any().required(),

      parent_promo_bags: Joi.any(),

      gst: OrderModel.GSTDetailsData(),

      group_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow("").required(),

      applied_promos: Joi.any(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      channel: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      id: Joi.string().allow("").required(),

      shipment_created_at: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      bags: Joi.array().items(OrderModel.BagUnit()),
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

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      modified_on: Joi.number(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),
    });
  }

  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),

      item_criteria: OrderModel.ItemCriterias(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      transfer_price: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      pm_price_split: Joi.any().required(),

      amount_paid: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      cod_charges: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      price_effective: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      promotion_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      value_of_good: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      brand: OrderModel.OrderBrandName(),

      item: OrderModel.PlatformItem(),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      identifier: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      gst_details: OrderModel.BagGST(),

      article: OrderModel.OrderBagArticle(),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      order_date: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bsh_id: Joi.number().required(),

      state_id: Joi.number().required(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      forward: Joi.boolean(),

      display_name: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      delivery_partner_id: Joi.number().allow(null),

      created_at: Joi.string().allow("").required(),

      reasons: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      order_status: Joi.any().required(),

      pay_button: Joi.string().allow(""),

      platform_logo: Joi.boolean().required(),

      picked_date: Joi.string().allow(""),

      is_not_fynd_source: Joi.boolean().required(),

      operational_status: Joi.string().allow(""),

      bank_data: Joi.any(),

      forward_order_status: Joi.array().items(Joi.any()),

      status_progress: Joi.number().required(),

      payment_mode: Joi.string().allow(""),

      refund_details: Joi.any(),

      secured_delivery_flag: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      can_break: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      lock_status: Joi.string().allow("").required(),

      company: Joi.any().required(),

      shipment_status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      coupon: Joi.any(),

      user_agent: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      credit_note_id: Joi.string().allow("").required(),

      mid: Joi.string().allow(""),

      tracking_url: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      kirana_store_id: Joi.string().allow(""),

      fyndstore_emp: Joi.any().required(),

      total_bags: Joi.number(),

      order_type: Joi.string().allow("").required(),

      total_items: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      refund_text: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      due_date: Joi.string().allow(""),

      ordering_store: Joi.any().required(),

      is_fynd_coupon: Joi.boolean().required(),

      delivery_details: OrderModel.UserDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      gst_details: OrderModel.GSTDetailsData(),

      replacement_details: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      packaging_type: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      is_invoiced: Joi.boolean().required(),

      user_info: Joi.any(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      invoice: Joi.any().required(),

      go_green: Joi.boolean(),

      items: Joi.array().items(Joi.any()).required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      vertical: Joi.string().allow(""),

      pdf_links: Joi.any(),

      beneficiary_details: Joi.boolean(),

      email_id: Joi.string().allow("").required(),

      current_shipment_status: Joi.any().required(),

      enable_tracking: Joi.boolean(),

      forward_tracking_list: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow("").required(),

      is_fynd_store: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      is_pdsr: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_dp_tracking: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      shipment_quantity: Joi.number(),

      is_packaging_order: Joi.boolean().required(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      custom_meta: Joi.array().items(Joi.any()),

      escalation: Joi.any(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      platform_logo: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      shipment_status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      total_items: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      billing_details: OrderModel.UserDetailsData(),

      delivery_details: OrderModel.UserDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      gst_details: OrderModel.GSTDetailsData(),

      delivery_slot: Joi.any(),

      packaging_type: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      fulfilling_store: OrderModel.FulfillingStore(),

      vertical: Joi.string().allow(""),

      pdf_links: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_dp_tracking: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      shipment_quantity: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      custom_meta: Joi.array().items(Joi.any()),
    });
  }

  static OrderDict() {
    return Joi.object({
      shipment_count: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order: OrderModel.OrderDict(),

      custom_meta: Joi.array().items(Joi.any()),

      success: Joi.boolean().required(),
    });
  }

  static SubLane() {
    return Joi.object({
      index: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static Page() {
    return Joi.object({
      item_total: Joi.number(),

      next_id: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow("").required(),

      size: Joi.number(),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static MetricsCount() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.PlatformTrack()),

      meta: Joi.any(),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance: Joi.array().items(Joi.any()),
    });
  }

  static Success() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderModel.JioCodeUpsertDataSet()),
    });
  }

  static NestedErrorSchemaDataSet() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),
    });
  }

  static BulkInvoicingResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      invoice_status: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      total: Joi.number(),

      store_code: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful: Joi.number(),

      processing: Joi.number(),

      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      failed: Joi.number(),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      store_id: Joi.number(),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      error: Joi.string().allow(""),
    });
  }

  static DateRange() {
    return Joi.object({
      from_date: Joi.string().allow(""),

      to_date: Joi.string().allow(""),
    });
  }

  static ManifestFilter() {
    return Joi.object({
      stores: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),

      store_name: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      filters: OrderModel.ManifestFilter(),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      is_active: Joi.boolean(),
    });
  }

  static ManifestPage() {
    return Joi.object({
      total: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.string().allow(""),

      current: Joi.string().allow(""),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.GeneratedManifestItem()),

      page: OrderModel.ManifestPage(),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      awb: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static ManifestDetailTotalShipmentPricesCount() {
    return Joi.object({
      shipment_count: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static ManifestDetailMeta() {
    return Joi.object({
      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),

      filters: OrderModel.ManifestFilter(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      id: Joi.number(),

      uid: Joi.number(),

      filters: OrderModel.ManifestFilter(),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      manifest_id: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      is_active: Joi.boolean(),

      meta: OrderModel.ManifestDetailMeta(),

      user_id: Joi.number(),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ManifestDetailItem()),

      page: OrderModel.ManifestPage(),

      additional_shipment_count: Joi.number(),

      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),
    });
  }

  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(OrderModel.Reason()),
    });
  }

  static BulkActionPayload() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static BulkActionResponse() {
    return Joi.object({
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      modified_on: Joi.number(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      can_return: Joi.boolean(),

      brand_id: Joi.number().required(),

      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      last_updated_at: Joi.string().allow(""),

      l3_category: Joi.number(),

      l2_category_id: Joi.number(),

      name: Joi.string().allow("").required(),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      is_priority: Joi.boolean(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_invoice: OrderModel.StoreEinvoice(),

      e_waybill: OrderModel.StoreEwaybill(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      timing: Joi.array().items(Joi.any()),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      mall_area: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      order_integration_id: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      location_type: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      code: Joi.string().allow(""),

      vat_no: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      latitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_enabled_for_recon: Joi.boolean(),

      is_active: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      updated_at: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      state: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      weight: Joi.number().required(),

      dp_options: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      external: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      formatted: OrderModel.Formatted(),

      lock_data: OrderModel.LockData(),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      awb_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      order_type: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      return_store_node: Joi.number(),

      packaging_name: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      return_details: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      b2c_buyer_details: Joi.any().allow(null),

      return_awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      weight: OrderModel.Weight(),

      dimensions: OrderModel.Dimensions(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      article_details: OrderModel.ArticleDetails(),

      brand: OrderModel.Brand().required(),

      no_of_bags_order: Joi.number(),

      b_id: Joi.number().required(),

      item: OrderModel.Item().required(),

      dates: OrderModel.Dates(),

      operational_status: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      journey_type: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      restore_coupon: Joi.boolean(),

      applied_promos: Joi.array().items(Joi.any()),

      bag_update_time: Joi.number(),

      ordering_store: OrderModel.Store(),

      reasons: Joi.array().items(Joi.any()),

      gst_details: OrderModel.BagGSTDetails().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article: OrderModel.Article().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      parent_promo_bags: Joi.any(),

      b_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      quantity: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      restore_promos: Joi.any(),

      qc_required: Joi.any(),

      entity_type: Joi.string().allow(""),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Page1() {
    return Joi.object({
      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      current: Joi.number().required(),
    });
  }

  static GetBagsPlatformResponse() {
    return Joi.object({
      items: Joi.array()
        .items(OrderModel.BagDetailsPlatformResponse())
        .required(),

      page: OrderModel.Page1().required(),
    });
  }

  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

      status: Joi.number(),
    });
  }

  static InvalidateShipmentCacheResponse() {
    return Joi.object({
      response: Joi.array().items(
        OrderModel.InvalidateShipmentCacheNestedResponse()
      ),
    });
  }

  static ErrorResponse1() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Entities() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_id: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(OrderModel.AnnouncementResponse()),
    });
  }

  static BaseResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
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
      quantity: Joi.number(),

      line_number: Joi.number(),

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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),
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
      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      final_state: Joi.any(),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsResponse()),
    });
  }

  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesResponse()),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      weight: Joi.any().required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      affiliate_meta: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      amount_paid: Joi.number().required(),

      company_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      avl_qty: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      discount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      order_value: Joi.number().required(),

      user: OrderModel.UserData().required(),

      items: Joi.any().required(),

      cod_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      order_priority: OrderModel.OrderPriority(),

      payment_mode: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      discount: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: OrderModel.OrderUser().required(),

      coupon: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      app: OrderModel.AffiliateAppConfig(),

      inventory: OrderModel.AffiliateInventoryConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_info: OrderModel.OrderInfo().required(),

      order_config: OrderModel.OrderConfig().required(),
    });
  }

  static CreateOrderResponse() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      l2_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      id: Joi.number().required(),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),
    });
  }

  static OrderStatusResult() {
    return Joi.object({
      result: Joi.array().items(OrderModel.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      geo_location: Joi.any(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      state_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      country_code: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static BillingInfo() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow("").required(),

      house_no: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      state_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()).required(),

      tax_exempt: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax().required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()).required(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      location_id: Joi.number().required(),

      priority: Joi.number(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      application_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      dp_configuration: OrderModel.DpConfiguration(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
    });
  }

  static UploadConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),

      manifest_id: Joi.string().allow("").required(),
    });
  }

  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  static ResponseDetail() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),

      success: Joi.boolean(),
    });
  }

  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderStatus() {
    return Joi.object({
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
