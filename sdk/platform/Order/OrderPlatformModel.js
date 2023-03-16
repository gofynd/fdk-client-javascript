const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      l3_category: Joi.number(),

      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      channel: Joi.any(),

      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      fulfilling_centre: Joi.string().allow("").required(),

      application: Joi.any(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_created_at: Joi.number().required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cashback: Joi.number().required(),

      value_of_good: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      refund_credit: Joi.number().required(),

      discount: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cashback_applied: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      size: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      price_marked: Joi.number().required(),

      coupon_value: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow(""),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),
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

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      city: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      notify_customer: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      bag_id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      entity_type: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      article: OrderModel.OrderBagArticle(),

      financial_breakup: OrderModel.FinancialBreakup(),

      display_name: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      prices: OrderModel.Prices(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      item: OrderModel.PlatformItem(),

      quantity: Joi.number(),

      gst_details: OrderModel.BagGST(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      bag_id: Joi.number().required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      reasons: Joi.array().items(Joi.any()),

      updated_at: Joi.string().allow(""),

      bsh_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      bag_id: Joi.number(),

      status: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      id: Joi.number(),

      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      coupon: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      secured_delivery_flag: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      order_created_time: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      pay_button: Joi.string().allow(""),

      total_bags: Joi.number(),

      enable_tracking: Joi.boolean(),

      can_return: Joi.boolean(),

      escalation: Joi.any(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      current_shipment_status: Joi.any().required(),

      is_fynd_store: Joi.string().allow(""),

      forward_order_status: Joi.array().items(Joi.any()),

      go_green: Joi.boolean(),

      status: OrderModel.ShipmentStatusData(),

      order_status: Joi.any().required(),

      order_type: Joi.string().allow("").required(),

      company: Joi.any().required(),

      user_id: Joi.string().allow("").required(),

      is_invoiced: Joi.boolean().required(),

      kirana_store_id: Joi.string().allow(""),

      replacement_details: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      lock_status: Joi.string().allow("").required(),

      billing_details: OrderModel.UserDetailsData(),

      email_id: Joi.string().allow("").required(),

      user_agent: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      user_info: Joi.any(),

      invoice: Joi.any().required(),

      payment_mode: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      tracking_url: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      delivery_status: Joi.array().items(Joi.any()).required(),

      due_date: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      forward_tracking_list: Joi.array().items(Joi.any()),

      forward_shipment_status: Joi.array().items(Joi.any()),

      mid: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      picked_date: Joi.string().allow(""),

      can_break: Joi.string().allow("").required(),

      is_pdsr: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      credit_note_id: Joi.string().allow("").required(),

      fyndstore_emp: Joi.any().required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      refund_text: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      platform_logo: Joi.boolean().required(),

      bank_data: Joi.any(),

      items: Joi.array().items(Joi.any()).required(),

      is_not_fynd_source: Joi.boolean().required(),

      gst_details: OrderModel.GSTDetailsData(),

      refund_details: Joi.any(),

      is_fynd_coupon: Joi.boolean().required(),

      status_progress: Joi.number().required(),

      ordering_store: Joi.any().required(),

      is_packaging_order: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      dp_details: OrderModel.DPDetailsData(),

      total_items: Joi.number(),

      operational_status: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      child_nodes: Joi.array().items(Joi.string().allow("")),

      order: OrderModel.OrderDetailsData(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      coupon: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      custom_meta: Joi.array().items(Joi.any()),

      total_bags: Joi.number(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      status: OrderModel.ShipmentStatusData(),

      delivery_details: OrderModel.UserDetailsData(),

      billing_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      payment_mode: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      shipment_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      picked_date: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      delivery_slot: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      platform_logo: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      shipment_id: Joi.string().allow("").required(),

      dp_details: OrderModel.DPDetailsData(),

      total_items: Joi.number(),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      ordering_store: Joi.number(),

      files: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      comment: Joi.string().allow(""),

      staff: Joi.any(),

      currency_symbol: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: Joi.any(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),
    });
  }

  static SubLane() {
    return Joi.object({
      index: Joi.number(),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),
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
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      total_count: Joi.number(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
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
      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_name: Joi.string().allow(""),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),
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
      data: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
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
      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      size: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      total: Joi.number(),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),
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

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),
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
      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
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

      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
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
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      shipment_volumetric_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      external: Joi.any(),

      return_details: Joi.any(),

      return_store_node: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      order_type: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      same_store_available: Joi.boolean().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      due_date: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      debug_info: OrderModel.DebugInfo(),

      dp_id: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      assign_dp_from_sb: Joi.boolean(),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_options: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      marketplace_store_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      awb_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      ewaybill_info: Joi.any().allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      weight: OrderModel.Weight(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      script_last_ran: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gstin_code: Joi.string().allow("").allow(null),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

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

  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

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
      documents: OrderModel.StoreDocuments(),

      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),

      address_category: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      phone: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      is_archived: Joi.boolean(),

      mall_area: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      company_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      s_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      created_at: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      login_username: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      parent_store_id: Joi.number(),

      vat_no: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
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

  static Attributes() {
    return Joi.object({
      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      last_updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      department_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      l1_category_id: Joi.number(),

      l3_category: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      code: Joi.string().allow(""),

      l2_category_id: Joi.number(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      restore_promos: Joi.any(),

      bag_update_time: Joi.number(),

      entity_type: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article_details: OrderModel.ArticleDetails(),

      article: OrderModel.Article().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      display_name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      journey_type: Joi.string().allow("").required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      original_bag_list: Joi.array().items(Joi.number()),

      restore_coupon: Joi.boolean(),

      prices: OrderModel.Prices().required(),

      applied_promos: Joi.array().items(Joi.any()),

      qc_required: Joi.any(),

      dates: OrderModel.Dates(),

      no_of_bags_order: Joi.number(),

      b_id: Joi.number().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      line_number: Joi.number(),

      shipment_id: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      operational_status: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      current_status: OrderModel.BagStatusHistory().required(),
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

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

      current: Joi.number().required(),

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
      error: Joi.string().allow(""),

      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

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
      mongo_article_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),
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
      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
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
      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),
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
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
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
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      status: Joi.number(),

      final_state: Joi.any(),

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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      updated_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      bag_end_state: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),
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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      item_size: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      discount: Joi.number().required(),

      avl_qty: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      modified_on: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      transfer_price: Joi.number().required(),

      unit_price: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      discount: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      items: Joi.any().required(),

      order_value: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_config: OrderModel.OrderConfig().required(),

      order_info: OrderModel.OrderInfo().required(),
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
      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      l3_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()),
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

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

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
      meta: OrderModel.Meta().required(),

      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      errors: Joi.array().items(Joi.string().allow("")),
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

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

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

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

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
      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      payment_info: OrderModel.PaymentInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_creation_date: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),
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
      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderModel.CreateChannelConfig(),
    });
  }

  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
