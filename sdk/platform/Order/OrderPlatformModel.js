const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cashback: Joi.number(),

      coupon_value: Joi.number(),

      cod_charges: Joi.number(),

      promotion_effective_discount: Joi.number(),

      fynd_credits: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      total_shipment_bags: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_status: OrderModel.ShipmentStatus(),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),

      application: Joi.any(),

      created_at: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      id: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      channel: Joi.any(),

      shipment_created_at: Joi.number().required(),

      company: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      bsh_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.string().allow("").required(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      bag_id: Joi.number(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cod_charges: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      gst_fee: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.number(),

      current_status_id: Joi.number().required(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      bag_id: Joi.number(),
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
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      gst_details: OrderModel.BagGST(),

      item: OrderModel.PlatformItem(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      quantity: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),

      bag_id: Joi.number().required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      billing_details: OrderModel.UserDetailsData(),

      dp_details: OrderModel.DPDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      ordering_store: OrderModel.OrderingStoreDetails(),

      user_agent: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_status: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      shipment_quantity: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      platform_logo: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      journey_type: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      coupon: Joi.any(),

      total_bags: Joi.number(),

      delivery_slot: Joi.any(),

      total_items: Joi.number(),

      payment_mode: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      delivery_details: OrderModel.UserDetailsData(),

      prices: OrderModel.Prices(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      picked_date: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),

      vertical: Joi.string().allow("").allow(null),

      packaging_type: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      mongo_cart_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order: OrderModel.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      index: Joi.number(),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      user_info: OrderModel.UserDataInfo(),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),
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

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),
    });
  }

  static Options() {
    return Joi.object({
      value: Joi.number(),

      text: Joi.string().allow(""),
    });
  }

  static MetricsCount() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),

      text: Joi.string().allow("").required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.PlatformTrack()),

      meta: Joi.any(),
    });
  }

  static AdvanceFilterInfo() {
    return Joi.object({
      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      advance_filter: OrderModel.AdvanceFilterInfo(),

      global_filter: Joi.array().items(OrderModel.FiltersInfo()),
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
      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

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
      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      store_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      size: Joi.number(),

      namespace: Joi.string().allow(""),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      store_id: Joi.number(),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      file_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      processing: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      batch_id: Joi.string().allow(""),

      total: Joi.number(),

      user_name: Joi.string().allow(""),

      company_id: Joi.number(),

      excel_url: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),
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
      display_name: Joi.string().allow(""),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),
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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static StoreAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      version: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),
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
      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      gst_number: Joi.string().allow(""),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static Store() {
    return Joi.object({
      latitude: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      packaging_material_count: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      is_archived: Joi.boolean(),

      parent_store_id: Joi.number(),

      state: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      mall_name: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      phone: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      is_enabled_for_recon: Joi.boolean(),

      address2: Joi.string().allow(""),

      store_active_from: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      webstore_product_url: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      branch_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      item_id: Joi.number().required(),

      l1_category_id: Joi.number(),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      department_id: Joi.number(),

      size: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      l2_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      brand_id: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      dp_name: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      external: Joi.any(),

      weight: Joi.number().required(),

      dp_options: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      packaging_name: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      same_store_available: Joi.boolean().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_details: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      ewaybill_info: Joi.any().allow(null),

      formatted: OrderModel.Formatted(),

      po_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      dp_sort_key: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      return_affiliate_order_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_awb_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      due_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      shipment_volumetric_weight: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      timestamp: OrderModel.ShipmentTimeStamp(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      esp_modified: Joi.any(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      current_operational_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      b_id: Joi.number().required(),

      ordering_store: OrderModel.Store(),

      original_bag_list: Joi.array().items(Joi.number()),

      qc_required: Joi.any(),

      brand: OrderModel.Brand().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      shipment_id: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      entity_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      item: OrderModel.Item().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      journey_type: Joi.string().allow("").required(),

      no_of_bags_order: Joi.number(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      quantity: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      restore_promos: Joi.any(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      prices: OrderModel.Prices().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      applied_promos: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      article: OrderModel.Article().required(),

      bag_update_time: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      tags: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),
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
      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),
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
      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),
    });
  }

  static StoreReassignResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Entities() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),
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
      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: Joi.any(),
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
      address2: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
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
      _id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      store_id: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      unit_price: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      amount_paid: Joi.number().required(),

      transfer_price: Joi.number().required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      hsn_code_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      discount: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),
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
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      fulfillment_id: Joi.number().required(),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipping_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment: Joi.any(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      billing_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipment: OrderModel.ShipmentData(),

      payment_mode: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      order_value: Joi.number().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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
      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostActivityHistory() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.PostHistoryFilters()).required(),

      data: OrderModel.PostHistoryData().required(),
    });
  }

  static PostHistoryDict() {
    return Joi.object({
      activity_history: OrderModel.PostActivityHistory().required(),
    });
  }

  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.PostHistoryDict()),
    });
  }

  static HistoryDict() {
    return Joi.object({
      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()).required(),
    });
  }

  static ErrorDetail() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta().required(),

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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

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
      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      refund_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),
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

      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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
      success: Joi.boolean(),

      message: Joi.array().items(Joi.string().allow("")),
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

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
