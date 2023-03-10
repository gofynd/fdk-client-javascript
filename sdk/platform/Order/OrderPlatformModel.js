const Joi = require("joi");

class OrderModel {
  static UserDataInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),
    });
  }

  static PlatformItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      id: Joi.number(),

      department_id: Joi.number(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),
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
      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
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
      channel: Joi.any(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      payment_methods: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      company: Joi.any(),

      shipment_created_at: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      prices: OrderModel.Prices(),

      application: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      sla: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      po_invoice: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
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
      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      return_store_node: Joi.number(),

      dp_options: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      external: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      assign_dp_from_sb: Joi.boolean(),

      order_type: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_sort_key: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      bag_weight: Joi.any(),

      ewaybill_info: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      po_number: Joi.string().allow(""),

      return_details: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      same_store_available: Joi.boolean().required(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      formatted: OrderModel.Formatted(),

      forward_affiliate_order_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      lock_data: OrderModel.LockData(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel_logo: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      bsh_id: Joi.number(),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      meta: Joi.any().required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      current_status_id: Joi.number().required(),

      store_id: Joi.number(),

      updated_at: Joi.number(),

      state_id: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      phone: Joi.string().allow(""),
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
      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback: Joi.number().required(),

      discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      value_of_good: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_tax_percentage: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      amount_paid: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      total_units: Joi.number().required(),

      refund_credit: Joi.number().required(),

      gst_fee: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      entity_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      gst_details: OrderModel.BagGST(),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),

      parent_promo_bags: Joi.any(),

      item: OrderModel.PlatformItem(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      can_cancel: Joi.boolean(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: OrderModel.FinancialBreakup(),

      display_name: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      invoice_id: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      total_bags: Joi.number(),

      gst_details: OrderModel.GSTDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      prices: OrderModel.Prices(),

      affiliate_details: OrderModel.AffiliateDetails(),

      order: OrderModel.OrderDetailsData(),

      meta: OrderModel.Meta(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_id: Joi.string().allow("").required(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      user_agent: Joi.string().allow(""),

      invoice: OrderModel.EinvoiceInfo(),

      enable_dp_tracking: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      delivery_slot: Joi.any(),

      total_items: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      operational_status: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      bags: Joi.array().items(OrderModel.OrderBags()),

      fulfilling_store: OrderModel.FulfillingStore(),

      coupon: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      fulfilment_priority: Joi.number(),

      picked_date: Joi.string().allow(""),

      shipment_quantity: Joi.number(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderMeta() {
    return Joi.object({
      extra_meta: Joi.any(),

      files: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      currency_symbol: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      mongo_cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      meta: OrderModel.OrderMeta(),

      tax_details: Joi.any(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),
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
      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      total_items: Joi.number(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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
      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),
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
      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

      page: OrderModel.Page(),
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
      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),

      results: Joi.array().items(OrderModel.PlatformTrack()),
    });
  }

  static AdvanceFilterInfo() {
    return Joi.object({
      returned: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      global_filter: Joi.array().items(OrderModel.FiltersInfo()),

      advance_filter: OrderModel.AdvanceFilterInfo(),
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
      s3_key: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderModel.JioCodeUpsertDataSet()),
    });
  }

  static NestedErrorSchemaDataSet() {
    return Joi.object({
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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
      data: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      label: Joi.any(),
    });
  }

  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string().allow(""),
    });
  }

  static FileResponse() {
    return Joi.object({
      size: Joi.number(),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      upload: OrderModel.FileUploadResponse(),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      operation: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      processing: Joi.number(),

      status: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      total: Joi.number(),

      successful: Joi.number(),

      store_id: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),
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
      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

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
      primary_color_hex: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      webstore_product_url: Joi.string().allow("").allow(null),

      attributes: OrderModel.Attributes().required(),

      gender: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      department_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
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

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      ewaybill_portal_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      product_return_config: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),
    });
  }

  static Store() {
    return Joi.object({
      login_username: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      longitude: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      company_id: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      store_address_json: OrderModel.StoreAddress(),

      name: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      alohomora_user_id: Joi.number(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_enabled_for_recon: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      brand_id: Joi.any(),

      updated_at: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      store_active_from: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      code: Joi.string().allow(""),

      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      gst_details: OrderModel.BagGSTDetails().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      prices: OrderModel.Prices().required(),

      brand: OrderModel.Brand().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      parent_promo_bags: Joi.any(),

      meta: OrderModel.BagMeta(),

      item: OrderModel.Item().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      shipment_id: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      ordering_store: OrderModel.Store(),

      b_id: Joi.number().required(),

      dates: OrderModel.Dates(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      quantity: Joi.number(),

      article: OrderModel.Article().required(),

      restore_promos: Joi.any(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      operational_status: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      bag_update_time: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.any(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      display_name: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      b_type: Joi.string().allow(""),
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
      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),
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

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      store_id: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),
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
      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),
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
      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      check_response: Joi.array().items(OrderModel.CheckResponse()),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

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
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
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

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),
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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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
      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

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
      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
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
      avl_qty: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      _id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      unit_price: Joi.number().required(),

      quantity: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      price_marked: Joi.number().required(),

      item_id: Joi.number().required(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      company_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      identifier: Joi.any().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      email: Joi.string().allow("").required(),
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
      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      dimension: Joi.any().required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      to_pincode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      coupon: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow("").required(),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      order_value: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),
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
      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      ticket_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),
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

  static PostHistoryData() {
    return Joi.object({
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static PostActivityHistory() {
    return Joi.object({
      data: OrderModel.PostHistoryData().required(),

      filters: Joi.array().items(OrderModel.PostHistoryFilters()).required(),
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

  static SmsDataPayload() {
    return Joi.object({
      phone_number: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
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
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static Meta1() {
    return Joi.object({
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),

      remarks: Joi.string().allow(""),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),
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
      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      floor_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      meta: Joi.any(),
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
      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),
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
      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      payment_info: OrderModel.PaymentInfo().required(),

      currency_info: Joi.any(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

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
      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

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

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
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

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
