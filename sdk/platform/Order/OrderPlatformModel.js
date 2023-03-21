const Joi = require("joi");

class OrderModel {
  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      l3_category: Joi.number(),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      can_cancel: Joi.boolean(),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      discount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      bag_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      group_id: Joi.string().allow(""),

      identifier: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),

      line_number: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.any(),

      quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_created_at: Joi.number().required(),

      channel: Joi.any(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      application: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),
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
      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      id: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      track_url: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
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

  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      price_marked: Joi.number().required(),

      refund_credit: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      tax_collected_at_source: Joi.number(),

      total_units: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      pm_price_split: Joi.any().required(),

      identifiers: OrderModel.Identifier().required(),

      item_name: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.number(),

      id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      created_on: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      bag_configs: OrderModel.BagConfigs(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      seller_identifier: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      can_cancel: Joi.boolean(),

      display_name: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      can_return: Joi.boolean(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      display_name: Joi.boolean(),

      forward: Joi.boolean(),

      state_id: Joi.number().required(),

      status: Joi.string().allow("").required(),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      delivery_partner_id: Joi.number().allow(null),

      bag_id: Joi.number().required(),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      bag_state_mapper: OrderModel.BagStateMapper().required(),

      reasons: Joi.array().items(Joi.any()),

      bsh_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      store_id: Joi.number().required(),

      app_display_name: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow("").required(),

      source: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      beneficiary_details: Joi.boolean(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      dp_details: OrderModel.DPDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      packaging_type: Joi.string().allow(""),

      total_bags: Joi.number(),

      enable_dp_tracking: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      operational_status: Joi.string().allow(""),

      is_invoiced: Joi.boolean().required(),

      tracking_url: Joi.string().allow("").required(),

      status_progress: Joi.number().required(),

      prices: OrderModel.Prices(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      total_items: Joi.number(),

      mid: Joi.string().allow(""),

      items: Joi.array().items(Joi.any()).required(),

      secured_delivery_flag: Joi.string().allow(""),

      kirana_store_id: Joi.string().allow(""),

      lock_status: Joi.string().allow("").required(),

      shipment_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      user_id: Joi.string().allow("").required(),

      status: OrderModel.ShipmentStatusData(),

      email_id: Joi.string().allow("").required(),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      user_agent: Joi.string().allow(""),

      coupon: Joi.any(),

      order_status: Joi.any().required(),

      journey_type: Joi.string().allow(""),

      company: Joi.any().required(),

      user_info: Joi.any(),

      escalation: Joi.any(),

      forward_shipment_status: Joi.array().items(Joi.any()),

      go_green: Joi.boolean(),

      refund_text: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      current_shipment_status: Joi.any().required(),

      pay_button: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      bank_data: Joi.any(),

      fyndstore_emp: Joi.any().required(),

      is_fynd_store: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      ordering_store: Joi.any().required(),

      replacement_details: Joi.string().allow(""),

      forward_order_status: Joi.array().items(Joi.any()),

      picked_date: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      invoice: Joi.any().required(),

      can_break: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      order_type: Joi.string().allow("").required(),

      delivery_slot: Joi.any(),

      credit_note_id: Joi.string().allow("").required(),

      order: OrderModel.OrderDetailsData(),

      can_cancel: Joi.boolean(),

      enable_tracking: Joi.boolean(),

      refund_details: Joi.any(),

      is_pdsr: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      platform_logo: Joi.boolean().required(),

      is_not_fynd_source: Joi.boolean().required(),

      is_packaging_order: Joi.boolean().required(),

      vertical: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),

      forward_tracking_list: Joi.array().items(Joi.any()),

      is_fynd_coupon: Joi.boolean().required(),

      can_return: Joi.boolean(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      dp_details: OrderModel.DPDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      packaging_type: Joi.string().allow(""),

      total_bags: Joi.number(),

      enable_dp_tracking: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      operational_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      total_items: Joi.number(),

      shipment_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      status: OrderModel.ShipmentStatusData(),

      delivery_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      user_agent: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      priority_text: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      picked_date: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      platform_logo: Joi.string().allow(""),

      vertical: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),
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

      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),
    });
  }

  static SubLane() {
    return Joi.object({
      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      total_items: Joi.number(),

      text: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

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

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),
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
      key: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

      text: Joi.string().allow("").required(),

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
      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),
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
      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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
      label: Joi.any(),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      invoice: Joi.any(),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static FileResponse() {
    return Joi.object({
      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      cdn: OrderModel.URL(),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),

      has_next: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      processing: Joi.number(),

      user_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      successful: Joi.number(),

      file_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),
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
      dp_ids: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      stores: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      sales_channels: Joi.string().allow(""),

      sales_channel_name: Joi.string().allow(""),

      date_range: OrderModel.DateRange(),

      lane: Joi.string().allow(""),
    });
  }

  static GeneratedManifestItem() {
    return Joi.object({
      filters: OrderModel.ManifestFilter(),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      created_by: Joi.string().allow(""),

      is_active: Joi.boolean(),

      manifest_id: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static ManifestPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.string().allow(""),

      total: Joi.number(),

      current: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static GeneratedManifestResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.GeneratedManifestItem()),

      page: OrderModel.ManifestPage(),
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
      filters: OrderModel.ManifestFilter(),

      total_shipment_prices_count: OrderModel.ManifestDetailTotalShipmentPricesCount(),
    });
  }

  static ManifestDetail() {
    return Joi.object({
      filters: OrderModel.ManifestFilter(),

      uid: Joi.number(),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      user_id: Joi.number(),

      id: Joi.number(),

      created_by: Joi.string().allow(""),

      is_active: Joi.boolean(),

      manifest_id: Joi.string().allow(""),

      meta: OrderModel.ManifestDetailMeta(),

      company_id: Joi.number(),
    });
  }

  static ManifestDetailItem() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      item_qty: Joi.number(),

      awb: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),
    });
  }

  static ManifestDetailResponse() {
    return Joi.object({
      manifest_details: Joi.array().items(OrderModel.ManifestDetail()),

      items: Joi.array().items(OrderModel.ManifestDetailItem()),

      page: OrderModel.ManifestPage(),

      additional_shipment_count: Joi.number(),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      shipping: Joi.number(),
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
      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      branch_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      can_cancel: Joi.boolean(),

      l2_category_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      l1_category_id: Joi.number(),

      name: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      size: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      version: Joi.string().allow(""),

      pincode: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      vat_no: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      is_active: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      meta: OrderModel.StoreMeta().required(),

      contact_person: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      mall_area: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      code: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      is_archived: Joi.boolean(),

      brand_id: Joi.any(),

      fulfillment_channel: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      packaging_material_count: Joi.number(),

      store_address_json: OrderModel.StoreAddress(),

      name: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      created_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      size_level_total_qty: Joi.number().allow(null),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      sgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      igst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      einvoice_info: OrderModel.EinvoiceInfo(),

      return_details: Joi.any(),

      same_store_available: Joi.boolean().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_sort_key: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      packaging_name: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      bag_weight: Joi.any(),

      awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      return_store_node: Joi.number(),

      due_date: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      order_type: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),

      dp_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      b2c_buyer_details: Joi.any().allow(null),

      formatted: OrderModel.Formatted(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      shipment_weight: Joi.number(),

      return_affiliate_order_id: Joi.string().allow(""),

      external: Joi.any(),

      return_awb_number: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      article: OrderModel.Article().required(),

      restore_promos: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      prices: OrderModel.Prices().required(),

      applied_promos: Joi.array().items(Joi.any()),

      meta: OrderModel.BagMeta(),

      order_integration_id: Joi.string().allow("").allow(null),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      qc_required: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      journey_type: Joi.string().allow("").required(),

      current_status: OrderModel.BagStatusHistory().required(),

      b_id: Joi.number().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      ordering_store: OrderModel.Store(),

      dates: OrderModel.Dates(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      no_of_bags_order: Joi.number(),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      article_details: OrderModel.ArticleDetails(),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      brand: OrderModel.Brand().required(),

      display_name: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      affiliate_details: OrderModel.AffiliateDetails(),
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

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      has_next: Joi.boolean().required(),
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

      status: Joi.number(),

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),
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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),
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

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
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

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
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
      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      company_id: Joi.number(),

      description: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),
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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      item_size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      avl_qty: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      unit_price: Joi.number().required(),

      company_id: Joi.number().required(),

      item_id: Joi.number().required(),

      quantity: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      store_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),
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
      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      user: OrderModel.UserData().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      discount: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      items: Joi.any().required(),

      delivery_charges: Joi.number().required(),

      payment: Joi.any(),

      shipment: OrderModel.ShipmentData(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
    });
  }

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      id: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static AffiliateConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryConfig(),

      app: OrderModel.AffiliateAppConfig(),
    });
  }

  static Affiliate() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      order_config: OrderModel.OrderConfig().required(),

      affiliate_id: Joi.string().allow("").required(),
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
      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
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
      shipment_id: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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
      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta().required(),

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),
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
      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),
    });
  }

  static OrderStatusResult() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      house_no: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
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
      address_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      tax_exempt: Joi.boolean().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()).required(),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      priority: Joi.number(),

      external_shipment_id: Joi.number(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any().required(),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()).required(),

      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      application_id: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      info: Joi.any(),
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

      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  static UploadConsent() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),

      consent_url: Joi.string().allow("").required(),
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
      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
