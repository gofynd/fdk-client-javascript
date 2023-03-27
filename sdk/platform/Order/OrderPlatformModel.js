const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      id: Joi.number(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      applied_promos: Joi.any(),

      prices: OrderModel.Prices(),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number().required(),

      group_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      identifier: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      gst: OrderModel.GSTDetailsData(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_created_at: Joi.number().required(),

      application: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      channel: Joi.any(),

      user: OrderModel.UserDataInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      delivery_partner_id: Joi.number().allow(null),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      display_name: Joi.boolean(),

      app_display_name: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      state_id: Joi.number().required(),

      bag_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      forward: Joi.boolean(),

      store_id: Joi.number().required(),

      bsh_id: Joi.number().required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.number().required(),

      modified_on: Joi.number(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      pm_price_split: Joi.any().required(),

      promotion_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      price_effective: Joi.number().required(),

      total_units: Joi.number().required(),

      refund_credit: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      quantity: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      current_status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      prices: OrderModel.Prices(),

      identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      vertical: Joi.string().allow(""),

      replacement_details: Joi.string().allow(""),

      order_status: Joi.any().required(),

      can_break: Joi.string().allow("").required(),

      refund_text: Joi.string().allow(""),

      is_pdsr: Joi.string().allow(""),

      forward_order_status: Joi.array().items(Joi.any()),

      go_green: Joi.boolean(),

      forward_tracking_list: Joi.array().items(Joi.any()),

      status: OrderModel.ShipmentStatusData(),

      fyndstore_emp: Joi.any().required(),

      delivery_details: OrderModel.UserDetailsData(),

      company: Joi.any().required(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      total_items: Joi.number(),

      status_progress: Joi.number().required(),

      shipment_quantity: Joi.number(),

      secured_delivery_flag: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_tracking: Joi.boolean(),

      kirana_store_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow("").required(),

      gst_details: OrderModel.GSTDetailsData(),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      can_cancel: Joi.boolean(),

      items: Joi.array().items(Joi.any()).required(),

      pay_button: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      pdf_links: Joi.any(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      platform_logo: Joi.boolean().required(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      refund_details: Joi.any(),

      invoice: Joi.any().required(),

      enable_dp_tracking: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      operational_status: Joi.string().allow(""),

      user_info: Joi.any(),

      user_id: Joi.string().allow("").required(),

      mid: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      total_bags: Joi.number(),

      can_return: Joi.boolean(),

      is_fynd_store: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      picked_date: Joi.string().allow(""),

      lock_status: Joi.string().allow("").required(),

      is_invoiced: Joi.boolean().required(),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      escalation: Joi.any(),

      email_id: Joi.string().allow("").required(),

      packaging_type: Joi.string().allow(""),

      ordering_store: Joi.any().required(),

      prices: OrderModel.Prices(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      is_packaging_order: Joi.boolean().required(),

      bank_data: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      tracking_url: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      due_date: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      is_not_fynd_source: Joi.boolean().required(),

      current_shipment_status: Joi.any().required(),

      dp_details: OrderModel.DPDetailsData(),

      shipment_status: Joi.string().allow(""),

      is_fynd_coupon: Joi.boolean().required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      vertical: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      total_items: Joi.number(),

      shipment_quantity: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      gst_details: OrderModel.GSTDetailsData(),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      pdf_links: Joi.any(),

      platform_logo: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      enable_dp_tracking: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      total_bags: Joi.number(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      picked_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      payments: OrderModel.ShipmentPayments(),

      dp_details: OrderModel.DPDetailsData(),

      shipment_status: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      shipment_count: Joi.number().required(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      custom_meta: Joi.array().items(Joi.any()),

      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      index: Joi.number(),

      text: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),
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
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      total_order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

      key: Joi.string().allow("").required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),

      results: Joi.array().items(OrderModel.PlatformTrack()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance: Joi.array().items(Joi.any()),
    });
  }

  static Success() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_id: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderModel.JioCodeUpsertDataSet()),
    });
  }

  static NestedErrorSchemaDataSet() {
    return Joi.object({
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static BulkInvoicingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      invoice: Joi.any(),

      label: Joi.any(),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      data: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),
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
      content_type: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      size: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed: Joi.number(),

      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      successful: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      user_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ManifestPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total: Joi.number(),

      size: Joi.string().allow(""),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.string().allow(""),
    });
  }

  static DateRange() {
    return Joi.object({
      to_date: Joi.string().allow(""),

      from_date: Joi.string().allow(""),
    });
  }

  static ManifestFilter() {
    return Joi.object({
      dp_name: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      dp_ids: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),

      sales_channel_name: Joi.string().allow(""),

      stores: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      manifest_id: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      is_active: Joi.boolean(),

      filters: OrderModel.ManifestFilter(),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      page: OrderModel.ManifestPage(),

      items: Joi.array().items(OrderModel.GeneratedManifestItem()),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      invoice_id: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static ManifestDetailTotalShipmentPricesCount() {
    return Joi.object({
      total_price: Joi.number(),

      shipment_count: Joi.number(),
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
      manifest_id: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number(),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      is_active: Joi.boolean(),

      user_id: Joi.number(),

      meta: OrderModel.ManifestDetailMeta(),

      filters: OrderModel.ManifestFilter(),

      uid: Joi.number(),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      page: OrderModel.ManifestPage(),

      items: Joi.array().items(OrderModel.ManifestDetailItem()),

      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),

      additional_shipment_count: Joi.number(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Reason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
    });
  }

  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.Reason()),

      success: Joi.boolean(),
    });
  }

  static BulkActionPayload() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    });
  }

  static BulkActionResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      is_priority: Joi.boolean(),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code_id: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
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
      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      l1_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category_id: Joi.number(),

      l2_category_id: Joi.number(),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      meta: Joi.any(),

      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      logo: Joi.string().allow(""),

      is_virtual_invoice: Joi.boolean().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      debug_info: OrderModel.DebugInfo(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_affiliate_order_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      ewaybill_info: Joi.any().allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      bag_weight: Joi.any(),

      b2c_buyer_details: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_store_node: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      external: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      dp_name: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      po_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      marketplace_store_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      awb_number: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      version: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

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

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      gst_number: Joi.string().allow(""),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      additional_contact_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Store() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      alohomora_user_id: Joi.number(),

      address2: Joi.string().allow(""),

      packaging_material_count: Joi.number(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      mall_area: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      store_active_from: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      parent_store_id: Joi.number(),

      vat_no: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      login_username: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      height: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      shipping: Joi.number(),

      is_default: Joi.boolean(),
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
      is_set: Joi.boolean(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      size: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      _id: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      applied_promos: Joi.array().items(Joi.any()),

      journey_type: Joi.string().allow("").required(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      shipment_id: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      restore_promos: Joi.any(),

      bag_update_time: Joi.number(),

      gst_details: OrderModel.BagGSTDetails().required(),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      seller_identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      order_integration_id: Joi.string().allow("").allow(null),

      item: OrderModel.Item().required(),

      quantity: Joi.number(),

      brand: OrderModel.Brand().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      operational_status: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      qc_required: Joi.any(),

      ordering_store: OrderModel.Store(),

      prices: OrderModel.Prices().required(),

      b_type: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      b_id: Joi.number().required(),

      identifier: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      no_of_bags_order: Joi.number(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      error: Joi.string().allow("").required(),
    });
  }

  static Page1() {
    return Joi.object({
      item_total: Joi.number().required(),

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),
    });
  }

  static GetBagsPlatformResponse() {
    return Joi.object({
      page: OrderModel.Page1().required(),

      items: Joi.array()
        .items(OrderModel.BagDetailsPlatformResponse())
        .required(),
    });
  }

  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      set_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      store_id: Joi.number().required(),
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
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),
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
      to_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

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
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
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

  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
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

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),

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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      final_state: Joi.any(),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),
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
      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      company_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      avl_qty: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      unit_price: Joi.number().required(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      attributes: Joi.any().required(),

      dimension: Joi.any().required(),

      category: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      user: OrderModel.UserData().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      order_priority: OrderModel.OrderPriority(),

      payment_mode: Joi.string().allow("").required(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
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
      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      affiliate_id: Joi.string().allow("").required(),

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

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),
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
      payment_mode: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
    });
  }

  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta().required(),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),
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
      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      mode: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()).required(),

      tax_exempt: Joi.boolean().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax().required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      external_shipment_id: Joi.number(),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      geo_location: Joi.any(),

      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      application_id: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      meta: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      tax_info: OrderModel.TaxInfo(),

      shipping_info: OrderModel.ShippingInfo().required(),

      currency_info: Joi.any().required(),

      billing_info: OrderModel.BillingInfo().required(),

      external_creation_date: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      logo_url: Joi.any(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),
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
      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),
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
      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
